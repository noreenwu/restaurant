# Udacity Front-End Developer Restaurant Review Project
# Base code provided by Udacity and modified by Noreen Wu, May 2019
---

## Project Overview

This application consists of two web pages, a restaurant listing page and a restaurant detail page.
The listing page includes a widget for filtering results by neighborhood and cuisine. The user
may then click through to see detailed information about the restaurant: operating hours around
reviews written by previous diners.

A code base was provided by Udacity and the application has been modified to improve its usability:
it utilizes contrasting colors for low vision users and includes ARIA tags and features that
enable screenreaders to function more effectively. Once a single connection has been established
for each page, the relevant files and resources are cached so that the application can still
work offline.

### Design Changes

Primary design changes to the listings page included the change of colors to be more complementary
but also more readable for low-vision readers. The application was previously not displaying the
matching list of restaurants in a grid format: only a single vertical column was shown
regardless of the width of the viewport. The filter by neighborhood and cuisine controls
were not fully visible.

Primary design changes to the restaurant detail page included the change again to higher
contrast colors and reducing the map to a much smaller size. The restaurant reviews no longer
appear in the left column but stretch across the width of the viewport underneath the restaurant
detail information.

Neither of these pages were acceptably responsive and neither one produced meaningful content
when the server was offline.

These changes, plus the addition of appropriate ARIA labels were introduced, to provide a meaningful
interaction for screenreader users.

A new favicon was introduced.

### Required files

For index.html (the restaurant listing page):
   index.html
   js/main.js
   js/dbhelper.js
   service-worker.js
   css/styles.css
   img/1.jpg
   img/2.jpg
   img/3.jpg
   img/4.jpg
   img/5.jpg
   img/6.jpg
   img/7.jpg
   img/8.jpg
   img/9.jpg
   img/10.jpg
   data/restaurants.json

For restaurant.html (the restaurant detail page):
   restaurant.html
   js/restaurant_info.js
   js/dbhelper.js
   css/styles.css
   img/1.jpg
   img/2.jpg
   img/3.jpg
   img/4.jpg
   img/5.jpg
   img/6.jpg
   img/7.jpg
   img/8.jpg
   img/9.jpg
   img/10.jpg
   data/restaurants.json
   service-worker-rdetail.js


### Implementation Notes

To achieve the desired redesign required using the Chrome-provided Audit
for accessibility and experimentation within the Chrome Devtools for
appropriate colors.

Aria labels and attributes were added to both the html files directly and
through the Javascript which dynamically generates some of the data derived
from the json file.

Finally, to implement caching, service workers are registered for each
of the pages. These are registered after the DOM has loaded. Once a fetch
is done, all of the needed files are added to the cache for use offline.


### Operational Notes

To run this application locally, use the Python SimpleHTTPServer:
   python -m SimpleHTTPServer 8000 &
