(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cfa690fd"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"79ef581c"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],m.parentNode.removeChild(m),n(i)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/new_mt/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",id:"home-app-bar",elevation:"1","elevate-on-scroll":"",height:"80"}},[n("v-container",{staticClass:"mx-auto py-0"},[n("v-row",{attrs:{align:"center"}},[n("v-toolbar-title",{on:{click:function(t){return e.$router.push("/")}}},[e._v("Clouds")]),n("v-spacer"),n("div",[n("v-tabs",{staticClass:"hidden-sm-and-down",attrs:{optional:"","background-color":"transparent"}},e._l(e.items,(function(t,r){return n("v-tab",{key:r,staticClass:"font-weight-bold",attrs:{to:{name:t},exact:"Home"===t,ripple:!1,"min-width":"96",text:""}},[e._v(" "+e._s(t)+" ")])})),1)],1),n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){e.drawer=!e.drawer}}})],1)],1)],1),n("v-navigation-drawer",{attrs:{app:"",dark:"",temporary:"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",e._l(e.items,(function(t,r){return n("v-list-item",{key:r,attrs:{to:{name:t},exact:"Home"===t,ripple:!1}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1),n("v-main",[n("router-view")],1)],1)},o=[],i=n("5530"),c=n("2f62"),u={name:"app",data:function(){return{timeframes:[],drawer:!1,items:["Home","ETF","Alerts","Trends","Timeframes"]}},created:function(){this.$store.dispatch("getTimeframes")},updated:function(){},computed:Object(i["a"])({},Object(c["b"])(["five"])),methods:{}},s=u,l=(n("034f"),n("2877")),f=n("6544"),m=n.n(f),d=n("7496"),p=n("40dc"),b=n("5bc1"),h=n("a523"),v=n("8860"),g=n("da13"),y=n("5d23"),A=n("f6c4"),w=n("f774"),T=n("0fd9"),O=n("2fa4"),B=n("71a3"),C=n("fe57"),I=n("2a7f"),P=Object(l["a"])(s,a,o,!1,null,null,null),S=P.exports;m()(P,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:b["a"],VContainer:h["a"],VList:v["a"],VListItem:g["a"],VListItemTitle:y["a"],VMain:A["a"],VNavigationDrawer:w["a"],VRow:T["a"],VSpacer:O["a"],VTab:B["a"],VTabs:C["a"],VToolbarTitle:I["a"]});n("4de4"),n("d81d"),n("4fad");var k=n("66ce"),L=n("260b"),j=L["a"]({apiKey:"AIzaSyAwOfpaE4ZBLIw6za2sYTV9MJMpjO-IEIU",authDomain:"cloudata-e772d.firebaseapp.com",databaseURL:"https://cloudata-e772d-default-rtdb.firebaseio.com",projectId:"cloudata-e772d",storageBucket:"cloudata-e772d.appspot.com",messagingSenderId:"388677879356",appId:"1:388677879356:web:5bef45670ecbc5d9b46539",measurementId:"G-HPDCX3BXSN"}),_=Object(k["a"])(j),N=Object(k["c"])(_,"11qcI_usfHsNyKWfwK1Rw1r3fRY-TCdlaK51MsVm6eC4");r["a"].use(c["a"]);var V=new c["a"].Store({state:{timeframes:[],etfs:[],time:"",daily:{},hourly:{},thirty:{},fifteen:{},five:{},three:{}},mutations:{setTimeframes:function(e,t){e.timeframes=t,e.daily.dailyAbove=t.dailyAbove,e.daily.dailyBelow=t.dailyBelow,e.daily.dailyIn=t.dailyIn,e.hourly.hourAbove=t.hourAbove,e.hourly.hourBelow=t.hourBelow,e.hourly.hourIn=t.hourIn,e.thirty["30Above"]=t["30Above"],e.thirty["30Below"]=t["30Below"],e.thirty["30In"]=t["30In"],e.fifteen["15Above"]=t["15Above"],e.fifteen["15Below"]=t["15Below"],e.fifteen["15In"]=t["15In"],e.five["5minAbove"]=t["5minAbove"],e.five["5minBelow"]=t["5minBelow"],e.five["5minIn"]=t["5minIn"],e.three["3minAbove"]=t["3minAbove"],e.three["3minBelow"]=t["3minBelow"],e.three["3minIn"]=t["3minIn"]},setIndexes:function(e,t){e.etfs=t},setTime:function(e,t){e.time=t},setDaily:function(e,t){e.time=t}},actions:{getTimeframes:function(e){var t=e.commit;Object(k["b"])(N,(function(e){var n=e.val();t("setTimeframes",n)}))}},modules:{},getters:{timeframes:function(e){return e.timeframes},daily:function(e){return e.daily},getFiveAbovebyAlert:function(e){return Object.entries(e.five["5minAbove"]).map((function(e){return e[1]})).filter((function(e){return 0!=e.Alert}))},getFiveBelowbyAlert:function(e){return Object.entries(e.five["5minBelow"]).map((function(e){return e[1]})).filter((function(e){return 0!=e.Alert}))},getThreeAbovebyAlert:function(e){return Object.entries(e.three["3minAbove"]).map((function(e){return e[1]})).filter((function(e){return 0!=e.Alert}))},getThreeBelowbyAlert:function(e){return Object.entries(e.three["3minBelow"]).map((function(e){return e[1]})).filter((function(e){return 0!=e.Alert}))}}}),E=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("div",[n("h1",[e._v("This is the Home page")])]),n("v-container",[n("h1",[e._v("Stocklist")]),n("v-row",{attrs:{"no-gutters":""}},e._l(e.stocklist,(function(t,r){return n("v-col",{key:r,attrs:{cols:"12",sm:"2"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""},on:{click:function(n){return e.goToStockLookup(t)}}},[e._v(" "+e._s(t)+" ")])],1)})),1)],1)],1)},D=[],x={name:"Home",data:function(){return{menu:!1,time:{},tab:null,stocklist:["VXX","QQQ","SPY","AAL","AAPL","ABNB","ACB","AIG","AMD","ATVI","BA","BABA","BAC","BBY","BIDU","BYND","C","CCL","CHWY","COST","CRM","CSCO","CVS","DAL","DBX","DIS","DISH","DKNG","EA","EBAY","F","FB","FDX","FSLY","GE","GM","GME","GPS","HD","IBM","INTC","JBLU","JNJ","JPM","KNDI","LAZR","LLY","LULU","LYFT","M","MA","MCD","MGM","MSFT","MU","NFLX","NIO","NKE","NVDA","ORCL","OSTK","PENN","PINS","PLTR","PLUG","PTON","PYPL","QCOM","RKT","ROKU","SBUX","SHOP","SIRI","SNAP","SNOW","SPCE","SQ","T","TGT","TLRY","TSLA","TWTR","UAL","UBER","V","VZ","WBA","WFC","WMT","WORK","ZM","ZNGA"]}},components:{},created:function(){this.$store.dispatch("getTimeframes")},methods:{goToStockLookup:function(e){this.$router.push({name:"Stock",params:{id:e}})}},computed:Object(i["a"])({},Object(c["b"])(["timeframes"]))},F=x,R=n("b0af"),K=n("62ad"),H=Object(l["a"])(F,M,D,!1,null,"ca33bf46",null),U=H.exports;m()(H,{VCard:R["a"],VCol:K["a"],VContainer:h["a"],VRow:T["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("h2",{on:{click:function(t){return e.threeAboveAlertsFilter()}}},[e._v("This is the Stock Lookup Page for "+e._s(e.$route.params.id))])])},G=[],$={name:"Stock",data:function(){return{stock:"",itemsPerPageArray:[4,8,12],search:"",filter:{},sortDesc:!1,page:1,itemsPerPage:4,sortBy:"name",keys:["Name","Calories","Fat","Carbs","Protein","Sodium","Calcium","Iron"],items:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"}]}},created:function(){},computed:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["timeframes"])),{},{numberOfPages:function(){return Math.ceil(this.items.length/this.itemsPerPage)},filteredKeys:function(){return this.keys.filter((function(e){return"Name"!==e}))}}),methods:{threeAboveAlertsFilter:function(){var e=this.$route.params.id;console.log(e);var t=Object.entries(t);return console.log(t),t},nextPage:function(){this.page+1<=this.numberOfPages&&(this.page+=1)},formerPage:function(){this.page-1>=1&&(this.page-=1)},updateItemsPerPage:function(e){this.itemsPerPage=e}}},J=$,W=Object(l["a"])(J,Y,G,!1,null,null,null),X=W.exports;m()(W,{VContainer:h["a"]}),r["a"].use(E["a"]);var Q=[{path:"/",name:"Home",component:U},{path:"/alerts",name:"Alerts",component:function(){return n.e("about").then(n.bind(null,"9413"))}},{path:"/timeframes",name:"Timeframes",component:function(){return n.e("about").then(n.bind(null,"8226"))}},{path:"/trends",name:"Trends",component:function(){return n.e("about").then(n.bind(null,"9634"))}},{path:"/etf",name:"ETF",component:function(){return n.e("about").then(n.bind(null,"71c0"))}},{path:"/stock/:id",name:"Stock",component:X}],Z=new E["a"]({routes:Q}),q=Z,z=n("d842"),ee=(n("3c0b"),n("0ff2")),te=n("f309");r["a"].use(te["a"]);var ne=new te["a"]({});r["a"].use(ee["a"]),r["a"].use(z["a"]),r["a"].config.productionTip=!1,new r["a"]({store:V,router:q,vuetify:ne,render:function(e){return e(S)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.c4dab18f.js.map