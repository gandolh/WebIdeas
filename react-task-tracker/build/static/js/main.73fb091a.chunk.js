(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(20),s=n.n(a),o=(n(28),n(14)),i=n(23),u=n(6),j=n.n(u),l=n(11),d=n(10),b=n(8),h=n(2),f=n(1),p=function(e){return Object(f.jsx)("button",{onClick:e.onClick,className:"btn",style:{backgroundColor:e.color},children:e.text})},O=function(e){var t=Object(h.e)();return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:e.title}),"/"===t.pathname&&Object(f.jsx)(p,{color:e.showAdd?"red":"green",text:e.showAdd?"Close":"Add",onClick:e.onAdd})]})},x=n(22),m=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(f.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){r(t.id)},children:[Object(f.jsxs)("h3",{children:[t.text,Object(f.jsx)(x.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(f.jsx)("p",{children:t.day})]})},k=function(e){return Object(f.jsx)(f.Fragment,{children:e.tasks.map((function(t){return Object(f.jsx)(m,{task:t,onDelete:e.onDelete,onToggle:e.onToggle},t.id)}))})},v=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),o=Object(d.a)(s,2),i=o[0],u=o[1],j=Object(r.useState)(!1),l=Object(d.a)(j,2),b=l[0],h=l[1];return Object(f.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),c?(e.onAdd({text:c,day:i,reminder:b}),a(""),u(""),h(!1)):alert("Please add a task")},children:[Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Task "}),Object(f.jsx)("input",{type:"text",placeholder:"Add Task",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Day & time "}),Object(f.jsx)("input",{type:"text",placeholder:"Add Day & time",value:i,onChange:function(e){return u(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control form-control-check",children:[Object(f.jsx)("label",{children:"Set reminder "}),Object(f.jsx)("input",{type:"checkbox",checked:b,value:b,onChange:function(e){return h(e.currentTarget.checked)}})]}),Object(f.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},g=function(){return Object(f.jsxs)("footer",{children:[Object(f.jsx)("p",{children:"    Copyright \xa9 2021 "}),Object(f.jsx)(b.b,{to:"/about",children:"About"})]})},y=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Version 1.0.0"}),Object(f.jsx)(b.b,{to:"/",children:"Go Back "})]})};var w=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),u=s[0],p=s[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:p(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,p(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(b.a,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(O,{title:"Task Tracker",onAdd:function(){return c(!n)},showAdd:n}),Object(f.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(f.jsxs)(f.Fragment,{children:[n&&Object(f.jsx)(v,{onAdd:w}),u.length?Object(f.jsx)(k,{tasks:u,onDelete:C,onToggle:T}):"no tasks for today :D"]})}}),Object(f.jsx)(h.a,{path:"/about",component:y}),Object(f.jsx)(g,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),C()}},[[39,1,2]]]);
//# sourceMappingURL=main.73fb091a.chunk.js.map