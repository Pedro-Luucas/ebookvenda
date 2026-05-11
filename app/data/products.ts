import { createStaticClient } from "@/app/lib/supabase/static";
import type { Product } from "@/app/types/product";
import {
  getStaticCatalog,
  getStaticProductBySlug,
  STATIC_CATALOG,
} from "@/app/data/catalog";

export type { Product };
export { formatPrice } from "@/app/lib/format";

const PRODUCT_COLUMNS =
  "id, slug, title, description, long_description, price_cents, cover_image, author, pages, format, category, ebook_file";

interface ProductRow {
  id: string;
  slug: string;
  title: string;
  description: string;
  long_description: string;
  price_cents: number;
  cover_image: string;
  author: string;
  pages: number;
  format: string;
  category: string;
  ebook_file: string;
}

function toProduct(row: ProductRow): Product {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    longDescription: row.long_description,
    price: row.price_cents,
    coverImage: row.cover_image,
    author: row.author,
    pages: row.pages,
    format: row.format,
    category: row.category,
    ebookFile: row.ebook_file,
  };
}

/**
 * Tenta ler do Supabase e retorna o fallback estático ao menor problema
 * (rede offline, DNS, RLS inesperada, etc.). Garantimos que landing pages
 * sempre renderizam, mesmo sem banco.
 */
export async function getAllProducts(): Promise<Product[]> {
  try {
    const supabase = createStaticClient();
    const { data, error } = await supabase
      .from("products")
      .select(PRODUCT_COLUMNS)
      .eq("active", true)
      .order("created_at", { ascending: true });

    if (error || !data || data.length === 0) {
      if (error) console.warn("[products] fallback estático:", error.message);
      return getStaticCatalog();
    }
    return data.map(toProduct);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn("[products] fallback estático (exception):", message);
    return getStaticCatalog();
  }
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  try {
    const supabase = createStaticClient();
    const { data, error } = await supabase
      .from("products")
      .select(PRODUCT_COLUMNS)
      .eq("slug", slug)
      .eq("active", true)
      .maybeSingle();

    if (error || !data) {
      if (error) console.warn("[products:slug] fallback estático:", error.message);
      return getStaticProductBySlug(slug);
    }
    return toProduct(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn("[products:slug] fallback estático (exception):", message);
    return getStaticProductBySlug(slug);
  }
}

export async function getProductById(
  id: string
): Promise<Product | undefined> {
  try {
    const supabase = createStaticClient();
    const { data, error } = await supabase
      .from("products")
      .select(PRODUCT_COLUMNS)
      .eq("id", id)
      .eq("active", true)
      .maybeSingle();

    if (error || !data) {
      if (error) console.warn("[products:id] fallback estático:", error.message);
      return STATIC_CATALOG.find((p) => p.id === id)
        ? { ...STATIC_CATALOG.find((p) => p.id === id)! }
        : undefined;
    }
    return toProduct(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn("[products:id] fallback estático (exception):", message);
    const match = STATIC_CATALOG.find((p) => p.id === id);
    return match ? { ...match } : undefined;
  }
}
