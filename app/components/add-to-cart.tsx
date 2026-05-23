"use client";

import { useState } from "react";
import type { Product } from "@/app/lib/products";
import { useCart } from "./cart-context";

const CUSTOM_MAX = 500;

export default function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState<string>(product.sizes[0]);
  const [color, setColor] = useState<string>(product.colors[0].name);
  const [custom, setCustom] = useState<string>("");
  const [added, setAdded] = useState(false);

  function handleAdd() {
    const trimmed = custom.trim();
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      color,
      custom: trimmed ? trimmed : undefined,
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
        {product.category === "sudaderas" && (
          <p className="mt-2 text-xs text-muted">
            Solo disponible en tallas S, M y L.
          </p>
        )}
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

      <div>
        <label
          htmlFor="custom-spec"
          className="mb-2 block text-sm font-medium"
        >
          Personalizar{" "}
          <span className="font-normal text-muted">(opcional)</span>
        </label>
        <textarea
          id="custom-spec"
          value={custom}
          onChange={(e) => setCustom(e.target.value.slice(0, CUSTOM_MAX))}
          rows={4}
          maxLength={CUSTOM_MAX}
          placeholder="Escribe aquí tus especificaciones: bordados, parches, retoques de lavado, largo del bajo, iniciales…"
          className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed outline-none transition-colors focus:border-accent"
        />
        <p className="mt-1 text-right text-xs text-muted">
          {custom.length}/{CUSTOM_MAX}
        </p>
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
