(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["async-music"],{"014d":function(t,e,s){},"30de":function(t,e,s){},"3d34":function(t,e,s){"use strict";var n=s("30de"),c=s.n(n);c.a},5125:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("喜欢的音乐")]),s("div",{staticClass:"music-list"},t._l(t.bestSongs,function(e){return s("music-item",t._b({key:e.name},"music-item",e,!1))}),1)])},c=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music-item",style:{backgroundImage:"url("+t.cover+")"}},[s("table",{staticClass:"music-info-table"},[s("tbody",[s("tr",[s("td",[t._v("歌曲名")]),s("td",[t._v("\n          "+t._s(t.name)+"\n        ")])]),s("tr",[s("td",[t._v("歌手")]),s("td",[t._v(t._s(t.singer))])]),s("tr",[s("td",[t._v("专辑")]),s("td",[t._v("《"+t._s(t.album)+"》"+t._s(t.year))])])])])])},a=[],r={props:{name:String,singer:String,album:String,year:Number,cover:String,link:String}},u=r,o=(s("fdac"),s("2877")),d=Object(o["a"])(u,i,a,!1,null,"c82ec17e",null),l=d.exports,b=s("1da1"),m=s("3835"),f=s("080f"),v={bestSongs:Object(f["a"])([]),set(t){let e=Object(m["a"])(t,2),s=e[0],n=e[1];this[s]=n},$fetchMusic(){var t=this;return Object(b["a"])(function*(){if(Object(f["a"])(t.bestSongs)){const e=yield f["b"].get("/data/music.json"),s=e.best;t.set(["bestSongs",s])}})()}},_={components:{MusicItem:l},asyncData(t){return t.addModule("Music",v),t.Music.$fetchMusic()},computed:{bestSongs(){return this.$store.Music.bestSongs}}},g=_,p=(s("3d34"),s("81de"),Object(o["a"])(g,n,c,!1,null,"7a28696e",null));e["default"]=p.exports},"81de":function(t,e,s){"use strict";var n=s("014d"),c=s.n(n);c.a},bee2:function(t,e,s){},fdac:function(t,e,s){"use strict";var n=s("bee2"),c=s.n(n);c.a}}]);