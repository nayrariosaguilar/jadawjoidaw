import Link from "next/link";
import type { Product } from "@/app/lib/products";
import { formatPrice } from "@/app/lib/format";
import ProductImage from "./product-image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative">
        <ProductImage
          product={product}
          className="aspect-square w-full transition-transform duration-300 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-medium leading-tight">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted">
          {product.shortDescription}
        </p>
        <p className="mt-2 font-semibold">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
