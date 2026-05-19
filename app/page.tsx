import Link from "next/link";
import { products } from "./lib/products";
import ProductCard from "./components/product-card";

const categoryTiles = [
  {
    href: "/productos?categoria=camisetas",
    label: "Camisetas",
    gradient: "linear-gradient(135deg, #3f3f46, #18181b)",
  },
  {
    href: "/productos?categoria=sudaderas",
    label: "Sudaderas",
    gradient: "linear-gradient(135deg, #6b7d3a, #3f4a22)",
  },
  {
    href: "/productos?categoria=pantalones",
    label: "Pantalones",
    gradient: "linear-gradient(135deg, #3b5bdb, #1e3a8a)",
  },
];

export default function Home() {
  const featured = products.filter((p) => p.tag).slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-5 py-20 sm:py-28">
          <span className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Drop streetwear · Nueva temporada
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Streetwear sin postureo.
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Camisetas, sudaderas y pantalones de inspiración urbana: cortes
            oversize, tejidos pesados y acabados que aguantan la calle.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/productos"
              className="flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Ver catálogo
            </Link>
            <Link
              href="/productos?categoria=pantalones"
              className="flex h-12 items-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:bg-surface"
            >
              Novedades
            </Link>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.label}
              href={tile.href}
              className="group relative flex h-48 items-end overflow-hidden rounded-2xl border border-border p-6"
              style={{ backgroundImage: tile.gradient }}
            >
              <div className="text-white">
                <p className="text-2xl font-semibold">{tile.label}</p>
                <p className="text-sm text-white/70 transition-transform group-hover:translate-x-1">
                  Ver colección →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Destacados */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Destacados</h2>
          <Link
            href="/productos"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Ver todo
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
