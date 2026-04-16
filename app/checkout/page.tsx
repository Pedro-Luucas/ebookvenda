"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/app/data/products";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    cellphone: "",
    taxId: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
          })),
          customer: form,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao processar pagamento");
      }

      clearCart();

      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        router.push("/sucesso");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao processar pagamento"
      );
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <span className="text-6xl">🛒</span>
        <h1 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Seu carrinho está vazio
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Adicione ebooks ao carrinho antes de finalizar a compra.
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
        Finalizar Compra
      </h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Seus Dados
          </h2>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="cellphone"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Celular
            </label>
            <input
              type="tel"
              id="cellphone"
              name="cellphone"
              required
              value={form.cellphone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div>
            <label
              htmlFor="taxId"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              CPF
            </label>
            <input
              type="text"
              id="taxId"
              name="taxId"
              required
              value={form.taxId}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500"
              placeholder="000.000.000-00"
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-emerald-600 py-3 font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Processando..." : "Pagar com PIX"}
          </button>

          <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
            Pagamento seguro processado pelo AbacatePay
          </p>
        </form>

        {/* Order summary */}
        <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 lg:self-start">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Resumo do Pedido
          </h2>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li
                key={item.product.id}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-zinc-600 dark:text-zinc-300">
                  {item.product.title}{" "}
                  {item.quantity > 1 && `(x${item.quantity})`}
                </span>
                <span className="font-medium text-zinc-900 dark:text-zinc-50">
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-700">
            <div className="flex items-center justify-between text-lg font-bold text-zinc-900 dark:text-zinc-50">
              <span>Total</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
