import type { Product, ProductImage } from "@/types/product";

// Catálogo oficial de productos Spaz Altor (Medellín, Colombia).

type Audience = "hombres" | "mujeres" | "ninos";

interface CatalogItem {
  handle: string;
  title: string;
  // Prefijo de los archivos de foto del producto.
  model: string;
  brand: "Altor" | "Spaz";
  summary: string;
  features: string[];
  audience: Audience[];
  sports?: string[];
  // Aparece en el carrusel de productos principales del inicio.
  featured?: boolean;
  // Precio de venta en COP; null mientras la empresa no lo confirme.
  versions: { name: string; price: number | null }[];
  // Colores con foto propia en cada corte. El primero queda seleccionado al entrar.
  cuts?: Record<string, string[]>;
  // Colores cuya foto no distingue corte (o todos, si el producto no tiene cortes).
  colors?: string[];
  // Nombre de la opción de `colors`/`cuts` cuando no son colores lisos (p. ej. "Diseño").
  colorOption?: string;
  sizes?: string[];
  // Fotos adicionales de la galería, como rutas dentro de /products.
  gallery?: { file: string; alt: string }[];
}

const UV = "Protección UV UPF 50+";
const BI_STRETCH = "Bi-stretch: ajuste anatómico en cualquier postura";
const SPORTSEC = "Sportsec: absorbe rápido la humedad y evita malos olores";
const TOP_FEATURES = [UV, BI_STRETCH, SPORTSEC];

const LICRA_SPORTS = ["patinaje", "futbol", "running", "gym"];
const TOP_SPORTS = ["patinaje", "running", "ciclismo", "gym"];

const ficha = (model: string, title: string) => ({ file: `ficha-${model}.jpg`, alt: `Ficha técnica ${title}` });

const catalog: CatalogItem[] = [
  {
    handle: "licra-aurora",
    title: "Licra Aurora",
    model: "aurora",
    brand: "Altor",
    summary:
      "Licra corta embonada, unisex. Tejido tricot de poliéster y elastano con Bi-stretch para un ajuste anatómico óptimo.",
    features: ["Elástico interno", "Transporte de humedad", "Elongación bi-direccional"],
    audience: ["hombres", "mujeres", "ninos"],
    sports: LICRA_SPORTS,
    featured: true,
    versions: [
      { name: "Infantil", price: 40000 },
      { name: "Adulto", price: 50000 },
    ],
    colors: ["Negro", "Blanco", "Azul oscuro", "Azul rey", "Rojo"],
    gallery: [ficha("aurora", "Licra Aurora")],
  },
  {
    handle: "licra-zeus",
    title: "Licra Zeus",
    model: "zeus",
    brand: "Spaz",
    summary: "Licra corta para hombre en poliéster con elastano, con elástico expuesto.",
    features: ["Canguro integrado", "Transporte de humedad", "Elongación bi-direccional"],
    audience: ["hombres", "ninos"],
    sports: LICRA_SPORTS,
    featured: true,
    versions: [
      { name: "Infantil", price: 50000 },
      { name: "Adulto", price: 60000 },
    ],
    colors: ["Negro", "Blanco", "Azul oscuro", "Azul rey", "Rojo", "Verde"],
    gallery: [ficha("zeus", "Licra Zeus")],
  },
  {
    handle: "multideportivo-atenea",
    title: "Multideportivo Atenea",
    model: "atenea",
    brand: "Altor",
    summary:
      "Licra de pierna larga, unisex. Tejido tricot en poliéster y elastano con Bi-stretch para un ajuste anatómico.",
    features: ["Transporte de humedad", "Elongación bi-direccional"],
    audience: ["hombres", "mujeres", "ninos"],
    sports: LICRA_SPORTS,
    featured: true,
    versions: [
      { name: "Infantil", price: 60000 },
      { name: "Adulto", price: 70000 },
    ],
    colors: ["Negro", "Azul oscuro"],
    gallery: [
      { file: "fotos/atenea-espalda.webp", alt: "Multideportivo Atenea de lado" },
      { file: "fotos/atenea-ambiente.webp", alt: "Multideportivo Atenea en la pista" },
      ficha("atenea", "Multideportivo Atenea"),
    ],
  },
  {
    handle: "licra-aquiles",
    title: "Licra Aquiles",
    model: "aquiles",
    brand: "Altor",
    summary:
      "Licra corta de elástico expuesto, unisex. Mezcla de poliéster y elastano de alto rendimiento: elástica, suave y durable.",
    features: ["Transporte de humedad", "Elongación bi-direccional"],
    audience: ["hombres", "mujeres", "ninos"],
    sports: LICRA_SPORTS,
    featured: true,
    versions: [
      { name: "Infantil", price: 40000 },
      { name: "Adulto", price: 50000 },
    ],
    colors: ["Negro", "Blanco", "Azul oscuro", "Azul rey", "Rojo", "Verde"],
    gallery: [ficha("aquiles", "Licra Aquiles")],
  },
  {
    handle: "buzo-apolo",
    title: "Buzo Apolo",
    model: "apolo",
    brand: "Altor",
    summary: "Buzo de manga larga, unisex. Poliéster y elastómero para agilidad y libertad de movimiento.",
    features: ["Filtro UV", "Transporte de humedad", "Elongación bi-direccional"],
    audience: ["hombres", "mujeres", "ninos"],
    sports: TOP_SPORTS,
    featured: true,
    versions: [
      { name: "Infantil", price: 50000 },
      { name: "Adulto", price: 70000 },
    ],
    cuts: {
      Hombre: ["Negro", "Blanco", "Gris", "Azul rey", "Rojo", "Verde Antioquia", "Verde militar", "Naranja", "Morado", "Fucsia"],
      Dama: ["Negro", "Blanco", "Gris", "Azul rey", "Rojo", "Verde Antioquia", "Verde militar", "Naranja", "Morado", "Fucsia"],
    },
    colors: ["Azul oscuro", "Amarillo", "Verde limón", "Terracota", "Azul celeste", "Aguamarina"],
    gallery: [ficha("apolo", "Buzo Apolo")],
  },
  {
    handle: "buzo-paris",
    title: "Buzo Paris",
    model: "paris",
    brand: "Altor",
    summary:
      "Buzo de cuello alto, unisex. El cuello alto y el dedal en la manga protegen el cuello y el dorso de la mano.",
    features: TOP_FEATURES,
    audience: ["hombres", "mujeres"],
    sports: TOP_SPORTS,
    versions: [{ name: "Adulto", price: 70000 }],
    sizes: ["S", "M", "L", "XL", "2XL"],
    cuts: {
      Hombre: [
        "Negro", "Blanco", "Gris", "Azul oscuro", "Azul rey", "Rojo", "Verde Antioquia", "Verde militar",
        "Verde limón", "Naranja", "Amarillo", "Morado", "Fucsia",
      ],
      Dama: [
        "Negro", "Blanco", "Gris", "Azul oscuro", "Azul rey", "Rojo", "Verde Antioquia", "Verde militar",
        "Verde limón", "Naranja", "Amarillo", "Morado", "Fucsia",
      ],
    },
  },
  {
    handle: "buzo-kronos",
    title: "Buzo Kronos",
    model: "kronos",
    brand: "Altor",
    summary: "Buzo de manga larga con malla en hombros y laterales para mayor transpirabilidad, unisex.",
    features: TOP_FEATURES,
    audience: ["hombres", "mujeres"],
    sports: TOP_SPORTS,
    versions: [{ name: "Adulto", price: 70000 }],
    cuts: {
      Hombre: [
        "Negro", "Blanco", "Gris", "Azul oscuro", "Azul rey", "Rojo", "Verde militar", "Verde limón", "Naranja",
        "Amarillo", "Morado", "Fucsia",
      ],
      Dama: [
        "Negro", "Blanco", "Gris", "Azul oscuro", "Azul rey", "Rojo", "Verde Antioquia", "Verde militar",
        "Verde limón", "Naranja", "Amarillo", "Morado", "Fucsia",
      ],
    },
    gallery: [{ file: "fotos/kronos-detalle.webp", alt: "Malla del Buzo Kronos en hombros y laterales" }],
  },
  {
    handle: "camisa-quiron",
    title: "Camisa Quirón",
    model: "quiron",
    brand: "Altor",
    summary: "Camisa de manga corta, unisex, en poliéster y elastómero.",
    features: TOP_FEATURES,
    audience: ["hombres", "mujeres"],
    sports: ["running", "gym", "futbol"],
    versions: [{ name: "Adulto", price: 60000 }],
    cuts: {
      Hombre: [
        "Negro", "Blanco", "Gris", "Azul oscuro", "Azul rey", "Rojo", "Verde Antioquia", "Verde militar",
        "Verde limón", "Naranja", "Amarillo", "Morado", "Fucsia",
      ],
      Dama: [
        "Negro", "Blanco", "Gris", "Azul oscuro", "Azul rey", "Rojo", "Verde Antioquia", "Verde militar",
        "Verde limón", "Naranja", "Morado", "Fucsia",
      ],
    },
  },
  {
    handle: "camisilla-eros",
    title: "Camisilla Eros",
    model: "eros",
    brand: "Altor",
    summary: "Camisilla de manga sisa, unisex, en poliéster y elastómero.",
    features: TOP_FEATURES,
    audience: ["hombres", "mujeres"],
    sports: ["running", "gym"],
    versions: [{ name: "Adulto", price: 50000 }],
    colors: ["Negro"],
    gallery: [{ file: "fotos/eros-lado.webp", alt: "Camisilla Eros de lado" }],
  },
  {
    handle: "camisilla-mustang",
    title: "Camisilla Mustang",
    model: "mustang",
    brand: "Altor",
    summary: "Camisilla deportiva.",
    features: [],
    audience: ["hombres"],
    sports: ["running", "gym"],
    versions: [{ name: "Adulto", price: 50000 }],
    colors: ["Negro"],
    gallery: [{ file: "fotos/mustang-lado.webp", alt: "Camisilla Mustang de lado" }],
  },
  {
    handle: "chaqueta-cortavientos",
    title: "Chaqueta Cortavientos",
    model: "cortavientos",
    brand: "Altor",
    summary: "Chaqueta cortavientos, unisex.",
    features: [
      "Colores llamativos, visibles en salidas nocturnas",
      "Bolsillo lateral en el que se guarda la propia chaqueta",
      "Tela semi impermeable",
      "Cuello alto que protege el cuello",
    ],
    audience: ["hombres", "mujeres"],
    sports: ["running", "ciclismo", "patinaje"],
    versions: [{ name: "Adulto", price: 70000 }],
    cuts: {
      Hombre: ["Azul rey", "Fucsia", "Naranja"],
      Dama: ["Azul rey", "Fucsia", "Naranja", "Verde limón"],
    },
  },
  {
    handle: "buzo-termico",
    title: "Buzo Térmico",
    model: "termico",
    brand: "Altor",
    summary: "Buzo térmico de manga larga en tela perchada.",
    features: [],
    audience: ["hombres", "mujeres"],
    sports: ["running", "ciclismo"],
    versions: [{ name: "Adulto", price: 75000 }],
    colors: ["Blanco"],
    gallery: [{ file: "fotos/termico-tela.webp", alt: "Tela perchada del Buzo Térmico" }],
  },
  {
    handle: "jersey-ciclismo",
    title: "Jersey de Ciclismo",
    model: "jersey",
    brand: "Spaz",
    summary: "Jersey de ciclismo sublimado de la línea Spaz Cycling. Celeste y Lines son de hombre; Fractal, Olive y Pro 2.0, de mujer.",
    features: [],
    audience: ["hombres", "mujeres"],
    sports: ["ciclismo"],
    versions: [{ name: "Adulto", price: 95000 }],
    colors: ["Celeste", "Lines", "Fractal", "Olive", "Pro 2.0"],
    colorOption: "Diseño",
  },
  {
    handle: "licra-voley",
    title: "Licra de Vóley",
    model: "voley",
    brand: "Altor",
    summary:
      "Licra de voleibol para dama, un poco más corta que la Aurora. Tejido tricot de poliéster y elastano con Bi-stretch para un ajuste anatómico óptimo.",
    features: [],
    audience: ["mujeres"],
    sports: ["voleibol"],
    versions: [{ name: "Adulto", price: 50000 }],
    colors: ["Negro"],
    gallery: [
      { file: "fotos/voley-espalda.webp", alt: "Licra de Vóley por detrás" },
      { file: "fotos/voley-ambiente.webp", alt: "Licra de Vóley en la cancha" },
    ],
  },
  {
    handle: "licra-natacion-hipolito",
    title: "Licra de Natación Hipólito",
    model: "hipolito",
    brand: "Altor",
    summary:
      "Licra embonada para natación con laterales sublimados, cordón de ajuste y forro interno de refuerzo. Se vende en conjunto con el buzo de natación.",
    features: [],
    audience: ["hombres", "mujeres"],
    sports: ["natacion"],
    versions: [{ name: "Adulto", price: 65000 }],
  },
  {
    handle: "manguillas",
    title: "Manguillas",
    model: "manguillas",
    brand: "Altor",
    summary: "Mangas que cubren de la muñeca a la mitad del hombro.",
    features: TOP_FEATURES,
    audience: ["hombres", "mujeres"],
    sports: ["ciclismo", "running", "patinaje"],
    versions: [{ name: "Adulto", price: 35000 }],
    colors: ["Blanco"],
  },
  {
    handle: "conjunto-falda-short-top",
    title: "Conjunto Falda Short y Top",
    model: "conjunto-falda-top",
    brand: "Altor",
    summary: "Falda short y top para dama. Se venden en conjunto.",
    features: ["Bi-stretch", "Sportsec", "Diseño anatómico", "Top de costura cubierta"],
    audience: ["mujeres"],
    sports: ["gym", "running"],
    versions: [{ name: "Adulto", price: 90000 }],
  },
  {
    handle: "leggins",
    title: "Leggins",
    model: "leggins",
    brand: "Altor",
    summary: "Leggins para dama con diseño sublimado en los laterales.",
    features: ["Bi-stretch", "Sportsec", "Diseño anatómico"],
    audience: ["mujeres"],
    sports: ["gym", "running"],
    versions: [{ name: "Adulto", price: 75000 }],
  },
  {
    handle: "short-cintura-anatomica",
    title: "Short Cintura Anatómica",
    model: "short-cintura",
    brand: "Altor",
    summary: "Short para dama con diseño sublimado en los laterales, más corto que los leggins.",
    features: ["Bi-stretch", "Sportsec", "Diseño anatómico"],
    audience: ["mujeres"],
    sports: ["gym", "running"],
    versions: [{ name: "Adulto", price: 55000 }],
  },
  {
    handle: "jogger",
    title: "Jogger",
    model: "jogger",
    brand: "Altor",
    summary: "Jogger deportivo. Solo disponible en talla infantil.",
    features: [],
    audience: ["ninos"],
    sports: ["running", "gym", "patinaje"],
    versions: [{ name: "Infantil", price: 65000 }],
  },
];

const money = (amount: number | null) => ({ amount: (amount ?? 50000).toFixed(1), currencyCode: "COP" });

// "Verde limón" -> "verde-limon", "Pro 2.0" -> "pro-2-0": así se llaman los archivos de foto.
const slug = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const unique = (values: string[]) => [...new Set(values)];

function toProduct(item: CatalogItem): Product {
  const photo = (name: string, altText: string): ProductImage => ({ url: `/products/fotos/${name}.webp`, altText });
  const cutNames = Object.keys(item.cuts ?? {});
  const colorOption = item.colorOption ?? "Color";

  // Cada combinación de corte y color que tiene foto; [{}] si el producto no tiene ni cortes ni colores.
  const looks: { cut?: string; color?: string; image: ProductImage }[] = cutNames.length
    ? cutNames.flatMap((cut) => [
        ...item.cuts![cut].map((color) => ({
          cut,
          color,
          image: photo(`${item.model}-${slug(cut)}-${slug(color)}`, `${item.title} ${cut} - ${color}`),
        })),
        ...(item.colors ?? []).map((color) => ({
          cut,
          color,
          image: photo(`${item.model}-${slug(color)}`, `${item.title} - ${color}`),
        })),
      ])
    : item.colors?.length
      ? item.colors.map((color) => ({
          color,
          image: photo(`${item.model}-${slug(color)}`, `${item.title} - ${color}`),
        }))
      : [{ image: photo(item.model, item.title) }];

  const options = [
    { name: "Versión", values: item.versions.length > 1 ? item.versions.map((version) => version.name) : [] },
    { name: "Corte", values: cutNames },
    { name: colorOption, values: unique(looks.flatMap((look) => (look.color ? [look.color] : []))) },
    { name: "Talla", values: item.sizes ?? [] },
  ].filter((option) => option.values.length > 0);

  const variants = item.versions.flatMap((version) =>
    looks.flatMap((look) =>
      (item.sizes ?? [""]).map((size) => {
        const selectedOptions = [
          { name: "Versión", value: version.name },
          { name: "Corte", value: look.cut ?? "" },
          { name: colorOption, value: look.color ?? "" },
          { name: "Talla", value: size },
        ].filter((selected) => options.some((option) => option.name === selected.name));
        const title = selectedOptions.map((selected) => selected.value).join(" / ") || "Única";
        return {
          node: {
            id: `var-${item.handle}-${slug(title)}`,
            title,
            price: money(version.price),
            availableForSale: true,
            selectedOptions,
            image: look.image,
          },
        };
      }),
    ),
  );

  const prices = item.versions.map((version) => version.price ?? 0);
  const description = [item.summary, ...item.features.map((feature) => `• ${feature}`)].join("\n");

  return {
    id: `prod-${item.handle}`,
    title: item.title,
    description,
    handle: item.handle,
    tags: [
      item.brand.toLowerCase(),
      ...item.audience,
      ...(item.sports ?? []),
      ...(item.featured ? ["carrusel_home"] : []),
    ],
    priceRange: { minVariantPrice: money(Math.min(...prices)) },
    images: {
      edges: [
        { node: looks[0].image },
        ...(item.gallery ?? []).map(({ file, alt }) => ({ node: { url: `/products/${file}`, altText: alt } })),
      ],
    },
    variants: { edges: variants },
    options,
  };
}

export const catalogProducts: Product[] = catalog.map(toProduct);
