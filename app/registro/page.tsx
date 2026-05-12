import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import RegistrationForm from "./RegistrationForm";

export default async function RegistroPage() {
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
          <h1 className="text-3xl font-bold text-white mb-2">
            Crie sua conta
          </h1>
          <p className="text-zinc-400">
            Use o mesmo e-mail que você utilizou na compra para liberar seu
            acesso.
          </p>
        </div>
        <RegistrationForm />
        <p className="text-center text-zinc-500 text-sm mt-6">
          Já tem uma conta?{" "}
          <a href="/login" className="text-emerald-400 hover:text-emerald-300">
            Fazer login
          </a>
        </p>
      </div>
    </div>
  );
}
