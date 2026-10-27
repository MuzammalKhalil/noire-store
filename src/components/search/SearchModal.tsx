'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const q = query.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesQuery =
      product.name.toLowerCase().includes(q) ||
      product.subtitle.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.categoryLabel.toLowerCase().includes(q);

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-label="Search Catalogue">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative min-h-screen flex items-start justify-center pt-20 px-4 pb-12">
        <div className="relative w-full max-w-3xl bg-surface border border-surface-border text-ivory shadow-2xl p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-surface-border">
            <div className="flex items-center space-x-3 w-full mr-4">
              <Search className="w-5 h-5 text-gold flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search timepieces, leather goods, eyewear..."
                className="w-full bg-transparent text-base sm:text-lg text-ivory placeholder-muted focus:outline-none font-serif tracking-wide"
                aria-label="Search items"
              />
            </div>
            <button
              onClick={onClose}
              className="text-muted hover:text-ivory transition-colors p-1"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Quick Filters */}
          <div className="flex flex-wrap gap-2 pt-4 pb-6 border-b border-surface-border/50 text-xs">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1.5 uppercase tracking-widest transition-colors ${
                categoryFilter === 'all'
                  ? 'bg-gold text-background font-medium'
                  : 'text-muted hover:text-ivory bg-surface-elevated'
              }`}
            >
              All Objects
            </button>
            <button
              onClick={() => setCategoryFilter('watches')}
              className={`px-3 py-1.5 uppercase tracking-widest transition-colors ${
                categoryFilter === 'watches'
                  ? 'bg-gold text-background font-medium'
                  : 'text-muted hover:text-ivory bg-surface-elevated'
              }`}
            >
              Horlogerie
            </button>
            <button
              onClick={() => setCategoryFilter('leather-goods')}
              className={`px-3 py-1.5 uppercase tracking-widest transition-colors ${
                categoryFilter === 'leather-goods'
                  ? 'bg-gold text-background font-medium'
                  : 'text-muted hover:text-ivory bg-surface-elevated'
              }`}
            >
              Leather Goods
            </button>
            <button
              onClick={() => setCategoryFilter('eyewear')}
              className={`px-3 py-1.5 uppercase tracking-widest transition-colors ${
                categoryFilter === 'eyewear'
                  ? 'bg-gold text-background font-medium'
                  : 'text-muted hover:text-ivory bg-surface-elevated'
              }`}
            >
              Eyewear
            </button>
          </div>

          {/* Results list */}
          <div className="mt-6 max-h-[60vh] overflow-y-auto space-y-4 pr-1">
            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center text-muted">
                <p className="font-serif text-lg text-ivory/80">No objects found matching &ldquo;{query}&rdquo;</p>
                <p className="text-xs mt-1">Try searching for &quot;Chronographe&quot;, &quot;Titanium&quot;, or &quot;Tuscan&quot;</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex items-center justify-between p-3 hover:bg-surface-elevated transition-colors border border-transparent hover:border-surface-border"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-14 h-16 bg-surface-elevated flex-shrink-0 overflow-hidden border border-surface-border">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gold font-medium">
                        {product.categoryLabel}
                      </span>
                      <h4 className="font-serif text-base text-ivory group-hover:text-gold-light transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-muted font-mono">
                        ${product.price.toLocaleString()} {product.currency}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/shop#${product.slug}`}
                    onClick={onClose}
                    className="flex items-center space-x-1 text-xs text-muted group-hover:text-gold uppercase tracking-widest transition-colors px-3 py-2"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-surface-border text-center text-[11px] text-muted flex items-center justify-between">
            <span>Press <kbd className="px-1.5 py-0.5 bg-surface-elevated border border-surface-border text-ivory rounded">ESC</kbd> to exit</span>
            <span className="text-gold">Demonstration catalogue</span>
          </div>
        </div>
      </div>
    </div>
  );
}

