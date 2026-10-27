# NOIRÉ — Objects of Distinction

> Luxury E-Commerce Web Application  
> Built with Next.js (App Router), React, TypeScript, Tailwind CSS, Three.js / React Three Fiber, GSAP, and PostgreSQL (planned backend).

---

## Brand Palette & Design Tokens

| Token | Hex Value | Application |
| :--- | :--- | :--- |
| **Obsidian** | `#0A0A09` | Primary page canvas |
| **Surface** | `#121210` | Elevated containers, cards, sections |
| **Surface Elevated** | `#1A1A17` | Dialogs, inputs, dropdowns |
| **Champagne Gold** | `#C8A66B` | Primary brand accent, active buttons |
| **Light Gold** | `#DFC79B` | Italic display headings, delicate borders |
| **Ivory** | `#F1EEE7` | Primary typography |
| **Muted Grey** | `#A39D91` | Secondary descriptions and metadata |

---

## Current Status: Phase 1 & 2 Complete

- [x] **Next.js App Router Architecture**: Clean TypeScript structure with strict typing.
- [x] **Brand Design System**: Custom Tailwind configuration matching the brand guidelines.
- [x] **Responsive Editorial Homepage**:
  - Announcement bar with complimentary delivery thresholds.
  - Sticky glass header with mobile slide navigation.
  - Large editorial hero with luxury horology imagery and specs.
  - Brand philosophy statement.
  - Collection showcase (Haute Horlogerie, Leather Goods, Architectural Eyewear).
  - Signature editions grid with filter tabs and prototype disclaimers.
  - Brand story section detailing the Swiss, Tuscan, and Japanese ateliers.
  - VIP newsletter dispatch form.
  - Multi-column luxury footer with legal and service links.
- [x] **Interactive Shopping Bag (Cart Drawer)**: Real-time subtotal calculation, quantity steppers, free priority shipping progress bar, and empty state.
- [x] **Interactive Search Modal**: Instant filtering across names, categories, and attributes with keyboard shortcuts (`Esc`).
- [x] **Quick View Modal**: Multi-angle image viewing, variant selection, and add-to-bag flow.
- [x] **Catalogue / Shop View**: Category filters, sort by price/featured, and integrated wishlist filtering.

---

## Getting Started Locally

### 1. Prerequisites
- Node.js >= 18.17 (Node 20+ recommended)
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Running Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Verification
```bash
npm run build
npm run start
```

---

## Upcoming Phases

- **Phase 3**: Dedicated product detail pages (`/product/[slug]`), persistent checkout review.
- **Phase 4**: Interactive 3D Product Viewer with React Three Fiber, Drei, and camera controls.
- **Phase 5**: PostgreSQL schema, Prisma ORM, customer authentication, and order persistence.
- **Phase 6**: Secure payment provider integration and verified webhooks.

