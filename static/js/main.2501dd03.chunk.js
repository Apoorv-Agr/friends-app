(this["webpackJsonpfriends-app"]=this["webpackJsonpfriends-app"]||[]).push([[0],{2:function(e,t,n){e.exports={appHeader:"friendsListStyle_appHeader__1NmFr",addFriendInput:"friendsListStyle_addFriendInput__3G5Q-",searchInput:"friendsListStyle_searchInput__3RMSV",close:"friendsListStyle_close__2CCzI",marginTop10:"friendsListStyle_marginTop10__tpyUL",textAlignCenter:"friendsListStyle_textAlignCenter__1LcpI",favBtn:"friendsListStyle_favBtn__udlSx",loader:"friendsListStyle_loader___0iKs",spin:"friendsListStyle_spin__HyZxR",pagination:"friendsListStyle_pagination__1B5q8",active:"friendsListStyle_active__3_ozW",friendsListTable:"friendsListStyle_friendsListTable__2Cc9G",sortSpan:"friendsListStyle_sortSpan__22mBf",ascSortIcon:"friendsListStyle_ascSortIcon__3V_zT",descSortIcon:"friendsListStyle_descSortIcon__bjIeE",modal:"friendsListStyle_modal__7t6eH",cancelBtn:"friendsListStyle_cancelBtn__1SrqP",deleteBtn:"friendsListStyle_deleteBtn__2NHSG",container:"friendsListStyle_container__3MBc0",modalContent:"friendsListStyle_modalContent__j9ztN",clearfix:"friendsListStyle_clearfix__anlSx"}},21:function(e,t,n){},22:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(9),r=n.n(a),s=(n(21),n(22),n(6)),o=n(8),d=n(5),l=n(3),u="GET_FRIEND",j="ADD_FRIEND",f="ADD_FAV_FRIEND",h="REMOVE_FAV_FRIEND",b="DELETE_FRIEND",O="SHOW_LOADER",p="HIDE_LOADER",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n={id:e.length+1,name:t,isFavorite:!1,isDeleted:!1};return e.push(n),Object(d.a)(e)},m=function(e,t){return e.map((function(e){return e.id===t.id&&(e.isFavorite=!0),e}))},x=function(e,t){return e.map((function(e){return e.id===t.id&&(e.isFavorite=!1),e}))},L=function(e,t){return e.filter((function(e){return e.id!==t.id}))},F={showLoader:!1,friendsList:[]},_=[{id:1,name:"Rahul Gupta",isFavorite:!0,isDeleted:!1},{id:2,name:"Shivangi Sharma",isFavorite:!1,isDeleted:!1,gender:"F"},{id:3,name:"Akash Singh",isFavorite:!1,isDeleted:!1},{id:4,name:"Vatsal Singh",isFavorite:!1,isDeleted:!1},{id:5,name:"Vaibhav Singh",isFavorite:!1,isDeleted:!1},{id:6,name:"Himanshu Singh",isFavorite:!1,isDeleted:!1},{id:7,name:"Rahul Singh",isFavorite:!1,isDeleted:!1},{id:8,name:"Rahul Yadav",isFavorite:!1,isDeleted:!1},{id:9,name:"Rahul Dev",isFavorite:!1,isDeleted:!1},{id:10,name:"Rahul Tiwari",isFavorite:!1,isDeleted:!1}],g=Object(o.b)({friendsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=t.type,i=t.payload;switch(n){case O:case p:return Object(l.a)(Object(l.a)({},e),{},{showLoader:i.showLoader});case u:return Object(l.a)(Object(l.a)({},e),{},{showLoader:i.showLoader,friendsList:_});case j:return Object(l.a)(Object(l.a)({},e),{},{showLoader:i.showLoader,friendsList:v(Object(d.a)(e.friendsList),i.friendsDataToAdd)});case b:return Object(l.a)(Object(l.a)({},e),{},{showLoader:i.showLoader,friendsList:L(Object(d.a)(e.friendsList),i.friendsDataToDel)});case f:return Object(l.a)(Object(l.a)({},e),{},{showLoader:i.showLoader,friendsList:m(Object(d.a)(e.friendsList),i.addFavFriendsData)});case h:return Object(l.a)(Object(l.a)({},e),{},{showLoader:i.showLoader,friendsList:x(Object(d.a)(e.friendsList),i.delFavFriendsData)});default:return Object(l.a)({},e)}}}),S=n(15),y=n.n(S),C=Object(o.c)(g,Object(o.a)(y.a)),A=n(2),D=n.n(A),w=n(0),k=function(){return Object(w.jsx)("div",{className:D.a.appHeader,children:Object(w.jsx)("h1",{children:"Friends List"})})},N=n(4),P=n(16),I=n.n(P),T=function(){return{type:O,payload:{showLoader:!0}}},B=Object(s.b)(null,(function(e){return{showLoadingActionProps:function(){e(T())},addFriendsActionProps:function(t){e({type:j,payload:{friendsDataToAdd:t,showLoader:!1}})}}}))((function(e){var t=Object(i.useState)(""),n=Object(N.a)(t,2),c=n[0],a=n[1],r=Object(i.useRef)(null);Object(i.useEffect)((function(){r.current.focus()}),[]);return Object(w.jsx)("span",{children:Object(w.jsx)("form",{onSubmit:function(t){t.preventDefault(),c&&(e.showLoadingActionProps(),setTimeout((function(){e.addFriendsActionProps(c),a(""),r.current.focus()}),200))},children:Object(w.jsx)("input",{type:"text",ref:r,placeholder:"Add New Friend",value:c,onChange:function(e){!function(e){(e.target.value.match(/^[A-Z a-z]+$/)||""===e.target.value)&&a(e.target.value)}(e)},className:D.a.addFriendInput})})})})),E=function(e){var t=e.okClickHandler,n=e.cancelClickHandler,i=e.descriptionText,c=void 0===i?"Are you sure you want to delete your account?":i,a=e.cancelBtnText,r=void 0===a?"Cancel":a,s=e.okBtnText,o=void 0===s?"Ok":s;return Object(w.jsx)("div",{children:Object(w.jsx)("div",{id:"id01",className:D.a.modal,children:Object(w.jsx)("div",{className:D.a.modalContent,children:Object(w.jsxs)("div",{className:D.a.container,children:[Object(w.jsx)("p",{children:c}),Object(w.jsxs)("div",{className:D.a.clearfix,children:[Object(w.jsx)("button",{type:"button",onClick:function(){n()},className:D.a.cancelBtn,children:r}),Object(w.jsx)("button",{type:"button",onClick:function(){t()},className:D.a.deleteBtn,children:o})]})]})})})})},R=function(e){var t=Object(i.useRef)(null),n=e.searchText,c=e.onSearchChange;return Object(i.useEffect)((function(){t.current.focus()}),[]),Object(w.jsx)("span",{children:Object(w.jsx)("input",{ref:t,placeholder:"Enter your friend's name",value:n,type:"search",onChange:c,className:"".concat(D.a.searchInput)})})},H=n.p+"static/media/star-16.1cbefae3.ico",V=n.p+"static/media/star-16-grey.1c300d50.ico",M=n.p+"static/media/trash-9-16-Blue.7a385d9f.ico",z=n.p+"static/media/asc-sort.2e3797d9.ico",G=n.p+"static/media/asc-sort-active.a2398c2f.ico",q=n.p+"static/media/desc-sort-active.2485d125.ico",J=n.p+"static/media/desc-sort.a3c5843f.ico",W=function(){return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:D.a.loader})})},Z=function(e){var t=e.showLoader,n=e.currentFriendsList,i=e.removeFavFriendActionProps,c=e.addFavFriendActionProps,a=e.onDeleteFriendClick,r=e.sortOrder,s=void 0===r?"asc":r,o=e.isSortClicked,d=void 0!==o&&o,l=e.sortClickedHandler;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("table",{id:"friendsList",className:D.a.friendsListTable,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Name"}),Object(w.jsxs)("th",{children:["Favourite",Object(w.jsx)("span",{className:D.a.sortSpan,children:d?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("img",{src:"".concat("asc"===s?G:z),alt:"AscIcon",className:D.a.ascSortIcon,onClick:function(){l("asc")}}),Object(w.jsx)("img",{src:"".concat("desc"===s?q:J),alt:"DescIcon",className:D.a.descSortIcon,onClick:function(){l("desc")}})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("img",{src:"".concat(z),alt:"AscIcon",tooltip:"sort Asc",className:D.a.ascSortIcon,onClick:function(){l("asc")}}),Object(w.jsx)("img",{src:"".concat(J),alt:"DescIcon",tooltip:"sort Asc",className:D.a.descSortIcon,onClick:function(){l("desc")}})]})})]}),Object(w.jsx)("th",{children:"Remove"})]})}),Object(w.jsx)("tbody",{children:t?Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{}),Object(w.jsx)("td",{children:Object(w.jsx)(W,{})}),Object(w.jsx)("td",{})]},"Loader"):n&&n.map((function(e){var t=!0===e.isFavorite?Object(w.jsx)("button",{className:D.a.favBtn,onClick:function(){i(e)},children:Object(w.jsx)("img",{src:H,alt:"fav_enabled_icon"})}):Object(w.jsx)("button",{className:D.a.favBtn,onClick:function(){c(e)},children:Object(w.jsx)("img",{src:V,alt:"non_fav_enabled_icon"})});return Object(w.jsxs)("tr",{children:[Object(w.jsxs)("td",{children:[Object(w.jsx)("h3",{children:e.name}),Object(w.jsx)("p",{children:"is your friend"})]}),Object(w.jsx)("td",{children:t}),Object(w.jsx)("td",{children:Object(w.jsx)("button",{className:D.a.favBtn,onClick:function(){a(e)},children:Object(w.jsx)("img",{src:M,alt:"trashIcon"})})})]},"".concat(e.name,"#").concat(e.id))}))})]})})},K=void 0,Q=function(e){var t=e.itemsArray,n=void 0===t?[]:t,i=e.currentPage,c=e.handlePageClick,a=e.itemsPerPage,r=function(){for(var e=[],t=1;t<=Math.ceil(n.length/a);t++)e.push(t);return e.map((function(e){return Object(w.jsx)("a",{href:K,id:e,onClick:c,className:e===i?"".concat(D.a.active):"",children:e},e)}))};return Object(w.jsx)(w.Fragment,{children:function(){if(n.length>4)return Object(w.jsxs)("div",{className:D.a.pagination,children:[function(){if(i>1)return Object(w.jsx)("a",{id:i-1,onClick:c,href:K,children:"\xab"})}(),r(),function(){if(Math.ceil(n.length/a)>i)return Object(w.jsx)("a",{id:i+1,onClick:c,href:K,children:"\xbb"})}()]})}()})},U=Object(s.b)((function(e){return{showLoader:e.friendsState.showLoader,friendsList:e.friendsState.friendsList}}),(function(e){return{showLoadingActionProps:function(){e(T())},getFriendsActionProps:function(){e({type:u,payload:{showLoader:!1}})},addFavFriendActionProps:function(t){e(function(e){return{type:f,payload:{addFavFriendsData:e,showLoader:!1}}}(t))},removeFavFriendActionProps:function(t){e(function(e){return{type:h,payload:{delFavFriendsData:e,showLoader:!1}}}(t))},deleteFriendsActionProps:function(t){e(function(e){return{type:b,payload:{friendsDataToDel:e,showLoader:!1}}}(t))},hideLoaderActionProps:function(){e({type:p,payload:{showLoader:!1}})}}}))((function(e){var t=Object(i.useState)(""),n=Object(N.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)([]),s=Object(N.a)(r,2),o=s[0],l=s[1],u=Object(i.useState)(1),j=Object(N.a)(u,2),f=j[0],h=j[1],b=Object(i.useState)(!1),O=Object(N.a)(b,2),p=O[0],v=O[1],m=Object(i.useState)(null),x=Object(N.a)(m,2),L=x[0],F=x[1],_=Object(i.useState)(""),g=Object(N.a)(_,2),S=g[0],y=g[1],C=Object(i.useState)(!1),A=Object(N.a)(C,2),D=A[0],k=A[1],P=e.showLoadingActionProps,T=e.getFriendsActionProps,H=e.friendsList,V=e.hideLoaderActionProps,M=e.deleteFriendsActionProps,z=e.addFavFriendActionProps,G=e.removeFavFriendActionProps,q=e.showLoader;Object(i.useEffect)((function(){var e;return P&&T&&(P(),e=setTimeout((function(){T()}),200)),function(){clearTimeout(e)}}),[P,T]);var J=function(e){e.preventDefault(),P(),e.target.id>0&&h(Number(e.target.id)),setTimeout((function(){V()}),200)},W=4*f,K=W-4,U=function(){var e=[];return e=c?o:H,Object(d.a)(e).slice(K,W)}(),Y=function(e){v(!0),F(e)},$=function(){v(!1),F(null)},X=function(){P(),M(L),setTimeout((function(){V(),F(null),v(!1)}),200)},ee=I.a.debounce((function(e){var t=H.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));l(t),V()}),300),te=function(e){k(!1),a(e.target.value),P(),h(1),c?o.sort((function(e,t){return e.id-t.id})):H.sort((function(e,t){return e.id-t.id})),ee(e.target.value)},ne=function(e){k(!0),y(e),h(1),"asc"===e?c?o.sort((function(e,t){return t.isFavorite-e.isFavorite})):H.sort((function(e,t){return t.isFavorite-e.isFavorite})):c?o.sort((function(e,t){return e.isFavorite-t.isFavorite})):H.sort((function(e,t){return e.isFavorite-t.isFavorite}))};return Object(w.jsxs)("div",{children:[function(){if(p)return Object(w.jsx)(E,{okClickHandler:X,cancelClickHandler:$,headingText:"Confirmation",descriptionText:"Are you sure, you want to remove ".concat(L?L.name:"","?"),cancelBtnText:"Cancel",okBtnText:"Ok"})}(),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(R,{searchText:c,onSearchChange:te}),Object(w.jsx)(B,{}),Object(w.jsx)(Z,{showLoader:q,currentFriendsList:U,removeFavFriendActionProps:G,addFavFriendActionProps:z,onDeleteFriendClick:Y,isSortClicked:D,sortOrder:S,sortClickedHandler:ne}),Object(w.jsx)(Q,{itemsArray:c?o:H,currentPage:f,handlePageClick:J,itemsPerPage:4})]})]})}));var Y=function(){return Object(w.jsx)(s.a,{store:C,children:Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(k,{}),Object(w.jsx)(U,{})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(Y,{})}),document.getElementById("root")),$()}},[[31,1,2]]]);
//# sourceMappingURL=main.2501dd03.chunk.js.map