import{d as a,_ as r,o as l,c}from"./index.js";const i=a({props:{value:[Number,String]},emits:["update:value"],setup(t,{emit:e}){return{onInput:o=>{const n=o.currentTarget;n.reportValidity();const u=n.value;e("update:value",u)}}}}),d=["value"];function v(t,e,p,o,n,u){return l(),c("input",{class:"input",type:"text",value:t.value,onInput:e[0]||(e[0]=(...s)=>t.onInput&&t.onInput(...s))},null,40,d)}const m=r(i,[["render",v]]);export{m as default};
