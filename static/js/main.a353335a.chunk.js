(this["webpackJsonpviz-react"]=this["webpackJsonpviz-react"]||[]).push([[0],{281:function(e,t,n){e.exports=n(503)},502:function(e,t,n){},503:function(e,t,n){"use strict";n.r(t);var a,r,o,c=n(0),i=n.n(c),l=n(6),u=n.n(l),s=n(22),p=n(122),m=n(68),b=n(261),f=n(124),d=n(29),O=n(204),j=n.n(O),y=n(262),v=n(523),E=n(516),h=n(521),g=n(511),w=n(506);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=Object(v.a)("loadEventsRequest"),k=Object(v.a)("loadEventsSuccess"),S=Object(v.a)("loadEventsFailure"),x=Object(v.a)("editEvent"),F=Object(v.a)("deleteEvent"),_=Object(v.a)("addEvent"),I=Object(m.c)({isFetching:Object(E.a)((a={},Object(d.a)(a,P,(function(){return!0})),Object(d.a)(a,Object(h.a)(k,S),(function(){return!1})),a),!1),error:Object(E.a)((r={},Object(d.a)(r,P,(function(){return null})),Object(d.a)(r,S,(function(e,t){return t})),r),null),eventTypes:Object(E.a)(Object(d.a)({},k,(function(e,t){return t.payload.eventTypes})),[]),persons:Object(E.a)(Object(d.a)({},k,(function(e,t){return t.payload.persons})),[]),toponyms:Object(E.a)(Object(d.a)({},k,(function(e,t){return t.payload.toponyms})),[]),events:Object(E.a)((o={},Object(d.a)(o,k,(function(e,t){return Object(g.a)(t.payload.events.map((function(e){return C({},e,{startDate:new Date(e.startDate),endDate:new Date(e.endDate)})})),(function(e){return e.endDate-e.startDate}),"desc")})),Object(d.a)(o,x,(function(e,t){return e.map((function(e){return e.id===t.payload.id?t.payload:e}))})),Object(d.a)(o,F,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),Object(d.a)(o,_,(function(e,t){return[].concat(Object(f.a)(e),[C({},t.payload,{id:Object(w.a)()})])})),o),[])}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,N=Object(m.e)(I,M(Object(m.a)(b.a))),T=n(60),L=n(72),R=n(507),K=n(109),V=n(8),z=n(519),A=n(267),H=n(508),Y=function(e){return e.events},B=function(e){return e.toponyms},J=function(e){return e.persons},U=function(e){return e.eventTypes},X=function(e){return e.isFetching},q=function(e){return e.error},G=n(514),Q=n(264),W=n.n(Q),Z={align:"center",minHeight:"400px",maxHeight:"400px",type:"range",tooltip:{followMouse:!0,overflowMethod:"cap"},snap:null,orientation:{axis:"both"},zoomMin:432e6},$=Object(G.a)(U,(function(e){return e.map((function(e){return{id:e.id,content:e.type}}))})),ee=Object(G.a)(Y,(function(e){return e.slice(0,10).map((function(e){return{start:e.startDate,end:e.endDate,content:e.name,duration:e.endDate-e.startDate,group:e.type,type:e.endDate-e.startDate<=864e5?"point":"range"}}))})),te=function(){var e=Object(s.c)(ee),t=Object(s.c)($);return i.a.createElement("div",null,e&&e.length>0&&i.a.createElement(W.a,{options:Z,items:e,groups:t}))},ne=function(){var e=Object(s.c)(X),t=Object(s.c)(q);return i.a.createElement(R.a,null,i.a.createElement(z.a,{ghost:!1,title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"}),i.a.createElement(R.a.Content,null,e&&i.a.createElement("div",{style:{minHeight:200,display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(A.a,{size:"large"})),t&&i.a.createElement(H.a,{message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",description:t,type:"error",showIcon:!0}),!e&&!t&&i.a.createElement(te,null)))},ae=n(14),re=n.n(ae),oe=n(56),ce=function(e){var t=e.filename,n=void 0===t?"events.json":t,a=Object(s.c)(Y),r=Object(s.c)(U),o=Object(s.c)(J),c=Object(s.c)(B),l=JSON.stringify({events:a,eventTypes:r,toponyms:c,persons:o});return i.a.createElement(oe.a,{download:n,href:URL.createObjectURL(new Blob([l],{type:"application/json"}))},i.a.createElement(V.a,{type:"download"}),"Export to json")},ie=n(522),le=n(509),ue=n(518),se=n(512);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var me=function(e){return e.toLocaleString("ru",{year:"numeric",month:"numeric",day:"numeric"})},be=function(e){return e.type},fe=function(e){return e.map((function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)})).join()},de=function(e){return e.map((function(e){return e.name})).join()},Oe=function(e,t){return e.startDate-t.startDate},je=function(e,t){return e.endDate-t.endDate},ye=function(e){var t=e.onAdd,n=e.onSelect,a=e.deleteRow,r=Object(c.useState)(""),o=Object(T.a)(r,2),l=o[0],u=o[1],p=Object(s.c)(U),m=Object(s.c)(J),b=Object(s.c)(B),f=Object(s.c)(Y),O=Object(c.useMemo)((function(){return f.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{type:p.find((function(t){return t.id===e.type})),persons:e.persons?e.persons.map((function(e){return m.find((function(t){return t.id===e}))})):[],toponyms:e.toponyms?e.toponyms.map((function(e){return b.find((function(t){return t.id===e}))})):[]})})).filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}))}),[f,p,m,b,l]),j=Object(c.useCallback)((function(e){return{onClick:n?function(){return n(e)}:void 0}}),[n]),y=Object(c.useCallback)(Object(ie.a)((function(e){return u(e)})),[]);return i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 20px"}},i.a.createElement(oe.a,{type:"primary",onClick:t},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),i.a.createElement(ue.a.Search,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",onSearch:y,style:{width:400}})),i.a.createElement(se.a,{dataSource:O,rowKey:function(e){return e.id},onRow:j},i.a.createElement(se.a.Column,{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",width:"35%"}),i.a.createElement(se.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430",dataIndex:"startDate",width:"10%",sorter:Oe,render:me}),i.a.createElement(se.a.Column,{title:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",dataIndex:"endDate",width:"10%",sorter:je,render:me}),i.a.createElement(se.a.Column,{title:"\u0422\u0438\u043f",dataIndex:"type",width:"10%",filters:p.map((function(e){return{value:e.id,text:e.type}})),onFilter:function(e,t){return t.type.id===e},render:be}),i.a.createElement(se.a.Column,{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430",dataIndex:"persons",width:"15%",render:fe}),i.a.createElement(se.a.Column,{title:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b",dataIndex:"toponyms",width:"15%",render:de}),i.a.createElement(se.a.Column,{title:"",key:"delete",render:function(e,t){return i.a.createElement(le.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onConfirm:function(e){e.stopPropagation(),a(t)},onCancel:function(e){e.stopPropagation()},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},i.a.createElement(oe.a,{type:"link",onClick:function(e){e.stopPropagation()}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}})))},ve=n(163),Ee=n(520),he=n(515),ge=n(510),we=n(107),De=n(101),Ce=n(513),Pe=function(e){var t=e.dateFormat,n=void 0===t?"DD.MM.YYYY":t,a=Object(we.a)(e,["dateFormat"]);return i.a.createElement(Ce.a,Object.assign({format:n},a))},ke=n(123),Se=function(e){return e.id},xe=function(e){return e.name},Fe=[],_e=function(e){var t=e.options,n=void 0===t?Fe:t,a=e.optionKeyFactory,r=void 0===a?Se:a,o=e.optionValueFactory,c=void 0===o?Se:o,l=e.optionNameFactory,u=void 0===l?xe:l,s=Object(we.a)(e,["options","optionKeyFactory","optionValueFactory","optionNameFactory"]);return i.a.createElement(ke.a,s,n.map((function(e){return i.a.createElement(ke.a.Option,{key:r(e),value:c(e)},u(e))})))},Ie=n(517),Me=[],Ne=function(e){var t=e.allOptions,n=e.value,a=void 0===n?Me:n,r=e.onChange,o=e.placeholder,l=e.count,u=void 0===l?5:l,s=e.optionKeyFactory,p=void 0===s?Se:s,m=e.optionValueFactory,b=void 0===m?Se:m,d=e.optionNameFactory,O=void 0===d?xe:d,j=Object(c.useState)([]),y=Object(T.a)(j,2),v=y[0],E=y[1],h=Object(c.useCallback)(Object(ie.a)((function(e){E(t.filter((function(t){return O(t).toLowerCase().includes(e.toLocaleLowerCase())})))}),300),[t]),g=Object(c.useCallback)((function(){E([])}),[]),w=Object(c.useCallback)((function(e){E([]),r(e)}),[r]),D=Object(c.useMemo)((function(){return a.map((function(e){return t.find((function(t){return b(t)===e}))}))}),[t,a,b]),C=Object(c.useMemo)((function(){return v.length?v.slice(0,u):Object(Ie.a)([].concat(Object(f.a)(t.slice(0,u)),Object(f.a)(D)))}),[t,u,v,D]),P=Object(c.useMemo)((function(){return v.length?v.length-u:t.length-C.length}),[t,u,v,C.length]);return i.a.createElement(ke.a,{placeholder:o,mode:"multiple",filterOption:!1,onSearch:h,onChange:w,onBlur:g,value:a},C.map((function(e){return i.a.createElement(ke.a.Option,{key:p(e),value:b(e)},O(e))})),P>0&&i.a.createElement(ke.a.Option,{key:"__hidedOptionsCount__",value:"__hidedOptionsCount__",disabled:!0},"\u0415\u0449\u0435 ",P," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"))},Te=function(e){return function(t){var n=t.name,a=t.label,r=t.allowNull,o=void 0===r||r,c=t.format,l=void 0===c?De.a:c,u=t.parse,s=void 0===u?De.a:u,p=Object(we.a)(t,["name","label","allowNull","format","parse"]);return i.a.createElement(ve.a,{name:n,format:l,parse:s,allowNull:o},(function(t){var n=t.input,r=n.value,o=n.onChange,c=t.meta,l=c.invalid,u=c.touched,s=c.error;return i.a.createElement(he.a.Item,{label:a,validateStatus:u&&l?"error":"success",help:s},i.a.createElement(e,Object.assign({value:r,onChange:o},p)))}))}},Le=(Te(ue.a),Te(ue.a.TextArea)),Re=Te(Pe),Ke=Te(_e),Ve=Te(Ne);function ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ae=function(e){return e.type},He=function(e){return"".concat(e.surname," ").concat(e.name," ").concat(e.patron)},Ye=function(e){var t=e.event,n=e.onSubmit,a=e.visible,r=e.onClose,o=e.title,c=Object(s.c)(U),l=Object(s.c)(B),u=Object(s.c)(J);return i.a.createElement(Ee.a,{title:o,visible:a,onClose:r,placement:"right",width:450,closable:!0,destroyOnClose:!0},i.a.createElement(ve.b,{initialValues:t,onSubmit:function(e){n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:t?t.id:null},e))}},(function(e){var t=e.handleSubmit;return i.a.createElement(he.a,{layout:"vertical",onSubmit:t},i.a.createElement(ge.a,null,i.a.createElement(Le,{name:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",rows:4,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})),i.a.createElement(ge.a,null,i.a.createElement(Re,{name:"startDate",label:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430"})),i.a.createElement(ge.a,null,i.a.createElement(Re,{name:"endDate",label:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f"})),i.a.createElement(ge.a,null,i.a.createElement(Ke,{name:"type",label:"\u0422\u0438\u043f",options:c,optionNameFactory:Ae})),i.a.createElement(ge.a,null,i.a.createElement(Ve,{name:"toponyms",label:"\u0422\u043e\u043f\u043e\u043d\u0438\u043c\u044b",allOptions:l,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u043f\u043e\u043d\u0438\u043c\u044b"})),i.a.createElement(ge.a,null,i.a.createElement(Ve,{name:"persons",label:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430",allOptions:u,optionNameFactory:He,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043b\u0438\u0446"})),i.a.createElement("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},i.a.createElement(oe.a,{htmlType:"submit",type:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))})))};function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ue=function(){var e=Object(s.b)(),t=Object(c.useState)(!1),n=Object(T.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(null),l=Object(T.a)(o,2),u=l[0],p=l[1],m=Object(c.useCallback)((function(e){return p(Je({},e,{startDate:re()(e.startDate),endDate:re()(e.endDate),type:e.type.id,toponyms:e.toponyms.map((function(e){return e.id})),persons:e.persons.map((function(e){return e.id}))}))}),[]),b=Object(c.useCallback)((function(){a?r(!1):p(null)}),[a]),f=Object(c.useCallback)((function(t){e(x(Je({},t,{endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),b()}),[e,b]),d=Object(c.useCallback)((function(t){e(F(t))}),[e]),O=Object(c.useCallback)((function(t){e(_(Je({},t,{endDate:t.endDate.toDate(),startDate:t.startDate.toDate()}))),b()}),[b,e]),j=Object(c.useCallback)((function(){r(!0)}),[]);return i.a.createElement(R.a,null,i.a.createElement(z.a,{ghost:!1,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",extra:i.a.createElement(ce,null)}),i.a.createElement(R.a.Content,null,i.a.createElement(ye,{onAdd:j,onSelect:m,deleteRow:d}),i.a.createElement(Ye,{event:u,visible:null!==u||a,onClose:b,onSubmit:a?O:f,title:a?"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})))},Xe=["/view","/editor"],qe=function(){var e=Object(c.useState)(!0),t=Object(T.a)(e,2),a=t[0],r=t[1],o=Object(s.b)(),l=Object(L.g)().pathname,u=Object(c.useMemo)((function(){return[Xe.find((function(e){return e===l}))]}),[l]);return Object(c.useEffect)((function(){o(function(){var e=Object(y.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P()),e.prev=1,e.next=4,n.e(3).then(n.t.bind(null,524,3));case 4:a=e.sent,t(k(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(S(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[o]),i.a.createElement(R.a,{style:{minHeight:"100vh"},hasSider:!0},i.a.createElement(R.a.Sider,{theme:"dark",collapsible:!0,width:240,collapsed:a,onCollapse:r,style:{overflow:"auto",height:"100vh",position:"fixed",left:0}},i.a.createElement(K.a,{theme:"dark",mode:"inline",selectedKeys:u},i.a.createElement(K.a.Item,{key:"/view"},i.a.createElement(p.b,{to:"/view"},i.a.createElement(V.a,{type:"pie-chart"}),i.a.createElement("span",null,"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"))),i.a.createElement(K.a.Item,{key:"/editor"},i.a.createElement(p.b,{to:"/editor"},i.a.createElement(V.a,{type:"edit"}),i.a.createElement("span",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"))))),i.a.createElement(R.a,{style:{marginLeft:a?80:240,transition:"margin 0.2s"}},i.a.createElement(R.a.Content,null,i.a.createElement(L.d,null,i.a.createElement(L.b,{path:"/view",component:ne}),i.a.createElement(L.b,{path:"/editor",component:Ue}),i.a.createElement(L.a,{to:"/view"})))))};n(502);u.a.render(i.a.createElement(p.a,null,i.a.createElement(s.a,{store:N},i.a.createElement(qe,null))),document.getElementById("root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.a353335a.chunk.js.map