// Service worker leve — cache de shell estático (PWA).
const CACHE = "fap-v1";
const PRECACHE = ["/", "/trilhas", "/manifest.webmanifest", "/icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request).then((res) => {
        if (res.ok && url.pathname.startsWith("/_next/static")) {
          caches.open(CACHE).then((c) => c.put(event.request, res.clone()));
        }
        return res;
      });
      return cached ?? network;
    }),
  );
});
