'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, SlidersHorizontal, Info } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { Product, ProductCategory } from '@/types';
import ProductCard from '@/components/ui/ProductCard';
import QuickViewModal from '@/components/ui/QuickViewModal';

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 sm:py-32 bg-surface relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-surface-border gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans font-medium">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory mt-2 font-normal">
              Signature Editions
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 uppercase tracking-widest transition-all font-sans ${
                activeCategory === 'all'
                  ? 'bg-gold text-background font-medium'
                  : 'bg-surface-elevated text-muted hover:text-ivory border border-surface-border'
              }`}
            >
              All Objects
            </button>
            <button
              onClick={() => setActiveCategory('watches')}
              className={`px-4 py-2 uppercase tracking-widest transition-all font-sans ${
                activeCategory === 'watches'
                  ? 'bg-gold text-background font-medium'
                  : 'bg-surface-elevated text-muted hover:text-ivory border border-surface-border'
              }`}
            >
              Horlogerie
            </button>
            <button
              onClick={() => setActiveCategory('leather-goods')}
              className={`px-4 py-2 uppercase tracking-widest transition-all font-sans ${
                activeCategory === 'leather-goods'
                  ? 'bg-gold text-background font-medium'
                  : 'bg-surface-elevated text-muted hover:text-ivory border border-surface-border'
              }`}
            >
              Leather Goods
            </button>
            <button
              onClick={() => setActiveCategory('eyewear')}
              className={`px-4 py-2 uppercase tracking-widest transition-all font-sans ${
                activeCategory === 'eyewear'
                  ? 'bg-gold text-background font-medium'
                  : 'bg-surface-elevated text-muted hover:text-ivory border border-surface-border'
              }`}
            >
              Eyewear
            </button>
          </div>
        </div>

        {/* Demonstration Disclaimer Tag as required by the brief */}
        <div className="mb-8 flex items-center space-x-2 text-[11px] text-muted bg-surface-elevated/60 border border-surface-border px-4 py-2 rounded-none">
          <Info className="w-3.5 h-3.5 text-gold flex-shrink-0" />
          <span>
            Demonstration catalogue: Specifications, prices, and stock indicators represent prototype reference assets.
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Bottom Explore CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center space-x-3 px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-background text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300"
          >
            <span>View Complete Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

