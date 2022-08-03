import{d as it,s as X,a as Et,q as W,I as Bt,a0 as Xt,S as Ct,_ as ct,o as D,c as I,e as s,n as H,b as tt,w as S,X as _t,U as z,E as M,T as Kt,p as Vt,l as St,k as wt,C as ut,f as J,j as et,J as Ot,a1 as ht,v as Q,V as c,g as U,i as Z,F as rt,h as at,r as Yt,Q as jt}from"./index.js";import{_ as At}from"./lodash.js";import{u as Wt}from"./useHeroes.js";const kt=(o,n,v)=>{let f=0,r=0,a=0;o%=360;const l=Math.floor(o/60),y=o/60-l,b=v*(1-n),E=v*(1-n*y),G=v*(1-n*(1-y));switch(l){case 0:f=v,r=G,a=b;break;case 1:f=E,r=v,a=b;break;case 2:f=b,r=v,a=G;break;case 3:f=b,r=E,a=v;break;case 4:f=G,r=b,a=v;break;case 5:f=v,r=b,a=E;break}f=Math.floor(f*255),r=Math.floor(r*255),a=Math.floor(a*255);const C=("00"+f.toString(16)).slice(-2),u=("00"+r.toString(16)).slice(-2),$=("00"+a.toString(16)).slice(-2);return[o,n,v,f,r,a,"#"+C+u+$]},xt=o=>{let n=0,v=0,f=0,r=0,a=0,l=0;if(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i.test(o))n=window.parseInt(RegExp.$1,16),v=window.parseInt(RegExp.$2,16),f=window.parseInt(RegExp.$3,16);else if(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.test(o))n=window.parseInt(RegExp.$1,10),v=window.parseInt(RegExp.$2,10),f=window.parseInt(RegExp.$3,10);else return[0,0,0,0,0,0,"#000000"];r=n/255,a=v/255,l=f/255;let y=r;a>y&&(y=a),l>y&&(y=l);let b=r;a<b&&(b=a),l<b&&(b=l);let E=0,G=0,C=0;y===b?E=0:y===r&&a>=l?E=60*(a-l)/(y-b)+0:y===r&&a<l?E=60*(a-l)/(y-b)+360:y===a?E=60*(l-r)/(y-b)+120:y===l&&(E=60*(r-a)/(y-b)+240),y===0?G=0:G=1-b/y,C=y;const u=("00"+n.toString(16)).slice(-2),$=("00"+v.toString(16)).slice(-2),R=("00"+f.toString(16)).slice(-2);return[Math.floor(E),G,C,n,v,f,"#"+u+$+R]};const Jt=it({name:"ColorPicker",emits:["update:modelValue"],props:{modelValue:{type:String,required:!0}},setup(o,{emit:n}){const v=X(!1),f=Et({set:d=>{n("update:modelValue",d)},get:()=>o.modelValue}),r=W({h:0,s:0,v:0,r:0,g:0,b:0}),a=W({rect_down:!1,rect_left:0,rect_bottom:0,ver_down:!1,ver_bottom:0}),l={rect:{left:0,bottom:0,x:0,y:0},ver:{bottom:0,y:0}},y=X(!1),b=()=>{y.value=!0},E=At.debounce(()=>{y.value=!1},300),G=()=>{b();const d=kt(r.h,r.s,r.v);r.r=d[3],r.g=d[4],r.b=d[5],f.value=d[6],a.ver_bottom=r.h,a.rect_left=r.s*360,a.rect_bottom=r.v*360,E()},C=()=>{b();const d=xt(`${r.r},${r.g},${r.b}`);r.h=d[0],r.s=d[1],r.v=d[2],f.value=d[6],a.ver_bottom=r.h,a.rect_left=r.s*360,a.rect_bottom=r.v*360,E()},u=d=>{d=d||"#000000";const A=xt(d);r.h=A[0],r.s=A[1],r.v=A[2],r.r=A[3],r.g=A[4],r.b=A[5],a.ver_bottom=r.h,a.rect_left=r.s*360,a.rect_bottom=r.v*360},$=()=>{const d=kt(a.ver_bottom,a.rect_left/360,a.rect_bottom/360);r.h=d[0],r.s=d[1],r.v=d[2],r.r=d[3],r.g=d[4],r.b=d[5],f.value=d[6]},R=d=>{a.rect_down=!0,l.rect.x=d.clientX,l.rect.y=d.clientY;const A=d.currentTarget,q=A.getBoundingClientRect().left,lt=A.getBoundingClientRect().top;l.rect.left=a.rect_left=d.clientX-q,l.rect.bottom=a.rect_bottom=360-(d.clientY-lt),$()},F=d=>{if(!a.rect_down)return;const A=d.clientX-l.rect.x,q=d.clientY-l.rect.y;a.rect_left=Math.max(0,Math.min(360,l.rect.left+A)),a.rect_bottom=Math.max(0,Math.min(360,l.rect.bottom-q)),$()},T=()=>{!a.rect_down||(a.rect_down=!1)},K=d=>{a.ver_down=!0,l.ver.y=d.clientY;const q=d.currentTarget.getBoundingClientRect().top;l.ver.bottom=a.ver_bottom=360-(d.clientY-q),$()},O=d=>{if(!a.ver_down)return;const A=d.clientY-l.ver.y;a.ver_bottom=Math.max(0,Math.min(360,l.ver.bottom-A)),$()},Y=()=>{!a.ver_down||(a.ver_down=!1)},ot=()=>{v.value=!0},st=()=>{v.value=!1};return Bt(()=>o.modelValue,d=>{a.ver_down||a.rect_down||y.value||(console.log("watch"),u(d))}),u(o.modelValue),Xt(()=>{window.addEventListener("mousemove",F,!1),window.addEventListener("mouseup",T,!1),window.addEventListener("mousemove",O,!1),window.addEventListener("mouseup",Y,!1)}),Ct(()=>{window.removeEventListener("mousemove",F,!1),window.removeEventListener("mouseup",T,!1),window.removeEventListener("mousemove",O,!1),window.removeEventListener("mouseup",Y,!1)}),{show:v,color:f,vars:r,state:a,colorRectPointerStart:R,colorVerPointerStart:K,updateHSV:G,updateRGB:C,updateHex:u,onOpen:ot,onComfirm:st}}}),dt=o=>(Vt("data-v-f63e3268"),o=o(),St(),o),Qt={class:"color-control"},Zt={class:"color-picker-layer"},te={class:"color-picker-view"},ee=dt(()=>s("div",{class:"color-picker-view__label"},"HSV",-1)),oe=dt(()=>s("div",{class:"color-picker-view__label"},"RGB",-1)),se=dt(()=>s("div",{class:"color-picker-view__label"},"Hex",-1));function le(o,n,v,f,r,a){return D(),I("div",Qt,[s("div",{class:"color-preview",style:H({backgroundColor:o.color}),onClick:n[0]||(n[0]=(...l)=>o.onOpen&&o.onOpen(...l))},null,4),(D(),tt(Kt,{to:"body"},[S(s("div",{class:"color-picker-mask",onWheel:n[1]||(n[1]=z(()=>{},["prevent"])),onTouchstart:n[2]||(n[2]=z(()=>{},["prevent"])),onClick:n[3]||(n[3]=(...l)=>o.onComfirm&&o.onComfirm(...l))},null,544),[[_t,o.show]]),S(s("div",Zt,[s("div",{class:"color-picker-rect",style:H(`background-color: hsl(${o.vars.h}deg, 100%, 50%)`),onMousedown:n[4]||(n[4]=z((...l)=>o.colorRectPointerStart&&o.colorRectPointerStart(...l),["prevent","stop"]))},[s("div",{class:"color-picker-rect-cur",style:H({left:`${o.state.rect_left}px`,bottom:`${o.state.rect_bottom}px`})},null,4)],36),s("div",{class:"color-picker-hue",onMousedown:n[5]||(n[5]=z((...l)=>o.colorVerPointerStart&&o.colorVerPointerStart(...l),["prevent","stop"]))},[s("div",{class:"color-picker-hue-cur",style:H({bottom:`${o.state.ver_bottom}px`})},null,4)],32),s("div",te,[s("div",{class:"color-picker-view-color",style:H({background:o.color})},null,4),ee,S(s("input",{type:"number",max:"360",min:"0",step:"1","onUpdate:modelValue":n[6]||(n[6]=l=>o.vars.h=l),class:"color-picker-view__input",onInput:n[7]||(n[7]=(...l)=>o.updateHSV&&o.updateHSV(...l))},null,544),[[M,o.vars.h]]),S(s("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":n[8]||(n[8]=l=>o.vars.s=l),class:"color-picker-view__input",onInput:n[9]||(n[9]=(...l)=>o.updateHSV&&o.updateHSV(...l))},null,544),[[M,o.vars.s]]),S(s("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":n[10]||(n[10]=l=>o.vars.v=l),class:"color-picker-view__input",onInput:n[11]||(n[11]=(...l)=>o.updateHSV&&o.updateHSV(...l))},null,544),[[M,o.vars.v]]),oe,S(s("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":n[12]||(n[12]=l=>o.vars.r=l),class:"color-picker-view__input",onInput:n[13]||(n[13]=(...l)=>o.updateRGB&&o.updateRGB(...l))},null,544),[[M,o.vars.r]]),S(s("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":n[14]||(n[14]=l=>o.vars.g=l),class:"color-picker-view__input",onInput:n[15]||(n[15]=(...l)=>o.updateRGB&&o.updateRGB(...l))},null,544),[[M,o.vars.g]]),S(s("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":n[16]||(n[16]=l=>o.vars.b=l),class:"color-picker-view__input",onInput:n[17]||(n[17]=(...l)=>o.updateRGB&&o.updateRGB(...l))},null,544),[[M,o.vars.b]]),se,S(s("input",{type:"text","onUpdate:modelValue":n[18]||(n[18]=l=>o.color=l),class:"color-picker-view__input"},null,512),[[M,o.color]]),s("div",{class:"color-picker-view__enter",onClick:n[19]||(n[19]=(...l)=>o.onComfirm&&o.onComfirm(...l))},"\u786E\u8BA4")])],512),[[_t,o.show]])]))])}var L=ct(Jt,[["render",le],["__scopeId","data-v-f63e3268"]]);L.install=function(o){o.component(L.name,L)};const ne={draggable:!0},re={key:0,class:"lt"},ae={key:1},ie={key:2},ce=it({props:{disabled:{type:Boolean},selected:{type:Boolean},dot:{type:Boolean},item:null},setup(o){return(n,v)=>(D(),I("div",ne,[o.item?(D(),I("div",{key:0,class:wt(["color-unit",{disabled:o.disabled,selected:o.selected,dot:o.dot}]),style:H({fontSize:`${o.item.data.size}px`,color:o.item.style.color,backgroundColor:o.item.style.bgcolor,backgroundImage:o.item.style.image?`url(${o.item.style.image})`:"",opacity:o.item.style.opacity})},[ut(J(o.item.data.txt)+" ",1),o.item.data.actorId?(D(),I("span",re,J(o.item.data.actorId),1)):et("",!0),o.item.data.sub?(D(),I("sub",ae,J(o.item.data.sub),1)):et("",!0),o.item.data.sup?(D(),I("sup",ie,J(o.item.data.sup),1)):et("",!0)],6)):(D(),I("div",{key:1,class:wt(["color-unit",{disabled:o.disabled,selected:o.selected,dot:o.dot}])},[Ot(n.$slots,"default",{},void 0,!0)],2))]))}});var P=ct(ce,[["__scopeId","data-v-8ff8c2aa"]]),B=(o=>(o[o.NONE=0]="NONE",o[o.GUARD=1]="GUARD",o[o.SHEEP=2]="SHEEP",o[o.ATTACKER=3]="ATTACKER",o))(B||{});function ue(){const o=X(0),n=X([]),v=X([]),f=[{color:"#202020",bgcolor:"#f5fff0"},{color:"#f9f9fa",bgcolor:"#ff3333"},{color:"#f9f9fa",bgcolor:"#00d659"},{color:"#f9f9fa",bgcolor:"#369af7"},{color:"#f9f9fa",bgcolor:"#fec02f"},{color:"#f9f9fa",bgcolor:"#a865e7"}],r=()=>({actorId:0,actorType:B.NONE,size:14,txt:"",disabled:!1}),a=()=>({color:f[0].color,bgcolor:f[0].bgcolor,image:"",opacity:1}),l=()=>({d:0,d1:0,d2:0,q:0}),y=()=>({x:0,y:0,data:r(),style:a(),state:l()});function b(C){C.data=r(),C.style=a(),C.state=l()}function E(){o.value=0,n.value.forEach(C=>{b(C)}),v.value=[]}function G(C,u){const $=[];for(let R=0;R<C;R++)for(let F=0;F<u;F++){const T=y();T.x=F+1,T.y=C-R,$.push(T)}n.value=$}return{actorId:o,grids:n,selects:v,gridColors:f,defGridData:r,defGridStyle:a,defGridState:l,defGrid:y,cleanGrid:b,cleanGrids:E,generateGrids:G}}const g=o=>(Vt("data-v-0f2811b6"),o=o(),St(),o),de={class:"wrapper"},fe={class:"toolbar"},pe={class:"setting"},ve={class:"label-control"},me=g(()=>s("span",null,"\u7F16\u8F91\u6A21\u5F0F\xA0",-1)),ye=g(()=>s("option",{value:1},"\u7F16\u8F91\u7F51\u683C",-1)),be=g(()=>s("option",{value:2},"\u7F51\u683C\u4E0A\u8272",-1)),ge=g(()=>s("option",{value:3},"\u9009\u62E9\u5F62\u72B6",-1)),_e=g(()=>s("option",{value:4},"\u62A4\u536B\u8BA1\u7B97",-1)),we=[ye,be,ge,_e],he={class:"label-control"},ke=g(()=>s("span",null,"\u8303\u56F4\xA0",-1)),xe={class:"label-control"},Ee=g(()=>s("span",null,"\u5F62\u72B6\xA0",-1)),Be=g(()=>s("option",{value:1},"\u83F1\u5F62",-1)),Ce=g(()=>s("option",{value:2},"\u5708\u6570",-1)),Ve=[Be,Ce],Se={class:"label-control"},Ae=g(()=>s("span",null,"\u6392\u5E8F\xA0",-1)),De=g(()=>s("option",{value:1},"\u8DDD\u79BBX",-1)),Ge=g(()=>s("option",{value:2},"\u8DDD\u79BBY",-1)),$e=g(()=>s("option",{value:3},"X\u4F18\u5148",-1)),Ie=g(()=>s("option",{value:4},"Y\u4F18\u5148",-1)),Re=[De,Ge,$e,Ie],Me={class:"color-container"},Fe={class:"label-control"},He=g(()=>s("span",null,"\u9884\u89C8\xA0",-1)),Ue=ut(" E "),Te={class:"label-control"},qe=g(()=>s("span",null,"\u6587\u5B57\xA0",-1)),Le={class:"label-control"},Ne=g(()=>s("span",null,"\u80CC\u666F\xA0",-1)),Pe=g(()=>s("label",{class:"label-control"},[s("span",null,"\u9884\u8BBE\xA0")],-1)),ze={class:"color-tpls"},Xe=ut(" E "),Ke=g(()=>s("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"#a9a9a9",style:{"pointer-events":"none"}},[s("path",{d:"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"})],-1)),Oe=[Ke],Ye={class:"props-container"},je={key:0,class:"props-content"},We={class:"label-control"},Je=g(()=>s("span",null,"\u9884\u89C8\xA0",-1)),Qe={class:"label-control"},Ze=g(()=>s("span",null,"\u6587\u5B57\xA0",-1)),to={class:"label-control"},eo=g(()=>s("span",null,"\u80CC\u666F\xA0",-1)),oo={class:"label-control"},so=g(()=>s("span",null,"\u5927\u5C0F\xA0",-1)),lo={class:"label-control"},no=g(()=>s("span",null,"Id\xA0",-1)),ro={class:"label-control"},ao=g(()=>s("span",null,"\u7C7B\u578B\xA0",-1)),io=["value"],co=["value"],uo=["value"],fo=["value"],po={class:"label-control"},vo=g(()=>s("span",null,"\u5185\u5BB9\xA0",-1)),mo={class:"content"},yo={class:"heroes"},bo=it({setup(o){const{actorId:n,grids:v,selects:f,gridColors:r,defGridData:a,defGridStyle:l,defGridState:y,defGrid:b,cleanGrids:E,generateGrids:G}=ue(),C=X(),u=W({editor:1,selectRange:5,shape:1,sortType:1,color:r[0].color,bgcolor:r[0].bgcolor});function $(e){u.color=e.color,u.bgcolor=e.bgcolor}const R=15,F=15,T=Et(()=>`--rows:${F};--cols:${R}`),{heroes:K}=Wt(),O=ht(b()),Y=ht(K.value.map(e=>{const t=b();return t.style.image=`https://media.zlongame.com/media/news/cn/tdj/info/data/heroicon/${e.hero_icon}.png`,t}));Bt(K,()=>{Y.value=K.value.map(e=>{const t=b();return t.style.image=`https://media.zlongame.com/media/news/cn/tdj/info/data/heroicon/${e.hero_icon}.png`,t})});function ot(e,t,m,k,i,p,_){switch(v.value.forEach(w=>{const V=Math.abs(e-w.x),N=Math.abs(t-w.y),nt=V+N,bt=Math.max(V,N),gt=V>1?V-1:V+N>1?N-1:N;switch(k){case 1:nt<=m&&(w.state.d=nt,w.state.q=bt,w.state.d1=gt,w.style.color=p,w.style.bgcolor=_,f.value.push(w));break;case 2:Math.abs(V)<=m&&Math.abs(N)<=m&&(w.state.d=nt,w.state.q=bt,w.state.d1=gt,w.style.color=p,w.style.bgcolor=_,f.value.push(w));break}}),i){case 1:k===1?f.value.sort(st):k===2&&f.value.sort(A);break;case 2:k===1?f.value.sort(d):k===2&&f.value.sort(q);break;case 3:f.value.sort(lt);break;case 4:f.value.sort(Dt);break}for(let w=0;w<f.value.length;w++)f.value[w].data.txt=String(w+1)}function st(e,t){return e.state.d!==t.state.d?e.state.d-t.state.d:e.x!==t.x?e.x-t.x:e.y!==t.y?e.y-t.y:0}function d(e,t){return e.state.d!==t.state.d?e.state.d-t.state.d:e.y!==t.y?e.y-t.y:e.x!==t.x?e.x-t.x:0}function A(e,t){return e.state.q!==t.state.q?e.state.q-t.state.q:e.state.d!==t.state.d?e.state.d-t.state.d:e.x!==t.x?e.x-t.x:e.y!==t.y?e.y-t.y:0}function q(e,t){return e.state.q!==t.state.q?e.state.q-t.state.q:e.state.d!==t.state.d?e.state.d-t.state.d:e.y!==t.y?e.y-t.y:e.x!==t.x?e.x-t.x:0}function lt(e,t){return e.x!==t.x?e.x-t.x:e.y!==t.y?e.y-t.y:0}function Dt(e,t){return e.y!==t.y?e.y-t.y:e.x!==t.x?e.x-t.x:0}const h=W({enabled:!1});function Gt(){E()}function ft(){h.enabled=!1}function $t(e,t){var m;switch(u.editor){case 1:case 4:h.current=t,(m=C.value)==null||m.focus();break;case 3:E(),ot(t.x,t.y,u.selectRange,u.shape,u.sortType,u.color,u.bgcolor);break}}function It(e,t){if(e.button===0)switch(u.editor){case 2:{h.enabled=!0,t.style.color=u.color,t.style.bgcolor=u.bgcolor;break}}}function Rt(e,t){e.button===0&&h.enabled&&(t.style.color=u.color,t.style.bgcolor=u.bgcolor)}function Mt(){h.current=void 0}const x=W({}),pt=["#ffffff00","#FF3C4132","#0EBEFF32","#48CF7432","#FCD00032","#80008032"],Ft=(e,t)=>{switch(u.editor){case 2:e.preventDefault();break;default:x.grid=t,x.action="swap",e.dataTransfer&&(e.dataTransfer.effectAllowed="move")}},Ht=(e,t)=>{const m=b();m.style.color=t.color,m.style.bgcolor=t.bgcolor,m.data.txt="E",x.grid=m,x.action="color"},vt=(e,t)=>{x.grid=At.cloneDeep(t),x.action="image"},Ut=(e,t)=>{if(e.preventDefault(),!x.grid)return;const m=x.grid.data,k=x.grid.style;switch(x.action){case"color":t.data.actorId||(t.data.actorId=++n.value),t.style.color=k.color,t.style.bgcolor=k.bgcolor;break;case"image":t.data.actorId||(t.data.actorId=++n.value),t.style.image=k.image;break;case"swap":x.grid.data=t.data,x.grid.style=t.style,t.data=m,t.style=k;break}x.grid=void 0,x.action=void 0,u.editor===4&&j()};function Tt(e,t){let m=e[0].state[t];for(let k=1;k<e.length;k++)e[k].state[t]<m&&(m=e[k].state[t]);return m}function mt(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function yt(e,t,m){e.sort((_,w)=>+_.data.actorId-+w.data.actorId),e.forEach(_=>{_.state.d1=mt(_,m),_.state.d2=mt(_,t),_.data.guard=!1});const k=Tt(e,"d1");if(e=e.filter(_=>_.state.d1===k),e.length===1)return e[0];let i=e[0],p=e.length;for(;p--;)if(e[p].state.d2<i.state.d2){i=e[p];break}return i}function qt(e,t){return(F-t-1)*R+e}function Lt(){E(),n.value=0;const e=[{x:7,y:9,txt:"",type:B.GUARD,bg:"#0ebeff"},{x:9,y:7,txt:"",type:B.GUARD,bg:"#0ebeff"},{x:7,y:5,txt:"",type:B.GUARD,bg:"#0ebeff"},{x:5,y:7,txt:"",type:B.GUARD,bg:"#0ebeff"},{x:8,y:6,txt:"",type:B.ATTACKER,bg:"#ff3c41"},{x:7,y:7,txt:"",type:B.SHEEP,bg:"#fcd000"}];for(const t of e){const m=v.value[qt(t.x,t.y)];m.data.actorId=++n.value,m.data.actorType=t.type,m.data.txt=t.txt,m.data.disabled=!1,m.style.bgcolor=t.bg}u.editor=4}const j=()=>{v.value.forEach(p=>p.style.opacity=1);const e=v.value.filter(p=>!p.data.disabled),t=e.filter(p=>p.data.actorType===B.ATTACKER)[0],m=e.filter(p=>p.data.actorType===B.SHEEP)[0],k=e.filter(p=>p.data.actorType===B.GUARD);if(!m||k.length===0){alert("\u7F3A\u5C11\u89D2\u8272\uFF0C\u5C06\u81EA\u52A8\u751F\u6210"),Lt(),j();return}const i=v.value.filter(p=>!p.data.disabled).filter(p=>p.data.actorType===B.NONE);for(const p of i){const _=yt(k,p,m);p.style.image=_.style.image,p.style.bgcolor=pt[_.data.actorId]||pt[0],_.style.image?p.data.sup="":p.data.sup=String(_.data.actorId),p.style.opacity=.6}if(t){const p=yt(k,t,m);p.data.guard=!0}},Nt=e=>{if(e.data.disabled=!e.data.disabled,u.editor===4){switch(e.data.actorType){case B.ATTACKER:case B.SHEEP:e.data.disabled=!1;break}j()}},Pt=e=>{!x.grid||!e.dataTransfer||x.action==="swap"&&(u.editor===4&&x.grid.data.actorType===B.SHEEP||e.preventDefault())},zt=e=>{if(!!x.grid&&!!e)switch(x.action){case"swap":e.data=a(),e.style=l(),e.state=y(),x.grid=void 0,x.action=void 0,u.editor===4&&j()}};return G(F,R),window.addEventListener("mouseup",ft,!1),Ct(()=>{window.removeEventListener("mouseup",ft,!1)}),(e,t)=>{const m=Yt("c-space"),k=jt("autofocus");return D(),I("div",de,[s("div",fe,[s("div",pe,[s("label",ve,[me,S(s("select",{"onUpdate:modelValue":t[0]||(t[0]=i=>c(u).editor=i)},we,512),[[Q,c(u).editor,void 0,{number:!0}]])]),s("label",he,[ke,S(s("input",{type:"number",min:"0","onUpdate:modelValue":t[1]||(t[1]=i=>c(u).selectRange=i),style:{width:"5em"}},null,512),[[M,c(u).selectRange]])]),s("label",xe,[Ee,S(s("select",{"onUpdate:modelValue":t[2]||(t[2]=i=>c(u).shape=i)},Ve,512),[[Q,c(u).shape]])]),s("label",Se,[Ae,S(s("select",{"onUpdate:modelValue":t[3]||(t[3]=i=>c(u).sortType=i)},Re,512),[[Q,c(u).sortType]])]),s("button",{class:"btn",onClick:Gt},"\u6E05\u7A7A"),s("button",{class:"btn",onClick:j},"\u8BA1\u7B97\u62A4\u536B")]),s("div",Me,[U(m,null,{default:Z(()=>[s("label",Fe,[He,U(c(P),{draggable:!1,style:H([`--color:${c(u).color};--bgcolor:${c(u).bgcolor}`])},{default:Z(()=>[Ue]),_:1},8,["style"])]),s("label",Te,[qe,U(c(L),{modelValue:c(u).color,"onUpdate:modelValue":t[4]||(t[4]=i=>c(u).color=i)},null,8,["modelValue"])]),s("label",Le,[Ne,U(c(L),{modelValue:c(u).bgcolor,"onUpdate:modelValue":t[5]||(t[5]=i=>c(u).bgcolor=i)},null,8,["modelValue"])]),Pe,s("div",ze,[(D(!0),I(rt,null,at(c(r),(i,p)=>(D(),tt(c(P),{key:p,selected:c(u).bgcolor===i.bgcolor,style:H([`--color:${i.color};--bgcolor:${i.bgcolor}`]),onClick:_=>$(i),onDragstart:_=>Ht(_,i)},{default:Z(()=>[Xe]),_:2},1032,["selected","style","onClick","onDragstart"]))),128))]),s("div",{class:"trush",onDragover:Pt,onDrop:t[6]||(t[6]=i=>zt(c(x).grid))},Oe,32)]),_:1})]),s("div",Ye,[c(h).current?(D(),I("div",je,[U(m,null,{default:Z(()=>[s("label",We,[Je,U(c(P),{draggable:!1,style:H([`--color:${c(h).current.style.color};--bgcolor:${c(h).current.style.bgcolor}`]),item:c(h).current},null,8,["style","item"])]),s("label",Qe,[Ze,U(c(L),{modelValue:c(h).current.style.color,"onUpdate:modelValue":t[7]||(t[7]=i=>c(h).current.style.color=i)},null,8,["modelValue"])]),s("label",to,[eo,U(c(L),{modelValue:c(h).current.style.bgcolor,"onUpdate:modelValue":t[8]||(t[8]=i=>c(h).current.style.bgcolor=i)},null,8,["modelValue"])]),s("label",oo,[so,S(s("input",{type:"number",style:{width:"4em"},min:"12",step:"1","onUpdate:modelValue":t[9]||(t[9]=i=>c(h).current.data.size=i)},null,512),[[M,c(h).current.data.size]])]),s("label",lo,[no,S(s("input",{type:"number","onUpdate:modelValue":t[10]||(t[10]=i=>c(h).current.data.actorId=i),style:{width:"4em"}},null,512),[[M,c(h).current.data.actorId]])]),s("label",ro,[ao,S(s("select",{"onUpdate:modelValue":t[11]||(t[11]=i=>c(h).current.data.actorType=i)},[s("option",{value:c(B).NONE},"\u65E0",8,io),s("option",{value:c(B).GUARD},"\u62A4\u536B",8,co),s("option",{value:c(B).SHEEP},"\u9776\u5B50",8,uo),s("option",{value:c(B).ATTACKER},"\u653B\u51FB\u8005",8,fo)],512),[[Q,c(h).current.data.actorType]])]),s("label",po,[vo,S(s("input",{type:"text",ref_key:"txtInput",ref:C,"onUpdate:modelValue":t[12]||(t[12]=i=>c(h).current.data.txt=i)},null,512),[[k],[M,c(h).current.data.txt]])]),s("button",{class:"btn",onClick:Mt},"\u5B8C\u6210")]),_:1})])):et("",!0)])]),s("div",mo,[s("div",{class:"grids",style:H(c(T))},[(D(!0),I(rt,null,at(c(v),(i,p)=>{var _,w;return D(),tt(c(P),{key:p,draggable:!0,selected:i.x===((_=c(h).current)==null?void 0:_.x)&&i.y===((w=c(h).current)==null?void 0:w.y),disabled:i.data.disabled,dot:i.data.guard,item:i,onDragstart:V=>Ft(V,i),onDragover:t[13]||(t[13]=z(()=>{},["prevent"])),onDrop:V=>Ut(V,i),onContextmenu:z(V=>Nt(i),["prevent"]),onClick:V=>$t(V,i),onMousedown:V=>It(V,i),onMouseenter:V=>Rt(V,i)},null,8,["selected","disabled","dot","item","onDragstart","onDrop","onContextmenu","onClick","onMousedown","onMouseenter"])}),128))],4),s("div",yo,[U(c(P),{item:c(O),onDragstart:t[14]||(t[14]=i=>vt(i,c(O)))},null,8,["item"]),(D(!0),I(rt,null,at(c(Y),(i,p)=>(D(),tt(c(P),{key:p,item:i,onDragstart:_=>vt(_,i)},null,8,["item","onDragstart"]))),128))])])])}}});var ho=ct(bo,[["__scopeId","data-v-0f2811b6"]]);export{ho as default};
