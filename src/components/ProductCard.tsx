import React, { useState } from "react";
import { MessageCircle, ShoppingBag, ShieldCheck } from "lucide-react";
import type { Product } from "@/types/product";
import type { CatalogFilter } from "@/components/CategoryShowcase";
import { formatPrice, getColorHex } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  activeFilter?: CatalogFilter;
  onAddToCart?: (
    product: Product,
    variantTitle?: string,
    variantPrice?: string,
    variantImage?: string
  ) => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  activeFilter = "all",
  onAddToCart,
  onSelectProduct,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorOption = product.options?.find((opt) =>
    ["color", "colores", "diseño"].some((k) => opt.name.toLowerCase().includes(k))
  );
  const colors = colorOption ? colorOption.values : [];
  const [selectedColor, setSelectedColor] = useState<string | null>(colors[0] || null);

  // Determine preferred version and cut based on active category filter
  const preferredVersion = activeFilter.includes("ninos") ? "Infantil" : "Adulto";
  const preferredCut = activeFilter.includes("mujeres")
    ? "Dama"
    : activeFilter.includes("hombres")
      ? "Hombre"
      : null;

  const variants = product.variants.edges.map((e) => e.node);

  // Find the best matching variant for the selected color + active filter context
  const matchingVariant =
    variants.find((node) => {
      const colorMatch =
        !selectedColor ||
        node.selectedOptions.some(
          (opt) => opt.name === colorOption?.name && opt.value === selectedColor
        );
      const versionMatch =
        !node.selectedOptions.some((opt) => opt.name === "Versión") ||
        node.selectedOptions.some(
          (opt) => opt.name === "Versión" && opt.value === preferredVersion
        );
      const cutMatch =
        !preferredCut ||
        !node.selectedOptions.some((opt) => opt.name === "Corte") ||
        node.selectedOptions.some(
          (opt) => opt.name === "Corte" && opt.value === preferredCut
        );
      return colorMatch && versionMatch && cutMatch;
    }) ||
    variants.find((node) =>
      selectedColor
        ? node.selectedOptions.some(
            (opt) => opt.name === colorOption?.name && opt.value === selectedColor
          )
        : true
    ) ||
    variants[0];

  const firstImage =
    matchingVariant?.image?.url ||
    product.images.edges[0]?.node?.url ||
    "/products/fotos/aurora-negro.webp";

  const secondImage = product.images.edges[1]?.node?.url || firstImage;
  const price = matchingVariant?.price?.amount || product.priceRange?.minVariantPrice?.amount;
  const hasValidPrice = price && parseFloat(price) > 0;

  const audienceLabel =
    activeFilter === "mujeres"
      ? "DAMA"
      : activeFilter === "hombres"
        ? "HOMBRE"
        : activeFilter === "ninos"
          ? "INFANTIL"
          : product.tags?.includes("mujeres") && product.tags?.includes("hombres")
            ? "UNISEX"
            : product.tags?.[1]?.toUpperCase() || "DEPORTIVO";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col justify-between"
    >
      {/* 1. Clean Media Container */}
      <div
        onClick={() => onSelectProduct && onSelectProduct(product)}
        className="relative aspect-[3/4] bg-studio-muted overflow-hidden cursor-pointer"
      >
        {/* Subtle UPF Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold tracking-wider text-neutral-800 uppercase">
          <ShieldCheck className="w-3 h-3 text-brand-green" />
          <span>UPF 50+</span>
        </div>

        {/* Product photo */}
        <img
          src={isHovered && !selectedColor && secondImage !== firstImage ? secondImage : firstImage}
          alt={`${product.title} ${selectedColor || ""}`}
          className="w-full h-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick Action Bar on hover */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          {hasValidPrice ? (
            <button
              onClick={() =>
                onAddToCart &&
                onAddToCart(
                  product,
                  matchingVariant?.title,
                  price,
                  firstImage
                )
              }
              className="w-full bg-brand-black hover:bg-neutral-800 text-white py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>AÑADIR A LA BOLSA</span>
            </button>
          ) : (
            <a
              href={`https://wa.me/573114337982?text=${encodeURIComponent(
                `Hola, quisiera consultar precio y tallas para: ${product.title}${
                  selectedColor ? ` (${selectedColor})` : ""
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-green hover:bg-brand-green-hover text-white py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>CONSULTAR POR WHATSAPP</span>
            </a>
          )}
        </div>
      </div>

      {/* 2. Editorial Typography & Interactive Color Swatches */}
      <div className="pt-3.5 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-semibold tracking-widest text-neutral-400 uppercase">
          <span>
            {product.tags?.[0]?.toUpperCase() || "ALTOR"} · {audienceLabel}
          </span>
          {selectedColor && (
            <span className="text-[10px] text-neutral-500 font-normal capitalize">
              {selectedColor}
            </span>
          )}
        </div>

        <h3
          onClick={() => onSelectProduct && onSelectProduct(product)}
          className="font-display text-2xl text-neutral-900 group-hover:text-brand-red transition-colors tracking-wide leading-tight cursor-pointer"
        >
          {product.title}
        </h3>

        {/* Interactive Color Swatches */}
        {colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1 flex-wrap">
            {colors.slice(0, 7).map((colorName, idx) => {
              const isSelected = selectedColor === colorName;
              return (
                <button
                  key={idx}
                  type="button"
                  title={colorName}
                  onClick={() => setSelectedColor(colorName)}
                  onMouseEnter={() => setSelectedColor(colorName)}
                  className={`w-3.5 h-3.5 rounded-full transition-all ${
                    isSelected
                      ? "ring-2 ring-offset-2 ring-neutral-900 scale-110"
                      : "border border-neutral-300 hover:scale-110"
                  }`}
                  style={{ backgroundColor: getColorHex(colorName) }}
                />
              );
            })}
            {colors.length > 7 && (
              <button
                type="button"
                onClick={() => onSelectProduct && onSelectProduct(product)}
                className="text-[10px] text-neutral-500 hover:text-neutral-900 pl-1 font-semibold"
              >
                +{colors.length - 7} más
              </button>
            )}
          </div>
        )}

        {/* Price */}
        <div className="pt-1 flex items-baseline justify-between">
          <span
            className={`text-sm font-semibold tracking-tight ${
              hasValidPrice ? "text-neutral-900" : "text-neutral-500 text-xs uppercase font-bold"
            }`}
          >
            {hasValidPrice ? formatPrice(price!) : "Precio bajo consulta"}
          </span>
          <button
            onClick={() => onSelectProduct && onSelectProduct(product)}
            className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 hover:text-neutral-900 underline underline-offset-4"
          >
            Ver ficha
          </button>
        </div>
      </div>
    </div>
  );
};
