import type { Product } from "@/app/types/product";

/**
 * Catálogo estático — fonte de verdade para RENDERIZAÇÃO de landing pages.
 *
 * - Usado como fallback quando o Supabase está inacessível (rede, DNS, etc.)
 * - Quando o Supabase está online, `getProductBySlug` devolve o row do banco
 *   (que sobrescreve esses dados — inclusive o `id` real com UUID do DB).
 * - Os `id` aqui são placeholders determinísticos por slug. Só são usados no
 *   carrinho/checkout se o banco estiver offline — nesse caso o checkout
 *   falha gracefully (produto não encontrado) e pede retry.
 */
export const STATIC_CATALOG: readonly Product[] = [
  // ── Vendas ──────────────────────────────────────────────────────────────
  {
    id: "00000000-0000-0000-0000-00000000c01d",
    slug: "cold-calling",
    title: "Cold Calling que Funciona — Guia Completo 2026",
    description:
      "Do script palavra por palavra à cadência de 21 dias: como transformar 60 dials em 8 reuniões reais.",
    longDescription:
      "12 capítulos práticos de cold calling consultivo — mentalidade, pesquisa pré-call, os 6 blocos do script, os primeiros 10 segundos, qualificação em 5 minutos, as 7 objeções clássicas com resposta pronta, voz e energia, cadência multicanal, perfis de decisor (CEO/CFO/CTO/RH), 10 métricas de performance e um plano de 7 dias.",
    price: 4790,
    coverImage: "",
    author: "Vendas que Funcionam",
    pages: 160,
    format: "PDF · ePub",
    category: "Vendas",
    ebookFile: "ebook-cold-calling.html",
  },
  {
    id: "00000000-0000-0000-0000-00000000d0d0",
    slug: "dominando-vendas",
    title: "Dominando Vendas — O Guia Completo 2026",
    description:
      "O sistema completo de vendas digitais: psicologia, copy, SPIN, fechamento, tráfego, LTV e um plano de 90 dias.",
    longDescription:
      "Um playbook operacional dividido em 10 capítulos: fundamentos imutáveis, proposta de valor, copywriting, o processo em 7 estágios, SPIN aplicado ao digital, as 8 objeções com antídoto, 10 técnicas de fechamento, tráfego que não queima caixa, fidelização/LTV, 12 métricas e plano de 90 dias.",
    price: 6790,
    coverImage: "",
    author: "Vendas que Funcionam",
    pages: 210,
    format: "PDF · ePub",
    category: "Vendas",
    ebookFile: "ebook-dominando-vendas.html",
  },
  {
    id: "00000000-0000-0000-0000-00000000f051",
    slug: "funil-vendas-digital",
    title: "Funil de Vendas Digital — Do Visitante ao Upsell",
    description:
      "Construa seu primeiro funil em 30 dias: tráfego, isca, email, VSL, upsell e métricas — sem refém de plataforma.",
    longDescription:
      "12 capítulos cobrindo AIDA moderno, avatar em 5 dimensões, topo do funil (Meta/Google/SEO/TikTok), isca digital, sequência de email de 7, página de vendas com 12 elementos, Perfect Webinar, PLF, perpétuo, upsell/downsell/order bump, 10 métricas e plano de 30 dias.",
    price: 5490,
    coverImage: "",
    author: "Vendas que Funcionam",
    pages: 185,
    format: "PDF · ePub",
    category: "Vendas",
    ebookFile: "ebook-funil-vendas-digital.html",
  },
  {
    id: "00000000-0000-0000-0000-00000000a108",
    slug: "negociacao-alto-impacto",
    title: "Negociação de Alto Impacto",
    description:
      "Harvard + FBI + Kahneman aplicados a imóvel, carro, salário e WhatsApp. O repertório que paga a própria compra na primeira negociação.",
    longDescription:
      "10 capítulos: psicologia da decisão (Sistema 1/2, âncora, reciprocidade, aversão à perda), Método Harvard (BATNA, WATNA, ZOPA), 8 técnicas do FBI (Chris Voss), ficha de preparação em 7 campos, linguagem corporal, ancoragem/concessões, 12 táticas sujas e contramedidas, fechamento, 6 playbooks B2C e plano de 21 dias.",
    price: 5290,
    coverImage: "",
    author: "Vendas que Funcionam",
    pages: 220,
    format: "PDF · ePub",
    category: "Vendas",
    ebookFile: "ebook-negociacao-alto-impacto.html",
  },
  {
    id: "00000000-0000-0000-0000-00000000e75a",
    slug: "persuasao-vendas",
    title: "Persuasão & Vendas — O Guia Definitivo",
    description:
      "Cialdini, Kahneman e Chris Voss aplicados sem manipulação: convença por clareza de valor, não por truque.",
    longDescription:
      "12 capítulos: a ciência da persuasão, 10 gatilhos mentais, storytelling com base neurocientífica (Uri Hasson), rapport e conexão, comunicação de alto impacto, objeções como pedido de informação, negociação ganha-ganha, 10 técnicas de fechamento, persuasão digital, psicologia do preço, mentalidade do vendedor de elite e plano de 30 dias.",
    price: 5990,
    coverImage: "",
    author: "Vendas que Funcionam",
    pages: 240,
    format: "PDF · ePub",
    category: "Vendas",
    ebookFile: "ebook-persuasao-vendas.html",
  },
  {
    id: "00000000-0000-0000-0000-00000000b2b7",
    slug: "vendas-b2b",
    title: "Vendas B2B — Estratégias para Grandes Negócios",
    description:
      "SaaS/enterprise na vida real: ciclo de 180 dias, comitê de 8 pessoas, procurement pedindo desconto no último dia. Aqui está o playbook.",
    longDescription:
      "12 capítulos: ecossistema B2B (ARR, MRR, CAC, LTV, NRR), ICP/MEDDIC, prospecção multicanal, discovery em 5 blocos, demo consultiva, proposta com 12 elementos (Good/Better/Best), mapa de poder (8 campos/pessoa), ciclo longo e MAP co-criado, negociação contra procurement, fechamento B2B, account management/Land&Expand e plano de 90 dias.",
    price: 7490,
    coverImage: "",
    author: "Vendas que Funcionam",
    pages: 275,
    format: "PDF · ePub",
    category: "Vendas",
    ebookFile: "ebook-vendas-b2b.html",
  },

  // ── Claude Code ─────────────────────────────────────────────────────────
  {
    id: "00000000-0000-0000-0000-0000cc000001",
    slug: "claude-code-guia-completo",
    title: "Claude Code — Guia Completo para Desenvolvedores",
    description:
      "Do zero ao fluxo profissional: como usar o Claude Code CLI para acelerar desenvolvimento, revisar código e automatizar tarefas repetitivas.",
    longDescription:
      "Guia prático em 10 capítulos: instalação e configuração, primeiros comandos, fluxo de trabalho com projetos reais, revisão de código assistida por IA, geração de testes, refatoração segura, integração com Git, hooks e automações, casos de uso avançados e boas práticas de segurança.",
    price: 4990,
    coverImage: "",
    author: "IA na Prática",
    pages: 145,
    format: "PDF · ePub",
    category: "Claude Code",
    ebookFile: "ebook-claude-code-guia-completo.html",
  },
  {
    id: "00000000-0000-0000-0000-0000cc000002",
    slug: "claude-code-prompts-avancados",
    title: "Prompts Avançados com Claude Code",
    description:
      "As técnicas de prompting que transformam o Claude Code em um co-desenvolvedor de elite: contexto, chain-of-thought, few-shot e muito mais.",
    longDescription:
      "8 capítulos focados em engenharia de prompts para desenvolvimento: anatomia de um bom prompt técnico, técnicas de chain-of-thought, few-shot com exemplos de código, prompts para debugging, prompts para arquitetura de sistemas, prompts para documentação, automação de fluxos e biblioteca de prompts prontos.",
    price: 3990,
    coverImage: "",
    author: "IA na Prática",
    pages: 120,
    format: "PDF · ePub",
    category: "Claude Code",
    ebookFile: "ebook-claude-code-prompts-avancados.html",
  },
  {
    id: "00000000-0000-0000-0000-0000cc000003",
    slug: "claude-code-automacao-workflows",
    title: "Automação de Workflows com Claude Code",
    description:
      "Construa pipelines de desenvolvimento automatizados: CI/CD assistido por IA, geração de código em lote e integração com suas ferramentas favoritas.",
    longDescription:
      "9 capítulos sobre automação: hooks do Claude Code, scripts de automação, integração com GitHub Actions, geração em lote de componentes, automação de testes, pipelines de revisão de código, integração com Slack/Notion, monitoramento de qualidade e casos de uso reais de times de engenharia.",
    price: 5490,
    coverImage: "",
    author: "IA na Prática",
    pages: 165,
    format: "PDF · ePub",
    category: "Claude Code",
    ebookFile: "ebook-claude-code-automacao-workflows.html",
  },
  {
    id: "00000000-0000-0000-0000-0000cc000004",
    slug: "claude-code-agentes-ia",
    title: "Construindo Agentes de IA com Claude",
    description:
      "Do conceito ao deploy: como criar agentes autônomos com a API da Anthropic, ferramentas customizadas e fluxos multi-step.",
    longDescription:
      "11 capítulos sobre desenvolvimento de agentes: fundamentos de agentes de IA, API da Anthropic, tool use e function calling, memória e contexto, agentes multi-step, orquestração de agentes, tratamento de erros, segurança em agentes, deploy e monitoramento, casos de uso empresariais e o futuro dos agentes.",
    price: 6490,
    coverImage: "",
    author: "IA na Prática",
    pages: 195,
    format: "PDF · ePub",
    category: "Claude Code",
    ebookFile: "ebook-claude-code-agentes-ia.html",
  },

  // ── Facebook Ads ─────────────────────────────────────────────────────────
  {
    id: "00000000-0000-0000-0000-0000fb000001",
    slug: "facebook-ads-do-zero",
    title: "Facebook Ads do Zero ao Lucro",
    description:
      "O guia definitivo para criar campanhas lucrativas no Meta: estrutura de conta, públicos, criativos e otimização sem desperdiçar verba.",
    longDescription:
      "12 capítulos: estrutura de conta e campanhas, pixel e eventos de conversão, públicos frios/mornos/quentes, lookalike audiences, criativos que convertem, copywriting para anúncios, testes A/B sistemáticos, orçamento e lances, análise de métricas (ROAS, CPA, CTR), escalonamento, retargeting e plano de 30 dias.",
    price: 5490,
    coverImage: "",
    author: "Tráfego que Converte",
    pages: 190,
    format: "PDF · ePub",
    category: "Facebook Ads",
    ebookFile: "ebook-facebook-ads-do-zero.html",
  },
  {
    id: "00000000-0000-0000-0000-0000fb000002",
    slug: "criativos-facebook-ads",
    title: "Criativos que Vendem no Facebook Ads",
    description:
      "A fórmula dos anúncios que param o scroll: estrutura visual, copy de alto impacto, vídeos curtos e carrosséis que convertem.",
    longDescription:
      "10 capítulos sobre criação de anúncios: psicologia do scroll, os 3 segundos que decidem tudo, estrutura do criativo vencedor, copy para feed e stories, vídeos de 15-30 segundos, carrosséis de produto, UGC e prova social, ferramentas de criação, testes de criativos e biblioteca de formatos.",
    price: 4490,
    coverImage: "",
    author: "Tráfego que Converte",
    pages: 155,
    format: "PDF · ePub",
    category: "Facebook Ads",
    ebookFile: "ebook-criativos-facebook-ads.html",
  },

  // ── Marketing Digital ────────────────────────────────────────────────────
  {
    id: "00000000-0000-0000-0000-0000mk000001",
    slug: "copywriting-digital",
    title: "Copywriting Digital — Palavras que Vendem",
    description:
      "Escreva textos que convertem em qualquer canal: landing pages, emails, anúncios, WhatsApp e redes sociais.",
    longDescription:
      "11 capítulos de copywriting aplicado: fundamentos da persuasão escrita, a fórmula AIDA e suas variações, headlines que param o scroll, storytelling de vendas, copy para landing pages, sequências de email, anúncios pagos, WhatsApp Business, redes sociais, revisão e testes e 50 templates prontos.",
    price: 4990,
    coverImage: "",
    author: "Tráfego que Converte",
    pages: 175,
    format: "PDF · ePub",
    category: "Marketing Digital",
    ebookFile: "ebook-copywriting-digital.html",
  },
  {
    id: "00000000-0000-0000-0000-0000mk000002",
    slug: "email-marketing-avancado",
    title: "Email Marketing Avançado — Da Lista ao Lucro",
    description:
      "Construa uma lista engajada e monetize com sequências automáticas, broadcasts e estratégias de segmentação que aumentam o LTV.",
    longDescription:
      "10 capítulos: construção de lista, lead magnets de alta conversão, plataformas de email, sequência de boas-vindas, automações de nutrição, broadcasts de vendas, segmentação avançada, deliverability e reputação, métricas (open rate, CTR, conversão) e plano de monetização em 60 dias.",
    price: 4790,
    coverImage: "",
    author: "Tráfego que Converte",
    pages: 168,
    format: "PDF · ePub",
    category: "Marketing Digital",
    ebookFile: "ebook-email-marketing-avancado.html",
  },
] as const;

export function getStaticCatalog(): Product[] {
  return STATIC_CATALOG.map((p) => ({ ...p }));
}

export function getStaticProductBySlug(slug: string): Product | undefined {
  const row = STATIC_CATALOG.find((p) => p.slug === slug);
  return row ? { ...row } : undefined;
}
