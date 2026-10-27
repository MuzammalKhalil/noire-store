'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { COLLECTIONS } from '@/data/products';

export default function CollectionShowcase() {
  return (
    <section id="collections" className="py-24 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-surface-border">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans font-medium">
              Curated Disciplines
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory mt-2 font-normal">
              The Three Pillars
            </h2>
          </div>
          <p className="text-xs text-muted max-w-sm mt-4 md:mt-0 font-sans font-light leading-relaxed">
            Every object is crafted under single-artisan supervision, limited in annual production to preserve uncompromised integrity.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((collection) => (
            <Link
              key={collection.id}
              href={`/shop?category=${collection.slug}`}
              className="group relative bg-surface border border-surface-border/70 overflow-hidden flex flex-col justify-between hover:border-gold/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-elevated">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Top Item count badge */}
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 border border-surface-border text-[10px] text-ivory/80 uppercase tracking-widest font-mono">
                  {collection.itemCount} Objects
                </div>
              </div>

              {/* Content Card Info */}
              <div className="p-6 relative z-10 bg-surface flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-sans block">
                    {collection.tagline}
                  </span>
                  <h3 className="font-serif text-2xl text-ivory group-hover:text-gold-light transition-colors mt-1">
                    {collection.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mt-2 font-sans font-light">
                    {collection.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-gold uppercase tracking-widest font-medium">
                  <span>Explore Atelier</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

