'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, SlidersHorizontal, Heart, Info } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { Product, ProductCategory } from '@/types';
import ProductCard from '@/components/ui/ProductCard';
import QuickViewModal from '@/components/ui/QuickViewModal';
import { useStore } from '@/context/StoreContext';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as ProductCategory) || 'all';
  const initialView = searchParams.get('view');

  const { wishlist } = useStore();
  const [category, setCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showWishlistOnly, setShowWishlistOnly] = useState<boolean>(initialView === 'wishlist');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setCategory(cat);
      setShowWishlistOnly(false);
    }
    const view = searchParams.get('view');
    if (view === 'wishlist') {
      setShowWishlistOnly(true);
    }
  }, [searchParams]);

  let filtered = PRODUCTS.filter((p) => {
    if (showWishlistOnly) {
      return wishlist.includes(p.id);
    }
    if (category === 'all') return true;
    return p.category === category;
  });

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const categoryTitles: Record<string, { title: string; desc: string }> = {
    all: {
      title: 'Complete Catalogue',
      desc: 'Discover our entire collection of Swiss horology, Tuscan leather goods, and Japanese eyewear.',
    },
    watches: {
      title: 'Haute Horlogerie',
      desc: 'Precision mechanical calibres encased in brushed black titanium and DLC-treated steel.',
    },
    'leather-goods': {
      title: 'Fine Leather Goods',
      desc: 'Full-grain Tuscan calfskin, hand-burnished edges, and solid champagne-gold brass hardware.',
    },
    eyewear: {
      title: 'Architectural Eyewear',
      desc: 'Forged Japanese beta-titanium frames with Barberini mineral glass polarized lenses.',
    },
  };

  const currentHeader = showWishlistOnly
    ? { title: 'Your Curated Wishlist', desc: 'Objects reserved for your private contemplation.' }
    : categoryTitles[category] || categoryTitles.all;

  return (
    <div className="min-h-screen bg-background pb-28 pt-8">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-muted hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-surface-border">
        <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium block">
          {showWishlistOnly ? 'Private Chamber' : 'NOIRÉ Collection'}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-ivory mt-2 font-normal">
          {currentHeader.title}
        </h1>
        <p className="text-xs sm:text-sm text-muted mt-3 max-w-2xl font-light leading-relaxed">
          {currentHeader.desc}
        </p>

        {/* Filter Controls Bar */}
        <div className="mt-8 pt-6 border-t border-surface-border/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => {
                setCategory('all');
                setShowWishlistOnly(false);
              }}
              className={`px-4 py-2 uppercase tracking-widest transition-all ${
                !showWishlistOnly && category === 'all'
                  ? 'bg-gold text-background font-medium'
                  : 'bg-surface-elevated text-muted hover:text-ivory border border-surface-border'
              }`}
            >
              All Objects
            </button>
            <button
              onClick={() => {
                setCategory('watches');
                setShowWishlistOnly(false);
              }}
              className={`px-4 py-2 uppercase tracking-widest transition-all ${
                !showWishlistOnly && category === 'watches'
                  ? 'bg-gold text-background font-medium'
                  : 'bg-surface-elevated text-muted hover:text-ivory border border-surface-border'
              }`}
            >
              Horlogerie
            </button>
            <button
              onClick={() => {
                setCategory('leather-goods');
                setShowWishlistOnly(false);
              }}
              className={`px-4 py-2 uppercase tracking-widest transition-all ${
                !showWishlistOnly && category === 'leather-goods'
                  ? 'bg-gold text-background font-medium'
                  : 'bg-surface-elevated text-muted hover:text-ivory border border-surface-border'
              }`}
            >
              Leather Goods
            </button>
            <button
              onClick={() => {
                setCategory('eyewear');
                setShowWishlistOnly(false);
              }}
              className={`px-4 py-2 uppercase tracking-widest transition-all ${
                !showWishlistOnly && category === 'eyewear'
                  ? 'bg-gold text-background font-medium'
                  : 'bg-surface-elevated text-muted hover:text-ivory border border-surface-border'
              }`}
            >
              Eyewear
            </button>
            <button
              onClick={() => setShowWishlistOnly(true)}
              className={`px-4 py-2 uppercase tracking-widest transition-all flex items-center space-x-1.5 ${
                showWishlistOnly
                  ? 'bg-gold text-background font-medium'
                  : 'bg-surface-elevated text-muted hover:text-ivory border border-surface-border'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Wishlist ({wishlist.length})</span>
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center space-x-3 text-xs">
            <span className="text-muted tracking-wider uppercase text-[11px]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-surface-elevated border border-surface-border text-ivory text-xs px-3 py-2 focus:outline-none focus:border-gold font-sans uppercase tracking-wider"
            >
              <option value="featured">Featured Order</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filtered.length === 0 ? (
          <div className="py-24 text-center space-y-4 bg-surface border border-surface-border p-8">
            <p className="font-serif text-2xl text-ivory">
              {showWishlistOnly ? 'Your wishlist is currently empty' : 'No objects found in this category'}
            </p>
            <p className="text-xs text-muted max-w-sm mx-auto">
              {showWishlistOnly
                ? 'Save your favorite pieces by clicking the heart icon on any product card.'
                : 'Please check back shortly or explore our other collections.'}
            </p>
            <button
              onClick={() => {
                setCategory('all');
                setShowWishlistOnly(false);
              }}
              className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-background text-xs uppercase tracking-widest transition-colors mt-2"
            >
              View All Objects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background py-20 text-center text-gold text-xs uppercase tracking-widest">Loading NOIRÉ Catalogue...</div>}>
      <ShopContent />
    </Suspense>
  );
}

