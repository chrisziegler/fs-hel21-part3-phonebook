(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(17),s=t.n(r),a=(t(23),t(3)),u=t(0),o=function(e){var n=e.searchTerm,t=e.setSearchTerm;return Object(u.jsx)("input",{value:n,onChange:function(e){t(e.target.value)}})},i=function(e){var n=e.person,t=e.handleDelete;e.isShown;return Object(u.jsxs)("li",{children:[n.name," ",n.number,Object(u.jsx)("button",{className:"delete",onClick:function(){return t(n)},children:"X"})]})},l=t(8),j=t.n(l),d=t(18),b=t(4),f=t.n(b),h="/api/persons",O=function(){return f.a.get(h).then((function(e){return e.data}))},m=function(e){return f.a.post(h,e).then((function(e){return e.data}))},p=function(e,n){return f.a.put("".concat(h,"/").concat(n),e).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},x=function(e){var n=e.persons,t=e.setPersons,r=e.setSuccessMessage,s=e.setErrorMessage,o=Object(c.useState)(""),i=Object(a.a)(o,2),l=i[0],b=i[1],f=Object(c.useState)(""),h=Object(a.a)(f,2),O=h[0],v=h[1],x=function(){var e=Object(d.a)(j.a.mark((function e(c){var a,u,o,i,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),a={name:l,number:O},e.prev=2,n.some((function(e){return e.name===l}))){e.next=14;break}return e.next=6,m(a);case 6:u=e.sent,t(n.concat(u)),b(""),v(""),r("Added ".concat(l)),setTimeout((function(){r(null)}),5e3),e.next=24;break;case 14:return window.confirm("".concat(l," is already added to phonebook, replace old numer with a new one?")),o=n.find((function(e){return e.name===a.name})),i=o.id,e.next=18,p(a,i);case 18:d=e.sent,t(n.map((function(e){return e.id!==i?e:d}))),b(""),v(""),r("Added ".concat(l)),setTimeout((function(){r(null)}),5e3);case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(2),s("Information of ".concat(l," has already been deleted from server")),setTimeout((function(){s(null)}),5e3);case 30:case"end":return e.stop()}}),e,null,[[2,26]])})));return function(n){return e.apply(this,arguments)}}();return Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{children:["name:",Object(u.jsx)("input",{value:l,onChange:function(e){b(e.target.value)}})]}),Object(u.jsxs)("div",{children:["number:",Object(u.jsx)("input",{value:O,onChange:function(e){v(e.target.value)}})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",onClick:x,children:"add"})})]})},g=function(e){var n=e.successMessage,t=e.errorMessage;return null===n&&null===t?null:t?Object(u.jsx)("div",{className:"error",children:t}):Object(u.jsx)("div",{className:"successMessage",children:n})},w=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],s=Object(c.useState)(""),l=Object(a.a)(s,2),j=l[0],d=l[1],b=Object(c.useState)([]),f=Object(a.a)(b,2),h=f[0],m=f[1],p=Object(c.useState)(null),w=Object(a.a)(p,2),k=w[0],S=w[1],M=Object(c.useState)(null),C=Object(a.a)(M,2),T=C[0],y=C[1];Object(c.useEffect)((function(){O().then((function(e){r(e)}))}),[]),Object(c.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));m(e)}),[j,t]);var E=function(e){var n=e.id,c=e.name;v(n).then(window.confirm("Delete ".concat(c,"?"))),r(t.filter((function(e){return e.id!==n})))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(g,{successMessage:k,errorMessage:T}),Object(u.jsx)(o,{setSearchTerm:d,searchTerm:j}),Object(u.jsx)("h2",{children:"add a new"}),Object(u.jsx)(x,{persons:t,setPersons:r,setSuccessMessage:S,setErrorMessage:y}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)("ul",{children:h.map((function(e){return Object(u.jsx)(i,{person:e,handleDelete:E},e.name)}))})]})};s.a.render(Object(u.jsx)(w,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ae1b3c25.chunk.js.map