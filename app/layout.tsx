import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./components/cart-context";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: "Aurea — Camisetas, sudaderas y pantalones",
    template: "%s · Aurea",
  },
  description:
    "Tienda streetwear: camisetas, sudaderas y pantalones de inspiración urbana con cortes oversize y tejidos pesados.",
};

// Se ejecuta antes de pintar para aplicar el tema guardado y evitar el
// parpadeo (flash) de colores al cargar la página.
const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('aurea-theme');
    var dark = t ? t === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
