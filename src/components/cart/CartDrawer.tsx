'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartSubtotal, cartCount } = useStore();

  const freeShippingThreshold = 500;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Bag">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface border-l border-surface-border text-ivory flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-surface-border flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <h2 className="text-sm font-medium tracking-widest uppercase text-ivory">
                Shopping Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="text-muted hover:text-ivory transition-colors p-1"
              aria-label="Close shopping bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary shipping bar */}
          <div className="bg-surface-elevated px-6 py-3 border-b border-surface-border">
            <div className="text-xs text-muted mb-1 flex justify-between">
              <span>
                {remainingForFreeShipping === 0 ? (
                  <span className="text-gold font-medium">✓ You qualify for complimentary worldwide shipping</span>
                ) : (
                  <>Add <span className="text-ivory font-medium">${remainingForFreeShipping.toLocaleString()}</span> for complimentary shipping</>
                )}
              </span>
              <span className="text-gold text-[10px] uppercase tracking-wider">Priority</span>
            </div>
            <div className="w-full h-1 bg-surface-border rounded-full overflow-hidden">
              <div
                className="h-full bg-gold transition-all duration-500 ease-out"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full border border-surface-border flex items-center justify-center text-muted">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="font-serif text-xl text-ivory">Your bag is empty</h3>
                <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed">
                  Discover our curated selection of timepieces, Tuscan leather goods, and Japanese titanium eyewear.
                </p>
                <div className="pt-2">
                  <button
                    onClick={closeCart}
                    className="inline-block px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-background text-xs uppercase tracking-widest transition-all"
                  >
                    Explore Catalogue
                  </button>
                </div>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.variantId || 'default'}`}
                  className="flex space-x-4 pb-6 border-b border-surface-border/50 last:border-b-0"
                >
                  <div className="relative w-20 h-24 bg-surface-elevated flex-shrink-0 overflow-hidden border border-surface-border">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-base text-ivory leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.variantId)}
                          className="text-muted hover:text-red-400 transition-colors ml-2"
                          title="Remove item"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      {item.variantName && (
                        <p className="text-[11px] text-muted tracking-wider uppercase mt-0.5">
                          Variant: {item.variantName}
                        </p>
                      )}
                      <p className="text-xs text-gold font-medium mt-1">
                        ${(item.variantId
                          ? item.product.variants?.find((v) => v.id === item.variantId)?.price ?? item.product.price
                          : item.product.price
                        ).toLocaleString()}{' '}
                        <span className="text-[10px] text-muted">{item.product.currency}</span>
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-surface-border">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variantId)}
                          className="p-1 hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-mono">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variantId)}
                          className="p-1 hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-xs text-ivory/80 font-mono">
                        ${(
                          (item.variantId
                            ? item.product.variants?.find((v) => v.id === item.variantId)?.price ?? item.product.price
                            : item.product.price) * item.quantity
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-surface-border bg-surface-elevated/70 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-muted">
                  <span>Subtotal</span>
                  <span className="text-ivory font-mono">${cartSubtotal.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Shipping</span>
                  <span className="text-ivory">
                    {cartSubtotal >= freeShippingThreshold ? 'Complimentary' : '$45 USD'}
                  </span>
                </div>
                <div className="flex justify-between text-muted text-[11px]">
                  <span>Duties & Import Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="pt-2 border-t border-surface-border/50 flex justify-between text-sm font-medium">
                  <span className="text-ivory">Total Estimated</span>
                  <span className="text-gold font-mono text-base">
                    ${(cartSubtotal + (cartSubtotal >= freeShippingThreshold ? 0 : 45)).toLocaleString()} USD
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <div className="pt-2">
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="w-full flex items-center justify-center space-x-2 bg-gold hover:bg-gold-hover text-background font-medium py-3.5 px-4 text-xs uppercase tracking-widest transition-colors duration-200"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[10px] text-center text-muted/70 mt-2 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-gold" />
                  <span>Demonstration order preview • Secure 256-bit encryption</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

