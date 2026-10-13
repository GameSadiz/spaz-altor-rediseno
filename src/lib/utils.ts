import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: string | number, currency = "COP"): string {
  const numeric = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numeric) || numeric === 0) {
    return "Consultar precio";
  }
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(numeric);
}

export const COLOR_SWATCHES: Record<string, string> = {
  blanco: "#FFFFFF",
  negro: "#18181B",
  gris: "#71717A",
  rojo: "#FF2A3B",
  "verde antioquia": "#15803D",
  "verde militar": "#3F4F2C",
  "verde limón": "#84CC16",
  fucsia: "#EC4899",
  "azul oscuro": "#1E293B",
  "azul rey": "#2563EB",
  vinotinto: "#881337",
  verde: "#22C55E",
  amarillo: "#EAB308",
  "verde neón": "#76FF03",
  naranja: "#F97316",
  terracota: "#C2410C",
  "azul celeste": "#06B6D4",
  aguamarina: "#14B8A6",
  morado: "#7C3AED",
  rosado: "#F43F5E",
};

export function getColorHex(name: string): string {
  const normalized = name.trim().toLowerCase();
  return COLOR_SWATCHES[normalized] || "#52525B";
}
