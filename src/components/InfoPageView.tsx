import React, { useEffect } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";

export type InfoPageType =
  | "sobre-nosotros"
  | "envios"
  | "devoluciones"
  | "guia-tallas"
  | "privacidad";

interface InfoPageViewProps {
  page: InfoPageType;
  onBack: () => void;
}

const SIZE_CHART = [
  ["S", "86 – 91 cm", "71 – 76 cm", "91 – 96 cm"],
  ["M", "91 – 96 cm", "76 – 81 cm", "96 – 101 cm"],
  ["L", "96 – 101 cm", "81 – 86 cm", "101 – 106 cm"],
  ["XL", "101 – 106 cm", "86 – 91 cm", "106 – 111 cm"],
  ["2XL", "106 – 112 cm", "91 – 97 cm", "111 – 117 cm"],
  ["3XL", "112 – 118 cm", "97 – 103 cm", "117 – 123 cm"],
];

export const InfoPageView: React.FC<InfoPageViewProps> = ({ page, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const headerMap: Record<InfoPageType, { tag: string; title: string; subtitle: string }> = {
    "sobre-nosotros": {
      tag: "DISEÑOS SPAZ S.A.S. · DESDE 2014",
      title: "SOBRE NOSOTROS",
      subtitle: "Más de una década confeccionando ropa deportiva de alto rendimiento en Medellín.",
    },
    envios: {
      tag: "LOGÍSTICA NACIONAL · COLOMBIA",
      title: "ENVÍOS Y ENTREGAS",
      subtitle: "Despachos directos desde nuestra planta en Medellín a todo el país.",
    },
    devoluciones: {
      tag: "GARANTÍA Y RESPALDO",
      title: "DEVOLUCIONES Y CAMBIOS",
      subtitle: "Política clara conforme al Estatuto del Consumidor de Colombia.",
    },
    "guia-tallas": {
      tag: "MEDIDAS ANATÓMICAS EN CM",
      title: "GUÍA DE TALLAS",
      subtitle: "Encuentra el ajuste de compresión ideal para tu disciplina.",
    },
    privacidad: {
      tag: "LEY 1581 DE 2012 · HABEAS DATA",
      title: "POLÍTICA DE PRIVACIDAD",
      subtitle: "Tratamiento transparente y seguro de tus datos personales.",
    },
  };

  const info = headerMap[page];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Top Breadcrumb */}
      <div className="border-b border-studio-border bg-studio-muted/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-neutral-700 hover:text-brand-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>VOLVER A LA TIENDA</span>
          </button>
          <span className="text-[11px] tracking-widest uppercase text-neutral-400">
            INFORMACIÓN OFICIAL / <strong className="text-neutral-900">{info.title}</strong>
          </span>
        </div>
      </div>

      {/* Editorial Header */}
      <div className="border-b border-studio-border bg-studio-muted py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red block">
            {info.tag}
          </span>
          <h1 className="font-display text-5xl sm:text-7xl text-neutral-900 leading-none">
            {info.title}
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl">
            {info.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-14 max-w-4xl">
        {page === "sobre-nosotros" && (
          <div className="space-y-12 text-neutral-700 leading-relaxed">
            <p className="text-lg text-neutral-900 font-medium">
              En <strong>Spaz Altor</strong> diseñamos, producimos y comercializamos ropa deportiva en Medellín. Somos <strong>Diseños Spaz S.A.S.</strong>, constituida el 30 de julio de 2014, con más de una década confeccionando prendas técnicas para patinaje, fútbol, atletismo, ciclismo, natación y gimnasio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-studio-border py-10">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-green">
                  MARCA 01
                </span>
                <h2 className="font-display text-3xl text-neutral-900">
                  SPAZ — MUEVE TU PASIÓN
                </h2>
                <p className="text-sm text-neutral-600">
                  La energía técnica y competitiva del deporte: uniformes personalizados, licras de competencia y prendas sublimadas para clubes, escuelas y deportistas de alto nivel.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-red">
                  MARCA 02
                </span>
                <h2 className="font-display text-3xl text-neutral-900">
                  ALTOR — EVOLUCIÓN Y CONFORT
                </h2>
                <p className="text-sm text-neutral-600">
                  Prendas de línea de alto rendimiento con ingeniería textil (protección solar UPF 50+, Bi-Stretch y Sportsec), diseñadas para entrenar exigente y usar a diario.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-3xl text-neutral-900">NUESTROS PILARES</h2>
              <div className="divide-y divide-studio-border border-t border-b border-studio-border">
                {[
                  ["01", "RENDIMIENTO", "Prendas técnicas y funcionales hechas para el deporte de alto nivel."],
                  ["02", "INNOVACIÓN TEXTIL", "Sublimación digital, tejidos inteligentes con filtro UV y colores firmes que no destiñen."],
                  ["03", "ORGULLO LOCAL", "100% diseñado y confeccionado en nuestra planta de Medellín (Calle 40 # 73-54)."],
                ].map(([num, title, desc]) => (
                  <div key={num} className="py-4 flex gap-6 items-baseline">
                    <span className="font-display text-2xl text-brand-red">{num}</span>
                    <div>
                      <h3 className="font-display text-xl text-neutral-900">{title}</h3>
                      <p className="text-sm text-neutral-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {page === "guia-tallas" && (
          <div className="space-y-10">
            <p className="text-neutral-600">
              Toma las medidas directamente sobre el cuerpo con cinta métrica flexible sin apretar y compáralas con la siguiente tabla oficial de patronaje Altor:
            </p>

            <div className="overflow-x-auto border border-studio-border">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-brand-black text-white uppercase text-xs tracking-widest">
                    <th className="p-4">Talla</th>
                    <th className="p-4">Pecho</th>
                    <th className="p-4">Cintura</th>
                    <th className="p-4">Cadera</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-studio-border">
                  {SIZE_CHART.map(([size, chest, waist, hip]) => (
                    <tr key={size} className="hover:bg-studio-muted">
                      <td className="p-4 font-display text-xl text-neutral-900">{size}</td>
                      <td className="p-4 text-neutral-700">{chest}</td>
                      <td className="p-4 text-neutral-700">{waist}</td>
                      <td className="p-4 text-neutral-700">{hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="border-t-2 border-neutral-900 pt-3">
                <h3 className="font-display text-xl text-neutral-900">01. PECHO</h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Rodea la parte más ancha del tórax pasando por debajo de las axilas.
                </p>
              </div>
              <div className="border-t-2 border-neutral-900 pt-3">
                <h3 className="font-display text-xl text-neutral-900">02. CINTURA</h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Mide alrededor de la parte más estrecha del torso natural.
                </p>
              </div>
              <div className="border-t-2 border-neutral-900 pt-3">
                <h3 className="font-display text-xl text-neutral-900">03. CADERA</h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Junta los pies y rodea la zona de mayor proyección de los glúteos.
                </p>
              </div>
            </div>
          </div>
        )}

        {page === "envios" && (
          <div className="space-y-8 text-neutral-700">
            <div className="divide-y divide-studio-border border-t border-b border-studio-border">
              <div className="py-6 space-y-2">
                <h2 className="font-display text-2xl text-neutral-900">
                  01. DESPACHOS DESDE MEDELLÍN
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Todos nuestros pedidos se despachan directamente desde nuestra sede en Medellín (Calle 40 # 73-54). La cobertura, el valor del flete y el tiempo estimado dependen de tu ciudad o municipio y se confirman contigo por WhatsApp antes del despacho.
                </p>
              </div>
              <div className="py-6 space-y-2">
                <h2 className="font-display text-2xl text-neutral-900">
                  02. PAGO CONTRA ENTREGA
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Contamos con modalidad de Pago Contra Entrega en la mayoría de ciudades principales e intermedias de Colombia. Pagas únicamente al momento de recibir tu paquete.
                </p>
              </div>
              <div className="py-6 space-y-2">
                <h2 className="font-display text-2xl text-neutral-900">
                  03. SEGUIMIENTO DE GUÍA
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Una vez despachado tu pedido, te compartimos el número de guía por WhatsApp para que puedas rastrear el estado en tiempo real.
                </p>
              </div>
            </div>
          </div>
        )}

        {page === "devoluciones" && (
          <div className="space-y-8 text-neutral-700">
            <div className="divide-y divide-studio-border border-t border-b border-studio-border">
              <div className="py-6 space-y-2">
                <h2 className="font-display text-2xl text-neutral-900">
                  01. CÓMO SOLICITAR UN CAMBIO
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Escríbenos a nuestra línea de WhatsApp (+57 311 433 7982) indicando tu nombre o número de pedido. Para realizar cambios de talla o color, la prenda debe estar sin uso, limpia y conservar sus etiquetas originales.
                </p>
              </div>
              <div className="py-6 space-y-2">
                <h2 className="font-display text-2xl text-neutral-900">
                  02. GARANTÍA LEGAL (LEY 1480 DE 2011)
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Todas nuestras prendas cuentan con garantía por defectos de fabricación o costura conforme al Estatuto del Consumidor colombiano.
                </p>
              </div>
            </div>
          </div>
        )}

        {page === "privacidad" && (
          <div className="space-y-8 text-neutral-700">
            <p className="text-sm text-neutral-600 leading-relaxed">
              En <strong>Diseños Spaz S.A.S. (Spaz Altor)</strong> protegemos tus datos personales en estricto cumplimiento de la <strong>Ley 1581 de 2012</strong> de Colombia.
            </p>
            <div className="divide-y divide-studio-border border-t border-b border-studio-border">
              <div className="py-6 space-y-2">
                <h2 className="font-display text-2xl text-neutral-900">
                  DATOS QUE RECOLECTAMOS
                </h2>
                <p className="text-sm text-neutral-600">
                  Únicamente solicitamos nombre, teléfono de contacto, ciudad y dirección de entrega para despachar tus pedidos, o tu correo electrónico si te suscribes voluntariamente a nuestro boletín. No almacenamos datos de tarjetas bancarias.
                </p>
              </div>
              <div className="py-6 space-y-2">
                <h2 className="font-display text-2xl text-neutral-900">
                  TUS DERECHOS (HABEAS DATA)
                </h2>
                <p className="text-sm text-neutral-600">
                  Puedes solicitar en cualquier momento conocer, actualizar, rectificar o suprimir tus datos escribiendo a nuestro canal oficial de atención.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Direct WhatsApp Support CTA */}
        <div className="mt-12 p-6 bg-studio-muted border border-studio-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-2xl text-neutral-900">
              ¿NECESITAS AYUDA PERSONALIZADA?
            </p>
            <p className="text-xs text-neutral-600">
              Nuestro equipo en Medellín te atiende de lunes a viernes de 7:00 a.m. a 5:00 p.m.
            </p>
          </div>
          <a
            href="https://wa.me/573114337982?text=Hola,%20tengo%20una%20consulta%20sobre%20Spaz%20Altor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-xs tracking-widest uppercase px-6 py-3.5 flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WHATSAPP +57 311 433 7982</span>
          </a>
        </div>
      </div>
    </div>
  );
};
