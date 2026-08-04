# JONOVA Immobilienverwaltung — Project Documentation

## Feature: Trust-first landing redesign (2026)

### Description
Repositioned the marketing site from generic Verwaltung adjectives to an owner-trust narrative focused on reachability, clear processes, and personal enquiry conversion. Inspired by Swiss competitor patterns (Resonus, KAMA), property-management website research (owner vs tenant paths, trust signals), and common Eigentümer complaints (Erreichbarkeit, Abrechnungen, Wechsel).

### Location
- `app/page.tsx` — section composition
- `app/globals.css` — alpine stone palette, grain, reveal + hero motion
- `components/hero.tsx` — full-bleed place-first hero
- `components/eigentuemer.tsx` — owner-path CTAs
- `components/warum-jonova.tsx` — outcome-led trust section
- `components/faq.tsx` — owner FAQ
- `components/inquiry-context.tsx` — prefill enquiry from owner path
- `components/reveal.tsx` — lightweight scroll reveal (no extra deps)
- Remaining sections updated: `leistungen`, `ablauf`, `ueber-uns`, `kontakt`, `nav`, `footer`

### Configuration
- Contact still centralized in `lib/site.ts` (`CONTACT.email`, optional phone)
- EmailJS unchanged via `lib/emailjs.ts`
- Static export + GitHub Pages `basePath` via `next.config.mjs`

### Interactions
- Owner path buttons set property type and scroll/focus the contact form
- DE|EN toggle remains global via `language-context`
- Nav adapts contrast over dark hero vs scrolled light surface

### Still needed from client (content blockers)
- Founder name + photo
- Phone number
- Specific canton/cities
- Optional real metrics / testimonials
