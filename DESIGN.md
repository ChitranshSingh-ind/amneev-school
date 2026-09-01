# Design System

<!-- impeccable:design-schema 1 -->

## Direction

- **Thesis:** A flagship, editorial web portal for AMNEEV Vision School in Etawah, combining the narrative visual sophistication and spacious storytelling of world-class educational institutions with authentic modern Indian CBSE substance.
- **Palette Strategy:** Committed & Restrained. Deep forest charcoal foundational surfaces (`#0c1b17`, `#1a322b`), warm ivory paper grounds (`#FDFBF7`), soft stone (`#F7F5EE`), and muted warm brass / ochre accents (`#cfa64d`, `#b68b35`).
- **Typography:** Display serif Cormorant Garamond for editorial headings, paired with crisp modern Plus Jakarta Sans for body prose, and JetBrains Mono for metadata, CBSE credentials, and numeric metrics.

## Color Tokens

| Token | Hex | Role | Usage |
| :--- | :--- | :--- | :--- |
| `forest-950` | `#0c1b17` | Foundation Dark | Hero, Dark Sections, Footers, Deep Badges |
| `forest-900` | `#1a322b` | Primary Brand | Primary CTAs, Header solids, Active States |
| `forest-800` | `#27463d` | Brand Accent | Borders, Icons, Secondary Highlights |
| `ivory` | `#FDFBF7` | Light Ground | Primary Canvas Ground, Editorial Sections |
| `stonebg` | `#F7F5EE` | Secondary Ground | Alternating Sections, Filter Bars, Cards |
| `brass-400` | `#cfa64d` | Accent / Highlight | Eyebrows, Badges, Metrics Highlights |
| `brass-600` | `#996d29` | Deep Brass | Focus rings, Icons, Emphasized Labels |
| `charcoal-900` | `#1b1f24` | Primary Text | Body Typography on Light Grounds |
| `charcoal-600` | `#535f6e` | Secondary Text | Subtitles, Captions, Timelines |

## Typography Scale

- **Display Headline (Hero / Flagship):** `font-serif`, `text-4xl` to `text-7xl` (`2.5rem` to `4.5rem`), tracking `-0.03em`, leading `1.1`.
- **Section Heading:** `font-serif`, `text-3xl` to `text-5xl` (`1.875rem` to `3rem`), tracking `-0.02em`.
- **Sub-heading / Feature Title:** `font-serif`, `text-xl` to `text-2xl`, font-weight `bold`.
- **Body Text:** `font-sans`, `text-sm` to `text-base` (`0.875rem` to `1rem`), line-height `1.75` (prose), max line measure `65–75ch`.
- **Labels & Metadata:** `font-mono` / `font-sans`, `text-xs` (`0.75rem`), uppercase, letter-spacing `0.15em` to `0.2em`.

## Component Architecture

1. **Navbar:** Fixed sticky header with dynamic scroll transparency-to-solid transition, mega flyout dropdowns for desktop, and full-screen mobile drawer.
2. **Hero:** Full-width cinematic video overlay (`Mixkit` stream) with high-res poster fallback, editorial typography, dual conversion buttons, and subtle scroll indicator.
3. **Pillars ("More Than a Classroom"):** 6 visual modules using photography over icon cards, sequential numbers, and smooth hover zoom states.
4. **Learning Stages:** 3-tier sequential narrative (Early Years Nursery-UKG with Kreedo, Middle Classes I-VIII, Senior Classes IX-XII) with alternating media composition.
5. **Laboratories & STEM:** Featured showcases for Atal Tinkering Lab (NITI Aayog) and 6 science/computer suites.
6. **Community Stories:** Filterable student, parent, alumni, and teacher perspectives with an accessible modal reader.
7. **Admissions Walkthrough:** 4-step clear process (Enquire, Visit, Register ₹1,500, Join) with transparent guidelines.
8. **Contact & Tour Booking:** Verified address (Sai City, NH-92 Etawah), direct phone (`+91 92196 00500`), and validated interactive inquiry form with instant feedback.
9. **Centralized Asset Configuration:** Managed entirely via `/data/media.ts` and `/data/siteContent.ts` to allow instant asset drop-in without code edits.

## Responsive Design Breakpoints

- **Mobile (375px – 640px):** Single-column storytelling, touch-friendly tap targets (≥44px), optimized video posters, compact metric tiles.
- **Tablet (768px – 1024px):** Two-column editorial balance, clean grid transitions.
- **Desktop (1280px – 1920px+):** Wide container (`max-w-7xl`), multi-column asymmetry, rich whitespace, elevated drop shadows.
