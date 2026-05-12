import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/meus-ebooks");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Entrar</h1>
          <p className="text-zinc-400">
            Acesse sua conta para ver seus ebooks
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
