import React, { useState } from "react";
import { Search, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
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

export const Header: React.FC<HeaderProps> = ({
  cartCount = 0,
  onOpenCart,
  onNavigateHome,
  onSelectCategory,
  searchQuery = "",
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks: { label: string; href: string; filter?: CatalogFilter }[] = [
    { label: "MUJERES", href: "#catalogo", filter: "mujeres" },
    { label: "HOMBRES", href: "#catalogo", filter: "hombres" },
    { label: "INFANTIL", href: "#catalogo", filter: "ninos" },
    { label: "LICRAS", href: "#catalogo", filter: "licras" },
    { label: "BUZOS", href: "#catalogo", filter: "buzos" },
    { label: "TECNOLOGÍA", href: "#tecnologia" },
  ];

  const handleLinkClick = (filter?: CatalogFilter) => {
    if (onNavigateHome) onNavigateHome();
    if (filter && onSelectCategory) {
      onSelectCategory(filter);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-studio-border">
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

          {/* Authentic Brand Logos */}
          <a
            href="#"
            onClick={() => handleLinkClick("all")}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.filter)}
                className="text-xs font-semibold tracking-widest text-neutral-700 hover:text-brand-red transition-colors py-2 uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Quick Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-studio-muted border border-neutral-300 rounded-full pl-3 pr-2 py-1.5">
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
        <div className="lg:hidden bg-white border-b border-studio-border px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.filter)}
                className="text-lg font-display tracking-wider text-neutral-900 hover:text-brand-red py-2 border-b border-neutral-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
