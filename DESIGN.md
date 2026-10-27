# DESIGN.md — SC TechLabs Engineering & Architecture Standard

> **Standard Version:** 2.0 (Anti-AI-Slop / High-Craft Engineering)  
> **Target Audience:** CTOs, VPs of Engineering, Enterprise Architects, Technical Founders  
> **Brand Essence:** Boutique Systems Architecture, Distributed Computing, High-Throughput Cloud & Edge Infrastructure.

---

## 1. Core Philosophy: The Anti-AI-Slop Manifesto

Most AI-generated websites share telltale visual defects that instantly signal "cheap template" to technical buyers. SC TechLabs adheres to strict design constraints to ensure every interface looks like bespoke, human-crafted engineering:

| AI Template Trope (FORBIDDEN) | SC TechLabs Standard (MANDATORY) |
| :--- | :--- |
| **Floating Neon Blur Blobs** (`blur-[120px]` purple orbs) | **Architectural Hairline Grid** (`border-slate-800/80`, subtle 1px guide lines) |
| **Rainbow / Gradient Text** (`bg-clip-text text-transparent`) | **High-Contrast Stark Typography** (`#F8FAFC` slate-50 display text) |
| **Oversized Bubble Pills** (`rounded-full` everywhere) | **Precise Micro-Radii** (`rounded-md` / `rounded-lg`, 4px–8px corners) |
| **Symmetrical 3-Card Cookie-Cutter Grids** with icon circles | **Asymmetric Bento Dossier** with real metrics, system topology & throughput |
| **Unmotivated Glowing Borders** on every hover | **Subtle Depth & Monochromatic Contrast** with crisp hairline state transitions |
| **Generic Marketing Buzzwords** ("Supercharge with AI") | **Grounded Engineering Deliverables** ("1M+ Events/Day", "JPA Session Eviction", "Sub-50ms Latency") |

---

## 2. Design Tokens & Color Palette

The color system retains SC TechLabs' core identity (Slate, Deep Indigo, Cyan, Emerald) while using colors as **functional data indicators** rather than decorative noise:

```yaml
tokens:
  surfaces:
    canvas_dark: "#080C14"        # Deep Obsidian Canvas (grounded, zero washed-out gray)
    surface_base: "#0D1321"       # Primary Card / Panel Background
    surface_elevated: "#131C31"   # Elevated Layer / Hover State
    surface_highlight: "#1A2644"  # Active Selection / Header Bar
    border_hairline: "rgba(148, 163, 184, 0.12)" # 1px crisp structural border
    border_accent: "rgba(99, 102, 241, 0.4)"     # Targeted focus border

  typography_colors:
    primary_ink: "#F8FAFC"        # Slate-50 — Stark white, primary titles & headings
    secondary_ink: "#94A3B8"      # Slate-400 — Technical descriptions, balanced contrast
    muted_ink: "#64748B"          # Slate-500 — Metadata, footnotes, labels
    code_ink: "#E2E8F0"           # Slate-200 — Monospace technical specifications

  operational_accents:
    brand_indigo: "#6366F1"       # Primary Interactive Accent & Terminal Prompt
    system_emerald: "#10B981"     # Verified Production SLAs, Online Health, Real Metrics
    edge_cyan: "#38BDF8"          # Cloudflare Edge, Distributed Messaging, WebSockets
    warning_amber: "#F59E0B"      # Audit Governance, Incident Recovery Indicators
```

---

## 3. Typography & Information Hierarchy

* **Display Headings (`font-sans` / Inter or Geist):**
  * `font-weight: 700` or `800`
  * `letter-spacing: -0.03em` (tight tracking to give architectural authority)
  * Sentence case or clean title case — never all-caps for entire paragraphs
* **Monospace System Accents (`font-mono`):**
  * Used for: system versions, architecture tags, benchmark numbers, terminal prompts
  * Syntax: `[ ARCHITECTURE // HIGH_THROUGHPUT ]`, `[ SLA: 99.99% VERIFIED ]`, `[ TIER: EDGE_KV ]`
  * Sizing: `text-[11px]` or `text-xs` with `tracking-wider` or `tracking-widest`
* **Body Copy:**
  * Clean, relaxed line height (`leading-relaxed`, `1.65`)
  * Max reading width: `max-w-2xl` to `max-w-3xl`

---

## 4. Component Rules

### 4.1. Navigation & HUD Header
* Fixed hairline header with subtle backdrop blur (`bg-[#080C14]/85 backdrop-blur-md border-b border-slate-850`).
* Includes **System Status Badge** with live pulsing green dot: `[ ● ALL SYSTEMS OPERATIONAL ]`.
* Minimalist links with monospace index numbers: `01. Cases`, `02. Architecture`, `03. Team`, `04. Contact`.

### 4.2. Hero Section
* **Zero glowing rainbow text.** Headings are stark `#F8FAFC` with deliberate emphasis words in crisp electric indigo or white.
* **Operational Metrics Bar:** Integrated directly into the hero flow (e.g. `1M+` Daily Events, `<50ms` Edge Latency, `10+` Years Enterprise).
* **Terminal HUD / Architecture Inspector:** An authentic live component showing real architectural stacks (Java 21, Kotlin, Spring Data JDBC, Rust Tauri 2, Cloudflare Edge) rather than decorative mock windows with useless buttons.

### 4.3. Bento Case Studies Grid
* High information density.
* Every project card must showcase:
  1. **Enterprise Client / Scope Badge** (`VOLKSWAGEN GROUP`, `MASTERCRED`, `FINANCIAL ENGINE`)
  2. **Core Architectural Deliverable** (The engineering challenge solved)
  3. **Verified Metric / Outcome**
  4. **Monospace Stack Pills** (`[ JAVA 21 ]`, `[ KOTLIN ]`, `[ POSTGRESQL ]`, `[ EDGE KV ]`)

### 4.4. Call-to-Action & Contact
* Direct technical intake: schedule architecture review, direct engineering inquiry.
* Direct timezone indicators: `UTC+0 (Lisbon / London)`, `UTC+1 (Berlin / Frankfurt)`, `UTC-3 (São Paulo)`.
