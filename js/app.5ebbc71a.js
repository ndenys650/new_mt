(function(t){function e(e){for(var s,a,n=e[0],c=e[1],l=e[2],u=0,d=[];u<n.length;u++)a=n[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);v&&v(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,a=1;a<r.length;a++){var n=r[a];0!==i[n]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var s={},a={app:0},i={app:0},o=[];function n(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"76ce07b3"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"8fb55e9d"}[t]+".css",i=c.p+s,o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var l=o[n],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===i))return e()}var d=document.getElementsByTagName("style");for(n=0;n<d.length;n++){l=d[n],u=l.getAttribute("data-href");if(u===s||u===i)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var s=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[t],v.parentNode.removeChild(v),r(o)},v.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){a[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,r){s=i[t]=[e,r]}));e.push(s[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=n(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var r=i[t];if(0!==r){if(r){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,r[1](d)}i[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(r,s,function(e){return t[e]}.bind(null,s));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/new_mt/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var v=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",id:"home-app-bar",elevation:"1","elevate-on-scroll":"",height:"80",color:"brown lighten-5"}},[r("v-container",{staticClass:"mx-auto py-0"},[r("v-row",{attrs:{align:"center"}},[r("v-toolbar-title",{staticClass:"secondary--text",on:{click:function(e){return t.$router.push("/")}}},[t._v("MT_Clouds")]),r("v-spacer"),r("div",[r("v-tabs",{staticClass:"hidden-sm-and-down",attrs:{optional:"","background-color":"transparent"}},t._l(t.items,(function(e,s){return r("v-tab",{key:s,staticClass:"font-weight-bold",attrs:{to:{name:e},exact:"Home"===e,ripple:!1,"min-width":"96",text:""}},[t._v(" "+t._s(e)+" ")])})),1)],1),r("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}})],1)],1)],1),r("v-navigation-drawer",{attrs:{app:"",dark:"",temporary:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,s){return r("v-list-item",{key:s,attrs:{to:{name:e},exact:"Home"===e,ripple:!1}},[r("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1),r("v-main",[r("v-fade-transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1),r("v-footer",{attrs:{color:"secondary",padless:""}},[r("v-row",{attrs:{justify:"center","no-gutters":""}},[r("v-col",{staticClass:"secondary py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Nate Denys")])])],1)],1)],1)},i=[],o=r("5530"),n=r("2f62"),c={name:"app",data:function(){return{timeframes:[],drawer:!1,items:["Home","Data","ETF","Alerts","Trends","Timeframes"]}},mounted:function(){this.$store.dispatch("getTimeframes"),this.$store.dispatch("getPastAlerts")},updated:function(){},computed:Object(o["a"])({},Object(n["b"])(["five"])),methods:{}},l=c,u=(r("034f"),r("2877")),d=r("6544"),v=r.n(d),f=r("7496"),h=r("40dc"),m=r("5bc1"),b=r("62ad"),p=r("a523"),_=r("0789"),y=r("553a"),C=r("8860"),g=r("da13"),w=r("5d23"),k=r("f6c4"),A=r("f774"),x=r("0fd9"),S=r("2fa4"),F=r("71a3"),P=r("fe57"),I=r("2a7f"),B=Object(u["a"])(l,a,i,!1,null,null,null),O=B.exports;v()(B,{VApp:f["a"],VAppBar:h["a"],VAppBarNavIcon:m["a"],VCol:b["a"],VContainer:p["a"],VFadeTransition:_["c"],VFooter:y["a"],VList:C["a"],VListItem:g["a"],VListItemTitle:w["b"],VMain:k["a"],VNavigationDrawer:A["a"],VRow:x["a"],VSpacer:S["a"],VTab:F["a"],VTabs:P["a"],VToolbarTitle:I["a"]});r("4fad"),r("b64b"),r("caad"),r("2532"),r("4de4"),r("d81d");var j=r("66ce"),T=r("260b"),L=T["a"]({apiKey:"AIzaSyAwOfpaE4ZBLIw6za2sYTV9MJMpjO-IEIU",authDomain:"cloudata-e772d.firebaseapp.com",databaseURL:"https://cloudata-e772d-default-rtdb.firebaseio.com",projectId:"cloudata-e772d",storageBucket:"cloudata-e772d.appspot.com",messagingSenderId:"388677879356",appId:"1:388677879356:web:5bef45670ecbc5d9b46539",measurementId:"G-HPDCX3BXSN"}),D=Object(j["a"])(L),V=r("5f2b"),N=new V({keyId:"PKKJ0VRP979S85L92PW9",secretKey:"ZJHjA5AGLQXFM8ohE8mcfN8p9UTUlGFFw4ZSsPba",paper:!0,usePolygon:!1}),M=N,R=Object(j["f"])(D,"11qcI_usfHsNyKWfwK1Rw1r3fRY-TCdlaK51MsVm6eC4"),E=Object(j["f"])(D,"updates/above");s["a"].use(n["a"]);var K=new n["a"].Store({state:{loading:!1,stocklist:["VXX","QQQ","SPY","AAL","AAPL","ABNB","ACB","AIG","AMD","ATVI","BA","BABA","BAC","BBY","BIDU","BYND","C","CCL","CHWY","COST","CRM","CSCO","CVS","DAL","DBX","DIS","DISH","DKNG","EA","EBAY","F","FB","FDX","FSLY","GE","GM","GME","GPS","HD","IBM","INTC","JBLU","JNJ","JPM","KNDI","LAZR","LLY","LULU","LYFT","M","MA","MCD","MGM","MSFT","MU","NFLX","NIO","NKE","NVDA","ORCL","OSTK","PENN","PINS","PLTR","PLUG","PTON","PYPL","QCOM","RKT","ROKU","SBUX","SHOP","SIRI","SNAP","SNOW","SPCE","SQ","T","TGT","TLRY","TSLA","TWTR","UAL","UBER","V","VZ","WBA","WFC","WMT","WORK","ZM","ZNGA"],timeframes:[],etfs:[],time:"",daily:{},hourly:{},thirty:{},fifteen:{},five:{},three:{},alerts:[],above_short:[],above_med:[],below_med:[]},mutations:{setTimeframes:function(t,e){t.timeframes=e,t.daily.dailyAbove=e.dailyAbove,t.daily.dailyBelow=e.dailyBelow,t.daily.dailyIn=e.dailyIn,t.hourly.hourAbove=e.hourAbove,t.hourly.hourBelow=e.hourBelow,t.hourly.hourIn=e.hourIn,t.thirty["30Above"]=e["30Above"],t.thirty["30Below"]=e["30Below"],t.thirty["30In"]=e["30In"],t.fifteen["15Above"]=e["15Above"],t.fifteen["15Below"]=e["15Below"],t.fifteen["15In"]=e["15In"],t.five["5minAbove"]=e["5minAbove"],t.five["5minBelow"]=e["5minBelow"],t.five["5minIn"]=e["5minIn"],t.three["3minAbove"]=e["3minAbove"],t.three["3minBelow"]=e["3minBelow"],t.three["3minIn"]=e["3minIn"]},setAboveShortList:function(t,e){t.above_short=e},setAboveMedList:function(t,e){t.above_med=e},setBelowMedList:function(t,e){t.below_med=e},setPastAlerts:function(t,e){t.alerts=e},setIndexes:function(t,e){t.etfs=e},setTime:function(t,e){t.time=e},setDaily:function(t,e){t.time=e}},actions:{getTimeframes:function(t){var e=t.commit;Object(j["c"])(R,(function(t){var r=t.val();e("setTimeframes",r);var s=[],a=[],i=[];for(var o in r["5minAbove"])o in r["15Above"]&&s.push([r["5minAbove"][o],r["15Above"][o]]);for(var n in r["15Above"])n in r["30Above"]&&a.push([r["15Above"][n]]);for(var c in r["15Below"])c in r["30Below"]&&i.push([r["15Below"][c]]);e("setAboveShortList",s),e("setAboveMedList",a),e("setBelowMedList",i)}))},getPastAlerts:function(t){var e=t.commit,r=Object(j["e"])(E,Object(j["b"])(100)),s=[];Object(j["c"])(r,(function(t){var e=t.val();s.push(e)})),e("setPastAlerts",s)},addDBAlertAbove:function(t,e){console.log("this is the data",e),console.log(t),Object(j["d"])(E,e)},getAccount:function(){M.getAccount().then((function(t){console.log("Current Account:",t)}))},getOrders:function(){M.getOrders({status:"all"}).then((function(t){console.log(t)}))},getPositions:function(){M.getPositions().then((function(t){console.log(t)}))},closeAllPositions:function(){M.closeAllPositions().then((function(){console.log("All open positions closed")}))},getAsset:function(t){M.getAsset(t).then((function(t){console.log(t)}))},createOrder:function(t,e){console.log(e),console.log(t)}},modules:{},getters:{timeframes:function(t){return t.timeframes},alerts:function(t){return t.alerts},above_short:function(t){return t.above_short},above_med:function(t){return t.above_med},below_med:function(t){return t.below_med},fifteen_data:function(t){for(var e=[],r=0;r<t.stocklist.length;r++)for(var s=t.stocklist[r],a=Object.entries(t.timeframes),i=0;i<a.length;i++)for(var o=Object.keys(a[i][1]),n=0;n<o.length;n++){var c=a[i][0];if(o[n].includes(s)&&o[n].length==s.length&&c.includes("15")){var l=a[i][1][o[n]];e.push([c,l])}}return e},hour_data:function(t){for(var e=[],r=0;r<t.stocklist.length;r++)for(var s=t.stocklist[r],a=Object.entries(t.timeframes),i=0;i<a.length;i++)for(var o=Object.keys(a[i][1]),n=0;n<o.length;n++){var c=a[i][0];if(o[n].includes(s)&&o[n].length==s.length&&c.includes("Hour")){var l=a[i][1][o[n]];e.push([c,l])}}return e},daily_data:function(t){for(var e=[],r=0;r<t.stocklist.length;r++)for(var s=t.stocklist[r],a=Object.entries(t.timeframes),i=0;i<a.length;i++)for(var o=Object.keys(a[i][1]),n=0;n<o.length;n++){var c=a[i][0];if(o[n].includes(s)&&o[n].length==s.length&&c.includes("daily")){var l=a[i][1][o[n]];e.push([c,l])}}return e},five_data:function(t){for(var e=[],r=0;r<t.stocklist.length;r++)for(var s=t.stocklist[r],a=Object.entries(t.timeframes),i=0;i<a.length;i++)for(var o=Object.keys(a[i][1]),n=0;n<o.length;n++){var c=a[i][0];if(o[n].includes(s)&&o[n].length==s.length&&c.includes("daily")){var l=a[i][1][o[n]];e.push([c,l])}}return e},daily:function(t){return t.daily},getFiveAbovebyAlert:function(t){return Object.entries(t.five["5minAbove"]).map((function(t){return t[1]})).filter((function(t){return 0!=t.Alert}))},getFiveBelowbyAlert:function(t){return Object.entries(t.five["5minBelow"]).map((function(t){return t[1]})).filter((function(t){return 0!=t.Alert}))},getThreeAbovebyAlert:function(t){return Object.entries(t.three["3minAbove"]).map((function(t){return t[1]})).filter((function(t){return 0!=t.Alert}))},getThreeBelowbyAlert:function(t){return Object.entries(t.three["3minBelow"]).map((function(t){return t[1]})).filter((function(t){return 0!=t.Alert}))}}}),U=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"py-6 blue-grey darken-1 white--text",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"8"}},[r("div",{staticClass:"text-h3 py-4"},[t._v("Welcome to the new MT Clouds")]),r("div",{staticClass:"text-body-1 px-12"},[t._v("The objective of my algorithm is to provide entries for both short term and long term trades on both sides of the market."),r("br"),r("br"),t._v("If a stock is "),r("span",{staticClass:"red--text font-weight-bold"},[t._v("under the clouds")]),t._v(", the algorithm will provide short entries, if "),r("span",{staticClass:"font-weight-bold green--text"},[t._v("above the clouds")]),t._v(", long entries.")]),r("br"),r("div",{staticClass:"text-body-1 px-12"},[t._v("When viewing the Data page during market hours, Stock symbols will be updated on their respective timeframes i.e. 5 min every 5 mins, 15 every 15, and 30 on the hour and half hour marks."),r("br"),r("br"),t._v("Right now, 3 and 5 minute data are not updating on 15 minute intervals due to API request constraints.")])])],1),r("v-row",{staticClass:"py-6",attrs:{"no-gutters":"",justify:"center"}},[r("v-col",{attrs:{cols:"8"},scopedSlots:t._u([{key:"item",fn:function(e){return[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.item))])],1)]}}])},[r("h2",[t._v("Want to see if a stock is in my list?")]),r("v-autocomplete",{staticClass:"pt-3",attrs:{items:t.stocklist,"search-input":t.search,dense:"",filled:"","cache-items":"",label:"Search the Stocklist Here!","item-text":"symbol","item-value":"symbol"},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goToStockLookup(t.select)}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"ma-4",attrs:{color:"secondary",dark:""},on:{click:function(e){return t.goToDataPage()}}},"v-btn",a,!1),s),[t._v(" View Data ")])]}}])},[r("span",[t._v("View Data Home Page")])]),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"ma-4",on:{click:function(e){return t.goToPastPage()}}},"v-btn",a,!1),s),[t._v(" Look at Past Alerts ")])]}}])},[r("span",[t._v("Currently Work in Progress")])]),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"ma-4",attrs:{color:"secondary",dark:""},on:{click:function(e){return t.goToPortfolioPage()}}},"v-btn",a,!1),s),[t._v(" Look at my Portfolio ")])]}}])},[r("span",[t._v("View Portfolio Data")])])],1)],1),r("v-row",{staticClass:"py-6 blue-grey darken-1 white--text",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"8"}},[r("div",{staticClass:"text-h3 py-4"},[t._v("What I Look For")]),r("div",{staticClass:"text-body-1 px-12"},[t._v("My algorithms strategy utilizes natural numbers.")]),r("br"),r("div",{staticClass:"text-body-1 px-12"},[t._v("The Theory combines The Ichimoku Cloud Trading Strategy with simple RSI and Stochastic RSI rates. I've combined over 60 different indicators and analyzed entries from an array combinations and found these three to be THE ONE.")]),r("br"),r("div",{staticClass:"text-body-1 px-12"},[t._v("An alert will fire when three indicators align."),r("br"),r("br"),t._v("First, a stock must be either uptrending or downtrending (Broad Ichimoku Strategy). Second, if uptrending, the RSI of that stock must be above 40 (closer to 40 is a better entry in most cases) or if downtrending, below 60 (closer to 60 is better in most cases). And Last, while the RSI is in that zone, the Stochastic RSI's are both maxed at either 0 in an uptrend or 100 in a downtrend."),r("br"),r("br"),t._v("You'll notice an alert with gold text when the StochK and D are both maxed. Here is where the magic happens for me.")])])],1)],1)},Y=[],G={name:"Home",data:function(){return{search:null,select:null,stocklist:["VXX","QQQ","SPY","AAL","AAPL","ABNB","ACB","AIG","AMD","ATVI","BA","BABA","BAC","BBY","BIDU","BYND","C","CCL","CHWY","COST","CRM","CSCO","CVS","DAL","DBX","DIS","DISH","DKNG","EA","EBAY","F","FB","FDX","FSLY","GE","GM","GME","GPS","HD","IBM","INTC","JBLU","JNJ","JPM","KNDI","LAZR","LLY","LULU","LYFT","M","MA","MCD","MGM","MSFT","MU","NFLX","NIO","NKE","NVDA","ORCL","OSTK","PENN","PINS","PLTR","PLUG","PTON","PYPL","QCOM","RKT","ROKU","SBUX","SHOP","SIRI","SNAP","SNOW","SPCE","SQ","T","TGT","TLRY","TSLA","TWTR","UAL","UBER","V","VZ","WBA","WFC","WMT","WORK","ZM","ZNGA"],alerts:[]}},watch:{search:function(t){var e=t.toUpperCase();e.length<3?this.loading=!1:e.length>3&&3==e.length&&e in this.stocklist?(this.loading=!0,this.items=[],this.select=null,this.goToStockLookup(e)):this.loading=!1}},created:function(){this.$store.dispatch("getTimeframes")},methods:{goToStockLookup:function(t){this.$router.push({name:"Stock",params:{id:t}})},goToDataPage:function(){this.$router.push({name:"Data"})},goToPortfolioPage:function(){this.$router.push({name:"Portfolio"})},goToPastPage:function(){this.$router.push({name:"Past"})},listAboveShort:function(){console.log(this.above_short)}},filters:{toCurrency:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return e.format(t)}},computed:Object(o["a"])({},Object(n["b"])(["timeframes","above_short","hour_data","daily_data","five_data"]))},W=G,$=r("c6a6"),X=r("8336"),J=r("3a2f"),Q=Object(u["a"])(W,H,Y,!1,null,"e99daca8",null),Z=Q.exports;v()(Q,{VAutocomplete:$["a"],VBtn:X["a"],VCol:b["a"],VContainer:p["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VRow:x["a"],VTooltip:J["a"]});var z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("h2",[t._v("This is the Stock Lookup Page for "+t._s(t.$route.params.id))]),1==this.loading?r("v-container",[r("v-progress-circular",{staticClass:"mb-4",attrs:{indeterminate:"",color:"primary"}})],1):t._e(),0==this.loading?r("v-container",[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"6"}},[t.threeFrame.includes(t.stockFilter[2].title)?r("v-card",{on:{click:function(e){return t.mt_alert()}}},[r("v-row",{class:{"green white--text":t.stockFilter[2].title.includes("Above"),"red white--text":t.stockFilter[2].title.includes("Below"),"yellow black--text":t.stockFilter[2].title.includes("In")},attrs:{justify:"space-around"}},[r("v-card-title",[t._v("3")]),r("v-card-title",[t._v(t._s(t.cloudLocation(t.stockFilter[2].title)))])],1),r("v-card-text",[r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Price:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t._f("toCurrency")(t.stockFilter[2].each_frame.Price)))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Alert:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[2].each_frame.Alert))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("RSI:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[2].each_frame.RSI))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("stochK:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[2].each_frame.StochK))]),r("v-card-subtitle",{staticClass:"text-center"},[t._v("stochD:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[2].each_frame.StochD))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Candle Pattern:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[2].each_frame.Pattern))])],1)],1)],1):t._e()],1),r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"6"}},[t.fiveFrame.includes(t.stockFilter[3].title)?r("v-card",[r("v-row",{class:{"green white--text":t.stockFilter[3].title.includes("Above"),"red white--text":t.stockFilter[3].title.includes("Below"),"yellow black--text":t.stockFilter[3].title.includes("In")},attrs:{justify:"space-around"}},[r("v-card-title",[t._v("5")]),r("v-card-title",[t._v(t._s(t.cloudLocation(t.stockFilter[3].title)))])],1),r("v-card-text",[r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Price:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t._f("toCurrency")(t.stockFilter[3].each_frame.Price)))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Alert:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[3].each_frame.Alert))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("RSI:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[3].each_frame.RSI))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("stochK:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[3].each_frame.StochK))]),r("v-card-subtitle",{staticClass:"text-center"},[t._v("stochD:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[3].each_frame.StochD))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Candle Pattern:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[3].each_frame.Pattern))])],1)],1)],1):t._e()],1),r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"6"}},[t.fifteenFrame.includes(t.stockFilter[0].title)?r("v-card",[r("v-row",{class:{"green white--text":t.stockFilter[0].title.includes("Above"),"red white--text":t.stockFilter[0].title.includes("Below"),"yellow black--text":t.stockFilter[0].title.includes("In")},attrs:{justify:"space-around"}},[r("v-card-title",[t._v("15")]),r("v-card-title",[t._v(t._s(t.cloudLocation(t.stockFilter[0].title)))])],1),r("v-card-text",[r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Price:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t._f("toCurrency")(t.stockFilter[0].each_frame.Price)))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Alert:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[0].each_frame.Alert))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("RSI:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[0].each_frame.RSI))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("stochK:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[0].each_frame.StochK))]),r("v-card-subtitle",{staticClass:"text-center"},[t._v("stochD:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[0].each_frame.StochD))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Candle Pattern:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[0].each_frame.Pattern))])],1)],1)],1):t._e()],1),r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"6"}},[t.thirtyFrame.includes(t.stockFilter[1].title)?r("v-card",[r("v-row",{class:{"green white--text":t.stockFilter[1].title.includes("Above"),"red white--text":t.stockFilter[1].title.includes("Below"),"yellow black--text":t.stockFilter[1].title.includes("In")},attrs:{justify:"space-around"}},[r("v-card-title",[t._v("30")]),r("v-card-title",[t._v(t._s(t.cloudLocation(t.stockFilter[1].title)))])],1),r("v-card-text",[r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-left"},[t._v("Price:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t._f("toCurrency")(t.stockFilter[1].each_frame.Price)))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-left"},[t._v("Alert:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[1].each_frame.Alert))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-left"},[t._v("RSI:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[1].each_frame.RSI))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-left"},[t._v("stochK:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[1].each_frame.StochK))]),r("v-card-subtitle",{staticClass:"text-left"},[t._v("stochD:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[1].each_frame.StochD))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-left"},[t._v("Candle Pattern:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[1].each_frame.Pattern))])],1)],1)],1):t._e()],1),r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"6"}},[t.hourFrame.includes(t.stockFilter[4].title)?r("v-card",[r("v-row",{class:{"green white--text":t.stockFilter[4].title.includes("Above"),"red white--text":t.stockFilter[4].title.includes("Below"),"yellow black--text":t.stockFilter[4].title.includes("In")},attrs:{justify:"space-around"}},[r("v-card-title",[t._v("Hour")]),r("v-card-title",[t._v(t._s(t.cloudLocation(t.stockFilter[4].title)))])],1),r("v-card-text",[r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Price:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t._f("toCurrency")(t.stockFilter[4].each_frame.Price)))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Alert:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[4].each_frame.Alert))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("RSI:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[4].each_frame.RSI))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("stochK:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[4].each_frame.StochK))]),r("v-card-subtitle",{staticClass:"text-center"},[t._v("stochD:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[4].each_frame.StochD))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Candle Pattern:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[4].each_frame.Pattern))])],1)],1)],1):t._e()],1),r("v-col",{attrs:{cols:"12",lg:"6",sm:"6",md:"6",xs:"6"}},[t.dayFrame.includes(t.stockFilter[5].title)?r("v-card",[r("v-row",{class:{"green white--text":t.stockFilter[5].title.includes("Above"),"red white--text":t.stockFilter[5].title.includes("Below"),"yellow black--text":t.stockFilter[5].title.includes("In")},attrs:{justify:"space-around"}},[r("v-card-title",[t._v("Daily")]),r("v-card-title",[t._v(t._s(t.cloudLocation(t.stockFilter[5].title)))])],1),r("v-card-text",[r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Price:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t._f("toCurrency")(t.stockFilter[5].each_frame.Price)))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Alert:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[5].each_frame.Alert))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("RSI:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[5].each_frame.RSI))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("stochK:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[5].each_frame.StochK))]),r("v-card-subtitle",{staticClass:"text-center"},[t._v("stochD:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[5].each_frame.StochD))])],1),r("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[r("v-card-subtitle",{staticClass:"text-center"},[t._v("Candle Pattern:")]),r("v-card-subtitle",{staticClass:"text-center"},[t._v(t._s(t.stockFilter[5].each_frame.Pattern))])],1)],1)],1):t._e()],1)],1),r("v-row",[r("v-col",[r("v-card",[r("OrderDetails",{attrs:{stock:this.$route.params.id,five_data:t.stockFilter[3],fifteen_data:t.stockFilter[0],thirty_data:t.stockFilter[1],hour_data:t.stockFilter[4]}})],1)],1)],1)],1):t._e()],1)},q=[],tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("h2",[t._v(t._s(this.stock))]),r("h2",[t._v("Current Price: "+t._s(t._f("toCurrency")(this.five_data.each_frame.Price)))]),r("h2",[t._v("Recommended Order Size: "+t._s(t.getSizeAmount(this.five_data.each_frame.Price)))]),r("v-row",{staticClass:"my-6",attrs:{justify:"center"}},[r("v-btn-toggle",{attrs:{shaped:"",mandatory:""},model:{value:t.toggle_one,callback:function(e){t.toggle_one=e},expression:"toggle_one"}},[r("v-btn",{on:{click:t.fiveOrder}},[t._v(" 5 ")]),r("v-btn",{on:{click:t.fifteenOrder}},[t._v(" 15 ")]),r("v-btn",{on:{click:t.thirtyOrder}},[t._v(" 30 ")]),r("v-btn",{on:{click:t.hourOrder}},[t._v(" Hour ")])],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Limit Order Entry Price",required:""},model:{value:this.orderInfo.limit_price,callback:function(e){t.$set(this.orderInfo,"limit_price",e)},expression:"this.orderInfo.limit_price"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Side",required:""},model:{value:this.orderInfo.side,callback:function(e){t.$set(this.orderInfo,"side",e)},expression:"this.orderInfo.side"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Stop Loss",required:""},model:{value:this.orderInfo.stop_loss,callback:function(e){t.$set(this.orderInfo,"stop_loss",e)},expression:"this.orderInfo.stop_loss"}})],1)],1),r("v-btn",{on:{click:function(e){return t.sendOrder()}}},[t._v("Place Paper Order")])],1)},et=[],rt=(r("35b3"),r("a9e3"),{props:["stock","five_data","fifteen_data","thirty_data","hour_data"],data:function(){return{switch:!0,toggle_one:0,orderInfo:{stock:this.stock,quantity:0,side:"",type:"limit",time_in_force:"day",limit_price:0,stop_loss:0}}},mounted:function(){this.quantity=this.getSizeAmount(this.five_data.each_frame.Price),this.limit_price=this.toCurrency(this.five_data.each_frame.Price),this.stop_loss=this.toCurrency(this.five_data.each_frame.SpanB_StopLoss)},methods:{fiveOrder:function(){this.five_data.title.includes("Above")?this.orderInfo.side="buy":this.orderInfo.side="sell",this.orderInfo.limit_price=this.toCurrency(this.five_data.each_frame.Price),this.orderInfo.stop_loss=this.toCurrency(this.five_data.each_frame.SpanB_StopLoss)},fifteenOrder:function(){this.fifteen_data.title.includes("Above")?this.orderInfo.side="buy":this.orderInfo.side="sell",this.orderInfo.limit_price=this.toCurrency(this.fifteen_data.each_frame.Price),this.orderInfo.stop_loss=this.toCurrency(this.fifteen_data.each_frame.SpanB_StopLoss)},thirtyOrder:function(){this.thirty_data.title.includes("Above")?this.orderInfo.side="buy":this.orderInfo.side="sell",this.orderInfo.limit_price=this.toCurrency(this.thirty_data.each_frame.Price),this.orderInfo.stop_loss=this.toCurrency(this.thirty_data.each_frame.SpanB_StopLoss)},hourOrder:function(){this.hour_data.title.includes("Above")?this.orderInfo.side="buy":this.orderInfo.side="sell",this.orderInfo.limit_price=this.toCurrency(this.hour_data.each_frame.Price),this.orderInfo.stop_loss=this.toCurrency(this.hour_data.each_frame.SpanB_StopLoss)},sendOrder:function(){},getSizeAmount:function(t){var e=Math.round(100*(t+Number.EPSILON))/100,r=Math.floor(1e3/e);return r},tradeSide:function(){console.log(this.orderInfo.side),this.switch,this.switch,this.switch,this.orderInfo.side},toCurrency:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return e.format(t)}},filters:{toCurrency:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return e.format(t)}}}),st=rt,at=r("a609"),it=r("8654"),ot=Object(u["a"])(st,tt,et,!1,null,null,null),nt=ot.exports;v()(ot,{VBtn:X["a"],VBtnToggle:at["a"],VCol:b["a"],VContainer:p["a"],VRow:x["a"],VTextField:it["a"]});var ct={name:"Stock",data:function(){return{loading:!0,threeFrame:["3minAbove","3minBelow","3minIn"],fiveFrame:["5minAbove","5minBelow","5minIn"],fifteenFrame:["15Above","15Below","15In"],thirtyFrame:["30Above","30Below","30In"],hourFrame:["HourAbove","HourBelow","HourIn"],dayFrame:["dailyAbove","dailyBelow","dailyIn"],stock:"",itemsPerPageArray:[4,8,12],search:"",filter:{},sortDesc:!1,page:1,itemsPerPage:4,sortBy:"name"}},components:{OrderDetails:nt},created:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1}),500)},computed:Object(o["a"])(Object(o["a"])({},Object(n["b"])(["timeframes"])),{},{stockFilter:function(){for(var t=this.$route.params.id,e=[],r=Object.entries(this.timeframes),s=0;s<r.length;s++)for(var a=Object.keys(r[s][1]),i=0;i<a.length;i++)if(a[i].includes(t)&&a[i].length==t.length){var o=r[s][0],n=r[s][1][a[i]];e.push({title:o,each_frame:n})}return e},numberOfPages:function(){return Math.ceil(this.items.length/this.itemsPerPage)},filteredKeys:function(){return this.keys.filter((function(t){return"Name"!==t}))}}),filters:{toCurrency:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return e.format(t)}},methods:{mt_alert:function(){for(var t=[],e=[],r=[],s=[],a=Object.entries(this.timeframes),i=0;i<a.length;i++)"15Above"==a[i][0]&&t.push(a[0][1]),"15Below"==a[i][0]&&e.push(a[0][1]),"5minAbove"==a[i][0]&&r.push(a[0][1]),"5minBelow"==a[i][0]&&s.push(a[0][1])},getAccount:function(){this.$store.dispatch("getOrders")},cloudLocation:function(t){return t.includes("Below")?"Below":t.includes("Above")?"Above":t.includes("In")?"In":void 0},threeCheck:function(t){return!!this.threeFrame.includes(t.title)||t.title},nextPage:function(){this.page+1<=this.numberOfPages&&(this.page+=1)},formerPage:function(){this.page-1>=1&&(this.page-=1)},updateItemsPerPage:function(t){this.itemsPerPage=t}}},lt=ct,ut=r("b0af"),dt=r("99d9"),vt=r("490a"),ft=Object(u["a"])(lt,z,q,!1,null,null,null),ht=ft.exports;v()(ft,{VCard:ut["a"],VCardSubtitle:dt["a"],VCardText:dt["b"],VCardTitle:dt["c"],VCol:b["a"],VContainer:p["a"],VProgressCircular:vt["a"],VRow:x["a"]}),s["a"].use(U["a"]);var mt=[{path:"/",name:"Home",component:Z},{path:"/data",name:"Data",component:function(){return r.e("about").then(r.bind(null,"9352"))}},{path:"/alerts",name:"Alerts",component:function(){return r.e("about").then(r.bind(null,"9413"))}},{path:"/timeframes",name:"Timeframes",component:function(){return r.e("about").then(r.bind(null,"8226"))}},{path:"/trends",name:"Trends",component:function(){return r.e("about").then(r.bind(null,"9634"))}},{path:"/etf",name:"ETF",component:function(){return r.e("about").then(r.bind(null,"71c0"))}},{path:"/stock/:id",name:"Stock",component:ht},{path:"/past",name:"Past",component:function(){return r.e("about").then(r.bind(null,"5021"))}},{path:"/portfolio",name:"Portfolio",component:function(){return r.e("about").then(r.bind(null,"c9e5"))}}],bt=new U["a"]({routes:mt}),pt=bt,_t=r("0ff2"),yt=r("f309"),Ct={disableCustomizer:!1,rtl:!1,verticalSidebarMini:!1,verticalSidebarDrawer:!0,verticalCompactSidebarDrawer:!0,verticalSaasSidebarDrawer:!0,showBreadcrumb:!0,layout:"VerticalSidebar",isLoading:!1,isDark:!1,verticalSidebarDrawerColor:"dark",appBarColor:"white"},gt={breakpoint:{scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},rtl:!1,theme:{dark:Ct.isDark,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:!0,minifyTheme:void 0,themeCache:void 0},themes:{light:{primary:"#D23F57",secondary:"#0F3460",success:"#33D067",danger:"#FF5353",warning:"#FFCD4E",info:"#5e5ce6",dark:"#242939",black:"#242939",background:"#f2f3f8",color:"#0F3460",grey:"#AEB4BE"},dark:{primary:"#D23F57 ",secondary:"#0F3460",success:"#33D067",danger:"#FF5353",warning:"#FFCD4E",info:"#5e5ce6",color:"#fff",grey:"#AEB4BE"}}}};s["a"].use(yt["a"]);var wt=new yt["a"]({theme:gt.theme,rtl:gt.rtl});s["a"].use(_t["a"]),s["a"].config.productionTip=!1,new s["a"]({store:K,router:pt,vuetify:wt,render:function(t){return t(O)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},"85ec":function(t,e,r){},9:function(t,e){}});
//# sourceMappingURL=app.5ebbc71a.js.map