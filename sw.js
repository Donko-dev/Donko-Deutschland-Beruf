/* DONKO DEUTSCHLAND BERUF — Service Worker
   Stratégie : cache-first avec mise en cache dynamique des ressources
   externes (Tailwind CDN, Google Fonts) au premier chargement, pour un
   fonctionnement 100% hors ligne dès la deuxième visite. */

const CACHE_NAME = 'donko-deutschland-beruf-v13';

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
