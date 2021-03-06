// Ex4: Cache requests

self.addEventListener('install', function(event) {
  var urlsToCache = [
    '/',
    'js/main.js',
    'css/main.css',
    'imgs/icon.png',
    'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
    'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
  ];

  event.waitUntil(
    // open a cache named 'wittr-static-v1'
    // Add cache the urls from urlsToCache
    caches.open('wittr-static-v1').then(function(cache) {
      cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  const url = event.request.url;
  caches.match(url);

  event.respondWith(
    caches.open('wittr-static-v1').then(function(cache) {
      return cache.match(url).then(function(response) {
          return response || fetch(url);
      });
    })
  );
});
