import { redirect } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/app/lib/supabase/server";
import RegistrationForm from "./RegistrationForm";

export default async function RegistroPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/meus-modulos");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[300px] -left-[200px] w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
        />
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-3 mb-6">
            <Image
              src="/logo.png"
              alt="Claude University"
              width={48}
              height={48}
              priority
              className="rounded-lg"
            />
            <span className="font-black text-2xl" style={{ color: "var(--accent)" }}>
              Claude University
            </span>
          </a>
          <h1 className="text-3xl font-black mb-2" style={{ letterSpacing: "-0.03em" }}>
            Crie sua conta
          </h1>
          <p style={{ color: "var(--text-sec)" }}>
            Libere o acesso aos seus módulos em segundos
          </p>
        </div>

        <div
          className="p-5 rounded-xl border mb-6 flex gap-3 items-start"
          style={{
            background: "var(--accent-light)",
            borderColor: "var(--accent-glow)",
          }}
        >
          <span className="text-lg flex-shrink-0 mt-0.5">⚠️</span>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--accent-hover)" }}>
              Use o mesmo e-mail da Cakto
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-sec)" }}>
              Para liberar seus módulos automaticamente, cadastre-se com o mesmo e-mail que você usou na compra pela Cakto. Se usar um e-mail diferente, não conseguiremos vincular sua compra.
            </p>
          </div>
        </div>

        <div
          className="p-8 rounded-2xl border"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <RegistrationForm />
        </div>

        <p className="text-center text-sm mt-6" style={{ color: "var(--muted)" }}>
          Já tem uma conta?{" "}
          <a href="/login" className="font-semibold transition-colors hover:opacity-80" style={{ color: "var(--accent)" }}>
            Fazer login
          </a>
        </p>
      </div>
    </div>
  );
}
