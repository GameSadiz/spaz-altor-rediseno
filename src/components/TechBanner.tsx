import React from "react";

export const TechBanner: React.FC = () => {
  const specs = [
    {
      number: "01",
      title: "FILTRO SOLAR UPF 50+ CERTIFICADO",
      detail:
        "Tejido de alta densidad que bloquea más del 98% de la radiación UVA y UVB. Protección real embebida en la fibra que no desaparece con los lavados.",
    },
    {
      number: "02",
      title: "COMPRESIÓN BI-STRETCH ANATÓMICA",
      detail:
        "Elongación bidireccional que acompaña el movimiento muscular en patinaje, ciclismo y running, reduciendo la vibración y devolviendo la prenda a su forma original.",
    },
    {
      number: "03",
      title: "CONTROL DE HUMEDAD SPORTSEC",
      detail:
        "Microfibras de transporte rápido que absorben el sudor de la piel y lo expanden hacia la superficie exterior para una evaporación acelerada y frescura constante.",
    },
    {
      number: "04",
      title: "CONSTRUCCIÓN ANTIFRICCIÓN EN MEDELLÍN",
      detail:
        "Costuras planas reforzadas y patrones ergonómicos diseñados y confeccionados en Colombia para resistir entrenamientos diarios de alta exigencia.",
    },
  ];

  return (
    <section id="tecnologia" className="py-24 bg-studio-muted border-t border-b border-studio-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photography */}
          <div className="lg:col-span-5 space-y-3">
            <div className="aspect-[4/5] bg-neutral-200 overflow-hidden relative">
              <img
                src="/banners/hero-paragliding.jpg"
                alt="Ingeniería textil Spaz Altor en acción"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-[11px] text-neutral-500 uppercase tracking-widest">
              FIG 01. PRUEBAS DE RESISTENCIA Y EXPOSICIÓN SOLAR · ANTIOQUIA, COLOMBIA
            </p>
          </div>

          {/* Right Column: Editorial Numbered Index (No AI Cards) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-red block">
                INGENIERÍA TEXTIL
              </span>
              <h2 className="font-display text-4xl sm:text-6xl text-neutral-900 leading-none tracking-tight">
                DISEÑADO PARA EL ALTO RENDIMIENTO, NO SOLO PARA LA FOTO.
              </h2>
              <p className="text-neutral-600 text-base max-w-xl">
                Cada licra y buzo de Spaz Altor se construye desde el hilo para resolver los tres problemas reales del deportista: el sol intenso, el sudor acumulado y el desgaste por roce.
              </p>
            </div>

            {/* Clean Typographic Index */}
            <div className="divide-y divide-neutral-300 border-t border-b border-neutral-300">
              {specs.map((spec) => (
                <div
                  key={spec.number}
                  className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                >
                  <span className="sm:col-span-2 font-display text-2xl text-brand-red">
                    {spec.number}
                  </span>
                  <div className="sm:col-span-10 space-y-1">
                    <h3 className="font-display text-2xl text-neutral-900 tracking-wide">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {spec.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
