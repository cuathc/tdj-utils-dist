import{d as ht,r as Y,a as fe,b as _t,O as Tt,Z as zt,$ as Kt,o as b,c as E,f as o,G as P,u as d,D as xt,E as it,h as V,z as Q,q as ve,k as W,T as _e,p as kt,m as Et,_ as Ct,g as ft,P as Vt,X as St,a0 as Rt,v as at,e as Z,w as lt,F as dt,j as pt,l as me,i as he,x as vt,W as be}from"./index.js";import{_ as mt}from"./lodash.js";import{u as ge,D as Fe}from"./useHeroes.js";import{_ as we}from"./Modal.vue_vue_type_style_index_0_lang.js";const Mt=(n,L,B)=>{let g=0,h=0,a=0;n%=360;const i=Math.floor(n/60),p=n/60-i,D=B*(1-L),$=B*(1-L*p),R=B*(1-L*(1-p));switch(i){case 0:g=B,h=R,a=D;break;case 1:g=$,h=B,a=D;break;case 2:g=D,h=B,a=R;break;case 3:g=D,h=$,a=B;break;case 4:g=R,h=D,a=B;break;case 5:g=B,h=D,a=$;break}g=Math.floor(g*255),h=Math.floor(h*255),a=Math.floor(a*255);const O=("00"+g.toString(16)).slice(-2),T=("00"+h.toString(16)).slice(-2),G=("00"+a.toString(16)).slice(-2);return[n,L,B,g,h,a,"#"+O+T+G]},Ut=n=>{let L=0,B=0,g=0,h=0,a=0,i=0;if(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i.test(n))L=window.parseInt(RegExp.$1,16),B=window.parseInt(RegExp.$2,16),g=window.parseInt(RegExp.$3,16);else if(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.test(n))L=window.parseInt(RegExp.$1,10),B=window.parseInt(RegExp.$2,10),g=window.parseInt(RegExp.$3,10);else return[0,0,0,0,0,0,"#000000"];h=L/255,a=B/255,i=g/255;let p=h;a>p&&(p=a),i>p&&(p=i);let D=h;a<D&&(D=a),i<D&&(D=i);let $=0,R=0,O=0;p===D?$=0:p===h&&a>=i?$=60*(a-i)/(p-D)+0:p===h&&a<i?$=60*(a-i)/(p-D)+360:p===a?$=60*(i-h)/(p-D)+120:p===i&&($=60*(h-a)/(p-D)+240),p===0?R=0:R=1-D/p,O=p;const T=("00"+L.toString(16)).slice(-2),G=("00"+B.toString(16)).slice(-2),K=("00"+g.toString(16)).slice(-2);return[Math.floor($),R,O,L,B,g,"#"+T+G+K]},Bt=n=>(kt("data-v-e5b80cdc"),n=n(),Et(),n),De={class:"color-control"},ke={key:0,class:"color-picker"},Ee={class:"color-picker-layer"},Ce=["onMousedown"],Be=["onMousedown"],Ie={class:"color-picker-view"},$e=Bt(()=>o("div",{class:"color-picker-view__label"},"HSV",-1)),Ae=Bt(()=>o("div",{class:"color-picker-view__label"},"RGB",-1)),He=Bt(()=>o("div",{class:"color-picker-view__label"},"Hex",-1)),Ge=ht({name:"ColorPicker"}),Le=ht({...Ge,props:{modelValue:null},emits:["update:modelValue"],setup(n,{emit:L}){const B=n,g=Y(!1),h=fe({set:c=>{L("update:modelValue",c)},get:()=>B.modelValue}),a=_t({h:0,s:0,v:0,r:0,g:0,b:0}),i=_t({rect_down:!1,rect_left:0,rect_bottom:0,ver_down:!1,ver_bottom:0}),p={rect:{left:0,bottom:0,x:0,y:0},ver:{bottom:0,y:0}},D=Y(!1),$=()=>{D.value=!0},R=mt.debounce(()=>{D.value=!1},300),O=()=>{$();const c=Mt(a.h,a.s,a.v);a.r=c[3],a.g=c[4],a.b=c[5],h.value=c[6],i.ver_bottom=a.h,i.rect_left=a.s*360,i.rect_bottom=a.v*360,R()},T=()=>{$();const c=Ut(`${a.r},${a.g},${a.b}`);a.h=c[0],a.s=c[1],a.v=c[2],h.value=c[6],i.ver_bottom=a.h,i.rect_left=a.s*360,i.rect_bottom=a.v*360,R()},G=c=>{c=c||"#000000";const v=Ut(c);a.h=v[0],a.s=v[1],a.v=v[2],a.r=v[3],a.g=v[4],a.b=v[5],i.ver_bottom=a.h,i.rect_left=a.s*360,i.rect_bottom=a.v*360},K=()=>{const c=Mt(i.ver_bottom,i.rect_left/360,i.rect_bottom/360);a.h=c[0],a.s=c[1],a.v=c[2],a.r=c[3],a.g=c[4],a.b=c[5],h.value=c[6]},tt=c=>{i.rect_down=!0,p.rect.x=c.clientX,p.rect.y=c.clientY;const v=c.currentTarget,H=v.getBoundingClientRect().left,bt=v.getBoundingClientRect().top;p.rect.left=i.rect_left=c.clientX-H,p.rect.bottom=i.rect_bottom=360-(c.clientY-bt),K()},u=c=>{if(!i.rect_down)return;const v=c.clientX-p.rect.x,H=c.clientY-p.rect.y;i.rect_left=Math.max(0,Math.min(360,p.rect.left+v)),i.rect_bottom=Math.max(0,Math.min(360,p.rect.bottom-H)),K()},J=()=>{!i.rect_down||(i.rect_down=!1)},A=c=>{i.ver_down=!0,p.ver.y=c.clientY;const H=c.currentTarget.getBoundingClientRect().top;p.ver.bottom=i.ver_bottom=360-(c.clientY-H),K()},S=c=>{if(!i.ver_down)return;const v=c.clientY-p.ver.y;i.ver_bottom=Math.max(0,Math.min(360,p.ver.bottom-v)),K()},X=()=>{!i.ver_down||(i.ver_down=!1)},et=()=>{g.value=!0},ot=()=>{g.value=!1};return Tt(()=>B.modelValue,c=>{i.ver_down||i.rect_down||D.value||G(c)}),G(B.modelValue),zt(()=>{window.addEventListener("mousemove",u,!1),window.addEventListener("mouseup",J,!1),window.addEventListener("mousemove",S,!1),window.addEventListener("mouseup",X,!1)}),Kt(()=>{window.removeEventListener("mousemove",u,!1),window.removeEventListener("mouseup",J,!1),window.removeEventListener("mousemove",S,!1),window.removeEventListener("mouseup",X,!1)}),(c,v)=>(b(),E("div",De,[o("div",{class:"color-preview",style:P({backgroundColor:d(h)}),onClick:et},null,4),(b(),xt(_e,{to:"body",disabled:!g.value},[g.value?(b(),E("div",ke,[o("div",{class:"color-picker-mask",onWheel:v[0]||(v[0]=it(()=>{},["prevent"])),onTouchstart:v[1]||(v[1]=it(()=>{},["prevent"])),onClick:ot},null,32),o("div",Ee,[o("div",{class:"color-picker-rect",style:P(`background-color: hsl(${a.h}deg, 100%, 50%)`),onMousedown:it(tt,["prevent","stop"])},[o("div",{class:"color-picker-rect-cur",style:P({left:`${i.rect_left}px`,bottom:`${i.rect_bottom}px`})},null,4)],44,Ce),o("div",{class:"color-picker-hue",onMousedown:it(A,["prevent","stop"])},[o("div",{class:"color-picker-hue-cur",style:P({bottom:`${i.ver_bottom}px`})},null,4)],40,Be),o("div",Ie,[o("div",{class:"color-picker-view-color",style:P({background:d(h)})},null,4),$e,V(o("input",{type:"number",max:"360",min:"0",step:"1","onUpdate:modelValue":v[2]||(v[2]=H=>a.h=H),class:"color-picker-view__input",onInput:O},null,544),[[Q,a.h]]),V(o("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":v[3]||(v[3]=H=>a.s=H),class:"color-picker-view__input",onInput:O},null,544),[[Q,a.s]]),V(o("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":v[4]||(v[4]=H=>a.v=H),class:"color-picker-view__input",onInput:O},null,544),[[Q,a.v]]),Ae,V(o("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":v[5]||(v[5]=H=>a.r=H),class:"color-picker-view__input",onInput:T},null,544),[[Q,a.r]]),V(o("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":v[6]||(v[6]=H=>a.g=H),class:"color-picker-view__input",onInput:T},null,544),[[Q,a.g]]),V(o("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":v[7]||(v[7]=H=>a.b=H),class:"color-picker-view__input",onInput:T},null,544),[[Q,a.b]]),He,V(o("input",{type:"text","onUpdate:modelValue":v[8]||(v[8]=H=>ve(h)?h.value=H:null),class:"color-picker-view__input"},null,512),[[Q,d(h)]]),o("div",{class:"color-picker-view__enter",onClick:ot},"\u786E\u8BA4")])])])):W("",!0)],8,["disabled"]))]))}});const ut=Ct(Le,[["__scopeId","data-v-e5b80cdc"]]);ut.install=function(n){n.component(ut.name,ut)};var N=(n=>(n[n.NONE=0]="NONE",n[n.GUARD=1]="GUARD",n[n.SHEEP=2]="SHEEP",n[n.ATTACKER=3]="ATTACKER",n))(N||{}),C=(n=>(n[n.NONE=0]="NONE",n[n.DISABLED=1]="DISABLED",n[n.BLOCKED=5]="BLOCKED",n[n.CLIFF=6]="CLIFF",n))(C||{}),z=(n=>(n[n.NONE=0]="NONE",n[n.ARROW_UP=1]="ARROW_UP",n[n.ARROW_RIGHT=2]="ARROW_RIGHT",n[n.ARROW_DOWN=3]="ARROW_DOWN",n[n.ARROW_LEFT=4]="ARROW_LEFT",n[n.HIGHLIGHT=5]="HIGHLIGHT",n))(z||{});const st=n=>(kt("data-v-5a91b919"),n=n(),Et(),n),Ve=["title"],Se=["onClick"],Re={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Me=st(()=>o("path",{d:"M0,0h24v24h-24z",fill:"#E84F2E30"},null,-1)),Ue=st(()=>o("path",{d:"M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z",fill:"#FFFF84"},null,-1)),Oe=[Me,Ue],Ne={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},We=st(()=>o("path",{d:"M0,0h24v24h-24z",fill:"#E84F2E30"},null,-1)),Te=st(()=>o("path",{d:"M11,16H3V8H11V2L21,12L11,22V16M13,7V10H5V14H13V17L18,12L13,7Z",fill:"#FFFF84"},null,-1)),ze=[We,Te],Ke={key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},qe=st(()=>o("path",{d:"M0,0h24v24h-24z",fill:"#E84F2E30"},null,-1)),Xe=st(()=>o("path",{d:"M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z",fill:"#FFFF84"},null,-1)),Ze=[qe,Xe],je={key:3,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Je=st(()=>o("path",{d:"M0,0h24v24h-24z",fill:"#E84F2E30"},null,-1)),Qe=st(()=>o("path",{d:"M13,22L3,12L13,2V8H21V16H13V22M6,12L11,17V14H19V10H11V7L6,12Z",fill:"#FFFF84"},null,-1)),Pe=[Je,Qe],Ye={key:4,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},to=st(()=>o("path",{d:"M0,0h24v24h-24z",fill:"#E84F2E30"},null,-1)),eo=[to],oo={key:5,class:"tg lt"},no={key:6,class:"tg rt"},so={key:7,class:"tg rb"},ro={class:"grid-item-overlay-dot"},ao={class:"grid-item-overlay-selected"},lo=ht({__name:"GridItem",props:{disabled:{type:Boolean},selected:{type:Boolean},dot:{type:Boolean},data:null,terrain:null,overlay:null,unit:null},emits:["clickoverlay"],setup(n,{emit:L}){const B=n;function g(){L("clickoverlay",B.overlay)}return(h,a)=>{var i,p,D,$,R,O,T,G,K,tt,u;return b(),E("div",{draggable:!0,class:Vt(["grid-item",{disabled:n.disabled}])},[o("div",{class:"grid-item-data",style:P({backgroundColor:(i=n.data)==null?void 0:i.bgcolor,backgroundImage:(p=n.data)!=null&&p.image?`url(${n.data.image})`:"",opacity:(D=n.data)==null?void 0:D.opacity})},null,4),n.terrain?(b(),E("div",{key:0,class:"grid-item-terrain",style:P({backgroundImage:n.terrain.image?`url(${n.terrain.image})`:""})},null,4)):W("",!0),n.unit?(b(),E("div",{key:1,class:"grid-item-unit",title:n.unit.name,style:P({backgroundImage:n.unit.image?`url(${n.unit.image})`:""})},null,12,Ve)):W("",!0),($=n.data)!=null&&$.txt?(b(),E("div",{key:2,class:"grid-item-txt",style:P({fontSize:(R=n.data)!=null&&R.size?`${n.data.size}px`:"",color:(O=n.data)==null?void 0:O.color})},ft(n.data.txt),5)):W("",!0),(T=n.unit)!=null&&T.team?(b(),E("div",{key:3,class:Vt(["grid-item-overlay pointer-none","team-"+((G=n.unit)==null?void 0:G.team)])},null,2)):W("",!0),n.overlay?(b(),E("div",{key:4,class:"grid-item-overlay",onClick:it(g,["stop"])},[n.overlay===d(z).ARROW_UP?(b(),E("svg",Re,Oe)):n.overlay===d(z).ARROW_RIGHT?(b(),E("svg",Ne,ze)):n.overlay===d(z).ARROW_DOWN?(b(),E("svg",Ke,Ze)):n.overlay===d(z).ARROW_LEFT?(b(),E("svg",je,Pe)):n.overlay===d(z).HIGHLIGHT?(b(),E("svg",Ye,eo)):W("",!0)],8,Se)):W("",!0),(K=n.unit)!=null&&K.actorId?(b(),E("i",oo,ft(n.unit.actorId),1)):W("",!0),(tt=n.data)!=null&&tt.sup?(b(),E("i",no,ft(n.data.sup),1)):W("",!0),(u=n.data)!=null&&u.sub?(b(),E("i",so,ft(n.data.sub),1)):W("",!0),V(o("div",ro,null,512),[[St,n.dot]]),V(o("div",ao,null,512),[[St,n.selected]])],2)}}});const nt=Ct(lo,[["__scopeId","data-v-5a91b919"]]);function io(){const n=Y(15),L=Y(15),B=Y(0),g=Y([]),h=Y([]),a=[{color:"#202020",bgcolor:"transparent"},{color:"#f9f9fa",bgcolor:"#ff3333"},{color:"#f9f9fa",bgcolor:"#00d659"},{color:"#f9f9fa",bgcolor:"#369af7"},{color:"#f9f9fa",bgcolor:"#fec02f"},{color:"#f9f9fa",bgcolor:"#a865e7"}],i=()=>({d:0,d1:0,d2:0,q:0}),p=()=>({txt:"",size:14,color:a[0].color,bgcolor:a[0].bgcolor,image:"",opacity:1}),D=()=>({type:C.NONE,image:""}),$=()=>({actorId:0,unitId:0,team:0,actorType:N.NONE,name:"",image:""}),R=A=>({x:0,y:0,disabled:!1,data:p(),state:i(),terrain:D(),unit:A});function O(A){A.state=i(),A.data=p(),A.terrain=D(),A.overlay=void 0,A.unit=void 0}function T(){B.value=0,g.value.forEach(A=>{A.forEach(S=>{O(S)})}),h.value=[]}function G(A,S){const X=[];for(let et=0;et<A;et++){const ot=[];for(let c=0;c<S;c++){const v=R();v.x=c,v.y=et,ot.push(v)}X.push(ot)}g.value=X}function K(A,S){L.value=A,n.value=S,J()}function tt(A,S){var X;return(X=g.value[S])==null?void 0:X[A]}function u(A){for(let S=0;S<n.value;S++)for(let X=0;X<L.value;X++)A(g.value[S][X])}function J(){G(n.value,L.value)}return J(),{rows:n,cols:L,actorId:B,grids:g,selects:h,gridColors:a,defGridState:i,defGridData:p,defGridTerrain:D,defGridUnit:$,defGrid:R,cleanGrid:O,cleanGrids:T,setSize:K,getGrid:tt,gridForEach:u}}const Ot=""+new URL("../assets/cliff.svg",import.meta.url).href,Nt=""+new URL("../assets/block.svg",import.meta.url).href,Wt=""+new URL("../assets/disabled.svg",import.meta.url).href,uo=[{name:"\u7A7A\u767D\u573A\u666F",width:15,height:15,data:[]},{name:"\u5316\u8352\u5E7B\u5883",width:17,height:11,data:[{x:0,y:0,type:1},{x:1,y:0,type:1},{x:2,y:0,type:1},{x:14,y:0,type:1},{x:15,y:0,type:1},{x:16,y:0,type:1},{x:0,y:1,type:1},{x:1,y:1,type:1},{x:15,y:1,type:1},{x:16,y:1,type:1},{x:0,y:2,type:1},{x:7,y:2,type:6},{x:8,y:2,type:6},{x:9,y:2,type:6},{x:16,y:2,type:1},{x:6,y:3,type:6},{x:7,y:3,type:6},{x:8,y:3,type:6},{x:9,y:3,type:6},{x:10,y:3,type:6},{x:5,y:4,type:6},{x:6,y:4,type:6},{x:10,y:4,type:6},{x:11,y:4,type:6},{x:5,y:6,type:6},{x:6,y:6,type:6},{x:10,y:6,type:6},{x:11,y:6,type:6},{x:6,y:7,type:6},{x:7,y:7,type:6},{x:8,y:7,type:6},{x:9,y:7,type:6},{x:10,y:7,type:6},{x:0,y:8,type:1},{x:7,y:8,type:6},{x:8,y:8,type:6},{x:9,y:8,type:6},{x:16,y:8,type:1},{x:0,y:9,type:1},{x:1,y:9,type:1},{x:15,y:9,type:1},{x:16,y:9,type:1},{x:0,y:10,type:1},{x:1,y:10,type:1},{x:2,y:10,type:1},{x:14,y:10,type:1},{x:15,y:10,type:1},{x:16,y:10,type:1}]},{name:"\u96EA\u5CAD\u5E7B\u5883",width:15,height:11,data:[{x:0,y:0,type:1},{x:1,y:0,type:1},{x:2,y:0,type:1},{x:5,y:0,type:6},{x:6,y:0,type:6},{x:7,y:0,type:6},{x:8,y:0,type:6},{x:9,y:0,type:6},{x:12,y:0,type:1},{x:13,y:0,type:1},{x:14,y:0,type:1},{x:0,y:1,type:1},{x:1,y:1,type:1},{x:2,y:1,type:1},{x:3,y:1,type:6},{x:4,y:1,type:6},{x:5,y:1,type:6},{x:6,y:1,type:6},{x:7,y:1,type:6},{x:8,y:1,type:6},{x:9,y:1,type:6},{x:10,y:1,type:6},{x:11,y:1,type:6},{x:12,y:1,type:1},{x:13,y:1,type:1},{x:14,y:1,type:1},{x:0,y:2,type:1},{x:1,y:2,type:1},{x:2,y:2,type:1},{x:3,y:2,type:6},{x:11,y:2,type:6},{x:12,y:2,type:1},{x:13,y:2,type:1},{x:14,y:2,type:1},{x:6,y:4,type:6},{x:7,y:4,type:6},{x:8,y:4,type:6},{x:3,y:5,type:6},{x:11,y:5,type:6},{x:6,y:6,type:6},{x:7,y:6,type:6},{x:8,y:6,type:6},{x:0,y:8,type:1},{x:1,y:8,type:1},{x:2,y:8,type:1},{x:3,y:8,type:6},{x:11,y:8,type:6},{x:12,y:8,type:1},{x:13,y:8,type:1},{x:14,y:8,type:1},{x:0,y:9,type:1},{x:1,y:9,type:1},{x:2,y:9,type:1},{x:3,y:9,type:6},{x:4,y:9,type:6},{x:5,y:9,type:6},{x:6,y:9,type:6},{x:7,y:9,type:6},{x:8,y:9,type:6},{x:9,y:9,type:6},{x:10,y:9,type:6},{x:11,y:9,type:6},{x:12,y:9,type:1},{x:13,y:9,type:1},{x:14,y:9,type:1},{x:0,y:10,type:1},{x:1,y:10,type:1},{x:2,y:10,type:1},{x:5,y:10,type:6},{x:6,y:10,type:6},{x:7,y:10,type:6},{x:8,y:10,type:6},{x:9,y:10,type:6},{x:12,y:10,type:1},{x:13,y:10,type:1},{x:14,y:10,type:1}]},{name:"\u5730\u754C\u5E7B\u5883",width:17,height:13,data:[{x:0,y:0,type:1},{x:1,y:0,type:1},{x:2,y:0,type:1},{x:5,y:0,type:6},{x:6,y:0,type:6},{x:7,y:0,type:6},{x:8,y:0,type:6},{x:9,y:0,type:6},{x:10,y:0,type:6},{x:11,y:0,type:6},{x:14,y:0,type:1},{x:15,y:0,type:1},{x:16,y:0,type:1},{x:0,y:1,type:1},{x:1,y:1,type:1},{x:2,y:1,type:1},{x:6,y:1,type:6},{x:10,y:1,type:6},{x:14,y:1,type:1},{x:15,y:1,type:1},{x:16,y:1,type:1},{x:0,y:2,type:1},{x:1,y:2,type:1},{x:6,y:2,type:6},{x:10,y:2,type:6},{x:15,y:2,type:1},{x:16,y:2,type:1},{x:0,y:3,type:1},{x:1,y:3,type:1},{x:6,y:3,type:6},{x:7,y:3,type:6},{x:8,y:3,type:6},{x:9,y:3,type:6},{x:10,y:3,type:6},{x:15,y:3,type:1},{x:16,y:3,type:1},{x:7,y:4,type:6},{x:8,y:4,type:6},{x:9,y:4,type:6},{x:7,y:8,type:6},{x:8,y:8,type:6},{x:9,y:8,type:6},{x:0,y:9,type:1},{x:1,y:9,type:1},{x:6,y:9,type:6},{x:7,y:9,type:6},{x:8,y:9,type:6},{x:9,y:9,type:6},{x:10,y:9,type:6},{x:15,y:9,type:1},{x:16,y:9,type:1},{x:0,y:10,type:1},{x:1,y:10,type:1},{x:6,y:10,type:6},{x:10,y:10,type:6},{x:15,y:10,type:1},{x:16,y:10,type:1},{x:0,y:11,type:1},{x:1,y:11,type:1},{x:2,y:11,type:1},{x:6,y:11,type:6},{x:10,y:11,type:6},{x:14,y:11,type:1},{x:15,y:11,type:1},{x:16,y:11,type:1},{x:0,y:12,type:1},{x:1,y:12,type:1},{x:2,y:12,type:1},{x:5,y:12,type:6},{x:6,y:12,type:6},{x:7,y:12,type:6},{x:8,y:12,type:6},{x:9,y:12,type:6},{x:10,y:12,type:6},{x:11,y:12,type:6},{x:14,y:12,type:1},{x:15,y:12,type:1},{x:16,y:12,type:1}]},{name:"\u7ED3\u754C\u5E7B\u5883",width:11,height:11,data:[{x:5,y:8,type:1},{x:2,y:5,type:1},{x:5,y:5,type:1},{x:8,y:5,type:1},{x:5,y:2,type:1}]},{name:"\u57CE\u9685\u5E7B\u5883",width:15,height:11,data:[{x:0,y:0,type:1},{x:1,y:0,type:1},{x:2,y:0,type:1},{x:5,y:0,type:1},{x:6,y:0,type:1},{x:7,y:0,type:1},{x:8,y:0,type:1},{x:9,y:0,type:1},{x:12,y:0,type:1},{x:13,y:0,type:1},{x:14,y:0,type:1},{x:0,y:1,type:1},{x:1,y:1,type:1},{x:6,y:1,type:1},{x:8,y:1,type:1},{x:13,y:1,type:1},{x:14,y:1,type:1},{x:0,y:2,type:1},{x:14,y:2,type:1},{x:4,y:4,type:5},{x:5,y:5,type:5},{x:9,y:5,type:5},{x:10,y:6,type:5},{x:0,y:8,type:1},{x:14,y:8,type:1},{x:0,y:9,type:1},{x:1,y:9,type:1},{x:6,y:9,type:1},{x:8,y:9,type:1},{x:13,y:9,type:1},{x:14,y:9,type:1},{x:0,y:10,type:1},{x:1,y:10,type:1},{x:2,y:10,type:1},{x:5,y:10,type:1},{x:6,y:10,type:1},{x:7,y:10,type:1},{x:8,y:10,type:1},{x:9,y:10,type:1},{x:12,y:10,type:1},{x:13,y:10,type:1},{x:14,y:10,type:1}]},{name:"\u5E7D\u7A74\u5E7B\u5883",width:11,height:11,data:[{x:0,y:0,type:1},{x:1,y:0,type:1},{x:0,y:1,type:1},{x:0,y:2,type:1},{x:3,y:2,type:6},{x:4,y:2,type:6},{x:2,y:3,type:6},{x:3,y:3,type:6},{x:4,y:3,type:6},{x:6,y:7,type:6},{x:7,y:7,type:6},{x:8,y:7,type:6},{x:6,y:8,type:6},{x:7,y:8,type:6},{x:10,y:8,type:1},{x:10,y:9,type:1},{x:9,y:10,type:1},{x:10,y:10,type:1}]},{name:"\u5996\u5C71\u5E7B\u5883",width:17,height:11,data:[]},{name:"\u8D64\u7802\u5E7B\u5883",width:15,height:7,data:[{x:0,y:0,type:1},{x:1,y:0,type:1},{x:2,y:0,type:1},{x:6,y:0,type:1},{x:7,y:0,type:1},{x:8,y:0,type:1},{x:12,y:0,type:1},{x:13,y:0,type:1},{x:14,y:0,type:1},{x:0,y:1,type:1},{x:1,y:1,type:1},{x:2,y:1,type:1},{x:12,y:1,type:1},{x:13,y:1,type:1},{x:14,y:1,type:1},{x:0,y:5,type:1},{x:1,y:5,type:1},{x:2,y:5,type:1},{x:12,y:5,type:1},{x:13,y:5,type:1},{x:14,y:5,type:1},{x:0,y:6,type:1},{x:1,y:6,type:1},{x:2,y:6,type:1},{x:6,y:6,type:1},{x:7,y:6,type:1},{x:8,y:6,type:1},{x:12,y:6,type:1},{x:13,y:6,type:1},{x:14,y:6,type:1}]}],f=n=>(kt("data-v-85259d98"),n=n(),Et(),n),yo={class:"wrapper"},co={class:"toolbar"},po={class:"setting"},xo={class:"label-control"},fo=f(()=>o("span",null,"\u7F16\u8F91\u6A21\u5F0F",-1)),vo=f(()=>o("option",{value:1},"\u7F16\u8F91\u7F51\u683C",-1)),_o=f(()=>o("option",{value:2},"\u5237\u5B50\u6A21\u5F0F",-1)),mo=f(()=>o("option",{value:3},"\u9009\u62E9\u5F62\u72B6",-1)),ho=f(()=>o("option",{value:4},"\u62A4\u536B\u8BA1\u7B97",-1)),bo=[vo,_o,mo,ho],go={class:"label-control"},Fo=f(()=>o("span",null,"\u8303\u56F4",-1)),wo={class:"label-control"},Do=f(()=>o("span",null,"\u5F62\u72B6",-1)),ko=f(()=>o("option",{value:1},"\u83F1\u5F62",-1)),Eo=f(()=>o("option",{value:2},"\u5708\u6570",-1)),Co=[ko,Eo],Bo={class:"label-control"},Io=f(()=>o("span",null,"\u6392\u5E8F",-1)),$o=f(()=>o("option",{value:1},"\u8DDD\u79BBX",-1)),Ao=f(()=>o("option",{value:2},"\u8DDD\u79BBY",-1)),Ho=f(()=>o("option",{value:3},"X\u4F18\u5148",-1)),Go=f(()=>o("option",{value:4},"Y\u4F18\u5148",-1)),Lo=[$o,Ao,Ho,Go],Vo=f(()=>o("button",{class:"btn"},"\u9884\u8BBE\u573A\u666F",-1)),So=["onClick"],Ro=["onClick"],Mo=f(()=>o("div",{style:{flex:"1 1 0"}},null,-1)),Uo=f(()=>o("article",null,[o("h2",null,"\u8BF4\u660E"),o("p",null,"\u70B9\u51FB\u9884\u8BBE\u573A\u666F\uFF0C\u53EF\u4EE5\u8F7D\u5165\u4E00\u4E9B\u9884\u8BBE\u7684\u573A\u666F\u3002"),o("p",null,"\u53F3\u4FA7\u5355\u4F4D\u53EF\u901A\u8FC7\u62D6\u66F3\u62C9\u5165\u7F51\u683C\u3002"),o("p",null,[vt(" \u9009\u4E2D\u7F51\u683C\u4E2D\u7684\u5355\u4F4D\u53EF\u4EE5\u4F7F\u7528\u201C\u602A\u529B\u4E71\u795E\u201D\u3001\u201C\u5F00\u8F66\u201D\u529F\u80FD\u3002"),o("br"),vt(" \u201C\u602A\u529B\u4E71\u795E\u201D\u529F\u80FD\u53EA\u4F1A\u4F5C\u7528\u4E8E\u975E\u540C\u961F\u5355\u4F4D\u3002"),o("br"),vt(" \u201C\u5F00\u8F66\u201D\u529F\u80FD\u53EA\u4F1A\u4F5C\u7528\u4E8E\u540C\u961F\u5355\u4F4D\u3002"),o("br"),vt(" \u4F7F\u7528\u529F\u80FD\u524D\uFF0C\u4F60\u53EF\u4EE5\u4FDD\u5B58\u5F53\u524D\u5E03\u5C40\uFF0C\u65B9\u4FBF\u9884\u89C8\u7ED3\u679C\u540E\u5FEB\u901F\u8FD8\u539F\u5E03\u5C40\u3002 ")])],-1)),Oo={class:"color-container"},No={class:"label-control"},Wo=f(()=>o("span",null,"\u9884\u89C8",-1)),To={class:"label-control"},zo=f(()=>o("span",null,"\u6587\u5B57",-1)),Ko={class:"label-control"},qo=f(()=>o("span",null,"\u80CC\u666F",-1)),Xo=f(()=>o("label",{class:"label-control"},[o("span",null,"\u9884\u8BBE")],-1)),Zo={class:"color-tpls"},jo=vt(" E "),Jo={width:"32",height:"32",viewBox:"0 0 24 24",fill:"#a9a9a9",style:{"pointer-events":"none"}},Qo=f(()=>o("path",{d:"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"},null,-1)),Po=[Qo],Yo={class:"props-container"},tn={key:0,class:"props-content"},en={class:"label-control"},on=f(()=>o("span",null,"\u9884\u89C8",-1)),nn={class:"label-control"},sn=f(()=>o("span",null,"\u6587\u5B57",-1)),rn={class:"label-control"},an=f(()=>o("span",null,"\u80CC\u666F",-1)),ln={class:"label-control"},un=f(()=>o("span",null,"\u5927\u5C0F",-1)),yn={class:"label-control"},cn=f(()=>o("span",null,"\u5185\u5BB9",-1)),dn={class:"label-control"},pn=f(()=>o("span",null,"\u5730\u5F62",-1)),xn=["value"],fn=["value"],vn=["value"],_n=["value"],mn={class:"label-control"},hn=f(()=>o("span",null,"Id",-1)),bn={class:"label-control"},gn=f(()=>o("span",null,"\u7C7B\u578B",-1)),Fn=["value"],wn=["value"],Dn=["value"],kn=["value"],En={class:"label-control"},Cn=f(()=>o("span",null,"\u98DE\u884C",-1)),Bn={class:"controls"},In={key:0,class:"label-control"},$n=f(()=>o("span",null,"\u5355\u4F4DID",-1)),An=["value"],Hn={key:1,class:"label-control"},Gn=f(()=>o("span",null,"\u961F\u4F0D",-1)),Ln=f(()=>o("option",{value:void 0},"\u961F\u4F0D\u7A7A",-1)),Vn=f(()=>o("option",{value:0},"\u961F\u4F0D0",-1)),Sn=f(()=>o("option",{value:1},"\u961F\u4F0D1",-1)),Rn=f(()=>o("option",{value:2},"\u961F\u4F0D2",-1)),Mn=[Ln,Vn,Sn,Rn],Un={class:"content"},On={class:"grids"},Nn={class:"panel-right"},Wn={class:"controls"},Tn={class:"label-control"},zn=f(()=>o("span",null,"\u961F\u4F0D",-1)),Kn=f(()=>o("option",{value:0},"\u961F\u4F0D0",-1)),qn=f(()=>o("option",{value:1},"\u961F\u4F0D1",-1)),Xn=f(()=>o("option",{value:2},"\u961F\u4F0D2",-1)),Zn=[Kn,qn,Xn],jn={class:"heroes"},Jn=ht({__name:"Grids",setup(n){const{rows:L,cols:B,actorId:g,grids:h,selects:a,gridColors:i,defGridUnit:p,defGridState:D,defGrid:$,cleanGrid:R,cleanGrids:O,setSize:T,getGrid:G,gridForEach:K}=io(),tt=Y(),u=_t({editor:1,selectRange:5,shape:1,sortType:1,color:i[0].color,bgcolor:i[0].bgcolor,terrain:void 0}),J=$();J.terrain={image:Wt,type:C.DISABLED};const A=$();A.terrain={image:Ot,type:C.CLIFF};const S=$();S.terrain={image:Nt,type:C.BLOCKED};function X(e){u.color=e.color,u.bgcolor=e.bgcolor,u.terrain=void 0}function et(e){u.color="",u.bgcolor="",u.terrain=e.terrain}const{heroes:ot}=ge(),c=Rt($(p())),v=Rt(ot.value.map(e=>{const t=$(),r=p();return r.unitId=e.id,r.image=`https://media.zlongame.com/media/news/cn/tdj/info/data/heroicon/${e.hero_icon}.png`,r.name=e.name,t.unit=r,t}));Tt(ot,()=>{v.value=ot.value.map(e=>{const t=$(),r=p();return r.image=`https://media.zlongame.com/media/news/cn/tdj/info/data/heroicon/${e.hero_icon}.png`,t.unit=r,t})});function H(e,t,r,F){const _=[];return K(w=>{w.state=D()}),K(w=>{const y=Math.abs(e-w.x),m=Math.abs(t-w.y),s=y+m,M=Math.max(y,m),k=y>1?y-1:y+m>1?m-1:m;switch(F){case 1:s<=r&&(w.state.d=s,w.state.q=M,w.state.d1=k,_.push(w));break;case 2:Math.abs(y)<=r&&Math.abs(m)<=r&&(w.state.d=s,w.state.q=M,w.state.d1=k,_.push(w));break}}),_}function bt(e,t,r,F,_,w,y){const m=H(e,t,r,F);switch(m.forEach(s=>{s.data.color=w,s.data.bgcolor=y}),a.value=m,_){case 1:a.value.sort(qt);break;case 2:a.value.sort(gt);break;case 3:a.value.sort(Xt);break;case 4:a.value.sort(Zt);break}for(let s=0;s<a.value.length;s++){const M=a.value[s];M.data.txt=String(s+1)}}function qt(e,t){return e.state.q!==t.state.q?e.state.q-t.state.q:e.state.d!==t.state.d?e.state.d-t.state.d:e.x!==t.x?e.x-t.x:e.y!==t.y?e.y-t.y:0}function gt(e,t){return e.state.q!==t.state.q?e.state.q-t.state.q:e.state.d!==t.state.d?e.state.d-t.state.d:e.y!==t.y?e.y-t.y:e.x!==t.x?e.x-t.x:0}function Xt(e,t){return e.x!==t.x?e.x-t.x:e.y!==t.y?e.y-t.y:0}function Zt(e,t){return e.y!==t.y?e.y-t.y:e.x!==t.x?e.x-t.x:0}const x=_t({enabled:!1});function jt(){O()}function It(){x.enabled=!1}function Jt(e,t){var r;switch(u.editor){case 1:case 4:x.current=t,(r=tt.value)==null||r.focus();break;case 3:O(),bt(t.x,t.y,u.selectRange,u.shape,u.sortType,u.color,u.bgcolor);break}}function Qt(e,t){if(e.button===0)switch(u.editor){case 2:{x.enabled=!0,t.data.color=u.color,t.data.bgcolor=u.bgcolor,u.terrain?(t.terrain.type=u.terrain.type,t.terrain.image=u.terrain.image):(t.terrain.type=C.NONE,t.terrain.image="");break}}}function Pt(e,t){e.button===0&&x.enabled&&(t.data.color=u.color,t.data.bgcolor=u.bgcolor,u.terrain?(t.terrain.type=u.terrain.type,t.terrain.image=u.terrain.image):(t.terrain.type=C.NONE,t.terrain.image=""))}function Yt(){x.current=void 0}const yt=Y({width:15,height:15});function te(){try{const e=localStorage.getItem("grids");if(!e)return;const t=JSON.parse(e);yt.value=t}catch{}}function $t(){if(!confirm("\u786E\u5B9A\u8981\u4FDD\u5B58\u5417\uFF1F"))return;let t=h.value.flat().filter(r=>r.terrain.type!==C.NONE||r.unit&&r.unit.actorId>0);t=mt.cloneDeep(t),yt.value={width:B.value,height:L.value,data:t},localStorage.setItem("grids",JSON.stringify(yt.value))}function ee(){const e=yt.value;if(!!e.data){T(e.width,e.height);for(const t of e.data){const r=G(t.x,t.y);!r||(t.data&&(r.data=t.data),t.terrain&&(r.terrain=t.terrain),t.unit&&t.unit.actorId>0&&(r.unit=t.unit))}}}function oe(e){T(e.width,e.height),e.data.forEach(t=>{const r=G(t.x,t.y);if(!!r)switch(t.type){case C.DISABLED:r.terrain={image:Wt,type:C.DISABLED};break;case C.CLIFF:r.terrain={image:Ot,type:C.CLIFF};break;case C.BLOCKED:r.terrain={image:Nt,type:C.BLOCKED};break}})}function ne(){var m;const e=x.current;if(!e)return;yt.value||$t();const t=(m=e.unit)==null?void 0:m.team;let r,F,_=[];for(r=e.x-2;r<=e.x+2;r++)for(F=e.y-2;F<=e.y+2;F++){const s=G(r,F);!s||s.terrain.type!==C.DISABLED&&(s.x===e.x&&s.y===e.y?(_[0]&&_.push(_[0]),_[0]=s):_.push(s))}_=_.filter(s=>s.unit&&s.unit.team!==t&&!(s.x===e.x&&s.y===e.y));const w=_.map(s=>({unit:s.unit}));_.forEach(s=>{R(s)});const y=H(e.x,e.y,4,2).filter(s=>s.terrain.type!==C.BLOCKED&&!(s.x===e.x&&s.y===e.y)).sort(gt).map(s=>[s.x,s.y]);for(const s of w)for(const[M,k]of y){const l=G(M,k);if(!!l&&!(l.unit&&l.unit.actorId>0)&&l.terrain.type!==C.DISABLED&&l.terrain.type!==C.BLOCKED&&!(l.terrain.type===C.CLIFF&&!s.unit.fly)){l.unit=s.unit;break}}}let j;function se(){const e=x.current;if(!e)return;const t=[{x:0,y:1,overlay:z.ARROW_UP},{x:1,y:0,overlay:z.ARROW_RIGHT},{x:0,y:-1,overlay:z.ARROW_DOWN},{x:-1,y:0,overlay:z.ARROW_LEFT}];for(const r of t){const F=G(e.x+r.x,e.y+r.y);if(!!F){F.overlay=r.overlay;for(let _=2;_<=4;_++){const w=G(e.x+r.x*_,e.y+r.y*_);!w||(w.overlay=z.HIGHLIGHT)}}}j=e}function re(e){var k;if(!j||!e||e===z.HIGHLIGHT)return;const t=(k=j.unit)==null?void 0:k.team;let r,F,_=[];for(r=j.x-1;r<=j.x+1;r++)for(F=j.y-1;F<=j.y+1;F++){if(r===j.x&&F===j.y)continue;const l=G(r,F);!l||!l.unit||l.unit.team===t&&(l.state.d=wt(j,l),_.push(l))}_.sort((l,q)=>!l.unit||!q.unit?0:l.state.d!==q.state.d?l.state.d-q.state.d:l.unit.actorId-q.unit.actorId),_=_.slice(0,2);const w=_.map(l=>({unit:l.unit}));_.forEach(l=>{l.unit=void 0}),console.log(w);const m={[z.ARROW_UP]:{x:0,y:1},[z.ARROW_RIGHT]:{x:1,y:0},[z.ARROW_DOWN]:{x:0,y:-1},[z.ARROW_LEFT]:{x:-1,y:0}}[e];let s;for(let l=1;l<=4;l++){const q=G(j.x+l*m.x,j.y+l*m.y);q&&q.terrain.type===C.NONE&&(s=q)}if(!s)return;K(l=>{l.overlay=void 0});const M=H(s.x,s.y,4,2).filter(l=>l.terrain.type!==C.BLOCKED&&!(l.x===(s==null?void 0:s.x)&&l.y===(s==null?void 0:s.y))).sort(gt).map(l=>[l.x,l.y]);for(const l of w)for(const[q,rt]of M){const U=G(q,rt);if(!!U&&!(U.unit&&U.unit.actorId>0)&&U.terrain.type!==C.DISABLED&&U.terrain.type!==C.BLOCKED&&!(U.terrain.type===C.CLIFF&&!l.unit.fly)){U.unit=l.unit;break}}s&&(Gt(s,j),x.current=s)}const I=_t({team:1}),At=["#ffffff00","#FF3C4132","#0EBEFF32","#48CF7432","#FCD00032","#80008032"],ae=(e,t)=>{switch(u.editor){case 2:e.preventDefault();break;default:I.grid=t,I.action="swap",e.dataTransfer&&(e.dataTransfer.effectAllowed="move")}},le=(e,t)=>{const r=$();r.data.color=t.color,r.data.bgcolor=t.bgcolor,r.data.txt="E",I.grid=r,I.action="color"},Ft=(e,t)=>{I.grid=mt.cloneDeep(t),I.action="terrain"},Ht=(e,t)=>{I.grid=mt.cloneDeep(t),I.action="unit"},ie=(e,t)=>{if(e.preventDefault(),!I.grid)return;const r=I.grid.unit,F=I.grid.terrain;switch(I.action){case"color":t.unit||(t.unit=p()),t.unit.actorId||(t.unit.actorId=++g.value),t.data=I.grid.data;break;case"unit":if(t.unit||(t.unit=p()),t.unit.actorId||(t.unit.actorId=++g.value),!r)break;t.unit.image=r.image,t.unit.unitId=r.unitId,t.unit.team=I.team;break;case"swap":Gt(I.grid,t,!r||r.actorId===0);break;case"terrain":t.terrain=F;break}I.grid=void 0,I.action=void 0,x.current&&(x.current=t),u.editor===4&&ct()};function ue(e,t){let r=e[0].state[t];for(let F=1;F<e.length;F++)e[F].state[t]<r&&(r=e[F].state[t]);return r}function wt(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function Gt(e,t,r){const F=e.data,_=e.unit,w=e.terrain;e.data=t.data,e.unit=t.unit,t.data=F,t.unit=_,r&&(e.terrain=t.terrain,t.terrain=w)}function Lt(e,t,r){e.sort((y,m)=>!y.unit||!m.unit?0:+y.unit.actorId-+m.unit.actorId),e.forEach(y=>{y.state.d1=wt(y,r),y.state.d2=wt(y,t),y.unit&&(y.unit.guard=!1)});const F=ue(e,"d1");if(e=e.filter(y=>y.state.d1===F),e.length===1)return e[0];let _=e[0],w=e.length;for(;w--;)if(e[w].state.d2<_.state.d2){_=e[w];break}return _}function ye(){T(15,15),g.value=0;const e=[{x:7,y:9,txt:"",type:N.GUARD,bg:"#0ebeff"},{x:9,y:7,txt:"",type:N.GUARD,bg:"#0ebeff"},{x:7,y:5,txt:"",type:N.GUARD,bg:"#0ebeff"},{x:5,y:7,txt:"",type:N.GUARD,bg:"#0ebeff"},{x:8,y:6,txt:"",type:N.ATTACKER,bg:"#ff3c41"},{x:7,y:7,txt:"",type:N.SHEEP,bg:"#fcd000"}];for(const t of e){const r=G(t.x,t.y);!r||(r.unit||(r.unit=p()),r.unit.actorId=++g.value,r.unit.actorType=t.type,r.disabled=!1,r.data.txt=t.txt,r.data.bgcolor=t.bg)}u.editor=4}const ct=()=>{const e=h.value.flat();e.forEach(y=>{y.data.opacity=1});const t=e.filter(y=>y.unit&&!y.disabled),r=t.filter(y=>{var m;return((m=y.unit)==null?void 0:m.actorType)===N.ATTACKER})[0],F=t.filter(y=>{var m;return((m=y.unit)==null?void 0:m.actorType)===N.SHEEP})[0],_=t.filter(y=>{var m;return((m=y.unit)==null?void 0:m.actorType)===N.GUARD});if(!F||_.length===0){alert("\u7F3A\u5C11\u89D2\u8272\uFF0C\u5C06\u81EA\u52A8\u751F\u6210"),ye(),ct();return}const w=e.filter(y=>!y.unit);for(const y of w){const m=Lt(_,y,F);!m.unit||(y.data.image=m.unit.image,y.data.bgcolor=At[m.unit.actorId]||At[0],m.data.image?y.data.sup="":y.data.sup=String(m.unit.actorId),y.data.opacity=.6)}if(r){const y=Lt(_,r,F);y.unit&&(y.unit.guard=!0)}},ce=e=>{if(!!e.unit&&u.editor===4){switch(e.unit.actorType){case N.GUARD:e.disabled=!e.disabled;break}ct()}},de=e=>{var t;!I.grid||!e.dataTransfer||I.action==="swap"&&(u.editor===4&&((t=I.grid.unit)==null?void 0:t.actorType)===N.SHEEP||e.preventDefault())},pe=e=>{if(!!I.grid&&!!e)switch(I.action){case"swap":R(e),I.grid=void 0,I.action=void 0,u.editor===4&&ct()}},Dt=Y(!1);function xe(){Dt.value=!0}return zt(()=>{te(),window.addEventListener("mouseup",It,!1)}),Kt(()=>{window.removeEventListener("mouseup",It,!1)}),(e,t)=>{var _,w,y,m;const r=me("c-space"),F=be("autofocus");return b(),E("div",yo,[o("div",co,[o("div",po,[o("label",xo,[fo,V(o("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>u.editor=s)},bo,512),[[at,u.editor,void 0,{number:!0}]])]),o("label",go,[Fo,V(o("input",{type:"number",min:"0","onUpdate:modelValue":t[1]||(t[1]=s=>u.selectRange=s),style:{width:"5em"}},null,512),[[Q,u.selectRange]])]),o("label",wo,[Do,V(o("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>u.shape=s)},Co,512),[[at,u.shape]])]),o("label",Bo,[Io,V(o("select",{"onUpdate:modelValue":t[3]||(t[3]=s=>u.sortType=s)},Lo,512),[[at,u.sortType]])]),o("button",{class:"btn",onClick:jt},"\u6E05\u7A7A"),o("button",{class:"btn",onClick:ct},"\u8BA1\u7B97\u62A4\u536B"),o("button",{class:"btn btn-success",onClick:$t},"\u4FDD\u5B58\u5E03\u5C40"),o("button",{class:"btn btn-success",onClick:ee},"\u8FD8\u539F\u5E03\u5C40"),W("",!0),Z(d(Fe),null,{popover:lt(({onClose:s})=>[o("div",{class:"list",onClick:M=>s()},[(b(!0),E(dt,null,pt(d(uo),(M,k)=>(b(),E("div",{class:"list-item",key:k,onClick:l=>oe(M)},ft(M.name),9,Ro))),128))],8,So)]),default:lt(()=>[Vo]),_:1}),Mo,o("div",{class:"btn btn-link",onClick:xe},"\u5E2E\u52A9"),Z(we,{show:Dt.value,"onUpdate:show":t[4]||(t[4]=s=>Dt.value=s),width:"600px"},{default:lt(()=>[Uo]),_:1},8,["show"])]),o("div",Oo,[Z(r,null,{default:lt(()=>{var s,M,k;return[o("label",No,[Wo,Z(d(nt),{draggable:!1,data:{txt:"E",size:14,opacity:1,color:u.color,bgcolor:u.bgcolor},terrain:u.terrain},null,8,["data","terrain"])]),o("label",To,[zo,Z(d(ut),{modelValue:u.color,"onUpdate:modelValue":t[5]||(t[5]=l=>u.color=l)},null,8,["modelValue"])]),o("label",Ko,[qo,Z(d(ut),{modelValue:u.bgcolor,"onUpdate:modelValue":t[6]||(t[6]=l=>u.bgcolor=l)},null,8,["modelValue"])]),Xo,o("div",Zo,[(b(!0),E(dt,null,pt(d(i),(l,q)=>(b(),xt(d(nt),{key:q,selected:u.bgcolor===l.bgcolor,style:P([`--color:${l.color};--bgcolor:${l.bgcolor}`]),onClick:rt=>X(l),onDragstart:rt=>le(rt,l)},{default:lt(()=>[jo]),_:2},1032,["selected","style","onClick","onDragstart"]))),128)),Z(d(nt),{selected:((s=u.terrain)==null?void 0:s.type)===d(J).terrain.type,terrain:d(J).terrain,onClick:t[7]||(t[7]=l=>et(d(J))),onDragstart:t[8]||(t[8]=l=>Ft(l,d(J)))},null,8,["selected","terrain"]),Z(d(nt),{selected:((M=u.terrain)==null?void 0:M.type)===d(A).terrain.type,terrain:d(A).terrain,onClick:t[9]||(t[9]=l=>et(d(A))),onDragstart:t[10]||(t[10]=l=>Ft(l,d(A)))},null,8,["selected","terrain"]),Z(d(nt),{selected:((k=u.terrain)==null?void 0:k.type)===d(S).terrain.type,terrain:d(S).terrain,onClick:t[11]||(t[11]=l=>et(d(S))),onDragstart:t[12]||(t[12]=l=>Ft(l,d(S)))},null,8,["selected","terrain"])]),o("div",{class:"trush",onDragover:de,onDrop:t[13]||(t[13]=l=>pe(I.grid))},[(b(),E("svg",Jo,Po))],32)]}),_:1})]),o("div",Yo,[x.current?(b(),E("div",tn,[Z(r,null,{default:lt(()=>[o("label",en,[on,Z(d(nt),{draggable:!1,style:P([`--color:${x.current.data.color};--bgcolor:${x.current.data.bgcolor}`]),data:x.current.data,terrain:x.current.terrain,overlay:x.current.overlay,unit:x.current.unit},null,8,["style","data","terrain","overlay","unit"])]),o("label",nn,[sn,Z(d(ut),{modelValue:x.current.data.color,"onUpdate:modelValue":t[14]||(t[14]=s=>x.current.data.color=s)},null,8,["modelValue"])]),o("label",rn,[an,Z(d(ut),{modelValue:x.current.data.bgcolor,"onUpdate:modelValue":t[15]||(t[15]=s=>x.current.data.bgcolor=s)},null,8,["modelValue"])]),o("label",ln,[un,V(o("input",{type:"number",style:{width:"4em"},min:"12",step:"1","onUpdate:modelValue":t[16]||(t[16]=s=>x.current.data.size=s)},null,512),[[Q,x.current.data.size]])]),o("label",yn,[cn,V(o("input",{type:"text",ref_key:"txtInput",ref:tt,"onUpdate:modelValue":t[17]||(t[17]=s=>x.current.data.txt=s),style:{width:"6em"}},null,512),[[F],[Q,x.current.data.txt]])]),o("label",dn,[pn,V(o("select",{"onUpdate:modelValue":t[18]||(t[18]=s=>x.current.terrain.type=s)},[o("option",{value:d(C).NONE},"\u65E0",8,xn),o("option",{value:d(C).DISABLED},"\u7981\u6B62",8,fn),o("option",{value:d(C).BLOCKED},"\u969C\u788D",8,vn),o("option",{value:d(C).CLIFF},"\u60AC\u5D16",8,_n)],512),[[at,x.current.terrain.type]])]),x.current.unit?(b(),xt(r,{key:0},{default:lt(()=>[o("label",mn,[hn,V(o("input",{type:"number","onUpdate:modelValue":t[19]||(t[19]=s=>x.current.unit.actorId=s),style:{width:"4em"}},null,512),[[Q,x.current.unit.actorId]])]),o("label",bn,[gn,V(o("select",{"onUpdate:modelValue":t[20]||(t[20]=s=>x.current.unit.actorType=s)},[o("option",{value:d(N).NONE},"\u65E0",8,Fn),o("option",{value:d(N).GUARD},"\u62A4\u536B",8,wn),o("option",{value:d(N).SHEEP},"\u9776\u5B50",8,Dn),o("option",{value:d(N).ATTACKER},"\u653B\u51FB\u8005",8,kn)],512),[[at,x.current.unit.actorType]])]),o("label",En,[Cn,V(o("input",{type:"checkbox","onUpdate:modelValue":t[21]||(t[21]=s=>x.current.unit.fly=s)},null,512),[[he,x.current.unit.fly]])])]),_:1})):W("",!0),o("button",{class:"btn",onClick:Yt},"\u5B8C\u6210")]),_:1})])):W("",!0)]),o("div",Bn,[(_=x.current)!=null&&_.unit?(b(),E("label",In,[$n,o("input",{type:"text",readonly:"",value:x.current.unit.unitId,style:{width:"4em"}},null,8,An)])):W("",!0),(w=x.current)!=null&&w.unit?(b(),E("label",Hn,[Gn,V(o("select",{"onUpdate:modelValue":t[22]||(t[22]=s=>x.current.unit.team=s)},Mn,512),[[at,x.current.unit.team]])])):W("",!0),(y=x.current)!=null&&y.unit?(b(),E("button",{key:2,class:"btn btn-success",onClick:ne},"\u602A\u529B\u4E71\u795E")):W("",!0),(m=x.current)!=null&&m.unit?(b(),E("button",{key:3,class:"btn btn-success",onClick:se},"\u5F00\u8F66")):W("",!0)])]),o("div",Un,[o("div",On,[(b(!0),E(dt,null,pt(d(h),(s,M)=>(b(),E("div",{class:"grids-row",key:M},[(b(!0),E(dt,null,pt(s,(k,l)=>{var q,rt;return b(),xt(d(nt),{key:l,draggable:!0,selected:k.x===((q=x.current)==null?void 0:q.x)&&k.y===((rt=x.current)==null?void 0:rt.y),disabled:k.disabled,dot:k.unit&&k.unit.guard,data:k.data,terrain:k.terrain,overlay:k.overlay,unit:k.unit,onDragstart:U=>ae(U,k),onDragover:t[23]||(t[23]=it(()=>{},["prevent"])),onDrop:U=>ie(U,k),onContextmenu:it(U=>ce(k),["prevent"]),onClick:U=>Jt(U,k),onMousedown:U=>Qt(U,k),onMouseenter:U=>Pt(U,k),onClickoverlay:re},null,8,["selected","disabled","dot","data","terrain","overlay","unit","onDragstart","onDrop","onContextmenu","onClick","onMousedown","onMouseenter"])}),128))]))),128))]),o("div",Nn,[o("div",Wn,[o("label",Tn,[zn,V(o("select",{"onUpdate:modelValue":t[24]||(t[24]=s=>I.team=s)},Zn,512),[[at,I.team]])])]),o("div",jn,[Z(d(nt),{item:d(c),onDragstart:t[25]||(t[25]=s=>Ht(s,d(c)))},null,8,["item"]),(b(!0),E(dt,null,pt(d(v),(s,M)=>(b(),xt(d(nt),{key:M,data:s.data,terrain:s.terrain,overlay:s.overlay,unit:s.unit,onDragstart:k=>Ht(k,s)},null,8,["data","terrain","overlay","unit","onDragstart"]))),128))])])])])}}});const es=Ct(Jn,[["__scopeId","data-v-85259d98"]]);export{es as default};
