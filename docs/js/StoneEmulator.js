import{d as A,P as E,q as $,_ as R,o as r,c as l,g as I,h as D,e as s,F as _,r as T,k as w,w as B,v as F,f,j as S,p as L,l as M}from"./index.js";import{t as V,m as j,r as H}from"./data2.js";const N=A({components:{CDivider:E},setup(){const n={T:"\u5929",D:"\u5730",H:"\u8352"},t=$("T"),d=$([]);function y(){d.value=[]}function p(a,e){return a+Math.floor(Math.random()*(e-a+1))}function h(a){const e=[];for(let i=0;i<a;i++){const o=[],c=[...j];for(let k=0,v=c.length-1;k<4;k++){const C=p(0,v),g=c[C],m=H[t.value][g.name],b=p(m[0],m[1]);o.push({type:n[t.value],name:g.name,value:b,rate:b/m[1]}),c[C]=c[v],v--}e.push(o)}e.length>0&&(d.value=e)}return{t:V,randomType:t,randomList:d,cleanRandom:y,tryRandom:h}}});const u=n=>(L("data-v-f31856c8"),n=n(),M(),n),q={class:"page-container"},x=u(()=>s("span",null,"\u6A21\u62DF\u9B42\u77F3",-1)),z=u(()=>s("option",{value:"T"},"\u5929",-1)),P=u(()=>s("option",{value:"D"},"\u5730",-1)),U=u(()=>s("option",{value:"H"},"\u8352",-1)),G=[z,P,U],J={class:"random-stone-items"},K=u(()=>s("div",null,null,-1));function O(n,t,d,y,p,h){const a=w("CDivider");return r(),l("div",q,[I(a,{orientation:"left",style:{position:"sticky",top:"40px","background-color":"#fff"}},{action:D(()=>[B(s("select",{class:"select","onUpdate:modelValue":t[0]||(t[0]=e=>n.randomType=e),style:{"margin-right":"8px"}},G,512),[[F,n.randomType]]),s("button",{class:"btn",onClick:t[1]||(t[1]=e=>n.tryRandom(1))},"\u6765\u4E00\u679A"),s("button",{class:"btn",onClick:t[2]||(t[2]=e=>n.tryRandom(10))},"\u6765\u5341\u679A"),s("button",{class:"btn",onClick:t[3]||(t[3]=e=>n.tryRandom(100))},"\u6765\u767E\u679A"),s("button",{class:"btn",onClick:t[4]||(t[4]=e=>n.cleanRandom())},"\u6E05\u7A7A")]),default:D(()=>[x]),_:1}),s("div",J,[(r(!0),l(_,null,T(n.randomList,(e,i)=>(r(),l("div",{class:"random-stone-item",key:i},[s("div",null,f(e[0].type),1),K,(r(!0),l(_,null,T(e,o=>(r(),l(_,{key:o},[s("div",{class:S({"random-stone-lv0":o.rate<.6,"random-stone-lv1":o.rate>=.6&&o.rate<.8,"random-stone-lv2":o.rate>=.8&&o.rate<.9,"random-stone-lv3":o.rate>=.9})},f(n.t[o.name]),3),s("div",{class:S({"random-stone-lv0":o.rate<.6,"random-stone-lv1":o.rate>=.6&&o.rate<.8,"random-stone-lv2":o.rate>=.8&&o.rate<.9,"random-stone-lv3":o.rate>=.9})},f(o.value)+"% ",3)],64))),128))]))),128))])])}const X=R(N,[["render",O],["__scopeId","data-v-f31856c8"]]);export{X as default};
