(this["webpackJsonpviz-react"]=this["webpackJsonpviz-react"]||[]).push([[0],{281:function(e,t,n){e.exports=n(503)},502:function(e,t,n){},503:function(e,t,n){"use strict";n.r(t);var a,r,o,c=n(0),i=n.n(c),l=n(6),u=n.n(l),s=n(21),p=n(82),d=n(67),m=n(261),b=n(125),f=n(29),O=n(204),j=n.n(O),y=n(262),v=n(524),E=n(517),h=n(522),g=n(512),w=n(506);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=Object(v.a)("loadEventsRequest"),k=Object(v.a)("loadEventsSuccess"),S=Object(v.a)("loadEventsFailure"),x=Object(v.a)("editEvent"),F=Object(v.a)("deleteEvent"),I=Object(v.a)("addEvent"),_=Object(d.c)({isFetching:Object(E.a)((a={},Object(f.a)(a,P,(function(){return!0})),Object(f.a)(a,Object(h.a)(k,S),(function(){return!1})),a),!1),error:Object(E.a)((r={},Object(f.a)(r,P,(function(){return null})),Object(f.a)(r,S,(function(e,t){return t})),r),null),eventTypes:Object(E.a)(Object(f.a)({},k,(function(e,t){return t.payload.eventTypes})),[]),persons:Object(E.a)(Object(f.a)({},k,(function(e,t){return t.payload.persons})),[]),toponyms:Object(E.a)(Object(f.a)({},k,(function(e,t){return t.payload.toponyms})),[]),events:Object(E.a)((o={},Object(f.a)(o,k,(function(e,t){return Object(g.a)(t.payload.events.map((function(e){return C({},e,{startDate:new Date(e.startDate),endDate:new Date(e.endDate)})})),(function(e){return e.endDate-e.startDate}),"desc")})),Object(f.a)(o,x,(function(e,t){return e.map((function(e){return e.id===t.payload.id?t.payload:e}))})),Object(f.a)(o,F,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),Object(f.a)(o,I,(function(e,t){return[].concat(Object(b.a)(e),[C({},t.payload,{id:Object(w.a)()})])})),o),[])}),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,M=Object(d.e)(_,N(Object(d.a)(m.a))),T=n(107),L=n(71),R=n(507),A=n(111),z=n(8),H=n(520),K=n(267),V=n(508),B=function(e){return e.events},Y=function(e){return e.toponyms},J=function(e){return e.persons},U=function(e){return e.eventTypes},X=function(e){return e.isFetching},q=function(e){return e.error},G=n(515),Q=n(264),W=n.n(Q),Z={align:"center",minHeight:"400px",maxHeight:"400px",type:"range",tooltip:{followMouse:!0,overflowMethod:"cap"},snap:null,orientation:{axis:"both"},zoomMin:432e6},$=Object(G.a)(U,(function(e){return e.map((function(e){return{id:e.id,content:e.type}}))})),ee=Object(G.a)(B,(function(e){return e.slice(0,10).map((function(e){return{start:e.startDate,end:e.endDate,content:e.name,duration:e.endDate-e.startDate,group:e.type,type:e.endDate-e.startDate<=864e5?"point":"range"}}))})),te=function(){var e=Object(s.c)(ee),t=Object(s.c)($);return i.a.createElement("div",null,e&&e.length>0&&i.a.createElement(W.a,{options:Z,items:e,groups:t}))},ne=function(){var e=Object(s.c)(X),t=Object(s.c)(q);return i.a.createElement(R.a,null,i.a.createElement(H.a,{ghost:!1,title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"}),i.a.createElement(R.a.Content,null,e&&i.a.createElement("div",{style:{minHeight:200,display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(K.a,{size:"large"})),t&&i.a.createElement(V.a,{message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",description:t,type:"error",showIcon:!0}),!e&&!t&&i.a.createElement(te,null)))},ae=n(56),re=function(e){var t=e.filename,n=void 0===t?"events.json":t,a=Object(s.c)(B),r=Object(s.c)(U),o=Object(s.c)(J),c=Object(s.c)(Y),l=JSON.stringify({events:a,eventTypes:r,toponyms:c,persons:o});return i.a.createElement(ae.a,{download:n,href:URL.createObjectURL(new Blob([l],{type:"application/json"}))},i.a.createElement(z.a,{type:"download"}),"Export to json")},oe=n(523),ce=n(509),ie=n(519),le=n(513);function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var se=function(e){return e.toLocaleString("ru",{year:"numeric",month:"numeric",day:"numeric"})},pe=function(e){return e.type},de=function(e){return e.map((function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)})).join()},me=function(e){return e.map((function(e){return e.name})).join()},be=function(e,t){return e.startDate-t.startDate},fe=function(e,t){return e.endDate-t.endDate},Oe=function(e){var t=e.onAdd,n=e.onSelect,a=e.deleteRow,r=Object(c.useState)(""),o=Object(T.a)(r,2),l=o[0],u=o[1],p=Object(s.c)(U),d=Object(s.c)(J),m=Object(s.c)(Y),b=Object(s.c)(B),O=Object(c.useMemo)((function(){return b.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{type:p.find((function(t){return t.id===e.type})),persons:e.persons?e.persons.map((function(e){return d.find((function(t){return t.id===e}))})):[],toponyms:e.toponyms?e.toponyms.map((function(e){return m.find((function(t){return t.id===e}))})):[]})})).filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}))}),[b,p,d,m,l]),j=Object(c.useCallback)((function(e){return{onClick:n?function(){return n(e)}:void 0}}),[n]),y=Object(c.useCallback)(Object(oe.a)((function(e){return u(e)})),[]);return i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 20px"}},i.a.createElement(ae.a,{type:"primary",onClick:t},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),i.a.createElement(ie.a.Search,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",onSearch:y,style:{width:400}})),i.a.createElement(le.a,{dataSource:O,rowKey:function(e){return e.id},onRow:j},i.a.createElement(le.a.Column,{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",width:"35%"}),i.a.createElement(le.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430",dataIndex:"startDate",width:"10%",sorter:be,render:se}),i.a.createElement(le.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",dataIndex:"endDate",width:"10%",sorter:fe,render:se}),i.a.createElement(le.a.Column,{title:"\u0422\u0438\u043f",dataIndex:"type",width:"10%",filters:p.map((function(e){return{value:e.id,text:e.type}})),onFilter:function(e,t){return t.type.id===e},render:pe}),i.a.createElement(le.a.Column,{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430",dataIndex:"persons",width:"15%",render:de}),i.a.createElement(le.a.Column,{title:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b",dataIndex:"toponyms",width:"15%",render:me}),i.a.createElement(le.a.Column,{title:"",key:"delete",render:function(e,t){return i.a.createElement(ce.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onConfirm:function(e){e.stopPropagation(),a(t)},onCancel:function(e){e.stopPropagation()},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},i.a.createElement(ae.a,{type:"link",onClick:function(e){e.stopPropagation()}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}})))},je=n(164),ye=n(521),ve=n(516),Ee=n(511),he=n(14),ge=n.n(he),we=n(110),De=n(102),Ce=n(514),Pe=function(e){var t=e.dateFormat,n=void 0===t?"DD.MM.YYYY":t,a=Object(we.a)(e,["dateFormat"]);return i.a.createElement(Ce.a,Object.assign({format:n},a))},ke=n(124),Se=function(e){return e.id},xe=function(e){return e.name},Fe=[],Ie=function(e){var t=e.options,n=void 0===t?Fe:t,a=e.optionKeyFactory,r=void 0===a?Se:a,o=e.optionValueFactory,c=void 0===o?Se:o,l=e.optionNameFactory,u=void 0===l?xe:l,s=Object(we.a)(e,["options","optionKeyFactory","optionValueFactory","optionNameFactory"]);return i.a.createElement(ke.a,s,n.map((function(e){return i.a.createElement(ke.a.Option,{key:r(e),value:c(e)},u(e))})))},_e=n(518),Ne=[],Me=function(e){var t=e.allOptions,n=e.value,a=void 0===n?Ne:n,r=e.onChange,o=e.placeholder,l=e.count,u=void 0===l?5:l,s=e.optionKeyFactory,p=void 0===s?Se:s,d=e.optionValueFactory,m=void 0===d?Se:d,f=e.optionNameFactory,O=void 0===f?xe:f,j=Object(c.useState)([]),y=Object(T.a)(j,2),v=y[0],E=y[1],h=Object(c.useCallback)(Object(oe.a)((function(e){E(t.filter((function(t){return O(t).toLowerCase().includes(e.toLocaleLowerCase())})))}),300),[t]),g=Object(c.useCallback)((function(){E([])}),[]),w=Object(c.useCallback)((function(e){E([]),r(e)}),[r]),D=Object(c.useMemo)((function(){return a.map((function(e){return t.find((function(t){return m(t)===e}))}))}),[t,a,m]),C=Object(c.useMemo)((function(){return v.length?v.slice(0,u):Object(_e.a)([].concat(Object(b.a)(t.slice(0,u)),Object(b.a)(D)))}),[t,u,v,D]),P=Object(c.useMemo)((function(){return v.length?v.length-u:t.length-C.length}),[t,u,v,C.length]);return i.a.createElement(ke.a,{placeholder:o,mode:"multiple",filterOption:!1,onSearch:h,onChange:w,onBlur:g,value:a},C.map((function(e){return i.a.createElement(ke.a.Option,{key:p(e),value:m(e)},O(e))})),P>0&&i.a.createElement(ke.a.Option,{key:"__hidedOptionsCount__",value:"__hidedOptionsCount__",disabled:!0},"\u0415\u0449\u0435 ",P," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"))},Te=function(e){return function(t){var n=t.name,a=t.label,r=t.validate,o=t.allowNull,c=void 0===o||o,l=t.format,u=void 0===l?De.a:l,s=t.parse,p=void 0===s?De.a:s,d=Object(we.a)(t,["name","label","validate","allowNull","format","parse"]);return i.a.createElement(je.a,{name:n,format:u,parse:p,allowNull:c,validate:r},(function(t){var n=t.input,r=n.value,o=n.onChange,c=t.meta,l=c.invalid,u=c.touched,s=c.error;return i.a.createElement(ve.a.Item,{label:a,validateStatus:u&&l?"error":"success",help:s},i.a.createElement(e,Object.assign({value:r,onChange:o},d)))}))}},Le=(Te(ie.a),Te(ie.a.TextArea)),Re=Te(Pe),Ae=Te(Ie),ze=Te(Me),He=n(510),Ke=n(22),Ve=function(e){return Object(He.a)(e)||""===e||Object(Ke.a)(e)&&0===e.length?"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e":void 0},Be=function(e,t){return function(n,a){return n.isBefore(a[e])?"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c ".concat(t):void 0}},Ye=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n,a){return t.reduce((function(t,r){return t||r(e,n,a)}),void 0)}};function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ue=function(e){return e.type},Xe=function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)},qe=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{startDate:ge()(e.startDate),endDate:ge()(e.endDate)})},Ge={name:null,startDate:null,endDate:null,type:null,toponyms:[],persons:[]},Qe=function(e){var t=e.onSubmit,n=e.onClose,a=e.title,r=Object(s.c)(U),o=Object(s.c)(Y),c=Object(s.c)(J),l=Object(s.c)(B),u=Object(L.j)().id;if(l.length<1)return i.a.createElement("div",{style:{minHeight:200,display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(K.a,{size:"large"}));var p=l.find((function(e){return e.id===Number(u)})),d=p?qe(p):Ge;return i.a.createElement(ye.a,{title:a,onClose:n,placement:"right",width:450,visible:!0,closable:!0,destroyOnClose:!0},i.a.createElement(je.b,{initialValues:d,onSubmit:function(e){t(e)}},(function(e){var t,n,a=e.handleSubmit;return i.a.createElement(ve.a,{layout:"vertical",onSubmit:a},i.a.createElement(Ee.a,null,i.a.createElement(Le,{name:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",rows:4,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",validate:Ve})),i.a.createElement(Ee.a,null,i.a.createElement(Re,{name:"startDate",label:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430",validate:Ye(Ve,(t="endDate",n="\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",function(e,a){return e.isAfter(a[t])?"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c ".concat(n):void 0}))})),i.a.createElement(Ee.a,null,i.a.createElement(Re,{name:"endDate",label:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",validate:Ye(Ve,Be("startDate","\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430"))})),i.a.createElement(Ee.a,null,i.a.createElement(Ae,{name:"type",label:"\u0422\u0438\u043f",options:r,optionNameFactory:Ue,validate:Ve})),i.a.createElement(Ee.a,null,i.a.createElement(ze,{name:"toponyms",label:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b",allOptions:o,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u043f\u043e\u043d\u0438\u043c\u044b"})),i.a.createElement(Ee.a,null,i.a.createElement(ze,{name:"persons",label:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430",allOptions:c,optionNameFactory:Xe,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043b\u0438\u0446"})),i.a.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},i.a.createElement(ae.a,{htmlType:"submit",type:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))})))},We="".concat("/editor","/add"),Ze="".concat("/editor","/edit/:id");function $e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var tt=function(){var e=Object(s.b)(),t=Object(L.h)(),n=Object(c.useCallback)((function(e){t.push(Object(L.f)(Ze,{id:e.id}))}),[t]),a=Object(c.useCallback)((function(){t.push("/editor")}),[t]),r=Object(c.useCallback)((function(t){e(x(et({},t,{endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),a()}),[e,a]),o=Object(c.useCallback)((function(t){e(F(t))}),[e]),l=Object(c.useCallback)((function(t){e(I(et({},t,{id:Object(w.a)(),endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),a()}),[a,e]),u=Object(c.useCallback)((function(){t.push(We)}),[t]);return i.a.createElement(R.a,null,i.a.createElement(H.a,{ghost:!1,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",extra:i.a.createElement(re,null)}),i.a.createElement(R.a.Content,null,i.a.createElement(Oe,{onAdd:u,onSelect:n,deleteRow:o}),i.a.createElement(L.b,{path:We,render:function(){return i.a.createElement(Qe,{onClose:a,onSubmit:l,title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})}}),i.a.createElement(L.b,{path:Ze,render:function(){return i.a.createElement(Qe,{onClose:a,onSubmit:r,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})}})))},nt=["/view","/editor"],at=function(){var e=Object(c.useState)(!0),t=Object(T.a)(e,2),a=t[0],r=t[1],o=Object(s.b)(),l=Object(L.i)().pathname,u=Object(c.useMemo)((function(){return[nt.find((function(e){return e===l}))]}),[l]);return Object(c.useEffect)((function(){o(function(){var e=Object(y.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P()),e.prev=1,e.next=4,n.e(3).then(n.t.bind(null,525,3));case 4:a=e.sent,t(k(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(S(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[o]),i.a.createElement(R.a,{style:{minHeight:"100vh"},hasSider:!0},i.a.createElement(R.a.Sider,{theme:"dark",collapsible:!0,width:240,collapsed:a,onCollapse:r,style:{overflow:"auto",height:"100vh",position:"fixed",left:0}},i.a.createElement(A.a,{theme:"dark",mode:"inline",selectedKeys:u},i.a.createElement(A.a.Item,{key:"/view"},i.a.createElement(p.b,{to:"/view"},i.a.createElement(z.a,{type:"pie-chart"}),i.a.createElement("span",null,"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"))),i.a.createElement(A.a.Item,{key:"/editor"},i.a.createElement(p.b,{to:"/editor"},i.a.createElement(z.a,{type:"edit"}),i.a.createElement("span",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"))))),i.a.createElement(R.a,{style:{marginLeft:a?80:240,transition:"margin 0.2s"}},i.a.createElement(R.a.Content,null,i.a.createElement(L.d,null,i.a.createElement(L.b,{path:"/view",component:ne}),i.a.createElement(L.b,{path:"/editor",component:tt}),i.a.createElement(L.a,{to:"/view"})))))};n(502);u.a.render(i.a.createElement(p.a,null,i.a.createElement(s.a,{store:M},i.a.createElement(at,null))),document.getElementById("root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.a160dadc.chunk.js.map