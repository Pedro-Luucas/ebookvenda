import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/app/lib/supabase/server";
import { readFile } from "fs/promises";
import path from "path";

const SLUG_TO_FILE: Record<string, string> = {
  "modulo-claude-code": "modulos/claude/modulo-claude-code.html",
  "modulo-claude-code-avancado": "modulos/claude/modulo-claude-code-avancado.html",
  "modulo-automacoes-mcp": "modulos/claude/modulo-automacoes-mcp.html",
  "modulo-saas-claude-code": "modulos/claude/modulo-saas-claude-code.html",
  "modulo-sistema-juridico": "modulos/claude/modulo-sistema-juridico.html",
  "modulo-cold-calling": "modulos/modulo-cold-calling.html",
  "modulo-vendas-digitais": "modulos/modulo-dominando-vendas.html",
  "modulo-negociacao": "modulos/modulo-negociacao-alto-impacto.html",
  "modulo-persuasao": "modulos/modulo-persuasao-vendas.html",
  "modulo-vendas-b2b": "modulos/modulo-vendas-b2b.html",
  "modulo-funil-vendas": "modulos/modulo-funil-vendas-digital.html",
  "modulo-agendamento-claude-code": "modulos/claude/modulo-agendamento-claude-code.html",
  "modulo-planilhas-claude-code": "modulos/claude/modulo-planilhas-claude-code.html",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { slug } = await params;
  const filePath = SLUG_TO_FILE[slug];

  if (!filePath) {
    return NextResponse.json({ error: "Módulo não encontrado" }, { status: 404 });
  }

  const fullPath = path.join(process.cwd(), filePath);

  try {
    let html = await readFile(fullPath, "utf-8");

    const darkModeCSS = `<style id="dark-mode-override">
      html, body { background: #1a1a1a !important; color: #e0e0e0 !important; }
      .page { background: #242424 !important; box-shadow: 0 4px 24px rgba(0,0,0,0.4) !important; }
      h1, h2, h3, h4, h5, h6 { color: #f0f0f0 !important; }
      h2 { color: #E8956D !important; }
      p, li, td, th, span, div { color: #d4d4d4 !important; }
      strong, b { color: #f5f5f5 !important; }
      .quote-box { background: #2a2018 !important; }
      .quote-box p { color: #E8956D !important; }
      .code-box { background: #0d0d0d !important; }
      .tip-box, .info-box, .warning-box, .example-box, .highlight-box, .key-point {
        background: #2a2520 !important;
        border-color: #D97757 !important;
      }
      .tip-box *, .info-box *, .warning-box *, .example-box *, .highlight-box *, .key-point * {
        color: #d4d4d4 !important;
      }
      table { border-color: #444 !important; }
      th { background: #2a2018 !important; color: #E8956D !important; }
      td { background: #242424 !important; border-color: #444 !important; }
      a { color: #E8956D !important; }
      .opening { color: #ccc !important; border-color: #D97757 !important; }
      .label, .chapter-label { color: #E8956D !important; }
      img { opacity: 0.9; }
      @media print { html, body { background: white !important; color: #000 !important; }
        .page { background: white !important; box-shadow: none !important; }
        h1,h2,h3,h4,h5,h6,p,li,td,th,span,div,strong,b { color: initial !important; }
      }
    </style>`;

    html = html.replace("</head>", `${darkModeCSS}\n</head>`);

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch {
    return NextResponse.json({ error: "Arquivo não encontrado" }, { status: 404 });
  }
}
