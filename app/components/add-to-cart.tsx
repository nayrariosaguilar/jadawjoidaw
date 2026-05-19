"use client";

import { useState } from "react";
import type { Product } from "@/app/lib/products";
import { useCart } from "./cart-context";

export default function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState<string>(product.sizes[0]);
  const [color, setColor] = useState<string>(product.colors[0].name);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      color,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-sm font-medium">
          Talla: <span className="text-muted">{size}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`h-10 min-w-10 rounded-lg border px-3 text-sm font-medium transition-colors ${
                size === s
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border hover:bg-surface"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">
          Color: <span className="text-muted">{color}</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setColor(c.name)}
              aria-label={c.name}
              title={c.name}
              className={`h-9 w-9 rounded-full border-2 transition-transform hover:scale-110 ${
                color === c.name
                  ? "border-accent"
                  : "border-border"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="mt-2 h-12 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        {added ? "✓ Añadido al carrito" : "Añadir al carrito"}
      </button>
    </div>
  );
}
