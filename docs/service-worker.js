if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let f={};const n=e=>a(e,d),c={module:{uri:d},exports:f,require:n};s[d]=Promise.all(i.map((e=>c[e]||n(e)))).then((e=>(r(...e),f)))}}define(["./workbox-8ea266a9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/style.css",revision:"d0c728cf92b978ba0e5de22d97c79663"},{url:"index.html",revision:"776a5295e30c81a02ef13575c3b315bd"},{url:"js/Buffs.js",revision:"5e20a9392ff0422a406c4a5f2afaf381"},{url:"js/Calculator.js",revision:"6c8caa10d55b250a1a96027050e3d89c"},{url:"js/CollapsePanel.js",revision:"44f805a732334f3f7134e5576b99c50f"},{url:"js/data.js",revision:"77617d677847f8ca77f7117f1c05232a"},{url:"js/Equipment.js",revision:"10f380f0ce0be20c6e697fc69584e2ef"},{url:"js/Grids.js",revision:"d89c19a8b181278ab24d9e5af782fe83"},{url:"js/Heroes.js",revision:"fe298d6d184fe26e2ce97d64e0f3d240"},{url:"js/HuanJing.js",revision:"764714f2166c26ad0a58ffe4519a2b89"},{url:"js/index.js",revision:"9bda90e64abe681b87203bb4b1560bab"},{url:"js/index2.js",revision:"539d9e4128667632c944b38c48f6d00f"},{url:"js/index3.js",revision:"3c84fad580de5e06be298b39baaff55d"},{url:"js/InputNumber.js",revision:"a0d1147f37ee5c81de84d75b4e5b9d4c"},{url:"js/InputText.js",revision:"5ecaeb432c653967cffcb91305bda317"},{url:"js/lodash.js",revision:"7b2e088e5ea86045a4a280b0b9ea0a25"},{url:"js/Modal.vue_vue_type_style_index_0_lang.js",revision:"0dca326c1b2f1da7d097106f4f26b204"},{url:"js/shared.js",revision:"7b2854b73154d18885dd98a4938e0f7b"},{url:"js/Skills.js",revision:"75d8261cd087afb1fd34f15faa8ffb6d"},{url:"js/star-crystals.js",revision:"5f93befd0fcaca553a8f77a9baac0a56"},{url:"js/StarCrystals.js",revision:"90a61beb72c716418efb08bd80f9986a"},{url:"js/Stone.js",revision:"4915aab5b787b2349a31366d4fdd6a43"},{url:"js/StoneEmulator.js",revision:"32ee4d104ebdbcbe164b2f67ea3519e2"},{url:"js/useHeroes.js",revision:"cb37ebdff15f61b3cb449755a5d0b867"},{url:"js/useStoneEmulator.js",revision:"61d0a70c6dcc577b52edcdbb52de6d30"},{url:"js/WuNei.js",revision:"ab7e79edb750a01ac597dde1f4f85e39"},{url:"registerSW.js",revision:"be6aad568a9de402ad83ef7601f9d6ce"},{url:"icons/x512.png",revision:"dbb771caf239f6b0b98e8c8500c67c4c"},{url:"icons/x192.png",revision:"42ac9248ac441c5a91bf765a34f92655"},{url:"icons/x144.png",revision:"135b7657ad1e730be3df0da7061023f2"},{url:"icons/x96.png",revision:"e1a24dc963184c5014f768177c943bc0"},{url:"icons/x72.png",revision:"56a8ea5de8fc2424b3856deff199f9d9"},{url:"icons/x48.png",revision:"e681abde52207218244ae069b15852f1"},{url:"data/data.xlsx",revision:"f99030c20679f77746bdd77db9b1d87f"},{url:"data/hero-details.json",revision:"6d3fceed5503be5a8f6fac35260ab597"},{url:"manifest.webmanifest",revision:"4a5325eaf3a725f2dd7910ba58c6a9ef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/media\.zlongame\.com\/.*\.png/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
