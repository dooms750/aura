/* Service worker d'Aura : la page est servie depuis le réseau (mises à jour), les bibliothèques et modèles lourds
   (Three.js, MediaPipe, ~20 Mo) sont gardés en cache après le premier chargement, pour un démarrage rapide et hors ligne. */
const VER = 'aura-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
const HEAVY = ['cdn.jsdelivr.net', 'storage.googleapis.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VER).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req).then(r => { if (r.ok) { const copy = r.clone(); caches.open(VER).then(c => c.put(req, copy)).catch(() => {}); } return r; })
        .catch(() => caches.match(req).then(r => r || caches.match('index.html')))
    );
  } else if (HEAVY.includes(url.hostname)) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(r => {
        if (r.ok && r.status === 200) { const copy = r.clone(); caches.open(VER).then(c => c.put(req, copy)).catch(() => {}); }
        return r;
      }))
    );
  }
});
