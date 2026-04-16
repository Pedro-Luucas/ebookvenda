"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/app/data/products";

export default function CarrinhoPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <span className="text-6xl">🛒</span>
        <h1 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Seu carrinho está vazio
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Explore nossos ebooks e encontre o conteúdo perfeito para você.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Ver Ebooks
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Carrinho de Compras
      </h1>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950">
              <span className="text-3xl">📖</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {item.product.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                por {item.product.author}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity - 1)
                }
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
              >
                -
              </button>
              <span className="w-6 text-center font-medium">
                {item.quantity}
              </span>
              <button
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity + 1)
                }
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
              >
                +
              </button>
            </div>
            <div className="w-24 text-right">
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                {formatPrice(item.product.price * item.quantity)}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.product.id)}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Remover
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
        <div className="flex items-center justify-between text-xl font-bold text-zinc-900 dark:text-zinc-50">
          <span>Total</span>
          <span className="text-emerald-600 dark:text-emerald-400">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <Link
          href="/checkout"
          className="mt-6 block w-full rounded-full bg-emerald-600 py-3 text-center font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
}
