'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-surface-elevated/80 border-t border-surface-border relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-medium">
          Privileged Access
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
          Join the NOIRÉ Society
        </h2>

        <p className="text-sm text-muted max-w-xl mx-auto font-sans font-light leading-relaxed">
          Members receive preview privileges for limited numbered timepieces, bespoke atelier consultations, and invitations to private international salons.
        </p>

        {submitted ? (
          <div className="inline-flex items-center space-x-3 bg-surface border border-gold/40 text-gold px-6 py-4 text-xs tracking-wider animate-in fade-in duration-300">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>Thank you. Your request for membership has been noted for review.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 pt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your preferred email address"
              required
              className="flex-1 bg-surface border border-surface-border text-ivory text-xs px-5 py-4 placeholder-muted focus:outline-none focus:border-gold font-sans"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-hover text-background px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="pt-2 flex items-center justify-center space-x-2 text-[10px] text-muted">
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          <span>Strict confidential registry • Zero promotional spam • Biannual communique</span>
        </div>
      </div>
    </section>
  );
}

