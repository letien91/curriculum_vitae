'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e75119103ad99743eea3aa3acaa97cfe",
"version.json": "98a4bd0632c1e7bc7135d32a3183cefc",
"index.html": "651a1248e4b4d3ac437615b63b64036e",
"/": "651a1248e4b4d3ac437615b63b64036e",
"main.dart.js": "421b56c366719bdf9661fa5486178def",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7fea1f1cb81c625f71bbf2d6b6140a2c",
".git/config": "859ebb1ab6200180354a7d465e6eed84",
".git/objects/92/8cdb984d840fcbe872a7fcb347b55689f4c788": "f8bdf958e85c9606cc0437e87226485c",
".git/objects/68/827b9764b2432dfb2a48f6d056ca49262252a4": "93db3ded5e8e77c89f7293a47abedeba",
".git/objects/6f/04d3721052687bbe7ac981994509cf003b9e0a": "b1681e19370b002d866805ffe2aff0e1",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/49c38eb79f2cf66d56f31bd066a3b855bb0b48": "1e445fe3ebd91bfedc55e9e49d267e28",
".git/objects/67/27d9e857b93c6f9ccc0231f926c87cb28da7ef": "926c2d95e6415a399027c1b594d37cf7",
".git/objects/67/803bb642742643c9525b6d25b8ade89383232c": "5d40c4c7976f38c9b005ca506909bdbd",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/d9/c077d1667e2b3df3bc535be9051d4dcaceac80": "b954b9472b6a079de308043cba3f7694",
".git/objects/d0/1b86a62a7d35922bec0e909de7f8a2df9a58aa": "a28719caa3da128caa43c488e0d95fd5",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/bd/daf50d86d29c08c9449fa333d38a30a38a5305": "df8292bf410b7b27739c44f5fc8c8514",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/716936e9e4c1d23bd12f7d7e44fdc695627a5d": "1e059eeadfd9100432caf5e408cf079b",
".git/objects/e5/ab464431a87f31075f743d1199081278996827": "d08be40039295e0d2dd5023e281604bd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/1ebbdfb6b25eead57c5b8342034e75a7718451": "db8245cfcbfcba52ec538e173e673ae4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/ce58b7260f435648ce3970218d531f8fb95061": "d533afe398030e3f27488712582715fb",
".git/objects/fe/0e6a66711a37b21391b6277ce57b456ce3c2cb": "486a8cf7e3cd72730b3df996ebe88693",
".git/objects/4e/b3393528e2fa37ea5d59d9406f8717c808bd9c": "2a332062f204f30c284afe849c3379b4",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/25d6520717466100a3d9cc46f5c4ed3c13dab7": "789005242c45ded9595473b2838ddfa9",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/9d7d97c8a11390018a0a554b2c434e4ab85f59": "a08cd275ac67adedc2d2fd962fe38cb3",
".git/objects/29/ff69386f7b74fe24f0cc85dea86771f5b7dc47": "b1cbabcfdd56e7e921a53fb7de937817",
".git/objects/42/9ee11ac1e45c0021b8f950f5f4d8b08de008ef": "92b0e9b5ce7e2b589f5e107b7286bc86",
".git/objects/42/234ebd84b10a5bc50aa6443d16e78be61719e2": "efa841ea57eebbb25eeb24f2ae2c2fc7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/d24c2444eb3d711fdd004f9adc28b6a1c0ee9f": "5d6f35847a840af72158feb8f7ec29d5",
".git/objects/8f/a05194a6793a35b650e4a57201ff19875853fe": "5e34ca332424769d08b6fe077ce45760",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/93e78898be03a0cba42a9d320ef04f499a4695": "ca4b470d498bcd97896774e43f72d279",
".git/objects/4c/e4a694ac03c6bd4c836c3545a65cadcee39717": "23eafe40f24da9d6df3873e5adcdc2f2",
".git/objects/81/ceb619e884916a1d950768d6aa5f810978de22": "654f4c907aa41fb941ef4b642ac67678",
".git/objects/86/510aea0b387aea9e2d859f32dea22c9f92f998": "2e2edf5e616c3c58b8ebbd8d4337b562",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/3a/8dbdb01e29e8ca737977ef64795f2683c11aea": "0e1c017c6265e33822d70733234f4f44",
".git/objects/98/c74e0a4228f2c6b06c405518e09ea9b79c43cb": "3163734854863bba89a915ef06ea4c4e",
".git/objects/08/87f2cfe4696133dcfe230400d8c65f50dd59dc": "382e74360e3b0f705eb5f0dc50993dde",
".git/objects/0a/e7ce5e3fa6b82b2dd5d435ff4d4ad090acd9cd": "e1aa553287b35488532e2c79d569011b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/175cc30f115094402fb6d786f467f8ebad3840": "783e69b3df7398e14e8c92d2800bc678",
".git/objects/f9/92a2fd2c10e562694928df6b92fefa7e506920": "14ed3d1ee875e212cf9dba3641df88e4",
".git/objects/c5/43b771c6e999aaad5c898391bef283ef29455a": "b8b355d55a4971d91c694e88ea9ed00c",
".git/objects/2c/002b4e9ec4e0b4da36d7accbd9770efd0320b6": "abc0b2708854316791a222f14cc1a3d1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/4e0babd03ad45c4eefb12aee750ce9fe24f373": "07c625a648f63e55ad7ec80fe6091a97",
".git/objects/40/a48197677e6d5313c2c397312120a97a67c89f": "c4ca0937c51c990cd5087f70975f7d6b",
".git/objects/2b/848bcad005c8dac365eb76d11ee719abf0619e": "e96bdf23fff5b1b4379823b9f6f8b497",
".git/objects/22/ca86d340101fb41b58f8c2abbe807eedf281d7": "4f42ca831ea8dceaf72fb0dc49d112d8",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "61b48b041f7ed17b9c674841843fd6ed",
".git/logs/refs/heads/master": "70acdb13f64087589a38e13b13cc7833",
".git/logs/refs/remotes/origin/master": "6c7045229e8f9d794e53e7a698991bce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "6486bf5b763b2d851f721a6e2a76553b",
".git/refs/remotes/origin/master": "6486bf5b763b2d851f721a6e2a76553b",
".git/index": "68ef5a716773f1dcc4610ef1773c5baa",
".git/COMMIT_EDITMSG": "10e104ce81e544fcb94f63e690ae33de",
"assets/AssetManifest.json": "903fdddb8bc9fa67bd555fc69618bea7",
"assets/NOTICES": "ae41ea2e645699fda4e4789a0e341ea5",
"assets/FontManifest.json": "1902562cfe1231901c2ceb5e2e235ebb",
"assets/AssetManifest.bin.json": "86dd28083deca7af5e36851a241220d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8291ee250e840170e84f335b0fb3ad0d",
"assets/fonts/MaterialIcons-Regular.otf": "d12f2bc7a04eb4aaca5f74d1ed6ab640",
"assets/assets/images/avt_1.jpg": "51e60f5d69c0cca34551d1fd72e590d5",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "e2ca235bf1ddc5b7a350199cf818c9c8",
"assets/assets/fonts/OpenSans-Light.ttf": "c87e3b21e46c872774d041a71e181e61",
"assets/assets/fonts/OpenSans-Italic.ttf": "60fdf6ed7b4901c1ff534577a68d9c0c",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "f0af8434e183f500acf62135a577c739",
"assets/assets/fonts/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/assets/fonts/OpenSans-Medium.ttf": "dac0e601db6e3601159b4aae5c1fda39",
"assets/assets/fonts/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
