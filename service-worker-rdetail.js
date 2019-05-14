let staticCacheName = 'restaurant-reviews-detail-v9';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        'css/styles.css',
        'js/dbhelper.js',
        'js/restaurant_info.js',
        'data/restaurants.json',
        '/favicon.ico',
        'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/restaurant.html'
      ]);
    })
  );
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    // remove old cache(s)
    caches.delete('restaurant-reviews-detail-v8')
  )}
);

self.addEventListener('fetch', function(event) {

  // respond with an entry from the cache if there is one.
  // If there isn't, fetch from the network.

  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
