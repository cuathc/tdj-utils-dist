import{d as M,_ as O,o as _,c as f,t as oe,a as P,b as se,e,f as v,g as c,w as y,v as U,F as A,r as q,h as S,n as ne,i as le,T as ue,j as ae,k as F,p as R,l as K,m as ie,q as ce,s as j,u as m,x as de,y as re,D as pe,z as _e,A as b,B as he,C as I}from"./index.js";import{u as ve,a as fe,i as me,b as be,d as $e}from"./shared.js";import{_ as J}from"./lodash.js";const ye=M({props:{type:String},setup(){return{}}});const Ce={key:0,class:"c-sort-desc"},Ee={key:1,class:"c-sort-asc"},we={key:2,class:"c-sort-none"};function Fe(t,o,g,$,B,N){return t.type==="DESC"?(_(),f("span",Ce)):t.type==="ASC"?(_(),f("span",Ee)):(_(),f("span",we))}const ge=O(ye,[["render",Fe]]),Be=M({props:{record:Object,width:String,height:String},emits:["update:record","save"],setup(t,{emit:o}){const g=[["qixue","\u6C14\u8840"],["physical_attack","\u7269\u653B"],["physical_defense","\u7269\u9632"],["magic_attack","\u6CD5\u653B"],["magic_defense","\u6CD5\u9632"],["huixin","\u4F1A\u5FC3"]],$=oe(t,"record"),B=P(()=>{const r=t.width||600,l=t.height||400;return{width:Number(r)?`${r}px`:r,height:Number(l)?`${l}px`:l}});return{names:g,model:$,dialogStyle:B,onEditorSave:r=>{!r||(o("save",r),o("update:record",void 0))},onEditorCanel:()=>{o("update:record",void 0)},prefixNames:(r,l)=>g.map(([C,s])=>[r.replace("$&",C),l.replace("$&",s)])}}});const d=t=>(R("data-v-cf0df1de"),t=t(),K(),t),ke={key:0,class:ae(["modal active"])},De={class:"modal-body"},Se={class:"models-container"},Ae={class:"models"},Ne={class:"model-item"},Te=d(()=>e("label",null,"ID",-1)),Ve={class:"input"},Ie={class:"model-item"},Ue=d(()=>e("label",null,"\u540D\u79F0",-1)),qe={class:"model-item"},He=d(()=>e("label",null,"\u5C5E\u76F8",-1)),ze=d(()=>e("option",{value:"\u708E"},"\u708E",-1)),je=d(()=>e("option",{value:"\u96F7"},"\u96F7",-1)),Me=d(()=>e("option",{value:"\u51B0"},"\u51B0",-1)),Oe=d(()=>e("option",{value:"\u5149"},"\u5149",-1)),Je=d(()=>e("option",{value:"\u6697"},"\u6697",-1)),Pe=[ze,je,Me,Oe,Je],Re={class:"model-item"},Ke=d(()=>e("label",null,"\u804C\u4E1A",-1)),Le=d(()=>e("option",{value:"\u94C1\u536B"},"\u94C1\u536B",-1)),Ge=d(()=>e("option",{value:"\u4FA0\u5BA2"},"\u4FA0\u5BA2",-1)),Qe=d(()=>e("option",{value:"\u5492\u5E08"},"\u5492\u5E08",-1)),We=d(()=>e("option",{value:"\u795D\u7531"},"\u795D\u7531",-1)),Xe=d(()=>e("option",{value:"\u5FA1\u98CE"},"\u5FA1\u98CE",-1)),Ye=d(()=>e("option",{value:"\u7FBD\u58EB"},"\u7FBD\u58EB",-1)),Ze=[Le,Ge,Qe,We,Xe,Ye],xe={class:"modal-footer"};function et(t,o,g,$,B,N){const k=F("c-input-text"),D=F("c-input-number"),r=F("c-space");return _(),se(ue,{to:"body"},[t.model?(_(),f("div",ke,[e("div",{class:"modal-mask",onClick:o[0]||(o[0]=(...l)=>t.onEditorCanel&&t.onEditorCanel(...l))}),e("div",{class:"modal-dialog",style:ne(t.dialogStyle)},[e("div",De,[e("div",Se,[e("div",Ae,[e("div",Ne,[Te,e("div",Ve,v(t.model.id),1)]),e("div",Ie,[Ue,c(k,{value:t.model.name,"onUpdate:value":o[1]||(o[1]=l=>t.model.name=l)},null,8,["value"])]),e("div",qe,[He,y(e("select",{class:"input","onUpdate:modelValue":o[2]||(o[2]=l=>t.model.prop=l)},Pe,512),[[U,t.model.prop]])]),e("div",Re,[Ke,y(e("select",{class:"input","onUpdate:modelValue":o[3]||(o[3]=l=>t.model.career=l)},Ze,512),[[U,t.model.career]])])]),(_(),f(A,null,q([["panel_$&","\u9762\u677F$&"],["basic_$&","\u57FA\u7840$&"],["weapon_$&","\u5175\u5203$&"],["equipment1_$&","\u5934\u90E8$&"],["equipment2_$&","\u8EAB\u4F53$&"],["equipment3_$&","\u8170\u90E8$&"],["equipment4_$&","\u624B\u90E8$&"],["wunei0_$&","\u4E3B\u7EBF$&"],["wunei1_$&","\u4E0A\u7EBF$&"],["wunei2_$&","\u4E0B\u7EBF$&"],["huazhen_$&","\u5316\u81FB$&"],["$&","0\u7EA7$&"],["$&_cz","$&\u6210\u957F"]],([l,C])=>e("div",{class:"models",key:l},[(_(!0),f(A,null,q(t.prefixNames(l,C),([s,T])=>(_(),f("div",{class:"model-item",key:s},[e("label",null,v(T),1),c(D,{value:t.model[s],"onUpdate:value":h=>t.model[s]=h},null,8,["value","onUpdate:value"])]))),128))])),64))])]),e("div",xe,[c(r,null,{default:S(()=>[e("button",{class:"btn btn-sm btn-primary-outline",onClick:o[4]||(o[4]=l=>t.onEditorSave(t.model))}," \u4FDD\u5B58 "),e("button",{class:"btn btn-sm btn-danger-outline",onClick:o[5]||(o[5]=l=>t.onEditorCanel())}," \u53D6\u6D88 ")]),_:1})])],4)])):le("",!0)])}const tt=O(Be,[["render",et],["__scopeId","data-v-cf0df1de"]]),ot=M({components:{SortIcon:ge,HeroModelVue:tt},setup(){const t=ie(pe),o=ce({name:"",prop:"",career:""}),g=P(()=>Q(m.value)),$=j(-1),{editor:B,defaultHeroState:N}=ve(),k=n=>{const u=m.value.find(a=>a.id===n);!u||($.value=n,B.value=J.cloneDeep(u))},D=async n=>{$.value=-1;const u=m.value.find(a=>a.id===n.id);if(!!u){Object.assign(u,n);try{if(!t)return;await t.connect(),await t.put("heroes",J.cloneDeep(u))}catch(a){console.log(a)}}},r=()=>{$.value=-1};function l(n){if(n instanceof Error)switch(n.name){case"ConstraintError":alert("\u6570\u636E\u5DF2\u7ECF\u5B58\u5728");break;default:alert(n.message)}else alert(n)}async function C(){try{await de()}catch(n){l(n)}}async function s(){try{if(!t)return;const n=N();await t.connect(),delete n.id;const u=await t.add("heroes",n),a=await t.get("heroes",u);if(!a)return;m.value.push(a)}catch(n){l(n)}}async function T(n){try{if(!t||!n.id||!confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F"))return;await t.connect(),await t.delete("heroes",n.id),m.value=m.value.filter(u=>u.id!==n.id)}catch(u){l(u)}}function h(n){return new Promise((u,a)=>{const p=new FileReader;p.onload=()=>{u(JSON.parse(p.result))},p.onerror=()=>{a(p.error)},p.readAsText(n)})}async function H(n){try{const u=n.currentTarget,a=u.files;if(!a||!t)return;await t.connect(),console.log("\u6570\u636E\u5BFC\u5165\u5F00\u59CB");for(let p=0;p<a.length;p++){const V=await h(a[p]);let z=[];if(me(V))z=V;else if(be(V)&&V.type==="heroes")z=V.data;else{alert("\u5BFC\u5165\u7684\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E");return}for(const te of z)await t.put("heroes",te);console.log("\u6570\u636E\u5BFC\u5165\u7ED3\u675F")}u.value="",C()}catch(u){l(u)}}function L(){const n=new Blob([JSON.stringify({type:"heroes",data:m.value})]);$e(n,"heroes.json")}const E=j("name"),w=j("");function G(n){if(E.value===n)switch(w.value){case"DESC":w.value="ASC";break;case"ASC":w.value="";break;default:w.value="DESC"}else E.value=n,w.value="DESC"}function Q(n){let u=n.slice();return o.name&&(u=u.filter(a=>a.name.includes(o.name))),o.prop&&(u=u.filter(a=>a.prop===o.prop)),o.career&&(u=u.filter(a=>a.career===o.career)),u.sort((a,p)=>{switch(E.value){case"basic_qixue":case"basic_physical_attack":case"basic_physical_defense":case"basic_magic_attack":case"basic_magic_defense":case"basic_huixin":return w.value==="DESC"?p[E.value]-a[E.value]:w.value==="ASC"?a[E.value]-p[E.value]:p.weight-a.weight;default:return p.weight-a.weight}}),u}function W(){re()}(!m.value||m.value.length===0)&&C();const{translate:X,xingyao:Y,huazhen:Z,xinghun:x,xinghui:ee}=fe();return{filters:o,editable:$,editor:B,onEditorOpen:k,onEditorSave:D,onEditorCanel:r,sources:m,list:g,add:s,remove:T,exportData:L,importData:H,sortName:E,sortType:w,switchSort:G,loadDefault:W,toolsTranslate:X,xingyao:Y,huazhen:Z,xinghun:x,xinghui:ee}}});const i=t=>(R("data-v-8f886f3c"),t=t(),K(),t),st={class:"toolbar"},nt=i(()=>e("span",{class:"title"},"\u4EBA\u7269\u5217\u8868",-1)),lt={class:"label-control-inline"},ut=i(()=>e("span",null,"\u540D\u5B57",-1)),at={class:"label-control-inline"},it=i(()=>e("span",null,"\u5C5E\u6027",-1)),ct=i(()=>e("option",{value:""},"\u5168\u90E8",-1)),dt=i(()=>e("option",{value:"\u708E"},"\u708E",-1)),rt=i(()=>e("option",{value:"\u96F7"},"\u96F7",-1)),pt=i(()=>e("option",{value:"\u51B0"},"\u51B0",-1)),_t=i(()=>e("option",{value:"\u5149"},"\u5149",-1)),ht=i(()=>e("option",{value:"\u6697"},"\u6697",-1)),vt=[ct,dt,rt,pt,_t,ht],ft={class:"label-control-inline"},mt=i(()=>e("span",null,"\u804C\u4E1A",-1)),bt=i(()=>e("option",{value:""},"\u5168\u90E8",-1)),$t=i(()=>e("option",{value:"\u94C1\u536B"},"\u94C1\u536B",-1)),yt=i(()=>e("option",{value:"\u4FA0\u5BA2"},"\u4FA0\u5BA2",-1)),Ct=i(()=>e("option",{value:"\u5492\u5E08"},"\u5492\u5E08",-1)),Et=i(()=>e("option",{value:"\u795D\u7531"},"\u795D\u7531",-1)),wt=i(()=>e("option",{value:"\u5FA1\u98CE"},"\u5FA1\u98CE",-1)),Ft=i(()=>e("option",{value:"\u7FBD\u58EB"},"\u7FBD\u58EB",-1)),gt=[bt,$t,yt,Ct,Et,wt,Ft],Bt={class:"c-label"},kt=b(" \u661F\u8000 "),Dt={class:"c-label"},St=b(" \u5316\u81FB "),At={class:"c-label"},Nt=b(" \u661F\u9B42 "),Tt={class:"c-label"},Vt=b(" \u661F\u8F89 "),It={class:"c-upload"},Ut={class:"c-upload"},qt=i(()=>e("button",{class:"btn btn-success"},"\u5BFC\u5165",-1)),Ht={class:"content"},zt={class:"table-wrap"},jt={class:"table table-bordered",style:{"min-width":"100%"}},Mt=i(()=>e("colgroup",null,[e("col",{width:"60"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"80"}),e("col",{width:"100"})],-1)),Ot={style:{position:"sticky",top:"100px"}},Jt=i(()=>e("th",null,"#",-1)),Pt=i(()=>e("th",null,"\u540D\u5B57",-1)),Rt=b(" \u6C14\u8840 "),Kt=b(" \u7269\u653B "),Lt=b(" \u7269\u9632 "),Gt=b(" \u6CD5\u653B "),Qt=b(" \u6CD5\u9632 "),Wt=b(" \u4F1A\u5FC3 "),Xt=i(()=>e("th",null,"\u5C5E\u6027",-1)),Yt=i(()=>e("th",null,"\u804C\u4E1A",-1)),Zt=i(()=>e("th",null,"\u64CD\u4F5C",-1)),xt={class:"cell-static text-center"},eo={class:"cell-static text-center"},to={class:"cell-static text-center"},oo={class:"cell-static text-center"},so={class:"cell-static text-center"},no={class:"cell-static text-center"},lo={class:"cell-static text-center"},uo={class:"cell-static text-center"},ao={class:"cell-static text-center"},io={class:"cell-static text-center"},co={class:"cell-static"},ro=["onClick"],po=["onClick"];function _o(t,o,g,$,B,N){const k=F("c-col"),D=F("c-space"),r=F("c-row"),l=F("SortIcon"),C=F("HeroModelVue");return _(),f(A,null,[e("div",_e({class:"wrapper"},t.$attrs),[e("div",st,[c(r,{flex:"",middle:"",style:{padding:"4px 16px"}},{default:S(()=>[c(k,{flex:"1 1 0"},{default:S(()=>[nt,e("label",lt,[ut,y(e("input",{class:"input",type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>t.filters.name=s)},null,512),[[he,t.filters.name]])]),e("label",at,[it,y(e("select",{class:"select","onUpdate:modelValue":o[1]||(o[1]=s=>t.filters.prop=s)},vt,512),[[U,t.filters.prop]])]),e("label",ft,[mt,y(e("select",{class:"select","onUpdate:modelValue":o[2]||(o[2]=s=>t.filters.career=s)},gt,512),[[U,t.filters.career]])])]),_:1}),c(k,{flex:"0 0 auto"},{default:S(()=>[c(D,{size:"8"},{default:S(()=>[e("label",Bt,[y(e("input",{class:"c-switch",type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=s=>t.xingyao=s)},null,512),[[I,t.xingyao]]),kt]),e("label",Dt,[y(e("input",{class:"c-switch",type:"checkbox","onUpdate:modelValue":o[4]||(o[4]=s=>t.huazhen=s)},null,512),[[I,t.huazhen]]),St]),e("label",At,[y(e("input",{class:"c-switch",type:"checkbox","onUpdate:modelValue":o[5]||(o[5]=s=>t.xinghun=s)},null,512),[[I,t.xinghun]]),Nt]),e("label",Tt,[y(e("input",{class:"c-switch",type:"checkbox","onUpdate:modelValue":o[6]||(o[6]=s=>t.xinghui=s)},null,512),[[I,t.xinghui]]),Vt])]),_:1}),e("div",It,[e("button",{class:"btn btn-danger",onClick:o[7]||(o[7]=(...s)=>t.loadDefault&&t.loadDefault(...s))}," \u8F7D\u5165\u9ED8\u8BA4 ")]),e("div",Ut,[qt,e("input",{type:"file",class:"c-upload-input",accept:"application/json",onInput:o[8]||(o[8]=s=>t.importData(s))},null,32)]),e("button",{class:"btn btn-success",onClick:o[9]||(o[9]=(...s)=>t.exportData&&t.exportData(...s))},"\u5BFC\u51FA"),e("button",{class:"btn btn-primary",onClick:o[10]||(o[10]=s=>t.add())},"\u6DFB\u52A0")]),_:1})]),_:1})]),e("div",Ht,[e("div",zt,[e("table",jt,[Mt,e("thead",Ot,[e("tr",null,[Jt,Pt,e("th",null,[Rt,c(l,{type:t.sortName==="basic_qixue"?t.sortType:"",onClick:o[11]||(o[11]=s=>t.switchSort("basic_qixue"))},null,8,["type"])]),e("th",null,[Kt,c(l,{type:t.sortName==="basic_physical_attack"?t.sortType:"",onClick:o[12]||(o[12]=s=>t.switchSort("basic_physical_attack"))},null,8,["type"])]),e("th",null,[Lt,c(l,{type:t.sortName==="basic_physical_defense"?t.sortType:"",onClick:o[13]||(o[13]=s=>t.switchSort("basic_physical_defense"))},null,8,["type"])]),e("th",null,[Gt,c(l,{type:t.sortName==="basic_magic_attack"?t.sortType:"",onClick:o[14]||(o[14]=s=>t.switchSort("basic_magic_attack"))},null,8,["type"])]),e("th",null,[Qt,c(l,{type:t.sortName==="basic_magic_defense"?t.sortType:"",onClick:o[15]||(o[15]=s=>t.switchSort("basic_magic_defense"))},null,8,["type"])]),e("th",null,[Wt,c(l,{type:t.sortName==="basic_huixin"?t.sortType:"",onClick:o[16]||(o[16]=s=>t.switchSort("basic_huixin"))},null,8,["type"])]),Xt,Yt,Zt])]),e("tbody",null,[(_(!0),f(A,null,q(t.list,(s,T)=>(_(),f("tr",{key:s.id,class:"c-user-row"},[e("td",xt,v(T+1),1),e("td",eo,v(s.name),1),(_(!0),f(A,null,q([t.toolsTranslate(s)],(h,H)=>(_(),f(A,{key:H},[e("td",to,v(h.qixue),1),e("td",oo,v(h.patt),1),e("td",so,v(h.pdef),1),e("td",no,v(h.matt),1),e("td",lo,v(h.mdef),1),e("td",uo,v(h.huixin),1)],64))),128)),e("td",ao,v(s.prop),1),e("td",io,v(s.career),1),e("td",co,[c(D,null,{default:S(()=>[e("button",{class:"btn btn-sm btn-primary-outline",onClick:h=>t.onEditorOpen(s.id)}," \u7F16\u8F91 ",8,ro),e("button",{class:"btn btn-sm btn-danger-outline",onClick:h=>t.remove(s)}," \u5220\u9664 ",8,po)]),_:2},1024)])]))),128))])])])])],16),c(C,{record:t.editor,"onUpdate:record":o[17]||(o[17]=s=>t.editor=s),width:"800",height:"600",onSave:t.onEditorSave},null,8,["record","onSave"])],64)}const mo=O(ot,[["render",_o],["__scopeId","data-v-8f886f3c"]]);export{mo as default};
