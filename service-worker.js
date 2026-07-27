const CACHE_NAME = 'bb-perks-v2';
const ASSETS = [
  '/bb-random-perk-generator/index.html',
  '/bb-random-perk-generator/optimal.html',
  '/bb-random-perk-generator/style.css',
  '/bb-random-perk-generator/script.js',
  '/bb-random-perk-generator/backgrounds.js',
  '/bb-random-perk-generator/icons/icon-192.png',
  '/bb-random-perk-generator/icons/icon-512.png'
];

// Установка — кешируем всё
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Запросы — отдаём из кеша, если нет сети
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// Обновление — удаляем старый кеш
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});