if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const r=e=>i(e,n),f={module:{uri:n},exports:d,require:r};s[n]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(c(...e),d)))}}define(["./workbox-0d1c4ed4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/block.svg",revision:"a33ac1f06116abe6175f321b565b3c49"},{url:"assets/cliff.svg",revision:"71cf734f3fea4d5873f97b823b16ef9e"},{url:"assets/disabled.svg",revision:"cf4f0ed8050b14a00dccf65d3fa0dcda"},{url:"assets/guidaozhe.png",revision:"3fee51d188c27b64b994cf8a0332a9b1"},{url:"assets/hehao.png",revision:"9746dd1d7accf660c6b7f65b6e62d48f"},{url:"assets/selected.svg",revision:"8ec9edab57a701c62ff0076a24256415"},{url:"assets/sort-asc.svg",revision:"cf3063517bdbafeb3bfb85318aa9f6b5"},{url:"assets/sort-desc.svg",revision:"7418a65b543d1d3a0da0a5323df1c297"},{url:"assets/sort-none.svg",revision:"84f40a177f70cf97bb905d3f6c185826"},{url:"assets/style.css",revision:"81195160a937baadff9a419cee25a265"},{url:"assets/yuanhu.png",revision:"3d66f3db635b5882ab71f7335b97b496"},{url:"assets/伥厉.png",revision:"2e7e0ab50983c2f8019b4381a4d4e6f8"},{url:"assets/妄幻.png",revision:"2b50832cf1c84b93b0bcdc562d6175e0"},{url:"assets/杌晷.png",revision:"00314cf18a38623de0366f864503dbd7"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icons/x144.png",revision:"135b7657ad1e730be3df0da7061023f2"},{url:"icons/x192.png",revision:"42ac9248ac441c5a91bf765a34f92655"},{url:"icons/x48.png",revision:"e681abde52207218244ae069b15852f1"},{url:"icons/x512.png",revision:"dbb771caf239f6b0b98e8c8500c67c4c"},{url:"icons/x72.png",revision:"56a8ea5de8fc2424b3856deff199f9d9"},{url:"icons/x96.png",revision:"e1a24dc963184c5014f768177c943bc0"},{url:"index.html",revision:"297cdb3dd69c02dd73493cab026e4e35"},{url:"js/components.js",revision:"a3b1649eedff9d6e52d8261866789a0a"},{url:"js/index.js",revision:"dbd0b7eaa418b7b66f4e1c5f5b38e3ba"},{url:"js/vendor.js",revision:"e750ef163397ed994c24ce3a3744c740"},{url:"js/views.js",revision:"6ff32866cc9f7690de1776327c4d200b"},{url:"registerSW.js",revision:"be6aad568a9de402ad83ef7601f9d6ce"},{url:"icons/x512.png",revision:"dbb771caf239f6b0b98e8c8500c67c4c"},{url:"icons/x192.png",revision:"42ac9248ac441c5a91bf765a34f92655"},{url:"icons/x144.png",revision:"135b7657ad1e730be3df0da7061023f2"},{url:"icons/x96.png",revision:"e1a24dc963184c5014f768177c943bc0"},{url:"icons/x72.png",revision:"56a8ea5de8fc2424b3856deff199f9d9"},{url:"icons/x48.png",revision:"e681abde52207218244ae069b15852f1"},{url:"data/data.xlsx",revision:"f99030c20679f77746bdd77db9b1d87f"},{url:"data/hero-details.json",revision:"2a6c99b814d8331fa22d2b7bae9891c8"},{url:"manifest.webmanifest",revision:"36d869754d0841c95305abe1ab984055"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/media\.zlongame\.com\/.*\.png/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
