'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/types';
import { useStore } from '@/context/StoreContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart, isInWishlist, toggleWishlist } = useStore();
  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="group relative bg-surface border border-surface-border/60 hover:border-gold/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
      {/* Image container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-elevated">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-background/85 backdrop-blur-md border border-gold/40 text-gold text-[10px] tracking-widest uppercase px-2.5 py-1 font-sans">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-colors ${
            isWishlisted
              ? 'bg-gold text-background'
              : 'bg-background/60 text-ivory hover:text-gold'
          }`}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Action Overlay on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 via-background/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between gap-2">
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 bg-surface-elevated/90 hover:bg-surface border border-surface-border text-ivory text-xs uppercase tracking-widest transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-gold" />
              <span>Details</span>
            </button>
          )}
          <button
            onClick={() => addToCart(product, 1)}
            className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 bg-gold hover:bg-gold-hover text-background text-xs uppercase tracking-widest font-medium transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
        <div>
          <span className="text-[10px] tracking-widest uppercase text-gold font-sans font-medium">
            {product.categoryLabel}
          </span>
          <h3 className="font-serif text-lg text-ivory group-hover:text-gold-light transition-colors mt-0.5">
            <Link href={`/shop#${product.slug}`}>
              {product.name}
            </Link>
          </h3>
          <p className="text-xs text-muted line-clamp-1 mt-1 font-sans font-light">
            {product.subtitle}
          </p>
        </div>

        <div className="pt-3 border-t border-surface-border/40 flex items-center justify-between">
          <span className="text-sm font-mono text-ivory">
            ${product.price.toLocaleString()} <span className="text-[11px] text-muted">{product.currency}</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted/70">
            {product.stock > 0 ? 'Available' : 'Pre-order'}
          </span>
        </div>
      </div>
    </div>
  );
}

