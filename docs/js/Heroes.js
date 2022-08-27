import{d as Q,_ as W,o as f,c as $,t as ae,a as Y,b as ie,e,f as b,g as r,w as E,v as j,F as I,r as z,h as A,n as ce,i as de,T as re,j as _e,k as V,p as Z,l as ee,m as pe,q as K,s as C,u as v,x as he,y as N,z as y,A as ve,I as fe,B as me,C as H,D as be}from"./index.js";import{u as $e,a as ye,i as Ce,b as Ee,d as Fe}from"./shared.js";import{_ as X}from"./lodash.js";const we=Q({props:{type:String},setup(){return{}}});const Be={key:0,class:"c-sort-desc"},ge={key:1,class:"c-sort-asc"},ke={key:2,class:"c-sort-none"};function De(n,l,c,U,k,w){return n.type==="DESC"?(f(),$("span",Be)):n.type==="ASC"?(f(),$("span",ge)):(f(),$("span",ke))}const S=W(we,[["render",De]]),xe=Q({props:{record:Object,width:String,height:String},emits:["update:record","save"],setup(n,{emit:l}){const c=[["qixue","\u6C14\u8840"],["physical_attack","\u7269\u653B"],["physical_defense","\u7269\u9632"],["magic_attack","\u6CD5\u653B"],["magic_defense","\u6CD5\u9632"],["huixin","\u4F1A\u5FC3"]],U=ae(n,"record"),k=Y(()=>{const m=n.width||600,i=n.height||400;return{width:Number(m)?`${m}px`:m,height:Number(i)?`${i}px`:i}});return{names:c,model:U,dialogStyle:k,onEditorSave:m=>{!m||(l("save",m),l("update:record",void 0))},onEditorCanel:()=>{l("update:record",void 0)},prefixNames:(m,i)=>c.map(([D,B])=>[m.replace("$&",D),i.replace("$&",B)])}}});const _=n=>(Z("data-v-cf0df1de"),n=n(),ee(),n),Se={key:0,class:_e(["modal active"])},Ae={class:"modal-body"},Ie={class:"models-container"},Ve={class:"models"},Ue={class:"model-item"},Ne=_(()=>e("label",null,"ID",-1)),qe={class:"input"},Te={class:"model-item"},He=_(()=>e("label",null,"\u540D\u79F0",-1)),je={class:"model-item"},ze=_(()=>e("label",null,"\u5C5E\u76F8",-1)),Oe=_(()=>e("option",{value:"\u708E"},"\u708E",-1)),Me=_(()=>e("option",{value:"\u96F7"},"\u96F7",-1)),Re=_(()=>e("option",{value:"\u51B0"},"\u51B0",-1)),Je=_(()=>e("option",{value:"\u5149"},"\u5149",-1)),Pe=_(()=>e("option",{value:"\u6697"},"\u6697",-1)),Le=[Oe,Me,Re,Je,Pe],Ge={class:"model-item"},Ke=_(()=>e("label",null,"\u804C\u4E1A",-1)),Qe=_(()=>e("option",{value:"\u94C1\u536B"},"\u94C1\u536B",-1)),We=_(()=>e("option",{value:"\u4FA0\u5BA2"},"\u4FA0\u5BA2",-1)),Xe=_(()=>e("option",{value:"\u5492\u5E08"},"\u5492\u5E08",-1)),Ye=_(()=>e("option",{value:"\u795D\u7531"},"\u795D\u7531",-1)),Ze=_(()=>e("option",{value:"\u5FA1\u98CE"},"\u5FA1\u98CE",-1)),et=_(()=>e("option",{value:"\u7FBD\u58EB"},"\u7FBD\u58EB",-1)),tt=[Qe,We,Xe,Ye,Ze,et],st={class:"modal-footer"};function ot(n,l,c,U,k,w){const q=V("c-input-text"),T=V("c-input-number"),m=V("c-space");return f(),ie(re,{to:"body"},[n.model?(f(),$("div",Se,[e("div",{class:"modal-mask",onClick:l[0]||(l[0]=(...i)=>n.onEditorCanel&&n.onEditorCanel(...i))}),e("div",{class:"modal-dialog",style:ce(n.dialogStyle)},[e("div",Ae,[e("div",Ie,[e("div",Ve,[e("div",Ue,[Ne,e("div",qe,b(n.model.id),1)]),e("div",Te,[He,r(q,{value:n.model.name,"onUpdate:value":l[1]||(l[1]=i=>n.model.name=i)},null,8,["value"])]),e("div",je,[ze,E(e("select",{class:"input","onUpdate:modelValue":l[2]||(l[2]=i=>n.model.prop=i)},Le,512),[[j,n.model.prop]])]),e("div",Ge,[Ke,E(e("select",{class:"input","onUpdate:modelValue":l[3]||(l[3]=i=>n.model.career=i)},tt,512),[[j,n.model.career]])])]),(f(),$(I,null,z([["panel_$&","\u9762\u677F$&"],["basic_$&","\u57FA\u7840$&"],["weapon_$&","\u5175\u5203$&"],["equipment1_$&","\u5934\u90E8$&"],["equipment2_$&","\u8EAB\u4F53$&"],["equipment3_$&","\u8170\u90E8$&"],["equipment4_$&","\u624B\u90E8$&"],["wunei0_$&","\u4E3B\u7EBF$&"],["wunei1_$&","\u4E0A\u7EBF$&"],["wunei2_$&","\u4E0B\u7EBF$&"],["huazhen_$&","\u5316\u81FB$&"],["$&","0\u7EA7$&"],["$&_cz","$&\u6210\u957F"]],([i,D])=>e("div",{class:"models",key:i},[(f(!0),$(I,null,z(n.prefixNames(i,D),([B,O])=>(f(),$("div",{class:"model-item",key:B},[e("label",null,b(O),1),r(T,{value:n.model[B],"onUpdate:value":M=>n.model[B]=M},null,8,["value","onUpdate:value"])]))),128))])),64))])]),e("div",st,[r(m,null,{default:A(()=>[e("button",{class:"btn btn-sm btn-primary-outline",onClick:l[4]||(l[4]=i=>n.onEditorSave(n.model))}," \u4FDD\u5B58 "),e("button",{class:"btn btn-sm btn-danger-outline",onClick:l[5]||(l[5]=i=>n.onEditorCanel())}," \u53D6\u6D88 ")]),_:1})])],4)])):de("",!0)])}const nt=W(xe,[["render",ot],["__scopeId","data-v-cf0df1de"]]),a=n=>(Z("data-v-2baf32c7"),n=n(),ee(),n),lt={class:"toolbar"},ut=a(()=>e("span",{class:"title"},"\u4EBA\u7269\u5217\u8868",-1)),at={class:"label-control-inline"},it=a(()=>e("span",null,"\u540D\u5B57",-1)),ct={class:"label-control-inline"},dt=a(()=>e("span",null,"\u5C5E\u6027",-1)),rt=a(()=>e("option",{value:""},"\u5168\u90E8",-1)),_t=a(()=>e("option",{value:"\u708E"},"\u708E",-1)),pt=a(()=>e("option",{value:"\u96F7"},"\u96F7",-1)),ht=a(()=>e("option",{value:"\u51B0"},"\u51B0",-1)),vt=a(()=>e("option",{value:"\u5149"},"\u5149",-1)),ft=a(()=>e("option",{value:"\u6697"},"\u6697",-1)),mt=[rt,_t,pt,ht,vt,ft],bt={class:"label-control-inline"},$t=a(()=>e("span",null,"\u804C\u4E1A",-1)),yt=a(()=>e("option",{value:""},"\u5168\u90E8",-1)),Ct=a(()=>e("option",{value:"\u94C1\u536B"},"\u94C1\u536B",-1)),Et=a(()=>e("option",{value:"\u4FA0\u5BA2"},"\u4FA0\u5BA2",-1)),Ft=a(()=>e("option",{value:"\u5492\u5E08"},"\u5492\u5E08",-1)),wt=a(()=>e("option",{value:"\u795D\u7531"},"\u795D\u7531",-1)),Bt=a(()=>e("option",{value:"\u5FA1\u98CE"},"\u5FA1\u98CE",-1)),gt=a(()=>e("option",{value:"\u7FBD\u58EB"},"\u7FBD\u58EB",-1)),kt=[yt,Ct,Et,Ft,wt,Bt,gt],Dt={class:"c-label"},xt=y(" \u661F\u8000 "),St={class:"c-label"},At=y(" \u5316\u81FB "),It={class:"c-label"},Vt=y(" \u661F\u9B42 "),Ut={class:"c-label"},Nt=y(" \u661F\u8F89 "),qt={class:"c-upload"},Tt=a(()=>e("button",{class:"btn btn-success"},"\u5BFC\u5165",-1)),Ht={class:"content"},jt={class:"table-wrap"},zt={class:"table table-bordered",style:{"min-width":"100%"}},Ot=a(()=>e("colgroup",null,[e("col",{width:"60"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"100"})],-1)),Mt={style:{position:"sticky",top:"100px"}},Rt=a(()=>e("th",null,"#",-1)),Jt=a(()=>e("th",null,"\u540D\u5B57",-1)),Pt=y(" \u6C14\u8840 "),Lt=y(" \u7269\u653B "),Gt=y(" \u7269\u9632 "),Kt=y(" \u6CD5\u653B "),Qt=y(" \u6CD5\u9632 "),Wt=y(" \u4F1A\u5FC3 "),Xt=a(()=>e("th",null,"\u5C5E\u6027",-1)),Yt=a(()=>e("th",null,"\u804C\u4E1A",-1)),Zt=a(()=>e("th",null,"\u64CD\u4F5C",-1)),es={class:"cell-static text-center"},ts={class:"cell-static text-center"},ss={class:"cell-static text-center"},os={class:"cell-static text-center"},ns={class:"cell-static text-center"},ls={class:"cell-static text-center"},us={class:"cell-static text-center"},as={class:"cell-static text-center"},is={class:"cell-static text-center"},cs={class:"cell-static text-center"},ds={class:"cell-static"},rs=["onClick"],_s=["onClick"],ps=Q({__name:"Heroes",setup(n){const l=fe(),c=pe({name:"",prop:"",career:""}),U=Y(()=>oe(C.value)),k=K(-1),{editor:w,defaultHeroState:q}=$e(),T=o=>{const t=C.value.find(u=>u.id===o);!t||(k.value=o,w.value=X.cloneDeep(t))},m=async o=>{k.value=-1;const t=C.value.find(u=>u.id===o.id);if(!!t){Object.assign(t,o);try{if(!l)return;await l.connect(),await l.put("heroes",X.cloneDeep(t))}catch(u){console.log(u)}}};function i(o){if(o instanceof Error)switch(o.name){case"ConstraintError":alert("\u6570\u636E\u5DF2\u7ECF\u5B58\u5728");break;default:alert(o.message)}else alert(o)}async function D(){try{await ve()}catch(o){i(o)}}async function B(){try{if(!l)return;const o=q();await l.connect(),delete o.id;const t=await l.add("heroes",o),u=await l.get("heroes",t);if(!u)return;C.value.push(u)}catch(o){i(o)}}async function O(o){try{if(!l||!o.id||!confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F"))return;await l.connect(),await l.delete("heroes",o.id),C.value=C.value.filter(t=>t.id!==o.id)}catch(t){i(t)}}function M(o){return new Promise((t,u)=>{const d=new FileReader;d.onload=()=>{t(JSON.parse(d.result))},d.onerror=()=>{u(d.error)},d.readAsText(o)})}async function te(o){try{const t=o.currentTarget,u=t.files;if(!u||!l)return;await l.connect(),console.log("\u6570\u636E\u5BFC\u5165\u5F00\u59CB");for(let d=0;d<u.length;d++){const g=await M(u[d]);let s=[];if(Ce(g))s=g;else if(Ee(g)&&g.type==="heroes")s=g.data;else{alert("\u5BFC\u5165\u7684\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E");return}for(const G of s)await l.put("heroes",G);console.log("\u6570\u636E\u5BFC\u5165\u7ED3\u675F")}t.value="",D()}catch(t){i(t)}}function se(){const o=new Blob([JSON.stringify({type:"heroes",data:C.value})]);Fe(o,"heroes.json")}const p=K("name"),h=K("");function x(o){if(p.value===o)switch(h.value){case"DESC":h.value="ASC";break;case"ASC":h.value="";break;default:h.value="DESC"}else p.value=o,h.value="DESC"}function oe(o){let t=o.slice();return c.name&&(t=t.filter(u=>u.name.includes(c.name))),c.prop&&(t=t.filter(u=>u.prop===c.prop)),c.career&&(t=t.filter(u=>u.career===c.career)),t.sort((u,d)=>{switch(p.value){case"basic_qixue":case"basic_physical_attack":case"basic_physical_defense":case"basic_magic_attack":case"basic_magic_defense":case"basic_huixin":return h.value==="DESC"?d[p.value]-u[p.value]:h.value==="ASC"?u[p.value]-d[p.value]:d.weight-u.weight;default:return d.weight-u.weight}}),t}function ne(){be()}(!C.value||C.value.length===0)&&D();const{translate:le,xingyao:R,huazhen:J,xinghun:P,xinghui:L}=ye();return(o,t)=>{const u=V("c-col"),d=V("c-space"),g=V("c-row");return f(),$(I,null,[e("div",he({class:"wrapper"},o.$attrs),[e("div",lt,[r(g,{flex:"",middle:"",style:{padding:"4px 16px"}},{default:A(()=>[r(u,{flex:"1 1 0"},{default:A(()=>[ut,e("label",at,[it,E(e("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>c.name=s)},null,512),[[me,c.name]])]),e("label",ct,[dt,E(e("select",{class:"select","onUpdate:modelValue":t[1]||(t[1]=s=>c.prop=s)},mt,512),[[j,c.prop]])]),e("label",bt,[$t,E(e("select",{class:"select","onUpdate:modelValue":t[2]||(t[2]=s=>c.career=s)},kt,512),[[j,c.career]])])]),_:1}),r(u,{flex:"0 0 auto"},{default:A(()=>[r(d,{size:"8"},{default:A(()=>[e("label",Dt,[E(e("input",{class:"c-switch",type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=s=>N(R)?R.value=s:null)},null,512),[[H,v(R)]]),xt]),e("label",St,[E(e("input",{class:"c-switch",type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=s=>N(J)?J.value=s:null)},null,512),[[H,v(J)]]),At]),e("label",It,[E(e("input",{class:"c-switch",type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=s=>N(P)?P.value=s:null)},null,512),[[H,v(P)]]),Vt]),e("label",Ut,[E(e("input",{class:"c-switch",type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=s=>N(L)?L.value=s:null)},null,512),[[H,v(L)]]),Nt])]),_:1}),e("div",{class:"c-upload"},[e("button",{class:"btn btn-danger",onClick:ne}," \u8F7D\u5165\u9ED8\u8BA4 ")]),e("div",qt,[Tt,e("input",{type:"file",class:"c-upload-input",accept:"application/json",onInput:t[7]||(t[7]=s=>te(s))},null,32)]),e("button",{class:"btn btn-success",onClick:se},"\u5BFC\u51FA"),e("button",{class:"btn btn-primary",onClick:t[8]||(t[8]=s=>B())},"\u6DFB\u52A0")]),_:1})]),_:1})]),e("div",Ht,[e("div",jt,[e("table",zt,[Ot,e("thead",Mt,[e("tr",null,[Rt,Jt,e("th",null,[Pt,r(v(S),{type:p.value==="basic_qixue"?h.value:"",onClick:t[9]||(t[9]=s=>x("basic_qixue"))},null,8,["type"])]),e("th",null,[Lt,r(v(S),{type:p.value==="basic_physical_attack"?h.value:"",onClick:t[10]||(t[10]=s=>x("basic_physical_attack"))},null,8,["type"])]),e("th",null,[Gt,r(v(S),{type:p.value==="basic_physical_defense"?h.value:"",onClick:t[11]||(t[11]=s=>x("basic_physical_defense"))},null,8,["type"])]),e("th",null,[Kt,r(v(S),{type:p.value==="basic_magic_attack"?h.value:"",onClick:t[12]||(t[12]=s=>x("basic_magic_attack"))},null,8,["type"])]),e("th",null,[Qt,r(v(S),{type:p.value==="basic_magic_defense"?h.value:"",onClick:t[13]||(t[13]=s=>x("basic_magic_defense"))},null,8,["type"])]),e("th",null,[Wt,r(v(S),{type:p.value==="basic_huixin"?h.value:"",onClick:t[14]||(t[14]=s=>x("basic_huixin"))},null,8,["type"])]),Xt,Yt,Zt])]),e("tbody",null,[(f(!0),$(I,null,z(v(U),(s,G)=>(f(),$("tr",{key:s.id,class:"c-user-row"},[e("td",es,b(G+1),1),e("td",ts,b(s.name),1),(f(!0),$(I,null,z([v(le)(s)],(F,ue)=>(f(),$(I,{key:ue},[e("td",ss,b(F.qixue),1),e("td",os,b(F.patt),1),e("td",ns,b(F.pdef),1),e("td",ls,b(F.matt),1),e("td",us,b(F.mdef),1),e("td",as,b(F.huixin),1)],64))),128)),e("td",is,b(s.prop),1),e("td",cs,b(s.career),1),e("td",ds,[r(d,null,{default:A(()=>[e("button",{class:"btn btn-sm btn-primary-outline",onClick:F=>T(s.id)}," \u7F16\u8F91 ",8,rs),e("button",{class:"btn btn-sm btn-danger-outline",onClick:F=>O(s)}," \u5220\u9664 ",8,_s)]),_:2},1024)])]))),128))])])])])],16),r(nt,{record:v(w),"onUpdate:record":t[15]||(t[15]=s=>N(w)?w.value=s:null),width:"800",height:"600",onSave:m},null,8,["record"])],64)}}});const ms=W(ps,[["__scopeId","data-v-2baf32c7"]]);export{ms as default};
