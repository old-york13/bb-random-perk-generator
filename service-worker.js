const CACHE_NAME = 'bb-perks-v3';
const ASSETS = [
  '/bb-random-perk-generator/index.html',
  '/bb-random-perk-generator/optimal.html',
  '/bb-random-perk-generator/style.css',
  '/bb-random-perk-generator/script.js',
  '/bb-random-perk-generator/backgrounds.js',
  '/bb-random-perk-generator/manifest.json',
  '/bb-random-perk-generator/icons/icon-192.png',
  '/bb-random-perk-generator/icons/icon-512.png',
  '/bb-random-perk-generator/images/background.jpg',
  // Иконки перков — добавь все, которые есть в папке icons/
  '/bb-random-perk-generator/icons/Student.png',
  '/bb-random-perk-generator/icons/Colossus.png',
  '/bb-random-perk-generator/icons/Fast Adaptation.png',
  '/bb-random-perk-generator/icons/Path.png',
  '/bb-random-perk-generator/icons/Recover.png',
  '/bb-random-perk-generator/icons/Resilient.png',
  '/bb-random-perk-generator/icons/Bags.png',
  '/bb-random-perk-generator/icons/Bull.png',
  '/bb-random-perk-generator/icons/Steel.png',
  '/bb-random-perk-generator/icons/Nine Lives.png',
  '/bb-random-perk-generator/icons/Rally.png',
  '/bb-random-perk-generator/icons/Taunt.png',
  '/bb-random-perk-generator/icons/Adrenalin.png',
  '/bb-random-perk-generator/icons/Dodge.png',
  '/bb-random-perk-generator/icons/Mind.png',
  '/bb-random-perk-generator/icons/Gifted.png',
  '/bb-random-perk-generator/icons/Back.png',
  '/bb-random-perk-generator/icons/Antisipation.png',
  '/bb-random-perk-generator/icons/Shield.png',
  '/bb-random-perk-generator/icons/Brawny.png',
  '/bb-random-perk-generator/icons/Crippling.png',
  '/bb-random-perk-generator/icons/Execut.png',
  '/bb-random-perk-generator/icons/Rotation.png',
  '/bb-random-perk-generator/icons/Mace.png',
  '/bb-random-perk-generator/icons/Flail.png',
  '/bb-random-perk-generator/icons/Hammer.png',
  '/bb-random-perk-generator/icons/Axe.png',
  '/bb-random-perk-generator/icons/Cleaver.png',
  '/bb-random-perk-generator/icons/Sword.png',
  '/bb-random-perk-generator/icons/Dagger.png',
  '/bb-random-perk-generator/icons/Polearm.png',
  '/bb-random-perk-generator/icons/Spear.png',
  '/bb-random-perk-generator/icons/Crossbow.png',
  '/bb-random-perk-generator/icons/Bow.png',
  '/bb-random-perk-generator/icons/Throw.png',
  '/bb-random-perk-generator/icons/Footwork.png',
  '/bb-random-perk-generator/icons/Quick.png',
  '/bb-random-perk-generator/icons/Relentless.png',
  '/bb-random-perk-generator/icons/Over.png',
  '/bb-random-perk-generator/icons/Lonewolf.png',
  '/bb-random-perk-generator/icons/Reach.png',
  '/bb-random-perk-generator/icons/Underdog.png',
  '/bb-random-perk-generator/icons/Battleforge.png',
  '/bb-random-perk-generator/icons/Nimble.png',
  '/bb-random-perk-generator/icons/Berserk.png',
  '/bb-random-perk-generator/icons/Killing.png',
  '/bb-random-perk-generator/icons/Headhunter.png',
  '/bb-random-perk-generator/icons/Fearsome.png',
  '/bb-random-perk-generator/icons/Duelist.png',
  '/bb-random-perk-generator/icons/Indomitable.png'
];

// Установка — кешируем всё
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.warn('Не все файлы закешированы:', err);
      });
    })
  );
});

// Запросы — отдаём из кеша, если нет сети
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request).catch(() => {
        // Если нет сети и нет в кеше — ничего не делаем
        return new Response('Offline', { status: 503 });
      });
    })
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