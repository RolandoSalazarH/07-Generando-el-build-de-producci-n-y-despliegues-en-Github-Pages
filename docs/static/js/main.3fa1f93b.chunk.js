(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=n(2),s=n(9),u=n(0);function o(t){var e=t.setCategorias,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){return[a].concat(Object(s.a)(t))}))},children:Object(u.jsx)("input",{onChange:function(t){o(t.target.value),console.log(a)},value:a})})}var j=n(6),l=n.n(j),d=n(8);function p(){return(p=Object(d.a)(l.a.mark((function t(e){var n,c,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=X1VDYSPNMN6lbt8HlM8XIMJJj9F73AZt"));case 2:return n=t.sent,t.next=5,n.json();case 5:return c=t.sent,r=c.data,a=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){(function(t){return p.apply(this,arguments)})(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),r}function f(t){var e=t.categoria,n=b(e),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),r&&Object(u.jsx)("p",{children:"Loading.."}),c.map((function(t){var e=t.title,n=t.url,c=t.id;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]},c)}))]})}function h(){var t=Object(c.useState)([""]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"Main-title",children:"GifExpertApp"}),Object(u.jsx)(o,{setCategorias:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(f,{categoria:t},t)}))})]})}n(16);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3fa1f93b.chunk.js.map