if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let d={};const n=e=>i(e,a),f={module:{uri:a},exports:d,require:n};s[a]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(c(...e),d)))}}define(["./workbox-13c0c941"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/style.css",revision:"3acab387c2524eec7a883986c21e350a"},{url:"index.html",revision:"d5ce641b8a571a4251e8966368eb5681"},{url:"js/Calculator.js",revision:"9ee9fb6ddb38a23e7b51b4dbd947015f"},{url:"js/data.js",revision:"042453ba8e6383952c230f60adf79b66"},{url:"js/data2.js",revision:"61d0a70c6dcc577b52edcdbb52de6d30"},{url:"js/Grids.js",revision:"ae104bab06b2620e4e71c4840762a384"},{url:"js/Heroes.js",revision:"2f74600bb6f9f6b2f32e65f54fee024d"},{url:"js/HuanJing.js",revision:"97ec4769e5aba03ce8c277170d001d10"},{url:"js/index.js",revision:"e7c80d60bebe343b5753e1dbb057ea2f"},{url:"js/InputNumber.js",revision:"3b2b489446f20fb0f22ff1bd6ce10f43"},{url:"js/InputText.js",revision:"153110283bfc01cf5298ee8fef44bfd0"},{url:"js/lodash.js",revision:"30da6c91d908c3b4304d9c71ac42ff2d"},{url:"js/Stone.js",revision:"8c8943a30e3984e814f0ee88bcc372c4"},{url:"js/StoneEmulator.js",revision:"d71533b5ed1e93ba4babb1f4cadcd8fe"},{url:"js/useTransformTools.js",revision:"d6d783b2c4d964846288752830f74738"},{url:"js/WuNei.js",revision:"58dda31ff258cd55238bac88f394d4fb"},{url:"registerSW.js",revision:"be6aad568a9de402ad83ef7601f9d6ce"},{url:"icons/x512.png",revision:"dbb771caf239f6b0b98e8c8500c67c4c"},{url:"icons/x192.png",revision:"42ac9248ac441c5a91bf765a34f92655"},{url:"icons/x144.png",revision:"135b7657ad1e730be3df0da7061023f2"},{url:"icons/x96.png",revision:"e1a24dc963184c5014f768177c943bc0"},{url:"icons/x72.png",revision:"56a8ea5de8fc2424b3856deff199f9d9"},{url:"icons/x48.png",revision:"e681abde52207218244ae069b15852f1"},{url:"data/accessories.xlsx",revision:"c3bfbfa39566bca3422a7a1042581cdd"},{url:"data/data.xlsx",revision:"f99030c20679f77746bdd77db9b1d87f"},{url:"data/hero-details.json",revision:"78cb217fb8a3ccfb12292e3325d5ff8c"},{url:"manifest.webmanifest",revision:"4a5325eaf3a725f2dd7910ba58c6a9ef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/media\.zlongame\.com\/.*\.png/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
