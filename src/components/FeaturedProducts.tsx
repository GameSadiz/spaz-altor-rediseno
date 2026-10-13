import React, { useState } from "react";
import { ArrowRight, Plus, X } from "lucide-react";
import { catalogProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import type { CatalogFilter } from "@/components/CategoryShowcase";
import type { Product } from "@/types/product";

interface FeaturedProductsProps {
  onAddToCart?: (
    product: Product,
    variantTitle?: string,
    variantPrice?: string,
    variantImage?: string
  ) => void;
  onSelectProduct?: (product: Product) => void;
  searchQuery?: string;
  activeFilter?: CatalogFilter;
  onFilterChange?: (filter: CatalogFilter) => void;
}

const FILTER_TITLES: Record<string, string> = {
  all: "PRENDAS DE ALTO RENDIMIENTO",
  mujeres: "COLECCIÓN MUJERES",
  "mujeres:destacados": "MUJERES · LO MÁS VENDIDO",
  "mujeres:novedades": "MUJERES · NOVEDADES",
  "mujeres:licras": "MUJERES · LICRAS & LEGGINS",
  "mujeres:buzos": "MUJERES · BUZOS & CORTAVIENTOS",
  "mujeres:camisas": "MUJERES · CAMISAS & TOPS",
  "mujeres:conjuntos": "MUJERES · SHORTS & CONJUNTOS",
  "mujeres:accesorios": "MUJERES · ACCESORIOS TÉCNICOS",
  "mujeres:patinaje": "MUJERES · LÍNEA PATINAJE",
  "mujeres:gym": "MUJERES · RUNNING & GYM",
  "mujeres:ciclismo": "MUJERES · LÍNEA CICLISMO",
  hombres: "COLECCIÓN HOMBRES",
  "hombres:destacados": "HOMBRES · LO MÁS VENDIDO",
  "hombres:novedades": "HOMBRES · NOVEDADES",
  "hombres:licras": "HOMBRES · LICRAS DE COMPRESIÓN",
  "hombres:buzos": "HOMBRES · BUZOS & CORTAVIENTOS",
  "hombres:camisas": "HOMBRES · CAMISAS & CAMISILLAS",
  "hombres:accesorios": "HOMBRES · ACCESORIOS TÉCNICOS",
  "hombres:patinaje": "HOMBRES · LÍNEA PATINAJE",
  "hombres:futbol": "HOMBRES · LÍNEA FÚTBOL",
  "hombres:ciclismo": "HOMBRES · LÍNEA CICLISMO",
  "hombres:gym": "HOMBRES · RUNNING & GYM",
  ninos: "COLECCIÓN INFANTIL",
  "ninos:tallas-pequenas": "INFANTIL · TALLAS 4 A 8",
  "ninos:tallas-juveniles": "INFANTIL · TALLAS 10 A 16",
  "ninos:licras": "INFANTIL · LICRAS DE COMPRESIÓN",
  "ninos:buzos": "INFANTIL · BUZOS CON FILTRO UV",
  "ninos:jogger": "INFANTIL · JOGGERS & LARGOS",
  "ninos:patinaje": "INFANTIL · ESCUELAS DE PATINAJE",
  "ninos:futbol": "INFANTIL · ESCUELAS DE FÚTBOL",
  "ninos:destacados": "INFANTIL · LO MÁS VENDIDO",
  licras: "LICRAS DE COMPRESIÓN",
  buzos: "BUZOS & TOPS TÉCNICOS",
  "deporte:patinaje": "DISCIPLINA · PATINAJE DE CARRERAS",
  "deporte:ciclismo": "DISCIPLINA · CICLISMO DE RUTA & MTB",
  "deporte:running": "DISCIPLINA · RUNNING & TRAIL",
  "deporte:gym": "DISCIPLINA · GYM & CROSSTRAINING",
  "deporte:futbol": "DISCIPLINA · FÚTBOL & ENTRENAMIENTO",
  "deporte:voleibol": "DISCIPLINA · VOLEIBOL",
  "deporte:natacion": "DISCIPLINA · NATACIÓN",
  "deporte:uv": "PROTECCIÓN SOLAR UPF 50+",
  ofertas: "PRECIOS ESPECIALES DE FÁBRICA",
  "ofertas:mujeres": "OFERTAS · SELECCIÓN MUJERES",
  "ofertas:hombres": "OFERTAS · SELECCIÓN HOMBRES",
  "ofertas:ninos": "OFERTAS · LÍNEA INFANTIL DESDE $40.000",
  "ofertas:basicos": "ESENCIALES DESDE $40.000 COP",
  "ofertas:clubes": "DOTACIÓN PARA CLUBES & ESCUELAS",
};

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onAddToCart,
  onSelectProduct,
  searchQuery = "",
  activeFilter = "all",
  onFilterChange,
}) => {
  const [showAll, setShowAll] = useState(false);

  const filterTabs: { id: CatalogFilter; label: string }[] = [
    { id: "all", label: `TODO (${catalogProducts.length})` },
    { id: "mujeres", label: "MUJERES" },
    { id: "hombres", label: "HOMBRES" },
    { id: "ninos", label: "INFANTIL" },
    { id: "licras", label: "LICRAS" },
    { id: "buzos", label: "BUZOS & TOPS" },
  ];

  const handleTabClick = (id: CatalogFilter) => {
    if (onFilterChange) {
      onFilterChange(id);
    }
    setShowAll(false);
  };

  const filteredProducts = catalogProducts.filter((product) => {
    const matchesSearch =
      !searchQuery.trim() ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (activeFilter === "all") return true;

    const h = product.handle;
    const tags = product.tags ?? [];

    // Direct top-level tabs
    if (activeFilter === "licras") {
      return (
        h.includes("licra") ||
        h.includes("multideportivo") ||
        h.includes("leggins") ||
        h.includes("short")
      );
    }
    if (activeFilter === "buzos") {
      return (
        h.includes("buzo") ||
        h.includes("camisa") ||
        h.includes("camisilla") ||
        h.includes("cortavientos") ||
        h.includes("jersey")
      );
    }
    if (activeFilter === "mujeres") return tags.includes("mujeres");
    if (activeFilter === "hombres") return tags.includes("hombres");
    if (activeFilter === "ninos" || activeFilter === "ninos:tallas-pequenas" || activeFilter === "ninos:tallas-juveniles") {
      return tags.includes("ninos");
    }

    // Audience prefix check for compound filters (mujeres:*, hombres:*, ninos:*)
    if (activeFilter.startsWith("mujeres:") && !tags.includes("mujeres")) return false;
    if (activeFilter.startsWith("hombres:") && !tags.includes("hombres")) return false;
    if (activeFilter.startsWith("ninos:") && !tags.includes("ninos")) return false;

    const sub = activeFilter.includes(":") ? activeFilter.split(":")[1] : activeFilter;

    // Garment type sub-filters
    if (sub === "licras") {
      return h.includes("licra") || h.includes("multideportivo") || h.includes("leggins");
    }
    if (sub === "buzos") {
      return h.includes("buzo") || h.includes("cortavientos");
    }
    if (sub === "camisas") {
      return h.includes("camisa") || h.includes("camisilla") || h.includes("jersey");
    }
    if (sub === "conjuntos") {
      return h.includes("conjunto") || h.includes("short") || h.includes("leggins") || h === "licra-voley";
    }
    if (sub === "jogger") {
      return h.includes("jogger") || h.includes("multideportivo");
    }
    if (sub === "accesorios") {
      return h.includes("manguillas") || h.includes("cortavientos");
    }
    if (sub === "destacados") {
      return tags.includes("carrusel_home");
    }
    if (sub === "novedades") {
      return (
        h.includes("cortavientos") ||
        h.includes("kronos") ||
        h.includes("paris") ||
        h.includes("jersey") ||
        h.includes("conjunto") ||
        h.includes("leggins") ||
        h.includes("short")
      );
    }

    // Sport sub-filters
    if (["patinaje", "ciclismo", "running", "gym", "futbol"].includes(sub)) {
      return tags.includes(sub);
    }
    if (sub === "voleibol") {
      return tags.includes("voleibol") || h === "licra-aurora" || h === "short-cintura-anatomica";
    }
    if (sub === "natacion") {
      return tags.includes("natacion") || h === "licra-aurora" || h === "buzo-apolo";
    }
    if (sub === "uv") {
      return (
        h.includes("buzo") ||
        h.includes("camisa") ||
        h.includes("camisilla") ||
        h.includes("manguillas") ||
        h.includes("cortavientos")
      );
    }

    // Ofertas sub-filters
    if (activeFilter === "ofertas" || activeFilter === "ofertas:basicos") {
      return Number(product.priceRange.minVariantPrice.amount) > 0 &&
        Number(product.priceRange.minVariantPrice.amount) <= 60000;
    }
    if (activeFilter === "ofertas:mujeres") {
      return tags.includes("mujeres") && Number(product.priceRange.minVariantPrice.amount) > 0;
    }
    if (activeFilter === "ofertas:hombres") {
      return tags.includes("hombres") && Number(product.priceRange.minVariantPrice.amount) > 0;
    }
    if (activeFilter === "ofertas:ninos") {
      return tags.includes("ninos");
    }
    if (activeFilter === "ofertas:clubes") {
      return tags.includes("ninos") && tags.includes("hombres");
    }

    return true;
  });

  const visibleProducts =
    showAll || activeFilter !== "all" ? filteredProducts : filteredProducts.slice(0, 8);

  const activeHeadline =
    FILTER_TITLES[activeFilter] || "PRENDAS DE ALTO RENDIMIENTO";

  // Highlight corresponding main tab even when a sub-filter is active
  const isTabActive = (tabId: CatalogFilter) => {
    if (activeFilter === tabId) return true;
    if (tabId !== "all" && activeFilter.startsWith(`${tabId}:`)) return true;
    return false;
  };

  return (
    <section id="catalogo" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-studio-border pb-6 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-red">
                CATÁLOGO OFICIAL ({filteredProducts.length} REFERENCIAS)
              </span>
              {activeFilter.includes(":") && (
                <button
                  onClick={() => handleTabClick(activeFilter.split(":")[0])}
                  className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase bg-studio-muted border border-studio-border text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 px-2.5 py-0.5 transition-colors"
                >
                  <span>LIMPIAR SUB-FILTRO</span>
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-neutral-900 tracking-tight leading-none uppercase">
              {searchQuery
                ? `RESULTADOS: "${searchQuery}"`
                : activeHeadline}
            </h2>
          </div>

          {/* Minimalist Underline Filter Tabs */}
          <div className="flex items-center gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`text-xs font-bold tracking-widest uppercase pb-2 border-b-2 transition-all whitespace-nowrap ${
                  isTabActive(tab.id)
                    ? "border-brand-red text-neutral-900"
                    : "border-transparent text-neutral-400 hover:text-neutral-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Unboxed Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              activeFilter={activeFilter}
              onAddToCart={onAddToCart}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Show All Toggle */}
        {!showAll && activeFilter === "all" && filteredProducts.length > 8 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-bold text-xs tracking-widest uppercase px-10 py-4 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>VER LAS {filteredProducts.length} REFERENCIAS DEL CATÁLOGO</span>
            </button>
          </div>
        )}

        {/* Editorial Bottom Action */}
        <div className="mt-16 pt-10 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            ¿Buscas uniformes personalizados para tu club o referencias al por mayor?
          </p>
          <a
            href="https://wa.me/573114337982?text=Hola,%20quisiera%20consultar%20el%20catálogo%20completo%20de%20Spaz%20Altor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-black hover:bg-neutral-800 text-white font-semibold text-xs tracking-widest uppercase px-7 py-4 transition-all"
          >
            <span>HABLAR CON UN ASESOR EN WHATSAPP</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
