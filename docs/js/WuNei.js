import{d as f,o as i,c as _,b as u,F as r,q as y,e as o,x as N,y as W,l as d,_ as p}from"./index.js";const h={u:[[27,3,0],[38,4,0],[54,6,5],[59,7,0],[70,8,0],[81,9,0],[97,11,0],[113,13,5]],c:[[7,2,0],[9,2,0],[11,3,0],[13,3,0],[14,4,0],[18,5,0],[22,5,0],[25,6,5],[29,7,0],[32,8,0],[36,9,0]],d:[[5,3,0],[7,4,0],[10,6,5],[11,7,0],[13,8,0],[15,9,0],[18,11,0],[21,13,5]]},x={u:[[26,3,0],[36,5,0],[51,6,5],[56,7,0],[66,8,0],[77,10,0],[92,12,0],[107,14,5]],c:[[8,2,0],[10,2,0],[11,3,0],[13,3,0],[15,4,0],[19,5,0],[23,6,0],[27,7,5],[30,8,0],[34,9,0],[38,10,0]],d:[[5,3,0],[7,4,0],[10,6,5],[11,7,0],[13,8,0],[15,9,0],[18,11,0],[21,13,5]]},z={u:[[24,4,0],[34,5,0],[48,7,5],[53,8,0],[62,9,0],[72,10,0],[86,13,0],[101,15,5]],c:[[8,2,0],[10,3,0],[12,3,0],[14,4,0],[16,4,0],[20,5,0],[24,6,0],[28,7,5],[32,8,0],[36,9,0],[40,10,0]],d:[[5,4,0],[7,5,0],[10,7,5],[11,8,0],[12,9,0],[14,10,0],[17,13,0],[20,15,5]]},F={u:[[24,4,0],[34,5,0],[48,7,5],[53,8,0],[62,9,0],[72,10,0],[86,13,0],[101,15,5]],c:[[2,8,0],[3,10,0],[3,12,0],[4,14,0],[4,16,0],[5,20,0],[6,24,0],[7,28,5],[8,32,0],[9,36,0],[10,40,0]],d:[[5,4,0],[7,5,0],[10,7,5],[11,8,0],[12,9,0],[14,10,0],[17,13,0],[20,15,5]]},w={u:[[20,5,0],[28,7,0],[40,10,5],[44,11,0],[52,13,0],[60,15,0],[72,18,0],[84,21,5]],c:[[7,2,0],[9,2,0],[11,3,0],[13,3,0],[14,4,0],[18,5,0],[22,5,0],[25,6,5],[29,7,0],[32,8,0],[36,9,0]],d:[[4,4,0],[6,6,0],[9,8,5],[9,9,0],[11,10,0],[13,12,0],[15,14,0],[18,17,5]]},B={u:[[21,3,0],[29,5,0],[42,7,5],[46,8,0],[55,9,0],[63,10,0],[76,13,0],[88,15,5]],c:[[8,2,0],[10,2,0],[11,3,0],[13,3,0],[15,4,0],[19,5,0],[23,6,0],[27,7,5],[30,8,0],[34,9,0],[38,10,0]],d:[[4,5,0],[5,6,0],[8,9,5],[8,10,0],[10,12,0],[11,14,0],[14,16,0],[16,19,5]]},C={u:[[20,4,0],[27,6,0],[39,8,5],[43,9,0],[51,11,0],[59,13,0],[70,15,0],[82,18,5]],c:[[7,2,0],[9,2,0],[11,3,0],[13,3,0],[14,4,0],[18,5,0],[22,5,0],[25,6,5],[29,7,0],[32,8,0],[36,9,0]],d:[[5,4,0],[6,5,0],[9,8,5],[10,8,0],[12,10,0],[14,11,0],[16,14,0],[19,16,5]]},m={u:[[18,4,0],[25,5,0],[36,7,5],[40,8,0],[47,9,0],[54,10,0],[65,13,0],[76,15,5]],c:[[2,8,0],[2,10,0],[3,11,0],[3,13,0],[4,15,0],[5,19,0],[6,23,0],[7,27,5],[8,30,0],[9,34,0],[10,38,0]],d:[[4,5,0],[5,6,0],[8,9,5],[8,10,0],[10,12,0],[11,14,0],[14,16,0],[16,19,5]]},A={u:[[20,3,0],[27,4,0],[39,7,5],[43,7,0],[51,9,0],[59,9,0],[70,12,0],[82,14,5]],c:[[2,8,0],[2,10,0],[3,11,0],[3,13,0],[4,15,0],[5,19,0],[6,23,0],[7,27,5],[8,30,0],[9,34,0],[10,38,0]],d:[[4,5,0],[6,7,0],[9,10,5],[9,11,0],[11,13,0],[13,15,0],[15,18,0],[18,21,5]]},E={u:[[19,3,0],[27,4,0],[38,6,5],[42,7,0],[49,8,0],[57,9,0],[68,11,0],[80,13,5]],c:[[2,7,0],[2,9,0],[3,10,0],[3,12,0],[4,14,0],[4,17,0],[5,20,0],[6,24,5],[7,27,0],[8,31,0],[9,34,0]],d:[[4,5,0],[6,7,0],[9,10,5],[9,11,0],[11,13,0],[13,15,0],[15,18,0],[18,21,5]]},s={xk:z,xkf:F,ys:C,tw:h,tw2:x,zs:m,zs2:A,zy:E,yf:w,yf2:B};function n(c){return{u:c.u.reduce((e,t)=>(t[0]+=e[0],t[1]+=e[1],t),[0,0,0]),c:c.c.reduce((e,t)=>(t[0]+=e[0],t[1]+=e[1],t),[0,0,0]),d:c.d.reduce((e,t)=>(t[0]+=e[0],t[1]+=e[1],t),[0,0,0])}}const a={xk:n(s.xk),xkf:n(s.xkf),ys:n(s.ys),tw:n(s.tw),tw2:n(s.tw2),zs:n(s.zs),zs2:n(s.zs2),zy:n(s.zy),yf:n(s.yf),yf2:n(s.yf2)},S={xk:"\u4FA0\u5BA2",xkf:"\u4FA0\u5BA2\u6CD5",ys:"\u7FBD\u58EB",tw:"\u94C1\u536B",tw2:"\u94C1\u536B2",zs:"\u5492\u5E08",zs2:"\u5492\u5E082",zy:"\u795D\u7531",yf:"\u5FA1\u98CE",yf2:"\u5FA1\u98CE2"},D=c=>(N("data-v-c99456ec"),c=c(),W(),c),b={class:"table text-center",style:{width:"100%"}},k=D(()=>u("thead",null,[u("tr",null,[u("th",null,"\u804C\u4E1A"),u("th",null,"\u6C14\u8840"),u("th",null,"\u4F1A\u5FC3"),u("th",null,"\u7269\u653B"),u("th",null,"\u6CD5\u653B"),u("th",null,"\u7269\u9632"),u("th",null,"\u6CD5\u9632")])],-1)),I=f({__name:"WuNei",setup(c){const e=Object.keys(a);return(t,Y)=>(i(),_("table",b,[k,u("tbody",null,[(i(!0),_(r,null,y(o(e),l=>(i(),_("tr",{key:l},[u("td",null,d(o(S)[l]),1),u("td",null,d(o(a)[l].u[0]),1),u("td",null,d(o(a)[l].u[1]),1),u("td",null,d(o(a)[l].c[0]),1),u("td",null,d(o(a)[l].c[1]),1),u("td",null,d(o(a)[l].d[0]),1),u("td",null,d(o(a)[l].d[1]),1)]))),128))])]))}});const T=p(I,[["__scopeId","data-v-c99456ec"]]);export{T as default};
