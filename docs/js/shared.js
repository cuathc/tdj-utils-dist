import{r as d,e as i}from"./index.js";function o(){return{id:0,name:"",key:"none",pinyin:"",is_new:"",pic:"",hero_icon:"",prop:"",prop_icon:"",career:"",career_icon:"",position:"",range:0,speed:0,rarity:"",source:"",weight:0,star1:"",star2:"",star3:"",star4:"",star5:"",star6:"",story_name:"",story_content:"",strategy:"",inherent:"",inherent_name:"",skill:[],qixue:0,patt:0,pdef:0,matt:0,mdef:0,huixin:0,qixue_cz:0,patt_cz:0,pdef_cz:0,matt_cz:0,mdef_cz:0,huixin_cz:0,eq_suit3:"",eq_suit6:"",eq_suit9:"",eq1_qixue:0,eq1_patt:0,eq1_pdef:0,eq1_matt:0,eq1_mdef:0,eq1_huixin:0,eq2_qixue:0,eq2_patt:0,eq2_pdef:0,eq2_matt:0,eq2_mdef:0,eq2_huixin:0,eq3_qixue:0,eq3_patt:0,eq3_pdef:0,eq3_matt:0,eq3_mdef:0,eq3_huixin:0,eq4_qixue:0,eq4_patt:0,eq4_pdef:0,eq4_matt:0,eq4_mdef:0,eq4_huixin:0,wp_qixue:0,wp_patt:0,wp_pdef:0,wp_matt:0,wp_mdef:0,wp_huixin:0,wn0_qixue:0,wn0_patt:0,wn0_pdef:0,wn0_matt:0,wn0_mdef:0,wn0_huixin:0,wn1_qixue:0,wn1_patt:0,wn1_pdef:0,wn1_matt:0,wn1_mdef:0,wn1_huixin:0,wn2_qixue:0,wn2_patt:0,wn2_pdef:0,wn2_matt:0,wn2_mdef:0,wn2_huixin:0,hz_qixue:0,hz_patt:0,hz_pdef:0,hz_matt:0,hz_mdef:0,hz_huixin:0,hz_qixuep:0,hz_pattp:0,hz_pdefp:0,hz_mattp:0,hz_mdefp:0,hz_huixinp:0,xh_qixue:0,xh_patt:0,xh_pdef:0,xh_matt:0,xh_mdef:0,xh_huixin:0,xh_qixuep:0,xh_pattp:0,xh_pdefp:0,xh_mattp:0,xh_mdefp:0,xh_huixinp:0}}function l(){return{editor:d(),defaultHeroState:o}}function v(){const a=d(!1),m=i({qixue:0,patt:0,pdef:0,matt:0,mdef:0,huixin:0}),h=i(o()),x=d(!1),q=d(!0),n=d(!0),r=d(!1),p=(e,t,_)=>Math.round(e/t*_),f=i({v:70,eq:16}),c=e=>{const t={qixue:e.qixue,patt:e.patt,pdef:e.pdef,matt:e.matt,mdef:e.mdef,huixin:e.huixin};e.real||(t.qixue+=f.v*e.qixue_cz,t.patt+=f.v*e.patt_cz,t.pdef+=f.v*e.pdef_cz,t.matt+=f.v*e.matt_cz,t.mdef+=f.v*e.mdef_cz,t.huixin+=f.v*e.huixin_cz),t.qixue+=e.wp_qixue,t.patt+=e.wp_patt,t.pdef+=e.wp_pdef,t.matt+=e.wp_matt,t.mdef+=e.wp_mdef,t.huixin+=e.wp_huixin,t.qixue+=e.eq1_qixue,t.patt+=e.eq1_patt,t.pdef+=e.eq1_pdef,t.matt+=e.eq1_matt,t.mdef+=e.eq1_mdef,t.huixin+=e.eq1_huixin,t.qixue+=e.eq2_qixue,t.patt+=e.eq2_patt,t.pdef+=e.eq2_pdef,t.matt+=e.eq2_matt,t.mdef+=e.eq2_mdef,t.huixin+=e.eq2_huixin,t.qixue+=e.eq3_qixue,t.patt+=e.eq3_patt,t.pdef+=e.eq3_pdef,t.matt+=e.eq3_matt,t.mdef+=e.eq3_mdef,t.huixin+=e.eq3_huixin,t.qixue+=e.eq4_qixue,t.patt+=e.eq4_patt,t.pdef+=e.eq4_pdef,t.matt+=e.eq4_matt,t.mdef+=e.eq4_mdef,t.huixin+=e.eq4_huixin,t.qixue+=e.wn0_qixue,t.patt+=e.wn0_patt,t.pdef+=e.wn0_pdef,t.matt+=e.wn0_matt,t.mdef+=e.wn0_mdef,t.huixin+=e.wn0_huixin,t.qixue+=e.wn1_qixue,t.patt+=e.wn1_patt,t.pdef+=e.wn1_pdef,t.matt+=e.wn1_matt,t.mdef+=e.wn1_mdef,t.huixin+=e.wn1_huixin,t.qixue+=e.wn2_qixue,t.patt+=e.wn2_patt,t.pdef+=e.wn2_pdef,t.matt+=e.wn2_matt,t.mdef+=e.wn2_mdef,t.huixin+=e.wn2_huixin;const _={qixue:145,patt:135,pdef:155,matt:135,mdef:155,huixin:100};return x.value&&(_.qixue+=4,_.patt+=4,_.pdef+=4,_.matt+=4,_.mdef+=4),q.value&&e.rarity!=="R"&&(t.qixue+=e.hz_qixue,t.patt+=e.hz_patt,t.pdef+=e.hz_pdef,t.matt+=e.hz_matt,t.mdef+=e.hz_mdef,t.huixin+=e.hz_huixin,_.qixue+=e.hz_qixuep,_.patt+=e.hz_pattp,_.pdef+=e.hz_pdefp,_.matt+=e.hz_mattp,_.mdef+=e.hz_mdefp,_.huixin+=e.hz_huixinp),r.value&&(t.qixue+=e.xh_qixue,t.patt+=e.xh_patt,t.pdef+=e.xh_pdef,t.matt+=e.xh_matt,t.mdef+=e.xh_mdef,t.huixin+=e.xh_huixin),n.value&&(_.qixue+=e.xh_qixuep,_.patt+=e.xh_pattp,_.pdef+=e.xh_pdefp,_.matt+=e.xh_mattp,_.mdef+=e.xh_mdefp,_.huixin+=e.xh_huixinp),{qixue:Math.round(t.qixue*_.qixue/100),patt:Math.round(t.patt*_.patt/100),pdef:Math.round(t.pdef*_.pdef/100),matt:Math.round(t.matt*_.matt/100),mdef:Math.round(t.mdef*_.mdef/100),huixin:Math.round(t.huixin*_.huixin/100)}};function u(){a.value=!0}function s(){a.value=!1}function w(){a.value=!a.value}return{show:a,level:f,basic:m,form:h,xingyao:x,huazhen:q,xinghun:n,xinghui:r,calc:p,translate:c,open:u,close:s,toggle:w}}const y=(a,m)=>{const h=URL.createObjectURL(a),x=document.createElement("a");x.href=h,x.target="_blank",x.download=m,x.click(),URL.revokeObjectURL(h)};function g(a){return a!==null&&typeof a=="object"}function b(a){return Array.isArray(a)}export{v as a,g as b,y as d,b as i,l as u};
