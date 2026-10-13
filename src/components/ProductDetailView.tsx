import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Truck,
  Check,
  Ruler,
} from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice, getColorHex } from "@/lib/utils";
import { catalogProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";

import type { CatalogFilter } from "@/components/CategoryShowcase";

interface ProductDetailViewProps {
  product: Product;
  activeFilter?: CatalogFilter;
  onBack: () => void;
  onAddToCart: (
    product: Product,
    variantTitle?: string,
    variantPrice?: string,
    variantImage?: string,
    quantity?: number
  ) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  activeFilter = "all",
  onBack,
  onAddToCart,
  onSelectProduct,
}) => {
  const variants = product.variants.edges.map((e) => e.node);

  // Initialize selected options from context-aware variant
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [activeGalleryUrl, setActiveGalleryUrl] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const preferredVersion = activeFilter.includes("ninos") ? "Infantil" : "Adulto";
    const preferredCut = activeFilter.includes("mujeres")
      ? "Dama"
      : activeFilter.includes("hombres")
        ? "Hombre"
        : null;

    const initialVariant =
      variants.find((v) => {
        const vMatch =
          !v.selectedOptions.some((o) => o.name === "Versión") ||
          v.selectedOptions.some((o) => o.name === "Versión" && o.value === preferredVersion);
        const cMatch =
          !preferredCut ||
          !v.selectedOptions.some((o) => o.name === "Corte") ||
          v.selectedOptions.some((o) => o.name === "Corte" && o.value === preferredCut);
        return vMatch && cMatch;
      }) || variants[0];

    if (initialVariant) {
      const initial: Record<string, string> = {};
      initialVariant.selectedOptions.forEach((opt) => {
        initial[opt.name] = opt.value;
      });
      setSelectedOptions(initial);
    }
    setActiveGalleryUrl(null);
    setQuantity(1);
  }, [product.id, activeFilter]);

  // Find current matching variant
  const currentVariant =
    variants.find((v) =>
      v.selectedOptions.every((opt) => selectedOptions[opt.name] === opt.value)
    ) ||
    variants.find((v) =>
      v.selectedOptions.some(
        (opt) =>
          ["color", "colores", "diseño"].includes(opt.name.toLowerCase()) &&
          selectedOptions[opt.name] === opt.value
      )
    ) ||
    variants[0];

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionName]: value }));
    setActiveGalleryUrl(null);
  };

  const mainImageUrl =
    activeGalleryUrl ||
    currentVariant?.image?.url ||
    product.images.edges[0]?.node?.url ||
    "/products/fotos/aurora-negro.webp";

  // Build unique gallery images (current variant image + extra gallery images)
  const galleryImages = [
    ...(currentVariant?.image ? [currentVariant.image] : []),
    ...product.images.edges.slice(1).map((e) => e.node),
  ];

  const price = currentVariant?.price?.amount || product.priceRange?.minVariantPrice?.amount;
  const hasValidPrice = price && parseFloat(price) > 0;

  const lines = product.description.split("\n");
  const summaryText = lines[0] || "";
  const bulletPoints = lines
    .slice(1)
    .map((l) => l.replace(/^•\s*/, "").trim())
    .filter(Boolean);

  // Related products
  const related = catalogProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-studio-border bg-studio-muted/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-neutral-700 hover:text-brand-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>VOLVER AL CATÁLOGO</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-[11px] tracking-widest uppercase text-neutral-400">
            <span>CATÁLOGO</span>
            <span>/</span>
            <span>{product.tags?.[0] || "ALTOR"}</span>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Main Editorial Product Layout */}
      <div className="container mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (7 cols): High-Resolution Studio Imagery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[4/5] bg-studio-muted relative flex items-center justify-center p-8 overflow-hidden">
              <img
                src={mainImageUrl}
                alt={product.title}
                className="w-full h-full object-contain transition-all duration-300"
              />

              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-neutral-900 border border-neutral-200">
                PROTECCIÓN SOLAR UPF 50+
              </div>
            </div>

            {/* Gallery Thumbnails (Includes technical sheet ficha-*.jpg if available) */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {galleryImages.map((img, idx) => {
                  const isActive = mainImageUrl === img.url;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryUrl(img.url)}
                      className={`aspect-square bg-studio-muted p-2 border transition-all overflow-hidden ${
                        isActive
                          ? "border-neutral-900 ring-1 ring-neutral-900"
                          : "border-transparent hover:border-neutral-300"
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.altText || `Vista ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column (5 cols): Editorial Specification & Purchase Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            {/* Header Info */}
            <div className="border-b border-studio-border pb-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-red">
                  {product.tags?.[0]?.toUpperCase() || "ALTOR"} · LÍNEA PROFESIONAL
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-green flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Disponible
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl text-neutral-900 tracking-tight leading-none uppercase">
                {product.title}
              </h1>

              <div className="pt-2 flex items-baseline gap-3">
                <span className="font-display text-3xl text-neutral-900">
                  {hasValidPrice ? formatPrice(price!) : "PRECIO BAJO CONSULTA"}
                </span>
                {hasValidPrice && (
                  <span className="text-xs text-neutral-400 uppercase tracking-wider">
                    COP · Pago contra entrega disponible
                  </span>
                )}
              </div>
            </div>

            {/* Summary */}
            <p className="text-sm text-neutral-600 leading-relaxed">
              {summaryText}
            </p>

            {/* Dynamic Variant Options (Versión, Corte, Color, Talla) */}
            <div className="space-y-6">
              {product.options.map((option) => {
                const isColor = ["color", "colores", "diseño"].some((k) =>
                  option.name.toLowerCase().includes(k)
                );
                const currentValue = selectedOptions[option.name] || option.values[0];

                return (
                  <div key={option.name} className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold uppercase tracking-widest text-neutral-900">
                        {option.name}:{" "}
                        <span className="font-normal text-neutral-600">{currentValue}</span>
                      </span>

                      {option.name.toLowerCase() === "talla" && (
                        <button
                          type="button"
                          onClick={() => setShowSizeGuide(!showSizeGuide)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-neutral-900 underline"
                        >
                          <Ruler className="w-3.5 h-3.5" />
                          <span>Guía de tallas</span>
                        </button>
                      )}
                    </div>

                    {isColor ? (
                      <div className="flex flex-wrap gap-2.5">
                        {option.values.map((val) => {
                          const active = currentValue === val;
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => handleOptionChange(option.name, val)}
                              title={val}
                              className={`group flex items-center gap-2 px-3 py-1.5 border text-xs transition-all ${
                                active
                                  ? "border-neutral-900 bg-neutral-900 text-white font-semibold"
                                  : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-900"
                              }`}
                            >
                              <span
                                className="w-3.5 h-3.5 rounded-full border border-neutral-300 shrink-0"
                                style={{ backgroundColor: getColorHex(val) }}
                              />
                              <span>{val}</span>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((val) => {
                          const active = currentValue === val;
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => handleOptionChange(option.name, val)}
                              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all ${
                                active
                                  ? "border-neutral-900 bg-neutral-900 text-white"
                                  : "border-neutral-300 bg-white text-neutral-800 hover:border-neutral-900"
                              }`}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Inline Size Guide if toggled */}
            {showSizeGuide && (
              <div className="p-4 bg-studio-muted border border-studio-border text-xs space-y-2">
                <p className="font-bold uppercase tracking-wider text-neutral-900">
                  REFERENCIA DE TALLAS ALTOR (CM PECHO / CINTURA)
                </p>
                <div className="grid grid-cols-5 gap-2 text-center pt-1">
                  <div className="p-1.5 bg-white border border-neutral-200">
                    <strong className="block">S</strong> 88-94
                  </div>
                  <div className="p-1.5 bg-white border border-neutral-200">
                    <strong className="block">M</strong> 95-100
                  </div>
                  <div className="p-1.5 bg-white border border-neutral-200">
                    <strong className="block">L</strong> 101-106
                  </div>
                  <div className="p-1.5 bg-white border border-neutral-200">
                    <strong className="block">XL</strong> 107-112
                  </div>
                  <div className="p-1.5 bg-white border border-neutral-200">
                    <strong className="block">2XL</strong> 113-118
                  </div>
                </div>
              </div>
            )}

            {/* Add to Bag or WhatsApp CTA */}
            <div className="pt-2 space-y-3">
              {hasValidPrice ? (
                <div className="flex gap-3">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-neutral-300 bg-white">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-4 text-sm font-bold text-neutral-700 hover:bg-neutral-100"
                    >
                      -
                    </button>
                    <span className="px-4 text-sm font-bold text-neutral-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-4 text-sm font-bold text-neutral-700 hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onAddToCart(
                        product,
                        currentVariant?.title,
                        price,
                        mainImageUrl,
                        quantity
                      )
                    }
                    className="flex-1 bg-brand-black hover:bg-neutral-800 text-white font-bold text-xs tracking-widest uppercase py-4 px-6 flex items-center justify-center gap-2.5 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>AÑADIR A LA BOLSA — {formatPrice(parseFloat(price!) * quantity)}</span>
                  </button>
                </div>
              ) : (
                <a
                  href={`https://wa.me/573114337982?text=${encodeURIComponent(
                    `Hola, me interesa pedir: ${product.title} (${
                      currentVariant?.title || "Estándar"
                    })`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-xs tracking-widest uppercase py-4 px-6 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CONSULTAR PRECIO Y DISPONIBILIDAD EN WHATSAPP</span>
                </a>
              )}

              {/* Direct WhatsApp advisor link */}
              <a
                href={`https://wa.me/573114337982?text=${encodeURIComponent(
                  `Hola, tengo una duda sobre la prenda ${product.title} (${
                    currentVariant?.title || ""
                  })`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-neutral-300 hover:border-neutral-900 text-neutral-800 font-semibold text-xs tracking-widest uppercase py-3.5 px-6 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-green" />
                <span>PREGUNTAR TALLAS POR WHATSAPP</span>
              </a>
            </div>

            {/* Editorial Specification Dividers */}
            <div className="divide-y divide-studio-border border-t border-b border-studio-border pt-2">
              {bulletPoints.length > 0 && (
                <div className="py-4 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
                    ESPECIFICACIONES DE CONFECCIÓN
                  </h3>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {bulletPoints.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="py-4 flex items-start gap-3">
                <Truck className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-600">
                  <strong className="text-neutral-900 block uppercase tracking-wider">
                    Envío Nacional y Pago Contra Entrega
                  </strong>
                  Despachamos desde Medellín a todas las ciudades de Colombia. Puedes pagar en efectivo al recibir tu paquete.
                </div>
              </div>

              <div className="py-4 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-600">
                  <strong className="text-neutral-900 block uppercase tracking-wider">
                    Garantía de Calidad Textil
                  </strong>
                  Costuras reforzadas y tejido que no transparenta ni pierde elasticidad.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-24 pt-12 border-t border-studio-border">
          <h2 className="font-display text-3xl sm:text-4xl text-neutral-900 mb-8">
            COMPLETA TU EQUIPACIÓN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((relProduct) => (
              <ProductCard
                key={relProduct.id}
                product={relProduct}
                onAddToCart={onAddToCart}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
