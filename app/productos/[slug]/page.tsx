import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, products } from "../../lib/products";
import { formatPrice } from "../../lib/format";
import ProductImage from "../../components/product-image";
import AddToCart from "../../components/add-to-cart";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10">
      <nav className="mb-8 text-sm text-muted">
        <Link href="/" className="hover:text-foreground">
          Inicio
        </Link>
        <span className="px-2">/</span>
        <Link href="/productos" className="hover:text-foreground">
          Catálogo
        </Link>
        <span className="px-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <ProductImage
          product={product}
          className="aspect-square w-full rounded-2xl border border-border"
          sizes="(max-width: 1024px) 100vw, 560px"
          priority
        />

        <div className="flex flex-col">
          {product.tag && (
            <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              {product.tag}
            </span>
          )}
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-2xl font-semibold">
            {formatPrice(product.price)}
          </p>
          <p className="mt-5 leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="my-8 h-px bg-border" />

          <AddToCart product={product} />

          <p className="mt-6 text-xs text-muted">
            Envío en 24-48 h · Devoluciones gratuitas en 30 días · Tienda de
            demostración: el pago no está habilitado.
          </p>
        </div>
      </div>
    </div>
  );
}
