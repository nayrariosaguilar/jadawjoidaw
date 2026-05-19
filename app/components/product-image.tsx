import Image from "next/image";
import type { Product } from "@/app/lib/products";

// Foto real del producto (CDN de Unsplash, optimizada por next/image).
// El degradado queda como fondo de respaldo: se ve mientras la imagen
// carga o si fallara, así nunca aparece un hueco vacío.
export default function ProductImage({
  product,
  className = "",
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 480px",
  priority = false,
}: {
  product: Product;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${product.gradient.from}, ${product.gradient.to})`,
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
