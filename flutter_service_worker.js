'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "99b8f3c899c81b7208879b6cf578e5bc",
"save_pdf_worker.dart.js": "a7f66f477d2c71abe551194b6c4c01b1",
"version.json": "98a4bd0632c1e7bc7135d32a3183cefc",
"index.html": "dcf343a9976c29f7c7fa756389837da2",
"/": "dcf343a9976c29f7c7fa756389837da2",
"save_pdf_worker.dart.js.deps": "acbf74fcb17f15ac913900df8752c49f",
"main.dart.js": "339b77a98488e8468075365be84b5952",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"save_pdf_worker.dart.js.map": "a9687adb926ac651ab0ff082e694b7e2",
"manifest.json": "22e6ae32768e7c3089e699bb84e08e0b",
".git/config": "5b9c4b50ea89a48f226985562163236b",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/51/a292ad54040e00bcb50a2b47223a32997d4b5a": "ba5c169d7680e4f19fae467e841d13d7",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a2/bb41fc3efbf4c4e7bfbd3228519a1618c68f10": "5ce5761cee17a649d4b16c47d461fec8",
".git/objects/a2/803e57cac4eb66a9d9898f6d696e77e8363424": "1686114d873bf21ad339e2c2820b0074",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/c9/08ced5914555e1d620e9e29e9ff516d6175986": "1f8d543de77546bf931442618d7e2442",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/4e/bb733488d36a06eb4bb685d618d5eef523e6d0": "f5bc3aad4904e55bc9dc8bc5d09606d5",
".git/objects/pack/pack-54198ef9c5fa3b0a2129310bf32b5269bb6465a3.idx": "34593f4a4d1db7f35d7ab9b2adaa1cf6",
".git/objects/pack/pack-54198ef9c5fa3b0a2129310bf32b5269bb6465a3.rev": "8623a59328e3e7ed5a20c313f6827705",
".git/objects/pack/pack-54198ef9c5fa3b0a2129310bf32b5269bb6465a3.pack": "0a8edd4df3d3dfbcd2f3d850d2f2eb8d",
".git/objects/7d/7a748d7c1438f3893eeee239c1afb7b5cf8a52": "44d1129f50bbd545e82ff186156046d7",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/2a/65d6d9be4727320dea08bdb0d421f6fc8e488d": "160f15aab76e208253f219b448fe6273",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9a/71a17f048201f1921dd9ec7fbd21307e866354": "6240bd8d2a458df7fd99bc660244916d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/62/78dc2b2afb7af592989c714b652d923b502844": "636c516fab4a7ddbb857bd5f3c63e653",
".git/objects/6c/7185413c14c50b24d3628af6ef2106eaab9306": "23732eff94b3f5df27c9b26847359de0",
".git/objects/b6/77c4efb2f866d0339e2453a236551ef6dc3745": "4503430e63ab9052f4019cf2a50d73ec",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/1b/ece081e424997a60eb324f5c030f9eba83988d": "390ffdc80a3c79a39c0e88a505d246ab",
".git/objects/48/e792075cde112ffb4f44faaee4452e2b0cf06b": "2386a1d959f15f784bc5dfe197925cb9",
".git/objects/4a/142b634456283fd281bbc2fa42522d7ffee72a": "36d56f4a5036434aafbd1a9f45184e79",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8c/5ae1c60ef1f3cb29c811bd7d277c5f5c0c0fe9": "4059fdbcef8c53ea2ad5f58b5bb8cefd",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "f6f38eac995a09bcaf774c25cabe5e23",
".git/logs/refs/heads/master": "f6f38eac995a09bcaf774c25cabe5e23",
".git/logs/refs/remotes/origin/HEAD": "e88f6a1c81530b3a77f498fe3ff24aee",
".git/logs/refs/remotes/origin/master": "bdc00b1aa0d91fc58120e59d2916a64a",
".git/refs/heads/master": "e943d4b683cb0240dab2af1e197a51fa",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "e943d4b683cb0240dab2af1e197a51fa",
".git/index": "0e67ba5be0650071cc2db5c3fb9772d7",
".git/packed-refs": "09a9d8b4f5e4a77f162d4a1045788f1b",
".git/COMMIT_EDITMSG": "63d2d586efe4f2166de2fba8e15ebef7",
".git/FETCH_HEAD": "60582ce83b2628e18ebce3addd8c0f80",
".git/sourcetreeconfig": "cec6326abe0e1e10d65b009ef46bc6df",
"assets/AssetManifest.json": "6d73f068ced1a34199063231d78c8ee0",
"assets/NOTICES": "229a2d87fa3cbc541e8f753801f9035b",
"assets/FontManifest.json": "1902562cfe1231901c2ceb5e2e235ebb",
"assets/AssetManifest.bin.json": "f71aabaec371f0f2d19d50681409e919",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bbd9f0e39b9fc42966e08b45bf9154d9",
"assets/fonts/MaterialIcons-Regular.otf": "9486889d93d1e27033e48a721bf2c699",
"assets/assets/images/bty/bty_1.webp": "145e3a714d3313a6d48cf29e459d6c13",
"assets/assets/images/bty/bty_3.webp": "c8abeb8eb0a6f7d33d99d0dc0fcf2c6b",
"assets/assets/images/bty/bty_2.webp": "7ee20a97b5651b04c68759af41372181",
"assets/assets/images/bty/bty_4.webp": "f693ff246bd63273eb75cc27c10ca758",
"assets/assets/images/sm/sm_10.png": "e382f11ac6b914236a0dc965f6dc56cd",
"assets/assets/images/sm/sm_1.png": "250d50c108a0b1e5794f0e9264ae972c",
"assets/assets/images/sm/sm_3.png": "b9a01c920613238474d4bf59dd330c63",
"assets/assets/images/sm/sm_2.png": "8c6d54854f0360b2ec7abf893d2eea61",
"assets/assets/images/sm/sm_6.png": "bedb8f1a31490deab7a28ba7e9e934c3",
"assets/assets/images/sm/sm_7.png": "1bfddd327367ea5f6d587056da77e933",
"assets/assets/images/sm/sm_5.png": "5d2f5d7f26d954982611e51905e6c086",
"assets/assets/images/sm/sm_4.png": "ff56e50582f362952e577c54560886aa",
"assets/assets/images/sm/sm_9.png": "198c49b6011512e0eb283836437be1fc",
"assets/assets/images/sm/sm_8.png": "3c07c8d53dfd290f5b1985f0d447daae",
"assets/assets/images/bds/bds_4.png": "59c34449382bb42497fd2b2848d9bec6",
"assets/assets/images/bds/bds_5.png": "c74eb4fd4cb4effe50e59f0591ba7916",
"assets/assets/images/bds/bds_2.png": "1a047647bfcb9bcfbd535c7fcd8e51a1",
"assets/assets/images/bds/bds_3.png": "83901663768db3abb4ad1900cdf388b6",
"assets/assets/images/bds/bds_1.png": "e555c8ffaead0d898eb835a831410c74",
"assets/assets/images/avt_1.jpg": "51e60f5d69c0cca34551d1fd72e590d5",
"assets/assets/images/jsn/jsn_2.png": "6d82a7a78962bc7fd7462b1a2b70cbab",
"assets/assets/images/jsn/jsn_3.png": "0ead5cfc08f996dfcaaeb6ab8093c8dd",
"assets/assets/images/jsn/jsn_1.png": "da502aec146e20ffe47df49dd22e3c31",
"assets/assets/images/jsn/jsn_4.png": "e413124f12abe77526dadfc425a6e4ab",
"assets/assets/images/jsn/jsn_5.png": "854401208d98b425e864f817ea4b8510",
"assets/assets/images/jsn/jsn_6.png": "6c2f5e92d02eada8115dc25ee8edce12",
"assets/assets/images/crave/crv_7.webp": "d1c3c2a5c20f776dba2a8d318c762f17",
"assets/assets/images/crave/crv_6.webp": "785ac758d27539eb87f595cc8035c2c9",
"assets/assets/images/crave/crv_1.webp": "5bcb8adf781b7065e158d231ffc11fa8",
"assets/assets/images/crave/crv_3.webp": "3950493125fded454c43cfdfba28b3eb",
"assets/assets/images/crave/crv_2.webp": "593d11eca9a6563caf100b59ee2549e9",
"assets/assets/images/crave/crv_5.webp": "45dd41f5c50725924d94edade1a3d6fe",
"assets/assets/images/crave/crv_4.webp": "2debf469a3d0b774923761d515c3d912",
"assets/assets/images/topiq/tq_1.webp": "264e08b05e3f5089f9f7cacf77f4a238",
"assets/assets/images/topiq/tq_0.webp": "edc4bc564ef70c7d31685bc6aa504168",
"assets/assets/images/topiq/tq_5.webp": "bffc077697df61b451025fd4c00578cd",
"assets/assets/images/topiq/tq_4.webp": "369c48bb4873bae0eade1519b13f0e06",
"assets/assets/images/topiq/tq_3.webp": "83792a8ba520a84e16f3d41319281aed",
"assets/assets/images/topiq/tq_2.webp": "44bee6ac3eb7b138ed4673eac8a03010",
"assets/assets/images/stb/4.png": "4ac586142e7e3b9dbf39a58c63224831",
"assets/assets/images/stb/5.png": "50c62a6803e6b492a7ed41ee3721dfb5",
"assets/assets/images/stb/2.png": "5ef36fc2eb2dd579d7c38dcb995268f6",
"assets/assets/images/stb/3.png": "312babcabe973f77ee75ba1b66a22631",
"assets/assets/images/stb/1.png": "abe2268783e358a57df0e78b4bea5832",
"assets/assets/images/milky/milky.jpeg": "bd020f1ca8e7d055f03058529e6bda5a",
"assets/assets/images/milky/2.webp": "e72110aa8e33532b8da4c66570cff459",
"assets/assets/images/milky/1.webp": "0e7182a7f5bf87b3a3e1fca0c6e715f4",
"assets/assets/images/sn/sn_1.png": "c88b76cb4b9ff2f0a3637326af1f0910",
"assets/assets/images/sn/sn_2.png": "c21370832ce7c9e75faddc5801f95c08",
"assets/assets/images/sn/sn_3.png": "6fde68912aa8dae2b373a281e72b8377",
"assets/assets/images/sn/sn_6.png": "62d7d34e16c2e9eadf006bd97cdb1e1d",
"assets/assets/images/sn/sn_4.png": "5d2758fdf3660e19b4b362194eebbf67",
"assets/assets/images/sn/sn_5.png": "e35e92ccfee99250acc58e5a2a4e666a",
"assets/assets/images/ats/at_1.png": "9bc342077482b7746cc7d8fc672eee9d",
"assets/assets/images/ats/at_0.png": "367d0b9670c5e4de78c1ecefe1c2c2f5",
"assets/assets/images/ats/at_2.png": "1769e2b1b8dda3d49f43bb71dd7245c9",
"assets/assets/images/ats/at_3.png": "57347acc31e4c21e96f11a5208e46e39",
"assets/assets/images/ats/at_7.png": "0fc3028bd012623923d78112fd593ec4",
"assets/assets/images/ats/at_6.png": "24370919d91fda531d677ff3d73e3a5c",
"assets/assets/images/ats/at_4.png": "b055f5d680b5abd143a5ff247a893f59",
"assets/assets/images/ats/at_5.png": "b055f5d680b5abd143a5ff247a893f59",
"assets/assets/images/ats/at_8.png": "783ae682dd128e66f13498382eb29a0e",
"assets/assets/images/mtc/mtc_2.webp": "577080911e49d0874cd42c71462e6c97",
"assets/assets/images/mtc/mtc_3.webp": "b5a487cb1a2e5fb3e10efbf9343c3479",
"assets/assets/images/mtc/mtc_1.webp": "1479e1487e90a9aeb39b0625a8b783df",
"assets/assets/images/zalo-icon.png": "a314c78d7778469ff6ce201179ce8b7a",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "e2ca235bf1ddc5b7a350199cf818c9c8",
"assets/assets/fonts/OpenSans-Light.ttf": "c87e3b21e46c872774d041a71e181e61",
"assets/assets/fonts/OpenSans-Italic.ttf": "60fdf6ed7b4901c1ff534577a68d9c0c",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "f0af8434e183f500acf62135a577c739",
"assets/assets/fonts/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/assets/fonts/OpenSans-Medium.ttf": "dac0e601db6e3601159b4aae5c1fda39",
"assets/assets/fonts/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
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
