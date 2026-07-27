# Radiance Dental Studio — Website Template

A fully responsive, luxury dental clinic website. Static HTML/CSS/JS — no build step required — with all editable content pulled from JSON files so it can be managed through a Decap CMS admin panel on Netlify.

## Structure

```
dental-clinic/
├── index.html          Main page (all sections, meta tags, JSON-LD schema)
├── netlify.toml         Netlify deploy config (publish dir + headers)
├── css/styles.css       Custom design system (glassmorphism, animations, dark mode)
├── js/script.js         All interactivity + fetches /content/*.json to render each section
├── content/              ← what Decap CMS edits
│   ├── site.json          Hero, About, Contact, Social links, Footer tagline
│   ├── services.json       20 service cards
│   ├── dentists.json       Dentist profile cards
│   ├── why-us.json         "Why Choose Us" feature grid
│   ├── before-after.json    Before/after slider cases
│   ├── gallery.json        Masonry gallery photos
│   ├── testimonials.json    Patient reviews carousel
│   ├── promotions.json     Promo cards
│   ├── insurance.json      Insurance partner logos/names
│   ├── facilities.json     Clinic facilities grid
│   ├── faqs.json           FAQ accordion
│   └── blog.json           Blog post cards
├── admin/
│   ├── index.html         Decap CMS app shell
│   └── config.yml          Decap CMS collections (maps to the files above)
└── images/uploads/         Where Decap CMS saves images you upload through the CMS
```

## How the content system works

Every repeating section (services, dentists, testimonials, blog, promotions, facilities,
FAQs, before/after, gallery, insurance) and the main site text (hero, about, contact,
social links, footer) live in `/content/*.json` instead of being hardcoded in the HTML.
`js/script.js` fetches those files on page load and renders each section from them. If a
fetch ever fails (for example, if you open `index.html` directly by double-clicking it
instead of through a server), the site falls back to the same content baked into
`js/script.js` as defaults — so the page never breaks, it just won't reflect unpublished
edits until it's served properly.

This is what makes the site editable in Decap CMS without a build step: the CMS just
writes plain JSON files back to the repo, and the browser reads them directly.

## Deploying to Netlify

1. Push this folder to a GitHub (or GitLab/Bitbucket) repository.
2. In Netlify: **Add new site → Import an existing project**, connect the repo.
3. Build settings: leave the build command **empty** and set the publish directory to
   the repo root (`netlify.toml` already sets `publish = "."`, so Netlify should pick
   this up automatically).
4. Deploy. That's it — no environment variables needed.

You can also drag-and-drop the folder onto Netlify's "Deploys" page for a one-off
deploy, but connecting a Git repo is required for the CMS (see below) to be able to
save changes.

## Setting up the Decap CMS admin panel

The admin panel lives at `yoursite.netlify.app/admin/`. To make it able to log in and
save content back to your repo, Netlify's **Identity** and **Git Gateway** services
need to be turned on (this part can't be done from files — it's a couple of clicks in
the Netlify dashboard):

1. In your Netlify site dashboard: **Site configuration → Identity → Enable Identity**.
2. Under Identity settings, set **Registration** to "Invite only" (recommended, so
   random visitors can't create their own CMS accounts).
3. Still under Identity: **Services → Git Gateway → Enable Git Gateway**. This lets
   Identity-authenticated users commit content changes without needing their own
   GitHub credentials.
4. Go to **Identity → Invite users** and invite yourself (and anyone else who should
   be able to edit the site) by email. You'll get an email with a link to set a
   password.
5. Visit `yoursite.netlify.app/admin/`, log in, and you'll see the content collections
   listed in `admin/config.yml`: Site Settings, Services, Dentists, Why Choose Us,
   Before & After, Gallery, Testimonials, Promotions, Insurance Partners, Facilities,
   FAQs, and Blog Posts.
6. Before your first login, open `admin/config.yml` and replace the two
   `your-site-name.netlify.app` placeholders near the top (`site_url` / `display_url`)
   with your actual Netlify URL — this only affects the CMS's own preview links, not
   the live site.

Editing a collection and clicking **Publish** in the CMS commits straight to your
`main` branch, which triggers a new Netlify deploy automatically — changes go live in
under a minute, no code editing required.

### Testing the CMS locally before you deploy (optional)

```
npx decap-server
```

in one terminal, then uncomment `local_backend: true` in `admin/config.yml`, and open
`index.html` through a local web server (not by double-clicking it) with the CMS
proxy running. Remove/re-comment that line again before deploying.

## Tech used (via CDN)

- Tailwind CSS (Play CDN) for utility styling
- Google Fonts — Poppins, Inter, Manrope
- Font Awesome 6 — icons
- AOS.js — scroll-triggered animations
- Swiper.js — testimonials carousel
- Decap CMS + Netlify Identity widget — the `/admin` content editor
- Vanilla JavaScript — everything else (content fetching, before/after slider, masonry
  filter + lightbox, FAQ accordion, booking form + success animation, counters, dark
  mode, cookie consent, floating buttons, mock AI chat widget)

## Mobile & tablet layout notes

The layout was audited and adjusted specifically for small screens:

- The bottom-right/bottom-left floating buttons (call/book FAB stack, back-to-top,
  chat bubble) sit higher on phones (`bottom-24`) so they clear the sticky mobile
  contact bar instead of overlapping it; on tablets and up (≥640px) the sticky bar
  disappears and they drop back down to `bottom-6`.
- The cookie banner is likewise offset above the sticky bar on phones.
- The hero's two floating info cards ("Sterilized & Safe", "4.9/5 Rating") only show
  at the `lg` breakpoint (≥1024px) where there's a two-column layout with room for
  them — they were hidden at the in-between tablet width where they risked overflowing
  past the edge of a single centered hero image.
- Section vertical padding, heading margins, and two-column gaps step down at each
  breakpoint (`py-16 sm:py-20 lg:py-32`, etc.) instead of using one large desktop
  value everywhere, so mobile doesn't feel over-padded.
- The before/after comparison slider keeps its "before" image pinned to the slider's
  full pixel size (recalculated on resize) so it never stretches or distorts as the
  slider itself reflows at different widths.
- `overflow-x: hidden` is set as a safety net on `html`/`body` to catch any stray
  horizontal overflow.

## Before you go live

1. **Images** — all photography currently points to royalty-free Unsplash URLs as
   placeholders. Replace them either directly in `/content/*.json` (or through the CMS
   image picker, which uploads to `images/uploads/`) with your own licensed photography
   of your clinic, dentists, and patients (with consent).
2. **Content** — update the clinic's real address, phone numbers, hours, dentist bios,
   and Google Maps embed URL — all editable via **Site Settings** in the CMS, or
   directly in `content/site.json`.
3. **Booking form & newsletter** — currently simulate success client-side. Wire
   `#booking-form` and the newsletter forms to your backend, CRM, or a service like
   Formspree/Netlify Forms to actually receive submissions.
4. **Chatbot** — the assistant bubble is a scripted keyword demo. Swap in a real
   chat/AI provider (Intercom, Drift, or a custom LLM endpoint) for production.
5. **Production Tailwind** — the Play CDN (`cdn.tailwindcss.com`) is fine for demos but
   not recommended for production. For best performance, compile Tailwind via the CLI
   or PostCSS and link the generated stylesheet instead.
6. **Schema & SEO** — update the JSON-LD `Dentist` block, Open Graph/Twitter meta tags,
   and canonical URL in `index.html` with your real domain before launch.
7. **Accessibility** — semantic landmarks, focus states, and `prefers-reduced-motion`
   support are included; do a full WCAG 2.1 AA pass (contrast, screen-reader testing)
   once real content and images are in place.

## Notes

This was built in a sandboxed environment without outbound internet access, so CDN
assets (Tailwind, fonts, icons, Unsplash images) couldn't be visually rendered here.
Everything was checked for structural integrity (balanced tags, valid JSON/YAML,
working nav anchors, matching section content counts) and every interactive feature —
menus, filters, accordions, modals, forms, dark mode, and the content fetch/render
pipeline itself — was functionally tested end-to-end against the real JSON files with
a local server, with only the blocked CDN calls mocked out. Please do a final visual
pass in your own browser (and on a real phone/tablet if possible) once it's deployed.
