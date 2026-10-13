import React, { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export const NewsletterCta: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
    }, 4000);
  };

  return (
    <section className="bg-brand-black text-white py-20 border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Left Editorial Copy */}
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-brand-red">
              <Mail className="w-3.5 h-3.5" />
              <span>BOLETÍN OFICIAL · COMUNIDAD ALTOR</span>
            </span>

            <h2 className="font-display text-4xl sm:text-5xl tracking-wide uppercase leading-none text-white">
              ÚNETE A LA COMUNIDAD ALTOR
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Suscríbete con tu correo electrónico y recibe antes que nadie nuevos lanzamientos, colores de temporada y ofertas especiales de fábrica.
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full lg:max-w-md">
            {submitted ? (
              <div className="border border-brand-green/40 bg-white/5 px-6 py-5 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white">
                    ¡SUSCRIPCIÓN REGISTRADA!
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Te enviaremos las próximas novedades y lanzamientos a tu correo.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu.correo@gmail.com"
                    className="flex-1 bg-white text-neutral-900 placeholder-neutral-400 px-4 py-4 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs tracking-[0.18em] uppercase px-7 py-4 transition-colors flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>SUSCRIBIRSE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-neutral-500">
                  Cero spam. Puedes darte de baja cuando quieras con un solo clic.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
