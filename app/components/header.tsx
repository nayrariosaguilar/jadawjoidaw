import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import CartBadge from "./cart-badge";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/productos?categoria=camisetas", label: "Camisetas" },
  { href: "/productos?categoria=sudaderas", label: "Sudaderas" },
  { href: "/productos?categoria=pantalones", label: "Pantalones" },
  { href: "/productos", label: "Catálogo" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.2em]"
        >
          AUREA
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CartBadge />
        </div>
      </div>
    </header>
  );
}
