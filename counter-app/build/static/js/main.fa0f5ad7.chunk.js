(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),o=n.n(c),s=(n(14),n(8)),u=n(6),i=n(2),l=n(3),d=n(5),b=n(4),h=(n.p,n(15),n(0)),p=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return console.log("navbar rendered"),Object(h.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(h.jsxs)("a",{className:"navbar-brand",href:"#",children:["Navbar"," ",Object(h.jsx)("span",{className:"badge badge-pill badge-secondary",children:this.props.totalCounters})]})})}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:this.getBadgeClasses(),children:this.formatCount()}),Object(h.jsx)("button",{onClick:function(){e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm",children:"Increment"}),Object(h.jsx)("button",{onClick:function(){e.props.onDecrement(e.props.counter)},className:"btn btn-secondary btn-sm m-2",children:"Decrement"}),Object(h.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2",children:"Delete"})]})}},{key:"getBadgeClasses",value:function(){var e="badge m-2 ";return e+=0==this.props.counter.value?"badge-warning":"badge-primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0==e?"Zero":e}}]),n}(a.Component),m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.onAdd,a=e.onIncrement,r=e.onDecrement,c=e.onDelete,o=e.counters;return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:t,className:"btn btn-primary btn-sm m-2",children:"Reset"}),Object(h.jsx)("button",{onClick:n,className:"btn btn-primary btn-sm m-2",children:"Add new Counter"}),o.map((function(e){return Object(h.jsx)(j,{onDelete:c,onIncrement:a,counter:e,onDecrement:r},e.id)}))]})}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={counters:[{id:1,value:4},{id:2,value:1},{id:3,value:1},{id:4,value:1}]},e.handleIncrement=function(t){var n=Object(u.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(s.a)({},t),n[a].value++,e.setState({counters:n})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!=t}));e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.handleUpdate(t)},e.handleDecrement=function(t){var n=Object(u.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(s.a)({},t),n[a].value>0&&n[a].value--,e.handleUpdate(n)},e.handleAdd=function(){var t=Object(u.a)(e.state.counters);t.length>0?t.push({id:t[t.length-1].id+1,value:1}):t.push({id:1,value:1}),e.setState({counters:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handleUpdate",value:function(e){e=e.filter((function(e){return e.value>0})),this.setState({counters:e})}},{key:"render",value:function(){return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)(p,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),Object(h.jsx)("main",{className:"container",children:Object(h.jsx)(m,{counters:this.state.counters,onReset:this.handleReset,onAdd:this.handleAdd,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete})})]})}}]),n}(a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};n(17);o.a.render(Object(h.jsx)(v,{}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.fa0f5ad7.chunk.js.map