(function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9483c035"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/new_mt/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",id:"home-app-bar",elevation:"1","elevate-on-scroll":"",height:"80"}},[r("v-container",{staticClass:"mx-auto py-0"},[r("v-row",{attrs:{align:"center"}},[r("v-toolbar-title",[e._v("Clouds")]),r("v-spacer"),r("div",[r("v-tabs",{attrs:{optional:"","background-color":"transparent"}},e._l(e.items,(function(t,n){return r("v-tab",{key:n,staticClass:"font-weight-bold",attrs:{to:{name:t},exact:"Home"===t,ripple:!1,"min-width":"96",text:""}},[e._v(" "+e._s(t)+" ")])})),1)],1)],1)],1)],1),r("v-navigation-drawer",{attrs:{app:"",dark:"",temporary:"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",[r("v-list-item",[r("v-list-item-title")],1)],1)],1),r("v-main",[r("router-view")],1)],1)},a=[],i=r("5530"),l=r("2f62"),c={name:"app",data:function(){return{timeframes:[],drawer:!1,items:["Home","Timeframes"]}},created:function(){this.$store.dispatch("getTimeframes")},updated:function(){},computed:Object(i["a"])({},Object(l["b"])(["five"])),methods:{}},s=c,u=(r("034f"),r("2877")),f=r("6544"),d=r.n(f),m=r("7496"),v=r("40dc"),p=r("a523"),b=r("8860"),A=r("da13"),h=r("5d23"),y=r("f6c4"),w=r("f774"),_=r("0fd9"),g=r("2fa4"),B=r("71a3"),T=r("fe57"),O=r("2a7f"),I=Object(u["a"])(s,o,a,!1,null,null,null),S=I.exports;d()(I,{VApp:m["a"],VAppBar:v["a"],VContainer:p["a"],VList:b["a"],VListItem:A["a"],VListItemTitle:h["a"],VMain:y["a"],VNavigationDrawer:w["a"],VRow:_["a"],VSpacer:g["a"],VTab:B["a"],VTabs:T["a"],VToolbarTitle:O["a"]});r("4de4"),r("d81d"),r("4fad");var C=r("66ce"),M=r("260b"),j=M["a"]({apiKey:"AIzaSyAwOfpaE4ZBLIw6za2sYTV9MJMpjO-IEIU",authDomain:"cloudata-e772d.firebaseapp.com",databaseURL:"https://cloudata-e772d-default-rtdb.firebaseio.com",projectId:"cloudata-e772d",storageBucket:"cloudata-e772d.appspot.com",messagingSenderId:"388677879356",appId:"1:388677879356:web:5bef45670ecbc5d9b46539",measurementId:"G-HPDCX3BXSN"}),L=Object(C["a"])(j),V=Object(C["c"])(L,"11qcI_usfHsNyKWfwK1Rw1r3fRY-TCdlaK51MsVm6eC4");n["a"].use(l["a"]);var k=new l["a"].Store({state:{timeframes:[],etfs:[],time:"",daily:{},hourly:{},thirty:{},fifteen:{},five:{},three:{}},mutations:{setTimeframes:function(e,t){e.timeframes=t,e.daily.dailyAbove=t.dailyAbove,e.daily.dailyBelow=t.dailyBelow,e.daily.dailyIn=t.dailyIn,e.hourly.hourAbove=t.hourAbove,e.hourly.hourBelow=t.hourBelow,e.hourly.hourIn=t.hourIn,e.thirty["30Above"]=t["30Above"],e.thirty["30Below"]=t["30Below"],e.thirty["30In"]=t["30In"],e.fifteen["15Above"]=t["15Above"],e.fifteen["15Below"]=t["15Below"],e.fifteen["15In"]=t["15In"],e.five["5minAbove"]=t["5minAbove"],e.five["5minBelow"]=t["5minBelow"],e.five["5minIn"]=t["5minIn"],e.three["3minAbove"]=t["3minAbove"],e.three["3minBelow"]=t["3minBelow"],e.three["3minIn"]=t["3minIn"]},setIndexes:function(e,t){e.etfs=t},setTime:function(e,t){e.time=t},setDaily:function(e,t){e.time=t}},actions:{getTimeframes:function(e){var t=e.commit;Object(C["b"])(V,(function(e){var r=e.val();t("setTimeframes",r)}))}},modules:{},getters:{timeframes:function(e){return e.timeframes},daily:function(e){return e.daily},getFiveAbovebyAlert:function(e){return Object.entries(e.five["5minAbove"]).map((function(e){return e[1]})).filter((function(e){return 0!=e.Alert}))},getFiveBelowbyAlert:function(e){return Object.entries(e.five["5minBelow"]).map((function(e){return e[1]})).filter((function(e){return 0!=e.Alert}))},getThreeAbovebyAlert:function(e){return Object.entries(e.three["3minAbove"]).map((function(e){return e[1]})).filter((function(e){return 0!=e.Alert}))},getThreeBelowbyAlert:function(e){return Object.entries(e.three["3minBelow"]).map((function(e){return e[1]})).filter((function(e){return 0!=e.Alert}))}}}),x=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("div",{staticClass:"about"},[r("h1",[e._v("This is the Home page")])]),r("v-container",[r("h1",[e._v("Stocklist")]),r("p",[e._v(e._s(e.stocklist))]),r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"12"}},[r("v-card",[r("v-card-title",[e._v("5 on 15 Minute Above Alerts")]),e._l(e.timeframes["5on15Above"],(function(t,n){return r("v-card-text",{key:n},[r("div",[e._v(" Stock: "+e._s(t.id)+" Alert: "+e._s(t.Alert)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"12"}},[r("v-card",[r("v-card-title",[e._v("5 on 15 Minute Below Alerts")]),e._l(e.timeframes["5on15Below"],(function(t,n){return r("v-card-text",{key:n},[r("div",[e._v(" Stock: "+e._s(t.id)+" Alert: "+e._s(t.Alert)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"12"}},[r("v-card",[r("v-card-title",[e._v("15 on 30 Above Alerts")]),e._l(e.timeframes["15on30Above"],(function(t,n){return r("v-card-text",{key:n},[r("div",[e._v(" Stock: "+e._s(t.id)+" Alert: "+e._s(t.Alert)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"12"}},[r("v-card",[r("v-card-title",[e._v("15 on 30 Below Alerts")]),e._l(e.timeframes["15on30Below"],(function(t,n){return r("v-card-text",{key:n},[r("div",[e._v(" Stock: "+e._s(t.id)+" Alert: "+e._s(t.Alert)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"12"}},[r("v-card",[r("v-card-title",{on:{click:function(t){return e.AboveAlertsFilter(e.timeframes["3minAbove"])}}},[e._v("3 Minute Above Alerts")]),e._l(e.timeframes["3minAbove"],(function(t,n){return r("v-card-text",{key:n},[0!=t.Alert?r("div",[e._v(" Stock: "+e._s(t.id)+" Alert: "+e._s(t.Alert)+" ")]):e._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"12"}},[r("v-card",[r("v-card-title",[e._v("3 Minute Below Alerts")]),e._l(e.timeframes["3minBelow"],(function(t,n){return r("v-card-text",{key:n},[0!=t.Alert?r("div",[e._v(" Stock: "+e._s(t.id)+" Alert: "+e._s(t.Alert)+" ")]):e._e()])}))],2)],1)],1)],1)],1)},N=[],D={name:"Home",data:function(){return{menu:!1,time:{},tab:null,stocklist:["VXX","QQQ","SPY","AAL","AAPL","ABNB","ACB","AIG","AMD","ATVI","BA","BABA","BAC","BBY","BIDU","BYND","C","CCL","CHWY","COST","CRM","CSCO","CVS","DAL","DBX","DIS","DISH","DKNG","EA","EBAY","F","FB","FDX","FSLY","GE","GM","GME","GPS","HD","IBM","INTC","JBLU","JNJ","JPM","KNDI","LAZR","LLY","LULU","LYFT","M","MA","MCD","MGM","MSFT","MU","NFLX","NIO","NKE","NVDA","ORCL","OSTK","PENN","PINS","PLTR","PLUG","PTON","PYPL","QCOM","RKT","ROKU","SBUX","SHOP","SIRI","SNAP","SNOW","SPCE","SQ","T","TGT","TLRY","TSLA","TWTR","UAL","UBER","V","VZ","WBA","WFC","WMT","WORK","ZM","ZNGA"]}},components:{},created:function(){this.$store.dispatch("getTimeframes")},updated:function(){},computed:Object(i["a"])({},Object(l["b"])(["timeframes","getFiveAbovebyAlert","getFiveBelowbyAlert","getThreeAbovebyAlert","getThreeBelowbyAlert"])),methods:{AboveAlertsFilter:function(e){return this.myfiver=Object.entries(e).map((function(e){return e[1]})).filter((function(e){return 0!=e.Alert})),this.myfiver}}},R=D,E=r("b0af"),F=r("99d9"),U=r("62ad"),Y=Object(u["a"])(R,P,N,!1,null,null,null),G=Y.exports;d()(Y,{VCard:E["a"],VCardText:F["a"],VCardTitle:F["b"],VCol:U["a"],VContainer:p["a"],VRow:_["a"]}),n["a"].use(x["a"]);var H=[{path:"/",name:"Home",component:G},{path:"/Timeframes",name:"Timeframes",component:function(){return r.e("about").then(r.bind(null,"8226"))}}],K=new x["a"]({routes:H}),W=K,X=r("d842"),J=(r("3c0b"),r("0ff2")),Q=r("f309");n["a"].use(Q["a"]);var Z=new Q["a"]({});n["a"].use(J["a"]),n["a"].use(X["a"]),n["a"].config.productionTip=!1,new n["a"]({store:k,router:W,vuetify:Z,render:function(e){return e(S)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.4a16129c.js.map