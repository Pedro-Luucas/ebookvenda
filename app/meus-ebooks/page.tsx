import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import LogoutButton from "./LogoutButton";

export default async function MeusEbooksPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Meus Ebooks</h1>
            <p className="text-zinc-400 mt-1">
              Olá, {profile?.name || user.email}
            </p>
          </div>
          <LogoutButton />
        </div>

        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">📚</div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Área em construção
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Seus ebooks estarão disponíveis aqui em breve. Você receberá uma
            notificação quando o conteúdo estiver pronto.
          </p>
        </div>

        <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
          <p className="text-emerald-400 text-sm">
            ✓ Sua conta está ativa e com acesso liberado.
          </p>
        </div>
      </div>
    </div>
  );
}
