(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("56d7")},"080f":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a});n("aef6"),n("f559"),n("ac6a");var r,i=n("7618");function o(t){if(t&&"object"===Object(i["a"])(t)){if(t.__INIT__)return!0;Object.defineProperty(t,"__INIT__",{value:!0})}return t}r=fetch;var a={get:function(t){if(!t.startsWith("/data"))throw new Error("request not startsWith /data is not supported.");var e="object"===("undefined"===typeof location?"undefined":Object(i["a"])(location))?location.origin:"http://localhost:8888";return r(e+t).then(function(e){return t.endsWith(".json")?e.json():e.text()})}}},5050:function(t,e,n){},5698:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("ac6a"),n("5df3");var r=n("7618"),i=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header",{attrs:{"navs-list":t.navs}}),n("main",{style:"margin-top: "+t.marginTop+"px"},[n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[n("ul",{staticClass:"nav-list"},[t._l(t.navsList,function(e){return n("li",{key:e.title+e.path},[n("router-link",{staticClass:"a-link",attrs:{to:e.path||e.to,exact:!!e.exact},domProps:{innerHTML:t._s(e.title)}})],1)}),n("li",[n("a",{attrs:{href:"https://github.com/lovetingyuan/lovetingyuan.github.io",target:"_blank",rel:"noopener noreferrer",title:"github"}},[n("svg",{attrs:{width:"20",height:"20"}},[n("use",{attrs:{"xlink:href":"#github"}})])])])],2)])])},c=[],u={props:{navsList:Array}},l=u,f=(n("bf4b"),n("2877")),h=Object(f["a"])(l,s,c,!1,null,"dd8eb462",null),d=h.exports,p={components:{AppHeader:d},data:function(){return{marginTop:0,navs:[{title:'<svg width="20" height="20"><use xlink:href="#home" /></svg>',path:"/",exact:!0},{title:"博客 📄",path:"/blog"},{title:"音乐 🎵",to:{path:"/music"}},{title:"电影 🎬",path:"/movie"},{title:"远方 🛤",path:"/spirit"}]}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){var e=document.querySelector("header").clientHeight;t.marginTop=e})}},v=p,b=(n("f22e"),n("94fb"),Object(f["a"])(v,o,a,!1,null,null,null)),g=b.exports,m=n("9483");"object"===("undefined"===typeof window?"undefined":Object(r["a"])(window))&&window.document&&Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var w=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("一些有用的链接")]),n("ul",{staticClass:"links"},t._l(t.homeLinks,function(e){return n("li",{key:e.url},[n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.name))])])}),0),n("h2",[t._v("Github好的项目")]),n("ul",{staticClass:"github-cats"},t._l(t.githubLinks,function(e,r){return n("li",{key:r,staticClass:"github-cat"},[n("details",[n("summary",[t._v(t._s(r))]),n("ul",{staticClass:"github-links"},t._l(e,function(e){return n("li",{key:e.name,staticClass:"github-link"},[n("a",{attrs:{href:e.url||e.git,rel:"noopener noreferrer",target:"_blank"}},[t._v(t._s(e.name))]),t._v("  \n            "),n("a",{staticClass:"github-logo",attrs:{href:e.git,rel:"noopener noreferrer",target:"_blank",title:"github"}},[n("svg",{attrs:{width:"18",height:"18"}},[n("use",{attrs:{"xlink:href":"#github"}})])]),n("p",[t._v(t._s(e.description))])])}),0)])])}),0)])},k=[],y={asyncData:function(t){return t.$fetchLinks("/data/home.json")},computed:{homeLinks:function(){return this.$store.links},githubLinks:function(){return this.$store.githubs}}},j=y,$=(n("a989"),Object(f["a"])(j,_,k,!1,null,"7c03be78",null)),x=$.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page404"},[n("h1",[t._v("Page Not Found")]),n("p",[t._v("\n    抱歉，您请求的页面不存在，"),n("br"),t._v("在此返回\n    "),n("router-link",{attrs:{to:"/",replace:""}},[n("span",{staticClass:"home-link"},[t._v("\n        首页\n      ")])])],1),n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"320",viewBox:"0 0 512 512",width:"320"}},[n("path",{attrs:{d:"M512 128l-256-21.333L245.333 288 256 473.667h256z",fill:"#9ccefd"}}),n("path",{attrs:{d:"M0 128v345.667h256v-367z",fill:"#c4e2fe"}}),n("path",{attrs:{d:"M189.347 305.605h-16.545v21.317h-30.704v-21.317H83.236v-20.522l49.954-69.521h32.613l-45.34 65.067h22.59v-18.931h29.75v18.931h16.545v24.976z",fill:"#fc5b3f"}}),n("path",{attrs:{d:"M428.764 305.605h-16.545v21.317h-30.704v-21.317h-58.863v-20.522l49.954-69.521h32.613l-45.34 65.067h22.59v-18.931h29.75v18.931h16.545z",fill:"#fc3636"}}),n("path",{attrs:{d:"M512 38.333H256l-21.333 36.333L256 128h256z",fill:"#efe2dd"}}),n("path",{attrs:{d:"M89.666 38.333l-14.999 47L89.666 128H256V38.333z",fill:"#f7f0eb"}}),n("path",{attrs:{d:"M89.666 128H0V38.333h89.666z",fill:"#fc5b3f"}}),n("path",{attrs:{d:"M303.408 271.241c0-36.055-19.913-57.089-47.408-57.871L245.333 224 256 239.188c9.196.906 15.75 9.925 15.75 32.054 0 22.128-6.554 31.147-15.75 32.053l-10.667 6.039L256 329.112c27.495-.782 47.408-21.815 47.408-57.871z",fill:"#fc3636"}}),n("path",{attrs:{d:"M254.409 303.377c-10.182 0-17.5-8.75-17.5-32.136s7.318-32.136 17.5-32.136c.539 0 1.068.031 1.591.082V213.37c-.529-.015-1.056-.037-1.591-.037-28.477 0-49.158 21.159-49.158 57.908 0 36.75 20.681 57.908 49.158 57.908.535 0 1.061-.022 1.591-.037v-25.817c-.523.051-1.052.082-1.591.082z",fill:"#fc5b3f"}}),n("path",{attrs:{d:"M341.333 358.333H256l-10.667 15 10.667 15h85.333z",fill:"#f7f0eb"}}),n("path",{attrs:{d:"M170.666 358.333H256v30h-85.334z",fill:"#fffbf5"}})])])])},M=[],O=(n("57a5"),{}),T=Object(f["a"])(O,L,M,!1,null,"8befbcea",null),C=T.exports;i["a"].use(w["a"]);var z=function(){return{path:"*",component:C}},E=function(){var t=new w["a"]({mode:"history",base:"/",routes:[{path:"/",component:x,beforeEnter:function(t,e,n){t.query.redirect?n({path:t.query.redirect,replace:!0}):n()}},{path:"/index.html",redirect:"/"},{path:"/blog/:tag?/:name?",component:function(){return n.e("async-blog").then(n.bind(null,"fd3f"))}},{path:"/music",component:function(){return n.e("async-music").then(n.bind(null,"5125"))}},{path:"/movie",component:function(){return n.e("async-movie").then(n.bind(null,"def6"))}},{path:"/spirit",component:function(){return n.e("async-spirit").then(n.bind(null,"f19d"))}},z()]});return t},I=n("193e"),A=(n("96cf"),n("3b8d")),H=n("768b"),N=n("080f"),D={links:Object(N["a"])([]),githubs:Object(N["a"])([]),set:function(t){var e=Object(H["a"])(t,2),n=e[0],r=e[1];this[n]=r},$showDialog:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=document.getElementById("dialog");t?e.showModal():e.close()},$fetchLinks:function(){var t=Object(A["a"])(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!Object(N["a"])(this.links)){t.next=8;break}return t.next=3,N["b"].get("/data/home.json");case 3:e=t.sent,n=e.links,r=e.githubs,this.set(["links",n]),this.set(["githubs",r]);case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()};function R(){var t=I["a"].createStore(D,{strict:!1});return t}i["a"].use(I["a"]),i["a"].config.productionTip=!1,i["a"].mixin({beforeMount:function(){var t=this.$options.asyncData;t&&(this.asyncDataPromise=t(this.$store,this.$route))},mounted:function(){var t=i["a"].component("RouterLink");if(this.constructor===t&&this.$el&&this.$router&&this.to){var e=this.$router.resolve(this.to).resolved.path;this.$el.title||(this.$el.title=e)}},beforeRouteUpdate:function(t,e,n){var r=this.$options.asyncData;r?r(this.$store,t).then(n).catch(n):n()}});var S=function(){return new i["a"]({render:function(t){return t(g)},router:E(),store:R()})};if("object"===("undefined"===typeof window?"undefined":Object(r["a"])(window))&&window.document){var P=S();window.__INITIAL_STATE__&&P.$store.replaceState(window.__INITIAL_STATE__),P.$router.onReady(function(){P.$mount("#app")})}e["default"]=function(t){var e=S(),n=e.$options,r=n.store,i=n.router;i.push(t.url);var o=new function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})},a=o.promise,s=o.reject,c=o.resolve;return i.onReady(function(){var n=i.getMatchedComponents();Promise.all(n.filter(function(t){return t.asyncData}).map(function(t){return t.asyncData(r,i.currentRoute)})).then(function(){t.state=r.getState(),c(e)}).catch(s)},s),i.onError(s),a}},"57a5":function(t,e,n){"use strict";var r=n("ebd2"),i=n.n(r);i.a},"5b27":function(t,e,n){},"94fb":function(t,e,n){"use strict";var r=n("5698"),i=n.n(r);i.a},"9e6a":function(t,e,n){},a989:function(t,e,n){"use strict";var r=n("5b27"),i=n.n(r);i.a},bf4b:function(t,e,n){"use strict";var r=n("9e6a"),i=n.n(r);i.a},ebd2:function(t,e,n){},f22e:function(t,e,n){"use strict";var r=n("5050"),i=n.n(r);i.a}},[[0,"manifest","chunk-vendors"]]]);