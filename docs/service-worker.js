if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const c=e=>a(e,n),f={module:{uri:n},exports:d,require:c};s[n]=Promise.all(i.map((e=>f[e]||c(e)))).then((e=>(r(...e),d)))}}define(["./workbox-8ea266a9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/style.css",revision:"b3601b7a5e5333dcb04a47672a3083fa"},{url:"index.html",revision:"776a5295e30c81a02ef13575c3b315bd"},{url:"js/Calculator.js",revision:"b3edb011ce8f2b3c3468796ba4eee99d"},{url:"js/CollapsePanel.js",revision:"44f805a732334f3f7134e5576b99c50f"},{url:"js/data.js",revision:"77617d677847f8ca77f7117f1c05232a"},{url:"js/data2.js",revision:"61d0a70c6dcc577b52edcdbb52de6d30"},{url:"js/Equipment.js",revision:"566aa5fb62aaae5d81b261f8c61e9d2b"},{url:"js/Grids.js",revision:"abf69ac1c8b0414113ef6f30b8ff8385"},{url:"js/Heroes.js",revision:"378eba59043e270fbba941f46087ccac"},{url:"js/HuanJing.js",revision:"764714f2166c26ad0a58ffe4519a2b89"},{url:"js/index.js",revision:"0a950f3e89b8c13e421025bc307916aa"},{url:"js/index2.js",revision:"1317adf7d5317dd5923898e7f7dcebff"},{url:"js/index3.js",revision:"f85083a64197485cce5770f2574c301d"},{url:"js/InputNumber.js",revision:"a0d1147f37ee5c81de84d75b4e5b9d4c"},{url:"js/InputText.js",revision:"5ecaeb432c653967cffcb91305bda317"},{url:"js/lodash.js",revision:"7b2e088e5ea86045a4a280b0b9ea0a25"},{url:"js/Modal.vue_vue_type_style_index_0_lang.js",revision:"0dca326c1b2f1da7d097106f4f26b204"},{url:"js/shared.js",revision:"56be3e21d946e7e71ef0e6b071fbe030"},{url:"js/star-crystals.js",revision:"646d001eb8cfb19058add2fb7945fcf1"},{url:"js/StarCrystals.js",revision:"90a61beb72c716418efb08bd80f9986a"},{url:"js/Stone.js",revision:"a823f8a23972e9e31eda7b23d19a9bbe"},{url:"js/StoneEmulator.js",revision:"5a368f8bbb0ac1d0599b8476a3b8efcc"},{url:"js/useHeroes.js",revision:"ec874372dd9793df43473e41ebf95bee"},{url:"js/WuNei.js",revision:"ab7e79edb750a01ac597dde1f4f85e39"},{url:"registerSW.js",revision:"be6aad568a9de402ad83ef7601f9d6ce"},{url:"icons/x512.png",revision:"dbb771caf239f6b0b98e8c8500c67c4c"},{url:"icons/x192.png",revision:"42ac9248ac441c5a91bf765a34f92655"},{url:"icons/x144.png",revision:"135b7657ad1e730be3df0da7061023f2"},{url:"icons/x96.png",revision:"e1a24dc963184c5014f768177c943bc0"},{url:"icons/x72.png",revision:"56a8ea5de8fc2424b3856deff199f9d9"},{url:"icons/x48.png",revision:"e681abde52207218244ae069b15852f1"},{url:"data/data.xlsx",revision:"f99030c20679f77746bdd77db9b1d87f"},{url:"data/hero-details.json",revision:"1e76438b2f16c2299b919f5173cbb9f0"},{url:"manifest.webmanifest",revision:"4a5325eaf3a725f2dd7910ba58c6a9ef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/media\.zlongame\.com\/.*\.png/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
