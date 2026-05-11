"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import type { Product } from "@/app/types/product";
import { useCart } from "@/app/context/CartContext";

export type Accent =
  | "emerald"
  | "indigo"
  | "amber"
  | "rose"
  | "sky"
  | "violet";

interface LandingCtaProps {
  product: Product;
  accent: Accent;
  primaryLabel: string;
  secondaryLabel?: string;
  size?: "md" | "lg";
  layout?: "row" | "stack";
  showSecondary?: boolean;
  className?: string;
}

const ACCENT_BUTTON: Record<Accent, string> = {
  emerald:
    "bg-emerald-600 hover:bg-emerald-500 focus-visible:ring-emerald-400/60 shadow-emerald-900/40",
  indigo:
    "bg-indigo-600 hover:bg-indigo-500 focus-visible:ring-indigo-400/60 shadow-indigo-900/40",
  amber:
    "bg-amber-500 hover:bg-amber-400 text-zinc-950 focus-visible:ring-amber-300/60 shadow-amber-900/40",
  rose:
    "bg-rose-600 hover:bg-rose-500 focus-visible:ring-rose-400/60 shadow-rose-900/40",
  sky:
    "bg-sky-600 hover:bg-sky-500 focus-visible:ring-sky-400/60 shadow-sky-900/40",
  violet:
    "bg-violet-600 hover:bg-violet-500 focus-visible:ring-violet-400/60 shadow-violet-900/40",
};

const ACCENT_OUTLINE: Record<Accent, string> = {
  emerald:
    "border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-300 dark:hover:bg-emerald-950/40 focus-visible:ring-emerald-400/60",
  indigo:
    "border-indigo-600 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-300 dark:hover:bg-indigo-950/40 focus-visible:ring-indigo-400/60",
  amber:
    "border-amber-600 text-amber-700 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-300 dark:hover:bg-amber-950/40 focus-visible:ring-amber-300/60",
  rose:
    "border-rose-600 text-rose-700 hover:bg-rose-50 dark:border-rose-400 dark:text-rose-300 dark:hover:bg-rose-950/40 focus-visible:ring-rose-400/60",
  sky:
    "border-sky-600 text-sky-700 hover:bg-sky-50 dark:border-sky-400 dark:text-sky-300 dark:hover:bg-sky-950/40 focus-visible:ring-sky-400/60",
  violet:
    "border-violet-600 text-violet-700 hover:bg-violet-50 dark:border-violet-400 dark:text-violet-300 dark:hover:bg-violet-950/40 focus-visible:ring-violet-400/60",
};

export default function LandingCta({
  product,
  accent,
  primaryLabel,
  secondaryLabel = "Adicionar ao carrinho",
  size = "lg",
  layout = "row",
  showSecondary = true,
  className = "",
}: LandingCtaProps) {
  const router = useRouter();
  const { addItem, setIsCartOpen } = useCart();
  const [pending, setPending] = useState<null | "buy" | "add">(null);

  const sizeClasses =
    size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm";

  const handleBuy = useCallback(() => {
    setPending("buy");
    addItem(product);
    setIsCartOpen(false);
    router.push("/checkout");
  }, [addItem, product, router, setIsCartOpen]);

  const handleAdd = useCallback(() => {
    setPending("add");
    addItem(product);
    window.setTimeout(() => setPending(null), 600);
  }, [addItem, product]);

  return (
    <div
      className={`flex ${
        layout === "row" ? "flex-col gap-3 sm:flex-row" : "flex-col gap-3"
      } ${className}`}
    >
      <button
        type="button"
        onClick={handleBuy}
        disabled={pending === "buy"}
        className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white shadow-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 ${sizeClasses} ${ACCENT_BUTTON[accent]}`}
      >
        <span aria-hidden>⚡</span>
        {pending === "buy" ? "Redirecionando…" : primaryLabel}
      </button>

      {showSecondary && (
        <button
          type="button"
          onClick={handleAdd}
          className={`inline-flex items-center justify-center gap-2 rounded-full border-2 bg-transparent font-semibold transition-all duration-150 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 ${sizeClasses} ${ACCENT_OUTLINE[accent]}`}
        >
          <span aria-hidden>🛒</span>
          {pending === "add" ? "Adicionado ✓" : secondaryLabel}
        </button>
      )}
    </div>
  );
}
