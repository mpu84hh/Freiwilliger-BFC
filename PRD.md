# CRM Dashboard — Cahier des charges

## Contexte

Application de suivi de prospects et clients pour un usage **solo**. L'utilisateur importe un export CSV depuis son CRM et obtient une vision instantanée de son activité commerciale.

---

## Objectif principal

Avoir une vision instantanée du **chiffre d'affaires** — ce qui rentre, ce qui peut rentrer, ce qui est en attente — pour décider où concentrer son énergie commerciale.

---

## Données source

- **Format d'entrée** : fichier CSV exporté depuis un CRM
- **Structure du CSV** (colonnes disponibles) :
  - `Task Name` — Nom du contact et de l'entreprise
  - `Status` — Statut du deal (`prospect`, `qualifié`, `négociation`, `gagné - en cours`, `à relancer`)
  - `Date Created` — Date de création
  - `Due Date` — Date d'échéance
  - `Start Date` — Date de début
  - `Assignees` — Commercial assigné
  - `Priority` — Priorité (`high`, `medium`, `low`)
  - `Tags` — Secteur d'activité
  - `Task Content` — Notes libres
  - `Montant Deal` — Valeur du deal en euros

---

## KPIs — Les 6 indicateurs clés

| Indicateur | Pourquoi il déclenche l'action |
|---|---|
| **CA signé** (gagné en cours) | Savoir ce qui est déjà dans la poche |
| **CA en négociation** | Le closing prioritaire, à surveiller chaque jour |
| **CA à relancer** | L'argent qui dort — agir maintenant ou perdre le deal |
| **Valeur moyenne d'un deal** | Savoir si on chasse trop petit ou si le pipeline est sain |
| **Nombre de deals actifs** | Un seul chiffre pour sentir si le pipeline est plein ou vide |
| **CA total du pipeline** | La vision macro — ce que vaut l'ensemble si tout se concrétise |

Ces 6 KPIs sont affichés **en haut de page**, toujours visibles.

---

## Vue principale : Kanban

Colonnes dans l'ordre du cycle de vente :

```
Prospect → Qualifié → Négociation → À relancer → Gagné
```

### Contenu de chaque carte
- Nom du contact / entreprise
- Montant du deal (en €)
- Priorité (badge visuel)
- Date d'échéance

### Comportements
- **Total cumulé par colonne** affiché en en-tête de colonne
- **Alertes visuelles** : carte en rouge si la date d'échéance est dépassée, en orange si elle est proche
- **Filtre par priorité** : toggle High / Medium / Low pour masquer le bruit

---

## Roadmap

### 🚀 MVP — "Ça marche, c'est utile"
> Objectif : avoir quelque chose d'utilisable en solo dès le premier jour

- [ ] Upload d'un fichier CSV
- [ ] Vue Kanban avec les colonnes de statut
- [ ] Montant affiché sur chaque carte (nom, montant, priorité, échéance)
- [ ] Total cumulé par colonne
- [ ] Les 6 KPIs en haut de page

---

### V1 — "C'est agréable à utiliser"
> Objectif : rendre l'outil confortable au quotidien

- [ ] Alertes visuelles sur les cartes (échéances dépassées en rouge/orange)
- [ ] Filtre par priorité (High / Medium / Low)
- [ ] Design mobile-friendly
- [ ] Filtre par statut (masquer/afficher des colonnes)

---

### V2 — "C'est puissant"
> Objectif : passer d'un outil de lecture à un outil de pilotage

- [ ] Connexion base de données (remplace l'upload CSV)
- [ ] Modification d'un deal directement depuis le Kanban (statut, montant, notes)
- [ ] Historique des changements de statut
- [ ] Filtre par secteur / tag

---

### 🔭 Hors périmètre — "Un jour peut-être"
> À revisiter si l'usage évolue vers une équipe ou un besoin plus structuré

- Multi-utilisateurs / gestion d'équipe commerciale
- Comparaison de deux exports dans le temps (évolution semaine/semaine)
- Connexion API directe avec un CRM existant (HubSpot, Pipedrive…)
- Notifications / rappels automatiques de relance
- Export PDF ou rapport automatique

---

## Contraintes techniques

- Usage **solo**, pas de gestion multi-utilisateurs dans un premier temps
- Données chargées **à la demande** via upload CSV (pas de temps réel)
- Architecture pensée pour **migrer vers une base de données** en V2 sans tout reconstruire
- Interface **responsive** (desktop prioritaire, mobile agréable)