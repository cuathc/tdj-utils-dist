import{d as c,b as d,_ as p,o as r,c as v,g as s,J as l,y as g,h as u,G as _,Q as h,p as f,n as y}from"./index.js";const C=c({props:{header:String,activeKey:Boolean},emits:["update:activeKey","toggle"],setup(e,{emit:t}){const a=d({get:()=>e.activeKey,set:o=>{t("update:activeKey",o)}});return{active:a,toggle:()=>{const o=!a.value;a.value=o,t("toggle",o)}}}});const m=e=>(f("data-v-eef27c7c"),e=e(),y(),e),$=m(()=>s("div",{class:"panel-icon"},[s("svg",{width:"16",height:"16",viewBox:"-16 -16 32 32"},[s("path",{d:"M6 0 l-12 -12 l0 2 l10 10 l-10 10 l0 2 l12 -12z",fill:"currentColor"})])],-1)),S={class:"panel-title"},B={class:"panel-body"},k={class:"panel-content"};function w(e,t,a,n,o,I){return r(),v("div",{class:h(["panel",{active:e.active}])},[s("div",{class:"panel-header",onClick:t[1]||(t[1]=(...i)=>e.toggle&&e.toggle(...i))},[$,s("div",S,[l(e.$slots,"header",{},()=>[g(u(e.header)+"\xA0",1)],!0)]),s("div",{class:"panel-actions",onClick:t[0]||(t[0]=_(()=>{},["stop"]))},[l(e.$slots,"actions",{},void 0,!0)])]),s("div",B,[s("div",k,[l(e.$slots,"default",{},void 0,!0)])])],2)}const b=p(C,[["render",w],["__scopeId","data-v-eef27c7c"]]);export{b as C};
