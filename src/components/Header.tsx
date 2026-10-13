import React, { useState } from "react";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import altorLogo from "@/assets/altor-logo.svg";
import spazLogo from "@/assets/spaz-logo.svg";
import type { CatalogFilter } from "@/components/CategoryShowcase";

interface HeaderProps {
  cartCount?: number;
  onOpenCart?: () => void;
  onNavigateHome?: () => void;
  onSelectCategory?: (category: CatalogFilter) => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
}

interface SubMenuColumn {
  heading: string;
  items: string[];
}

interface NavMenuItem {
  label: string;
  href: string;
  filter: CatalogFilter;
  columns?: SubMenuColumn[];
}

const NAV_MENU: NavMenuItem[] = [
  {
    label: "CATÁLOGO",
    href: "#catalogo",
    filter: "all",
  },
  {
    label: "MUJERES",
    href: "#catalogo",
    filter: "mujeres",
    columns: [
      {
        heading: "NOVEDADES",
        items: ["Novedades Ropa", "Novedades Accesorios", "Todo Novedades"],
      },
      {
        heading: "ROPA",
        items: ["Licras", "Tops", "Shorts", "Buzos", "Conjuntos"],
      },
      {
        heading: "DESTACADOS",
        items: ["Lo más vendido", "Ofertas"],
      },
    ],
  },
  {
    label: "HOMBRES",
    href: "#catalogo",
    filter: "hombres",
    columns: [
      {
        heading: "NOVEDADES",
        items: ["Novedades Ropa", "Novedades Accesorios", "Todo Novedades"],
      },
      {
        heading: "ROPA",
        items: ["Licras", "Camisetas", "Shorts", "Buzos", "Conjuntos"],
      },
      {
        heading: "DESTACADOS",
        items: ["Lo más vendido", "Ofertas"],
      },
    ],
  },
  {
    label: "NIÑOS",
    href: "#catalogo",
    filter: "ninos",
    columns: [
      {
        heading: "POR EDAD",
        items: ["Bebés (0-3 años)", "Niños (4-8 años)", "Niños (9-14 años)"],
      },
      {
        heading: "ROPA",
        items: ["Camisetas", "Shorts", "Conjuntos", "Chaquetas"],
      },
      {
        heading: "DESTACADOS",
        items: ["Lo más vendido", "Ofertas"],
      },
    ],
  },
  {
    label: "DEPORTE",
    href: "#catalogo",
    filter: "all",
    columns: [
      {
        heading: "DEPORTES DE EQUIPO",
        items: ["Fútbol", "Baloncesto", "Voleibol", "Tenis"],
      },
      {
        heading: "FITNESS",
        items: ["Gym", "Yoga", "Crossfit", "Pilates"],
      },
      {
        heading: "OUTDOOR",
        items: ["Running", "Ciclismo", "Senderismo", "Trail"],
      },
      {
        heading: "OTROS DEPORTES",
        items: ["Patinaje", "Natación", "Skate", "Golf"],
      },
    ],
  },
  {
    label: "OFERTAS",
    href: "#catalogo",
    filter: "all",
    columns: [
      {
        heading: "POR GÉNERO",
        items: ["Ofertas Mujeres", "Ofertas Hombres", "Ofertas Niños"],
      },
      {
        heading: "DESTACADOS",
        items: ["Última oportunidad", "Temporada anterior"],
      },
    ],
  },
];

export const Header: React.FC<HeaderProps> = ({
  cartCount = 0,
  onOpenCart,
  onNavigateHome,
  onSelectCategory,
  searchQuery = "",
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleNavClick = (filter: CatalogFilter) => {
    if (onNavigateHome) onNavigateHome();
    if (onSelectCategory) onSelectCategory(filter);
    setHoveredMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-studio-border"
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-black transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logos */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("all");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
          >
            <img
              src={spazLogo}
              alt="Spaz Athletics"
              className="hidden sm:block h-7 w-auto object-contain"
            />
            <div className="hidden sm:block h-6 w-px bg-neutral-300" />
            <img
              src={altorLogo}
              alt="Altor"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation with Visual Mega-Menus */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {NAV_MENU.map((item) => {
              const isOpen = hoveredMenu === item.label;
              const hasDropdown = Boolean(item.columns && item.columns.length > 0);

              return (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredMenu(hasDropdown ? item.label : null)}
                >
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.filter)}
                    className={`inline-flex items-center gap-1.5 font-display text-lg tracking-wider transition-colors py-2 uppercase ${
                      isOpen
                        ? "text-brand-red"
                        : "text-neutral-900 hover:text-brand-red"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-brand-red" : "text-neutral-500"
                        }`}
                      />
                    )}
                  </a>

                  {/* Active bottom bar indicator */}
                  {isOpen && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red" />
                  )}

                  {/* Dropdown Mega-Menu Panel */}
                  {hasDropdown && isOpen && (
                    <div
                      className={`absolute top-full pt-0 z-50 ${
                        item.columns!.length >= 4
                          ? "-left-48 w-[720px]"
                          : item.columns!.length === 3
                            ? "-left-8 w-[520px]"
                            : "-left-12 w-[360px]"
                      }`}
                    >
                      <div className="bg-white border border-studio-border shadow-xl p-8">
                        <div
                          className={`grid gap-8 ${
                            item.columns!.length >= 4
                              ? "grid-cols-4"
                              : item.columns!.length === 3
                                ? "grid-cols-3"
                                : "grid-cols-2"
                          }`}
                        >
                          {item.columns!.map((col) => (
                            <div key={col.heading}>
                              <h4 className="font-display text-base tracking-wider text-neutral-900 uppercase pb-2 mb-3 border-b border-studio-border">
                                {col.heading}
                              </h4>
                              <ul className="space-y-2">
                                {col.items.map((subLabel) => (
                                  <li key={subLabel}>
                                    <a
                                      href="#catalogo"
                                      onClick={() => handleNavClick(item.filter)}
                                      className="block text-xs text-neutral-600 hover:text-brand-red transition-colors py-0.5"
                                    >
                                      {subLabel}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Quick Search UI */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-studio-muted border border-neutral-300 pl-3 pr-2 py-1.5">
                  <Search className="w-4 h-4 text-neutral-500 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      if (onNavigateHome) onNavigateHome();
                      if (onSearchChange) onSearchChange(e.target.value);
                    }}
                    placeholder="Buscar prenda..."
                    className="bg-transparent text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none w-36 sm:w-48"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      if (onSearchChange) onSearchChange("");
                    }}
                    className="p-1 text-neutral-400 hover:text-black"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-neutral-700 hover:text-black transition-colors"
                  aria-label="Buscar"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-neutral-800 hover:text-brand-red transition-colors"
              aria-label="Bolsa de compras"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-studio-border px-6 py-6 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col divide-y divide-studio-border">
            {NAV_MENU.map((item) => {
              const hasDropdown = Boolean(item.columns && item.columns.length > 0);
              const isExpanded = mobileExpanded === item.label;

              return (
                <div key={item.label} className="py-3">
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.filter)}
                      className="text-xl font-display tracking-wider text-neutral-900 hover:text-brand-red uppercase"
                    >
                      {item.label}
                    </a>
                    {hasDropdown && (
                      <button
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : item.label)
                        }
                        className="p-2 text-neutral-500 hover:text-neutral-900"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? "rotate-180 text-brand-red" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasDropdown && isExpanded && (
                    <div className="mt-4 pl-3 border-l-2 border-brand-red space-y-4 pb-2">
                      {item.columns!.map((col) => (
                        <div key={col.heading}>
                          <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 mb-1.5">
                            {col.heading}
                          </p>
                          <div className="flex flex-col gap-1.5">
                            {col.items.map((subLabel) => (
                              <a
                                key={subLabel}
                                href="#catalogo"
                                onClick={() => handleNavClick(item.filter)}
                                className="text-xs text-neutral-600 hover:text-brand-red py-0.5"
                              >
                                {subLabel}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
