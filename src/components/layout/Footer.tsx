'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-surface border-t border-surface-border text-ivory/80 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Brand Note Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-surface-border">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl tracking-[0.25em] text-ivory block uppercase">
              NOIRÉ
            </span>
            <p className="text-xs text-muted leading-relaxed max-w-sm">
              Objects of Distinction. Hand-crafted timepieces, Tuscan leather portfolios, and Japanese titanium eyewear. Designed in silence, engineered for eternity.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] text-gold tracking-widest uppercase border border-gold/30 px-3 py-1">
                Atelier Geneve • Firenze • Tokyo
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-lg text-ivory tracking-wide">
              The Private Gazette
            </h3>
            <p className="text-xs text-muted max-w-md">
              Receive confidential invitations to limited edition drops, private horology salons, and provenance dispatches.
            </p>

            {subscribed ? (
              <div className="flex items-center space-x-2 text-gold text-xs py-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>You have been inscribed into the private circle. A welcome dispatch awaits.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-surface-elevated border border-surface-border text-ivory text-xs px-4 py-3 placeholder-muted focus:outline-none focus:border-gold font-sans"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-hover text-background px-6 py-3 text-xs uppercase tracking-widest font-medium transition-colors flex items-center space-x-2"
                >
                  <span>Inscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <p className="text-[10px] text-muted">
              By subscribing, you acknowledge our Privacy Policy. Dispatches are sent biannually.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-surface-border text-xs">
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-widest text-gold font-medium">Collections</h4>
            <ul className="space-y-2.5 text-muted">
              <li>
                <Link href="/shop?category=watches" className="hover:text-ivory transition-colors">
                  Haute Horlogerie
                </Link>
              </li>
              <li>
                <Link href="/shop?category=leather-goods" className="hover:text-ivory transition-colors">
                  Fine Tuscan Leather
                </Link>
              </li>
              <li>
                <Link href="/shop?category=eyewear" className="hover:text-ivory transition-colors">
                  Architectural Eyewear
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Limited Commissions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-widest text-gold font-medium">The Maison</h4>
            <ul className="space-y-2.5 text-muted">
              <li>
                <Link href="#story" className="hover:text-ivory transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-ivory transition-colors">
                  The Atelier & Craft
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Material Provenance
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Sustainability Mandate
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-widest text-gold font-medium">Client Concierge</h4>
            <ul className="space-y-2.5 text-muted">
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Private Appointments
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Bespoke Engraving
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Complimentary Shipping
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Returns & Guarantee
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-widest text-gold font-medium">Legal & Compliance</h4>
            <ul className="space-y-2.5 text-muted">
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Terms of Distinction
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-ivory transition-colors">
                  Certificate of Origin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-muted space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} NOIRÉ. All rights reserved. Registered trademark.</p>
          <div className="flex items-center space-x-6">
            <span>Currency: <strong className="text-ivory font-mono">USD ($)</strong></span>
            <span className="text-surface-border">|</span>
            <span className="text-gold/90">Demonstration Catalogue Preview</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

