import{d as J,q as B,_ as K,r as w,o as i,f as G,j as d,c as f,i as S,h as u,a as t,g as n,F as y,k as R,p as O,b as P,C,l as W,w as $,N as F,v as T}from"./index.js";import{s as X}from"./data.js";import{t as Y,r as Z,m as x}from"./data2.js";const tt=J({setup(){const e=B([]);return{list:X,displays:e}}}),V=e=>(O("data-v-38df1538"),e=e(),P(),e),et={class:"table table-bordered",style:{width:"100%"}},ot=["onClick"],st={colspan:"6",class:"c-hover"},nt=["src"],lt={style:{"font-size":"16px","font-weight":"700"}},at=["innerHTML"],ut=V(()=>t("tr",null,[t("th"),t("th",null,"\u6C14\u8840"),t("th",null,"\u7269\u653B"),t("th",null,"\u6CD5\u653B"),t("th",null,"\u7269\u9632"),t("th",null,"\u6CD5\u9632")],-1)),dt={class:"text-center"},rt=V(()=>t("td",null,"\u5929",-1)),ct={class:"text-center"},it=V(()=>t("td",null,"\u5730",-1)),_t={class:"text-center"},pt=V(()=>t("td",null,"\u8352",-1));function ht(e,c,g,k,U,_){const a=w("c-col"),h=w("c-row");return i(),G(h,{gutter:"16"},{default:d(()=>[(i(!0),f(y,null,S(e.list,(s,m)=>(i(),G(a,{span:"16",class:"mb-2",key:s},{default:d(()=>[u(h,{flex:""},{default:d(()=>[u(a,{flex:"1 1 auto"},{default:d(()=>{var o,r,p,l,b,D,A,N,L,I,E,j,z,M,H;return[t("table",et,[t("tbody",null,[t("tr",{onClick:q=>e.displays[m]=!e.displays[m]},[t("td",st,[u(h,{flex:""},{default:d(()=>[u(a,{flex:"0 0 0"},{default:d(()=>[t("img",{class:"mr-2",src:s.icon,width:"60",height:"60",alt:""},null,8,nt)]),_:2},1024),u(a,{flex:"1 1 auto"},{default:d(()=>[t("div",lt,n(s.name),1),(i(!0),f(y,null,S(s.desc,(q,Q)=>(i(),f("div",{key:Q,innerHTML:q.replace(/[-+]?\d+[%]?/g,"<span style='color:red'> $& </span>")},null,8,at))),128))]),_:2},1024)]),_:2},1024)])],8,ot),e.displays[m]?(i(),f(y,{key:0},[ut,t("tr",dt,[rt,t("td",null,n((o=s.t)==null?void 0:o[0]),1),t("td",null,n((r=s.t)==null?void 0:r[1]),1),t("td",null,n((p=s.t)==null?void 0:p[2]),1),t("td",null,n((l=s.t)==null?void 0:l[3]),1),t("td",null,n((b=s.t)==null?void 0:b[4]),1)]),t("tr",ct,[it,t("td",null,n((D=s.d)==null?void 0:D[0]),1),t("td",null,n((A=s.d)==null?void 0:A[1]),1),t("td",null,n((N=s.d)==null?void 0:N[2]),1),t("td",null,n((L=s.d)==null?void 0:L[3]),1),t("td",null,n((I=s.d)==null?void 0:I[4]),1)]),t("tr",_t,[pt,t("td",null,n((E=s.h)==null?void 0:E[0]),1),t("td",null,n((j=s.h)==null?void 0:j[1]),1),t("td",null,n((z=s.h)==null?void 0:z[2]),1),t("td",null,n((M=s.h)==null?void 0:M[3]),1),t("td",null,n((H=s.h)==null?void 0:H[4]),1)])],64)):R("",!0)])])]}),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}var ft=K(tt,[["render",ht],["__scopeId","data-v-38df1538"]]);const vt=J({components:{StoneList:ft},setup(){const e=B(!1),c=C({a1:11,a2:10,a3:6,a4:3,a5:1,d1:7,d2:5,d3:5,d4:1,d5:1,d6:0}),g=C({a1:0,a2:0,a3:0,a4:0,a5:1,d1:12,d2:9,d3:9,d4:2,d5:2,d6:0}),k=C({a1:12,a2:1,a3:0,a4:0,a5:0,d1:9,d2:8,d3:8,d4:1,d5:1,d6:0}),U=[{name:"p1",text:"\u6781\u54C1"},{name:"p2",text:"\u4F18\u79C0"},{name:"p3",text:"\u826F\u597D"},{name:"p4",text:"\u4E00\u822C"}],_=C({one:"a1",two:"a2",three:"a3",four:"a4"}),a=C({one:1,two:1,three:1,four:1}),h=B("A"),s=B("T"),m=l=>{let b=0;return l[_.one]&&(b+=l[_.one]*a.one),l[_.two]&&(b+=l[_.two]*a.two),l[_.three]&&(b+=l[_.three]*a.three),l[_.four]&&(b+=l[_.four]*a.four),b};function o(){let l=0;switch(h.value){case"A":l+=m(c);break;case"D":l+=m(g);break;case"N":l+=m(k);break}return l}const r=B(0);return{t:Y,setting:e,stateA:c,stateD:g,stateN:k,rules:Z,models:x,models2:U,formState:_,formStateValue:a,jobType:h,stoneType:s,score:r,onUpdate:l=>{l.currentTarget.reportValidity()&&(r.value=o())}}}}),v=e=>(O("data-v-5b618451"),e=e(),P(),e),mt={class:"wrapper affix"},bt={class:"toobar"},yt={class:"table table-horizontal table-nopadding",style:{width:"280px"}},$t=v(()=>t("thead",null,[t("tr",null,[t("th",{width:"25%"},[t("div",{class:"label"},"\u8BCD\u6761")]),t("th",{width:"25%"},[t("div",{class:"label"},"\u8F93\u51FA")]),t("th",{width:"25%"},[t("div",{class:"label"},"\u5766\u514B")]),t("th",{width:"25%"},[t("div",{class:"label"},"\u6CBB\u7597")])])],-1)),wt={class:"label"},Ct=["onUpdate:modelValue"],Bt=["onUpdate:modelValue"],St=["onUpdate:modelValue"],gt={class:"content"},kt={class:"form-item-inline"},Vt=v(()=>t("div",{class:"label-control"},"\u804C\u4E1A\u7C7B\u578B",-1)),Ut=v(()=>t("option",{value:"A"},"\u8F93\u51FA",-1)),Ft=v(()=>t("option",{value:"D"},"\u5766\u514B",-1)),Tt=v(()=>t("option",{value:"N"},"\u6CBB\u7597",-1)),Dt=[Ut,Ft,Tt],At={class:"form-item-inline"},Nt=v(()=>t("div",{class:"label-control"},"\u9B42\u77F3\u7C7B\u578B",-1)),Lt=v(()=>t("option",{value:"T"},"\u5929",-1)),It=v(()=>t("option",{value:"D"},"\u5730",-1)),Et=v(()=>t("option",{value:"H"},"\u8352",-1)),jt=[Lt,It,Et],zt={class:"label-control"},Mt=["onUpdate:modelValue"],Ht=["value"],qt={class:"score-box"},Gt=v(()=>t("span",{class:"text-bold"},"\u9B42\u77F3\u5F97\u5206\uFF1A",-1)),Jt={style:{color:"#ff4446","font-size":"125%"}},Kt={class:"content"};function Ot(e,c,g,k,U,_){const a=w("c-col"),h=w("c-row"),s=w("c-input-number"),m=w("StoneList");return i(),f(y,null,[t("div",mt,[t("div",bt,[u(h,{flex:"",middle:"",style:{padding:"5px 15px"}},{default:d(()=>[u(a,{flex:"1 0 auto"}),u(a,{flex:"0 0 auto"},{default:d(()=>[t("button",{class:"btn",onClick:c[0]||(c[0]=o=>e.setting=!e.setting)},"\u8BBE\u7F6E")]),_:1})]),_:1}),t("div",{class:W(["setting",{block:e.setting}])},[u(h,null,{default:d(()=>[u(a,{span:"24"},{default:d(()=>[t("table",yt,[$t,t("tbody",null,[(i(!0),f(y,null,S(e.models,o=>(i(),f("tr",{key:o.name},[t("td",null,[t("div",wt,n(e.t[o.name]),1)]),t("td",null,[$(t("input",{type:"number",class:"input",min:"0","onUpdate:modelValue":r=>e.stateA[o.name]=r},null,8,Ct),[[F,e.stateA[o.name]]])]),t("td",null,[$(t("input",{type:"number",class:"input",min:"0","onUpdate:modelValue":r=>e.stateD[o.name]=r},null,8,Bt),[[F,e.stateD[o.name]]])]),t("td",null,[$(t("input",{type:"number",class:"input",min:"0","onUpdate:modelValue":r=>e.stateN[o.name]=r},null,8,St),[[F,e.stateN[o.name]]])])]))),128))])])]),_:1})]),_:1})],2)]),t("div",gt,[t("form",{onChange:c[3]||(c[3]=(...o)=>e.onUpdate&&e.onUpdate(...o))},[u(h,null,{default:d(()=>[u(a,{span:"18"},{default:d(()=>[t("div",kt,[Vt,$(t("select",{class:"select","onUpdate:modelValue":c[1]||(c[1]=o=>e.jobType=o)},Dt,512),[[T,e.jobType]])]),t("div",At,[Nt,$(t("select",{class:"select","onUpdate:modelValue":c[2]||(c[2]=o=>e.stoneType=o)},jt,512),[[T,e.stoneType]])])]),_:1}),u(a,{span:"18"},{default:d(()=>[(i(),f(y,null,S(["one","two","three","four"],(o,r)=>t("div",{class:"form-item",key:o},[t("div",zt,"\u8BCD\u6761"+n("1234"[r]),1),$(t("select",{class:"select","onUpdate:modelValue":p=>e.formState[o]=p},[(i(!0),f(y,null,S(e.models,p=>(i(),f("option",{value:p.name,key:p.name},n(e.t[p.name]),9,Ht))),128))],8,Mt),[[T,e.formState[o]]]),u(s,{class:"auto-width",value:e.formStateValue[o],"onUpdate:value":p=>e.formStateValue[o]=p,min:e.rules[e.stoneType][e.formState[o]][0],max:e.rules[e.stoneType][e.formState[o]][1]},null,8,["value","onUpdate:value","min","max"])])),64))]),_:1})]),_:1})],32),t("div",qt,[Gt,t("span",Jt,n(e.score),1)])])]),t("div",Kt,[u(m)])],64)}var Wt=K(vt,[["render",Ot],["__scopeId","data-v-5b618451"]]);export{Wt as default};
