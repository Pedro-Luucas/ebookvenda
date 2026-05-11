import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

/**
 * Cliente Supabase sem cookies/sessão.
 *
 * Usado em contextos onde não há requisição HTTP (ex.: `generateStaticParams`,
 * scripts de build) ou para leituras públicas que não dependem do usuário.
 * Funciona apenas para dados acessíveis pela policy `anon` (ex.: produtos ativos).
 */
export function createStaticClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Variáveis NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY são obrigatórias."
    );
  }

  return createClient<Database>(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
