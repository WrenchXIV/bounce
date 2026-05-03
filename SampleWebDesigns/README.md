# Handoff: Bounce Homepage — v2 (Vertical Split) & v3 (Horizontal Split)

## Overview

Two design directions for the new Bounce homepage. Bounce is a "we sell your stuff for you" concierge resale service — snap a photo, hand it over, get cash in your bank in ~7 days. Flat 18% fee, no subscription.

The strategic shift: from transactional ("we sell your stuff") to emotional/aspirational ("clear your space, clear your head"). Recurring tagline: **"Out with the old. In with the new you."**

Both v2 and v3 dramatize the same idea — **before/after, cluttered/clear** — using contrasting dark and cream zones. They differ in axis:

- **v2 — Vertical Split.** Every section is a left/right split. Dark "before" on the left, cream "after" on the right. The page reads like a side-by-side comparison.
- **v3 — Horizontal Split.** Every section is a stacked top/bottom split, with a thin gradient "Bounce band" (wordmark + CTA + scrolling ticker) acting as a portal between the two states.

---

## About the Design Files

The HTML files in this bundle are **design references**, not production code. They were built as React + JSX prototypes loaded via Babel-in-the-browser (good for prototyping; not appropriate for production).

**The task is to recreate these designs in your codebase's environment** — using your existing component library, routing, styling solution, and conventions. If no environment exists yet, pick the most appropriate stack (Next.js + Tailwind is a reasonable default for this kind of marketing site) and implement them there.

Treat the HTML/JSX/CSS as the source of truth for **layout, typography, spacing, color, copy, and interaction** — not as code to copy file-for-file.

## Fidelity

**High-fidelity.** Final colors, typography, spacing, copy, and interactions. Recreate pixel-perfectly, then adapt to your component patterns.

---

## File Map

```
design_handoff_bounce_homepage/
├── README.md                       (this file)
├── Bounce Homepage v2.html         (entry point — vertical split)
├── Bounce Homepage v3.html         (entry point — horizontal split)
├── v2/
│   ├── split.css                   (all v2 styles, ~640 lines)
│   ├── mascot.jsx                  (placeholder kangaroo SVG)
│   ├── sections.jsx                (all v2 section components)
│   └── app.jsx                     (orchestration + onboarding modal + tweaks)
└── v3/
    ├── split.css                   (all v3 styles, ~870 lines)
    ├── mascot.jsx                  (same placeholder kangaroo)
    ├── sections.jsx                (all v3 section components — horizontal layout)
    └── app.jsx                     (orchestration)
```

The two versions are **structurally parallel** — same sections, same data, same onboarding. Only the layout axis and one or two component types differ.

---

## Design Tokens (shared between v2 and v3)

### Colors (oklch — convert to your color space if needed)

| Token | oklch | Approx hex | Use |
|---|---|---|---|
| `--cream` | `oklch(0.965 0.018 75)` | `#F5EFE6` | Primary cream background |
| `--cream-deep` | `oklch(0.935 0.025 75)` | `#EBE3D3` | Secondary surface |
| `--cream-warm` | `oklch(0.90 0.032 70)` | `#DFD3BD` | Tertiary surface |
| `--ink` | `oklch(0.18 0.01 60)` | `#26221E` | Primary text on cream |
| `--ink-soft` | `oklch(0.42 0.015 60)` | `#5F5851` | Secondary text |
| `--ink-faint` | `oklch(0.62 0.015 60)` | `#938B82` | Tertiary text / labels |
| `--rule` | `oklch(0.85 0.015 70)` | `#CFC8BD` | Borders, dividers |
| `--before-bg` | `oklch(0.20 0.012 60)` | `#2B2622` | Dark "before" zone bg |
| `--before-ink` | `oklch(0.92 0.018 70)` | `#E9E1D3` | Text on dark |
| `--before-ink-soft` | `oklch(0.62 0.02 60)` | `#948A7E` | Secondary text on dark |
| `--before-accent` | `oklch(0.62 0.14 45)` | `#C46A3A` | Clay/terracotta — primary brand accent |
| `--after-accent` | `oklch(0.52 0.10 145)` | `#5E8A5F` | Moss green — "after" / cash / growth |

**Palette variants** (toggleable via `[data-palette]` on `<body>`): `clay` (default), `moss`, `ink`, `plum`. See `:root` and `[data-palette="..."]` rules in either `split.css`.

### Typography

```
--serif: 'Instrument Serif', 'Times New Roman', serif;
--sans:  'Inter', system-ui, -apple-system, sans-serif;
--mono:  'JetBrains Mono', ui-monospace, monospace;
```

Load via Google Fonts:
`https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap`

**Type roles**
- **Display headlines** — Instrument Serif, weight 400, line-height 0.95–1.0, letter-spacing -0.03em, sizes `clamp(44px, 5.5vw, 88px)` to `clamp(60px, 8vw, 140px)`. Italic spans (`<em>`) used for emphasis on emotional words, colored with `--before-accent` or `--after-accent`.
- **Body** — Inter 400/500, 14–17px, line-height 1.5–1.6, color `--ink-soft`. Use `text-wrap: pretty` on paragraphs and `text-wrap: balance` on headlines.
- **Eyebrow / label / metadata** — JetBrains Mono 400/500, 10–12px, `letter-spacing: 0.12em–0.20em`, `text-transform: uppercase`, color `--ink-faint`.

### Spacing

No formal scale — the design uses these pixel values consistently: 4, 6, 8, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 48, 56, 60, 64, 80, 100, 120. Section vertical padding is typically 100–120px on desktop, 80px on mobile.

### Radii

- 8–10px for small chips/photos/inputs
- 12–14px for cards
- 18–20px for large cards / modal
- 999px for pills / buttons

### Shadows

- Cards on hover: `0 8px 24px oklch(0% 0 0 / 0.08)`
- Modal: `0 40px 80px oklch(0% 0 0 / 0.25)`
- Tweaks panel: `0 20px 60px oklch(0% 0 0 / 0.15)`

### Motion

- Default transition: `all 180ms` or `all 220ms`
- Hover lifts: `translateY(-1px)` to `translateY(-3px)`
- Pulse animation on the "live" dot (2.4s infinite)
- v3 ticker: linear scroll on the band, 30s loop

---

## Sections (shared narrative arc, both versions)

Both v2 and v3 implement the same homepage structure, in this order:

1. **Nav** — sticky cream bar with serif italic wordmark `bounce.` (the dot is in `--before-accent`), mono uppercase nav links, dark pill CTA "Join waitlist"
2. **Hero** — the defining split. Left/top = "Your home. Full of *stuff.*" (dark, with floating item cards labeled "MacBook Pro · $840" etc). Right/bottom = "Your home. Full of *space.*" (cream, open).
3. **Numbers** — `$4,267` (the unused stuff in the average home) → `$3,420` (avg first-year Bouncer payout)
4. **How it works** — 3 steps, each rendered as its own before/after split:
   - Snap a photo (vs. write listings + field lowballs + get ghosted)
   - Pickup at your door (vs. boxes/tape/post office)
   - Cash in 24 hrs (vs. chase/wait/wonder)
5. **Estimator** — interactive. User picks an item from a chip list (MacBook, iPhone, Lululemon Align, Peloton, Nintendo Switch, KitchenAid). Updates a price range and a fee breakdown showing 18% fee + take-home.
6. **Carousel** — horizontal-scroll strip of "stuff Bouncers bounced this week" — 10 items with name, meta, price.
7. **Testimonials** — 3 voices, each with a before quote and an after quote, paginated.
8. **FAQ** — single-column accordion, 6 questions on pickup, cost, rejecting offers, payout speed, what you can sell, geographic availability.
9. **Finale** — "the clearing." On scroll-into-view, the "before" half collapses/fades out, leaving just `bounce.` + slogan + email signup.
10. **Footer** — minimal. Wordmark + Privacy/Terms/Contact + © 2026.

### Onboarding modal (shared)

Triggered from any "Join waitlist" / "Hand it over" CTA. 4-step modal:
1. Email (validated against standard regex)
2. Goal — pick one of: Declutter, Make cash, Moving soon, Less waste
3. Categories — pick any of: Electronics, Clothing, Furniture, Kitchen, Sports gear, Collectibles
4. ZIP code (validated as 5 digits)

Then a success screen showing "You're on" + masked email + place-in-line `#2,138` + estimated invite window. Layout is a 2-column grid (dark left panel with progress + title, cream right panel with the form). Falls back to single column on mobile.

### Tweaks panel (shared, dev-only)

Floating panel with palette swatches (clay/moss/ink/plum). Appears when the host posts `__activate_edit_mode`. Persists changes via `__edit_mode_set_keys`. **Skip this for production** — it's prototype-only.

---

## Differences: v2 vs v3

### v2 — Vertical Split

Every section is `display: grid; grid-template-columns: 1fr 1fr` with the dark "before" pane on the left and the cream "after" pane on the right.

- Hero shows two halves side-by-side, with the items floating on the left and the spacious typography on the right.
- "How it works" stacks 3 vertical splits.
- Estimator is left = item, right = price.
- Mascot peeks in from the seam between the two panes.
- Reads like a comparison shopping page, but rendered as art direction.

**On mobile** (< 900px) the columns collapse to stacked rows — dark on top, cream below.

### v3 — Horizontal Split (the reference image direction)

Every section is a vertical stack: dark band on top, **a thin gradient "Bounce band"** in the middle (wordmark + CTA + scrolling ticker), cream band on bottom.

- The band is the hero element — a horizontal gradient from `--before-accent` to `--after-accent` with `bounce.` set huge in italic serif and a CTA pill on the right.
- Compact band variant (`band.compact`) is used between internal sub-sections.
- The hero shows "Full of stuff" on top, the band, then "Full of space." on the bottom — same two states, vertically.
- Numbers section is `$4,267` (top) → band → `$3,420` (bottom).
- "How it works" alternates top/band/bottom for each of 3 steps, plus a connector band between steps.
- The band's ticker copy: *"No subscription · No credit card · No account needed · Pickup at your door · Cash in 24 hours"* — looped.

The band is doing the heavy semantic lift: it **is** the moment of transformation, not just decoration. Every time the user crosses one, they move from before to after.

---

## Components in detail

### Item card (used in hero clutter, carousel, "what people bounced")

```
┌─────────────────────┐
│ ┌──┐   Name         │   <- Inter 500 14px
│ │ph│   META · TAGS  │   <- mono 10px uppercase
│ └──┘   $value       │   <- serif italic 22px, accent color
└─────────────────────┘
```

The "ph" placeholder is a 44–80px square with diagonal stripes (`repeating-linear-gradient(135deg, ...)`) and a tiny mono label like `LAPTOP` or `BIKE`. **Replace with real product photography** when available.

### Estimator card

Two-column card on cream-deep background.
- Left column: item name (serif 36px), chip selector for items, item photo placeholder
- Right column: price range in giant italic serif (`clamp(56px, 7vw, 96px)`) with a small "$" superscript and "–" between numbers, both in `--ink-soft`. Below: caption ("Based on last 30 days of sold listings"), then a breakdown table with sale price, fee (18%), wired-to-you total. Total row uses serif 28px in `--after-accent`.

### FAQ accordion

Single column, max-width 820px. Each item:
- Q row: serif headline (clamp 22–30px) + circular `+` toggle (36px, rotates to `×` when open)
- A: max-height transition from 0 to 240px on open, padding-bottom adds when open. Body in 15px Inter `--ink-soft`. `<em>` spans in `--after-accent`.

### Bounce band (v3 only)

```
[ scrolling ticker ............ ]   <- mono 11px, opacity 0.4, 30s linear loop
        bounce.       [ Start your reset → ]
[ ............ scrolling ticker ]
```

Background: `linear-gradient(90deg, var(--before-accent), var(--after-accent))`, height ~140px (compact: ~100px), full-bleed. The wordmark is centered, the CTA pill is to the right, the ticker scrolls behind both at low opacity.

---

## Interactions

- **Smooth scroll** between hash links (nav → sections)
- **Estimator chips** — click to update price + breakdown, no animation needed
- **Testimonial pagination** — dots beneath, simple state swap
- **FAQ** — click row to open/close, only one open at a time
- **Finale** — `IntersectionObserver` (threshold 0.45) triggers a one-time "resolve" 800ms after entering view; "before" pane fades/collapses, "after" pane fills the section. Manual toggle button restores it.
- **Onboarding** — modal traps focus, `Esc` closes, mask click closes, `Enter` advances on text fields
- **Hero clutter items** — small CSS `@keyframes` drift (translate ± a few px on a long loop). No JS.

---

## Copy (verbatim — use exactly as written)

**Hero (v2/v3)**
- Eyebrow: `Where you are` / `Where you could be`
- Headlines: `Your home.` `Full of stuff.` // `Your home.` `Full of space.`
- Stats: `$4,267 in things you don't use` / `$3,420 in your bank account`
- Primary CTA: `Join the waitlist` (or v3 band: `Start your reset →`)
- Secondary: `See how it works`

**Numbers**
- Eyebrow: `You, today` / `You, with Bounce`
- Numbers: `$4,267` / `$3,420`
- Captions: `sitting in the average American home · unused` / `wired · average first-year Bouncer payout`

**How it works**
- Step 1 — *The old way:* "Photos. Listings. Messages. Ghosts." vs *The Bounce way:* "Snap a photo. That's it."
- Step 2 — *Old:* "Boxes. Tape. Trips to the post office." vs *Bounce:* "Courier at your door."
- Step 3 — *Old:* "Chase. Wait. Wonder." vs *Bounce:* "Cash in your bank. 24 hours."

**Estimator**
- Item names + price ranges are listed in the `ItemsData` object in `sections.jsx`.

**Testimonials**
- Maya R. (Brooklyn, 11 items): before "I had three closets of stuff I kept meaning to list. Never did." → after "Bounce cleared it in a weekend. I got $2,140."
- Drew K. (Austin, 27 items): before "My garage had been a graveyard for ten years." → after "$3,680 — for stuff I was about to throw away."
- Priya S. (Seattle, 1 item): before "I was about to donate my old laptop." → after "It paid for half my new MacBook."

**FAQ** — see `FAQ` component in either `sections.jsx`.

**Finale slogan:** `"Let go of the old. Make way for the new you."`
**Final CTA:** `Join waitlist` with caption `No spam · No credit card · 2,100+ already in`

---

## Assets

- **Fonts**: Instrument Serif, Inter, JetBrains Mono — all from Google Fonts, no licensing needed.
- **Mascot**: the kangaroo SVG in `mascot.jsx` is a **placeholder** — final mascot illustration ("Joey") is a separate workstream. Use a 70–150px slot wherever it appears.
- **Product photography**: every striped placeholder square needs replacement with real product photography. The slots are listed in `sections.jsx` (search for `repeating-linear-gradient` in the CSS to find the placeholder styling, or look for elements with class `ph` / `photo-ph` / `item-photo`).
- **Hero garage / "before" photography**: optional but recommended — a hero-scale photograph of a cluttered garage was discussed as the eventual hero treatment.

---

## Responsive behavior

Both versions are designed mobile-first-friendly via `clamp()` typography and CSS grid. Breakpoints:

- **Desktop**: ≥ 1100px — full split layouts
- **Tablet**: 700–1100px — splits stack, grids reduce to 1–2 columns
- **Mobile**: < 700px — single column throughout, 24px horizontal padding, simplified nav (links collapse), modal becomes full-width

Specific responsive rules are at the bottom of each `split.css` file.

---

## Implementation notes

1. **Replace the Babel-in-browser setup.** The prototypes use unpkg CDN scripts for React 18 + Babel standalone — fine for design, not for production. Use a real bundler.
2. **Componentize the band (v3) and the split section (v2)** — they're the two most repeated structural primitives.
3. **The onboarding modal** should ideally hit a real waitlist endpoint and persist place-in-line state.
4. **Tweaks panel is dev-only** — strip it or guard it behind a query string in production.
5. **Accessibility** — the prototypes use semantic HTML but haven't been audited. Add proper labels on the email/ZIP inputs, focus management on the modal, `aria-expanded` on FAQ items, `aria-current` on testimonial pagination.
6. **Animations** — the finale collapse and hero clutter drift are CSS-only and cheap. No JS animation library required.
7. **Color space** — oklch is well-supported in modern browsers (Safari 15.4+, Chrome 111+). If you need to support older browsers, generate sRGB fallbacks.

---

## What's *not* in this handoff

- **Joey, the kangaroo mascot** — final illustration is a separate design workstream. Use the placeholder in `mascot.jsx` for now.
- **Real product photography** — placeholder slots only.
- **Pricing page, How-it-works deep dive, Blog, Help center** — homepage only.
- **Sign-in / authenticated app** — waitlist only at this stage.
