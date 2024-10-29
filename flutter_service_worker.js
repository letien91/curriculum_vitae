'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1f3b562fb919b590e15fedf8fd44b003",
"version.json": "98a4bd0632c1e7bc7135d32a3183cefc",
"index.html": "651a1248e4b4d3ac437615b63b64036e",
"/": "651a1248e4b4d3ac437615b63b64036e",
"main.dart.js": "f31d24b5071509b133e4feb208ff82b1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7fea1f1cb81c625f71bbf2d6b6140a2c",
".git/config": "859ebb1ab6200180354a7d465e6eed84",
".git/objects/0d/c6189db7aa9b87c17bb95e795796cd85b71d24": "debdd53cd3451b416c1552d3b6179e2d",
".git/objects/95/9a2b7403ea8a189ccbfc224eeb2de0b9843371": "1211568f89e08fd55471b07b7a89b74b",
".git/objects/92/8cdb984d840fcbe872a7fcb347b55689f4c788": "f8bdf958e85c9606cc0437e87226485c",
".git/objects/50/95ef880e1a19c1f5f94acf2d5a265dd6a99ef4": "3793e75995bb6918343f04bf3d797f61",
".git/objects/68/827b9764b2432dfb2a48f6d056ca49262252a4": "93db3ded5e8e77c89f7293a47abedeba",
".git/objects/6f/04d3721052687bbe7ac981994509cf003b9e0a": "b1681e19370b002d866805ffe2aff0e1",
".git/objects/9e/7b23d4e6ffd23643bfce5e1f787b9c493e43cc": "bf1c704be0c12d9dbaa57c409da7323e",
".git/objects/32/e59d57d4a044ad00b78bdaed147889b79e0ce0": "4339b9d147f0df87e0ac7dd20566ab76",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/49c38eb79f2cf66d56f31bd066a3b855bb0b48": "1e445fe3ebd91bfedc55e9e49d267e28",
".git/objects/67/27d9e857b93c6f9ccc0231f926c87cb28da7ef": "926c2d95e6415a399027c1b594d37cf7",
".git/objects/67/803bb642742643c9525b6d25b8ade89383232c": "5d40c4c7976f38c9b005ca506909bdbd",
".git/objects/93/1dced19ffa76f98d5d7743733b7919af769042": "e042e2fcfaaed8a1fa529909bd6bb3ea",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/d9/c077d1667e2b3df3bc535be9051d4dcaceac80": "b954b9472b6a079de308043cba3f7694",
".git/objects/d0/1b86a62a7d35922bec0e909de7f8a2df9a58aa": "a28719caa3da128caa43c488e0d95fd5",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/07297dd4d66447a04479f249a061a9f4acbb73": "22aa79ed199e8fd3e4adde890aae773a",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/bd/daf50d86d29c08c9449fa333d38a30a38a5305": "df8292bf410b7b27739c44f5fc8c8514",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/b379141bc229afa2d93f5a23a3d2ea33ef603d": "3870b98d1d91d6fee4c62da31f4a96bf",
".git/objects/ae/716936e9e4c1d23bd12f7d7e44fdc695627a5d": "1e059eeadfd9100432caf5e408cf079b",
".git/objects/e5/ab464431a87f31075f743d1199081278996827": "d08be40039295e0d2dd5023e281604bd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/1157928fa6cef60bc71496471c81b9a86ca8df": "c018bf1e537ee14239626828229cc1ec",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/436a3e6b42addd78098abfb9032ccdbfeef4f6": "84db2837434d177dec209340e37adf42",
".git/objects/fc/1ebbdfb6b25eead57c5b8342034e75a7718451": "db8245cfcbfcba52ec538e173e673ae4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/cf/6963f74197f9520806eb3d2e0c9771c96af2b7": "fcc37595315911f458c0c74bb372bef6",
".git/objects/ca/ce58b7260f435648ce3970218d531f8fb95061": "d533afe398030e3f27488712582715fb",
".git/objects/fe/0e6a66711a37b21391b6277ce57b456ce3c2cb": "486a8cf7e3cd72730b3df996ebe88693",
".git/objects/fe/5773d7bfbc90bd0ccec32c5ca307b8cb35d1d8": "4fd5ce1ca858a09d8c28f102393b4d48",
".git/objects/c8/2a2017b9a9548b77db30d09a7893314664cb2a": "08d75427b25cf3f138b29cc66a48e713",
".git/objects/4e/b3393528e2fa37ea5d59d9406f8717c808bd9c": "2a332062f204f30c284afe849c3379b4",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/25d6520717466100a3d9cc46f5c4ed3c13dab7": "789005242c45ded9595473b2838ddfa9",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/9d7d97c8a11390018a0a554b2c434e4ab85f59": "a08cd275ac67adedc2d2fd962fe38cb3",
".git/objects/29/ff69386f7b74fe24f0cc85dea86771f5b7dc47": "b1cbabcfdd56e7e921a53fb7de937817",
".git/objects/42/9ee11ac1e45c0021b8f950f5f4d8b08de008ef": "92b0e9b5ce7e2b589f5e107b7286bc86",
".git/objects/42/234ebd84b10a5bc50aa6443d16e78be61719e2": "efa841ea57eebbb25eeb24f2ae2c2fc7",
".git/objects/45/ad31974b215a6d3aee9bf84223407e1c1cb466": "78f2a3337f9734f432f0c9cf253d5203",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/d24c2444eb3d711fdd004f9adc28b6a1c0ee9f": "5d6f35847a840af72158feb8f7ec29d5",
".git/objects/8f/a05194a6793a35b650e4a57201ff19875853fe": "5e34ca332424769d08b6fe077ce45760",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/93e78898be03a0cba42a9d320ef04f499a4695": "ca4b470d498bcd97896774e43f72d279",
".git/objects/4c/e4a694ac03c6bd4c836c3545a65cadcee39717": "23eafe40f24da9d6df3873e5adcdc2f2",
".git/objects/4c/92b6edcd359ea1b2b6f4d6eabfa2de0720315c": "f4b50e0b2905e54941a2edd31b23630b",
".git/objects/81/ceb619e884916a1d950768d6aa5f810978de22": "654f4c907aa41fb941ef4b642ac67678",
".git/objects/81/8c64cc9884a2fd8f07fdf6040432c3424f668c": "cf56db086ec7f594a368610340cf2413",
".git/objects/86/510aea0b387aea9e2d859f32dea22c9f92f998": "2e2edf5e616c3c58b8ebbd8d4337b562",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/91a629532190eb228d1262b9e44b1145a4c726": "75dccefdf0d29e1ace64bd2730deaf1a",
".git/objects/65/06215bfb9fd43df1be6f4594bad90c14c6bbf8": "17b54c60c759e6eff32ee828bdd199ff",
".git/objects/62/e19a50c219d8f1fc87355aacdaa28dc7fd6f01": "85e99ec7e1f53969c513edaa59d2bc6a",
".git/objects/3a/8dbdb01e29e8ca737977ef64795f2683c11aea": "0e1c017c6265e33822d70733234f4f44",
".git/objects/98/c74e0a4228f2c6b06c405518e09ea9b79c43cb": "3163734854863bba89a915ef06ea4c4e",
".git/objects/5e/9360d3f83fbf64915eea8229f735eaf452996e": "c33ae68e8801bd821e9d17ceaaebb078",
".git/objects/08/87f2cfe4696133dcfe230400d8c65f50dd59dc": "382e74360e3b0f705eb5f0dc50993dde",
".git/objects/0a/e7ce5e3fa6b82b2dd5d435ff4d4ad090acd9cd": "e1aa553287b35488532e2c79d569011b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/b03d921d748855d2caad894763d6de1839e999": "c5a15680c14885d10af59d234cb62989",
".git/objects/dd/e281268482cde7d56d9dc7ae4929b229673da6": "dfb1048329ac0b5870118271bab6ccc2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/91b42537af7a6545650c47a1fe316fd8b2596e": "81364032b12fbace2d9ba248cf3d5db6",
".git/objects/a6/d183a0f003fba4e31e399926ec0e00365682bd": "70f36917cb5ed6baec4db097df326ec1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/17e9e9e841f2c978b0f587c991255823ef6fec": "834e526fe4ce9dcc0f2d297db7e076fa",
".git/objects/ea/175cc30f115094402fb6d786f467f8ebad3840": "783e69b3df7398e14e8c92d2800bc678",
".git/objects/ea/29ffacce5a42937cbb1c999fcaf6f816b3c6c2": "bbebf34645189d4a60e429161296e577",
".git/objects/e6/04b08c27f9bcfb7a0a9c30c0e909a5d41b713f": "faa9dd675bc685d468542416a59f090b",
".git/objects/f9/a3967f2e6329a65da8331166d66d6cc6f59a4b": "e5f448820b831b450730bfe8c62a0ca3",
".git/objects/f9/92a2fd2c10e562694928df6b92fefa7e506920": "14ed3d1ee875e212cf9dba3641df88e4",
".git/objects/c5/43b771c6e999aaad5c898391bef283ef29455a": "b8b355d55a4971d91c694e88ea9ed00c",
".git/objects/2c/002b4e9ec4e0b4da36d7accbd9770efd0320b6": "abc0b2708854316791a222f14cc1a3d1",
".git/objects/85/a2d17b589df1e2f9e698cb47eee1c998488019": "b990d8dc9e8f74632110f20a7b8f337a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/82/0190f6edf18f7d61879b768dd98303acde14ae": "db35e66f717cc2f491e96eba8acd9efa",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/4e0babd03ad45c4eefb12aee750ce9fe24f373": "07c625a648f63e55ad7ec80fe6091a97",
".git/objects/40/a48197677e6d5313c2c397312120a97a67c89f": "c4ca0937c51c990cd5087f70975f7d6b",
".git/objects/2b/848bcad005c8dac365eb76d11ee719abf0619e": "e96bdf23fff5b1b4379823b9f6f8b497",
".git/objects/47/84b9e59a5e07d61ebe3ae767a9a3ff0d49431f": "e1b9664ecc5e6e0797e326e59d6f531d",
".git/objects/22/ca86d340101fb41b58f8c2abbe807eedf281d7": "4f42ca831ea8dceaf72fb0dc49d112d8",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f8a1dd421059823c7081436dc9f5e991",
".git/logs/refs/heads/master": "7d030b191c20edb5044c64ec9865f88f",
".git/logs/refs/remotes/origin/master": "99b39158b73766886248c153c71a2663",
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
".git/refs/heads/master": "6689d5c7b5dd41457b9092f0668c26ef",
".git/refs/remotes/origin/master": "6689d5c7b5dd41457b9092f0668c26ef",
".git/index": "bfdd1efa1679faa2dbcbb38cff21da80",
".git/COMMIT_EDITMSG": "5fcee639337c367caf2b05dbc0f45c4d",
"assets/AssetManifest.json": "a92fbf0ee8bc50c54cff2b6dd802ec93",
"assets/NOTICES": "c29e1ceb14b938d4d95cba3e164cc6e6",
"assets/FontManifest.json": "1902562cfe1231901c2ceb5e2e235ebb",
"assets/AssetManifest.bin.json": "ca8cbaffffa09c0c1f6fd724943a9080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "322e27c002b4f5ffe052252d49eb1d8e",
"assets/fonts/MaterialIcons-Regular.otf": "0e0a3d2583026a4a5dba06cb978fc988",
"assets/assets/images/avt_1.jpg": "51e60f5d69c0cca34551d1fd72e590d5",
"assets/assets/images/zalo-icon.png": "a314c78d7778469ff6ce201179ce8b7a",
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
