"use client";

import type { Product } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem(product)}
      className="rounded-full bg-emerald-600 px-8 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
    >
      Adicionar ao Carrinho
    </button>
  );
}
