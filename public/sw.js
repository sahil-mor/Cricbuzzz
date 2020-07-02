
self.addEventListener('install', (event) => {
    console.log('[Service worker] installing Service worker ... ')
} )

self.addEventListener('activate', (event) => {
    console.log('[Service worker] activating Service worker ... ')
    return self.clients.claim();
} )

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
} )
