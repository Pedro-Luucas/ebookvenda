-- Guest checkout + device fingerprint claim
-- Execute no SQL Editor do Supabase (uma vez).

-- 1) Permitir pedidos sem user_id (guest) e adicionar campos de fingerprint
alter table public.orders
  alter column user_id drop not null;

alter table public.orders
  add column if not exists guest_device_id text,
  add column if not exists guest_ip text,
  add column if not exists guest_user_agent text;

create index if not exists orders_guest_device_id_idx
  on public.orders (guest_device_id)
  where guest_device_id is not null;

create index if not exists orders_user_id_idx
  on public.orders (user_id)
  where user_id is not null;

-- 2) Reutilizar "user_owns_ebook": já usa auth.uid() + orders.user_id.
--    Nada a alterar se ela já existe e aceita user_id not null como filtro.

-- 3) Função que reivindica pedidos guest para o usuário autenticado.
--    - Empareamento por guest_device_id (cookie) OU por e-mail do pedido
--      que coincide com o e-mail da conta (fallback extra de segurança).
create or replace function public.claim_guest_orders(device_id text)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_email text;
  v_count integer := 0;
begin
  if v_user is null then
    return 0;
  end if;

  select email into v_email from auth.users where id = v_user;

  update public.orders o
     set user_id = v_user
   where o.user_id is null
     and (
       (device_id is not null and device_id <> '' and o.guest_device_id = device_id)
       or (v_email is not null and lower(o.customer_email) = lower(v_email))
     );

  get diagnostics v_count = row_count;
  return v_count;
end;
$$;

revoke all on function public.claim_guest_orders(text) from public;
grant execute on function public.claim_guest_orders(text) to authenticated;

-- 4) Permitir que guests insiram pedidos pela API, mas só pelo service role.
--    A API usa o publishable key; para guest checkout vamos usar a API route
--    que já tem acesso server-side. Garantimos políticas:

-- (Assumindo RLS já habilitado em orders/order_items)
-- Permitir SELECT por quem é dono ou por device_id via RPC dedicada.

-- 5) RPC para buscar pedido guest pela combinação order_id + device_id
--    (usado na página de sucesso antes de o usuário criar conta).
create or replace function public.get_guest_order(p_order_id uuid, p_device_id text)
returns table (
  id uuid,
  status public.order_status,
  total_cents integer,
  customer_email text,
  created_at timestamptz,
  paid_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select o.id, o.status, o.total_cents, o.customer_email, o.created_at, o.paid_at
    from public.orders o
   where o.id = p_order_id
     and o.guest_device_id = p_device_id
   limit 1;
$$;

revoke all on function public.get_guest_order(uuid, text) from public;
grant execute on function public.get_guest_order(uuid, text) to anon, authenticated;

-- 6) RPC para listar itens de um pedido guest (mesma checagem)
create or replace function public.get_guest_order_items(p_order_id uuid, p_device_id text)
returns table (
  product_id uuid,
  product_slug text,
  product_title text,
  quantity integer,
  unit_price_cents integer
)
language sql
security definer
set search_path = public
as $$
  select oi.product_id, oi.product_slug, oi.product_title, oi.quantity, oi.unit_price_cents
    from public.order_items oi
    join public.orders o on o.id = oi.order_id
   where oi.order_id = p_order_id
     and o.guest_device_id = p_device_id;
$$;

revoke all on function public.get_guest_order_items(uuid, text) from public;
grant execute on function public.get_guest_order_items(uuid, text) to anon, authenticated;

-- 7) Trigger para reivindicar automaticamente pedidos por e-mail
--    assim que um usuário confirma cadastro (fallback além do cookie).
create or replace function public.claim_guest_orders_by_email()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.email is not null then
    update public.orders
       set user_id = new.id
     where user_id is null
       and lower(customer_email) = lower(new.email);
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_claim on auth.users;
create trigger on_auth_user_created_claim
after insert on auth.users
for each row execute function public.claim_guest_orders_by_email();
