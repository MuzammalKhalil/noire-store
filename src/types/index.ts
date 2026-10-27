export type ProductCategory = 'watches' | 'leather-goods' | 'eyewear';

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number;
  currency: string;
  stock: number;
  colorHex?: string;
  colorName?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  currency: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  isNew?: boolean;
  isFeatured?: boolean;
  isLimited?: boolean;
  badge?: string;
  model3dPath?: string; // Optional path for .glb file
  stock: number;
  variants?: ProductVariant[];
}

export interface CartItem {
  product: Product;
  variantId?: string;
  variantName?: string;
  quantity: number;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
}

