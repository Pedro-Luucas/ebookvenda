"use client";

import Link from "next/link";
import type { Product } from "@/app/types/product";
import { formatPrice } from "@/app/lib/format";
import { useCart } from "@/app/context/CartContext";
import ProductCoverArt from "@/app/components/ProductCoverArt";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div
      className="group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
      style={{ background: "var(--background)", border: "1px solid var(--border)" }}
    >
      <Link href={`/produto/${product.slug}`} className="block">
        <div
          className="flex items-center justify-center p-6"
          style={{ background: "var(--surface)" }}
        >
          <ProductCoverArt product={product} size="lg" className="mx-auto h-52 w-36" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        {product.category && (
          <span
            className="mb-2 inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
            style={{ background: "var(--accent-light)", color: "var(--accent)" }}
          >
            {product.category}
          </span>
        )}
        <Link href={`/produto/${product.slug}`}>
          <h3
            className="text-sm font-semibold leading-snug transition-colors"
            style={{ color: "var(--foreground)" }}
          >
            {product.title}
          </h3>
        </Link>
        <p className="mt-0.5 text-xs" style={{ color: "var(--muted)" }}>
          por {product.author}
        </p>
        <p className="mt-2 flex-1 text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-bold" style={{ color: "var(--foreground)" }}>
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="rounded-lg px-3.5 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-85"
            style={{ background: "var(--accent)" }}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
