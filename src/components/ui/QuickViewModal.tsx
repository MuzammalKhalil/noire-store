'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Check, ShoppingBag, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Product } from '@/types';
import { useStore } from '@/context/StoreContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useStore();
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>(undefined);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedVariantId(product.variants?.[0]?.id);
      setActiveImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const currentPrice = selectedVariantId
    ? product.variants?.find((v) => v.id === selectedVariantId)?.price ?? product.price
    : product.price;

  const handleAdd = () => {
    addToCart(product, 1, selectedVariantId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-4xl bg-surface border border-surface-border text-ivory shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-muted hover:text-ivory bg-surface-elevated/70 p-2 rounded-full backdrop-blur-sm border border-surface-border transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Media Gallery */}
          <div className="relative flex flex-col justify-between bg-surface-elevated p-6 border-b md:border-b-0 md:border-r border-surface-border">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <span className="bg-background/90 border border-gold/40 text-gold text-[10px] tracking-widest uppercase px-2.5 py-1">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails if multiple */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 border overflow-hidden transition-all ${
                      activeImageIndex === idx ? 'border-gold' : 'border-surface-border opacity-60'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-medium">
                {product.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory mt-1">
                {product.name}
              </h3>
              <p className="text-xs text-gold-light mt-1 font-sans">
                {product.subtitle}
              </p>

              <div className="mt-4 pb-4 border-b border-surface-border">
                <span className="text-xl font-mono text-ivory">
                  ${currentPrice.toLocaleString()} {product.currency}
                </span>
                <span className="text-[11px] text-muted block mt-0.5">
                  Tax included • Free priority delivery
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-muted leading-relaxed mt-4">
                {product.description}
              </p>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-5 space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-muted block">
                    Select Edition:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariantId(v.id)}
                        className={`px-3 py-1.5 text-xs border tracking-wider transition-colors ${
                          selectedVariantId === v.id
                            ? 'border-gold text-gold bg-gold/5'
                            : 'border-surface-border text-muted hover:text-ivory'
                        }`}
                      >
                        {v.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="mt-5 space-y-1.5">
                <h4 className="text-[11px] uppercase tracking-widest text-gold">Specifications</h4>
                <ul className="text-xs text-muted/90 space-y-1">
                  {product.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4 pt-4 border-t border-surface-border">
              <button
                onClick={handleAdd}
                className="w-full flex items-center justify-center space-x-2 bg-gold hover:bg-gold-hover text-background font-medium py-3.5 px-4 text-xs uppercase tracking-widest transition-colors duration-200"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Shopping Bag</span>
              </button>

              <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-muted pt-2 border-t border-surface-border/50">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold mb-1" />
                  <span>5-Yr Guarantee</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-3.5 h-3.5 text-gold mb-1" />
                  <span>Priority Courier</span>
                </div>
                <div className="flex flex-col items-center">
                  <RefreshCw className="w-3.5 h-3.5 text-gold mb-1" />
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

