(this["webpackJsonpreact17-antd"]=this["webpackJsonpreact17-antd"]||[]).push([[0],{266:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(29),r=n.n(a),o=n(131),s=n(90),i=n(31),u="home",d="documents",l=[{path:u,breadcrumbName:"Home"},{path:d,breadcrumbName:"Documents"}],j={HOME:"/".concat(u),DOCUMENTS:"/".concat(d)},b=n(26),f=n(270),h=n(275),m=n(274),O=n(107),p=n(272),x=n(97),v=n(54),y=n(63),g=n(271),D=n(94),w=n.n(D),A=n(9),C=[{title:"Channel",dataIndex:"channel",width:50},{title:"Document Name",ellipsis:!0,dataIndex:"documentName",render:function(e){return Object(A.jsx)("a",{href:"/#",children:e})},width:200},{title:"Group",dataIndex:"group",render:function(e){return Object(A.jsx)("a",{href:"/#",children:e})},width:50,sorter:function(e,t){var n=e.group,c=void 0===n?"":n,a=t.group,r=void 0===a?"":a;return c.localeCompare(r)},sortDirections:["descend","ascend"]},{title:"Status",dataIndex:"status",width:50,sorter:function(e,t){var n=e.status,c=void 0===n?"":n,a=t.status,r=void 0===a?"":a;return c.localeCompare(r)},sortDirections:["descend","ascend"]},{title:"Data Modified",dataIndex:"dataModified",width:80,render:function(e){return w()(e,"YYYYDDMM").format("YYYY-DD-MM")},sorter:function(e,t){return w()(e.dataModified,"YYYYDDMM")-w()(t.dataModified,"YYYYDDMM")},sortDirections:["descend","ascend"]},{title:"Type",dataIndex:"type",width:50,sorter:function(e,t){var n=e.type,c=void 0===n?"":n,a=t.type,r=void 0===a?"":a;return c.localeCompare(r)},sortDirections:["descend","ascend"]},{title:"Address",dataIndex:"address",render:function(e){return Object(A.jsx)("a",{href:"/#",children:e})},width:150}],M=m.a.Title,T=O.a.Option,E=function(e){var t=e.loadDocuments,n=e.filters,a=e.documents,r=e.loading,o=e.total;Object(c.useEffect)((function(){null===t||void 0===t||t(n)}),[n]);return Object(A.jsxs)(p.a,{style:{margin:"0 24px 24px"},children:[Object(A.jsxs)(x.a,{children:[Object(A.jsx)(v.a,{flex:"auto",children:Object(A.jsx)(M,{level:5,children:"Dashboard"})}),Object(A.jsxs)(v.a,{flex:"none",children:[Object(A.jsx)(O.a,{defaultValue:"date",bordered:!1,children:Object(A.jsx)(T,{value:"date",children:"Date"})}),Object(A.jsx)(y.a,{children:"Reset"})]})]}),Object(A.jsx)(x.a,{children:Object(A.jsx)(g.a,{style:{paddingTop:16},loading:r,rowKey:"id",columns:C,dataSource:a,pagination:{showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," documents")},onChange:function(e,c){t(n,e,c)},total:o}})})]})},N=n(133),S=n(277),R=n(108),Y=n(278),I=n(280),F=n(281),k=n(279),q=n(93),P=[{text:"Received",value:"received"},{text:"Printed",value:"printed"},{text:"Folded",value:"folded"},{text:"Sorted",value:"Sorted"},{text:"Delivered",value:"delivered"}],_="status",U="address",L="date",B="group",H="dateRange",z=f.a.Sider,G=S.a.Panel,J=R.a.Group,W=m.a.Title;function K(e){var t,n=e.filterChange,a=Object(c.useState)(!1),r=Object(N.a)(a,2),o=r[0],s=r[1];return Object(A.jsxs)(z,{collapsible:!0,collapsed:o,onCollapse:s,collapsedWidth:0,theme:"light",trigger:o?Object(A.jsx)(I.a,{}):Object(A.jsx)(F.a,{}),zeroWidthTriggerStyle:{bottom:0,left:0,width:41,top:"initial"},children:[Object(A.jsx)(W,{className:"filter-title",level:5,children:"Filters"}),Object(A.jsxs)(S.a,{ghost:!0,expandIconPosition:"right",expandIcon:function(e){return e.isActive?Object(A.jsx)(k.a,{}):Object(A.jsx)(q.a,{})},children:[Object(A.jsx)(G,{header:"Address"},U),Object(A.jsx)(G,{header:"Date"},L),Object(A.jsx)(G,{header:"Status",children:Object(A.jsx)(J,{style:{width:"100%"},onChange:(t=_,function(e){return n(t,e)}),children:Object(A.jsx)(Y.b,{direction:"vertical",align:"center",style:{width:"100%"},children:P.map((function(e){var t=e.value,n=e.text;return Object(A.jsx)(R.a,{style:{width:100},value:t,children:n},t)}))})})},_),Object(A.jsx)(G,{header:"Group"},B),Object(A.jsx)(G,{header:"Date Range"},H)]})]})}var V=n(273),Q=n(175),X=n(276),Z=n(179),$=V.a.Item,ee=function(e){var t=e.createDocument,n=e.creating,a=e.error,r=e.document,o=V.a.useForm(),s=Object(N.a)(o,1)[0],i=Object(c.createRef)();return Object(c.useEffect)((function(){!1===n?function(e){Q.a[e?"error":"success"]({message:e?"There was an error saving the document":"Document saved!",description:!e&&"The document ".concat(null===r||void 0===r?void 0:r.documentName," has been saved")})}(a):null===n&&i.current.focus()}),[n]),Object(A.jsx)(p.a,{style:{margin:"0 24px 24px"},children:Object(A.jsx)(V.a,{onFinish:function(e){t(e),s.resetFields()},form:s,children:Object(A.jsxs)(x.a,{children:[Object(A.jsx)(v.a,{flex:"auto",children:Object(A.jsx)($,{name:["document","documentName"],label:"Doc. Name",style:{width:"50%",marginBottom:"0px"},children:Object(A.jsx)(X.a,{ref:i,placeholder:"New document..."})})}),Object(A.jsx)(v.a,{children:Object(A.jsx)($,{style:{marginBottom:"0px"},children:Object(A.jsx)(y.a,{type:"primary",loading:n||!1,icon:Object(A.jsx)(Z.a,{}),htmlType:"submit",children:"Add New"})})})]})})})},te=(n(266),f.a.Content),ne={routes:l,itemRender:function(e){var t=e.breadcrumbName,n=e.path;return Object(A.jsx)(s.b,{to:n,children:t})}},ce=function(e){var t=e.loadDocuments,n=e.documents,a=e.document,r=e.filterChange,o=e.filters,s=e.createDocument,i=e.creating,u=e.loading,d=e.total,l=e.clearDocuments;return Object(c.useEffect)((function(){return function(){null===l||void 0===l||l()}}),[]),Object(A.jsxs)(f.a,{style:{height:"100vh"},children:[Object(A.jsx)(K,{filterChange:r}),Object(A.jsx)(te,{children:Object(A.jsxs)(f.a,{children:[Object(A.jsx)(h.a,{className:"site-page-header",title:"Document Browser",breadcrumb:ne}),Object(A.jsx)(ee,{createDocument:s,creating:i,document:a}),Object(A.jsx)(E,{documents:n,loadDocuments:t,filters:o,creating:i,loading:u,total:d})]})})]})},ae=n(155),re="__DONE",oe="__FAILED",se=function(e){return function(){return"".concat(e).concat(re)}},ie=function(e){return function(){return"".concat(e).concat(oe)}},ue=function(e,t){if(!e)throw new Error("Empty prefix is not allowed. Please, send a prefix for your action (for example, the name of the related component)");var n=function(e,t){return"".concat(e,"_").concat(t)}(e,t);return{syncAction:function(){return n},asyncAction:function(){return n},asyncDoneAction:se(n),asyncFailedAction:ie(n)}},de="DOCUMENTS",le={loadDocumentsRequest:ue(de,"LOAD_DOCUMENTS"),createDocument:ue(de,"CREATE_DOCUMENT"),filterChange:ue(de,"FILTER_CHANGE"),clearDocuments:ue(de,"CLEAR_DOCUMENTS")},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{type:le.loadDocumentsRequest.asyncAction(),payload:{filters:e,page:t,pageSize:n}}},be=function(e,t){return{type:le.loadDocumentsRequest.asyncDoneAction(),payload:{documents:e,total:t}}},fe=function(e){var t=e.error,n=Object(ae.a)(e,["error"]);return{type:le.loadDocumentsRequest.asyncFailedAction(),payload:Object(b.a)({error:t},n)}},he=function(e){return{type:le.createDocument.asyncAction(),payload:e}},me=function(e){return{type:le.createDocument.asyncDoneAction(),payload:{document:e}}},Oe=function(e){var t=e.error,n=Object(ae.a)(e,["error"]);return{type:le.createDocument.asyncFailedAction(),payload:Object(b.a)({error:t},n)}},pe=function(e,t){return{type:le.filterChange.syncAction(),payload:{group:e,values:t}}},xe=function(){return{type:le.clearDocuments.syncAction()}},ve=Object(o.b)((function(e){return e.documentBrowser}),(function(e){return{loadDocuments:function(t,n,c){return e(je(t,n,c))},clearDocuments:function(){return e(xe())},filterChange:function(t,n){return e(pe(t,n))},createDocument:function(t){t=Object(b.a)(Object(b.a)({},t),{},{dataModified:w()().format("YYYYDDMM"),status:P[Math.floor(Math.random()*P.length-1)].value}),e(he(t))}}}))(ce),ye=function(){return Object(A.jsx)(Y.b,{direction:"horizontal",style:{width:"100%",justifyContent:"center",paddingTop:"100px"},children:Object(A.jsx)(p.a,{title:"HOME",style:{width:500},children:Object(A.jsx)(s.b,{to:j.DOCUMENTS,children:"Documents"})})})};n(267);function ge(){return Object(A.jsx)(s.a,{children:Object(A.jsxs)(i.d,{children:[Object(A.jsx)(i.b,{exact:!0,path:"".concat(j.HOME),children:Object(A.jsx)(ye,{})}),Object(A.jsx)(i.b,{exact:!0,path:"".concat(j.DOCUMENTS),children:Object(A.jsx)(ve,{})}),Object(A.jsx)(i.b,{path:"*",children:Object(A.jsx)(i.a,{to:"".concat(j.HOME)})})]})})}var De=n(72),we=n(176),Ae=n(39),Ce=n(132),Me={documents:[],total:0,loading:!1,filters:{},creating:null,error:null,document:null},Te=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,n=arguments.length>1?arguments[1]:void 0,c=(e={},Object(Ae.a)(e,le.loadDocumentsRequest.asyncAction(),(function(){return Object(b.a)(Object(b.a)({},t),{},{loading:!0})})),Object(Ae.a)(e,le.loadDocumentsRequest.asyncDoneAction(),(function(){var e=n.payload,c=(e=void 0===e?{}:e).documents,a=e.total;return Object(b.a)(Object(b.a)({},t),{},{loading:!1,documents:c,total:a})})),Object(Ae.a)(e,le.loadDocumentsRequest.asyncFailedAction(),(function(){return Object(b.a)(Object(b.a)({},t),{},{loading:!1})})),Object(Ae.a)(e,le.createDocument.asyncAction(),(function(){return Object(b.a)(Object(b.a)({},t),{},{creating:!0,error:null})})),Object(Ae.a)(e,le.createDocument.asyncDoneAction(),(function(){var e=n.payload,c=(e=void 0===e?{}:e).document;return Object(b.a)(Object(b.a)({},t),{},{creating:!1,error:null,document:c,total:++t.total,documents:[c].concat(Object(Ce.a)(t.documents))})})),Object(Ae.a)(e,le.createDocument.asyncFailedAction(),(function(){var e=n.payload,c=(e=void 0===e?{}:e).error;return Object(b.a)(Object(b.a)({},t),{},{creating:!1,error:c})})),Object(Ae.a)(e,le.filterChange.syncAction(),(function(){var e=n.payload,c=(e=void 0===e?{}:e).group,a=e.values;return Object(b.a)(Object(b.a)({},t),{},{filters:Object(b.a)(Object(b.a)({},t.filters),{},Object(Ae.a)({},c,a))})})),Object(Ae.a)(e,le.clearDocuments.syncAction(),(function(){return Object(b.a)({},Me)})),e);return c[n.type]?c[n.type]():t},Ee=Object(De.b)({documentBrowser:Te}),Ne=n(73),Se=n.n(Ne),Re=n(66),Ye=(n(147),{500:"There was an unexpected error. If problem persists, please, contact with the system administrator",404:"It was impossible to find the data you requested for",401:"Sorry, you do not have permissions to that...",403:"Sorry, you do not have permissions to that..."}),Ie=function(e){var t=e.statusText,n=e.status,c=e.message,a=e.url,r=e.stackTrace;return{errorInfo:[n?"(".concat(n,") - ").concat(t,"\n"):null,a,c],stackTrace:r}},Fe=["get","post","put","delete"].reduce((function(e,t){return Object(b.a)(Object(b.a)({},e),{},Object(Ae.a)({},t,(function(e,n){var c;return function(e,t){return new Promise((function(n,c){e=new URL(e,document.baseURI),t.queryParams&&(e.search=new URLSearchParams(t.queryParams)),fetch(e,t).then((function(t){t.ok?t.json().then((function(e){n({data:e,response:t})})).catch((function(t){c(Ie({message:"Malformed JSON",stackTrace:t,url:e}))})):c(Ie({status:t.status,statusText:t.statusText,message:Ye[t.status],url:e}))})).catch((function(t){c(Ie({message:t.message,stackTrace:t,url:e}))}))}))}(function(e,t){for(var n=/\{([^}]+)?\}/g,c=n.exec(e);c;)e=e.replace(c[0],t[c[1]]),n.lastIndex=0,c=n.exec(e);return e}(e,null!==(c=null===n||void 0===n?void 0:n.urlParams)&&void 0!==c?c:{}),Object(b.a)(Object(b.a)({},n),{},{method:t.toUpperCase()}))})))}),{}),ke=Se.a.mark((function e(t){var n,c,a,r,o,s,i,u,d,l;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,c=n.filters,a=n.page,r=n.pageSize,o=Object(b.a)(Object(b.a)({},Object.keys(c).reduce((function(e,t){return Object(b.a)(Object(b.a)({},e),{},Object(Ae.a)({},"".concat(t,"_like"),c[t].join("|")))}),{})),{},{_page:a,_limit:r}),e.prev=1,e.next=4,Fe.get("https://my-json-server.typicode.com/madelavega/react17-ant-server/documents/",{queryParams:o});case 4:return i=e.sent,u=i.data,d=i.response,l=null===d||void 0===d||null===(s=d.headers)||void 0===s?void 0:s.get("x-total-count"),e.next=10,Object(Re.b)(be(u,l));case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,Object(Re.b)(fe(e.t0));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})),qe=Se.a.mark((function e(t){var n,c,a;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload.document,e.prev=1,e.next=4,Fe.post("https://my-json-server.typicode.com/madelavega/react17-ant-server/documents/",{headers:{"content-type":"application/json"},body:JSON.stringify(n)});case 4:return c=e.sent,a=c.data,e.next=8,Object(Re.b)(me(a));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object(Re.b)(Oe(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})),Pe=[Object(Re.c)(le.loadDocumentsRequest.asyncAction(),ke),Object(Re.c)(le.createDocument.asyncAction(),qe)],_e=Se.a.mark(Ue);function Ue(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.a)(Object(Ce.a)(Pe));case 2:case"end":return e.stop()}}),_e)}var Le=Object(we.a)(),Be=Object(De.d)(Ee,Object(De.c)(Object(De.a)(Le)));Le.run(Ue);var He=Be,ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,282)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};r.a.render(Object(A.jsx)(o.a,{store:He,children:Object(A.jsx)(ge,{})}),document.getElementById("root")),ze()}},[[268,1,2]]]);
//# sourceMappingURL=main.37d492e2.chunk.js.map