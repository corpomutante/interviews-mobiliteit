# Mobiliteit Design System

A modern mobile design system for the redesigned **Mobiliteit.lu** app — Luxembourg's national multi-modal public transit portal.

Mobiliteit is operated by the Grand-Duchy of Luxembourg as a single, free-at-point-of-use entry point for trains (CFL), buses (RGTR/TICE/AVL), tram (Luxtram), bike-share (vel'OH), carpooling (Klaxit), Park-and-Ride lots and EV charging. It is a public-service product: it must be calm, legible, accessible to every age group, and equally usable on a phone in a bus shelter as on a tablet at a kitchen table.

This design system codifies foundations (color, type, spacing, motion), components, interaction principles and accessibility standards for the redesigned mobile app.

---

## Sources & inputs

The following materials were provided and informed this system. Originals are preserved under `uploads/`.

| File | What it is | Used for |
|---|---|---|
| `uploads/logo-full-mobiliteit.png` | Full Mobiliteit.lu wordmark + bookmark mark | Brand color extraction, header lockups |
| `uploads/logo-mobiliteit mobile.webp` | App-icon style mark (rounded square) | App icon, splash, favicon |
| `uploads/references.png` | A grid of mobility-app references (fitness, diving, hotel — predominantly blue) | **Pattern inspiration only** — spacing, density, card structure, sheet/map UX. Branding is **not** copied. |
| `uploads/final_screens.pdf` | Approved screen flows: onboarding, sign-in/up, trip planner, results, journey detail, saved journeys, options, alerts, settings | Source of truth for component inventory + copy |

The text contents of the PDF have been extracted and reviewed (login/sign-up, verification, onboarding 3-step ("Stay reliable and always on time" / "Navigate with ease having real-time data displayed" / "Live traffic works and diversions info on the map"), trip planner with mode chips (Train, Bus, Tram, Bike, Klaxit, P+R), recommended-route list, journey detail with steps + crowdedness + accessibility, before-journey alarms, and option filters).

No Figma file, GitHub repository or other codebase was attached for this brief. If those become available, replace this section's table with their URLs/paths so future agents can re-derive details directly from source.

---

## Index — files in this system

```
README.md                 ← this file (foundations, philosophy, content + visual guidelines)
SKILL.md                  ← agent-skill entrypoint
colors_and_type.css       ← all design tokens (CSS custom properties, light + dark)

assets/                   ← logos, marks, references
  logo-mobiliteit-full.png
  logo-mobiliteit-mark.webp
  references.png

fonts/                    ← (Manrope + IBM Plex Mono served via Google Fonts CDN — see "Type")

preview/                  ← Design System tab cards (Type, Colors, Spacing, Components, Brand)

ui_kits/
  mobiliteit-app/
    README.md             ← kit overview, screen list
    index.html            ← interactive click-through prototype
    *.jsx                 ← reusable components
```

The **Design System tab** of this project renders each `preview/*.html` as a labelled card grouped by Type, Colors, Spacing, Components, Brand. Open it for the visual reference.

---

## Core UX principles (carried into every component)

1. **Hierarchy over decoration.** A trip result is a list of facts in priority order. Visual weight follows information weight; never the reverse.
2. **Accessibility as a constraint, not an enhancement.** Touch targets ≥ 44 px. Contrast ≥ WCAG AA against the surface beneath, not just the canvas. Color is never the only carrier.
3. **Map-centric navigation.** The map is the home base. Lists, sheets, and filters surface *over* it without ever fully occluding the user's spatial context.
4. **Reduced cognitive load.** Fewer modes, fewer icons, fewer colors. Each surface answers one question.
5. **Discoverability without clutter.** Secondary actions live behind clear affordances (overflow menus, expandable sections, peek sheets), never behind hidden gestures alone.
6. **Realistic transit interactions.** Loading states show *what's loading* (a vehicle ETA, a transfer time). Delays are surfaced inline, not as toasts.

---

## CONTENT FUNDAMENTALS

Voice and copy are the most carefully calibrated layer of this system. Get this wrong and a public-service app feels corporate, infantilising, or anxious. Get it right and people trust it.

### Tone

- **Civic and plain.** We are a national mobility service, not a startup. Write like a clear public notice: factual, helpful, never breezy.
- **Calm.** Default to neutral statements. Surface urgency only when there is actual urgency (a missed transfer, a cancellation). Never manufacture excitement.
- **Specific over enthusiastic.** "Tram 1 to Luxexpo, arrives in 4 min" beats "Your tram is on its way! 🚊".

### Person and address

- **Second-person, "you".** ("Where do you want to go?", "Your phone number has been verified successfully. Welcome aboard!")
- **Imperative for actions.** ("Enter starting point…", "Choose on map", "Save this journey".)
- **First-person plural only for system-as-service.** ("We've sent you the verification code…") — used sparingly, mostly for security messaging.

### Casing

- **Sentence case for everything**: titles, buttons, menu items, toggles, headings, screen titles. Title Case is reserved for proper nouns and station/line names.
  - Yes: "Trip planner", "Saved journeys", "Send", "Add a journey"
  - No: "Trip Planner", "SAVE", "Get Started"
- **Place names retain their original casing** (e.g. *Luxembourg Gare Centrale*, *Wasserbillig*, *Ville Haute*, *Boulevard Franklin Roosevelt*). These come from official sources; do not normalise them.
- **Line codes are uppercase, as printed**: `RE11`, `CFL`, `T1`, `P+R`. Never `re11` or `Re 11`.

### Length and density

- Screen titles: ≤ 24 chars ("Trip planner", "Saved journeys", "Verification").
- Buttons: 1–3 words.
- Empty-state body: ≤ 14 words.
- Onboarding copy follows the *short title + one-sentence explainer* pattern from the source PDF:
  - "Stay reliable and always on time"
  - "Use your preferences and saved journeys on different devices at the same time."

### Numbers, time, distance

- **24-hour time** with leading zeros: `08:35`, `17:45 – 18:35`. Never am/pm.
- **Tabular figures** for any number that sits in a column or updates live (departures, durations, distances). The CSS provides `.tabular`.
- **Durations** rendered short: "48 min", "1 h 12", "2 min". Never "0:48" for sub-hour durations.
- **Distances**: metric, one decimal under 10 km ("2.4 km"), integer above ("41 km").
- **Stop counts**: "5 stops (34 min)" — count then duration in parentheses.

### Emoji and iconography in copy

- **No emoji in product copy.** Not in titles, not in toasts, not in empty states. Public-service products treat emoji as informal and they age badly.
- **Icons accompany words** in primary affordances; never icon-only for anything a screen reader needs to announce except a few universal ones (back arrow, close ✕, more ⋯).

### Example copy patterns

| Situation | Pattern | Example from source |
|---|---|---|
| Field placeholder | Imperative, "…" suffix, sentence case | "Enter starting point…" |
| Onboarding step | Short title (≤ 6 words) + one explanatory line | "Navigate with ease having real-time data displayed" |
| Success | Plain past-tense fact, then next step | "Your phone number has been verified successfully. Welcome aboard!" |
| Error / retry | Neutral, with action | "Didn't receive the code? Resend code in 0:20" |
| Filter labels | Plural noun, sentence case | "Fewer transfers", "Less transfer time", "Step free" |
| Accessibility tag | One adjective | "Step free", "Not too crowded" |

---

## VISUAL FOUNDATIONS

### Colors

The brand pairs **electric blue (#5669FF)** as the workhorse with **Mobiliteit magenta (#E5007E)** as the brand-identity moment. Blue does the heavy lifting — primary CTAs, the active route on the map, focus rings, links, live-data chips — because long-form blue holds readability better at small sizes and against the warm neutral spine. Magenta is held in reserve for brand-anchored surfaces: the wordmark, splash, account/sign-in moments, promotional banners, and the active state of the bottom-nav (so identity stays visible). Treat magenta like a strong spice: enough to make the product unmistakably Mobiliteit, never so much that it becomes the flavour.

- **Canvas**: `#F7F6F4` — a warm off-white, never `#FFFFFF`. White is reserved for *elevated* surfaces (cards, sheets) so elevation reads even without shadow.
- **Foreground**: a near-black `#15161A` with a slight warm undertone. Pure `#000` is not used — it vibrates against magenta.
- **Per-mode palette**: each transport mode has a paired *foreground* and *soft background* (`--mode-train` / `--mode-train-bg`, etc.). Modes carry meaning, so they carry colour — but always paired with an icon and a text label.
- **Status**: success/warning/danger/info each have a soft tinted background + accessible foreground; warning is reserved for *delays*, danger for *cancellations / disruptions*.
- **Contrast**: every text colour on its intended surface meets WCAG AA (4.5:1 for body, 3:1 for large text and UI elements). Tested under both themes.
- **Dark mode**: a true companion, not an inversion. Magenta shifts to a brighter `#FF3FA0` for contrast on dark; mode colours desaturate slightly. Canvas is `#0E0F12` (not pure black) so OLED bloom is reduced and the magenta accent doesn't sting.

### Typography

- **Manrope** for everything UI (200–800 available, we use 400/500/600/700/800). Calm humanist sans, designed for screens, has true tabular figures and stylistic sets, and reads quietly in lists — the right register for public service.
- **IBM Plex Mono** (500/600) for line codes (`RE11`, `T1`, `CFL`), schedule columns and stop codes. Mono in these places is functional, not stylistic: it aligns columns of times and disambiguates `0/O` and `1/l/I` in station codes.
- **Scale** runs from `display 32 / 38` down to `micro 11 / 14`. See `colors_and_type.css` for full tokens. Letter-spacing is *tighter* on display (`-0.02em`) and *open* on micro all-caps (`+0.04em`).
- **No italics in UI**. Italics are reserved for legal copy and quoted station names within sentences.
- **Route readability rule**: line codes never break across lines. Time ranges (`17:45 – 18:35`) use a narrow non-breaking hyphen and keep together. Both rendered with `.tabular`.
- **Accessibility sizing**: components use `rem` derived from a 16px base so the system scales with the OS preference. Anything below `--fs-caption` (13 px) is forbidden for body content; `--fs-micro` (11 px) is only for ALL-CAPS labels with letter-spacing.

> **Type files**: Manrope and IBM Plex Mono are wired locally from `/fonts` — every weight and italic style of both families. No external font loaders, no Google Fonts, no substitutes left in the system.

### Spacing & rhythm

- 4 px base grid. Tokens at `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64`.
- **Card padding**: 16 px on phone, 20 px on tablet.
- **Vertical rhythm in lists**: `16 px` between unrelated items, `8 px` between tightly related text (title + subtitle), `12 px` between an icon and its label.
- **Safe areas**: top respects status-bar inset; bottom respects home-indicator inset. The bottom-nav adds 8 px above the home-indicator.
- **Touch targets**: 44 × 44 px minimum (`--hit-min`). Default tappable rows are 48 px (`--hit-comfortable`). Stacked tap targets get at least 4 px of dead space between them.
- **Bottom sheet**: peek at 30 % of viewport, mid at 55 %, full at 92 %. The top 28 px of the sheet is reserved for the grab handle and breathing room.

### Backgrounds & imagery

- **No full-bleed marketing imagery in-product.** The map is the only full-bleed surface, and it's a data canvas, not a photo.
- **No illustrations of people, no spot illustrations, no gradients-as-decoration.** Empty states are typographic with a single neutral glyph.
- **Background tints** are limited to: `--bg-tint` (1 brand tint for promo banners) and the per-mode `*-bg` swatches (only on chips/badges).
- **Maps** use a desaturated base style. Lines on the map adopt the per-mode foreground colour; the active leg is rendered at 1.5× width with magenta route markers at endpoints.

### Borders, radii, elevation

- **Radii**: `xs 4 · sm 8 · md 12 · lg 16 · xl 20 · 2xl 28 (sheets) · pill 999`.
- **Cards**: `--r-lg` (16 px). Bottom sheets: `--r-2xl` on top corners only.
- **Borders** are mostly invisible — we lean on `--sh-1` (a 1 px hairline ring + tiny y-shadow) for definition. Hard 1 px borders (`--bd-default`) are only used for inputs and segmented controls, where edge clarity matters.
- **Elevation** is a 3-step ladder: `sh-1` cards in-flow, `sh-2` floating chips/FAB-like, `sh-3` sheets and popovers above the map. No neumorphism, no inner shadows, no glow.
- **No left-border-accent cards.** Status is communicated by a leading icon + tinted background, not a coloured stripe.

### Motion

- **Easing**: `--ease-out` for almost all entrances (chips, sheets, page pushes). `--ease-inout` for reversible toggles. `--ease-in` only for exits where the target is off-screen.
- **Durations**: `120 ms` press feedback, `200 ms` micro-UI, `320 ms` sheets/page push, `480 ms` map fly-to.
- **No bounce.** Springiness reads as playful; transit is not playful.
- **No parallax, no kinetic typography, no Lottie hero animations.** Motion serves orientation: a sheet rises from the bottom so the user remembers where it came from; a list item scales 0.98 when pressed so the touch lands somewhere believable.
- **Map**: smooth pan/zoom at native rate; markers de-clutter on zoom-out with a crossfade, never a pop.
- **Respect `prefers-reduced-motion`**: collapse all `> 200 ms` transitions to opacity-only fades.

### States — hover / press / focus / disabled

- **Hover** (pointer): foreground colour darkens by ~12 %, never a translucent overlay. Magenta CTA → `--ac-primary-hover`.
- **Press / active** (touch): scale to `0.98`, foreground darkens further (`--ac-primary-press`). No ripple — that's Android Material's signature, we sit alongside it.
- **Focus**: 2 px magenta outline at 2 px offset, on every interactive element including list rows. Visible even on the brand-coloured background by virtue of the offset.
- **Disabled**: 40 % opacity, no interaction; never a separate "disabled grey" colour, which fragments the palette.

### Transparency, blur, depth

- The **map overlay header** (search field on top of the map) uses a 80 % white surface with a backdrop-blur of 16 px. Same recipe for the bottom-nav when it sits over the map.
- The **bottom-sheet scrim** is `rgba(20, 22, 26, 0.40)` — dark and warm, never a colourful tint.
- No frosted glass elsewhere. Cards in-flow are opaque.

### Fixed elements / chrome layout

- **Status bar**: native, never themed mid-screen.
- **Top app bar**: 56 px, sentence-case title, leading icon optional, trailing icon for filter/more. Disappears under bottom sheets at peek+; reappears at full.
- **Bottom navigation**: 4 destinations max — *Plan*, *Lines*, *Saved*, *Account*. 64 px tall + safe-area. Active tab gets magenta icon + label, inactive uses `--fg-3`.
- **FAB**: not used. A traditional FAB conflicts with the map's own controls (locate-me, recenter). Primary action lives in the search field instead.

### Imagery colour vibe (when used)

The only place real photography appears is the splash/onboarding hero. House style: **flat illustration-free**, neutral colour palette (no warm-vs-cool clashing), with the magenta only as a single accent dot/line. No grain, no duotone, no people.

---

## ICONOGRAPHY

Mobiliteit's icon language is **functional, line-based, single-weight** — built to read at 24 px on a moving bus.

### System

We use **Phosphor Icons** (`https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css`) as the canonical icon library. Phosphor was chosen because:
- It has every transit primitive we need (train, bus, tram, bicycle, car, charging, parking, accessibility, MapPin, ArrowsLeftRight, etc.) at consistent stroke weight.
- It ships at multiple weights so we can pair *regular* (1.5 px) for navigation/chrome and *fill* for selected states without redrawing icons.
- It's open-source (MIT) and CDN-distributable, so no asset pipeline.

**Stroke weight**: Phosphor *regular* (1.5 px @ 24 px). Never mix Phosphor with another stroke system — Lucide, Heroicons and Material round their corners differently and the inconsistency reads on close inspection.

**Sizes**:
- `16 px` — inline within sub-text (e.g. accessibility tag prefix)
- `20 px` — list-row leading glyphs, inside-input clear button
- `24 px` — top bar, mode chips, bottom-nav
- `28 px` — mode badges on route cards
- `32 px` — empty-state glyph

**Color**: icons inherit `currentColor`. Never multi-coloured icons; if a mode needs identification, use the mode token on the icon and pair with the label.

**Selected / active**: swap from `regular` to `fill` weight at the same size. Don't change colour alone — `fill` makes it visible at a glance for users who can't perceive the colour shift.

### Asset substitution

Phosphor is a substitution for Mobiliteit's in-product icon set, which we did not receive in this brief. **If a licensed/in-house icon set exists, please send it.** Until then, all UI kit components import Phosphor via CDN and any swap should preserve: (a) 1.5 px stroke, (b) 2 px corner radius, (c) the same glyph metaphor.

### Unicode and emoji

- **No emoji** anywhere in product UI. Hard rule.
- A few Unicode glyphs are permitted because they carry meaning that no icon does: `•` for inline dot separators in metadata rows, `→` and `↔` in compact route summaries when the icon would be too large, `№` only in admin/printed contexts.

### Logo & brand mark

- `assets/logo-mobiliteit-full.png` — the wordmark for headers, sign-in screen, splash bottom-anchor, About screens.
- `assets/logo-mobiliteit-mark.webp` — the bookmark "M" mark for the app icon, OS-level placements, and any time the brand needs to appear ≤ 32 px square.
- **Clear space**: the height of the inner "M" stem on all sides. Never crop, recolour or rotate.

---

## Accessibility standards

These are non-negotiable; treat as acceptance criteria.

| Constraint | Rule | Verified by |
|---|---|---|
| Touch target | ≥ 44 × 44 px; ≥ 48 px for primary actions | `--hit-min`, `--hit-comfortable` |
| Tap spacing | ≥ 4 px between adjacent targets | `gap: var(--s-1)` |
| Colour contrast | Body ≥ 4.5:1; large text & UI ≥ 3:1; tested on intended surface | preview/colors-* cards |
| Colour independence | Every per-mode chip carries icon + label, not colour alone | route-card, mode-chip |
| Dynamic Type | Tokens scale from `rem`; container respects user font scale up to 200% | scale-test page |
| Focus visibility | 2 px magenta outline at 2 px offset on every interactive | base `*:focus-visible` |
| Screen reader | All interactive elements have an accessible name; icon-only buttons require `aria-label` | per-component checklist |
| Reduced motion | `prefers-reduced-motion: reduce` strips transitions > 200 ms to opacity fades | global media query |
| Step-free routing | First-class option, surfaced in trip planner and per-leg | `Step free` filter |

---

## Caveats / open questions

- **Final brand pink shade**: we used `#E5007E` extracted from the supplied logo PNG. Mobiliteit may have an exact corporate Pantone — please confirm.
- **Fonts**: Manrope + IBM Plex Mono are substitutions. Please send any licensed Mobiliteit typefaces and we'll swap.
- **Icon set**: Phosphor stands in for the in-house icon system. Please send the in-house SVGs if they exist.
- **No codebase or Figma was attached** for this brief. UI kit components are derived from the screen PDF + brief; align the next pass against the source-of-truth Figma when available.
