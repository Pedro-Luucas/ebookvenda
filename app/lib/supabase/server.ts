import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

/**
 * Cria um cliente Supabase para uso em Server Components.
 * @returns {Promise<SupabaseClient>} Cliente Supabase configurado para uso em Server Components.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Chamada a partir de um Server Component: ignorado.
            // Middleware é responsável por renovar a sessão.
          }
        },
      },
    }
  );
}
