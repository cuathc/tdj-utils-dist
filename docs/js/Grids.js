import{d as pt,s as x,a as vt,q,P as Pt,S as At,V as ft,_ as mt,o as P,c as F,e as l,n as R,b as Gt,w as C,U as nt,Q as M,B as k,T as Ft,p as bt,l as wt,v as J,g as U,i as lt,j as Mt,F as st,h as at,r as rt,N as Et,k as dt,f as ut}from"./index.js";import{_ as Dt}from"./lodash.js";const it=(o,e,i)=>{let v=0,a=0,r=0;o%=360;const s=Math.floor(o/60),c=o/60-s,f=i*(1-e),d=i*(1-e*c),_=i*(1-e*(1-c));switch(s){case 0:v=i,a=_,r=f;break;case 1:v=d,a=i,r=f;break;case 2:v=f,a=i,r=_;break;case 3:v=f,a=d,r=i;break;case 4:v=_,a=f,r=i;break;case 5:v=i,a=f,r=d;break}v=Math.floor(v*255),a=Math.floor(a*255),r=Math.floor(r*255);const b=("00"+v.toString(16)).slice(-2),V=("00"+a.toString(16)).slice(-2),B=("00"+r.toString(16)).slice(-2);return[o,e,i,v,a,r,"#"+b+V+B]},ct=o=>{let e=0,i=0,v=0,a=0,r=0,s=0;if(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i.test(o))e=window.parseInt(RegExp.$1,16),i=window.parseInt(RegExp.$2,16),v=window.parseInt(RegExp.$3,16);else if(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.test(o))e=window.parseInt(RegExp.$1,10),i=window.parseInt(RegExp.$2,10),v=window.parseInt(RegExp.$3,10);else return[0,0,0,0,0,0,"#000000"];a=e/255,r=i/255,s=v/255;let c=a;r>c&&(c=r),s>c&&(c=s);let f=a;r<f&&(f=r),s<f&&(f=s);let d=0,_=0,b=0;c===f?d=0:c===a&&r>=s?d=60*(r-s)/(c-f)+0:c===a&&r<s?d=60*(r-s)/(c-f)+360:c===r?d=60*(s-a)/(c-f)+120:c===s&&(d=60*(a-r)/(c-f)+240),c===0?_=0:_=1-f/c,b=c;const V=("00"+e.toString(16)).slice(-2),B=("00"+i.toString(16)).slice(-2),H=("00"+v.toString(16)).slice(-2);return[Math.floor(d),_,b,e,i,v,"#"+V+B+H]};const Ut=pt({name:"ColorPicker",emits:["update:modelValue"],props:{modelValue:{type:String,required:!0}},setup(o,{emit:e}){const i=x(!1),v=vt({set:u=>{e("update:modelValue",u)},get:()=>o.modelValue}),a=q({h:0,s:0,v:0,r:0,g:0,b:0}),r=q({rect_down:!1,rect_left:0,rect_bottom:0,ver_down:!1,ver_bottom:0}),s={rect:{left:0,bottom:0,x:0,y:0},ver:{bottom:0,y:0}},c=x(!1),f=()=>{c.value=!0},d=Dt.debounce(()=>{c.value=!1},300),_=()=>{f();const u=it(a.h,a.s,a.v);a.r=u[3],a.g=u[4],a.b=u[5],v.value=u[6],r.ver_bottom=a.h,r.rect_left=a.s*360,r.rect_bottom=a.v*360,d()},b=()=>{f();const u=ct(`${a.r},${a.g},${a.b}`);a.h=u[0],a.s=u[1],a.v=u[2],v.value=u[6],r.ver_bottom=a.h,r.rect_left=a.s*360,r.rect_bottom=a.v*360,d()},V=u=>{u=u||"#000000";const w=ct(u);a.h=w[0],a.s=w[1],a.v=w[2],a.r=w[3],a.g=w[4],a.b=w[5],r.ver_bottom=a.h,r.rect_left=a.s*360,r.rect_bottom=a.v*360},B=()=>{const u=it(r.ver_bottom,r.rect_left/360,r.rect_bottom/360);a.h=u[0],a.s=u[1],a.v=u[2],a.r=u[3],a.g=u[4],a.b=u[5],v.value=u[6]},H=u=>{r.rect_down=!0,s.rect.x=u.clientX,s.rect.y=u.clientY;const w=u.currentTarget,A=w.getBoundingClientRect().left,z=w.getBoundingClientRect().top;s.rect.left=r.rect_left=u.clientX-A,s.rect.bottom=r.rect_bottom=360-(u.clientY-z),B()},I=u=>{if(!r.rect_down)return;const w=u.clientX-s.rect.x,A=u.clientY-s.rect.y;r.rect_left=Math.max(0,Math.min(360,s.rect.left+w)),r.rect_bottom=Math.max(0,Math.min(360,s.rect.bottom-A)),B()},L=()=>{!r.rect_down||(r.rect_down=!1)},W=u=>{r.ver_down=!0,s.ver.y=u.clientY;const A=u.currentTarget.getBoundingClientRect().top;s.ver.bottom=r.ver_bottom=360-(u.clientY-A),B()},Y=u=>{if(!r.ver_down)return;const w=u.clientY-s.ver.y;r.ver_bottom=Math.max(0,Math.min(360,s.ver.bottom-w)),B()},X=()=>{!r.ver_down||(r.ver_down=!1)},j=()=>{i.value=!0},Q=()=>{i.value=!1};return Pt(()=>o.modelValue,u=>{r.ver_down||r.rect_down||c.value||(console.log("watch"),V(u))}),V(o.modelValue),At(()=>{window.addEventListener("mousemove",I,!1),window.addEventListener("mouseup",L,!1),window.addEventListener("mousemove",Y,!1),window.addEventListener("mouseup",X,!1)}),ft(()=>{window.removeEventListener("mousemove",I,!1),window.removeEventListener("mouseup",L,!1),window.removeEventListener("mousemove",Y,!1),window.removeEventListener("mouseup",X,!1)}),{show:i,color:v,vars:a,state:r,colorRectPointerStart:H,colorVerPointerStart:W,updateHSV:_,updateRGB:b,updateHex:V,onOpen:j,onComfirm:Q}}}),O=o=>(bt("data-v-5a88cd3c"),o=o(),wt(),o),Ht={class:"color-control"},xt={class:"colorPanel_posLayer"},qt=O(()=>l("div",{class:"colorPanel_colorVerBg"},null,-1)),It={class:"colorPanel_viewbox"},Lt=O(()=>l("div",{class:"colorPanel_view__label"},"HSV",-1)),Yt=O(()=>l("div",{class:"colorPanel_view__label"},"RGB",-1)),Xt=O(()=>l("div",{class:"colorPanel_view__label"},"Hex",-1));function zt(o,e,i,v,a,r){return P(),F("div",Ht,[l("div",{class:"color-preview",style:R({backgroundColor:o.color}),onClick:e[0]||(e[0]=(...s)=>o.onOpen&&o.onOpen(...s))},null,4),(P(),Gt(Ft,{to:"body"},[C(l("div",{class:"colorPanel_posMask",onWheel:e[1]||(e[1]=M(()=>{},["prevent"])),onTouchstart:e[2]||(e[2]=M(()=>{},["prevent"])),onClick:e[3]||(e[3]=(...s)=>o.onComfirm&&o.onComfirm(...s))},null,544),[[nt,o.show]]),C(l("div",xt,[l("div",{style:R(`background-color: hsl(${o.vars.h}deg, 100%, 50%)`),class:"colorPanel_colorRectBg"},[l("div",{class:"colorPanel_colorRect",onMousedown:e[4]||(e[4]=M((...s)=>o.colorRectPointerStart&&o.colorRectPointerStart(...s),["prevent","stop"]))},[l("div",{class:"colorPanel_colorRectPointer",style:R({left:`${o.state.rect_left}px`,bottom:`${o.state.rect_bottom}px`})},null,4)],32)],4),l("div",{class:"colorPanel_colorVer",onMousedown:e[5]||(e[5]=M((...s)=>o.colorVerPointerStart&&o.colorVerPointerStart(...s),["prevent","stop"]))},[qt,l("div",{class:"colorPanel_colorVerPointer",style:R({bottom:`${o.state.ver_bottom}px`})},null,4)],32),l("div",It,[l("div",{class:"colorPanel_viewcolor",style:R({background:o.color})},null,4),Lt,C(l("input",{type:"number",max:"360",min:"0",step:"1","onUpdate:modelValue":e[6]||(e[6]=s=>o.vars.h=s),class:"colorPanel_view__input",onInput:e[7]||(e[7]=(...s)=>o.updateHSV&&o.updateHSV(...s))},null,544),[[k,o.vars.h]]),C(l("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":e[8]||(e[8]=s=>o.vars.s=s),class:"colorPanel_view__input",onInput:e[9]||(e[9]=(...s)=>o.updateHSV&&o.updateHSV(...s))},null,544),[[k,o.vars.s]]),C(l("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":e[10]||(e[10]=s=>o.vars.v=s),class:"colorPanel_view__input",onInput:e[11]||(e[11]=(...s)=>o.updateHSV&&o.updateHSV(...s))},null,544),[[k,o.vars.v]]),Yt,C(l("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":e[12]||(e[12]=s=>o.vars.r=s),class:"colorPanel_view__input",onInput:e[13]||(e[13]=(...s)=>o.updateRGB&&o.updateRGB(...s))},null,544),[[k,o.vars.r]]),C(l("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":e[14]||(e[14]=s=>o.vars.g=s),class:"colorPanel_view__input",onInput:e[15]||(e[15]=(...s)=>o.updateRGB&&o.updateRGB(...s))},null,544),[[k,o.vars.g]]),C(l("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":e[16]||(e[16]=s=>o.vars.b=s),class:"colorPanel_view__input",onInput:e[17]||(e[17]=(...s)=>o.updateRGB&&o.updateRGB(...s))},null,544),[[k,o.vars.b]]),Xt,C(l("input",{type:"text","onUpdate:modelValue":e[18]||(e[18]=s=>o.color=s),class:"colorPanel_view__input"},null,512),[[k,o.color]]),l("div",{class:"colorPanel_enter",onClick:e[19]||(e[19]=(...s)=>o.onComfirm&&o.onComfirm(...s))},"\u786E\u8BA4")])],512),[[nt,o.show]])]))])}var N=mt(Ut,[["render",zt],["__scopeId","data-v-5a88cd3c"]]);N.install=function(o){o.component(N.name,N)};const Tt=pt({components:{ColorPicker:N},setup(){const o=[{color:"#202020",bgcolor:"transparent"},{color:"#202020",bgcolor:"#FF3C41"},{color:"#202020",bgcolor:"#48CF74"},{color:"#202020",bgcolor:"#0EBEFF"},{color:"#202020",bgcolor:"#FCD000"}],e=x(),i=q({editor:1,selectRange:5,shape:1,sortType:1,color:o[0].color,bgcolor:o[0].bgcolor});function v(t){i.color=t.color,i.bgcolor=t.bgcolor}const a=x([]),r=x([]),s=15,c=15,f=vt(()=>`--rows:${s};--cols:${s}`),d=()=>({d:0,d1:0,d2:0,q:0,color:o[0].color,bgcolor:o[0].bgcolor,size:14,txt:"",disabled:!1}),_=()=>({x:0,y:0,data:d()});function b(){for(let t=0;t<c;t++)for(let n=0;n<s;n++){const p=_();p.x=n+1,p.y=c-t,a.value.push(p)}}let V;(t=>{t[t.RHOMBUS=1]="RHOMBUS",t[t.RECTANGLE=2]="RECTANGLE"})(V||(V={}));let B;(t=>{t[t.EDITOR=1]="EDITOR",t[t.BRUSH=2]="BRUSH",t[t.SHAPE=3]="SHAPE",t[t.GUARD=4]="GUARD"})(B||(B={}));function H(t,n,p,g,$,S,h){a.value.forEach(y=>{const E=Math.abs(t-y.x),D=Math.abs(n-y.y),Z=E+D,ot=Math.max(E,D),et=E>1?E-1:E+D>1?D-1:D;switch(g){case 1:Z<=p&&(y.data.d=Z,y.data.q=ot,y.data.d1=et,y.data.color=S,y.data.bgcolor=h,r.value.push(y));break;case 2:Math.abs(E)<=p&&Math.abs(D)<=p&&(y.data.d=Z,y.data.q=ot,y.data.d1=et,y.data.color=S,y.data.bgcolor=h,r.value.push(y));break}}),$===1&&(g===1?r.value.sort(I):g===2&&r.value.sort(W)),$===2&&(g===1?r.value.sort(L):g===2&&r.value.sort(Y)),$===3&&r.value.sort(X),$===4&&r.value.sort(j);for(let y=0;y<r.value.length;y++)r.value[y].data.txt=String(y+1)}function I(t,n){return t.data.d!==n.data.d?t.data.d-n.data.d:t.x!==n.x?t.x-n.x:t.y!==n.y?t.y-n.y:0}function L(t,n){return t.data.d!==n.data.d?t.data.d-n.data.d:t.y!==n.y?t.y-n.y:t.x!==n.x?t.x-n.x:0}function W(t,n){return t.data.q!==n.data.q?t.data.q-n.data.q:t.data.d!==n.data.d?t.data.d-n.data.d:t.x!==n.x?t.x-n.x:t.y!==n.y?t.y-n.y:0}function Y(t,n){return t.data.q!==n.data.q?t.data.q-n.data.q:t.data.d!==n.data.d?t.data.d-n.data.d:t.y!==n.y?t.y-n.y:t.x!==n.x?t.x-n.x:0}function X(t,n){return t.x!==n.x?t.x-n.x:t.y!==n.y?t.y-n.y:0}function j(t,n){return t.y!==n.y?t.y-n.y:t.x!==n.x?t.x-n.x:0}function Q(t){t.data.q=0,t.data.d=0,t.data.d1=0,t.data.d2=0,t.data.color=o[0].color,t.data.bgcolor=o[0].bgcolor,t.data.txt="",t.data.guard=!1,t.data.disabled=!1}function u(){a.value.forEach(t=>{Q(t)}),r.value=[]}const w=q({enabled:!1});function A(){u()}function z(){w.enabled=!1}function yt(t,n){var p;switch(i.editor){case 1:w.current=n,(p=e.value)==null||p.focus();break;case 3:u(),H(n.x,n.y,i.selectRange,i.shape,i.sortType,i.color,i.bgcolor);break}}function _t(t,n){if(t.button===0)switch(i.editor){case 2:{w.enabled=!0,n.data.color=i.color,n.data.bgcolor=i.bgcolor;break}}}function gt(t,n){t.button===0&&w.enabled&&(n.data.color=i.color,n.data.bgcolor=i.bgcolor)}function Ct(){w.current=void 0}const G=q({}),St=(t,n)=>{switch(i.editor){case 2:t.preventDefault();break;default:G.grid=n,t.dataTransfer&&(t.dataTransfer.effectAllowed="move")}},ht=(t,n)=>{const p=_();p.data.color=n.color,p.data.bgcolor=n.bgcolor,p.data.txt="E",G.grid=p},Bt=(t,n)=>{if(t.preventDefault(),!G.grid)return;const p=G.grid.data;G.grid.data=n.data,n.data=p,G.grid=void 0,i.editor===4&&T()};function K(t,n){let p=t[0].data[n];for(let g=1;g<t.length;g++)t[g].data[n]<p&&(p=t[g].data[n]);return p}function tt(t,n){return Math.abs(t.x-n.x)+Math.abs(t.y-n.y)}function Vt(t,n,p){t.sort((h,y)=>+h.data.txt-+y.data.txt),t.forEach(h=>{h.data.d1=tt(h,p),h.data.d2=tt(h,n),h.data.guard=!1});const g=K(t,"d1");t=t.filter(h=>h.data.d1===g);const $=t[0];if(t.length===1)return t[0];const S=K(t,"d2");return t=t.filter(h=>h.data.d2===S),$!==t[0]?t[t.length-1]:$}function kt(){u();let t=0;for(let n=0;n<4;n++)a.value[t].data.txt=`${n+1}`,a.value[t].data.bgcolor="#0ebeff",a.value[t].data.disabled=!1,t++;a.value[t].data.txt="A",a.value[t].data.bgcolor="#FF3C41",a.value[t].data.disabled=!1,t++,a.value[t].data.txt="B",a.value[t].data.bgcolor="#FCD000",a.value[t].data.disabled=!1,t++,i.editor=4}const T=()=>{const t=a.value.filter(S=>!S.data.disabled).filter(S=>S.data.txt),n=t.filter(S=>S.data.txt.toUpperCase()==="A")[0],p=t.filter(S=>S.data.txt.toUpperCase()==="B")[0],g=t.filter(S=>+S.data.txt>0);if(!n||!p||g.length===0){alert("\u7F3A\u5C11\u89D2\u8272\uFF0C\u5C06\u81EA\u52A8\u751F\u6210"),kt(),T();return}const $=Vt(g,n,p);$.data.guard=!0},Rt=t=>{if(t.data.disabled=!t.data.disabled,i.editor===4){switch(t.data.txt.toUpperCase()){case"A":case"B":t.data.disabled=!1;break}T()}},$t=t=>{!t||(t.data=d())};return window.addEventListener("mouseup",z,!1),ft(()=>{window.removeEventListener("mouseup",z,!1)}),b(),{txtInput:e,state:i,colors:o,grids:a,selects:r,gridsStyle:f,selectState:w,onSelectColor:v,onResetClick:A,onGridClick:yt,onGridMouseDown:_t,onGridMouseEnter:gt,onGridEditorDone:Ct,dragState:G,onDragStart:St,onDragColorStart:ht,onDrop:Bt,onCalcGuard:T,onSwitchEnable:Rt,onCleanGrid:$t}}}),m=o=>(bt("data-v-01f406ab"),o=o(),wt(),o),Nt={class:"wrapper"},Ot={class:"toolbar"},Wt={class:"setting"},jt={class:"label-control"},Qt=m(()=>l("span",null,"\u7F16\u8F91\u6A21\u5F0F\xA0",-1)),Zt=m(()=>l("option",{value:1},"\u7F16\u8F91\u7F51\u683C",-1)),Jt=m(()=>l("option",{value:2},"\u7F51\u683C\u4E0A\u8272",-1)),Kt=m(()=>l("option",{value:3},"\u9009\u62E9\u5F62\u72B6",-1)),to=m(()=>l("option",{value:4},"\u62A4\u536B\u8BA1\u7B97",-1)),oo=[Zt,Jt,Kt,to],eo={class:"label-control"},no=m(()=>l("span",null,"\u8303\u56F4\xA0",-1)),lo={class:"label-control"},so=m(()=>l("span",null,"\u5F62\u72B6\xA0",-1)),ao=m(()=>l("option",{value:1},"\u83F1\u5F62",-1)),ro=m(()=>l("option",{value:2},"\u5708\u6570",-1)),uo=[ao,ro],io={class:"label-control"},co=m(()=>l("span",null,"\u6392\u5E8F\xA0",-1)),po=m(()=>l("option",{value:1},"\u8DDD\u79BBX",-1)),vo=m(()=>l("option",{value:2},"\u8DDD\u79BBY",-1)),fo=m(()=>l("option",{value:3},"X\u4F18\u5148",-1)),mo=m(()=>l("option",{value:4},"Y\u4F18\u5148",-1)),bo=[po,vo,fo,mo],wo={class:"color-container"},yo={class:"label-control"},_o=m(()=>l("span",null,"\u9884\u89C8\xA0",-1)),go={class:"label-control"},Co=m(()=>l("span",null,"\u6587\u5B57\xA0",-1)),So={class:"label-control"},ho=m(()=>l("span",null,"\u80CC\u666F\xA0",-1)),Bo=m(()=>l("label",{class:"label-control"},[l("span",null,"\u9884\u8BBE\xA0")],-1)),Vo={class:"color-tpls"},ko=["onClick","onDragstart"],Ro=m(()=>l("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"#a9a9a9",style:{"pointer-events":"none"}},[l("path",{d:"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"})],-1)),$o=[Ro],Po={class:"props-container"},Ao={key:0,class:"props-content"},Go={class:"label-control"},Fo=m(()=>l("span",null,"\u9884\u89C8\xA0",-1)),Mo={class:"label-control"},Eo=m(()=>l("span",null,"\u6587\u5B57\xA0",-1)),Do={class:"label-control"},Uo=m(()=>l("span",null,"\u80CC\u666F\xA0",-1)),Ho={class:"label-control"},xo=m(()=>l("span",null,"\u5927\u5C0F\xA0",-1)),qo={class:"label-control"},Io=m(()=>l("span",null,"\u5185\u5BB9\xA0",-1)),Lo={class:"content"},Yo=["onDragstart","onDrop","onContextmenu","onClick","onMousedown","onMouseenter"];function Xo(o,e,i,v,a,r){const s=rt("ColorPicker"),c=rt("c-space"),f=Et("autofocus");return P(),F("div",Nt,[l("div",Ot,[l("div",Wt,[l("label",jt,[Qt,C(l("select",{"onUpdate:modelValue":e[0]||(e[0]=d=>o.state.editor=d)},oo,512),[[J,o.state.editor,void 0,{number:!0}]])]),l("label",eo,[no,C(l("input",{type:"number",min:"0","onUpdate:modelValue":e[1]||(e[1]=d=>o.state.selectRange=d),style:{width:"5em"}},null,512),[[k,o.state.selectRange]])]),l("label",lo,[so,C(l("select",{"onUpdate:modelValue":e[2]||(e[2]=d=>o.state.shape=d)},uo,512),[[J,o.state.shape]])]),l("label",io,[co,C(l("select",{"onUpdate:modelValue":e[3]||(e[3]=d=>o.state.sortType=d)},bo,512),[[J,o.state.sortType]])]),l("button",{class:"btn",onClick:e[4]||(e[4]=(...d)=>o.onResetClick&&o.onResetClick(...d))},"\u6E05\u7A7A"),l("button",{class:"btn",onClick:e[5]||(e[5]=(...d)=>o.onCalcGuard&&o.onCalcGuard(...d))},"\u8BA1\u7B97\u62A4\u536B")]),l("div",wo,[U(c,null,{default:lt(()=>[l("label",yo,[_o,l("div",{class:"color-unit",style:R([`--color:${o.state.color};--bgcolor:${o.state.bgcolor}`])}," E ",4)]),l("label",go,[Co,U(s,{modelValue:o.state.color,"onUpdate:modelValue":e[6]||(e[6]=d=>o.state.color=d)},null,8,["modelValue"])]),l("label",So,[ho,U(s,{modelValue:o.state.bgcolor,"onUpdate:modelValue":e[7]||(e[7]=d=>o.state.bgcolor=d)},null,8,["modelValue"])]),Bo,l("div",Vo,[(P(!0),F(st,null,at(o.colors,(d,_)=>(P(),F("div",{key:_,class:dt(["color-unit",{selected:o.state.bgcolor===d.bgcolor}]),style:R([`--color:${d.color};--bgcolor:${d.bgcolor}`]),draggable:!0,onClick:b=>o.onSelectColor(d),onDragstart:b=>o.onDragColorStart(b,d)}," E ",46,ko))),128))]),l("div",{style:{"line-height":"0",padding:"4px",border:"2px solid #a9a9a9","border-radius":"6px"},onDragover:e[8]||(e[8]=M(()=>{},["prevent"])),onDrop:e[9]||(e[9]=d=>o.onCleanGrid(o.dragState.grid))},$o,32)]),_:1})]),l("div",Po,[o.selectState.current?(P(),F("div",Ao,[U(c,null,{default:lt(()=>[l("label",Go,[Fo,l("div",{class:"color-unit",style:R([`--color:${o.selectState.current.data.color};--bgcolor:${o.selectState.current.data.bgcolor}`])},ut(o.selectState.current.data.txt),5)]),l("label",Mo,[Eo,U(s,{modelValue:o.selectState.current.data.color,"onUpdate:modelValue":e[10]||(e[10]=d=>o.selectState.current.data.color=d)},null,8,["modelValue"])]),l("label",Do,[Uo,U(s,{modelValue:o.selectState.current.data.bgcolor,"onUpdate:modelValue":e[11]||(e[11]=d=>o.selectState.current.data.bgcolor=d)},null,8,["modelValue"])]),l("label",Ho,[xo,C(l("input",{type:"number",style:{width:"4em"},min:"12",step:"1","onUpdate:modelValue":e[12]||(e[12]=d=>o.selectState.current.data.size=d)},null,512),[[k,o.selectState.current.data.size]])]),l("label",qo,[Io,C(l("input",{type:"text",ref:"txtInput","onUpdate:modelValue":e[13]||(e[13]=d=>o.selectState.current.data.txt=d)},null,512),[[f],[k,o.selectState.current.data.txt]])]),l("button",{class:"btn",onClick:e[14]||(e[14]=(...d)=>o.onGridEditorDone&&o.onGridEditorDone(...d))},"\u5B8C\u6210")]),_:1})])):Mt("",!0)])]),l("div",Lo,[l("div",{class:"grids",style:R(o.gridsStyle)},[(P(!0),F(st,null,at(o.grids,(d,_)=>(P(),F("div",{key:_,draggable:!0,onDragstart:b=>o.onDragStart(b,d),onDragover:e[15]||(e[15]=M(()=>{},["prevent"])),onDrop:b=>o.onDrop(b,d),onContextmenu:M(b=>o.onSwitchEnable(d),["prevent"]),onClick:b=>o.onGridClick(b,d),onMousedown:b=>o.onGridMouseDown(b,d),onMouseenter:b=>o.onGridMouseEnter(b,d)},[l("div",{class:dt(["color-unit",{selected:d===o.selectState.current,guard:d.data.guard,disabled:d.data.disabled}]),style:R({fontSize:`${d.data.size}px`,color:d.data.color,backgroundColor:d.data.bgcolor})},ut(d.data.txt),7)],40,Yo))),128))],4)])])}var No=mt(Tt,[["render",Xo],["__scopeId","data-v-01f406ab"]]);export{No as default};
