# Architecture technique — BFC-Talentkarte

## Stack retenu

| Couche | Choix | Version cible |
|---|---|---|
| CMS | WordPress | 6.x (existant sur buchholzerfc.com) |
| Langage | PHP + HTML + CSS | Natif WordPress |
| Page builder | À confirmer — Gutenberg / Elementor / Divi | Celui déjà actif sur le site |
| Formulaire (MVP) | À confirmer — Contact Form 7 / WPForms / Gravity Forms | Plugin déjà installé sur le site |
| Styling | Thème BFC existant (CSS natif) | Ne pas modifier |
| Consentement RGPD | Champ obligatoire dans le plugin de formulaire | — |
| Envoi e-mail (MVP) | SMTP WordPress (plugin déjà actif) | — |
| Tests E2E | Playwright | 1.x |
| Admin / export (V1) | Plugin d'administration de soumissions ou Google Sheets | À confirmer |
| Base de données (V2) | MySQL (natif WordPress) via CPT ou plugin dédié | — |
| Déploiement | Hébergeur existant de buchholzerfc.com | À confirmer |

> ⚠️ Les choix marqués "À confirmer" doivent être validés avec l'administrateur du site BFC **avant** toute implémentation.

---

## Détail par couche

### CMS — WordPress (existant)
- La page Talentkarte est créée comme une page WordPress native
- Aucun nouveau framework ni dépendance front-end introduite
- Le thème existant de `buchholzerfc.com` est conservé intégralement — police, couleurs, espacements, boutons
- En V2, les données du formulaire sont stockées en base MySQL via les mécanismes WordPress natifs (CPT ou plugin)

### Page builder — Gutenberg ou équivalent
- À identifier sur le site existant avant d'écrire le moindre code
- Structure de la page : 4 blocs dans l'ordre — Hero, Texte d'introduction, Formulaire, Bloc contact
- Si Elementor ou Divi est en place, utiliser leurs widgets natifs pour la mise en page

### Formulaire — Plugin WordPress (MVP)
- Plugin à identifier parmi ceux déjà installés : Contact Form 7, WPForms, Gravity Forms
- En l'absence de plugin actif : Contact Form 7 est le choix par défaut (gratuit, natif WordPress)
- Champs du formulaire : voir `PRD.md` — section "Données collectées"
- Soumission : envoi par e-mail à l'adresse désignée par BFC (à confirmer)
- Case de consentement RGPD : obligatoire, avec lien vers la Datenschutzerklärung de BFC

### Styling — Thème BFC
- Aucune bibliothèque CSS externe ajoutée
- Toute mise en forme utilise les classes du thème WordPress existant
- Alertes et badges (V1) : classes conditionnelles du thème ou CSS inline minimal

### Tests — Playwright
- Tests E2E dans le vrai navigateur (page rendue sur l'environnement de staging ou local)
- Flux couverts : affichage de la page, soumission du formulaire, validation des champs obligatoires, consentement RGPD

### Base de données (V2) — MySQL natif WordPress
- Stockage des soumissions en base via un plugin de gestion des entrées (ex. Flamingo pour CF7, WPForms Entries, Gravity Forms Entries)
- Pas de schéma personnalisé en dehors de WordPress : migration sans reconstruction
- Export CSV des soumissions depuis l'interface d'administration WordPress

---

## Structure du projet

```
wordpress-site/
│
├── wp-content/
│   └── themes/
│       └── [theme-bfc]/              # Thème existant — NE PAS MODIFIER
│           ├── style.css
│           └── ...
│
├── pages/
│   └── talentkarte/                  # Page WordPress créée via l'admin WP
│       └── (contenu géré dans l'éditeur WordPress)
│
└── plugins/
    ├── [form-plugin]/                # Plugin formulaire existant (à identifier)
    │   └── talentkarte-form.php      # Configuration du formulaire Talentkarte
    │
    └── [entries-plugin]/             # V1 : plugin de gestion des soumissions
        └── ...
```

> La structure ci-dessus est indicative. L'emplacement réel dépend du thème et des plugins confirmés.

---

## Formulaire — Champs et validation

| Champ | Type | Obligatoire | Validation |
|---|---|---|---|
| Vorname | Text | Oui | Non vide |
| Nachname | Text | Oui | Non vide |
| Mitgliedsnummer | Text | Non | — |
| Mannschaft / Team | Text | Non | — |
| E-Mail-Adresse | Email | Oui | Format e-mail valide |
| Mein(e) Talent(e) | Checkbox (multi) | Oui | Au moins 1 sélectionné |
| Das kann ich außerdem noch gut | Textarea | Non | — |
| Ich bin vernetzt mit | Text | Non | — |
| Das mache ich beruflich | Text | Non | — |
| Mein Arbeitgeber heißt | Text | Non | — |
| Finanzielle Unterstützung | Checkbox (multi) | Non | — |
| Sonstige Bemerkungen | Textarea | Non | — |
| Dürfen wir dich kontaktieren? | Checkbox (RGPD) | Oui | Doit être coché |

---

## Roadmap technique

### MVP
- Page WordPress créée avec slug `/der-verein/talentkarte/` (à confirmer)
- Plugin de formulaire identifié et configuré avec tous les champs
- Consentement RGPD opérationnel avec lien Datenschutzerklärung BFC
- Soumission par e-mail vers l'adresse désignée par BFC
- Page ajoutée dans la navigation sous "Der Verein" (à confirmer)
- Tests Playwright : affichage, soumission valide, soumission invalide (champs obligatoires), consentement RGPD

### V1
- Plugin d'administration des soumissions installé et configuré
- Liste des soumissions consultable dans l'admin WordPress
- Export CSV des soumissions depuis l'admin
- E-mail de confirmation automatique envoyé à l'auteur de la soumission
- Tests Playwright : réception de l'e-mail de confirmation, accès admin aux entrées

### V2
- Tableau de bord interne dans l'admin WordPress : filtres par talent, équipe, statut de contact
- Validation du numéro de membre via la base d'adhésion de BFC (API ou import manuel)
- Historique des contacts ("contacté / pas encore contacté")
- Tests Playwright mis à jour pour les flux de filtrage et de gestion des entrées

---

## Commandes

```bash
# Lancer WordPress en local (si WP-CLI installé)
wp server

# Activer un plugin
wp plugin activate contact-form-7

# Exporter les soumissions (V1 — si Flamingo actif)
wp flamingo export

# Tests E2E
npx playwright test

# Tests E2E avec UI de debug
npx playwright test --ui

# Rapport des résultats Playwright
npx playwright show-report
```
