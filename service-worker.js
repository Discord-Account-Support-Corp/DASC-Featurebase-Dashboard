self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Only cache your own page
  if (event.request.url.includes(self.location.origin)) {
    event.respondWith(fetch(event.request));
  }
});
