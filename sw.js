// 1. CAMBIAMOS A V2:
const CACHE_NAME = 'guialab-cache-v2';

const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Instalación: Guarda los archivos en el dispositivo
self.addEventListener('install', event => {
  // Fuerza al nuevo Service Worker a activarse inmediatamente sin esperar a que se cierre la app
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache OK: Archivos guardados en v2');
      return cache.addAll(assets);
    })
  );
});

// Activación: Borra automáticamente el caché viejo (v1) gracias a tu lógica
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Limpiando versiones antiguas (Adiós v1)');
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Toma el control de la app al toque
  );
});

// Fetch: Carga desde el caché si no hay conexión
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
