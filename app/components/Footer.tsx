import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div
                className="flex h-6 w-6 items-center justify-center rounded-md"
                style={{ background: "var(--accent)" }}
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 3h4v10L3 11V3z" fill="white" opacity="0.95" />
                  <path d="M9 3h4v9l-4 1V3z" fill="white" opacity="0.6" />
                  <circle cx="13" cy="3.5" r="1.5" fill="white" opacity="0.9" />
                </svg>
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                CodeFlow<span style={{ color: "var(--accent)" }}> Ebooks</span>
              </span>
            </div>
            <p className="mt-2 max-w-xs text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Ebooks práticos para dominar o Claude Code e multiplicar sua produtividade.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted-2)" }}>
                Produto
              </span>
              <Link href="/" className="transition-colors" style={{ color: "var(--muted)" }}>Catálogo</Link>
              <Link href="/#assinatura" className="transition-colors" style={{ color: "var(--muted)" }}>Planos</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted-2)" }}>
                Legal
              </span>
              <a href="#" className="transition-colors" style={{ color: "var(--muted)" }}>Termos de Uso</a>
              <a href="#" className="transition-colors" style={{ color: "var(--muted)" }}>Privacidade</a>
              <a href="#" className="transition-colors" style={{ color: "var(--muted)" }}>Contato</a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
          <p className="text-xs" style={{ color: "var(--muted-2)" }}>
            &copy; {new Date().getFullYear()} CodeFlow Ebooks. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            <span className="text-xs" style={{ color: "var(--muted-2)" }}>Pagamento seguro via PIX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
