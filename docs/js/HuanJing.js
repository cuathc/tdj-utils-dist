import{d as _,r as i,n as v,_ as h,o as a,c as u,g as e,F as m,k as y,i as g,A as b,e as f,y as E,h as d,p as D,m as F}from"./index.js";const L=[30,70,150,300,600,600,600,800,800,800,1e3,1e3,1e3,1200,1200,1200,2e3,2e3,2e3,0];function k(t){const l=[];for(let s=0,n=0;s<t.length;s++)l[s]={lvl:s+1,exp:t[s],total:n},n+=t[s];return l}const c=k(L),w=_({setup(){const t=i(1),l=i(0),s=v(()=>{const n=c[t.value-1];return c[c.length-1].total-n.total-l.value});return{levels:c,curLvl:t,curExp:l,curReq:s}}}),x=""+new URL("../assets/selected.svg",import.meta.url).href;const r=t=>(D("data-v-a71401e9"),t=t(),F(),t),C={class:"wrapper"},$={class:"content"},B={class:"table table-bordered text-center no-select",style:{width:"100%"}},I=r(()=>e("thead",null,[e("tr",null,[e("th",null,"\u4F4D\u9636"),e("th",null,"\u5347\u7EA7\u5386\u7EC3"),e("th",null,"\u7D2F\u8BA1\u5386\u7EC3")])],-1)),S=["onClick"],V={style:{position:"relative","padding-left":"24px"}},A={key:0,src:x,alt:"",width:"16",height:"16",style:{position:"absolute",left:"4px",top:"0",bottom:"0",margin:"auto"}},N={class:"row"},R={class:"col-8"},q=r(()=>e("div",{class:"label"},"\u5F53\u524D\u4F4D\u9636",-1)),H=["value"],J={class:"col-8"},T=r(()=>e("div",{class:"label"},"\u5F53\u524D\u5386\u7EC3",-1)),U={class:"col-8"},M=r(()=>e("div",{class:"label"},"\u6EE1\u9636\u8FD8\u9700",-1)),j=["value"];function z(t,l,s,n,p,G){return a(),u("div",C,[e("div",$,[e("table",B,[I,e("tbody",null,[(a(!0),u(m,null,y(t.levels,o=>(a(),u("tr",{key:o.lvl,onClick:K=>t.curLvl=o.lvl},[e("td",null,[e("div",V,[t.curLvl===o.lvl?(a(),u("img",A)):f("",!0),E(" "+d(o.lvl),1)])]),e("td",null,d(o.exp),1),e("td",null,d(o.total),1)],8,S))),128))])]),e("div",N,[e("div",R,[q,e("input",{class:"input",type:"number",min:"1",max:"20",readonly:"",value:t.curLvl},null,8,H)]),e("div",J,[T,g(e("input",{class:"input",type:"number","onUpdate:modelValue":l[0]||(l[0]=o=>t.curExp=o)},null,512),[[b,t.curExp]])]),e("div",U,[M,e("input",{class:"input",type:"number",readonly:"",value:t.curReq},null,8,j)])])])])}const P=h(w,[["render",z],["__scopeId","data-v-a71401e9"]]);export{P as default};
