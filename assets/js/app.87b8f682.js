(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("56d7")},"080f":function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o});n("ac6a");function s(t){if(t&&"object"===typeof t){if(t.__INIT__)return!0;Object.defineProperty(t,"__INIT__",{value:!0})}return t}let a;a=fetch;const o={get(t){if(!t.startsWith("/data"))throw new Error("request not startsWith /data is not supported.");{const e="object"===typeof location?location.origin:"http://localhost:8888";return a(e+t).then(e=>{return t.endsWith(".json")?e.json():e.text()})}}}},"20c5":function(t,e,n){t.exports=n.p+"assets/img/github-mark.ef7a02b6.png"},"3db1":function(t,e,n){},"3db6":function(t,e,n){},5050:function(t,e,n){},5698:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("ac6a");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header",{attrs:{"navs-list":t.navs}}),n("main",{style:"margin-top: "+t.marginTop+"px"},[n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[n("ul",{staticClass:"nav-list"},[t._l(t.navsList,function(e){return n("li",{key:e.title+e.path},[n("router-link",{staticClass:"a-link",attrs:{to:e.path||e.to,exact:!!e.exact}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)}),t._m(0)],2)])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"https://github.com/lovetingyuan/lovetingyuan.github.io",target:"_blank",rel:"noopener",title:"github"}},[s("img",{staticStyle:{"vertical-align":"top"},attrs:{src:n("20c5"),alt:"github",width:"22"}})])])}],c={props:{navsList:Array}},l=c,u=(n("7045"),n("2877")),h=Object(u["a"])(l,i,r,!1,null,"c1ff7442",null),f=h.exports,p={components:{AppHeader:f},data(){return{marginTop:0,navs:[{title:"首页",path:"/",exact:!0},{title:"博客",path:"/blog"},{title:"音乐",to:{path:"/music"}},{title:"电影",path:"/movie"},{title:"远方",path:"/spirit"}]}},created(){},mounted(){this.$nextTick(()=>{const t=document.querySelector("header").clientHeight;this.marginTop=t})}},d=p,b=(n("f22e"),n("94fb"),Object(u["a"])(d,a,o,!1,null,null,null)),v=b.exports,m=n("9483");"object"===typeof window&&window.document&&Object(m["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var g=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("一些有用的链接")]),n("ul",{staticClass:"links"},t._l(t.homeLinks,function(e){return n("li",{key:e.url},[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))])])}),0),n("h2",[t._v("Github好的项目")]),n("ul",{staticClass:"github-cats"},t._l(t.githubLinks,function(e,s){return n("li",{key:s,staticClass:"github-cat"},[n("details",[n("summary",[t._v(t._s(s))]),n("ul",{staticClass:"github-links"},t._l(e,function(e){return n("li",{key:e.name,staticClass:"github-link"},[n("a",{attrs:{href:e.url||e.git,rel:"noopener",target:"_blank"}},[t._v(t._s(e.name))]),t._v("  \n            "),n("a",{staticClass:"github-logo",attrs:{href:e.git,rel:"noopener",target:"_blank",title:"github"}}),n("p",[t._v(t._s(e.description))])])}),0)])])}),0)])},w=[],k={asyncData(t){return t.$fetchLinks("/data/home.json")},computed:{homeLinks(){return this.$store.links},githubLinks(){return this.$store.githubs}}},y=k,$=(n("a76b"),Object(u["a"])(y,_,w,!1,null,"55d60363",null)),j=$.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page404"},[n("h1",[t._v("Page Not Found")]),n("p",[t._v("\n    抱歉，您请求的页面不存在，"),n("br"),t._v("在此返回\n    "),n("router-link",{attrs:{to:"/",replace:""}},[n("span",{staticClass:"home-link"},[t._v("\n        首页\n      ")])])],1),n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"Capa_1","enable-background":"new 0 0 512 512",height:"320",viewBox:"0 0 512 512",width:"320"}},[n("path",{attrs:{d:"m512 128-256-21.333-10.667 181.333 10.667 185.667h256z",fill:"#9ccefd"}}),n("path",{attrs:{d:"m0 128v345.667h256v-367z",fill:"#c4e2fe"}}),n("path",{attrs:{d:"m189.347 305.605h-16.545v21.317h-30.704v-21.317h-58.862v-20.522l49.954-69.521h32.613l-45.34 65.067h22.59v-18.931h29.75v18.931h16.545v24.976z",fill:"#fc5b3f"}}),n("path",{attrs:{d:"m428.764 305.605h-16.545v21.317h-30.704v-21.317h-58.863v-20.522l49.954-69.521h32.613l-45.34 65.067h22.59v-18.931h29.75v18.931h16.545z",fill:"#fc3636"}}),n("path",{attrs:{d:"m512 38.333h-256l-21.333 36.333 21.333 53.334h256z",fill:"#efe2dd"}}),n("path",{attrs:{d:"m89.666 38.333-14.999 47 14.999 42.667h166.334v-89.667z",fill:"#f7f0eb"}}),n("path",{attrs:{d:"m89.666 128h-89.666v-89.667h89.666z",fill:"#fc5b3f"}}),n("path",{attrs:{d:"m303.408 271.241c0-36.055-19.913-57.089-47.408-57.871l-10.667 10.63 10.667 15.188c9.196.906 15.75 9.925 15.75 32.054 0 22.128-6.554 31.147-15.75 32.053l-10.667 6.039 10.667 19.778c27.495-.782 47.408-21.815 47.408-57.871z",fill:"#fc3636"}}),n("path",{attrs:{d:"m254.409 303.377c-10.182 0-17.5-8.75-17.5-32.136s7.318-32.136 17.5-32.136c.539 0 1.068.031 1.591.082v-25.817c-.529-.015-1.056-.037-1.591-.037-28.477 0-49.158 21.159-49.158 57.908 0 36.75 20.681 57.908 49.158 57.908.535 0 1.061-.022 1.591-.037v-25.817c-.523.051-1.052.082-1.591.082z",fill:"#fc5b3f"}}),n("path",{attrs:{d:"m341.333 358.333h-85.333l-10.667 15 10.667 15h85.333z",fill:"#f7f0eb"}}),n("path",{attrs:{d:"m170.666 358.333h85.334v30h-85.334z",fill:"#fffbf5"}})])])])},C=[],T=(n("67a7"),{}),E=Object(u["a"])(T,x,C,!1,null,"8f2fc636",null),z=E.exports;s["a"].use(g["a"]);const I=()=>({path:"*",component:z});var L=()=>{const t=new g["a"]({mode:"history",base:"/",routes:[{path:"/",component:j,beforeEnter(t,e,n){t.query.redirect?n({path:t.query.redirect,replace:!0}):n()}},{path:"/blog/:tag?/:name?",component:()=>n.e("async-blog").then(n.bind(null,"fd3f"))},{path:"/music",component:()=>n.e("async-music").then(n.bind(null,"5125"))},{path:"/movie",component:()=>n.e("async-movie").then(n.bind(null,"def6"))},{path:"/spirit",component:()=>n.e("async-story").then(n.bind(null,"095a"))},I()]});return t},O=n("bce8"),A=n("1da1"),N=n("3835"),S=n("080f"),D={links:Object(S["a"])([]),githubs:Object(S["a"])([]),set(t){let e=Object(N["a"])(t,2),n=e[0],s=e[1];this[n]=s},$showDialog(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];const e=document.getElementById("dialog");t?e.showModal():e.close()},$fetchLinks(){var t=this;return Object(A["a"])(function*(){if(Object(S["a"])(t.links)){const e=yield S["b"].get("/data/home.json"),n=e.links,s=e.githubs;t.set(["links",n]),t.set(["githubs",s])}})()}};function q(){const t=O["a"].createStore(D,{strict:!1});return t}s["a"].use(O["a"]),s["a"].config.productionTip=!1,s["a"].mixin({beforeMount(){const t=this.$options.asyncData;t&&(this.asyncDataPromise=t(this.$store,this.$route))},mounted(){const t=s["a"].component("RouterLink");if(this.constructor===t&&this.$el&&this.$router&&this.to){const t=this.$router.resolve(this.to).resolved.path;this.$el.title||(this.$el.title=t)}},beforeRouteUpdate(t,e,n){const s=this.$options.asyncData;s?s(this.$store,t).then(n).catch(n):n()}});const P=()=>{return new s["a"]({render:t=>t(v),router:L(),store:q()})};if("object"===typeof window&&window.document){const t=P();window.__INITIAL_STATE__&&t.$store.replaceState(window.__INITIAL_STATE__),t.$router.onReady(()=>{t.$mount("#app")})}e["default"]=t=>{const e=P(),n=e.$options,s=n.store,a=n.router;a.push(t.url);const o=new function(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})},i=o.promise,r=o.reject,c=o.resolve;return a.onReady(()=>{const n=a.getMatchedComponents();Promise.all(n.filter(t=>t.asyncData).map(t=>{return t.asyncData(s,a.currentRoute)})).then(()=>{t.state=s.getState(),c(e)}).catch(r)},r),a.onError(r),i}},"67a7":function(t,e,n){"use strict";var s=n("3db6"),a=n.n(s);a.a},7045:function(t,e,n){"use strict";var s=n("7b5e"),a=n.n(s);a.a},"7b5e":function(t,e,n){},"94fb":function(t,e,n){"use strict";var s=n("5698"),a=n.n(s);a.a},a76b:function(t,e,n){"use strict";var s=n("3db1"),a=n.n(s);a.a},f22e:function(t,e,n){"use strict";var s=n("5050"),a=n.n(s);a.a}},[[0,"manifest","chunk-vendors"]]]);