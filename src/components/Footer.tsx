import React from "react";
import { MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import altorLogo from "@/assets/altor-logo.svg";
import spazLogo from "@/assets/spaz-logo.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-studio-border pt-16 pb-12 text-neutral-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-studio-border">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={spazLogo} alt="Spaz" className="h-6 w-auto" />
              <div className="h-5 w-px bg-neutral-300" />
              <img src={altorLogo} alt="Altor" className="h-11 w-auto" />
            </div>

            <p className="text-xs leading-relaxed max-w-sm text-neutral-500">
              Confección especializada en ropa deportiva de alta compresión y protección solar certificada UPF 50+. Hecho en Medellín, Colombia, para atletas de patinaje, ciclismo, running y entrenamiento funcional.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/573114337982?text=Hola,%20quisiera%20asesoría%20sobre%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-900 hover:text-brand-red font-semibold text-xs tracking-wider uppercase border-b border-neutral-900 hover:border-brand-red pb-1 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-brand-green" />
                <span>ATENCIÓN DIRECTA: +57 311 433 7982</span>
              </a>
            </div>
          </div>

          {/* Colecciones */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-neutral-900 tracking-wider">
              COLECCIONES
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#mujeres" className="hover:text-neutral-900 transition-colors">Mujeres</a></li>
              <li><a href="#hombres" className="hover:text-neutral-900 transition-colors">Hombres</a></li>
              <li><a href="#catalogo" className="hover:text-neutral-900 transition-colors">Licras de Compresión</a></li>
              <li><a href="#catalogo" className="hover:text-neutral-900 transition-colors">Buzos Cuello Alto</a></li>
              <li><a href="#catalogo" className="hover:text-neutral-900 transition-colors">Línea Infantil</a></li>
            </ul>
          </div>

          {/* Deportes */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-neutral-900 tracking-wider">
              DISCIPLINAS
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#catalogo" className="hover:text-neutral-900 transition-colors">Patinaje de Velocidad</a></li>
              <li><a href="#catalogo" className="hover:text-neutral-900 transition-colors">Ciclismo de Ruta</a></li>
              <li><a href="#catalogo" className="hover:text-neutral-900 transition-colors">Running & Trail</a></li>
              <li><a href="#catalogo" className="hover:text-neutral-900 transition-colors">Gimnasio & Crossfit</a></li>
              <li><a href="#tecnologia" className="hover:text-brand-red transition-colors">Tecnología UPF 50+</a></li>
            </ul>
          </div>

          {/* Compra Segura */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-neutral-900 tracking-wider">
              ENVÍOS Y GARANTÍA
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-neutral-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span>Pago Contra Entrega</span>
              </li>
              <li className="flex items-center gap-1.5 text-neutral-800 font-medium">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span>Envíos desde Medellín</span>
              </li>
              <li><a href="#catalogo" className="hover:text-neutral-900 transition-colors">Guía de Tallas</a></li>
              <li><a href="#catalogo" className="hover:text-neutral-900 transition-colors">Política de Cambios</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 Spaz Altor Colombia. Todos los derechos reservados.</p>
          <p>Medellín, Antioquia — Colombia</p>
        </div>
      </div>
    </footer>
  );
};
