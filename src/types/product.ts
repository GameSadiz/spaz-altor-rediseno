export interface Money {
  amount: string;
  currencyCode: string;
}

export interface ProductImage {
  url: string;
  altText: string | null;
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: Money;
  availableForSale: boolean;
  selectedOptions: SelectedOption[];
  image: ProductImage | null;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  brand?: "Altor" | "Spaz";
  tags?: string[];
  priceRange: { minVariantPrice: Money };
  images: { edges: { node: ProductImage }[] };
  variants: { edges: { node: ProductVariant }[] };
  options: { name: string; values: string[] }[];
}

export interface ProductEdge {
  node: Product;
}
