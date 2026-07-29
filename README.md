# Radiance Dental Studio — Website Template

A fully responsive, luxury dental clinic website. Static HTML/CSS/JS — no build step required — with all editable content pulled from JSON files so it can be managed through a Sveltia CMS admin panel on Netlify.

## Structure

```
dental-clinic/
├── index.html          Main page (all sections, meta tags, JSON-LD schema)
├── netlify.toml         Netlify deploy config (publish dir + headers)
├── css/styles.css       Custom design system (glassmorphism, animations, dark mode)
├── js/script.js         All interactivity + fetches content/site.json to render every section
├── content/
│   └── site.json          Everything the CMS edits — hero, about, contact, social,
│                           footer, services, dentists, why-us, before/after, gallery,
│                           testimonials, promotions, insurance, facilities, faqs, blog
├── admin/
│   ├── index.html         Sveltia CMS app shell
│   └── config.yml          One collection, one file, all sections as fields (see below)
└── images/uploads/         Where the CMS saves images you upload through it
```

## How the content system works

Every section of the site — the main site text (hero, about, contact, social links,
footer) and every repeating section (services, dentists, testimonials, blog, promotions,
facilities, FAQs, before/after, gallery, insurance) — lives in the single file
`content/site.json`, as nested fields, instead of being hardcoded in the HTML.
`js/script.js` fetches that one file on page load and renders every section from it. If
the fetch ever fails (for example, if you open `index.html` directly by double-clicking it
instead of through a server), the site falls back to the same content baked into
`js/script.js` as defaults — so the page never breaks, it just won't reflect unpublished
edits until it's served properly.

This is what makes the site editable in the CMS without a build step: the CMS just
writes one plain JSON file back to the repo, and the browser reads it directly.

**Why one file instead of one-per-section:** earlier versions of this site split content
across 12 separate files/collections (one per section), which meant editing multiple
sections in one sitting cost multiple separate "Save" actions — multiple git commits,
and on a pay-per-publish DecapBridge plan, multiple charges, even for one editing
session. Consolidating everything into one file means you can expand any number of
sections in the CMS, edit any number of fields across all of them, and click **Save**
once — one commit, one publish, no matter how much you changed. The trade-off is that
this file has no per-item edit history the way separate collections would (git-gateway
only versions at the file level); for a small site edited by one or two people, that's a
worthwhile trade for the savings.

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

## Setting up the Sveltia CMS admin panel (direct GitHub login)

The admin panel lives at `yoursite.netlify.app/admin/`, running [Sveltia
CMS](https://sveltiacms.app) — a fast, modern, Decap/Netlify-CMS-config-compatible
editor. This site used to authenticate through DecapBridge's git-gateway backend, but
switched to a **direct GitHub backend** on 2026-07-29: Sveltia CMS doesn't support
git-gateway at all, and going direct to GitHub also removes DecapBridge's
pay-per-publish billing entirely — commits are free, made straight to your GitHub repo.

Authentication works through Netlify's own built-in OAuth provider (the same mechanism
Decap CMS used for direct GitHub logins before DecapBridge existed) — no third-party
service, no per-publish cost. One-time setup, done once per site by whoever owns the
GitHub repo and the Netlify site:

1. **Create a GitHub OAuth App:** GitHub → Settings → Developer settings → OAuth Apps
   → **New OAuth App**.
   - Homepage URL: `https://radiancedentalclinic.netlify.app` (anything works here,
     it's not checked)
   - Authorization callback URL: `https://api.netlify.com/auth/done` — this exact URL,
     regardless of your site's actual domain; Netlify's shared auth endpoint handles
     the redirect back to whichever site initiated the login.
   - Register the app, copy the **Client ID**, then generate and copy a **Client
     Secret** (you can't view the secret again after leaving the page, so save it
     somewhere safe immediately).
2. **Register it with Netlify:** in your Netlify site → **Project configuration →
   Access & security → OAuth** → **Install provider** → GitHub → paste in the Client ID
   and Client Secret → Save.
3. **`admin/config.yml`** already has the `backend:` block wired in:
   ```yaml
   backend:
     name: github
     repo: johnpaullegaspi/dental-clinic-website
     branch: main
   ```
   No identity/gateway URLs needed — Sveltia auto-detects Netlify's OAuth endpoint
   when the site is hosted on Netlify and no `base_url` is set.
4. Push/deploy, then open `yoursite.netlify.app/admin/` and click **Login with
   GitHub**. Log in with a GitHub account that has at least **write** access to this
   repo — that's now what determines who can edit content (see below).
5. **Adding collaborators:** there's no separate CMS user system anymore. To let
   someone else edit content, invite their GitHub account to this repository (GitHub →
   repo → **Settings → Collaborators → Add people**) with the **Write** role. They log
   into `/admin/` with their own GitHub account — no separate CMS invite step.

Editing content and clicking **Save** in the CMS commits straight to your `main`
branch, which triggers a new Netlify deploy automatically — changes go live in under a
minute, no code editing required.

### Testing the CMS locally before you deploy (optional)

Sveltia CMS has this built in — no proxy server or extra `npm`/`npx` package needed:

1. Serve this folder locally (e.g. `npx serve` or `python3 -m http.server`) and open
   `http://localhost:PORT/admin/index.html` in a Chromium-based browser (Chrome, Edge,
   Brave — not Firefox/Safari, this feature needs the File System Access API).
2. Click **Work with Local Repository** when the CMS offers it, and select this
   project's root folder.
3. Edit content — changes save straight to the local files on disk. Review with
   `git diff`, then `git commit`/`git push` yourself when ready; Sveltia's local mode
   doesn't run git commands for you.

## Tech used (via CDN)

- Tailwind CSS (Play CDN) for utility styling
- Google Fonts — Poppins, Inter, Manrope
- Font Awesome 6 — icons
- AOS.js — scroll-triggered animations
- Swiper.js — testimonials carousel
- Sveltia CMS — the `/admin` content editor, authenticating directly against GitHub
  via Netlify's built-in OAuth provider (no third-party CMS billing)
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
