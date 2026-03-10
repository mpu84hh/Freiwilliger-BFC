# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project contains a CRM prospects demo dataset (`crm_prospects_demo.csv`) with French-language sales pipeline data. The goal is a **solo-use CRM dashboard** where a user uploads a CSV export and gets an instant view of their sales pipeline.

The product vision is defined in `PRD.md` (Cahier des charges).

## Data Structure

The CSV file tracks sales prospects with these fields:

- **Task Name**: Prospect name and company (e.g., `Sophie Martin - TechStart`)
- **Status**: Pipeline stage — `prospect`, `qualifié`, `négociation`, `gagné - en cours`, `à relancer`
- **Date Created / Due Date / Start Date**: ISO date strings
- **Assignees**: Sales rep (`Alexandre Dubois` or `Marie Laurent`)
- **Priority**: `high`, `medium`, `low`
- **Tags**: Pipe-separated industry/category tags (e.g., `SaaS|B2B`)
- **Task Content**: French-language notes on the prospect
- **Montant Deal**: Deal value in euros (integer)

## Product Roadmap Summary

See `PRD.md` for full details. Key stages:

- **MVP**: CSV upload, Kanban view by status, deal amounts per card, column totals, 6 KPIs
- **V1**: Overdue alerts (red/orange), priority filters, mobile-friendly, column visibility toggle
- **V2**: Database backend, inline deal editing, status history, tag filters

## Key KPIs (displayed at top of dashboard)

| KPI | Status filter |
|---|---|
| CA signé | `gagné - en cours` |
| CA en négociation | `négociation` |
| CA à relancer | `à relancer` |
| Valeur moyenne d'un deal | all active |
| Nombre de deals actifs | all non-lost |
| CA total du pipeline | all |

## Kanban Column Order

```
Prospect → Qualifié → Négociation → À relancer → Gagné
```

## Technical Constraints

- Solo usage — no multi-user auth
- Data loaded via CSV upload (no real-time sync in MVP)
- Architecture must support migration to a database backend in V2 without full rebuild
- Desktop-first, mobile-friendly

---

## Aperçu de l'objectif du projet

Dashboard CRM solo permettant à un commercial d'importer un export CSV et d'obtenir instantanément une vision de son pipeline de vente : chiffre d'affaires signé, en négociation, à relancer, et vue Kanban interactive par statut.

---

## Aperçu de l'architecture globale

- **Frontend** : Next.js 15 (App Router), entièrement client-side pour le MVP
- **Parsing CSV** : PapaParse côté client, typé via `lib/types.ts`
- **Kanban** : dnd-kit, 5 colonnes (`Prospect → Qualifié → Négociation → À relancer → Gagné`)
- **KPIs** : calculés dans `lib/kpi-engine.ts`
- **Styling** : Tailwind CSS + shadcn/ui
- **Tests** : Playwright (E2E) + Vitest (unitaires)
- **V2** : migration vers Prisma + SQLite/PostgreSQL via API Routes Next.js

---

## Style visuel

- Interface claire et minimaliste
- Pas de mode sombre pour le MVP

---

## Contraintes et Politiques

- **NE JAMAIS exposer les clés API au client** — toute clé doit rester côté serveur

---

## Dépendances

- Préférer les composants shadcn/ui existants plutôt que d'ajouter de nouvelles bibliothèques UI

---

## Tests interface graphique

À la fin de chaque développement qui implique l'interface graphique, tester avec **playwright-skill** : l'interface doit être responsive, fonctionnelle et répondre au besoin développé.

---

## Documentation

- Cahier des charges produit : [`PRD.md`](./PRD.md)
- Architecture technique : [`ARCHITECTURE.md`](./ARCHITECTURE.md)

---

## Context7

Utiliser **toujours Context7** lors de génération de code, d'étapes de configuration/installation, ou de documentation de bibliothèque/API. Utiliser automatiquement les outils MCP Context7 (résolution d'identifiant + récupération de documentation) sans attendre une demande explicite.

---

## Langue des spécifications

Toutes les spécifications doivent être rédigées en **anglais**, y compris les specs OpenSpec (sections Purpose et Scenarios). Seuls les titres de Requirements doivent rester en anglais avec les mots-clés `SHALL`/`MUST` pour la validation OpenSpec.
