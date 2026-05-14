# Damla-Group Design System — Reference Prompt

> Use this document as a prompt input when you want to mirror the **damla-group** look-and-feel in another React + Vite + CSS-Modules project. It documents the exact visual language, motion language, and component patterns used in `damla-group/frontend`.

---

## 1. Brand Personality

- **Mood:** Elegant · modern · institutional · hospitality-grade.
- **Palette base:** dark navy + warm bronze/gold + cream/beige neutrals on white. Avoids loud SaaS blues.
- **Typography weight:** primarily `400` for large headings (sober, editorial), `500–600` for UI text/buttons. **No 700–800 in headings.**
- **Rhythm:** generous whitespace, fluid `clamp()`-based scaling, lots of vertical breathing room.
- **Motion:** soft fade-up reveals on scroll, staggered child entry, blur-to-sharp hero image, gentle bouncing scroll indicator, slide-in mobile drawer.

---

## 2. Color Tokens

```css
:root {
  /* Primary navy (header, footer, dark hero overlays) */
  --color-primary:        #343D52;
  --color-primary-dark:   #0F1729;  /* text headings, footer bg */

  /* Bronze accent (buttons, icon pills, active states) */
  --color-accent:         #9C6D36;
  --color-accent-hover:   #b87d3f;
  --color-accent-light:   #BD8543;

  /* Gold highlight (decorative borders, dividers, dots) */
  --color-gold:           #D4AF37;

  /* Neutrals */
  --color-white:          #FFFFFF;
  --color-background-light: #F5F3F0; /* light gray section */
  --color-background-cream: #E8E0D5; /* beige section */

  /* Text */
  --color-text-dark:      #0F1729;
  --color-text-gray:      #4A5565;
  --color-text-light:     rgba(255,255,255,0.90);
  --color-text-muted:     rgba(255,255,255,0.70);
  --color-border:         rgba(15,23,41,0.24);
}
```

Section backgrounds rotate between **white → beige (#E8E0D5) → light gray (#F5F3F0)** for visual rhythm — never use the navy except for header/footer/hero overlay.

---

## 3. Typography

- **Family:** [Urbanist](https://fonts.google.com/specimen/Urbanist) (300, 400, 500, 600, 700, 800). Imported in `global.css` from Google Fonts. Apply to `html, body, button` and all Ant Design overrides if applicable.
- **Headings stay at weight 400** with fluid sizes. Body text uses 400 with 1.45–1.6 line-height.

| Token        | Size                                | Weight | Notes                                  |
|--------------|-------------------------------------|--------|----------------------------------------|
| Title XL     | `clamp(36px, 16vw, 72px)`           | 400    | Hero title (huge editorial)            |
| Title M      | `clamp(32px, 5vw, 51px)`            | 400    | Section titles, "What We Do"           |
| Subtitle     | `clamp(16px, 2vw, 19px)`            | 500    | Section subhead                        |
| Body         | `clamp(15px, 1.5vw, 17px)`          | 400    | Paragraph text, line-height 160%       |
| Hero desc    | `clamp(16px, 10vw, 25px)`           | 400    | White hero subhead                     |
| Card title   | 21px                                 | 500    | ServiceCard etc                        |
| Stat number  | 36px                                 | 400    | Counter values                         |

Letter-spacing: `0.025–0.09px` on most text — barely noticeable but adds polish.

---

## 4. Spacing & Layout

```css
--spacing-xs:  8px;
--spacing-sm:  16px;
--spacing-md:  24px;
--spacing-lg:  32px;
--spacing-xl:  40px;
--spacing-2xl: 64px;
--spacing-3xl: 96px;

--container-padding:                 clamp(20px, 10vw, 12.5%);
--section-padding-vertical:          clamp(48px, 16vw, 96px);
--section-padding-vertical-mobile:   clamp(24px,  8vw, 48px);
--section-padding-horizontal:        clamp(20px, 20vw, 20%);
--section-padding-horizontal-mobile: clamp(8px,  2.5vw, 3%);

--breakpoint-mobile:  768px;
--breakpoint-tablet:  1024px;
--breakpoint-desktop: 1440px;
```

Sections use `padding: var(--section-padding-vertical) var(--section-padding-horizontal)`. Mobile drops to `--section-padding-horizontal-mobile`. Grids/columns flatten to single-column at 768px.

---

## 5. Radii & Shadows

```css
--radius-sm: 8px;   /* buttons, small chips */
--radius-md: 10px;  /* images, decorative borders */
--radius-lg: 14px;  /* cards */
--radius-xl: 16px;  /* feature card icon containers */

--shadow-sm: 0 4px 6px -4px rgba(0,0,0,0.10);
--shadow-md: 0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10);
--shadow-lg: 0 25px 50px -12px rgba(0,0,0,0.25);
```

Cards default to `--shadow-md`, hero image to `--shadow-lg`, hover states deepen the shadow and gain a 1.5px bronze/gold border.

---

## 6. Motion / Animation

### Core keyframes (kept in a shared `shared.module.css`)
```css
@keyframes fadeInUp { from{opacity:0;transform:translateY(50px)} to{opacity:1;transform:none} }
@keyframes fadeIn   { from{opacity:0} to{opacity:1} }
@keyframes slideInFromLeft  { from{opacity:0;transform:translateX(-100px)} to{opacity:1;transform:none} }
@keyframes slideInFromRight { from{opacity:0;transform:translateX( 100px)} to{opacity:1;transform:none} }
@keyframes bounce {
  0%,100% { transform: translateX(-50%) translateY(0); }
  50%     { transform: translateX(-50%) translateY(-25px); }
}
```

### Reveal utility — `useScrollAnimation`
Custom hook that:
1. Uses `IntersectionObserver` with `threshold: 0–0.2` and `rootMargin: 100–150px 0px`.
2. On mobile **forces threshold to 0** so tall sections still trigger.
3. After mount, runs a `requestAnimationFrame` + `setTimeout(100ms)` fallback check for **iOS Safari hard refresh** edge cases.
4. Falls back to scroll listener.
5. Toggles a `.visible` class once on entry.

Combine with `.animateChildren` parent class — children get `opacity:0; transform: translateY(50px)`, then nth-child `animation-delay: 0.1s · 0.2s · 0.3s · 0.4s · 0.5s`. Mobile halves both translate distance (50→30px) and delays.

### Counter animation — `useCounterAnimation`
`easeOutQuart` over 1400ms, stepped so the number doesn't flicker on big values. Triggered by the `isVisible` flag of `useScrollAnimation`.

### Hero image blur-to-sharp
- Render two `div` background-image layers — `placeholder` (`-placeholder.webp` variant, blurred 20px, scaled 1.05) and `sharp` (`opacity:0`, transition 600ms).
- A hidden `<img>` with the real URL triggers `onLoad → setLoaded(true)`, which adds `.loaded` to the sharp layer.
- Overlay: `linear-gradient(90deg, rgba(15,23,41,0.70), rgba(15,23,41,0.60))`.

---

## 7. Hero Component

```
.hero {
  height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: var(--spacing-3xl) var(--section-padding-horizontal);
  overflow: hidden;
  animation: fadeIn 1.2s ease-out;
}
```
- Background `<div>` layers (placeholder + sharp + overlay).
- Centered content `<div>` (z-index: 2):
  - **Title** uses `titleLarge` mixin (`clamp(36px, 13vw, 72px)`, white, weight 400). Animates with `fadeInUp 0.8s ease-out 0.2s both`.
  - **Description** (`rgba(255,255,255,0.90)`, `clamp(16px, 10vw, 25px)`). Delay 0.4s.
  - **Buttons row** (`gap:20px; margin-top:30px`). Delay 0.6s.
- **Scroll icon** absolutely positioned at `bottom: 40px; left: 50%`, `animation: bounce 2s infinite`.
- Mobile: scroll icon `bottom: 30px`, buttons `margin-bottom: 100px`.

Primary CTA = bronze fill, `translateY(-2px)` + `box-shadow: 0 8px 20px rgba(156,109,54,0.3)` on hover.
Secondary CTA = transparent w/ 2px white border, hover `background: rgba(255,255,255,0.1)` + lift.

---

## 8. Buttons

```css
.button {
  padding: 14px 18px;
  font-family: Urbanist, sans-serif;
  font-size: 16px; font-weight: 500;
  border-radius: 8px; border: none;
  display: flex; align-items: center; justify-content: center; gap: 10px;
  transition: all 0.3s ease;
}
.buttonPrimary  { background: #9C6D36; color: #FFF; }
.buttonSecondary{ background: transparent; color: #FFF; border: 1px solid #FFF; }
.buttonOutline  { background: #FFF; color: #0F1729; border: 1px solid #0F1729; }
```
Hover effect on primary: `background: #b87d3f`, `translateY(-2px)`, `box-shadow: 0 8px 20px rgba(156,109,54,0.3)`.

Tertiary "View more" link buttons reuse the same `padding: 14px 32px; font-weight: 600` and pair an arrow icon to the right.

---

## 9. Header

- **Desktop:** Fixed `position: fixed; top:0; z-index:1000; height:80px; background:#343D52`. Logo on the left, nav links in the middle (white, 16px, 500, opacity 0.8). Active link gets `border-bottom: 2px solid #9C6D36` and full opacity. Hover slides a 2px bronze underline in from center. Contact button on the right is bronze fill, rounded 8px.
- **Mobile (≤768px):** Header drops to 60px. Nav is hidden; right-side hamburger is white 3-bar SVG (48×48). Tapping toggles a **drawer**:
  - Drawer: `position: fixed; top:0; right:0; width:95%; max-width:400px; height:100vh; background:#343D52; z-index:1001`.
  - Slide-in animation: `transform: translateX(100%) → translateX(0)` over 300ms; reversed for close.
  - Overlay backdrop `rgba(0,0,0,0.5)` fades in.
  - Drawer header (navy) holds the logo + close X (rotates 90° on hover).
  - Drawer body switches background to **cream `#E8E0D5`** with vertically stacked nav items. Each item: 16px padding, icon + label, 3px transparent left border that turns bronze on hover/active.
  - Drawer footer (cream): full-width bronze "Contact Us" button + small "BRAND TITLE / subtitle" block.

---

## 10. Footer

```
.footer { background: #0F1729; color: #FFF; }
```
Two stacked sections separated by 1px white-10% line:
1. **CTA strip** — centered: 51px title, 25px description (white-90), bronze button. `padding: var(--section-padding-vertical) var(--container-padding)`. Animates `fadeInUp 0.8s` on enter.
2. **Columns grid** — 4 columns desktop / 2 tablet / 1 mobile:
   - Brand column: logo, description (white-70, hover white).
   - Links column.
   - Contact column with bronze icons.
   - Social links column (white icons, bronze hover).
- Bottom row: copyright centered, white-60.

---

## 11. Cards

### ServiceCard
- 32px lg padding, 280–380px width, `border-radius: 14px`, `border: 1px solid rgba(15,23,41,0.24)`, `box-shadow: var(--shadow-md)`.
- Icon: 18px padded, 100% radius, background `#BD8543`, icon white.
- Title 21px / 500, description 17px / 400 / #4A5565.
- Hover: `box-shadow: var(--shadow-lg)`, `border: 1.5px solid #BD8543`.

### FeatureCardRow
- Horizontal: icon-pill (28px padding, white bg, 16px radius, shadow) + text-stack (36px title, 17px description).
- Background: subtle gradient (`linear-gradient(135deg, rgba(87,83,77,0.10), rgba(87,83,77,0.05))`) or orange-tinted variant.
- Hover: gold border (`#D4AF37`).
- Mobile: flips to column, centered text.

### Stats card
- Circular icon container: 22px padding, 100% radius, `border: 2px solid #D4AF37`.
- 36px number, 17px label, both centered.

### Image+Text section
- Two equal columns: image (488/542 aspect, shadow-lg, 10px radius) + content (icon-pill in bronze, title, body, optional subtext, button).
- **Decorative border**: a `::before` pseudo-element on the image container — `border: 2px solid #D4AF37; border-radius: 10px; top: -24px; right: 24px`. Looks like a gold rectangle hovering behind the image.
- Slide-in animation: image slides from one side, content slides from opposite. Direction flips with `imagePosition` prop.
- Mobile: stacks (icon row on top, image full-width, button under or above image depending on prop).

---

## 12. Section Wrappers

A single reusable `<Section>` component handles:
- `backgroundColor: 'white' | 'beige' | 'lightGray'`
- Optional title (Title M, centered) + subtitle (body text, muted).
- `animated + animationRef + isVisible` props for staggered child reveal via `animateChildren` + `.visible`.
- Padding from `--section-padding-vertical / horizontal`, gap `--spacing-md`.

Pair sections with **SVG dividers** (curved/angled wedge) between contrasting backgrounds:
```jsx
<svg viewBox="0 0 1440 74" preserveAspectRatio="none" className={styles.sectionDivider}>
  <path d="M1440 74H0L1440 0V74Z" fill="#F5F3F0" />
</svg>
```

---

## 13. Testimonial Carousel

- Cards in a 3-column row (1 on mobile), 12px radius, soft shadow, 5 gold stars on top, italic quote, bordered footer with name + company.
- Arrow buttons: 60×60 circle, white, soft shadow, hover background `#D4AF37`.
- Pagination dots: 10×10 gray, active state: bronze pill `width:32px; border-radius:5px`.
- Slide direction tracked in state — entering card animates `slideRight` or `slideLeft` (50px offset, 0.5s).

---

## 14. Mobile Patterns (≤768px)

- **All grids collapse to 1 column.**
- Section horizontal padding shrinks to `clamp(8px, 2.5vw, 3%)`.
- Buttons grow to full width and center contents.
- Image+text sections stack vertically; image gets `min-width: 100%`.
- Mobile-specific button position (above vs below image) is configurable.
- Drawer (header nav) and bottom-aligned bouncing scroll indicator remain.
- Reveal animations reduce translate distance (50→30px) and shorten delays (0.05s steps).

---

## 15. Page Pattern (Home as reference)

1. **Hero** — full viewport, background image, title + description + 2 buttons + scroll cue.
2. **ImageTextSection (beige)** — "What We Do?" intro w/ image right, secondary button.
3. **Section (white, animated)** — "Rooted in Hospitality. Driven by Innovation" with span-accented title, 2 `FeatureCardRow`s side-by-side, Stats row, gold divider line.
4. **Section (white, animated)** — "Our Services" title + subtitle, 3 ServiceCards, primary button.
5. **ImageTextSection variants** alternating left/right image, alternating `lightGray` and `white` backgrounds, each with bronze icon-pill, large title, body, italic subtext, and a "View / I'm interested" button with arrow.
6. **Section (white, animated)** — Logo grid for partners + diagonal SVG divider into lightGray below.
7. **Section (lightGray, animated)** — Testimonial carousel.
8. **BlogsCarousel** — auxiliary content carousel.
9. **ContactForm** before the footer.

---

## 16. Reusable Utility Classes (shared.module.css)

- `.sectionWhite`, `.sectionBeige`, `.sectionLightGray`
- `.animateChildren` + `.visible` for scroll-stagger
- `.slideLeft`, `.slideRight` + `.visible`
- `.decorativeBorder` (gold rectangle pseudo)
- `.dividerLine` (gold gradient horizontal rule)
- `.titleLarge`, `.titleMedium`, `.subtitle`, `.bodyText`
- `.textCenter`, `.textWhite`
- `.card`, `.cardPadding`, `.cardBorder`
- `.responsiveImage`
- `.button`, `.buttonPrimary`, `.buttonSecondary`, `.buttonOutline`
- `.skipLink`, `.visuallyHidden` for a11y

---

## 17. Accessibility

- Skip links (`.skipLink`) at the top of every page hop to `#main-content` and `#contact-form`.
- All interactive elements have `aria-label`.
- Scroll cue has `role="button"`, `tabIndex={0}`, `onKeyDown` Enter handler.
- Carousel arrows have `disabled` state and `aria-label="View previous/next…"`.
- `prefers-reduced-motion: reduce` should disable all reveal animations (add this if not already present).

---

## 18. Implementation Checklist for Mirror Projects

1. Import Urbanist (300–800) from Google Fonts in `index.html`.
2. Drop the 18-variable token block into `tokens.css` / `:root`.
3. Add `shared.module.css` keyframes + utility classes (or inline in `animations.css`).
4. Create `useScrollAnimation` and `useCounterAnimation` hooks.
5. Build a `<Hero>` component with the blur-to-sharp pattern, fadeInUp staggers, bouncing scroll icon.
6. Build a `<Section>` component (background variants + animateChildren + title/subtitle).
7. Build `<ImageTextSection>` with decorative gold border + slide-in pair.
8. Build `<ServiceCard>`, `<FeatureCardRow>`, `<Stats>` to match.
9. Header: fixed navy, bronze CTA, mobile drawer with cream body and navy header.
10. Footer: navy with CTA strip + 4-col grid.
11. Buttons: bronze primary, transparent-bordered secondary, white outline.
12. Sections alternate bg colors and use SVG wedge dividers between contrasts.
13. Apply `clamp()` fluid sizing on every heading and major padding.
14. Mobile: collapse grids, shrink padding, full-width buttons, force animation thresholds to 0.

---

## 19. Source Files Referenced

- `damla-group/frontend/src/styles/global.css` — fonts, CSS variables, Ant overrides.
- `damla-group/frontend/src/styles/shared.module.css` — animations, sections, utilities, typography.
- `damla-group/frontend/src/styles/mixins.css` — button base + button variants.
- `damla-group/frontend/src/components/Hero/index.{tsx,module.css}` — hero with blur image trick.
- `damla-group/frontend/src/components/Section/` — section wrapper.
- `damla-group/frontend/src/components/ImageTextSection/` — paired image + text with slide-in.
- `damla-group/frontend/src/components/ServiceCard/`, `FeatureCardRow/`, `Stats/` — cards.
- `damla-group/frontend/src/layout/Header/`, `Footer/` — full layout chrome.
- `damla-group/frontend/src/pages/Home/` — full page composition order.
- `damla-group/frontend/src/utils/useScrollAnimation.ts` and `useCounterAnimation.ts` — motion hooks.

---

## 20. Prompt Snippet (paste this when asking for "the damla style")

> Apply the **damla-group** design system: Urbanist font (weight 400 for large headings, 500–600 for UI), navy primary `#343D52` + bronze accent `#9C6D36` + gold `#D4AF37` + cream `#E8E0D5`/`#F5F3F0` neutrals on white. Use fluid `clamp()` sizing on every heading and section padding. Hero is full viewport with background image, dark gradient overlay, white centered headline, blur-to-sharp image load, fadeInUp staggered children (0.2/0.4/0.6s) and a bouncing chevron at the bottom. Cards: 14px radius, soft shadow, hover lifts with gold/bronze border. Image+text sections alternate left/right with a decorative gold rectangle border behind the image and slide-in from opposite directions on scroll. Header is fixed navy with bronze CTA and a slide-in mobile drawer that switches to a cream nav body. Footer is dark navy with a centered CTA strip then a 4-column links grid. All scroll-triggered reveals use IntersectionObserver with an iOS Safari fallback (`requestAnimationFrame` + 100ms timeout) and reduce translate distance on mobile.
