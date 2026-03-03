// 缓存名称
const CACHE_NAME = 'tmr-ration-system-v1';

// 需要缓存的资源
const urlsToCache = [
  '.',
  'index.html',
  'calculate_dmi.html',
  'assets/css/font-awesome.min.css',
  'assets/css/tailwind.min.css',
  'assets/js/chart.umd.min.js',
  'assets/js/tailwind.min.js',
  'assets/webfonts/FontAwesome.otf',
  'assets/webfonts/fontawesome-webfont.eot',
  'assets/webfonts/fontawesome-webfont.svg',
  'assets/webfonts/fontawesome-webfont.ttf',
  'assets/webfonts/fontawesome-webfont.woff',
  'assets/webfonts/fontawesome-webfont.woff2',
  'manifest.json'
];

// 安装service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 激活service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 拦截网络请求
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果在缓存中找到响应，则返回缓存的响应
        if (response) {
          return response;
        }

        // 否则，发起网络请求
        return fetch(event.request).then(
          (response) => {
            // 检查响应是否有效
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // 克隆响应
            const responseToCache = response.clone();

            // 将响应添加到缓存
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});