'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

<<<<<<< HEAD
const RESOURCES = {".git/COMMIT_EDITMSG": "c3964f0bf65446d016cb5e0d61aeefc0",
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
".git/index": "654ef0af206c33c9c8f897a7e985713b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c54246c09629ca86d118ecf77dc5e44b",
".git/logs/refs/heads/main": "1f2d767f3def294529c9e65d8c68b4ba",
".git/logs/refs/remotes/origin/main": "b1f692667d492e4e0481955ac4ce7977",
".git/objects/00/655479555371bc367894b2dd1d0a14fb066478": "2be04a0517093220316c16f4a35c9612",
".git/objects/01/4d467d3a7b167ce16e11ef121ec1cca4aa9840": "14f54e758f987f03547109d8fd05b565",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/bc26fd0a7d5946260ce439e5d93b6cb42e9d8d": "8be604ab2023b339d127344cb2580e8e",
".git/objects/10/06ca4ab893ee6d3c0d1d16239c6e490ffde927": "d1f13aed6d1e35b349670345c0f8e251",
".git/objects/1e/010a95eb4ef68d75026ff5ac3629380eae383e": "2b5536fca5259a77fbe8e6ced7e8cd29",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/abc2cc5e9e008211b9b1b263b222fe2c83f583": "af0c656a77dab482e80064a32f6a6c56",
".git/objects/29/ad380a5f41588ff1deafff7c8c86d3b3b41eff": "46e853c1bab565fb82b47b5aa895b060",
".git/objects/29/bfb7c66c7d3dd3413f86ba88763ecb4baab5c6": "c46f825b4fa9241195645c36778c7479",
".git/objects/2b/9a0c6abb4b02db5f292235d7debbc228f058d7": "b5c5ab61feea944d6209b60ff9884212",
".git/objects/2c/f53d56312eaa835ee2051c1edfa5e1f3df791e": "d870229a80fa06cae323d7cc45d3a69e",
".git/objects/2f/2bb19e7e618c92fa1aa3855ae25cc96cdcb1f3": "847cd518f1be660481821862cb6c9215",
".git/objects/30/e75d7677e5edd70d31bb7ca12497ae2c2d88d4": "2ce47027628fe27803c1f799d9468e69",
".git/objects/32/3f01c54314746f78202fead63b453275b3b3ed": "bd1c26d17b0cf5c38e5be1adeb9d04f5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/62cdef121113a7b8d11f1422d7dea9f0f6a23c": "04fee04b6cf164725546acd4182b20b7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/d23b2ed467392a63cb03e0b3b3336a72e75fbb": "b4a28490943c904e16fb96a6734eb7c3",
".git/objects/3f/d43b8b830107132747612b7a63ede1d5ea8092": "a62211f9c946382fa156d1a47618ef98",
".git/objects/3f/d472d066f67b81369fb09baced25f24fcd7542": "e1c3516f2aced2d709075eea594130b6",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/a25f8555c653c6318f86e1ab041768848c9a47": "a0e54161c3b17be3f9dc0c3070bbb1a7",
".git/objects/43/bed275d2bde26e654e45e6ec627b7533f0a9a0": "4d77136f114e46cd5ef7d76ca3f8e9b4",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/917f89c08564928af7fb6d0aa27460cbc8d2ba": "efa9e981c3e19031e50301ccc7d9e694",
".git/objects/55/82123878c784e796dbef1b066f933b2ce181d0": "56cde64291ef5eb92be6a5ba4d9b53dc",
".git/objects/5b/8de83c12a2b4c70ea43918c55e2cf98adb0f44": "0debe29cc635d1f103f9bfba13d40a2f",
".git/objects/61/80ba649597f4dc00a271199aeed1ef5b55eda9": "5756f08f16b1446bd231ab193d8f5077",
".git/objects/62/6c569ac8ee1f26244197fdb1368c8d5a08f9d8": "b1116c0c01e4ee1fc9a824e9d1102ca0",
".git/objects/63/363fd07a27659d3711989e3d4b118a8e3cc692": "1f9e9ad05b90d4fd7f3b568a8cb3a114",
".git/objects/66/0358d40662a0634658edc6ca1b99e2b25a2a0a": "cb9b2a24708bb8fd3a6611383201cf45",
".git/objects/67/b9872c1f24da58a2750572d742b46341f964b8": "e1dc50d48259786313dd60d657bd6dab",
".git/objects/6a/05022accb0f03fe2264f80247953cf7def6387": "3e6127627f5ffd617622b33c962d5f62",
".git/objects/6b/be57b7de5369a2685a29a340fb3d841ee069d7": "f55475257b466015b694e35d9f1d153f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/e24f4366b735207ce296b8e4909d40aa5dcef3": "beceebcf337845665b8a94ad05f1c7ba",
".git/objects/76/98a190691bf2cbbaa3ae51f034c3d8cb934ea1": "969359e33802e109ca76dcd9fcd84812",
".git/objects/78/64ad18f66195d8a50024c7d8823ac9b3def6cb": "7ccb0c03788674d4a3986fbc0ea23a2c",
".git/objects/7c/24c6468d5555c1da4d81b25146c2bb43968fa6": "74aadf8f5a00eb6f11c6b36a8d7a3ece",
".git/objects/7c/cf87033a6f6cf817870057fbab3287d5b0af9f": "f2d09d9dd87eef7c1b4673b6318fa52a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/98b109bda5b5e14affdc660af7c9d0190fdd49": "a065f3e57db03d89ce943e5ce288b5b7",
".git/objects/97/1cda47ca6fb805d19a8228def2780832309df9": "4671290840aa29acaed780b523e282c6",
".git/objects/97/a1dd63e5dfdc9d9a39079567107d7805a18bc2": "0bc66aa8a02e667182a60c4b258308a0",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/f4ae75b3db741003c2f8d880f365194307a3f1": "f7c04edebdd6d0da77100fc1ae288067",
".git/objects/9e/6b139d57c776c8037001eafb01d8ed6af14a91": "d37e398e469c6789c787311fd67288f7",
".git/objects/9f/b9dc359c975302561e730c0434d88a53281a47": "eb104cb10f572896d5a055e623c93419",
".git/objects/a0/25ab4c87e3f615b0eea3cafc8276bc00e7a9f1": "7efdd168481b0e5f2c1efddc844c4ae9",
".git/objects/a5/5aa31de4946d05302eaec0f14237df981c6066": "5a437bb72b70b4d0c9e63194cac535a1",
".git/objects/a5/753a6fa6ee86d78f13d25027f72b5a12e2337e": "62257ab873d6daa8f4058ffd15f597d8",
".git/objects/a7/12ded90b7f618eb7aeaa45a380612af7ee1283": "a678afcc0638bb96f5d08e6bc528b38b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/c719f3b77870827b34cf3c5787676b1649a915": "6215bda01dab005df9f99ad58603ffee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/0656a5eaf3c326c132ff58b8ff9089f8468eeb": "2d24a33f37f16cb2485ebaf661088f6f",
".git/objects/bc/9eb3fe2c6c0bce7a3f63ed0613c2d74a4c2917": "651004808a1a4687953ccc41cd5a8f51",
".git/objects/bc/eefeb0a98d0d24f812f17cb849b3a50a594196": "ac43dce9e0af8ed132916d95dc13abfd",
".git/objects/bd/1eae6b14c1550a1ef81215b632c94fc8593bb8": "c868475d2eb28501cd82418581897996",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c2/97fd4d7fecefeb1581c78e9932536939f827c4": "5fb7dfdf17886b0d692f154e1384c688",
".git/objects/c4/7ac79cb31ad93b3957ab3b37c5743c30d517b9": "8a390fbe04bd135199cc3da2ff3ed669",
".git/objects/c6/bc4ccdf3a031c2148030e08dfca3bf4b9f240c": "bf2acd92a7d13a955d245f3846e4c3c6",
".git/objects/cb/3199e08479b5839aca95b7e08270fad0cfba54": "a7be5d2fcca224f06bcde201c122c1bc",
".git/objects/cf/4f2967067712a544a0b92b74627ff4e6b2cc83": "945a7a69565484e09d209c2030382f55",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/fec9c30abea423f28f49084ce2fc97a6d97c9f": "44f75f3da251ad41987c9104f46b1e48",
".git/objects/d7/0aad47176e61f597277f767a853d10b3400a60": "5a2b006379545db479bbb6c92f09da39",
".git/objects/d9/462bf77e4979d93d1e330e345c3f23a930f45c": "c6aae3955a3c4952602548f57bf0a16f",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/e01eddae96509ad200107568702abcd7114da0": "c65cee9d123a79668254a4ea556f5e7d",
".git/objects/de/0eed15b3b743b871763dcc8127d8ec3396a53e": "f75f60a783fe16d7e95758cf1b40bf82",
".git/objects/e2/f20b3726e3b8e76a057a9853969e1c2fd58eb1": "82abef95aeb4bfdf7ab9ad6ad71a2bb7",
".git/objects/e6/32acc12034f1506f6e7d3ded89223c7151b14a": "61a08a9ae669c4640e4328006563fef4",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f3f9077a56bea13e68987c70e3ebc3bede234d": "f6fd9bc69b93719d56719f6afb070b46",
".git/objects/ee/b41a238b51ae612a5bc08e83985f8883162fdb": "400fcbcd9df37d0a1af1273e35c81673",
".git/objects/f1/224b236ea04ff1fed08f7df6bb7d44d2053c2d": "11c98fffeeedbede1521d61fdfeba9fd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c98b8912e8fbdf04d2222fbbdf2fcc9cc605ee": "0727f730118e5e47f5d1556ceae1899b",
".git/objects/f4/37472a036079d44e83953342b71e1243b4cfcb": "4e78ac31406028e66ad7c42c9932ee4a",
".git/objects/f4/cbc4e265880db630b16af7cf7bab2cfe507d15": "c9e9ae98460ed9e9d9eada1780dbbc91",
".git/objects/f5/192c29f85fd96a20b748ae357d3f36b73f1cda": "5ef40807e8586352f46e719b3950d353",
".git/objects/fa/dba88dff2294d5ef937524135637bb0d1bb8c5": "f4b87f6c0c2d33cdd032ca9c3b463976",
".git/objects/fb/226211f2a3b98ca47754f4a39daab34e0deb6f": "aa7d172876d5dc1e0b523887351182a1",
".git/refs/heads/main": "0165da1f0cc67f4e434455547c20010f",
".git/refs/remotes/origin/main": "0165da1f0cc67f4e434455547c20010f",
"assets/AssetManifest.bin": "5e60f00c4bc7ec143f12567ae9db781c",
=======
const RESOURCES = {"assets/AssetManifest.bin": "5e60f00c4bc7ec143f12567ae9db781c",
>>>>>>> 360de17 (Update code)
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
<<<<<<< HEAD
"assets/NOTICES": "92656b36081ad30260c0b377ce9bb1dd",
=======
"assets/NOTICES": "cfe6533571300d89f659694ad11e7ba3",
>>>>>>> 360de17 (Update code)
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
<<<<<<< HEAD
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7f4feb514911b34815bb54f2af2a2a4a",
=======
"favicon.ico": "968bfd2ccbec9ad9447bc7a8adf02e05",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "fa17c0ca05f71980a5cfe399f9134303",
>>>>>>> 360de17 (Update code)
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
<<<<<<< HEAD
"index.html": "d1345d1cc7ff7173a9108e2b5134d4e5",
"/": "d1345d1cc7ff7173a9108e2b5134d4e5",
"main.dart.js": "7f586bf95194eeb16e5d10b67d582eea",
=======
"index.html": "1caa07b197ce5c03b0e55c6d08d75c42",
"/": "1caa07b197ce5c03b0e55c6d08d75c42",
"main.dart.js": "81f2dda4f5ad0aa1c41cf9c02d5e7d6d",
>>>>>>> 360de17 (Update code)
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
