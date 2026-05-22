# BFC-Talentkarte — Suivi du projet

## ✅ Étapes réalisées

### 1. Cadrage & documentation
- Rédaction du `PRD.md` (cahier des charges complet) — structure de la page, champs du formulaire, roadmap MVP → V1 → V2
- Rédaction de l'`ARCHITECTURE.md` — stack WordPress, choix techniques, formulaire, tests Playwright
- Mise à jour de `CLAUDE.md` — instructions de travail adaptées au projet BFC-Talentkarte

### 2. Prototype HTML (MVP)
- Création de `index.html` — page standalone complète, zéro dépendance externe
- Identité visuelle BFC respectée : couleurs extraites du site réel (`#00aafb`, `#fed584`, `#0d1b2a`), fonts Ubuntu + Poppins
- Structure 4 sections : Hero → Introduction → Formulaire → Contact

### 3. Formulaire — 6 blocs complets
- **Bloc 1** — Persönliche Angaben (Vorname*, Nachname*, Mitgliedsnummer, Mannschaft, E-Mail*)
- **Bloc 2** — Mein(e) Talent(e) — 13 cases à cocher (grille 2 colonnes)
- **Bloc 3** — Weitere Infos (texte libre, réseau, profession, employeur)
- **Bloc 4** — Finanzielle Unterstützung (3 cases optionnelles)
- **Bloc 5** — Sonstige Bemerkungen (textarea libre)
- **Bloc 6** — Datenschutz & Einwilligung (case DSGVO obligatoire)

### 4. Validation côté client
- Champs obligatoires en rouge avec messages d'erreur en allemand
- Validation format e-mail
- Minimum 1 talent obligatoire
- Consentement DSGVO obligatoire
- Scroll automatique vers la première erreur
- Message de succès après soumission simulée

### 5. Tests visuels
- Vérification Playwright : hero, formulaire, validation, section contact — tous validés

### 6. Versioning & publication
- Dépôt GitHub créé : **https://github.com/mpu84hh/Freiwilliger-BFC**
- Commits : lancement initial + renommage `talentkarte.html` → `index.html`

---

## 🔜 Étapes suivantes

### À confirmer avec BFC (bloquant)
- [ ] Adresse e-mail de réception des soumissions Talentkarte
- [ ] Slug définitif de la page : `/der-verein/talentkarte/` ou `/talentkarte/` ?
- [ ] Emplacement dans la navigation : sous "Der Verein" — à valider
- [ ] URL exacte de la Datenschutzerklärung sur `buchholzerfc.com`
- [ ] Plugin formulaire actif sur le site (Contact Form 7 / WPForms / Gravity Forms)
- [ ] Page builder actif (Gutenberg / Elementor / Divi)
- [ ] Image hero fournie par BFC (ou placeholder à conserver)

### Intégration WordPress (MVP)
- [ ] Créer la page WordPress avec le bon slug
- [ ] Transcrire le formulaire en shortcode du plugin actif (CF7 ou WPForms)
- [ ] Configurer la soumission par e-mail vers l'adresse BFC
- [ ] Activer et tester la case DSGVO avec lien Datenschutzerklärung
- [ ] Ajouter la page dans la navigation sous "Der Verein"
- [ ] Vérifier le rendu responsive sur mobile et desktop

### V1 — Administration des soumissions
- [ ] Installer un plugin de gestion des entrées (Flamingo pour CF7, ou WPForms Entries)
- [ ] Configurer la vue d'administration dans WordPress
- [ ] Activer l'export CSV des soumissions
- [ ] Mettre en place l'e-mail de confirmation automatique à l'auteur

### V2 — Base de données & tableau de bord
- [ ] Stocker les soumissions en base MySQL via WordPress (CPT ou plugin dédié)
- [ ] Tableau de bord interne : filtres par talent, équipe, statut de contact
- [ ] Validation du numéro de membre via le système d'adhésion BFC
- [ ] Historique des contacts ("contacté / pas encore contacté")

---

*Dernière mise à jour : 2026-05-22*
