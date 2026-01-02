/**
 * Service Worker pour À vos papattes by Nath
 * Permet le fonctionnement hors ligne et améliore les performances
 */

const CACHE_NAME = 'avospapattes-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/mentions-legales.html',
    '/css/main.css',
    '/js/app.js',
    '/js/theme.js',
    '/js/menu.js',
    '/js/firebase-handler.js',
    '/js/map.js',
    '/js/gallery.js',
    '/manifest.json',
    '/images/logo.png',
    '/image.png'
];

// Installation du service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache ouvert');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Suppression ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Stratégie de cache : Network First, fallback to Cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Clone la réponse
                const responseClone = response.clone();

                // Mise à jour du cache
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });

                return response;
            })
            .catch(() => {
                // Si le réseau échoue, utiliser le cache
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    // Page de fallback pour les pages HTML
                    if (event.request.headers.get('accept').includes('text/html')) {
                        return caches.match('/index.html');
                    }
                });
            })
    );
});
