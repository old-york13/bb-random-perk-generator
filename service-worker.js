const CACHE_NAME = 'bb-perks-v2';
const ASSETS = [
  '/index.html',
  '/optimal.html',
  '/style.css',
  '/script.js',
  '/backgrounds.js',
  '/images/background.jpg',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
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