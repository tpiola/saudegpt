// Service worker — PWA SaúdeGPT.
// HTML/navegação: rede primeiro (conteúdo sempre atualizado; cache só como fallback offline).
// Assets imutáveis (/_next/static): cache primeiro.
// IMPORTANTE: ao mudar a estratégia, troque a versão do cache para invalidar os antigos.
const CACHE = "fap-v2";
const OFFLINE_FALLBACK = "/";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll([OFFLINE_FALLBACK, "/manifest.webmanifest", "/icon.svg"])),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  // Navegação (HTML): rede primeiro — nunca servir página velha com app novo no ar.
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(event.request, copy));
          }
          return res;
        })
        .catch(() =>
          caches
            .match(event.request)
            .then((cached) => cached ?? caches.match(OFFLINE_FALLBACK)),
        ),
    );
    return;
  }

  // Assets com hash no nome (imutáveis): cache primeiro.
  if (url.pathname.startsWith("/_next/static")) {
    event.respondWith(
      caches.match(event.request).then(
        (cached) =>
          cached ??
          fetch(event.request).then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(event.request, copy));
            }
            return res;
          }),
      ),
    );
    return;
  }

  // Demais GETs: rede com fallback ao cache (modo offline).
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then((c) => c ?? Response.error()),
    ),
  );
});
