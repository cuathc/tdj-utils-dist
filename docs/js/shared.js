import{q as r,m as d}from"./index.js";const s={xk:[[120,45,20,0,15,0],[2,2,0,0,0,0]],xk_f:[[120,0,20,45,15,0],[2,0,0,2,0,0]],ys:[[110,42,18,0,15,0],[2,2,0,0,0,0]],tw:[[145,36,25,0,15,0],[2,2,0,0,0,0]],tw2:[[145,36,25,0,15,0],[2,2,0,0,0,0]],zs:[[100,0,15,42,22,0],[2,0,0,2,0,0]],zs2:[[100,0,15,42,22,0],[2,0,0,2,0,0]],zy:[[105,0,18,36,24,0],[2,0,0,2,0,0]],yf:[[115,42,17,0,17,0],[2,2,0,0,0,0]],yf2:[[115,42,17,0,17,0],[2,2,0,0,0,0]]};function w(t,u){switch(u){case"\u4EFB\u65AD\u79BB":return s.xk_f}switch(t){case"\u4FA0\u5BA2":return s.xk;case"\u7FBD\u58EB":return s.ys;case"\u94C1\u536B":return s.tw;case"\u5492\u5E08":return s.zs;case"\u795D\u7531":return s.zy;case"\u5FA1\u98CE":return s.yf;default:return[[0,0,0,0,0,0],[0,0,0,0,0,0]]}}function l(){return{id:0,name:"",pinyin:"",is_new:"",pic:"",hero_icon:"",prop:"",prop_icon:"",career:"",career_icon:"",position:"",range:0,speed:0,rarity:"",source:"",weight:0,star1:"",star2:"",star3:"",star4:"",star5:"",star6:"",story_name:"",story_content:"",strategy:"",inherent:"",inherent_name:"",skill:[],panel_qixue:0,panel_physical_attack:0,panel_magic_attack:0,panel_physical_defense:0,panel_magic_defense:0,panel_huixin:0,basic_qixue:0,basic_physical_attack:0,basic_magic_attack:0,basic_physical_defense:0,basic_magic_defense:0,basic_huixin:0,qixue:0,physical_attack:0,physical_defense:0,magic_attack:0,magic_defense:0,huixin:0,qixue_cz:0,physical_attack_cz:0,physical_defense_cz:0,magic_attack_cz:0,magic_defense_cz:0,huixin_cz:0,equipment_suit3:"",equipment_suit6:"",equipment_suit9:"",equipment1_qixue:0,equipment1_physical_attack:0,equipment1_physical_defense:0,equipment1_magic_attack:0,equipment1_magic_defense:0,equipment1_huixin:0,equipment2_qixue:0,equipment2_physical_attack:0,equipment2_physical_defense:0,equipment2_magic_attack:0,equipment2_magic_defense:0,equipment2_huixin:0,equipment3_qixue:0,equipment3_physical_attack:0,equipment3_physical_defense:0,equipment3_magic_attack:0,equipment3_magic_defense:0,equipment3_huixin:0,equipment4_qixue:0,equipment4_physical_attack:0,equipment4_physical_defense:0,equipment4_magic_attack:0,equipment4_magic_defense:0,equipment4_huixin:0,weapon_qixue:0,weapon_physical_attack:0,weapon_physical_defense:0,weapon_magic_attack:0,weapon_magic_defense:0,weapon_huixin:0,wunei0_qixue:0,wunei0_physical_attack:0,wunei0_physical_defense:0,wunei0_magic_attack:0,wunei0_magic_defense:0,wunei0_huixin:0,wunei1_qixue:0,wunei1_physical_attack:0,wunei1_physical_defense:0,wunei1_magic_attack:0,wunei1_magic_defense:0,wunei1_huixin:0,wunei2_qixue:0,wunei2_physical_attack:0,wunei2_physical_defense:0,wunei2_magic_attack:0,wunei2_magic_defense:0,wunei2_huixin:0,huazhen_qixue:0,huazhen_physical_attack:0,huazhen_physical_defense:0,huazhen_magic_attack:0,huazhen_magic_defense:0,huazhen_huixin:0}}function B(){return{editor:r(),defaultHeroState:l}}const _={tw:[[114,39,41,0,22,30],[4,2,2,0,2,2]],xk:[[96,45,34,0,21,35],[4,2,2,0,2,2]],xk_f:[[96,0,34,45,21,35],[4,0,2,2,2,2]],ys:[[86,42,30,0,23,40],[4,2,2,0,2,2]],yf:[[88,41,29,0,28,45],[4,2,2,0,2,2]],zs:[[80,0,27,43,36,35],[4,0,2,2,2,2]],zy:[[84,0,29,36,38,30],[4,0,2,2,2,2]]};function z(t,u){switch(u){case"\u4EFB\u65AD\u79BB":return _.xk_f}switch(t){case"\u94C1\u536B":return _.tw;case"\u4FA0\u5BA2":return _.xk;case"\u7FBD\u58EB":return _.ys;case"\u5FA1\u98CE":return _.yf;case"\u5492\u5E08":return _.zs;case"\u795D\u7531":return _.zy;default:return[[0,0,0,0,0,0],[0,0,0,0,0,0]]}}function A(){const t=r(!1),u=d({qixue:0,patt:0,pdef:0,matt:0,mdef:0,huixin:0}),m=d(l()),c=r(!1),f=r(!1),p=r(!1),o=r(!1),x=(i,a,e)=>Math.round(i/a*e),q=i=>{const a={qixue:i.basic_qixue,patt:i.basic_physical_attack,pdef:i.basic_physical_defense,matt:i.basic_magic_attack,mdef:i.basic_magic_defense,huixin:i.basic_huixin},e={qixue:145,patt:135,pdef:155,matt:135,mdef:155,huixin:100};c.value&&(e.qixue+=4,e.patt+=4,e.pdef+=4,e.matt+=4,e.mdef+=4,e.huixin+=0);const h=z(i.career,i.name);f.value&&i.rarity!=="R"&&(a.qixue+=i.huazhen_qixue,a.patt+=i.huazhen_physical_attack,a.pdef+=i.huazhen_physical_defense,a.matt+=i.huazhen_magic_attack,a.mdef+=i.huazhen_magic_defense,a.huixin+=i.huazhen_huixin,e.qixue+=h[1][0],e.patt+=h[1][1],e.pdef+=h[1][2],e.matt+=h[1][3],e.mdef+=h[1][4],e.huixin+=h[1][5]);const n=w(i.career,i.name);return p.value&&(e.qixue+=n[1][0],e.patt+=n[1][1],e.pdef+=n[1][2],e.matt+=n[1][3],e.mdef+=n[1][4],e.huixin+=n[1][5]),o.value&&(a.qixue+=n[0][0],a.patt+=n[0][1],a.pdef+=n[0][2],a.matt+=n[0][3],a.mdef+=n[0][4],a.huixin+=n[0][5]),{qixue:Math.round(a.qixue*e.qixue/100),patt:Math.round(a.patt*e.patt/100),pdef:Math.round(a.pdef*e.pdef/100),matt:Math.round(a.matt*e.matt/100),mdef:Math.round(a.mdef*e.mdef/100),huixin:Math.round(a.huixin*e.huixin/100)}};function y(){t.value=!0}function g(){t.value=!1}function k(){t.value=!t.value}return{show:t,basic:u,form:m,xingyao:c,huazhen:f,xinghun:p,xinghui:o,calc:x,translate:q,open:y,close:g,toggle:k}}const v=(t,u)=>{const m=URL.createObjectURL(t),c=document.createElement("a");c.href=m,c.target="_blank",c.download=u,c.click(),URL.revokeObjectURL(m)};function E(t){return t!==null&&typeof t=="object"}function F(t){return Array.isArray(t)}export{A as a,E as b,v as d,F as i,B as u};
