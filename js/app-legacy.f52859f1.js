(function(){"use strict";var e={7621:function(e,t,n){n(5735),n(3439),n(3105),n(1515);var r=n(7392),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u=n(7396),a=n(763),c=n(1402),l=n(578),s=n(8375),f=(n(8625),n(8188),n(2215),n(7638)),d=function(e,t,n,r){var i,o=arguments.length,u=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,s.Z)(Reflect))&&"function"===typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(u=(o<3?i(u):o>3?i(t,n,u):i(t,n))||u);return o>3&&u&&Object.defineProperty(t,n,u),u},h=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n)}(f.w3);h=d([(0,f.wA)({})],h);var v=h,p=v,y=n(3483),m=(0,y.Z)(p,i,o,!1,null,null,null),g=m.exports,w=n(1655),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scroller",staticStyle:{overflow:"auto",height:"98vh"},on:{drop:function(t){return t.preventDefault(),e.onDrop.apply(null,arguments)},dragover:function(e){e.preventDefault()}}},[n("el-drawer",{attrs:{title:"我是标题",direction:"ltr",visible:e.drawer,"with-header":!1},on:{opened:e.onDrawOpen,closed:e.onDrawClose,"update:visible":function(t){e.drawer=t}}},[n("el-row",{staticStyle:{width:"100%"},attrs:{type:"flex"}},[n("el-col",{attrs:{span:12}},[n("el-menu",{staticStyle:{top:"0",position:"sticky",overflow:"hidden"}},e._l(e.bookManager.list,(function(t){return n("el-menu-item",{key:t.name,attrs:{index:t.name},on:{click:function(n){return e.onSelectFile(t)}}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),n("el-col",{attrs:{span:12}},[n("el-menu",{attrs:{"default-active":e.active},on:{"update:defaultActive":function(t){e.active=t},"update:default-active":function(t){e.active=t}}},e._l(e.menu,(function(t,r){return n("el-menu-item",{key:r,attrs:{index:String(r)},on:{click:function(n){return e.onSelectChapter(t.chapterInfo)}}},[e._v(" "+e._s(t.title)+" ")])})),1)],1)],1)],1),n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.onInfiLoad,expression:"onInfiLoad"}],attrs:{"infinite-scroll-distance":"200","infinite-scroll-disabled":"infDis"}},[n("div",{ref:"content",staticStyle:{margin:"auto",width:"80%"}},[n("div",e._l(e.content,(function(t,r){return n("p",{key:r},[e._v(" "+e._s(t)+" ")])})),0)])])],1)},b=[],Z=n(1994),k=n(8288),S=n(1304),R=n(964),I=(n(5566),n(9321),n(8673),n(6886),n(9805),n(6936),n(5388),n(2501),n(3675),n(4898),n(5825),n(7170),n(8857),n(8329),n(6279),n(427),n(1159),n(2516),n(4349),n(5273),n(6729),n(1801),n(574),n(5787),n(9271),n(3160),n(5688),n(3157),n(3333),n(315),n(8314),n(556),n(9224),n(6781),n(7368),n(4471),n(7950),n(1172),n(8233),n(8319),n(6920),n(8178),n(3450),n(7208),n(1245),n(4643)),O=n.n(I),_=function(e,t,n,r){var i,o=arguments.length,u=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,s.Z)(Reflect))&&"function"===typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(u=(o<3?i(u):o>3?i(t,n,u):i(t,n))||u);return o>3&&u&&Object.defineProperty(t,n,u),u},P=function(){function e(){(0,a.Z)(this,e),(0,R.Z)(this,"list",[]),(0,R.Z)(this,"cache",new Map)}return(0,u.Z)(e,[{key:"remove",value:function(e){this.list.splice(e,1)}},{key:"add",value:function(e){return this.list.push({file:e,name:e.name})}},{key:"readIndex",value:function(){var e=(0,S.Z)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.read(this.list[t].file);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"readWithCache",value:function(){var e=(0,S.Z)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.name+"_"+String(t.lastModified),r=this.cache.get(n),void 0!==r){e.next=7;break}return e.next=5,this.read(t);case 5:r=e.sent,this.cache.set(n,r);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"read",value:function(){var e=(0,S.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=new FileReader;r.readAsArrayBuffer(t),r.onload=function(){var t=r.result;if(t instanceof ArrayBuffer){var i=t.slice(0,t.byteLength>200?200:t.byteLength),o=O().detect(new Uint8Array(i));if(null===o)return n();var u=new FileReader;u.readAsText(new Blob([t]),o),u.onload=function(){if("string"!==typeof u.result)return n();e(u.result)},u.onerror=function(e){return n(e)}}},r.onerror=function(e){return n(e)}})));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),j=function(){function e(t){(0,a.Z)(this,e),(0,R.Z)(this,"txt",void 0),(0,R.Z)(this,"lineReg",void 0),this.txt=t;var n=["(^s*chapter.{0,6})|((☆、).{0,15})","(^s*第.+[章節卷回集节部篇].*$)","(卷s{0,3}[一二三四五六七八九零十百千○d]{1,9}.*$)","(第[一二三四五六七八九零十百千○d]{1,9}[章節卷回集节部篇]$)","(^[【[s]{0,4}(楔子)?(正文)?[】]s]{0,4}$)","(^[0-9]([.]?)(.*))"].join("|");this.txt=t,this.lineReg=new RegExp(n,"mgi")}return(0,u.Z)(e,[{key:"chapter",value:function(e){return this.txt.substring(e.from,e.to).split("\n")}},{key:"chapters",value:function(){var e=[],t=this.txt.matchAll(this.lineReg),n=(0,k.Z)(t);0===n.length?e.push({from:0,to:this.txt.length,title:"begin"}):n.length>0&&n[0].index&&0!==n[0].index&&e.push({from:0,to:n[0].index,title:"begin"});for(var r=0;r<n.length;r++){var i=n[r],o=i.index,u=this.txt.length;if(r!==n.length-1){var a=n[r+1];u=a.index}var c=i[0];if(void 0===o)return;if(void 0===u)return;e.push({from:o,to:u,title:c})}return e}}]),e}(),D=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,R.Z)((0,Z.Z)(e),"bookManager",new P),(0,R.Z)((0,Z.Z)(e),"contentProxy",[]),(0,R.Z)((0,Z.Z)(e),"contentIndex",0),(0,R.Z)((0,Z.Z)(e),"menu",[]),(0,R.Z)((0,Z.Z)(e),"source",null),(0,R.Z)((0,Z.Z)(e),"drawer",!0),(0,R.Z)((0,Z.Z)(e),"active","0"),(0,R.Z)((0,Z.Z)(e),"infDis",!1),e}return(0,u.Z)(n,[{key:"mounted",value:function(){this.initKeyBind()}},{key:"content",get:function(){return this.contentProxy.slice(0,this.contentIndex)},set:function(e){this.contentIndex=e.length,this.contentIndex>200&&(this.contentIndex=200,this.infDis=!1),this.contentProxy=e}},{key:"onDrawOpen",value:function(){this.$nextTick((function(){var e=document.querySelectorAll(".el-menu-item.is-active").item(1);console.log(e),null===e||void 0===e||e.scrollIntoView({block:"center"})}))}},{key:"onDrawClose",value:function(){var e,t=this;setTimeout((function(){t.$nextTick((function(){var e=t.$refs.content;console.log(e),e.focus({preventScroll:!1})}))}),2e3);var n=null===(e=this.$refs)||void 0===e?void 0:e.scroller;this.$nextTick((function(){n.focus()}))}},{key:"onInfiLoad",value:function(){this.contentIndex+=200,this.contentProxy.length<this.contentIndex&&(this.contentIndex=this.contentProxy.length,this.infDis=!0)}},{key:"onSelectFile",value:function(){var e=(0,S.Z)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,this.bookManager.readWithCache(t.file);case 3:if(e.t1=e.sent,this.source=new e.t0(e.t1),n=this.source.chapters(),void 0!==n){e.next=8;break}return e.abrupt("return");case 8:this.menu=n.map((function(e){return{title:e.title,chapterInfo:e}})),this.onSelectChapter(this.menu[0].chapterInfo);case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"selectChapterByIndex",value:function(e){if(e>=0&&e<this.menu.length){var t=this.menu[e].chapterInfo;this.active=String(e),this.onSelectChapter(t)}}},{key:"onSelectChapter",value:function(e){var t;if(null!==this.source){this.content=this.source.chapter(e);var n=null===(t=this.$refs)||void 0===t?void 0:t.scroller;"function"===typeof(null===n||void 0===n?void 0:n.scrollTo)&&n.scrollTo(0,0)}}},{key:"onDrop",value:function(e){var t;console.log(e);var n=null===(t=e.dataTransfer)||void 0===t?void 0:t.files;if(void 0!==n){for(var r=0,i=0;i<n.length;i++){var o=n[i];r=this.bookManager.add(o)}this.onSelectFile(this.bookManager.list[r-1])}}},{key:"initKeyBind",value:function(){var e=this;window.onkeydown=function(t){"Space"===t.code&&t.shiftKey&&t.ctrlKey||"ArrowLeft"===t.code||"KeyA"===t.code||"Numpad4"===t.code?e.selectChapterByIndex(Number.parseInt(e.active)-1):"Space"===t.code&&t.ctrlKey||"ArrowRight"===t.code||"KeyD"===t.code||"Numpad6"===t.code?e.selectChapterByIndex(Number.parseInt(e.active)+1):"KeyT"===t.code&&(e.drawer=!e.drawer)}}}]),n}(f.w3);D=_([(0,f.wA)({components:{}})],D);var A=D,T=A,C=(0,y.Z)(T,x,b,!1,null,null,null),$=C.exports;r["default"].use(w.Z);var M=[{path:"/",name:"home",component:$}],B=new w.Z({mode:"history",base:"/",routes:M}),K=B,F=n(622);r["default"].use(F.ZP);var L=new F.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),N=n(6623),E=n.n(N);r["default"].use(E()),r["default"].config.productionTip=!1,new r["default"]({router:K,store:L,render:function(e){return e(g)}}).$mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],i=e[s][1],o=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||u>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,o<u&&(u=o));if(a){e.splice(s--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,u=r[0],a=r[1],c=r[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(c)var s=c(n)}for(t&&t(r);l<u.length;l++)o=u[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self["webpackChunktxtreader"]=self["webpackChunktxtreader"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7621)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.f52859f1.js.map