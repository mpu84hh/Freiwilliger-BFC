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
