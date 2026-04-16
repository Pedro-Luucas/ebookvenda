"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/app/data/products";

export default function CartSidebar() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl dark:bg-zinc-900">
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
            Carrinho
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            aria-label="Fechar carrinho"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <span className="text-5xl">🛒</span>
              <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                Seu carrinho está vazio
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-4 rounded-xl border border-zinc-100 p-3 dark:border-zinc-800"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950">
                    <span className="text-2xl">📖</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {item.product.title}
                    </h4>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 text-xs transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 text-xs transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-auto text-xs text-red-500 hover:text-red-700"
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

        {items.length > 0 && (
          <div className="border-t border-zinc-200 px-6 py-4 dark:border-zinc-800">
            <div className="flex items-center justify-between text-lg font-bold text-zinc-900 dark:text-zinc-50">
              <span>Total</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="mt-4 block w-full rounded-full bg-emerald-600 py-3 text-center font-medium text-white transition-colors hover:bg-emerald-700"
            >
              Finalizar Compra
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
