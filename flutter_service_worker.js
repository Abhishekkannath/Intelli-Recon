'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8690117845dde9ba6d6641d380a4169",
".git/config": "8f7d40a16481f34fafaa10b7734aa55b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "356d6f614ad5c35b1d61cf7c95ebd67f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a49da0717960d47850f758e8f02402d9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "461c57ee2e6515cf75b545f476ce092c",
".git/logs/refs/heads/main": "461c57ee2e6515cf75b545f476ce092c",
".git/logs/refs/remotes/origin/main": "53f3e9dc255d947b3c52ce8a9e2ffcc3",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/4b0d0a643669fa49727e8832216b2dbfbec622": "7e3bacb95c3872b1e3e5374bcf5a9576",
".git/objects/05/27f8c40a5629b851a6996a7cd31092d75639a1": "c33d6532f5a2c09044c8f252baf8d368",
".git/objects/08/b3473ec2ccaf185a9726bd90ef3a80eded48df": "a5f5b4bfe18bc98a3da4fe84b1156819",
".git/objects/0a/553856bda708a793f33a5eb57c7900d26a4395": "b492cb625063aeaa8a355ea726120fec",
".git/objects/0d/0399fcd9cc55fb88a99e113b82ca8a63d54b23": "36e333847f8e9d371a01b551027593b5",
".git/objects/10/27eb6d3f6778fb32d44adfd2a211606a30b241": "75ae8df11a38d4b9a9bb5fdc3239878a",
".git/objects/10/3985d05f0df2181328ccb2b05d79fcce5d8961": "6a0e39ee71904842c15c4cf1ae63c6af",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/d13e33521c2094230b8dd88ef336d679296bcc": "4a4a7e17e4be0ec9fc0b4e4123660664",
".git/objects/1a/bf35c602a2a0acac7463c053c99bbf0720d6a7": "0df33a269aca9313360a6bf185ffa58a",
".git/objects/22/f3bce4a3c0fd0e32f82e6750a6be0500ac88e4": "07c7deb12885f68667ec14864cfc6a76",
".git/objects/26/75a65517e2b0cf768f112d97c962a83203b5c7": "13d99c2d04a91a66057ef04945b80fe3",
".git/objects/27/f43edc3d3e01cf5215c226ab22434a991ca93c": "c35dfbd71d7d03baf55b11b6c1da17c5",
".git/objects/28/bf4eecec13c597b28c37c6a56f1415dbd151e9": "9af69b61b1efc2c1e6496192fdd9bda3",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/eadc9bfc8a7a758e2f0c494bb4c1609dd22e44": "54949173b4c4139167588161b8931e4b",
".git/objects/36/c55753ff8c4c03a1ee83afe6f1fc382f92dc5c": "46cdc29b6b5b2f42adeeb2428013fdb3",
".git/objects/36/d0444f99e558ee8165e523b21823c332821ad1": "e7aef52e76361caf3e7439ad92ba1ae6",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/dbf832dbb138d5feb552c19a9ba9f6d86b8e97": "8d9445c720c4dc057f40451f1e56b7f0",
".git/objects/39/03aa0dd00d235b80d8b09baea030450e09302e": "d4afd44f02090057b60a61b10507fbee",
".git/objects/39/4cec18596de58fc8a18ff200d3615a28ab6406": "b1b2073d36dac1d1136f306a3b66f538",
".git/objects/3c/7cf6a29a0816648ebc91034a70e3e76b9ae845": "dd6e4a2feeb5840e6c1b78f1654263f0",
".git/objects/3d/8f3becb476a88554d68f0d4878b6f0757a8224": "d7ef43e5dc33aeb9ab22817f4389d74e",
".git/objects/3d/d2ef9a342a0f81a21cb4d3cc358c64bb9d5cee": "f9720983edf503bb578ca41bb6ef7729",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/a087bb1e6825ff09efac2519bfaa1e7fc1af33": "dc6c0e9e6fd5344f99787902e4206f22",
".git/objects/45/af2dd390ab0b59464cc3e540ebb160e22bf204": "c74d8b3fe295f62151685687ac8697bd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/a03aae4101b237c1128a20fe95955c6200158d": "7547a80a4c66ee2b8e35af896fa5264b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/b4c221f53d23fc2d3a35ec546327a72e989bbf": "2b93d200680038a8c0bd525e6ec45b09",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/84e2d8b16edcd27786c21a0b3e87a8d1c89587": "63bb04f8bd435930d090c9ec46ed89f7",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/59bbd99656c392f2bb4e3eeaef8168bf997d09": "9aa888977d4a8d25fd45dbe288667be9",
".git/objects/4e/5bd81c2835b78a7c4a8d1663a54c7d9244a93d": "7d5cc842fe186113ebaecee7a0ba77fc",
".git/objects/51/ef8fd6c67c88ee2466bb034022be4bc1c83845": "edfba8d61d74de5097eed0db42ea5eeb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/7226dde23ce73caebe3e2dceafffd116ccbd11": "c73bcd4b0f958433a5fdb6bfaf4a896c",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/c285ceede20bdc3a02f0d79aaccd6de65039e2": "b15f66ca5c3761895e573205b721a359",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/e2197f8cb2a0923e01b53e628a91294e013a72": "d2a13e5c5edd398fc62b1333bc76103f",
".git/objects/73/49f4bf9ecd6dfc97dcd4b4e40f11a32c75237f": "e36e1cfbc584d97c984da3e5ade47675",
".git/objects/73/902484a99ac9f83d9b6b96c14daea1c3a53e63": "a5d4976fe7ff1e6cf91a6636e6a12787",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/59bd0d1111db196ec46f8f9869d26d9ec6ecd1": "cebd27f8bbd328f43a1bdce046ae1c32",
".git/objects/76/4c42f85ef8cd9b3d910f1c826069a6ef32aeaa": "14258d6b17567a4661651e7a2f6bfb3e",
".git/objects/78/1914c01e7e033b2c68a277bffb01e9b0fe0e26": "7592393f6a5b67e9f0559ce46a62f3f9",
".git/objects/79/1c480553e653e5e503a12474861d1effa01ec1": "024767508e331b91f500eaa9616423f2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/f33458de90782d1f2cedbe5f2584aa5c689cdf": "3c195327eeacb1e901681c5dd2f97368",
".git/objects/82/bacc2e768a3a9984253c25bfa778337c85ef13": "3ed08a832b146de167d1e763cd5b9797",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/d9876118d7b7dda740a28e6a85e6181faa148b": "53371067bdf830562a851386b544991a",
".git/objects/90/eaf11cf583b003a3fba8a201530c58f912fc89": "0ef130d6448f0e929ede9bf35d577f21",
".git/objects/94/2d5aa46b9d40430d0fef8eb2c085f08f50d371": "de39cf5b9b284589236820960987cafe",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9a/f693e3f4867ca8c2cbcfa9ca1014224fb68323": "dcf87af77373e02ea4359451b2cde42e",
".git/objects/9c/23bc0b757fcb61d5f33172317c76dca2db9c7c": "91b7ae86b69d7e893a7a9dbb188202c2",
".git/objects/9c/982a3266b61eb1b9db4c15387d49fd3a9dfa8b": "c80dc794a485b812601bdc1779e3e71b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6717c93decd1efb9d0d197cc1818c3776c8d55": "0728af4b03f3476fdc108a5d7702fc1e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/061771d8137c5a093da8df66dd9431b72748c9": "4cb45d41961dabb9add8b0240ad83c54",
".git/objects/b1/88f28bce3c4bdafec6ea5d859c925bc9669005": "eadca12b87a66182fb6d5bdb65991723",
".git/objects/b5/d3653d1ba3b4a3a01faf8b0ca97f4a3ce2a5d8": "feb15de979ace5e17f4e65b1b6197a44",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/0efc8cee84cbdea493e4932b0e168b5104080b": "6ddb01d893d29060975c4031ec41b920",
".git/objects/c4/ce579abaa2aeb944004d6992abc2bcbf396642": "58975ab462289896754aa6ede9e2480d",
".git/objects/c6/1626d4db0162508e05ed518e9f7cf53572a663": "6561110553849b6584f8e1476e71d3d7",
".git/objects/c6/ee0e960aced5579cf6bd337ff07cfdaf421c1f": "93b6d3eaa6ee601efe5f3605e320b9d3",
".git/objects/ca/6cfa6f7e0580a6b2a35d28c3c5b69b57d65a39": "3fc0b93e02ab9d5117db30c125101382",
".git/objects/d2/3a564baebdd1450998ecc0f98bb90c98216c8b": "0e8b12620a6161fdd597b4a57dcfb904",
".git/objects/d3/9af4b6a0b149c931b8243862605e5045c5d55c": "3541e9e92d74b737fd633093e143ca86",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/2113c3d262b74ea6e5e5ca4683234b0a7537b0": "b3e51e81d86b8b971bfa7a57a9a8f769",
".git/objects/d5/64b837d133da2ecc221d377250ad207cf52908": "98ddacd69168c991c8a9c88e67f5bc96",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/7e9777d377b4e16ef42dbefacecd43f4244eaa": "356176514bb056a03ed146506119f33d",
".git/objects/d8/b8e6cff4a899e57b9600dcd0c152b3da0fddcc": "9dbadf40940aecf6817465d2630a33f0",
".git/objects/d8/d79795c4962d6eda583bd995b9228c1dfa6b34": "809be388ba845ff2671d18df2e61191c",
".git/objects/dd/a5144618dd32e8cbaac3472b3a979da33a5862": "b4d5fc76dd5e95f91e728f1746a08b4d",
".git/objects/dd/dab8d3779aa163efa8ec57d32775e0a9c55511": "7de44c589ebb0bb4bf2b593bf400472f",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/556d36160e8f787a3e448de876fbcd1eb67adb": "f4fa3579651e773e54c1fc71401f4a90",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/5088499ede9a2a534c98bffd32b941958e8222": "b13fde49d7b2752eaf96e1c9a12899af",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/5d5d51ab54bf61810c078386c72c8c9c193517": "17ab145711dacc9bf6cf60fdc1aedaa2",
".git/objects/ea/a70bc65eb4bb10e601ee02c8b7bc7151a1f98f": "22aa8a1175e6fff43665fca0fad8c6f5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/85d4af8b652d26077bb382cee567a2a4eec3eb": "5f82ba8e43070336c87b454031ed5f07",
".git/objects/f4/a3b5de3cd71347279870008817e671b384ec9d": "9dc61e213e6093ce88b999d84abf3d0f",
".git/objects/f7/20c7a9817e908a4153deea100f63a25480ef8c": "55868f135ef7db61dbae21d2411e5123",
".git/objects/f9/5c06debbf716a860bc845ac3ac635b7016753c": "909556b844b9ae2932eadfd4f24e9da9",
".git/objects/f9/a2caa3a8a7ff4d2eec2320f4733e2010d55123": "d8e7a556a4dc6520a61adc500bca87d9",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/a459a6f65fd5bdfe54a033e8831ef4bce8ae85": "0cf8c12a0e10cee6a105a5087bc8631f",
".git/ORIG_HEAD": "4924a86b75d5d005f04fdbb3a7b51ab7",
".git/refs/heads/main": "4924a86b75d5d005f04fdbb3a7b51ab7",
".git/refs/remotes/origin/main": "4924a86b75d5d005f04fdbb3a7b51ab7",
"assets/AssetManifest.bin": "a7caffa29cb4f6057862984abe12e92f",
"assets/AssetManifest.json": "6d1a55fdf1a602bb4da623bbf04feb34",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "2893369d57b12808548890746eeeec33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/web/audio/Error%2520-%2520Sound%2520Effect%2520(HD).mp3": "90065f0424c1cb20b3927a8f0907afeb",
"assets/web/audio/Google%2520Pay%2520Success%2520Sound%2520HD.mp3": "24f224047b97aca659b3caa583ed64db",
"assets/web/image/372103860_CHECK_MARK_400px.gif": "0220dad7b5d390c3178815008a628ace",
"assets/web/image/381599_error_icon.png": "4e3d1b111c54b83952400555de318e5a",
"assets/web/image/check02.gif": "742f7ea29cbfd7fd3f4848f17e621070",
"assets/web/image/comp_3.webp": "7cf3c4ef56bcb97fc698498641b1b311",
"assets/web/image/gpay_icon.png": "26d8847b70ed4892d0c7f6d989f375a0",
"assets/web/image/Intell%2520John%2520LOGO.png": "a393ae0d922680c516ce4e2eaefd655f",
"assets/web/image/payment%2520done.json": "1079934058597263418d8812a9d3c9ce",
"assets/web/image/payment%2520failed.json": "27350177aab6eabaff669249223bcae0",
"assets/web/image/paytm%2520icon.png": "c21051ce254950aca945506be2dcf262",
"assets/web/image/upi-icon.png": "69f0b8ca1ed6c5c0a668579f214294a2",
"assets/web%255Caudio%255CError%2520-%2520Sound%2520Effect%2520(HD).mp3": "90065f0424c1cb20b3927a8f0907afeb",
"audio/Error%20-%20Sound%20Effect%20(HD).mp3": "90065f0424c1cb20b3927a8f0907afeb",
"audio/Google%20Pay%20Success%20Sound%20HD.mp3": "24f224047b97aca659b3caa583ed64db",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"CNAME": "ec5c9386fded64f435a729a0033fe69d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"image/372103860_CHECK_MARK_400px.gif": "0220dad7b5d390c3178815008a628ace",
"image/381599_error_icon.png": "4e3d1b111c54b83952400555de318e5a",
"image/check02.gif": "742f7ea29cbfd7fd3f4848f17e621070",
"image/comp_3.webp": "7cf3c4ef56bcb97fc698498641b1b311",
"image/gpay_icon.png": "26d8847b70ed4892d0c7f6d989f375a0",
"image/Intell%20John%20LOGO.png": "a393ae0d922680c516ce4e2eaefd655f",
"image/payment%20done.json": "1079934058597263418d8812a9d3c9ce",
"image/payment%20failed.json": "27350177aab6eabaff669249223bcae0",
"image/paytm%20icon.png": "c21051ce254950aca945506be2dcf262",
"image/upi-icon.png": "69f0b8ca1ed6c5c0a668579f214294a2",
"index.html": "d597e01e27c253278463d55973c012fe",
"/": "d597e01e27c253278463d55973c012fe",
"main.dart.js": "a6d2ee32180f8487a1808a2238bfd84e",
"manifest.json": "5b9f76056779b9fd3f251e34b0f3d727",
"version.json": "95ab63b5101dbcb27d0466cbed2338ca"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
