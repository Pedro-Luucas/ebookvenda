"use client";

import Link from "next/link";
import type { Product } from "@/app/data/products";
import { formatPrice } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import ProductCoverArt from "@/app/components/ProductCoverArt";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <Link href={`/produto/${product.slug}`} className="block">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-4 dark:from-emerald-950 dark:to-teal-900">
          <ProductCoverArt product={product} size="lg" className="mx-auto h-56 w-40" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/produto/${product.slug}`}>
          <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-50 dark:group-hover:text-emerald-400">
            {product.title}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          por {product.author}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
