(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){t.exports={input:"Input_input__2mABs",todo__text:"Input_todo__text__2VKhO"}},,function(t,e,n){t.exports={"filter__arrow-active":"filter_filter__arrow-active__1CJ4a","filter__arrow-down":"filter_filter__arrow-down__2AjvG",filter__button:"filter_filter__button__1m8_4","sortBy-text":"filter_sortBy-text__3blXO","filter__arrow-up":"filter_filter__arrow-up__15XdD",filter:"filter_filter__1Rtgh","filter-sort":"filter_filter-sort__14E_z"}},function(t,e,n){t.exports={paginate__button:"Paginate_paginate__button__2oRGJ","paginate__button-active":"Paginate_paginate__button-active__1H2qi",paginate:"Paginate_paginate__3owsP"}},function(t,e,n){t.exports={"todo-list":"TodoList_todo-list__4vVRj"}},function(t,e,n){t.exports={"todo-list__input":"TodoElement_todo-list__input__8vt4n","todo-list__input-error":"TodoElement_todo-list__input-error__34YHg","todo-list__button":"TodoElement_todo-list__button__1ew_7","todo-list__text":"TodoElement_todo-list__text__3dL6a","todo-list__date":"TodoElement_todo-list__date__1ioTQ","todo-list__trashbin":"TodoElement_todo-list__trashbin__1vll4"}},function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),c=n(7),i=n.n(c),r=(n(12),n(4)),s=n(2),l=(n(13),n(14),n(0));var u=function(t){var e=t.newElemSetter,n=Object(o.useState)(""),a=Object(s.a)(n,2),c=a[0],i=a[1],r=new Date;return Object(l.jsx)("div",{className:"input",children:Object(l.jsx)("input",{onKeyDown:function(t){if(" "!==c[0]&&""!==c&&"Enter"===t.key){var n={key:r.getTime(),text:c,isDone:!1,date:"".concat(r.getDay(),".").concat(r.getMonth()+1,".").concat(r.getFullYear()," ").concat(r.getHours(),":").concat(r.getMinutes(),":").concat(r.getSeconds())};i(""),e(n)}},value:c,onChange:function(t){i(t.target.value)},placeholder:"Type task",autoFocus:!0,maxLength:"16",className:"todo__text"})})},_=(n(16),n.p+"static/media/arrowup.d526aa02.svg"),d=n.p+"static/media/arrowdown.37fca0e1.svg";var j=function(t){var e=t.todosFilter,n=t.setSortStatus,a=Object(o.useState)("all"),c=Object(s.a)(a,2),i=c[0],r=c[1],u=function(t){r(t)},j=Object(l.jsx)("button",{onClick:function(){n("down")},className:"filter__arrow-down",children:Object(l.jsx)("img",{alt:"arrowdown",src:d})}),b=Object(l.jsx)("button",{onClick:function(){n("up")},className:"filter__arrow-up",children:Object(l.jsx)("img",{alt:"arrowup",src:_})});return Object(l.jsxs)("span",{className:"filter",children:[Object(l.jsxs)("span",{className:"filter-buttons",children:[Object(l.jsx)("button",{onClick:function(){e("all"),u("all")},className:"all"===i?"filter__button-active":"filter__button",children:"all"}),Object(l.jsx)("button",{onClick:function(){e(!0),u("done")},className:"done"===i?"filter__button-active":"filter__button",children:"done"}),Object(l.jsx)("button",{onClick:function(){e(!1),u("undone")},className:"undone"===i?"filter__button-active":"filter__button",children:"undone"})]}),Object(l.jsxs)("span",{className:"filter-sort",children:[Object(l.jsx)("p",{className:"sortBy-text",children:"Sort by Date"}),j,b]})]})};n(17);var b=function(t){for(var e=t.setCurrentPage,n=t.valueCurrentPage,o=t.countTodoElem,a=t.countElemPerPage,c=[],i=[],s=o/a,u=1;u<s+1;u++)c.push(u);return i=c.slice(0),(o-1)/a<n&&n>0&&(console.log(o/a),e(n-1)),s>9&&(i=c.slice(0,2).concat(c.slice(n-1,n+2)).concat(c.slice(-3,-1)).concat(c[c.length-1]).sort((function(t,e){return t-e})),i=Object(r.a)(new Set(i))),Object(l.jsxs)("div",{className:"paginate",children:[Object(l.jsx)("div",{className:"paginate__button",children:Object(l.jsx)("button",{className:"paginate__button",onClick:function(){n>0&&e(n-1)},children:"Prev"})}),i.map((function(t){return c.length>1?Object(l.jsx)("div",{className:"paginate__button",children:Object(l.jsx)("button",{className:t-1===n?"paginate__button paginate__button-active":"paginate__button",onClick:function(){e(t-1)},children:t})},t):Object(l.jsx)("div",{},t)})),Object(l.jsx)("div",{className:"paginate__button",children:Object(l.jsx)("button",{className:"paginate__button",onClick:function(){s-1>n&&e(n+1)},children:"Next"})})]})},f=(n(18),n(19),n.p+"static/media/undone.244b6687.svg"),g=n.p+"static/media/trash.1129c53a.svg",m=n.p+"static/media/icon.6a318b8d.svg";var p=function(t){var e=t.todo,n=t.removeItem,a=t.changeCondition,c=t.changeTask,i=Object(o.useState)(!1),r=Object(s.a)(i,2),u=r[0],_=r[1];return Object(l.jsxs)("li",{children:[Object(l.jsx)("button",{onClick:function(){return a(e.key)},title:"done",className:"todo-list__button",children:Object(l.jsx)("img",{alt:"undone",src:!1===e.isDone?f:m,className:"todo-list__picture"})}),Object(l.jsx)("span",{onClick:function(){return _(!0)},className:"todo-list__text",children:u?Object(l.jsx)("input",{onBlur:function(){_(!1)},autoFocus:!0,maxLength:"16",defaultValue:e.text,onKeyDown:function(t){t.target.className="todo-list__input"," "!==t.target.value[0]&&""!==t.target.value?("Enter"===t.key&&(c(e.key,t.target.value),_(!1)),"Escape"===t.key&&_(!1)):t.target.className="todo-list__input-error"},className:"todo-list__input"}):Object(l.jsx)("p",{children:e.text})}),Object(l.jsx)("p",{className:"todo-list__date",children:e.date}),Object(l.jsx)("button",{onClick:function(){return n(e.key)},title:"delete",className:"todo-list__trashbin",children:Object(l.jsx)("img",{alt:"delete",src:g})})]},e.key)};var x=function(t){var e=t.todos,n=t.removeItem,o=t.changeCondition,a=t.changeTask;return 0===e.length?Object(l.jsx)("h1",{style:{marginTop:"2vw"},children:"Nothing..."}):Object(l.jsx)("ul",{className:"todo-list",children:e.map((function(t,e){return Object(l.jsx)(p,{todo:t,removeItem:n,changeCondition:o,changeTask:a},e)}))})};var O=function(){var t=Object(o.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1],c=Object(o.useState)([]),i=Object(s.a)(c,2),_=i[0],d=i[1],f=Object(o.useState)(0),g=Object(s.a)(f,2),m=g[0],p=g[1],O=Object(o.useState)(5),h=Object(s.a)(O,1)[0];return Object(l.jsxs)("div",{className:"conteiner",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("h1",{children:"ToDo"}),Object(l.jsx)(u,{newElemSetter:function(t){return function(t){a([].concat(Object(r.a)(n),[t])),d([].concat(Object(r.a)(_),[t]))}(t)}})]}),Object(l.jsx)(j,{todosFilter:function(t){return function(t){d("all"===t?n:n.filter((function(e){return e.isDone===t}))),p(0)}(t)},setSortStatus:function(t){return function(t){var e=[],n=_.sort((function(t,e){return t.key-e.key}));"down"===t&&(n=_.sort((function(t,e){return e.key-t.key}))),Object.assign(e,n),d(e)}(t)}}),Object(l.jsx)("div",{className:"todo-main"})]}),Object(l.jsx)(x,{todos:_.slice(m*h,m*h+h),removeItem:function(t){return function(t){a(n.filter((function(e){return e.key!==t}))),d(_.filter((function(e){return e.key!==t})))}(t)},changeCondition:function(t){return function(t){var e=n.map((function(e){return e.key===t?(e.isDone=!0,e):e}));a(e),e=_.map((function(e){return e.key===t?(e.isDone=!0,e):e})),d(e)}(t)},changeTask:function(t,e){return function(t,e){var o=n.map((function(n){return n.key===t?Object.assign({},n,{text:e}):n}));a(o),d(o)}(t,e)}}),n.length>0&&Object(l.jsx)(b,{setCurrentPage:function(t){return p(t)},valueCurrentPage:m,countTodoElem:_.length,countElemPerPage:h})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),o(t),a(t),c(t),i(t)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),h()}],[[20,1,2]]]);
//# sourceMappingURL=main.8f0893b3.chunk.js.map