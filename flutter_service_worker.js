'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01921fd654ab44bd7aca8cdd77e8925e",
".git/config": "c2854a35bcdc8b1c84fdb918f59bffdd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "57b96f9e6f27afb2aadeeb92b5e371c2",
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
".git/index": "34b997239e141422391b556447be87a0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "200d3ec555b157c0b7ac2070dfff1c33",
".git/logs/refs/heads/main": "9171738350fbb2e4c3a79d2044a9216f",
".git/logs/refs/remotes/origin/main": "199a4a842a2c525c8816366a587723de",
".git/logs/refs/remotes/origin/vercel-deploy": "9da8f5002b3b570af546f757d9ed0302",
".git/objects/07/12affeb4c6d5ff0a58345d978a90fd924d40ae": "16cdff1f9daad6878b10a6f36e082397",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/bc26fd0a7d5946260ce439e5d93b6cb42e9d8d": "8be604ab2023b339d127344cb2580e8e",
".git/objects/0f/f45091cdec6d62568255dad8415577a438224a": "2f18289de37fa65dbf69d2f923767c57",
".git/objects/10/06ca4ab893ee6d3c0d1d16239c6e490ffde927": "d1f13aed6d1e35b349670345c0f8e251",
".git/objects/12/ac1537a0295b5fe910554aa7d89d8d096e9fbf": "1404cebc2702398a58abcc2119eb1d93",
".git/objects/1e/010a95eb4ef68d75026ff5ac3629380eae383e": "2b5536fca5259a77fbe8e6ced7e8cd29",
".git/objects/1e/b9bd4b76a26dd278ef57d57a9b9852b8cab772": "5e62595cde8a38ee29fc898b1cc85511",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/b75369dddebdbab985afc5ead2b81c5f5a4be8": "45272d8a15eebf4a36973d9ef2f7d58d",
".git/objects/24/83320944bb7a75e87eef647ecedb492ea5da31": "a8b0c771fe44ebaa86e7dc75bc3a774c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/4569d40b3063f9b53f0f6513355698dbf9ab58": "746109e960d2a94b7c902228f71b798a",
".git/objects/30/dafccc7be47f405b4379e21f205a89354cc470": "55ccaaeaabf653df28fa8e190953895b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/0de17094aa51f15c1c521f7740dc87e5acd6dd": "9fe8add4835e69181ac0e884b64a91a3",
".git/objects/38/c60aabd99ad3e7703a64cf8d1f30f36385e140": "316376cb5f938afc5cde51f6a2c958f6",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/ac5b88d235802ffe065e04db1c888f06b14c90": "9b0050391c3270932db609298810d7b6",
".git/objects/3f/d472d066f67b81369fb09baced25f24fcd7542": "e1c3516f2aced2d709075eea594130b6",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/ffcfc187ce0e7f619588aa14e1eb87609adbdb": "f1830bd5401d7d57036ac211c702f033",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/28c0986d666d5555a7f8e7994e87dba4d4ad1b": "6209684581cdba31d4be611c2feb9ee6",
".git/objects/55/6e6adc0101ba9de5d7d1e21d8a43f9a673beec": "4c317284be75c844a9ac05e3309f2b9e",
".git/objects/55/82123878c784e796dbef1b066f933b2ce181d0": "56cde64291ef5eb92be6a5ba4d9b53dc",
".git/objects/57/6c576dc0de61522629b4c65a47a10945a450a0": "17d1d56829c008d7025816cb2d64cc6a",
".git/objects/65/c52b0120fdbf050397853146bb29903abe5edc": "cc57fa7d3f9ad4047b51e28a1d94b67b",
".git/objects/6a/05022accb0f03fe2264f80247953cf7def6387": "3e6127627f5ffd617622b33c962d5f62",
".git/objects/6b/be57b7de5369a2685a29a340fb3d841ee069d7": "f55475257b466015b694e35d9f1d153f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/77/24074a11850b2075b66d6dd54d26087debec67": "fbe5d0f9ad929d78e80267e0dad5fec3",
".git/objects/80/019432eafad5ad3004056183a476a8b00a4eb7": "18d4aecffc09420df5e6911af0a284d8",
".git/objects/82/bb826a062d80c069304e8acc7523b83bc779d0": "354d6538e545e1fbb9baf46060a3cfda",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/0c23dd7ac068fbf4611d572e680d722d3b3d00": "a8b386df50de90bed8e2b28fd20c42c3",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/e7409b2538f8a548aa4f513160dcb7fd3afbdf": "5d1c617e52df74b23f1c2969aa08d269",
".git/objects/93/5c4b38c08866d415f11963f70baac5274ee80b": "d74c0166c323e272b127702e928521ef",
".git/objects/94/98b109bda5b5e14affdc660af7c9d0190fdd49": "a065f3e57db03d89ce943e5ce288b5b7",
".git/objects/96/f5b3c9283c425b298a22572fe8f3373df5a9dd": "101ad26f3ba2d8f8cdade206fae1c7fa",
".git/objects/97/1cda47ca6fb805d19a8228def2780832309df9": "4671290840aa29acaed780b523e282c6",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/245e1933dd4c3d1b95407495c3ef9c74046628": "b20650c36e999f462efaccd2b75c0407",
".git/objects/99/f4ae75b3db741003c2f8d880f365194307a3f1": "f7c04edebdd6d0da77100fc1ae288067",
".git/objects/9b/84782754e7405321e7f47a1a19aaae6bf3f57f": "7ceb5db62d0ccdb4ba75b2a69aeff674",
".git/objects/a4/36538570c3c671ec6eb2f1ba237f9f7f2514cd": "222dbb2409084be3104daee6cb695bbe",
".git/objects/a9/e19c6315a96fb47817896a6680e1daea439641": "3d6d322aec37238a085f7e0f8541bff1",
".git/objects/af/201f3ffe1d0165453e1f7fdbf789560a812516": "d16c17f4d67a337700e3c8288b0c78bc",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/353491c03bed549a498efae82dd13fbf1352cb": "6cdb865914370c667335b398448b6249",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/9eb3fe2c6c0bce7a3f63ed0613c2d74a4c2917": "651004808a1a4687953ccc41cd5a8f51",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/0548c434d54b3fe9f9180c9720fc7caecfebb5": "5df2b3f51d11dabfcecda0529c88eed7",
".git/objects/da/0e480d1f1940cc158b2c492c43e169454951a2": "824176f3ecb10dbfe67344320b8a2a88",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/f1e9c02ea14499f441274fc846a96be17ea63a": "fad023c3c4c3e46e98a377fcdc10ffe5",
".git/objects/f1/6371215b86d448e9f00f4783bff4307dfe7e42": "54a1f7123b1dd83d769a183e3ecbd550",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/dd0bf847632fae5bcfc5630fc6ae599455ab4e": "85bf8dfedc60764ee604af8bad87bd0b",
".git/objects/pack/pack-278c780fe7cc7bab3bc1b1f820f9adef28cb223f.idx": "188631a888b622654ffa2c096087339b",
".git/objects/pack/pack-278c780fe7cc7bab3bc1b1f820f9adef28cb223f.pack": "49f65ae78211b7486bacc0075f77dc24",
".git/objects/pack/pack-278c780fe7cc7bab3bc1b1f820f9adef28cb223f.rev": "f63ec9ea6b6e3eee777105de9e977cbe",
".git/ORIG_HEAD": "54c696cf3807e7d4bf91961ce32990a9",
".git/REBASE_HEAD": "54c696cf3807e7d4bf91961ce32990a9",
".git/refs/heads/main": "fc24b7245bd55d8ebe4643116c59748c",
".git/refs/remotes/origin/main": "fc24b7245bd55d8ebe4643116c59748c",
".git/refs/remotes/origin/vercel-deploy": "ecba4c70a22130488453a52129c7e2c4",
"assets/AssetManifest.bin": "5e60f00c4bc7ec143f12567ae9db781c",
"assets/AssetManifest.bin.json": "a28b23924ec281d3213b71c84827e049",
"assets/AssetManifest.json": "1a445a712b5acf24913264b0b30b976f",
"assets/assets/data/definitions.json": "c1e64d7f7f43d3360ac57b1716d2d696",
"assets/assets/data/hints.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/data/mb2_physiology.json": "7966323fec6eaec5a5ad7b1cdd0a1a3a",
"assets/assets/data/mb3_env_health.json": "ea8970bfd81a2673cee24257dfaa6ac6",
"assets/assets/data/synonyms.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/data/topics.json": "da45ba09a82f0bc429acb92b116eb574",
"assets/assets/data/viva_questions..json": "d0d2461c27ebe38feb2e4ea2afb10dbd",
"assets/assets/data/word_builder.json": "d573f3c37c7e47425c09cdba5aa396fe",
"assets/assets/images/app_logo.jpg": "f5e683baea0e77285be59252fc0ebd4c",
"assets/assets/images/app_logo.png": "b840b70d0fb6f9ed36a68e0788a2c9d8",
"assets/assets/images/favicon.ico": "968bfd2ccbec9ad9447bc7a8adf02e05",
"assets/assets/images/splash_logo.jpg": "f5e683baea0e77285be59252fc0ebd4c",
"assets/assets/images/splash_logo.png": "b840b70d0fb6f9ed36a68e0788a2c9d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dfd3354fea8d23633db56c96b095f2d0",
"assets/NOTICES": "cfe6533571300d89f659694ad11e7ba3",
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
"favicon.ico": "968bfd2ccbec9ad9447bc7a8adf02e05",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "fd1c5123c58440c5023df79f371cf2d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1caa07b197ce5c03b0e55c6d08d75c42",
"/": "1caa07b197ce5c03b0e55c6d08d75c42",
"main.dart.js": "7582f0596857dfa19bf5c0d629fb3bb6",
"manifest.json": "e8a0de710d3447a1ea2af217493d490b",
"splash/img/dark-1x.png": "00fa7ab86d98c348446eee65801fd0e6",
"splash/img/dark-2x.png": "835ef995fe91174f78f853dcc5141037",
"splash/img/dark-3x.png": "7adeaea63989133f5a3a572bcbc34de2",
"splash/img/dark-4x.png": "1741e25210e503a3b8fbac69ec32e796",
"splash/img/light-1x.png": "00fa7ab86d98c348446eee65801fd0e6",
"splash/img/light-2x.png": "835ef995fe91174f78f853dcc5141037",
"splash/img/light-3x.png": "7adeaea63989133f5a3a572bcbc34de2",
"splash/img/light-4x.png": "1741e25210e503a3b8fbac69ec32e796",
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
