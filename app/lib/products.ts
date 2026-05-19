// Catálogo de la tienda Aurea. En una versión real esto vendría de una base de
// datos o un CMS; aquí lo generamos a partir de datos estáticos para mantener
// una estructura base clara y fácil de editar.

export type Category = "camisetas" | "sudaderas" | "pantalones";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number; // en euros
  image: string; // foto real (CDN de Unsplash)
  tag?: string; // etiqueta opcional: "Nuevo", "Best seller"...
  shortDescription: string;
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  // Colores del degradado usado como imagen de producto (placeholder elegante).
  gradient: { from: string; to: string };
}

export const categories: { slug: Category; label: string }[] = [
  { slug: "camisetas", label: "Camisetas" },
  { slug: "sudaderas", label: "Sudaderas" },
  { slug: "pantalones", label: "Pantalones" },
];

// Precio único por categoría.
const PRICE: Record<Category, number> = {
  camisetas: 35,
  sudaderas: 60,
  pantalones: 50,
};

const SINGULAR: Record<Category, string> = {
  camisetas: "Camiseta",
  sudaderas: "Sudadera",
  pantalones: "Pantalón",
};

const SIZES: Record<Category, string[]> = {
  camisetas: ["XS", "S", "M", "L", "XL"],
  sudaderas: ["S", "M", "L", "XL", "XXL"],
  pantalones: ["38", "40", "42", "44", "46", "48"],
};

const MATERIAL: Record<Category, string> = {
  camisetas: "Algodón pesado de 240 g, corte oversize y hombros caídos.",
  sudaderas: "Felpa cepillada de 380 g/m², fit boxy y capucha amplia.",
  pantalones: "Tejido resistente con caída holgada y tiro relajado.",
};

const STYLES: Record<Category, string[]> = {
  camisetas: [
    "Oversize Boxy",
    "Gráfica Aurea",
    "Longline",
    "Acid Wash",
    "Drop Shoulder",
    "Tie-Dye",
    "Vintage Washed",
    "Heavyweight Box",
    "Puff Print",
    "Distressed",
    "Color Block",
    "Skate",
    "Bordada Tonal",
    "Raw Edge",
    "Mock Neck",
    "Cápsula Negra",
    "Reflectante",
    "Crema Oversize",
    "Ringer Retro",
    "Backprint",
  ],
  sudaderas: [
    "Hoodie Oversize",
    "Crewneck Boxy",
    "Zip Tech",
    "Heavyweight Hood",
    "Color Block",
    "Cropped Box",
    "Bordada Tonal",
    "Half-Zip",
    "Washed Vintage",
    "Reverse Weave",
    "Pullover Utility",
    "Hoodie Reflectante",
    "Sherpa Lined",
    "Drop Shoulder",
    "Logo Puff",
    "Acid Wash Hood",
    "Mock Neck",
    "Cápsula Negra",
    "Skate Hood",
    "Crema Oversize",
  ],
  pantalones: [
    "Cargo Utility",
    "Parachute",
    "Baggy Denim",
    "Wide Leg",
    "Jogger Tech",
    "Skate Loose",
    "Carpenter",
    "Nylon Track",
    "Stacked Denim",
    "Cargo Multibolsillo",
    "Balloon Fit",
    "Sweatpant Heavy",
    "Pana Wide",
    "Workwear",
    "Drawstring Tech",
    "Flare Y2K",
    "Combat",
    "Doble Rodilla",
    "Cropped Wide",
    "Cargo Reflectante",
  ],
};

const PALETTE: { name: string; hex: string }[] = [
  { name: "Negro", hex: "#0a0a0a" },
  { name: "Blanco", hex: "#f5f5f5" },
  { name: "Gris", hex: "#6b7280" },
  { name: "Marino", hex: "#1e293b" },
  { name: "Beige", hex: "#d6c7ad" },
  { name: "Oliva", hex: "#556b2f" },
  { name: "Crema", hex: "#e7e0d0" },
  { name: "Burdeos", hex: "#6b2737" },
  { name: "Azul", hex: "#3b5bdb" },
  { name: "Camel", hex: "#b08d57" },
];

const GRADIENTS: { from: string; to: string }[] = [
  { from: "#1f2937", to: "#0a0a0a" },
  { from: "#efe7d6", to: "#cbb999" },
  { from: "#fafafa", to: "#d4d4d8" },
  { from: "#1e3a5f", to: "#0f172a" },
  { from: "#9ca3af", to: "#4b5563" },
  { from: "#e3d5b8", to: "#bda77f" },
  { from: "#6b7d3a", to: "#3f4a22" },
  { from: "#7c2d3a", to: "#3f1620" },
  { from: "#3b5bdb", to: "#1e3a8a" },
  { from: "#b08d57", to: "#6b5230" },
];

// Fotos reales por categoría (IDs de Unsplash verificados). Cada producto
// toma una foto del pool de su categoría de forma cíclica. Para cambiar la
// foto de un producto concreto, edita su `image` en el array `products`.
const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=80`;

const IMAGES: Record<Category, string[]> = {
  camisetas: [
    "1521572163474-6864f9cf17ab",
    "1576566588028-4147f3842f27",
    "1618354691373-d851c5c3a990",
    "1503341504253-dff4815485f1",
    "1562157873-818bc0726f68",
    "1581655353564-df123a1eb820",
    "1622445275576-721325763afe",
  ].map(UNSPLASH),
  sudaderas: [
    "1556821840-3a63f95609a7",
    "1542406775-ade58c52d2e4",
    "1620799140408-edc6dcb6d633",
    "1578768079052-aa76e52ff62e",
    "1509942774463-acf339cf87d5",
    "1594633312681-425c7b97ccd1",
    "1434389677669-e08b4cac3105",
  ].map(UNSPLASH),
  pantalones: [
    "1542272604-787c3835535d",
    "1473966968600-fa801b869a1a",
    "1624378439575-d8705ad7ae80",
    "1551854838-212c50b4c184",
    "1602293589930-45aad59ba3ab",
    "1584865288642-42078afe6942",
    "1517445312882-bc9910d016b7",
    "1542838132-92c53300491e",
  ].map(UNSPLASH),
};

// Mapa explícito de caracteres acentuados → ASCII para construir slugs
// estables sin depender del rango de marcas combinantes Unicode.
const DEBURR: Record<string, string> = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
  ü: "u",
  ñ: "n",
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[áéíóúüñ]/g, (ch) => DEBURR[ch] ?? ch)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildCategory(category: Category): Product[] {
  return STYLES[category].map((style, i) => {
    const singular = SINGULAR[category];
    const name = `${singular} ${style}`;
    const colorA = PALETTE[i % PALETTE.length];
    const colorB = PALETTE[(i + 3) % PALETTE.length];
    const material = MATERIAL[category];

    let tag: string | undefined;
    if (i === 0) tag = "Best seller";
    else if (i === 1) tag = "Nuevo";

    return {
      slug: `${slugify(singular)}-${slugify(style)}`,
      name,
      category,
      price: PRICE[category],
      image: IMAGES[category][i % IMAGES[category].length],
      tag,
      shortDescription: `${style} · Streetwear. ${material}`,
      description: `${name}. Pieza de inspiración streetwear con estética urbana y caída holgada. ${material} Costuras reforzadas y acabado resistente, pensada para el uso diario en la calle.`,
      sizes: SIZES[category],
      colors: [colorA, colorB],
      gradient: GRADIENTS[i % GRADIENTS.length],
    };
  });
}

export const products: Product[] = [
  ...buildCategory("camisetas"),
  ...buildCategory("sudaderas"),
  ...buildCategory("pantalones"),
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: Category): Product[] {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}
