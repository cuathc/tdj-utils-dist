if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const n=e=>a(e,d),f={module:{uri:d},exports:c,require:n};s[d]=Promise.all(i.map((e=>f[e]||n(e)))).then((e=>(r(...e),c)))}}define(["./workbox-8ea266a9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/style.css",revision:"b4c074e28d5bafddb850592ec87bb50c"},{url:"index.html",revision:"32577edcf451b12ff23f203834fa828a"},{url:"js/Calculator.js",revision:"bff3dd6ad6166c87c85a8f7ee08fdf58"},{url:"js/data.js",revision:"042453ba8e6383952c230f60adf79b66"},{url:"js/data2.js",revision:"61d0a70c6dcc577b52edcdbb52de6d30"},{url:"js/Grids.js",revision:"6ff4817b3766047530d712fcea9ef0f1"},{url:"js/Heroes.js",revision:"d74d0fec8ab180359fac7fdb8faee225"},{url:"js/HuanJing.js",revision:"bdac400f8fffda10369414833f54c63b"},{url:"js/index.js",revision:"5a15991594ea95dccae2bf920a3ad011"},{url:"js/InputNumber.js",revision:"a0d1147f37ee5c81de84d75b4e5b9d4c"},{url:"js/InputText.js",revision:"5ecaeb432c653967cffcb91305bda317"},{url:"js/lodash.js",revision:"7b2e088e5ea86045a4a280b0b9ea0a25"},{url:"js/shared.js",revision:"565428d3e0adc0bc649af73b6e5d7484"},{url:"js/StarStones.js",revision:"abd5baecbd2220a059ec84dc17358982"},{url:"js/Stone.js",revision:"b4bf2920c395abf92015cf01a24a7003"},{url:"js/StoneEmulator.js",revision:"ae8ada0fbf17f676a75cbea6bc36ecd4"},{url:"js/useHeroes.js",revision:"d0998037ec3ff04bf77462a821519058"},{url:"js/WuNei.js",revision:"ea06586dfb517178f210504be2d91a71"},{url:"registerSW.js",revision:"be6aad568a9de402ad83ef7601f9d6ce"},{url:"icons/x512.png",revision:"dbb771caf239f6b0b98e8c8500c67c4c"},{url:"icons/x192.png",revision:"42ac9248ac441c5a91bf765a34f92655"},{url:"icons/x144.png",revision:"135b7657ad1e730be3df0da7061023f2"},{url:"icons/x96.png",revision:"e1a24dc963184c5014f768177c943bc0"},{url:"icons/x72.png",revision:"56a8ea5de8fc2424b3856deff199f9d9"},{url:"icons/x48.png",revision:"e681abde52207218244ae069b15852f1"},{url:"data/data.xlsx",revision:"f99030c20679f77746bdd77db9b1d87f"},{url:"data/hero-details.json",revision:"16037888dc999745adb25b3465c2bccb"},{url:"manifest.webmanifest",revision:"4a5325eaf3a725f2dd7910ba58c6a9ef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/media\.zlongame\.com\/.*\.png/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
