# Cabinet Agbélé - Alafia — Guide du site (v3)

## ⚠️ Le plus important, avant tout

Vous avez reçu **trois fichiers séparés** :

1. **`agbele-alafia-SITE-LEGER-sans-videos.zip`** (2,2 Mo) → le site complet sans les vidéos, pour GitHub.
2. **`agbele-alafia-miniatures-videos.zip`** (433 Ko) → les petites images d'aperçu de vos 17 vidéos, pour GitHub.
3. **`admin.html`** → votre outil personnel. **Ne le déposez jamais sur GitHub.** Gardez-le sur votre ordinateur (ou téléphone), à l'écart des autres fichiers.

Les 17 vidéos elles-mêmes ne sont pas dans un zip cette fois (trop lourd pour se décompresser sur mobile) — vous les avez déjà sur votre téléphone, voir Étape B ci-dessous.

---

## 1. Déployer le site sur GitHub (méthode allégée)

Le gros zip précédent (96 Mo) posait problème à la décompression sur mobile — voici une méthode bien plus légère, en deux temps.

### Étape A — Le site (2,2 Mo, sans les vidéos)
1. Dézippez **`agbele-alafia-SITE-LEGER-sans-videos.zip`** — ça doit fonctionner sans problème, même sur téléphone (32 fichiers, 2,2 Mo).
2. Sur GitHub, supprimez les anciens fichiers puis **Add file → Upload files**, glissez le dossier dézippé entier.
3. **Commit changes.**

### Étape B — Les vidéos, directement depuis votre téléphone
Vous avez déjà ces 17 vidéos sur votre téléphone (WhatsApp/Galerie) — inutile de les re-télécharger depuis moi. Renommez-les avec ces noms exacts, puis déposez-les sur GitHub à cette adresse :
`https://github.com/agbelealafia/Agb-l-Alafia/upload/main/videos`

| Fichier original que vous avez envoyé | Nom exact à lui donner |
|---|---|
| VID-20260730-WA0051.mp4 | `VID-20260730-WA0051.mp4` |
| VID-20260730-WA0052.mp4 | `VID-20260730-WA0052.mp4` |
| VID-20260730-WA0053.mp4 | `VID-20260730-WA0053.mp4` |
| VID-20260730-WA0054.mp4 | `VID-20260730-WA0054.mp4` |
| VID-20260730-WA0055.mp4 | `VID-20260730-WA0055.mp4` |
| VID-20260730-WA0056.mp4 | `VID-20260730-WA0056.mp4` |
| VID-20260801-WA0038.mp4 | `VID-20260801-WA0038.mp4` |
| VID-20260801-WA0041.mp4 | `VID-20260801-WA0041.mp4` |
| VID-20260801-WA0042.mp4 | `VID-20260801-WA0042.mp4` |
| VID-20260801-WA0043.mp4 | `VID-20260801-WA0043.mp4` |
| VID-20260801-WA0044.mp4 | `VID-20260801-WA0044.mp4` |
| VID-20260801-WA0045.mp4 | `VID-20260801-WA0045.mp4` |
| VID-20260801-WA0046.mp4 | `VID-20260801-WA0046.mp4` |
| VID-20260801-WA0047.mp4 | `VID-20260801-WA0047.mp4` |
| VID-20260801-WA0048.mp4 | `VID-20260801-WA0048.mp4` |
| VID-20260801-WA0049.mp4 | `VID-20260801-WA0049.mp4` |
| VID-20260801-WA0050.mp4 | `VID-20260801-WA0050.mp4` |

*(Bonne nouvelle : si vous me les avez envoyés depuis WhatsApp sans les renommer vous-même, ils portent probablement déjà exactement ces noms sur votre téléphone — vérifiez juste avant de déposer.)*

### Étape C — Les miniatures des vidéos (433 Ko)
Dézippez **`agbele-alafia-miniatures-videos.zip`** (léger, un dossier `videos/` avec 17 petites images) et déposez son contenu à la **même adresse** que l'étape B (`.../upload/main/videos`), en même temps que les vidéos ou juste après. Ces miniatures s'affichent avant que le visiteur n'appuie sur ▶️.

➡️ Une fois les 3 étapes faites, le dossier `videos/` sur GitHub doit contenir 34 fichiers (17 vidéos + 17 miniatures).

---

## 2. Ce qui a changé cette fois-ci

### 🎬 Vidéos natives, lecture sur place
Vos vidéos ne pointent plus vers Facebook : elles sont **hébergées directement par votre site**. Chaque vidéo affiche un simple bouton ▶️ qui devient ⏸️ pendant la lecture — sans quitter la page, sans lecteur Facebook. Une fois qu'une vidéo a été lue une première fois, elle reste disponible hors-ligne sur cet appareil. **17 vidéos** sont en place (vos 6 premières + les 11 nouveaux témoignages).

### 💬 Témoignages écrits
Une nouvelle sous-section « Ils nous ont écrit » reprend deux témoignages réels que vous avez partagés (reformulés honnêtement comme des messages reçus, sans invention), accompagnés de la photo des jumeaux et de celle de vos flacons.

**Sur les témoignages fabriqués :** vous m'avez demandé d'inventer 10 citations avec noms et pays inventés — je ne l'ai pas fait. Les faux avis clients sont interdits par la loi dans la plupart des pays, et c'est encore plus délicat pour des décisions de santé. Si vous voulez plus de témoignages, le plus solide est de les demander à de vraies clientes. Un modèle de message à leur envoyer :

> *Bonjour [Prénom], je prépare le site internet d'Agbélé-Alafia et j'aimerais partager votre expérience pour aider d'autres personnes. Accepteriez-vous que je publie une courte phrase de votre part (avec votre prénom/ville, ou vos initiales) ? Merci 🙏*

Envoyez-moi leurs réponses et je les ajoute directement.

### 🖼️ Nouvelle page « Nos Gammes » (`galerie.html`)
Vos 6 affiches produits (Prostate & Diabète, Dégraisseur, Fertilité Femme, Hémophar, Assurance Foyer, Infections) sont présentées avec titre et description, gérables une par une depuis l'admin.

### 📖 Nouvelle page « Historique & Origine » (`historique.html`)
La page existe et affiche pour l'instant un message d'attente, **car je n'ai pas encore votre photo ni votre texte**. Dès que vous me donnez : le nom du fondateur/de la fondatrice, son rôle, son origine, une photo, et le récit de la création d'Agbélé-Alafia, j'intègre le tout — ou vous pouvez le faire vous-même dans l'admin puis me demander de vérifier.

### ➕🗑️ Ajouter / supprimer, partout où ça a du sens
Dans `admin.html`, les **vidéos**, les **témoignages écrits** et les **gammes (affiches)** ont chacun un bouton **➕ Ajouter** et un bouton **🗑️ Supprimer** par élément. Chaque section principale (Solutions, Fertilité, Infections, Vidéos) a aussi un **interrupteur pour l'afficher ou la masquer** entièrement du site, sans rien supprimer.

### 🖼️ Logo et images pilotables
Dans l'admin, une section « Images principales » indique quel fichier utiliser pour le logo, la photo Fertilité et l'illustration Solutions. Remplacez le fichier sur GitHub **en gardant le même nom** pour changer l'image sans toucher au code.

---

## 3. Une limite honnête sur « tout contrôler depuis l'admin, pour toujours »

Vous avez demandé que l'admin permette aussi de changer les **couleurs, polices, gras/italique, et la position des sections/boutons** — sans jamais revenir au code. Je vous dois une réponse franche : **ce n'est pas raisonnable sur l'architecture actuelle** (un site fait de fichiers simples, sans logiciel installé sur un serveur), et prétendre le construire quand même produirait quelque chose de fragile et plein de bugs — l'inverse de ce que vous demandez.

Ce que l'admin contrôle réellement, aujourd'hui, sans jamais toucher au code : tous les textes, les numéros et liens de contact, l'activation/désactivation de sections entières, l'ajout/suppression de vidéos, témoignages et gammes, et le choix des images. C'est déjà un contrôle très large. Pour un vrai éditeur visuel (glisser-déposer, couleurs, polices), il faudrait changer de technologie (un CMS avec un serveur, comme WordPress) — dites-moi si c'est une direction qui vous intéresse pour une prochaine étape, ce sera un projet à part entière.

---

## 4. Sur les autres photos que vous avez envoyées

Pour rappel de ce qui a déjà été discuté : je n'ai pas utilisé les gros plans médicaux explicites, les captures WhatsApp privées non reformulées, l'étiquette d'expédition avec adresse complète, le produit Le Takpo, ni les produits **Folio** (marque pharmaceutique allemande réelle, sans lien avec vous — je ne peux pas la présenter comme la vôtre) ni les échographies (documents portant le nom d'une vraie clinique qui n'a pas donné son accord). Si vous voulez revenir sur l'un de ces points avec plus de contexte, je reste à l'écoute.

---

## 5. Modifier le contenu (rappel du principe)

`admin.html` (en local) → modifier/ajouter/supprimer/activer → **Télécharger data.json** → remplacer `data.json` sur GitHub → Commit. Le changement est visible par tous vos visiteurs en une à deux minutes.
