import{d as pt,h as z,a as ee,i as at,O as Vt,Z as Gt,$ as It,_ as dt,o as E,c as V,b as n,n as K,j as ut,p as F,W as yt,w as Y,G as q,T as oe,y as $t,z as Mt,f as tt,g as Ct,D as xt,m as lt,r as ne,a0 as Et,v as nt,l as O,k as Q,e as m,F as st,s as rt,x as se,q as re,V as le}from"./index.js";import{_ as it}from"./lodash.js";import{u as ie,D as ae}from"./useHeroes.js";const Bt=(e,a,g)=>{let d=0,u=0,l=0;e%=360;const r=Math.floor(e/60),v=e/60-r,w=g*(1-a),k=g*(1-a*v),$=g*(1-a*(1-v));switch(r){case 0:d=g,u=$,l=w;break;case 1:d=k,u=g,l=w;break;case 2:d=w,u=g,l=$;break;case 3:d=w,u=k,l=g;break;case 4:d=$,u=w,l=g;break;case 5:d=g,u=w,l=k;break}d=Math.floor(d*255),u=Math.floor(u*255),l=Math.floor(l*255);const N=("00"+d.toString(16)).slice(-2),R=("00"+u.toString(16)).slice(-2),M=("00"+l.toString(16)).slice(-2);return[e,a,g,d,u,l,"#"+N+R+M]},Dt=e=>{let a=0,g=0,d=0,u=0,l=0,r=0;if(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i.test(e))a=window.parseInt(RegExp.$1,16),g=window.parseInt(RegExp.$2,16),d=window.parseInt(RegExp.$3,16);else if(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.test(e))a=window.parseInt(RegExp.$1,10),g=window.parseInt(RegExp.$2,10),d=window.parseInt(RegExp.$3,10);else return[0,0,0,0,0,0,"#000000"];u=a/255,l=g/255,r=d/255;let v=u;l>v&&(v=l),r>v&&(v=r);let w=u;l<w&&(w=l),r<w&&(w=r);let k=0,$=0,N=0;v===w?k=0:v===u&&l>=r?k=60*(l-r)/(v-w)+0:v===u&&l<r?k=60*(l-r)/(v-w)+360:v===l?k=60*(r-u)/(v-w)+120:v===r&&(k=60*(u-l)/(v-w)+240),v===0?$=0:$=1-w/v,N=v;const R=("00"+a.toString(16)).slice(-2),M=("00"+g.toString(16)).slice(-2),P=("00"+d.toString(16)).slice(-2);return[Math.floor(k),$,N,a,g,d,"#"+R+M+P]},ue=pt({name:"ColorPicker",emits:["update:modelValue"],props:{modelValue:{type:String,required:!0}},setup(e,{emit:a}){const g=z(!1),d=ee({set:c=>{a("update:modelValue",c)},get:()=>e.modelValue}),u=at({h:0,s:0,v:0,r:0,g:0,b:0}),l=at({rect_down:!1,rect_left:0,rect_bottom:0,ver_down:!1,ver_bottom:0}),r={rect:{left:0,bottom:0,x:0,y:0},ver:{bottom:0,y:0}},v=z(!1),w=()=>{v.value=!0},k=it.debounce(()=>{v.value=!1},300),$=()=>{w();const c=Bt(u.h,u.s,u.v);u.r=c[3],u.g=c[4],u.b=c[5],d.value=c[6],l.ver_bottom=u.h,l.rect_left=u.s*360,l.rect_bottom=u.v*360,k()},N=()=>{w();const c=Dt(`${u.r},${u.g},${u.b}`);u.h=c[0],u.s=c[1],u.v=c[2],d.value=c[6],l.ver_bottom=u.h,l.rect_left=u.s*360,l.rect_bottom=u.v*360,k()},R=c=>{c=c||"#000000";const D=Dt(c);u.h=D[0],u.s=D[1],u.v=D[2],u.r=D[3],u.g=D[4],u.b=D[5],l.ver_bottom=u.h,l.rect_left=u.s*360,l.rect_bottom=u.v*360},M=()=>{const c=Bt(l.ver_bottom,l.rect_left/360,l.rect_bottom/360);u.h=c[0],u.s=c[1],u.v=c[2],u.r=c[3],u.g=c[4],u.b=c[5],d.value=c[6]},P=c=>{l.rect_down=!0,r.rect.x=c.clientX,r.rect.y=c.clientY;const D=c.currentTarget,T=D.getBoundingClientRect().left,ct=D.getBoundingClientRect().top;r.rect.left=l.rect_left=c.clientX-T,r.rect.bottom=l.rect_bottom=360-(c.clientY-ct),M()},W=c=>{if(!l.rect_down)return;const D=c.clientX-r.rect.x,T=c.clientY-r.rect.y;l.rect_left=Math.max(0,Math.min(360,r.rect.left+D)),l.rect_bottom=Math.max(0,Math.min(360,r.rect.bottom-T)),M()},p=()=>{!l.rect_down||(l.rect_down=!1)},X=c=>{l.ver_down=!0,r.ver.y=c.clientY;const T=c.currentTarget.getBoundingClientRect().top;r.ver.bottom=l.ver_bottom=360-(c.clientY-T),M()},B=c=>{if(!l.ver_down)return;const D=c.clientY-r.ver.y;l.ver_bottom=Math.max(0,Math.min(360,r.ver.bottom-D)),M()},G=()=>{!l.ver_down||(l.ver_down=!1)},A=()=>{g.value=!0},j=()=>{g.value=!1};return Vt(()=>e.modelValue,c=>{l.ver_down||l.rect_down||v.value||R(c)}),R(e.modelValue),Gt(()=>{window.addEventListener("mousemove",W,!1),window.addEventListener("mouseup",p,!1),window.addEventListener("mousemove",B,!1),window.addEventListener("mouseup",G,!1)}),It(()=>{window.removeEventListener("mousemove",W,!1),window.removeEventListener("mouseup",p,!1),window.removeEventListener("mousemove",B,!1),window.removeEventListener("mouseup",G,!1)}),{show:g,color:d,vars:u,state:l,colorRectPointerStart:P,colorVerPointerStart:X,updateHSV:$,updateRGB:N,updateHex:R,onOpen:A,onComfirm:j}}});const ft=e=>($t("data-v-27cd0415"),e=e(),Mt(),e),ye={class:"color-control"},ce={class:"color-picker-layer"},pe={class:"color-picker-view"},de=ft(()=>n("div",{class:"color-picker-view__label"},"HSV",-1)),xe=ft(()=>n("div",{class:"color-picker-view__label"},"RGB",-1)),fe=ft(()=>n("div",{class:"color-picker-view__label"},"Hex",-1));function ve(e,a,g,d,u,l){return E(),V("div",ye,[n("div",{class:"color-preview",style:K({backgroundColor:e.color}),onClick:a[0]||(a[0]=(...r)=>e.onOpen&&e.onOpen(...r))},null,4),(E(),ut(oe,{to:"body"},[F(n("div",{class:"color-picker-mask",onWheel:a[1]||(a[1]=Y(()=>{},["prevent"])),onTouchstart:a[2]||(a[2]=Y(()=>{},["prevent"])),onClick:a[3]||(a[3]=(...r)=>e.onComfirm&&e.onComfirm(...r))},null,544),[[yt,e.show]]),F(n("div",ce,[n("div",{class:"color-picker-rect",style:K(`background-color: hsl(${e.vars.h}deg, 100%, 50%)`),onMousedown:a[4]||(a[4]=Y((...r)=>e.colorRectPointerStart&&e.colorRectPointerStart(...r),["prevent","stop"]))},[n("div",{class:"color-picker-rect-cur",style:K({left:`${e.state.rect_left}px`,bottom:`${e.state.rect_bottom}px`})},null,4)],36),n("div",{class:"color-picker-hue",onMousedown:a[5]||(a[5]=Y((...r)=>e.colorVerPointerStart&&e.colorVerPointerStart(...r),["prevent","stop"]))},[n("div",{class:"color-picker-hue-cur",style:K({bottom:`${e.state.ver_bottom}px`})},null,4)],32),n("div",pe,[n("div",{class:"color-picker-view-color",style:K({background:e.color})},null,4),de,F(n("input",{type:"number",max:"360",min:"0",step:"1","onUpdate:modelValue":a[6]||(a[6]=r=>e.vars.h=r),class:"color-picker-view__input",onInput:a[7]||(a[7]=(...r)=>e.updateHSV&&e.updateHSV(...r))},null,544),[[q,e.vars.h]]),F(n("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":a[8]||(a[8]=r=>e.vars.s=r),class:"color-picker-view__input",onInput:a[9]||(a[9]=(...r)=>e.updateHSV&&e.updateHSV(...r))},null,544),[[q,e.vars.s]]),F(n("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":a[10]||(a[10]=r=>e.vars.v=r),class:"color-picker-view__input",onInput:a[11]||(a[11]=(...r)=>e.updateHSV&&e.updateHSV(...r))},null,544),[[q,e.vars.v]]),xe,F(n("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":a[12]||(a[12]=r=>e.vars.r=r),class:"color-picker-view__input",onInput:a[13]||(a[13]=(...r)=>e.updateRGB&&e.updateRGB(...r))},null,544),[[q,e.vars.r]]),F(n("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":a[14]||(a[14]=r=>e.vars.g=r),class:"color-picker-view__input",onInput:a[15]||(a[15]=(...r)=>e.updateRGB&&e.updateRGB(...r))},null,544),[[q,e.vars.g]]),F(n("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":a[16]||(a[16]=r=>e.vars.b=r),class:"color-picker-view__input",onInput:a[17]||(a[17]=(...r)=>e.updateRGB&&e.updateRGB(...r))},null,544),[[q,e.vars.b]]),fe,F(n("input",{type:"text","onUpdate:modelValue":a[18]||(a[18]=r=>e.color=r),class:"color-picker-view__input"},null,512),[[q,e.color]]),n("div",{class:"color-picker-view__enter",onClick:a[19]||(a[19]=(...r)=>e.onComfirm&&e.onComfirm(...r))},"\u786E\u8BA4")])],512),[[yt,e.show]])]))])}const Z=dt(ue,[["render",ve],["__scopeId","data-v-27cd0415"]]);Z.install=function(e){e.component(Z.name,Z)};const me={draggable:!0,class:"grid-item"},be={key:0,class:"tg lt"},he={key:1,class:"tg rt"},ge={key:2,class:"tg rb"},we={class:"overlay-dot"},_e={class:"overlay-selected"},ke=pt({__name:"GridItem",props:{disabled:{type:Boolean},selected:{type:Boolean},dot:{type:Boolean},item:null},setup(e){return(a,g)=>(E(),V("div",me,[e.item&&e.item.terrain?(E(),V("div",{key:0,class:"grid-terrain",style:K({backgroundImage:e.item.terrain.image?`url(${e.item.terrain.image})`:""})},null,4)):tt("",!0),e.item&&e.item.unit?(E(),V("div",{key:1,class:Ct(["grid-unit",{disabled:e.disabled}]),style:K({fontSize:`${e.item.unit.size}px`,color:e.item.unit.color,backgroundColor:e.item.unit.bgcolor,backgroundImage:e.item.unit.image?`url(${e.item.unit.image})`:"",opacity:e.item.unit.opacity})},[xt(lt(e.item.unit.txt)+" ",1),e.item.unit.actorId?(E(),V("i",be,lt(e.item.unit.actorId),1)):tt("",!0),e.item.unit.sup?(E(),V("i",he,lt(e.item.unit.sup),1)):tt("",!0),e.item.unit.sub?(E(),V("i",ge,lt(e.item.unit.sub),1)):tt("",!0)],6)):(E(),V("div",{key:2,class:Ct(["grid-unit",{disabled:e.disabled}])},[ne(a.$slots,"default",{},void 0,!0)],2)),F(n("div",we,null,512),[[yt,e.dot]]),F(n("div",_e,null,512),[[yt,e.selected]])]))}});const J=dt(ke,[["__scopeId","data-v-6522a3d2"]]);var S=(e=>(e[e.NONE=0]="NONE",e[e.GUARD=1]="GUARD",e[e.SHEEP=2]="SHEEP",e[e.ATTACKER=3]="ATTACKER",e))(S||{}),H=(e=>(e[e.NONE=0]="NONE",e[e.BLOCKED=5]="BLOCKED",e[e.CLIFF=6]="CLIFF",e))(H||{}),At=(e=>(e[e.NONE=0]="NONE",e))(At||{});function Ce(){const e=z(15),a=z(15),g=z(0),d=z([]),u=z([]),l=[{color:"#202020",bgcolor:"transparent"},{color:"#f9f9fa",bgcolor:"#ff3333"},{color:"#f9f9fa",bgcolor:"#00d659"},{color:"#f9f9fa",bgcolor:"#369af7"},{color:"#f9f9fa",bgcolor:"#fec02f"},{color:"#f9f9fa",bgcolor:"#a865e7"}],r=()=>({d:0,d1:0,d2:0,q:0}),v=()=>({type:H.NONE,image:""}),w=()=>({type:At.NONE,image:""}),k=()=>({actorId:0,actorType:S.NONE,size:14,txt:"",disabled:!1,color:l[0].color,bgcolor:l[0].bgcolor,image:"",opacity:1}),$=()=>({x:0,y:0,state:r(),terrain:v(),overlay:w(),unit:k()});function N(B){B.state=r(),B.terrain=v(),B.overlay=w(),B.unit=k()}function R(){g.value=0,d.value.forEach(B=>{B.forEach(G=>{N(G)})}),u.value=[]}function M(B,G){const A=[];for(let j=0;j<B;j++){const c=[];for(let D=0;D<G;D++){const T=$();T.x=D,T.y=j,c.push(T)}A.push(c)}d.value=A}function P(B,G){a.value=B,e.value=G,X()}function W(B,G){var A;return(A=d.value[G])==null?void 0:A[B]}function p(B){for(let G=0;G<e.value;G++)for(let A=0;A<a.value;A++)B(d.value[G][A])}function X(){M(e.value,a.value)}return X(),{rows:e,cols:a,actorId:g,grids:d,selects:u,gridColors:l,defGridState:r,defGridUnit:k,defGrid:$,cleanGrid:N,cleanGrids:R,setSize:P,getGrid:W,gridForEach:p}}const Ft=""+new URL("../assets/cliff.svg",import.meta.url).href,St=""+new URL("../assets/block.svg",import.meta.url).href,Ee=[{name:"\u7A7A\u767D\u573A\u666F",width:15,height:15,data:[]},{name:"\u5316\u8352\u5E7B\u5883",width:17,height:11,data:[{x:0,y:10,type:5},{x:1,y:10,type:5},{x:2,y:10,type:5},{x:14,y:10,type:5},{x:15,y:10,type:5},{x:16,y:10,type:5},{x:0,y:9,type:5},{x:1,y:9,type:5},{x:15,y:9,type:5},{x:16,y:9,type:5},{x:0,y:8,type:5},{x:7,y:8,type:6},{x:8,y:8,type:6},{x:9,y:8,type:6},{x:16,y:8,type:5},{x:6,y:7,type:6},{x:7,y:7,type:6},{x:8,y:7,type:6},{x:9,y:7,type:6},{x:10,y:7,type:6},{x:5,y:6,type:6},{x:6,y:6,type:6},{x:10,y:6,type:6},{x:11,y:6,type:6},{x:5,y:4,type:6},{x:6,y:4,type:6},{x:10,y:4,type:6},{x:11,y:4,type:6},{x:6,y:3,type:6},{x:7,y:3,type:6},{x:8,y:3,type:6},{x:9,y:3,type:6},{x:10,y:3,type:6},{x:0,y:2,type:5},{x:7,y:2,type:6},{x:8,y:2,type:6},{x:9,y:2,type:6},{x:16,y:2,type:5},{x:0,y:1,type:5},{x:1,y:1,type:5},{x:15,y:1,type:5},{x:16,y:1,type:5},{x:0,y:0,type:5},{x:1,y:0,type:5},{x:2,y:0,type:5},{x:14,y:0,type:5},{x:15,y:0,type:5},{x:16,y:0,type:5}]},{name:"\u96EA\u5CAD\u5E7B\u5883",width:15,height:11,data:[{x:0,y:10,type:5},{x:1,y:10,type:5},{x:2,y:10,type:5},{x:5,y:10,type:6},{x:6,y:10,type:6},{x:7,y:10,type:6},{x:8,y:10,type:6},{x:9,y:10,type:6},{x:12,y:10,type:5},{x:13,y:10,type:5},{x:14,y:10,type:5},{x:0,y:9,type:5},{x:1,y:9,type:5},{x:2,y:9,type:5},{x:3,y:9,type:6},{x:4,y:9,type:6},{x:5,y:9,type:6},{x:6,y:9,type:6},{x:7,y:9,type:6},{x:8,y:9,type:6},{x:9,y:9,type:6},{x:10,y:9,type:6},{x:11,y:9,type:6},{x:12,y:9,type:5},{x:13,y:9,type:5},{x:14,y:9,type:5},{x:0,y:8,type:5},{x:1,y:8,type:5},{x:2,y:8,type:5},{x:3,y:8,type:6},{x:11,y:8,type:6},{x:12,y:8,type:5},{x:13,y:8,type:5},{x:14,y:8,type:5},{x:6,y:6,type:6},{x:7,y:6,type:6},{x:8,y:6,type:6},{x:3,y:5,type:6},{x:11,y:5,type:6},{x:6,y:4,type:6},{x:7,y:4,type:6},{x:8,y:4,type:6},{x:0,y:2,type:5},{x:1,y:2,type:5},{x:2,y:2,type:5},{x:3,y:2,type:6},{x:11,y:2,type:6},{x:12,y:2,type:5},{x:13,y:2,type:5},{x:14,y:2,type:5},{x:0,y:1,type:5},{x:1,y:1,type:5},{x:2,y:1,type:5},{x:3,y:1,type:6},{x:4,y:1,type:6},{x:5,y:1,type:6},{x:6,y:1,type:6},{x:7,y:1,type:6},{x:8,y:1,type:6},{x:9,y:1,type:6},{x:10,y:1,type:6},{x:11,y:1,type:6},{x:12,y:1,type:5},{x:13,y:1,type:5},{x:14,y:1,type:5},{x:0,y:0,type:5},{x:1,y:0,type:5},{x:2,y:0,type:5},{x:5,y:0,type:6},{x:6,y:0,type:6},{x:7,y:0,type:6},{x:8,y:0,type:6},{x:9,y:0,type:6},{x:12,y:0,type:5},{x:13,y:0,type:5},{x:14,y:0,type:5}]},{name:"\u5730\u754C\u5E7B\u5883",width:17,height:13,data:[{x:0,y:12,type:5},{x:1,y:12,type:5},{x:2,y:12,type:5},{x:5,y:12,type:6},{x:6,y:12,type:6},{x:7,y:12,type:6},{x:8,y:12,type:6},{x:9,y:12,type:6},{x:10,y:12,type:6},{x:11,y:12,type:6},{x:14,y:12,type:5},{x:15,y:12,type:5},{x:16,y:12,type:5},{x:0,y:11,type:5},{x:1,y:11,type:5},{x:2,y:11,type:5},{x:6,y:11,type:6},{x:10,y:11,type:6},{x:14,y:11,type:5},{x:15,y:11,type:5},{x:16,y:11,type:5},{x:0,y:10,type:5},{x:1,y:10,type:5},{x:6,y:10,type:6},{x:10,y:10,type:6},{x:15,y:10,type:5},{x:16,y:10,type:5},{x:0,y:9,type:5},{x:1,y:9,type:5},{x:6,y:9,type:6},{x:7,y:9,type:6},{x:8,y:9,type:6},{x:9,y:9,type:6},{x:10,y:9,type:6},{x:15,y:9,type:5},{x:16,y:9,type:5},{x:7,y:8,type:6},{x:8,y:8,type:6},{x:9,y:8,type:6},{x:7,y:4,type:6},{x:8,y:4,type:6},{x:9,y:4,type:6},{x:0,y:3,type:5},{x:1,y:3,type:5},{x:6,y:3,type:6},{x:7,y:3,type:6},{x:8,y:3,type:6},{x:9,y:3,type:6},{x:10,y:3,type:6},{x:15,y:3,type:5},{x:16,y:3,type:5},{x:0,y:2,type:5},{x:1,y:2,type:5},{x:6,y:2,type:6},{x:10,y:2,type:6},{x:15,y:2,type:5},{x:16,y:2,type:5},{x:0,y:1,type:5},{x:1,y:1,type:5},{x:2,y:1,type:5},{x:6,y:1,type:6},{x:10,y:1,type:6},{x:14,y:1,type:5},{x:15,y:1,type:5},{x:16,y:1,type:5},{x:0,y:0,type:5},{x:1,y:0,type:5},{x:2,y:0,type:5},{x:5,y:0,type:6},{x:6,y:0,type:6},{x:7,y:0,type:6},{x:8,y:0,type:6},{x:9,y:0,type:6},{x:10,y:0,type:6},{x:11,y:0,type:6},{x:14,y:0,type:5},{x:15,y:0,type:5},{x:16,y:0,type:5}]},{name:"\u7ED3\u754C\u5E7B\u5883",width:11,height:11,data:[{x:5,y:8,type:5},{x:2,y:5,type:5},{x:5,y:5,type:5},{x:8,y:5,type:5},{x:5,y:2,type:5}]},{name:"\u57CE\u9685\u5E7B\u5883",width:15,height:11,data:[{x:0,y:10,type:5},{x:1,y:10,type:5},{x:2,y:10,type:5},{x:5,y:10,type:5},{x:6,y:10,type:5},{x:7,y:10,type:5},{x:8,y:10,type:5},{x:9,y:10,type:5},{x:12,y:10,type:5},{x:13,y:10,type:5},{x:14,y:10,type:5},{x:0,y:9,type:5},{x:1,y:9,type:5},{x:6,y:9,type:5},{x:8,y:9,type:5},{x:13,y:9,type:5},{x:14,y:9,type:5},{x:0,y:8,type:5},{x:14,y:8,type:5},{x:10,y:6,type:5},{x:5,y:5,type:5},{x:9,y:5,type:5},{x:4,y:4,type:5},{x:0,y:2,type:5},{x:14,y:2,type:5},{x:0,y:1,type:5},{x:1,y:1,type:5},{x:6,y:1,type:5},{x:8,y:1,type:5},{x:13,y:1,type:5},{x:14,y:1,type:5},{x:0,y:0,type:5},{x:1,y:0,type:5},{x:2,y:0,type:5},{x:5,y:0,type:5},{x:6,y:0,type:5},{x:7,y:0,type:5},{x:8,y:0,type:5},{x:9,y:0,type:5},{x:12,y:0,type:5},{x:13,y:0,type:5},{x:14,y:0,type:5}]},{name:"\u6D1E\u7A74\u5E7B\u5883",width:11,height:11,data:[{x:10,y:10,type:5},{x:10,y:9,type:5},{x:6,y:8,type:6},{x:7,y:8,type:6},{x:10,y:8,type:5},{x:6,y:7,type:6},{x:7,y:7,type:6},{x:8,y:7,type:6},{x:2,y:3,type:6},{x:3,y:3,type:6},{x:4,y:3,type:6},{x:0,y:2,type:5},{x:3,y:2,type:6},{x:4,y:2,type:6},{x:0,y:1,type:5},{x:0,y:0,type:5}]},{name:"\u5996\u5C71\u5E7B\u5883",width:17,height:11,data:[]}],b=e=>($t("data-v-3caddf9f"),e=e(),Mt(),e),Be={class:"wrapper"},De={class:"toolbar"},Fe={class:"setting"},Se={class:"label-control"},Ve=b(()=>n("span",null,"\u7F16\u8F91\u6A21\u5F0F",-1)),Ge=b(()=>n("option",{value:1},"\u7F16\u8F91\u7F51\u683C",-1)),Ie=b(()=>n("option",{value:2},"\u7F51\u683C\u4E0A\u8272",-1)),$e=b(()=>n("option",{value:3},"\u9009\u62E9\u5F62\u72B6",-1)),Me=b(()=>n("option",{value:4},"\u62A4\u536B\u8BA1\u7B97",-1)),Ae=[Ge,Ie,$e,Me],Ue={class:"label-control"},He=b(()=>n("span",null,"\u8303\u56F4",-1)),Re={class:"label-control"},Le=b(()=>n("span",null,"\u5F62\u72B6",-1)),Ne=b(()=>n("option",{value:1},"\u83F1\u5F62",-1)),Oe=b(()=>n("option",{value:2},"\u5708\u6570",-1)),Te=[Ne,Oe],qe={class:"label-control"},Ke=b(()=>n("span",null,"\u6392\u5E8F",-1)),ze=b(()=>n("option",{value:1},"\u8DDD\u79BBX",-1)),Pe=b(()=>n("option",{value:2},"\u8DDD\u79BBY",-1)),Xe=b(()=>n("option",{value:3},"X\u4F18\u5148",-1)),je=b(()=>n("option",{value:4},"Y\u4F18\u5148",-1)),Je=[ze,Pe,Xe,je],We=b(()=>n("button",{class:"btn"},"\u9884\u8BBE\u573A\u666F",-1)),Ze=["onClick"],Qe=["onClick"],Ye={class:"color-container"},to={class:"label-control"},eo=b(()=>n("span",null,"\u9884\u89C8",-1)),oo=xt(" E "),no={class:"label-control"},so=b(()=>n("span",null,"\u6587\u5B57",-1)),ro={class:"label-control"},lo=b(()=>n("span",null,"\u80CC\u666F",-1)),io=b(()=>n("label",{class:"label-control"},[n("span",null,"\u9884\u8BBE")],-1)),ao={class:"color-tpls"},uo=xt(" E "),yo={width:"32",height:"32",viewBox:"0 0 24 24",fill:"#a9a9a9",style:{"pointer-events":"none"}},co=b(()=>n("path",{d:"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"},null,-1)),po=[co],xo={class:"props-container"},fo={key:0,class:"props-content"},vo={class:"label-control"},mo=b(()=>n("span",null,"\u9884\u89C8",-1)),bo={class:"label-control"},ho=b(()=>n("span",null,"\u6587\u5B57",-1)),go={class:"label-control"},wo=b(()=>n("span",null,"\u80CC\u666F",-1)),_o={class:"label-control"},ko=b(()=>n("span",null,"\u5927\u5C0F",-1)),Co={class:"label-control"},Eo=b(()=>n("span",null,"Id",-1)),Bo={class:"label-control"},Do=b(()=>n("span",null,"\u7C7B\u578B",-1)),Fo=["value"],So=["value"],Vo=["value"],Go=["value"],Io={class:"label-control"},$o=b(()=>n("span",null,"\u98DE\u884C",-1)),Mo={class:"label-control"},Ao=b(()=>n("span",null,"\u5185\u5BB9",-1)),Uo={class:"label-control"},Ho=b(()=>n("span",null,"\u5730\u5F62",-1)),Ro=["value"],Lo=["value"],No=["value"],Oo={class:"content"},To={class:"grids"},qo={class:"heroes"},Ko=pt({__name:"Grids",setup(e){const{rows:a,cols:g,actorId:d,grids:u,selects:l,gridColors:r,defGridUnit:v,defGridState:w,defGrid:k,cleanGrid:$,cleanGrids:N,setSize:R,getGrid:M,gridForEach:P}=Ce(),W=z(),p=at({editor:1,selectRange:5,shape:1,sortType:1,color:r[0].color,bgcolor:r[0].bgcolor}),X=k();X.terrain={image:St,type:H.BLOCKED};const B=k();B.terrain={image:Ft,type:H.CLIFF};function G(o){p.color=o.color,p.bgcolor=o.bgcolor}const{heroes:A}=ie(),j=Et(k()),c=Et(A.value.map(o=>{const t=k(),y=v();return y.image=`https://media.zlongame.com/media/news/cn/tdj/info/data/heroicon/${o.hero_icon}.png`,t.unit=y,t}));Vt(A,()=>{c.value=A.value.map(o=>{const t=k(),y=v();return y.image=`https://media.zlongame.com/media/news/cn/tdj/info/data/heroicon/${o.hero_icon}.png`,t.unit=y,t})});function D(o,t,y,x){const i=[];return P(f=>{f.state=w()}),P(f=>{const s=Math.abs(o-f.x),_=Math.abs(t-f.y),I=s+_,U=Math.max(s,_),L=s>1?s-1:s+_>1?_-1:_;switch(x){case 1:I<=y&&(f.state.d=I,f.state.q=U,f.state.d1=L,i.push(f));break;case 2:Math.abs(s)<=y&&Math.abs(_)<=y&&(f.state.d=I,f.state.q=U,f.state.d1=L,i.push(f));break}}),i}function T(o,t,y,x,i,f,s){const _=D(o,t,y,x);switch(_.forEach(I=>{I.unit.color=f,I.unit.bgcolor=s}),l.value=_,i){case 1:l.value.sort(ct);break;case 2:l.value.sort(vt);break;case 3:l.value.sort(Ut);break;case 4:l.value.sort(Ht);break}for(let I=0;I<l.value.length;I++){const U=l.value[I];U.unit.txt=String(I+1)}}function ct(o,t){return o.state.q!==t.state.q?o.state.q-t.state.q:o.state.d!==t.state.d?o.state.d-t.state.d:o.x!==t.x?o.x-t.x:o.y!==t.y?o.y-t.y:0}function vt(o,t){return o.state.q!==t.state.q?o.state.q-t.state.q:o.state.d!==t.state.d?o.state.d-t.state.d:o.y!==t.y?o.y-t.y:o.x!==t.x?o.x-t.x:0}function Ut(o,t){return o.x!==t.x?o.x-t.x:o.y!==t.y?o.y-t.y:0}function Ht(o,t){return o.y!==t.y?o.y-t.y:o.x!==t.x?o.x-t.x:0}const h=at({enabled:!1});function Rt(){N()}function mt(){h.enabled=!1}function Lt(o,t){var y;switch(p.editor){case 1:case 4:h.current=t,(y=W.value)==null||y.focus();break;case 3:N(),T(t.x,t.y,p.selectRange,p.shape,p.sortType,p.color,p.bgcolor);break}}function Nt(o,t){if(o.button===0)switch(p.editor){case 2:{h.enabled=!0,t.unit&&(t.unit.color=p.color,t.unit.bgcolor=p.bgcolor);break}}}function Ot(o,t){o.button===0&&h.enabled&&t.unit&&(t.unit.color=p.color,t.unit.bgcolor=p.bgcolor)}function Tt(){h.current=void 0}const et=z({width:15,height:15});function qt(){try{const o=localStorage.getItem("grids");if(!o)return;const t=JSON.parse(o);et.value=t}catch{}}function bt(){!confirm("\u786E\u5B9A\u8981\u4FDD\u5B58\u5417\uFF1F")||(et.value={width:g.value,height:a.value,data:it.cloneDeep(u.value)},localStorage.setItem("grids",JSON.stringify(et.value)))}function Kt(){const o=et.value;!o.data||(R(o.width,o.height),u.value=it.cloneDeep(o.data))}function zt(o){R(o.width,o.height),o.data.forEach(t=>{const y=M(t.x,t.y);if(!!y)switch(t.type){case H.CLIFF:y.terrain={image:Ft,type:H.CLIFF};break;case H.BLOCKED:y.terrain={image:St,type:H.BLOCKED};break}})}function Pt(){const o=h.current;if(!o)return;et.value||bt();let t,y,x=[];for(t=o.x-2;t<=o.x+2;t++)for(y=o.y-2;y<=o.y+2;y++){const s=M(t,y);if(!!s)if(s.x===o.x&&s.y===o.y){const _=x[0];_&&(x.push(_),x[0]=s)}else x.push(s)}x=x.filter(s=>s.unit.actorId>0&&!(s.x===o.x&&s.y===o.y));const i=x.map(s=>({unit:s.unit}));x.forEach(s=>{$(s)});const f=D(o.x,o.y,4,2).filter(s=>s.terrain.type!==H.BLOCKED&&!(s.x===o.x&&s.y===o.y)).sort(vt).map(s=>[s.x,s.y]);for(const s of i)for(const[_,I]of f){const U=M(_,I);if(!!U&&!(U.unit&&U.unit.actorId>0)&&U.terrain.type!==H.BLOCKED&&!(U.terrain.type===H.CLIFF&&!s.unit.fly)){U.unit=s.unit;break}}}const C=at({}),ht=["#ffffff00","#FF3C4132","#0EBEFF32","#48CF7432","#FCD00032","#80008032"],Xt=(o,t)=>{switch(p.editor){case 2:o.preventDefault();break;default:C.grid=t,C.action="swap",o.dataTransfer&&(o.dataTransfer.effectAllowed="move")}},jt=(o,t)=>{const y=k(),x=v();x.color=t.color,x.bgcolor=t.bgcolor,x.txt="E",y.unit=x,C.grid=y,C.action="color"},gt=(o,t)=>{C.grid=it.cloneDeep(t),C.action="terrain"},wt=(o,t)=>{C.grid=it.cloneDeep(t),C.action="image"},Jt=(o,t)=>{if(o.preventDefault(),!C.grid)return;const y=C.grid.unit,x=C.grid.terrain;switch(C.action){case"color":if(t.unit.actorId||(t.unit.actorId=++d.value),!y)break;t.unit.color=y.color,t.unit.bgcolor=y.bgcolor;break;case"image":if(t.unit.actorId||(t.unit.actorId=++d.value),!y)break;t.unit.image=y.image;break;case"swap":C.grid.unit=t.unit,t.unit=y,y.actorId===0&&(C.grid.terrain=t.terrain,t.terrain=x);break;case"terrain":t.terrain=x;break}C.grid=void 0,C.action=void 0,p.editor===4&&ot()};function Wt(o,t){let y=o[0].state[t];for(let x=1;x<o.length;x++)o[x].state[t]<y&&(y=o[x].state[t]);return y}function _t(o,t){return Math.abs(o.x-t.x)+Math.abs(o.y-t.y)}function kt(o,t,y){o.sort((s,_)=>+s.unit.actorId-+_.unit.actorId),o.forEach(s=>{s.state.d1=_t(s,y),s.state.d2=_t(s,t),s.unit&&(s.unit.guard=!1)});const x=Wt(o,"d1");if(o=o.filter(s=>s.state.d1===x),o.length===1)return o[0];let i=o[0],f=o.length;for(;f--;)if(o[f].state.d2<i.state.d2){i=o[f];break}return i}function Zt(){R(15,15),d.value=0;const o=[{x:7,y:9,txt:"",type:S.GUARD,bg:"#0ebeff"},{x:9,y:7,txt:"",type:S.GUARD,bg:"#0ebeff"},{x:7,y:5,txt:"",type:S.GUARD,bg:"#0ebeff"},{x:5,y:7,txt:"",type:S.GUARD,bg:"#0ebeff"},{x:8,y:6,txt:"",type:S.ATTACKER,bg:"#ff3c41"},{x:7,y:7,txt:"",type:S.SHEEP,bg:"#fcd000"}];for(const t of o){const y=M(t.x,t.y);!y||(y.unit.actorId=++d.value,y.unit.actorType=t.type,y.unit.txt=t.txt,y.unit.disabled=!1,y.unit.bgcolor=t.bg)}p.editor=4}const ot=()=>{const o=u.value.flat();o.forEach(s=>{s.unit&&(s.unit.opacity=1)});const t=o.filter(s=>!s.unit.disabled),y=t.filter(s=>s.unit.actorType===S.ATTACKER)[0],x=t.filter(s=>s.unit.actorType===S.SHEEP)[0],i=t.filter(s=>s.unit.actorType===S.GUARD);if(!x||i.length===0){alert("\u7F3A\u5C11\u89D2\u8272\uFF0C\u5C06\u81EA\u52A8\u751F\u6210"),Zt(),ot();return}const f=o.filter(s=>!s.unit.disabled&&s.unit.actorType===S.NONE);for(const s of f){const _=kt(i,s,x);!_.unit||(s.unit||(s.unit=v()),s.unit.image=_.unit.image,s.unit.bgcolor=ht[_.unit.actorId]||ht[0],_.unit.image?s.unit.sup="":s.unit.sup=String(_.unit.actorId),s.unit.opacity=.6)}if(y){const s=kt(i,y,x);s.unit&&(s.unit.guard=!0)}},Qt=o=>{if(o.unit.disabled=!o.unit.disabled,p.editor===4){switch(o.unit.actorType){case S.ATTACKER:case S.SHEEP:o.unit.disabled=!1;break}ot()}},Yt=o=>{!C.grid||!o.dataTransfer||C.action==="swap"&&(p.editor===4&&C.grid.unit.actorType===S.SHEEP||o.preventDefault())},te=o=>{if(!!C.grid&&!!o)switch(C.action){case"swap":$(o),C.grid=void 0,C.action=void 0,p.editor===4&&ot()}};return Gt(()=>{qt(),window.addEventListener("mouseup",mt,!1)}),It(()=>{window.removeEventListener("mouseup",mt,!1)}),(o,t)=>{const y=se("c-space"),x=le("autofocus");return E(),V("div",Be,[n("div",De,[n("div",Fe,[n("label",Se,[Ve,F(n("select",{"onUpdate:modelValue":t[0]||(t[0]=i=>p.editor=i)},Ae,512),[[nt,p.editor,void 0,{number:!0}]])]),n("label",Ue,[He,F(n("input",{type:"number",min:"0","onUpdate:modelValue":t[1]||(t[1]=i=>p.selectRange=i),style:{width:"5em"}},null,512),[[q,p.selectRange]])]),n("label",Re,[Le,F(n("select",{"onUpdate:modelValue":t[2]||(t[2]=i=>p.shape=i)},Te,512),[[nt,p.shape]])]),n("label",qe,[Ke,F(n("select",{"onUpdate:modelValue":t[3]||(t[3]=i=>p.sortType=i)},Je,512),[[nt,p.sortType]])]),n("button",{class:"btn",onClick:Rt},"\u6E05\u7A7A"),n("button",{class:"btn",onClick:ot},"\u8BA1\u7B97\u62A4\u536B"),n("button",{class:"btn btn-success",onClick:bt},"\u4FDD\u5B58\u5E03\u5C40"),n("button",{class:"btn btn-success",onClick:Kt},"\u8FD8\u539F\u5E03\u5C40"),tt("",!0),O(m(ae),null,{popover:Q(({onClose:i})=>[n("div",{class:"list",onClick:f=>i()},[(E(!0),V(st,null,rt(m(Ee),(f,s)=>(E(),V("div",{class:"list-item",key:s,onClick:_=>zt(f)},lt(f.name),9,Qe))),128))],8,Ze)]),default:Q(()=>[We]),_:1})]),n("div",Ye,[O(y,null,{default:Q(()=>[n("label",to,[eo,O(m(J),{draggable:!1,style:K([`--color:${p.color};--bgcolor:${p.bgcolor}`])},{default:Q(()=>[oo]),_:1},8,["style"])]),n("label",no,[so,O(m(Z),{modelValue:p.color,"onUpdate:modelValue":t[4]||(t[4]=i=>p.color=i)},null,8,["modelValue"])]),n("label",ro,[lo,O(m(Z),{modelValue:p.bgcolor,"onUpdate:modelValue":t[5]||(t[5]=i=>p.bgcolor=i)},null,8,["modelValue"])]),io,n("div",ao,[(E(!0),V(st,null,rt(m(r),(i,f)=>(E(),ut(m(J),{key:f,selected:p.bgcolor===i.bgcolor,style:K([`--color:${i.color};--bgcolor:${i.bgcolor}`]),onClick:s=>G(i),onDragstart:s=>jt(s,i)},{default:Q(()=>[uo]),_:2},1032,["selected","style","onClick","onDragstart"]))),128)),O(m(J),{item:m(B),onDragstart:t[6]||(t[6]=i=>gt(i,m(B)))},null,8,["item"]),O(m(J),{item:m(X),onDragstart:t[7]||(t[7]=i=>gt(i,m(X)))},null,8,["item"])]),n("div",{class:"trush",onDragover:Yt,onDrop:t[8]||(t[8]=i=>te(C.grid))},[(E(),V("svg",yo,po))],32)]),_:1})]),n("div",xo,[h.current?(E(),V("div",fo,[O(y,null,{default:Q(()=>[n("label",vo,[mo,O(m(J),{draggable:!1,style:K([`--color:${h.current.unit.color};--bgcolor:${h.current.unit.bgcolor}`]),item:h.current},null,8,["style","item"])]),n("label",bo,[ho,O(m(Z),{modelValue:h.current.unit.color,"onUpdate:modelValue":t[9]||(t[9]=i=>h.current.unit.color=i)},null,8,["modelValue"])]),n("label",go,[wo,O(m(Z),{modelValue:h.current.unit.bgcolor,"onUpdate:modelValue":t[10]||(t[10]=i=>h.current.unit.bgcolor=i)},null,8,["modelValue"])]),n("label",_o,[ko,F(n("input",{type:"number",style:{width:"4em"},min:"12",step:"1","onUpdate:modelValue":t[11]||(t[11]=i=>h.current.unit.size=i)},null,512),[[q,h.current.unit.size]])]),n("label",Co,[Eo,F(n("input",{type:"number","onUpdate:modelValue":t[12]||(t[12]=i=>h.current.unit.actorId=i),style:{width:"4em"}},null,512),[[q,h.current.unit.actorId]])]),n("label",Bo,[Do,F(n("select",{"onUpdate:modelValue":t[13]||(t[13]=i=>h.current.unit.actorType=i)},[n("option",{value:m(S).NONE},"\u65E0",8,Fo),n("option",{value:m(S).GUARD},"\u62A4\u536B",8,So),n("option",{value:m(S).SHEEP},"\u9776\u5B50",8,Vo),n("option",{value:m(S).ATTACKER},"\u653B\u51FB\u8005",8,Go)],512),[[nt,h.current.unit.actorType]])]),n("label",Io,[$o,F(n("input",{type:"checkbox","onUpdate:modelValue":t[14]||(t[14]=i=>h.current.unit.fly=i)},null,512),[[re,h.current.unit.fly]])]),n("label",Mo,[Ao,F(n("input",{type:"text",ref_key:"txtInput",ref:W,"onUpdate:modelValue":t[15]||(t[15]=i=>h.current.unit.txt=i),style:{width:"6em"}},null,512),[[x],[q,h.current.unit.txt]])]),n("label",Uo,[Ho,F(n("select",{"onUpdate:modelValue":t[16]||(t[16]=i=>h.current.terrain.type=i)},[n("option",{value:m(H).NONE},"\u65E0",8,Ro),n("option",{value:m(H).BLOCKED},"\u969C\u788D",8,Lo),n("option",{value:m(H).CLIFF},"\u60AC\u5D16",8,No)],512),[[nt,h.current.terrain.type]])]),n("button",{class:"btn",onClick:Tt},"\u5B8C\u6210"),n("button",{class:"btn btn-success",onClick:Pt},"\u602A\u529B\u4E71\u795E")]),_:1})])):tt("",!0)])]),n("div",Oo,[n("div",To,[(E(!0),V(st,null,rt(m(u),(i,f)=>(E(),V("div",{class:"grids-row",key:f},[(E(!0),V(st,null,rt(i,(s,_)=>{var I,U;return E(),ut(m(J),{key:_,draggable:!0,selected:s.x===((I=h.current)==null?void 0:I.x)&&s.y===((U=h.current)==null?void 0:U.y),disabled:s.unit&&s.unit.disabled,dot:s.unit&&s.unit.guard,item:s,onDragstart:L=>Xt(L,s),onDragover:t[17]||(t[17]=Y(()=>{},["prevent"])),onDrop:L=>Jt(L,s),onContextmenu:Y(L=>Qt(s),["prevent"]),onClick:L=>Lt(L,s),onMousedown:L=>Nt(L,s),onMouseenter:L=>Ot(L,s)},null,8,["selected","disabled","dot","item","onDragstart","onDrop","onContextmenu","onClick","onMousedown","onMouseenter"])}),128))]))),128))]),n("div",qo,[O(m(J),{item:m(j),onDragstart:t[18]||(t[18]=i=>wt(i,m(j)))},null,8,["item"]),(E(!0),V(st,null,rt(m(c),(i,f)=>(E(),ut(m(J),{key:f,item:i,onDragstart:s=>wt(s,i)},null,8,["item","onDragstart"]))),128))])])])}}});const jo=dt(Ko,[["__scopeId","data-v-3caddf9f"]]);export{jo as default};
