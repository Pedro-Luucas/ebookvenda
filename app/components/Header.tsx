import Link from "next/link";
import { createClient } from "@/app/lib/supabase/server";
import CartButton from "./CartButton";
import UserMenu from "./UserMenu";
import ThemeToggle from "./ThemeToggle";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let fullName = "";
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", user.id)
      .maybeSingle();
    fullName = profile?.full_name ?? "";
  }

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{
        background: "color-mix(in srgb, var(--background) 85%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-lg"
            style={{ background: "var(--accent)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 3h4v10L3 11V3z" fill="white" opacity="0.95" />
              <path d="M9 3h4v9l-4 1V3z" fill="white" opacity="0.6" />
              <circle cx="13" cy="3.5" r="1.5" fill="white" opacity="0.9" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
            CodeFlow<span style={{ color: "var(--accent)" }}> Ebooks</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-5 sm:flex">
          {[
            { href: "/", label: "Catálogo" },
            { href: "/#assinatura", label: "Planos" },
            ...(user
              ? [
                  { href: "/conta/ebooks", label: "Meus Ebooks" },
                  { href: "/conta/pedidos", label: "Pedidos" },
                ]
              : []),
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors hover:opacity-100"
              style={{ color: "var(--muted)" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CartButton />
          {user ? (
            <UserMenu email={user.email ?? ""} fullName={fullName} />
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="hidden text-sm transition-colors sm:inline"
                style={{ color: "var(--muted)" }}
              >
                Entrar
              </Link>
              <Link
                href="/cadastro"
                className="rounded-lg px-3.5 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--accent)" }}
              >
                Começar
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
