(this["webpackJsonpreact17-antd"]=this["webpackJsonpreact17-antd"]||[]).push([[0],{266:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(29),r=n.n(a),o=n(132),s=n(90),i=n(31),u={ROOT:"/react17-antd",HOME:"home",DOCUMENTS:"documents"},d={HOME:"".concat(u.ROOT,"/").concat(u.HOME),DOCUMENTS:"".concat(u.ROOT,"/").concat(u.DOCUMENTS)},l=[{path:u.HOME,breadcrumbName:"Home"},{path:u.DOCUMENTS,breadcrumbName:"Documents"}],j=d,b=n(26),O=n(270),m=n(275),h=n(274),f=n(107),p=n(272),x=n(97),v=n(54),y=n(63),g=n(271),D=n(94),w=n.n(D),T=n(9),M=[{title:"Channel",dataIndex:"channel",width:50},{title:"Document Name",ellipsis:!0,dataIndex:"documentName",render:function(e){return Object(T.jsx)("a",{href:"/#",children:e})},width:200},{title:"Group",dataIndex:"group",render:function(e){return Object(T.jsx)("a",{href:"/#",children:e})},width:50,sorter:function(e,t){var n=e.group,c=void 0===n?"":n,a=t.group,r=void 0===a?"":a;return c.localeCompare(r)},sortDirections:["descend","ascend"]},{title:"Status",dataIndex:"status",width:50,sorter:function(e,t){var n=e.status,c=void 0===n?"":n,a=t.status,r=void 0===a?"":a;return c.localeCompare(r)},sortDirections:["descend","ascend"]},{title:"Data Modified",dataIndex:"dataModified",width:80,render:function(e){return w()(e,"YYYYDDMM").format("YYYY-DD-MM")},sorter:function(e,t){return w()(e.dataModified,"YYYYDDMM")-w()(t.dataModified,"YYYYDDMM")},sortDirections:["descend","ascend"]},{title:"Type",dataIndex:"type",width:50,sorter:function(e,t){var n=e.type,c=void 0===n?"":n,a=t.type,r=void 0===a?"":a;return c.localeCompare(r)},sortDirections:["descend","ascend"]},{title:"Address",dataIndex:"address",render:function(e){return Object(T.jsx)("a",{href:"/#",children:e})},width:150}],C=h.a.Title,A=f.a.Option,E=function(e){var t=e.loadDocuments,n=e.filters,a=e.documents,r=e.loading,o=e.total;Object(c.useEffect)((function(){null===t||void 0===t||t(n)}),[n]);return Object(T.jsxs)(p.a,{style:{margin:"0 24px 24px"},children:[Object(T.jsxs)(x.a,{children:[Object(T.jsx)(v.a,{flex:"auto",children:Object(T.jsx)(C,{level:5,children:"Dashboard"})}),Object(T.jsxs)(v.a,{flex:"none",children:[Object(T.jsx)(f.a,{defaultValue:"date",bordered:!1,children:Object(T.jsx)(A,{value:"date",children:"Date"})}),Object(T.jsx)(y.a,{children:"Reset"})]})]}),Object(T.jsx)(x.a,{children:Object(T.jsx)(g.a,{"data-testid":"documents-list",style:{paddingTop:16},loading:r,rowKey:"id",columns:M,dataSource:a,pagination:{showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," documents")},onChange:function(e,c){t(n,e,c)},total:o}})})]})},S=n(108),N=n(277),R=n(109),Y=n(278),I=n(280),F=n(281),k=n(279),U=n(93),q=[{text:"Received",value:"received"},{text:"Printed",value:"printed"},{text:"Folded",value:"folded"},{text:"Sorted",value:"Sorted"},{text:"Delivered",value:"delivered"}],P="status",_="address",H="date",L="group",B="dateRange",z=O.a.Sider,G=N.a.Panel,J=R.a.Group,W=h.a.Title;function K(e){var t,n=e.filterChange,a=Object(c.useState)(!1),r=Object(S.a)(a,2),o=r[0],s=r[1];return Object(T.jsxs)(z,{collapsible:!0,collapsed:o,onCollapse:s,collapsedWidth:0,theme:"light",trigger:o?Object(T.jsx)(I.a,{}):Object(T.jsx)(F.a,{}),zeroWidthTriggerStyle:{bottom:0,left:0,width:41,top:"initial"},children:[Object(T.jsx)(W,{className:"filter-title",level:5,children:"Filters"}),Object(T.jsxs)(N.a,{ghost:!0,expandIconPosition:"right",expandIcon:function(e){return e.isActive?Object(T.jsx)(k.a,{}):Object(T.jsx)(U.a,{})},children:[Object(T.jsx)(G,{header:"Address"},_),Object(T.jsx)(G,{header:"Date"},H),Object(T.jsx)(G,{header:"Status",children:Object(T.jsx)(J,{style:{width:"100%"},onChange:(t=P,function(e){return n(t,e)}),children:Object(T.jsx)(Y.b,{direction:"vertical",align:"center",style:{width:"100%"},children:q.map((function(e){var t=e.value,n=e.text;return Object(T.jsx)(R.a,{style:{width:100},value:t,children:n},t)}))})})},P),Object(T.jsx)(G,{header:"Group"},L),Object(T.jsx)(G,{header:"Date Range"},B)]})]})}var V=n(273),Q=n(175),X=n(276),Z=n(49),$=n(179),ee=V.a.Item,te=function(e){var t=e.createDocument,n=e.creating,a=e.error,r=e.document,o=V.a.useForm(),s=Object(S.a)(o,1)[0],i=Object(c.useState)(!1),u=Object(S.a)(i,2),d=u[0],l=u[1],j=Object(c.createRef)();return Object(c.useEffect)((function(){!1===n?function(e){Q.a[e?"error":"success"]({message:e?"There was an error saving the document":"Document saved!",description:!e&&"The document ".concat(null===r||void 0===r?void 0:r.documentName," has been saved")})}(a):null===n&&j.current.focus()}),[n]),Object(T.jsx)(p.a,{style:{margin:"0 24px 24px"},children:Object(T.jsx)(V.a,{onFinish:function(e){t(e),l(!1),s.resetFields()},form:s,children:Object(T.jsxs)(x.a,{children:[Object(T.jsx)(v.a,{flex:"auto",children:Object(T.jsx)(ee,{name:["document","documentName"],label:"Doc. Name",style:{width:"50%",marginBottom:"0px"},children:Object(T.jsx)(X.a,{"data-testid":"new-document-input",ref:j,onChange:function(e){var t,n=e.target;(null===n||void 0===n||null===(t=n.value)||void 0===t?void 0:t.length)?l(!0):l(!1)},placeholder:"New document..."})})}),Object(T.jsx)(v.a,{children:Object(T.jsx)(ee,{style:{marginBottom:"0px"},children:Object(T.jsx)(Z.a,{placement:"left",title:d?"Save the new document":"Type the document name to enable this button",children:Object(T.jsx)(y.a,{"data-testid":"save-document",disabled:!d,type:"primary",loading:n||!1,icon:Object(T.jsx)($.a,{}),htmlType:"submit",children:"Add New"})})})})]})})})},ne=(n(266),O.a.Content),ce={routes:l,itemRender:function(e){var t=e.breadcrumbName,n=e.path;return Object(T.jsx)(s.b,{to:n,children:t})}},ae=function(e){var t=e.loadDocuments,n=e.documents,a=e.document,r=e.filterChange,o=e.filters,s=e.createDocument,i=e.creating,u=e.loading,d=e.total,l=e.clearDocuments;return Object(c.useEffect)((function(){return function(){null===l||void 0===l||l()}}),[]),Object(T.jsxs)(O.a,{style:{height:"100vh"},children:[Object(T.jsx)(K,{filterChange:r}),Object(T.jsx)(ne,{children:Object(T.jsxs)(O.a,{children:[Object(T.jsx)(m.a,{title:"Document Browser",breadcrumb:ce}),Object(T.jsx)(te,{createDocument:s,creating:i,document:a}),Object(T.jsx)(E,{documents:n,loadDocuments:t,filters:o,creating:i,loading:u,total:d})]})})]})},re=n(155),oe="__DONE",se="__FAILED",ie=function(e){return function(){return"".concat(e).concat(oe)}},ue=function(e){return function(){return"".concat(e).concat(se)}},de=function(e,t){if(!e)throw new Error("Empty prefix is not allowed. Please, send a prefix for your action (for example, the name of the related component)");var n=function(e,t){return"".concat(e,"_").concat(t)}(e,t);return{syncAction:function(){return n},asyncAction:function(){return n},asyncDoneAction:ie(n),asyncFailedAction:ue(n)}},le="DOCUMENTS",je={loadDocumentsRequest:de(le,"LOAD_DOCUMENTS"),createDocument:de(le,"CREATE_DOCUMENT"),filterChange:de(le,"FILTER_CHANGE"),clearDocuments:de(le,"CLEAR_DOCUMENTS")},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{type:je.loadDocumentsRequest.asyncAction(),payload:{filters:e,page:t,pageSize:n}}},Oe=function(e,t){return{type:je.loadDocumentsRequest.asyncDoneAction(),payload:{documents:e,total:t}}},me=function(e){var t=e.error,n=Object(re.a)(e,["error"]);return{type:je.loadDocumentsRequest.asyncFailedAction(),payload:Object(b.a)({error:t},n)}},he=function(e){return{type:je.createDocument.asyncAction(),payload:e}},fe=function(e){return{type:je.createDocument.asyncDoneAction(),payload:{document:e}}},pe=function(e){var t=e.error,n=Object(re.a)(e,["error"]);return{type:je.createDocument.asyncFailedAction(),payload:Object(b.a)({error:t},n)}},xe=function(e,t){return{type:je.filterChange.syncAction(),payload:{group:e,values:t}}},ve=function(){return{type:je.clearDocuments.syncAction()}},ye=Object(o.b)((function(e){return e.documentBrowser}),(function(e){return{loadDocuments:function(t,n,c){return e(be(t,n,c))},clearDocuments:function(){return e(ve())},filterChange:function(t,n){return e(xe(t,n))},createDocument:function(t){t=Object(b.a)(Object(b.a)({},t),{},{dataModified:w()().format("YYYYDDMM"),status:q[Math.floor(Math.random()*q.length-1)].value}),e(he(t))}}}))(ae),ge=function(){return Object(T.jsx)(Y.b,{direction:"horizontal",style:{width:"100%",justifyContent:"center",paddingTop:"100px"},children:Object(T.jsx)(p.a,{title:"HOME",style:{width:500},children:Object(T.jsx)(s.b,{to:j.DOCUMENTS,children:"Documents"})})})};n(267);function De(){return Object(T.jsx)(s.a,{children:Object(T.jsxs)(i.d,{children:[Object(T.jsx)(i.b,{exact:!0,path:"".concat(j.HOME),children:Object(T.jsx)(ge,{})}),Object(T.jsx)(i.b,{exact:!0,path:"".concat(j.DOCUMENTS),children:Object(T.jsx)(ye,{})}),Object(T.jsx)(i.b,{path:"*",children:Object(T.jsx)(i.a,{to:"".concat(j.HOME)})})]})})}var we=n(72),Te=n(176),Me=n(39),Ce=n(133),Ae={documents:[],total:0,loading:!1,filters:{},creating:null,error:null,document:null},Ee=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,n=arguments.length>1?arguments[1]:void 0,c=(e={},Object(Me.a)(e,je.loadDocumentsRequest.asyncAction(),(function(){return Object(b.a)(Object(b.a)({},t),{},{loading:!0})})),Object(Me.a)(e,je.loadDocumentsRequest.asyncDoneAction(),(function(){var e=n.payload,c=(e=void 0===e?{}:e).documents,a=e.total;return Object(b.a)(Object(b.a)({},t),{},{loading:!1,documents:c,total:a})})),Object(Me.a)(e,je.loadDocumentsRequest.asyncFailedAction(),(function(){return Object(b.a)(Object(b.a)({},t),{},{loading:!1})})),Object(Me.a)(e,je.createDocument.asyncAction(),(function(){return Object(b.a)(Object(b.a)({},t),{},{creating:!0,error:null})})),Object(Me.a)(e,je.createDocument.asyncDoneAction(),(function(){var e=n.payload,c=(e=void 0===e?{}:e).document;return Object(b.a)(Object(b.a)({},t),{},{creating:!1,error:null,document:c,total:++t.total,documents:[c].concat(Object(Ce.a)(t.documents))})})),Object(Me.a)(e,je.createDocument.asyncFailedAction(),(function(){var e=n.payload,c=(e=void 0===e?{}:e).error;return Object(b.a)(Object(b.a)({},t),{},{creating:!1,error:c})})),Object(Me.a)(e,je.filterChange.syncAction(),(function(){var e=n.payload,c=(e=void 0===e?{}:e).group,a=e.values;return Object(b.a)(Object(b.a)({},t),{},{filters:Object(b.a)(Object(b.a)({},t.filters),{},Object(Me.a)({},c,a))})})),Object(Me.a)(e,je.clearDocuments.syncAction(),(function(){return Object(b.a)({},Ae)})),e);return c[n.type]?c[n.type]():t},Se=Object(we.b)({documentBrowser:Ee}),Ne=n(73),Re=n.n(Ne),Ye=n(66),Ie=(n(147),{500:"There was an unexpected error. If problem persists, please, contact with the system administrator",404:"It was impossible to find the data you requested for",401:"Sorry, you do not have permissions to that...",403:"Sorry, you do not have permissions to that..."}),Fe=function(e){var t=e.statusText,n=e.status,c=e.message,a=e.url,r=e.stackTrace;return{errorInfo:[n?"(".concat(n,") - ").concat(t,"\n"):null,a,c],stackTrace:r}},ke=["get","post","put","delete"].reduce((function(e,t){return Object(b.a)(Object(b.a)({},e),{},Object(Me.a)({},t,(function(e,n){var c;return function(e,t){return new Promise((function(n,c){e=new URL(e,document.baseURI),t.queryParams&&(e.search=new URLSearchParams(t.queryParams)),fetch(e,t).then((function(t){t.ok?t.json().then((function(e){n({data:e,response:t})})).catch((function(t){c(Fe({message:"Malformed JSON",stackTrace:t,url:e}))})):c(Fe({status:t.status,statusText:t.statusText,message:Ie[t.status],url:e}))})).catch((function(t){c(Fe({message:t.message,stackTrace:t,url:e}))}))}))}(function(e,t){for(var n=/\{([^}]+)?\}/g,c=n.exec(e);c;)e=e.replace(c[0],t[c[1]]),n.lastIndex=0,c=n.exec(e);return e}(e,null!==(c=null===n||void 0===n?void 0:n.urlParams)&&void 0!==c?c:{}),Object(b.a)(Object(b.a)({},n),{},{method:t.toUpperCase()}))})))}),{}),Ue=Re.a.mark((function e(t){var n,c,a,r,o,s,i,u,d,l;return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,c=n.filters,a=n.page,r=n.pageSize,o=Object(b.a)(Object(b.a)({},Object.keys(c).reduce((function(e,t){return Object(b.a)(Object(b.a)({},e),{},Object(Me.a)({},"".concat(t,"_like"),c[t].join("|")))}),{})),{},{_page:a,_limit:r}),e.prev=1,e.next=4,ke.get("https://my-json-server.typicode.com/madelavega/react17-ant-server/documents/",{queryParams:o});case 4:return i=e.sent,u=i.data,d=i.response,l=null===d||void 0===d||null===(s=d.headers)||void 0===s?void 0:s.get("x-total-count"),e.next=10,Object(Ye.b)(Oe(u,l));case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,Object(Ye.b)(me(e.t0));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})),qe=Re.a.mark((function e(t){var n,c,a;return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload.document,e.prev=1,e.next=4,ke.post("https://my-json-server.typicode.com/madelavega/react17-ant-server/documents/",{headers:{"content-type":"application/json"},body:JSON.stringify(n)});case 4:return c=e.sent,a=c.data,e.next=8,Object(Ye.b)(fe(a));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object(Ye.b)(pe(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})),Pe=[Object(Ye.c)(je.loadDocumentsRequest.asyncAction(),Ue),Object(Ye.c)(je.createDocument.asyncAction(),qe)],_e=Re.a.mark(He);function He(){return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.a)(Object(Ce.a)(Pe));case 2:case"end":return e.stop()}}),_e)}var Le=Object(Te.a)(),Be=Object(we.d)(Se,Object(we.c)(Object(we.a)(Le)));Le.run(He);var ze=Be,Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,282)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};r.a.render(Object(T.jsx)(o.a,{store:ze,children:Object(T.jsx)(De,{})}),document.getElementById("root")),Ge()}},[[268,1,2]]]);
//# sourceMappingURL=main.19e92cd8.chunk.js.map