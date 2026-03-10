# Architecture technique — CRM Dashboard

## Stack retenu

| Couche | Choix | Version cible |
|---|---|---|
| Framework | Next.js (App Router) | 15.x |
| Langage | TypeScript | 5.x |
| Styling | Tailwind CSS + shadcn/ui | Tailwind 4.x |
| CSV parsing | PapaParse | 5.x |
| Kanban drag & drop | dnd-kit | 6.x |
| Dates / alertes | date-fns | 4.x |
| Tests E2E | Playwright | 1.x |
| Tests unitaires | Vitest | 2.x |
| ORM (V2) | Prisma | 6.x |
| Base de données (V2) | SQLite → PostgreSQL | — |
| Déploiement | Vercel | — |

---

## Détail par couche

### Frontend — Next.js 15 (App Router)
- MVP : app entièrement client-side (CSV parsé dans le navigateur, aucun backend)
- V2 : ajout des API Routes dans le même repo pour connecter la base de données
- Le passage CSV → DB ne nécessite pas de reconstruire le projet

### UI — Tailwind CSS + shadcn/ui
- Tailwind pour la mise en page et les couleurs
- shadcn/ui pour les composants accessibles : `Card`, `Badge`, `Button`, `Dialog`
- Alertes visuelles (échéances) via classes conditionnelles Tailwind (`bg-red-100`, `bg-orange-100`)

### Données — PapaParse
- Parsing du CSV entièrement côté client
- Typage strict des colonnes via TypeScript (`Deal`, `Status`, `Priority`)
- En V2, la couche `lib/` est conservée et branchée sur l'API au lieu du CSV

### Kanban — dnd-kit
- Drag & drop accessible et performant
- Colonnes dans l'ordre : `Prospect → Qualifié → Négociation → À relancer → Gagné`

### Dates — date-fns
- Comparaison `Due Date` vs date du jour pour les alertes visuelles
- Rouge : échéance dépassée / Orange : échéance dans les 7 jours

### Tests — Playwright + Vitest

**Playwright (E2E)** — flux utilisateur complets dans le vrai navigateur :
- Upload CSV → rendu Kanban
- Valeurs des 6 KPIs
- Alertes visuelles sur cartes échues
- Filtres par priorité

**Vitest (unitaires)** — logique métier en isolation :
- `lib/kpi-engine.ts` : calcul des 6 KPIs
- `lib/csv-parser.ts` : parsing et validation du CSV

### Base de données (V2) — Prisma + SQLite
- SQLite pour démarrer : zéro infrastructure, fichier local
- Migration vers PostgreSQL (Railway ou autre) en changeant une ligne dans `schema.prisma`
- Prisma génère les types TypeScript → partagés avec le frontend

---

## Structure du projet

```
project/
├── app/
│   ├── page.tsx                  # Page principale
│   ├── layout.tsx
│   └── components/
│       ├── KanbanBoard.tsx
│       ├── KpiBar.tsx
│       ├── DealCard.tsx
│       └── CsvUploader.tsx
│
├── lib/
│   ├── types.ts                  # Deal, Status, Priority
│   ├── csv-parser.ts             # PapaParse wrapper + validation
│   └── kpi-engine.ts             # Calcul des 6 KPIs
│
├── tests/
│   ├── unit/
│   │   ├── csv-parser.test.ts    # Vitest
│   │   └── kpi-engine.test.ts    # Vitest
│   └── e2e/
│       ├── upload.spec.ts        # Playwright
│       ├── kanban.spec.ts        # Playwright
│       ├── kpis.spec.ts          # Playwright
│       └── filters.spec.ts       # Playwright
│
├── fixtures/
│   └── crm_demo.csv              # CSV de test partagé entre E2E et unit
│
├── prisma/                       # Ajouté en V2
│   └── schema.prisma
│
├── playwright.config.ts
├── vitest.config.ts
└── next.config.ts
```

---

## Roadmap technique

### MVP
- CSV uploadé et parsé côté client
- Kanban stateful (dnd-kit), 5 colonnes
- 6 KPIs calculés depuis `lib/kpi-engine.ts`
- Tests Playwright : upload → Kanban, KPIs
- Tests Vitest : kpi-engine, csv-parser

### V1
- Alertes visuelles (rouge/orange) via `date-fns`
- Filtres par priorité (High / Medium / Low)
- Filtre par colonne (masquer/afficher)
- Design mobile-friendly
- Tests Playwright : alertes, filtres

### V2
- Ajout `prisma/schema.prisma` + API Routes Next.js
- Migration SQLite → PostgreSQL si nécessaire
- Édition inline des deals depuis le Kanban
- Historique des changements de statut
- Tests Playwright mis à jour pour les flux API

---

## Commandes

```bash
# Développement
npm run dev

# Tests unitaires
npx vitest

# Tests E2E
npx playwright test

# Tests E2E avec UI de debug
npx playwright test --ui

# Rapport des résultats Playwright
npx playwright show-report

# Générer le client Prisma (V2)
npx prisma generate
```
