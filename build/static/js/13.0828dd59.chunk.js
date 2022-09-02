/*! For license information please see 13.0828dd59.chunk.js.LICENSE.txt */
(this["webpackJsonpcalliope-lite-backbone"]=this["webpackJsonpcalliope-lite-backbone"]||[]).push([[13,25],{100:function(e,t,a){"use strict";var n="http://calliope-dev.idvxlab.com",r="https://".concat("calliope-service.idvxlab.com",":8002/api/v1"),o="https://".concat("calliope-service.idvxlab.com:8002"),i="https://".concat("calliope-service.idvxlab.com:8002"),c="https://".concat("calliope-service.idvxlab.com",":8002/log/v1"),l="https://account.datacalliope.com",s={url:{applicationUrl:n,publicPrefix:"http://calliope-dev.idvxlab.com",loginadmintest:"".concat(r,"/loginadmintest"),loginRedirectUrl:"".concat(l,"/#/login?response_type=code&client_id=").concat("6dcd0f8b-6990-4d69-9018-29b3351aa6ff","&grant_type=authorization_code&redirect_uri=").concat(n),logoutRedirectUrl:"".concat(n,"/#/logout"),authenUrl:l,accessToken:"".concat(r,"/accesstoken"),userImage:"".concat("https://service.datacalliope.com:8001","/img"),checkToken:"".concat(r,"/checktoken"),logout:"".concat(r,"/logout"),logoutAuthSystem:"".concat("https://service.datacalliope.com:8001","/logout"),users:"".concat(r,"/users"),activitiesApi:"".concat(c,"/users"),uploadDataPrefix:o,uploadData:"".concat(o,"/upload"),uploadVideo:"".concat(o,"/uploadvideo"),share:"".concat(o,"/share"),public:"".concat(o,"/public"),fetch:"".concat(o,"/data/share"),factScoring:"".concat(i,"/fact"),generate:"".concat(i,"/generate")}};t.a=s},105:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"a",(function(){return h})),a.d(t,"c",(function(){return f})),a.d(t,"b",(function(){return m}));var n=a(127),r=a(100),o=a(155),i=a.n(o);function c(){c=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var r=t&&t.prototype instanceof h?t:h,o=Object.create(r.prototype),i=new O(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return D()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=b(i,a);if(c){if(c===p)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=u(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}(e,a,i),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var p={};function h(){}function f(){}function d(){}var m={};l(m,r,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==t&&a.call(g,r)&&(m=g);var y=d.prototype=h.prototype=Object.create(m);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(r,o){function i(){return new t((function(n,i){!function n(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==typeof p&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function L(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:D}}function D(){return{value:void 0,done:!0}}return f.prototype=d,l(y,"constructor",d),l(d,"constructor",f),f.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new w(s(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(y),l(y,i,"Generator"),l(y,r,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;x(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}function l(e){return s.apply(this,arguments)}function s(){return(s=Object(n.a)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){i()({method:"post",url:"".concat(r.a.url.uploadData),config:{headers:{"Content-Type":"multipart/form-data"}},data:t}).then((function(t){t.status>=400?a():200===t.status||201===t.status||204===t.status?e(t.data):a()})).catch((function(e){a()}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=Object(n.a)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){i()({method:"post",url:"".concat(r.a.url.uploadVideo),config:{headers:{"Content-Type":"multipart/form-data"}},data:t}).then((function(t){t.status>=400?a():200===t.status||201===t.status||204===t.status?e(t.data):a()})).catch((function(e){a()}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return i()({method:"post",url:e,config:{headers:{"Content-Type":"application/json; charset=utf-8"}},data:t})}function f(e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i()({method:"post",url:"".concat(r.a.url.share),config:{headers:{"Content-Type":"application/json; charset=utf-8"}},data:{uuid:t}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return i()({method:"post",url:"/generatePDF",param:{},data:e})}},129:function(e,t,a){},156:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(11),r=a(12),o=a(14),i=a(13),c=a(0),l=a.n(c),s=a(27),u=a(30),p=(a(245),a(243)),h=(a(214),a(219)),f=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.percent,a=e.isActive;return l.a.createElement(h.a,{percent:t,status:a?"active":"",showInfo:!1,strokeColor:"#EB6331",style:{position:"absolute",top:"-10px",zIndex:"9999",display:a?"block":"none"}})}}]),a}(l.a.Component),d=a(100),m=a(105),v=a(242),g=(a(156),p.a.Dragger),y=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={originFileOb:{},dataIndex:0,operateState:e.props.operateState,errorMessage:e.props.initDone&&e.props.intl.get("upload failed")},e.uploadDataToCloud=function(t){return new Promise((function(a,n){m.d(t,d.a.url.uploadData).then((function(t){e.setState({operateState:s.a.JSONUPLOADED});e.state.operateState;if(e.setState({dataIndex:t.uuid}),e.props.getDataIndex(t.uuid),"error"===t.status){var r=e.props.intl;return e.setState({operateState:s.a.FAILED,errorMessage:"zh-CN"===r.options.currentLocale?t.message_zh:t.message_en}),n(),null}a(t)}),(function(t){e.setState({operateState:s.a.FAILED,errorMessage:e.props.initDone&&e.props.intl.get("upload failed")}),n()}))}))},e.uploadVideoToCloud=function(t){return new Promise((function(a,n){m.e(t,d.a.url.uploadVideo).then((function(t){var r=e.state.dataIndex;if(e.props.history.push({pathname:"/show",dataIndex:r}),"error"===t.status){var o=e.props.intl;return e.setState({operateState:s.a.FAILED,errorMessage:"zh-CN"===o.options.currentLocale?t.message_zh:t.message_en}),n(),null}a(t)}),(function(t){e.setState({operateState:s.a.FAILED,errorMessage:e.props.initDone&&e.props.intl.get("upload failed")}),n()}))}))},e.processData=function(t){if(t.schema&&t.file_url&&t.file_name){var a=t.schema.fields,n=d.a.url.uploadDataPrefix+t.file_url,r=t.file_name,o=[],i=a.filter((function(e){return"numerical"===e.type}));o=i.map((function(e){return e.field}));var c=Object(u.a)(e);v.a(n).then((function(e){e.forEach((function(e,t){for(var a in e)-1!==o.indexOf(a)&&(e[a]=parseFloat(e[a]))})),c.props.uploadData(r,a,e),this.props.history.push("/show")})).catch((function(e){console.log(e)}))}else{e.state.operateState===s.a.JSONUPLOADED?(e.props.updateOperation(s.a.JSONUPLOADED),e.setState({operateState:s.a.JSONUPLOADED})):e.props.history.push("/show")}},e.onUploadChange=function(t){var a=e.state.operateState;if(a===s.a.JSONUPLOADED&&e.setState({operateState:s.a.UPLOADIND}),a===s.a.BEFORE_UPLOAD&&e.setState({operateState:s.a.JSONUPLOADING}),t.event&&e.props.updateProgress(t.event.total,t.event.total-t.event.loaded),"uploading"!==t.file.status){var n=e.state.dataIndex,r=t.file.originFileObj,o=new FormData;o.append("file",r),o.append("uuid",n),a===s.a.JSONUPLOADING?e.uploadDataToCloud(o).then((function(t){return e.processData(t)})):a===s.a.UPLOADIND?e.uploadVideoToCloud(o).then((function(t){return e.processData(t)})):e.uploadDataToCloud(o).then((function(t){return e.processData(t)}))}},e.beforeUpload=function(e){return new Promise((function(e,t){return e(!0)}))},e.getPannelClassName=function(){switch(e.state.operateState){case s.a.BEFORE_UPLOAD:case s.a.JSONUPLOADED:return"draggerPannelCommon yellowPannel";case s.a.UPLOADED:return"pannelWithConvertType whitePannel";default:return""}},e.isShowProgressbar=function(){var t=e.state.operateState;return t===s.a.UPLOADIND||t===s.a.GENERATING},e}return Object(r.a)(a,[{key:"render",value:function(){var e,t,a=this.props,n=a.intl,r=a.initDone,o=a.generateProgress,i=function(){return l.a.createElement("div",{className:"ClickToUpload"},l.a.createElement("div",null),l.a.createElement("p",null," ",r&&n.get("Click to upload")))};switch(this.state.operateState){case s.a.BEFORE_UPLOAD:t=l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u6570\u636e")),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"JSONFileImage"},l.a.createElement("div",{className:"jsonIconWhite"})),l.a.createElement("div",{className:"uploadView"},l.a.createElement("div",{className:"uploadBtn"},"\u4e0a\u4f20\u6570\u636e")));break;case s.a.JSONUPLOADING:t=l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u6570\u636e")),e=l.a.createElement("div",{className:"uploading"},l.a.createElement("div",{className:"uploadImage"}),l.a.createElement("span",null,r&&n.get("Uploading file")),l.a.createElement("div",{className:"dot"},"..."));break;case s.a.UPLOADIND:t=l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u89c6\u9891")),e=l.a.createElement("div",{className:"uploading"},l.a.createElement("div",{className:"uploadImage"}),l.a.createElement("span",null,r&&n.get("Uploading file")),l.a.createElement("div",{className:"dot"},"..."));break;case s.a.JSONUPLOADED:t=l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u89c6\u9891")),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"MP4FileImage"},l.a.createElement("div",{className:"mp4IconWhite"})),l.a.createElement("div",{className:"uploadView"},l.a.createElement("div",{className:"uploadBtn"},"\u4e0a\u4f20\u89c6\u9891")));break;case s.a.FAILED:t=l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u6570\u636e")),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"errorFailImage"},l.a.createElement("div",{className:"iconFailed"}),l.a.createElement("p",{className:"hintText"},this.state.errorMessage)),l.a.createElement(i,null));break;case s.a.FILE_LARGE:t=l.a.createElement("div",{className:"UploadTxtDiv"},l.a.createElement("div",null)," ",l.a.createElement("span",null,"\u4e0a\u4f20\u8d5b\u573a\u6570\u636e")),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"largeFileView"},l.a.createElement("div",null),l.a.createElement("span",null,r&&n.get("larger than 5MB"))),l.a.createElement(i,null))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,t),l.a.createElement("div",{className:this.getPannelClassName(),style:{position:"relative"}},l.a.createElement(f,{percent:o,isActive:this.isShowProgressbar()}),l.a.createElement("div",{style:{height:"340px",flex:1}},l.a.createElement(g,{beforeUpload:this.beforeUpload,onChange:this.onUploadChange,showUploadList:!1,accept:".json, .mp4"},l.a.createElement("div",{className:"pannelContent"},e)))))}}]),a}(l.a.Component),E=(a(150),a(151)),w=a(241),b=a(127),N=a(29),x="http://calliope-dev.oss-cn-shanghai.aliyuncs.com/image/images",O=[{name:N.a.FACTSHEET,iconUrl:"".concat(x,"/convertType/factsheet.png"),generateIconUrl:"".concat(x,"/convertType/factsheet_black.png")}],L=Object(r.a)((function e(t){var a=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,p=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0;Object(n.a)(this,e),this.script=function(){return a.generatedScript},this.type=t,this.measure=r,this.subspace=o,this.groupby=i,this.focus=c,this.parameter=l,this.score=u,this.information=p,this.significance=h,this.chart=s,this.aggregated=!1,this.aggregatedFact=null,this.compoundType="",this.compoundChart="juxtaposition"})),D=(a(158),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.iconUrl,n=t.text;return l.a.createElement("div",{className:"button-box",onClick:function(){return e.props.onClickListener()}},l.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")}}),l.a.createElement("p",null,n))}}]),a}(l.a.Component)),S=(a(159),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isSpining,a=e.initDone,n=e.intl;return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{tip:a&&n.get("downloading"),spinning:t}))}}]),a}(l.a.Component)),j=(a(160),a(129),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.fileName,a=e.initDone,n=e.intl,r=e.columnCount,o=e.form,i=e.isSpining,c=t&&t.split(".csv")[0],s=function(){return l.a.createElement("div",{className:"fileTypeAndNameView",style:{justifyContent:i?"flex-start":"center"}},l.a.createElement("div",{className:"fileType-icon"}),l.a.createElement("span",{style:{marginBottom:"0px"}},"H5"===o?"":"".concat(c,".pdf")))};return l.a.createElement("div",{className:this.props.myClassName?"generated-view-dox ".concat(this.props.myClassName):"generated-view-dox"},l.a.createElement("span",null,a&&n.get("H5"===o?"convertedTxtH5":"convertedTxt")),l.a.createElement(s,null),l.a.createElement("div",{className:"FuntionView",style:{columnCount:r}},l.a.createElement("div",{className:"download-box"},l.a.createElement(S,Object.assign({isSpining:i},this.props))),this.props.children),l.a.createElement("span",null,a&&n.get("Visit"),l.a.createElement("a",{style:{padding:"0px 5px"},href:"https://datacalliope.com",target:"_blank",rel:"noopener noreferrer"},"Calliope \xb7 Data"),a&&n.get("VisitCalliope")))}}]),a}(l.a.Component)),k=(a(161),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={isDownloading:!1},e.download=function(){e.setState({isDownloading:!0});m.b({}).then((function(){}))},e.reUpload=function(){e.props.updateOperation(s.a.BEFORE_UPLOAD)},e.reGnerate=function(){e.props.reGnerate(O[0])},e.editPage=function(){e.props.history.push("/edit/factsheet")},e.click=function(t){var a=e.props,n=a.intl,r=a.initDone;switch(t){case r&&n.get("Upload"):e.reUpload();break;case r&&n.get("Regnerate"):e.reGnerate();break;case r&&n.get("Download"):e.download();break;case r&&n.get("Edit"):e.editPage()}},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.intl,n=t.initDone,r=t.fileName,o=this.state.isDownloading,i=[{iconUrl:"".concat(x,"/upload_white.png"),text:n&&a.get("Upload")},{iconUrl:"".concat(x,"/download/regenerate.png"),text:n&&a.get("Regnerate")},{iconUrl:"".concat(x,"/download/download.png"),text:n&&a.get("Download")},{iconUrl:"".concat(x,"/download/edit.png"),text:n&&a.get("Edit")}];return l.a.createElement(j,Object.assign({myClassName:"toFactsheet",fileName:r,isSpining:o,columnCount:i.length},this.props),i.map((function(t,a){return l.a.createElement(D,{key:"index_"+a,iconUrl:t.iconUrl,text:t.text,onClickListener:function(){return e.click(t.text)}})})))}}]),a}(l.a.Component)),P={GREEN:"rgb(51, 111, 185)",YELLOW:"yellow",BLUE:"#336fb9",GRAY:"lightgray",BAR_BACK:"#222f3d",BAR:"#6CD4FF",BAR_HIGHTLIGHT:"#F6C02A",AREA:"#ffce54",LINE:"#ffce54",BG_ABOVE:"#a1d469",BG_BELOW:"#ed5463",CONVERT:["#064969","#E19788","#D33346","#96A7CE","#B1CC70","#4ECBC4"]};a(162);function A(){A=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(D){c=function(e,t,a){return e[t]=a}}function l(e,t,a,n){var r=t&&t.prototype instanceof p?t:p,o=Object.create(r.prototype),i=new x(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return L()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=w(i,a);if(c){if(c===u)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=s(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}(e,a,i),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(D){return{type:"throw",arg:D}}}e.wrap=l;var u={};function p(){}function h(){}function f(){}var d={};c(d,r,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==t&&a.call(v,r)&&(d=v);var g=f.prototype=p.prototype=Object.create(d);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(r,o){function i(){return new t((function(n,i){!function n(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==typeof p&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function O(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=f,c(g,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(l(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),c(g,i,"Generator"),c(g,r,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;N(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var I=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={operateState:e.props.operateState,convertingType:O[0]},e.generate=function(t){return new Promise(function(){var a=Object(b.a)(A().mark((function a(n,r){var o,i,c,l,u;return A().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=e.props.fileName,i=setInterval((function(){0===count&&(clearInterval(i),e.setState({operateState:s.a.GENERATED}),e.props.history.push("/show")),count--,e.props.updateProgress(max_iteration,count<0?0:count)}),1500),c=e.props.storyParameter,l={file_name:o,max_story_length:c.maxStoryLength},a.next=6,m.a(t,l);case 6:u=a.sent,clearInterval(i),u.data.fail&&(e.setState({operateState:s.a.FAILED,errorMessage:u.data.fail}),r()),u.data.error&&(e.setState({operateState:s.a.FAILED,errorMessage:u.data.error}),r()),e.props.updateProgress(max_iteration,0),e.setState({operateState:s.a.GENERATED}),n(u);case 13:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())},e.getPannelClassName=function(){switch(e.state.operateState){case s.a.UPLOADED:return"pannelWithConvertType whitePannel";case s.a.GENERATING:case s.a.GENERATED:return"draggerPannelCommon whitePannel";default:return""}},e.isShowProgressbar=function(){return e.state.operateState===s.a.GENERATING},e.clickGenerate=function(t){e.setState({convertingType:t,operateState:s.a.GENERATING});t.name;e.generate(d.a.url.generate).then((function(t){var a,n=t.data.story.facts,r=[],o=Object(w.a)(n);try{for(o.s();!(a=o.n()).done;){var i=a.value,c=new L(i.type,i.measure,i.subspace,i.groupby,i.focus,i.parameter,"",i.score,i.information,i.significance);r.push(c)}}catch(l){o.e(l)}finally{o.f()}e.props.generateStory(r.slice(),["none","similarity","similarity","similarity","similarity","similarity"],1),e.props.history.push("/show")}))},e}return Object(r.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.operateState!==this.props.operateState&&this.setState({operateState:e.operateState})}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.intl,r=a.initDone,o=a.generateProgress,i=this.state,u=i.operateState,p=i.convertingType,h=function(e){var a=e.operateState;return l.a.createElement("div",{className:"arrowLineDiv"},l.a.createElement("p",null," ",t.props.generateProgress+"%"),l.a.createElement("div",{className:"arrowLine"}),a===s.a.GENERATED?l.a.createElement("p",null," ",r&&n.get("Success")):l.a.createElement("p",null," ",r&&n.get("Coverting")))},d=function(e){var t=e.fileName;return l.a.createElement("div",{className:"CSVFileImage"},l.a.createElement("div",{className:"csvIconBlack"}),l.a.createElement("span",{className:"fileName"},t))};switch(u){case s.a.UPLOADED:e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:"340px",flex:1}},l.a.createElement("div",{className:"pannel-box"},l.a.createElement(d,{fileName:this.props.fileName}))),l.a.createElement("div",{className:"ConvertFormsDiv",style:{columnCount:Math.ceil(O.length/2)}},O.map((function(e,a){return l.a.createElement("div",{className:"convert-box",key:a,style:{height:1===O.length?"100%":"50%",backgroundColor:P.CONVERT[a]},onClick:function(){return t.clickGenerate(e)}},l.a.createElement("div",{className:"icon",style:{backgroundImage:"url(".concat(e.iconUrl,")")}}),l.a.createElement("span",null,r&&n.get("To".concat(e.name))))})),1!==O.length&&O.length%2!==0?l.a.createElement("div",{style:{height:"50%",visibility:"none",backgroundColor:"transparent"}}):null));break;case s.a.GENERATING:e=l.a.createElement("div",{style:{height:"340px",flex:1}},l.a.createElement("div",{className:"pannel-box"},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{className:"JSONFileImage"},l.a.createElement("div",{className:"jsonIconBlack"}),l.a.createElement("span",{className:"fileName"},"\u6bd4\u8d5b\u6570\u636e")),l.a.createElement("div",{className:"MP4FileImage"},l.a.createElement("div",{className:"mp4IconBlack"}),l.a.createElement("span",{className:"fileName"},"\u6bd4\u8d5b\u89c6\u9891")),l.a.createElement("div",{className:"VHCenter"},l.a.createElement(h,Object.assign({operateState:u},this.props)),l.a.createElement("div",{className:"CSVFileImage"},l.a.createElement("div",{className:"GenerateIcon",style:{backgroundImage:"url(".concat(p.generateIconUrl,")")}}),l.a.createElement("span",{className:"fileName"},"\u6bd4\u8d5b\u5feb\u62a5"))))));break;case s.a.PUBLISHED:var m,v=function(){return l.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",marginTop:"50px"}},l.a.createElement(E.a,null))};switch(p.name){case N.a.FACTSHEET:m=l.a.createElement(k,Object.assign({reGnerate:this.clickGenerate},this.props))}e=l.a.createElement("div",{style:{height:"340px",flex:1}},l.a.createElement("div",{className:"pannel-box"},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",height:"100%"}},l.a.createElement(c.Suspense,{fallback:l.a.createElement(v,null)},m))))}return l.a.createElement("div",{className:this.getPannelClassName()},l.a.createElement(f,{percent:o,isActive:this.isShowProgressbar()}),e)}}]),a}(l.a.Component),C=(a(78),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleGetDataIndex=function(e){console.log("PannelView uuid index"),console.log(e)},e}return Object(r.a)(a,[{key:"render",value:function(){var e,t=this.props,a=(t.intl,t.initDone,t.operateState);switch(a){case s.a.BEFORE_UPLOAD:case s.a.UPLOADIND:case s.a.FAILED:case s.a.FILE_LARGE:case s.a.JSONUPLOADED:e=l.a.createElement(y,Object.assign({getDataIndex:this.handleGetDataIndex,operateState:a},this.props));break;case s.a.UPLOADED:case s.a.GENERATING:case s.a.PUBLISHED:e=l.a.createElement(I,Object.assign({operateState:a},this.props))}return l.a.createElement("div",null,e)}}]),a}(c.Component))},78:function(e,t,a){}}]);
//# sourceMappingURL=13.0828dd59.chunk.js.map