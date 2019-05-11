// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     new Response('hello world')
//   );
// });


self.addEventListener('install', function(event) {
  event.waitUntil(
    // TODO: change the site's theme, eg swap the vars in public/scss/_theme.scss
    // Ensure at least $primary-color changes
    // TODO: change cache name to 'wittr-static-v2'
    caches.open('restaurant-reviews-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'css/styles.css',
        'js/main.js',
        'js/dbhelper.js',
        'data/restaurants.json',
        'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff',
        'http://localhost:8000/img/1.jpg',
        'http://localhost:8000/img/2.jpg',
        'http://localhost:8000/img/3.jpg',
        'http://localhost:8000/img/4.jpg',
        'http://localhost:8000/img/5.jpg',
        'http://localhost:8000/img/6.jpg',
        'http://localhost:8000/img/7.jpg',
        'http://localhost:8000/img/8.jpg',
        'http://localhost:8000/img/9.jpg',
        'http://localhost:8000/img/10.jpg'
      ]);
    })
  );
});


self.addEventListener('fetch', function(event) {

  // respond with an entry from the cache if there is one.
  // If there isn't, fetch from the network.

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
