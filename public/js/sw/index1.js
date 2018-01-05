// Ex1: respond to all requests with an html response
// containing an element with class="a-winner-is-me".
// Ensure the Content-Type of the response is "text/html"
self.addEventListener('fetch', function(event) {
  event.respondWith(
    new Response('You\'re <span class="a-winner-is-me">fucked</span>', {
      headers: {'Content-Type': 'text/html'}
    })
  );
});
