import{d as w,C as f,a as v,o as a,D as y,f as o,E as h,G as g,u as l,c as m,H as d,k as c,n as k,T as _}from"./index.js";const $={key:0,class:"modal-header"},b={class:"modal-body"},B={key:1,class:"modal-footer"},N=w({__name:"Modal",props:{show:{type:Boolean},width:null,height:null},emits:["close","update:show"],setup(t,{emit:n}){const r=t,i=f(),u=v(()=>{const e=r.width||600,s=r.height||400;return{width:`min(${Number(e)?`${e}px`:e},100vw)`,height:`min(${Number(s)?`${s}px`:s},100vh)`}}),p=()=>{n("update:show",!1),n("close")};return(e,s)=>(a(),y(_,{to:"body",disabled:!t.show},[o("div",k({class:["modal",{show:t.show}]},e.$attrs),[o("div",{class:"modal-mask",onClick:p,onWheel:s[0]||(s[0]=h(()=>{},["prevent"]))},null,32),o("div",{class:"modal-dialog",style:g(l(u)),onWheel:s[1]||(s[1]=h(()=>{},["stop"]))},[l(i).header?(a(),m("div",$,[d(e.$slots,"header")])):c("",!0),o("div",b,[d(e.$slots,"default")]),l(i).footer?(a(),m("div",B,[d(e.$slots,"footer")])):c("",!0)],36)],16)],8,["disabled"]))}});export{N as _};