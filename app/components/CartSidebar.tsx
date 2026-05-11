"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/app/lib/format";
import ProductCoverArt from "@/app/components/ProductCoverArt";

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
        onClick={() => setIsCartOpen(false)}
      />
      <div
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col shadow-2xl"
        style={{ background: "var(--background)", borderLeft: "1px solid var(--border)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Carrinho</h2>
            {items.length > 0 && (
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: "var(--accent)" }}
              >
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors"
            style={{ color: "var(--muted)", background: "var(--surface)" }}
            aria-label="Fechar carrinho"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "var(--surface)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--muted)" }} aria-hidden="true">
                  <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
              <p className="mt-3 text-sm font-medium" style={{ color: "var(--foreground)" }}>Carrinho vazio</p>
              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>Adicione ebooks para continuar</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-xs font-medium transition-opacity hover:opacity-70"
                style={{ color: "var(--accent)" }}
              >
                Ver catálogo
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-3 rounded-xl p-3"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <ProductCoverArt product={item.product} size="sm" className="h-16 w-12 shrink-0 rounded-lg overflow-hidden" />
                  <div className="flex-1 min-w-0">
                    <h4 className="truncate text-xs font-semibold" style={{ color: "var(--foreground)" }}>
                      {item.product.title}
                    </h4>
                    <p className="mt-0.5 text-xs font-semibold" style={{ color: "var(--accent)" }}>
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="flex h-5 w-5 items-center justify-center rounded text-xs transition-colors"
                        style={{ border: "1px solid var(--border)", color: "var(--muted)", background: "var(--background)" }}
                      >−</button>
                      <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="flex h-5 w-5 items-center justify-center rounded text-xs transition-colors"
                        style={{ border: "1px solid var(--border)", color: "var(--muted)", background: "var(--background)" }}
                      >+</button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-auto text-xs transition-opacity hover:opacity-70"
                        style={{ color: "var(--muted)" }}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-4" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: "var(--muted)" }}>Total</span>
              <span className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)" }}
            >
              Finalizar compra
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
