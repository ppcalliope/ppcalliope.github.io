(this["webpackJsonpcalliope-pingpong"]=this["webpackJsonpcalliope-pingpong"]||[]).push([[18],{27:function(e,n,t){"use strict";n.a={BEFORE_UPLOAD:0,UPLOADIND:1,UPLOADED:2,GENERATING:3,GENERATED:4,FAILED:5,FILE_LARGE:6,ADDING:7,ADD_FAILED:8,ADDED:9,PUBLISHED:10,JSONUPLOADING:11,JSONUPLOADED:12,VIDEOUPLOADing:13,VIDEOUPLOADED:14}},29:function(e,n,t){"use strict";n.a={FACTSHEET:"Factsheet",DASHBOARD:"Dashboard",DATACOMICS:"DataComics",DATAVIDEOS:"DataVideos",H5:"H5"}},48:function(e,n,t){e.exports=t(75)},56:function(e,n,t){},59:function(e,n,t){var a={"./EditPage/EditPage":[45,9,0,1,14],"./EditPage/EditPage.js":[45,9,0,1,14],"./EditPage/EditPage.less":[82,7,22],"./Homepage":[21,9,0,1,2,4,8],"./Homepage/":[21,9,0,1,2,4,8],"./Homepage/Content/ContentView":[41,9,0,15],"./Homepage/Content/ContentView.js":[41,9,0,15],"./Homepage/Content/ContentView.less":[79,7,23],"./Homepage/Homepage":[43,9,0,1,2,4,12],"./Homepage/Homepage.js":[43,9,0,1,2,4,12],"./Homepage/Homepage.less":[80,7,24],"./Homepage/PannelView":[20,9,0,1,2,4,9],"./Homepage/PannelView/":[20,9,0,1,2,4,9],"./Homepage/PannelView/PannelView":[40,9,0,1,2,4,13],"./Homepage/PannelView/PannelView.js":[40,9,0,1,2,4,13],"./Homepage/PannelView/PannelView.less":[77,7,25],"./Homepage/PannelView/index":[20,9,0,1,2,4,9],"./Homepage/PannelView/index.js":[20,9,0,1,2,4,9],"./Homepage/index":[21,9,0,1,2,4,8],"./Homepage/index.js":[21,9,0,1,2,4,8],"./MobileView":[19,9,0,1,3,7,10],"./MobileView/":[19,9,0,1,3,7,10],"./MobileView/assets/arrow.png":[84,7,28],"./MobileView/assets/banner.png":[85,7,29],"./MobileView/assets/bg.png":[86,7,30],"./MobileView/assets/calliope.png":[87,7,31],"./MobileView/assets/ping-pong.png":[88,7,32],"./MobileView/assets/poster.jpg":[89,7,33],"./MobileView/index":[19,9,0,1,3,7,10],"./MobileView/index.css":[78,7,21],"./MobileView/index.js":[19,9,0,1,3,7,10],"./MobileView/mock":[46,3,17],"./MobileView/mock.json":[46,3,17],"./MobileView/swiper":[47,9,3,16],"./MobileView/swiper.js":[47,9,3,16],"./PublishPage":[22,9,0,1,2,3,6],"./PublishPage/":[22,9,0,1,2,3,6],"./PublishPage/PublishPage.less":[83,7,26],"./PublishPage/index":[22,9,0,1,2,3,6],"./PublishPage/index.js":[22,9,0,1,2,3,6],"./ShowPage":[23,9,0,1,2,3,5],"./ShowPage/":[23,9,0,1,2,3,5],"./ShowPage/ShowPage":[44,9,0,1,2,3,11],"./ShowPage/ShowPage.js":[44,9,0,1,2,3,11],"./ShowPage/ShowPage.less":[81,7,27],"./ShowPage/index":[23,9,0,1,2,3,5],"./ShowPage/index.js":[23,9,0,1,2,3,5]};function o(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],o=n[0];return Promise.all(n.slice(2).map(t.e)).then((function(){return t.t(o,n[1])}))}o.keys=function(){return Object.keys(a)},o.id=59,e.exports=o},62:function(e,n){},7:function(e,n,t){"use strict";n.a={UPLOAD_DATA:"UPLOAD_DATA",GENERATE_STORY:"GENERATE_STORY",UPDATE_PROGRESS:"UPDATE_PROGRESS",UPDATE_USER_INFO:"UPDATE_USER_INFO",UPDATE_USER_OPERATION:"UPDATE_USER_OPERATION",UPDATE_CONVERT_TYPE:"UPDATE_CONVERT_TYPE",UPDATE_LOCALE:"UPDATE_LOCALE"}},70:function(e,n,t){},71:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(16),r=t.n(i),s=t(28),c=t(9),l=t(34),g=t(7),u={fileName:".csv",title:"",data:[],schema:[],method:"sig",facts:[],relations:[],maxStoryLength:6,timeLimit:2e3,information:40,resultCoverage:1,chartDiversity:0,aggregationLevel:0,rewardWeight:{logicality:.33,diversity:.33,integrity:.33},generateProgress:0},E=t(17),P=t.n(E),p=t(27),m=t(29),O=P.a.get("userInfo")&&JSON.parse(P.a.get("userInfo"))?JSON.parse(P.a.get("userInfo")):{username:"",uid:-1},h={isLogin:-1!==O.uid,userInfo:O,operateState:p.a.BEFORE_UPLOAD,convertType:m.a.FACTSHEET,currentLocale:""},D=Object(c.b)({story:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0,t=Object.assign({},e);switch(n.type){case g.a.GENERATE_STORY:return t.facts=n.facts,t.relations=n.relations,t.resultCoverage=n.coverage,t;case g.a.UPDATE_PROGRESS:return t.generateProgress=Number(100*((n.totalLength-n.currentLength)/n.totalLength).toFixed(2)),t;case g.a.UPLOAD_DATA:return t.fileName=n.fileName,t.facts=[],t.relations=[],t.schema=n.schema,t.data=n.data,t}return t},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0,t=Object.assign({},e);switch(n.type){case g.a.UPDATE_USER_INFO:return t.userInfo=n.userInfo,-1===n.userInfo.uid?t.isLogin=!1:t.isLogin=!0,t;case g.a.UPDATE_USER_OPERATION:return t.operateState=n.operateState,t;case g.a.UPDATE_CONVERT_TYPE:return t.convertType=n.convertType,t;case g.a.UPDATE_LOCALE:return t.currentLocale=n.currentLocale,t}return t}}),d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,w=[l.a];var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(c.d)(D,e,d(c.a.apply(void 0,w)))}(),b=(t(56),t(39)),f=t(11),T=t(12),S=t(14),_=t(13),v=function(e){Object(S.a)(t,e);var n=Object(_.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(T.a)(t,[{key:"render",value:function(){var e=this.props,n=e.isLoading,t=e.error;return n?o.a.createElement("div",null,"Loading..."):t?o.a.createElement("div",null,"Sorry, there was a problem loading the page."):null}}]),t}(a.Component),L=t(35),U=t.n(L),V=function(e){return U()({loader:function(){return t(59)("./".concat(e))},loading:v})},R=t(36),N=t.n(R),j=(t(70),t(71),t(2)),y=t(38),C=["MyComponent"],H=function(e){Object(S.a)(t,e);var n=Object(_.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={initDone:!1},e}return Object(T.a)(t,[{key:"componentDidMount",value:function(){this.setState({initDone:!0})}},{key:"render",value:function(){var e=this.state.initDone,n=function(n){var t=n.MyComponent,a=Object(b.a)(n,C);return o.a.createElement(j.a,Object.assign({},a,{render:function(n){return o.a.createElement(t,Object.assign({intl:N.a,initDone:e},n))}}))};return o.a.createElement(y.a,null,o.a.createElement(j.c,null,o.a.createElement(n,{exact:!0,path:"/show",MyComponent:V("ShowPage/index")}),o.a.createElement(n,{exact:!0,path:"/publish/mobile/*",MyComponent:V("PublishPage/index")}),o.a.createElement(n,{exact:!0,path:"/",MyComponent:V("Homepage/index")})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(s.a,{store:A},o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,19,20]]]);
//# sourceMappingURL=main.17c6c429.chunk.js.map