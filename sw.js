const CACHE_NAME = "wedding-timer-v1";
const urlsToCache = [
    "index.html",
    "style.css",
    "script.js",
    "manifest.json",
    "icon-192.png",
    "icon-512.png"
];

// התקנת ה-Service Worker ואחסון קבצים בזיכרון מטמון
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// שליפת קבצים מהמטמון כאשר אין אינטרנט
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
