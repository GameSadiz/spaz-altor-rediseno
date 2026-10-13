import React, { useState } from "react";
import { TopAnnouncement } from "@/components/TopAnnouncement";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { CategoryShowcase, type CatalogFilter } from "@/components/CategoryShowcase";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { TechBanner } from "@/components/TechBanner";
import { NewsletterCta } from "@/components/NewsletterCta";
import { ProductDetailView } from "@/components/ProductDetailView";
import { Footer } from "@/components/Footer";
import { CartDrawer, type CartItem } from "@/components/CartDrawer";
import { CodModal } from "@/components/CodModal";
import type { Product } from "@/types/product";

export const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>("all");

  const handleAddToCart = (
    product: Product,
    variantTitle?: string,
    variantPrice?: string,
    variantImage?: string,
    qty = 1
  ) => {
    const rawPrice = variantPrice || product.priceRange?.minVariantPrice?.amount || "0";
    const priceAmount = parseFloat(rawPrice) || 0;
    const itemId = `${product.id}-${variantTitle || "default"}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          product,
          variantTitle,
          priceAmount,
          imageUrl: variantImage,
          quantity: qty,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-brand-red selection:text-white">
      <TopAnnouncement />

      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateHome={() => setSelectedProduct(null)}
        onSelectCategory={(cat) => setActiveFilter(cat)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {selectedProduct ? (
        <ProductDetailView
          product={selectedProduct}
          activeFilter={activeFilter}
          onBack={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
        />
      ) : (
        <main className="flex-1">
          {!searchQuery && (
            <HeroBanner onSelectCategory={(cat) => setActiveFilter(cat)} />
          )}

          {!searchQuery && (
            <CategoryShowcase onSelectCategory={(cat) => setActiveFilter(cat)} />
          )}

          <FeaturedProducts
            onAddToCart={handleAddToCart}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            searchQuery={searchQuery}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {!searchQuery && <TechBanner />}
        </main>
      )}

      <NewsletterCta />

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CodModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={() => {
          setCartItems([]);
          setIsCheckoutOpen(false);
        }}
      />
    </div>
  );
};

export default App;
