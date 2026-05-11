"use client";

import { useCart } from "@/app/context/CartContext";

export default function CartButton() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
      style={{ color: "var(--muted)", background: "var(--surface)" }}
      aria-label="Abrir carrinho"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
      {totalItems > 0 && (
        <span
          className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white"
          style={{ background: "var(--accent)" }}
        >
          {totalItems}
        </span>
      )}
    </button>
  );
}
