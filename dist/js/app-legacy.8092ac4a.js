(function(e){function t(t){for(var n,a,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,a=1;a<s.length;a++){var c=s[a];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={app:0},o={app:0},r=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"-legacy."+{about:"c81fb812"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],s={about:1};a[e]?t.push(a[e]):0!==a[e]&&s[e]&&t.push(a[e]=new Promise(function(t,s){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"986a09cb"}[e]+".css",o=i.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.request=n,delete a[e],f.parentNode.removeChild(f),s(r)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,s){n=o[e]=[t,s]});t.push(n[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var s=o[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");r.type=n,r.request=a,s[1](r)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0a17":function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return s(t)}function o(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=s("24b4"),o=s.n(a),r=(s("202f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)}),c=[],i=(s("5c0b"),s("2877")),u={},l=Object(i["a"])(u,r,c,!1,null,null,null);l.options.__file="App.vue";var d=l.exports,f=s("8c4f"),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("todo list by vue")]),s("add-todo"),s("hr"),s("todo-list")],1)},p=[],j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-textarea",{staticClass:"title",attrs:{placeholder:"title",autosize:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),s("div",{staticStyle:{margin:"24px 0"}}),s("a-textarea",{staticClass:"content",attrs:{placeholder:"content",autosize:{minRows:2,maxRows:6}},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}}),s("div",{staticStyle:{margin:"12px 0"}}),s("a-button",{attrs:{type:"primary",block:""},on:{click:e.postIssue}},[e._v("submit task")]),s("div",{staticStyle:{margin:"12px 0"}})],1)},h=[],m={data:function(){return{title:"",body:""}},methods:{postIssue:function(){if(""===this.title)return null;this.$store.dispatch("postIssue",{title:this.title,body:this.body}),this.title="",this.body=""}}},g=m,v=(s("7695"),Object(i["a"])(g,j,h,!1,null,"d72c1d4a",null));v.options.__file="AddTodo.vue";var k=v.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-tabs",{attrs:{defaultActiveKey:"1"}},[s("a-tab-pane",{key:"1",attrs:{tab:"open"}},[s("a-collapse",e._l(e.$store.getters.open,function(t){return s("a-collapse-panel",{key:t.number,attrs:{header:t.title}},[s("p",[e._v(e._s(t.body))]),s("a-button",{attrs:{block:"","data-number":t.number},on:{click:function(t){e.changeState("closed",t)}}},[e._v("\n            close this issue")])],1)}),1)],1),s("a-tab-pane",{key:"2",attrs:{tab:"closed"}},[s("a-collapse",e._l(e.$store.getters.closed,function(t){return s("a-collapse-panel",{key:t.number,attrs:{header:t.title}},[s("p",[e._v(e._s(t.body))]),s("a-button",{attrs:{block:"","data-number":t.number},on:{click:function(t){e.changeState("open",t)}}},[e._v("reopen this issue")])],1)}),1)],1)],1)],1)},_=[],w=s("f499"),x=s.n(w),z={methods:{callback:function(e){console.log(e)},changeState:function(e,t){var s=t.target.dataset.number,n=x()({state:e});this.$store.dispatch("patchIssue",{number:s,body:n})}},created:function(){console.log("TodoList.vue has created, and getting issues."),this.$store.dispatch("getIssues")}},S=z,O=(s("9f34"),Object(i["a"])(S,y,_,!1,null,"805fc8e6",null));O.options.__file="TodoList.vue";var T=O.exports,E={name:"home",components:{"add-todo":k,"todo-list":T},watch:{"$store.state.isLogin":function(e){!1===e&&this.$router.push("/login")}}},L=E,$=Object(i["a"])(L,b,p,!1,null,null,null);$.options.__file="Home.vue";var I=$.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("Login with github token")]),s("a-input-search",{attrs:{placeholder:"input github token",size:"large"},on:{search:e.onSearch},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}},[s("a-button",{attrs:{slot:"enterButton"},nativeOn:{click:function(t){e.submitToken()}},slot:"enterButton"},[e._v("submit")])],1),s("div",{staticStyle:{margin:"10px 0px"}}),s("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank"}},[s("a-button",{attrs:{block:""}},[e._v("get token from github")])],1)],1)},P=[],q={data:function(){return{token:""}},methods:{submitToken:function(){""!==this.token&&(localStorage.token=this.token,this.$store.commit("changeLoginState",!0),this.$router.push("/"))}}},C=q,H=(s("d6db"),Object(i["a"])(C,A,P,!1,null,null,null));H.options.__file="Login.vue";var M=H.exports;n["default"].use(f["a"]);var N=new f["a"]({base:"dist/",routes:[{path:"/",name:"home",component:I},{path:"/login",component:M},{path:"/list",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),R=s("2f62"),B=localStorage.token,J="https://api.github.com/repos/saltfish666/todo-list/issues",X={token:B,url:J},D=X.url;function U(e){var t=localStorage.token,s=new XMLHttpRequest;s.onload=function(t){401===t.target.status?(e.commit("changeLoginState",!1),console.error("token is outdate",t)):200!==t.target.status?(console.log("some error in getting issues"),console.error(t)):(e.commit("initIssues",JSON.parse(t.target.responseText)),console.info("it is success to get issues from github"))},s.open("GET",D+"?state=all"),s.setRequestHeader("Authorization","bearer "+t),s.send()}var F=X.url,G=function(e,t){var s=localStorage.token,n=t.number,a=t.body,o=new XMLHttpRequest;o.onload=function(t){200!==t.target.status?console.warn(t):(console.log("patch is successful",t),e.commit("editIssue",x()(t.target.responseText)))},o.open("PATCH",F+"/".concat(n)),o.setRequestHeader("Authorization","bearer "+s),o.send(a)},K=X.url,Q=function(e,t){var s=localStorage.token,n=new XMLHttpRequest;n.onload=function(t){201!==t.target.status?console.error("error in post issue",t):(console.log("success post issue",t),e.commit("addIssue",JSON.parse(t.target.responseText)))},n.open("POST",K),n.setRequestHeader("Authorization","bearer "+s),n.send(x()({title:t.title,body:t.body}))},V=function(e,t){e.issues.unshift(t)},W=(s("ac6a"),function(e,t){var s=[];e.issues.forEach(function(e,n){e.number===t.number&&(e=t),s.push(e)}),e.issues=s}),Y=function(e,t){e.issues=t},Z=function(e,t){e.isLogin=t};n["default"].use(R["a"]);var ee=new R["a"].Store({state:{issues:[],isLogin:!0},getters:{open:function(e,t){return e.issues.filter(function(e){return"open"===e.state})},closed:function(e,t){return e.issues.filter(function(e){return"closed"===e.state})}},mutations:{addIssue:V,editIssue:W,initIssues:Y,changeLoginState:Z},actions:{getIssues:U,patchIssue:G,postIssue:Q}});n["default"].use(o.a),n["default"].config.productionTip=!1,new n["default"]({router:N,store:ee,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("5e27"),a=s.n(n);a.a},"5e27":function(e,t,s){},7695:function(e,t,s){"use strict";var n=s("9c61"),a=s.n(n);a.a},"9c61":function(e,t,s){},"9f34":function(e,t,s){"use strict";var n=s("0a17"),a=s.n(n);a.a},a9e7:function(e,t,s){},d6db:function(e,t,s){"use strict";var n=s("a9e7"),a=s.n(n);a.a}});
//# sourceMappingURL=app-legacy.8092ac4a.js.map