import Image from "next/image";
import DownloadPDFButton from "./DownloadPDFButton";

const MODULOS = [
  {
    title: "Claude Code — Do Zero ao Primeiro Projeto",
    desc: "Setup, configuração e seu primeiro app funcionando.",
    slug: "modulo-claude-code",
    thumb: "/thumbs/modulo-claude-code.png",
  },
  {
    title: "Claude Code Avançado",
    desc: "Prompts avançados, agentes autônomos e integrações.",
    slug: "modulo-claude-code-avancado",
    thumb: "/thumbs/modulo-claude-code-avancado.png",
  },
  {
    title: "Automações com MCP",
    desc: "Servidores MCP, automações inteligentes e pipelines.",
    slug: "modulo-automacoes-mcp",
    thumb: "/thumbs/modulo-automacoes-mcp.png",
  },
  {
    title: "Criando um SaaS com Claude Code",
    desc: "Do conceito ao deploy de um SaaS completo.",
    slug: "modulo-saas-claude-code",
    thumb: "/thumbs/modulo-saas-claude-code.png",
  },
  {
    title: "Sistema Jurídico com IA",
    desc: "Automação jurídica com Claude Code na prática.",
    slug: "modulo-sistema-juridico",
    thumb: "/thumbs/modulo-sistema-juridico.png",
  },
  {
    title: "Cold Calling & Prospecção",
    desc: "Scripts, frameworks e técnicas de prospecção ativa.",
    slug: "modulo-cold-calling",
    thumb: "/thumbs/modulo-cold-calling.png",
  },
  {
    title: "Vendas Digitais",
    desc: "Funis, copy e estratégias de conversão online.",
    slug: "modulo-vendas-digitais",
    thumb: "/thumbs/modulo-dominando-vendas.png",
  },
  {
    title: "Negociação de Alto Impacto",
    desc: "Método Harvard, psicologia e táticas avançadas.",
    slug: "modulo-negociacao",
    thumb: "/thumbs/modulo-negociacao-alto-impacto.png",
  },
  {
    title: "Persuasão & Vendas",
    desc: "Gatilhos mentais, Cialdini e influência aplicada.",
    slug: "modulo-persuasao",
    thumb: "/thumbs/modulo-persuasao-vendas.png",
  },
  {
    title: "Vendas B2B",
    desc: "ICP, qualificação MEDDIC e pipeline enterprise.",
    slug: "modulo-vendas-b2b",
    thumb: "/thumbs/modulo-vendas-b2b.png",
  },
  {
    title: "Funil de Vendas",
    desc: "Construção e otimização de funis de alta conversão.",
    slug: "modulo-funil-vendas",
    thumb: "/thumbs/modulo-funil-vendas-digital.png",
  },
];

export default function MeusModulosPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black mb-1.5" style={{ letterSpacing: "-0.03em" }}>
          Seus Módulos
        </h1>
        <p className="text-sm" style={{ color: "var(--text-sec)" }}>
          Todos os módulos do seu acesso vitalício. Novos conteúdos são adicionados automaticamente.
        </p>
      </div>

      {/* Status */}
      <div
        className="p-3 md:p-4 rounded-xl border mb-6 flex items-center gap-2.5"
        style={{
          background: "var(--accent-light)",
          borderColor: "var(--accent-glow)",
        }}
      >
        <span className="text-base">✓</span>
        <p className="text-xs md:text-sm font-medium" style={{ color: "var(--accent-hover)" }}>
          Acesso vitalício ativo — {MODULOS.length} módulos disponíveis
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center">
        {MODULOS.map((modulo) => (
          <a
            key={modulo.slug}
            href={`/modulos/${modulo.slug}`}
            className="group rounded-xl border relative overflow-hidden transition-all hover:border-[var(--accent-glow)]"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <DownloadPDFButton slug={modulo.slug} title={modulo.title} />
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={modulo.thumb}
                alt={modulo.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm mb-1 group-hover:text-[var(--accent)] transition-colors leading-tight">
                {modulo.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-sec)" }}>
                {modulo.desc}
              </p>
              <div
                className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Acessar módulo
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Coming soon */}
      <div
        className="mt-8 p-5 rounded-xl border border-dashed text-center"
        style={{ borderColor: "var(--accent-glow)" }}
      >
        <p className="font-bold text-sm mb-0.5" style={{ color: "var(--accent)" }}>
          Novos módulos em breve
        </p>
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          Conteúdos novos são adicionados toda semana e aparecem aqui automaticamente.
        </p>
      </div>
    </>
  );
}
