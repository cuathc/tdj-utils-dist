if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const d=e=>i(e,a),o={module:{uri:a},exports:n,require:d};s[a]=Promise.all(r.map((e=>o[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-8ea266a9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/style.css",revision:"5f70e996ac2474863b0d1ef38ce99529"},{url:"index.html",revision:"32577edcf451b12ff23f203834fa828a"},{url:"js/Calculator.js",revision:"f291068497079cccf92e24b05e96dbfc"},{url:"js/data.js",revision:"042453ba8e6383952c230f60adf79b66"},{url:"js/data2.js",revision:"61d0a70c6dcc577b52edcdbb52de6d30"},{url:"js/Grids.js",revision:"08a1840f3d8e963de5a66f62c99b50d1"},{url:"js/Heroes.js",revision:"91335a32e484d9be98c1a6e82ef890df"},{url:"js/HuanJing.js",revision:"2f097e38472257c27cc4be5ec5759e6a"},{url:"js/index.js",revision:"939b89331085f4428ebee8d1804a6500"},{url:"js/InputNumber.js",revision:"76893b8bdc51fdc2b3900a866a80cc4f"},{url:"js/InputText.js",revision:"5ecaeb432c653967cffcb91305bda317"},{url:"js/lodash.js",revision:"7b2e088e5ea86045a4a280b0b9ea0a25"},{url:"js/shared.js",revision:"c7b370fa27bdc532658d5fadb441582a"},{url:"js/StarStones.js",revision:"20e4f6d971b846610d530bdc808e892f"},{url:"js/Stone.js",revision:"5872c679c5e61cc2fc2e8e3de3754faa"},{url:"js/StoneEmulator.js",revision:"a2bb1f478c99598a03cdef8ec96ba3b6"},{url:"js/useHeroes.js",revision:"583c8f9976309de04545a54693638d27"},{url:"js/WuNei.js",revision:"81e42e8517f29c56ed7859656dd67ece"},{url:"registerSW.js",revision:"be6aad568a9de402ad83ef7601f9d6ce"},{url:"icons/x512.png",revision:"dbb771caf239f6b0b98e8c8500c67c4c"},{url:"icons/x192.png",revision:"42ac9248ac441c5a91bf765a34f92655"},{url:"icons/x144.png",revision:"135b7657ad1e730be3df0da7061023f2"},{url:"icons/x96.png",revision:"e1a24dc963184c5014f768177c943bc0"},{url:"icons/x72.png",revision:"56a8ea5de8fc2424b3856deff199f9d9"},{url:"icons/x48.png",revision:"e681abde52207218244ae069b15852f1"},{url:"data/data.xlsx",revision:"f99030c20679f77746bdd77db9b1d87f"},{url:"data/hero-details.json",revision:"16037888dc999745adb25b3465c2bccb"},{url:"manifest.webmanifest",revision:"4a5325eaf3a725f2dd7910ba58c6a9ef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/media\.zlongame\.com\/.*\.png/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
