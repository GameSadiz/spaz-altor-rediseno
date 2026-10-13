import React, { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
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
    if (activeFilter === "licras")
      return product.handle.includes("licra") || product.handle.includes("multideportivo");
    if (activeFilter === "buzos")
      return (
        product.handle.includes("buzo") ||
        product.handle.includes("camisa") ||
        product.handle.includes("cortavientos")
      );
    if (activeFilter === "mujeres") return product.tags?.includes("mujeres");
    if (activeFilter === "hombres") return product.tags?.includes("hombres");
    if (activeFilter === "ninos") return product.tags?.includes("ninos");
    return true;
  });

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  const filterTitleMap: Record<CatalogFilter, string> = {
    all: "PRENDAS DE ALTO RENDIMIENTO",
    mujeres: "COLECCIÓN MUJERES",
    hombres: "COLECCIÓN HOMBRES",
    ninos: "COLECCIÓN INFANTIL",
    licras: "LICRAS DE COMPRESIÓN",
    buzos: "BUZOS & TOPS TÉCNICOS",
  };

  return (
    <section id="catalogo" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-studio-border pb-6 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-red block mb-1">
              CATÁLOGO OFICIAL ({filteredProducts.length} REFERENCIAS)
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-neutral-900 tracking-tight leading-none">
              {searchQuery
                ? `RESULTADOS: "${searchQuery}"`
                : filterTitleMap[activeFilter]}
            </h2>
          </div>

          {/* Minimalist Underline Filter Tabs */}
          <div className="flex items-center gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`text-xs font-bold tracking-widest uppercase pb-2 border-b-2 transition-all whitespace-nowrap ${
                  activeFilter === tab.id
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
        {!showAll && filteredProducts.length > 8 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-bold text-xs tracking-widest uppercase px-10 py-4 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>VER LAS {filteredProducts.length} REFERENCIAS DE ESTA CATEGORÍA</span>
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
