# BFC-Talentkarte — Cahier des charges

## Contexte

Page web intégrée au site existant du **Buchholzer Fußball Club e.V.** (`https://buchholzerfc.com/`). L'objectif est de permettre aux membres et sympathisants du club de signaler bénévolement leurs talents, compétences et disponibilités, afin que le club puisse solliciter leur aide de façon ciblée pour les tâches associatives du quotidien.

La page est modélisée sur la **BU-Talentkarte** de HSV Barmbek-Uhlenhorst (`https://www.hsv-bu.de/talentkarte`), adaptée à l'identité visuelle et au contenu de BFC.

---

## Objectif principal

Mettre en place un formulaire numérique simple permettant à chaque membre ou sympathisant de BFC de **déclarer volontairement ses talents** — qu'il s'agisse de cuisiner un gâteau, d'aider lors d'un événement, de connaître quelqu'un pour un poste d'entraîneur, ou de proposer un soutien financier — afin de constituer une **base de données interne des ressources bénévoles** du club.

---

## Données collectées

- **Identité** : Prénom, Nom, Numéro de membre (facultatif), Équipe / Team (facultatif)
- **Contact** : Adresse e-mail
- **Talents** : Sélection multiple parmi une liste de propositions (cases à cocher)
- **Compétences libres** : Champ texte "Das kann ich außerdem noch gut"
- **Réseau** : Champ texte "Ich bin vernetzt mit"
- **Profession** : Champ texte "Das mache ich beruflich" + "Mein Arbeitgeber heißt"
- **Soutien financier** : Sélection multiple (cases à cocher)
- **Remarques** : Champ texte libre "Sonstige Bemerkungen"
- **Consentement RGPD** : Case à cocher obligatoire

---

## Talents proposés — Liste des cases à cocher

| # | Libellé (adapté BFC) |
|---|---|
| 1 | Einen Kuchen backen? - Fragt mich ruhig. |
| 2 | Ich verkaufe gern Kuchen oder Getränke beim nächsten Vereinsfest. |
| 3 | Grillen macht mir großen Spaß! |
| 4 | Ich bin künstlerisch/gestalterisch begabt. |
| 5 | Auf- und Abbau bei Events - voll mein Ding! |
| 6 | Ich organisiere gerne Feste und Feiern. |
| 7 | Mein Garten genügt mir nicht. Bei Gartenarbeit rund ums Stadion bin ich dabei. |
| 8 | Ich kenne jemanden, der/die vielleicht einen Trainerposten übernehmen würde. |
| 9 | Ich kenne jemanden, der/die tagsüber ein bisschen Zeit hat und eine Schul-AG im Ganztagsangebot übernehmen würde. |
| 10 | Ich kenne mich mit rechtlichen Fragen gut aus. |
| 11 | Zahlen & Steuern bringen mich nicht zum schwitzen. |
| 12 | Handwerk? Einfach machen. |
| 13 | Helfende Hand an Heimspieltagen im Stadion - Hier bin ich! |

> ⚠️ Toutes les occurrences de "BU" dans les libellés originaux ont été remplacées par "BFC".

---

## Soutien financier — Liste des cases à cocher

| # | Libellé (adapté BFC) |
|---|---|
| 1 | Ich bin verantwortlich für ein Unternehmen und kann mir vorstellen, BFC mit einem Sponsoring oder einer Spende zu unterstützen. Kontaktiert mich gern für weitere Infos! |
| 2 | Ich bin bereit, die zuständige Person bei meinem Arbeitgeber zu fragen, ob ein Sponsoring oder eine Spende denkbar ist. |
| 3 | Ich bin bereit, eine freiwillige und regelmäßige Spende für BFC zu leisten. Lasst mich wissen, wie wir damit vorgehen sollen. |

---

## Structure de la page

La page est composée de **quatre sections** dans l'ordre suivant :

```
Hero / Titre  →  Texte d'introduction  →  Formulaire  →  Bloc contact
```

### Section 1 — Hero
- Image de bannière pleine largeur (à fournir par BFC)
- Titre principal : **DIE BFC-TALENTKARTE**
- Sous-titre : **DEIN TALENT FÜR BFC!**

### Section 2 — Texte d'introduction
Texte court expliquant le concept : tout le monde peut contribuer avec son temps, ses idées et ses talents personnels. Copie finale à valider dans `CONTENT.md`.

### Section 3 — Formulaire
- Tous les champs listés ci-dessus dans **Données collectées**
- Case de consentement RGPD avec lien vers la Datenschutzerklärung de BFC (URL à confirmer)
- Bouton de soumission : **Absenden**

### Section 4 — Bloc contact
- Nom du club : Buchholzer Fußball Club e.V.
- Adresse : à confirmer depuis `https://buchholzerfc.com/der-verein/kontakt/`
- Lien vers la page de contact BFC

---

## Roadmap

### 🚀 MVP — "La page existe et fonctionne"
> Objectif : une page opérationnelle intégrée au site BFC dès la première livraison

- [ ] Page WordPress créée avec le bon slug (`/der-verein/talentkarte/` — à confirmer)
- [ ] Hero image + titre + texte d'introduction
- [ ] Formulaire avec tous les champs et cases à cocher
- [ ] Consentement RGPD opérationnel avec lien Datenschutzerklärung
- [ ] Soumission du formulaire par e-mail vers l'adresse désignée par BFC
- [ ] Page intégrée dans la navigation de BFC (sous "Der Verein" — à confirmer)
- [ ] Responsive desktop et mobile, cohérent avec l'identité visuelle du site

---

### V1 — "C'est agréable à gérer"
> Objectif : faciliter le traitement des réponses reçues

- [ ] Vue d'administration des soumissions (liste des réponses dans WordPress ou Google Sheets)
- [ ] Export CSV des soumissions
- [ ] Filtre par talent ou par type de soutien
- [ ] Notification e-mail automatique de confirmation à l'auteur de la soumission

---

### V2 — "C'est puissant"
> Objectif : croiser les données bénévoles avec les besoins du club

- [ ] Base de données des talents (remplace le simple envoi e-mail)
- [ ] Validation du numéro de membre via le système d'adhésion de BFC
- [ ] Tableau de bord interne : qui peut quoi, qui n'a pas encore été contacté
- [ ] Filtre par équipe / secteur de bénévolat

---

### 🔭 Hors périmètre — "À revisiter"
> À considérer si les besoins du club évoluent

- Espace membre privé avec profil de talent modifiable
- Notification automatique quand un besoin correspond à un talent enregistré
- Intégration avec un outil de gestion associative existant (ClubDesk, Vereinsflieger, etc.)
- Multilingue (DE / TR / autres selon la composition du club)

---

## Contraintes techniques

- **CMS** : WordPress — la page doit être construite nativement dans WordPress (Gutenberg ou page builder déjà en place sur le site)
- **Formulaire** : utiliser le plugin WordPress déjà actif sur le site (Contact Form 7 / WPForms / Gravity Forms — à identifier avant implémentation)
- **RGPD** : la case de consentement est obligatoire ; les données ne doivent pas être transmises à des tiers ni utilisées à des fins publicitaires
- **Pas de gestion multi-utilisateurs** dans un premier temps
- **Interface responsive** : desktop prioritaire, mobile agréable — cohérent avec le comportement existant de `buchholzerfc.com`
- **Langue** : allemand (`de_DE`) intégralement
