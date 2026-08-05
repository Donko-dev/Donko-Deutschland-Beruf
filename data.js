/* ==========================================================================
   DONKO DEUTSCHLAND BERUF — data.js
   --------------------------------------------------------------------------
   Ce fichier contient le contenu modifiable du site : identité, contacts,
   liens, couleurs, sections activées/désactivées et la liste des
   applications de l'écosystème.

   ⚠️ NE PAS SUPPRIMER LA LIGNE "window.SITE_DATA = " — index.html en dépend.

   Pour modifier ce contenu SANS toucher au code : utilisez admin.html
   (outil local, non déployé sur GitHub) qui permet d'éditer chaque champ
   puis de télécharger une nouvelle version de ce fichier à téléverser ici.
   ========================================================================== */

window.SITE_DATA = {

  identity: {
    siteName: "DONKO DEUTSCHLAND BERUF",
    photoName: "Hassane DONKO"
  },

  contacts: {
    whatsappBusiness: { number: "+229 01 96 80 91 06", link: "https://wa.me/22901968091" },
    whatsappMessenger: { number: "+229 01 49 10 57 85", link: "https://wa.me/22901491057" },
    emails: [
      "empiredonko@gmail.com",
      "hassanedonko9@gmail.com",
      "hassanedonko10@gmail.com"
    ]
  },

  socialLinks: {
    portfolio: "https://donko-dev.github.io/empirecode/",
    github: "https://github.com/Donko-dev",
    linkedin: "https://linkedin.com/in/hassane-donko-1438b8358"
  },

  colors: {
    amber: "#F2B705",
    steel: "#3E7CB1",
    amberLight: "#B8790A",
    steelLight: "#2C5F86"
  },

  sections: {
    moduleA: true,
    moduleB: true,
    moduleC: true,
    portfolio: true,
    ecosystem: true,
    cv: true,
    gallery: true
  },

  apps: [
    {
      id: "donko-ads",
      name: "DONKO ADS",
      url: "https://donko-dev.github.io/DONKO-ADS/",
      logo: "logo-donko-ads.png",
      fallbackLetter: "D", fallbackBg: "#141B2E", fallbackFg: "#E8A93A",
      ctaStyle: "amber",
      tag: { fr: "Marketplace & visibilité", de: "Marktplatz & Sichtbarkeit" },
      desc: {
        fr: "Plateforme de petites annonces pour publier boutiques et produits en un clic, avec une visibilité mondiale.",
        de: "Kleinanzeigen-Plattform, um Shops und Produkte mit einem Klick zu veröffentlichen — mit weltweiter Sichtbarkeit."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "kalcul",
      name: "KALCUL",
      url: "https://donko-dev.github.io/Kalcul-pro/",
      logo: "logo-kalcul.png",
      fallbackLetter: "K", fallbackBg: "#1B3A5C", fallbackFg: "#C9971F",
      ctaStyle: "outline",
      tag: { fr: "Caisse & gestion hors ligne", de: "Kasse & Offline-Verwaltung" },
      desc: {
        fr: "Application de caisse, stock, factures et devis, 100% hors ligne, avec calcul automatique des marges et données conservées sur l'appareil.",
        de: "Kassen-, Bestands-, Rechnungs- und Angebots-App, zu 100% offline nutzbar, mit automatischer Margenberechnung und Daten, die auf dem Gerät bleiben."
      },
      cta: { fr: "Tester gratuitement →", de: "Kostenlos testen →" }
    },
    {
      id: "smart-logistics",
      name: "Smart Logistics",
      url: "https://donko-dev.github.io/smartlogistics/",
      logo: "logo-smartlogistics.png",
      fallbackLetter: "S", fallbackBg: "#16241C", fallbackFg: "#E8A93A",
      ctaStyle: "outline",
      tag: { fr: "Logistique numérique offline", de: "Digitale Logistik offline" },
      desc: {
        fr: "Gestion numérique de la logistique — suivi des flux, des stocks et des expéditions, 100% utilisable hors connexion.",
        de: "Digitale Logistikverwaltung — Nachverfolgung von Warenflüssen, Beständen und Sendungen, zu 100% offline nutzbar."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "clipsafe",
      name: "ClipSafe",
      url: "https://donko-dev.github.io/clipsafe/",
      logo: "logo-clipsafe.png",
      fallbackLetter: "C", fallbackBg: "#241B14", fallbackFg: "#C9971F",
      ctaStyle: "outline",
      tag: { fr: "Gestion documentaire offline", de: "Dokumentenverwaltung offline" },
      desc: {
        fr: "Suivi intelligent des prêts de documents papier — qui a emprunté quoi, quand et pour combien de temps — 100% hors connexion.",
        de: "Intelligente Nachverfolgung von Papierdokument-Ausleihen — wer was wann und für wie lange ausgeliehen hat — zu 100% offline."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "bruckedeoffline",
      name: "BrückeDE Offline",
      url: "https://donko-dev.github.io/bruckedeoffline/",
      logo: "logo-bruckedeoffline.png",
      fallbackLetter: "B", fallbackBg: "#141B2E", fallbackFg: "#E8A93A",
      ctaStyle: "outline",
      tag: { fr: "Apprentissage de l'allemand offline", de: "Deutsch lernen offline" },
      desc: {
        fr: "Cours et exercices de langue allemande, consultables sans connexion internet — pour progresser vers l'ÖSD partout, même sans réseau.",
        de: "Deutschkurse und Übungen, ohne Internetverbindung abrufbar — um überall auf die ÖSD-Prüfung hinzuarbeiten, auch ohne Netz."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "donko-app",
      name: "Donko App",
      url: "https://donko-dev.github.io/donko-app",
      logo: "donko-app.jpg",
      fallbackLetter: "DA", fallbackBg: "#241B14", fallbackFg: "#C9971F",
      ctaStyle: "outline",
      tag: { fr: "Application DONKO", de: "DONKO-Anwendung" },
      desc: {
        fr: "Application compagnon de l'écosystème DONKO, réunissant plusieurs outils métiers dans une interface unique.",
        de: "Begleit-App des DONKO-Ökosystems, die mehrere Business-Tools in einer einzigen Oberfläche vereint."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "web-to-apk",
      name: "Web-To-Apk",
      url: "https://donko-dev.github.io/Web-To-Apk",
      logo: "web-to-apk.jpg",
      fallbackLetter: "WA", fallbackBg: "#141B2E", fallbackFg: "#E8A93A",
      ctaStyle: "outline",
      tag: { fr: "Outil de conversion", de: "Konvertierungstool" },
      desc: {
        fr: "Outil de conversion d'applications web en fichiers APK Android, pour distribuer facilement mes outils sur mobile.",
        de: "Tool zur Umwandlung von Webanwendungen in Android-APK-Dateien, um meine Tools einfach mobil zu verbreiten."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "lucky-popcorn",
      name: "Lucky Popcorn",
      url: "https://donko-dev.github.io/LUCKY-POPCORN",
      logo: "lucky-popcorn.jpg",
      fallbackLetter: "LP", fallbackBg: "#241B14", fallbackFg: "#C9971F",
      ctaStyle: "outline",
      tag: { fr: "Application ludique", de: "Unterhaltungs-App" },
      desc: {
        fr: "Application ludique développée pour explorer l'interaction utilisateur et la gamification côté front-end.",
        de: "Spielerische Anwendung zur Erprobung von Nutzerinteraktion und Gamification im Frontend."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "agbelealafia",
      name: "Cabinet Agbélé-Alafia",
      url: "https://agbelealafia.github.io/Agb-l-Alafia/",
      logo: "agbelealafia.jpg",
      logoWhiteBg: true,
      fallbackLetter: "AA", fallbackBg: "#16241C", fallbackFg: "#3FB27F",
      ctaStyle: "outline",
      tag: { fr: "Site vitrine santé naturelle", de: "Naturheilkunde-Website" },
      desc: {
        fr: "Site vitrine développé pour un cabinet de Cotonou spécialisé dans les compléments nutritionnels naturels, axés sur la fertilité et le bien-être.",
        de: "Schaufenster-Website für ein Cabinet in Cotonou, spezialisiert auf natürliche Nahrungsergänzungsmittel für Fruchtbarkeit und Wohlbefinden."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "gemini-ai-prompts",
      name: "Gemini AI Prompts",
      url: "https://geminiaiprompts.webcrafthd.com",
      logo: "geminiaiprompts.jpg",
      fallbackLetter: "AI", fallbackBg: "#141B2E", fallbackFg: "#E8A93A",
      ctaStyle: "outline",
      tag: { fr: "Automatisation IA", de: "KI-Automatisierung" },
      desc: {
        fr: "Bibliothèque de prompts et de workflows pilotés par l'IA (Gemini), utilisés pour automatiser mes développements.",
        de: "Bibliothek von Prompts und KI-gesteuerten Workflows (Gemini), die meine Entwicklungsarbeit automatisieren."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "tickets-wifi-zone",
      name: "Tickets WiFi Zone",
      url: "https://ticketswifizone.webcrafthd.com",
      logo: "ticketswifizone.jpg",
      fallbackLetter: "TW", fallbackBg: "#241B14", fallbackFg: "#C9971F",
      ctaStyle: "outline",
      tag: { fr: "Réseau & accès", de: "Netzwerk & Zugang" },
      desc: {
        fr: "Portail captif Wi-Fi avec billetterie algorithmique pour le contrôle d'accès réseau, développé pour WebCraft HD.",
        de: "Wi-Fi-Captive-Portal mit algorithmischem Ticketsystem zur Zugangskontrolle, entwickelt für WebCraft HD."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "donkoexchange",
      name: "DonkoExchange",
      url: "https://donkoexchange.webcrafthd.com",
      logo: "donkoexchange.jpg",
      fallbackLetter: "DX", fallbackBg: "#16241C", fallbackFg: "#3E7CB1",
      ctaStyle: "outline",
      tag: { fr: "Fintech & Web3", de: "Fintech & Web3" },
      desc: {
        fr: "Passerelle d'échange crypto opérationnelle, automatisant les échanges d'actifs numériques pour les utilisateurs.",
        de: "Operative Krypto-Wechselplattform, die den Austausch digitaler Vermögenswerte für Nutzer automatisiert."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "ramacouture",
      name: "Rama Bazin & Couture",
      url: "https://donko-dev.github.io/ramacouture/",
      logo: "ramacouture.jpg",
      fallbackLetter: "RC", fallbackBg: "#241B14", fallbackFg: "#C9971F",
      ctaStyle: "outline",
      tag: { fr: "Mode & couture", de: "Mode & Schneiderei" },
      desc: {
        fr: "Atelier de vente de bazin et de couture générale, avec présentation des créations et prise de contact en ligne.",
        de: "Atelier für Bazin-Stoffe und allgemeine Schneiderei, mit Präsentation der Kreationen und Online-Kontaktaufnahme."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "possiblevideographie",
      name: "Possible Vidéographie",
      url: "https://donko-dev.github.io/possiblevideographie/",
      logo: "possiblevideographie.jpg",
      logoWhiteBg: true,
      fallbackLetter: "PV", fallbackBg: "#141B2E", fallbackFg: "#3E7CB1",
      ctaStyle: "outline",
      tag: { fr: "Vidéaste & montage", de: "Videograf & Schnitt" },
      desc: {
        fr: "Site vitrine d'un vidéaste (cadreur et monteur) présentant ses réalisations et ses services de production vidéo.",
        de: "Schaufenster-Website eines Videografen (Kameramann und Cutter) mit seinen Arbeiten und Videoproduktionsdiensten."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    },
    {
      id: "zakari-gruppe",
      name: "Zakari Gruppe",
      url: "https://donko-dev.github.io/ZAKARI-GRUPPE/",
      logo: "zakari-gruppe.jpg",
      fallbackLetter: "ZG", fallbackBg: "#0B0F14", fallbackFg: "#C9971F",
      ctaStyle: "outline",
      tag: { fr: "Véhicules & nettoyage", de: "Fahrzeuge & Reinigung" },
      desc: {
        fr: "Entreprise proposant la vente de véhicules neufs et d'occasion ainsi que des services de nettoyage de biens immobiliers.",
        de: "Unternehmen für den Verkauf von Neu- und Gebrauchtfahrzeugen sowie Reinigungsdienstleistungen für Immobilien."
      },
      cta: { fr: "Voir la démo live →", de: "Live-Demo ansehen →" }
    }
  ]

};
