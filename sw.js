const CACHE_VERSION = 'koalarcade-1.7.0';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-maskable-192.png', './icon-maskable-512.png', './apple-touch-icon.png', './logo.webp', './mots.js', './firebase-config.js', './lib/firebase-app.js', './lib/firebase-database.js',
  './img/snake.webp', './img/2048.webp', './img/mot.webp', './img/p4.webp', './img/duel.webp', './img/morpion.webp', './img/memory.webp', './img/demineur.webp', './img/briques.webp',
  './fonts/raleway-500.woff2', './fonts/raleway-700.woff2', './fonts/raleway-800.woff2', './fonts/raleway-900.woff2'];

// Pas d'activation automatique : la nouvelle version attend le bouton « Installer »
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))));
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
