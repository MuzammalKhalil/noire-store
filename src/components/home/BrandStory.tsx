import React from 'react';
import Image from 'next/image';
import { Award, Clock, Feather } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-background border-t border-surface-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery with Layered Gold Accent Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-surface-border">
              <Image
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop"
                alt="NOIRÉ Master Artisan at the Florence Atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Quote Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-surface border border-gold/30 p-6 max-w-xs shadow-2xl backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-widest text-gold block font-mono">
                Atelier Geneve • Est. 2024
              </span>
              <p className="font-serif italic text-sm text-ivory/90 mt-1">
                &ldquo;Every curve is measured in microns, every stitch consecrated to outlive its owner.&rdquo;
              </p>
              <span className="text-[10px] text-muted tracking-wider uppercase block mt-2">
                — Jean-Luc Mercier, Master Horologist
              </span>
            </div>

            {/* Subtle Gold Corner accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold/60 pointer-events-none" />
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-8 lg:pl-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans font-medium block">
                The Atelier & Provenance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory mt-2 font-normal leading-tight">
                Crafted in Silence. <br />
                <span className="italic text-gold-light">Worn with Conviction.</span>
              </h2>
            </div>

            <p className="text-sm text-muted leading-relaxed font-sans font-light">
              Founded on the belief that real distinction requires patience, NOIRÉ produces objects in deliberate scarcity. We do not participate in cyclical seasonal fashion; each edition is refined until further modification would be a compromise.
            </p>

            <p className="text-sm text-muted leading-relaxed font-sans font-light">
              Our movements originate in the Vallée de Joux, hand-regulated over 1,000 hours of stress testing. Our leather is harvested exclusively from ethical Tuscan ranches, tanned over six weeks using organic chestnut barks.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-surface-border">
              <div className="space-y-2">
                <Clock className="w-5 h-5 text-gold" />
                <h4 className="font-serif text-base text-ivory">Perpetual Calibres</h4>
                <p className="text-xs text-muted leading-normal">
                  Automatic column-wheel movements regulated to chronometer standards.
                </p>
              </div>

              <div className="space-y-2">
                <Feather className="w-5 h-5 text-gold" />
                <h4 className="font-serif text-base text-ivory">Tuscan Tannery</h4>
                <p className="text-xs text-muted leading-normal">
                  Vegetable tanning with zero chrome runoff, finished with beeswax.
                </p>
              </div>

              <div className="space-y-2">
                <Award className="w-5 h-5 text-gold" />
                <h4 className="font-serif text-base text-ivory">Lifetime Origin</h4>
                <p className="text-xs text-muted leading-normal">
                  Every object receives a serial ledger inscribed into our permanent archive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

