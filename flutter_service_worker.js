'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0339995d77283bf5774087f1aca7d2b4",
".git/config": "4ba48a3f7185940ac8c19c970974800a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e7a17a931bfb590c9831e79dd841268",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f4527e97552d5085233d30fc222ed3de",
".git/logs/refs/heads/main": "72902bf90ee34accdf0149d49b3fe842",
".git/logs/refs/remotes/origin/main": "c4a3920b63166dcef63a6002804b8ad5",
".git/objects/00/655479555371bc367894b2dd1d0a14fb066478": "2be04a0517093220316c16f4a35c9612",
".git/objects/01/4d467d3a7b167ce16e11ef121ec1cca4aa9840": "14f54e758f987f03547109d8fd05b565",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/ad380a5f41588ff1deafff7c8c86d3b3b41eff": "46e853c1bab565fb82b47b5aa895b060",
".git/objects/2c/f53d56312eaa835ee2051c1edfa5e1f3df791e": "d870229a80fa06cae323d7cc45d3a69e",
".git/objects/2f/2bb19e7e618c92fa1aa3855ae25cc96cdcb1f3": "847cd518f1be660481821862cb6c9215",
".git/objects/32/3f01c54314746f78202fead63b453275b3b3ed": "bd1c26d17b0cf5c38e5be1adeb9d04f5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/d23b2ed467392a63cb03e0b3b3336a72e75fbb": "b4a28490943c904e16fb96a6734eb7c3",
".git/objects/3f/d43b8b830107132747612b7a63ede1d5ea8092": "a62211f9c946382fa156d1a47618ef98",
".git/objects/3f/d472d066f67b81369fb09baced25f24fcd7542": "e1c3516f2aced2d709075eea594130b6",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/a25f8555c653c6318f86e1ab041768848c9a47": "a0e54161c3b17be3f9dc0c3070bbb1a7",
".git/objects/43/bed275d2bde26e654e45e6ec627b7533f0a9a0": "4d77136f114e46cd5ef7d76ca3f8e9b4",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5b/8de83c12a2b4c70ea43918c55e2cf98adb0f44": "0debe29cc635d1f103f9bfba13d40a2f",
".git/objects/62/6c569ac8ee1f26244197fdb1368c8d5a08f9d8": "b1116c0c01e4ee1fc9a824e9d1102ca0",
".git/objects/63/363fd07a27659d3711989e3d4b118a8e3cc692": "1f9e9ad05b90d4fd7f3b568a8cb3a114",
".git/objects/66/0358d40662a0634658edc6ca1b99e2b25a2a0a": "cb9b2a24708bb8fd3a6611383201cf45",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/e24f4366b735207ce296b8e4909d40aa5dcef3": "beceebcf337845665b8a94ad05f1c7ba",
".git/objects/78/64ad18f66195d8a50024c7d8823ac9b3def6cb": "7ccb0c03788674d4a3986fbc0ea23a2c",
".git/objects/7c/24c6468d5555c1da4d81b25146c2bb43968fa6": "74aadf8f5a00eb6f11c6b36a8d7a3ece",
".git/objects/7c/cf87033a6f6cf817870057fbab3287d5b0af9f": "f2d09d9dd87eef7c1b4673b6318fa52a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/98b109bda5b5e14affdc660af7c9d0190fdd49": "a065f3e57db03d89ce943e5ce288b5b7",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/f4ae75b3db741003c2f8d880f365194307a3f1": "f7c04edebdd6d0da77100fc1ae288067",
".git/objects/9f/b9dc359c975302561e730c0434d88a53281a47": "eb104cb10f572896d5a055e623c93419",
".git/objects/a5/753a6fa6ee86d78f13d25027f72b5a12e2337e": "62257ab873d6daa8f4058ffd15f597d8",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/0656a5eaf3c326c132ff58b8ff9089f8468eeb": "2d24a33f37f16cb2485ebaf661088f6f",
".git/objects/bc/9eb3fe2c6c0bce7a3f63ed0613c2d74a4c2917": "651004808a1a4687953ccc41cd5a8f51",
".git/objects/bc/eefeb0a98d0d24f812f17cb849b3a50a594196": "ac43dce9e0af8ed132916d95dc13abfd",
".git/objects/bd/1eae6b14c1550a1ef81215b632c94fc8593bb8": "c868475d2eb28501cd82418581897996",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c4/7ac79cb31ad93b3957ab3b37c5743c30d517b9": "8a390fbe04bd135199cc3da2ff3ed669",
".git/objects/c6/bc4ccdf3a031c2148030e08dfca3bf4b9f240c": "bf2acd92a7d13a955d245f3846e4c3c6",
".git/objects/cb/3199e08479b5839aca95b7e08270fad0cfba54": "a7be5d2fcca224f06bcde201c122c1bc",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/e01eddae96509ad200107568702abcd7114da0": "c65cee9d123a79668254a4ea556f5e7d",
".git/objects/de/0eed15b3b743b871763dcc8127d8ec3396a53e": "f75f60a783fe16d7e95758cf1b40bf82",
".git/objects/e2/f20b3726e3b8e76a057a9853969e1c2fd58eb1": "82abef95aeb4bfdf7ab9ad6ad71a2bb7",
".git/objects/e6/32acc12034f1506f6e7d3ded89223c7151b14a": "61a08a9ae669c4640e4328006563fef4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f3f9077a56bea13e68987c70e3ebc3bede234d": "f6fd9bc69b93719d56719f6afb070b46",
".git/objects/f1/224b236ea04ff1fed08f7df6bb7d44d2053c2d": "11c98fffeeedbede1521d61fdfeba9fd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/37472a036079d44e83953342b71e1243b4cfcb": "4e78ac31406028e66ad7c42c9932ee4a",
".git/objects/f4/cbc4e265880db630b16af7cf7bab2cfe507d15": "c9e9ae98460ed9e9d9eada1780dbbc91",
".git/objects/f5/192c29f85fd96a20b748ae357d3f36b73f1cda": "5ef40807e8586352f46e719b3950d353",
".git/objects/fa/dba88dff2294d5ef937524135637bb0d1bb8c5": "f4b87f6c0c2d33cdd032ca9c3b463976",
".git/objects/fb/226211f2a3b98ca47754f4a39daab34e0deb6f": "aa7d172876d5dc1e0b523887351182a1",
".git/refs/heads/main": "3cd155c0e110dc9cd04ac5e9e2c7c75e",
".git/refs/remotes/origin/main": "3cd155c0e110dc9cd04ac5e9e2c7c75e",
"assets/AssetManifest.bin": "7852b46d44179a4156a1ab7b7d86d4cd",
"assets/AssetManifest.bin.json": "14affc2f6dcf1244d75eb33ed7f129b2",
"assets/AssetManifest.json": "580d36faf90e0765d6126340a4183db1",
"assets/assets/data/questions.json": "ee86bdd31596d3319a4f534e82c49496",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0f0e381a248b5a892bb9aefe5018525c",
"assets/NOTICES": "a6df64b741df818fb78b49feeb918c50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a5e647eb069a226e3b897a4b6ff251e6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "33c1e95e3fbc6b6d10baaacfee2a40dc",
"/": "33c1e95e3fbc6b6d10baaacfee2a40dc",
"main.dart.js": "111168b4a18739c14a82ebba5868397a",
"manifest.json": "575135adbbcb637a446d4e1b59dd1f6d",
"version.json": "fd3f5e6050a9faa08e74f115f0782ac8"};
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
