"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function UserMenu({ email, fullName }: { email: string; fullName: string }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const initials = (fullName || email)
    .split(/\s+/)
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-85"
        style={{ background: "var(--accent)" }}
        aria-label="Menu do usuário"
      >
        {initials || "U"}
      </button>

      {open && (
        <div
          className="absolute right-0 top-10 w-56 overflow-hidden rounded-xl shadow-lg"
          style={{ background: "var(--background)", border: "1px solid var(--border)" }}
        >
          <div className="px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
            <p className="truncate text-xs font-semibold" style={{ color: "var(--foreground)" }}>
              {fullName || "Minha conta"}
            </p>
            <p className="truncate text-xs" style={{ color: "var(--muted)" }}>{email}</p>
          </div>
          <nav className="flex flex-col py-1 text-xs">
            <Link href="/conta/ebooks" onClick={() => setOpen(false)}
              className="px-4 py-2 transition-colors" style={{ color: "var(--foreground)" }}>
              Meus Ebooks
            </Link>
            <Link href="/conta/pedidos" onClick={() => setOpen(false)}
              className="px-4 py-2 transition-colors" style={{ color: "var(--foreground)" }}>
              Meus Pedidos
            </Link>
          </nav>
          <form action="/auth/sair" method="POST" style={{ borderTop: "1px solid var(--border)" }}>
            <button
              type="submit"
              className="w-full px-4 py-2 text-left text-xs transition-colors"
              style={{ color: "#ef4444" }}
            >
              Sair
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
