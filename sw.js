/* DONKO DEUTSCHLAND BERUF — Service Worker
   Stratégie : cache-first avec mise en cache dynamique des ressources
   externes (Tailwind CDN, Google Fonts) au premier chargement, pour un
   fonctionnement 100% hors ligne dès la deuxième visite. */

const CACHE_NAME = 'donko-deutschland-beruf-v18';

const PRECACHE_URLS = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Ne traiter que les requêtes GET (ignorer POST, mailto:, etc.)
  if (req.method !== 'GET') return;

  // Les vidéos (et parfois les gros fichiers) sont chargées par le
  // navigateur via des requêtes "Range" (octets par octets) pour permettre
  // le streaming et le déplacement dans la vidéo. Le Cache API interdit
  // de mettre en cache une réponse partielle (206) : essayer de le faire
  // cassait la lecture, surtout pour les vidéos volumineuses qui ont
  // presque toujours besoin de ce mécanisme. On laisse donc ces requêtes
  // passer directement au réseau, sans passer par le service worker.
  if (req.headers.has('range')) {
    return;
  }

  const url = new URL(req.url);

  // Les médias de la galerie (photos/vidéos) viennent de GitHub, pas du
  // même domaine que le site. Inutile et risqué de les mettre en cache
  // via ce service worker (gros volumes, quota, formats variés) : on les
  // laisse filer directement au réseau, le navigateur gère déjà très bien
  // son propre cache HTTP pour ces fichiers.
  if (url.hostname !== self.location.hostname) {
    return;
  }

  // data.js est le contenu modifiable du site : il doit toujours refléter
  // la dernière version publiée sur GitHub dès qu'une connexion est
  // disponible. Stratégie réseau-d'abord, avec repli sur le cache
  // uniquement hors ligne.
  if (url.pathname.endsWith('/data.js')) {
    event.respondWith(
      fetch(req, { cache: 'no-store' }).then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put('./data.js', clone));
        return res;
      }).catch(() => caches.match('./data.js'))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        // Cache-first : sert immédiatement, revalide en arrière-plan si en ligne
        fetchAndCache(req);
        return cached;
      }
      return fetchAndCache(req).catch(() => {
        // Hors ligne et jamais mis en cache : repli sur la page principale
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

function fetchAndCache(req) {
  return fetch(req).then((response) => {
    // On met en cache les réponses valides, y compris les ressources
    // externes (Tailwind CDN, Google Fonts) pour l'usage hors ligne futur.
    if (response && (response.ok || response.type === 'opaque')) {
      const clone = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
    }
    return response;
  });
}
