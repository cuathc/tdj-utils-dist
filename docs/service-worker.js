if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let n={};const c=e=>i(e,d),f={module:{uri:d},exports:n,require:c};s[d]=Promise.all(a.map((e=>f[e]||c(e)))).then((e=>(r(...e),n)))}}define(["./workbox-8ea266a9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/style.css",revision:"98e86167492dd3f43f41ee0e012ded23"},{url:"index.html",revision:"32577edcf451b12ff23f203834fa828a"},{url:"js/Calculator.js",revision:"1a167a1235583480e74f2e7ecee45778"},{url:"js/CollapsePanel.js",revision:"44f805a732334f3f7134e5576b99c50f"},{url:"js/data.js",revision:"3dfe8508a82c11f3103eb2a575aedf77"},{url:"js/data2.js",revision:"61d0a70c6dcc577b52edcdbb52de6d30"},{url:"js/Equipment.js",revision:"39f1c91e414be179d9bbb031c5c32976"},{url:"js/Grids.js",revision:"196ab24e0fb79800db386db4fa0ce23f"},{url:"js/Heroes.js",revision:"741c6c0157daf30baa028c7431c18c08"},{url:"js/HuanJing.js",revision:"764714f2166c26ad0a58ffe4519a2b89"},{url:"js/index.js",revision:"f2114031dd293e6f2454f87bee20a58e"},{url:"js/index2.js",revision:"989cae9dd9e38480c6766273d942ea2f"},{url:"js/index3.js",revision:"cb81a1004e27290cfd578a1a0b3deefc"},{url:"js/InputNumber.js",revision:"a0d1147f37ee5c81de84d75b4e5b9d4c"},{url:"js/InputText.js",revision:"5ecaeb432c653967cffcb91305bda317"},{url:"js/lodash.js",revision:"7b2e088e5ea86045a4a280b0b9ea0a25"},{url:"js/Modal.vue_vue_type_style_index_0_lang.js",revision:"a38a9f56453ce837cedb62246070a251"},{url:"js/shared.js",revision:"ebbe5e85eec71fefe5b81260fc8189f1"},{url:"js/star-crystals.js",revision:"646d001eb8cfb19058add2fb7945fcf1"},{url:"js/StarCrystals.js",revision:"90a61beb72c716418efb08bd80f9986a"},{url:"js/Stone.js",revision:"3fac942be2b7b351c1d9e7e31eb6b685"},{url:"js/StoneEmulator.js",revision:"5a368f8bbb0ac1d0599b8476a3b8efcc"},{url:"js/useHeroes.js",revision:"ec874372dd9793df43473e41ebf95bee"},{url:"js/WuNei.js",revision:"ab7e79edb750a01ac597dde1f4f85e39"},{url:"registerSW.js",revision:"be6aad568a9de402ad83ef7601f9d6ce"},{url:"icons/x512.png",revision:"dbb771caf239f6b0b98e8c8500c67c4c"},{url:"icons/x192.png",revision:"42ac9248ac441c5a91bf765a34f92655"},{url:"icons/x144.png",revision:"135b7657ad1e730be3df0da7061023f2"},{url:"icons/x96.png",revision:"e1a24dc963184c5014f768177c943bc0"},{url:"icons/x72.png",revision:"56a8ea5de8fc2424b3856deff199f9d9"},{url:"icons/x48.png",revision:"e681abde52207218244ae069b15852f1"},{url:"data/data.xlsx",revision:"f99030c20679f77746bdd77db9b1d87f"},{url:"data/hero-details.json",revision:"6222ea220e4cdfeb421642919b988fe9"},{url:"manifest.webmanifest",revision:"4a5325eaf3a725f2dd7910ba58c6a9ef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/media\.zlongame\.com\/.*\.png/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
