import{_ as a}from"./index.js";import{d as t,f as n,x as o,y as e,r as s,o as r,c as l,a as d,C as c,D as i,F as m,E as u,z as v,B as p}from"./vendor.js";import{t as f,m as y,r as b}from"./data2.js";var k=t({components:{CDivider:a},setup(){const a={T:"天",D:"地",H:"荒"},t=n("T"),o=n([]);function e(a,t){return a+Math.floor(Math.random()*(t-a+1))}return{t:f,randomType:t,randomList:o,cleanRandom:function(){o.value=[]},tryRandom:function(n){const s=[];for(let o=0;o<n;o++){const n=[],o=[...y];for(let s=0,r=o.length-1;s<4;s++){const s=e(0,r),l=o[s],d=b[t.value][l.name],c=e(d[0],d[1]);n.push({type:a[t.value],name:l.name,value:c,rate:c/d[1]}),o[s]=o[r],r--}s.push(n)}s.length>0&&(o.value=s)}}}});const h=v();o("data-v-0c14cf02");const C={class:"page-container"},g=d("span",null,"模拟魂石",-1),R=d("option",{value:"T"},"天",-1),T=d("option",{value:"D"},"地",-1),x=d("option",{value:"H"},"荒",-1),D={class:"random-stone-items"},_=d("div",null,null,-1);e();const j=h(((a,t,n,o,e,v)=>{const f=s("CDivider");return r(),l("div",C,[d(f,{orientation:"left",style:{position:"sticky",top:"40px","background-color":"#fff"}},{action:h((()=>[c(d("select",{class:"select","onUpdate:modelValue":t[1]||(t[1]=t=>a.randomType=t),style:{"margin-right":"8px"}},[R,T,x],512),[[i,a.randomType]]),d("button",{class:"btn",onClick:t[2]||(t[2]=t=>a.tryRandom(1))},"来一枚"),d("button",{class:"btn",onClick:t[3]||(t[3]=t=>a.tryRandom(10))},"来十枚"),d("button",{class:"btn",onClick:t[4]||(t[4]=t=>a.tryRandom(100))},"来百枚"),d("button",{class:"btn",onClick:t[5]||(t[5]=t=>a.cleanRandom())},"清空")])),default:h((()=>[g])),_:1}),d("div",D,[(r(!0),l(m,null,u(a.randomList,(t=>(r(),l("div",{class:"random-stone-item",key:t},[d("div",null,p(t[0].type),1),_,(r(!0),l(m,null,u(t,(t=>(r(),l(m,{key:t},[d("div",{class:{"random-stone-lv0":t.rate<.6,"random-stone-lv1":t.rate>=.6&&t.rate<.8,"random-stone-lv2":t.rate>=.8&&t.rate<.9,"random-stone-lv3":t.rate>=.9}},p(a.t[t.name]),3),d("div",{class:{"random-stone-lv0":t.rate<.6,"random-stone-lv1":t.rate>=.6&&t.rate<.8,"random-stone-lv2":t.rate>=.8&&t.rate<.9,"random-stone-lv3":t.rate>=.9}},p(t.value)+"% ",3)],64)))),128))])))),128))])])}));k.render=j,k.__scopeId="data-v-0c14cf02";export{k as default};
