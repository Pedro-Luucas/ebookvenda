"use client";

import { useState } from "react";
import type { Product } from "@/app/types/product";
import ProductCard from "@/app/components/ProductCard";

const CATEGORY_ORDER = ["Claude Code", "Vendas"];

const CATEGORY_META: Record<string, { label: string; description: string; accent: string }> = {
  "Claude Code": {
    label: "Claude Code",
    description: "Domine a IA mais avançada do mercado e multiplique sua produtividade como desenvolvedor.",
    accent: "#d97757",
  },
  "Vendas": {
    label: "Vendas",
    description: "Técnicas e sistemas de vendas que funcionam no mundo real — do cold call ao fechamento.",
    accent: "#059669",
  },
};

const PLANS = [
  {
    id: "mensal",
    name: "Mensal",
    originalPrice: "R$ 99,99",
    price: "R$ 59,99",
    period: "/mês",
    badge: null,
    promo: true,
    highlight: false,
    features: ["Acesso a todos os ebooks", "Novos títulos incluídos", "PDF + HTML"],
  },
  {
    id: "anual",
    name: "Anual",
    originalPrice: "R$ 959,99",
    price: "R$ 289,99",
    period: "/ano",
    badge: "Mais popular",
    promo: true,
    highlight: true,
    features: ["Tudo do plano mensal", "Economize 70%", "Suporte prioritário"],
  },
  {
    id: "vitalicio",
    name: "Vitalício",
    originalPrice: null,
    price: "R$ 499",
    period: "único",
    badge: null,
    promo: false,
    highlight: false,
    features: ["Acesso permanente", "Todos os futuros ebooks", "Sem renovação"],
  },
];

export default function CatalogClient({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState("Claude Code");

  const categories = CATEGORY_ORDER.filter(
    (c) => products.some((p) => p.category === c)
  );

  const filtered = products.filter((p) => p.category === activeCategory);

  const activeMeta = CATEGORY_META[activeCategory];

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6">
        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40"
        />
        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "var(--accent-glow)" }}
        />

        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
            style={{ borderColor: "var(--border-strong)", color: "var(--muted)", background: "var(--surface)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            Ebooks para Claude Code
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--foreground)" }}>
            Domine o{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, #f0a882 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Claude Code
            </span>
            <br />de verdade
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Ebooks práticos escritos por devs, para devs. Assine e tenha acesso ilimitado
            a toda a biblioteca — novos títulos toda semana.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#assinatura"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)", boxShadow: "0 4px 20px var(--accent-glow)" }}
            >
              Ver planos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-colors"
              style={{ borderColor: "var(--border-strong)", color: "var(--foreground)", background: "var(--background)" }}
            >
              Explorar catálogo
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex items-center justify-center gap-10 text-center">
            {[
              { value: "10+", label: "Ebooks" },
              { value: "2", label: "Categorias" },
              { value: "100%", label: "Digital" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>{value}</div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--muted-2)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category filter ── */}
      <section
        id="catalogo"
        className="sticky top-14 z-30 backdrop-blur-md"
        style={{ borderBottom: "1px solid var(--border)", background: "color-mix(in srgb, var(--background) 90%, transparent)" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-1 py-2">
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              const meta = CATEGORY_META[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all"
                  style={
                    isActive
                      ? {
                          background: meta.accent,
                          color: "white",
                          boxShadow: `0 2px 10px ${meta.accent}44`,
                        }
                      : { color: "var(--muted)", background: "transparent" }
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Category header ── */}
      {activeMeta && (
        <div className="px-4 py-4 sm:px-6" style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
          <div className="mx-auto max-w-6xl flex items-center gap-3">
            <div className="h-4 w-0.5 rounded-full" style={{ background: activeMeta.accent }} />
            <div>
              <h2 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{activeMeta.label}</h2>
              <p className="text-xs" style={{ color: "var(--muted)" }}>{activeMeta.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Product grid ── */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-sm" style={{ color: "var(--muted)" }}>
            Nenhum ebook nesta categoria ainda.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* ── Subscription CTA ── */}
      <section id="assinatura" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12"
            style={{
              background: "var(--navy)",
              border: "1px solid var(--navy-3)",
              boxShadow: "0 0 0 1px rgba(217,119,87,0.15), 0 24px 64px rgba(0,0,0,0.3)",
            }}
          >
            {/* Glow orbs */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl opacity-20"
              style={{ background: "var(--accent)" }} />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full blur-3xl opacity-10"
              style={{ background: "#f0a882" }} />

            <div className="relative">
              {/* Header */}
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                style={{ borderColor: "rgba(217,119,87,0.3)", color: "#f0a882", background: "rgba(217,119,87,0.1)" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                Promoção de lançamento
              </div>

              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Acesso ilimitado a{" "}
                <span style={{ color: "#f0a882" }}>toda a biblioteca</span>
              </h2>
              <p className="mt-2 max-w-lg text-sm" style={{ color: "#8a9ab0" }}>
                Um plano dá acesso a todos os ebooks — Claude Code, Vendas, Facebook Ads,
                Marketing Digital — e a todos os novos títulos que lançarmos.
              </p>

              {/* Plans */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className="relative rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
                    style={{
                      background: plan.highlight
                        ? "rgba(217,119,87,0.12)"
                        : "rgba(255,255,255,0.04)",
                      border: plan.highlight
                        ? "1px solid rgba(217,119,87,0.45)"
                        : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {plan.badge && (
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-bold text-white"
                        style={{ background: "var(--accent)" }}
                      >
                        {plan.badge}
                      </div>
                    )}

                    <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8a9ab0" }}>
                      {plan.name}
                    </div>

                    <div className="mt-2">
                      {plan.originalPrice && (
                        <div className="text-xs line-through" style={{ color: "#5a6a7a" }}>
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-white">{plan.price}</span>
                        <span className="text-xs" style={{ color: "#5a6a7a" }}>{plan.period}</span>
                      </div>
                      {plan.promo && (
                        <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#f0a882" }}>
                          Preço promocional
                        </div>
                      )}
                    </div>

                    <ul className="mt-4 space-y-1.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "#c0ccd8" }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M2 6l2.5 2.5 5.5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      className="mt-5 w-full rounded-xl py-2.5 text-xs font-semibold transition-opacity hover:opacity-85"
                      style={
                        plan.highlight
                          ? { background: "var(--accent)", color: "white" }
                          : { background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }
                      }
                    >
                      Assinar agora
                    </button>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-xs" style={{ color: "#5a6a7a" }}>
                Pagamento seguro via PIX · Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="px-4 pb-20 sm:px-6" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-4xl pt-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Conteúdo prático",
                desc: "Escrito por devs que usam Claude Code no dia a dia.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Acesso imediato",
                desc: "Após o pagamento PIX, acesso liberado automaticamente.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                ),
                title: "Sempre atualizado",
                desc: "Novos títulos adicionados toda semana, sem custo extra.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
