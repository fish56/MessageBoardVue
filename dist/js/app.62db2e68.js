(function(e){function t(t){for(var n,a,c=t[0],u=t[1],i=t[2],l=0,d=[];l<c.length;l++)a=c[l],r[a]&&d.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,a=1;a<s.length;a++){var c=s[a];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=s[0]))}return e}var n={},a={app:0},r={app:0},o=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c81fb812"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,u),s.l=!0,s.exports}u.e=function(e){var t=[],s={about:1};a[e]?t.push(a[e]):0!==a[e]&&s[e]&&t.push(a[e]=new Promise(function(t,s){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"986a09cb"}[e]+".css",r=u.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===n||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.request=n,delete a[e],f.parentNode.removeChild(f),s(o)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)}).then(function(){a[e]=0}));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,s){n=r[e]=[t,s]});t.push(n[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),i=function(t){l.onerror=l.onload=null,clearTimeout(d);var s=r[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,s[1](o)}r[e]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,s){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(u.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(s,n,function(t){return e[t]}.bind(null,n));return s},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="dist/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),a=s("24b4"),r=s.n(a),o=(s("202f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)}),c=[],u=(s("5c0b"),s("2877")),i={},l=Object(u["a"])(i,o,c,!1,null,null,null);l.options.__file="App.vue";var d=l.exports,f=s("8c4f"),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("todo list by vue")]),s("add-todo"),s("hr"),s("todo-list")],1)},j=[],p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-textarea",{staticClass:"title",attrs:{placeholder:"title",autosize:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),s("div",{staticStyle:{margin:"24px 0"}}),s("a-textarea",{staticClass:"content",attrs:{placeholder:"content",autosize:{minRows:2,maxRows:6}},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}}),s("div",{staticStyle:{margin:"12px 0"}}),s("a-button",{attrs:{type:"primary",block:""},on:{click:e.postIssue}},[e._v("提交任务")]),s("div",{staticStyle:{margin:"12px 0"}})],1)},h=[],m="17d3c6fb50c1ee8175aa628b6e53b31c050c02f3",v="https://api.github.com/repos/saltfish666/todo-list/issues",g={token:m,url:v},y=(g.token,g.url,{data(){return{title:"",body:""}},methods:{postIssue(){if(""===this.title)return null;this.$store.dispatch("postIssue",{title:this.title,body:this.body}),this.title="",this.body=""}}}),k=y,_=(s("9367"),Object(u["a"])(k,p,h,!1,null,"9f5e294e",null));_.options.__file="AddTodo.vue";var w=_.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-tabs",{attrs:{defaultActiveKey:"1"}},[s("a-tab-pane",{key:"1",attrs:{tab:"open"}},[s("a-collapse",e._l(e.$store.getters.open,function(t){return s("a-collapse-panel",{key:t.number,attrs:{header:t.title}},[s("p",[e._v(e._s(t.body))]),s("a-button",{attrs:{block:"","data-number":t.number},on:{click:function(t){e.changeState("closed",t)}}},[e._v("\n            close this issue")])],1)}),1)],1),s("a-tab-pane",{key:"2",attrs:{tab:"closed"}},[s("a-collapse",e._l(e.$store.getters.closed,function(t){return s("a-collapse-panel",{key:t.number,attrs:{header:t.title}},[s("p",[e._v(e._s(t.body))]),s("a-button",{attrs:{block:"","data-number":t.number},on:{click:function(t){e.changeState("open",t)}}},[e._v("reopen this issue")])],1)}),1)],1)],1)],1)},x=[],O=(g.token,g.url,{methods:{callback(e){console.log(e)},changeState:function(e,t){var s=t.target.dataset.number,n=JSON.stringify({state:e});this.$store.dispatch("patchIssue",{number:s,body:n})}},created(){console.log("TodoList.vue has created, and getting issues."),this.$store.dispatch("getIssues")}}),S=O,T=(s("84d6"),Object(u["a"])(S,z,x,!1,null,"bb9398a0",null));T.options.__file="TodoList.vue";var E=T.exports,I={name:"home",components:{"add-todo":w,"todo-list":E}},$=I,A=Object(u["a"])($,b,j,!1,null,null,null);A.options.__file="Home.vue";var N=A.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("This is an login page")])])}],C=(s("d6db"),{}),L=Object(u["a"])(C,P,q,!1,null,null,null);L.options.__file="Login.vue";var H=L.exports;n["default"].use(f["a"]);var M=new f["a"]({base:"dist/",routes:[{path:"/",name:"home",component:N},{path:"/login",component:H},{path:"/list",name:"about",component:()=>s.e("about").then(s.bind(null,"f820"))}]}),R=s("2f62"),J=g.token,B=g.url;function X(e){var t=new XMLHttpRequest;t.onload=(t=>{200!==t.target.status?console.error(t):(e.commit("initIssues",JSON.parse(t.target.responseText)),console.info("it is success to get issues from github"))}),t.open("GET",B+"?state=all"),t.setRequestHeader("Authorization","bearer "+J),t.send()}var D=g.token,U=g.url,F=function(e,t){var s=t.number,n=t.body,a=new XMLHttpRequest;a.onload=(t=>{200!==t.target.status?console.warn(t):(console.log("patch is successful",t),e.commit("editIssue",JSON.stringify(t.target.responseText)))}),a.open("PATCH",U+`/${s}`),a.setRequestHeader("Authorization","bearer "+D),a.send(n)},G=g.token,K=g.url,Q=function(e,t){var s=new XMLHttpRequest;s.onload=(t=>{201!==t.target.status?console.error("error in post issue",t):(console.log("success post issue",t),e.commit("addIssue",JSON.parse(t.target.responseText)))}),s.open("POST",K),s.setRequestHeader("Authorization","bearer "+G),s.send(JSON.stringify({title:t.title,body:t.body}))},V=function(e,t){e.issues.unshift(t)},W=(s("ac6a"),function(e,t){var s=[];e.issues.forEach((e,n)=>{e.number===t.number&&(e=t),s.push(e)}),e.issues=s}),Y=function(e,t){e.issues=t};n["default"].use(R["a"]);var Z=new R["a"].Store({state:{issues:[]},getters:{open(e,t){return e.issues.filter(e=>"open"===e.state)},closed(e,t){return e.issues.filter(e=>"closed"===e.state)}},mutations:{addIssue:V,editIssue:W,initIssues:Y},actions:{getIssues:X,patchIssue:F,postIssue:Q}});n["default"].use(r.a),n["default"].config.productionTip=!1,new n["default"]({router:M,store:Z,render:e=>e(d)}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("5e27"),a=s.n(n);a.a},"5e27":function(e,t,s){},6039:function(e,t,s){},"84d6":function(e,t,s){"use strict";var n=s("6039"),a=s.n(n);a.a},9367:function(e,t,s){"use strict";var n=s("a57b"),a=s.n(n);a.a},a57b:function(e,t,s){},a9e7:function(e,t,s){},d6db:function(e,t,s){"use strict";var n=s("a9e7"),a=s.n(n);a.a}});
//# sourceMappingURL=app.62db2e68.js.map