const o={u:[[27,3,0],[38,4.2,0],[54,6,5],[59,6.6,0],[70,7.8,0],[81,9,0],[97,10.8,0],[113,12.6,5]],c:[[7,2,0],[9,2,0],[11,3,0],[13,3,0],[14,4,0],[18,5,0],[22,5,0],[25,6,5],[29,7,0],[32,8,0],[36,9,0]],d:[[5,3,0],[7,4,0],[10,6,5],[11,7,0],[13,8,0],[15,9,0],[18,11,0],[21,13,5]]},i={u:[[26,3.3,0],[36,4.6,0],[51,6.5,5],[56,7.2,0],[66,8.5,0],[77,9.8,0],[92,11.7,0],[107,13.7,5]],c:[[8,2,0],[10,2,0],[11,3,0],[13,3,0],[15,4,0],[19,5,0],[23,6,0],[27,7,5],[30,8,0],[34,9,0],[38,10,0]],d:[[5,3,0],[7,4,0],[10,6,5],[11,7,0],[13,8,0],[15,9,0],[18,11,0],[21,13,5]]},F={u:[[24,3.5,0],[34,4.9,0],[48,7,5],[53,7.7,0],[62,9.1,0],[72,10.5,0],[86,12.6,0],[101,14.7,5]],c:[[8,2,0],[10,3,0],[12,3,0],[14,4,0],[16,4,0],[20,5,0],[24,6,0],[28,7,5],[32,8,0],[36,9,0],[40,10,0]],d:[[5,4,0],[7,5,0],[10,7,5],[11,8,0],[12,9,0],[14,10,0],[17,13,0],[20,15,5]]},f={u:[[24,3.5,0],[34,4.9,0],[48,7,5],[53,7.7,0],[62,9.1,0],[72,10.5,0],[86,12.6,0],[101,14.7,5]],c:[[2,8,0],[3,10,0],[3,12,0],[4,14,0],[4,16,0],[5,20,0],[6,24,0],[7,28,5],[8,32,0],[9,36,0],[10,40,0]],d:[[5,4,0],[7,5,0],[10,7,5],[11,8,0],[12,9,0],[14,10,0],[17,13,0],[20,15,5]]},y={u:[[20,5,0],[28,7,0],[40,10,5],[44,11,0],[52,13,0],[60,15,0],[72,18,0],[84,21,5]],c:[[7,2,0],[9,2,0],[11,3,0],[13,3,0],[14,4,0],[18,5,0],[22,5,0],[25,6,5],[29,7,0],[32,8,0],[36,9,0]],d:[[4,4,0],[6,6,0],[9,8,5],[9,9,0],[11,10,0],[13,12,0],[15,14,0],[18,17,5]]},d={u:[[21,3.5,0],[29,4.9,0],[42,7,5],[46,7.7,0],[55,9.1,0],[63,10.5,0],[76,12.6,0],[88,14.7,5]],c:[[8,2,0],[10,2,0],[11,3,0],[13,3,0],[15,4,0],[19,5,0],[23,6,0],[27,7,5],[30,8,0],[34,9,0],[38,10,0]],d:[[4,5,0],[5,6,0],[8,9,5],[8,10,0],[10,12,0],[11,14,0],[14,16,0],[16,19,5]]},r={u:[[20,4.3,0],[27,6,0],[39,8.5,5],[43,9.4,0],[51,11.1,0],[59,12.8,0],[70,15.3,0],[82,17.9,5]],c:[[7,2,0],[9,2,0],[11,3,0],[13,3,0],[14,4,0],[18,5,0],[22,5,0],[25,6,5],[29,7,0],[32,8,0],[36,9,0]],d:[[5,4,0],[6,5,0],[9,8,5],[10,8,0],[12,10,0],[14,11,0],[16,14,0],[19,16,5]]},B={u:[[18,3.5,0],[25,4.9,0],[36,7,5],[40,7.7,0],[47,9.1,0],[54,10.5,0],[65,12.6,0],[76,14.7,5]],c:[[2,8,0],[2,10,0],[3,11,0],[3,13,0],[4,15,0],[5,19,0],[6,23,0],[7,27,5],[8,30,0],[9,34,0],[10,38,0]],d:[[4,5,0],[5,6,0],[8,9,5],[8,10,0],[10,12,0],[11,14,0],[14,16,0],[16,19,5]]},E={u:[[20,3.2,0],[27,4.6,0],[39,6.5,5],[43,7.2,0],[51,8.5,0],[59,9.8,0],[70,11.7,0],[82,13.7,5]],c:[[2,8,0],[2,10,0],[3,11,0],[3,13,0],[4,15,0],[5,19,0],[6,23,0],[7,27,5],[8,30,0],[9,34,0],[10,38,0]],d:[[4,5,0],[6,7,0],[9,10,5],[9,11,0],[11,13,0],[13,15,0],[15,18,0],[18,21,5]]},z={u:[[19,3,0],[27,4.2,0],[38,6,5],[42,6.6,0],[49,7.8,0],[57,9,0],[68,10.8,0],[80,12.6,5]],c:[[2,7,0],[2,9,0],[3,10,0],[3,12,0],[4,14,0],[4,17,0],[5,20,0],[6,24,5],[7,27,0],[8,31,0],[9,34,0]],d:[[4,5,0],[6,7,0],[9,10,5],[9,11,0],[11,13,0],[13,15,0],[15,18,0],[18,21,5]]},t={xk:F,xkf:f,ys:r,tw:o,tw2:i,zs:B,zs2:E,zy:z,yf:y,yf2:d};function a(n){return n%1>.5?Math.ceil(n):Math.floor(n)}function e(n){return{u:n.u.reduce((u,s)=>(u[0]+=s[0],u[5]+=s[1],u[6]+=s[2],u),[0,0,0,0,0,0,0]).map(u=>a(u)),c:n.c.reduce((u,s)=>(u[1]+=s[0],u[3]+=s[1],u[6]+=s[2],u),[0,0,0,0,0,0,0]).map(u=>a(u)),d:n.d.reduce((u,s)=>(u[2]+=s[0],u[4]+=s[1],u[6]+=s[2],u),[0,0,0,0,0,0,0]).map(u=>a(u))}}const c={xk:e(t.xk),xkf:e(t.xkf),ys:e(t.ys),tw:e(t.tw),tw2:e(t.tw2),zs:e(t.zs),zs2:e(t.zs2),zy:e(t.zy),yf:e(t.yf),yf2:e(t.yf2)},A={xk:"\u4FA0\u5BA2",xkf:"\u4FA0\u5BA2\u6CD5",ys:"\u7FBD\u58EB",tw:"\u94C1\u536B",tw2:"\u94C1\u536B2",zs:"\u5492\u5E08",zs2:"\u5492\u5E082",zy:"\u795D\u7531",yf:"\u5FA1\u98CE",yf2:"\u5FA1\u98CE2"};function w(n,u){switch(u){case"\u4EFB\u65AD\u79BB":return c.xkf;case"\u65E0\u76F8\xB7\u5F2D\u670D":case"\u4E5D\u9634":case"\u4E0A\u5B98\u8FDC":case"\u9C9C\u4E8E\u8D85":case"\u9AD8\u621A":case"\u963F\u5C14\u6CF0\u5DF4":return c.tw2;case"\u90F8\u9634":case"\u97E9\u65E0\u7802":return c.zs2;case"\u9B54\u5316\u7687\u752B\u7533":case"\u5251\u90AA":case"\u6768\u4E91\u4F50":case"\u7075\u9F29":return c.yf2}switch(n){case"\u94C1\u536B":return c.tw;case"\u4FA0\u5BA2":return c.xk;case"\u7FBD\u58EB":return c.ys;case"\u5FA1\u98CE":return c.yf;case"\u5492\u5E08":return c.zs;case"\u795D\u7531":return c.zy;default:return{u:[0,0,0,0,0,0,0],c:[0,0,0,0,0,0,0],d:[0,0,0,0,0,0,0]}}}export{A as a,w as g,c as w};
