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
    { id: "all", label: "TODO" },
    { id: "mujeres", label: "MUJERES" },
    { id: "hombres", label: "HOMBRES" },
    { id: "ninos", label: "INFANTIL" },
    { id: "licras", label: "LICRAS" },
    { id: "buzos", label: "BUZOS & TOPS" },
  ];

  const visibleProducts = showAll ? catalogProducts : catalogProducts.slice(0, 8);

  return (
    <section id="catalogo" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-studio-border pb-6 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-red block mb-1">
              CATÁLOGO OFICIAL
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-neutral-900 tracking-tight leading-none uppercase">
              {searchQuery ? `RESULTADOS: "${searchQuery}"` : "PRENDAS DE ALTO RENDIMIENTO"}
            </h2>
          </div>

          {/* Minimalist Underline Filter Tabs */}
          <div className="flex items-center gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onFilterChange && onFilterChange(tab.id)}
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
              onAddToCart={onAddToCart}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Show All Toggle */}
        {!showAll && catalogProducts.length > 8 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-bold text-xs tracking-widest uppercase px-10 py-4 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>VER TODAS LAS REFERENCIAS</span>
            </button>
          </div>
        )}

        {/* Editorial Bottom Action */}
        <div className="mt-16 pt-10 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            ¿Buscas uniformes personalizados para tu club o referencias al por mayor?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-brand-black hover:bg-neutral-800 text-white font-semibold text-xs tracking-widest uppercase px-7 py-4 transition-all"
          >
            <span>HABLAR CON UN ASESOR</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
