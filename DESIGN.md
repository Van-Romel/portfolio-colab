# DESIGN.md — SC TechLabs Design System & UI Specification

> **Documentation Standard:** SC TechLabs Official Design System  
> **Brand Identity:** Sena & Carvalho Tech Labs (SC TechLabs)  
> **Target Audience:** Enterprise Clients, CTOs, Technical Leadership & Strategic Partners  
> **Visual Philosophy:** Modern, airy, high-craft software engineering studio with dual Light/Dark theme support, smooth fluid animations, and strict multilingual parity (EN, PT, FR).

---

## 1. Visual Philosophy & Identity

SC TechLabs presents a world-class technology consulting firm. The design balances visual appeal with enterprise credibility:
- **Clean & Airy:** Generous whitespace, refined padding, and breathing room between sections.
- **Modern Depth:** Subtle floating ambient orbs with soft keyframe animations (`float-orb`), delicate geometric grid overlays, and translucent glassmorphism (`backdrop-blur-md` / `backdrop-blur-xl`).
- **Grounded Enterprise Trust:** Cards and typography feel authoritative, crisp, and high-performance, avoiding cramped retro grids or dark monochrome terminal boxes.
- **No Internal Leaks:** The public website never displays internal documentation terms, AI slop references, or internal filenames. It speaks directly about SC TechLabs' architectural services, real cases, and team.

---

## 2. Color System & Dual Theme Tokens

The site features native **Dark Mode** and **Light Mode** toggled via the header controls and persisted in `localStorage`.

### 2.1 Surfaces & Canvas
| Token | Light Theme | Dark Theme |
| :--- | :--- | :--- |
| **Canvas Background** | `#F8FAFC` (Slate-50) / White | `#020617` (Slate-950) / `#0F172A` (Slate-900) |
| **Card Surface** | `bg-white/80 backdrop-blur-md` | `bg-slate-800/80 backdrop-blur-md` |
| **Elevated Surface** | `bg-white shadow-xl` | `bg-slate-800 shadow-2xl` |
| **Hairline Border** | `border-slate-200/60` | `border-slate-700/60` |
| **Active Border** | `hover:border-indigo-500/50` | `hover:border-indigo-400/50` |

### 2.2 Brand & Functional Accents
- **Brand Primary Gradient:** `from-indigo-600 to-blue-600` (Light) / `from-indigo-400 via-blue-400 to-cyan-300` (Dark)
- **Interactive Buttons:** `bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-indigo-500/25`
- **Pill Badges:** `bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300`
- **Ambient Glow Orbs:**
  - Light: `bg-indigo-200/50 blur-[100px]`, `bg-blue-200/40 blur-[80px]`
  - Dark: `bg-indigo-600/20 blur-[120px]`, `bg-blue-600/15 blur-[100px]`

---

## 3. Typography & Hierarchy

- **Font Family:** Modern Sans (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`) with Monospace accents (`ui-monospace, SFMono-Regular, Menlo, monospace`) for code tags and technical metrics.
- **Headings:**
  - Hero Display: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight`
  - Section Title: `text-3xl sm:text-4xl font-bold`
  - Card Title: `text-lg sm:text-xl font-bold`
- **Body & Captions:**
  - Subtitle: `text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed`
  - Card Body: `text-sm text-slate-600 dark:text-slate-400 leading-relaxed`
  - Tech Pills: `text-xs font-medium px-2.5 py-1 rounded-lg`

---

## 4. Responsive Layout & 4K Optimization

The layout is built mobile-first and fluidly adapts across all viewport ranges:
- **Mobile (<640px):** Single-column layout, compact 14px header with mobile menu, touch-friendly tap targets (minimum 44x44px).
- **Tablet (640px–1024px):** 2-column project and team cards, optimized container gutters (`px-6`).
- **Desktop (1024px–1536px):** Full multi-column grid (`grid-cols-3`), floating decoration cards, rich navigation bar with language and theme switchers.
- **Ultra-Wide & 4K (>1536px):** Constrained `max-w-7xl` centered container preventing content stretching, high-DPI asset rendering, and balanced vertical rhythm.

---

## 5. Multilingual Structure (i18n)

Full 3-language parity across all routes:
1. **English (`en`):** Default root (`/`) and `/en/projetos/`
2. **Portuguese (`pt`):** `/pt/` and `/pt/projetos/`
3. **French (`fr`):** `/fr/` and `/fr/projetos/`

All strings are strictly centralized in `src/i18n/translations.ts`. Whenever new sections or cards are added, all three language keys must be populated.

---

## 6. Hyperlink & Identity Integrity Rules

1. **Only Real, Verified Links:**
   - Link buttons must only be rendered when a valid, active destination exists (`href` is not `#`, not empty, not a placeholder).
   - Team members with verified LinkedIn profiles (e.g. Van-Romel, Rafael, Fabrício) have active link buttons.
   - If a member or asset does not yet have a profile link, hide the button gracefully or omit the anchor tag.
2. **No Fake Repository Links:**
   - Client and proprietary enterprise projects (Audi Connect, Mastercard, Natixis KYC, Tributaliza, JiuMind) must NOT display generic or fake GitHub repo buttons.
   - Project cards only render the "Visit Website" / "Acessar Projeto" button when a verified live product/client URL exists (`demoUrl`).
