"use client";

import { useEffect, useRef, useState } from "react";
import type { Product } from "@/app/types/product";
import LandingCta, { type Accent } from "./LandingCta";
import { formatPrice } from "@/app/lib/format";

interface StickyBuyBarProps {
  product: Product;
  accent: Accent;
  primaryLabel?: string;
  shortTitle?: string;
  priceFrom?: number;
}

/**
 * Barra inferior sticky que aparece depois que o usuário rolou
 * ~60% da tela inicial — aumenta conversão em páginas longas.
 */
export default function StickyBuyBar({
  product,
  accent,
  primaryLabel = "Comprar por PIX",
  shortTitle,
  priceFrom,
}: StickyBuyBarProps) {
  const [visible, setVisible] = useState(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    function onScroll() {
      if (raf.current !== null) return;
      raf.current = window.requestAnimationFrame(() => {
        raf.current = null;
        const threshold = window.innerHeight * 0.55;
        const near =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 600;
        setVisible(window.scrollY > threshold && !near);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current !== null) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="border-t border-white/10 bg-zinc-950/95 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.4)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="min-w-0 text-white">
            <p className="truncate text-sm font-semibold">
              {shortTitle ?? product.title}
            </p>
            <p className="text-xs text-zinc-400">
              {priceFrom && priceFrom > product.price && (
                <span className="mr-1 line-through text-zinc-500">
                  {formatPrice(priceFrom)}
                </span>
              )}
              <span className="font-semibold text-white">
                {formatPrice(product.price)}
              </span>
              <span className="ml-1">· PIX · entrega imediata</span>
            </p>
          </div>
          <LandingCta
            product={product}
            accent={accent}
            primaryLabel={primaryLabel}
            size="md"
            showSecondary={false}
          />
        </div>
      </div>
    </div>
  );
}
