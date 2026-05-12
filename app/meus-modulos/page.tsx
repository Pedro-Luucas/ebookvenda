import { redirect } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/app/lib/supabase/server";
import LogoutButton from "./LogoutButton";

const MODULOS = [
  {
    title: "Claude Code — Do Zero ao Primeiro Projeto",
    desc: "Setup, configuração e seu primeiro app funcionando.",
    icon: "🚀",
    slug: "modulo-claude-code",
    thumb: "/thumbs/modulo-claude-code.png",
  },
  {
    title: "Claude Code Avançado",
    desc: "Prompts avançados, agentes autônomos e integrações.",
    icon: "⚡",
    slug: "modulo-claude-code-avancado",
    thumb: "/thumbs/modulo-claude-code-avancado.png",
  },
  {
    title: "Automações com MCP",
    desc: "Servidores MCP, automações inteligentes e pipelines.",
    icon: "🔄",
    slug: "modulo-automacoes-mcp",
    thumb: "/thumbs/modulo-automacoes-mcp.png",
  },
  {
    title: "Criando um SaaS com Claude Code",
    desc: "Do conceito ao deploy de um SaaS completo.",
    icon: "💎",
    slug: "modulo-saas-claude-code",
    thumb: "/thumbs/modulo-saas-claude-code.png",
  },
  {
    title: "Sistema Jurídico com IA",
    desc: "Automação jurídica com Claude Code na prática.",
    icon: "⚖️",
    slug: "modulo-sistema-juridico",
    thumb: "/thumbs/modulo-sistema-juridico.png",
  },
  {
    title: "Cold Calling & Prospecção",
    desc: "Scripts, frameworks e técnicas de prospecção ativa.",
    icon: "📞",
    slug: "modulo-cold-calling",
    thumb: "/thumbs/modulo-cold-calling.png",
  },
  {
    title: "Vendas Digitais",
    desc: "Funis, copy e estratégias de conversão online.",
    icon: "🛒",
    slug: "modulo-vendas-digitais",
    thumb: "/thumbs/modulo-dominando-vendas.png",
  },
  {
    title: "Negociação de Alto Impacto",
    desc: "Método Harvard, psicologia e táticas avançadas.",
    icon: "🤝",
    slug: "modulo-negociacao",
    thumb: "/thumbs/modulo-negociacao-alto-impacto.png",
  },
  {
    title: "Persuasão & Vendas",
    desc: "Gatilhos mentais, Cialdini e influência aplicada.",
    icon: "🧠",
    slug: "modulo-persuasao",
    thumb: "/thumbs/modulo-persuasao-vendas.png",
  },
  {
    title: "Vendas B2B",
    desc: "ICP, qualificação MEDDIC e pipeline enterprise.",
    icon: "🏢",
    slug: "modulo-vendas-b2b",
    thumb: "/thumbs/modulo-vendas-b2b.png",
  },
  {
    title: "Funil de Vendas",
    desc: "Construção e otimização de funis de alta conversão.",
    icon: "📊",
    slug: "modulo-funil-vendas",
    thumb: "/thumbs/modulo-funil-vendas-digital.png",
  },
];

export default async function MeusModulosPage() {
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
    <div className="min-h-screen relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[400px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
        />
      </div>

      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(13, 12, 11, 0.85)",
          backdropFilter: "blur(12px)",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Claude University"
              width={36}
              height={36}
              priority
              className="rounded-md"
            />
            <span className="font-black text-xl" style={{ color: "var(--accent)" }}>
              Claude University
            </span>
          </a>
          <div className="flex items-center gap-4">
            <span className="text-sm hidden sm:block" style={{ color: "var(--text-sec)" }}>
              {profile?.name || user.email}
            </span>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1200px] mx-auto px-6 py-10 relative z-10">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ letterSpacing: "-0.03em" }}>
            Seus Módulos
          </h1>
          <p style={{ color: "var(--text-sec)" }}>
            Todos os módulos do seu acesso vitalício. Novos conteúdos são adicionados automaticamente.
          </p>
        </div>

        {/* Status bar */}
        <div
          className="p-4 rounded-xl border mb-8 flex items-center gap-3"
          style={{
            background: "var(--accent-light)",
            borderColor: "var(--accent-glow)",
          }}
        >
          <span className="text-lg">✓</span>
          <p className="text-sm font-medium" style={{ color: "var(--accent-hover)" }}>
            Acesso vitalício ativo — {MODULOS.length} módulos disponíveis
          </p>
        </div>

        {/* Módulos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULOS.map((modulo) => (
            <a
              key={modulo.slug}
              href={`/modulos/${modulo.slug}`}
              className="group rounded-2xl border card-hover relative overflow-hidden"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={modulo.thumb}
                  alt={modulo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                  {modulo.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-sec)" }}>
                  {modulo.desc}
                </p>
                <div
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Acessar módulo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Coming soon */}
        <div
          className="mt-10 p-6 rounded-2xl border border-dashed text-center"
          style={{ borderColor: "var(--accent-glow)" }}
        >
          <p className="font-bold mb-1" style={{ color: "var(--accent)" }}>
            Novos módulos em breve
          </p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Conteúdos novos são adicionados toda semana e aparecem aqui automaticamente.
          </p>
        </div>
      </main>
    </div>
  );
}
