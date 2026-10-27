'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Editorial Image with subtle dark gradient vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000&auto=format&fit=crop"
          alt="NOIRÉ Haute Horlogerie Chronographe Édition V"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.38] contrast-[1.12]"
        />
        {/* Subtle radial and linear dark luxury vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      {/* Decorative Gold Grid Lines */}
      <div className="absolute inset-x-8 top-12 bottom-12 border border-gold/15 pointer-events-none hidden md:block" />
      <div className="absolute top-12 left-12 w-3 h-3 border-t-2 border-l-2 border-gold pointer-events-none hidden md:block" />
      <div className="absolute top-12 right-12 w-3 h-3 border-t-2 border-r-2 border-gold pointer-events-none hidden md:block" />
      <div className="absolute bottom-12 left-12 w-3 h-3 border-b-2 border-l-2 border-gold pointer-events-none hidden md:block" />
      <div className="absolute bottom-12 right-12 w-3 h-3 border-b-2 border-r-2 border-gold pointer-events-none hidden md:block" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center py-20 flex flex-col items-center">
        {/* Top Tagline */}
        <div className="inline-flex items-center space-x-2 border border-gold/40 px-3.5 py-1.5 mb-8 bg-surface/60 backdrop-blur-md">
          <Compass className="w-3.5 h-3.5 text-gold animate-spin-slow" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans font-light">
            Haute Horlogerie & Fine Objects
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory tracking-tight font-normal leading-[1.08] max-w-4xl">
          Objects of <br />
          <span className="italic font-serif text-gold-light">Distinction</span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-muted max-w-2xl font-sans font-light leading-relaxed tracking-wide">
          Where Swiss mechanical movements converge with hand-burnished Tuscan leathercraft and aerospace titanium. Conceived in silence, engineered for eternity.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-hover text-background text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-gold/10"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#story"
            className="w-full sm:w-auto px-8 py-4 bg-surface/70 hover:bg-surface border border-surface-border hover:border-gold/50 text-ivory text-xs uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
          >
            <span>The Maison Story</span>
          </a>
        </div>

        {/* Editorial Footnotes / Key Metrics */}
        <div className="mt-16 pt-8 border-t border-surface-border/60 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 text-left w-full max-w-3xl">
          <div className="space-y-1">
            <span className="text-[10px] text-gold tracking-widest uppercase block font-mono">01 / Mechanical</span>
            <p className="text-xs text-ivory font-serif">In-House Calibre N-01</p>
            <p className="text-[11px] text-muted font-sans font-light">72-Hour reserve, column-wheel</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-gold tracking-widest uppercase block font-mono">02 / Provenance</span>
            <p className="text-xs text-ivory font-serif">Tuscan Full-Grain</p>
            <p className="text-[11px] text-muted font-sans font-light">Vegetable-tanned in Florence</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-gold tracking-widest uppercase block font-mono">03 / Precision</span>
            <p className="text-xs text-ivory font-serif">Grade-1 Japanese Titanium</p>
            <p className="text-[11px] text-muted font-sans font-light">Forged in Sabae, Fukui</p>
          </div>
        </div>
      </div>
    </section>
  );
}

