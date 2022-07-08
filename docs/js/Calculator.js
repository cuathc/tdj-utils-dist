var Ze=Object.defineProperty;var Ee=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var De=(e,t,p)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:p}):e[t]=p,Se=(e,t)=>{for(var p in t||(t={}))xe.call(t,p)&&De(e,p,t[p]);if(Ee)for(var p of Ee(t))et.call(t,p)&&De(e,p,t[p]);return e};import{E as le,d as G,s as H,G as ye,_ as J,o as f,c as F,H as O,A as q,f as V,e as s,k as ee,n as Ce,I as tt,J as ge,K as st,L as nt,M as ot,N as Ve,q as K,a as D,r as S,O as Pe,g as o,i as d,j as W,w as T,B as Z,P as Re,F as R,h as N,p as ue,l as ie,Q as at,R as x,b as te,T as lt,S as a,U as ut,V as M,W as it,v as dt,X as rt,Y as ct,u as pt,C as ce}from"./index.js";import{_ as qe}from"./lodash.js";import{u as vt}from"./useHeroes.js";import mt from"./InputNumber.js";import{a as ft}from"./useTransformTools.js";import{s as _t}from"./data.js";let be=0,Ue=0;const ht=500;function Ie(){const e=Math.floor(new Date().getTime()/1e3);Ue===e?be++:be=0,Ue=e;const t=e.toString(16);return`${(ht<<16|be&255).toString(16)}.${t}`}async function bt(){try{return await le.getAll("calculator")}catch{return[]}}async function $t(){try{await le.clear("calculator")}catch(e){alert(e.message)}}async function yt(e){try{await le.add("calculator",JSON.parse(JSON.stringify(e)))}catch(t){t instanceof Error?console.log(t.message):console.log(t)}}async function ae(e){try{await le.put("calculator",JSON.parse(JSON.stringify(e)))}catch(t){t instanceof Error?console.log(t.message):console.log(t)}}async function Me(e){try{await le.delete("calculator",e)}catch(t){t instanceof Error?console.log(t.message):console.log(t)}}function Ct(){return{w:2438,g:0,a:"403+363",c:20,x:0}}function gt(){return{a:0}}function Ft(){return{att:0,k:0}}function Te(){return{a1:1.5,a2:0,att:"15+10+8",da:"10+10",db:"4+10+20",dc:"0",dx:"0",id:"0",cd:"30",name:"1.5\u6280\u80FD",att2:"0",da2:"0",dx2:"0",defGain:"0"}}function Bt(){return{a1:1.5,a2:0,att:0,id:0,da:0,db:0,dc:0,dx:0,cd:0,att2:0,da2:0,dx2:0,defGain:0}}function wt(){return[Te()]}function kt(){return{hp:"10000",def:"1872",defGain:"15+5",ra:"0",rb:"4+10"}}const Et=G({props:{active:Boolean,label:String,dir:String,color:String,wait:{type:Number,default:500}},emits:["update:active"],setup(e,{emit:t}){const p=H(),n=H({}),i=H(e.active);let C;const b=()=>{const l=p.value.getBoundingClientRect();switch(i.value=!0,t("update:active",i.value),e.dir){case"left":n.value={top:`${l.top+l.height/2}px`,right:`${window.innerWidth-l.left}px`,maxWidth:"100%"};break;case"right":n.value={top:`${l.top+l.height/2}px`,left:`${l.right}px`,maxWidth:"100%"};break;case"top":n.value={bottom:`${window.innerHeight-l.top}px`,left:`${l.left+l.width/2}px`,maxWidth:"100%"};break;default:n.value={top:`${l.bottom}px`,left:`${l.left+l.width/2}px`,maxWidth:"100%"}}},E=()=>{C=setTimeout(b,e.wait)},A=()=>{clearTimeout(C),i.value=!1,t("update:active",i.value)};return ye(()=>e.active,v=>{i.value=v}),{el:p,style:n,tActive:i,onEnter:E,onOut:A}}});function Dt(e,t,p,n,i,C){return f(),F("div",{ref:"el",class:ee(["c-tooltip",{active:e.tActive}]),onMouseenter:t[0]||(t[0]=(...b)=>e.onEnter&&e.onEnter(...b)),onMouseout:t[1]||(t[1]=(...b)=>e.onOut&&e.onOut(...b))},[O(e.$slots,"label",{},()=>[q(V(e.label),1)]),s("div",{class:ee(["c-tooltip-inner",e.dir?`c-tooltip-${e.dir}`:"c-tooltip-bottom",e.color?`c-tooltip-${e.color}`:""]),style:Ce(e.style)},[O(e.$slots,"default")],6)],34)}var He=J(Et,[["render",Dt]]);const St=G({components:{Divider:tt,Tooltip:He,CalcInput:ge,IconUp:st,IconDown:nt,IconClose:ot,IconCopy:Ve},props:{panel:{type:Object,required:!0},state:{type:Object,required:!0},enemyState:{type:Object,required:!0},itemState:{type:Object,required:!0},showUp:Boolean,showDown:Boolean},emits:["update:itemState","close","up","down","copy"],setup(e,{emit:t}){const p=K({editor:!1,name:""}),n=(u,w)=>{if(u==="name")return;const P=e.itemState;switch(u){case"a1":case"a2":typeof w=="number"&&(P[u]=w);break;default:typeof w=="string"&&(P[u]=w)}t("update:itemState",P)},i=K(Bt()),C=D({set:u=>n("a1",u),get:()=>e.itemState.a1}),b=D({set:u=>n("a2",u),get:()=>e.itemState.a2}),E=D({set:u=>n("att",u),get:()=>e.itemState.att}),A=D({set:u=>n("id",u),get:()=>e.itemState.id}),v=D({set:u=>n("da",u),get:()=>e.itemState.da}),l=D({set:u=>n("db",u),get:()=>e.itemState.db}),m=D({set:u=>n("dc",u),get:()=>e.itemState.dc}),_=D({set:u=>n("dx",u),get:()=>e.itemState.dx}),r=D({set:u=>n("cd",u),get:()=>e.itemState.cd}),c=D({set:u=>n("att2",u),get:()=>e.itemState.att2}),U=D({set:u=>n("da2",u),get:()=>e.itemState.da2}),j=D({set:u=>n("dx2",u),get:()=>e.itemState.dx2}),z=D({set:u=>n("defGain",u),get:()=>e.itemState.defGain}),B=K({a1:C,a2:b,att:E,da:v,db:l,dc:m,dx:_,id:A,cd:r,att2:c,da2:U,dx2:j,defGain:z}),$=D(()=>{const{state:u}=e,w=(100+i.att)/100;return Math.ceil(u.att*w)}),h=D(()=>{const{state:u}=e,w=(100+i.att+i.att2)/100;return Math.ceil(u.att*w)}),I=()=>{const{state:u,enemyState:w}=e,P=(100+u.k)/100,_e=(100+i.da-w.ra)/100,Y=(100+i.da+i.da2-w.ra)/100,oe=(100+i.db-w.rb)/100,he=(100+i.dc)/100,Ke=(100+i.dx)/100,Ge=(100+i.dx+i.dx2)/100,Fe=(100+i.cd)/100,Be=(100-i.id)/100,je=(100+w.defGain)/100,Qe=(100+w.defGain+i.defGain)/100,Je=Math.max(0,Math.max(0,w.def*je)*Be),Le=Math.max(0,Math.max(0,w.def*Qe)*Be),ze=Math.max(1,$.value*P-Je),We=Math.max(1,h.value*P-Le),we=ze*C.value*_e*oe*Ke,Xe=Math.ceil(we*Fe),ke=We*b.value*Y*oe*he*Ge,Ye=Math.ceil(ke*Fe);return{r01:Math.ceil(we),r01c:Xe,r02:Math.ceil(ke),r02c:Ye}},Q=D(()=>I().r01),se=D(()=>I().r01c),ne=D(()=>I().r02),pe=D(()=>I().r02c);I();function ve(){confirm(`\u786E\u8BA4\u8981\u5220\u9664\u6280\u80FD\u6A21\u677F"${e.itemState.name}"\u5417\uFF1F`)&&t("close")}function me(){p.editor=!0,p.name=e.itemState.name}function fe(){const u=p.name;if(p.editor=!1,p.name="",!u)return;const w=e.itemState;w.name=u,t("update:itemState",w)}function re(){t("up")}function g(){t("down")}function y(){t("copy")}return{vars:p,values:B,result:i,satt:$,r01:Q,r01c:se,r02:ne,r02c:pe,onClose:ve,onRename:me,onNameEnter:fe,onUp:re,onDown:g,onCopy:y}}}),L=e=>(ue("data-v-a928d4b0"),e=e(),ie(),e),Ut={class:"row"},It={class:"col-item"},Mt=L(()=>s("div",{class:"label"},"\u6280\u80FD\u3001\u666E\u653B",-1)),At=q(" \u6280\u80FD\u3001\u666E\u653B\u500D\u7387 "),Vt={class:"input-group"},Pt=["step"],Rt=L(()=>s("div",{class:"input-ext"},"\u500D",-1)),qt={class:"label"},Tt={class:"input-group"},Ht=L(()=>s("div",{style:{clear:"both"}},null,-1)),Nt={class:"col-item"},Ot=L(()=>s("div",{class:"label"},"\u8FDE\u51FB\u3001\u8FFD\u51FB\u3001\u53CD\u51FB",-1)),Kt=q(" \u8FDE\u51FB\u3001\u8FFD\u51FB\u3001\u53CD\u51FB\u500D\u7387 "),Gt={class:"input-group"},jt=["step"],Qt=L(()=>s("div",{class:"input-ext"},"\u500D",-1)),Jt={class:"label"},Lt={class:"input-group"},zt={class:"col-item"},Wt=L(()=>s("div",{class:"label"},"\u6700\u7EC8\u653B\u51FB",-1)),Xt={class:"static-control text-center"},Yt={class:"darkgold"},Zt=L(()=>s("div",{style:{clear:"both"}},null,-1)),xt={class:"label"},es={class:"bold darkgold"},ts=L(()=>s("span",{class:"bold red"},"(\u66B4\u51FB)",-1)),ss={class:"static-control text-center"},ns={class:"bold darkgold"},os={class:"bold red"},as={class:"label bold"},ls={class:"static-control text-center"},us={class:"bold darkgold"},is={key:0,class:"bold red"};function ds(e,t,p,n,i,C){const b=S("IconCopy"),E=S("IconUp"),A=S("IconDown"),v=S("IconClose"),l=S("Divider"),m=S("Tooltip"),_=S("CalcInput"),r=Pe("autofocus");return f(),F(R,null,[o(l,{orientation:"left"},{action:d(()=>[s("span",{onClick:t[4]||(t[4]=(...c)=>e.onCopy&&e.onCopy(...c))},[o(b,{class:"close"})]),e.showUp?(f(),F("span",{key:0,onClick:t[5]||(t[5]=(...c)=>e.onUp&&e.onUp(...c))},[o(E,{class:"close"})])):W("",!0),e.showDown?(f(),F("span",{key:1,onClick:t[6]||(t[6]=(...c)=>e.onDown&&e.onDown(...c))},[o(A,{class:"close"})])):W("",!0),s("span",{onClick:t[7]||(t[7]=(...c)=>e.onClose&&e.onClose(...c))},[o(v,{class:"close"})])]),default:d(()=>[e.vars.editor?T((f(),F("input",{key:0,class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=c=>e.vars.name=c),onKeypress:t[1]||(t[1]=Re((...c)=>e.onNameEnter&&e.onNameEnter(...c),["enter"])),onBlur:t[2]||(t[2]=(...c)=>e.onNameEnter&&e.onNameEnter(...c))},null,544)),[[Z,e.vars.name],[r]]):(f(),F("span",{key:1,class:"calc-item-title",onClick:t[3]||(t[3]=(...c)=>e.onRename&&e.onRename(...c))},V(e.itemState.name||"\u6A21\u677F"),1))]),_:1}),s("div",Ut,[s("div",It,[o(m,{dir:"top"},{label:d(()=>[Mt]),default:d(()=>[At]),_:1}),s("div",Vt,[T(s("input",{type:"number",class:"input",min:"0",step:.1,"onUpdate:modelValue":t[8]||(t[8]=c=>e.values.a1=c)},null,8,Pt),[[Z,e.values.a1,void 0,{number:!0}]]),Rt])]),(f(),F(R,null,N([{name:"att",label:"\u653B\u51FB%",tip:"\u4F5C\u7528\u4E8E\u6240\u6709\u60C5\u51B5"},{name:"da",label:"A\u7C7B\u589E\u4F24%",tip:"\u9970\u54C1\u3001\u5404\u7C7Bbuff\u3001\u5929\u8D4B"},{name:"db",label:"B\u7C7B\u589E\u4F24%",tip:"\u661F\u8000\u3001\u661F\u76D8\u3001\u8BCD\u6761"},{name:"dx",label:"X\u7C7B\u589E\u4F24%",tip:"\u6700\u7EC8\u4FEE\u6B63\uFF0C\u5982\u4E00\u5B57\u7535\u65A9"},{name:"id",label:"\u7A7F\u900F%",tip:"\u65E0\u89C6\u9632\u5FA1"},{name:"cd",label:"\u66B4\u4F24%",tip:"\u66B4\u51FB\u4F24\u5BB3"}],c=>s("div",{class:"col-item",key:c.name},[o(m,{dir:"top"},{label:d(()=>[s("div",qt,V(c.label),1)]),default:d(()=>[q(" "+V(c.tip),1)]),_:2},1024),s("div",Tt,[o(_,{class:"input",modelValue:e.values[c.name],"onUpdate:modelValue":U=>e.values[c.name]=U,result:e.result[c.name],"onUpdate:result":U=>e.result[c.name]=U},null,8,["modelValue","onUpdate:modelValue","result","onUpdate:result"])])])),64)),Ht,s("div",Nt,[o(m,{dir:"top"},{label:d(()=>[Ot]),default:d(()=>[Kt]),_:1}),s("div",Gt,[T(s("input",{type:"number",class:"input",min:"0",step:.1,"onUpdate:modelValue":t[9]||(t[9]=c=>e.values.a2=c)},null,8,jt),[[Z,e.values.a2,void 0,{number:!0}]]),Qt])]),(f(),F(R,null,N([{name:"dc",label:"C\u7C7B\u589E\u4F24%",tip:"\u8FDE\u51FB\u3001\u8FFD\u51FB\u3001\u53CD\u51FB\u589E\u4F24"},{name:"att2",label:"\u653B\u51FB\u4FEE\u6B63%",tip:"\u6389\u8840\u540E\u653B\u51FB\u4FEE\u6B63\uFF0C\u4E00\u822C\u5728\u8FFD\u51FB\u6216\u53CD\u51FB\u65F6"},{name:"da2",label:"\u4F24\u5BB3\u4FEE\u6B63%",tip:"\u6389\u8840\u540E\u4F24\u5BB3\u4FEE\u6B63\uFF0C\u4E00\u822C\u5728\u8FFD\u51FB\u6216\u53CD\u51FB\u65F6"},{name:"defGain",label:"\u9632\u5FA1\u4FEE\u6B63%",tip:"\u6389\u8840\u540E\u9632\u5FA1\u4FEE\u6B63\uFF0C\u4E00\u822C\u5728\u8FFD\u51FB\u6216\u8FDE\u51FB\u65F6"},{name:"dx2",label:"X\u7C7B\u4FEE\u6B63%",tip:"\u6389\u8840\u540E\u9632\u5FA1\u4FEE\u6B63\uFF0C\u4E00\u822C\u5728\u8FFD\u51FB\u6216\u8FDE\u51FB\u65F6"}],c=>s("div",{class:"col-item",key:c.name},[o(m,{dir:"top"},{label:d(()=>[s("div",Jt,V(c.label),1)]),default:d(()=>[q(" "+V(c.tip),1)]),_:2},1024),s("div",Lt,[o(_,{class:"input",modelValue:e.values[c.name],"onUpdate:modelValue":U=>e.values[c.name]=U,result:e.result[c.name],"onUpdate:result":U=>e.result[c.name]=U},null,8,["modelValue","onUpdate:modelValue","result","onUpdate:result"])])])),64)),s("div",zt,[Wt,s("div",Xt,[s("span",Yt,V(e.satt),1)])]),Zt,(f(!0),F(R,null,N([{label:"\u4E00\u6BB5\u4F24\u5BB3",v:e.r01,v2:e.r01c},{label:"\u4E8C\u6BB5\u4F24\u5BB3",v:e.r02,v2:e.r02c}],(c,U)=>(f(),F("div",{class:"col-item",key:U},[s("div",xt,[s("span",es,V(c.label),1),ts]),s("div",ss,[s("span",ns,V(c.v),1),s("span",os,"("+V(c.v2)+")",1)])]))),128)),(f(!0),F(R,null,N([{label:"\u4E0D\u66B4\u51FB",value:e.r01+e.r02},{label:"\u4E00\u6BB5\u66B4\u51FB",value:e.r01c+e.r02},{label:"\u4E8C\u6BB5\u66B4\u51FB",value:e.r01+e.r02c},{label:"\u5168\u66B4\u51FB",value:e.r01c+e.r02c}],(c,U)=>(f(),F("div",{class:"col-item",key:U},[s("div",as,V(c.label),1),s("div",ls,[s("span",us,V(c.value),1),(+e.enemyState.hp||0)<=c.value?(f(),F("span",is," \u51FB\u6740 ")):W("",!0)])]))),128))])],64)}var rs=J(St,[["render",ds],["__scopeId","data-v-a928d4b0"]]);const cs=["onClick"],ps=G({props:{pos:{default:"lt"}},setup(e){const t=H(!1),p=()=>{t.value=!0},n=()=>{t.value=!1};return window.addEventListener("click",n,!1),at(()=>{window.removeEventListener("click",n,!1)}),(i,C)=>(f(),F("div",{class:ee(["dropdown",[{active:t.value}]]),onClick:x(p,["stop"])},[O(i.$slots,"default",{},void 0,!0),s("div",{class:ee(["dropdown-popover",["dropdown-"+e.pos]]),onClick:C[0]||(C[0]=x(()=>{},["stop"]))},[O(i.$slots,"popover",{onClose:n},void 0,!0)],2)],10,cs))}});var Ne=J(ps,[["__scopeId","data-v-782cbcbc"]]);Ne.install=e=>{e.component("dropdown",Oe)};const Oe=Ne;const vs=G({components:{CalcItem:rs,CalcInput:ge,Tooltip:He,Dropdown:Oe},props:{data:{type:Object,required:!0}},emits:["update:data"],setup(e,{emit:t}){const p=D(()=>e.data.basic),n=D(()=>e.data.state),i=D(()=>e.data.enemyState),C=D(()=>e.data.items),b=K(gt()),E=K({hp:0,def:0,defGain:0,ra:0,rb:0}),A=[{label:"\u9762\u677F\u653B\u51FB",name:"w",step:1,align:"right"},{label:"\u9B42\u77F3\u653B\u51FB",name:"a",step:1},{label:"\u8BCD\u6761\u653B\u51FB%",name:"c",step:1},{label:"\u661F\u4E4B\u6676\u653B\u51FB",name:"x",step:1}],v=[{label:"\u6C14\u8840",name:"hp",step:1},{label:"\u9632\u5FA1",name:"def",step:1},{label:"\u9632\u5FA1\u4FEE\u6B63%",name:"defGain",step:1},{label:"A\u7C7B\u514D\u4F24%",name:"ra",step:1},{label:"B\u7C7B\u514D\u4F24%",name:"rb",step:1}],l=()=>{const $=p.value.c/100;p.value.g=Math.ceil(b.a+p.value.w*$+p.value.x),n.value.att=p.value.w+p.value.g},m=async()=>{t("update:data",e.data)},_=($,h)=>{h==="panel"&&l(),m()},r=($,h)=>{const I=e.data.items;!I||(I[h]=$,m())},c=()=>{const $=e.data.items;!$||($.push(Te()),m())},U=$=>{const h=e.data.items;!h||(h.splice($,1),m())},j=$=>{const h=e.data.items;if(!h)return;const I=h[$],Q=h[$-1];h[$-1]=I,h[$]=Q,m()},z=$=>{const h=e.data.items;if(!h)return;const I=h[$],Q=h[$+1];h[$+1]=I,h[$]=Q,m()},B=$=>{const h=e.data.items;if(!h)return;const I=h[$];h.push(qe.cloneDeep(I)),m()};return ye(()=>[e.data.basic.w],()=>{l()}),{panel:p,state:n,enemyState:i,panelResult:b,enemyStateResult:E,panelModels:A,enemyModels:v,update:_,items:C,updateItemState:r,addItem:c,delItem:U,upItem:j,downItem:z,copyItem:B}}}),X=e=>(ue("data-v-793a869e"),e=e(),ie(),e),ms=X(()=>s("div",{class:"heading"},[s("div",{class:"heading-title"},"\u57FA\u672C\u53C2\u6570")],-1)),fs={class:"row"},_s={class:"label"},hs={class:"input-group"},bs=["step","onUpdate:modelValue","onChange"],$s=["value"],ys={class:"col-item"},Cs=X(()=>s("div",{class:"label"},"\u8FDB\u56FE\u653B\u51FB",-1)),gs={class:"static-control text-center"},Fs={class:"darkgold"},Bs={class:"col-item"},ws=X(()=>s("div",{class:"label"},"\u514B\u5236%",-1)),ks=q(" \u514B\u523630%"),Es=X(()=>s("br",null,null,-1)),Ds=q("\u88AB\u514B\u5236-25%"),Ss=X(()=>s("br",null,null,-1)),Us=q("\u6FC0\u836150% "),Is=["onClick"],Ms=X(()=>s("div",{class:"heading"},[s("div",{class:"heading-title"},"\u654C\u4EBA\u9762\u677F")],-1)),As={class:"row"},Vs={class:"label"},Ps={class:"input-group"},Rs={key:0,class:"input-ext"},qs={class:"heading"},Ts=X(()=>s("div",{class:"heading-title"},"\u6280\u80FD\u6A21\u677F",-1)),Hs={class:"heading-actions"};function Ns(e,t,p,n,i,C){const b=S("CalcInput"),E=S("Tooltip"),A=S("Dropdown"),v=S("CalcItem");return f(),F("div",null,[ms,s("div",fs,[(f(!0),F(R,null,N(e.panelModels,l=>(f(),F("div",{class:"col-item",key:l.name},[s("div",_s,V(l.label),1),s("div",hs,[l.name in e.panelResult?(f(),te(b,{key:0,modelValue:e.panel[l.name],"onUpdate:modelValue":m=>e.panel[l.name]=m,result:e.panelResult[l.name],"onUpdate:result":m=>e.panelResult[l.name]=m,onChange:m=>e.update(l.name,"panel")},null,8,["modelValue","onUpdate:modelValue","result","onUpdate:result","onChange"])):T((f(),F("input",{key:1,type:"number",class:"input",style:Ce({textAlign:l.align}),min:"0",step:l.step,"onUpdate:modelValue":m=>e.panel[l.name]=m,onChange:m=>e.update(l.name,"panel")},null,44,bs)),[[Z,e.panel[l.name],void 0,{number:!0}]]),l.name==="w"?(f(),F("input",{key:2,class:"input green",readonly:"",style:{textAlign:"left"},value:`+${e.panel.g}`},null,8,$s)):W("",!0)])]))),128)),s("div",ys,[Cs,s("div",gs,[s("span",Fs,V(e.state.att),1)])]),s("div",Bs,[o(E,{dir:"top"},{label:d(()=>[ws]),default:d(()=>[ks,Es,Ds,Ss,Us]),_:1}),s("div",null,[o(A,null,{popover:d(({onClose:l})=>[s("div",{class:"list",onClick:()=>{l(),e.update("k","state")}},[s("div",{class:"list-item",onClick:t[2]||(t[2]=m=>e.state.k=0)},"\u666E\u901A"),s("div",{class:"list-item",onClick:t[3]||(t[3]=m=>e.state.k=30)},"\u514B\u5236"),s("div",{class:"list-item",onClick:t[4]||(t[4]=m=>e.state.k=-25)},"\u88AB\u514B\u5236"),s("div",{class:"list-item",onClick:t[5]||(t[5]=m=>e.state.k=50)},"\u6FC0\u8361")],8,Is)]),default:d(()=>[T(s("input",{class:"input",type:"number","onUpdate:modelValue":t[0]||(t[0]=l=>e.state.k=l),onChange:t[1]||(t[1]=l=>e.update("k","state")),list:"d1"},null,544),[[Z,e.state.k,void 0,{number:!0}]])]),_:1})])])]),Ms,s("div",As,[(f(!0),F(R,null,N(e.enemyModels,l=>(f(),F("div",{class:"col-item",key:l.name},[s("div",Vs,V(l.label),1),s("div",Ps,[o(b,{modelValue:e.enemyState[l.name],"onUpdate:modelValue":m=>e.enemyState[l.name]=m,result:e.enemyStateResult[l.name],"onUpdate:result":m=>e.enemyStateResult[l.name]=m,onChange:m=>e.update(l.name)},null,8,["modelValue","onUpdate:modelValue","result","onUpdate:result","onChange"]),l.precent?(f(),F("div",Rs,"%")):W("",!0)])]))),128))]),s("div",qs,[Ts,s("div",Hs,[s("div",{class:"btn btn-primary btn-sm",onClick:t[6]||(t[6]=(...l)=>e.addItem&&e.addItem(...l))},"\u6DFB\u52A0")])]),(f(!0),F(R,null,N(e.items,(l,m)=>(f(),te(v,{key:l,panel:e.panel,state:e.state,enemyState:e.enemyStateResult,itemState:l,showUp:m>0,showDown:e.items&&m<e.items.length-1,"onUpdate:itemState":_=>e.updateItemState(_,m),onClose:_=>e.delItem(m),onUp:_=>e.upItem(m),onDown:_=>e.downItem(m),onCopy:_=>e.copyItem(m)},null,8,["panel","state","enemyState","itemState","showUp","showDown","onUpdate:itemState","onClose","onUp","onDown","onCopy"]))),128))])}var Os=J(vs,[["render",Ns],["__scopeId","data-v-793a869e"]]);const Ks=G({props:{show:Boolean,list:Array,class:String,height:String},emits:["click","close","update:show"],setup(e,{emit:t}){return{wrapClass:D(()=>["c-action-sheet-wrapper",e.class,{show:e.show}]),onClick:(C,b)=>{t("click",{item:C,index:b}),t("close",!1)},onClose:()=>{t("update:show",!1),t("close",!1)}}}}),Gs={class:"c-action-sheet-section"},js={class:"c-action-sheet-extra"},Qs={class:"c-action-sheet-list"},Js=["onClick"];function Ls(e,t,p,n,i,C){return f(),te(lt,{to:"body"},[s("div",{class:ee(e.wrapClass)},[s("div",{class:"c-action-sheet-mask",onClick:t[0]||(t[0]=(...b)=>e.onClose&&e.onClose(...b))}),s("div",Gs,[s("div",{class:"c-action-sheet-body",style:Ce({maxHeight:e.height})},[s("div",js,[O(e.$slots,"extra")]),s("div",Qs,[(f(!0),F(R,null,N(e.list,(b,E)=>(f(),F("div",{class:"c-action-sheet-item",key:E,onClick:A=>e.onClick(b,E)},[O(e.$slots,"default",{record:b})],8,Js))),128))])],4)])],2)])}var $e=J(Ks,[["render",Ls]]);$e.install=e=>{e.component("action-sheet",$e)};const zs={class:"hero-item"},Ws=["src","alt","title"],Xs={class:"hero-item-label"},Ys=G({props:{show:{type:Boolean}},emits:["click","update:show"],setup(e,{emit:t}){const{heroes:p,getHeroIcon:n}=vt(),i=C=>{t("click",C)};return(C,b)=>(f(),te(a($e),{class:"hero-select",show:e.show,list:a(p),height:"80vh",onClick:i,"onUpdate:show":b[0]||(b[0]=E=>C.$emit("update:show",E))},{extra:d(()=>[O(C.$slots,"extra")]),default:d(({record:E})=>[s("div",zs,[s("img",{src:a(n)(E),alt:E.name,title:E.name,width:"128",height:"128"},null,8,Ws),s("div",Xs,V(E.name),1)])]),_:3},8,["show","list"]))}});const Zs=G({props:{header:String,activeKey:Boolean},emits:["update:activeKey","toggle"],setup(e,{emit:t}){const p=D({get:()=>e.activeKey,set:i=>{t("update:activeKey",i)}});return{active:p,toggle:()=>{const i=!p.value;p.value=i,t("toggle",i)}}}}),xs=e=>(ue("data-v-2b5ca870"),e=e(),ie(),e),en=xs(()=>s("div",{class:"panel-icon"},[s("svg",{width:"16",height:"16",viewBox:"-16 -16 32 32"},[s("path",{d:"M6 0 l-12 -12 l0 2 l10 10 l-10 10 l0 2 l12 -12z",fill:"currentColor"})])],-1)),tn={class:"panel-title"},sn={class:"panel-body"},nn={class:"panel-content"};function on(e,t,p,n,i,C){return f(),F("div",{class:ee(["panel",{active:e.active}])},[s("div",{class:"panel-header",onClick:t[1]||(t[1]=(...b)=>e.toggle&&e.toggle(...b))},[en,s("div",tn,[O(e.$slots,"header",{},()=>[q(V(e.header)+"\xA0",1)],!0)]),s("div",{class:"panel-actions",onClick:t[0]||(t[0]=x(()=>{},["stop"]))},[O(e.$slots,"actions",{},void 0,!0)])]),s("div",sn,[s("div",nn,[O(e.$slots,"default",{},void 0,!0)])])],2)}var an=J(Zs,[["render",on],["__scopeId","data-v-2b5ca870"]]);const Ae=(e,t)=>{const p=URL.createObjectURL(e),n=document.createElement("a");n.href=p,n.target="_blank",n.download=t,n.click(),URL.revokeObjectURL(p)};function ln(){const e=H(),t=K({qixue:0,patt:0,pdef:0,matt:0,mdef:0,huixin:0,hsQixue:0,hsPatt:0,hsPdef:0,hsMatt:0,hsMdef:0,hsHuixin:0,xQixue:0,xPatt:0,xPdef:0,xMatt:0,xMdef:0,xHuixin:0,cQixue:"40+5+5+5",cPatt:"0",cPdef:"0",cMatt:"0",cMdef:"0",cHuixin:"0",rQixue:0,rPatt:0,rPdef:0,rMatt:0,rMdef:0,rHuixin:0}),p=D(()=>{const n={qixue:0,patt:0,pdef:0,matt:0,mdef:0,huixin:0};e.value&&(n.qixue=e.value.t[0]+e.value.d[0]+e.value.h[0],n.patt=e.value.t[1]+e.value.d[1]+e.value.h[1],n.matt=e.value.t[2]+e.value.d[2]+e.value.h[2],n.pdef=e.value.t[3]+e.value.d[3]+e.value.h[3],n.mdef=e.value.t[4]+e.value.d[4]+e.value.h[4]);const i={qixue:(100+t.hsQixue)/100,patt:(100+t.hsPatt)/100,pdef:(100+t.hsPdef)/100,matt:(100+t.hsMatt)/100,mdef:(100+t.hsMdef)/100,huixin:(100+t.hsHuixin)/100},C={qixue:(100+t.rQixue)/100,patt:(100+t.rPatt)/100,pdef:(100+t.rPdef)/100,matt:(100+t.rMatt)/100,mdef:(100+t.rMdef)/100,huixin:(100+t.rHuixin)/100};return{qixue:Math.round((t.qixue*i.qixue+n.qixue+t.xQixue)*C.qixue),patt:Math.round((t.patt*i.patt+n.patt+t.xPatt)*C.patt),pdef:Math.round((t.pdef*i.pdef+n.pdef+t.xPdef)*C.pdef),matt:Math.round((t.matt*i.matt+n.matt+t.xMatt)*C.matt),mdef:Math.round((t.mdef*i.mdef+n.mdef+t.xMdef)*C.mdef),huixin:Math.round((t.huixin*i.huixin+n.huixin+t.xHuixin)*C.huixin)}});return{stone:e,state:t,ckValue:p}}const k=e=>(ue("data-v-fb746992"),e=e(),ie(),e),un={class:"transform-tools-popover"},dn={class:"transform-tools-popover-toolbar"},rn={class:"transform-tools-popover-content"},cn={class:"grid-group"},pn={class:"grid-group-item"},vn=k(()=>s("div",{class:"input-group-title"},"\u57FA\u7840",-1)),mn={class:"grids"},fn=k(()=>s("label",{class:"input-label"},"\u6C14\u8840",-1)),_n=k(()=>s("label",{class:"input-label"},"\u7269\u653B",-1)),hn=k(()=>s("label",{class:"input-label"},"\u7269\u9632",-1)),bn=k(()=>s("label",{class:"input-label"},"\u6CD5\u653B",-1)),$n=k(()=>s("label",{class:"input-label"},"\u6CD5\u9632",-1)),yn=k(()=>s("label",{class:"input-label"},"\u4F1A\u5FC3",-1)),Cn={class:"grid-group-item"},gn={class:"input-group-title"},Fn=k(()=>s("span",null,"\u9B42\u77F3",-1)),Bn=k(()=>s("option",{value:void 0},"\u65E0",-1)),wn=["value"],kn={class:"grids"},En=k(()=>s("label",{class:"input-label"},"\u6C14\u8840%",-1)),Dn=k(()=>s("label",{class:"input-label"},"\u7269\u653B%",-1)),Sn=k(()=>s("label",{class:"input-label"},"\u7269\u9632%",-1)),Un=k(()=>s("label",{class:"input-label"},"\u6CD5\u653B%",-1)),In=k(()=>s("label",{class:"input-label"},"\u6CD5\u9632%",-1)),Mn={class:"grid-group-item"},An=k(()=>s("div",{class:"input-group-title"},"\u661F\u4E4B\u6676",-1)),Vn={class:"grids"},Pn=k(()=>s("label",{class:"input-label"},"\u6C14\u8840",-1)),Rn=k(()=>s("label",{class:"input-label"},"\u7269\u653B",-1)),qn=k(()=>s("label",{class:"input-label"},"\u7269\u9632",-1)),Tn=k(()=>s("label",{class:"input-label"},"\u6CD5\u653B",-1)),Hn=k(()=>s("label",{class:"input-label"},"\u6CD5\u9632",-1)),Nn=k(()=>s("label",{class:"input-label"},"\u4F1A\u5FC3",-1)),On={class:"grid-group-item"},Kn=k(()=>s("div",{class:"input-group-title"},"\u4FEE\u6B63",-1)),Gn={class:"grids"},jn={class:"input-label"},Qn={class:"grid-group-item"},Jn=k(()=>s("div",{class:"input-group-title"},"\u53C2\u8003",-1)),Ln={class:"grids"},zn=k(()=>s("label",{class:"input-label"},"\u6C14\u8840",-1)),Wn=k(()=>s("label",{class:"input-label"},"\u7269\u653B",-1)),Xn=k(()=>s("label",{class:"input-label"},"\u7269\u9632",-1)),Yn=k(()=>s("label",{class:"input-label"},"\u6CD5\u653B",-1)),Zn=k(()=>s("label",{class:"input-label"},"\u6CD5\u9632",-1)),xn=k(()=>s("label",{class:"input-label"},"\u4F1A\u5FC3",-1)),eo=G({props:{show:{type:Boolean},data:null},emits:["reference","update:show"],setup(e,{emit:t}){const p=e,{state:n,ckValue:i,stone:C}=ln(),b=[{t:"\u6C14\u8840%",c:"cQixue",r:"rQixue"},{t:"\u7269\u653B%",c:"cPatt",r:"rPatt"},{t:"\u7269\u9632%",c:"cPdef",r:"rPdef"},{t:"\u6CD5\u653B%",c:"cMatt",r:"rMatt"},{t:"\u6CD5\u9632%",c:"cMdef",r:"rMdef"},{t:"\u4F1A\u5FC3%",c:"cHuixin",r:"rHuixin"}],E=()=>{t("reference")};return ye(()=>Se({},p.data),A=>{n.qixue=A.qixue,n.patt=A.patt,n.pdef=A.pdef,n.matt=A.matt,n.mdef=A.mdef,n.huixin=A.huixin}),(A,v)=>{const l=S("c-col"),m=S("c-row"),_=S("c-space");return T((f(),F("div",un,[s("div",dn,[o(m,{flex:"",middle:"",gutter:0},{default:d(()=>[o(l,{flex:"1 1 auto"},{default:d(()=>[s("button",{class:"btn btn-sm btn-link",onClick:E},"\u53C2\u8003")]),_:1}),o(l,null,{default:d(()=>[s("span",{class:"transform-tools-popover-close",onClick:v[0]||(v[0]=r=>t("update:show",!1))}," \xD7 ")]),_:1})]),_:1})]),s("div",rn,[s("div",cn,[s("div",pn,[vn,s("div",mn,[o(_,null,{default:d(()=>[fn,o(a(M),{value:a(n).qixue,"onUpdate:value":v[1]||(v[1]=r=>a(n).qixue=r)},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[_n,o(a(M),{value:a(n).patt,"onUpdate:value":v[2]||(v[2]=r=>a(n).patt=r)},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[hn,o(a(M),{value:a(n).pdef,"onUpdate:value":v[3]||(v[3]=r=>a(n).pdef=r)},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[bn,o(a(M),{value:a(n).matt,"onUpdate:value":v[4]||(v[4]=r=>a(n).matt=r)},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[$n,o(a(M),{value:a(n).mdef,"onUpdate:value":v[5]||(v[5]=r=>a(n).mdef=r)},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[yn,o(a(M),{value:a(n).huixin,"onUpdate:value":v[6]||(v[6]=r=>a(n).huixin=r)},null,8,["value"])]),_:1})])]),s("div",Cn,[s("div",gn,[o(_,null,{default:d(()=>[Fn,T(s("select",{class:"input input-select","onUpdate:modelValue":v[7]||(v[7]=r=>it(C)?C.value=r:null)},[Bn,(f(!0),F(R,null,N(a(_t),(r,c)=>(f(),F("option",{key:c,value:r},V(r.name),9,wn))),128))],512),[[dt,a(C)]])]),_:1})]),s("div",kn,[o(_,null,{default:d(()=>[En,o(a(M),{value:a(n).hsQixue,"onUpdate:value":v[8]||(v[8]=r=>a(n).hsQixue=r)},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Dn,o(a(M),{value:a(n).hsPatt,"onUpdate:value":v[9]||(v[9]=r=>a(n).hsPatt=r)},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Sn,o(a(M),{value:a(n).hsPdef,"onUpdate:value":v[10]||(v[10]=r=>a(n).hsPdef=r)},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Un,o(a(M),{value:a(n).hsMatt,"onUpdate:value":v[11]||(v[11]=r=>a(n).hsMatt=r)},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[In,o(a(M),{value:a(n).hsMdef,"onUpdate:value":v[12]||(v[12]=r=>a(n).hsMdef=r)},null,8,["value"])]),_:1})])]),s("div",Mn,[An,s("div",Vn,[o(_,null,{default:d(()=>[Pn,o(a(M),{value:a(n).xQixue,"onUpdate:value":v[13]||(v[13]=r=>a(n).xQixue=r),min:0,max:456,placeholder:"0~456"},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Rn,o(a(M),{value:a(n).xPatt,"onUpdate:value":v[14]||(v[14]=r=>a(n).xPatt=r),min:0,max:202,placeholder:"0~202"},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[qn,o(a(M),{value:a(n).xPdef,"onUpdate:value":v[15]||(v[15]=r=>a(n).xPdef=r),min:0,max:150,placeholder:"0~150"},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Tn,o(a(M),{value:a(n).xMatt,"onUpdate:value":v[16]||(v[16]=r=>a(n).xMatt=r),min:0,max:202,placeholder:"0~202"},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Hn,o(a(M),{value:a(n).xMdef,"onUpdate:value":v[17]||(v[17]=r=>a(n).xMdef=r),min:0,max:150,placeholder:"0~150"},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Nn,o(a(M),{value:a(n).xHuixin,"onUpdate:value":v[18]||(v[18]=r=>a(n).xHuixin=r),min:0,max:104,placeholder:"0~104"},null,8,["value"])]),_:1})])]),s("div",On,[Kn,s("div",Gn,[(f(),F(R,null,N(b,(r,c)=>o(_,{key:c},{default:d(()=>[s("label",jn,V(r.t),1),o(a(ge),{modelValue:a(n)[r.c],"onUpdate:modelValue":U=>a(n)[r.c]=U,result:a(n)[r.r],"onUpdate:result":U=>a(n)[r.r]=U},null,8,["modelValue","onUpdate:modelValue","result","onUpdate:result"])]),_:2},1024)),64))])]),s("div",Qn,[Jn,s("div",Ln,[o(_,null,{default:d(()=>[zn,o(a(M),{readonly:"",value:a(i).qixue},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Wn,o(a(M),{readonly:"",value:a(i).patt},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Xn,o(a(M),{readonly:"",value:a(i).pdef},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Yn,o(a(M),{readonly:"",value:a(i).matt},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[Zn,o(a(M),{readonly:"",value:a(i).mdef},null,8,["value"])]),_:1}),o(_,null,{default:d(()=>[xn,o(a(M),{readonly:"",value:a(i).huixin},null,8,["value"])]),_:1})])])])])],512)),[[ut,e.show]])}}});var to=J(eo,[["__scopeId","data-v-fb746992"]]);const so=G({components:{Calculator:Os,CollapsePanel:an,InputNumber:mt,HeroSelect:Ys,IconCopy:Ve,IconEdit:rt,TransformToolsModal:to},setup(){const e=K({index:-1,title:"",selecteds:[]}),t=H([]),p=async()=>{const y={id:Ie(),title:"\u6A21\u677F",basic:Ct(),state:Ft(),enemyState:kt(),items:wt()};await yt(y),t.value.push(y)},n=async g=>{if(!confirm("\u786E\u8BA4\u8981\u5220\u9664\u5417\uFF1F"))return;const u=t.value[g];await Me(u.id),t.value.splice(g,1)},i=async g=>{const y=t.value[g];if(!y)return;const u=e.title;if(!u){C();return}y.title=u,C(),await ae(y)},C=()=>{e.index=-1,e.title=""},b=g=>{const y=new Blob([JSON.stringify([g])],{type:"application/json"});Ae(y,`${g.title}.json`)},E=async g=>{t.value=g},A=H(""),v=g=>new Promise((y,u)=>{const w=new FileReader;w.onload=()=>{y(w.result)},w.onerror=()=>{u(w.error)},w.readAsText(g)}),l=async()=>{if(!!confirm("\u786E\u8BA4\u8981\u6E05\u7A7A\u6240\u6709\u6570\u636E\u5417\uFF1F")){if(e.selecteds.length>0){const y=e.selecteds.map(u=>t.value[u]);for(const u of y)await Me(u.id)}else await $t();re()}},m=async g=>{const y=g.currentTarget,u=Array.prototype.slice.call(y.files);if(y.value="",!u||!u[0])return;const w=u[0],P=await v(w),_e=JSON.parse(P);for(const Y of _e){await ae(Y);const oe=t.value.findIndex(he=>he.id===Y.id);oe===-1?t.value.push(Y):t.value[oe]=Y}},_=async()=>{let g="calculator.json",y=t.value;e.selecteds.length>0&&(y=e.selecteds.map(w=>t.value[w]),g="calculator-selected.json");const u=new Blob([JSON.stringify(y)],{type:"application/json"});Ae(u,g)};async function r(g,y){!t.value[y]||(t.value[y]=g,await ae(g))}const c=H(-1),U=K({input:"2283/1.35*1.39",result:0}),{translate:j,xinhun:z,xinyao:B,huazhen:$}=ft(),h=g=>Math.ceil(g),I=K({show:!1,data:{qixue:0,patt:0,pdef:0,matt:0,mdef:0,huixin:0}}),Q=g=>{const y=j(g);I.show=!0,I.data.qixue=y.qixue,I.data.patt=y.patt,I.data.pdef=y.pdef,I.data.matt=y.matt,I.data.mdef=y.mdef,I.data.huixin=y.huixin},se=H(!1),ne=H(-1),pe=H(null),ve=g=>{se.value=!0,ne.value=g},me=({item:g})=>{se.value=!1;const y=ne.value;if(y===-1)Q(g);else{const w=t.value[y],P=j(g);w.title==="\u6A21\u677F"&&(w.title=g.name),w.basic.w=Math.max(P.patt,P.matt),ae(w)}},fe=g=>{const y=qe.cloneDeep(g);y.id=Ie(),console.log(y),t.value.push(y),ae(y)};async function re(){const g=await bt();e.selecteds=[],E(g)}return ct(()=>{re()}),{vars:e,activeKey:c,quick:U,list:t,add:p,rename:i,renameClose:C,remove:n,itemExport:b,download:A,onUpdateData:r,clearAll:l,importData:m,exportData:_,heroes:pt,max:Math.max,modal:I,ceilResult:h,selectTpl:Q,selectShow:se,selectIndex:ne,selectValue:pe,openSelect:ve,selectHero:me,copyItem:fe,xinhun:z,xinyao:B,huazhen:$}}}),de=e=>(ue("data-v-c3b39056"),e=e(),ie(),e),no={class:"wrapper"},oo={class:"toolbar"},ao={style:{padding:"6px 16px"}},lo=q("\u4F24\u5BB3\u8BA1\u7B97\u5668"),uo={class:"c-upload"},io=de(()=>s("button",{class:"btn btn-success"},"\u5BFC\u5165",-1)),ro={style:{padding:"6px 16px"}},co={class:"input-group"},po=de(()=>s("div",{class:"input-ext"},"=",-1)),vo={class:"content"},mo={class:"container"},fo=["value"],_o=q(" \u2007 "),ho=["onKeypress"],bo={key:1},$o=["onClick"],yo=["onClick"],Co=["onClick"],go=q(" \u91CD\u547D\u540D "),Fo=["onClick"],Bo=q(" \u590D\u5236 "),wo=["onClick"],ko=["onClick"],Eo={style:{"text-align":"center"}},Do=de(()=>s("span",null,"\u661F\u8000",-1)),So=de(()=>s("span",null,"\u5316\u81FB",-1)),Uo=de(()=>s("span",null,"\u661F\u9B42",-1));function Io(e,t,p,n,i,C){const b=S("c-col"),E=S("c-row"),A=S("transform-tools-modal"),v=S("calc-input"),l=S("input-number"),m=S("IconEdit"),_=S("IconCopy"),r=S("Calculator",!0),c=S("CollapsePanel"),U=S("c-space"),j=S("HeroSelect"),z=Pe("autofocus");return f(),F("div",no,[s("div",oo,[s("div",ao,[o(E,{flex:"",middle:"",gutter:16},{default:d(()=>[o(b,{flex:"0 0 auto"},{default:d(()=>[lo]),_:1}),o(b,{flex:"0 0 auto"},{default:d(()=>[s("button",{class:"btn btn-sm btn-link",onClick:t[0]||(t[0]=B=>e.modal.show=!e.modal.show)}," \u9762\u677F "),e.vars.selecteds.length>0?(f(),F("button",{key:0,class:"btn btn-success",onClick:t[1]||(t[1]=B=>e.vars.selecteds=[])}," \u53D6\u6D88\u6240\u9009 ")):W("",!0)]),_:1}),o(b,{flex:"1 1 0"}),o(b,{flex:"0 0 auto"},{default:d(()=>[s("button",{class:"btn btn-danger",onClick:t[2]||(t[2]=(...B)=>e.clearAll&&e.clearAll(...B))},V(e.vars.selecteds.length>0?"\u5220\u9664\u6240\u9009":"\u6E05\u7A7A"),1),s("div",uo,[io,s("input",{type:"file",class:"c-upload-input",accept:"application/json",onInput:t[3]||(t[3]=(...B)=>e.importData&&e.importData(...B))},null,32)]),s("button",{class:"btn btn-success",onClick:t[4]||(t[4]=(...B)=>e.exportData&&e.exportData(...B))},V(e.vars.selecteds.length>0?"\u5BFC\u51FA\u6240\u9009":"\u5BFC\u51FA"),1),s("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=B=>e.add())},"\u6DFB\u52A0")]),_:1})]),_:1}),o(A,{show:e.modal.show,"onUpdate:show":t[6]||(t[6]=B=>e.modal.show=B),data:e.modal.data,onReference:t[7]||(t[7]=B=>e.openSelect(-1))},null,8,["show","data"])]),s("div",ro,[s("div",co,[o(v,{modelValue:e.quick.input,"onUpdate:modelValue":t[8]||(t[8]=B=>e.quick.input=B),result:e.quick.result,"onUpdate:result":t[9]||(t[9]=B=>e.quick.result=B),style:{flex:"3 3 0"}},null,8,["modelValue","result"]),po,o(l,{readonly:"",value:e.ceilResult(e.quick.result),style:{flex:"2 2 0"}},null,8,["value"])])])]),s("div",vo,[s("div",mo,[(f(!0),F(R,null,N(e.list,(B,$)=>(f(),te(c,{key:B.id,activeKey:$===e.activeKey,onToggle:h=>e.activeKey=h?$:-1},{header:d(()=>[o(E,{flex:"",middle:""},{default:d(()=>[o(b,null,{default:d(()=>[T(s("input",{class:"c-switch",type:"checkbox","onUpdate:modelValue":t[10]||(t[10]=h=>e.vars.selecteds=h),value:$,onClick:t[11]||(t[11]=x(()=>{},["stop"]))},null,8,fo),[[ce,e.vars.selecteds]]),_o]),_:2},1024),o(b,null,{default:d(()=>[e.vars.index===$?T((f(),F("input",{key:0,type:"text",class:"input","onUpdate:modelValue":t[12]||(t[12]=h=>e.vars.title=h),onClick:t[13]||(t[13]=x(()=>{},["stop"])),onKeypress:Re(h=>e.rename($),["enter"])},null,40,ho)),[[Z,e.vars.title],[z]]):(f(),F("span",bo,V(B.title),1))]),_:2},1024),o(b,{class:"ml-4",onClick:t[14]||(t[14]=x(()=>{},["stop"]))},{default:d(()=>[e.vars.index===$?(f(),F("button",{key:0,class:"btn btn-sm btn-link",onClick:h=>e.rename($)}," \u786E\u8BA4 ",8,$o)):(f(),F(R,{key:1},[s("button",{class:"btn btn-sm btn-link",onClick:h=>e.openSelect($)}," \u9009\u62E9 ",8,yo),s("button",{class:"btn btn-sm btn-link",onClick:h=>{e.vars.index=$,e.vars.title=B.title}},[o(m,{class:"svg-icon"}),go],8,Co),s("button",{class:"btn btn-sm btn-link",onClick:h=>e.copyItem(B)},[o(_,{class:"svg-icon"}),Bo],8,Fo)],64))]),_:2},1024)]),_:2},1024)]),actions:d(()=>[s("button",{class:"btn btn-sm btn-success-outline",onClick:h=>e.itemExport(B)}," \u5BFC\u51FA ",8,wo),s("button",{class:"btn btn-sm btn-danger-outline",onClick:h=>e.remove($)}," \u5220\u9664 ",8,ko)]),default:d(()=>[$===e.activeKey?(f(),te(r,{key:0,data:B,"onUpdate:data":h=>e.onUpdateData(h,$)},null,8,["data","onUpdate:data"])):W("",!0)]),_:2},1032,["activeKey","onToggle"]))),128))])]),o(j,{show:e.selectShow,"onUpdate:show":t[18]||(t[18]=B=>e.selectShow=B),onClick:e.selectHero},{extra:d(()=>[s("div",Eo,[o(U,null,{default:d(()=>[s("label",null,[Do,T(s("input",{type:"checkbox","onUpdate:modelValue":t[15]||(t[15]=B=>e.xinyao=B)},null,512),[[ce,e.xinyao]])]),s("label",null,[So,T(s("input",{type:"checkbox","onUpdate:modelValue":t[16]||(t[16]=B=>e.huazhen=B)},null,512),[[ce,e.huazhen]])]),s("label",null,[Uo,T(s("input",{type:"checkbox","onUpdate:modelValue":t[17]||(t[17]=B=>e.xinhun=B)},null,512),[[ce,e.xinhun]])])]),_:1})])]),_:1},8,["show","onClick"])])}var Ho=J(so,[["render",Io],["__scopeId","data-v-c3b39056"]]);export{Ho as default};
