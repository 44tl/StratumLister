const CACHE_NAME = 'stratum-v3';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './stratum.svg'
];

const PREFETCH_PAGES = [
  './pages/ch/stratum-lister.md',
  './pages/ch/important.md',
  './pages/ch/faq.md',
  './pages/ch/changelog.md',
  './pages/bookmarks.md',
  './pages/safe-optimization-path.md',
  './pages/windows-optimization.md',
  './pages/linux/overview.md',
  './pages/macos/overview.md',
  './pages/android/overview.md',
  './pages/ios/overview.md'
];

self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(STATIC_ASSETS).catch(err => {
          console.warn('Cache addAll failed for some static assets:', err);
        });
      }),
      caches.open(CACHE_NAME).then(cache => {
        return Promise.allSettled(
          PREFETCH_PAGES.map(path => 
            fetch(path).then(response => {
              if (response.ok) cache.put(path, response);
            }).catch(() => {})
          )
        );
      })
    ]).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isLocal = url.origin === location.origin;
  const isNavigation = event.request.mode === 'navigate';

  if (isNavigation && isLocal) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  if (isLocal) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            if (response.ok) {
              const clone = response.clone();
              cache.put(event.request, clone);
            }
            return response;
          }).catch(() => new Response('Offline', { status: 408 }));
        });
      })
    );
  }
});