// Ex2: only respond to requests with a url ending in ".jpg"
self.addEventListener('fetch', function(event) {
  const url = event.request.url;
  if (url.match(/\.jpg$/)) {
    event.respondWith(fetch('/imgs/dr-evil.gif'));
  }

});
