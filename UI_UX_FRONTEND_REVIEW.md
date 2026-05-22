# UI/UX, Frontend Design, and Web Guidelines Review

Date: 2026-05-22
Project: Factory Bloom / QUANTUM LEAP website
Path: `/Users/kaungkyawthu/factory-bloom-hub`

## Review Scope

This review combines three lenses:

- Frontend design: visual quality, brand direction, layout polish, typography, component consistency.
- UI/UX: accessibility, responsive behavior, touch targets, forms, navigation, motion, and performance.
- Web Interface Guidelines: Vercel web guideline checks for ARIA, focus, images, forms, motion, metadata, and content handling.

Guidelines source checked:
`https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`

## Current Status

- `npm run build` passes.
- `npm run lint` fails with Prettier formatting errors and a few Fast Refresh warnings.
- Browser screenshot verification was attempted but blocked because Playwright could not find Chrome locally.
- The app has strong content coverage and real assets, but several launch-quality issues remain.

## P0 Critical Fixes

### 1. Remove Global Image Preloading

File: `src/components/ImagePreloader.tsx:4`

The app imports and preloads every top-level asset image after first paint. The `src/assets` directory is about 109 MB, and many images are 1-3 MB. This defeats lazy loading and can heavily slow mobile visitors.

Fix:

- Remove `ImagePreloader` from `src/components/Layout.tsx`.
- Preload only true above-the-fold assets such as logo, hero poster, and maybe hero video metadata.
- Let route images load naturally with `loading="lazy"`.
- Add route-level preloading only where a real user interaction predicts the next image.

### 2. Replace Placeholder SEO and Social Metadata

File: `src/routes/__root.tsx:75`

Root metadata still includes `Lovable App`, `Factory Forward`, `@Lovable`, and an old preview image URL. This is a trust and SEO issue.

Fix:

- Use only QUANTUM LEAP metadata.
- Remove duplicate `title` and duplicate description entries.
- Replace OG/Twitter title, description, site name, and image.
- Add `theme-color`.
- Consider `og:locale`, canonical URL, and `twitter:card` with `summary_large_image`.

### 3. Make the Contact Form Real and Accessible

File: `src/routes/contact.tsx:31`

The form currently prevents default submit and shows a success message without sending data. Inputs lack `name`, `autocomplete`, robust validation, loading state, error display, and `aria-live`.

Fix:

- Add real submission handling or clearly label it as a demo until backend exists.
- Add `name` to every field.
- Add `autocomplete`, for example `name`, `organization`, `email`, `tel`.
- Use `type="tel"` and `inputMode="tel"` for phone.
- Add inline validation errors near each field.
- Focus the first invalid field on submit.
- Add loading state to the submit button.
- Announce success and errors with `aria-live="polite"`.
- Add OEM-specific fields: product category, volume, packaging type, target launch date, and market.

### 4. Fix Header and Mobile Navigation Accessibility

File: `src/components/SiteHeader.tsx:36`

The mobile menu button has an `aria-label`, but it lacks `aria-expanded`, `aria-controls`, and strong focus-visible treatment. Several nav links rely mostly on hover/active visuals.

Fix:

- Add `aria-expanded={open}` and `aria-controls`.
- Give the menu panel an `id`.
- Ensure menu button hit area is at least 44 x 44 px.
- Add `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`.
- Consider closing the menu on Escape.
- Add a skip link to main content in `Layout`.

### 5. Add ARIA Semantics to FAQ Accordion

File: `src/routes/faq.tsx:33`

FAQ buttons expand panels visually, but do not expose expanded state or panel relationships to assistive tech.

Fix:

- Add `aria-expanded`.
- Add `aria-controls`.
- Give every answer panel an `id`.
- Consider `hidden` for closed panels.
- Add focus-visible styles.

### 6. Complete Tab Semantics in OEM Manufacturing

File: `src/routes/services.oem-manufacturing.tsx:99`

The custom tablist uses `role="tab"` and `aria-selected`, but it does not include `aria-controls`, tab IDs, tab panels, or keyboard arrow navigation.

Fix:

- Add `id` to each tab.
- Add `aria-controls` to each tab.
- Wrap tab content in `role="tabpanel"`.
- Add `aria-labelledby` on tab panels.
- Add Left/Right arrow keyboard support.
- Sync tab state to the URL if the two states should be deep-linkable.

### 7. Respect Reduced Motion

Files:

- `src/styles.css:96`
- `src/routes/index.tsx:124`
- `src/components/CertificatesSlider.tsx:21`
- Multiple `hover:scale`, `group-hover:scale`, `transition-all`, and carousel motion usages.

The site uses smooth scrolling, pulses, hover scaling, carousel autoplay, and broad transitions without a reduced-motion fallback.

Fix:

- Add a global `@media (prefers-reduced-motion: reduce)` block.
- Disable smooth scrolling for reduced motion.
- Disable or shorten animations.
- Replace `transition-all` with explicit properties.
- Pause or disable carousel autoplay for reduced motion.

### 8. Fix Accent Color Contrast

Files:

- `src/styles.css:54`
- `src/routes/products.tsx:153`
- Other `bg-accent text-accent-foreground` usages.

Current white text on the orange accent is about 3.63:1, below WCAG AA for normal text. Dark text on the same orange is about 5.02:1.

Fix:

- Use dark foreground text on orange accent buttons, or darken the accent enough for white text.
- Check every `text-accent`, `text-accent-foreground`, and `bg-accent` pair.
- Keep CTA contrast consistent across light and dark modes.

## P1 High-Impact Improvements

### 1. Add Image Dimensions and Responsive Sizing

Files:

- `src/routes/index.tsx:127`
- `src/routes/products.tsx:66`
- `src/routes/products.tsx:110`
- `src/routes/services.odm-solutions.tsx:151`
- `src/routes/services.oem-manufacturing.tsx:200`

Many images are inside aspect-ratio containers, but explicit `width`, `height`, and `sizes` still help browser scheduling and reduce layout risk.

Fix:

- Add `width` and `height` to all meaningful images.
- Add `sizes` for responsive image cards.
- Use optimized image exports at display-appropriate dimensions.
- Avoid shipping 2-3 MB images for small cards.

### 2. Improve Carousel Usability

Files:

- `src/components/CertificatesSlider.tsx:21`
- `src/components/ui/carousel.tsx:187`
- `src/components/ui/carousel.tsx:215`

Carousel autoplay should not run without user control, reduced-motion support, and adequate touch targets. Current carousel buttons are 32 x 32 px, below the 44 px guideline.

Fix:

- Make carousel controls at least 44 x 44 px.
- Pause autoplay on hover and focus.
- Stop autoplay after user interaction.
- Disable autoplay under reduced motion.
- Add an accessible label to the carousel region.

### 3. Rework Mobile Product Browsing

File: `src/routes/index.tsx:346`

The mobile product carousel hides the scrollbar and relies on horizontal swipe discovery. Users may miss extra cards.

Fix:

- Add visible arrows/dots, or convert mobile cards to a simple 2-column or 1-column grid.
- Do not hide all scroll affordance unless alternate controls are visible.
- Keep card widths stable across breakpoints.

### 4. Strengthen Focus System Globally

Files:

- `src/styles.css`
- `src/components/SiteHeader.tsx`
- `src/routes/contact.tsx`
- `src/routes/faq.tsx`
- `src/routes/index.tsx`

Interactive elements should have a consistent keyboard-visible ring. Some inputs use `focus:outline-none` with replacement, but many links/buttons need stronger `focus-visible` states.

Fix:

- Add a reusable interactive class or utility pattern.
- Use `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`.
- Apply to nav links, CTAs, product cards, accordions, tabs, and carousel controls.

### 5. Clean Up Lint and Formatting

Project-wide.

`npm run lint` currently fails with 458 Prettier errors and 6 Fast Refresh warnings.

Fix:

- Run `npm run format`.
- Review the resulting diff before committing.
- Address Fast Refresh warnings later by separating shared constants/helpers from component-only files if needed.

## P2 Frontend Design Improvements

### 1. Move From Generic Premium to Industrial Premium

The site currently uses many rounded cards, blue gradients, glow shadows, and repeated CTAs. It looks polished, but not yet distinctive enough for a beverage manufacturing platform.

Direction:

- Reduce large radii on most cards from `rounded-3xl` to tighter industrial radii.
- Use stronger production-grid layouts.
- Show process, capacity, certification, and factory evidence more prominently.
- Use fewer glow effects; reserve them for important CTAs or hero moments.
- Use more metal, glass, inspection, and line-system visual language.

### 2. Improve Typography Character

File: `src/styles.css:36`

Montserrat for both heading and body is clean but generic. A stronger brand system would make the site feel more credible and engineered.

Suggested direction:

- Heading/display: `Saira Condensed`, `Barlow Condensed`, or `IBM Plex Sans Condensed`.
- Body: `IBM Plex Sans`, `Source Sans 3`, or `Atkinson Hyperlegible`.
- Use tabular numerals for stats like `24,000 BPH`, `10-acre`, and capacity cards.

### 3. Make the Homepage More Conversion-Oriented

File: `src/routes/index.tsx`

The homepage has good information, but it can guide B2B buyers more directly.

Improve:

- Add a visible inquiry path: "I have a formula", "I need product development", "I need packaging".
- Put proof close to the first CTA: certifications, capacity, factory size, existing brand examples.
- Add a short "What we need from you" section before the contact CTA.
- Add partner trust details carefully, only where claims are verified.

### 4. Reduce CTA Repetition

Many service pages end with similar CTA blocks using the same image and gradient treatment.

Improve:

- Create one reusable CTA component with variants.
- Make each CTA more specific to the page:
  - OEM: "Send Your Formula Brief"
  - ODM: "Start Product Development"
  - Production: "Check Capacity"
  - Facilities: "Request Factory Tour"
- Avoid repeated visual blocks that feel copied page-to-page.

### 5. Add Better Empty and Loading States

Current pages mostly render static content, but future form/API work should include:

- Empty states for missing product arrays or certification data.
- Skeletons for async-loaded content.
- Clear error states with retry actions.

## Recommended Implementation Order

1. Remove global image preloader and optimize oversized images.
2. Replace placeholder metadata in `__root.tsx`.
3. Fix accent contrast tokens and CTA text colors.
4. Add global focus-visible and reduced-motion rules.
5. Fix contact form semantics and submission behavior.
6. Fix mobile header, FAQ accordion, and OEM tabs ARIA.
7. Run `npm run format`, then `npm run lint`.
8. Rework visual system toward industrial premium.
9. Improve mobile product browsing and carousel controls.
10. Re-run build, lint, and browser screenshots.

## Verification Checklist

Before launch:

- `npm run build` passes.
- `npm run lint` passes.
- No placeholder metadata remains.
- No image over 500 KB is used for small cards.
- Hero asset loading is intentional.
- All form controls have `label`, `name`, and `autocomplete`.
- Success and error states use `aria-live`.
- Buttons and links have visible `focus-visible` states.
- Mobile nav exposes expanded/collapsed state.
- FAQ and tabs expose state through ARIA.
- Reduced motion disables autoplay and nonessential animation.
- CTA text contrast is at least 4.5:1.
- Test at 375 px, 768 px, 1024 px, and 1440 px.
- Test keyboard navigation from header to footer.
- Test mobile touch targets at 44 x 44 px minimum.

## Notes From Verification

- Build passed.
- Lint failed because formatting needs cleanup.
- Playwright screenshot review could not run because Chrome was missing at:
  `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- Installing Chrome or Playwright Chromium would allow visual screenshot verification.

