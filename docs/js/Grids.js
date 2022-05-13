import{d as so,s as q,a as ro,q as L,P as po,S as vo,V as ao,_ as uo,o as V,c as B,e as t,n as S,b as fo,w,U as Q,Q as D,B as g,T as mo,p as co,l as io,v as x,g as P,i as J,j as bo,F as K,h as Z,r as oo,k as eo,f as to}from"./index.js";import{_ as _o}from"./lodash.js";const lo=(o,e,p)=>{let i=0,n=0,u=0;o%=360;const l=Math.floor(o/60),d=o/60-l,r=p*(1-e),f=p*(1-e*d),m=p*(1-e*(1-d));switch(l){case 0:i=p,n=m,u=r;break;case 1:i=f,n=p,u=r;break;case 2:i=r,n=p,u=m;break;case 3:i=r,n=f,u=p;break;case 4:i=m,n=r,u=p;break;case 5:i=p,n=r,u=f;break}i=Math.floor(i*255),n=Math.floor(n*255),u=Math.floor(u*255);const C=("00"+i.toString(16)).slice(-2),h=("00"+n.toString(16)).slice(-2),y=("00"+u.toString(16)).slice(-2);return[o,e,p,i,n,u,"#"+C+h+y]},no=o=>{let e=0,p=0,i=0,n=0,u=0,l=0;if(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i.test(o))e=window.parseInt(RegExp.$1,16),p=window.parseInt(RegExp.$2,16),i=window.parseInt(RegExp.$3,16);else if(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.test(o))e=window.parseInt(RegExp.$1,10),p=window.parseInt(RegExp.$2,10),i=window.parseInt(RegExp.$3,10);else return[0,0,0,0,0,0,"#000000"];n=e/255,u=p/255,l=i/255;let d=n;u>d&&(d=u),l>d&&(d=l);let r=n;u<r&&(r=u),l<r&&(r=l);let f=0,m=0,C=0;d===r?f=0:d===n&&u>=l?f=60*(u-l)/(d-r)+0:d===n&&u<l?f=60*(u-l)/(d-r)+360:d===u?f=60*(l-n)/(d-r)+120:d===l&&(f=60*(n-u)/(d-r)+240),d===0?m=0:m=1-r/d,C=d;const h=("00"+e.toString(16)).slice(-2),y=("00"+p.toString(16)).slice(-2),R=("00"+i.toString(16)).slice(-2);return[Math.floor(f),m,C,e,p,i,"#"+h+y+R]};const wo=so({name:"ColorPicker",emits:["update:modelValue"],props:{modelValue:{type:String,required:!0}},setup(o,{emit:e}){const p=q(!1),i=ro({set:c=>{e("update:modelValue",c)},get:()=>o.modelValue}),n=L({h:0,s:0,v:0,r:0,g:0,b:0}),u=L({rect_down:!1,rect_left:0,rect_bottom:0,ver_down:!1,ver_bottom:0}),l={rect:{left:0,bottom:0,x:0,y:0},ver:{bottom:0,y:0}},d=q(!1),r=()=>{d.value=!0},f=_o.debounce(()=>{d.value=!1},300),m=()=>{r();const c=lo(n.h,n.s,n.v);n.r=c[3],n.g=c[4],n.b=c[5],i.value=c[6],u.ver_bottom=n.h,u.rect_left=n.s*360,u.rect_bottom=n.v*360,f()},C=()=>{r();const c=no(`${n.r},${n.g},${n.b}`);n.h=c[0],n.s=c[1],n.v=c[2],i.value=c[6],u.ver_bottom=n.h,u.rect_left=n.s*360,u.rect_bottom=n.v*360,f()},h=c=>{c=c||"#000000";const _=no(c);n.h=_[0],n.s=_[1],n.v=_[2],n.r=_[3],n.g=_[4],n.b=_[5],u.ver_bottom=n.h,u.rect_left=n.s*360,u.rect_bottom=n.v*360},y=()=>{const c=lo(u.ver_bottom,u.rect_left/360,u.rect_bottom/360);n.h=c[0],n.s=c[1],n.v=c[2],n.r=c[3],n.g=c[4],n.b=c[5],i.value=c[6]},R=c=>{u.rect_down=!0,l.rect.x=c.clientX,l.rect.y=c.clientY;const _=c.currentTarget,s=_.getBoundingClientRect().left,a=_.getBoundingClientRect().top;l.rect.left=u.rect_left=c.clientX-s,l.rect.bottom=u.rect_bottom=360-(c.clientY-a),y()},G=c=>{if(!u.rect_down)return;const _=c.clientX-l.rect.x,s=c.clientY-l.rect.y;u.rect_left=Math.max(0,Math.min(360,l.rect.left+_)),u.rect_bottom=Math.max(0,Math.min(360,l.rect.bottom-s)),y()},$=()=>{!u.rect_down||(u.rect_down=!1)},k=c=>{u.ver_down=!0,l.ver.y=c.clientY;const s=c.currentTarget.getBoundingClientRect().top;l.ver.bottom=u.ver_bottom=360-(c.clientY-s),y()},A=c=>{if(!u.ver_down)return;const _=c.clientY-l.ver.y;u.ver_bottom=Math.max(0,Math.min(360,l.ver.bottom-_)),y()},E=()=>{!u.ver_down||(u.ver_down=!1)},T=()=>{p.value=!0},H=()=>{p.value=!1};return po(()=>o.modelValue,c=>{u.ver_down||u.rect_down||d.value||(console.log("watch"),h(c))}),h(o.modelValue),vo(()=>{window.addEventListener("mousemove",G,!1),window.addEventListener("mouseup",$,!1),window.addEventListener("mousemove",A,!1),window.addEventListener("mouseup",E,!1)}),ao(()=>{window.removeEventListener("mousemove",G,!1),window.removeEventListener("mouseup",$,!1),window.removeEventListener("mousemove",A,!1),window.removeEventListener("mouseup",E,!1)}),{show:p,color:i,vars:n,state:u,colorRectPointerStart:R,colorVerPointerStart:k,updateHSV:m,updateRGB:C,updateHex:h,onOpen:T,onComfirm:H}}}),Y=o=>(co("data-v-5a88cd3c"),o=o(),io(),o),yo={class:"color-control"},go={class:"colorPanel_posLayer"},So=Y(()=>t("div",{class:"colorPanel_colorVerBg"},null,-1)),ho={class:"colorPanel_viewbox"},Co=Y(()=>t("div",{class:"colorPanel_view__label"},"HSV",-1)),ko=Y(()=>t("div",{class:"colorPanel_view__label"},"RGB",-1)),Vo=Y(()=>t("div",{class:"colorPanel_view__label"},"Hex",-1));function Bo(o,e,p,i,n,u){return V(),B("div",yo,[t("div",{class:"color-preview",style:S({backgroundColor:o.color}),onClick:e[0]||(e[0]=(...l)=>o.onOpen&&o.onOpen(...l))},null,4),(V(),fo(mo,{to:"body"},[w(t("div",{class:"colorPanel_posMask",onWheel:e[1]||(e[1]=D(()=>{},["prevent"])),onTouchstart:e[2]||(e[2]=D(()=>{},["prevent"])),onClick:e[3]||(e[3]=(...l)=>o.onComfirm&&o.onComfirm(...l))},null,544),[[Q,o.show]]),w(t("div",go,[t("div",{style:S(`background-color: hsl(${o.vars.h}deg, 100%, 50%)`),class:"colorPanel_colorRectBg"},[t("div",{class:"colorPanel_colorRect",onMousedown:e[4]||(e[4]=D((...l)=>o.colorRectPointerStart&&o.colorRectPointerStart(...l),["prevent","stop"]))},[t("div",{class:"colorPanel_colorRectPointer",style:S({left:`${o.state.rect_left}px`,bottom:`${o.state.rect_bottom}px`})},null,4)],32)],4),t("div",{class:"colorPanel_colorVer",onMousedown:e[5]||(e[5]=D((...l)=>o.colorVerPointerStart&&o.colorVerPointerStart(...l),["prevent","stop"]))},[So,t("div",{class:"colorPanel_colorVerPointer",style:S({bottom:`${o.state.ver_bottom}px`})},null,4)],32),t("div",ho,[t("div",{class:"colorPanel_viewcolor",style:S({background:o.color})},null,4),Co,w(t("input",{type:"number",max:"360",min:"0",step:"1","onUpdate:modelValue":e[6]||(e[6]=l=>o.vars.h=l),class:"colorPanel_view__input",onInput:e[7]||(e[7]=(...l)=>o.updateHSV&&o.updateHSV(...l))},null,544),[[g,o.vars.h]]),w(t("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":e[8]||(e[8]=l=>o.vars.s=l),class:"colorPanel_view__input",onInput:e[9]||(e[9]=(...l)=>o.updateHSV&&o.updateHSV(...l))},null,544),[[g,o.vars.s]]),w(t("input",{type:"number",max:"1",min:"0",step:"0.01","onUpdate:modelValue":e[10]||(e[10]=l=>o.vars.v=l),class:"colorPanel_view__input",onInput:e[11]||(e[11]=(...l)=>o.updateHSV&&o.updateHSV(...l))},null,544),[[g,o.vars.v]]),ko,w(t("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":e[12]||(e[12]=l=>o.vars.r=l),class:"colorPanel_view__input",onInput:e[13]||(e[13]=(...l)=>o.updateRGB&&o.updateRGB(...l))},null,544),[[g,o.vars.r]]),w(t("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":e[14]||(e[14]=l=>o.vars.g=l),class:"colorPanel_view__input",onInput:e[15]||(e[15]=(...l)=>o.updateRGB&&o.updateRGB(...l))},null,544),[[g,o.vars.g]]),w(t("input",{type:"number",max:"255",min:"0",step:"1","onUpdate:modelValue":e[16]||(e[16]=l=>o.vars.b=l),class:"colorPanel_view__input",onInput:e[17]||(e[17]=(...l)=>o.updateRGB&&o.updateRGB(...l))},null,544),[[g,o.vars.b]]),Vo,w(t("input",{type:"text","onUpdate:modelValue":e[18]||(e[18]=l=>o.color=l),class:"colorPanel_view__input"},null,512),[[g,o.color]]),t("div",{class:"colorPanel_enter",onClick:e[19]||(e[19]=(...l)=>o.onComfirm&&o.onComfirm(...l))},"\u786E\u8BA4")])],512),[[Q,o.show]])]))])}var I=uo(wo,[["render",Bo],["__scopeId","data-v-5a88cd3c"]]);I.install=function(o){o.component(I.name,I)};const Po=so({components:{ColorPicker:I},setup(){const o=[{color:"#202020",bgcolor:"#ffffff"},{color:"#202020",bgcolor:"#FF3C41"},{color:"#202020",bgcolor:"#48CF74"},{color:"#202020",bgcolor:"#0EBEFF"},{color:"#202020",bgcolor:"#FCD000"}],e=L({editor:1,selectRange:5,shape:1,sortType:1,color:o[0].color,bgcolor:o[0].bgcolor});function p(s){e.color=s.color,e.bgcolor=s.bgcolor}const i=q([]),n=q([]),u=15,l=15,d=ro(()=>({gridTemplateColumns:"repeat("+u+", 48px)",gridTemplateRows:"repeat("+l+", 48px)"}));function r(){for(let s=0;s<l;s++)for(let a=0;a<u;a++){const M={x:a+1,y:l-s,d:0,q:0,color:o[0].color,bgcolor:o[0].bgcolor,size:12,txt:""};i.value.push(M)}}function f(s,a,M,F,U,N,W){i.value.forEach(b=>{const X=s-b.x,z=a-b.y,O=Math.abs(X)+Math.abs(z),j=Math.max(Math.abs(X),Math.abs(z));switch(F){case 1:O<=M&&(b.d=O,b.q=j,b.color=N,b.bgcolor=W,n.value.push(b));break;case 2:Math.abs(X)<=M&&Math.abs(z)<=M&&(b.d=O,b.q=j,b.color=N,b.bgcolor=W,n.value.push(b));break}}),U===1&&(F===1?n.value.sort(m):F===2&&n.value.sort(h)),U===2&&(F===1?n.value.sort(C):F===2&&n.value.sort(y)),U===3&&n.value.sort(R),U===4&&n.value.sort(G);for(let b=0;b<n.value.length;b++)n.value[b].txt=String(b+1)}function m(s,a){return s.d!==a.d?s.d-a.d:s.x!==a.x?s.x-a.x:s.y!==a.y?s.y-a.y:0}function C(s,a){return s.d!==a.d?s.d-a.d:s.y!==a.y?s.y-a.y:s.x!==a.x?s.x-a.x:0}function h(s,a){return s.q!==a.q?s.q-a.q:s.d!==a.d?s.d-a.d:s.x!==a.x?s.x-a.x:s.y!==a.y?s.y-a.y:0}function y(s,a){return s.q!==a.q?s.q-a.q:s.d!==a.d?s.d-a.d:s.y!==a.y?s.y-a.y:s.x!==a.x?s.x-a.x:0}function R(s,a){return s.x!==a.x?s.x-a.x:s.y!==a.y?s.y-a.y:0}function G(s,a){return s.y!==a.y?s.y-a.y:s.x!==a.x?s.x-a.x:0}function $(){i.value.forEach(s=>{s.q=0,s.d=0,s.color=o[0].color,s.bgcolor=o[0].bgcolor,s.txt=""}),n.value=[]}const k=L({enabled:!1});function A(){$()}function E(){k.enabled=!1}function T(s,a){e.editor===1&&(k.current=a)}function H(s,a){if(s.button===0)switch(e.editor){case 2:{k.enabled=!0,a.color=e.color,a.bgcolor=e.bgcolor;break}case 3:{$(),f(a.x,a.y,e.selectRange,e.shape,e.sortType,e.color,e.bgcolor);break}}}function c(s,a){s.button===0&&k.enabled&&(a.color=e.color,a.bgcolor=e.bgcolor)}function _(){k.current=void 0}return window.addEventListener("mouseup",E,!1),ao(()=>{window.removeEventListener("mouseup",E,!1)}),r(),{state:e,colors:o,grids:i,selects:n,gridsStyle:d,selectState:k,onSelectColor:p,onResetClick:A,onGridClick:T,onGridMouseDown:H,onGridMouseEnter:c,onGridEditorDone:_}}}),v=o=>(co("data-v-43f02c41"),o=o(),io(),o),Ro={class:"wrapper"},$o={class:"toolbar"},Eo={class:"setting"},Mo={class:"label-control"},Fo=v(()=>t("span",null,"\u7F16\u8F91\u6A21\u5F0F\xA0",-1)),Go=v(()=>t("option",{value:1},"\u7F16\u8F91",-1)),Ao=v(()=>t("option",{value:2},"\u4E0A\u8272",-1)),Uo=v(()=>t("option",{value:3},"\u9009\u62E9",-1)),Do=[Go,Ao,Uo],Io={class:"label-control"},qo=v(()=>t("span",null,"\u8303\u56F4\xA0",-1)),Lo={class:"label-control"},Yo=v(()=>t("span",null,"\u5F62\u72B6\xA0",-1)),To=v(()=>t("option",{value:1},"\u83F1\u5F62",-1)),Ho=v(()=>t("option",{value:2},"\u5708\u6570",-1)),Xo=[To,Ho],zo={class:"label-control"},Oo=v(()=>t("span",null,"\u6392\u5E8F\xA0",-1)),xo=v(()=>t("option",{value:1},"\u8DDD\u79BBX",-1)),No=v(()=>t("option",{value:2},"\u8DDD\u79BBY",-1)),Wo=v(()=>t("option",{value:3},"X\u4F18\u5148",-1)),jo=v(()=>t("option",{value:4},"Y\u4F18\u5148",-1)),Qo=[xo,No,Wo,jo],Jo={class:"color-container"},Ko={class:"label-control"},Zo=v(()=>t("span",null,"\u9884\u89C8\xA0",-1)),oe={class:"label-control"},ee=v(()=>t("span",null,"\u6587\u5B57\xA0",-1)),te={class:"label-control"},le=v(()=>t("span",null,"\u80CC\u666F\xA0",-1)),ne=v(()=>t("label",{class:"label-control"},[t("span",null,"\u9884\u8BBE\xA0")],-1)),se={class:"color-tpls"},re=["onClick"],ae={class:"props-container"},ue={key:0,class:"props-content"},ce={class:"label-control"},ie=v(()=>t("span",null,"\u9884\u89C8\xA0",-1)),de={class:"label-control"},pe=v(()=>t("span",null,"\u6587\u5B57\xA0",-1)),ve={class:"label-control"},fe=v(()=>t("span",null,"\u80CC\u666F\xA0",-1)),me={class:"label-control"},be=v(()=>t("span",null,"\u5927\u5C0F\xA0",-1)),_e={class:"label-control"},we=v(()=>t("span",null,"\u5185\u5BB9\xA0",-1)),ye={class:"content"},ge=["onClick","onMousedown","onMouseenter"];function Se(o,e,p,i,n,u){const l=oo("ColorPicker"),d=oo("c-space");return V(),B("div",Ro,[t("div",$o,[t("div",Eo,[t("label",Mo,[Fo,w(t("select",{"onUpdate:modelValue":e[0]||(e[0]=r=>o.state.editor=r)},Do,512),[[x,o.state.editor]])]),t("label",Io,[qo,w(t("input",{type:"number",min:"0","onUpdate:modelValue":e[1]||(e[1]=r=>o.state.selectRange=r),style:{width:"5em"}},null,512),[[g,o.state.selectRange]])]),t("label",Lo,[Yo,w(t("select",{"onUpdate:modelValue":e[2]||(e[2]=r=>o.state.shape=r)},Xo,512),[[x,o.state.shape]])]),t("label",zo,[Oo,w(t("select",{"onUpdate:modelValue":e[3]||(e[3]=r=>o.state.sortType=r)},Qo,512),[[x,o.state.sortType]])]),t("button",{class:"btn",onClick:e[4]||(e[4]=(...r)=>o.onResetClick&&o.onResetClick(...r))},"\u6E05\u7A7A")]),t("div",Jo,[P(d,null,{default:J(()=>[t("label",Ko,[Zo,t("div",{class:"color-unit",style:S([`--color:${o.state.color};--bgcolor:${o.state.bgcolor}`])}," E ",4)]),t("label",oe,[ee,P(l,{modelValue:o.state.color,"onUpdate:modelValue":e[5]||(e[5]=r=>o.state.color=r)},null,8,["modelValue"])]),t("label",te,[le,P(l,{modelValue:o.state.bgcolor,"onUpdate:modelValue":e[6]||(e[6]=r=>o.state.bgcolor=r)},null,8,["modelValue"])]),ne,t("div",se,[(V(!0),B(K,null,Z(o.colors,(r,f)=>(V(),B("div",{key:f,class:eo(["color-unit",{selected:o.state.bgcolor===r.bgcolor}]),style:S([`--color:${r.color};--bgcolor:${r.bgcolor}`]),onClick:m=>o.onSelectColor(r)}," E ",14,re))),128))])]),_:1})]),t("div",ae,[o.selectState.current?(V(),B("div",ue,[P(d,null,{default:J(()=>[t("label",ce,[ie,t("div",{class:"color-unit",style:S([`--color:${o.selectState.current.color};--bgcolor:${o.selectState.current.bgcolor}`])},to(o.selectState.current.txt),5)]),t("label",de,[pe,P(l,{modelValue:o.selectState.current.color,"onUpdate:modelValue":e[7]||(e[7]=r=>o.selectState.current.color=r)},null,8,["modelValue"])]),t("label",ve,[fe,P(l,{modelValue:o.selectState.current.bgcolor,"onUpdate:modelValue":e[8]||(e[8]=r=>o.selectState.current.bgcolor=r)},null,8,["modelValue"])]),t("label",me,[be,w(t("input",{type:"number",style:{width:"4em"},min:"12",step:"1","onUpdate:modelValue":e[9]||(e[9]=r=>o.selectState.current.size=r)},null,512),[[g,o.selectState.current.size]])]),t("label",_e,[we,w(t("input",{type:"text","onUpdate:modelValue":e[10]||(e[10]=r=>o.selectState.current.txt=r)},null,512),[[g,o.selectState.current.txt]])]),t("button",{class:"btn",onClick:e[11]||(e[11]=(...r)=>o.onGridEditorDone&&o.onGridEditorDone(...r))},"\u5B8C\u6210")]),_:1})])):bo("",!0)])]),t("div",ye,[t("div",{class:"grids",style:S(o.gridsStyle)},[(V(!0),B(K,null,Z(o.grids,(r,f)=>(V(),B("div",{key:f,class:eo({selected:r===o.selectState.current}),style:S({fontSize:`${r.size}px`,color:r.color,backgroundColor:r.bgcolor}),onClick:m=>o.onGridClick(m,r),onMousedown:m=>o.onGridMouseDown(m,r),onMouseenter:m=>o.onGridMouseEnter(m,r)},to(r.txt),47,ge))),128))],4)])])}var ke=uo(Po,[["render",Se],["__scopeId","data-v-43f02c41"]]);export{ke as default};
