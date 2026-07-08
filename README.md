![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?logo=tailwindcss&logoColor=white)
![lucide-react](https://img.shields.io/badge/lucide--react-icons-orange)
![Responsive-Design](https://img.shields.io/badge/Responsive-Design-green)

# 🛍️ LITE.SHOP – React Components & Props Workshop

This repository contains my **Workshop 1 – ReactJS (Components & Props)** assignment, built for the *Lexicon ReactJS Frontend Workshop*.
The goal of the assignment was to recreate a given e‑commerce layout using **React, Vite, TypeScript, Tailwind CSS and lucide-react**, with a strong focus on component thinking, reusable structure and clean use of props.

The design is based on the reference `index.html` provided by my instructor, but rebuilt using **my own color theme** rather than copying the original styling.
I also introduced a dedicated Shop page to separate the product listings from the Home page.
This allows the Home page to focus on hero content, promotions and navigation, while the Shop page handles product grids, filters and pagination.
This structure reflects common patterns in modern e‑commerce applications.

---

## 📘 Workshop Instructions

👉 [View workshop instructions](React_Workshop1.md)

---

## 🎯 Project Goals

- Build a React app from scratch with **Vite + TypeScript + Tailwind CSS**
- Split a large page into **small, reusable components**
- Practice **passing props** between components
- Use **TypeScript interfaces/types** where they add value
- Keep the **project structure clean and easy to follow**
- Use **lucide-react** icons instead of hand-written SVGs
- Extend the original assignment into a small **2-page site** (Home + Shop) using React Router, to practice reusing components across routes

---

## 🌟 Features

- ✔ Responsive **Header** with logo, navigation, search and cart
- ✔ Reusable **Sidebar** — one version for the shop (filters), one for the homepage (category highlights)
- ✔ **HeroBanner** with a "Shop Now" button that routes to the shop page
- ✔ Data-driven **ProductGrid** rendering a list of **ProductCard** components
- ✔ **Newsletter** signup section and **Footer** shared across both pages
- ✔ Custom **Container** component to keep page widths consistent (with a per-page override)
- ✔ Small reusable UI kit: `Button`, `Input`, `Badge`, `Card`, `SectionTitle`
- ✔ Fully responsive layout
- ✔ Own color theme via CSS variables (`--color-primary`) instead of the instructor's default colors

---

## 🧩 Components

### Layout components

| Component | Purpose |
|---|---|
| `Header` | Top navigation bar: logo, nav links, search input and cart icon. Shown on every page. |
| `Sidebar` | Filter panel used on the **Shop** page (categories, price range, availability). |
| `HomeSidebar` | Separate sidebar used only on the **Home** page (category highlights & promo blocks). Split from `Sidebar` because it serves a different purpose — filtering vs. promotion — even though both sit in the same visual spot. |
| `HeroBanner` | Large promotional banner on the homepage, with title, description, image and CTA button. |
| `Newsletter` | "Join the LITE.CLUB" signup section, shown on every page. |
| `Footer` | Site footer with brand info, link columns and copyright. Shown on every page. |
| `Pagination` | Page number navigation shown below the product grid. |

### Product components

| Component | Purpose |
|---|---|
| `ProductGrid` | Renders a responsive grid of `ProductCard` components from a list of products. Contains no data itself — it only knows how to *display* whatever product list it receives. |
| `ProductCard` | Displays a single product: image, badge, category, rating, title, stock status and price. |
| `ProductRating` | Small reusable star + number rating display, used inside `ProductCard`. |

### UI kit (small reusable building blocks)

| Component | Purpose |
|---|---|
| `Button` | Reusable button with `primary` / `secondary` / `outline` variants. |
| `Input` | Styled text/email input used in the search bar and newsletter form. |
| `Badge` | Small colored label (e.g. "New", "Sold Out"). |
| `Card` | Generic container with a fixed shape (rounded corners, padding, hover shadow) and a swappable `surfaceClassName` for background/border/color. Used in `HomeSidebar` to wrap the three colored promo blocks — one component, three different looks. |
| `SectionTitle` | Consistent heading style used inside sidebar sections. |
| `Container` | Centers page content and controls the max page width — see below. |

---

## 🔀 Pages

Since the assignment grew into a small **2-page site**, routing was added with `react-router-dom`:

| Page | Route | Contains |
|---|---|---|
| `Home` | `/` | `HomeSidebar` + `HeroBanner` |
| `Shop` | `/shop` | `Sidebar` + `ProductGrid` + `Pagination` |

`Header`, `Newsletter` and `Footer` are rendered in `App.tsx` **outside** of `<Routes>`, so they stay visible on both pages instead of being duplicated inside every page component.

---

## 🔗 Props — what is passed, and why

Props are used wherever a component needs to render **different content depending on where it's used**, instead of hardcoding that content inside the component itself.

- **`HeroBanner`** receives `title`, `description`, `buttonText` and `image` as props.
  → This makes the banner reusable for any future promotion, without touching the component's code — only the data passed to it changes.

- **`ProductGrid`** receives a `products: Product[]` array as a prop, and passes each individual product's fields down to `ProductCard`.
  → This is the core example of **data-driven rendering**: the grid doesn't know or care what a "product" looks like conceptually, it just maps over whatever array it receives. Adding a new product later only means adding an entry to `data/products.ts` — no component code changes.

- **`ProductCard`** receives all product fields (`title`, `price`, `rating`, `badge`, etc.) as individual props, typed through a shared `Product` interface (`types/product.ts`).
  → Using one shared type across `data/products.ts` → `ProductGrid` → `ProductCard` means TypeScript will catch mismatches (e.g. a typo in a field name) at compile time, across the whole chain — not just inside one file.

- **`ProductRating`** receives just a `rating: number` prop.
  → Kept intentionally tiny and single-purpose, so it can be reused anywhere a rating needs to be shown, not just inside `ProductCard`.

- **`Container`** receives an optional `maxWidth` and `className` prop.
  → The homepage/hero needs a wider layout, while the shop page reads better slightly narrower. Instead of writing two separate wrapper divs, `Container` accepts a `maxWidth` override (`max-w-7xl` on the shop page, defaulting to a wider value elsewhere), so the *same* component can serve both layouts consistently.

- **`Button`, `Input`, `Badge`** all receive a `variant`/`className` prop.
  → Standard UI-kit pattern: one component, several visual variants, so styling stays consistent across the app instead of being repeated everywhere it's used.

---

## 🎨 A note on lucide-react

`lucide-react` is used for all generic UI icons throughout the app: search, cart, quick-view, add-to-cart, chevrons (pagination) and arrows (`HomeSidebar` links).

Brand/social icons (Twitter, Instagram) are the one exception — they're kept as inline SVG instead. `lucide-react` intentionally does not ship trademarked logos, so those two icons remain hand-written SVG rather than imported components.

--- 

## 🤝 How the components work together

```
App.tsx
 ├─ Header                (always visible)
 ├─ Routes
 │   ├─ "/"      → Home
 │   │              ├─ HomeSidebar
 │   │              └─ HeroBanner (title, description, buttonText, image)
 │   │
 │   └─ "/shop"  → Shop
 │                  ├─ Sidebar
 │                  ├─ ProductGrid (products)
 │                  │    └─ ProductCard (× n)
 │                  │         └─ ProductRating (rating)
 │                  └─ Pagination
 ├─ Newsletter            (always visible)
 └─ Footer                (always visible)
```

Data flows in one direction: `data/products.ts` → `Shop` → `ProductGrid` → `ProductCard` → `ProductRating`. No component reaches "up" to grab data it isn't given — everything a component needs to render is passed to it explicitly as a prop. This keeps each component easy to test and reuse in isolation.

---

## 🛠️ Technologies Used

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **lucide-react** (icons)
- **react-router-dom** (2-page navigation)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       → Header, Sidebar, HomeSidebar, HeroBanner, Footer, Newsletter, Pagination
│   ├── products/     → ProductGrid, ProductCard, ProductRating
│   └── ui/            → Button, Input, Badge, Card, SectionTitle, Container
├── pages/            → Home, Shop
├── data/             → products.ts
├── types/            → product.ts
└── App.tsx
```

---

## 🔗 Live Demo

[*Click here*](https://kristyh89.github.io/Workshop13-ReactJS-Components-and-Props/)

---

Thanks for checking out my project 💚
