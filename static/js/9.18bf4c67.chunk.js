/*! For license information please see 9.18bf4c67.chunk.js.LICENSE.txt */
(this["webpackJsonpcalliope-pingpong"]=this["webpackJsonpcalliope-pingpong"]||[]).push([[9,21],{124:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(99);function r(){r=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,l="function"==typeof Symbol?Symbol:{},i=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",o=l.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(T){s=function(e,t,a){return e[t]=a}}function m(e,t,a,n){var r=t&&t.prototype instanceof f?t:f,l=Object.create(r.prototype),i=new S(n||[]);return l._invoke=function(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return P()}for(a.method=r,a.arg=l;;){var i=a.delegate;if(i){var c=w(i,a);if(c){if(c===d)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var o=u(e,t,a);if("normal"===o.type){if(n=a.done?"completed":"suspendedYield",o.arg===d)continue;return{value:o.arg,done:a.done}}"throw"===o.type&&(n="completed",a.method="throw",a.arg=o.arg)}}}(e,a,i),l}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(T){return{type:"throw",arg:T}}}e.wrap=m;var d={};function f(){}function v(){}function p(){}var h={};s(h,i,(function(){return this}));var E=Object.getPrototypeOf,g=E&&E(E(x([])));g&&g!==t&&a.call(g,i)&&(h=g);var b=p.prototype=f.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var r;this._invoke=function(l,i){function c(){return new t((function(r,c){!function r(l,i,c,o){var s=u(e[l],e,i);if("throw"!==s.type){var m=s.arg,d=m.value;return d&&"object"==Object(n.a)(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,c,o)}),(function(e){r("throw",e,c,o)})):t.resolve(d).then((function(e){m.value=e,c(m)}),(function(e){return r("throw",e,c,o)}))}o(s.arg)}(l,i,r,c)}))}return r=r?r.then(c,c):c()}}function w(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=p,s(b,"constructor",p),s(p,"constructor",v),v.displayName=s(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(N.prototype),s(N.prototype,c,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var i=new N(m(t,a,n,r),l);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(b),s(b,o,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=x,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],i=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),o=a.call(l,"finallyLoc");if(c&&o){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var i=l?l.completion:{};return i.type=e,i.arg=t,l?(this.method="next",this.next=l.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;j(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}},138:function(e,t,a){},145:function(e,t,a){"use strict";function n(e,t,a,n,r,l,i){try{var c=e[l](i),o=c.value}catch(s){return void a(s)}c.done?t(o):Promise.resolve(o).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,l){var i=e.apply(t,a);function c(e){n(i,r,l,c,o,"next",e)}function o(e){n(i,r,l,c,o,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return r}))},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},172:function(e,t){},19:function(e,t,a){"use strict";a.r(t);var n=a(115),r=a(110),l=a(0),i=a.n(l),c=a(120),o=a.n(c),s=a(204),m=(a(164),function(e){var t=e.data,a=t.competition,n=t.country,r=t.time;return i.a.createElement("div",{className:"mobile-page poster-bg"},i.a.createElement("div",{className:"poster-bg-top"}),i.a.createElement("div",{className:"poster-bg-mid"}),i.a.createElement("div",{className:"poster-bg-bottom"}),i.a.createElement("div",{className:"poster-maintitle"}),i.a.createElement("div",{className:"poster-title"},i.a.createElement("div",{className:"match-date"},r[0],".",r[1]),i.a.createElement("div",{className:"match-name"},a),i.a.createElement("div",{className:"match-name"},n[0],"vs",n[1])),i.a.createElement("div",{className:"poster-subtitle"}),i.a.createElement("div",{className:"mobile-arrow"}),i.a.createElement("div",{className:"mobile-footer"},i.a.createElement("div",{className:"mobile-footer-dot"}),i.a.createElement("div",{className:"mobile-footer-line"}),i.a.createElement("div",{className:"mobile-logo"}),i.a.createElement("div",{className:"mobile-footer-text"},"Powered By Calliope"),i.a.createElement("div",{className:"mobile-footer-line"}),i.a.createElement("div",{className:"mobile-footer-dot"})))});a(165);var u=function(e){for(var t=e.record,a=t.playerName,n=t.list,r=[],l=n.length;l<7;l++)r.push(i.a.createElement("td",{key:l},"-"));return i.a.createElement("div",{className:"score-table"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{style:{height:"40px",width:"62px"}}),i.a.createElement("th",null,"\u7b2c1\u5c40"),i.a.createElement("th",null,"\u7b2c2\u5c40"),i.a.createElement("th",null,"\u7b2c3\u5c40"),i.a.createElement("th",null,"\u7b2c4\u5c40"),i.a.createElement("th",null,"\u7b2c5\u5c40"),i.a.createElement("th",null,"\u7b2c6\u5c40"),i.a.createElement("th",null,"\u7b2c7\u5c40"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"row-head"},a[0]),n.map((function(e,t){return i.a.createElement("td",{className:0!==e.winSide?"lose":null,key:t},e.result[0])})),r),i.a.createElement("tr",null,i.a.createElement("th",{className:"row-head"},a[1]),n.map((function(e,t){return i.a.createElement("td",{className:1!==e.winSide?"lose":null,key:t},e.result[1])})),r))))};a(166);var d=function(e){var t=e.player,a=e.match,n=e.score,c=Object(l.useState)({}),o=Object(r.a)(c,2),s=o[0],m=o[1],u=Object(l.useState)({}),d=Object(r.a)(u,2),f=d[0],v=d[1],p=Object(l.useState)(""),h=Object(r.a)(p,2),E=h[0],g=h[1],b=Object(l.useState)(""),y=Object(r.a)(b,2),N=y[0],w=y[1],O=Object(l.useState)(""),j=Object(r.a)(O,2),S=j[0],x=j[1],P="static/avatar/\u9ed8\u8ba4.png";return Object(l.useEffect)((function(){if(t){var e=t[0][0],n=t[1][0];m(e),v(n),g(e.nationalFlag),w(n.nationalFlag)}a&&x(a.nationalBG)}),[t,a]),i.a.createElement("div",{className:"player-intro"},i.a.createElement("div",{className:"player-bg"},i.a.createElement("img",{className:"flag-bg",src:S}),i.a.createElement("div",{className:"player-bg-container"},i.a.createElement("div",{className:"match-name"},i.a.createElement("div",{className:"icon"}),a?i.a.createElement("div",null,a.competition):null),i.a.createElement("div",{className:"bg-head-groups"},i.a.createElement("div",{className:"bg-head"},i.a.createElement("div",{className:"bg-head-name"},"\u53c2\u8d5b\u6210\u5458"),i.a.createElement("div",{className:"bg-head-ranking"},"WORD RANKING")),i.a.createElement("div",{className:"bg-head"},i.a.createElement("div",{className:"bg-head-name"},"\u53c2\u8d5b\u6210\u5458"),i.a.createElement("div",{className:"bg-head-ranking"},"WORD RANKING")))),i.a.createElement("div",{className:"bg-intro-groups"},i.a.createElement("div",{className:"bg-intro"},i.a.createElement("div",{className:"bg-intro-country"},a.countryEN[0]),i.a.createElement("img",{className:"bg-intro-flag",src:E,alt:"none"}),i.a.createElement("div",{className:"bg-intro-name"},s&&s.name?s.name:"\u672a\u77e5"),i.a.createElement("div",{className:"bg-intro-ranking"},s&&s.rank?s.rank:"-")),i.a.createElement("div",{className:"bg-intro"},i.a.createElement("div",{className:"bg-intro-country"},a.countryEN[1]),i.a.createElement("img",{className:"bg-intro-flag",src:N,alt:"none"}),i.a.createElement("div",{className:"bg-intro-name"},f&&f.name?f.name:"\u672a\u77e5"),i.a.createElement("div",{className:"bg-intro-ranking"},f&&f.rank?f.rank:"-")))),i.a.createElement("div",{className:"player-score"},i.a.createElement("div",{className:"player-info"},i.a.createElement("div",{className:"player-info-name"},s&&s.name?s.name:"\u672a\u77e5"),i.a.createElement("img",{id:"icon",className:"player-info-icon",src:s&&s.icon?s.icon:P,alt:"\u9009\u624b\u5934\u50cf",onError:function(e){e.target.onerror=null,e.target.src=P}})),i.a.createElement("div",{className:"match-score"},i.a.createElement("div",{className:"match-score-vs"},"VS"),i.a.createElement("div",{className:"match-score-detail"},i.a.createElement("div",{className:n[0]>n[1]?"score-highlight":null},n[0]),i.a.createElement("div",{style:{margin:"0 20px"}},"-"),i.a.createElement("div",{className:n[1]>n[0]?"score-highlight":null},n[1]))),i.a.createElement("div",{className:"player-info"},i.a.createElement("div",{className:"player-info-name"},f&&f.name?f.name:"\u672a\u77e5"),i.a.createElement("img",{id:"icon",className:"player-info-icon",src:f&&f.icon?f.icon:P,alt:"\u9009\u624b\u5934\u50cf",onError:function(e){e.target.onerror=null,e.target.src=P}}))))},f=(a(167),function(e){var t=e.data,a=t.match,r=t.player,c=t.record,o=[r[0][0].name,r[1][0].name],s=(c=Object(n.a)(Object(n.a)({},c),{},{playerName:o})).result?c.result:[0,0];return Object(l.useEffect)((function(){var e=document.getElementById("cover-page-subtitle-text");if(e&&(e.clientWidth||e.offsetWidth)>215){var t=document.getElementById("cover-page-subtitle");t&&(t.style.width="fit-content",t.style.padding="0 30px")}}),[]),i.a.createElement("div",{className:"mobile-page"},i.a.createElement("div",{className:"mobile-header"}),i.a.createElement("div",{className:"mobile-title"},i.a.createElement("div",null,"\u56fd\u5bb6\u4e52\u4e53\u7403\u961f\u5927\u6570\u636e\u5e73\u53f0")),i.a.createElement("div",{className:"mobile-subtitle",id:"cover-page-subtitle"},a?i.a.createElement("span",{id:"cover-page-subtitle-text"},a.competition,": ",a.country[0],"vs",a.country[1]):null),i.a.createElement("div",{style:{marginTop:"44px"}},i.a.createElement(d,{player:r,match:a,score:s})),i.a.createElement("div",{style:{marginTop:"16px"}},i.a.createElement(u,{record:c})),i.a.createElement("div",{className:"mobile-arrow"}),i.a.createElement("div",{className:"mobile-footer"},i.a.createElement("div",{className:"mobile-footer-dot"}),i.a.createElement("div",{className:"mobile-footer-line"}),i.a.createElement("div",{className:"mobile-logo"}),i.a.createElement("div",{className:"mobile-footer-text"},"Powered By Calliope"),i.a.createElement("div",{className:"mobile-footer-line"}),i.a.createElement("div",{className:"mobile-footer-dot"})))});a(168);var v=function(e){var t=e.position,a=e.data,n=e.setScoreData,r=e.swiper,c=a.playerName,o=a.win,s=a.lose,m=a.scoreRate,u=a.useRate;function d(e){var t=Number(100*e).toFixed(1);return t+="%"}var f={0:"\u53d1\u7403",1:"\u7b2c\u4e09\u62cd",2:"\u63a5\u53d1\u7403",3:"\u7b2c\u56db\u62cd",4:"\u53d1\u7403\u8f6e\u76f8\u6301",5:"\u63a5\u53d1\u7403\u8f6e\u76f8\u6301"};return Object(l.useEffect)((function(){a&&n&&0==t&&n({rallys:o[0].rallys,name:c,stage:f[0]+"\u5f97\u5206"})}),[]),i.a.createElement("div",{className:"detail-table"},i.a.createElement("div",{className:"detail-table-container-"+t},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"name",rowSpan:"2",colSpan:"1"},c),i.a.createElement("th",{rowSpan:"1",colSpan:"2"},"\u53d1\u7403\u62a2\u653b\u6bb5"),i.a.createElement("th",{rowSpan:"1",colSpan:"2"},"\u63a5\u53d1\u7403\u62a2\u653b\u6bb5"),i.a.createElement("th",{rowSpan:"1",colSpan:"2"},"\u76f8\u6301\u6bb5"),i.a.createElement("th",{style:{width:"44px"},rowSpan:"2",colSpan:"1"},"\u5408\u8ba1")),i.a.createElement("tr",{className:"second-head"},i.a.createElement("th",null,"\u53d1\u7403"),i.a.createElement("th",null,"\u7b2c\u4e09\u62cd"),i.a.createElement("th",null,"\u63a5\u53d1\u7403"),i.a.createElement("th",null,"\u7b2c\u56db\u62cd"),i.a.createElement("th",{style:{width:"38px"}},"\u53d1\u7403\u8f6e\u76f8\u6301"),i.a.createElement("th",{style:{width:"44px"}},"\u63a5\u53d1\u7403\u8f6e\u76f8\u6301"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"row-head"},"\u5f97\u5206"),o.map((function(e,a){return i.a.createElement("td",{key:a,onClick:function(){e.count>0&&(n({rallys:e.rallys,position:t,name:c,stage:f[a]+"\u5f97\u5206"}),r.current.swiper.slideTo(4))}},e.count)}))),i.a.createElement("tr",null,i.a.createElement("th",{className:"row-head"},"\u5931\u5206"),s.map((function(e,a){return i.a.createElement("td",{key:a,onClick:function(){e.count>0&&(n({rallys:e.rallys,position:t,name:c,stage:f[a]+"\u5931\u5206"}),r.current.swiper.slideTo(4))}},e.count)}))),i.a.createElement("tr",null,i.a.createElement("th",{className:"row-head"},"\u5f97\u5206\u7387"),m.map((function(e,a){return a<3?i.a.createElement("td",{colSpan:"2",className:e.color?"highlight-"+t:null,key:a},d(e.rate)):3===a?i.a.createElement("td",{className:e.color?"highlight-"+t:null,key:a},d(e.rate)):null}))),i.a.createElement("tr",null,i.a.createElement("th",{className:"row-head"},"\u4f7f\u7528\u7387"),u.map((function(e,t){return t<3?i.a.createElement("td",{colSpan:"2",key:t},d(e)):3===t?i.a.createElement("td",{key:t},d(e)):null})))))))},p=(a(169),function(e){var t=e.data,a=e.setScoreData,n=e.swiper,r=t.table[0],l=t.table[1];return i.a.createElement("div",{className:"mobile-page"},i.a.createElement("div",{className:"mobile-header"}),i.a.createElement("div",{className:"mobile-title"},i.a.createElement("div",null,"\u56fd\u5bb6\u4e52\u4e53\u7403\u961f\u5927\u6570\u636e\u5e73\u53f0")),i.a.createElement("div",{className:"mobile-subtitle"},"\u53cc\u65b9\u7403\u5458\u4e09\u6bb5\u6cd5\u4fe1\u606f"),i.a.createElement("div",{style:{marginTop:"41px"}},i.a.createElement(v,{position:"0",data:r,setScoreData:a,swiper:n})),i.a.createElement("div",{style:{marginTop:"20px"}},i.a.createElement(v,{position:"1",data:l,setScoreData:a,swiper:n})),i.a.createElement("div",{className:"mobile-arrow"}),i.a.createElement("div",{className:"mobile-footer"},i.a.createElement("div",{className:"mobile-footer-dot"}),i.a.createElement("div",{className:"mobile-footer-line"}),i.a.createElement("div",{className:"mobile-logo"}),i.a.createElement("div",{className:"mobile-footer-text"},"Powered By Calliope"),i.a.createElement("div",{className:"mobile-footer-line"}),i.a.createElement("div",{className:"mobile-footer-dot"})))}),h=(a(170),a(206)),E=(a(123),a(125)),g=a(130);a(199),a(200);var b=function(e){var t=Object(l.useRef)(null),a=Object(l.useRef)(null),n=e.options,r=e.onReady,c=e.currentTime,o=e.pauseTime,s=e.ifPause;return Object(l.useEffect)((function(){if(!a.current){var e=t.current;if(!e)return;var l=a.current=Object(g.default)(e,n,(function(){console.log("player is ready"),"ios"!==function(){var e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,a=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return t?"android":!!a&&"ios"}()&&l.landscapeFullscreen({fullscreen:{enterOnRotate:!0,alwaysInLandscapeMode:!0}}),r&&r(l)}))}}),[n,t]),Object(l.useEffect)((function(){if(a.current&&s)a.current.pause();else if(a.current&&o>c){var e=a.current,t=function(){e.currentTime()>=o&&e.pause()};return e.on("timeupdate",t),e.currentTime(c),e.play(),function(){e.off("timeupdate",t)}}}),[c,o,s]),i.a.useEffect((function(){var e=a.current;return function(){e&&(e.dispose(),a.current=null)}}),[a]),i.a.createElement("div",{"data-vjs-player":!0},i.a.createElement("video",{ref:t,className:"video-js vjs-big-play-centered"}))},y=(a(138),function(e){var t=e.data,a=e.activeIndex,n=t.videoUrl,c=t.video,s=t.playerName,m=Object(l.useRef)(null),u=Object(l.useState)(null),d=Object(r.a)(u,2),f=d[0],v=d[1],p=Object(l.useState)(null),g=Object(r.a)(p,2),y=g[0],N=g[1],w=Object(l.useState)(0),O=Object(r.a)(w,2),j=O[0],S=O[1],x=Object(l.useState)(0),P=Object(r.a)(x,2),T=P[0],k=P[1],L=Object(l.useState)(!0),R=Object(r.a)(L,2),B=R[0],I=R[1];Object(l.useEffect)((function(){I(3!==a)}),[a]);var C={autoplay:!1,controls:!0,bigPlayButton:!0,responsive:!0,fluid:!0,preload:"auto",language:"zh-CN",controlBar:{children:[{name:"playToggle"},{name:"currentTimeDisplay"},{name:"progressControl"},{name:"durationDisplay"},{name:"volumePanel",inline:!1},{name:"FullscreenToggle"}]},sources:[{src:n,type:"video/mp4"}]};Object(l.useEffect)((function(){if(y){for(var e=y.details.length,t=[],a=[],n=0;n<e;n++)t.length<15?t.push(y.details[n]):(a.push(t),t=[y.details[n]]);a.push(t);var r=a.map((function(e,t){return i.a.createElement("div",{className:"point-button-container",key:t},e.map((function(e,t){return i.a.createElement(E.a,{className:"point-button",key:t,onClick:function(){S(e.startTime),k(e.endTime)}},i.a.createElement("div",{className:"dot-1",style:{visibility:0===e.winSide?"visible":"hidden"}}),i.a.createElement("span",{className:"score-1"},e.score[0]," "),i.a.createElement("div",{className:"rally-score"},y.score[0],":",y.score[1]),i.a.createElement("div",{className:"score-2"},e.score[1]," "),i.a.createElement("div",{className:"dot-2",style:{visibility:1===e.winSide?"visible":"hidden"}}))})))}));v(r)}else N(c[0])}),[y]);var _=c.map((function(e,t){return i.a.createElement(h.a.Button,{value:t+"",id:"rally-"+e.round,className:"rally-button",key:t,onClick:function(){N(e)}},"\u7b2c",e.round,"\u5c40")}));return i.a.createElement("div",{className:"mobile-page"},i.a.createElement("div",{className:"mobile-header"}),i.a.createElement("div",{className:"mobile-title"},i.a.createElement("div",null,"\u56fd\u5bb6\u4e52\u4e53\u7403\u961f\u5927\u6570\u636e\u5e73\u53f0")),i.a.createElement("div",{className:"mobile-subtitle"},i.a.createElement("div",null,"\u5168\u573a\u89c6\u9891\u4fe1\u606f")),i.a.createElement("div",{className:"video-container"},i.a.createElement(h.a.Group,{className:"video-rally-group",defaultValue:"0"},_),i.a.createElement("div",{className:"video-player"},i.a.createElement(b,{options:C,onReady:function(e){m.current=e,e.on("waiting",(function(){console.log("player is waiting")})),e.on("dispose",(function(){console.log("player will dispose")}))},currentTime:j,pauseTime:T,ifPause:B})),i.a.createElement("div",{className:"video-banner"},i.a.createElement("div",{className:"banner-player"},i.a.createElement("div",{className:"dot-1"}),i.a.createElement("span",{className:"player-name"},s[0]),i.a.createElement("span",{className:"vs"},"vs"),i.a.createElement("span",{className:"player-name"},s[1]),i.a.createElement("div",{className:"dot-2"})),i.a.createElement("div",{className:"divider"})),i.a.createElement("div",{className:"video-point-group",style:{width:"100%"}},i.a.createElement(o.a,Object.assign({},{slidesPerView:1,spaceBetween:30,mousewheel:!0,simulateTouch:!0},{shouldSwiperUpdate:!0}),f))),i.a.createElement("div",{className:"mobile-arrow"}),i.a.createElement("div",{className:"mobile-footer"},i.a.createElement("div",{className:"mobile-footer-dot"}),i.a.createElement("div",{className:"mobile-footer-line"}),i.a.createElement("div",{className:"mobile-logo"}),i.a.createElement("div",{className:"mobile-footer-text"},"Powered By Calliope"),i.a.createElement("div",{className:"mobile-footer-line"}),i.a.createElement("div",{className:"mobile-footer-dot"})))});var N=function(e){var t=e.data,a=e.scoreData,c=e.activeIndex,s=t.videoUrl,m=t.video,u=t.playerName,d=Object(l.useRef)(null),f=Object(l.useState)(""),v=Object(r.a)(f,2),p=v[0],h=v[1],g=Object(l.useState)("\u53d1\u7403\u5f97\u5206"),y=Object(r.a)(g,2),N=y[0],w=y[1],O=Object(l.useState)(null),j=Object(r.a)(O,2),S=j[0],x=j[1],P=Object(l.useState)(null),T=Object(r.a)(P,2),k=T[0],L=T[1],R=Object(l.useState)(0),B=Object(r.a)(R,2),I=B[0],C=B[1],_=Object(l.useState)(0),A=Object(r.a)(_,2),D=A[0],G=A[1],F=Object(l.useState)(!0),U=Object(r.a)(F,2),W=U[0],V=U[1];Object(l.useEffect)((function(){V(4!==c)}),[c]);var z={autoplay:!1,controls:!0,bigPlayButton:!0,responsive:!0,fluid:!0,preload:"auto",language:"zh-CN",controlBar:{children:[{name:"playToggle"},{name:"currentTimeDisplay"},{name:"progressControl"},{name:"durationDisplay"},{name:"volumePanel",inline:!1},{name:"FullscreenToggle"}]},sources:[{src:s,type:"video/mp4"}]};Object(l.useEffect)((function(){if(a){var e=a.rallys,t=a.name,r=a.stage;h(t),w(r),L(function(e,t){var a=[];return e&&t&&t.length>0&&t.map((function(t,r){var l=t[0],i=t[1],c=e[l].details,o=e[l].score;return a.push(Object(n.a)({roundScore:o},c[i])),null})),a}(m,e))}}),[a]),Object(l.useEffect)((function(){if(k){for(var e=k.length,t=[],a=[],n=0;n<e;n++)t.length<15?t.push(k[n]):(a.push(t),t=[k[n]]);a.push(t);var r=a.map((function(e,t){return i.a.createElement("div",{className:"point-button-container",key:t},e.map((function(e,t){return i.a.createElement(E.a,{className:"point-button",key:t,onClick:function(){C(e.startTime),G(e.endTime)}},i.a.createElement("div",{className:"dot-1",style:{visibility:0===e.winSide?"visible":"hidden"}}),i.a.createElement("div",null,e.score[0]," "),i.a.createElement("div",{className:"rally-score"},e.roundScore[0],":",e.roundScore[1]),i.a.createElement("div",null,e.score[1]," "),i.a.createElement("div",{className:"dot-2",style:{visibility:1===e.winSide?"visible":"hidden"}}))})))}));x(r)}}),[k]);var H=document.getElementById("jump-page-subtitle-text");if(H&&(H.clientWidth||H.offsetWidth)>215){var J=document.getElementById("jump-page-subtitle");J&&(J.style.width="fit-content",J.style.padding="0 30px")}return i.a.createElement("div",{className:"mobile-page"},i.a.createElement("div",{className:"mobile-header"}),i.a.createElement("div",{className:"mobile-title"},i.a.createElement("div",null,"\u56fd\u5bb6\u4e52\u4e53\u7403\u961f\u5927\u6570\u636e\u5e73\u53f0")),i.a.createElement("div",{className:"mobile-subtitle",id:"jump-page-subtitle"},i.a.createElement("span",{id:"jump-page-subtitle-text"},p,N,"\u89c6\u9891\u4fe1\u606f")),i.a.createElement("div",{className:"video-rally-group"}),i.a.createElement("div",{className:"video-container"},i.a.createElement("div",{className:"video-player"},i.a.createElement(b,{options:z,onReady:function(e){d.current=e,e.on("waiting",(function(){console.log("player is waiting")})),e.on("dispose",(function(){console.log("player will dispose")}))},currentTime:I,pauseTime:D,ifPause:W})),i.a.createElement("div",{className:"video-banner"},i.a.createElement("div",{className:"banner-player"},i.a.createElement("div",{className:"dot-1"}),i.a.createElement("span",{className:"player-name"},u[0]),i.a.createElement("span",{className:"vs"},"vs"),i.a.createElement("span",{className:"player-name"},u[1]),i.a.createElement("div",{className:"dot-2"})),i.a.createElement("div",{className:"divider"})),i.a.createElement("div",{className:"video-point-group",style:{width:"100%"}},i.a.createElement(o.a,Object.assign({},{slidesPerView:1,spaceBetween:30,mousewheel:!0,simulateTouch:!0},{shouldSwiperUpdate:!0}),S))),i.a.createElement("div",{className:"mobile-footer"},i.a.createElement("div",{className:"mobile-footer-dot"}),i.a.createElement("div",{className:"mobile-footer-line"}),i.a.createElement("div",{className:"mobile-logo"}),i.a.createElement("div",{className:"mobile-footer-text"},"Powered By Calliope"),i.a.createElement("div",{className:"mobile-footer-line"}),i.a.createElement("div",{className:"mobile-footer-dot"})))},w=(a(202),a(203),a(78),a(270)),O=a(296),j=a(297);w.a.use([O.a,j.a]);var S=0;t.default=function(e){var t=e.data,a=e.isPublish,c=Object(l.useState)(null),u=Object(r.a)(c,2),d=u[0],v=u[1],h=Object(l.useState)(0),E=Object(r.a)(h,2),g=E[0],b=E[1],w=Object(l.useRef)(null),O={direction:"vertical",slidesPerView:1,spaceBetween:30,mousewheel:!0,simulateTouch:!0,height:a?document.body.clientHeight:640,width:S,on:{slideChange:function(){b(w.current.swiper.activeIndex)}}},j=function(e){if(e){var t=JSON.parse(e).data,a=t.Page1,n=t.Page2,r=t.Page3,l=null;return a&&a.match&&(l=a.match),{Page0:l,Page1:a,Page2:n,Page3:r}}return{Page0:null,Page1:null,Page2:null,Page3:null}}(t),x=j.Page0,P=j.Page1,T=j.Page2,k=j.Page3;if(P){var L=P.player,R=[L[0][0].name,L[1][0].name];k=Object(n.a)(Object(n.a)({},k),{},{playerName:R})}return i.a.createElement("div",{id:"mobile-swiper",style:{overflowY:"hidden",height:a?document.body.clientHeight:640}},t?i.a.createElement("div",{className:"swiper"},i.a.createElement(s.a,{handleWidth:!0,handleHeight:!0,onResize:function(e,t){S=e}}),i.a.createElement(o.a,Object.assign({},O,{ref:w}),i.a.createElement("div",{className:"mobile-slide-item"},i.a.createElement(m,{data:x})),i.a.createElement("div",{className:"mobile-slide-item",style:{height:O.height,marginBottom:30}},i.a.createElement(f,{data:P})),i.a.createElement("div",{className:"mobile-slide-item",style:{height:O.height,marginBottom:30}},i.a.createElement(p,{data:T,setScoreData:v,swiper:w})),i.a.createElement("div",{className:"mobile-slide-item",style:{height:O.height,marginBottom:30}},i.a.createElement(y,{data:k,activeIndex:g})),i.a.createElement("div",{className:"mobile-slide-item",style:{height:O.height,marginBottom:30}},i.a.createElement(N,{data:k,scoreData:d,activeIndex:g})))):null)}},208:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(89),r=a(0);function l(e){var t=r.useRef();return t.current=e,r.useCallback((function(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(n))}),[])}var i,c=a(244),o=a(224);function s(e){return void 0!==e}function m(e,t){var a=t||{},m=a.defaultValue,u=a.value,d=a.onChange,f=a.postState,v=Object(o.a)((function(){var t,a=void 0;return s(u)?(a=u,t=i.PROP):s(m)?(a="function"===typeof m?m():m,t=i.PROP):(a="function"===typeof e?e():e,t=i.INNER),[a,t,a]})),p=Object(n.a)(v,2),h=p[0],E=p[1],g=s(u)?u:h[0],b=f?f(g):g;Object(c.b)((function(){E((function(e){var t=Object(n.a)(e,1)[0];return[u,i.PROP,t]}))}),[u]);var y=r.useRef(),N=l((function(e,t){E((function(t){var a=Object(n.a)(t,3),r=a[0],l=a[1],c=a[2],o="function"===typeof e?e(r):e;if(o===r)return t;var s=l===i.INNER&&y.current!==c?c:r;return[o,i.INNER,s]}),t)})),w=l(d);return Object(c.a)((function(){var e=Object(n.a)(h,3),t=e[0],a=e[1],r=e[2];t!==r&&a===i.INNER&&(w(t,r),y.current=r)}),[h]),[b,N]}!function(e){e[e.INNER=0]="INNER",e[e.PROP=1]="PROP"}(i||(i={}))},213:function(e,t){var a,n,r=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(a===setTimeout)return setTimeout(e,0);if((a===l||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"===typeof setTimeout?setTimeout:l}catch(e){a=l}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var o,s=[],m=!1,u=-1;function d(){m&&o&&(m=!1,o.length?s=o.concat(s):u=-1,s.length&&f())}function f(){if(!m){var e=c(d);m=!0;for(var t=s.length;t;){for(o=s,s=[];++u<t;)o&&o[u].run();u=-1,t=s.length}o=null,m=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];s.push(new v(e,t)),1!==s.length||m||c(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},215:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}a.d(t,"a",(function(){return r}))},244:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(0),r=a(143),l=Object(r.a)()?n.useLayoutEffect:n.useEffect;t.a=l;var i=function(e,t){var a=n.useRef(!0);l((function(){if(!a.current)return e()}),t),l((function(){return a.current=!1,function(){a.current=!0}}),[])}},78:function(e,t,a){}}]);
//# sourceMappingURL=9.18bf4c67.chunk.js.map