import React from "react";
import { ArrowRight } from "lucide-react";

export type CatalogFilter = "all" | "licras" | "buzos" | "mujeres" | "hombres" | "ninos";

interface CategoryShowcaseProps {
  onSelectCategory?: (category: CatalogFilter) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  onSelectCategory,
}) => {
  const handleSelect = (category: CatalogFilter) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    const el = document.getElementById("catalogo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white border-b border-studio-border">
      {/* Editorial 3-Column Full-Bleed Split (Mujeres / Hombres / Infantil) */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* 1. Mujeres */}
        <div
          id="mujeres"
          onClick={() => handleSelect("mujeres")}
          className="group relative h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
        >
          <img
            src="/banners/categoria-mujeres.jpg"
            alt="Colección Mujeres Spaz Altor"
            className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          <div className="absolute inset-x-8 bottom-10 space-y-3 text-white">
            <span className="text-[11px] font-bold tracking-widest text-brand-green uppercase block">
              COLECCIÓN FEMENINA
            </span>
            <h2 className="font-display text-5xl sm:text-6xl tracking-tight uppercase leading-none">
              MUJERES
            </h2>
            <p className="text-sm text-neutral-300 max-w-sm font-light">
              Licras embonadas Aurora, multideportivos Atenea y prendas de compresión anatómica que no marcan ni se bajan.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b-2 border-white pb-1 group-hover:text-brand-red group-hover:border-brand-red transition-all">
                <span>VER PRENDAS MUJERES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>

        {/* 2. Hombres */}
        <div
          id="hombres"
          onClick={() => handleSelect("hombres")}
          className="group relative h-[500px] lg:h-[600px] overflow-hidden border-t md:border-t-0 md:border-l border-studio-border cursor-pointer"
        >
          <img
            src="/banners/categoria-hombres.jpg"
            alt="Colección Hombres Spaz Altor"
            className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          <div className="absolute inset-x-8 bottom-10 space-y-3 text-white">
            <span className="text-[11px] font-bold tracking-widest text-brand-red uppercase block">
              COLECCIÓN MASCULINA
            </span>
            <h2 className="font-display text-5xl sm:text-6xl tracking-tight uppercase leading-none">
              HOMBRES
            </h2>
            <p className="text-sm text-neutral-300 max-w-sm font-light">
              Licras Zeus con bolsillo canguro integrado, buzos Paris de cuello alto con dedal y prendas de máxima resistencia.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b-2 border-white pb-1 group-hover:text-brand-red group-hover:border-brand-red transition-all">
                <span>VER PRENDAS HOMBRES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>

        {/* 3. Infantil / Niños */}
        <div
          id="ninos"
          onClick={() => handleSelect("ninos")}
          className="group relative h-[500px] lg:h-[600px] overflow-hidden border-t md:border-t-0 md:border-l border-studio-border cursor-pointer"
        >
          <img
            src="/banners/categoria-ninos.jpg"
            alt="Colección Infantil Spaz Altor"
            className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          <div className="absolute inset-x-8 bottom-10 space-y-3 text-white">
            <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase block">
              LÍNEA FORMATIVA & ESCUELAS
            </span>
            <h2 className="font-display text-5xl sm:text-6xl tracking-tight uppercase leading-none">
              INFANTIL
            </h2>
            <p className="text-sm text-neutral-300 max-w-sm font-light">
              Licras y buzos con filtro UV UPF 50+ en tallas infantiles para patinaje, fútbol y escuelas deportivas.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b-2 border-white pb-1 group-hover:text-brand-red group-hover:border-brand-red transition-all">
                <span>VER PRENDAS INFANTIL</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
