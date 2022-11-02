import{d as ht,r as Y,a as pe,b as vt,O as Wt,Z as Tt,$ as zt,o as g,c as C,f as o,G as P,u as f,D as pt,E as lt,h as R,z as Q,q as xe,k as N,T as fe,p as kt,m as Et,_ as Ct,g as xt,P as Rt,X as Mt,a0 as Lt,v as rt,e as j,w as at,F as yt,j as dt,l as ve,i as _e,x as ft,W as me}from"./index.js";import{_ as mt}from"./lodash.js";import{u as he,D as be}from"./useHeroes.js";import{_ as ge}from"./Modal.vue_vue_type_style_index_0_lang.js";const St=(n,G,D)=>{let F=0,b=0,r=0;n%=360;const l=Math.floor(n/60),y=n/60-l,E=D*(1-G),I=D*(1-G*y),M=D*(1-G*(1-y));switch(l){case 0:F=D,b=M,r=E;break;case 1:F=I,b=D,r=E;break;case 2:F=E,b=D,r=M;break;case 3:F=E,b=I,r=D;break;case 4:F=M,b=E,r=D;break;case 5:F=D,b=E,r=I;break}F=Math.floor(F*255),b=Math.floor(b*255),r=Math.floor(r*255);const S=("00"+F.toString(16)).slice(-2),W=("00"+b.toString(16)).slice(-2),H=("00"+r.toString(16)).slice(-2);return[n,G,D,F,b,r,"#"+S+W+H]},Ut=n=>{let G=0,D=0,F=0,b=0,r=0,l=0;if(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i.test(n))G=window.parseInt(RegExp.$1,16),D=window.parseInt(RegExp.$2,16),F=window.parseInt(RegExp.$3,16);else if(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.test(n))G=window.parseInt(RegExp.$1,10),D=window.parseInt(RegExp.$2,10),F=window.parseInt(RegExp.$3,10);else return[0,0,0,0,0,0,"#000000"];b=G/255,r=D/255,l=F/255;let y=b;r>y&&(y=r),l>y&&(y=l);let E=b;r<E&&(E=r),l<E&&(E=l);let I=0,M=0,S=0;y===E?I=0:y===b&&r>=l?I=60*(r-l)/(y-E)+0:y===b&&r<l?I=60*(r-l)/(y-E)+360:y===r?I=60*(l-b)/(y-E)+120:y===l&&(I=60*(b-r)/(y-E)+240),y===0?M=0:M=1-E/y,S=y;const W=("00"+G.toString(16)).slice(-2),H=("00"+D.toString(16)).slice(-2),q=("00"+F.toString(16)).slice(-2);return[Math.floor(I),M,S,G,D,F,"#"+W+H+q]},Dt=n=>(kt("data-v-e5b80cdc"),n=n(),Et(),n),Fe={class:"color-control"},we={key:0,class:"color-picker"},ke={class:"color-picker-layer"},Ee=["onMousedown"],Ce=["onMousedown"],De={class:"color-picker-view"},Be=Dt(()=>o("div",{class:"color-picker-view__label"},"HSV",-1)),Ie=Dt(()=>o("div",{class:"color-picker-view__label"},"RGB",-1)),$e=Dt(()=>o("div",{class:"color-picker-view__label"},"Hex",-1)),He=ht({name:"ColorPicker"}),Ge=ht({...He,props:{modelValue:null},emits:["update:modelValue"],setup(n,{emit:G}){const D=n,F=Y(!1),b=pe({set:c=>{G("update:modelValue",c)},get:()=>D.modelValue}),r=vt({h:0,s:0,v:0,r:0,g:0,b:0}),l=vt({rect_down:!1,rect_left:0,rect_bottom:0,ver_down:!1,ver_bottom:0}),y={rect:{left:0,bottom:0,x:0,y:0},ver:{bottom:0,y:0}},E=Y(!1),I=()=>{E.value=!0},M=mt.debounce(()=>{E.value=!1},300),S=()=>{I();const c=St(r.h,r.s,r.v);r.r=c[3],r.g=c[4],r.b=c[5],b.value=c[6],l.ver_bottom=r.h,l.rect_left=r.s*360,l.rect_bottom=r.v*360,M()},W=()=>{I();const c=Ut(`${r.r},${r.g},${r.b}`);r.h=c[0],r.s=c[1],r.v=c[2],b.value=c[6],l.ver_bottom=r.h,l.rect_left=r.s*360,l.rect_bottom=r.v*360,M()},H=c=>{c=c||"#000000";const v=Ut(c);r.h=v[0],r.s=v[1],r.v=v[2],r.r=v[3],r.g=v[4],r.b=v[5],l.ver_bottom=r.h,l.rect_left=r.s*360,l.rect_bottom=r.v*360},q=()=>{const c=St(l.ver_bottom,l.rect_left/360,l.rect_bottom/360);r.h=c[0],r.s=c[1],r.v=c[2],r.r=c[3],r.g=c[4],r.b=c[5],b.value=c[6]},tt=c=>{l.rect_down=!0,y.rect.x=c.clientX,y.rect.y=c.clientY;const v=c.currentTarget,V=v.getBoundingClientRect().left,bt=v.getBoundingClientRect().top;y.rect.left=l.rect_left=c.clientX-V,y.rect.bottom=l.rect_bottom=360-(c.clientY-bt),q()},u=c=>{if(!l.rect_down)return;const v=c.clientX-y.rect.x,V=c.clientY-y.rect.y;l.rect_left=Math.max(0,Math.min(360,y.rect.left+v)),l.rect_bottom=Math.max(0,Math.min(360,y.rect.bottom-V)),q()},J=()=>{!l.rect_down||(l.rect_down=!1)},$=c=>{l.ver_down=!0,y.ver.y=c.clientY;const V=c.currentTarget.getBoundingClientRect().top;y.ver.bottom=l.ver_bottom=360-(c.clientY-V),q()},T=c=>{if(!l.ver_down)return;const v=c.clientY-y.ver.y;l.ver_bottom=Math.max(0,Math.min(360,y.ver.bottom-v)),q()},X=()=>{!l.ver_down||(l.ver_down=!1)},et=()=>{F.value=!0},nt=()=>{F.value=!1};return Wt(()=>D.modelValue,c=>{l.ver_down||l.rect_down||E.value||H(c)}),H(D.modelValue),Tt(()=>{window.addEventListener("mousemove",u,!1),window.addEventListener("mouseup",J,!1),window.addEventListener("mousemove",T,!1),window.addEventListener("mouseup",X,!1)}),zt(()=>{window.removeEventListener("mousemove",u,!1),window.removeEventListener("mouseup",J,!1),window.removeEventListener("mousemove",T,!1),window.removeEventListener("mouseup",X,!1)}),(c,v)=>(g(),C("div",Fe,[o("div",{class:"color-preview",style:P({backgroundColor:f(b)}),onClick:et},null,4),(g(),pt(fe,{to:"body",disabled:!F.value},[F.value?(g(),C("div",we,[o("div",{class:"color-picker-mask",onWheel:v[0]||(v[0]=lt(()=>{},["prevent"])),onTouchstart:v[1]||(v[1]=lt(()=>{},["prevent"])),onClick:nt},null,32),o("div",ke,[o("div",{class:"color-picker-rect",style:P(`background-color: hsl(${r.h}deg, 100%, 50%)`),onMousedown:lt(tt,["prevent","stop"])},[o("div",{class:"color-picker-rect-cur",style:P({left:`${l.rect_left}px`,bottom:`${l.rect_bottom}px`})},null,4)],44,Ee),o("div",{class:"color-picker-hue",onMousedown:lt($,["prevent","stop"])},[o("div",{class:"color-picker-hue-cur",style:P({bottom:`${l.ver_bottom}px`})},null,4)],40,Ce),o("div",De,[o("div",{class:"color-picker-view-color",style:P({background:f(b)})},null,4),Be,R(o("input",{type:"number",max:"360",min:"0",step:"1","onUpdate:modelValue":v[2]||(v[2]=V=>r.h=V),class:"color-picker-view__input",onInput:S},null,544),[[Q,r.h]]),R(o("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":v[3]||(v[3]=V=>r.s=V),class:"color-picker-view__input",onInput:S},null,544),[[Q,r.s]]),R(o("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":v[4]||(v[4]=V=>r.v=V),class:"color-picker-view__input",onInput:S},null,544),[[Q,r.v]]),Ie,R(o("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":v[5]||(v[5]=V=>r.r=V),class:"color-picker-view__input",onInput:W},null,544),[[Q,r.r]]),R(o("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":v[6]||(v[6]=V=>r.g=V),class:"color-picker-view__input",onInput:W},null,544),[[Q,r.g]]),R(o("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":v[7]||(v[7]=V=>r.b=V),class:"color-picker-view__input",onInput:W},null,544),[[Q,r.b]]),$e,R(o("input",{type:"text","onUpdate:modelValue":v[8]||(v[8]=V=>xe(b)?b.value=V:null),class:"color-picker-view__input"},null,512),[[Q,f(b)]]),o("div",{class:"color-picker-view__enter",onClick:nt},"\u786E\u8BA4")])])])):N("",!0)],8,["disabled"]))]))}});const ut=Ct(Ge,[["__scopeId","data-v-e5b80cdc"]]);ut.install=function(n){n.component(ut.name,ut)};var O=(n=>(n[n.NONE=0]="NONE",n[n.GUARD=1]="GUARD",n[n.SHEEP=2]="SHEEP",n[n.ATTACKER=3]="ATTACKER",n))(O||{}),A=(n=>(n[n.NONE=0]="NONE",n[n.BLOCKED=5]="BLOCKED",n[n.CLIFF=6]="CLIFF",n))(A||{}),K=(n=>(n[n.NONE=0]="NONE",n[n.ARROW_UP=1]="ARROW_UP",n[n.ARROW_RIGHT=2]="ARROW_RIGHT",n[n.ARROW_DOWN=3]="ARROW_DOWN",n[n.ARROW_LEFT=4]="ARROW_LEFT",n[n.HIGHLIGHT=5]="HIGHLIGHT",n))(K||{});const ot=n=>(kt("data-v-5a91b919"),n=n(),Et(),n),Ve=["title"],Ae=["onClick"],Re={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Me=ot(()=>o("path",{d:"M0,0h24v24h-24z",fill:"#E84F2E30"},null,-1)),Le=ot(()=>o("path",{d:"M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z",fill:"#FFFF84"},null,-1)),Se=[Me,Le],Ue={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Oe=ot(()=>o("path",{d:"M0,0h24v24h-24z",fill:"#E84F2E30"},null,-1)),Ne=ot(()=>o("path",{d:"M11,16H3V8H11V2L21,12L11,22V16M13,7V10H5V14H13V17L18,12L13,7Z",fill:"#FFFF84"},null,-1)),We=[Oe,Ne],Te={key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ze=ot(()=>o("path",{d:"M0,0h24v24h-24z",fill:"#E84F2E30"},null,-1)),Ke=ot(()=>o("path",{d:"M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z",fill:"#FFFF84"},null,-1)),qe=[ze,Ke],Xe={key:3,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ze=ot(()=>o("path",{d:"M0,0h24v24h-24z",fill:"#E84F2E30"},null,-1)),je=ot(()=>o("path",{d:"M13,22L3,12L13,2V8H21V16H13V22M6,12L11,17V14H19V10H11V7L6,12Z",fill:"#FFFF84"},null,-1)),Je=[Ze,je],Qe={key:4,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Pe=ot(()=>o("path",{d:"M0,0h24v24h-24z",fill:"#E84F2E30"},null,-1)),Ye=[Pe],to={key:5,class:"tg lt"},eo={key:6,class:"tg rt"},oo={key:7,class:"tg rb"},no={class:"grid-item-overlay-dot"},so={class:"grid-item-overlay-selected"},ro=ht({__name:"GridItem",props:{disabled:{type:Boolean},selected:{type:Boolean},dot:{type:Boolean},data:null,terrain:null,overlay:null,unit:null},emits:["clickoverlay"],setup(n,{emit:G}){const D=n;function F(){G("clickoverlay",D.overlay)}return(b,r)=>{var l,y,E,I,M,S,W,H,q,tt,u;return g(),C("div",{draggable:!0,class:Rt(["grid-item",{disabled:n.disabled}])},[o("div",{class:"grid-item-data",style:P({backgroundColor:(l=n.data)==null?void 0:l.bgcolor,backgroundImage:(y=n.data)!=null&&y.image?`url(${n.data.image})`:"",opacity:(E=n.data)==null?void 0:E.opacity})},null,4),n.terrain?(g(),C("div",{key:0,class:"grid-item-terrain",style:P({backgroundImage:n.terrain.image?`url(${n.terrain.image})`:""})},null,4)):N("",!0),n.unit?(g(),C("div",{key:1,class:"grid-item-unit",title:n.unit.name,style:P({backgroundImage:n.unit.image?`url(${n.unit.image})`:""})},null,12,Ve)):N("",!0),(I=n.data)!=null&&I.txt?(g(),C("div",{key:2,class:"grid-item-txt",style:P({fontSize:(M=n.data)!=null&&M.size?`${n.data.size}px`:"",color:(S=n.data)==null?void 0:S.color})},xt(n.data.txt),5)):N("",!0),(W=n.unit)!=null&&W.team?(g(),C("div",{key:3,class:Rt(["grid-item-overlay pointer-none","team-"+((H=n.unit)==null?void 0:H.team)])},null,2)):N("",!0),n.overlay?(g(),C("div",{key:4,class:"grid-item-overlay",onClick:lt(F,["stop"])},[n.overlay===f(K).ARROW_UP?(g(),C("svg",Re,Se)):n.overlay===f(K).ARROW_RIGHT?(g(),C("svg",Ue,We)):n.overlay===f(K).ARROW_DOWN?(g(),C("svg",Te,qe)):n.overlay===f(K).ARROW_LEFT?(g(),C("svg",Xe,Je)):n.overlay===f(K).HIGHLIGHT?(g(),C("svg",Qe,Ye)):N("",!0)],8,Ae)):N("",!0),(q=n.unit)!=null&&q.actorId?(g(),C("i",to,xt(n.unit.actorId),1)):N("",!0),(tt=n.data)!=null&&tt.sup?(g(),C("i",eo,xt(n.data.sup),1)):N("",!0),(u=n.data)!=null&&u.sub?(g(),C("i",oo,xt(n.data.sub),1)):N("",!0),R(o("div",no,null,512),[[Mt,n.dot]]),R(o("div",so,null,512),[[Mt,n.selected]])],2)}}});const st=Ct(ro,[["__scopeId","data-v-5a91b919"]]);function ao(){const n=Y(15),G=Y(15),D=Y(0),F=Y([]),b=Y([]),r=[{color:"#202020",bgcolor:"transparent"},{color:"#f9f9fa",bgcolor:"#ff3333"},{color:"#f9f9fa",bgcolor:"#00d659"},{color:"#f9f9fa",bgcolor:"#369af7"},{color:"#f9f9fa",bgcolor:"#fec02f"},{color:"#f9f9fa",bgcolor:"#a865e7"}],l=()=>({d:0,d1:0,d2:0,q:0}),y=()=>({txt:"",size:14,color:r[0].color,bgcolor:r[0].bgcolor,image:"",opacity:1}),E=()=>({type:A.NONE,image:""}),I=()=>({actorId:0,unitId:0,team:0,actorType:O.NONE,name:"",image:""}),M=$=>({x:0,y:0,disabled:!1,data:y(),state:l(),terrain:E(),unit:$});function S($){$.state=l(),$.data=y(),$.terrain=E(),$.overlay=void 0,$.unit=void 0}function W(){D.value=0,F.value.forEach($=>{$.forEach(T=>{S(T)})}),b.value=[]}function H($,T){const X=[];for(let et=0;et<$;et++){const nt=[];for(let c=0;c<T;c++){const v=M();v.x=c,v.y=et,nt.push(v)}X.push(nt)}F.value=X}function q($,T){G.value=$,n.value=T,J()}function tt($,T){var X;return(X=F.value[T])==null?void 0:X[$]}function u($){for(let T=0;T<n.value;T++)for(let X=0;X<G.value;X++)$(F.value[T][X])}function J(){H(n.value,G.value)}return J(),{rows:n,cols:G,actorId:D,grids:F,selects:b,gridColors:r,defGridState:l,defGridData:y,defGridTerrain:E,defGridUnit:I,defGrid:M,cleanGrid:S,cleanGrids:W,setSize:q,getGrid:tt,gridForEach:u}}const Ot=""+new URL("../assets/cliff.svg",import.meta.url).href,Nt=""+new URL("../assets/block.svg",import.meta.url).href,lo=[{name:"\u7A7A\u767D\u573A\u666F",width:15,height:15,data:[]},{name:"\u5316\u8352\u5E7B\u5883",width:17,height:11,data:[{x:0,y:10,type:5},{x:1,y:10,type:5},{x:2,y:10,type:5},{x:14,y:10,type:5},{x:15,y:10,type:5},{x:16,y:10,type:5},{x:0,y:9,type:5},{x:1,y:9,type:5},{x:15,y:9,type:5},{x:16,y:9,type:5},{x:0,y:8,type:5},{x:7,y:8,type:6},{x:8,y:8,type:6},{x:9,y:8,type:6},{x:16,y:8,type:5},{x:6,y:7,type:6},{x:7,y:7,type:6},{x:8,y:7,type:6},{x:9,y:7,type:6},{x:10,y:7,type:6},{x:5,y:6,type:6},{x:6,y:6,type:6},{x:10,y:6,type:6},{x:11,y:6,type:6},{x:5,y:4,type:6},{x:6,y:4,type:6},{x:10,y:4,type:6},{x:11,y:4,type:6},{x:6,y:3,type:6},{x:7,y:3,type:6},{x:8,y:3,type:6},{x:9,y:3,type:6},{x:10,y:3,type:6},{x:0,y:2,type:5},{x:7,y:2,type:6},{x:8,y:2,type:6},{x:9,y:2,type:6},{x:16,y:2,type:5},{x:0,y:1,type:5},{x:1,y:1,type:5},{x:15,y:1,type:5},{x:16,y:1,type:5},{x:0,y:0,type:5},{x:1,y:0,type:5},{x:2,y:0,type:5},{x:14,y:0,type:5},{x:15,y:0,type:5},{x:16,y:0,type:5}]},{name:"\u96EA\u5CAD\u5E7B\u5883",width:15,height:11,data:[{x:0,y:10,type:5},{x:1,y:10,type:5},{x:2,y:10,type:5},{x:5,y:10,type:6},{x:6,y:10,type:6},{x:7,y:10,type:6},{x:8,y:10,type:6},{x:9,y:10,type:6},{x:12,y:10,type:5},{x:13,y:10,type:5},{x:14,y:10,type:5},{x:0,y:9,type:5},{x:1,y:9,type:5},{x:2,y:9,type:5},{x:3,y:9,type:6},{x:4,y:9,type:6},{x:5,y:9,type:6},{x:6,y:9,type:6},{x:7,y:9,type:6},{x:8,y:9,type:6},{x:9,y:9,type:6},{x:10,y:9,type:6},{x:11,y:9,type:6},{x:12,y:9,type:5},{x:13,y:9,type:5},{x:14,y:9,type:5},{x:0,y:8,type:5},{x:1,y:8,type:5},{x:2,y:8,type:5},{x:3,y:8,type:6},{x:11,y:8,type:6},{x:12,y:8,type:5},{x:13,y:8,type:5},{x:14,y:8,type:5},{x:6,y:6,type:6},{x:7,y:6,type:6},{x:8,y:6,type:6},{x:3,y:5,type:6},{x:11,y:5,type:6},{x:6,y:4,type:6},{x:7,y:4,type:6},{x:8,y:4,type:6},{x:0,y:2,type:5},{x:1,y:2,type:5},{x:2,y:2,type:5},{x:3,y:2,type:6},{x:11,y:2,type:6},{x:12,y:2,type:5},{x:13,y:2,type:5},{x:14,y:2,type:5},{x:0,y:1,type:5},{x:1,y:1,type:5},{x:2,y:1,type:5},{x:3,y:1,type:6},{x:4,y:1,type:6},{x:5,y:1,type:6},{x:6,y:1,type:6},{x:7,y:1,type:6},{x:8,y:1,type:6},{x:9,y:1,type:6},{x:10,y:1,type:6},{x:11,y:1,type:6},{x:12,y:1,type:5},{x:13,y:1,type:5},{x:14,y:1,type:5},{x:0,y:0,type:5},{x:1,y:0,type:5},{x:2,y:0,type:5},{x:5,y:0,type:6},{x:6,y:0,type:6},{x:7,y:0,type:6},{x:8,y:0,type:6},{x:9,y:0,type:6},{x:12,y:0,type:5},{x:13,y:0,type:5},{x:14,y:0,type:5}]},{name:"\u5730\u754C\u5E7B\u5883",width:17,height:13,data:[{x:0,y:12,type:5},{x:1,y:12,type:5},{x:2,y:12,type:5},{x:5,y:12,type:6},{x:6,y:12,type:6},{x:7,y:12,type:6},{x:8,y:12,type:6},{x:9,y:12,type:6},{x:10,y:12,type:6},{x:11,y:12,type:6},{x:14,y:12,type:5},{x:15,y:12,type:5},{x:16,y:12,type:5},{x:0,y:11,type:5},{x:1,y:11,type:5},{x:2,y:11,type:5},{x:6,y:11,type:6},{x:10,y:11,type:6},{x:14,y:11,type:5},{x:15,y:11,type:5},{x:16,y:11,type:5},{x:0,y:10,type:5},{x:1,y:10,type:5},{x:6,y:10,type:6},{x:10,y:10,type:6},{x:15,y:10,type:5},{x:16,y:10,type:5},{x:0,y:9,type:5},{x:1,y:9,type:5},{x:6,y:9,type:6},{x:7,y:9,type:6},{x:8,y:9,type:6},{x:9,y:9,type:6},{x:10,y:9,type:6},{x:15,y:9,type:5},{x:16,y:9,type:5},{x:7,y:8,type:6},{x:8,y:8,type:6},{x:9,y:8,type:6},{x:7,y:4,type:6},{x:8,y:4,type:6},{x:9,y:4,type:6},{x:0,y:3,type:5},{x:1,y:3,type:5},{x:6,y:3,type:6},{x:7,y:3,type:6},{x:8,y:3,type:6},{x:9,y:3,type:6},{x:10,y:3,type:6},{x:15,y:3,type:5},{x:16,y:3,type:5},{x:0,y:2,type:5},{x:1,y:2,type:5},{x:6,y:2,type:6},{x:10,y:2,type:6},{x:15,y:2,type:5},{x:16,y:2,type:5},{x:0,y:1,type:5},{x:1,y:1,type:5},{x:2,y:1,type:5},{x:6,y:1,type:6},{x:10,y:1,type:6},{x:14,y:1,type:5},{x:15,y:1,type:5},{x:16,y:1,type:5},{x:0,y:0,type:5},{x:1,y:0,type:5},{x:2,y:0,type:5},{x:5,y:0,type:6},{x:6,y:0,type:6},{x:7,y:0,type:6},{x:8,y:0,type:6},{x:9,y:0,type:6},{x:10,y:0,type:6},{x:11,y:0,type:6},{x:14,y:0,type:5},{x:15,y:0,type:5},{x:16,y:0,type:5}]},{name:"\u7ED3\u754C\u5E7B\u5883",width:11,height:11,data:[{x:5,y:8,type:5},{x:2,y:5,type:5},{x:5,y:5,type:5},{x:8,y:5,type:5},{x:5,y:2,type:5}]},{name:"\u57CE\u9685\u5E7B\u5883",width:15,height:11,data:[{x:0,y:10,type:5},{x:1,y:10,type:5},{x:2,y:10,type:5},{x:5,y:10,type:5},{x:6,y:10,type:5},{x:7,y:10,type:5},{x:8,y:10,type:5},{x:9,y:10,type:5},{x:12,y:10,type:5},{x:13,y:10,type:5},{x:14,y:10,type:5},{x:0,y:9,type:5},{x:1,y:9,type:5},{x:6,y:9,type:5},{x:8,y:9,type:5},{x:13,y:9,type:5},{x:14,y:9,type:5},{x:0,y:8,type:5},{x:14,y:8,type:5},{x:10,y:6,type:5},{x:5,y:5,type:5},{x:9,y:5,type:5},{x:4,y:4,type:5},{x:0,y:2,type:5},{x:14,y:2,type:5},{x:0,y:1,type:5},{x:1,y:1,type:5},{x:6,y:1,type:5},{x:8,y:1,type:5},{x:13,y:1,type:5},{x:14,y:1,type:5},{x:0,y:0,type:5},{x:1,y:0,type:5},{x:2,y:0,type:5},{x:5,y:0,type:5},{x:6,y:0,type:5},{x:7,y:0,type:5},{x:8,y:0,type:5},{x:9,y:0,type:5},{x:12,y:0,type:5},{x:13,y:0,type:5},{x:14,y:0,type:5}]},{name:"\u6D1E\u7A74\u5E7B\u5883",width:11,height:11,data:[{x:0,y:0,type:5},{x:1,y:0,type:5},{x:0,y:1,type:5},{x:0,y:2,type:5},{x:3,y:2,type:6},{x:4,y:2,type:6},{x:2,y:3,type:6},{x:3,y:3,type:6},{x:4,y:3,type:6},{x:6,y:7,type:6},{x:7,y:7,type:6},{x:8,y:7,type:6},{x:6,y:8,type:6},{x:7,y:8,type:6},{x:10,y:8,type:5},{x:10,y:9,type:5},{x:9,y:10,type:5},{x:10,y:10,type:5}]},{name:"\u5996\u5C71\u5E7B\u5883",width:17,height:11,data:[]}],_=n=>(kt("data-v-06e946eb"),n=n(),Et(),n),uo={class:"wrapper"},io={class:"toolbar"},co={class:"setting"},yo={class:"label-control"},po=_(()=>o("span",null,"\u7F16\u8F91\u6A21\u5F0F",-1)),xo=_(()=>o("option",{value:1},"\u7F16\u8F91\u7F51\u683C",-1)),fo=_(()=>o("option",{value:2},"\u5237\u5B50\u6A21\u5F0F",-1)),vo=_(()=>o("option",{value:3},"\u9009\u62E9\u5F62\u72B6",-1)),_o=_(()=>o("option",{value:4},"\u62A4\u536B\u8BA1\u7B97",-1)),mo=[xo,fo,vo,_o],ho={class:"label-control"},bo=_(()=>o("span",null,"\u8303\u56F4",-1)),go={class:"label-control"},Fo=_(()=>o("span",null,"\u5F62\u72B6",-1)),wo=_(()=>o("option",{value:1},"\u83F1\u5F62",-1)),ko=_(()=>o("option",{value:2},"\u5708\u6570",-1)),Eo=[wo,ko],Co={class:"label-control"},Do=_(()=>o("span",null,"\u6392\u5E8F",-1)),Bo=_(()=>o("option",{value:1},"\u8DDD\u79BBX",-1)),Io=_(()=>o("option",{value:2},"\u8DDD\u79BBY",-1)),$o=_(()=>o("option",{value:3},"X\u4F18\u5148",-1)),Ho=_(()=>o("option",{value:4},"Y\u4F18\u5148",-1)),Go=[Bo,Io,$o,Ho],Vo=_(()=>o("button",{class:"btn"},"\u9884\u8BBE\u573A\u666F",-1)),Ao=["onClick"],Ro=["onClick"],Mo=_(()=>o("div",{style:{flex:"1 1 0"}},null,-1)),Lo=_(()=>o("article",null,[o("h2",null,"\u8BF4\u660E"),o("p",null,"\u70B9\u51FB\u9884\u8BBE\u573A\u666F\uFF0C\u53EF\u4EE5\u8F7D\u5165\u4E00\u4E9B\u9884\u8BBE\u7684\u573A\u666F\u3002"),o("p",null,"\u53F3\u4FA7\u5355\u4F4D\u53EF\u901A\u8FC7\u62D6\u66F3\u62C9\u5165\u7F51\u683C\u3002"),o("p",null,[ft(" \u9009\u4E2D\u7F51\u683C\u4E2D\u7684\u5355\u4F4D\u53EF\u4EE5\u4F7F\u7528\u201C\u602A\u529B\u4E71\u795E\u201D\u3001\u201C\u5F00\u8F66\u201D\u529F\u80FD\u3002"),o("br"),ft(" \u201C\u602A\u529B\u4E71\u795E\u201D\u529F\u80FD\u53EA\u4F1A\u4F5C\u7528\u4E8E\u975E\u540C\u961F\u5355\u4F4D\u3002"),o("br"),ft(" \u201C\u5F00\u8F66\u201D\u529F\u80FD\u53EA\u4F1A\u4F5C\u7528\u4E8E\u540C\u961F\u5355\u4F4D\u3002"),o("br"),ft(" \u4F7F\u7528\u529F\u80FD\u524D\uFF0C\u4F60\u53EF\u4EE5\u4FDD\u5B58\u5F53\u524D\u5E03\u5C40\uFF0C\u65B9\u4FBF\u9884\u89C8\u7ED3\u679C\u540E\u5FEB\u901F\u8FD8\u539F\u5E03\u5C40\u3002 ")])],-1)),So={class:"color-container"},Uo={class:"label-control"},Oo=_(()=>o("span",null,"\u9884\u89C8",-1)),No={class:"label-control"},Wo=_(()=>o("span",null,"\u6587\u5B57",-1)),To={class:"label-control"},zo=_(()=>o("span",null,"\u80CC\u666F",-1)),Ko=_(()=>o("label",{class:"label-control"},[o("span",null,"\u9884\u8BBE")],-1)),qo={class:"color-tpls"},Xo=ft(" E "),Zo={width:"32",height:"32",viewBox:"0 0 24 24",fill:"#a9a9a9",style:{"pointer-events":"none"}},jo=_(()=>o("path",{d:"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"},null,-1)),Jo=[jo],Qo={class:"props-container"},Po={key:0,class:"props-content"},Yo={class:"label-control"},tn=_(()=>o("span",null,"\u9884\u89C8",-1)),en={class:"label-control"},on=_(()=>o("span",null,"\u6587\u5B57",-1)),nn={class:"label-control"},sn=_(()=>o("span",null,"\u80CC\u666F",-1)),rn={class:"label-control"},an=_(()=>o("span",null,"\u5927\u5C0F",-1)),ln={class:"label-control"},un=_(()=>o("span",null,"\u5185\u5BB9",-1)),cn={class:"label-control"},yn=_(()=>o("span",null,"\u5730\u5F62",-1)),dn=["value"],pn=["value"],xn=["value"],fn={class:"label-control"},vn=_(()=>o("span",null,"Id",-1)),_n={class:"label-control"},mn=_(()=>o("span",null,"\u7C7B\u578B",-1)),hn=["value"],bn=["value"],gn=["value"],Fn=["value"],wn={class:"label-control"},kn=_(()=>o("span",null,"\u98DE\u884C",-1)),En={class:"controls"},Cn={key:0,class:"label-control"},Dn=_(()=>o("span",null,"\u5355\u4F4DID",-1)),Bn=["value"],In={key:1,class:"label-control"},$n=_(()=>o("span",null,"\u961F\u4F0D",-1)),Hn=_(()=>o("option",{value:void 0},"\u961F\u4F0D\u7A7A",-1)),Gn=_(()=>o("option",{value:0},"\u961F\u4F0D0",-1)),Vn=_(()=>o("option",{value:1},"\u961F\u4F0D1",-1)),An=_(()=>o("option",{value:2},"\u961F\u4F0D2",-1)),Rn=[Hn,Gn,Vn,An],Mn={class:"content"},Ln={class:"grids"},Sn={class:"panel-right"},Un={class:"controls"},On={class:"label-control"},Nn=_(()=>o("span",null,"\u961F\u4F0D",-1)),Wn=_(()=>o("option",{value:0},"\u961F\u4F0D0",-1)),Tn=_(()=>o("option",{value:1},"\u961F\u4F0D1",-1)),zn=_(()=>o("option",{value:2},"\u961F\u4F0D2",-1)),Kn=[Wn,Tn,zn],qn={class:"heroes"},Xn=ht({__name:"Grids",setup(n){const{rows:G,cols:D,actorId:F,grids:b,selects:r,gridColors:l,defGridUnit:y,defGridState:E,defGrid:I,cleanGrid:M,cleanGrids:S,setSize:W,getGrid:H,gridForEach:q}=ao(),tt=Y(),u=vt({editor:1,selectRange:5,shape:1,sortType:1,color:l[0].color,bgcolor:l[0].bgcolor,terrain:void 0}),J=I();J.terrain={image:Nt,type:A.BLOCKED};const $=I();$.terrain={image:Ot,type:A.CLIFF};function T(e){u.color=e.color,u.bgcolor=e.bgcolor,u.terrain=void 0}function X(e){u.color="",u.bgcolor="",u.terrain=e.terrain}const{heroes:et}=he(),nt=Lt(I(y())),c=Lt(et.value.map(e=>{const t=I(),a=y();return a.unitId=e.id,a.image=`https://media.zlongame.com/media/news/cn/tdj/info/data/heroicon/${e.hero_icon}.png`,a.name=e.name,t.unit=a,t}));Wt(et,()=>{c.value=et.value.map(e=>{const t=I(),a=y();return a.image=`https://media.zlongame.com/media/news/cn/tdj/info/data/heroicon/${e.hero_icon}.png`,t.unit=a,t})});function v(e,t,a,w){const m=[];return q(k=>{k.state=E()}),q(k=>{const i=Math.abs(e-k.x),h=Math.abs(t-k.y),s=i+h,L=Math.max(i,h),d=i>1?i-1:i+h>1?h-1:h;switch(w){case 1:s<=a&&(k.state.d=s,k.state.q=L,k.state.d1=d,m.push(k));break;case 2:Math.abs(i)<=a&&Math.abs(h)<=a&&(k.state.d=s,k.state.q=L,k.state.d1=d,m.push(k));break}}),m}function V(e,t,a,w,m,k,i){const h=v(e,t,a,w);switch(h.forEach(s=>{s.data.color=k,s.data.bgcolor=i}),r.value=h,m){case 1:r.value.sort(bt);break;case 2:r.value.sort(gt);break;case 3:r.value.sort(Kt);break;case 4:r.value.sort(qt);break}for(let s=0;s<r.value.length;s++){const L=r.value[s];L.data.txt=String(s+1)}}function bt(e,t){return e.state.q!==t.state.q?e.state.q-t.state.q:e.state.d!==t.state.d?e.state.d-t.state.d:e.x!==t.x?e.x-t.x:e.y!==t.y?e.y-t.y:0}function gt(e,t){return e.state.q!==t.state.q?e.state.q-t.state.q:e.state.d!==t.state.d?e.state.d-t.state.d:e.y!==t.y?e.y-t.y:e.x!==t.x?e.x-t.x:0}function Kt(e,t){return e.x!==t.x?e.x-t.x:e.y!==t.y?e.y-t.y:0}function qt(e,t){return e.y!==t.y?e.y-t.y:e.x!==t.x?e.x-t.x:0}const x=vt({enabled:!1});function Xt(){S()}function Bt(){x.enabled=!1}function Zt(e,t){var a;switch(u.editor){case 1:case 4:x.current=t,(a=tt.value)==null||a.focus();break;case 3:S(),V(t.x,t.y,u.selectRange,u.shape,u.sortType,u.color,u.bgcolor);break}}function jt(e,t){if(e.button===0)switch(u.editor){case 2:{x.enabled=!0,t.data.color=u.color,t.data.bgcolor=u.bgcolor,u.terrain?(t.terrain.type=u.terrain.type,t.terrain.image=u.terrain.image):(t.terrain.type=A.NONE,t.terrain.image="");break}}}function Jt(e,t){e.button===0&&x.enabled&&(t.data.color=u.color,t.data.bgcolor=u.bgcolor,u.terrain?(t.terrain.type=u.terrain.type,t.terrain.image=u.terrain.image):(t.terrain.type=A.NONE,t.terrain.image=""))}function Qt(){x.current=void 0}const it=Y({width:15,height:15});function Pt(){try{const e=localStorage.getItem("grids");if(!e)return;const t=JSON.parse(e);it.value=t}catch{}}function It(){if(!confirm("\u786E\u5B9A\u8981\u4FDD\u5B58\u5417\uFF1F"))return;let t=b.value.flat().filter(a=>a.terrain.type!==A.NONE||a.unit&&a.unit.actorId>0);t=mt.cloneDeep(t),it.value={width:D.value,height:G.value,data:t},localStorage.setItem("grids",JSON.stringify(it.value))}function Yt(){const e=it.value;if(!!e.data){W(e.width,e.height);for(const t of e.data){const a=H(t.x,t.y);!a||(t.data&&(a.data=t.data),t.terrain&&(a.terrain=t.terrain),t.unit&&t.unit.actorId>0&&(a.unit=t.unit))}}}function te(e){W(e.width,e.height),e.data.forEach(t=>{const a=H(t.x,t.y);if(!!a)switch(t.type){case A.CLIFF:a.terrain={image:Ot,type:A.CLIFF};break;case A.BLOCKED:a.terrain={image:Nt,type:A.BLOCKED};break}})}function ee(){var h;const e=x.current;if(!e)return;it.value||It();const t=(h=e.unit)==null?void 0:h.team;let a,w,m=[];for(a=e.x-2;a<=e.x+2;a++)for(w=e.y-2;w<=e.y+2;w++){const s=H(a,w);!s||(s.x===e.x&&s.y===e.y?(m[0]&&m.push(m[0]),m[0]=s):m.push(s))}m=m.filter(s=>s.unit&&s.unit.team!==t&&!(s.x===e.x&&s.y===e.y));const k=m.map(s=>({unit:s.unit}));m.forEach(s=>{M(s)});const i=v(e.x,e.y,4,2).filter(s=>s.terrain.type!==A.BLOCKED&&!(s.x===e.x&&s.y===e.y)).sort(gt).map(s=>[s.x,s.y]);for(const s of k)for(const[L,d]of i){const p=H(L,d);if(!!p&&!(p.unit&&p.unit.actorId>0)&&p.terrain.type!==A.BLOCKED&&!(p.terrain.type===A.CLIFF&&!s.unit.fly)){p.unit=s.unit;break}}}let Z;function oe(){const e=x.current;if(!e)return;const t=[{x:0,y:1,overlay:K.ARROW_UP},{x:1,y:0,overlay:K.ARROW_RIGHT},{x:0,y:-1,overlay:K.ARROW_DOWN},{x:-1,y:0,overlay:K.ARROW_LEFT}];for(const a of t){const w=H(e.x+a.x,e.y+a.y);if(!!w){w.overlay=a.overlay;for(let m=2;m<=4;m++){const k=H(e.x+a.x*m,e.y+a.y*m);!k||(k.overlay=K.HIGHLIGHT)}}}Z=e}function ne(e){var d;if(!Z||!e||e===K.HIGHLIGHT)return;const t=(d=Z.unit)==null?void 0:d.team;let a,w,m=[];for(a=Z.x-1;a<=Z.x+1;a++)for(w=Z.y-1;w<=Z.y+1;w++){if(a===Z.x&&w===Z.y)continue;const p=H(a,w);!p||!p.unit||p.unit.team===t&&(p.state.d=Ft(Z,p),m.push(p))}m.sort((p,z)=>!p.unit||!z.unit?0:p.state.d!==z.state.d?p.state.d-z.state.d:p.unit.actorId-z.unit.actorId),m=m.slice(0,2);const k=m.map(p=>({unit:p.unit}));m.forEach(p=>{p.unit=void 0}),console.log(k);const h={[K.ARROW_UP]:{x:0,y:1},[K.ARROW_RIGHT]:{x:1,y:0},[K.ARROW_DOWN]:{x:0,y:-1},[K.ARROW_LEFT]:{x:-1,y:0}}[e];let s;for(let p=1;p<=4;p++){const z=H(Z.x+p*h.x,Z.y+p*h.y);z&&z.terrain.type===A.NONE&&(s=z)}if(!s)return;q(p=>{p.overlay=void 0});const L=v(s.x,s.y,4,2).filter(p=>p.terrain.type!==A.BLOCKED&&!(p.x===(s==null?void 0:s.x)&&p.y===(s==null?void 0:s.y))).sort(gt).map(p=>[p.x,p.y]);for(const p of k)for(const[z,_t]of L){const U=H(z,_t);if(!!U&&!(U.unit&&U.unit.actorId>0)&&U.terrain.type!==A.BLOCKED&&!(U.terrain.type===A.CLIFF&&!p.unit.fly)){U.unit=p.unit;break}}s&&(Vt(s,Z),x.current=s)}const B=vt({team:1}),$t=["#ffffff00","#FF3C4132","#0EBEFF32","#48CF7432","#FCD00032","#80008032"],se=(e,t)=>{switch(u.editor){case 2:e.preventDefault();break;default:B.grid=t,B.action="swap",e.dataTransfer&&(e.dataTransfer.effectAllowed="move")}},re=(e,t)=>{const a=I();a.data.color=t.color,a.data.bgcolor=t.bgcolor,a.data.txt="E",B.grid=a,B.action="color"},Ht=(e,t)=>{B.grid=mt.cloneDeep(t),B.action="terrain"},Gt=(e,t)=>{B.grid=mt.cloneDeep(t),B.action="unit"},ae=(e,t)=>{if(e.preventDefault(),!B.grid)return;const a=B.grid.unit,w=B.grid.terrain;switch(B.action){case"color":t.unit||(t.unit=y()),t.unit.actorId||(t.unit.actorId=++F.value),t.data=B.grid.data;break;case"unit":if(t.unit||(t.unit=y()),t.unit.actorId||(t.unit.actorId=++F.value),!a)break;t.unit.image=a.image,t.unit.unitId=a.unitId,t.unit.team=B.team;break;case"swap":Vt(B.grid,t,!a||a.actorId===0);break;case"terrain":t.terrain=w;break}B.grid=void 0,B.action=void 0,x.current&&(x.current=t),u.editor===4&&ct()};function le(e,t){let a=e[0].state[t];for(let w=1;w<e.length;w++)e[w].state[t]<a&&(a=e[w].state[t]);return a}function Ft(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function Vt(e,t,a){const w=e.data,m=e.unit,k=e.terrain;e.data=t.data,e.unit=t.unit,t.data=w,t.unit=m,a&&(e.terrain=t.terrain,t.terrain=k)}function At(e,t,a){e.sort((i,h)=>!i.unit||!h.unit?0:+i.unit.actorId-+h.unit.actorId),e.forEach(i=>{i.state.d1=Ft(i,a),i.state.d2=Ft(i,t),i.unit&&(i.unit.guard=!1)});const w=le(e,"d1");if(e=e.filter(i=>i.state.d1===w),e.length===1)return e[0];let m=e[0],k=e.length;for(;k--;)if(e[k].state.d2<m.state.d2){m=e[k];break}return m}function ue(){W(15,15),F.value=0;const e=[{x:7,y:9,txt:"",type:O.GUARD,bg:"#0ebeff"},{x:9,y:7,txt:"",type:O.GUARD,bg:"#0ebeff"},{x:7,y:5,txt:"",type:O.GUARD,bg:"#0ebeff"},{x:5,y:7,txt:"",type:O.GUARD,bg:"#0ebeff"},{x:8,y:6,txt:"",type:O.ATTACKER,bg:"#ff3c41"},{x:7,y:7,txt:"",type:O.SHEEP,bg:"#fcd000"}];for(const t of e){const a=H(t.x,t.y);!a||(a.unit||(a.unit=y()),a.unit.actorId=++F.value,a.unit.actorType=t.type,a.disabled=!1,a.data.txt=t.txt,a.data.bgcolor=t.bg)}u.editor=4}const ct=()=>{const e=b.value.flat();e.forEach(i=>{i.data.opacity=1});const t=e.filter(i=>i.unit&&!i.disabled),a=t.filter(i=>{var h;return((h=i.unit)==null?void 0:h.actorType)===O.ATTACKER})[0],w=t.filter(i=>{var h;return((h=i.unit)==null?void 0:h.actorType)===O.SHEEP})[0],m=t.filter(i=>{var h;return((h=i.unit)==null?void 0:h.actorType)===O.GUARD});if(!w||m.length===0){alert("\u7F3A\u5C11\u89D2\u8272\uFF0C\u5C06\u81EA\u52A8\u751F\u6210"),ue(),ct();return}const k=e.filter(i=>!i.unit);for(const i of k){const h=At(m,i,w);!h.unit||(i.data.image=h.unit.image,i.data.bgcolor=$t[h.unit.actorId]||$t[0],h.data.image?i.data.sup="":i.data.sup=String(h.unit.actorId),i.data.opacity=.6)}if(a){const i=At(m,a,w);i.unit&&(i.unit.guard=!0)}},ie=e=>{if(!!e.unit&&u.editor===4){switch(e.unit.actorType){case O.GUARD:e.disabled=!e.disabled;break}ct()}},ce=e=>{var t;!B.grid||!e.dataTransfer||B.action==="swap"&&(u.editor===4&&((t=B.grid.unit)==null?void 0:t.actorType)===O.SHEEP||e.preventDefault())},ye=e=>{if(!!B.grid&&!!e)switch(B.action){case"swap":M(e),B.grid=void 0,B.action=void 0,u.editor===4&&ct()}},wt=Y(!1);function de(){wt.value=!0}return Tt(()=>{Pt(),window.addEventListener("mouseup",Bt,!1)}),zt(()=>{window.removeEventListener("mouseup",Bt,!1)}),(e,t)=>{var m,k,i,h;const a=ve("c-space"),w=me("autofocus");return g(),C("div",uo,[o("div",io,[o("div",co,[o("label",yo,[po,R(o("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>u.editor=s)},mo,512),[[rt,u.editor,void 0,{number:!0}]])]),o("label",ho,[bo,R(o("input",{type:"number",min:"0","onUpdate:modelValue":t[1]||(t[1]=s=>u.selectRange=s),style:{width:"5em"}},null,512),[[Q,u.selectRange]])]),o("label",go,[Fo,R(o("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>u.shape=s)},Eo,512),[[rt,u.shape]])]),o("label",Co,[Do,R(o("select",{"onUpdate:modelValue":t[3]||(t[3]=s=>u.sortType=s)},Go,512),[[rt,u.sortType]])]),o("button",{class:"btn",onClick:Xt},"\u6E05\u7A7A"),o("button",{class:"btn",onClick:ct},"\u8BA1\u7B97\u62A4\u536B"),o("button",{class:"btn btn-success",onClick:It},"\u4FDD\u5B58\u5E03\u5C40"),o("button",{class:"btn btn-success",onClick:Yt},"\u8FD8\u539F\u5E03\u5C40"),N("",!0),j(f(be),null,{popover:at(({onClose:s})=>[o("div",{class:"list",onClick:L=>s()},[(g(!0),C(yt,null,dt(f(lo),(L,d)=>(g(),C("div",{class:"list-item",key:d,onClick:p=>te(L)},xt(L.name),9,Ro))),128))],8,Ao)]),default:at(()=>[Vo]),_:1}),Mo,o("div",{class:"btn btn-link",onClick:de},"\u5E2E\u52A9"),j(ge,{show:wt.value,"onUpdate:show":t[4]||(t[4]=s=>wt.value=s),width:"600px"},{default:at(()=>[Lo]),_:1},8,["show"])]),o("div",So,[j(a,null,{default:at(()=>{var s,L;return[o("label",Uo,[Oo,j(f(st),{draggable:!1,data:{txt:"E",size:14,opacity:1,color:u.color,bgcolor:u.bgcolor},terrain:u.terrain},null,8,["data","terrain"])]),o("label",No,[Wo,j(f(ut),{modelValue:u.color,"onUpdate:modelValue":t[5]||(t[5]=d=>u.color=d)},null,8,["modelValue"])]),o("label",To,[zo,j(f(ut),{modelValue:u.bgcolor,"onUpdate:modelValue":t[6]||(t[6]=d=>u.bgcolor=d)},null,8,["modelValue"])]),Ko,o("div",qo,[(g(!0),C(yt,null,dt(f(l),(d,p)=>(g(),pt(f(st),{key:p,selected:u.bgcolor===d.bgcolor,style:P([`--color:${d.color};--bgcolor:${d.bgcolor}`]),onClick:z=>T(d),onDragstart:z=>re(z,d)},{default:at(()=>[Xo]),_:2},1032,["selected","style","onClick","onDragstart"]))),128)),j(f(st),{selected:((s=u.terrain)==null?void 0:s.type)===f($).terrain.type,terrain:f($).terrain,onClick:t[7]||(t[7]=d=>X(f($))),onDragstart:t[8]||(t[8]=d=>Ht(d,f($)))},null,8,["selected","terrain"]),j(f(st),{selected:((L=u.terrain)==null?void 0:L.type)===f(J).terrain.type,terrain:f(J).terrain,onClick:t[9]||(t[9]=d=>X(f(J))),onDragstart:t[10]||(t[10]=d=>Ht(d,f(J)))},null,8,["selected","terrain"])]),o("div",{class:"trush",onDragover:ce,onDrop:t[11]||(t[11]=d=>ye(B.grid))},[(g(),C("svg",Zo,Jo))],32)]}),_:1})]),o("div",Qo,[x.current?(g(),C("div",Po,[j(a,null,{default:at(()=>[o("label",Yo,[tn,j(f(st),{draggable:!1,style:P([`--color:${x.current.data.color};--bgcolor:${x.current.data.bgcolor}`]),data:x.current.data,terrain:x.current.terrain,overlay:x.current.overlay,unit:x.current.unit},null,8,["style","data","terrain","overlay","unit"])]),o("label",en,[on,j(f(ut),{modelValue:x.current.data.color,"onUpdate:modelValue":t[12]||(t[12]=s=>x.current.data.color=s)},null,8,["modelValue"])]),o("label",nn,[sn,j(f(ut),{modelValue:x.current.data.bgcolor,"onUpdate:modelValue":t[13]||(t[13]=s=>x.current.data.bgcolor=s)},null,8,["modelValue"])]),o("label",rn,[an,R(o("input",{type:"number",style:{width:"4em"},min:"12",step:"1","onUpdate:modelValue":t[14]||(t[14]=s=>x.current.data.size=s)},null,512),[[Q,x.current.data.size]])]),o("label",ln,[un,R(o("input",{type:"text",ref_key:"txtInput",ref:tt,"onUpdate:modelValue":t[15]||(t[15]=s=>x.current.data.txt=s),style:{width:"6em"}},null,512),[[w],[Q,x.current.data.txt]])]),o("label",cn,[yn,R(o("select",{"onUpdate:modelValue":t[16]||(t[16]=s=>x.current.terrain.type=s)},[o("option",{value:f(A).NONE},"\u65E0",8,dn),o("option",{value:f(A).BLOCKED},"\u969C\u788D",8,pn),o("option",{value:f(A).CLIFF},"\u60AC\u5D16",8,xn)],512),[[rt,x.current.terrain.type]])]),x.current.unit?(g(),pt(a,{key:0},{default:at(()=>[o("label",fn,[vn,R(o("input",{type:"number","onUpdate:modelValue":t[17]||(t[17]=s=>x.current.unit.actorId=s),style:{width:"4em"}},null,512),[[Q,x.current.unit.actorId]])]),o("label",_n,[mn,R(o("select",{"onUpdate:modelValue":t[18]||(t[18]=s=>x.current.unit.actorType=s)},[o("option",{value:f(O).NONE},"\u65E0",8,hn),o("option",{value:f(O).GUARD},"\u62A4\u536B",8,bn),o("option",{value:f(O).SHEEP},"\u9776\u5B50",8,gn),o("option",{value:f(O).ATTACKER},"\u653B\u51FB\u8005",8,Fn)],512),[[rt,x.current.unit.actorType]])]),o("label",wn,[kn,R(o("input",{type:"checkbox","onUpdate:modelValue":t[19]||(t[19]=s=>x.current.unit.fly=s)},null,512),[[_e,x.current.unit.fly]])])]),_:1})):N("",!0),o("button",{class:"btn",onClick:Qt},"\u5B8C\u6210")]),_:1})])):N("",!0)]),o("div",En,[(m=x.current)!=null&&m.unit?(g(),C("label",Cn,[Dn,o("input",{type:"text",readonly:"",value:x.current.unit.unitId,style:{width:"4em"}},null,8,Bn)])):N("",!0),(k=x.current)!=null&&k.unit?(g(),C("label",In,[$n,R(o("select",{"onUpdate:modelValue":t[20]||(t[20]=s=>x.current.unit.team=s)},Rn,512),[[rt,x.current.unit.team]])])):N("",!0),(i=x.current)!=null&&i.unit?(g(),C("button",{key:2,class:"btn btn-success",onClick:ee},"\u602A\u529B\u4E71\u795E")):N("",!0),(h=x.current)!=null&&h.unit?(g(),C("button",{key:3,class:"btn btn-success",onClick:oe},"\u5F00\u8F66")):N("",!0)])]),o("div",Mn,[o("div",Ln,[(g(!0),C(yt,null,dt(f(b),(s,L)=>(g(),C("div",{class:"grids-row",key:L},[(g(!0),C(yt,null,dt(s,(d,p)=>{var z,_t;return g(),pt(f(st),{key:p,draggable:!0,selected:d.x===((z=x.current)==null?void 0:z.x)&&d.y===((_t=x.current)==null?void 0:_t.y),disabled:d.disabled,dot:d.unit&&d.unit.guard,data:d.data,terrain:d.terrain,overlay:d.overlay,unit:d.unit,onDragstart:U=>se(U,d),onDragover:t[21]||(t[21]=lt(()=>{},["prevent"])),onDrop:U=>ae(U,d),onContextmenu:lt(U=>ie(d),["prevent"]),onClick:U=>Zt(U,d),onMousedown:U=>jt(U,d),onMouseenter:U=>Jt(U,d),onClickoverlay:ne},null,8,["selected","disabled","dot","data","terrain","overlay","unit","onDragstart","onDrop","onContextmenu","onClick","onMousedown","onMouseenter"])}),128))]))),128))]),o("div",Sn,[o("div",Un,[o("label",On,[Nn,R(o("select",{"onUpdate:modelValue":t[22]||(t[22]=s=>B.team=s)},Kn,512),[[rt,B.team]])])]),o("div",qn,[j(f(st),{item:f(nt),onDragstart:t[23]||(t[23]=s=>Gt(s,f(nt)))},null,8,["item"]),(g(!0),C(yt,null,dt(f(c),(s,L)=>(g(),pt(f(st),{key:L,data:s.data,terrain:s.terrain,overlay:s.overlay,unit:s.unit,onDragstart:d=>Gt(d,s)},null,8,["data","terrain","overlay","unit","onDragstart"]))),128))])])])])}}});const Pn=Ct(Xn,[["__scopeId","data-v-06e946eb"]]);export{Pn as default};
