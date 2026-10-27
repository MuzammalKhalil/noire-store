'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import SearchModal from '@/components/search/SearchModal';

export default function Navbar() {
  const { cartCount, openCart, wishlist } = useStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop All', href: '/shop' },
    { name: 'Collections', href: '#collections' },
    { name: 'Horlogerie', href: '/shop?category=watches' },
    { name: 'Leather', href: '/shop?category=leather-goods' },
    { name: 'Eyewear', href: '/shop?category=eyewear' },
    { name: 'Our Story', href: '#story' },
  ];

  return (
    <>
      {/* Announcement Strip */}
      <div className="bg-surface-elevated text-ivory/80 text-[11px] tracking-widest uppercase py-2 px-4 border-b border-surface-border text-center font-sans font-light">
        <p className="flex items-center justify-center gap-2">
          <span>Complimentary worldwide priority delivery over $500</span>
          <span className="text-gold">•</span>
          <span className="hidden sm:inline">Private concierge & atelier appointments</span>
        </p>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-surface-border py-4 shadow-lg'
            : 'bg-background/80 backdrop-blur-sm border-b border-surface-border/50 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ivory hover:text-gold transition-colors p-1"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-widest uppercase font-sans">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-ivory/80 hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Brand Logo / Wordmark */}
          <div className="text-center">
            <Link href="/" className="inline-block group focus:outline-none">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-ivory block uppercase font-light group-hover:text-gold-light transition-colors">
                NOIRÉ
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gold/80 block uppercase -mt-1 font-sans font-normal">
                Objects of Distinction
              </span>
            </Link>
          </div>

          {/* Desktop Right Nav & Actions */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-widest uppercase font-sans">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-ivory/80 hover:text-gold transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-4 sm:space-x-5 text-ivory">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-gold transition-colors p-1"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link/Indicator */}
              <Link
                href="/shop?view=wishlist"
                className="relative hover:text-gold transition-colors p-1"
                aria-label={`Wishlist (${wishlist.length} items)`}
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Trigger */}
              <button
                onClick={openCart}
                className="relative hover:text-gold transition-colors p-1"
                aria-label={`Open shopping bag (${cartCount} items)`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-surface border-b border-surface-border px-6 py-8 space-y-6 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-5 text-sm tracking-widest uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-ivory hover:text-gold py-1 transition-colors border-b border-surface-border/40 pb-2"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-surface-border text-xs text-muted space-y-2">
              <p className="text-gold tracking-widest uppercase text-[11px]">Private Client Services</p>
              <p>concierge@noire-distinction.com</p>
              <p>Mon - Sat, 9am - 8pm CET</p>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

