import React from "react";
import { MessageCircle } from "lucide-react";

export const TopAnnouncement: React.FC = () => {
  return (
    <div className="bg-brand-black text-white text-[11px] font-medium tracking-widest uppercase py-2 px-4 transition-colors">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <span className="flex items-center gap-1.5 font-semibold text-brand-green">
            <span>COLOMBIA:</span>
          </span>
          <span>ENVÍOS NACIONALES Y PAGO CONTRA ENTREGA</span>
          <span className="hidden sm:inline text-neutral-500">|</span>
          <span className="hidden sm:inline text-neutral-300">
            PROTECCIÓN SOLAR UPF 50+ CERTIFICADA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/573114337982?text=Hola,%20quisiera%20asesoría%20sobre%20prendas%20Spaz%20Altor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-brand-green" />
            <span>WHATSAPP: +57 311 433 7982</span>
          </a>
        </div>
      </div>
    </div>
  );
};
