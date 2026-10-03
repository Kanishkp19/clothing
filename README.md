# LUXORA — Curated Fashion & Luxury Boutique

> **Curated Fashion · Handcrafted Style**  
> Luxury fashion and boutique e-commerce web application crafted with Next.js 15, Tailwind CSS v4, Framer Motion, and Prisma SQLite.

---

## ✨ Features

- **Curated Collections & Taxonomy**:
  - 👗 **Dresses**: Maxi, midi, wrap, and celebratory silk dresses
  - 👚 **Tops**: Silk blouses, linen shirts, crop tops, and structured shirts
  - 🧥 **Outerwear**: Tailored merino wool blazers, trench coats, and denim jackets
  - 👖 **Bottoms**: Pleated trousers, linen shorts, and straight denim
  - 👜 **Accessories**: Italian leather bags, silk scarves, and leather belts
- **Curated Lookbooks**:
  - *The Linen Edit* — Breezy summer tailoring & relaxed silhouettes
  - *The Festive Edit* — Mulberry silk, delicate zari, and celebratory opulence
  - *Everyday Essentials* — Foundation wardrobe pieces in organic cotton & fine wool
- **Product Experience**:
  - Dual-angle high-resolution fashion photography (front look & detail crop)
  - Interactive Size Selector (`XS`, `S`, `M`, `L`, `XL`)
  - Fabric swatch pills with active fabric selection
  - Garment specifications: Fabric composition, fit silhouette, and dry clean / fabric care guidelines
  - Verified customer reviews & star ratings
- **Dynamic Shopping & Filtering**:
  - Filter by Category, Collection, and Fabric (*100% Linen, Pure Silk, Organic Cotton, Denim, Wool Blend*)
  - Interactive price range slider and instant debounced search
  - Slide-out Cart Drawer with item count and price calculations
  - Persistent Wishlist state
- **Checkout & Tracking**:
  - Bespoke checkout flow with promo code support (**`LUXORA10`** for 10% off)
  - Live 6-step order tracking timeline with Blue Dart Express
  - Demo tracking order: **`#LUX-774921`** (Email: `ananya@example.com`)
- **Haute-Couture 5-Color Design System**:
  - `#F1DFD3` — Silk Vanilla (Canvas background)
  - `#F0D9CB` — Warm Peach Blush (Cards & surface containers)
  - `#E2A8BE` — Soft Peony Rose (Secondary accents & borders)
  - `#D58EBF` — Orchid Mauve (Primary interactive accent)
  - `#F9D326` — Radiant Sun Gold (Ratings & luxury highlights)

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom OKLCH design tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database & ORM**: [Prisma](https://www.prisma.io/) with SQLite
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Database & Seed
```bash
npx prisma generate
npx prisma db push
npx tsx prisma/seed.ts
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or whichever port is assigned) in your browser.

---

## 🧪 Demo Credentials & Testing

| Feature | Details |
| :--- | :--- |
| **Order Tracking** | Order Number: **`LUX-774921`** · Email: **`ananya@example.com`** |
| **Promo Code** | **`LUXORA10`** (10% discount applied at checkout) |
| **Studio Location** | LUXORA Studio, Bandra West, Mumbai 400050 |

---

## 📄 License
This project is private and proprietary.
