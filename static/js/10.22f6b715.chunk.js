/*! For license information please see 10.22f6b715.chunk.js.LICENSE.txt */
(this["webpackJsonpcalliope-pingpong"]=this["webpackJsonpcalliope-pingpong"]||[]).push([[10,14,27],{114:function(e,t,n){"use strict";var a,r=n(167),o="https://pingpong.datacalliope.com",i="https://".concat("calliope-service.idvxlab.com",":8002/api/v1"),c="https://".concat("pingpong-api.datacalliope.com:8010"),l="https://".concat("calliope-service.idvxlab.com",":8002/log/v1"),s="https://account.datacalliope.com",u={url:(a={applicationUrl:o,publicPrefix:"https://pingpong.datacalliope.com",loginadmintest:"".concat(i,"/loginadmintest"),loginRedirectUrl:"".concat(s,"/#/login?response_type=code&client_id=").concat("6dcd0f8b-6990-4d69-9018-29b3351aa6ff","&grant_type=authorization_code&redirect_uri=").concat(o),logoutRedirectUrl:"".concat(o,"/#/logout"),authenUrl:s,accessToken:"".concat(i,"/accesstoken"),userImage:"".concat("https://service.datacalliope.com:8001","/img"),checkToken:"".concat(i,"/checktoken"),logout:"".concat(i,"/logout"),logoutAuthSystem:"".concat("https://service.datacalliope.com:8001","/logout"),users:"".concat(i,"/users"),activitiesApi:"".concat(l,"/users"),uploadDataPrefix:c,uploadData:"".concat(c,"/upload"),uploadVideo:"".concat(c,"/uploadvideo"),share:"".concat(c,"/share"),delete:"".concat(c,"/delete"),getReport:"".concat(c,"/getreport"),fetch:"".concat(c,"/data/share")},Object(r.a)(a,"delete","".concat(c,"/delete")),Object(r.a)(a,"getReport","".concat(c,"/getreport")),a)};t.a=u},115:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var a=n(171),r=n(114),o=n(172),i=n.n(o);function c(){c=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var r=t&&t.prototype instanceof h?t:h,o=Object.create(r.prototype),i=new x(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var p={};function h(){}function f(){}function d(){}var m={};l(m,r,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(D([])));g&&g!==t&&n.call(g,r)&&(m=g);var y=d.prototype=h.prototype=Object.create(m);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;this._invoke=function(r,o){function i(){return new t((function(a,i){!function a(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(p).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function D(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=d,l(y,"constructor",d),l(d,"constructor",f),f.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new w(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(y),l(y,i,"Generator"),l(y,r,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=D,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:D(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function l(e,t){return i()({method:"post",url:e,config:{headers:{"Content-Type":"application/json; charset=utf-8"}},data:t})}function s(e){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i()({method:"post",url:"".concat(r.a.url.share),config:{headers:{"Content-Type":"application/json; charset=utf-8"}},data:{uuid:t}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i()({method:"get",url:"".concat(r.a.url.getReport),params:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t,n){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(c().mark((function e(t,n,a){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i()({method:"delete",url:"".concat(r.a.url.delete),params:{uuid:t,page:n,per_page:a}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return i()({method:"post",url:"/generatePDF",param:{},data:e})}},147:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(7),r=function(e){return{type:a.a.UPDATE_USER_INFO,userInfo:e}},o=function(e){return{type:a.a.UPDATE_USER_OPERATION,operateState:e}},i=function(e){return{type:a.a.UPDATE_CONVERT_TYPE,convertType:e}}},166:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(17),r=n.n(a),o=function(e){return e.user.operateState},i=function(e){return e.user.isLogin},c=function(e){return r.a.get("userInfo")&&JSON.parse(r.a.get("userInfo"))?JSON.parse(r.a.get("userInfo")):{username:"",uid:-1}}},190:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(28),r=n(166),o=n(147),i=n(42);t.default=Object(a.b)((function(e){return{operateState:Object(r.c)(e)}}),(function(e){return{updateOperation:function(t){return e(o.b(t))}}}))(i.default)},234:function(e,t,n){},304:function(e,t,n){},305:function(e,t,n){},312:function(e,t,n){},313:function(e,t,n){},314:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(11),r=n(12),o=n(14),i=n(13),c=n(0),l=n.n(c),s=n(27),u=n(31),p=(n(365),n(364)),h=(n(214),n(216)),f=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.percent,n=e.isActive;return l.a.createElement(h.a,{percent:t,status:n?"active":"",showInfo:!1,strokeColor:"#EB6331",style:{position:"absolute",top:"-10px",zIndex:"9999",display:n?"block":"none"}})}}]),n}(l.a.Component),d=n(114),m=n(115),v=n(363),g=n(172),y=n.n(g),E=(n(234),p.a.Dragger),w=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={originFileOb:{},dataIndex:0,operateState:e.props.operateState,errorMessage:e.props.initDone&&e.props.intl.get("upload failed"),percent:0,isDisabledUpload:!1},e.uploadDataToCloud=function(t){return new Promise((function(n,a){e.uploadData(t,d.a.url.uploadData).then((function(t){e.setState({operateState:s.a.JSONUPLOADED});e.state.operateState;if(e.setState({dataIndex:t.uuid}),e.props.getDataIndex(t.uuid),"error"===t.status){var r=e.props.intl;return e.setState({operateState:s.a.FAILED,errorMessage:"zh-CN"===r.options.currentLocale?t.message_zh:t.message_en}),a(),null}n(t)}),(function(t){e.setState({operateState:s.a.FAILED,errorMessage:e.props.initDone&&e.props.intl.get("upload failed")}),a()}))}))},e.uploadVideoToCloud=function(t){return new Promise((function(n,a){e.uploadVideo(t,d.a.url.uploadVideo).then((function(t){var r=e.state.dataIndex;if(e.props.history.push({pathname:"/show",dataIndex:r}),"error"===t.status){var o=e.props.intl;return e.setState({operateState:s.a.FAILED,errorMessage:"zh-CN"===o.options.currentLocale?t.message_zh:t.message_en}),a(),null}n(t)}),(function(t){e.setState({operateState:s.a.FAILED,errorMessage:e.props.initDone&&e.props.intl.get("upload failed")}),a()}))}))},e.processData=function(t){if(t.schema&&t.file_url&&t.file_name){var n=t.schema.fields,a=d.a.url.uploadDataPrefix+t.file_url,r=t.file_name,o=[],i=n.filter((function(e){return"numerical"===e.type}));o=i.map((function(e){return e.field}));var c=Object(u.a)(e);v.a(a).then((function(e){e.forEach((function(e,t){for(var n in e)-1!==o.indexOf(n)&&(e[n]=parseFloat(e[n]))})),c.props.uploadData(r,n,e),this.props.history.push("/show")})).catch((function(e){console.log(e)}))}else{e.state.operateState===s.a.JSONUPLOADED?(e.props.updateOperation(s.a.JSONUPLOADED),e.setState({operateState:s.a.JSONUPLOADED})):e.props.history.push("/show")}},e.onUploadChange=function(t){var n=e.state.operateState;if(n===s.a.JSONUPLOADED&&e.setState({operateState:s.a.UPLOADIND}),n===s.a.BEFORE_UPLOAD&&e.setState({operateState:s.a.JSONUPLOADING}),t.event&&e.props.updateProgress(t.event.total,t.event.total-t.event.loaded),"uploading"!==t.file.status){var a=e.state.dataIndex,r=t.file.originFileObj,o=new FormData;o.append("file",r),o.append("uuid",a),n===s.a.JSONUPLOADING?e.uploadDataToCloud(o).then((function(t){return e.processData(t)})):n===s.a.UPLOADIND?(e.setState({isDisabledUpload:!0}),e.uploadVideoToCloud(o).then((function(t){return e.processData(t)}))):e.uploadDataToCloud(o).then((function(t){return e.processData(t)}))}},e.beforeUpload=function(e){return new Promise((function(e,t){return e(!0)}))},e.getPannelClassName=function(){switch(e.state.operateState){case s.a.BEFORE_UPLOAD:case s.a.JSONUPLOADED:return"draggerPannelCommon yellowPannel";case s.a.UPLOADED:return"pannelWithConvertType whitePannel";default:return""}},e.isShowProgressbar=function(){var t=e.state.operateState;return t===s.a.UPLOADIND||t===s.a.JSONUPLOADING},e}return Object(r.a)(n,[{key:"uploadVideo",value:function(e){var t=this;return new Promise((function(n,a){y()({method:"post",url:"".concat(d.a.url.uploadVideo),config:{headers:{"Content-Type":"multipart/form-data"}},data:e,onUploadProgress:function(e){console.log(e),console.log(Math.round(e.loaded/e.total*100)+"%");var n=Math.round(e.loaded/e.total*100);console.log(n),t.setState({percent:n})}}).then((function(e){e.status>=400?a():200===e.status||201===e.status||204===e.status?n(e.data):a()})).catch((function(e){a()}))}))}},{key:"uploadData",value:function(e){var t=this;return new Promise((function(n,a){y()({method:"post",url:"".concat(d.a.url.uploadData),config:{headers:{"Content-Type":"multipart/form-data"}},data:e,onUploadProgress:function(e){var n=Math.round(e.loaded/e.total*100);t.setState({percent:n})}}).then((function(e){e.status>=400?a():200===e.status||201===e.status||204===e.status?n(e.data):a()})).catch((function(e){a()}))}))}},{key:"render",value:function(){var e,t=this.props,n=t.intl,a=t.initDone,r=(t.generateProgress,function(){return l.a.createElement("div",{className:"ClickToUpload"},l.a.createElement("div",null),l.a.createElement("p",null,"\u70b9\u51fb\u91cd\u65b0\u4e0a\u4f20"))});switch(this.state.operateState){case s.a.BEFORE_UPLOAD:l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u6570\u636e")),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"JSONFileImage"},l.a.createElement("div",{className:"jsonIconWhite"})),l.a.createElement("div",{className:"uploadView"},l.a.createElement("div",{className:"uploadBtn"},"\u4e0a\u4f20\u6570\u636e")));break;case s.a.JSONUPLOADING:l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u6570\u636e")),e=l.a.createElement("div",{className:"uploading"},l.a.createElement("div",{className:"uploadImage"}),l.a.createElement("span",null,"\u4e0a\u4f20\u4e2d\uff0c\u8bf7\u7a0d\u540e"),l.a.createElement("div",{className:"dot"},"..."));break;case s.a.UPLOADIND:l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u89c6\u9891")),e=l.a.createElement("div",{className:"uploading"},l.a.createElement("div",{className:"uploadImage"}),l.a.createElement("span",null,"\u4e0a\u4f20\u4e2d\uff0c\u8bf7\u7a0d\u540e"),l.a.createElement("div",{className:"dot"},"..."));break;case s.a.JSONUPLOADED:l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u89c6\u9891")),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"MP4FileImage"},l.a.createElement("div",{className:"mp4IconWhite"})),l.a.createElement("div",{className:"uploadView"},l.a.createElement("div",{className:"uploadBtn"},"\u4e0a\u4f20\u89c6\u9891")));break;case s.a.FAILED:l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u5931\u8d25 \u8bf7\u91cd\u65b0\u4e0a\u4f20")),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"errorFailImage"},l.a.createElement("div",{className:"iconFailed"}),l.a.createElement("p",{className:"hintText"},this.state.errorMessage)),l.a.createElement(r,null));break;case s.a.FILE_LARGE:l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u6570\u636e")),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"largeFileView"},l.a.createElement("div",null),l.a.createElement("span",null,a&&n.get("larger than 5MB"))),l.a.createElement(r,null))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:this.getPannelClassName(),style:{position:"relative"}},l.a.createElement(f,{percent:this.state.percent,isActive:this.isShowProgressbar()}),l.a.createElement("div",{style:{height:"340px",flex:1}},l.a.createElement(E,{beforeUpload:this.beforeUpload,onChange:this.onUploadChange,showUploadList:!1,disabled:this.state.isDisabledUpload,accept:".json, .mp4"},l.a.createElement("div",{className:"pannelContent"},e)))))}}]),n}(l.a.Component),b=(n(161),n(162)),N=n(362),O=n(171),x=n(29),D="http://calliope-dev.oss-cn-shanghai.aliyuncs.com/image/images",L=[{name:x.a.FACTSHEET,iconUrl:"".concat(D,"/convertType/factsheet.png"),generateIconUrl:"".concat(D,"/convertType/factsheet_black.png")}],S=Object(r.a)((function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,p=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0;Object(a.a)(this,e),this.script=function(){return n.generatedScript},this.type=t,this.measure=r,this.subspace=o,this.groupby=i,this.focus=c,this.parameter=l,this.score=u,this.information=p,this.significance=h,this.chart=s,this.aggregated=!1,this.aggregatedFact=null,this.compoundType="",this.compoundChart="juxtaposition"})),P=(n(304),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.iconUrl,a=t.text;return l.a.createElement("div",{className:"button-box",onClick:function(){return e.props.onClickListener()}},l.a.createElement("div",{style:{backgroundImage:"url(".concat(n,")")}}),l.a.createElement("p",null,a))}}]),n}(l.a.Component)),j=(n(305),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isSpining,n=e.initDone,a=e.intl;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{tip:n&&a.get("downloading"),spinning:t}))}}]),n}(l.a.Component)),I=(n(312),n(190),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.fileName,n=e.initDone,a=e.intl,r=e.columnCount,o=e.form,i=e.isSpining,c=t&&t.split(".csv")[0],s=function(){return l.a.createElement("div",{className:"fileTypeAndNameView",style:{justifyContent:i?"flex-start":"center"}},l.a.createElement("div",{className:"fileType-icon"}),l.a.createElement("span",{style:{marginBottom:"0px"}},"H5"===o?"":"".concat(c,".pdf")))};return l.a.createElement("div",{className:this.props.myClassName?"generated-view-dox ".concat(this.props.myClassName):"generated-view-dox"},l.a.createElement("span",null,n&&a.get("H5"===o?"convertedTxtH5":"convertedTxt")),l.a.createElement(s,null),l.a.createElement("div",{className:"FuntionView",style:{columnCount:r}},l.a.createElement("div",{className:"download-box"},l.a.createElement(j,Object.assign({isSpining:i},this.props))),this.props.children),l.a.createElement("span",null,n&&a.get("Visit"),l.a.createElement("a",{style:{padding:"0px 5px"},href:"https://datacalliope.com",target:"_blank",rel:"noopener noreferrer"},"Calliope \xb7 Data"),n&&a.get("VisitCalliope")))}}]),n}(l.a.Component)),A=(n(313),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={isDownloading:!1},e.download=function(){e.setState({isDownloading:!0});m.c({}).then((function(){}))},e.reUpload=function(){e.props.updateOperation(s.a.BEFORE_UPLOAD)},e.reGnerate=function(){e.props.reGnerate(L[0])},e.editPage=function(){e.props.history.push("/edit/factsheet")},e.click=function(t){var n=e.props,a=n.intl,r=n.initDone;switch(t){case r&&a.get("Upload"):e.reUpload();break;case r&&a.get("Regnerate"):e.reGnerate();break;case r&&a.get("Download"):e.download();break;case r&&a.get("Edit"):e.editPage()}},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.intl,a=t.initDone,r=t.fileName,o=this.state.isDownloading,i=[{iconUrl:"".concat(D,"/upload_white.png"),text:a&&n.get("Upload")},{iconUrl:"".concat(D,"/download/regenerate.png"),text:a&&n.get("Regnerate")},{iconUrl:"".concat(D,"/download/download.png"),text:a&&n.get("Download")},{iconUrl:"".concat(D,"/download/edit.png"),text:a&&n.get("Edit")}];return l.a.createElement(I,Object.assign({myClassName:"toFactsheet",fileName:r,isSpining:o,columnCount:i.length},this.props),i.map((function(t,n){return l.a.createElement(P,{key:"index_"+n,iconUrl:t.iconUrl,text:t.text,onClickListener:function(){return e.click(t.text)}})})))}}]),n}(l.a.Component)),k={GREEN:"rgb(51, 111, 185)",YELLOW:"yellow",BLUE:"#336fb9",GRAY:"lightgray",BAR_BACK:"#222f3d",BAR:"#6CD4FF",BAR_HIGHTLIGHT:"#F6C02A",AREA:"#ffce54",LINE:"#ffce54",BG_ABOVE:"#a1d469",BG_BELOW:"#ed5463",CONVERT:["#064969","#E19788","#D33346","#96A7CE","#B1CC70","#4ECBC4"]};n(314);function U(){U=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var r=t&&t.prototype instanceof p?t:p,o=Object.create(r.prototype),i=new O(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return D()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var u={};function p(){}function h(){}function f(){}var d={};c(d,r,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(x([])));v&&v!==t&&n.call(v,r)&&(d=v);var g=f.prototype=p.prototype=Object.create(d);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;this._invoke=function(r,o){function i(){return new t((function(a,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(p).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:D}}function D(){return{value:void 0,done:!0}}return h.prototype=f,c(g,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new E(l(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),c(g,i,"Generator"),c(g,r,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=x,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;N(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var _=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={operateState:e.props.operateState,convertingType:L[0]},e.generate=function(t){return new Promise(function(){var n=Object(O.a)(U().mark((function n(a,r){var o,i,c,l,u;return U().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.props.fileName,i=setInterval((function(){0===count&&(clearInterval(i),e.setState({operateState:s.a.GENERATED}),e.props.history.push("/show")),count--,e.props.updateProgress(max_iteration,count<0?0:count)}),1500),c=e.props.storyParameter,l={file_name:o,max_story_length:c.maxStoryLength},n.next=6,m.b(t,l);case 6:u=n.sent,clearInterval(i),u.data.fail&&(e.setState({operateState:s.a.FAILED,errorMessage:u.data.fail}),r()),u.data.error&&(e.setState({operateState:s.a.FAILED,errorMessage:u.data.error}),r()),e.props.updateProgress(max_iteration,0),e.setState({operateState:s.a.GENERATED}),a(u);case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())},e.getPannelClassName=function(){switch(e.state.operateState){case s.a.UPLOADED:return"pannelWithConvertType whitePannel";case s.a.GENERATING:case s.a.GENERATED:return"draggerPannelCommon whitePannel";default:return""}},e.isShowProgressbar=function(){return e.state.operateState===s.a.GENERATING},e.clickGenerate=function(t){e.setState({convertingType:t,operateState:s.a.GENERATING});t.name;e.generate(d.a.url.generate).then((function(t){var n,a=t.data.story.facts,r=[],o=Object(N.a)(a);try{for(o.s();!(n=o.n()).done;){var i=n.value,c=new S(i.type,i.measure,i.subspace,i.groupby,i.focus,i.parameter,"",i.score,i.information,i.significance);r.push(c)}}catch(l){o.e(l)}finally{o.f()}e.props.generateStory(r.slice(),["none","similarity","similarity","similarity","similarity","similarity"],1),e.props.history.push("/show")}))},e}return Object(r.a)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.operateState!==this.props.operateState&&this.setState({operateState:e.operateState})}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.intl,r=n.initDone,o=n.generateProgress,i=this.state,u=i.operateState,p=i.convertingType,h=function(e){var n=e.operateState;return l.a.createElement("div",{className:"arrowLineDiv"},l.a.createElement("p",null," ",t.props.generateProgress+"%"),l.a.createElement("div",{className:"arrowLine"}),n===s.a.GENERATED?l.a.createElement("p",null," ",r&&a.get("Success")):l.a.createElement("p",null," ",r&&a.get("Coverting")))},d=function(e){var t=e.fileName;return l.a.createElement("div",{className:"CSVFileImage"},l.a.createElement("div",{className:"csvIconBlack"}),l.a.createElement("span",{className:"fileName"},t))};switch(u){case s.a.UPLOADED:e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:"340px",flex:1}},l.a.createElement("div",{className:"pannel-box"},l.a.createElement(d,{fileName:this.props.fileName}))),l.a.createElement("div",{className:"ConvertFormsDiv",style:{columnCount:Math.ceil(L.length/2)}},L.map((function(e,n){return l.a.createElement("div",{className:"convert-box",key:n,style:{height:1===L.length?"100%":"50%",backgroundColor:k.CONVERT[n]},onClick:function(){return t.clickGenerate(e)}},l.a.createElement("div",{className:"icon",style:{backgroundImage:"url(".concat(e.iconUrl,")")}}),l.a.createElement("span",null,r&&a.get("To".concat(e.name))))})),1!==L.length&&L.length%2!==0?l.a.createElement("div",{style:{height:"50%",visibility:"none",backgroundColor:"transparent"}}):null));break;case s.a.GENERATING:e=l.a.createElement("div",{style:{height:"340px",flex:1}},l.a.createElement("div",{className:"pannel-box"},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{className:"JSONFileImage"},l.a.createElement("div",{className:"jsonIconBlack"}),l.a.createElement("span",{className:"fileName"},"\u6bd4\u8d5b\u6570\u636e")),l.a.createElement("div",{className:"MP4FileImage"},l.a.createElement("div",{className:"mp4IconBlack"}),l.a.createElement("span",{className:"fileName"},"\u6bd4\u8d5b\u89c6\u9891")),l.a.createElement("div",{className:"VHCenter"},l.a.createElement(h,Object.assign({operateState:u},this.props)),l.a.createElement("div",{className:"CSVFileImage"},l.a.createElement("div",{className:"GenerateIcon",style:{backgroundImage:"url(".concat(p.generateIconUrl,")")}}),l.a.createElement("span",{className:"fileName"},"\u6bd4\u8d5b\u5feb\u62a5"))))));break;case s.a.PUBLISHED:var m,v=function(){return l.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",marginTop:"50px"}},l.a.createElement(b.a,null))};switch(p.name){case x.a.FACTSHEET:m=l.a.createElement(A,Object.assign({reGnerate:this.clickGenerate},this.props))}e=l.a.createElement("div",{style:{height:"340px",flex:1}},l.a.createElement("div",{className:"pannel-box"},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",height:"100%"}},l.a.createElement(c.Suspense,{fallback:l.a.createElement(v,null)},m))))}return l.a.createElement("div",{className:this.getPannelClassName()},l.a.createElement(f,{percent:o,isActive:this.isShowProgressbar()}),e)}}]),n}(l.a.Component),C=(n(76),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleGetDataIndex=function(e){console.log("PannelView uuid index"),console.log(e)},e}return Object(r.a)(n,[{key:"render",value:function(){var e,t=this.props,n=(t.intl,t.initDone,t.operateState);switch(n){case s.a.BEFORE_UPLOAD:case s.a.UPLOADIND:case s.a.FAILED:case s.a.FILE_LARGE:case s.a.JSONUPLOADED:e=l.a.createElement(w,Object.assign({getDataIndex:this.handleGetDataIndex,operateState:n},this.props));break;case s.a.UPLOADED:case s.a.GENERATING:case s.a.PUBLISHED:e=l.a.createElement(_,Object.assign({operateState:n},this.props))}return l.a.createElement("div",null,e)}}]),n}(c.Component))},76:function(e,t,n){}}]);
//# sourceMappingURL=10.22f6b715.chunk.js.map