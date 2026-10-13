import React from "react";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";

export interface CartItem {
  id: string;
  product: Product;
  variantTitle?: string;
  priceAmount: number;
  imageUrl?: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onProceedCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout,
}) => {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.priceAmount * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-studio-border flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-studio-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-neutral-900" />
              <h2 className="font-display text-2xl text-neutral-900 tracking-wide">
                TU BOLSA ({items.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items list */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-studio-border">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <ShoppingBag className="w-10 h-10 text-neutral-300 mx-auto" />
                <h3 className="font-display text-2xl text-neutral-900">
                  LA BOLSA ESTÁ VACÍA
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Explora nuestras licras y buzos técnicos para iniciar tu pedido con pago contra entrega.
                </p>
                <button
                  onClick={onClose}
                  className="bg-brand-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest px-6 py-3"
                >
                  EXPLORAR CATÁLOGO
                </button>
              </div>
            ) : (
              items.map((item) => {
                const prod = item.product;
                const img =
                  item.imageUrl ||
                  prod.images.edges[0]?.node?.url ||
                  "/products/fotos/aurora-negro.webp";

                return (
                  <div key={item.id} className="py-4 flex gap-4 items-center">
                    <img
                      src={img}
                      alt={prod.title}
                      className="w-20 h-24 object-contain bg-studio-muted p-2"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-xl text-neutral-900 truncate">
                        {prod.title}
                      </h4>
                      {item.variantTitle && (
                        <p className="text-[11px] text-neutral-500 truncate">
                          {item.variantTitle}
                        </p>
                      )}
                      <p className="text-xs font-semibold text-neutral-800 mt-0.5">
                        {formatPrice(item.priceAmount)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-neutral-300">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                            }
                            className="px-2.5 py-1 text-xs text-neutral-600 hover:bg-neutral-100"
                          >
                            -
                          </button>
                          <span className="px-3 text-xs text-neutral-900 font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-2.5 py-1 text-xs text-neutral-600 hover:bg-neutral-100"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-neutral-400 hover:text-brand-red p-1 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-studio-border bg-studio-muted space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="text-neutral-900 font-medium">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-brand-green" />
                    <span>Envío</span>
                  </span>
                  <span className="text-brand-green font-semibold">Contra entrega</span>
                </div>
                <div className="flex justify-between text-base font-bold text-neutral-900 pt-2 border-t border-neutral-200">
                  <span>TOTAL ESTIMADO</span>
                  <span className="font-display text-2xl">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-neutral-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                <span>Pagas únicamente al recibir tu pedido en la puerta de tu casa.</span>
              </div>

              <button
                onClick={onProceedCheckout}
                className="w-full bg-brand-black hover:bg-neutral-800 text-white font-bold text-xs tracking-widest uppercase py-4 transition-all flex items-center justify-center gap-2"
              >
                <span>CONTINUAR PEDIDO CONTRA ENTREGA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
