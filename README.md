# DONKO DEUTSCHLAND BERUF 🇧🇯 🇩🇪

**DONKO DEUTSCHLAND BERUF** est une application web vitrine — un **Warehouse Management System (WMS)** simulé, contenu dans un **fichier unique et autonome** (`index.html`, Tailwind CSS + JavaScript natif). Elle réunit mes compétences en gestion (Bac B), cloud AWS et développement logiciel, au service de ma préparation à un **Ausbildung en logistique en Allemagne**.

* **Démo live :** [https://donko-dev.github.io/Donko-Deutschland-Beruf/](https://donko-dev.github.io/Donko-Deutschland-Beruf/)
* **Interface :** 100 % bilingue Français / Deutsch, bascule instantanée sans rechargement
* **Stack :** HTML5 · Tailwind CSS (CDN) · JavaScript vanilla — aucune dépendance, aucun build

---

## 🎯 Mon plan de carrière (du Bénin à l'Allemagne)

1. **Préparation linguistique et académique (2026-2027) :** allemand intensif à la FLLAC (UAC) et au laboratoire de la Fondation Vallet (Bénin Excellence), Cotonou.
2. **Certification :** examen officiel ÖSD (niveau visé B1/B2) chez *Spass mit Deutsch*, Abomey-Calavi.
3. **Ausbildung en Allemagne :** intégration comme **Fachkraft für Lagerlogistik** ou **Fachlagerist** — un secteur exigeant rigueur et précision, avec une communication orale quotidienne réduite.
4. **Avenir entrepreneurial :** création d'une **UG (haftungsbeschränkt)** en Allemagne pour porter mes logiciels déjà en service au Bénin (système de facturation/caisse, marketplace e-commerce) sur le marché européen.

---

## 🛠️ Modules de l'application

| Module | Logique démontrée | Fonctionnement |
|---|---|---|
| **A — Stocks & marges** | Bac B (gestion) | Ajout de produits, calcul en temps réel du prix de revient, de la marge (€ et %) et alerte visuelle de rupture critique |
| **B — Placement virtuel** | Logistique « Zero Communication » | Formulaire de scan (poids + catégorie) → algorithme JS qui choisit et illumine la case optimale de la grille d'entrepôt, sans intervention humaine |
| **C — Architecture cloud** | AWS Cloud Practitioner | Schéma SVG interactif : **S3** (archives PDF), **RDS PostgreSQL** (base d'inventaire), **Lambda** (calcul planifié des marges) |

---

## 📲 Progressive Web App (PWA)

L'application est installable et fonctionne **100% hors ligne** après le premier chargement :

* **Installation :** un bouton "Installer" apparaît automatiquement dans l'en-tête (Chrome/Edge/Android). Sur iPhone/iPad (Safari) : bouton *Partager* → *Sur l'écran d'accueil*.
* **Hors ligne :** un service worker met en cache toutes les ressources (page, polices, styles, icônes) dès la première visite. Un badge "Hors ligne" apparaît dans l'en-tête quand la connexion est coupée — l'application reste pleinement utilisable.
* **Fichiers requis** (à conserver à la racine, à côté de `index.html`) :
  * `manifest.json` — nom, icônes et couleurs de l'application installée
  * `sw.js` — service worker (mise en cache et mode hors ligne)
  * `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` — icônes de l'application

⚠️ Le premier chargement nécessite une connexion internet (pour récupérer Tailwind CSS et les polices Google Fonts). Ensuite, l'application reste utilisable hors ligne tant que le cache du navigateur n'est pas vidé manuellement.

---

## 🚀 Utilisation

Aucune installation requise :

1. Téléchargez `index.html`
2. Ouvrez-le dans n'importe quel navigateur — ou déployez-le tel quel sur **GitHub Pages**

```bash
git clone https://github.com/votre-pseudo/donko-deutschland-beruf.git
cd donko-deutschland-beruf
open index.html   # ou double-clic sur le fichier
```

---

## 📞 Contact

* **WhatsApp :**
  * [+229 01 96 80 91 06](https://wa.me/22901968091)
  * [+229 01 49 10 57 85](https://wa.me/22901491057)
* **E-mail :**
  * [empiredonko@gmail.com](mailto:empiredonko@gmail.com)
  * [hassanedonko9@gmail.com](mailto:hassanedonko9@gmail.com)
  * [hassanedonko10@gmail.com](mailto:hassanedonko10@gmail.com)

---

## 🇩🇪 Deutsche Version (Zusammenfassung)

**DONKO DEUTSCHLAND BERUF** ist eine Schaufenster-Webanwendung, die ein Lagerverwaltungssystem (WMS) simuliert — vollständig in einer einzigen `index.html`-Datei (Tailwind CSS + natives JavaScript, ohne Build-Prozess). Sie vereint meine kaufmännische Ausbildung (Bac B, 2020), meine AWS-Cloud-Kenntnisse (**AWS Certified Cloud Practitioner**, April 2026) und meine Programmierfähigkeiten.

**Module:**
- **Bestands- & Margenverwaltung** — Echtzeitberechnung von Selbstkosten, Gewinnspanne und kritischen Bestandswarnungen
- **Virtueller Platzierungsalgorithmus** — simuliert die automatische Einlagerung von Paketen nach dem „Zero Communication“-Prinzip
- **Simulierte AWS-Architektur** — S3 (Archivierung), RDS PostgreSQL (Bestandsdatenbank), Lambda (geplante Margenberechnung)

**Karriereplan:** Deutschkurse an der FLLAC (UAC) und im Sprachlabor der Vallet-Stiftung in Cotonou, ÖSD-Prüfung bei *Spass mit Deutsch*, anschließend eine **Ausbildung in der Lagerlogistik** in Deutschland. Langfristiges Ziel: Gründung einer **UG (haftungsbeschränkt)**, um meine bereits im Benin betriebenen Anwendungen (Rechnungs-/Kassensystem, Marketplace) auf dem europäischen Markt anzubieten.

---

*Projekt erstellt zur Bewerbung um einen Ausbildungsplatz in Deutschland · Cotonou, Benin · 2026*
