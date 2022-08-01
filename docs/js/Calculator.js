import{E as de,d as Q,s as N,G as Ve,_ as L,o as _,c as $,H as j,e as s,f as U,k as ae,n as Ce,I as Ye,J as ge,K as Ze,L as xe,M as et,N as Pe,q as z,a as D,r as I,O as Re,g as o,i as c,j as W,w as q,B as te,P as qe,F as R,h as T,A as H,p as re,l as ce,Q as tt,R as oe,b as le,T as st,S as l,U as nt,x as ot,V as at,W as lt,v as Se,X as P,Y as ut,Z as it,u as dt,C as fe}from"./index.js";import{_ as ie}from"./lodash.js";import{u as rt}from"./useHeroes.js";import ct from"./InputNumber.js";import{a as pt}from"./useTransformTools.js";import{s as Te}from"./data.js";let ye=0,Ue=0;const vt=500;function Ie(){const e=Math.floor(new Date().getTime()/1e3);Ue===e?ye++:ye=0,Ue=e;const t=e.toString(16);return`${(vt<<16|ye&255).toString(16)}.${t}`}async function mt(){try{return await de.getAll("calculator")}catch{return[]}}async function ft(){try{await de.clear("calculator")}catch(e){alert(e.message)}}async function _t(e){try{await de.add("calculator",JSON.parse(JSON.stringify(e)))}catch(t){t instanceof Error?console.log(t.message):console.log(t)}}async function ue(e){try{await de.put("calculator",JSON.parse(JSON.stringify(e)))}catch(t){t instanceof Error?console.log(t.message):console.log(t)}}async function Me(e){try{await de.delete("calculator",e)}catch(t){t instanceof Error?console.log(t.message):console.log(t)}}function ht(){return{w:2438,g:0,a:"403+363",c:20,x:0}}function bt(){return{a:0}}function $t(){return{att:0,k:0}}function Ne(){return{a1:1.5,a2:0,att:"15+10+8",da:"10+10",db:"4+10+20",dc:"0",dx:"0",id:"0",cd:"30",name:"1.5\u6280\u80FD",att2:"0",da2:"0",dx2:"0",defGain:"0"}}function yt(){return{a1:1.5,a2:0,att:0,id:0,da:0,db:0,dc:0,dx:0,cd:0,att2:0,da2:0,dx2:0,defGain:0}}function Ft(){return[Ne()]}function Ct(){return{hp:"10000",def:"1872",defGain:"15+5",ra:"0",rb:"4+10"}}const gt=Q({props:{active:Boolean,label:String,dir:String,inline:Boolean,color:String,wait:{type:Number,default:500}},emits:["update:active"],setup(e,{emit:t}){const n=N(),v=N({}),h=N(e.active),m=()=>{const i=n.value.getBoundingClientRect();switch(h.value=!0,t("update:active",h.value),e.dir){case"left":v.value={top:`${i.top+i.height/2}px`,right:`${window.innerWidth-i.left-4}px`,maxWidth:"100%"};break;case"right":v.value={top:`${i.top+i.height/2}px`,left:`${i.right+4}px`,maxWidth:"100%"};break;case"top":v.value={bottom:`${window.innerHeight-i.top-4}px`,left:`${i.left+i.width/2}px`,maxWidth:"100%"};break;default:v.value={top:`${i.bottom+4}px`,left:`${i.left+i.width/2}px`,maxWidth:"100%"}}};let r;const B=()=>{r=setTimeout(m,e.wait)},k=()=>{clearTimeout(r),h.value=!1,t("update:active",h.value)};return Ve(()=>e.active,S=>{h.value=S}),{el:n,style:v,tActive:h,onEnter:B,onOut:k}}}),Bt={class:"c-tooltip-label"};function wt(e,t,n,v,h,m){return _(),$("div",{ref:"el",class:ae(["c-tooltip",{active:e.tActive,inline:e.inline}]),onMouseenter:t[0]||(t[0]=(...r)=>e.onEnter&&e.onEnter(...r)),onMouseout:t[1]||(t[1]=(...r)=>e.onOut&&e.onOut(...r))},[j(e.$slots,"label",{},()=>[s("div",Bt,U(e.label),1)]),s("div",{class:ae(["c-tooltip-inner",e.dir?`c-tooltip-${e.dir}`:"c-tooltip-bottom",e.color?`c-tooltip-${e.color}`:""]),style:Ce(e.style)},[j(e.$slots,"default")],6)],34)}var Be=L(gt,[["render",wt]]);const kt=Q({components:{Divider:Ye,Tooltip:Be,CalcInput:ge,IconUp:Ze,IconDown:xe,IconClose:et,IconCopy:Pe},props:{panel:{type:Object,required:!0},state:{type:Object,required:!0},enemyState:{type:Object,required:!0},itemState:{type:Object,required:!0},showUp:Boolean,showDown:Boolean},emits:["update:itemState","close","up","down","copy"],setup(e,{emit:t}){const n=z({editor:!1,name:""}),v=(a,g)=>{if(a==="name")return;const M=e.itemState;switch(a){case"a1":case"a2":typeof g=="number"&&(M[a]=g);break;default:typeof g=="string"&&(M[a]=g)}t("update:itemState",M)},h=z(yt()),m=D({set:a=>v("a1",a),get:()=>e.itemState.a1}),r=D({set:a=>v("a2",a),get:()=>e.itemState.a2}),B=D({set:a=>v("att",a),get:()=>e.itemState.att}),k=D({set:a=>v("id",a),get:()=>e.itemState.id}),S=D({set:a=>v("da",a),get:()=>e.itemState.da}),i=D({set:a=>v("db",a),get:()=>e.itemState.db}),b=D({set:a=>v("dc",a),get:()=>e.itemState.dc}),V=D({set:a=>v("dx",a),get:()=>e.itemState.dx}),O=D({set:a=>v("cd",a),get:()=>e.itemState.cd}),p=D({set:a=>v("att2",a),get:()=>e.itemState.att2}),A=D({set:a=>v("da2",a),get:()=>e.itemState.da2}),K=D({set:a=>v("dx2",a),get:()=>e.itemState.dx2}),G=D({set:a=>v("defGain",a),get:()=>e.itemState.defGain}),F=z({a1:m,a2:r,att:B,da:S,db:i,dc:b,dx:V,id:k,cd:O,att2:p,da2:A,dx2:K,defGain:G}),y=D(()=>{const{state:a}=e,g=(100+h.att)/100;return Math.ceil(a.att*g)}),f=D(()=>{const{state:a}=e,g=(100+h.att+h.att2)/100;return Math.ceil(a.att*g)}),u=()=>{const{state:a,enemyState:g}=e,M=(100+a.k)/100,ne=(100+h.da-g.ra)/100,be=(100+h.da+h.da2-g.ra)/100,ee=(100+h.db-g.rb)/100,me=(100+h.dc)/100,$e=(100+h.dx)/100,je=(100+h.dx+h.dx2)/100,we=(100+h.cd)/100,ke=(100-h.id)/100,Ke=(100+g.defGain)/100,Ge=(100+g.defGain+h.defGain)/100,Qe=Math.max(0,Math.max(0,g.def*Ke)*ke),Le=Math.max(0,Math.max(0,g.def*Ge)*ke),Je=Math.max(1,y.value*M-Qe),ze=Math.max(1,f.value*M-Le),De=Je*m.value*ne*ee*$e,We=Math.ceil(De*we),Ee=ze*r.value*be*ee*me*je,Xe=Math.ceil(Ee*we);return{r01:Math.ceil(De),r01c:We,r02:Math.ceil(Ee),r02c:Xe}},w=D(()=>u().r01),J=D(()=>u().r01c),Y=D(()=>u().r02),d=D(()=>u().r02c);u();function Z(){confirm(`\u786E\u8BA4\u8981\u5220\u9664\u6280\u80FD\u6A21\u677F"${e.itemState.name}"\u5417\uFF1F`)&&t("close")}function x(){n.editor=!0,n.name=e.itemState.name}function _e(){const a=n.name;if(n.editor=!1,n.name="",!a)return;const g=e.itemState;g.name=a,t("update:itemState",g)}function he(){t("up")}function ve(){t("down")}function C(){t("copy")}return{vars:n,values:F,result:h,satt:y,r01:w,r01c:J,r02:Y,r02c:d,onClose:Z,onRename:x,onNameEnter:_e,onUp:he,onDown:ve,onCopy:C}}}),X=e=>(re("data-v-a928d4b0"),e=e(),ce(),e),Dt={class:"row"},Et={class:"col-item"},St=X(()=>s("div",{class:"label"},"\u6280\u80FD\u3001\u666E\u653B",-1)),Ut=H(" \u6280\u80FD\u3001\u666E\u653B\u500D\u7387 "),It={class:"input-group"},Mt=["step"],At=X(()=>s("div",{class:"input-ext"},"\u500D",-1)),Vt={class:"label"},Pt={class:"input-group"},Rt=X(()=>s("div",{style:{clear:"both"}},null,-1)),qt={class:"col-item"},Tt=X(()=>s("div",{class:"label"},"\u8FDE\u51FB\u3001\u8FFD\u51FB\u3001\u53CD\u51FB",-1)),Nt=H(" \u8FDE\u51FB\u3001\u8FFD\u51FB\u3001\u53CD\u51FB\u500D\u7387 "),Ht={class:"input-group"},Ot=["step"],jt=X(()=>s("div",{class:"input-ext"},"\u500D",-1)),Kt={class:"label"},Gt={class:"input-group"},Qt={class:"col-item"},Lt=X(()=>s("div",{class:"label"},"\u6700\u7EC8\u653B\u51FB",-1)),Jt={class:"static-control text-center"},zt={class:"darkgold"},Wt=X(()=>s("div",{style:{clear:"both"}},null,-1)),Xt={class:"label"},Yt={class:"bold darkgold"},Zt=X(()=>s("span",{class:"bold red"},"(\u66B4\u51FB)",-1)),xt={class:"static-control text-center"},es={class:"bold darkgold"},ts={class:"bold red"},ss={class:"label bold"},ns={class:"static-control text-center"},os={class:"bold darkgold"},as={key:0,class:"bold red"};function ls(e,t,n,v,h,m){const r=I("IconCopy"),B=I("IconUp"),k=I("IconDown"),S=I("IconClose"),i=I("Divider"),b=I("Tooltip"),V=I("CalcInput"),O=Re("autofocus");return _(),$(R,null,[o(i,{orientation:"left"},{action:c(()=>[s("span",{onClick:t[4]||(t[4]=(...p)=>e.onCopy&&e.onCopy(...p))},[o(r,{class:"close"})]),e.showUp?(_(),$("span",{key:0,onClick:t[5]||(t[5]=(...p)=>e.onUp&&e.onUp(...p))},[o(B,{class:"close"})])):W("",!0),e.showDown?(_(),$("span",{key:1,onClick:t[6]||(t[6]=(...p)=>e.onDown&&e.onDown(...p))},[o(k,{class:"close"})])):W("",!0),s("span",{onClick:t[7]||(t[7]=(...p)=>e.onClose&&e.onClose(...p))},[o(S,{class:"close"})])]),default:c(()=>[e.vars.editor?q((_(),$("input",{key:0,class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=p=>e.vars.name=p),onKeypress:t[1]||(t[1]=qe((...p)=>e.onNameEnter&&e.onNameEnter(...p),["enter"])),onBlur:t[2]||(t[2]=(...p)=>e.onNameEnter&&e.onNameEnter(...p))},null,544)),[[te,e.vars.name],[O]]):(_(),$("span",{key:1,class:"calc-item-title",onClick:t[3]||(t[3]=(...p)=>e.onRename&&e.onRename(...p))},U(e.itemState.name||"\u6A21\u677F"),1))]),_:1}),s("div",Dt,[s("div",Et,[o(b,{dir:"top"},{label:c(()=>[St]),default:c(()=>[Ut]),_:1}),s("div",It,[q(s("input",{type:"number",class:"input",min:"0",step:.1,"onUpdate:modelValue":t[8]||(t[8]=p=>e.values.a1=p)},null,8,Mt),[[te,e.values.a1,void 0,{number:!0}]]),At])]),(_(),$(R,null,T([{name:"att",label:"\u653B\u51FB%",tip:"\u4F5C\u7528\u4E8E\u6240\u6709\u60C5\u51B5"},{name:"da",label:"A\u7C7B\u589E\u4F24%",tip:"\u9970\u54C1\u3001\u5404\u7C7Bbuff\u3001\u5929\u8D4B"},{name:"db",label:"B\u7C7B\u589E\u4F24%",tip:"\u661F\u8000\u3001\u661F\u76D8\u3001\u8BCD\u6761"},{name:"dx",label:"X\u7C7B\u589E\u4F24%",tip:"\u6700\u7EC8\u4FEE\u6B63\uFF0C\u5982\u4E00\u5B57\u7535\u65A9"},{name:"id",label:"\u7A7F\u900F%",tip:"\u65E0\u89C6\u9632\u5FA1"},{name:"cd",label:"\u66B4\u4F24%",tip:"\u66B4\u51FB\u4F24\u5BB3"}],p=>s("div",{class:"col-item",key:p.name},[o(b,{dir:"top"},{label:c(()=>[s("div",Vt,U(p.label),1)]),default:c(()=>[H(" "+U(p.tip),1)]),_:2},1024),s("div",Pt,[o(V,{class:"input",modelValue:e.values[p.name],"onUpdate:modelValue":A=>e.values[p.name]=A,result:e.result[p.name],"onUpdate:result":A=>e.result[p.name]=A},null,8,["modelValue","onUpdate:modelValue","result","onUpdate:result"])])])),64)),Rt,s("div",qt,[o(b,{dir:"top"},{label:c(()=>[Tt]),default:c(()=>[Nt]),_:1}),s("div",Ht,[q(s("input",{type:"number",class:"input",min:"0",step:.1,"onUpdate:modelValue":t[9]||(t[9]=p=>e.values.a2=p)},null,8,Ot),[[te,e.values.a2,void 0,{number:!0}]]),jt])]),(_(),$(R,null,T([{name:"dc",label:"C\u7C7B\u589E\u4F24%",tip:"\u8FDE\u51FB\u3001\u8FFD\u51FB\u3001\u53CD\u51FB\u589E\u4F24"},{name:"att2",label:"\u653B\u51FB\u4FEE\u6B63%",tip:"\u6389\u8840\u540E\u653B\u51FB\u4FEE\u6B63\uFF0C\u4E00\u822C\u5728\u8FFD\u51FB\u6216\u53CD\u51FB\u65F6"},{name:"da2",label:"\u4F24\u5BB3\u4FEE\u6B63%",tip:"\u6389\u8840\u540E\u4F24\u5BB3\u4FEE\u6B63\uFF0C\u4E00\u822C\u5728\u8FFD\u51FB\u6216\u53CD\u51FB\u65F6"},{name:"defGain",label:"\u9632\u5FA1\u4FEE\u6B63%",tip:"\u6389\u8840\u540E\u9632\u5FA1\u4FEE\u6B63\uFF0C\u4E00\u822C\u5728\u8FFD\u51FB\u6216\u8FDE\u51FB\u65F6"},{name:"dx2",label:"X\u7C7B\u4FEE\u6B63%",tip:"\u6389\u8840\u540E\u9632\u5FA1\u4FEE\u6B63\uFF0C\u4E00\u822C\u5728\u8FFD\u51FB\u6216\u8FDE\u51FB\u65F6"}],p=>s("div",{class:"col-item",key:p.name},[o(b,{dir:"top"},{label:c(()=>[s("div",Kt,U(p.label),1)]),default:c(()=>[H(" "+U(p.tip),1)]),_:2},1024),s("div",Gt,[o(V,{class:"input",modelValue:e.values[p.name],"onUpdate:modelValue":A=>e.values[p.name]=A,result:e.result[p.name],"onUpdate:result":A=>e.result[p.name]=A},null,8,["modelValue","onUpdate:modelValue","result","onUpdate:result"])])])),64)),s("div",Qt,[Lt,s("div",Jt,[s("span",zt,U(e.satt),1)])]),Wt,(_(!0),$(R,null,T([{label:"\u4E00\u6BB5\u4F24\u5BB3",v:e.r01,v2:e.r01c},{label:"\u4E8C\u6BB5\u4F24\u5BB3",v:e.r02,v2:e.r02c}],(p,A)=>(_(),$("div",{class:"col-item",key:A},[s("div",Xt,[s("span",Yt,U(p.label),1),Zt]),s("div",xt,[s("span",es,U(p.v),1),s("span",ts,"("+U(p.v2)+")",1)])]))),128)),(_(!0),$(R,null,T([{label:"\u4E0D\u66B4\u51FB",value:e.r01+e.r02},{label:"\u4E00\u6BB5\u66B4\u51FB",value:e.r01c+e.r02},{label:"\u4E8C\u6BB5\u66B4\u51FB",value:e.r01+e.r02c},{label:"\u5168\u66B4\u51FB",value:e.r01c+e.r02c}],(p,A)=>(_(),$("div",{class:"col-item",key:A},[s("div",ss,U(p.label),1),s("div",ns,[s("span",os,U(p.value),1),(+e.enemyState.hp||0)<=p.value?(_(),$("span",as," \u51FB\u6740 ")):W("",!0)])]))),128))])],64)}var us=L(kt,[["render",ls],["__scopeId","data-v-a928d4b0"]]);const is=["onClick"],ds=Q({props:{pos:{default:"lt"}},setup(e){const t=N(!1),n=()=>{t.value=!0},v=()=>{t.value=!1};return window.addEventListener("click",v,!1),tt(()=>{window.removeEventListener("click",v,!1)}),(h,m)=>(_(),$("div",{class:ae(["dropdown",[{active:t.value}]]),onClick:oe(n,["stop"])},[j(h.$slots,"default",{},void 0,!0),s("div",{class:ae(["dropdown-popover",["dropdown-"+e.pos]]),onClick:m[0]||(m[0]=oe(()=>{},["stop"]))},[j(h.$slots,"popover",{onClose:v},void 0,!0)],2)],10,is))}});var He=L(ds,[["__scopeId","data-v-782cbcbc"]]);He.install=e=>{e.component("dropdown",Oe)};const Oe=He;const rs=Q({components:{CalcItem:us,CalcInput:ge,Tooltip:Be,Dropdown:Oe},props:{data:{type:Object,required:!0}},emits:["update:data"],setup(e,{emit:t}){const n=D(()=>e.data.basic),v=D(()=>e.data.state),h=D(()=>e.data.enemyState),m=D(()=>e.data.items),r=z(bt()),B=z({hp:0,def:0,defGain:0,ra:0,rb:0}),k=[{label:"\u9762\u677F\u653B\u51FB",name:"w",step:1,align:"right"},{label:"\u9B42\u77F3\u653B\u51FB",name:"a",step:1},{label:"\u8BCD\u6761\u653B\u51FB%",name:"c",step:1},{label:"\u661F\u4E4B\u6676\u653B\u51FB",name:"x",step:1}],S=[{label:"\u6C14\u8840",name:"hp",step:1},{label:"\u9632\u5FA1",name:"def",step:1},{label:"\u9632\u5FA1\u4FEE\u6B63%",name:"defGain",step:1},{label:"A\u7C7B\u514D\u4F24%",name:"ra",step:1},{label:"B\u7C7B\u514D\u4F24%",name:"rb",step:1}],i=()=>{const y=n.value.c/100;n.value.g=Math.ceil(r.a+n.value.w*y+n.value.x),v.value.att=n.value.w+n.value.g},b=async()=>{t("update:data",e.data)},V=(y,f)=>{f==="panel"&&i(),b()},O=(y,f)=>{const u=e.data.items;!u||(u[f]=y,b())},p=()=>{const y=e.data.items;!y||(y.push(Ne()),b())},A=y=>{const f=e.data.items;!f||(f.splice(y,1),b())},K=y=>{const f=e.data.items;if(!f)return;const u=f[y],w=f[y-1];f[y-1]=u,f[y]=w,b()},G=y=>{const f=e.data.items;if(!f)return;const u=f[y],w=f[y+1];f[y+1]=u,f[y]=w,b()},F=y=>{const f=e.data.items;if(!f)return;const u=f[y];f.push(ie.cloneDeep(u)),b()};return Ve(()=>[e.data.basic.w],()=>{i()}),{panel:n,state:v,enemyState:h,panelResult:r,enemyStateResult:B,panelModels:k,enemyModels:S,update:V,items:m,updateItemState:O,addItem:p,delItem:A,upItem:K,downItem:G,copyItem:F}}}),se=e=>(re("data-v-793a869e"),e=e(),ce(),e),cs=se(()=>s("div",{class:"heading"},[s("div",{class:"heading-title"},"\u57FA\u672C\u53C2\u6570")],-1)),ps={class:"row"},vs={class:"label"},ms={class:"input-group"},fs=["step","onUpdate:modelValue","onChange"],_s=["value"],hs={class:"col-item"},bs=se(()=>s("div",{class:"label"},"\u8FDB\u56FE\u653B\u51FB",-1)),$s={class:"static-control text-center"},ys={class:"darkgold"},Fs={class:"col-item"},Cs=se(()=>s("div",{class:"label"},"\u514B\u5236%",-1)),gs=H(" \u514B\u523630%"),Bs=se(()=>s("br",null,null,-1)),ws=H("\u88AB\u514B\u5236-25%"),ks=se(()=>s("br",null,null,-1)),Ds=H("\u6FC0\u836150% "),Es=["onClick"],Ss=se(()=>s("div",{class:"heading"},[s("div",{class:"heading-title"},"\u654C\u4EBA\u9762\u677F")],-1)),Us={class:"row"},Is={class:"label"},Ms={class:"input-group"},As={key:0,class:"input-ext"},Vs={class:"heading"},Ps=se(()=>s("div",{class:"heading-title"},"\u6280\u80FD\u6A21\u677F",-1)),Rs={class:"heading-actions"};function qs(e,t,n,v,h,m){const r=I("CalcInput"),B=I("Tooltip"),k=I("Dropdown"),S=I("CalcItem");return _(),$("div",null,[cs,s("div",ps,[(_(!0),$(R,null,T(e.panelModels,i=>(_(),$("div",{class:"col-item",key:i.name},[s("div",vs,U(i.label),1),s("div",ms,[i.name in e.panelResult?(_(),le(r,{key:0,modelValue:e.panel[i.name],"onUpdate:modelValue":b=>e.panel[i.name]=b,result:e.panelResult[i.name],"onUpdate:result":b=>e.panelResult[i.name]=b,onChange:b=>e.update(i.name,"panel")},null,8,["modelValue","onUpdate:modelValue","result","onUpdate:result","onChange"])):q((_(),$("input",{key:1,type:"number",class:"input",style:Ce({textAlign:i.align}),min:"0",step:i.step,"onUpdate:modelValue":b=>e.panel[i.name]=b,onChange:b=>e.update(i.name,"panel")},null,44,fs)),[[te,e.panel[i.name],void 0,{number:!0}]]),i.name==="w"?(_(),$("input",{key:2,class:"input green",readonly:"",style:{textAlign:"left"},value:`+${e.panel.g}`},null,8,_s)):W("",!0)])]))),128)),s("div",hs,[bs,s("div",$s,[s("span",ys,U(e.state.att),1)])]),s("div",Fs,[o(B,{dir:"top"},{label:c(()=>[Cs]),default:c(()=>[gs,Bs,ws,ks,Ds]),_:1}),s("div",null,[o(k,null,{popover:c(({onClose:i})=>[s("div",{class:"list",onClick:()=>{i(),e.update("k","state")}},[s("div",{class:"list-item",onClick:t[2]||(t[2]=b=>e.state.k=0)},"\u666E\u901A"),s("div",{class:"list-item",onClick:t[3]||(t[3]=b=>e.state.k=30)},"\u514B\u5236"),s("div",{class:"list-item",onClick:t[4]||(t[4]=b=>e.state.k=-25)},"\u88AB\u514B\u5236"),s("div",{class:"list-item",onClick:t[5]||(t[5]=b=>e.state.k=50)},"\u6FC0\u8361")],8,Es)]),default:c(()=>[q(s("input",{class:"input",type:"number","onUpdate:modelValue":t[0]||(t[0]=i=>e.state.k=i),onChange:t[1]||(t[1]=i=>e.update("k","state")),list:"d1"},null,544),[[te,e.state.k,void 0,{number:!0}]])]),_:1})])])]),Ss,s("div",Us,[(_(!0),$(R,null,T(e.enemyModels,i=>(_(),$("div",{class:"col-item",key:i.name},[s("div",Is,U(i.label),1),s("div",Ms,[o(r,{modelValue:e.enemyState[i.name],"onUpdate:modelValue":b=>e.enemyState[i.name]=b,result:e.enemyStateResult[i.name],"onUpdate:result":b=>e.enemyStateResult[i.name]=b,onChange:b=>e.update(i.name)},null,8,["modelValue","onUpdate:modelValue","result","onUpdate:result","onChange"]),i.precent?(_(),$("div",As,"%")):W("",!0)])]))),128))]),s("div",Vs,[Ps,s("div",Rs,[s("div",{class:"btn btn-primary btn-sm",onClick:t[6]||(t[6]=(...i)=>e.addItem&&e.addItem(...i))},"\u6DFB\u52A0")])]),(_(!0),$(R,null,T(e.items,(i,b)=>(_(),le(S,{key:i,panel:e.panel,state:e.state,enemyState:e.enemyStateResult,itemState:i,showUp:b>0,showDown:e.items&&b<e.items.length-1,"onUpdate:itemState":V=>e.updateItemState(V,b),onClose:V=>e.delItem(b),onUp:V=>e.upItem(b),onDown:V=>e.downItem(b),onCopy:V=>e.copyItem(b)},null,8,["panel","state","enemyState","itemState","showUp","showDown","onUpdate:itemState","onClose","onUp","onDown","onCopy"]))),128))])}var Ts=L(rs,[["render",qs],["__scopeId","data-v-793a869e"]]);const Ns=Q({props:{show:Boolean,list:Array,class:String,height:String},emits:["click","close","update:show"],setup(e,{emit:t}){return{wrapClass:D(()=>["c-action-sheet-wrapper",e.class,{show:e.show}]),onClick:(m,r)=>{t("click",{item:m,index:r}),t("close",!1)},onClose:()=>{t("update:show",!1),t("close",!1)}}}}),Hs={class:"c-action-sheet-section"},Os={class:"c-action-sheet-extra"},js={class:"c-action-sheet-list"},Ks=["onClick"];function Gs(e,t,n,v,h,m){return _(),le(st,{to:"body"},[s("div",{class:ae(e.wrapClass)},[s("div",{class:"c-action-sheet-mask",onClick:t[0]||(t[0]=(...r)=>e.onClose&&e.onClose(...r))}),s("div",Hs,[s("div",{class:"c-action-sheet-body",style:Ce({maxHeight:e.height})},[s("div",Os,[j(e.$slots,"extra")]),s("div",js,[(_(!0),$(R,null,T(e.list,(r,B)=>(_(),$("div",{class:"c-action-sheet-item",key:B,onClick:k=>e.onClick(r,B)},[j(e.$slots,"default",{record:r})],8,Ks))),128))])],4)])],2)])}var Fe=L(Ns,[["render",Gs]]);Fe.install=e=>{e.component("action-sheet",Fe)};const Qs={class:"hero-item"},Ls=["src","alt","title"],Js={class:"hero-item-label"},zs=Q({props:{show:{type:Boolean}},emits:["click","update:show"],setup(e,{emit:t}){const{heroes:n,getHeroIcon:v}=rt(),h=m=>{t("click",m)};return(m,r)=>(_(),le(l(Fe),{class:"hero-select",show:e.show,list:l(n),height:"80vh",onClick:h,"onUpdate:show":r[0]||(r[0]=B=>m.$emit("update:show",B))},{extra:c(()=>[j(m.$slots,"extra")]),default:c(({record:B})=>[s("div",Qs,[s("img",{src:l(v)(B),alt:B.name,title:B.name,width:"128",height:"128"},null,8,Ls),s("div",Js,U(B.name),1)])]),_:3},8,["show","list"]))}});const Ws=Q({props:{header:String,activeKey:Boolean},emits:["update:activeKey","toggle"],setup(e,{emit:t}){const n=D({get:()=>e.activeKey,set:h=>{t("update:activeKey",h)}});return{active:n,toggle:()=>{const h=!n.value;n.value=h,t("toggle",h)}}}}),Xs=e=>(re("data-v-2b5ca870"),e=e(),ce(),e),Ys=Xs(()=>s("div",{class:"panel-icon"},[s("svg",{width:"16",height:"16",viewBox:"-16 -16 32 32"},[s("path",{d:"M6 0 l-12 -12 l0 2 l10 10 l-10 10 l0 2 l12 -12z",fill:"currentColor"})])],-1)),Zs={class:"panel-title"},xs={class:"panel-body"},en={class:"panel-content"};function tn(e,t,n,v,h,m){return _(),$("div",{class:ae(["panel",{active:e.active}])},[s("div",{class:"panel-header",onClick:t[1]||(t[1]=(...r)=>e.toggle&&e.toggle(...r))},[Ys,s("div",Zs,[j(e.$slots,"header",{},()=>[H(U(e.header)+"\xA0",1)],!0)]),s("div",{class:"panel-actions",onClick:t[0]||(t[0]=oe(()=>{},["stop"]))},[j(e.$slots,"actions",{},void 0,!0)])]),s("div",xs,[s("div",en,[j(e.$slots,"default",{},void 0,!0)])])],2)}var sn=L(Ws,[["render",tn],["__scopeId","data-v-2b5ca870"]]);const Ae=(e,t)=>{const n=URL.createObjectURL(e),v=document.createElement("a");v.href=n,v.target="_blank",v.download=t,v.click(),URL.revokeObjectURL(n)};function nn(){const e="red_team",t=nt(),n=N([]),v=async k=>await t.put(e,k).then(S=>{if(n.value.findIndex(i=>i._id===S)===-1){const i=ie.cloneDeep(k);i._id=S,n.value.push(i)}return S}),h=async k=>await t.delete(e,k._id).then(()=>{n.value=n.value.filter(S=>S._id!==k._id)}),m=async k=>{const S=JSON.parse(await k.text());for(const i of S)await v(i)},r=async()=>{const k=new Blob([JSON.stringify(n.value)],{type:"application/json"}),S=URL.createObjectURL(k),i=document.createElement("a");i.href=S,i.download="red_team.json",i.click()};return(async()=>{const k=await t.getAll(e).catch(()=>[]);console.log(k),n.value=k})(),{put:v,del:h,list:n,importData:m,exportData:r}}function on(){const e=()=>({name:"",qixue:0,patt:0,pdef:0,matt:0,mdef:0,huixin:0,stoneName:"",hsQixue:0,hsPatt:0,hsPdef:0,hsMatt:0,hsMdef:0,hsHuixin:0,xQixue:0,xPatt:0,xPdef:0,xMatt:0,xMdef:0,xHuixin:0,cQixue:"40+5+5+5",cPatt:"0",cPdef:"0",cMatt:"0",cMdef:"0",cHuixin:"0",rQixue:0,rPatt:0,rPdef:0,rMatt:0,rMdef:0,rHuixin:0}),t=N(e()),n=D(()=>{const m={qixue:0,patt:0,pdef:0,matt:0,mdef:0,huixin:0},r=Te.find(k=>t.value.stoneName===k.name);r&&(m.qixue=r.t[0]+r.d[0]+r.h[0],m.patt=r.t[1]+r.d[1]+r.h[1],m.matt=r.t[2]+r.d[2]+r.h[2],m.pdef=r.t[3]+r.d[3]+r.h[3],m.mdef=r.t[4]+r.d[4]+r.h[4]);const B={qixue:t.value.hsQixue/100,patt:t.value.hsPatt/100,pdef:t.value.hsPdef/100,matt:t.value.hsMatt/100,mdef:t.value.hsMdef/100,huixin:t.value.hsHuixin/100};return{qixue:Math.round(t.value.qixue*B.qixue+m.qixue+t.value.xQixue),patt:Math.round(t.value.patt*B.patt+m.patt+t.value.xPatt),pdef:Math.round(t.value.pdef*B.pdef+m.pdef+t.value.xPdef),matt:Math.round(t.value.matt*B.matt+m.matt+t.value.xMatt),mdef:Math.round(t.value.mdef*B.mdef+m.mdef+t.value.xMdef),huixin:Math.round(t.value.huixin*B.huixin+m.huixin+t.value.xHuixin)}}),v=D(()=>{const m=n.value,r={qixue:(100+t.value.rQixue)/100,patt:(100+t.value.rPatt)/100,pdef:(100+t.value.rPdef)/100,matt:(100+t.value.rMatt)/100,mdef:(100+t.value.rMdef)/100,huixin:(100+t.value.rHuixin)/100};return{qixue:Math.round((t.value.qixue+m.qixue)*r.qixue),patt:Math.round((t.value.patt+m.patt)*r.patt),pdef:Math.round((t.value.pdef+m.pdef)*r.pdef),matt:Math.round((t.value.matt+m.matt)*r.matt),mdef:Math.round((t.value.mdef+m.mdef)*r.mdef),huixin:Math.round((t.value.huixin+m.huixin)*r.huixin)}});return{state:t,pValue:n,ckValue:v,reset:()=>{t.value=e()},defState:e}}const an={},ln={class:"c-upload"};function un(e,t){return _(),$("div",ln,[j(e.$slots,"default",{},void 0,!0),s("input",ot({type:"file",class:"c-upload-input",accept:"application/json"},e.$attrs),null,16)])}var dn=L(an,[["render",un],["__scopeId","data-v-07d1ead0"]]);const E=e=>(re("data-v-1fd62c9a"),e=e(),ce(),e),rn={class:"transform-tools-popover"},cn={class:"transform-tools-popover-toolbar"},pn=["value"],vn=["value"],mn=E(()=>s("button",{class:"btn btn-sm btn-success"},"\u5BFC\u5165",-1)),fn={class:"transform-tools-popover-content"},_n={class:"grid-group"},hn={class:"grid-group-item"},bn={class:"input-group-title"},$n=E(()=>s("span",null,"\u57FA\u7840",-1)),yn={class:"grids"},Fn=E(()=>s("label",{class:"input-label"},"\u6C14\u8840",-1)),Cn=E(()=>s("label",{class:"input-label"},"\u7269\u653B",-1)),gn=E(()=>s("label",{class:"input-label"},"\u7269\u9632",-1)),Bn=E(()=>s("label",{class:"input-label"},"\u6CD5\u653B",-1)),wn=E(()=>s("label",{class:"input-label"},"\u6CD5\u9632",-1)),kn=E(()=>s("label",{class:"input-label"},"\u4F1A\u5FC3",-1)),Dn={class:"grid-group-item"},En={class:"input-group-title"},Sn=E(()=>s("span",null,"\u9B42\u77F3",-1)),Un=E(()=>s("option",{value:""},"\u65E0",-1)),In=["value"],Mn={class:"grids"},An=E(()=>s("label",{class:"input-label"},"\u6C14\u8840%",-1)),Vn=E(()=>s("label",{class:"input-label"},"\u7269\u653B%",-1)),Pn=E(()=>s("label",{class:"input-label"},"\u7269\u9632%",-1)),Rn=E(()=>s("label",{class:"input-label"},"\u6CD5\u653B%",-1)),qn=E(()=>s("label",{class:"input-label"},"\u6CD5\u9632%",-1)),Tn={class:"grid-group-item"},Nn={class:"input-group-title"},Hn=H(" \u661F\u4E4B\u6676 "),On=E(()=>s("div",null,"\u6781\u9650\u653B\uFF1A202\u653B\uFF0C198\u8840\uFF0C70\u9632",-1)),jn=E(()=>s("div",null,"\u6781\u9650\u8840\uFF1A456\u8840\uFF0C98\u9632",-1)),Kn=E(()=>s("div",null,"\u6781\u9650\u9632\uFF1A150\u9632\uFF0C198\u8840\uFF0C88\u653B",-1)),Gn={class:"grids"},Qn=E(()=>s("label",{class:"input-label"},"\u6C14\u8840",-1)),Ln=E(()=>s("label",{class:"input-label"},"\u7269\u653B",-1)),Jn=E(()=>s("label",{class:"input-label"},"\u7269\u9632",-1)),zn=E(()=>s("label",{class:"input-label"},"\u6CD5\u653B",-1)),Wn=E(()=>s("label",{class:"input-label"},"\u6CD5\u9632",-1)),Xn=E(()=>s("label",{class:"input-label"},"\u4F1A\u5FC3",-1)),Yn={class:"grid-group-item"},Zn=E(()=>s("div",{class:"input-group-title"},"\u9762\u677F",-1)),xn={class:"grids"},eo={class:"input-label"},to={class:"input-group"},so={class:"input green"},no={class:"grid-group-item"},oo=E(()=>s("div",{class:"input-group-title"},"\u4FEE\u6B63",-1)),ao={class:"grids"},lo={class:"input-label"},uo={class:"grid-group-item"},io=E(()=>s("div",{class:"input-group-title"},"\u53C2\u8003",-1)),ro={class:"grids"},co={class:"input-label"},po=["value"],vo=Q({props:{show:{type:Boolean}},emits:["init","reference","update:show"],setup(e,{emit:t}){const{state:n,pValue:v,ckValue:h,reset:m,defState:r}=on(),{list:B,put:k,del:S,importData:i,exportData:b}=nn(),V=[{t:"\u6C14\u8840",n:"qixue"},{t:"\u7269\u653B",n:"patt"},{t:"\u7269\u9632",n:"pdef"},{t:"\u6CD5\u653B",n:"matt"},{t:"\u6CD5\u9632",n:"mdef"},{t:"\u4F1A\u5FC3",n:"huixin"}],O=[{t:"\u6C14\u8840%",c:"cQixue",r:"rQixue"},{t:"\u7269\u653B%",c:"cPatt",r:"rPatt"},{t:"\u7269\u9632%",c:"cPdef",r:"rPdef"},{t:"\u6CD5\u653B%",c:"cMatt",r:"rMatt"},{t:"\u6CD5\u9632%",c:"cMdef",r:"rMdef"},{t:"\u4F1A\u5FC3%",c:"cHuixin",r:"rHuixin"}],p=()=>{const f=ie.cloneDeep(n.value);k(f).then(u=>{n.value._id=u}).catch(()=>{alert("\u4FDD\u5B58\u5931\u8D25")})},A=()=>{!confirm("\u786E\u8BA4\u8981\u5220\u9664\u5417\uFF1F")||S(n.value).then(()=>{m()}).catch(()=>{alert("\u5220\u9664\u5931\u8D25")})},K=f=>{const u=Array.prototype.slice.call(f.currentTarget.files);u[0]&&i(u[0])},G=()=>{b()},F=(f,u)=>{n.value=ie.cloneDeep(n.value),delete n.value._id,n.value.name=f,n.value.qixue=u.qixue,n.value.patt=u.patt,n.value.pdef=u.pdef,n.value.matt=u.matt,n.value.mdef=u.mdef,n.value.huixin=u.huixin},y=()=>{t("reference")};return t("init",F),(f,u)=>{const w=I("c-space"),J=I("c-col"),Y=I("c-row");return q((_(),$("div",rn,[s("div",cn,[o(Y,{flex:"",middle:"",gutter:0},{default:c(()=>[o(J,{flex:"1 1 auto"},{default:c(()=>[o(w,null,{default:c(()=>[s("button",{class:"btn btn-sm btn-link",onClick:y}," \u53C2\u8003 "),q(s("select",{class:"input input-select",placeholder:"\u8BF7\u9009\u62E9\u5DF2\u6709\u6A21\u677F","onUpdate:modelValue":u[0]||(u[0]=d=>lt(n)?n.value=d:null)},[s("option",{value:l(r)()},"\u7A7A\u6A21\u7248",8,pn),(_(!0),$(R,null,T(l(B),d=>(_(),$("option",{key:d._id,value:d},U(d.name),9,vn))),128))],512),[[Se,l(n)]]),s("button",{class:"btn btn-sm btn-primary",onClick:p},"\u4FDD\u5B58"),l(n)._id?(_(),$("button",{key:0,class:"btn btn-sm btn-danger",onClick:A}," \u5220\u9664 ")):W("",!0),o(dn,{onInput:K},{default:c(()=>[mn]),_:1}),s("button",{class:"btn btn-sm btn-success",onClick:G}," \u5BFC\u51FA ")]),_:1})]),_:1}),o(J,null,{default:c(()=>[s("span",{class:"transform-tools-popover-close",onClick:u[1]||(u[1]=d=>t("update:show",!1))}," \xD7 ")]),_:1})]),_:1})]),s("div",fn,[s("div",_n,[s("div",hn,[s("div",bn,[o(w,null,{default:c(()=>[$n,q(s("input",{type:"text",class:"input input-text","onUpdate:modelValue":u[2]||(u[2]=d=>l(n).name=d)},null,512),[[te,l(n).name]])]),_:1})]),s("div",yn,[o(w,null,{default:c(()=>[Fn,o(l(P),{value:l(n).qixue,"onUpdate:value":u[3]||(u[3]=d=>l(n).qixue=d)},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[Cn,o(l(P),{value:l(n).patt,"onUpdate:value":u[4]||(u[4]=d=>l(n).patt=d)},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[gn,o(l(P),{value:l(n).pdef,"onUpdate:value":u[5]||(u[5]=d=>l(n).pdef=d)},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[Bn,o(l(P),{value:l(n).matt,"onUpdate:value":u[6]||(u[6]=d=>l(n).matt=d)},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[wn,o(l(P),{value:l(n).mdef,"onUpdate:value":u[7]||(u[7]=d=>l(n).mdef=d)},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[kn,o(l(P),{value:l(n).huixin,"onUpdate:value":u[8]||(u[8]=d=>l(n).huixin=d)},null,8,["value"])]),_:1})])]),s("div",Dn,[s("div",En,[o(w,null,{default:c(()=>[Sn,q(s("select",{class:"input input-select","onUpdate:modelValue":u[9]||(u[9]=d=>l(n).stoneName=d)},[Un,(_(!0),$(R,null,T(l(Te),(d,Z)=>(_(),$("option",{key:Z,value:d.name},U(d.name),9,In))),128))],512),[[Se,l(n).stoneName]])]),_:1})]),s("div",Mn,[o(w,null,{default:c(()=>[An,o(l(P),{value:l(n).hsQixue,"onUpdate:value":u[10]||(u[10]=d=>l(n).hsQixue=d)},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[Vn,o(l(P),{value:l(n).hsPatt,"onUpdate:value":u[11]||(u[11]=d=>l(n).hsPatt=d)},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[Pn,o(l(P),{value:l(n).hsPdef,"onUpdate:value":u[12]||(u[12]=d=>l(n).hsPdef=d)},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[Rn,o(l(P),{value:l(n).hsMatt,"onUpdate:value":u[13]||(u[13]=d=>l(n).hsMatt=d)},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[qn,o(l(P),{value:l(n).hsMdef,"onUpdate:value":u[14]||(u[14]=d=>l(n).hsMdef=d)},null,8,["value"])]),_:1})])]),s("div",Tn,[s("div",Nn,[Hn,o(l(Be),{label:"?",inline:"",dir:"right"},{default:c(()=>[On,jn,Kn]),_:1})]),s("div",Gn,[o(w,null,{default:c(()=>[Qn,o(l(P),{value:l(n).xQixue,"onUpdate:value":u[15]||(u[15]=d=>l(n).xQixue=d),min:0,max:456,placeholder:"0~456"},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[Ln,o(l(P),{value:l(n).xPatt,"onUpdate:value":u[16]||(u[16]=d=>l(n).xPatt=d),min:0,max:202,placeholder:"0~202"},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[Jn,o(l(P),{value:l(n).xPdef,"onUpdate:value":u[17]||(u[17]=d=>l(n).xPdef=d),min:0,max:150,placeholder:"0~150"},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[zn,o(l(P),{value:l(n).xMatt,"onUpdate:value":u[18]||(u[18]=d=>l(n).xMatt=d),min:0,max:202,placeholder:"0~202"},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[Wn,o(l(P),{value:l(n).xMdef,"onUpdate:value":u[19]||(u[19]=d=>l(n).xMdef=d),min:0,max:150,placeholder:"0~150"},null,8,["value"])]),_:1}),o(w,null,{default:c(()=>[Xn,o(l(P),{value:l(n).xHuixin,"onUpdate:value":u[20]||(u[20]=d=>l(n).xHuixin=d),min:0,max:104,placeholder:"0~104"},null,8,["value"])]),_:1})])]),s("div",Yn,[Zn,s("div",xn,[(_(),$(R,null,T(V,d=>o(w,{key:d.n},{default:c(()=>[s("label",eo,U(d.t),1),s("div",to,[o(l(P),{readonly:"",value:l(n)[d.n]},null,8,["value"]),s("div",so,"+"+U(l(v)[d.n]),1)])]),_:2},1024)),64))])]),s("div",no,[oo,s("div",ao,[(_(),$(R,null,T(O,(d,Z)=>o(w,{key:Z},{default:c(()=>[s("label",lo,U(d.t),1),o(l(ge),{modelValue:l(n)[d.c],"onUpdate:modelValue":x=>l(n)[d.c]=x,result:l(n)[d.r],"onUpdate:result":x=>l(n)[d.r]=x},null,8,["modelValue","onUpdate:modelValue","result","onUpdate:result"])]),_:2},1024)),64))])]),s("div",uo,[io,s("div",ro,[(_(),$(R,null,T(V,d=>o(w,{key:d.n},{default:c(()=>[s("label",co,U(d.t),1),s("input",{class:"input",readonly:"",value:l(h)[d.n]},null,8,po)]),_:2},1024)),64))])])])])],512)),[[at,e.show]])}}});var mo=L(vo,[["__scopeId","data-v-1fd62c9a"]]);const fo=Q({components:{Calculator:Ts,CollapsePanel:sn,InputNumber:ct,HeroSelect:zs,IconCopy:Pe,IconEdit:ut,TransformToolsModal:mo},setup(){const e=z({index:-1,title:"",selecteds:[]}),t=N([]),n=async()=>{const a={id:Ie(),title:"\u6A21\u677F",basic:ht(),state:$t(),enemyState:Ct(),items:Ft()};await _t(a),t.value.push(a)},v=async C=>{if(!confirm("\u786E\u8BA4\u8981\u5220\u9664\u5417\uFF1F"))return;const g=t.value[C];await Me(g.id),t.value.splice(C,1)},h=async C=>{const a=t.value[C];if(!a)return;const g=e.title;if(!g){m();return}a.title=g,m(),await ue(a)},m=()=>{e.index=-1,e.title=""},r=C=>{const a=new Blob([JSON.stringify([C])],{type:"application/json"});Ae(a,`${C.title}.json`)},B=async C=>{t.value=C},k=N(""),S=C=>new Promise((a,g)=>{const M=new FileReader;M.onload=()=>{a(M.result)},M.onerror=()=>{g(M.error)},M.readAsText(C)}),i=async()=>{if(!!confirm("\u786E\u8BA4\u8981\u6E05\u7A7A\u6240\u6709\u6570\u636E\u5417\uFF1F")){if(e.selecteds.length>0){const a=e.selecteds.map(g=>t.value[g]);for(const g of a)await Me(g.id)}else await ft();ve()}},b=async C=>{const a=C.currentTarget,g=Array.prototype.slice.call(a.files);if(a.value="",!g||!g[0])return;const M=g[0],ne=await S(M),be=JSON.parse(ne);for(const ee of be){await ue(ee);const me=t.value.findIndex($e=>$e.id===ee.id);me===-1?t.value.push(ee):t.value[me]=ee}},V=async()=>{let C="calculator.json",a=t.value;e.selecteds.length>0&&(a=e.selecteds.map(M=>t.value[M]),C="calculator-selected.json");const g=new Blob([JSON.stringify(a)],{type:"application/json"});Ae(g,C)};async function O(C,a){!t.value[a]||(t.value[a]=C,await ue(C))}const p=N(-1),A=z({input:"2283/1.35*1.39",result:0}),{translate:K,xinhun:G,xinyao:F,huazhen:y}=pt(),f=C=>Math.ceil(C),u=z({show:!1}),w=C=>{const a=K(C);J.value&&J.value(C.name,a)},J=N(),Y=N(!1),d=N(-1),Z=N(null),x=C=>{Y.value=!0,d.value=C},_e=({item:C})=>{Y.value=!1;const a=d.value;if(a===-1)w(C);else{const M=t.value[a],ne=K(C);M.title==="\u6A21\u677F"&&(M.title=C.name),M.basic.w=Math.max(ne.patt,ne.matt),ue(M)}},he=C=>{const a=ie.cloneDeep(C);a.id=Ie(),console.log(a),t.value.push(a),ue(a)};async function ve(){const C=await mt();e.selecteds=[],B(C)}return it(()=>{ve()}),{vars:e,activeKey:p,quick:A,list:t,add:n,rename:h,renameClose:m,remove:v,itemExport:r,download:k,onUpdateData:O,clearAll:i,importData:b,exportData:V,heroes:dt,max:Math.max,modal:u,ceilResult:f,selectTpl:w,updateBasic:J,selectShow:Y,selectIndex:d,selectValue:Z,openSelect:x,selectHero:_e,copyItem:he,xinhun:G,xinyao:F,huazhen:y}}}),pe=e=>(re("data-v-248c4e44"),e=e(),ce(),e),_o={class:"wrapper"},ho={class:"toolbar"},bo={style:{padding:"6px 16px"}},$o=H("\u4F24\u5BB3\u8BA1\u7B97\u5668"),yo={class:"c-upload"},Fo=pe(()=>s("button",{class:"btn btn-success"},"\u5BFC\u5165",-1)),Co={style:{padding:"6px 16px"}},go={class:"input-group"},Bo=pe(()=>s("div",{class:"input-ext"},"=",-1)),wo={class:"content"},ko={class:"container"},Do=["value"],Eo=H(" \u2007 "),So=["onKeypress"],Uo={key:1},Io=["onClick"],Mo=["onClick"],Ao=["onClick"],Vo=H(" \u91CD\u547D\u540D "),Po=["onClick"],Ro=H(" \u590D\u5236 "),qo=["onClick"],To=["onClick"],No={style:{"text-align":"center"}},Ho=pe(()=>s("span",null,"\u661F\u8000",-1)),Oo=pe(()=>s("span",null,"\u5316\u81FB",-1)),jo=pe(()=>s("span",null,"\u661F\u9B42",-1));function Ko(e,t,n,v,h,m){const r=I("c-col"),B=I("c-row"),k=I("transform-tools-modal"),S=I("calc-input"),i=I("input-number"),b=I("IconEdit"),V=I("IconCopy"),O=I("Calculator",!0),p=I("CollapsePanel"),A=I("c-space"),K=I("HeroSelect"),G=Re("autofocus");return _(),$("div",_o,[s("div",ho,[s("div",bo,[o(B,{flex:"",middle:"",gutter:16},{default:c(()=>[o(r,{flex:"0 0 auto"},{default:c(()=>[$o]),_:1}),o(r,{flex:"0 0 auto"},{default:c(()=>[s("button",{class:"btn btn-sm btn-link",onClick:t[0]||(t[0]=F=>e.modal.show=!e.modal.show)}," \u9762\u677F "),e.vars.selecteds.length>0?(_(),$("button",{key:0,class:"btn btn-success",onClick:t[1]||(t[1]=F=>e.vars.selecteds=[])}," \u53D6\u6D88\u6240\u9009 ")):W("",!0)]),_:1}),o(r,{flex:"1 1 0"}),o(r,{flex:"0 0 auto"},{default:c(()=>[s("button",{class:"btn btn-danger",onClick:t[2]||(t[2]=(...F)=>e.clearAll&&e.clearAll(...F))},U(e.vars.selecteds.length>0?"\u5220\u9664\u6240\u9009":"\u6E05\u7A7A"),1),s("div",yo,[Fo,s("input",{type:"file",class:"c-upload-input",accept:"application/json",onInput:t[3]||(t[3]=(...F)=>e.importData&&e.importData(...F))},null,32)]),s("button",{class:"btn btn-success",onClick:t[4]||(t[4]=(...F)=>e.exportData&&e.exportData(...F))},U(e.vars.selecteds.length>0?"\u5BFC\u51FA\u6240\u9009":"\u5BFC\u51FA"),1),s("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=F=>e.add())},"\u6DFB\u52A0")]),_:1})]),_:1}),o(k,{show:e.modal.show,"onUpdate:show":t[6]||(t[6]=F=>e.modal.show=F),onReference:t[7]||(t[7]=F=>e.openSelect(-1)),onInit:t[8]||(t[8]=F=>e.updateBasic=F)},null,8,["show"])]),s("div",Co,[s("div",go,[o(S,{modelValue:e.quick.input,"onUpdate:modelValue":t[9]||(t[9]=F=>e.quick.input=F),result:e.quick.result,"onUpdate:result":t[10]||(t[10]=F=>e.quick.result=F),style:{flex:"3 3 0"}},null,8,["modelValue","result"]),Bo,o(i,{readonly:"",value:e.ceilResult(e.quick.result),style:{flex:"2 2 0"}},null,8,["value"])])])]),s("div",wo,[s("div",ko,[(_(!0),$(R,null,T(e.list,(F,y)=>(_(),le(p,{key:F.id,activeKey:y===e.activeKey,onToggle:f=>e.activeKey=f?y:-1},{header:c(()=>[o(B,{flex:"",middle:""},{default:c(()=>[o(r,null,{default:c(()=>[q(s("input",{class:"c-switch",type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=f=>e.vars.selecteds=f),value:y,onClick:t[12]||(t[12]=oe(()=>{},["stop"]))},null,8,Do),[[fe,e.vars.selecteds]]),Eo]),_:2},1024),o(r,null,{default:c(()=>[e.vars.index===y?q((_(),$("input",{key:0,type:"text",class:"input","onUpdate:modelValue":t[13]||(t[13]=f=>e.vars.title=f),onClick:t[14]||(t[14]=oe(()=>{},["stop"])),onKeypress:qe(f=>e.rename(y),["enter"])},null,40,So)),[[te,e.vars.title],[G]]):(_(),$("span",Uo,U(F.title),1))]),_:2},1024),o(r,{class:"ml-4",onClick:t[15]||(t[15]=oe(()=>{},["stop"]))},{default:c(()=>[e.vars.index===y?(_(),$("button",{key:0,class:"btn btn-sm btn-link",onClick:f=>e.rename(y)}," \u786E\u8BA4 ",8,Io)):(_(),$(R,{key:1},[s("button",{class:"btn btn-sm btn-link",onClick:f=>e.openSelect(y)}," \u9009\u62E9 ",8,Mo),s("button",{class:"btn btn-sm btn-link",onClick:f=>{e.vars.index=y,e.vars.title=F.title}},[o(b,{class:"svg-icon"}),Vo],8,Ao),s("button",{class:"btn btn-sm btn-link",onClick:f=>e.copyItem(F)},[o(V,{class:"svg-icon"}),Ro],8,Po)],64))]),_:2},1024)]),_:2},1024)]),actions:c(()=>[s("button",{class:"btn btn-sm btn-success-outline",onClick:f=>e.itemExport(F)}," \u5BFC\u51FA ",8,qo),s("button",{class:"btn btn-sm btn-danger-outline",onClick:f=>e.remove(y)}," \u5220\u9664 ",8,To)]),default:c(()=>[y===e.activeKey?(_(),le(O,{key:0,data:F,"onUpdate:data":f=>e.onUpdateData(f,y)},null,8,["data","onUpdate:data"])):W("",!0)]),_:2},1032,["activeKey","onToggle"]))),128))])]),o(K,{show:e.selectShow,"onUpdate:show":t[19]||(t[19]=F=>e.selectShow=F),onClick:e.selectHero},{extra:c(()=>[s("div",No,[o(A,null,{default:c(()=>[s("label",null,[Ho,q(s("input",{type:"checkbox","onUpdate:modelValue":t[16]||(t[16]=F=>e.xinyao=F)},null,512),[[fe,e.xinyao]])]),s("label",null,[Oo,q(s("input",{type:"checkbox","onUpdate:modelValue":t[17]||(t[17]=F=>e.huazhen=F)},null,512),[[fe,e.huazhen]])]),s("label",null,[jo,q(s("input",{type:"checkbox","onUpdate:modelValue":t[18]||(t[18]=F=>e.xinhun=F)},null,512),[[fe,e.xinhun]])])]),_:1})])]),_:1},8,["show","onClick"])])}var Xo=L(fo,[["render",Ko],["__scopeId","data-v-248c4e44"]]);export{Xo as default};
