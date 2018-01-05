self.addEventListener('fetch', function(event) {
	// Ex1: respond to all requests with an html response
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"
  // event.respondWith(
  //   new Response('You\'re <span class="a-winner-is-me">fucked</span>', {
  //     headers: {'Content-Type': 'text/html'}
  //   })
  // );

  // Ex2: only respond to requests with a
  // url ending in ".jpg"
  const url = event.request.url;
  if (url.match(/\.jpg$/)) {
    event.respondWith(fetch('/imgs/dr-evil.gif'));
  }

});
