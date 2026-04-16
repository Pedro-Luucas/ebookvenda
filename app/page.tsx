import { products } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Domine a Arte das{" "}
          <span className="text-emerald-600 dark:text-emerald-400">Vendas</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Ebooks práticos e direto ao ponto para você vender mais, negociar
          melhor e construir uma carreira de sucesso em vendas.
        </p>
      </section>

      {/* Product grid */}
      <section>
        <h2 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Nossos Ebooks
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust section */}
      <section className="mt-20 rounded-2xl bg-zinc-50 p-8 text-center dark:bg-zinc-900">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Por que comprar nossos ebooks?
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
              <span className="text-xl">⚡</span>
            </div>
            <h3 className="mt-4 font-semibold text-zinc-900 dark:text-zinc-50">
              Entrega Imediata
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Receba seu ebook instantaneamente após a confirmação do pagamento.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
              <span className="text-xl">🎯</span>
            </div>
            <h3 className="mt-4 font-semibold text-zinc-900 dark:text-zinc-50">
              Conteúdo Prático
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Técnicas e estratégias que você pode aplicar imediatamente no seu
              dia a dia.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
              <span className="text-xl">🔒</span>
            </div>
            <h3 className="mt-4 font-semibold text-zinc-900 dark:text-zinc-50">
              Pagamento Seguro
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Pagamento processado via PIX com total segurança pelo AbacatePay.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
