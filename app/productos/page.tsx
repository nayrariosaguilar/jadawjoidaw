import Link from "next/link";
import type { Metadata } from "next";
import {
  categories,
  getProductsByCategory,
  type Category,
} from "../lib/products";
import ProductCard from "../components/product-card";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Todas las camisetas y sudaderas de Dropset.",
};

const filters: { slug: Category | "all"; label: string }[] = [
  { slug: "all", label: "Todo" },
  ...categories.map((c) => ({ slug: c.slug, label: c.label })),
];

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const isCategory = categories.some((c) => c.slug === categoria);
  const active: Category | "all" = isCategory
    ? (categoria as Category)
    : "all";

  const list = getProductsByCategory(
    active === "all" ? undefined : active,
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Catálogo</h1>
        <p className="mt-2 text-muted">
          {list.length} producto{list.length === 1 ? "" : "s"} disponible
          {list.length === 1 ? "" : "s"}.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const href =
            f.slug === "all" ? "/productos" : `/productos?categoria=${f.slug}`;
          const isActive = active === f.slug;
          return (
            <Link
              key={f.slug}
              href={href}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border hover:bg-surface"
              }`}
            >
              {f.label}
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {list.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
