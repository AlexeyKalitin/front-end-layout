(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){t.exports={input:"Input_input__2G47M",todo__text:"Input_todo__text__1pn4e"}},,function(t,e,n){t.exports={"filter__arrow-active":"filter_filter__arrow-active__1rsU3","filter__arrow-down":"filter_filter__arrow-down__3uVRN",filter__button:"filter_filter__button__18e3v","sortBy-text":"filter_sortBy-text__29SEO","filter__arrow-up":"filter_filter__arrow-up__OP7g5",filter:"filter_filter__3XliD","filter-sort":"filter_filter-sort__1JOTC"}},function(t,e,n){t.exports={paginate__button:"Paginate_paginate__button__2zzEP","paginate__button-active":"Paginate_paginate__button-active__hrUrT",paginate:"Paginate_paginate__nl--3"}},function(t,e,n){t.exports={"todo-list":"TodoList_todo-list__xYulE"}},function(t,e,n){t.exports={"todo-list__input":"TodoElement_todo-list__input__2O389",todo:"TodoElement_todo__2tCc6","todo-list__input-error":"TodoElement_todo-list__input-error__1firz","todo-list__button":"TodoElement_todo-list__button__ag80b","todo-list__text":"TodoElement_todo-list__text__22rfw","todo-list__date":"TodoElement_todo-list__date__2tVnB","todo-list__trashbin":"TodoElement_todo-list__trashbin__1rkC7"}},function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),c=n(7),a=n.n(c),r=(n(12),n(4)),s=n(2),l=(n(13),n(14),n(0));var u=function(t){var e=t.newElemSetter,n=Object(o.useState)(""),i=Object(s.a)(n,2),c=i[0],a=i[1],r=new Date;return Object(l.jsx)("div",{className:"input",children:Object(l.jsx)("input",{onKeyDown:function(t){if(" "!==c[0]&&""!==c&&"Enter"===t.key){var n={key:r.getTime(),text:c,isDone:!1,date:"".concat(r.getDay(),".").concat(r.getMonth()+1,".").concat(r.getFullYear()," ").concat(r.getHours(),":").concat(r.getMinutes(),":").concat(r.getSeconds())};a(""),e(n)}},value:c,onChange:function(t){a(t.target.value)},placeholder:"Type task",autoFocus:!0,maxLength:"16",className:"todo__text"})})},_=(n(16),n.p+"static/media/arrowup.d526aa02.svg"),d=n.p+"static/media/arrowdown.37fca0e1.svg";var j=function(t){var e=t.todosFilter,n=t.FilterSort,o=t.activeFilterSort,i=t.value,c=t.sortType;return Object(l.jsx)("button",{onClick:function(){e(i),n(c)},className:o===c?"filter__button-active":"filter__button",children:c})};var b=function(t){var e=t.todosFilter,n=t.setSortStatus,i=Object(o.useState)("all"),c=Object(s.a)(i,2),a=c[0],r=c[1],u=function(t){r(t)},b=Object(l.jsx)("button",{onClick:function(){n("down")},className:"filter__arrow-down",children:Object(l.jsx)("img",{alt:"arrowdown",src:d})}),f=Object(l.jsx)("button",{onClick:function(){n("up")},className:"filter__arrow-up",children:Object(l.jsx)("img",{alt:"arrowup",src:_})});return Object(l.jsxs)("span",{className:"filter",children:[Object(l.jsxs)("span",{className:"filter-buttons",children:[Object(l.jsx)(j,{todosFilter:e,FilterSort:u,activeFilterSort:a,value:"all",sortType:"all"}),Object(l.jsx)(j,{todosFilter:e,FilterSort:u,activeFilterSort:a,value:!0,sortType:"done"}),Object(l.jsx)(j,{todosFilter:e,FilterSort:u,activeFilterSort:a,value:!1,sortType:"undone"})]}),Object(l.jsxs)("span",{className:"filter-sort",children:[Object(l.jsx)("p",{className:"sortBy-text",children:"Sort by Date"}),b,f]})]})};n(17);var f=function(t){for(var e=t.setCurrentPage,n=t.currentPage,o=t.countTodoElem,i=t.countElemPerPage,c=[],a=[],s=o/i,u=1;u<s+1;u++)c.push(u);return a=c.slice(0),(o-1)/i<n&&n>0&&e(n-1),s>9&&(a=c.slice(0,2).concat(c.slice(n-1,n+2)).concat(c.slice(-3,-1)).concat(c[c.length-1]).sort((function(t,e){return t-e})),a=Object(r.a)(new Set(a))),Object(l.jsxs)("div",{className:"paginate",children:[Object(l.jsx)("div",{className:"paginate__button",children:Object(l.jsx)("button",{className:"paginate__button",onClick:function(){n>0&&e(n-1)},children:"Prev"})}),a.map((function(t){return c.length>1?Object(l.jsx)("div",{className:"paginate__button",children:Object(l.jsx)("button",{className:t-1===n?"paginate__button paginate__button-active":"paginate__button",onClick:function(){e(t-1)},children:t})},t):Object(l.jsx)("div",{},t)})),Object(l.jsx)("div",{className:"paginate__button",children:Object(l.jsx)("button",{className:"paginate__button",onClick:function(){s-1>n&&e(n+1)},children:"Next"})})]})},p=(n(18),n(19),n.p+"static/media/undone.244b6687.svg"),g=n.p+"static/media/trash.1129c53a.svg",x=n.p+"static/media/icon.6a318b8d.svg";var O=function(t){var e=t.todo,n=t.removeTodo,i=t.changeTodoCondition,c=t.changeTask,a=Object(o.useState)(!1),r=Object(s.a)(a,2),u=r[0],_=r[1];return Object(l.jsxs)("li",{children:[Object(l.jsx)("button",{onClick:function(){return i(e.key)},title:"done",className:"todo-list__button",children:Object(l.jsx)("img",{alt:"undone",src:!1===e.isDone?p:x,className:"todo-list__picture"})}),Object(l.jsx)("span",{onClick:function(){return _(!0)},className:"todo-list__text",children:u?Object(l.jsx)("input",{onBlur:function(){_(!1)},autoFocus:!0,maxLength:"16",defaultValue:e.text,onKeyDown:function(t){t.target.className="todo-list__input"," "!==t.target.value[0]&&""!==t.target.value?("Enter"===t.key&&(c(e.key,t.target.value),_(!1)),"Escape"===t.key&&_(!1)):t.target.className="todo-list__input-error"},className:"todo-list__input"}):Object(l.jsx)("p",{children:e.text})}),Object(l.jsx)("p",{className:"todo-list__date",children:e.date}),Object(l.jsx)("button",{onClick:function(){return n(e.key)},title:"delete",className:"todo-list__trashbin",children:Object(l.jsx)("img",{alt:"delete",src:g})})]},e.key)};var m=function(t){var e=t.todos,n=t.removeTodo,o=t.changeTodoCondition,i=t.changeTask;return 0===e.length?Object(l.jsx)("h1",{style:{marginTop:"2vw"},children:"Nothing..."}):Object(l.jsx)("ul",{className:"todo-list",children:e.map((function(t,e){return Object(l.jsx)(O,{todo:t,removeTodo:n,changeTodoCondition:o,changeTask:i},e)}))})};var h=function(){var t=Object(o.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1],c=Object(o.useState)([]),a=Object(s.a)(c,2),_=a[0],d=a[1],j=Object(o.useState)(0),p=Object(s.a)(j,2),g=p[0],x=p[1],O=Object(o.useState)(5),h=Object(s.a)(O,1)[0];return Object(l.jsxs)("div",{className:"conteiner",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("h1",{children:"ToDo"}),Object(l.jsx)(u,{newElemSetter:function(t){return function(t){i([].concat(Object(r.a)(n),[t])),d([].concat(Object(r.a)(_),[t]))}(t)}})]}),Object(l.jsx)(b,{todosFilter:function(t){return function(t){d("all"===t?n:n.filter((function(e){return e.isDone===t}))),x(0)}(t)},setSortStatus:function(t){return function(t){var e=_.sort((function(t,e){return t.key-e.key})).slice(0);"down"===t&&(e=_.sort((function(t,e){return e.key-t.key})).slice(0)),d(e)}(t)}}),Object(l.jsx)("div",{className:"todo-main"})]}),Object(l.jsx)(m,{todos:_.slice(g*h,g*h+h),removeTodo:function(t){return function(t){i(n.filter((function(e){return e.key!==t}))),d(_.filter((function(e){return e.key!==t})))}(t)},changeTodoCondition:function(t){return function(t){var e=n.slice(0);n.forEach((function(n,o){n.key===t&&(e[o].isDone=!0)})),i(e),e=_.slice(0),_.forEach((function(n,o){n.key===t&&(e[o].isDone=!0)})),d(e)}(t)},changeTask:function(t,e){return function(t,e){var o=n.slice(0);n.forEach((function(n,i){n.key===t&&(o[i].text=e)})),i(o),o=_.slice(0),_.forEach((function(n,i){n.key===t&&(o[i].text=e)})),d(o)}(t,e)}}),n.length>0&&Object(l.jsx)(f,{setCurrentPage:function(t){return x(t)},currentPage:g,countTodoElem:_.length,countElemPerPage:h})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),o(t),i(t),c(t),a(t)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.089bc967.chunk.js.map