(this["webpackJsonpplants-passports"]=this["webpackJsonpplants-passports"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/nazwa-gatunkowa.6d71f837.txt"},function(e,t,a){e.exports=a.p+"static/media/nazwa-odmianowa.cbcc1eaf.txt"},function(e,t,a){e.exports=a.p+"static/media/delete.31370d97.svg"},function(e,t,a){e.exports=a.p+"static/media/flag-of-europe.7b4534d2.svg"},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),s=(a(16),a(10)),o=a(1),i=a(22),u=(a(17),a(18),a(6)),m=a.n(u),p=a(7),d=a.n(p),b=function(e){var t=e.addPlant,a=Object(n.useState)("ID A01/2021"),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),p=u[0],b=u[1],_=Object(n.useState)(""),f=Object(o.a)(_,2),E=f[0],h=f[1],N=Object(n.useState)(""),v=Object(o.a)(N,2),P=v[0],g=v[1],j=Object(n.useState)(""),O=Object(o.a)(j,2),y=O[0],A=O[1],k=Object(n.useRef)(""),w=Object(n.useState)([]),D=Object(o.a)(w,2),z=D[0],x=D[1],C=Object(n.useState)([]),S=Object(o.a)(C,2),I=S[0],T=S[1];function V(e,t){fetch(e).then((function(e){return e.arrayBuffer()})).then((function(e){var a=new TextDecoder("UTF-8").decode(e).split("\r\n").map((function(e){return e.match(/[A-Za-z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c'.() ]+/g)})).sort();console.log("splitted",a),t(a)})).catch((function(e){console.log(e)}))}console.log("plantsNames",z),console.log(z.map((function(e,t){return l.a.createElement("option",{key:t,value:e})}))),Object(n.useEffect)((function(){k.current.focus(),V(m.a,x),V(d.a,T)}),[]),Object(n.useEffect)((function(){A("")}),[c,p]);var B=function(e){switch(e.preventDefault(),e.target.id){case"plantId":s(e.target.value);break;case"plantName":b(e.target.value);break;case"plantVariety":h(e.target.value);break;case"plantAmount":g(e.target.value)}};return l.a.createElement("section",{className:"AddPassport no-print"},l.a.createElement("h1",{className:"AddPassport__header"},"Generator paszport\xf3w ro\u015blin"),l.a.createElement("p",null,"Podaj dane ro\u015bliny:"),l.a.createElement("form",{className:"AddPassport__form",action:""},l.a.createElement("input",{className:"AddPassport__input",ref:k,id:"plantName",list:"plants-list",type:"text",placeholder:"Nazwa*",value:p,onChange:B,required:!0}),l.a.createElement("datalist",{id:"plants-list"},z[0].map((function(e,t){return console.log(t),l.a.createElement("option",{key:t,value:e})}))),l.a.createElement("input",{className:"AddPassport__input",id:"plantVariety",list:"varieties-list",type:"text",placeholder:"Odmiana",value:E,onChange:B}),l.a.createElement("datalist",{id:"varieties-list"},I),l.a.createElement("input",{className:"AddPassport__input",id:"plantAmount",type:"number",min:"1",placeholder:"Ilo\u015b\u0107",value:P,onChange:B}),l.a.createElement("input",{className:"AddPassport__input",id:"plantId",type:"text",placeholder:"Id*",value:c,onChange:B,required:!0}),y?l.a.createElement("p",{className:"AddPassport__error"},y):null,l.a.createElement("button",{className:"AddPassport__button button",id:"button-add",type:"submit",onClick:function(e){e.preventDefault(),c&&p?(t(c,p,E,P),h(""),g(""),k.current.focus()):A("Nazwa ro\u015bliny oraz id musz\u0105 by\u0107 podane")}},"Dodaj paszport")))},_=(a(19),a(8)),f=a.n(_),E=function(e){var t=e.handleDeletePassport;return l.a.createElement("button",{className:"DeletePassport__button button-warning no-print",onClick:t},l.a.createElement("img",{className:"DeletePassport__icon",src:f.a,alt:"Usu\u0144 paszport"}))},h=a(9),N=a.n(h),v=function(e){var t=e.plant;return l.a.createElement("div",{className:"Passport"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"table__head"},l.a.createElement("tr",{className:"table__head-row"},l.a.createElement("th",{className:"table__head-cell",colSpan:"4"},l.a.createElement("img",{src:N.a,alt:"Flag of Europe",className:"table__flag"}),l.a.createElement("h3",{className:"table__header"},"Paszport Ro\u015blin \\ Plant Passport")))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"table__cell table__cell--letter"},"A"),l.a.createElement("td",{className:"table__cell table__cell--data"},t.name),l.a.createElement("td",{className:"table__cell table__cell--letter"},"B"),l.a.createElement("td",{className:"table__cell table__cell--data"},"PL-18/62/5804")),l.a.createElement("tr",null,l.a.createElement("td",{className:"table__cell table__cell--letter"},"C"),l.a.createElement("td",{className:"table__cell table__cell--data"},t.plantId),l.a.createElement("td",{className:"table__cell table__cell--letter"},"D"),l.a.createElement("td",{className:"table__cell table__cell--data"},"PL")))))},P=function(e){var t=e.plants,a=e.handleDeleteVariety,n=e.handleDeletePassport;return t.map((function(e){return l.a.createElement("div",{key:e.id,className:"PassportsToPrint print"},e.varieties.map((function(t){return l.a.createElement("p",{key:"".concat(Math.floor(1e6*Math.random(100)),"-").concat(e.id),className:"Passport__paragraph"},e.name," ",t.name," \xa0"," ",t.amount," ",t.amount?"szt.":"",l.a.createElement("button",{className:"PassportsToPrint__button no-print",onClick:function(){return a(t.id)}},"X"))})),l.a.createElement("div",{className:"Passport__box"},l.a.createElement(v,{plant:e}),l.a.createElement(E,{handleDeletePassport:function(){return n(e.id)}})))}))},g=function(e){var t=e.handlePrint;return l.a.createElement("button",{className:"button no-print",id:"button-print",onClick:t},"Drukuj")},j=function(e){var t=e.handleClearAll;return l.a.createElement("button",{className:"button-warning no-print",id:"button-clear",onClick:t},"Wyczy\u015b\u0107 wszystko")},O=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=(new Date).getFullYear();return l.a.createElement("main",{className:"App"},l.a.createElement("div",{className:"App__box"},l.a.createElement(b,{addPlant:function(e,t,n,l){var c=a.find((function(e){return e.name===t}));if(c){c.varieties.push({id:Object(i.a)(),name:n,amount:l});var o=a.map((function(e){return e.name===t&&(e=c),e}));r(o)}else r([].concat(Object(s.a)(a),[{id:Object(i.a)(),plantId:e,name:t,varieties:[{id:Object(i.a)(),name:n,amount:l}]}]))}}),l.a.createElement("br",null),l.a.createElement("section",{className:"App__passports"},l.a.createElement("div",{className:"App__buttons"},l.a.createElement(g,{handlePrint:function(){return window.print(),!1}}),l.a.createElement(j,{handleClearAll:function(){r([])}})),l.a.createElement("hr",{className:"no-print"}),l.a.createElement(P,{plants:a,handleDeleteVariety:function(e){var t=a.filter((function(t){return t.varieties=t.varieties.filter((function(t){return t.id!==e})),t.varieties.length>0}));r(t)},handleDeletePassport:function(e){var t=a.filter((function(t){return t.id!==e}));r(t)}}))),l.a.createElement("footer",{className:"App__footer no-print"},"Copyright \xa9 ",c," Anna Paku\u0142a"))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.51475b2b.chunk.js.map