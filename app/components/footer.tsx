import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em]">AUREA</p>
          <p className="mt-1 text-sm text-muted">
            Streetwear: camisetas, sudaderas y pantalones de calle.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <Link href="/" className="hover:text-foreground">
            Inicio
          </Link>
          <Link href="/productos" className="hover:text-foreground">
            Catálogo
          </Link>
          <Link href="/carrito" className="hover:text-foreground">
            Carrito
          </Link>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-xs text-muted">
          © {new Date().getFullYear()} Aurea. Tienda de demostración — los
          pagos no están habilitados.
        </p>
      </div>
    </footer>
  );
}
