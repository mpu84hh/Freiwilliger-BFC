# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

This project adds a **BFC-Talentkarte** page to the existing **Buchholzer Fußball Club e.V.** website (`https://buchholzerfc.com/`), a WordPress-based site (Landkreis Harburg, near Hamburg).

The page is modelled on the existing **BU-Talentkarte** page from HSV Barmbek-Uhlenhorst (`https://www.hsv-bu.de/talentkarte`) — a voluntary talent/skills registration form allowing club members and supporters to offer their time and skills to the association.

The product vision and detailed requirements are defined in `PRD.md` (Cahier des charges).

---

## Reference Sites

| Role | URL | CMS / Stack |
|---|---|---|
| **Target site** (integration destination) | `https://buchholzerfc.com/` | WordPress (de_DE locale) |
| **Reference page** (design & functional model) | `https://www.hsv-bu.de/talentkarte` | Wix |

### Target site — BFC (`buchholzerfc.com`)

- **Club full name**: Buchholzer Fußball Club e.V.
- **Locale**: `de_DE`
- **Stack**: WordPress, responsive, desktop-first
- **Navigation structure** (existing, do not modify):
  - Teams → Herren / Damen / Junioren / Juniorinnen / Gehfußball / Futsal / Inklusionsmannschaft / Ballzwerge / Torwart Trainer
  - Der Verein → Über uns / Schutzkonzept / Ausbildung & Training / Mitglied werden / Sponsoren / Shop / Kontakt / Arbeitsdienste / FAQ
  - News
  - Karriere → Arbeiten beim BFC / BFD / Azubi Stellenbörse
- **Existing partnerships to respect**: HSV Kooperation (official partner — logo present)
- **Slug for new page** (proposed): `/der-verein/talentkarte/` — to be confirmed before implementation
- **Menu placement** (proposed): under **Der Verein** — to be confirmed before implementation

### Reference page — BU-Talentkarte (`hsv-bu.de/talentkarte`)

- **Purpose**: Voluntary digital form allowing members/supporters to register their skills and availability for club support (baking, event setup, gardening, coaching referrals, legal/financial help, sponsorship contacts, etc.)
- **Form fields** (all verified from live page, 2025-05-19):

  | Field | Type | Required |
  |---|---|---|
  | Vorname | Text | Yes |
  | Nachname | Text | Yes |
  | Mitgliedsnummer | Text | No |
  | Mannschaft / Team | Text | No |
  | E-Mail-Adresse | Email | Yes |
  | Mein(e) Talent(e) | Checkbox (multi-select) | Yes |
  | Das kann ich außerdem noch gut | Textarea | No |
  | Ich bin vernetzt mit | Text | No |
  | Das mache ich beruflich | Text | No |
  | Mein Arbeitgeber heißt | Text | No |
  | Finanzielle Unterstützung | Checkbox (multi-select) | No |
  | Sonstige Bemerkungen | Textarea | No |
  | Dürfen wir dich kontaktieren? | Checkbox (GDPR consent) | Yes |

- **Talent checkboxes** (exact wording from reference, adapt to BFC context):
  - Einen Kuchen backen? - Fragt mich ruhig.
  - Ich verkaufe gern Kuchen oder Getränke beim nächsten Vereinsfest.
  - Grillen macht mir großen Spaß!
  - Ich bin künstlerisch/gestalterisch begabt.
  - Auf- und Abbau bei Events - voll mein Ding!
  - Ich organisiere gerne Feste und Feiern.
  - Mein Garten genügt mir nicht. Bei Gartenarbeit rund ums Stadion bin ich dabei.
  - Ich kenne jemanden, der/die vielleicht einen Trainerposten übernehmen würde.
  - Ich kenne jemanden, der/die tagsüber ein bisschen Zeit hat und eine Schul-AG im Ganztagsangebot übernehmen würde.
  - Ich kenne mich mit rechtlichen Fragen gut aus.
  - Zahlen & Steuern bringen mich nicht zum schwitzen.
  - Handwerk? Einfach machen.
  - Helfende Hand an Heimspieltagen im Stadion - Hier bin ich!

- **Financial support checkboxes**:
  - Ich bin verantwortlich für ein Unternehmen und kann mir vorstellen, BU mit einem Sponsoring oder einer Spende zu unterstützen.
  - Ich bin bereit, die zuständige Person bei meinem Arbeitgeber zu fragen, ob ein Sponsoring oder eine Spende denkbar ist.
  - Ich bin bereit, eine freiwillige und regelmäßige Spende für BU zu leisten.

  > ⚠️ **Adapt wording**: replace "BU" with "BFC" in all checkbox labels before implementation.

---

## Page Content Structure

### Section 1 — Hero / Header
- Large banner image (to be provided by BFC — currently a placeholder)
- Page title: **DIE BFC-TALENTKARTE** (adapted from "DIE BU-TALENTKARTE")
- Subtitle: **DEIN TALENT FÜR BFC!**

### Section 2 — Introductory Text
Adapt from reference:
> "Jeder kann sich bei BFC einbringen – mit Zeit, Ideen und ganz persönlichen Talenten. Über die BFC-Talentkarte kannst du uns ganz einfach mitteilen, wie du den Verein ehrenamtlich unterstützen möchtest."

Full adapted copy to be finalized in `CONTENT.md`.

### Section 3 — The Form
- As defined in **Form fields** table above
- GDPR consent checkbox with link to BFC Datenschutzerklärung (URL: TBD — check `/datenschutz` on target site)
- Submit button: **Absenden**

### Section 4 — Contact block
- Club name: Buchholzer Fußball Club e.V.
- Address: to be confirmed from BFC contact page (`https://buchholzerfc.com/der-verein/kontakt/`)
- Link to BFC contact page

---

## Technical Constraints

- **CMS**: WordPress — page must be built as a native WordPress page (Gutenberg blocks or compatible page builder already in use on the site)
- **Form handling**: Contact Form 7 or equivalent WordPress plugin already active on the site — **verify before choosing implementation approach**
- **GDPR**: Consent checkbox is mandatory; form data must NOT be shared with third parties or used for advertising (mirror BU policy)
- **No multi-user auth** required
- **Responsive**: desktop-first, mobile-friendly — consistent with existing BFC site behaviour
- **Language**: German (`de_DE`) throughout

---

## Key Open Questions (resolve before implementation)

1. **Form submission destination**: Which email address receives Talentkarte submissions? → Confirm with BFC
2. **Page slug**: `/der-verein/talentkarte/` or `/talentkarte/`? → Confirm with BFC
3. **Menu placement**: Under "Der Verein" as a new sub-item? → Confirm with BFC
4. **Hero image**: Does BFC supply an image, or should a placeholder be used?
5. **Datenschutzerklärung URL**: Confirm the correct path on `buchholzerfc.com`
6. **WordPress form plugin**: Confirm which plugin is active (Contact Form 7 / WPForms / Gravity Forms / other)
7. **Page builder**: Confirm if Elementor, Divi, or plain Gutenberg is used

---

## Product Roadmap Summary

See `PRD.md` for full details.

- **MVP**: Static WordPress page with embedded contact form, GDPR consent, form submission by email
- **V1**: Admin view of submissions, tag/talent filtering, export to CSV
- **V2**: Database backend, member number lookup/validation, integration with BFC membership system

---

## Style & Visual Guidelines

- Match the visual identity of `buchholzerfc.com` exactly (colours, fonts, spacing, button styles)
- Do NOT introduce new UI libraries or styles not already present in the theme
- BFC colour palette and logo assets: available in the existing WordPress theme — do not modify
- HSV Kooperation logo/branding: present on existing pages — do not alter

---

## Constraints & Policies

- **NEVER expose API keys or credentials client-side**
- **NEVER modify existing BFC navigation structure** without explicit confirmation
- **NEVER use BU (HSV Barmbek-Uhlenhorst) branding** — all references must be adapted to BFC

---

## Dependencies

- Prefer WordPress-native solutions and plugins **already active** on the site
- Do not add new plugins without confirming with the BFC site administrator

---

## Testing

At the end of each development step involving the UI, test with **playwright-skill**: the page must be responsive, functional, and meet the defined requirements.

---

## Documentation

- Cahier des charges produit : [`PRD.md`](./PRD.md)
- Page content & German copy : [`CONTENT.md`](./CONTENT.md)
- Architecture technique : [`ARCHITECTURE.md`](./ARCHITECTURE.md)

---

## Context7

Utiliser **toujours Context7** lors de génération de code, d'étapes de configuration/installation, ou de documentation de bibliothèque/API. Utiliser automatiquement les outils MCP Context7 sans attendre une demande explicite.

---

## Langue des spécifications

Toutes les spécifications doivent être rédigées en **anglais**, y compris les specs OpenSpec. Seuls les titres de Requirements doivent rester en anglais avec les mots-clés `SHALL`/`MUST` pour la validation OpenSpec.
