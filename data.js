/* ==========================================================================
   DONKO DEUTSCHLAND BERUF — data.js
   --------------------------------------------------------------------------
   Ce fichier contient le contenu modifiable du site : identité, contacts,
   liens, couleurs, sections activées/désactivées, textes et applications.

   ⚠️ NE PAS SUPPRIMER LA LIGNE "window.SITE_DATA = " — index.html en dépend.

   Pour modifier ce contenu SANS toucher au code : utilisez admin.html
   (outil local, non déployé sur GitHub).
   ========================================================================== */

window.SITE_DATA = {

  identity: {
    "siteName": "DONKO DEUTSCHLAND BERUF",
    "photoName": "Hassane DONKO"
  },

  contacts: {
    "whatsappBusiness": {
      "number": "+229 01 96 80 91 06",
      "link": "https://wa.me/22901968091"
    },
    "whatsappMessenger": {
      "number": "+229 01 49 10 57 85",
      "link": "https://wa.me/22901491057"
    },
    "emails": [
      "empiredonko@gmail.com",
      "hassanedonko9@gmail.com",
      "hassanedonko10@gmail.com"
    ]
  },

  socialLinks: {
    "portfolio": "https://donko-dev.github.io/empirecode/",
    "github": "https://github.com/Donko-dev",
    "linkedin": "https://linkedin.com/in/hassane-donko-1438b8358"
  },

  colors: {
    "amber": "#f2b705",
    "amberLight": "#b8790a",
    "steel": "#3e7cb1",
    "steelLight": "#2c5f86"
  },

  sections: {
    "moduleA": true,
    "moduleB": true,
    "moduleC": true,
    "portfolio": true,
    "ecosystem": true,
    "cv": true,
    "gallery": true
  },

  apps: [
    {
      "id": "donko-ads",
      "name": "DONKO ADS",
      "url": "https://donko-dev.github.io/DONKO-ADS/",
      "logo": "logo-donko-ads.png",
      "fallbackLetter": "D",
      "fallbackBg": "#141B2E",
      "fallbackFg": "#E8A93A",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Marketplace & visibilité",
        "de": "Marktplatz & Sichtbarkeit"
      },
      "desc": {
        "fr": "Plateforme de petites annonces pour publier boutiques et produits en un clic, avec une visibilité mondiale.",
        "de": "Kleinanzeigen-Plattform, um Shops und Produkte mit einem Klick zu veröffentlichen — mit weltweiter Sichtbarkeit."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "kalcul",
      "name": "KALCUL",
      "url": "https://donko-dev.github.io/Kalcul-pro/",
      "logo": "logo-kalcul.png",
      "fallbackLetter": "K",
      "fallbackBg": "#1B3A5C",
      "fallbackFg": "#C9971F",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Caisse & gestion hors ligne",
        "de": "Kasse & Offline-Verwaltung"
      },
      "desc": {
        "fr": "Application de caisse, stock, factures et devis, 100% hors ligne, avec calcul automatique des marges et données conservées sur l'appareil.",
        "de": "Kassen-, Bestands-, Rechnungs- und Angebots-App, zu 100% offline nutzbar, mit automatischer Margenberechnung und Daten, die auf dem Gerät bleiben."
      },
      "cta": {
        "fr": "Tester gratuitement →",
        "de": "Kostenlos testen →"
      }
    },
    {
      "id": "smart-logistics",
      "name": "Smart Logistics",
      "url": "https://donko-dev.github.io/smartlogistics/",
      "logo": "logo-smartlogistics.png",
      "fallbackLetter": "S",
      "fallbackBg": "#16241C",
      "fallbackFg": "#E8A93A",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Logistique numérique offline",
        "de": "Digitale Logistik offline"
      },
      "desc": {
        "fr": "Gestion numérique de la logistique — suivi des flux, des stocks et des expéditions, 100% utilisable hors connexion.",
        "de": "Digitale Logistikverwaltung — Nachverfolgung von Warenflüssen, Beständen und Sendungen, zu 100% offline nutzbar."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "clipsafe",
      "name": "ClipSafe",
      "url": "https://donko-dev.github.io/clipsafe/",
      "logo": "logo-clipsafe.png",
      "fallbackLetter": "C",
      "fallbackBg": "#241B14",
      "fallbackFg": "#C9971F",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Gestion documentaire offline",
        "de": "Dokumentenverwaltung offline"
      },
      "desc": {
        "fr": "Suivi intelligent des prêts de documents papier — qui a emprunté quoi, quand et pour combien de temps — 100% hors connexion.",
        "de": "Intelligente Nachverfolgung von Papierdokument-Ausleihen — wer was wann und für wie lange ausgeliehen hat — zu 100% offline."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "bruckedeoffline",
      "name": "BrückeDE Offline",
      "url": "https://donko-dev.github.io/bruckedeoffline/",
      "logo": "logo-bruckedeoffline.png",
      "fallbackLetter": "B",
      "fallbackBg": "#141B2E",
      "fallbackFg": "#E8A93A",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Apprentissage de l'allemand offline",
        "de": "Deutsch lernen offline"
      },
      "desc": {
        "fr": "Cours et exercices de langue allemande, consultables sans connexion internet — pour progresser vers l'ÖSD partout, même sans réseau.",
        "de": "Deutschkurse und Übungen, ohne Internetverbindung abrufbar — um überall auf die ÖSD-Prüfung hinzuarbeiten, auch ohne Netz."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "donko-app",
      "name": "Donko App",
      "url": "https://donko-dev.github.io/donko-app",
      "logo": "donko-app.jpg",
      "fallbackLetter": "DA",
      "fallbackBg": "#241B14",
      "fallbackFg": "#C9971F",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Application DONKO",
        "de": "DONKO-Anwendung"
      },
      "desc": {
        "fr": "Application compagnon de l'écosystème DONKO, réunissant plusieurs outils métiers dans une interface unique.",
        "de": "Begleit-App des DONKO-Ökosystems, die mehrere Business-Tools in einer einzigen Oberfläche vereint."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "web-to-apk",
      "name": "Web-To-Apk",
      "url": "https://donko-dev.github.io/Web-To-Apk",
      "logo": "web-to-apk.jpg",
      "fallbackLetter": "WA",
      "fallbackBg": "#141B2E",
      "fallbackFg": "#E8A93A",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Outil de conversion",
        "de": "Konvertierungstool"
      },
      "desc": {
        "fr": "Outil de conversion d'applications web en fichiers APK Android, pour distribuer facilement mes outils sur mobile.",
        "de": "Tool zur Umwandlung von Webanwendungen in Android-APK-Dateien, um meine Tools einfach mobil zu verbreiten."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "lucky-popcorn",
      "name": "Lucky Popcorn",
      "url": "https://donko-dev.github.io/LUCKY-POPCORN",
      "logo": "lucky-popcorn.jpg",
      "fallbackLetter": "LP",
      "fallbackBg": "#241B14",
      "fallbackFg": "#C9971F",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Application ludique",
        "de": "Unterhaltungs-App"
      },
      "desc": {
        "fr": "Application ludique développée pour explorer l'interaction utilisateur et la gamification côté front-end.",
        "de": "Spielerische Anwendung zur Erprobung von Nutzerinteraktion und Gamification im Frontend."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "agbelealafia",
      "name": "Cabinet Agbélé-Alafia",
      "url": "https://agbelealafia.github.io/Agb-l-Alafia/",
      "logo": "agbelealafia.jpg",
      "logoWhiteBg": true,
      "fallbackLetter": "AA",
      "fallbackBg": "#16241C",
      "fallbackFg": "#3FB27F",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Site vitrine santé naturelle",
        "de": "Naturheilkunde-Website"
      },
      "desc": {
        "fr": "Site vitrine développé pour un cabinet de Cotonou spécialisé dans les compléments nutritionnels naturels, axés sur la fertilité et le bien-être.",
        "de": "Schaufenster-Website für ein Cabinet in Cotonou, spezialisiert auf natürliche Nahrungsergänzungsmittel für Fruchtbarkeit und Wohlbefinden."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "gemini-ai-prompts",
      "name": "Gemini AI Prompts",
      "url": "https://geminiaiprompts.webcrafthd.com",
      "logo": "geminiaiprompts.jpg",
      "fallbackLetter": "AI",
      "fallbackBg": "#141B2E",
      "fallbackFg": "#E8A93A",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Automatisation IA",
        "de": "KI-Automatisierung"
      },
      "desc": {
        "fr": "Bibliothèque de prompts et de workflows pilotés par l'IA (Gemini), utilisés pour automatiser mes développements.",
        "de": "Bibliothek von Prompts und KI-gesteuerten Workflows (Gemini), die meine Entwicklungsarbeit automatisieren."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "tickets-wifi-zone",
      "name": "Tickets WiFi Zone",
      "url": "https://ticketswifizone.webcrafthd.com",
      "logo": "ticketswifizone.jpg",
      "fallbackLetter": "TW",
      "fallbackBg": "#241B14",
      "fallbackFg": "#C9971F",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Réseau & accès",
        "de": "Netzwerk & Zugang"
      },
      "desc": {
        "fr": "Portail captif Wi-Fi avec billetterie algorithmique pour le contrôle d'accès réseau, développé pour WebCraft HD.",
        "de": "Wi-Fi-Captive-Portal mit algorithmischem Ticketsystem zur Zugangskontrolle, entwickelt für WebCraft HD."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "donkoexchange",
      "name": "DonkoExchange",
      "url": "https://donkoexchange.webcrafthd.com",
      "logo": "donkoexchange.jpg",
      "fallbackLetter": "DX",
      "fallbackBg": "#16241C",
      "fallbackFg": "#3E7CB1",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Fintech & Web3",
        "de": "Fintech & Web3"
      },
      "desc": {
        "fr": "Passerelle d'échange crypto opérationnelle, automatisant les échanges d'actifs numériques pour les utilisateurs.",
        "de": "Operative Krypto-Wechselplattform, die den Austausch digitaler Vermögenswerte für Nutzer automatisiert."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "ramacouture",
      "name": "Rama Bazin & Couture",
      "url": "https://donko-dev.github.io/ramacouture/",
      "logo": "ramacouture.jpg",
      "fallbackLetter": "RC",
      "fallbackBg": "#241B14",
      "fallbackFg": "#C9971F",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Mode & couture",
        "de": "Mode & Schneiderei"
      },
      "desc": {
        "fr": "Atelier de vente de bazin et de couture générale, avec présentation des créations et prise de contact en ligne.",
        "de": "Atelier für Bazin-Stoffe und allgemeine Schneiderei, mit Präsentation der Kreationen und Online-Kontaktaufnahme."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "possiblevideographie",
      "name": "Possible Vidéographie",
      "url": "https://donko-dev.github.io/possiblevideographie/",
      "logo": "possiblevideographie.jpg",
      "logoWhiteBg": true,
      "fallbackLetter": "PV",
      "fallbackBg": "#141B2E",
      "fallbackFg": "#3E7CB1",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Vidéaste & montage",
        "de": "Videograf & Schnitt"
      },
      "desc": {
        "fr": "Site vitrine d'un vidéaste (cadreur et monteur) présentant ses réalisations et ses services de production vidéo.",
        "de": "Schaufenster-Website eines Videografen (Kameramann und Cutter) mit seinen Arbeiten und Videoproduktionsdiensten."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "zakari-gruppe",
      "name": "Zakari Gruppe",
      "url": "https://donko-dev.github.io/ZAKARI-GRUPPE/",
      "logo": "zakari-gruppe.jpg",
      "fallbackLetter": "ZG",
      "fallbackBg": "#0B0F14",
      "fallbackFg": "#C9971F",
      "ctaStyle": "outline",
      "tag": {
        "fr": "Véhicules & nettoyage",
        "de": "Fahrzeuge & Reinigung"
      },
      "desc": {
        "fr": "Entreprise proposant la vente de véhicules neufs et d'occasion ainsi que des services de nettoyage de biens immobiliers.",
        "de": "Unternehmen für den Verkauf von Neu- und Gebrauchtfahrzeugen sowie Reinigungsdienstleistungen für Immobilien."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    },
    {
      "id": "prompt-ai",
      "name": "Prompt AI",
      "url": "https://donko-dev.github.io/Prompt-AI/",
      "logo": "promptai.jpg",
      "fallbackLetter": "PAI",
      "fallbackBg": "#141B2E",
      "fallbackFg": "#E8A93A",
      "ctaStyle": "amber",
      "tag": {
        "fr": "Prompt Ingenieur",
        "de": "Prompt-Engineer"
      },
      "desc": {
        "fr": "PROMPTAI est un atelier de génération de prompts professionnels, conçu pour les entreprises, boutiques et commerçants de la zone UEMOA et internationale.\n\n30 expertises couvrant la finance & Web3, le marketing & la vente, l'informatique & l'IA, la gestion & la logistique, la carrière & l'éducation, ainsi que la créativité & le style.",
        "de": "PROMPTAI ist ein Tool zur Erstellung professioneller Prompts, das für Unternehmen, Shops und Händler in der <strong>UEMOA-Region sowie auf internationaler</strong> Ebene konzipiert wurde. Das Angebot umfasst 30 Fachbereiche, darunter Finanzen & Web3, Marketing & Vertrieb, IT & KI, Management & Logistik, Karriere & Bildung sowie Kreativität & Stil."
      },
      "cta": {
        "fr": "Voir la démo live →",
        "de": "Live-Demo ansehen →"
      }
    }
  ],
  // Textes éditables du site (header, hero, citation, footer, CV).
  // Modifiez-les depuis admin.html — ils remplacent le texte par défaut
  // dans les deux langues.
  texts: {
    header: {
      tagline: { fr: "COTONOU → DEUTSCHLAND · WMS SHOWCASE", de: "COTONOU → DEUTSCHLAND · WMS SCHAUFENSTER" }
    },
    hero: {
      title: {
        fr: "Du savoir autodidacte à la logistique allemande.",
        de: "Vom autodidaktischen Wissen zur deutschen Logistik."
      },
      subtitle: {
        fr: "Application vitrine simulant un système de gestion d'entrepôt (WMS), conçue pour démontrer mes compétences en gestion, cloud AWS et développement — en vue d'un Ausbildung en Allemagne.",
        de: "Schaufenster-Anwendung, die ein Lagerverwaltungssystem (WMS) simuliert und meine Kompetenzen in Betriebswirtschaft, AWS-Cloud und Softwareentwicklung im Hinblick auf eine Ausbildung in Deutschland demonstriert."
      },
      photoRole: {
        fr: "CEO, EMPIRE DONKO | PROJETS EN GESTION LOGISTIQUE",
        de: "CEO, EMPIRE DONKO | PROJEKTE IM LOGISTIKMANAGEMENT"
      },
      quote: {
        fr: "« L'Intelligence Artificielle optimise mon code, la gestion pilote mes flux, et la logistique d'entreposage concrétise ma vision. Cette application est le pont entre mes compétences numériques développées au Bénin et mon ambition d'apprentissage en Allemagne. »",
        de: "„Künstliche Intelligenz optimiert meinen Code, das Management steuert meine Abläufe, und die Lagerlogistik verwirklicht meine Vision. Diese Anwendung ist die Brücke zwischen meinen im Benin entwickelten digitalen Kompetenzen und meinem Ausbildungsziel in Deutschland.“"
      }
    },
    footer: {
      subtitle: {
        fr: "Ouvert aux opportunités d'Ausbildung, partenariats et échanges techniques.",
        de: "Offen für Ausbildungsplätze, Partnerschaften und fachlichen Austausch."
      },
      powered: { fr: "Powered by EMPIRE DONKO", de: "Powered by EMPIRE DONKO" }
    },
    cv: {
      headline: {
        fr: "Ingénieur Smart Contract | Architecte Web3 & Blockchain | Expert Automatisation IA",
        de: "Smart-Contract-Ingenieur | Web3- & Blockchain-Architekt | Experte für KI-Automatisierung"
      },
      bridge: {
        fr: "Mes compétences en ingénierie blockchain et en automatisation IA reposent sur la même rigueur méthodologique que j'applique à la logistique et à la gestion d'entrepôt — la discipline technique au service d'un objectif concret : mon Ausbildung en Allemagne.",
        de: "Meine Kompetenzen in Blockchain-Engineering und KI-Automatisierung beruhen auf derselben methodischen Sorgfalt, die ich auch in der Logistik und Lagerverwaltung anwende — technische Disziplin im Dienst eines konkreten Ziels: meiner Ausbildung in Deutschland."
      },
      profileText: {
        fr: "Ingénieur Blockchain et Architecte Web3 orienté résultats, avec une expérience concrète dans la conception, l'audit et le déploiement de smart contracts sécurisés sur des réseaux compatibles EVM. Fondateur de l'écosystème EMPIRE DONKO, un ensemble d'outils logiciels « offline-first » (sans connexion, serveur ni base de données requise), de solutions Web3, DePIN et de tokenomics avancées conçues de bout en bout. Maîtrise de Solidity, de l'optimisation du gas et des paramètres de sécurité des smart contracts, avec un historique éprouvé de fusion entre l'ingénierie logicielle classique, l'automatisation pilotée par l'IA et les architectures financières décentralisées (DeFi).",
        de: "Ergebnisorientierter Blockchain-Ingenieur und Web3-Architekt mit praktischer Erfahrung in Konzeption, Audit und Deployment sicherer Smart Contracts auf EVM-kompatiblen Netzwerken. Gründer des EMPIRE-DONKO-Ökosystems, einer Sammlung von „Offline-First“-Softwaretools (ohne Internetverbindung, Server oder Datenbank), sowie von Web3-, DePIN- und fortgeschrittenen Tokenomics-Lösungen, die vollständig eigenständig entwickelt wurden. Fundierte Kenntnisse in Solidity, Gas-Optimierung und Sicherheitsparametern von Smart Contracts, mit nachgewiesener Erfahrung in der Verbindung von klassischer Softwareentwicklung, KI-gesteuerter Automatisierung und dezentralen Finanzarchitekturen (DeFi)."
      }
    }
  },

  // Légendes des photos/vidéos de la galerie : clé = nom exact du fichier
  // sur GitHub (ex. "galerie1A.jpg"), valeur = légende bilingue affichée
  // sous la photo. Une photo sans entrée ici s'affiche simplement sans
  // légende.
  galleryCaptions: {
    // "galerie1A.jpg": { fr: "Ma légende en français", de: "Meine Bildunterschrift" }
  }

};
