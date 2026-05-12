import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import ModuloViewer from "./ModuloViewer";

const MODULOS: Record<string, string> = {
  "modulo-claude-code": "Claude Code — Do Zero ao Primeiro Projeto",
  "modulo-claude-code-avancado": "Claude Code Avançado",
  "modulo-automacoes-mcp": "Automações com MCP",
  "modulo-saas-claude-code": "Criando um SaaS com Claude Code",
  "modulo-sistema-juridico": "Sistema Jurídico com IA",
  "modulo-cold-calling": "Cold Calling & Prospecção",
  "modulo-vendas-digitais": "Vendas Digitais",
  "modulo-negociacao": "Negociação de Alto Impacto",
  "modulo-persuasao": "Persuasão & Vendas",
  "modulo-vendas-b2b": "Vendas B2B",
  "modulo-funil-vendas": "Funil de Vendas",
  "modulo-agendamento-claude-code": "Agendamento com Claude Code",
  "modulo-planilhas-claude-code": "Planilhas com Claude Code",
};

export default async function ModuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { slug } = await params;
  const title = MODULOS[slug];

  if (!title) {
    redirect("/meus-modulos");
  }

  return <ModuloViewer slug={slug} title={title} />;
}
