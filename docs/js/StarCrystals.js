import{d as I,h as v,a as g,o as s,c as a,b as c,k as h,w as y,F as p,q as f,e as k,j as q,f as o,s as x,g as A,Q as T,l as u,x as N,y as U,_ as V}from"./index.js";import{S as r,a as $}from"./star-crystals.js";const b=_=>(N("data-v-a7e242ca"),_=_(),U(),_),X={class:"wrapper"},j={class:"toolbar"},z=b(()=>c("span",{class:"title"},"\u661F\u4E4B\u6676\u5217\u8868",-1)),L={class:"content"},M={class:"star-pos"},P=["onClick","onContextmenu"],Q={key:0},G={key:1},H={key:2},J={key:3},K={key:4},O={key:5},R={key:0},W={key:1},Y={key:2},Z={key:3},ee={key:4},se={key:5},ae=I({__name:"StarCrystals",setup(_){const d=v(!1),l=v(),C=v([{name:"\u6676\u7CB9\xB7\u9633",position:r.ATT},{name:"\u6676\u7CB9\xB7\u9633",position:r.ATT},{name:"\u6676\u7CB9\xB7\u9716",position:r.XUE},{name:"\u6676\u7CB9\xB7\u9716",position:r.XUE},{name:"\u6676\u7CB9\xB7\u8679",position:r.DEF},{name:"\u6676\u7CB9\xB7\u8679",position:r.DEF}]),B=t=>{l.value=t,d.value=!0},S=t=>{t.value=void 0,d.value=!0},m=t=>{!l.value||(l.value.value=t)},w=g(()=>{const t=[0,0,0,0,0,0];return C.value.forEach(n=>{!n.value||(t[0]+=n.value.qixue,t[1]+=n.value.patt,t[2]+=n.value.pdef,t[3]+=n.value.matt,t[4]+=n.value.mdef,t[5]+=n.value.huixin)}),t});return(t,n)=>{const F=x("c-col"),D=x("c-row");return s(),a("div",X,[c("div",j,[h(D,{flex:"",middle:"",style:{padding:"4px 16px"}},{default:y(()=>[h(F,{flex:"1 1 0"},{default:y(()=>[z]),_:1})]),_:1})]),c("div",L,[c("div",M,[(s(!0),a(p,null,f(C.value,(e,i)=>(s(),a("div",{key:i,class:A(["star-pos-item",{active:e===l.value}]),onClick:E=>B(e),onContextmenu:T(E=>S(e),["prevent"])},[c("div",null,u(e.name),1),e.value?(s(),a(p,{key:0},[e.value.patt?(s(),a("div",Q,"\u7269\u653B +"+u(e.value.patt),1)):o("",!0),e.value.matt?(s(),a("div",G,"\u6CD5\u653B +"+u(e.value.matt),1)):o("",!0),e.value.huixin?(s(),a("div",H,"\u4F1A\u5FC3 +"+u(e.value.huixin),1)):o("",!0),e.value.qixue?(s(),a("div",J,"\u6C14\u8840 +"+u(e.value.qixue),1)):o("",!0),e.value.pdef?(s(),a("div",K,"\u7269\u9632 +"+u(e.value.pdef),1)):o("",!0),e.value.mdef?(s(),a("div",O,"\u6CD5\u9632 +"+u(e.value.mdef),1)):o("",!0)],64)):o("",!0)],42,P))),128))]),(s(!0),a(p,null,f([k(w)],(e,i)=>(s(),a("div",{class:"sum-result props",key:i},[e[0]?(s(),a("span",R,"\u6C14\u8840 +"+u(e[0]),1)):o("",!0),e[1]?(s(),a("span",W,"\u7269\u653B +"+u(e[1]),1)):o("",!0),e[2]?(s(),a("span",Y,"\u7269\u9632 +"+u(e[2]),1)):o("",!0),e[3]?(s(),a("span",Z,"\u6CD5\u653B +"+u(e[3]),1)):o("",!0),e[4]?(s(),a("span",ee,"\u6CD5\u9632 +"+u(e[4]),1)):o("",!0),e[5]?(s(),a("span",se,"\u4F1A\u5FC3 +"+u(e[5]),1)):o("",!0)]))),128)),l.value?(s(),q(k($),{key:0,show:d.value,"onUpdate:show":n[0]||(n[0]=e=>d.value=e),position:l.value.position,onSelect:m},null,8,["show","position"])):o("",!0)])])}}});const ue=V(ae,[["__scopeId","data-v-a7e242ca"]]);export{ue as default};