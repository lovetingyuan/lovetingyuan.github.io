(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["async-movie"],{"0b38":function(t,e,r){},"11e9":function(t,e,r){var n=r("52a7"),i=r("4630"),o=r("6821"),a=r("6a99"),c=r("69a8"),s=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=o(t),e=a(e,!0),s)try{return u(t,e)}catch(r){}if(c(t,e))return i(!n.f.call(t,e),t[e])}},"3cde":function(t,e,r){"use strict";var n=r("a4d8"),i=r.n(n);i.a},4147:function(t,e,r){"use strict";var n=r("0b38"),i=r.n(n);i.a},"5dbc":function(t,e,r){var n=r("d3f4"),i=r("8b97").set;t.exports=function(t,e,r){var o,a=e.constructor;return a!==r&&"function"==typeof a&&(o=a.prototype)!==r.prototype&&n(o)&&i&&i(t,o),t}},"8b97":function(t,e,r){var n=r("d3f4"),i=r("cb7c"),o=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,r){return o(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:o}},9093:function(t,e,r){var n=r("ce10"),i=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},a4d8:function(t,e,r){},aa77:function(t,e,r){var n=r("5ca1"),i=r("be13"),o=r("79e5"),a=r("fdef"),c="["+a+"]",s="​",u=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,e,r){var i={},c=o(function(){return!!a[t]()||s[t]()!=s}),u=i[t]=c?e(p):a[t];r&&(i[r]=u),n(n.P+n.F*c,"String",i)},p=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},c5f6:function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),o=r("2d95"),a=r("5dbc"),c=r("6a99"),s=r("79e5"),u=r("9093").f,f=r("11e9").f,l=r("86cc").f,p=r("aa77").trim,v="Number",d=n[v],_=d,b=d.prototype,h=o(r("2aeb")(b))==v,g="trim"in String.prototype,m=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():p(e,3);var r,n,i,o=e.charCodeAt(0);if(43===o||45===o){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var a,s=e.slice(2),u=0,f=s.length;u<f;u++)if(a=s.charCodeAt(u),a<48||a>i)return NaN;return parseInt(s,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof d&&(h?s(function(){b.valueOf.call(r)}):o(r)!=v)?a(new _(m(e)),r,d):m(e)};for(var y,w=r("9e1e")?u(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)i(_,y=w[N])&&!i(d,y)&&l(d,y,f(_,y));d.prototype=b,b.constructor=d,r("2aba")(n,v,d)}},def6:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("喜欢的电影")]),r("div",{staticClass:"totoro"}),r("details",{staticClass:"ghibli-works",attrs:{open:""}},[t._m(0),r("div",{staticClass:"movie-list"},t._l(t.ghibli,function(e){return r("movie-item",t._b({key:e.name},"movie-item",e,!1))}),1)])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("summary",[t._v("\n      吉卜力    "),r("a",{attrs:{href:"http://www.ghibli.jp/works",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ghibli")])])}],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"movie-item"},[r("img",{attrs:{src:t.cover,alt:t.name}}),r("table",{staticClass:"movie-info-table"},[r("tbody",[r("tr",[r("td",[t._v("影片名称")]),r("td",[r("a",{attrs:{href:"https://www.imdb.com/title/"+t.imdb,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.name))]),t._v("\n          《"+t._s(t.origin_name)+"》\n        ")])]),r("tr",[r("td",[t._v("地区/年份")]),r("td",[t._v(t._s(t.country)+" ("+t._s(t.date)+")")])]),r("tr",[r("td",[t._v("导演")]),r("td",[t._v(t._s(t.director))])]),r("tr",[r("td",[t._v("制作单位")]),r("td",[t._v(t._s(t.producer))])]),r("tr",[r("td",[t._v("片长")]),r("td",[t._v(t._s(t.duration))])])])])])},a=[],c=(r("c5f6"),{props:{name:String,cover:String,imdb:String,origin_name:String,country:String,date:String,director:String,producer:String,duration:Number}}),s=c,u=(r("4147"),r("2877")),f=Object(u["a"])(s,o,a,!1,null,"1355e99e",null),l=f.exports,p=(r("96cf"),r("3b8d")),v=r("768b"),d=r("080f"),_={ghibli:Object(d["a"])([]),set:function(t){var e=Object(v["a"])(t,2),r=e[0],n=e[1];this[r]=n},$fetchMovies:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!Object(d["a"])(this.ghibli)){t.next=6;break}return t.next=3,d["b"].get("/data/movie.json");case 3:e=t.sent,r=e.ghibli,this.set(["ghibli",r]);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},b={components:{MovieItem:l},asyncData:function(t){return t.addModule("Movie",_),t.Movie.$fetchMovies()},computed:{ghibli:function(){return this.$store.Movie.ghibli}}},h=b,g=(r("3cde"),Object(u["a"])(h,n,i,!1,null,"abd29c40",null));e["default"]=g.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);