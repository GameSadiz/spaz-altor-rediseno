import React from "react";
import { MessageCircle, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import altorLogo from "@/assets/altor-logo.svg";
import spazLogo from "@/assets/spaz-logo.svg";
import type { InfoPageType } from "@/components/InfoPageView";
import type { CatalogFilter } from "@/components/CategoryShowcase";

interface FooterProps {
  onOpenInfoPage?: (page: InfoPageType) => void;
  onSelectCategory?: (category: CatalogFilter) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenInfoPage,
  onSelectCategory,
}) => {
  const handleCategory = (cat: CatalogFilter) => {
    if (onSelectCategory) onSelectCategory(cat);
    const el = document.getElementById("catalogo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-studio-border pt-16 pb-12 text-neutral-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-studio-border">
          {/* Brand Info & Socials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={spazLogo} alt="Spaz" className="h-6 w-auto" />
              <div className="h-5 w-px bg-neutral-300" />
              <img src={altorLogo} alt="Altor" className="h-11 w-auto" />
            </div>

            <p className="text-xs leading-relaxed max-w-sm text-neutral-500">
              <strong>Diseños Spaz S.A.S.</strong> — Confección especializada en ropa deportiva de alta compresión y protección solar certificada UPF 50+ desde 2014 en Medellín, Colombia.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/licraspaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/PATINAJE.SPAZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/c/573114337982"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-300 hover:border-brand-green text-neutral-700 hover:text-brand-green flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Colecciones */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-neutral-900 tracking-wider">
              CATEGORÍAS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleCategory("mujeres")}
                  className="hover:text-brand-red transition-colors"
                >
                  Mujeres
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategory("hombres")}
                  className="hover:text-brand-red transition-colors"
                >
                  Hombres
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategory("ninos")}
                  className="hover:text-brand-red transition-colors"
                >
                  Línea Infantil
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategory("licras")}
                  className="hover:text-brand-red transition-colors"
                >
                  Licras de Compresión
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategory("buzos")}
                  className="hover:text-brand-red transition-colors"
                >
                  Buzos & Tops UV
                </button>
              </li>
            </ul>
          </div>

          {/* Información Oficial */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-neutral-900 tracking-wider">
              INFORMACIÓN
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onOpenInfoPage && onOpenInfoPage("sobre-nosotros")}
                  className="hover:text-brand-red transition-colors text-left"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoPage && onOpenInfoPage("guia-tallas")}
                  className="hover:text-brand-red transition-colors text-left"
                >
                  Guía de Tallas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoPage && onOpenInfoPage("envios")}
                  className="hover:text-brand-red transition-colors text-left"
                >
                  Envíos y Entregas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoPage && onOpenInfoPage("devoluciones")}
                  className="hover:text-brand-red transition-colors text-left"
                >
                  Devoluciones y Cambios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoPage && onOpenInfoPage("privacidad")}
                  className="hover:text-brand-red transition-colors text-left"
                >
                  Política de Privacidad
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto Real en Medellín */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-neutral-900 tracking-wider">
              CONTACTO MEDELLÍN
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2 text-neutral-800">
                <MessageCircle className="w-4 h-4 text-brand-green shrink-0" />
                <a
                  href="https://wa.me/573114337982?text=Hola,%20tengo%20una%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-red font-medium transition-colors"
                >
                  WhatsApp +57 311 433 7982
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-800">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a
                  href="tel:+573136729931"
                  className="hover:text-brand-red transition-colors"
                >
                  +57 313 672 9931
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>Calle 40 # 73-54, Medellín, Colombia</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>Lunes a viernes, 7:00 a.m. a 5:00 p.m.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & payment methods */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 Spaz Altor (Diseños Spaz S.A.S.). Todos los derechos reservados.</p>
          <div className="flex items-center gap-5 text-[11px] font-semibold tracking-widest uppercase text-neutral-500">
            <span>Contra Entrega</span>
            <span>·</span>
            <span>Transferencia</span>
            <span>·</span>
            <span>Nequi / Bancolombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
