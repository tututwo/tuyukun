import{S as O,i as z,s as C,e as w,b as y,F as q,h as c,o as F,k as u,l as p,m as d,Q as H,q as v,a as I,r as P,c as Q,n as k,E as h,u as A}from"../chunks/index.743a3fa8.js";import"../chunks/gsap.40dc4ee6.js";const T=async({fetch:n,params:l})=>{const{category:t}=l,o=(await(await n("/api/posts")).json()).filter(s=>s.meta.categories.includes(t));return{category:t,posts:o}},J=Object.freeze(Object.defineProperty({__proto__:null,load:T},Symbol.toStringTag,{value:"Module"}));function L(n,l,t){const e=n.slice();return e[1]=l[t],e}function M(n){let l,t=n[0].posts,e=[];for(let a=0;a<t.length;a+=1)e[a]=N(L(n,t,a));return{c(){l=u("ul");for(let a=0;a<e.length;a+=1)e[a].c()},l(a){l=p(a,"UL",{});var o=d(l);for(let s=0;s<e.length;s+=1)e[s].l(o);o.forEach(c)},m(a,o){y(a,l,o);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(l,null)},p(a,o){if(o&1){t=a[0].posts;let s;for(s=0;s<t.length;s+=1){const f=L(a,t,s);e[s]?e[s].p(f,o):(e[s]=N(f),e[s].c(),e[s].m(l,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=t.length}},d(a){a&&c(l),H(e,a)}}}function N(n){let l,t,e,a,o=n[1].meta.title+"",s,f,g,_=n[1].meta.date+"",m,b;return{c(){l=u("li"),t=u("h2"),e=u("a"),a=u("span"),s=v(o),g=v(`
      Published `),m=v(_),b=I(),this.h()},l(r){l=p(r,"LI",{});var i=d(l);t=p(i,"H2",{});var E=d(t);e=p(E,"A",{href:!0});var S=d(e);a=p(S,"SPAN",{class:!0});var j=d(a);s=P(j,o),j.forEach(c),S.forEach(c),E.forEach(c),g=P(i,`
      Published `),m=P(i,_),b=Q(i),i.forEach(c),this.h()},h(){k(a,"class","font-extrabold"),k(e,"href",f=n[1].path)},m(r,i){y(r,l,i),h(l,t),h(t,e),h(e,a),h(a,s),h(l,g),h(l,m),h(l,b)},p(r,i){i&1&&o!==(o=r[1].meta.title+"")&&A(s,o),i&1&&f!==(f=r[1].path)&&k(e,"href",f),i&1&&_!==(_=r[1].meta.date+"")&&A(m,_)},d(r){r&&c(l)}}}function U(n){let l,t=n[0].posts.length&&M(n);return{c(){t&&t.c(),l=w()},l(e){t&&t.l(e),l=w()},m(e,a){t&&t.m(e,a),y(e,l,a)},p(e,[a]){e[0].posts.length?t?t.p(e,a):(t=M(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},i:q,o:q,d(e){t&&t.d(e),e&&c(l)}}}function B(n,l,t){F(async()=>{await void 0});let{data:e}=l;return n.$$set=a=>{"data"in a&&t(0,e=a.data)},[e]}class K extends O{constructor(l){super(),z(this,l,B,U,C,{data:0})}}export{K as component,J as universal};
