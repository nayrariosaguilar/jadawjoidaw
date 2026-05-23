"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../components/cart-context";
import { formatPrice } from "../lib/format";

export default function CarritoPage() {
  const { items, total, hydrated, updateQty, removeItem, clear } = useCart();
  const [ordered, setOrdered] = useState(false);

  // Mientras no se hidrata el carrito mostramos un estado neutro para
  // evitar diferencias entre el render del servidor y el del cliente.
  if (!hydrated) {
    return (
      <div className="mx-auto w-full max-w-3xl px-5 py-20 text-center text-muted">
        Cargando carrito…
      </div>
    );
  }

  if (ordered) {
    return (
      <div className="mx-auto w-full max-w-2xl px-5 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          ¡Gracias por tu pedido! 🎉
        </h1>
        <p className="mt-4 text-muted">
          Esto es una tienda de demostración, así que no se ha realizado
          ningún cobro. Aquí conectarías una pasarela de pago (Stripe, etc.).
        </p>
        <Link
          href="/productos"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Seguir comprando
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto w-full max-w-2xl px-5 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Tu carrito está vacío
        </h1>
        <p className="mt-3 text-muted">
          Aún no has añadido ninguna prenda.
        </p>
        <Link
          href="/productos"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-14">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">
        Tu carrito
      </h1>

      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-surface p-4"
          >
            <div className="min-w-0 flex-1">
              <Link
                href={`/productos/${item.slug}`}
                className="font-medium hover:underline"
              >
                {item.name}
              </Link>
              <p className="text-sm text-muted">
                Talla {item.size} · {item.color}
              </p>
              {item.custom && (
                <p className="mt-1 whitespace-pre-wrap rounded-lg bg-background px-3 py-2 text-xs text-muted">
                  <span className="font-medium text-foreground">
                    Personalización:
                  </span>{" "}
                  {item.custom}
                </p>
              )}
              <p className="mt-1 text-sm font-medium">
                {formatPrice(item.price)}
              </p>
            </div>

            <div className="flex items-center rounded-full border border-border">
              <button
                type="button"
                onClick={() => updateQty(item.id, item.qty - 1)}
                aria-label="Quitar una unidad"
                className="h-9 w-9 text-lg leading-none transition-colors hover:bg-background"
              >
                −
              </button>
              <span className="w-8 text-center text-sm">{item.qty}</span>
              <button
                type="button"
                onClick={() => updateQty(item.id, item.qty + 1)}
                aria-label="Añadir una unidad"
                className="h-9 w-9 text-lg leading-none transition-colors hover:bg-background"
              >
                +
              </button>
            </div>

            <div className="w-20 text-right font-semibold">
              {formatPrice(item.price * item.qty)}
            </div>

            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-end gap-4 border-t border-border pt-6">
        <div className="flex w-full items-center justify-between text-lg sm:w-auto sm:gap-12">
          <span className="text-muted">Total</span>
          <span className="text-2xl font-semibold">{formatPrice(total)}</span>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={clear}
            className="h-12 rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:bg-surface"
          >
            Vaciar carrito
          </button>
          <button
            type="button"
            onClick={() => {
              clear();
              setOrdered(true);
            }}
            className="h-12 rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}
