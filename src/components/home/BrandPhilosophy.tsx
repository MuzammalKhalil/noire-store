import React from 'react';

export default function BrandPhilosophy() {
  return (
    <section className="bg-surface py-20 sm:py-28 border-y border-surface-border relative overflow-hidden">
      {/* Decorative Gold Accent Bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gold" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-medium">
          Maison Philosophy
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-light leading-relaxed">
          &ldquo;True luxury is not about opulence or volume. It is the uncompromising distillation of form, materials, and human devotion until nothing remains that is superfluous.&rdquo;
        </h2>

        <div className="pt-2 flex flex-col items-center">
          <div className="w-12 h-px bg-surface-border mb-3" />
          <span className="text-xs uppercase tracking-widest text-gold-light font-serif">
            Atelier NOIRÉ
          </span>
          <span className="text-[10px] text-muted tracking-widest uppercase font-sans mt-0.5">
            Geneva • Florence • Sabae
          </span>
        </div>
      </div>
    </section>
  );
}

