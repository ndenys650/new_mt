(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{2400:function(t,e,r){"use strict";r("f802")},2738:function(t,e,r){"use strict";r("2b75")},"2b75":function(t,e,r){},"5fed":function(t,e,r){},"62ad":function(t,e,r){"use strict";var i=r("ade3"),n=r("5530"),s=(r("a9e3"),r("b64b"),r("ac1f"),r("5319"),r("4ec9"),r("d3b7"),r("3ca3"),r("ddb0"),r("caad"),r("159b"),r("2ca0"),r("4b85"),r("2b0e")),c=r("d9f7"),o=r("80d2"),l=["sm","md","lg","xl"],a=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return l.reduce((function(t,e){return t["offset"+Object(o["r"])(e)]={type:[String,Number],default:null},t}),{})}(),v=function(){return l.reduce((function(t,e){return t["order"+Object(o["r"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(a),offset:Object.keys(u),order:Object.keys(v)};function _(t,e,r){var i=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");i+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(i+="-".concat(r),i.toLowerCase()):i.toLowerCase()}}var f=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({cols:{type:[Boolean,String,Number],default:!1}},a),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,n=e.data,s=e.children,o=(e.parent,"");for(var l in r)o+=String(r[l]);var a=f.get(o);return a||function(){var t,e;for(e in a=[],d)d[e].forEach((function(t){var i=r[t],n=_(e,t,i);n&&a.push(n)}));var n=a.some((function(t){return t.startsWith("col-")}));a.push((t={col:!n||!r.cols},Object(i["a"])(t,"col-".concat(r.cols),r.cols),Object(i["a"])(t,"offset-".concat(r.offset),r.offset),Object(i["a"])(t,"order-".concat(r.order),r.order),Object(i["a"])(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),f.set(o,a)}(),t(r.tag,Object(c["a"])(n,{class:a}),s)}})},"71c0":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("div",[r("h1",[t._v("This is the ETF's page")])]),r("v-container",[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("3 Minute Above Alerts")]),t._l(t.threeAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("3 Minute Below Alerts")]),t._l(t.threeBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("5 Minute Above Alerts")]),t._l(t.fiveAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("5 Minute Below Alerts")]),t._l(t.fiveBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("15 Minute Above Alerts")]),t._l(t.fifteenAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("15 Minute Below Alerts")]),t._l(t.fifteenBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("30 Above Alerts")]),t._l(t.thirtyAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)),r("br"),t._v("Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("30 Below Alerts")]),t._l(t.thirtyBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Hour Above Alerts")]),t._l(t.hourAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)),r("br"),t._v("Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Hour Below Alerts")]),t._l(t.hourBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Daily Above Alerts")]),t._l(t.dailyAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Daily Below Alerts")]),t._l(t.dailyBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},[r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")])])}))],2)],1)],1)],1)],1)},n=[],s=r("5530"),c=(r("4de4"),r("b64b"),r("caad"),r("2f62")),o={name:"Alerts",data:function(){return{menu:!1,time:{},tab:null,frames:[]}},components:{},updated:function(){},mounted:function(){},methods:{AboveAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["HourAbove"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["HourAbove"][r],e}),[]);return console.log(r),r}},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["timeframes"])),{},{threeAboveAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["3minAbove"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["3minAbove"][r],e}),{});return r},threeBelowAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["3minBelow"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["3minBelow"][r],e}),{});return r},fiveAboveAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["5minAbove"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["5minAbove"][r],e}),{});return r},fiveBelowAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["5minBelow"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["5minBelow"][r],e}),{});return r},fifteenAboveAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["15Above"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["15Above"][r],e}),{});return r},fifteenBelowAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["15Below"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["15Below"][r],e}),{});return r},thirtyAboveAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["30Above"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["30Above"][r],e}),{});return r},thirtyBelowAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["30Below"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["30Below"][r],e}),{});return r},hourAboveAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["HourAbove"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["HourAbove"][r],e}),{});return r},hourBelowAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["HourBelow"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["HourBelow"][r],e}),{});return r},dailyAboveAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["dailyAbove"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["dailyAbove"][r],e}),{});return r},dailyBelowAlertsFilter:function(){var t=this,e=["QQQ","SPY","VXX"],r=Object.keys(this.timeframes["dailyBelow"]).filter((function(t){return e.includes(t)})).reduce((function(e,r){return e[r]=t.timeframes["dailyBelow"][r],e}),{});return r}}),filters:{toCurrency:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return e.format(t)}}},l=o,a=(r("2738"),r("2877")),u=r("6544"),v=r.n(u),d=r("b0af"),_=r("99d9"),f=r("62ad"),m=r("a523"),A=r("0fd9"),b=Object(a["a"])(l,i,n,!1,null,"4eb48522",null);e["default"]=b.exports;v()(b,{VCard:d["a"],VCardText:_["a"],VCardTitle:_["b"],VCol:f["a"],VContainer:m["a"],VRow:A["a"]})},8226:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("div",[r("h1",[t._v("This is the Timeframes page")])]),r("v-tabs",{attrs:{"background-color":"primary",dark:"","center-active":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.timeframes,(function(e,i){return r("v-tab",{key:i},[t._v(" "+t._s(i)+" ")])})),1),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.timeframes,(function(e,i){return r("v-tab-item",{key:i},[r("v-row",{attrs:{dense:""}},t._l(e,(function(e,i){return r("v-col",{key:i,attrs:{cols:"12",lg:"3",sm:"6",md:"4",xs:"12"}},[r("v-card",[r("v-card-title",[t._v(t._s(e.id)+": "),r("br"),t._v(t._s(e.Location))]),r("v-card-text",[r("v-row",{staticClass:"mx-5",attrs:{align:"center"}},[0!=e.Alert?r("div",{staticClass:"primary white--text text-subtitle-1"},[t._v(" Alert: "+t._s(e.Alert)+" ")]):t._e()]),r("div",{staticClass:"my-4 text-subtitle-1"},[t._v(" RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" stochD: "+t._s(e.StochD)+" ")]),r("div",{staticClass:"my-4 text-subtitle-1"},[t._v(" Price: "+t._s(e.Price)+" ")]),""!=e.Pattern?r("div",{staticClass:"my-4 text-subtitle-1"},[t._v(" Pattern: "+t._s(e.Pattern)+" ")]):t._e()],1)],1)],1)})),1)],1)})),1)],1)},n=[],s=r("5530"),c=r("2f62"),o={name:"Timeframes",data:function(){return{menu:!1,time:{},tab:null}},components:{},created:function(){},computed:Object(s["a"])({},Object(c["b"])(["timeframes"])),methods:{timeframeSent:function(t){this.time=t}}},l=o,a=r("2877"),u=r("6544"),v=r.n(u),d=r("b0af"),_=r("99d9"),f=r("62ad"),m=r("0fd9"),A=r("71a3"),b=r("9d65"),h=r("4e82"),S=r("c3f0"),w=r("80d2"),y=r("58df"),R=Object(y["a"])(b["a"],Object(h["a"])("windowGroup","v-window-item","v-window")),x=R.extend().extend().extend({name:"v-window-item",directives:{Touch:S["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(w["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(w["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),p=x.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=x.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),O=r("fe57"),C=r("aac8"),g=Object(a["a"])(l,i,n,!1,null,null,null);e["default"]=g.exports;v()(g,{VCard:d["a"],VCardText:_["a"],VCardTitle:_["b"],VCol:f["a"],VRow:m["a"],VTab:A["a"],VTabItem:p,VTabs:O["a"],VTabsItems:C["a"]})},9413:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("div",[r("h1",[t._v("This is the Alerts page")])]),r("v-container",[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("3 Minute Above Alerts")]),t._l(t.threeAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG LONG ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("3 Minute Below Alerts")]),t._l(t.threeBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG SHORT ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("5 Minute Above Alerts")]),t._l(t.fiveAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG LONG ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("5 Minute Below Alerts")]),t._l(t.fiveBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG SHORT ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("15 Minute Above Alerts")]),t._l(t.fifteenAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG LONG ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("15 Minute Below Alerts")]),t._l(t.fifteenBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG SHORT ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("30 Above Alerts")]),t._l(t.thirtyAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG LONG ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("30 Below Alerts")]),t._l(t.thirtyBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG SHORT ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Hour Above Alerts")]),t._l(t.hourAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG LONG ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Hour Below Alerts")]),t._l(t.hourBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG SHORT ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Daily Above Alerts")]),t._l(t.dailyAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG LONG ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Daily Below Alerts")]),t._l(t.dailyBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["STRONG SHORT ENTRY"==e.Alert?r("div",{staticClass:"primary white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1)],1)],1)],1)},n=[],s=r("5530"),c=(r("4fad"),r("4de4"),r("d81d"),r("2f62")),o={name:"Alerts",data:function(){return{menu:!1,time:{},tab:null}},components:{},updated:function(){},methods:{},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["timeframes"])),{},{threeAboveAlertsFilter:function(){var t=Object.entries(this.timeframes["3minAbove"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG LONG ENTRY"==t.Alert}));return e},threeBelowAlertsFilter:function(){var t=Object.entries(this.timeframes["3minBelow"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG SHORT ENTRY"==t.Alert}));return e},fiveAboveAlertsFilter:function(){var t=Object.entries(this.timeframes["5minAbove"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG LONG ENTRY"==t.Alert}));return e},fiveBelowAlertsFilter:function(){var t=Object.entries(this.timeframes["5minBelow"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG SHORT ENTRY"==t.Alert}));return e},fifteenAboveAlertsFilter:function(){var t=Object.entries(this.timeframes["15Above"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG LONG ENTRY"==t.Alert}));return e},fifteenBelowAlertsFilter:function(){var t=Object.entries(this.timeframes["15Below"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG SHORT ENTRY"==t.Alert}));return e},thirtyAboveAlertsFilter:function(){var t=Object.entries(this.timeframes["30Above"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG LONG ENTRY"==t.Alert}));return e},thirtyBelowAlertsFilter:function(){var t=Object.entries(this.timeframes["30Below"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG SHORT ENTRY"==t.Alert}));return e},hourAboveAlertsFilter:function(){var t=Object.entries(this.timeframes["HourAbove"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG LONG ENTRY"==t.Alert}));return e},hourBelowAlertsFilter:function(){var t=Object.entries(this.timeframes["HourBelow"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG SHORT ENTRY"==t.Alert}));return e},dailyAboveAlertsFilter:function(){var t=Object.entries(this.timeframes["dailyAbove"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG LONG ENTRY"==t.Alert}));return e},dailyBelowAlertsFilter:function(){var t=Object.entries(this.timeframes["dailyBelow"]),e=t.map((function(t){return t[1]})).filter((function(t){return"STRONG SHORT ENTRY"==t.Alert}));return e}}),filters:{toCurrency:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return e.format(t)}}},l=o,a=(r("a88f"),r("2877")),u=r("6544"),v=r.n(u),d=r("b0af"),_=r("99d9"),f=r("62ad"),m=r("a523"),A=r("0fd9"),b=Object(a["a"])(l,i,n,!1,null,"d1c46a56",null);e["default"]=b.exports;v()(b,{VCard:d["a"],VCardText:_["a"],VCardTitle:_["b"],VCol:f["a"],VContainer:m["a"],VRow:A["a"]})},9634:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("div",[r("h1",[t._v("This is the Trends page")])]),r("v-container",[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("3 Minute Above Alerts")]),t._l(t.fiveAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Uptrend"==e.Alert?r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("3 Minute Below Alerts")]),t._l(t.fiveBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Downtrend"==e.Alert?r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("5 Minute Above Alerts")]),t._l(t.fiveAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Uptrend"==e.Alert?r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("5 Minute Below Alerts")]),t._l(t.fiveBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Downtrend"==e.Alert?r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("15 Minute Above Alerts")]),t._l(t.fifteenAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Uptrend"==e.Alert?r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("15 Minute Below Alerts")]),t._l(t.fifteenBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Downtrend"==e.Alert?r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("30 Above Alerts")]),t._l(t.fifteenAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Uptrend"==e.Alert?r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("30 Below Alerts")]),t._l(t.fifteenBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Downtrend"==e.Alert?r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Hour Above Alerts")]),t._l(t.hourAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Uptrend"==e.Alert?r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Hour Below Alerts")]),t._l(t.hourBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Downtrend"==e.Alert?r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Daily Above Alerts")]),t._l(t.dailyAboveAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Uptrend"==e.Alert?r("div",{staticClass:"green white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1),r("v-col",{attrs:{cols:"12",lg:"3",sm:"3",md:"3",xs:"12"}},[r("v-card",[r("v-card-title",[t._v("Daily Below Alerts")]),t._l(t.dailyBelowAlertsFilter,(function(e,i){return r("v-card-text",{key:i},["Strong Downtrend"==e.Alert?r("div",{staticClass:"red white--text"},[t._v(" Stock: "+t._s(e.id)+" Alert: "+t._s(e.Alert)),r("br"),t._v("Price: "+t._s(t._f("toCurrency")(e.Price))),r("br"),t._v("RSI: "+t._s(e.RSI)+" stochK: "+t._s(e.StochK)+" ")]):t._e()])}))],2)],1)],1)],1)],1)},n=[],s=r("5530"),c=(r("4fad"),r("4de4"),r("d81d"),r("2f62")),o={name:"Alerts",data:function(){return{menu:!1,time:{},tab:null}},components:{},updated:function(){},methods:{},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["timeframes"])),{},{fiveAboveAlertsFilter:function(){var t=Object.entries(this.timeframes["5minAbove"]),e=t.map((function(t){return t[1]})).filter((function(t){return"Strong Uptrend"==t.Alert}));return e},fiveBelowAlertsFilter:function(){var t=Object.entries(this.timeframes["5minBelow"]),e=t.map((function(t){return t[1]})).filter((function(t){return"Strong Downtrend"==t.Alert}));return e},fifteenAboveAlertsFilter:function(){var t=Object.entries(this.timeframes["15Above"]),e=t.map((function(t){return t[1]})).filter((function(t){return"Strong Uptrend"==t.Alert}));return e},fifteenBelowAlertsFilter:function(){var t=Object.entries(this.timeframes["15Below"]),e=t.map((function(t){return t[1]})).filter((function(t){return"Strong Downtrend"==t.Alert}));return e},hourAboveAlertsFilter:function(){var t=Object.entries(this.timeframes["HourAbove"]),e=t.map((function(t){return t[1]})).filter((function(t){return"Strong Uptrend"==t.Alert}));return e},hourBelowAlertsFilter:function(){var t=Object.entries(this.timeframes["HourBelow"]),e=t.map((function(t){return t[1]})).filter((function(t){return"Strong Downtrend"==t.Alert}));return e},dailyAboveAlertsFilter:function(){var t=Object.entries(this.timeframes["dailyAbove"]),e=t.map((function(t){return t[1]})).filter((function(t){return"Strong Uptrend"==t.Alert}));return e},dailyBelowAlertsFilter:function(){var t=Object.entries(this.timeframes["dailyBelow"]),e=t.map((function(t){return t[1]})).filter((function(t){return"Strong Downtrend"==t.Alert}));return e}}),filters:{toCurrency:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return e.format(t)}}},l=o,a=(r("2400"),r("2877")),u=r("6544"),v=r.n(u),d=r("b0af"),_=r("99d9"),f=r("62ad"),m=r("a523"),A=r("0fd9"),b=Object(a["a"])(l,i,n,!1,null,"e8252aca",null);e["default"]=b.exports;v()(b,{VCard:d["a"],VCardText:_["a"],VCardTitle:_["b"],VCol:f["a"],VContainer:m["a"],VRow:A["a"]})},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l}));var i=r("b0af"),n=r("80d2"),s=Object(n["g"])("v-card__actions"),c=Object(n["g"])("v-card__subtitle"),o=Object(n["g"])("v-card__text"),l=Object(n["g"])("v-card__title");i["a"]},a88f:function(t,e,r){"use strict";r("5fed")},f802:function(t,e,r){}}]);
//# sourceMappingURL=about.1b15ecfb.js.map