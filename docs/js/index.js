import{V as A,d as g,p as h,o as c,c as p,F as E,g as w,G as v,z as I,e as i,a as u,y as m,w as L,n as V,B as k,i as f,j as C,W as D,X as B,Y as O,Z as P,$ as R,S as F}from"./vendor.js";import{a1 as N,a2 as T,F as x,a3 as S,a4 as a,a5 as _,a6 as $,i as H,a7 as G,a as W,h as q,a8 as j,a9 as K,a0 as z}from"./components.js";import{H as M}from"./views.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const b=A(),J={class:"notice-box"},X={key:0,class:"notice-item-title"},Y={class:"notice-item-content"},Z=g({__name:"notice-box",setup(e){let s=0;const n=h([]);function l(o,r){n.value.push({id:++s,title:r,content:o})}function t(o){n.value=n.value.filter(r=>r.id!==o)}return b.on("updated",()=>{l("\u7248\u672C\u5DF2\u7ECF\u66F4\u65B0\uFF0C\u5237\u65B0\u9875\u9762\u4F7F\u7528\u65B0\u7684\u7248\u672C\u3002","\u66F4\u65B0\u63D0\u793A")}),(o,r)=>(c(),p("div",J,[(c(!0),p(E,null,w(n.value,d=>(c(),p("div",{class:"notice-item",key:d.id},[d.title?(c(),p("div",X,v(d.title),1)):I("",!0),i("div",Y,v(d.content),1),u(N,{class:"notice-item-close",onClick:ve=>t(d.id)},null,8,["onClick"])]))),128))]))}});const Q={class:"c-app-wrap"},U={class:"c-app-drawer c-app-drawer--fixed"},ee={class:"c-app-drawer--content"},te=k('<div class="c-list"><div class="c-list-item"><div class="c-list-item--content"><div class="c-list-item--title">\u5929\u5730\u52AB\u5DE5\u5177\u7BB1</div><div class="c-list-item--subtitle">by cuathc</div></div></div></div>',1),oe=i("div",{class:"c-app-drawer--border"},null,-1),ie={class:"c-app-bar c-app-bar--fixed"},se={class:"page-header"},ae=i("span",{class:"nav-menu-before"},null,-1),ne=i("div",{class:"page-header--content"},null,-1),re={class:"c-main"},ce={class:"c-main--wrap"},le={class:"c-container"},ue=g({__name:"App",setup(e){const s=h(!0),n=()=>{s.value=!s.value};return(l,t)=>(c(),p("div",{class:V(["c-app",{"c-app--collapsed":s.value}])},[i("div",{class:"c-app-overlay",onClick:n}),i("div",Q,[i("div",U,[i("div",ee,[te,u(m(x)),u(T)]),oe]),i("header",ie,[i("div",se,[ae,i("span",{class:"nav-menu",onClick:n},[u(m(S),{width:"16",height:"16"})]),ne])]),i("main",re,[i("div",ce,[i("div",le,[u(m(B),null,{default:L(({Component:o,route:r})=>[(c(),f(D,null,[(c(),f(C(o),{key:r.fullPath}))],1024))]),_:1})])])])]),u(Z)],2))}});O("./service-worker.js",{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){var s;(s=e.waiting)==null||s.postMessage({type:"SKIP_WAITING"}),b.emit("updated")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const de=[{path:"/",name:"Home",component:M},{path:"/heroes",name:"Heroes",component:()=>a(()=>import("./views.js").then(e=>e.a),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/calculator",name:"Calculator",component:()=>a(()=>import("./views.js").then(e=>e.C),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/skills",name:"Skills",component:()=>a(()=>import("./views.js").then(e=>e.S),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/buffs",name:"Buffs",component:()=>a(()=>import("./views.js").then(e=>e.B),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/huanjing",name:"HuanJing",component:()=>a(()=>import("./views.js").then(e=>e.b),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/wunei",name:"WuNei",component:()=>a(()=>import("./views.js").then(e=>e.W),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/equipment",name:"Equipment",component:()=>a(()=>import("./views.js").then(e=>e.E),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/stone",name:"Stone",component:()=>a(()=>import("./views.js").then(e=>e.c),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/stone-emulator",name:"StoneEmulator",component:()=>a(()=>import("./views.js").then(e=>e.d),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/star-crystals",name:"StarCrystals",component:()=>a(()=>import("./views.js").then(e=>e.e),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/grids",name:"Grids",component:()=>a(()=>import("./views.js").then(e=>e.G),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/giftcode",name:"Giftcode",component:()=>a(()=>import("./views.js").then(e=>e.f),["./views.js","./vendor.js","./components.js"],import.meta.url)},{path:"/:other(.*)",name:"Other",redirect:"/calculator"}],pe=P({history:R("./"),routes:de}),y=h([]);function _e(){return{abilities:y,initAbility:async()=>{try{y.value=await _.getAll("abilities")}catch(t){console.log(t)}},addAbility:async t=>{try{await _.add("abilities",t)}catch(o){console.log(o)}},updateAbility:async t=>{try{await _.put("abilities",t)}catch(o){console.log(o)}},removeAbility:async t=>{try{await _.delete("abilities",t.key)}catch(o){console.log(o)}}}}const me={mounted(e){e.focus()}};function he(e){e.directive("autofocus",me)}F(ue).use(pe).use($).use(()=>{H();const{initAbility:e}=_e();e()}).use(G).use(W).use(q).use(j).use(K).use(z).use(he).mount("#app");
