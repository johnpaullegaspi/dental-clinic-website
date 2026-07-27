# Radiance Dental Studio — Website Template

A fully responsive, luxury dental clinic website. Static HTML/CSS/JS — no build step required.

## Structure

```
dental-clinic/
├── index.html      Main page (all sections, meta tags, JSON-LD schema)
├── css/styles.css   Custom design system (glassmorphism, animations, dark mode)
├── js/script.js     All interactivity (nav, sliders, forms, filters, chatbot mock)
└── images/          (empty — currently using hosted Unsplash images, see below)
```

## Tech used (via CDN — swap for a bundled build before high-traffic production use)

- Tailwind CSS (Play CDN) for utility styling
- Google Fonts — Poppins, Inter, Manrope
- Font Awesome 6 — icons
- AOS.js — scroll-triggered animations
- Swiper.js — testimonials carousel
- Vanilla JavaScript — everything else (before/after slider, masonry filter + lightbox,
  FAQ accordion, booking form + success animation, counters, dark mode, cookie
  consent, floating buttons, mock AI chat widget)

## Deploying

This is a static site — drag-and-drop the `dental-clinic` folder onto Netlify, or run:

```
npx vercel deploy
```

from inside the folder. No environment variables or build command needed.

## Before you go live

1. **Images** — all photography currently points to royalty-free Unsplash URLs as
   placeholders. Replace the `src` values in `index.html` and the data arrays in
   `js/script.js` (SERVICES, BEFORE_AFTER, GALLERY, TESTIMONIALS, BLOG_POSTS) with
   your own licensed photography of your clinic, dentists, and patients (with consent).
2. **Content** — update clinic name, address, phone numbers, hours, dentist bios,
   and the Google Maps embed query in the Contact section with real details.
3. **Booking form & newsletter** — currently simulate success client-side. Wire
   `#booking-form` and the newsletter forms to your backend, CRM, or a service like
   Formspree/Netlify Forms to actually receive submissions.
4. **Chatbot** — the assistant in the bottom-left is a scripted keyword demo. Swap in
   a real chat/AI provider (Intercom, Drift, or a custom LLM endpoint) for production.
5. **Production Tailwind** — the Play CDN (`cdn.tailwindcss.com`) is fine for demos but
   not recommended for production. For best performance, compile Tailwind via the CLI
   or PostCSS and link the generated stylesheet instead.
6. **Schema & SEO** — update the JSON-LD `Dentist` block, Open Graph/Twitter meta tags,
   and canonical URL with your real domain before launch.
7. **Accessibility** — semantic landmarks, focus states, and `prefers-reduced-motion`
   support are included; do a full WCAG 2.1 AA pass (contrast, screen-reader testing)
   once real content and images are in place.

## Notes

Because this was built in a sandboxed environment without outbound internet access,
CDN assets (Tailwind, fonts, icons, Unsplash images) could not be visually verified
by rendering in a browser here. All HTML/JS was checked for structural integrity
(balanced tags, working nav anchors, matching section content counts) and every
interactive feature (menus, filters, accordions, modals, forms, dark mode) was
functionally tested with the CDN calls mocked out — but please do a final visual
pass in your own browser once you open the file, since real network access will
load the CDN assets normally there.
