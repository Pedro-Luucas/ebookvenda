import { notFound } from "next/navigation";
import { products, getProductBySlug, formatPrice } from "@/app/data/products";
import AddToCartButton from "./AddToCartButton";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto não encontrado" };
  return {
    title: `${product.title} - Vendas que funcionam.`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Cover */}
        <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 p-12 dark:from-emerald-950 dark:to-teal-900">
          <div className="text-center">
            <span className="text-8xl">📖</span>
            <p className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              {product.category}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            {product.category}
          </span>
          <h1 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {product.title}
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            por {product.author}
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            {product.longDescription}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <div className="text-center">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Páginas
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                {product.pages}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Formato
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                {product.format}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Entrega
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                Imediata
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {formatPrice(product.price)}
            </span>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
