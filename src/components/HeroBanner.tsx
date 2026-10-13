import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Sun,
  Zap,
  Droplets,
  Scissors,
  Activity,
} from "lucide-react";
import type { CatalogFilter } from "@/components/CategoryShowcase";

const GARMENT_FEATURES = [
  {
    icon: Sun,
    title: "UPF 50+ Certificado",
    subtitle: "Bloqueo solar real para outdoor",
  },
  {
    icon: Zap,
    title: "Tejido Bi-Stretch",
    subtitle: "Compresión sin deformación",
  },
  {
    icon: Droplets,
    title: "Control Sportsec",
    subtitle: "Transporte activo de humedad",
  },
  {
    icon: Scissors,
    title: "Costuras Antifricción",
    subtitle: "Uniones planas sin rozaduras",
  },
  {
    icon: Activity,
    title: "Ajuste Anatómico",
    subtitle: "Libertad total de movimiento",
  },
  {
    icon: ShieldCheck,
    title: "Pago Contra Entrega",
    subtitle: "Pagas al recibir en casa",
  },
];

interface HeroBannerProps {
  onSelectCategory?: (category: CatalogFilter) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onSelectCategory }) => {
  const handleJump = (cat: CatalogFilter) => {
    if (onSelectCategory) onSelectCategory(cat);
    const el = document.getElementById("catalogo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative border-b border-studio-border overflow-hidden">
      {/* 1. Imagen de fondo limpia con la misma tipografía sobria de tu captura */}
      <div className="relative min-h-[600px] lg:min-h-[660px] flex items-center overflow-hidden">
        <img
          src="/banners/hero-sports.jpg"
          alt="Atletas Spaz Altor en competencia"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Sombra suave lateral únicamente para que el texto se lea limpio sin cajas */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/90">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>DISEÑADO & CONFECCIONADO EN MEDELLÍN</span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.92] uppercase">
              RENDIMIENTO
              <br />
              <span className="text-brand-red">SIN LÍMITES.</span>
            </h1>

            <p className="text-white/85 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
              Licras y buzos anatómicos con protección solar certificada UPF 50+, elasticidad Bi-Stretch y tecnología Sportsec para entrenar bajo el sol más exigente.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleJump("mujeres")}
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-all group cursor-pointer"
              >
                <span>COLECCIÓN MUJERES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => handleJump("hombres")}
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-all cursor-pointer"
              >
                <span>COLECCIÓN HOMBRES</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Franja inferior sobria en movimiento horizontal */}
      <div className="bg-studio-muted border-t border-neutral-200 py-6 overflow-hidden relative">
        <div className="animate-marquee-horizontal items-center">
          {[...GARMENT_FEATURES, ...GARMENT_FEATURES].map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 px-10 border-r border-neutral-300 shrink-0"
              >
                <Icon className="w-6 h-6 text-brand-red shrink-0 stroke-[1.75]" />
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider text-neutral-900">
                    {feat.title}
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
