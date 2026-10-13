import React, { useState } from "react";
import { X, Truck, CheckCircle2, MessageCircle } from "lucide-react";
import type { CartItem } from "./CartDrawer";
import { formatPrice } from "@/lib/utils";

interface CodModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CodModal: React.FC<CodModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.priceAmount * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city || !formData.address) {
      alert("Por favor completa los datos requeridos.");
      return;
    }

    const itemsText = items
      .map(
        (i) =>
          `• ${i.product.title}${i.variantTitle ? ` [${i.variantTitle}]` : ""} (x${
            i.quantity
          })`
      )
      .join("%0A");

    const message = `*NUEVO PEDIDO CONTRA ENTREGA - SPAZ ALTOR*%0A%0A*Cliente:* ${encodeURIComponent(
      formData.name
    )}%0A*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A*Ciudad:* ${encodeURIComponent(
      formData.city
    )}%0A*Dirección:* ${encodeURIComponent(formData.address)}%0A${
      formData.notes ? `*Notas:* ${encodeURIComponent(formData.notes)}%0A` : ""
    }%0A*Prendas:*%0A${itemsText}%0A%0A*Total Estimado:* ${encodeURIComponent(
      formatPrice(total)
    )}%0A%0A_Por favor confirmar disponibilidad y despacho._`;

    window.open(`https://wa.me/573114337982?text=${message}`, "_blank");

    setIsSuccess(true);
    setTimeout(() => {
      onOrderCompleted();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white border border-studio-border shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto" />
            <h3 className="font-display text-3xl text-neutral-900">¡PEDIDO ENVIADO!</h3>
            <p className="text-sm text-neutral-600 max-w-xs mx-auto">
              Se ha abierto tu WhatsApp para confirmar los detalles de entrega con nuestro equipo.
            </p>
          </div>
        ) : (
          <div>
            <div className="space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 text-brand-green text-xs font-bold uppercase tracking-widest">
                <Truck className="w-4 h-4" />
                <span>PAGO CONTRA ENTREGA</span>
              </div>
              <h2 className="font-display text-3xl text-neutral-900">
                DATOS DE ENVÍO Y DESPACHO
              </h2>
              <p className="text-xs text-neutral-500">
                Sin pagos anticipados. Pagas al recibir el pedido en tu dirección.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej: Carlos Mario Rodríguez"
                  className="w-full bg-studio-muted border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    WhatsApp / Celular *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej: 310 123 4567"
                    className="w-full bg-studio-muted border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Ciudad / Municipio *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ej: Medellín, Envigado..."
                    className="w-full bg-studio-muted border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Dirección Exacta y Barrio *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Ej: Calle 10 # 43E-20, Apto 502"
                  className="w-full bg-studio-muted border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Indicaciones adicionales (Opcional)
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ej: Dejar en portería..."
                  className="w-full bg-studio-muted border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div className="p-3 bg-studio-muted border border-neutral-200 flex items-center justify-between text-xs">
                <span className="text-neutral-600 font-medium">
                  Total estimado ({items.reduce((s, i) => s + i.quantity, 0)} prendas):
                </span>
                <span className="text-neutral-900 font-display text-2xl">
                  {formatPrice(total)}
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-black hover:bg-neutral-800 text-white font-bold text-xs tracking-widest uppercase py-4 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CONFIRMAR Y DESPACHAR PEDIDO</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
