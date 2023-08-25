import{d as G,r as w,_ as J,o as i,D as q,w as d,c as h,j as B,e as u,f as t,g as l,F as y,k as W,l as C,p as K,m as O,b as $,P as X,h as b,z as F,v as T}from"./index.js";import{s as Y}from"./data.js";import{t as Z,r as x,m as tt}from"./useStoneEmulator.js";const et=G({setup(){const e=w([]);return{list:Y,displays:e}}});const k=e=>(K("data-v-5e41c3fe"),e=e(),O(),e),ot={class:"table table-bordered",style:{width:"100%"}},st=["onClick"],nt={colspan:"6",class:"c-hover"},lt=["src"],at={style:{"font-size":"16px","font-weight":"700"}},ut=["innerHTML"],dt=k(()=>t("tr",null,[t("th"),t("th",null,"\u6C14\u8840"),t("th",null,"\u7269\u653B"),t("th",null,"\u6CD5\u653B"),t("th",null,"\u7269\u9632"),t("th",null,"\u6CD5\u9632")],-1)),ct={class:"text-center"},rt=k(()=>t("td",null,"\u5929",-1)),it={class:"text-center"},_t=k(()=>t("td",null,"\u5730",-1)),pt={class:"text-center"},ht=k(()=>t("td",null,"\u8352",-1));function ft(e,_,S,g,V,U){const n=C("c-col"),c=C("c-row");return i(),q(c,{gutter:"16"},{default:d(()=>[(i(!0),h(y,null,B(e.list,(s,v)=>(i(),q(n,{span:"16",class:"mb-2",key:s},{default:d(()=>[u(c,{flex:""},{default:d(()=>[u(n,{flex:"1 1 auto"},{default:d(()=>{var o,p,r,D,a,m,A,N,I,L,z,E,j,M,H;return[t("table",ot,[t("tbody",null,[t("tr",{onClick:P=>e.displays[v]=!e.displays[v]},[t("td",nt,[u(c,{flex:""},{default:d(()=>[u(n,{flex:"0 0 0"},{default:d(()=>[t("img",{class:"mr-2",src:s.icon,width:"60",height:"60",alt:""},null,8,lt)]),_:2},1024),u(n,{flex:"1 1 auto"},{default:d(()=>[t("div",at,l(s.name),1),(i(!0),h(y,null,B(s.desc,(P,R)=>(i(),h("div",{key:R,innerHTML:P.replace(/[-+]?\d+[%]?/g,"<span style='color:red'> $& </span>")},null,8,ut))),128))]),_:2},1024)]),_:2},1024)])],8,st),e.displays[v]?(i(),h(y,{key:0},[dt,t("tr",ct,[rt,t("td",null,l((o=s.t)==null?void 0:o[0]),1),t("td",null,l((p=s.t)==null?void 0:p[1]),1),t("td",null,l((r=s.t)==null?void 0:r[2]),1),t("td",null,l((D=s.t)==null?void 0:D[3]),1),t("td",null,l((a=s.t)==null?void 0:a[4]),1)]),t("tr",it,[_t,t("td",null,l((m=s.d)==null?void 0:m[0]),1),t("td",null,l((A=s.d)==null?void 0:A[1]),1),t("td",null,l((N=s.d)==null?void 0:N[2]),1),t("td",null,l((I=s.d)==null?void 0:I[3]),1),t("td",null,l((L=s.d)==null?void 0:L[4]),1)]),t("tr",pt,[ht,t("td",null,l((z=s.h)==null?void 0:z[0]),1),t("td",null,l((E=s.h)==null?void 0:E[1]),1),t("td",null,l((j=s.h)==null?void 0:j[2]),1),t("td",null,l((M=s.h)==null?void 0:M[3]),1),t("td",null,l((H=s.h)==null?void 0:H[4]),1)])],64)):W("",!0)])])]}),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}const Q=J(et,[["render",ft],["__scopeId","data-v-5e41c3fe"]]),mt=Q,vt=G({components:{StoneList:mt},setup(){const e=w(!1),_=$({a1:11,a2:10,a3:6,a4:3,a5:1,d1:7,d2:5,d3:5,d4:1,d5:1,d6:0}),S=$({a1:0,a2:0,a3:0,a4:0,a5:1,d1:12,d2:9,d3:9,d4:2,d5:2,d6:0}),g=$({a1:12,a2:1,a3:0,a4:0,a5:0,d1:9,d2:8,d3:8,d4:1,d5:1,d6:0}),V=[{name:"p1",text:"\u6781\u54C1"},{name:"p2",text:"\u4F18\u79C0"},{name:"p3",text:"\u826F\u597D"},{name:"p4",text:"\u4E00\u822C"}],U=["one","two","three","four"],n=$({one:"a1",two:"a2",three:"a3",four:"a4"}),c=$({one:1,two:1,three:1,four:1}),s=w("A"),v=w("T"),o=a=>{let m=0;return a[n.one]&&(m+=a[n.one]*c.one),a[n.two]&&(m+=a[n.two]*c.two),a[n.three]&&(m+=a[n.three]*c.three),a[n.four]&&(m+=a[n.four]*c.four),m};function p(){let a=0;switch(s.value){case"A":a+=o(_);break;case"D":a+=o(S);break;case"N":a+=o(g);break}return a}const r=w(0);return{t:Z,setting:e,stateA:_,stateD:S,stateN:g,rules:x,models:tt,models2:V,names:U,formState:n,formStateValue:c,jobType:s,stoneType:v,score:r,onUpdate:a=>{a.currentTarget.reportValidity()&&(r.value=p())}}}});const f=e=>(K("data-v-f3fb6e8a"),e=e(),O(),e),bt={class:"wrapper"},yt={class:"toobar"},$t={class:"table table-horizontal table-nopadding",style:{width:"280px"}},wt=f(()=>t("thead",null,[t("tr",null,[t("th",{width:"25%"},[t("div",{class:"label"},"\u8BCD\u6761")]),t("th",{width:"25%"},[t("div",{class:"label"},"\u8F93\u51FA")]),t("th",{width:"25%"},[t("div",{class:"label"},"\u5766\u514B")]),t("th",{width:"25%"},[t("div",{class:"label"},"\u6CBB\u7597")])])],-1)),Bt={class:"label"},Ct=["onUpdate:modelValue"],St=["onUpdate:modelValue"],gt=["onUpdate:modelValue"],kt={class:"affix"},Vt={class:"form-item-inline"},Ut=f(()=>t("div",{class:"label-control"},"\u804C\u4E1A\u7C7B\u578B",-1)),Dt=f(()=>t("option",{value:"A"},"\u8F93\u51FA",-1)),Ft=f(()=>t("option",{value:"D"},"\u5766\u514B",-1)),Tt=f(()=>t("option",{value:"N"},"\u6CBB\u7597",-1)),At=[Dt,Ft,Tt],Nt={class:"form-item-inline"},It=f(()=>t("div",{class:"label-control"},"\u9B42\u77F3\u7C7B\u578B",-1)),Lt=f(()=>t("option",{value:"T"},"\u5929",-1)),zt=f(()=>t("option",{value:"D"},"\u5730",-1)),Et=f(()=>t("option",{value:"H"},"\u8352",-1)),jt=[Lt,zt,Et],Mt={class:"label-control"},Ht=["onUpdate:modelValue"],Pt=["value"],qt={class:"score-box"},Gt=f(()=>t("span",{class:"text-bold"},"\u9B42\u77F3\u5F97\u5206\uFF1A",-1)),Jt={style:{color:"#ff4446","font-size":"125%"}},Kt={class:"content"};function Ot(e,_,S,g,V,U){const n=C("c-col"),c=C("c-row"),s=C("c-input-number"),v=Q;return i(),h("div",bt,[t("div",yt,[u(c,{flex:"",middle:"",style:{padding:"5px 15px"}},{default:d(()=>[u(n,{flex:"1 0 auto"}),u(n,{flex:"0 0 auto"},{default:d(()=>[t("button",{class:"btn",onClick:_[0]||(_[0]=o=>e.setting=!e.setting)},"\u8BBE\u7F6E")]),_:1})]),_:1}),t("div",{class:X(["setting",{block:e.setting}])},[u(c,null,{default:d(()=>[u(n,{span:"24"},{default:d(()=>[t("table",$t,[wt,t("tbody",null,[(i(!0),h(y,null,B(e.models,o=>(i(),h("tr",{key:o.name},[t("td",null,[t("div",Bt,l(e.t[o.name]),1)]),t("td",null,[b(t("input",{type:"number",class:"input",min:"0","onUpdate:modelValue":p=>e.stateA[o.name]=p},null,8,Ct),[[F,e.stateA[o.name]]])]),t("td",null,[b(t("input",{type:"number",class:"input",min:"0","onUpdate:modelValue":p=>e.stateD[o.name]=p},null,8,St),[[F,e.stateD[o.name]]])]),t("td",null,[b(t("input",{type:"number",class:"input",min:"0","onUpdate:modelValue":p=>e.stateN[o.name]=p},null,8,gt),[[F,e.stateN[o.name]]])])]))),128))])])]),_:1})]),_:1})],2)]),t("div",kt,[t("form",{onChange:_[3]||(_[3]=(...o)=>e.onUpdate&&e.onUpdate(...o))},[u(c,null,{default:d(()=>[u(n,{span:"18"},{default:d(()=>[t("div",Vt,[Ut,b(t("select",{class:"select","onUpdate:modelValue":_[1]||(_[1]=o=>e.jobType=o)},At,512),[[T,e.jobType]])]),t("div",Nt,[It,b(t("select",{class:"select","onUpdate:modelValue":_[2]||(_[2]=o=>e.stoneType=o)},jt,512),[[T,e.stoneType]])])]),_:1}),u(n,{span:"18"},{default:d(()=>[(i(!0),h(y,null,B(e.names,(o,p)=>(i(),h("div",{class:"form-item",key:o},[t("div",Mt,"\u8BCD\u6761"+l("1234"[p]),1),b(t("select",{class:"select","onUpdate:modelValue":r=>e.formState[o]=r},[(i(!0),h(y,null,B(e.models,r=>(i(),h("option",{value:r.name,key:r.name},l(e.t[r.name]),9,Pt))),128))],8,Ht),[[T,e.formState[o]]]),u(s,{class:"auto-width",value:e.formStateValue[o],"onUpdate:value":r=>e.formStateValue[o]=r,min:e.rules[e.stoneType][e.formState[o]][0],max:e.rules[e.stoneType][e.formState[o]][1]},null,8,["value","onUpdate:value","min","max"])]))),128))]),_:1})]),_:1})],32),t("div",qt,[Gt,t("span",Jt,l(e.score),1)])]),t("div",Kt,[u(v)])])}const Xt=J(vt,[["render",Ot],["__scopeId","data-v-f3fb6e8a"]]);export{Xt as default};
