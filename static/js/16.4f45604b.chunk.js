(this["webpackJsonpcalliope-pingpong"]=this["webpackJsonpcalliope-pingpong"]||[]).push([[16,24],{148:function(e,t,n){"use strict";n(101),n(171)},150:function(e,t,n){"use strict";var a=n(100),r=n(26),c=n(92),o=n(1),i=n(91),l=n.n(i),s=n(0),u=n(221),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},d=s.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function p(e){var t=e.suffixCls,n=e.tagName;e.displayName;return function(e){return s.forwardRef((function(a,r){var c=s.useContext(u.b).getPrefixCls,i=a.prefixCls,l=c(t,i);return s.createElement(e,Object(o.a)({ref:r,prefixCls:l,tagName:n},a))}))}}var m=s.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,r=e.children,c=e.tagName,i=f(e,["prefixCls","className","children","tagName"]),u=l()(n,a);return s.createElement(c,Object(o.a)(Object(o.a)({className:u},i),{ref:t}),r)})),b=s.forwardRef((function(e,t){var n,i=s.useContext(u.b).direction,p=s.useState([]),m=Object(c.a)(p,2),b=m[0],h=m[1],v=e.prefixCls,O=e.className,g=e.children,y=e.hasSider,j=e.tagName,x=f(e,["prefixCls","className","children","hasSider","tagName"]),E=l()(v,(n={},Object(r.a)(n,"".concat(v,"-has-sider"),"boolean"===typeof y?y:b.length>0),Object(r.a)(n,"".concat(v,"-rtl"),"rtl"===i),n),O),N=s.useMemo((function(){return{siderHook:{addSider:function(e){h((function(t){return[].concat(Object(a.a)(t),[e])}))},removeSider:function(e){h((function(t){return t.filter((function(t){return t!==e}))}))}}}}),[]);return s.createElement(d.Provider,{value:N},s.createElement(j,Object(o.a)({ref:t,className:E},x),g))})),h=p({suffixCls:"layout",tagName:"section",displayName:"Layout"})(b),v=p({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(m),O=p({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(m),g=p({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(m),y=h,j=n(18),x={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},E=n(95),N=function(e,t){return s.createElement(E.a,Object(j.a)(Object(j.a)({},e),{},{ref:t,icon:x}))};N.displayName="BarsOutlined";var w=s.forwardRef(N),C=n(154),S=n(153),P=n(104),k=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},L=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},R={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},z=s.createContext({}),I=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}();var A=s.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,i=e.trigger,f=e.children,p=e.defaultCollapsed,m=void 0!==p&&p,b=e.theme,h=void 0===b?"dark":b,v=e.style,O=void 0===v?{}:v,g=e.collapsible,y=void 0!==g&&g,j=e.reverseArrow,x=void 0!==j&&j,E=e.width,N=void 0===E?200:E,A=e.collapsedWidth,B=void 0===A?80:A,H=e.zeroWidthTriggerStyle,T=e.breakpoint,M=e.onCollapse,F=e.onBreakpoint,U=L(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),D=Object(s.useContext)(d).siderHook,W=Object(s.useState)("collapsed"in U?U.collapsed:m),_=Object(c.a)(W,2),J=_[0],V=_[1],Y=Object(s.useState)(!1),q=Object(c.a)(Y,2),G=q[0],K=q[1];Object(s.useEffect)((function(){"collapsed"in U&&V(U.collapsed)}),[U.collapsed]);var Q=function(e,t){"collapsed"in U||V(e),null===M||void 0===M||M(e,t)},X=Object(s.useRef)();X.current=function(e){K(e.matches),null===F||void 0===F||F(e.matches),J!==e.matches&&Q(e.matches,"responsive")},Object(s.useEffect)((function(){function e(e){return X.current(e)}var t;if("undefined"!==typeof window){var n=window.matchMedia;if(n&&T&&T in R){t=n("(max-width: ".concat(R[T],")"));try{t.addEventListener("change",e)}catch(a){t.addListener(e)}e(t)}}return function(){try{null===t||void 0===t||t.removeEventListener("change",e)}catch(a){null===t||void 0===t||t.removeListener(e)}}}),[T]),Object(s.useEffect)((function(){var e=I("ant-sider-");return D.addSider(e),function(){return D.removeSider(e)}}),[]);var Z=function(){Q(!J,"clickTrigger")},$=Object(s.useContext)(u.b).getPrefixCls,ee=s.useMemo((function(){return{siderCollapsed:J}}),[J]);return s.createElement(z.Provider,{value:ee},function(){var e,c=$("layout-sider",n),u=Object(P.a)(U,["collapsed"]),d=J?B:N,p=k(d)?"".concat(d,"px"):String(d),m=0===parseFloat(String(B||0))?s.createElement("span",{onClick:Z,className:l()("".concat(c,"-zero-width-trigger"),"".concat(c,"-zero-width-trigger-").concat(x?"right":"left")),style:H},i||s.createElement(w,null)):null,b={expanded:x?s.createElement(S.a,null):s.createElement(C.a,null),collapsed:x?s.createElement(C.a,null):s.createElement(S.a,null)}[J?"collapsed":"expanded"],v=null!==i?m||s.createElement("div",{className:"".concat(c,"-trigger"),onClick:Z,style:{width:p}},i||b):null,g=Object(o.a)(Object(o.a)({},O),{flex:"0 0 ".concat(p),maxWidth:p,minWidth:p,width:p}),j=l()(c,"".concat(c,"-").concat(h),(e={},Object(r.a)(e,"".concat(c,"-collapsed"),!!J),Object(r.a)(e,"".concat(c,"-has-trigger"),y&&null!==i&&!m),Object(r.a)(e,"".concat(c,"-below"),!!G),Object(r.a)(e,"".concat(c,"-zero-width"),0===parseFloat(p)),e),a);return s.createElement("aside",Object(o.a)({className:j},u,{style:g,ref:t}),s.createElement("div",{className:"".concat(c,"-children")},f),y||G&&m?v:null)}())})),B=y;B.Header=v,B.Footer=O,B.Content=g,B.Sider=A;t.a=B},153:function(e,t,n){"use strict";var a=n(18),r=n(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},o=n(95),i=function(e,t){return r.createElement(o.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:c}))};i.displayName="RightOutlined";t.a=r.forwardRef(i)},154:function(e,t,n){"use strict";var a=n(18),r=n(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},o=n(95),i=function(e,t){return r.createElement(o.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:c}))};i.displayName="LeftOutlined";t.a=r.forwardRef(i)},155:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(7),r=function(e){return{type:a.a.UPDATE_USER_INFO,userInfo:e}},c=function(e){return{type:a.a.UPDATE_USER_OPERATION,operateState:e}},o=function(e){return{type:a.a.UPDATE_CONVERT_TYPE,convertType:e}}},171:function(e,t,n){},172:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(17),r=n.n(a),c=function(e){return e.user.operateState},o=function(e){return e.user.isLogin},i=function(e){return r.a.get("userInfo")&&JSON.parse(r.a.get("userInfo"))?JSON.parse(r.a.get("userInfo")):{username:"",uid:-1}}},220:function(e,t,n){},229:function(e,t,n){"use strict";var a=n(28),r=n(11),c=n(12),o=n(14),i=n(13),l=n(0),s=n.n(l),u=(n(220),n(27)),f=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).back=function(){e.props.updateOperation(u.a.BEFORE_UPLOAD),e.props.history.push("/")},e}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"headerBarWrapper"},s.a.createElement("div",{className:"headerBarLeft"},s.a.createElement("div",{onClick:this.back}),s.a.createElement("span",null,"\u56fd\u5bb6\u4e52\u4e53\u7403\u961f\u5927\u6570\u636e\u5e73\u53f0")))}}]),n}(l.Component),d=n(172),p=n(155);t.a=Object(a.b)((function(e){return{isLogin:Object(d.b)(e),userInfo:Object(d.a)(e)}}),(function(e){return{updateUserInfo:function(t){return e(p.c(t))},updateOperation:function(t){return e(p.b(t))}}}))(f)},239:function(e,t,n){"use strict";n(101),n(240)},240:function(e,t,n){},241:function(e,t,n){"use strict";var a=n(1),r=n(26),c=n(91),o=n.n(c),i=n(0),l=n(221),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n=i.useContext(l.b),c=n.getPrefixCls,u=n.direction,f=e.prefixCls,d=e.type,p=void 0===d?"horizontal":d,m=e.orientation,b=void 0===m?"center":m,h=e.orientationMargin,v=e.className,O=e.children,g=e.dashed,y=e.plain,j=s(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),x=c("divider",f),E=b.length>0?"-".concat(b):b,N=!!O,w="left"===b&&null!=h,C="right"===b&&null!=h,S=o()(x,"".concat(x,"-").concat(p),(t={},Object(r.a)(t,"".concat(x,"-with-text"),N),Object(r.a)(t,"".concat(x,"-with-text").concat(E),N),Object(r.a)(t,"".concat(x,"-dashed"),!!g),Object(r.a)(t,"".concat(x,"-plain"),!!y),Object(r.a)(t,"".concat(x,"-rtl"),"rtl"===u),Object(r.a)(t,"".concat(x,"-no-default-orientation-margin-left"),w),Object(r.a)(t,"".concat(x,"-no-default-orientation-margin-right"),C),t),v),P=Object(a.a)(Object(a.a)({},w&&{marginLeft:h}),C&&{marginRight:h});return i.createElement("div",Object(a.a)({className:S},j,{role:"separator"}),O&&i.createElement("span",{className:"".concat(x,"-inner-text"),style:P},O))}},48:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));n(130);var a=n(123),r=(n(239),n(241)),c=n(11),o=n(12),i=n(14),l=n(13),s=(n(148),n(150)),u=n(0),f=n.n(u),d=n(229),p=n(27),m=(n(84),s.a.Header),b=s.a.Content,h=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).publish=function(){e.props.updateOperation(p.a.PUBLISHED),e.props.history.push("/")},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.intl,n=e.initDone;return f.a.createElement(s.a,null,f.a.createElement(m,{style:{height:"50px"}},f.a.createElement(d.a,Object.assign({isLogIn:!1},this.props))),f.a.createElement(r.a,{className:"customDivider"}),f.a.createElement(b,{className:"eidt-page-wrapper"},"render your edit page",f.a.createElement(a.a,{className:"save-btn",onClick:this.publish},n&&t.get("publish"))))}}]),n}(f.a.Component)},84:function(e,t,n){}}]);
//# sourceMappingURL=16.4f45604b.chunk.js.map