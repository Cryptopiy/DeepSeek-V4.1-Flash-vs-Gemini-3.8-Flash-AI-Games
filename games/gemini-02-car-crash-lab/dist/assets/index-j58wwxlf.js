var zv=Object.defineProperty;var Bv=(t,e,n)=>e in t?zv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>Bv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Gv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bm={exports:{}},Il={},Cm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),Hv=Symbol.for("react.portal"),Vv=Symbol.for("react.fragment"),Wv=Symbol.for("react.strict_mode"),jv=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),qv=Symbol.for("react.context"),Yv=Symbol.for("react.forward_ref"),$v=Symbol.for("react.suspense"),Kv=Symbol.for("react.memo"),Zv=Symbol.for("react.lazy"),Od=Symbol.iterator;function Jv(t){return t===null||typeof t!="object"?null:(t=Od&&t[Od]||t["@@iterator"],typeof t=="function"?t:null)}var Rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,Lm={};function ks(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||Rm}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nm(){}Nm.prototype=ks.prototype;function Sh(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||Rm}var Eh=Sh.prototype=new Nm;Eh.constructor=Sh;Pm(Eh,ks.prototype);Eh.isPureReactComponent=!0;var Fd=Array.isArray,Dm=Object.prototype.hasOwnProperty,wh={current:null},Im={key:!0,ref:!0,__self:!0,__source:!0};function Um(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dm.call(e,i)&&!Im.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:jo,type:t,key:s,ref:o,props:r,_owner:wh.current}}function Qv(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Th(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function ex(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kd=/\/+/g;function sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ex(""+t.key):e.toString(36)}function Va(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case Hv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+sc(o,0):i,Fd(r)?(n="",t!=null&&(n=t.replace(kd,"$&/")+"/"),Va(r,e,n,"",function(c){return c})):r!=null&&(Th(r)&&(r=Qv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(kd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Fd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+sc(s,a);o+=Va(s,e,n,l,r)}else if(l=Jv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+sc(s,a++),o+=Va(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ta(t,e,n){if(t==null)return t;var i=[],r=0;return Va(t,i,"","",function(s){return e.call(n,s,r++)}),i}function tx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Wa={transition:null},nx={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:wh};function Om(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!Th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=ks;Ye.Fragment=Vv;Ye.Profiler=jv;Ye.PureComponent=Sh;Ye.StrictMode=Wv;Ye.Suspense=$v;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nx;Ye.act=Om;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Pm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dm.call(e,l)&&!Im.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:jo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:qv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xv,_context:t},t.Consumer=t};Ye.createElement=Um;Ye.createFactory=function(t){var e=Um.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Yv,render:t}};Ye.isValidElement=Th;Ye.lazy=function(t){return{$$typeof:Zv,_payload:{_status:-1,_result:t},_init:tx}};Ye.memo=function(t,e){return{$$typeof:Kv,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Wa.transition;Wa.transition={};try{t()}finally{Wa.transition=e}};Ye.unstable_act=Om;Ye.useCallback=function(t,e){return nn.current.useCallback(t,e)};Ye.useContext=function(t){return nn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return nn.current.useEffect(t,e)};Ye.useId=function(){return nn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return nn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Ye.useRef=function(t){return nn.current.useRef(t)};Ye.useState=function(t){return nn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return nn.current.useTransition()};Ye.version="18.3.1";Cm.exports=Ye;var Mt=Cm.exports;const ix=Gv(Mt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx=Mt,sx=Symbol.for("react.element"),ox=Symbol.for("react.fragment"),ax=Object.prototype.hasOwnProperty,lx=rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cx={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ax.call(e,i)&&!cx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sx,type:t,key:s,ref:o,props:r,_owner:lx.current}}Il.Fragment=ox;Il.jsx=Fm;Il.jsxs=Fm;bm.exports=Il;var S=bm.exports,gu={},km={exports:{}},wn={},zm={exports:{}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,F){var G=I.length;I.push(F);e:for(;0<G;){var Q=G-1>>>1,se=I[Q];if(0<r(se,F))I[Q]=F,I[G]=se,G=Q;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var F=I[0],G=I.pop();if(G!==F){I[0]=G;e:for(var Q=0,se=I.length,Ne=se>>>1;Q<Ne;){var V=2*(Q+1)-1,ne=I[V],pe=V+1,Te=I[pe];if(0>r(ne,G))pe<se&&0>r(Te,ne)?(I[Q]=Te,I[pe]=G,Q=pe):(I[Q]=ne,I[V]=G,Q=V);else if(pe<se&&0>r(Te,G))I[Q]=Te,I[pe]=G,Q=pe;else break e}}return F}function r(I,F){var G=I.sortIndex-F.sortIndex;return G!==0?G:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,v=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=I)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function y(I){if(_=!1,g(I),!v)if(n(l)!==null)v=!0,k(b);else{var F=n(c);F!==null&&Z(y,F.startTime-I)}}function b(I,F){v=!1,_&&(_=!1,d(P),P=-1),p=!0;var G=f;try{for(g(F),h=n(l);h!==null&&(!(h.expirationTime>F)||I&&!C());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,f=h.priorityLevel;var se=Q(h.expirationTime<=F);F=t.unstable_now(),typeof se=="function"?h.callback=se:h===n(l)&&i(l),g(F)}else i(l);h=n(l)}if(h!==null)var Ne=!0;else{var V=n(c);V!==null&&Z(y,V.startTime-F),Ne=!1}return Ne}finally{h=null,f=G,p=!1}}var A=!1,w=null,P=-1,z=5,M=-1;function C(){return!(t.unstable_now()-M<z)}function X(){if(w!==null){var I=t.unstable_now();M=I;var F=!0;try{F=w(!0,I)}finally{F?$():(A=!1,w=null)}}else A=!1}var $;if(typeof x=="function")$=function(){x(X)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,q=N.port2;N.port1.onmessage=X,$=function(){q.postMessage(null)}}else $=function(){m(X,0)};function k(I){w=I,A||(A=!0,$())}function Z(I,F){P=m(function(){I(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,k(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var G=f;f=F;try{return I()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var G=f;f=I;try{return F()}finally{f=G}},t.unstable_scheduleCallback=function(I,F,G){var Q=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Q+G:Q):G=Q,I){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=G+se,I={id:u++,callback:F,priorityLevel:I,startTime:G,expirationTime:se,sortIndex:-1},G>Q?(I.sortIndex=G,e(c,I),n(l)===null&&I===n(c)&&(_?(d(P),P=-1):_=!0,Z(y,G-Q))):(I.sortIndex=se,e(l,I),v||p||(v=!0,k(b))),I},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(I){var F=f;return function(){var G=f;f=F;try{return I.apply(this,arguments)}finally{f=G}}}})(Bm);zm.exports=Bm;var ux=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx=Mt,En=ux;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gm=new Set,wo={};function Fr(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(wo[t]=e,t=0;t<e.length;t++)Gm.add(e[t])}var Ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,dx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zd={},Bd={};function fx(t){return vu.call(Bd,t)?!0:vu.call(zd,t)?!1:dx.test(t)?Bd[t]=!0:(zd[t]=!0,!1)}function px(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mx(t,e,n,i){if(e===null||typeof e>"u"||px(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ah=/[\-:]([a-z])/g;function bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ah,bh);Gt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ah,bh);Gt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ah,bh);Gt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ch(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mx(e,n,r,i)&&(n=null),i||r===null?fx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),Rh=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Vm=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),yu=Symbol.for("react.suspense_list"),Lh=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),Wm=Symbol.for("react.offscreen"),Gd=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=Gd&&t[Gd]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,oc;function ao(t){if(oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oc=e&&e[1]||""}return`
`+oc+t}var ac=!1;function lc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function gx(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=lc(t.type,!1),t;case 11:return t=lc(t.type.render,!1),t;case 1:return t=lc(t.type,!0),t;default:return""}}function Mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case xu:return"Profiler";case Rh:return"StrictMode";case _u:return"Suspense";case yu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vm:return(t.displayName||"Context")+".Consumer";case Hm:return(t._context.displayName||"Context")+".Provider";case Ph:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lh:return e=t.displayName||null,e!==null?e:Mu(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return Mu(t(e))}catch{}}return null}function vx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mu(e);case 8:return e===Rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xx(t){var e=jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ia(t){t._valueTracker||(t._valueTracker=xx(t))}function Xm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Su(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qm(t,e){e=e.checked,e!=null&&Ch(t,"checked",e,!1)}function Eu(t,e){qm(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&wu(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wu(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function _s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(lo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function Ym(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $m(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$m(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ra,Km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ra=ra||document.createElement("div"),ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_x=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){_x.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function Zm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function Jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var yx=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(t,e){if(e){if(yx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Cu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=null;function Nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pu=null,ys=null,Ms=null;function Xd(t){if(t=Yo(t)){if(typeof Pu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=zl(e),Pu(t.stateNode,t.type,e))}}function Qm(t){ys?Ms?Ms.push(t):Ms=[t]:ys=t}function e0(){if(ys){var t=ys,e=Ms;if(Ms=ys=null,Xd(t),e)for(t=0;t<e.length;t++)Xd(e[t])}}function t0(t,e){return t(e)}function n0(){}var cc=!1;function i0(t,e,n){if(cc)return t(e,n);cc=!0;try{return t0(t,e,n)}finally{cc=!1,(ys!==null||Ms!==null)&&(n0(),e0())}}function Ao(t,e){var n=t.stateNode;if(n===null)return null;var i=zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Lu=!1;if(Ei)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Lu=!1}function Mx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var fo=!1,il=null,rl=!1,Nu=null,Sx={onError:function(t){fo=!0,il=t}};function Ex(t,e,n,i,r,s,o,a,l){fo=!1,il=null,Mx.apply(Sx,arguments)}function wx(t,e,n,i,r,s,o,a,l){if(Ex.apply(this,arguments),fo){if(fo){var c=il;fo=!1,il=null}else throw Error(ie(198));rl||(rl=!0,Nu=c)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function r0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qd(t){if(kr(t)!==t)throw Error(ie(188))}function Tx(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return qd(r),t;if(s===i)return qd(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function s0(t){return t=Tx(t),t!==null?o0(t):null}function o0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o0(t);if(e!==null)return e;t=t.sibling}return null}var a0=En.unstable_scheduleCallback,Yd=En.unstable_cancelCallback,Ax=En.unstable_shouldYield,bx=En.unstable_requestPaint,St=En.unstable_now,Cx=En.unstable_getCurrentPriorityLevel,Dh=En.unstable_ImmediatePriority,l0=En.unstable_UserBlockingPriority,sl=En.unstable_NormalPriority,Rx=En.unstable_LowPriority,c0=En.unstable_IdlePriority,Ul=null,ri=null;function Px(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:Dx,Lx=Math.log,Nx=Math.LN2;function Dx(t){return t>>>=0,t===0?32:31-(Lx(t)/Nx|0)|0}var sa=64,oa=4194304;function co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=co(a):(s&=o,s!==0&&(i=co(s)))}else o=n&~r,o!==0?i=co(o):s!==0&&(i=co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ix(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ux(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ix(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Du(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u0(){var t=sa;return sa<<=1,!(sa&4194240)&&(sa=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function Ox(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ih(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function h0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d0,Uh,f0,p0,m0,Iu=!1,aa=[],Vi=null,Wi=null,ji=null,bo=new Map,Co=new Map,Fi=[],Fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(e.pointerId)}}function qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yo(e),e!==null&&Uh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function kx(t,e,n,i,r){switch(e){case"focusin":return Vi=qs(Vi,t,e,n,i,r),!0;case"dragenter":return Wi=qs(Wi,t,e,n,i,r),!0;case"mouseover":return ji=qs(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return bo.set(s,qs(bo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Co.set(s,qs(Co.get(s)||null,t,e,n,i,r)),!0}return!1}function g0(t){var e=Sr(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=r0(n),e!==null){t.blockedOn=e,m0(t.priority,function(){f0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ru=i,n.target.dispatchEvent(i),Ru=null}else return e=Yo(n),e!==null&&Uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Kd(t,e,n){ja(t)&&n.delete(e)}function zx(){Iu=!1,Vi!==null&&ja(Vi)&&(Vi=null),Wi!==null&&ja(Wi)&&(Wi=null),ji!==null&&ja(ji)&&(ji=null),bo.forEach(Kd),Co.forEach(Kd)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Iu||(Iu=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,zx)))}function Ro(t){function e(r){return Ys(r,t)}if(0<aa.length){Ys(aa[0],t);for(var n=1;n<aa.length;n++){var i=aa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&Ys(Vi,t),Wi!==null&&Ys(Wi,t),ji!==null&&Ys(ji,t),bo.forEach(e),Co.forEach(e),n=0;n<Fi.length;n++)i=Fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Fi.length&&(n=Fi[0],n.blockedOn===null);)g0(n),n.blockedOn===null&&Fi.shift()}var Ss=bi.ReactCurrentBatchConfig,al=!0;function Bx(t,e,n,i){var r=tt,s=Ss.transition;Ss.transition=null;try{tt=1,Oh(t,e,n,i)}finally{tt=r,Ss.transition=s}}function Gx(t,e,n,i){var r=tt,s=Ss.transition;Ss.transition=null;try{tt=4,Oh(t,e,n,i)}finally{tt=r,Ss.transition=s}}function Oh(t,e,n,i){if(al){var r=Uu(t,e,n,i);if(r===null)yc(t,e,i,ll,n),$d(t,i);else if(kx(r,t,e,n,i))i.stopPropagation();else if($d(t,i),e&4&&-1<Fx.indexOf(t)){for(;r!==null;){var s=Yo(r);if(s!==null&&d0(s),s=Uu(t,e,n,i),s===null&&yc(t,e,i,ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else yc(t,e,i,null,n)}}var ll=null;function Uu(t,e,n,i){if(ll=null,t=Nh(i),t=Sr(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=r0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function v0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cx()){case Dh:return 1;case l0:return 4;case sl:case Rx:return 16;case c0:return 536870912;default:return 16}default:return 16}}var Bi=null,Fh=null,Xa=null;function x0(){if(Xa)return Xa;var t,e=Fh,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Xa=r.slice(t,1<i?1-i:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function Zd(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?la:Zd,this.isPropagationStopped=Zd,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kh=Tn(zs),qo=xt({},zs,{view:0,detail:0}),Hx=Tn(qo),hc,dc,$s,Ol=xt({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(hc=t.screenX-$s.screenX,dc=t.screenY-$s.screenY):dc=hc=0,$s=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Jd=Tn(Ol),Vx=xt({},Ol,{dataTransfer:0}),Wx=Tn(Vx),jx=xt({},qo,{relatedTarget:0}),fc=Tn(jx),Xx=xt({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),qx=Tn(Xx),Yx=xt({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$x=Tn(Yx),Kx=xt({},zs,{data:0}),Qd=Tn(Kx),Zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qx[t])?!!e[t]:!1}function zh(){return e_}var t_=xt({},qo,{key:function(t){if(t.key){var e=Zx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),n_=Tn(t_),i_=xt({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ef=Tn(i_),r_=xt({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),s_=Tn(r_),o_=xt({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),a_=Tn(o_),l_=xt({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),c_=Tn(l_),u_=[9,13,27,32],Bh=Ei&&"CompositionEvent"in window,po=null;Ei&&"documentMode"in document&&(po=document.documentMode);var h_=Ei&&"TextEvent"in window&&!po,_0=Ei&&(!Bh||po&&8<po&&11>=po),tf=" ",nf=!1;function y0(t,e){switch(t){case"keyup":return u_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function d_(t,e){switch(t){case"compositionend":return M0(e);case"keypress":return e.which!==32?null:(nf=!0,tf);case"textInput":return t=e.data,t===tf&&nf?null:t;default:return null}}function f_(t,e){if(os)return t==="compositionend"||!Bh&&y0(t,e)?(t=x0(),Xa=Fh=Bi=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _0&&e.locale!=="ko"?null:e.data;default:return null}}var p_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!p_[t.type]:e==="textarea"}function S0(t,e,n,i){Qm(i),e=cl(e,"onChange"),0<e.length&&(n=new kh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var mo=null,Po=null;function m_(t){D0(t,0)}function Fl(t){var e=cs(t);if(Xm(e))return t}function g_(t,e){if(t==="change")return e}var E0=!1;if(Ei){var pc;if(Ei){var mc="oninput"in document;if(!mc){var sf=document.createElement("div");sf.setAttribute("oninput","return;"),mc=typeof sf.oninput=="function"}pc=mc}else pc=!1;E0=pc&&(!document.documentMode||9<document.documentMode)}function of(){mo&&(mo.detachEvent("onpropertychange",w0),Po=mo=null)}function w0(t){if(t.propertyName==="value"&&Fl(Po)){var e=[];S0(e,Po,t,Nh(t)),i0(m_,e)}}function v_(t,e,n){t==="focusin"?(of(),mo=e,Po=n,mo.attachEvent("onpropertychange",w0)):t==="focusout"&&of()}function x_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Po)}function __(t,e){if(t==="click")return Fl(e)}function y_(t,e){if(t==="input"||t==="change")return Fl(e)}function M_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:M_;function Lo(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vu.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function af(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lf(t,e){var n=af(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=af(n)}}function T0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function A0(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function S_(t){var e=A0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&T0(n.ownerDocument.documentElement,n)){if(i!==null&&Gh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=lf(n,s);var o=lf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var E_=Ei&&"documentMode"in document&&11>=document.documentMode,as=null,Ou=null,go=null,Fu=!1;function cf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fu||as==null||as!==nl(i)||(i=as,"selectionStart"in i&&Gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),go&&Lo(go,i)||(go=i,i=cl(Ou,"onSelect"),0<i.length&&(e=new kh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=as)))}function ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},gc={},b0={};Ei&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function kl(t){if(gc[t])return gc[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in b0)return gc[t]=e[n];return t}var C0=kl("animationend"),R0=kl("animationiteration"),P0=kl("animationstart"),L0=kl("transitionend"),N0=new Map,uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){N0.set(t,e),Fr(e,[t])}for(var vc=0;vc<uf.length;vc++){var xc=uf[vc],w_=xc.toLowerCase(),T_=xc[0].toUpperCase()+xc.slice(1);rr(w_,"on"+T_)}rr(C0,"onAnimationEnd");rr(R0,"onAnimationIteration");rr(P0,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(L0,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A_=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function hf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wx(i,e,void 0,t),t.currentTarget=null}function D0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;hf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;hf(r,a,c),s=l}}}if(rl)throw t=Nu,rl=!1,Nu=null,t}function ot(t,e){var n=e[Hu];n===void 0&&(n=e[Hu]=new Set);var i=t+"__bubble";n.has(i)||(I0(e,t,2,!1),n.add(i))}function _c(t,e,n){var i=0;e&&(i|=4),I0(n,t,i,e)}var ua="_reactListening"+Math.random().toString(36).slice(2);function No(t){if(!t[ua]){t[ua]=!0,Gm.forEach(function(n){n!=="selectionchange"&&(A_.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ua]||(e[ua]=!0,_c("selectionchange",!1,e))}}function I0(t,e,n,i){switch(v0(e)){case 1:var r=Bx;break;case 4:r=Gx;break;default:r=Oh}n=r.bind(null,e,n,t),r=void 0,!Lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function yc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}i0(function(){var c=s,u=Nh(n),h=[];e:{var f=N0.get(t);if(f!==void 0){var p=kh,v=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":p=n_;break;case"focusin":v="focus",p=fc;break;case"focusout":v="blur",p=fc;break;case"beforeblur":case"afterblur":p=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=s_;break;case C0:case R0:case P0:p=qx;break;case L0:p=a_;break;case"scroll":p=Hx;break;case"wheel":p=c_;break;case"copy":case"cut":case"paste":p=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ef}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var x=c,g;x!==null;){g=x;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,d!==null&&(y=Ao(x,d),y!=null&&_.push(Do(x,y,g)))),m)break;x=x.return}0<_.length&&(f=new p(f,v,null,n,u),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ru&&(v=n.relatedTarget||n.fromElement)&&(Sr(v)||v[wi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Sr(v):null,v!==null&&(m=kr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(_=Jd,y="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=ef,y="onPointerLeave",d="onPointerEnter",x="pointer"),m=p==null?f:cs(p),g=v==null?f:cs(v),f=new _(y,x+"leave",p,n,u),f.target=m,f.relatedTarget=g,y=null,Sr(u)===c&&(_=new _(d,x+"enter",v,n,u),_.target=g,_.relatedTarget=m,y=_),m=y,p&&v)t:{for(_=p,d=v,x=0,g=_;g;g=Br(g))x++;for(g=0,y=d;y;y=Br(y))g++;for(;0<x-g;)_=Br(_),x--;for(;0<g-x;)d=Br(d),g--;for(;x--;){if(_===d||d!==null&&_===d.alternate)break t;_=Br(_),d=Br(d)}_=null}else _=null;p!==null&&df(h,f,p,_,!1),v!==null&&m!==null&&df(h,m,v,_,!0)}}e:{if(f=c?cs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=g_;else if(rf(f))if(E0)b=y_;else{b=x_;var A=v_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=__);if(b&&(b=b(t,c))){S0(h,b,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&wu(f,"number",f.value)}switch(A=c?cs(c):window,t){case"focusin":(rf(A)||A.contentEditable==="true")&&(as=A,Ou=c,go=null);break;case"focusout":go=Ou=as=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,cf(h,n,u);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":cf(h,n,u)}var w;if(Bh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else os?y0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(_0&&n.locale!=="ko"&&(os||P!=="onCompositionStart"?P==="onCompositionEnd"&&os&&(w=x0()):(Bi=u,Fh="value"in Bi?Bi.value:Bi.textContent,os=!0)),A=cl(c,P),0<A.length&&(P=new Qd(P,t,null,n,u),h.push({event:P,listeners:A}),w?P.data=w:(w=M0(n),w!==null&&(P.data=w)))),(w=h_?d_(t,n):f_(t,n))&&(c=cl(c,"onBeforeInput"),0<c.length&&(u=new Qd("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=w))}D0(h,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ao(t,n),s!=null&&i.unshift(Do(t,s,r)),s=Ao(t,e),s!=null&&i.push(Do(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function df(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ao(n,s),l!=null&&o.unshift(Do(n,l,a))):r||(l=Ao(n,s),l!=null&&o.push(Do(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var b_=/\r\n?/g,C_=/\u0000|\uFFFD/g;function ff(t){return(typeof t=="string"?t:""+t).replace(b_,`
`).replace(C_,"")}function ha(t,e,n){if(e=ff(e),ff(t)!==e&&n)throw Error(ie(425))}function ul(){}var ku=null,zu=null;function Bu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gu=typeof setTimeout=="function"?setTimeout:void 0,R_=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,P_=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(t){return pf.resolve(null).then(t).catch(L_)}:Gu;function L_(t){setTimeout(function(){throw t})}function Mc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ro(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ro(e)}function Xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),ei="__reactFiber$"+Bs,Io="__reactProps$"+Bs,wi="__reactContainer$"+Bs,Hu="__reactEvents$"+Bs,N_="__reactListeners$"+Bs,D_="__reactHandles$"+Bs;function Sr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mf(t);t!==null;){if(n=t[ei])return n;t=mf(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[ei]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function zl(t){return t[Io]||null}var Vu=[],us=-1;function sr(t){return{current:t}}function lt(t){0>us||(t.current=Vu[us],Vu[us]=null,us--)}function st(t,e){us++,Vu[us]=t.current,t.current=e}var tr={},Kt=sr(tr),un=sr(!1),Pr=tr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function hl(){lt(un),lt(Kt)}function gf(t,e,n){if(Kt.current!==tr)throw Error(ie(168));st(Kt,e),st(un,n)}function U0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,vx(t)||"Unknown",r));return xt({},n,i)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Pr=Kt.current,st(Kt,t),st(un,un.current),!0}function vf(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=U0(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,lt(un),lt(Kt),st(Kt,t)):lt(un),st(un,n)}var gi=null,Bl=!1,Sc=!1;function O0(t){gi===null?gi=[t]:gi.push(t)}function I_(t){Bl=!0,O0(t)}function or(){if(!Sc&&gi!==null){Sc=!0;var t=0,e=tt;try{var n=gi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Bl=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),a0(Dh,or),r}finally{tt=e,Sc=!1}}return null}var hs=[],ds=0,fl=null,pl=0,Rn=[],Pn=0,Lr=null,xi=1,_i="";function gr(t,e){hs[ds++]=pl,hs[ds++]=fl,fl=t,pl=e}function F0(t,e,n){Rn[Pn++]=xi,Rn[Pn++]=_i,Rn[Pn++]=Lr,Lr=t;var i=xi;t=_i;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-Xn(e)+r|n<<r|i,_i=s+t}else xi=1<<s|n<<r|i,_i=t}function Hh(t){t.return!==null&&(gr(t,1),F0(t,1,0))}function Vh(t){for(;t===fl;)fl=hs[--ds],hs[ds]=null,pl=hs[--ds],hs[ds]=null;for(;t===Lr;)Lr=Rn[--Pn],Rn[Pn]=null,_i=Rn[--Pn],Rn[Pn]=null,xi=Rn[--Pn],Rn[Pn]=null}var Sn=null,Mn=null,ft=!1,Vn=null;function k0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,Mn=Xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:xi,overflow:_i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,Mn=null,!0):!1;default:return!1}}function Wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ju(t){if(ft){var e=Mn;if(e){var n=e;if(!xf(t,e)){if(Wu(t))throw Error(ie(418));e=Xi(n.nextSibling);var i=Sn;e&&xf(t,e)?k0(i,n):(t.flags=t.flags&-4097|2,ft=!1,Sn=t)}}else{if(Wu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ft=!1,Sn=t}}}function _f(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function da(t){if(t!==Sn)return!1;if(!ft)return _f(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bu(t.type,t.memoizedProps)),e&&(e=Mn)){if(Wu(t))throw z0(),Error(ie(418));for(;e;)k0(t,e),e=Xi(e.nextSibling)}if(_f(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=Xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=Sn?Xi(t.stateNode.nextSibling):null;return!0}function z0(){for(var t=Mn;t;)t=Xi(t.nextSibling)}function Rs(){Mn=Sn=null,ft=!1}function Wh(t){Vn===null?Vn=[t]:Vn.push(t)}var U_=bi.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function fa(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yf(t){var e=t._init;return e(t._payload)}function B0(t){function e(d,x){if(t){var g=d.deletions;g===null?(d.deletions=[x],d.flags|=16):g.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Ki(d,x),d.index=0,d.sibling=null,d}function s(d,x,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<x?(d.flags|=2,x):g):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,g,y){return x===null||x.tag!==6?(x=Rc(g,d.mode,y),x.return=d,x):(x=r(x,g),x.return=d,x)}function l(d,x,g,y){var b=g.type;return b===ss?u(d,x,g.props.children,y,g.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ui&&yf(b)===x.type)?(y=r(x,g.props),y.ref=Ks(d,x,g),y.return=d,y):(y=el(g.type,g.key,g.props,null,d.mode,y),y.ref=Ks(d,x,g),y.return=d,y)}function c(d,x,g,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=Pc(g,d.mode,y),x.return=d,x):(x=r(x,g.children||[]),x.return=d,x)}function u(d,x,g,y,b){return x===null||x.tag!==7?(x=br(g,d.mode,y,b),x.return=d,x):(x=r(x,g),x.return=d,x)}function h(d,x,g){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Rc(""+x,d.mode,g),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case na:return g=el(x.type,x.key,x.props,null,d.mode,g),g.ref=Ks(d,null,x),g.return=d,g;case rs:return x=Pc(x,d.mode,g),x.return=d,x;case Ui:var y=x._init;return h(d,y(x._payload),g)}if(lo(x)||js(x))return x=br(x,d.mode,g,null),x.return=d,x;fa(d,x)}return null}function f(d,x,g,y){var b=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(d,x,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case na:return g.key===b?l(d,x,g,y):null;case rs:return g.key===b?c(d,x,g,y):null;case Ui:return b=g._init,f(d,x,b(g._payload),y)}if(lo(g)||js(g))return b!==null?null:u(d,x,g,y,null);fa(d,g)}return null}function p(d,x,g,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(g)||null,a(x,d,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case na:return d=d.get(y.key===null?g:y.key)||null,l(x,d,y,b);case rs:return d=d.get(y.key===null?g:y.key)||null,c(x,d,y,b);case Ui:var A=y._init;return p(d,x,g,A(y._payload),b)}if(lo(y)||js(y))return d=d.get(g)||null,u(x,d,y,b,null);fa(x,y)}return null}function v(d,x,g,y){for(var b=null,A=null,w=x,P=x=0,z=null;w!==null&&P<g.length;P++){w.index>P?(z=w,w=null):z=w.sibling;var M=f(d,w,g[P],y);if(M===null){w===null&&(w=z);break}t&&w&&M.alternate===null&&e(d,w),x=s(M,x,P),A===null?b=M:A.sibling=M,A=M,w=z}if(P===g.length)return n(d,w),ft&&gr(d,P),b;if(w===null){for(;P<g.length;P++)w=h(d,g[P],y),w!==null&&(x=s(w,x,P),A===null?b=w:A.sibling=w,A=w);return ft&&gr(d,P),b}for(w=i(d,w);P<g.length;P++)z=p(w,d,P,g[P],y),z!==null&&(t&&z.alternate!==null&&w.delete(z.key===null?P:z.key),x=s(z,x,P),A===null?b=z:A.sibling=z,A=z);return t&&w.forEach(function(C){return e(d,C)}),ft&&gr(d,P),b}function _(d,x,g,y){var b=js(g);if(typeof b!="function")throw Error(ie(150));if(g=b.call(g),g==null)throw Error(ie(151));for(var A=b=null,w=x,P=x=0,z=null,M=g.next();w!==null&&!M.done;P++,M=g.next()){w.index>P?(z=w,w=null):z=w.sibling;var C=f(d,w,M.value,y);if(C===null){w===null&&(w=z);break}t&&w&&C.alternate===null&&e(d,w),x=s(C,x,P),A===null?b=C:A.sibling=C,A=C,w=z}if(M.done)return n(d,w),ft&&gr(d,P),b;if(w===null){for(;!M.done;P++,M=g.next())M=h(d,M.value,y),M!==null&&(x=s(M,x,P),A===null?b=M:A.sibling=M,A=M);return ft&&gr(d,P),b}for(w=i(d,w);!M.done;P++,M=g.next())M=p(w,d,P,M.value,y),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?P:M.key),x=s(M,x,P),A===null?b=M:A.sibling=M,A=M);return t&&w.forEach(function(X){return e(d,X)}),ft&&gr(d,P),b}function m(d,x,g,y){if(typeof g=="object"&&g!==null&&g.type===ss&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case na:e:{for(var b=g.key,A=x;A!==null;){if(A.key===b){if(b=g.type,b===ss){if(A.tag===7){n(d,A.sibling),x=r(A,g.props.children),x.return=d,d=x;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ui&&yf(b)===A.type){n(d,A.sibling),x=r(A,g.props),x.ref=Ks(d,A,g),x.return=d,d=x;break e}n(d,A);break}else e(d,A);A=A.sibling}g.type===ss?(x=br(g.props.children,d.mode,y,g.key),x.return=d,d=x):(y=el(g.type,g.key,g.props,null,d.mode,y),y.ref=Ks(d,x,g),y.return=d,d=y)}return o(d);case rs:e:{for(A=g.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){n(d,x.sibling),x=r(x,g.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Pc(g,d.mode,y),x.return=d,d=x}return o(d);case Ui:return A=g._init,m(d,x,A(g._payload),y)}if(lo(g))return v(d,x,g,y);if(js(g))return _(d,x,g,y);fa(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,g),x.return=d,d=x):(n(d,x),x=Rc(g,d.mode,y),x.return=d,d=x),o(d)):n(d,x)}return m}var Ps=B0(!0),G0=B0(!1),ml=sr(null),gl=null,fs=null,jh=null;function Xh(){jh=fs=gl=null}function qh(t){var e=ml.current;lt(ml),t._currentValue=e}function Xu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){gl=t,jh=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(jh!==t)if(t={context:t,memoizedValue:e,next:null},fs===null){if(gl===null)throw Error(ie(308));fs=t,gl.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return e}var Er=null;function Yh(t){Er===null?Er=[t]:Er.push(t)}function H0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function $h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,Yh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ih(t,n)}}function Mf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vl(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=xt({},h,f);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=h}}function Sf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var $o={},si=sr($o),Uo=sr($o),Oo=sr($o);function wr(t){if(t===$o)throw Error(ie(174));return t}function Kh(t,e){switch(st(Oo,e),st(Uo,t),st(si,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Au(e,t)}lt(si),st(si,e)}function Ls(){lt(si),lt(Uo),lt(Oo)}function W0(t){wr(Oo.current);var e=wr(si.current),n=Au(e,t.type);e!==n&&(st(Uo,t),st(si,n))}function Zh(t){Uo.current===t&&(lt(si),lt(Uo))}var mt=sr(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ec=[];function Jh(){for(var t=0;t<Ec.length;t++)Ec[t]._workInProgressVersionPrimary=null;Ec.length=0}var $a=bi.ReactCurrentDispatcher,wc=bi.ReactCurrentBatchConfig,Nr=0,vt=null,At=null,Dt=null,_l=!1,vo=!1,Fo=0,O_=0;function Vt(){throw Error(ie(321))}function Qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function ed(t,e,n,i,r,s){if(Nr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?B_:G_,t=n(i,r),vo){s=0;do{if(vo=!1,Fo=0,25<=s)throw Error(ie(301));s+=1,Dt=At=null,e.updateQueue=null,$a.current=H_,t=n(i,r)}while(vo)}if($a.current=yl,e=At!==null&&At.next!==null,Nr=0,Dt=At=vt=null,_l=!1,e)throw Error(ie(300));return t}function td(){var t=Fo!==0;return Fo=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?vt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Un(){if(At===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?vt.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(ie(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?vt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function ko(t,e){return typeof e=="function"?e(t):e}function Tc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Nr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,vt.lanes|=u,Dr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ac(t){var e=Un(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function j0(){}function X0(t,e){var n=vt,i=Un(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,nd($0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,zo(9,Y0.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ie(349));Nr&30||q0(n,e,r)}return r}function q0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y0(t,e,n,i){e.value=n,e.getSnapshot=i,K0(e)&&Z0(t)}function $0(t,e,n){return n(function(){K0(e)&&Z0(t)})}function K0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function Z0(t){var e=Ti(t,1);e!==null&&qn(e,t,1,-1)}function Ef(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=z_.bind(null,vt,t),[e.memoizedState,t]}function zo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function J0(){return Un().memoizedState}function Ka(t,e,n,i){var r=Zn();vt.flags|=t,r.memoizedState=zo(1|e,n,void 0,i===void 0?null:i)}function Gl(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Qh(i,o.deps)){r.memoizedState=zo(e,n,s,i);return}}vt.flags|=t,r.memoizedState=zo(1|e,n,s,i)}function wf(t,e){return Ka(8390656,8,t,e)}function nd(t,e){return Gl(2048,8,t,e)}function Q0(t,e){return Gl(4,2,t,e)}function eg(t,e){return Gl(4,4,t,e)}function tg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ng(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4,4,tg.bind(null,e,t),n)}function id(){}function ig(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rg(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function sg(t,e,n){return Nr&21?(Yn(n,e)||(n=u0(),vt.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function F_(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=wc.transition;wc.transition={};try{t(!1),e()}finally{tt=n,wc.transition=i}}function og(){return Un().memoizedState}function k_(t,e,n){var i=$i(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ag(t))lg(e,n);else if(n=H0(t,e,n,i),n!==null){var r=tn();qn(n,t,i,r),cg(n,e,i)}}function z_(t,e,n){var i=$i(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ag(t))lg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Yh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=H0(t,e,r,i),n!==null&&(r=tn(),qn(n,t,i,r),cg(n,e,i))}}function ag(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function lg(t,e){vo=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ih(t,n)}}var yl={readContext:In,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},B_={readContext:In,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:wf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ka(4194308,4,tg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ka(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=k_.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Ef,useDebugValue:id,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Ef(!1),e=t[0];return t=F_.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=Zn();if(ft){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ut===null)throw Error(ie(349));Nr&30||q0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,wf($0.bind(null,i,s,t),[t]),i.flags|=2048,zo(9,Y0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ut.identifierPrefix;if(ft){var n=_i,i=xi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=O_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},G_={readContext:In,useCallback:ig,useContext:In,useEffect:nd,useImperativeHandle:ng,useInsertionEffect:Q0,useLayoutEffect:eg,useMemo:rg,useReducer:Tc,useRef:J0,useState:function(){return Tc(ko)},useDebugValue:id,useDeferredValue:function(t){var e=Un();return sg(e,At.memoizedState,t)},useTransition:function(){var t=Tc(ko)[0],e=Un().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:X0,useId:og,unstable_isNewReconciler:!1},H_={readContext:In,useCallback:ig,useContext:In,useEffect:nd,useImperativeHandle:ng,useInsertionEffect:Q0,useLayoutEffect:eg,useMemo:rg,useReducer:Ac,useRef:J0,useState:function(){return Ac(ko)},useDebugValue:id,useDeferredValue:function(t){var e=Un();return At===null?e.memoizedState=t:sg(e,At.memoizedState,t)},useTransition:function(){var t=Ac(ko)[0],e=Un().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:X0,useId:og,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hl={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=$i(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(qn(e,t,r,i),Ya(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=$i(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(qn(e,t,r,i),Ya(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=$i(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(qn(e,t,i,n),Ya(e,t,i))}};function Tf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Lo(n,i)||!Lo(r,s):!0}function ug(t,e,n){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=hn(e)?Pr:Kt.current,i=e.contextTypes,s=(i=i!=null)?Cs(t,r):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Af(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Hl.enqueueReplaceState(e,e.state,null)}function Yu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},$h(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=hn(e)?Pr:Kt.current,r.context=Cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hl.enqueueReplaceState(r,r.state,null),vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=gx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $u(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var V_=typeof WeakMap=="function"?WeakMap:Map;function hg(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Sl||(Sl=!0,sh=i),$u(t,e)},n}function dg(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$u(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$u(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new V_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iy.bind(null,t,e,n),e.then(t,t))}function Cf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var W_=bi.ReactCurrentOwner,cn=!1;function Qt(t,e,n,i){e.child=t===null?G0(e,null,n,i):Ps(e,t.child,n,i)}function Pf(t,e,n,i,r){n=n.render;var s=e.ref;return Es(e,r),i=ed(t,e,n,i,s,r),n=td(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(ft&&n&&Hh(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Lf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fg(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(o,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=Ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function fg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Lo(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return Ku(t,e,n,i,r)}function pg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ms,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ms,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ms,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ms,vn),vn|=i;return Qt(t,e,r,n),e.child}function mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ku(t,e,n,i,r){var s=hn(n)?Pr:Kt.current;return s=Cs(e,s),Es(e,r),n=ed(t,e,n,i,s,r),i=td(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(ft&&i&&Hh(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Nf(t,e,n,i,r){if(hn(n)){var s=!0;dl(e)}else s=!1;if(Es(e,r),e.stateNode===null)Za(t,e),ug(e,n,i),Yu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=hn(n)?Pr:Kt.current,c=Cs(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Af(e,o,i,c),Oi=!1;var f=e.memoizedState;o.state=f,vl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||un.current||Oi?(typeof u=="function"&&(qu(e,n,u,i),l=e.memoizedState),(a=Oi||Tf(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,V0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=hn(n)?Pr:Kt.current,l=Cs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Af(e,o,i,l),Oi=!1,f=e.memoizedState,o.state=f,vl(e,i,o,r);var v=e.memoizedState;a!==h||f!==v||un.current||Oi?(typeof p=="function"&&(qu(e,n,p,i),v=e.memoizedState),(c=Oi||Tf(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Zu(t,e,n,i,s,r)}function Zu(t,e,n,i,r,s){mg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&vf(e,n,!1),Ai(t,e,s);i=e.stateNode,W_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&vf(e,n,!0),e.child}function gg(t){var e=t.stateNode;e.pendingContext?gf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gf(t,e.context,!1),Kh(t,e.containerInfo)}function Df(t,e,n,i,r){return Rs(),Wh(r),e.flags|=256,Qt(t,e,n,i),e.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function vg(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(mt,r&1),t===null)return ju(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jl(o,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qu(n),e.memoizedState=Ju,t):rd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return j_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ki(a,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Qu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ju,i}return s=t.child,t=s.sibling,i=Ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function rd(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pa(t,e,n,i){return i!==null&&Wh(i),Ps(e,t.child,null,n),t=rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function j_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=bc(Error(ie(422))),pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jl({mode:"visible",children:i.children},r,0,null),s=br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ps(e,t.child,null,o),e.child.memoizedState=Qu(o),e.memoizedState=Ju,s);if(!(e.mode&1))return pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=bc(s,i,void 0),pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(t,r),qn(i,t,r,-1))}return ud(),i=bc(Error(ie(421))),pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=Xi(r.nextSibling),Sn=e,ft=!0,Vn=null,t!==null&&(Rn[Pn++]=xi,Rn[Pn++]=_i,Rn[Pn++]=Lr,xi=t.id,_i=t.overflow,Lr=e),e=rd(e,i.children),e.flags|=4096,e)}function If(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xu(t.return,e,n)}function Cc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function xg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&If(t,n,e);else if(t.tag===19)If(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cc(e,!0,n,null,s);break;case"together":Cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X_(t,e,n){switch(e.tag){case 3:gg(e),Rs();break;case 5:W0(e);break;case 1:hn(e.type)&&dl(e);break;case 4:Kh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?vg(t,e,n):(st(mt,mt.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);st(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return xg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,pg(t,e,n)}return Ai(t,e,n)}var _g,eh,yg,Mg;_g=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eh=function(){};yg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(si.current);var s=null;switch(n){case"input":r=Su(t,r),i=Su(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Tu(t,r),i=Tu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ul)}bu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Mg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zs(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function q_(t,e,n){var i=e.pendingProps;switch(Vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return hn(e.type)&&hl(),Wt(e),null;case 3:return i=e.stateNode,Ls(),lt(un),lt(Kt),Jh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(lh(Vn),Vn=null))),eh(t,e),Wt(e),null;case 5:Zh(e);var r=wr(Oo.current);if(n=e.type,t!==null&&e.stateNode!=null)yg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Wt(e),null}if(t=wr(si.current),da(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Io]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<uo.length;r++)ot(uo[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Hd(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Wd(i,s),ot("invalid",i)}bu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ha(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ha(i.textContent,a,t),r=["children",""+a]):wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":ia(i),Vd(i,s,!0);break;case"textarea":ia(i),jd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$m(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[Io]=i,_g(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<uo.length;r++)ot(uo[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Hd(t,i),r=Su(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Wd(t,i),r=Tu(t,i),ot("invalid",t);break;default:r=i}bu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Km(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&To(t,l):typeof l=="number"&&To(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&Ch(t,s,l,o))}switch(n){case"input":ia(t),Vd(t,i,!1);break;case"textarea":ia(t),jd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?_s(t,!!i.multiple,s,!1):i.defaultValue!=null&&_s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)Mg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=wr(Oo.current),wr(si.current),da(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:ha(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Wt(e),null;case 13:if(lt(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&Mn!==null&&e.mode&1&&!(e.flags&128))z0(),Rs(),e.flags|=98560,s=!1;else if(s=da(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ei]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Vn!==null&&(lh(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?bt===0&&(bt=3):ud())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Ls(),eh(t,e),t===null&&No(e.stateNode.containerInfo),Wt(e),null;case 10:return qh(e.type._context),Wt(e),null;case 17:return hn(e.type)&&hl(),Wt(e),null;case 19:if(lt(mt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Zs(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xl(t),o!==null){for(e.flags|=128,Zs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Ds&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Wt(e),null}else 2*St()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=mt.current,st(mt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return cd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Y_(t,e){switch(Vh(e),e.tag){case 1:return hn(e.type)&&hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),lt(un),lt(Kt),Jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zh(e),null;case 13:if(lt(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(mt),null;case 4:return Ls(),null;case 10:return qh(e.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var ma=!1,qt=!1,$_=typeof WeakSet=="function"?WeakSet:Set,ye=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function th(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Uf=!1;function K_(t,e){if(ku=al,t=A0(),Gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:t,selectionRange:n},al=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,m=v.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Gn(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){_t(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return v=Uf,Uf=!1,v}function xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&th(e,n,s)}r=r.next}while(r!==i)}}function Vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sg(t){var e=t.alternate;e!==null&&(t.alternate=null,Sg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Io],delete e[Hu],delete e[N_],delete e[D_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Eg(t){return t.tag===5||t.tag===3||t.tag===4}function Of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}var kt=null,Hn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)wg(t,e,n),n=n.sibling}function wg(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:qt||ps(n,e);case 6:var i=kt,r=Hn;kt=null,Ci(t,e,n),kt=i,Hn=r,kt!==null&&(Hn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Hn?(t=kt,n=n.stateNode,t.nodeType===8?Mc(t.parentNode,n):t.nodeType===1&&Mc(t,n),Ro(t)):Mc(kt,n.stateNode));break;case 4:i=kt,r=Hn,kt=n.stateNode.containerInfo,Hn=!0,Ci(t,e,n),kt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&th(n,e,o),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!qt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Ci(t,e,n),qt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function Ff(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $_),e.forEach(function(i){var r=sy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Hn=!1;break e;case 3:kt=a.stateNode.containerInfo,Hn=!0;break e;case 4:kt=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(kt===null)throw Error(ie(160));wg(s,o,r),kt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tg(e,t),e=e.sibling}function Tg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Kn(t),i&4){try{xo(3,t,t.return),Vl(3,t)}catch(_){_t(t,t.return,_)}try{xo(5,t,t.return)}catch(_){_t(t,t.return,_)}}break;case 1:Fn(e,t),Kn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Fn(e,t),Kn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{To(r,"")}catch(_){_t(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qm(r,s),Cu(a,o);var c=Cu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Jm(r,h):u==="dangerouslySetInnerHTML"?Km(r,h):u==="children"?To(r,h):Ch(r,u,h,c)}switch(a){case"input":Eu(r,s);break;case"textarea":Ym(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?_s(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?_s(r,!!s.multiple,s.defaultValue,!0):_s(r,!!s.multiple,s.multiple?[]:"",!1))}r[Io]=s}catch(_){_t(t,t.return,_)}}break;case 6:if(Fn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){_t(t,t.return,_)}}break;case 3:if(Fn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(_){_t(t,t.return,_)}break;case 4:Fn(e,t),Kn(t);break;case 13:Fn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ad=St())),i&4&&Ff(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||u,Fn(e,t),qt=c):Fn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ye=t,u=t.child;u!==null;){for(h=ye=u;ye!==null;){switch(f=ye,p=f.child,f.tag){case 0:case 11:case 14:case 15:xo(4,f,f.return);break;case 1:ps(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){_t(i,n,_)}}break;case 5:ps(f,f.return);break;case 22:if(f.memoizedState!==null){zf(h);continue}}p!==null?(p.return=f,ye=p):zf(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zm("display",o))}catch(_){_t(t,t.return,_)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){_t(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Fn(e,t),Kn(t),i&4&&Ff(t);break;case 21:break;default:Fn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Eg(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(To(r,""),i.flags&=-33);var s=Of(t);rh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Of(t);ih(t,a,o);break;default:throw Error(ie(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Z_(t,e,n){ye=t,Ag(t)}function Ag(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ma;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=ma;var c=qt;if(ma=o,(qt=l)&&!c)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?Bf(r):l!==null?(l.return=o,ye=l):Bf(r);for(;s!==null;)ye=s,Ag(s),s=s.sibling;ye=r,ma=a,qt=c}kf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):kf(t)}}function kf(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Vl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Ro(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}qt||e.flags&512&&nh(e)}catch(f){_t(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function zf(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Bf(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vl(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{nh(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{nh(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var J_=Math.ceil,Ml=bi.ReactCurrentDispatcher,sd=bi.ReactCurrentOwner,Nn=bi.ReactCurrentBatchConfig,Qe=0,Ut=null,Tt=null,Bt=0,vn=0,ms=sr(0),bt=0,Bo=null,Dr=0,Wl=0,od=0,_o=null,ln=null,ad=0,Ds=1/0,mi=null,Sl=!1,sh=null,Yi=null,ga=!1,Gi=null,El=0,yo=0,oh=null,Ja=-1,Qa=0;function tn(){return Qe&6?St():Ja!==-1?Ja:Ja=St()}function $i(t){return t.mode&1?Qe&2&&Bt!==0?Bt&-Bt:U_.transition!==null?(Qa===0&&(Qa=u0()),Qa):(t=tt,t!==0||(t=window.event,t=t===void 0?16:v0(t.type)),t):1}function qn(t,e,n,i){if(50<yo)throw yo=0,oh=null,Error(ie(185));Xo(t,n,i),(!(Qe&2)||t!==Ut)&&(t===Ut&&(!(Qe&2)&&(Wl|=n),bt===4&&ki(t,Bt)),dn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Ds=St()+500,Bl&&or()))}function dn(t,e){var n=t.callbackNode;Ux(t,e);var i=ol(t,t===Ut?Bt:0);if(i===0)n!==null&&Yd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Yd(n),e===1)t.tag===0?I_(Gf.bind(null,t)):O0(Gf.bind(null,t)),P_(function(){!(Qe&6)&&or()}),n=null;else{switch(h0(i)){case 1:n=Dh;break;case 4:n=l0;break;case 16:n=sl;break;case 536870912:n=c0;break;default:n=sl}n=Ig(n,bg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bg(t,e){if(Ja=-1,Qa=0,Qe&6)throw Error(ie(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var i=ol(t,t===Ut?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wl(t,i);else{e=i;var r=Qe;Qe|=2;var s=Rg();(Ut!==t||Bt!==e)&&(mi=null,Ds=St()+500,Ar(t,e));do try{ty();break}catch(a){Cg(t,a)}while(!0);Xh(),Ml.current=s,Qe=r,Tt!==null?e=0:(Ut=null,Bt=0,e=bt)}if(e!==0){if(e===2&&(r=Du(t),r!==0&&(i=r,e=ah(t,r))),e===1)throw n=Bo,Ar(t,0),ki(t,i),dn(t,St()),n;if(e===6)ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!Q_(r)&&(e=wl(t,i),e===2&&(s=Du(t),s!==0&&(i=s,e=ah(t,s))),e===1))throw n=Bo,Ar(t,0),ki(t,i),dn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:vr(t,ln,mi);break;case 3:if(ki(t,i),(i&130023424)===i&&(e=ad+500-St(),10<e)){if(ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gu(vr.bind(null,t,ln,mi),e);break}vr(t,ln,mi);break;case 4:if(ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*J_(i/1960))-i,10<i){t.timeoutHandle=Gu(vr.bind(null,t,ln,mi),i);break}vr(t,ln,mi);break;case 5:vr(t,ln,mi);break;default:throw Error(ie(329))}}}return dn(t,St()),t.callbackNode===n?bg.bind(null,t):null}function ah(t,e){var n=_o;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=wl(t,e),t!==2&&(e=ln,ln=n,e!==null&&lh(e)),t}function lh(t){ln===null?ln=t:ln.push.apply(ln,t)}function Q_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(t,e){for(e&=~od,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Gf(t){if(Qe&6)throw Error(ie(327));ws();var e=ol(t,0);if(!(e&1))return dn(t,St()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var i=Du(t);i!==0&&(e=i,n=ah(t,i))}if(n===1)throw n=Bo,Ar(t,0),ki(t,e),dn(t,St()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,ln,mi),dn(t,St()),null}function ld(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Ds=St()+500,Bl&&or())}}function Ir(t){Gi!==null&&Gi.tag===0&&!(Qe&6)&&ws();var e=Qe;Qe|=1;var n=Nn.transition,i=tt;try{if(Nn.transition=null,tt=1,t)return t()}finally{tt=i,Nn.transition=n,Qe=e,!(Qe&6)&&or()}}function cd(){vn=ms.current,lt(ms)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,R_(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Vh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&hl();break;case 3:Ls(),lt(un),lt(Kt),Jh();break;case 5:Zh(i);break;case 4:Ls();break;case 13:lt(mt);break;case 19:lt(mt);break;case 10:qh(i.type._context);break;case 22:case 23:cd()}n=n.return}if(Ut=t,Tt=t=Ki(t.current,null),Bt=vn=e,bt=0,Bo=null,od=Wl=Dr=0,ln=_o=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Er=null}return t}function Cg(t,e){do{var n=Tt;try{if(Xh(),$a.current=yl,_l){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Nr=0,Dt=At=vt=null,vo=!1,Fo=0,sd.current=null,n===null||n.return===null){bt=1,Bo=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Cf(o);if(p!==null){p.flags&=-257,Rf(p,o,a,s,e),p.mode&1&&bf(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){bf(s,c,e),ud();break e}l=Error(ie(426))}}else if(ft&&a.mode&1){var m=Cf(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Rf(m,o,a,s,e),Wh(Ns(l,a));break e}}s=l=Ns(l,a),bt!==4&&(bt=2),_o===null?_o=[s]:_o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=hg(s,l,e);Mf(s,d);break e;case 1:a=l;var x=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yi===null||!Yi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=dg(s,a,e);Mf(s,y);break e}}s=s.return}while(s!==null)}Lg(n)}catch(b){e=b,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function Rg(){var t=Ml.current;return Ml.current=yl,t===null?yl:t}function ud(){(bt===0||bt===3||bt===2)&&(bt=4),Ut===null||!(Dr&268435455)&&!(Wl&268435455)||ki(Ut,Bt)}function wl(t,e){var n=Qe;Qe|=2;var i=Rg();(Ut!==t||Bt!==e)&&(mi=null,Ar(t,e));do try{ey();break}catch(r){Cg(t,r)}while(!0);if(Xh(),Qe=n,Ml.current=i,Tt!==null)throw Error(ie(261));return Ut=null,Bt=0,bt}function ey(){for(;Tt!==null;)Pg(Tt)}function ty(){for(;Tt!==null&&!Ax();)Pg(Tt)}function Pg(t){var e=Dg(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Lg(t):Tt=e,sd.current=null}function Lg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Y_(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Tt=null;return}}else if(n=q_(n,e,vn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);bt===0&&(bt=5)}function vr(t,e,n){var i=tt,r=Nn.transition;try{Nn.transition=null,tt=1,ny(t,e,n,i)}finally{Nn.transition=r,tt=i}return null}function ny(t,e,n,i){do ws();while(Gi!==null);if(Qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ox(t,s),t===Ut&&(Tt=Ut=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ga||(ga=!0,Ig(sl,function(){return ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=tt;tt=1;var a=Qe;Qe|=4,sd.current=null,K_(t,n),Tg(n,t),S_(zu),al=!!ku,zu=ku=null,t.current=n,Z_(n),bx(),Qe=a,tt=o,Nn.transition=s}else t.current=n;if(ga&&(ga=!1,Gi=t,El=r),s=t.pendingLanes,s===0&&(Yi=null),Px(n.stateNode),dn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sl)throw Sl=!1,t=sh,sh=null,t;return El&1&&t.tag!==0&&ws(),s=t.pendingLanes,s&1?t===oh?yo++:(yo=0,oh=t):yo=0,or(),null}function ws(){if(Gi!==null){var t=h0(El),e=Nn.transition,n=tt;try{if(Nn.transition=null,tt=16>t?16:t,Gi===null)var i=!1;else{if(t=Gi,Gi=null,El=0,Qe&6)throw Error(ie(331));var r=Qe;for(Qe|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ye=c;ye!==null;){var u=ye;switch(u.tag){case 0:case 11:case 15:xo(8,u,s)}var h=u.child;if(h!==null)h.return=u,ye=h;else for(;ye!==null;){u=ye;var f=u.sibling,p=u.return;if(Sg(u),u===c){ye=null;break}if(f!==null){f.return=p,ye=f;break}ye=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ye=d;break e}ye=s.return}}var x=t.current;for(ye=x;ye!==null;){o=ye;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ye=g;else e:for(o=x;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vl(9,a)}}catch(b){_t(a,a.return,b)}if(a===o){ye=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ye=y;break e}ye=a.return}}if(Qe=r,or(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{tt=n,Nn.transition=e}}return!1}function Hf(t,e,n){e=Ns(n,e),e=hg(t,e,1),t=qi(t,e,1),e=tn(),t!==null&&(Xo(t,1,e),dn(t,e))}function _t(t,e,n){if(t.tag===3)Hf(t,t,n);else for(;e!==null;){if(e.tag===3){Hf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=Ns(n,t),t=dg(e,t,1),e=qi(e,t,1),t=tn(),e!==null&&(Xo(e,1,t),dn(e,t));break}}e=e.return}}function iy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Bt&n)===n&&(bt===4||bt===3&&(Bt&130023424)===Bt&&500>St()-ad?Ar(t,0):od|=n),dn(t,e)}function Ng(t,e){e===0&&(t.mode&1?(e=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):e=1);var n=tn();t=Ti(t,e),t!==null&&(Xo(t,e,n),dn(t,n))}function ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ng(t,n)}function sy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Ng(t,n)}var Dg;Dg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,X_(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ft&&e.flags&1048576&&F0(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Za(t,e),t=e.pendingProps;var r=Cs(e,Kt.current);Es(e,n),r=ed(null,e,i,t,r,n);var s=td();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$h(e),r.updater=Hl,e.stateNode=r,r._reactInternals=e,Yu(e,i,t,n),e=Zu(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Hh(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ay(i),t=Gn(i,t),r){case 0:e=Ku(null,e,i,t,n);break e;case 1:e=Nf(null,e,i,t,n);break e;case 11:e=Pf(null,e,i,t,n);break e;case 14:e=Lf(null,e,i,Gn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Ku(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Nf(t,e,i,r,n);case 3:e:{if(gg(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,V0(t,e),vl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(ie(423)),e),e=Df(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(ie(424)),e),e=Df(t,e,i,n,r);break e}else for(Mn=Xi(e.stateNode.containerInfo.firstChild),Sn=e,ft=!0,Vn=null,n=G0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),i===r){e=Ai(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return W0(e),t===null&&ju(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Bu(i,r)?o=null:s!==null&&Bu(i,s)&&(e.flags|=32),mg(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&ju(e),null;case 13:return vg(t,e,n);case 4:return Kh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Pf(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(ml,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!un.current){e=Ai(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,n),r=In(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Lf(t,e,i,r,n);case 15:return fg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Za(t,e),e.tag=1,hn(i)?(t=!0,dl(e)):t=!1,Es(e,n),ug(e,i,r),Yu(e,i,r,n),Zu(null,e,i,!0,t,n);case 19:return xg(t,e,n);case 22:return pg(t,e,n)}throw Error(ie(156,e.tag))};function Ig(t,e){return a0(t,e)}function oy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new oy(t,e,n,i)}function hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ay(t){if(typeof t=="function")return hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ph)return 11;if(t===Lh)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")hd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ss:return br(n.children,r,s,e);case Rh:o=8,r|=8;break;case xu:return t=Ln(12,n,e,r|2),t.elementType=xu,t.lanes=s,t;case _u:return t=Ln(13,n,e,r),t.elementType=_u,t.lanes=s,t;case yu:return t=Ln(19,n,e,r),t.elementType=yu,t.lanes=s,t;case Wm:return jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hm:o=10;break e;case Vm:o=9;break e;case Ph:o=11;break e;case Lh:o=14;break e;case Ui:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function jl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=Wm,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Pc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dd(t,e,n,i,r,s,o,a,l){return t=new ly(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(s),t}function cy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ug(t){if(!t)return tr;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(hn(n))return U0(t,n,e)}return e}function Og(t,e,n,i,r,s,o,a,l){return t=dd(n,i,!0,t,r,s,o,a,l),t.context=Ug(null),n=t.current,i=tn(),r=$i(n),s=Si(i,r),s.callback=e??null,qi(n,s,r),t.current.lanes=r,Xo(t,r,i),dn(t,i),t}function Xl(t,e,n,i){var r=e.current,s=tn(),o=$i(r);return n=Ug(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,o),t!==null&&(qn(t,r,o,s),Ya(t,r,o)),o}function Tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fd(t,e){Vf(t,e),(t=t.alternate)&&Vf(t,e)}function uy(){return null}var Fg=typeof reportError=="function"?reportError:function(t){console.error(t)};function pd(t){this._internalRoot=t}ql.prototype.render=pd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Xl(t,e,null,null)};ql.prototype.unmount=pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){Xl(null,t,null,null)}),e[wi]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=p0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fi.length&&e!==0&&e<Fi[n].priority;n++);Fi.splice(n,0,t),n===0&&g0(t)}};function md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wf(){}function hy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Tl(o);s.call(c)}}var o=Og(e,i,t,0,null,!1,!1,"",Wf);return t._reactRootContainer=o,t[wi]=o.current,No(t.nodeType===8?t.parentNode:t),Ir(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Tl(l);a.call(c)}}var l=dd(t,0,!1,null,null,!1,!1,"",Wf);return t._reactRootContainer=l,t[wi]=l.current,No(t.nodeType===8?t.parentNode:t),Ir(function(){Xl(e,l,n,i)}),l}function $l(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Tl(o);a.call(l)}}Xl(e,o,t,r)}else o=hy(n,e,t,r,i);return Tl(o)}d0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=co(e.pendingLanes);n!==0&&(Ih(e,n|1),dn(e,St()),!(Qe&6)&&(Ds=St()+500,or()))}break;case 13:Ir(function(){var i=Ti(t,1);if(i!==null){var r=tn();qn(i,t,1,r)}}),fd(t,1)}};Uh=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=tn();qn(e,t,134217728,n)}fd(t,134217728)}};f0=function(t){if(t.tag===13){var e=$i(t),n=Ti(t,e);if(n!==null){var i=tn();qn(n,t,e,i)}fd(t,e)}};p0=function(){return tt};m0=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Pu=function(t,e,n){switch(e){case"input":if(Eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zl(i);if(!r)throw Error(ie(90));Xm(i),Eu(i,r)}}}break;case"textarea":Ym(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};t0=ld;n0=Ir;var dy={usingClientEntryPoint:!1,Events:[Yo,cs,zl,Qm,e0,ld]},Js={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fy={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=s0(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{Ul=va.inject(fy),ri=va}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dy;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!md(e))throw Error(ie(200));return cy(t,e,null,n)};wn.createRoot=function(t,e){if(!md(t))throw Error(ie(299));var n=!1,i="",r=Fg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dd(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,No(t.nodeType===8?t.parentNode:t),new pd(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=s0(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Ir(t)};wn.hydrate=function(t,e,n){if(!Yl(e))throw Error(ie(200));return $l(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!md(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Fg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Og(e,null,t,1,n??null,r,!1,s,o),t[wi]=e.current,No(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ql(e)};wn.render=function(t,e,n){if(!Yl(e))throw Error(ie(200));return $l(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Yl(t))throw Error(ie(40));return t._reactRootContainer?(Ir(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};wn.unstable_batchedUpdates=ld;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Yl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return $l(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function kg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kg)}catch(t){console.error(t)}}kg(),km.exports=wn;var py=km.exports,jf=py;gu.createRoot=jf.createRoot,gu.hydrateRoot=jf.hydrateRoot;const Wn={concrete_wall:{id:"concrete_wall",name:"Reinforced Concrete Wall",category:"Rigid / Fixed",description:"Immovable steel-reinforced concrete barrier. Absorbs virtually zero kinetic energy through motion, reflecting maximum force into the vehicle structure.",massKg:5e5,isFixed:!0,restitution:.08,friction:.95,width:6,height:2.2,depth:1.5,color:"#475569"},heavy_barrier:{id:"heavy_barrier",name:"Heavy Concrete Highway Barrier",category:"Movable Heavy",description:"Pre-cast 2,000 kg Jersey-style highway barrier. Slides backward upon severe impact, dissipating momentum through ground friction.",massKg:2e3,isFixed:!1,restitution:.18,friction:.7,width:4.2,height:1.4,depth:1.1,color:"#64748b"},lightweight_barrier:{id:"lightweight_barrier",name:"Plastic Water/Sand Drum Barricade",category:"Displaceable Light",description:"Lightweight 220 kg safety barricade. Readily displaces and deflects on impact, substantially reducing vehicle cabin deceleration.",massKg:220,isFixed:!1,restitution:.35,friction:.35,width:2.6,height:1.2,depth:.9,color:"#f97316"}},on={length:4.5,width:1.9,inertiaFactor:(4.5*4.5+1.9*1.9)/12,trackStartZ:-45,impactZoneZ:0,baselinePulseDurationS:.095};function my(t,e,n,i,r,s,o){const a=.5*t*(e*e),l=t*on.inertiaFactor,c=.5*t*(n*n),u=.5*l*(i*i),h=c+u,f=Math.max(0,a-h),p=Math.sqrt(Math.max(0,e*e-n*n))+n*.4,v=t*Math.max(p,e*.85);let _=on.baselinePulseDurationS;if(!s){const w=Math.min(.08,o*.04);_+=w}const m=v/_,d=m*1.85,x=Math.round(d/1e3*10)/10,g=Math.round(d/9806.65*10)/10,y=d/t,b=Math.round(y/9.81*10)/10,A=m>0?Math.min(1.8,Math.max(.05,Math.round(f/m*100)/100)):.1;return{impulseNs:Math.round(v),estimatedImpactForceKn:x,estimatedImpactForceTons:g,peakGForce:b,assumedPulseDurationMs:Math.round(_*1e3),assumedCrumpleDistanceM:A,initialKineticEnergyKj:Math.round(a/100)/10,postImpactKineticEnergyKj:Math.round(h/100)/10,energyDissipatedKj:Math.round(f/100)/10}}function gy(t,e,n,i,r){let s=1;i==="heavy_barrier"?s=.72:i==="lightweight_barrier"&&(s=.34);const o=n*Math.PI/180,a=Math.max(.2,Math.cos(o)),l=Math.sin(o),c=e/1500;let h=r*s*Math.pow(a,.75)/450*80;c>1&&(h*=Math.pow(c,.3));const f=Math.min(100,Math.max(4,Math.round(h)));let p="Minor";f>=80?p="Catastrophic":f>=50?p="Severe":f>=20?p="Moderate":p="Minor";let v=.8,_=.5,m=.5,d=.1,x=.1,g="Front Center Bumper";n>10?(g="Front-Right Quarter / Wheel Arch",m=1,v=.6,_=.25,x=Math.min(.8,.2+Math.abs(l)*.7),d=.05):n<-10?(g="Front-Left Quarter / Wheel Arch",_=1,v=.6,m=.25,d=Math.min(.8,.2+Math.abs(l)*.7),x=.05):(g="Frontal Crumple Structure",v=1,_=.75,m=.75,d=.1,x=.1);const y={frontCenter:Math.min(100,Math.round(f*v)),frontLeft:Math.min(100,Math.round(f*_)),frontRight:Math.min(100,Math.round(f*m)),leftSide:Math.min(100,Math.round(f*d)),rightSide:Math.min(100,Math.round(f*x))};return{damagePercentage:f,damageSeverity:p,primaryDamageZone:g,damageZones:y}}class vy{constructor(e){he(this,"status","IDLE");he(this,"params");he(this,"car");he(this,"carPitch",0);he(this,"carPitchVelocity",0);he(this,"carRoll",0);he(this,"obstacle");he(this,"obstacleInitialAngle",0);he(this,"hasCollided",!1);he(this,"impactSpeedMs",0);he(this,"impactTimeS",0);he(this,"postImpactSpeedMs",0);he(this,"peakDecelG",0);he(this,"lastImpactResult",null);he(this,"runCounter",0);he(this,"elapsedTimeS",0);he(this,"settledTimerS",0);he(this,"onImpact");he(this,"onSettled");this.params={...e},this.car=this.createInitialCar(),this.obstacle=this.createInitialObstacle()}updateParams(e){this.params={...this.params,...e},this.status==="IDLE"&&this.reset()}createInitialCar(){const e=this.params.massKg,n=e*on.inertiaFactor;return{x:0,z:on.trackStartZ,vx:0,vz:0,angle:0,omega:0,mass:e,inertia:n}}createInitialObstacle(){const e=Wn[this.params.obstacleId],n=this.params.angleDeg*Math.PI/180;this.obstacleInitialAngle=n;const i=1/12*e.massKg*(e.width*e.width+e.depth*e.depth);return{x:0,z:on.impactZoneZ,vx:0,vz:0,angle:n,omega:0,mass:e.massKg,inertia:i}}reset(){this.status="IDLE",this.car=this.createInitialCar(),this.obstacle=this.createInitialObstacle(),this.carPitch=0,this.carPitchVelocity=0,this.carRoll=0,this.hasCollided=!1,this.impactSpeedMs=0,this.impactTimeS=0,this.postImpactSpeedMs=0,this.peakDecelG=0,this.elapsedTimeS=0,this.settledTimerS=0}start(){this.status!=="IDLE"&&this.reset(),this.status="ACCELERATING"}step(e){if(this.status==="IDLE"||this.status==="SETTLED")return;const n=.016;let i=Math.min(e,.05);for(;i>0;){const r=Math.min(i,n);this.physicsSubStep(r),i-=r}}physicsSubStep(e){this.elapsedTimeS+=e;const n=this.params.speedKmh*1e3/3600;if(this.status==="ACCELERATING"){this.car.vz<n?(this.car.vz=Math.min(n,this.car.vz+7.5*e),this.carPitch=-.015*(this.car.vz/n)):(this.car.vz=n,this.carPitch=0),this.car.z+=this.car.vz*e,this.checkCollision();return}if(this.status==="IMPACT"||this.status==="POST_IMPACT"){this.car.x+=this.car.vx*e,this.car.z+=this.car.vz*e,this.car.angle+=this.car.omega*e;const r=-65*this.carPitch-8.5*this.carPitchVelocity;this.carPitchVelocity+=r*e,this.carPitch+=this.carPitchVelocity*e,this.carRoll=-Math.sin(this.car.omega)*.08;const s=Math.sqrt(this.car.vx*this.car.vx+this.car.vz*this.car.vz);if(s>.001){const v=Math.max(0,s-7.651800000000001*e)/s;this.car.vx*=v,this.car.vz*=v}else this.car.vx=0,this.car.vz=0;const o=4.2;if(Math.abs(this.car.omega)>.001){const h=Math.sign(this.car.omega),f=Math.max(0,Math.abs(this.car.omega)-o*e)*h;this.car.omega=f}else this.car.omega=0;const a=Wn[this.params.obstacleId];if(!a.isFixed){this.obstacle.x+=this.obstacle.vx*e,this.obstacle.z+=this.obstacle.vz*e,this.obstacle.angle+=this.obstacle.omega*e;const h=Math.sqrt(this.obstacle.vx*this.obstacle.vx+this.obstacle.vz*this.obstacle.vz);if(h>.001){const f=a.friction*9.81,v=Math.max(0,h-f*e)/h;this.obstacle.vx*=v,this.obstacle.vz*=v}else this.obstacle.vx=0,this.obstacle.vz=0;if(Math.abs(this.obstacle.omega)>.001){const p=Math.sign(this.obstacle.omega);this.obstacle.omega=Math.max(0,Math.abs(this.obstacle.omega)-3.8*e)*p}else this.obstacle.omega=0}this.resolveSecondaryOverlap();const c=Math.sqrt(this.car.vx*this.car.vx+this.car.vz*this.car.vz)<.12&&Math.abs(this.car.omega)<.04,u=a.isFixed||Math.sqrt(this.obstacle.vx*this.obstacle.vx+this.obstacle.vz*this.obstacle.vz)<.1;c&&u?(this.settledTimerS+=e,this.settledTimerS>=.5&&this.finalizeCrash()):this.settledTimerS=0,this.elapsedTimeS-this.impactTimeS>4.5&&this.finalizeCrash()}}checkCollision(){const e=on.length/2,n=on.width/2,i=this.car.z+e,r=this.car.x,s=Wn[this.params.obstacleId],o=this.obstacle.angle,a={x:-Math.sin(o),z:-Math.cos(o)},l=this.obstacle.z-s.depth/2*Math.cos(o),c=this.obstacle.x+s.depth/2*Math.sin(o),u=[{x:r-n,z:i},{x:r,z:i},{x:r+n,z:i}];let h=!1,f={x:0,z:0},p=999;for(const v of u){const _=(v.x-c)*a.x+(v.z-l)*a.z;_<=0&&(h=!0,_<p&&(p=_,f={x:v.x,z:v.z}))}h&&!this.hasCollided&&this.handleImpact(f,a)}handleImpact(e,n){this.hasCollided=!0,this.status="IMPACT",this.impactTimeS=this.elapsedTimeS,this.impactSpeedMs=Math.sqrt(this.car.vx*this.car.vx+this.car.vz*this.car.vz);const i=Wn[this.params.obstacleId],r={x:e.x-this.car.x,z:e.z-this.car.z},s={x:e.x-this.obstacle.x,z:e.z-this.obstacle.z},o=Math.hypot(n.x,n.z)||1,a=n.x/o,l=n.z/o,c=-l,u=a,h=r.x*l-r.z*a,f=s.x*l-s.z*a,p=r.x*u-r.z*c,v=s.x*u-s.z*c,_={x:this.car.vx-this.car.omega*r.z,z:this.car.vz+this.car.omega*r.x},m=i.isFixed?{x:0,z:0}:{x:this.obstacle.vx-this.obstacle.omega*s.z,z:this.obstacle.vz+this.obstacle.omega*s.x},d={x:_.x-m.x,z:_.z-m.z},x=d.x*a+d.z*l,g=d.x*c+d.z*u;if(x<0){const y=i.restitution,b=1/this.car.mass,A=i.isFixed?0:1/this.obstacle.mass,w=1/this.car.inertia,P=i.isFixed?0:1/this.obstacle.inertia,z=b+A+h*h*w+f*f*P,M=-(1+y)*x/z,C=b+A+p*p*w+v*v*P,$=M*.38,N=-g/C,q=Math.max(-$,Math.min($,N)),k=M*a+q*c,Z=M*l+q*u;if(this.car.vx+=k*b,this.car.vz+=Z*b,this.car.omega+=(r.x*Z-r.z*k)*w,i.isFixed||(this.obstacle.vx-=k*A,this.obstacle.vz-=Z*A,this.obstacle.omega-=(s.x*Z-s.z*k)*P),this.carPitch=.08,this.carPitchVelocity=-1.2,this.postImpactSpeedMs=Math.sqrt(this.car.vx*this.car.vx+this.car.vz*this.car.vz),this.onImpact){const I=Math.round(this.impactSpeedMs*3.6);this.onImpact(I,e.x,e.z,a,l)}}setTimeout(()=>{this.status==="IMPACT"&&(this.status="POST_IMPACT")},40)}resolveSecondaryOverlap(){const e=Wn[this.params.obstacleId],n=on.length/2,i=this.car.z+n*Math.cos(this.car.angle),r=this.car.x+n*Math.sin(this.car.angle),s=this.obstacle.angle,o=this.obstacle.z-e.depth/2*Math.cos(s),a=this.obstacle.x+e.depth/2*Math.sin(s),l={x:-Math.sin(s),z:-Math.cos(s)},c=(r-a)*l.x+(i-o)*l.z;if(c<-.05){const h=-c*.4;this.car.x+=l.x*h,this.car.z+=l.z*h,e.isFixed||(this.obstacle.x-=l.x*h*.5,this.obstacle.z-=l.z*h*.5)}}finalizeCrash(){this.status="SETTLED",this.runCounter+=1;const e=Wn[this.params.obstacleId],n=Math.round(this.impactSpeedMs*3.6),i=Math.hypot(this.obstacle.x-0,this.obstacle.z-on.impactZoneZ),r=my(this.car.mass,this.impactSpeedMs,this.postImpactSpeedMs,this.car.omega,this.obstacle.mass,e.isFixed,i),s=gy(n,this.car.mass,this.params.angleDeg,this.params.obstacleId,r.energyDissipatedKj),o=Math.round(Math.hypot(this.car.x,this.car.z-on.impactZoneZ)*10)/10,a=Math.round(this.car.angle*180/Math.PI),l={id:`CRASH-${Date.now()}-${this.runCounter}`,runNumber:this.runCounter,timestamp:new Date,configuredSpeedKmh:this.params.speedKmh,impactSpeedKmh:n,impactSpeedMs:Math.round(this.impactSpeedMs*10)/10,vehicleMassKg:this.car.mass,collisionAngleDeg:this.params.angleDeg,obstacleId:this.params.obstacleId,obstacleName:e.name,impulseNs:r.impulseNs,estimatedImpactForceKn:r.estimatedImpactForceKn,estimatedImpactForceTons:r.estimatedImpactForceTons,peakGForce:r.peakGForce,assumedPulseDurationMs:r.assumedPulseDurationMs,assumedCrumpleDistanceM:r.assumedCrumpleDistanceM,initialKineticEnergyKj:r.initialKineticEnergyKj,postImpactKineticEnergyKj:r.postImpactKineticEnergyKj,energyDissipatedKj:r.energyDissipatedKj,damagePercentage:s.damagePercentage,damageSeverity:s.damageSeverity,primaryDamageZone:s.primaryDamageZone,damageZones:s.damageZones,finalPosition:{x:Math.round(this.car.x*100)/100,y:0,z:Math.round(this.car.z*100)/100},finalDistanceToImpactM:o,finalRotationDeg:a,obstacleDisplacementM:Math.round(i*100)/100};this.lastImpactResult=l,this.onSettled&&this.onSettled(l)}getLiveTelemetry(){const e=Math.sqrt(this.car.vx*this.car.vx+this.car.vz*this.car.vz),n=Math.round(e*3.6),i=Math.round((on.impactZoneZ-(this.car.z+on.length/2))*10)/10,r=Math.round(this.car.angle*180/Math.PI);let s=0,o=0;this.status==="ACCELERATING"?s=.76:this.status==="IMPACT"?(s=-this.peakDecelG||-18.5,o=Math.abs(this.car.omega)*3.5):this.status==="POST_IMPACT"&&(s=-.78,o=Math.abs(this.car.omega)*1.8);const a=Math.round(Math.hypot(s,o)*10)/10;return{speedKmh:n,speedMs:Math.round(e*10)/10,position:{x:Math.round(this.car.x*100)/100,y:0,z:Math.round(this.car.z*100)/100},headingDeg:r,longitudinalG:Math.round(s*10)/10,lateralG:Math.round(o*10)/10,totalG:a,distanceToImpactM:Math.max(0,i),timeElapsedS:Math.round(this.elapsedTimeS*100)/100,status:this.status,obstaclePosition:{x:Math.round(this.obstacle.x*100)/100,y:0,z:Math.round(this.obstacle.z*100)/100},obstacleHeadingDeg:Math.round(this.obstacle.angle*180/Math.PI)}}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="162",xy=0,Xf=1,_y=2,zg=1,Bg=2,pi=3,nr=0,fn=1,vi=2,Zi=0,Ts=1,qf=2,Yf=3,$f=4,yy=5,yr=100,My=101,Sy=102,Kf=103,Zf=104,Ey=200,wy=201,Ty=202,Ay=203,ch=204,uh=205,by=206,Cy=207,Ry=208,Py=209,Ly=210,Ny=211,Dy=212,Iy=213,Uy=214,Oy=0,Fy=1,ky=2,Al=3,zy=4,By=5,Gy=6,Hy=7,Gg=0,Vy=1,Wy=2,Ji=0,jy=1,Xy=2,qy=3,Hg=4,Yy=5,$y=6,Ky=7,Vg=300,Is=301,Us=302,hh=303,dh=304,Kl=306,fh=1e3,yn=1001,ph=1002,zt=1003,Jf=1004,Qs=1005,an=1006,Lc=1007,Tr=1008,Qi=1009,Zy=1010,Jy=1011,vd=1012,Wg=1013,Hi=1014,ti=1015,Go=1016,jg=1017,Xg=1018,Cr=1020,Qy=1021,jn=1023,eM=1024,tM=1025,Rr=1026,Os=1027,qg=1028,Yg=1029,nM=1030,$g=1031,Kg=1033,Nc=33776,Dc=33777,Ic=33778,Uc=33779,Qf=35840,ep=35841,tp=35842,np=35843,Zg=36196,ip=37492,rp=37496,sp=37808,op=37809,ap=37810,lp=37811,cp=37812,up=37813,hp=37814,dp=37815,fp=37816,pp=37817,mp=37818,gp=37819,vp=37820,xp=37821,Oc=36492,_p=36494,yp=36495,iM=36283,Mp=36284,Sp=36285,Ep=36286,rM=3200,sM=3201,Jg=0,oM=1,zi="",Jn="srgb",ar="srgb-linear",xd="display-p3",Zl="display-p3-linear",bl="linear",at="srgb",Cl="rec709",Rl="p3",Gr=7680,wp=519,aM=512,lM=513,cM=514,Qg=515,uM=516,hM=517,dM=518,fM=519,Tp=35044,Fc=35048,Ap="300 es",mh=1035,yi=2e3,Pl=2001;class Gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,Ll=180/Math.PI;function Hs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function pM(t,e){return(t%e+e)%e}function zc(t,e,n){return(1-n)*t+n*e}function bp(t){return(t&t-1)===0&&t!==0}function gh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class fe{constructor(e=0,n=0){fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],v=i[8],_=r[0],m=r[3],d=r[6],x=r[1],g=r[4],y=r[7],b=r[2],A=r[5],w=r[8];return s[0]=o*_+a*x+l*b,s[3]=o*m+a*g+l*A,s[6]=o*d+a*y+l*w,s[1]=c*_+u*x+h*b,s[4]=c*m+u*g+h*A,s[7]=c*d+u*y+h*w,s[2]=f*_+p*x+v*b,s[5]=f*m+p*g+v*A,s[8]=f*d+p*y+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=n*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Bc.makeScale(e,n)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new Ve;function ev(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mM(){const t=Nl("canvas");return t.style.display="block",t}const Cp={};function gM(t){t in Cp||(Cp[t]=!0,console.warn(t))}const Rp=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pp=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xa={[ar]:{transfer:bl,primaries:Cl,toReference:t=>t,fromReference:t=>t},[Jn]:{transfer:at,primaries:Cl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Zl]:{transfer:bl,primaries:Rl,toReference:t=>t.applyMatrix3(Pp),fromReference:t=>t.applyMatrix3(Rp)},[xd]:{transfer:at,primaries:Rl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Pp),fromReference:t=>t.applyMatrix3(Rp).convertLinearToSRGB()}},vM=new Set([ar,Zl]),nt={enabled:!0,_workingColorSpace:ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!vM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xa[e].toReference,r=xa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xa[t].primaries},getTransfer:function(t){return t===zi?bl:xa[t].transfer}};function As(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class tv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=Nl("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=As(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(As(n[i]/255)*255):n[i]=As(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xM=0;class nv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hc(r[o].image)):s.push(Hc(r[o]))}else s=Hc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _M=0;class $t extends Gs{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=yn,r=yn,s=an,o=Tr,a=jn,l=Qi,c=$t.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Hs(),this.name="",this.source=new nv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Vg;$t.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(p+1)/2,b=(d+1)/2,A=(u+f)/4,w=(h+_)/4,P=(v+m)/4;return g>y&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=w/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-v)*(m-v)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends Gs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new nv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends yM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class iv extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class MM extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(h!==_||l!==f||c!==p||u!==v){let m=1-a;const d=l*f+c*p+u*v+h*_,x=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const b=Math.sqrt(g),A=Math.atan2(b,d*x);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const y=a*x;if(l=l*m+f*y,c=c*m+p*y,u=u*m+v*y,h=h*m+_*y,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*h+l*p-c*f,e[n+1]=l*v+u*f+c*h-a*p,e[n+2]=c*v+u*p+a*f-l*h,e[n+3]=u*v-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new D,Lp=new Ko;class zr{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),ya.subVectors(this.max,to),Vr.subVectors(e.a,to),Wr.subVectors(e.b,to),jr.subVectors(e.c,to),Ri.subVectors(Wr,Vr),Pi.subVectors(jr,Wr),ur.subVectors(Vr,jr);let n=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-ur.z,ur.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,ur.z,0,-ur.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-ur.y,ur.x,0];return!Wc(n,Vr,Wr,jr,ya)||(n=[1,0,0,0,1,0,0,0,1],!Wc(n,Vr,Wr,jr,ya))?!1:(Ma.crossVectors(Ri,Pi),n=[Ma.x,Ma.y,Ma.z],Wc(n,Vr,Wr,jr,ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new D,new D,new D,new D,new D,new D,new D,new D],kn=new D,_a=new zr,Vr=new D,Wr=new D,jr=new D,Ri=new D,Pi=new D,ur=new D,to=new D,ya=new D,Ma=new D,hr=new D;function Wc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){hr.fromArray(t,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=n.dot(hr),u=i.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const SM=new zr,no=new D,jc=new D;class Zo{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):SM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const n=no.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(no,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(jc)),this.expandByPoint(no.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new D,Xc=new D,Sa=new D,Li=new D,qc=new D,Ea=new D,Yc=new D;class EM{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xc.copy(e).add(n).multiplyScalar(.5),Sa.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(Xc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Sa),a=Li.dot(this.direction),l=-Li.dot(Sa),c=Li.lengthSq(),u=Math.abs(1-o*o);let h,f,p,v;if(u>0)if(h=o*l-a,f=o*a-l,v=s*u,h>=0)if(f>=-v)if(f<=v){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xc).addScaledVector(Sa,f),p}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){qc.subVectors(n,e),Ea.subVectors(i,e),Yc.crossVectors(qc,Ea);let o=this.direction.dot(Yc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Ea.crossVectors(Li,Ea));if(l<0)return null;const c=a*this.direction.dot(qc.cross(Li));if(c<0||l+c>o)return null;const u=-a*Li.dot(Yc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,o,a,l,c,u,h,f,p,v,_,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,p,v,_,m)}set(e,n,i,r,s,o,a,l,c,u,h,f,p,v,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,v=a*u,_=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,v=c*u,_=c*h;n[0]=f+_*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,v=c*u,_=c*h;n[0]=f-_*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,v=a*u,_=a*h;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+_,n[1]=l*h,n[5]=_*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=_-f*h,n[8]=v*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+v,n[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+_,n[5]=o*u,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*u,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wM,e,TM)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ni.crossVectors(i,mn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ni.crossVectors(i,mn)),Ni.normalize(),wa.crossVectors(mn,Ni),r[0]=Ni.x,r[4]=wa.x,r[8]=mn.x,r[1]=Ni.y,r[5]=wa.y,r[9]=mn.y,r[2]=Ni.z,r[6]=wa.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],v=i[2],_=i[6],m=i[10],d=i[14],x=i[3],g=i[7],y=i[11],b=i[15],A=r[0],w=r[4],P=r[8],z=r[12],M=r[1],C=r[5],X=r[9],$=r[13],N=r[2],q=r[6],k=r[10],Z=r[14],I=r[3],F=r[7],G=r[11],Q=r[15];return s[0]=o*A+a*M+l*N+c*I,s[4]=o*w+a*C+l*q+c*F,s[8]=o*P+a*X+l*k+c*G,s[12]=o*z+a*$+l*Z+c*Q,s[1]=u*A+h*M+f*N+p*I,s[5]=u*w+h*C+f*q+p*F,s[9]=u*P+h*X+f*k+p*G,s[13]=u*z+h*$+f*Z+p*Q,s[2]=v*A+_*M+m*N+d*I,s[6]=v*w+_*C+m*q+d*F,s[10]=v*P+_*X+m*k+d*G,s[14]=v*z+_*$+m*Z+d*Q,s[3]=x*A+g*M+y*N+b*I,s[7]=x*w+g*C+y*q+b*F,s[11]=x*P+g*X+y*k+b*G,s[15]=x*z+g*$+y*Z+b*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],_=e[7],m=e[11],d=e[15];return v*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*h+n*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],_=e[13],m=e[14],d=e[15],x=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,g=v*f*c-u*m*c-v*l*p+o*m*p+u*l*d-o*f*d,y=u*_*c-v*h*c+v*a*p-o*_*p-u*a*d+o*h*d,b=v*h*l-u*_*l-v*a*f+o*_*f+u*a*m-o*h*m,A=n*x+i*g+r*y+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=x*w,e[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*w,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*d+i*l*d)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*w,e[4]=g*w,e[5]=(u*m*s-v*f*s+v*r*p-n*m*p-u*r*d+n*f*d)*w,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*d-n*l*d)*w,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*w,e[8]=y*w,e[9]=(v*h*s-u*_*s-v*i*p+n*_*p+u*i*d-n*h*d)*w,e[10]=(o*_*s-v*a*s+v*i*c-n*_*c-o*i*d+n*a*d)*w,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*w,e[12]=b*w,e[13]=(u*_*r-v*h*r+v*i*f-n*_*f-u*i*m+n*h*m)*w,e[14]=(v*a*r-o*_*r-v*i*l+n*_*l+o*i*m-n*a*m)*w,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,v=s*h,_=o*u,m=o*h,d=a*h,x=l*c,g=l*u,y=l*h,b=i.x,A=i.y,w=i.z;return r[0]=(1-(_+d))*b,r[1]=(p+y)*b,r[2]=(v-g)*b,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(f+d))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(v+g)*w,r[9]=(m-x)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,u=1/o,h=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=yi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(a===yi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Pl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),f=(n+e)*c,p=(i+r)*u;let v,_;if(a===yi)v=(o+s)*h,_=-2*h;else if(a===Pl)v=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new D,zn=new ct,wM=new D(0,0,0),TM=new D(1,1,1),Ni=new D,wa=new D,mn=new D,Np=new ct,Dp=new Ko;class oi{constructor(e=0,n=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dp.setFromEuler(this),this.setFromQuaternion(Dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AM=0;const Ip=new D,qr=new Ko,hi=new ct,Ta=new D,io=new D,bM=new D,CM=new Ko,Up=new D(1,0,0),Op=new D(0,1,0),Fp=new D(0,0,1),RM={type:"added"},PM={type:"removed"},$c={type:"childadded",child:null},Kc={type:"childremoved",child:null};class Ct extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new D,n=new oi,i=new Ko,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ve}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Up,e)}rotateY(e){return this.rotateOnAxis(Op,e)}rotateZ(e){return this.rotateOnAxis(Fp,e)}translateOnAxis(e,n){return Ip.copy(e).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Up,e)}translateY(e){return this.translateOnAxis(Op,e)}translateZ(e){return this.translateOnAxis(Fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ta.copy(e):Ta.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(io,Ta,this.up):hi.lookAt(Ta,io,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(hi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(RM),$c.child=e,this.dispatchEvent($c),$c.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(PM),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,bM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,CM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new D,di=new D,Zc=new D,fi=new D,Yr=new D,$r=new D,kp=new D,Jc=new D,Qc=new D,eu=new D;class ni{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),di.subVectors(i,n),Zc.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(di),l=Bn.dot(Zc),c=di.dot(di),u=di.dot(Zc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),di.subVectors(e,n),Bn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Bn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),$r.subVectors(s,i),Jc.subVectors(e,i);const l=Yr.dot(Jc),c=$r.dot(Jc);if(l<=0&&c<=0)return n.copy(i);Qc.subVectors(e,r);const u=Yr.dot(Qc),h=$r.dot(Qc);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Yr,o);eu.subVectors(e,s);const p=Yr.dot(eu),v=$r.dot(eu);if(v>=0&&p<=v)return n.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector($r,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return kp.subVectors(s,r),a=(h-u)/(h-u+(p-v)),n.copy(r).addScaledVector(kp,a);const d=1/(m+_+f);return o=_*d,a=f*d,n.copy(i).addScaledVector(Yr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function tu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=pM(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tu(o,s,e+1/3),this.g=tu(o,s,e),this.b=tu(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const i=sv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return nt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Yt(Xt.r*255,0,255))*65536+Math.round(Yt(Xt.g*255,0,255))*256+Math.round(Yt(Xt.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Jn){nt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Aa);const i=zc(Di.h,Aa.h,n),r=zc(Di.s,Aa.s,n),s=zc(Di.l,Aa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Je;Je.NAMES=sv;let LM=0;class Jo extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=Ts,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=uh,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ch&&(i.blendSrc=this.blendSrc),this.blendDst!==uh&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ii extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new D,ba=new fe;class Dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return gM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ba.fromBufferAttribute(this,n),ba.applyMatrix3(e),this.setXY(n,ba.x,ba.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tp&&(e.usage=this.usage),e}}class ov extends Dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class av extends Dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ot extends Dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let NM=0;const Cn=new ct,nu=new Ct,Kr=new D,gn=new zr,ro=new zr,Nt=new D;class On extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ev(e)?av:ov)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ot(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(gn.min,ro.min),gn.expandByPoint(Nt),Nt.addVectors(gn.max,ro.max),gn.expandByPoint(Nt)):(gn.expandByPoint(ro.min),gn.expandByPoint(ro.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),Nt.add(Kr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new D,l[P]=new D;const c=new D,u=new D,h=new D,f=new fe,p=new fe,v=new fe,_=new D,m=new D;function d(P,z,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,z),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,z),v.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),v.sub(f);const C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(C),a[P].add(_),a[z].add(_),a[M].add(_),l[P].add(m),l[z].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,z=x.length;P<z;++P){const M=x[P],C=M.start,X=M.count;for(let $=C,N=C+X;$<N;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const g=new D,y=new D,b=new D,A=new D;function w(P){b.fromBufferAttribute(r,P),A.copy(b);const z=a[P];g.copy(z),g.sub(b.multiplyScalar(b.dot(z))).normalize(),y.crossVectors(A,z);const C=y.dot(l[P])<0?-1:1;o.setXYZW(P,g.x,g.y,g.z,C)}for(let P=0,z=x.length;P<z;++P){const M=x[P],C=M.start,X=M.count;for(let $=C,N=C+X;$<N;$+=3)w(e.getX($+0)),w(e.getX($+1)),w(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new Dn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zp=new ct,dr=new EM,Ca=new Zo,Bp=new D,Zr=new D,Jr=new D,Qr=new D,iu=new D,Ra=new D,Pa=new fe,La=new fe,Na=new fe,Gp=new D,Hp=new D,Vp=new D,Da=new D,Ia=new D;class Ee extends Ct{constructor(e=new On,n=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(iu.fromBufferAttribute(h,e),o?Ra.addScaledVector(iu,u):Ra.addScaledVector(iu.sub(n),u))}n.add(Ra)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(Ca.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Ca,Bp)===null||dr.origin.distanceToSquared(Bp)>(e.far-e.near)**2))&&(zp.copy(s).invert(),dr.copy(e.ray).applyMatrix4(zp),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],d=o[m.materialIndex],x=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,b=g;y<b;y+=3){const A=a.getX(y),w=a.getX(y+1),P=a.getX(y+2);r=Ua(this,d,e,i,c,u,h,A,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const x=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=Ua(this,o,e,i,c,u,h,x,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],d=o[m.materialIndex],x=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,b=g;y<b;y+=3){const A=y,w=y+1,P=y+2;r=Ua(this,d,e,i,c,u,h,A,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const x=m,g=m+1,y=m+2;r=Ua(this,o,e,i,c,u,h,x,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function DM(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===nr,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ia);return c<n.near||c>n.far?null:{distance:c,point:Ia.clone(),object:t}}function Ua(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Zr),t.getVertexPosition(l,Jr),t.getVertexPosition(c,Qr);const u=DM(t,e,n,i,Zr,Jr,Qr,Da);if(u){r&&(Pa.fromBufferAttribute(r,a),La.fromBufferAttribute(r,l),Na.fromBufferAttribute(r,c),u.uv=ni.getInterpolation(Da,Zr,Jr,Qr,Pa,La,Na,new fe)),s&&(Pa.fromBufferAttribute(s,a),La.fromBufferAttribute(s,l),Na.fromBufferAttribute(s,c),u.uv1=ni.getInterpolation(Da,Zr,Jr,Qr,Pa,La,Na,new fe)),o&&(Gp.fromBufferAttribute(o,a),Hp.fromBufferAttribute(o,l),Vp.fromBufferAttribute(o,c),u.normal=ni.getInterpolation(Da,Zr,Jr,Qr,Gp,Hp,Vp,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};ni.getNormal(Zr,Jr,Qr,h.normal),u.face=h}return u}class Ze extends On{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(h,2));function v(_,m,d,x,g,y,b,A,w,P,z){const M=y/w,C=b/P,X=y/2,$=b/2,N=A/2,q=w+1,k=P+1;let Z=0,I=0;const F=new D;for(let G=0;G<k;G++){const Q=G*C-$;for(let se=0;se<q;se++){const Ne=se*M-X;F[_]=Ne*x,F[m]=Q*g,F[d]=N,c.push(F.x,F.y,F.z),F[_]=0,F[m]=0,F[d]=A>0?1:-1,u.push(F.x,F.y,F.z),h.push(se/w),h.push(1-G/P),Z+=1}}for(let G=0;G<P;G++)for(let Q=0;Q<w;Q++){const se=f+Q+q*G,Ne=f+Q+q*(G+1),V=f+(Q+1)+q*(G+1),ne=f+(Q+1)+q*G;l.push(se,Ne,ne),l.push(Ne,V,ne),I+=6}a.addGroup(p,I,z),p+=I,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function IM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function lv(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const UM={clone:Fs,merge:Jt};var OM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=IM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let cv=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ii=new D,Wp=new fe,jp=new fe;class xn extends cv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ll*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ll*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,n){return this.getViewBounds(e,Wp,jp),n.subVectors(jp,Wp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const es=-90,ts=1;class kM extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new xn(es,ts,e,n);s.layers=this.layers,this.add(s);const o=new xn(es,ts,e,n);o.layers=this.layers,this.add(o);const a=new xn(es,ts,e,n);a.layers=this.layers,this.add(a);const l=new xn(es,ts,e,n);l.layers=this.layers,this.add(l);const c=new xn(es,ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class uv extends $t{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Is,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zM extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new uv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:an}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ze(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Zi});s.uniforms.tEquirect.value=n;const o=new Ee(r,s),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=an),new kM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ru=new D,BM=new D,GM=new Ve;class xr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ru.subVectors(i,n).cross(BM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ru),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||GM.getNormalMatrix(e),r=this.coplanarPoint(ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Zo,Oa=new D;class _d{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],v=r[9],_=r[10],m=r[11],d=r[12],x=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,m-p,y-d).normalize(),i[1].setComponents(l+s,f+c,m+p,y+d).normalize(),i[2].setComponents(l+o,f+u,m+v,y+x).normalize(),i[3].setComponents(l-o,f-u,m-v,y-x).normalize(),i[4].setComponents(l-a,f-h,m-_,y-g).normalize(),n===yi)i[5].setComponents(l+a,f+h,m+_,y+g).normalize();else if(n===Pl)i[5].setComponents(a,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oa.x=r.normal.x>0?e.max.x:e.min.x,Oa.y=r.normal.y>0?e.max.y:e.min.y,Oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=h.byteLength,v=t.createBuffer();t.bindBuffer(u,v),t.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const f=u.array,p=u._updateRange,v=u.updateRanges;if(t.bindBuffer(h,c),p.count===-1&&v.length===0&&t.bufferSubData(h,0,f),v.length!==0){for(let _=0,m=v.length;_<m;_++){const d=v[_];n?t.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):t.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class _n extends On{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,p=[],v=[],_=[],m=[];for(let d=0;d<u;d++){const x=d*f-o;for(let g=0;g<c;g++){const y=g*h-s;v.push(y,-x,0),_.push(0,0,1),m.push(g/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const g=x+c*d,y=x+c*(d+1),b=x+1+c*(d+1),A=x+1+c*d;p.push(g,y,A),p.push(y,b,A)}this.setIndex(p),this.setAttribute("position",new Ot(v,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.widthSegments,e.heightSegments)}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_S="gl_FragColor = linearToOutputTexel( gl_FragColor );",yS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,MS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,NS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,US=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,KS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,s1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,o1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Z1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ME=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:VM,alphahash_pars_fragment:WM,alphamap_fragment:jM,alphamap_pars_fragment:XM,alphatest_fragment:qM,alphatest_pars_fragment:YM,aomap_fragment:$M,aomap_pars_fragment:KM,batching_pars_vertex:ZM,batching_vertex:JM,begin_vertex:QM,beginnormal_vertex:eS,bsdfs:tS,iridescence_fragment:nS,bumpmap_pars_fragment:iS,clipping_planes_fragment:rS,clipping_planes_pars_fragment:sS,clipping_planes_pars_vertex:oS,clipping_planes_vertex:aS,color_fragment:lS,color_pars_fragment:cS,color_pars_vertex:uS,color_vertex:hS,common:dS,cube_uv_reflection_fragment:fS,defaultnormal_vertex:pS,displacementmap_pars_vertex:mS,displacementmap_vertex:gS,emissivemap_fragment:vS,emissivemap_pars_fragment:xS,colorspace_fragment:_S,colorspace_pars_fragment:yS,envmap_fragment:MS,envmap_common_pars_fragment:SS,envmap_pars_fragment:ES,envmap_pars_vertex:wS,envmap_physical_pars_fragment:OS,envmap_vertex:TS,fog_vertex:AS,fog_pars_vertex:bS,fog_fragment:CS,fog_pars_fragment:RS,gradientmap_pars_fragment:PS,lightmap_fragment:LS,lightmap_pars_fragment:NS,lights_lambert_fragment:DS,lights_lambert_pars_fragment:IS,lights_pars_begin:US,lights_toon_fragment:FS,lights_toon_pars_fragment:kS,lights_phong_fragment:zS,lights_phong_pars_fragment:BS,lights_physical_fragment:GS,lights_physical_pars_fragment:HS,lights_fragment_begin:VS,lights_fragment_maps:WS,lights_fragment_end:jS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:qS,logdepthbuf_pars_vertex:YS,logdepthbuf_vertex:$S,map_fragment:KS,map_pars_fragment:ZS,map_particle_fragment:JS,map_particle_pars_fragment:QS,metalnessmap_fragment:e1,metalnessmap_pars_fragment:t1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:r1,morphtarget_pars_vertex:s1,morphtarget_vertex:o1,normal_fragment_begin:a1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:h1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:f1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:v1,packing:x1,premultiplied_alpha_fragment:_1,project_vertex:y1,dithering_fragment:M1,dithering_pars_fragment:S1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:w1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:A1,shadowmap_vertex:b1,shadowmask_pars_fragment:C1,skinbase_vertex:R1,skinning_pars_vertex:P1,skinning_vertex:L1,skinnormal_vertex:N1,specularmap_fragment:D1,specularmap_pars_fragment:I1,tonemapping_fragment:U1,tonemapping_pars_fragment:O1,transmission_fragment:F1,transmission_pars_fragment:k1,uv_pars_fragment:z1,uv_pars_vertex:B1,uv_vertex:G1,worldpos_vertex:H1,background_vert:V1,background_frag:W1,backgroundCube_vert:j1,backgroundCube_frag:X1,cube_vert:q1,cube_frag:Y1,depth_vert:$1,depth_frag:K1,distanceRGBA_vert:Z1,distanceRGBA_frag:J1,equirect_vert:Q1,equirect_frag:eE,linedashed_vert:tE,linedashed_frag:nE,meshbasic_vert:iE,meshbasic_frag:rE,meshlambert_vert:sE,meshlambert_frag:oE,meshmatcap_vert:aE,meshmatcap_frag:lE,meshnormal_vert:cE,meshnormal_frag:uE,meshphong_vert:hE,meshphong_frag:dE,meshphysical_vert:fE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:gE,points_vert:vE,points_frag:xE,shadow_vert:_E,shadow_frag:yE,sprite_vert:ME,sprite_frag:SE},de={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Qn={basic:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Jt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Jt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Jt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Jt([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Jt([de.lights,de.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Qn.physical={uniforms:Jt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Fa={r:0,b:0,g:0},pr=new oi,EE=new ct;function wE(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function v(m,d){let x=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?n:e).get(g)),g===null?_(a,l):g&&g.isColor&&(_(g,1),x=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Kl)?(u===void 0&&(u=new Ee(new Ze(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:Fs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pr.copy(d.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(EE.makeRotationFromEuler(pr)),u.material.toneMapped=nt.getTransfer(g.colorSpace)!==at,(h!==g||f!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Ee(new _n(2,2),new ir({name:"BackgroundMaterial",uniforms:Fs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=nt.getTransfer(g.colorSpace)!==at,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(Fa,lv(t)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:v}}function TE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(N,q,k,Z,I){let F=!1;if(o){const G=_(Z,k,q);c!==G&&(c=G,p(c.object)),F=d(N,Z,k,I),F&&x(N,Z,k,I)}else{const G=q.wireframe===!0;(c.geometry!==Z.id||c.program!==k.id||c.wireframe!==G)&&(c.geometry=Z.id,c.program=k.id,c.wireframe=G,F=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,P(N,q,k,Z),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function v(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,q,k){const Z=k.wireframe===!0;let I=a[N.id];I===void 0&&(I={},a[N.id]=I);let F=I[q.id];F===void 0&&(F={},I[q.id]=F);let G=F[Z];return G===void 0&&(G=m(f()),F[Z]=G),G}function m(N){const q=[],k=[],Z=[];for(let I=0;I<r;I++)q[I]=0,k[I]=0,Z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:k,attributeDivisors:Z,object:N,attributes:{},index:null}}function d(N,q,k,Z){const I=c.attributes,F=q.attributes;let G=0;const Q=k.getAttributes();for(const se in Q)if(Q[se].location>=0){const V=I[se];let ne=F[se];if(ne===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),V===void 0||V.attribute!==ne||ne&&V.data!==ne.data)return!0;G++}return c.attributesNum!==G||c.index!==Z}function x(N,q,k,Z){const I={},F=q.attributes;let G=0;const Q=k.getAttributes();for(const se in Q)if(Q[se].location>=0){let V=F[se];V===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(V=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(V=N.instanceColor));const ne={};ne.attribute=V,V&&V.data&&(ne.data=V.data),I[se]=ne,G++}c.attributes=I,c.attributesNum=G,c.index=Z}function g(){const N=c.newAttributes;for(let q=0,k=N.length;q<k;q++)N[q]=0}function y(N){b(N,0)}function b(N,q){const k=c.newAttributes,Z=c.enabledAttributes,I=c.attributeDivisors;k[N]=1,Z[N]===0&&(t.enableVertexAttribArray(N),Z[N]=1),I[N]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,q),I[N]=q)}function A(){const N=c.newAttributes,q=c.enabledAttributes;for(let k=0,Z=q.length;k<Z;k++)q[k]!==N[k]&&(t.disableVertexAttribArray(k),q[k]=0)}function w(N,q,k,Z,I,F,G){G===!0?t.vertexAttribIPointer(N,q,k,I,F):t.vertexAttribPointer(N,q,k,Z,I,F)}function P(N,q,k,Z){if(i.isWebGL2===!1&&(N.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=Z.attributes,F=k.getAttributes(),G=q.defaultAttributeValues;for(const Q in F){const se=F[Q];if(se.location>=0){let Ne=I[Q];if(Ne===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(Ne=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(Ne=N.instanceColor)),Ne!==void 0){const V=Ne.normalized,ne=Ne.itemSize,pe=n.get(Ne);if(pe===void 0)continue;const Te=pe.buffer,Ae=pe.type,Se=pe.bytesPerElement,We=i.isWebGL2===!0&&(Ae===t.INT||Ae===t.UNSIGNED_INT||Ne.gpuType===Wg);if(Ne.isInterleavedBufferAttribute){const Pe=Ne.data,L=Pe.stride,le=Ne.offset;if(Pe.isInstancedInterleavedBuffer){for(let J=0;J<se.locationSize;J++)b(se.location+J,Pe.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let J=0;J<se.locationSize;J++)y(se.location+J);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let J=0;J<se.locationSize;J++)w(se.location+J,ne/se.locationSize,Ae,V,L*Se,(le+ne/se.locationSize*J)*Se,We)}else{if(Ne.isInstancedBufferAttribute){for(let Pe=0;Pe<se.locationSize;Pe++)b(se.location+Pe,Ne.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Pe=0;Pe<se.locationSize;Pe++)y(se.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let Pe=0;Pe<se.locationSize;Pe++)w(se.location+Pe,ne/se.locationSize,Ae,V,ne*Se,ne/se.locationSize*Pe*Se,We)}}else if(G!==void 0){const V=G[Q];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(se.location,V);break;case 3:t.vertexAttrib3fv(se.location,V);break;case 4:t.vertexAttrib4fv(se.location,V);break;default:t.vertexAttrib1fv(se.location,V)}}}}A()}function z(){X();for(const N in a){const q=a[N];for(const k in q){const Z=q[k];for(const I in Z)v(Z[I].object),delete Z[I];delete q[k]}delete a[N]}}function M(N){if(a[N.id]===void 0)return;const q=a[N.id];for(const k in q){const Z=q[k];for(const I in Z)v(Z[I].object),delete Z[I];delete q[k]}delete a[N.id]}function C(N){for(const q in a){const k=a[q];if(k[N.id]===void 0)continue;const Z=k[N.id];for(const I in Z)v(Z[I].object),delete Z[I];delete k[N.id]}}function X(){$(),u=!0,c!==l&&(c=l,p(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:$,dispose:z,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:y,disableUnusedAttributes:A}}function AE(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){t.drawArrays(s,u,h),n.update(h,s,1)}function l(u,h,f){if(f===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,h,f),n.update(h,s,f)}function c(u,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<f;v++)this.render(u[v],h[v]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,f);let v=0;for(let _=0;_<f;_++)v+=h[_];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function bE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,y=o||e.has("OES_texture_float"),b=g&&y,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:A}}function CE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xr,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,g=x*4;let y=d.clippingState||null;l.value=y,y=u(v,f,g,p);for(let b=0;b!==g;++b)y[b]=n[b];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,v){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const d=p+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,y=p;g!==_;++g,y+=4)o.copy(h[g]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function RE(t){let e=new WeakMap;function n(o,a){return a===hh?o.mapping=Is:a===dh&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hh||a===dh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class dv extends cv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const gs=4,Xp=[.125,.215,.35,.446,.526,.582],Mr=20,su=new dv,qp=new Je;let ou=null,au=0,lu=0;const _r=(1+Math.sqrt(5))/2,ns=1/_r,Yp=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,_r,ns),new D(0,_r,-ns),new D(ns,0,_r),new D(-ns,0,_r),new D(_r,ns,0),new D(-_r,ns,0)];class $p{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,au,lu),e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Is||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Go,format:jn,colorSpace:ar,depthBuffer:!1},r=Kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PE(s)),this._blurMaterial=LE(s,e,n)}return r}_compileMaterial(e){const n=new Ee(this._lodPlanes[0],e);this._renderer.compile(n,su)}_sceneToCubeUV(e,n,i,r){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(qp),u.toneMapping=Ji,u.autoClear=!1;const p=new ii({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),v=new Ee(new Ze,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(qp),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const g=this._cubeSize;ka(r,x*g,d>2?g:0,g,g),u.setRenderTarget(r),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Is||e.mapping===Us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ka(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,su)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yp[(r-1)%Yp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ee(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mr-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):Mr;m>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const d=[];let x=0;for(let w=0;w<Mr;++w){const P=w/_,z=Math.exp(-P*P/2);d.push(z),w===0?x+=z:w<m&&(x+=2*z)}for(let w=0;w<d.length;w++)d[w]=d[w]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const y=this._sizeLods[r],b=3*y*(r>g-gs?r-g+gs:0),A=4*(this._cubeSize-y);ka(n,b,A,3*y,2*y),l.setRenderTarget(n),l.render(h,su)}}function PE(t){const e=[],n=[],i=[];let r=t;const s=t-gs+1+Xp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-gs?l=Xp[o-t+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,_=3,m=2,d=1,x=new Float32Array(_*v*p),g=new Float32Array(m*v*p),y=new Float32Array(d*v*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,z=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(z,_*v*A),g.set(f,m*v*A);const M=[A,A,A,A,A,A];y.set(M,d*v*A)}const b=new On;b.setAttribute("position",new Dn(x,_)),b.setAttribute("uv",new Dn(g,m)),b.setAttribute("faceIndex",new Dn(y,d)),e.push(b),r>gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kp(t,e,n){const i=new Ur(t,e,n);return i.texture.mapping=Kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function LE(t,e,n){const i=new Float32Array(Mr),r=new D(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Zp(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Jp(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hh||l===dh,u=l===Is||l===Us;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new $p(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){n===null&&(n=new $p(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function DE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const _=p[v];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,v=h.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let g=0,y=x.length;g<y;g+=3){const b=x[g+0],A=x[g+1],w=x[g+2];f.push(b,A,A,w,w,b)}}else if(v!==void 0){const x=v.array;_=v.version;for(let g=0,y=x.length/3-1;g<y;g+=3){const b=g+0,A=g+1,w=g+2;f.push(b,A,A,w,w,b)}}else return;const m=new(ev(f)?av:ov)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function UE(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function h(p,v,_){if(_===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,v,a,p*l,_),n.update(v,s,_)}function f(p,v,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,v[d]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,_);let d=0;for(let x=0;x<_;x++)d+=v[x];n.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function OE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FE(t,e){return t[0]-e[0]}function kE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function zE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let $=function(){C.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var p=$;m!==void 0&&m.texture.dispose();const d=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,g=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let w=0;d===!0&&(w=1),x===!0&&(w=2),g===!0&&(w=3);let P=u.attributes.position.count*w,z=1;P>e.maxTextureSize&&(z=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const M=new Float32Array(P*z*4*_),C=new iv(M,P,z,_);C.type=ti,C.needsUpdate=!0;const X=w*4;for(let N=0;N<_;N++){const q=y[N],k=b[N],Z=A[N],I=P*z*4*N;for(let F=0;F<q.count;F++){const G=F*X;d===!0&&(o.fromBufferAttribute(q,F),M[I+G+0]=o.x,M[I+G+1]=o.y,M[I+G+2]=o.z,M[I+G+3]=0),x===!0&&(o.fromBufferAttribute(k,F),M[I+G+4]=o.x,M[I+G+5]=o.y,M[I+G+6]=o.z,M[I+G+7]=0),g===!0&&(o.fromBufferAttribute(Z,F),M[I+G+8]=o.x,M[I+G+9]=o.y,M[I+G+10]=o.z,M[I+G+11]=Z.itemSize===4?o.w:1)}}m={count:_,texture:C,size:new fe(P,z)},s.set(u,m),u.addEventListener("dispose",$)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let d=0;for(let g=0;g<f.length;g++)d+=f[g];const x=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(t,"morphTargetBaseInfluence",x),h.getUniforms().setValue(t,"morphTargetInfluences",f)}h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==v){_=[];for(let y=0;y<v;y++)_[y]=[y,0];i[u.id]=_}for(let y=0;y<v;y++){const b=_[y];b[0]=y,b[1]=f[y]}_.sort(kE);for(let y=0;y<8;y++)y<v&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(FE);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const b=a[y],A=b[0],w=b[1];A!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+y)!==m[A]&&u.setAttribute("morphTarget"+y,m[A]),d&&u.getAttribute("morphNormal"+y)!==d[A]&&u.setAttribute("morphNormal"+y,d[A]),r[y]=w,x+=w):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const g=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function BE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class fv extends $t{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Rr,u!==Rr&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rr&&(i=Hi),i===void 0&&u===Os&&(i=Cr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const pv=new $t,mv=new fv(1,1);mv.compareFunction=Qg;const gv=new iv,vv=new MM,xv=new uv,Qp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qp[r];if(s===void 0&&(s=new Float32Array(r),Qp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jl(t,e){let n=em[e];n===void 0&&(n=new Int32Array(e),em[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;im.set(i),t.uniformMatrix2fv(this.addr,!1,im),Pt(n,i)}}function XE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;nm.set(i),t.uniformMatrix3fv(this.addr,!1,nm),Pt(n,i)}}function qE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;tm.set(i),t.uniformMatrix4fv(this.addr,!1,tm),Pt(n,i)}}function YE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function JE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?mv:pv;n.setTexture2D(e||s,r)}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||vv,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||xv,r)}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||gv,r)}function ow(t){switch(t){case 5126:return GE;case 35664:return HE;case 35665:return VE;case 35666:return WE;case 35674:return jE;case 35675:return XE;case 35676:return qE;case 5124:case 35670:return YE;case 35667:case 35671:return $E;case 35668:case 35672:return KE;case 35669:case 35673:return ZE;case 5125:return JE;case 36294:return QE;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}function aw(t,e){t.uniform1fv(this.addr,e)}function lw(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function cw(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function uw(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function hw(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dw(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fw(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pw(t,e){t.uniform1iv(this.addr,e)}function mw(t,e){t.uniform2iv(this.addr,e)}function gw(t,e){t.uniform3iv(this.addr,e)}function vw(t,e){t.uniform4iv(this.addr,e)}function xw(t,e){t.uniform1uiv(this.addr,e)}function _w(t,e){t.uniform2uiv(this.addr,e)}function yw(t,e){t.uniform3uiv(this.addr,e)}function Mw(t,e){t.uniform4uiv(this.addr,e)}function Sw(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||pv,s[o])}function Ew(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||vv,s[o])}function ww(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||xv,s[o])}function Tw(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||gv,s[o])}function Aw(t){switch(t){case 5126:return aw;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return hw;case 35675:return dw;case 35676:return fw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return xw;case 36294:return _w;case 36295:return yw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Tw}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ow(n.type)}}class Cw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Aw(n.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const cu=/(\w+)(\])?(\[|\.)?/g;function rm(t,e){t.seq.push(e),t.map[e.id]=e}function Pw(t,e,n){const i=t.name,r=i.length;for(cu.lastIndex=0;;){const s=cu.exec(i),o=cu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rm(n,c===void 0?new bw(a,t,e):new Cw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Rw(a),rm(n,h)),n=h}}}class tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Pw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Lw=37297;let Nw=0;function Dw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Iw(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Rl&&n===Cl?i="LinearDisplayP3ToLinearSRGB":e===Cl&&n===Rl&&(i="LinearSRGBToLinearDisplayP3"),t){case ar:case Zl:return[i,"LinearTransferOETF"];case Jn:case xd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function om(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Dw(t.getShaderSource(e),o)}else return r}function Uw(t,e){const n=Iw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Ow(t,e){let n;switch(e){case jy:n="Linear";break;case Xy:n="Reinhard";break;case qy:n="OptimizedCineon";break;case Hg:n="ACESFilmic";break;case $y:n="AgX";break;case Ky:n="Neutral";break;case Yy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Fw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function kw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function zw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function vs(t){return t!==""}function am(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(t){return t.replace(Gw,Vw)}const Hw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vw(t,e){let n=He[e];if(n===void 0){const i=Hw.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vh(n)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(t){return t.replace(Ww,jw)}function jw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function um(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function qw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Is:case Us:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function $w(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Gg:e="ENVMAP_BLENDING_MULTIPLY";break;case Vy:e="ENVMAP_BLENDING_MIX";break;case Wy:e="ENVMAP_BLENDING_ADD";break}return e}function Kw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Zw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Xw(n),c=qw(n),u=Yw(n),h=$w(n),f=Kw(n),p=n.isWebGL2?"":Fw(n),v=kw(n),_=zw(s),m=r.createProgram();let d,x,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(vs).join(`
`),d.length>0&&(d+=`
`),x=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(vs).join(`
`),x.length>0&&(x+=`
`)):(d=[um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),x=[p,um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?He.tonemapping_pars_fragment:"",n.toneMapping!==Ji?Ow("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Uw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vs).join(`
`)),o=vh(o),o=am(o,n),o=lm(o,n),a=vh(a),a=am(a,n),a=lm(a,n),o=cm(o),a=cm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=g+d+o,b=g+x+a,A=sm(r,r.VERTEX_SHADER,y),w=sm(r,r.FRAGMENT_SHADER,b);r.attachShader(m,A),r.attachShader(m,w),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(X){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(w).trim();let k=!0,Z=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,A,w);else{const I=om(r,A,"vertex"),F=om(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+$+`
`+I+`
`+F)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(N===""||q==="")&&(Z=!1);Z&&(X.diagnostics={runnable:k,programLog:$,vertexShader:{log:N,prefix:d},fragmentShader:{log:q,prefix:x}})}r.deleteShader(A),r.deleteShader(w),z=new tl(r,m),M=Bw(r,m)}let z;this.getUniforms=function(){return z===void 0&&P(this),z};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(m,Lw)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Nw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=w,this}let Jw=0;class Qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new eT(e),n.set(e,i)),i}}class eT{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function tT(t,e,n,i,r,s,o){const a=new rv,l=new Qw,c=new Set,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,C,X,$,N){const q=$.fog,k=N.geometry,Z=M.isMeshStandardMaterial?$.environment:null,I=(M.isMeshStandardMaterial?n:e).get(M.envMap||Z),F=I&&I.mapping===Kl?I.image.height:null,G=_[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=Q!==void 0?Q.length:0;let Ne=0;k.morphAttributes.position!==void 0&&(Ne=1),k.morphAttributes.normal!==void 0&&(Ne=2),k.morphAttributes.color!==void 0&&(Ne=3);let V,ne,pe,Te;if(G){const it=Qn[G];V=it.vertexShader,ne=it.fragmentShader}else V=M.vertexShader,ne=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),Te=l.getFragmentShaderID(M);const Ae=t.getRenderTarget(),Se=N.isInstancedMesh===!0,We=N.isBatchedMesh===!0,Pe=!!M.map,L=!!M.matcap,le=!!I,J=!!M.aoMap,oe=!!M.lightMap,ee=!!M.bumpMap,Me=!!M.normalMap,xe=!!M.displacementMap,we=!!M.emissiveMap,Xe=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,Y=M.clearcoat>0,K=M.iridescence>0,re=M.sheen>0,te=M.transmission>0,Oe=E&&!!M.anisotropyMap,De=Y&&!!M.clearcoatMap,ue=Y&&!!M.clearcoatNormalMap,me=Y&&!!M.clearcoatRoughnessMap,Fe=K&&!!M.iridescenceMap,ae=K&&!!M.iridescenceThicknessMap,Et=re&&!!M.sheenColorMap,qe=re&&!!M.sheenRoughnessMap,Le=!!M.specularMap,be=!!M.specularColorMap,Ce=!!M.specularIntensityMap,Ke=te&&!!M.transmissionMap,ze=te&&!!M.thicknessMap,ht=!!M.gradientMap,U=!!M.alphaMap,ge=M.alphaTest>0,H=!!M.alphaHash,ce=!!M.extensions;let ve=Ji;M.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ve=t.toneMapping);const $e={isWebGL2:h,shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:ne,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:We,instancing:Se,instancingColor:Se&&N.instanceColor!==null,instancingMorph:Se&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:ar,alphaToCoverage:!!M.alphaToCoverage,map:Pe,matcap:L,envMap:le,envMapMode:le&&I.mapping,envMapCubeUVHeight:F,aoMap:J,lightMap:oe,bumpMap:ee,normalMap:Me,displacementMap:p&&xe,emissiveMap:we,normalMapObjectSpace:Me&&M.normalMapType===oM,normalMapTangentSpace:Me&&M.normalMapType===Jg,metalnessMap:Xe,roughnessMap:R,anisotropy:E,anisotropyMap:Oe,clearcoat:Y,clearcoatMap:De,clearcoatNormalMap:ue,clearcoatRoughnessMap:me,iridescence:K,iridescenceMap:Fe,iridescenceThicknessMap:ae,sheen:re,sheenColorMap:Et,sheenRoughnessMap:qe,specularMap:Le,specularColorMap:be,specularIntensityMap:Ce,transmission:te,transmissionMap:Ke,thicknessMap:ze,gradientMap:ht,opaque:M.transparent===!1&&M.blending===Ts&&M.alphaToCoverage===!1,alphaMap:U,alphaTest:ge,alphaHash:H,combine:M.combine,mapUv:Pe&&m(M.map.channel),aoMapUv:J&&m(M.aoMap.channel),lightMapUv:oe&&m(M.lightMap.channel),bumpMapUv:ee&&m(M.bumpMap.channel),normalMapUv:Me&&m(M.normalMap.channel),displacementMapUv:xe&&m(M.displacementMap.channel),emissiveMapUv:we&&m(M.emissiveMap.channel),metalnessMapUv:Xe&&m(M.metalnessMap.channel),roughnessMapUv:R&&m(M.roughnessMap.channel),anisotropyMapUv:Oe&&m(M.anisotropyMap.channel),clearcoatMapUv:De&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:qe&&m(M.sheenRoughnessMap.channel),specularMapUv:Le&&m(M.specularMap.channel),specularColorMapUv:be&&m(M.specularColorMap.channel),specularIntensityMapUv:Ce&&m(M.specularIntensityMap.channel),transmissionMapUv:Ke&&m(M.transmissionMap.channel),thicknessMapUv:ze&&m(M.thicknessMap.channel),alphaMapUv:U&&m(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Me||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Pe||U),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:ve,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vi,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function x(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const X in M.defines)C.push(X),C.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(g(C,M),y(C,M),C.push(t.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function g(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function y(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.instancingMorph&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.normalMapObjectSpace&&a.enable(7),C.normalMapTangentSpace&&a.enable(8),C.clearcoat&&a.enable(9),C.iridescence&&a.enable(10),C.alphaTest&&a.enable(11),C.vertexColors&&a.enable(12),C.vertexAlphas&&a.enable(13),C.vertexUv1s&&a.enable(14),C.vertexUv2s&&a.enable(15),C.vertexUv3s&&a.enable(16),C.vertexTangents&&a.enable(17),C.anisotropy&&a.enable(18),C.alphaHash&&a.enable(19),C.batching&&a.enable(20),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),M.push(a.mask)}function b(M){const C=_[M.type];let X;if(C){const $=Qn[C];X=UM.clone($.uniforms)}else X=M.uniforms;return X}function A(M,C){let X;for(let $=0,N=u.length;$<N;$++){const q=u[$];if(q.cacheKey===C){X=q,++X.usedTimes;break}}return X===void 0&&(X=new Zw(t,C,M,s),u.push(X)),X}function w(M){if(--M.usedTimes===0){const C=u.indexOf(M);u[C]=u[u.length-1],u.pop(),M.destroy()}}function P(M){l.remove(M)}function z(){l.dispose()}return{getParameters:d,getProgramCacheKey:x,getUniforms:b,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:z}}function nT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function iT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,v,_,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:_,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,v,_,m){const d=o(h,f,p,v,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,v,_,m){const d=o(h,f,p,v,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||iT),i.length>1&&i.sort(f||hm),r.length>1&&r.sort(f||hm)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function rT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dm,t.set(i,[o])):r>=s.length?(o=new dm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function sT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Je};break;case"SpotLight":n={position:new D,direction:new D,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function oT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aT=0;function lT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cT(t,e){const n=new sT,i=oT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new ct,a=new ct;function l(u,h){let f=0,p=0,v=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let _=0,m=0,d=0,x=0,g=0,y=0,b=0,A=0,w=0,P=0,z=0;u.sort(lT);const M=h===!0?Math.PI:1;for(let X=0,$=u.length;X<$;X++){const N=u[X],q=N.color,k=N.intensity,Z=N.distance,I=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=q.r*k*M,p+=q.g*k*M,v+=q.b*k*M;else if(N.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(N.sh.coefficients[F],k);z++}else if(N.isDirectionalLight){const F=n.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const G=N.shadow,Q=i.get(N);Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,r.directionalShadow[_]=Q,r.directionalShadowMap[_]=I,r.directionalShadowMatrix[_]=N.shadow.matrix,y++}r.directional[_]=F,_++}else if(N.isSpotLight){const F=n.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(q).multiplyScalar(k*M),F.distance=Z,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,r.spot[d]=F;const G=N.shadow;if(N.map&&(r.spotLightMap[w]=N.map,w++,G.updateMatrices(N),N.castShadow&&P++),r.spotLightMatrix[d]=G.matrix,N.castShadow){const Q=i.get(N);Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,r.spotShadow[d]=Q,r.spotShadowMap[d]=I,A++}d++}else if(N.isRectAreaLight){const F=n.get(N);F.color.copy(q).multiplyScalar(k),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),r.rectArea[x]=F,x++}else if(N.isPointLight){const F=n.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*M),F.distance=N.distance,F.decay=N.decay,N.castShadow){const G=N.shadow,Q=i.get(N);Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,Q.shadowCameraNear=G.camera.near,Q.shadowCameraFar=G.camera.far,r.pointShadow[m]=Q,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=N.shadow.matrix,b++}r.point[m]=F,m++}else if(N.isHemisphereLight){const F=n.get(N);F.skyColor.copy(N.color).multiplyScalar(k*M),F.groundColor.copy(N.groundColor).multiplyScalar(k*M),r.hemi[g]=F,g++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=v;const C=r.hash;(C.directionalLength!==_||C.pointLength!==m||C.spotLength!==d||C.rectAreaLength!==x||C.hemiLength!==g||C.numDirectionalShadows!==y||C.numPointShadows!==b||C.numSpotShadows!==A||C.numSpotMaps!==w||C.numLightProbes!==z)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=x,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+w-P,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=z,C.directionalLength=_,C.pointLength=m,C.spotLength=d,C.rectAreaLength=x,C.hemiLength=g,C.numDirectionalShadows=y,C.numPointShadows=b,C.numSpotShadows=A,C.numSpotMaps=w,C.numLightProbes=z,r.version=aT++)}function c(u,h){let f=0,p=0,v=0,_=0,m=0;const d=h.matrixWorldInverse;for(let x=0,g=u.length;x<g;x++){const y=u[x];if(y.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),f++}else if(y.isSpotLight){const b=r.spot[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),v++}else if(y.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function fm(t,e){const n=new cT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function uT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new fm(t,e),n.set(s,[l])):o>=a.length?(l=new fm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class hT extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dT extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mT(t,e,n){let i=new _d;const r=new fe,s=new fe,o=new It,a=new hT({depthPacking:sM}),l=new dT,c={},u=n.maxTextureSize,h={[nr]:fn,[fn]:nr,[vi]:vi},f=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:fT,fragmentShader:pT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new On;v.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zg;let d=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const z=t.getRenderTarget(),M=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Zi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const $=d!==pi&&this.type===pi,N=d===pi&&this.type!==pi;for(let q=0,k=A.length;q<k;q++){const Z=A[q],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const F=I.getFrameExtents();if(r.multiply(F),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,I.mapSize.y=s.y)),I.map===null||$===!0||N===!0){const Q=this.type!==pi?{minFilter:zt,magFilter:zt}:{};I.map!==null&&I.map.dispose(),I.map=new Ur(r.x,r.y,Q),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const G=I.getViewportCount();for(let Q=0;Q<G;Q++){const se=I.getViewport(Q);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),X.viewport(o),I.updateMatrices(Z,Q),i=I.getFrustum(),y(w,P,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===pi&&x(I,P),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(z,M,C)};function x(A,w){const P=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ur(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,P,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,P,p,_,null)}function g(A,w,P,z){let M=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=M.uuid,$=w.uuid;let N=c[X];N===void 0&&(N={},c[X]=N);let q=N[$];q===void 0&&(q=M.clone(),N[$]=q,w.addEventListener("dispose",b)),M=q}if(M.visible=w.visible,M.wireframe=w.wireframe,z===pi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=t.properties.get(M);X.light=P}return M}function y(A,w,P,z,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const $=e.update(A),N=A.material;if(Array.isArray(N)){const q=$.groups;for(let k=0,Z=q.length;k<Z;k++){const I=q[k],F=N[I.materialIndex];if(F&&F.visible){const G=g(A,F,z,M);A.onBeforeShadow(t,A,w,P,$,G,I),t.renderBufferDirect(P,null,$,G,A,I),A.onAfterShadow(t,A,w,P,$,G,I)}}}else if(N.visible){const q=g(A,N,z,M);A.onBeforeShadow(t,A,w,P,$,q,null),t.renderBufferDirect(P,null,$,q,A,null),A.onAfterShadow(t,A,w,P,$,q,null)}}const X=A.children;for(let $=0,N=X.length;$<N;$++)y(X[$],w,P,z,M)}function b(A){A.target.removeEventListener("dispose",b);for(const P in c){const z=c[P],M=A.target.uuid;M in z&&(z[M].dispose(),delete z[M])}}}function gT(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const ge=new It;let H=null;const ce=new It(0,0,0,0);return{setMask:function(ve){H!==ve&&!U&&(t.colorMask(ve,ve,ve,ve),H=ve)},setLocked:function(ve){U=ve},setClear:function(ve,$e,it,Ft,An){An===!0&&(ve*=Ft,$e*=Ft,it*=Ft),ge.set(ve,$e,it,Ft),ce.equals(ge)===!1&&(t.clearColor(ve,$e,it,Ft),ce.copy(ge))},reset:function(){U=!1,H=null,ce.set(-1,0,0,0)}}}function s(){let U=!1,ge=null,H=null,ce=null;return{setTest:function(ve){ve?Se(t.DEPTH_TEST):We(t.DEPTH_TEST)},setMask:function(ve){ge!==ve&&!U&&(t.depthMask(ve),ge=ve)},setFunc:function(ve){if(H!==ve){switch(ve){case Oy:t.depthFunc(t.NEVER);break;case Fy:t.depthFunc(t.ALWAYS);break;case ky:t.depthFunc(t.LESS);break;case Al:t.depthFunc(t.LEQUAL);break;case zy:t.depthFunc(t.EQUAL);break;case By:t.depthFunc(t.GEQUAL);break;case Gy:t.depthFunc(t.GREATER);break;case Hy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=ve}},setLocked:function(ve){U=ve},setClear:function(ve){ce!==ve&&(t.clearDepth(ve),ce=ve)},reset:function(){U=!1,ge=null,H=null,ce=null}}}function o(){let U=!1,ge=null,H=null,ce=null,ve=null,$e=null,it=null,Ft=null,An=null;return{setTest:function(rt){U||(rt?Se(t.STENCIL_TEST):We(t.STENCIL_TEST))},setMask:function(rt){ge!==rt&&!U&&(t.stencilMask(rt),ge=rt)},setFunc:function(rt,Zt,$n){(H!==rt||ce!==Zt||ve!==$n)&&(t.stencilFunc(rt,Zt,$n),H=rt,ce=Zt,ve=$n)},setOp:function(rt,Zt,$n){($e!==rt||it!==Zt||Ft!==$n)&&(t.stencilOp(rt,Zt,$n),$e=rt,it=Zt,Ft=$n)},setLocked:function(rt){U=rt},setClear:function(rt){An!==rt&&(t.clearStencil(rt),An=rt)},reset:function(){U=!1,ge=null,H=null,ce=null,ve=null,$e=null,it=null,Ft=null,An=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},v=new WeakMap,_=[],m=null,d=!1,x=null,g=null,y=null,b=null,A=null,w=null,P=null,z=new Je(0,0,0),M=0,C=!1,X=null,$=null,N=null,q=null,k=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,F=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(G)[1]),I=F>=1):G.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),I=F>=2);let Q=null,se={};const Ne=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),ne=new It().fromArray(Ne),pe=new It().fromArray(V);function Te(U,ge,H,ce){const ve=new Uint8Array(4),$e=t.createTexture();t.bindTexture(U,$e),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<H;it++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(ge,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(ge+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return $e}const Ae={};Ae[t.TEXTURE_2D]=Te(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=Te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[t.TEXTURE_2D_ARRAY]=Te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=Te(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(t.DEPTH_TEST),l.setFunc(Al),xe(!1),we(Xf),Se(t.CULL_FACE),ee(Zi);function Se(U){f[U]!==!0&&(t.enable(U),f[U]=!0)}function We(U){f[U]!==!1&&(t.disable(U),f[U]=!1)}function Pe(U,ge){return p[U]!==ge?(t.bindFramebuffer(U,ge),p[U]=ge,i&&(U===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ge),U===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ge)),!0):!1}function L(U,ge){let H=_,ce=!1;if(U){H=v.get(ge),H===void 0&&(H=[],v.set(ge,H));const ve=U.textures;if(H.length!==ve.length||H[0]!==t.COLOR_ATTACHMENT0){for(let $e=0,it=ve.length;$e<it;$e++)H[$e]=t.COLOR_ATTACHMENT0+$e;H.length=ve.length,ce=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,ce=!0);if(ce)if(n.isWebGL2)t.drawBuffers(H);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function le(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const J={[yr]:t.FUNC_ADD,[My]:t.FUNC_SUBTRACT,[Sy]:t.FUNC_REVERSE_SUBTRACT};if(i)J[Kf]=t.MIN,J[Zf]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(J[Kf]=U.MIN_EXT,J[Zf]=U.MAX_EXT)}const oe={[Ey]:t.ZERO,[wy]:t.ONE,[Ty]:t.SRC_COLOR,[ch]:t.SRC_ALPHA,[Ly]:t.SRC_ALPHA_SATURATE,[Ry]:t.DST_COLOR,[by]:t.DST_ALPHA,[Ay]:t.ONE_MINUS_SRC_COLOR,[uh]:t.ONE_MINUS_SRC_ALPHA,[Py]:t.ONE_MINUS_DST_COLOR,[Cy]:t.ONE_MINUS_DST_ALPHA,[Ny]:t.CONSTANT_COLOR,[Dy]:t.ONE_MINUS_CONSTANT_COLOR,[Iy]:t.CONSTANT_ALPHA,[Uy]:t.ONE_MINUS_CONSTANT_ALPHA};function ee(U,ge,H,ce,ve,$e,it,Ft,An,rt){if(U===Zi){d===!0&&(We(t.BLEND),d=!1);return}if(d===!1&&(Se(t.BLEND),d=!0),U!==yy){if(U!==x||rt!==C){if((g!==yr||A!==yr)&&(t.blendEquation(t.FUNC_ADD),g=yr,A=yr),rt)switch(U){case Ts:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qf:t.blendFunc(t.ONE,t.ONE);break;case Yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $f:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ts:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $f:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,b=null,w=null,P=null,z.set(0,0,0),M=0,x=U,C=rt}return}ve=ve||ge,$e=$e||H,it=it||ce,(ge!==g||ve!==A)&&(t.blendEquationSeparate(J[ge],J[ve]),g=ge,A=ve),(H!==y||ce!==b||$e!==w||it!==P)&&(t.blendFuncSeparate(oe[H],oe[ce],oe[$e],oe[it]),y=H,b=ce,w=$e,P=it),(Ft.equals(z)===!1||An!==M)&&(t.blendColor(Ft.r,Ft.g,Ft.b,An),z.copy(Ft),M=An),x=U,C=!1}function Me(U,ge){U.side===vi?We(t.CULL_FACE):Se(t.CULL_FACE);let H=U.side===fn;ge&&(H=!H),xe(H),U.blending===Ts&&U.transparent===!1?ee(Zi):ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const ce=U.stencilWrite;c.setTest(ce),ce&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),R(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):We(t.SAMPLE_ALPHA_TO_COVERAGE)}function xe(U){X!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),X=U)}function we(U){U!==xy?(Se(t.CULL_FACE),U!==$&&(U===Xf?t.cullFace(t.BACK):U===_y?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):We(t.CULL_FACE),$=U}function Xe(U){U!==N&&(I&&t.lineWidth(U),N=U)}function R(U,ge,H){U?(Se(t.POLYGON_OFFSET_FILL),(q!==ge||k!==H)&&(t.polygonOffset(ge,H),q=ge,k=H)):We(t.POLYGON_OFFSET_FILL)}function E(U){U?Se(t.SCISSOR_TEST):We(t.SCISSOR_TEST)}function Y(U){U===void 0&&(U=t.TEXTURE0+Z-1),Q!==U&&(t.activeTexture(U),Q=U)}function K(U,ge,H){H===void 0&&(Q===null?H=t.TEXTURE0+Z-1:H=Q);let ce=se[H];ce===void 0&&(ce={type:void 0,texture:void 0},se[H]=ce),(ce.type!==U||ce.texture!==ge)&&(Q!==H&&(t.activeTexture(H),Q=H),t.bindTexture(U,ge||Ae[U]),ce.type=U,ce.texture=ge)}function re(){const U=se[Q];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){ne.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function Ce(U){pe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function Ke(U,ge){let H=h.get(ge);H===void 0&&(H=new WeakMap,h.set(ge,H));let ce=H.get(U);ce===void 0&&(ce=t.getUniformBlockIndex(ge,U.name),H.set(U,ce))}function ze(U,ge){const ce=h.get(ge).get(U);u.get(ge)!==ce&&(t.uniformBlockBinding(ge,ce,U.__bindingPointIndex),u.set(ge,ce))}function ht(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Q=null,se={},p={},v=new WeakMap,_=[],m=null,d=!1,x=null,g=null,y=null,b=null,A=null,w=null,P=null,z=new Je(0,0,0),M=0,C=!1,X=null,$=null,N=null,q=null,k=null,ne.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:We,bindFramebuffer:Pe,drawBuffers:L,useProgram:le,setBlending:ee,setMaterial:Me,setFlipSided:xe,setCullFace:we,setLineWidth:Xe,setPolygonOffset:R,setScissorTest:E,activeTexture:Y,bindTexture:K,unbindTexture:re,compressedTexImage2D:te,compressedTexImage3D:Oe,texImage2D:qe,texImage3D:Le,updateUBOMapping:Ke,uniformBlockBinding:ze,texStorage2D:ae,texStorage3D:Et,texSubImage2D:De,texSubImage3D:ue,compressedTexSubImage2D:me,compressedTexSubImage3D:Fe,scissor:be,viewport:Ce,reset:ht}}function vT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new fe,h=new WeakMap;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return v?new OffscreenCanvas(R,E):Nl("canvas")}function m(R,E,Y,K){let re=1;const te=Xe(R);if((te.width>K||te.height>K)&&(re=K/Math.max(te.width,te.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Oe=E?gh:Math.floor,De=Oe(re*te.width),ue=Oe(re*te.height);f===void 0&&(f=_(De,ue));const me=Y?_(De,ue):f;return me.width=De,me.height=ue,me.getContext("2d").drawImage(R,0,0,De,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+De+"x"+ue+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function d(R){const E=Xe(R);return bp(E.width)&&bp(E.height)}function x(R){return a?!1:R.wrapS!==yn||R.wrapT!==yn||R.minFilter!==zt&&R.minFilter!==an}function g(R,E){return R.generateMipmaps&&E&&R.minFilter!==zt&&R.minFilter!==an}function y(R){t.generateMipmap(R)}function b(R,E,Y,K,re=!1){if(a===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=E;if(E===t.RED&&(Y===t.FLOAT&&(te=t.R32F),Y===t.HALF_FLOAT&&(te=t.R16F),Y===t.UNSIGNED_BYTE&&(te=t.R8)),E===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(te=t.R8UI),Y===t.UNSIGNED_SHORT&&(te=t.R16UI),Y===t.UNSIGNED_INT&&(te=t.R32UI),Y===t.BYTE&&(te=t.R8I),Y===t.SHORT&&(te=t.R16I),Y===t.INT&&(te=t.R32I)),E===t.RG&&(Y===t.FLOAT&&(te=t.RG32F),Y===t.HALF_FLOAT&&(te=t.RG16F),Y===t.UNSIGNED_BYTE&&(te=t.RG8)),E===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(te=t.RG8UI),Y===t.UNSIGNED_SHORT&&(te=t.RG16UI),Y===t.UNSIGNED_INT&&(te=t.RG32UI),Y===t.BYTE&&(te=t.RG8I),Y===t.SHORT&&(te=t.RG16I),Y===t.INT&&(te=t.RG32I)),E===t.RGBA){const Oe=re?bl:nt.getTransfer(K);Y===t.FLOAT&&(te=t.RGBA32F),Y===t.HALF_FLOAT&&(te=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(te=Oe===at?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function A(R,E,Y){return g(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){return R===zt||R===Jf||R===Qs?t.NEAREST:t.LINEAR}function P(R){const E=R.target;E.removeEventListener("dispose",P),M(E),E.isVideoTexture&&h.delete(E)}function z(R){const E=R.target;E.removeEventListener("dispose",z),X(E)}function M(R){const E=i.get(R);if(E.__webglInit===void 0)return;const Y=R.source,K=p.get(Y);if(K){const re=K[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(R),Object.keys(K).length===0&&p.delete(Y)}i.remove(R)}function C(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const Y=R.source,K=p.get(Y);delete K[E.__cacheKey],o.memory.textures--}function X(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let re=0;re<E.__webglFramebuffer[K].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[K][re]);else t.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)t.deleteFramebuffer(E.__webglFramebuffer[K]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=R.textures;for(let K=0,re=Y.length;K<re;K++){const te=i.get(Y[K]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(Y[K])}i.remove(R)}let $=0;function N(){$=0}function q(){const R=$;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),$+=1,R}function k(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Z(R,E){const Y=i.get(R);if(R.isVideoTexture&&xe(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Y,R,E);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+E)}function I(R,E){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){pe(Y,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+E)}function F(R,E){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){pe(Y,R,E);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+E)}function G(R,E){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){Te(Y,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+E)}const Q={[fh]:t.REPEAT,[yn]:t.CLAMP_TO_EDGE,[ph]:t.MIRRORED_REPEAT},se={[zt]:t.NEAREST,[Jf]:t.NEAREST_MIPMAP_NEAREST,[Qs]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[Lc]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},Ne={[aM]:t.NEVER,[fM]:t.ALWAYS,[lM]:t.LESS,[Qg]:t.LEQUAL,[cM]:t.EQUAL,[dM]:t.GEQUAL,[uM]:t.GREATER,[hM]:t.NOTEQUAL};function V(R,E,Y){if(E.type===ti&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===an||E.magFilter===Lc||E.magFilter===Qs||E.magFilter===Tr||E.minFilter===an||E.minFilter===Lc||E.minFilter===Qs||E.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(t.texParameteri(R,t.TEXTURE_WRAP_S,Q[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Q[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Q[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,se[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,se[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==yn||E.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,w(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==zt&&E.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zt||E.minFilter!==Qs&&E.minFilter!==Tr||E.type===ti&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Go&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ne(R,E){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",P));const K=E.source;let re=p.get(K);re===void 0&&(re={},p.set(K,re));const te=k(E);if(te!==R.__cacheKey){re[te]===void 0&&(re[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),re[te].usedTimes++;const Oe=re[R.__cacheKey];Oe!==void 0&&(re[R.__cacheKey].usedTimes--,Oe.usedTimes===0&&C(E)),R.__cacheKey=te,R.__webglTexture=re[te].texture}return Y}function pe(R,E,Y){let K=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=t.TEXTURE_3D);const re=ne(R,E),te=E.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+Y);const Oe=i.get(te);if(te.version!==Oe.__version||re===!0){n.activeTexture(t.TEXTURE0+Y);const De=nt.getPrimaries(nt.workingColorSpace),ue=E.colorSpace===zi?null:nt.getPrimaries(E.colorSpace),me=E.colorSpace===zi||De===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Fe=x(E)&&d(E.image)===!1;let ae=m(E.image,Fe,!1,r.maxTextureSize);ae=we(E,ae);const Et=d(ae)||a,qe=s.convert(E.format,E.colorSpace);let Le=s.convert(E.type),be=b(E.internalFormat,qe,Le,E.colorSpace,E.isVideoTexture);V(K,E,Et);let Ce;const Ke=E.mipmaps,ze=a&&E.isVideoTexture!==!0&&be!==Zg,ht=Oe.__version===void 0||re===!0,U=te.dataReady,ge=A(E,ae,Et);if(E.isDepthTexture)be=t.DEPTH_COMPONENT,a?E.type===ti?be=t.DEPTH_COMPONENT32F:E.type===Hi?be=t.DEPTH_COMPONENT24:E.type===Cr?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:E.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Rr&&be===t.DEPTH_COMPONENT&&E.type!==vd&&E.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Hi,Le=s.convert(E.type)),E.format===Os&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,E.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Cr,Le=s.convert(E.type))),ht&&(ze?n.texStorage2D(t.TEXTURE_2D,1,be,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,be,ae.width,ae.height,0,qe,Le,null));else if(E.isDataTexture)if(Ke.length>0&&Et){ze&&ht&&n.texStorage2D(t.TEXTURE_2D,ge,be,Ke[0].width,Ke[0].height);for(let H=0,ce=Ke.length;H<ce;H++)Ce=Ke[H],ze?U&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Ce.width,Ce.height,qe,Le,Ce.data):n.texImage2D(t.TEXTURE_2D,H,be,Ce.width,Ce.height,0,qe,Le,Ce.data);E.generateMipmaps=!1}else ze?(ht&&n.texStorage2D(t.TEXTURE_2D,ge,be,ae.width,ae.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,qe,Le,ae.data)):n.texImage2D(t.TEXTURE_2D,0,be,ae.width,ae.height,0,qe,Le,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,be,Ke[0].width,Ke[0].height,ae.depth);for(let H=0,ce=Ke.length;H<ce;H++)Ce=Ke[H],E.format!==jn?qe!==null?ze?U&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,Ce.width,Ce.height,ae.depth,qe,Ce.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,be,Ce.width,Ce.height,ae.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,Ce.width,Ce.height,ae.depth,qe,Le,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,be,Ce.width,Ce.height,ae.depth,0,qe,Le,Ce.data)}else{ze&&ht&&n.texStorage2D(t.TEXTURE_2D,ge,be,Ke[0].width,Ke[0].height);for(let H=0,ce=Ke.length;H<ce;H++)Ce=Ke[H],E.format!==jn?qe!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,Ce.width,Ce.height,qe,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,H,be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Ce.width,Ce.height,qe,Le,Ce.data):n.texImage2D(t.TEXTURE_2D,H,be,Ce.width,Ce.height,0,qe,Le,Ce.data)}else if(E.isDataArrayTexture)ze?(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,be,ae.width,ae.height,ae.depth),U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,qe,Le,ae.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ae.width,ae.height,ae.depth,0,qe,Le,ae.data);else if(E.isData3DTexture)ze?(ht&&n.texStorage3D(t.TEXTURE_3D,ge,be,ae.width,ae.height,ae.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,qe,Le,ae.data)):n.texImage3D(t.TEXTURE_3D,0,be,ae.width,ae.height,ae.depth,0,qe,Le,ae.data);else if(E.isFramebufferTexture){if(ht)if(ze)n.texStorage2D(t.TEXTURE_2D,ge,be,ae.width,ae.height);else{let H=ae.width,ce=ae.height;for(let ve=0;ve<ge;ve++)n.texImage2D(t.TEXTURE_2D,ve,be,H,ce,0,qe,Le,null),H>>=1,ce>>=1}}else if(Ke.length>0&&Et){if(ze&&ht){const H=Xe(Ke[0]);n.texStorage2D(t.TEXTURE_2D,ge,be,H.width,H.height)}for(let H=0,ce=Ke.length;H<ce;H++)Ce=Ke[H],ze?U&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,qe,Le,Ce):n.texImage2D(t.TEXTURE_2D,H,be,qe,Le,Ce);E.generateMipmaps=!1}else if(ze){if(ht){const H=Xe(ae);n.texStorage2D(t.TEXTURE_2D,ge,be,H.width,H.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,qe,Le,ae)}else n.texImage2D(t.TEXTURE_2D,0,be,qe,Le,ae);g(E,Et)&&y(K),Oe.__version=te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Te(R,E,Y){if(E.image.length!==6)return;const K=ne(R,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+Y);const te=i.get(re);if(re.version!==te.__version||K===!0){n.activeTexture(t.TEXTURE0+Y);const Oe=nt.getPrimaries(nt.workingColorSpace),De=E.colorSpace===zi?null:nt.getPrimaries(E.colorSpace),ue=E.colorSpace===zi||Oe===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const me=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,ae=[];for(let H=0;H<6;H++)!me&&!Fe?ae[H]=m(E.image[H],!1,!0,r.maxCubemapSize):ae[H]=Fe?E.image[H].image:E.image[H],ae[H]=we(E,ae[H]);const Et=ae[0],qe=d(Et)||a,Le=s.convert(E.format,E.colorSpace),be=s.convert(E.type),Ce=b(E.internalFormat,Le,be,E.colorSpace),Ke=a&&E.isVideoTexture!==!0,ze=te.__version===void 0||K===!0,ht=re.dataReady;let U=A(E,Et,qe);V(t.TEXTURE_CUBE_MAP,E,qe);let ge;if(me){Ke&&ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,U,Ce,Et.width,Et.height);for(let H=0;H<6;H++){ge=ae[H].mipmaps;for(let ce=0;ce<ge.length;ce++){const ve=ge[ce];E.format!==jn?Le!==null?Ke?ht&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ce,0,0,ve.width,ve.height,Le,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ce,Ce,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?ht&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ce,0,0,ve.width,ve.height,Le,be,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ce,Ce,ve.width,ve.height,0,Le,be,ve.data)}}}else{if(ge=E.mipmaps,Ke&&ze){ge.length>0&&U++;const H=Xe(ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,U,Ce,H.width,H.height)}for(let H=0;H<6;H++)if(Fe){Ke?ht&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,ae[H].width,ae[H].height,Le,be,ae[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ce,ae[H].width,ae[H].height,0,Le,be,ae[H].data);for(let ce=0;ce<ge.length;ce++){const $e=ge[ce].image[H].image;Ke?ht&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ce+1,0,0,$e.width,$e.height,Le,be,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ce+1,Ce,$e.width,$e.height,0,Le,be,$e.data)}}else{Ke?ht&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Le,be,ae[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ce,Le,be,ae[H]);for(let ce=0;ce<ge.length;ce++){const ve=ge[ce];Ke?ht&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ce+1,0,0,Le,be,ve.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ce+1,Ce,Le,be,ve.image[H])}}}g(E,qe)&&y(t.TEXTURE_CUBE_MAP),te.__version=re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ae(R,E,Y,K,re,te){const Oe=s.convert(Y.format,Y.colorSpace),De=s.convert(Y.type),ue=b(Y.internalFormat,Oe,De,Y.colorSpace);if(!i.get(E).__hasExternalTextures){const Fe=Math.max(1,E.width>>te),ae=Math.max(1,E.height>>te);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,te,ue,Fe,ae,E.depth,0,Oe,De,null):n.texImage2D(re,te,ue,Fe,ae,0,Oe,De,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Me(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,re,i.get(Y).__webglTexture,0,ee(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,re,i.get(Y).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(R,E,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let K=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Y||Me(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===ti?K=t.DEPTH_COMPONENT32F:re.type===Hi&&(K=t.DEPTH_COMPONENT24));const te=ee(E);Me(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,K,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,K,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,K,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const K=ee(E);Y&&Me(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,E.width,E.height):Me(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const K=E.textures;for(let re=0;re<K.length;re++){const te=K[re],Oe=s.convert(te.format,te.colorSpace),De=s.convert(te.type),ue=b(te.internalFormat,Oe,De,te.colorSpace),me=ee(E);Y&&Me(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ue,E.width,E.height):Me(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,ue,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ue,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const K=i.get(E.depthTexture).__webglTexture,re=ee(E);if(E.depthTexture.format===Rr)Me(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(E.depthTexture.format===Os)Me(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Pe(R){const E=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");We(E.__webglFramebuffer,R)}else if(Y){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]=t.createRenderbuffer(),Se(E.__webglDepthbuffer[K],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),Se(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function L(R,E,Y){const K=i.get(R);E!==void 0&&Ae(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&Pe(R)}function le(R){const E=R.texture,Y=i.get(R),K=i.get(E);R.addEventListener("dispose",z);const re=R.textures,te=R.isWebGLCubeRenderTarget===!0,Oe=re.length>1,De=d(R)||a;if(Oe||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=E.version,o.memory.textures++),te){Y.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[ue]=[];for(let me=0;me<E.mipmaps.length;me++)Y.__webglFramebuffer[ue][me]=t.createFramebuffer()}else Y.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)Y.__webglFramebuffer[ue]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(Oe)if(r.drawBuffers)for(let ue=0,me=re.length;ue<me;ue++){const Fe=i.get(re[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Me(R)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ue=0;ue<re.length;ue++){const me=re[ue];Y.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[ue]);const Fe=s.convert(me.format,me.colorSpace),ae=s.convert(me.type),Et=b(me.internalFormat,Fe,ae,me.colorSpace,R.isXRRenderTarget===!0),qe=ee(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,Et,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,Y.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),Se(Y.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),V(t.TEXTURE_CUBE_MAP,E,De);for(let ue=0;ue<6;ue++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Ae(Y.__webglFramebuffer[ue][me],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else Ae(Y.__webglFramebuffer[ue],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(E,De)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let ue=0,me=re.length;ue<me;ue++){const Fe=re[ue],ae=i.get(Fe);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),V(t.TEXTURE_2D,Fe,De),Ae(Y.__webglFramebuffer,R,Fe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),g(Fe,De)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,K.__webglTexture),V(ue,E,De),a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Ae(Y.__webglFramebuffer[me],R,E,t.COLOR_ATTACHMENT0,ue,me);else Ae(Y.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,ue,0);g(E,De)&&y(ue),n.unbindTexture()}R.depthBuffer&&Pe(R)}function J(R){const E=d(R)||a,Y=R.textures;for(let K=0,re=Y.length;K<re;K++){const te=Y[K];if(g(te,E)){const Oe=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,De=i.get(te).__webglTexture;n.bindTexture(Oe,De),y(Oe),n.unbindTexture()}}}function oe(R){if(a&&R.samples>0&&Me(R)===!1){const E=R.textures,Y=R.width,K=R.height;let re=t.COLOR_BUFFER_BIT;const te=[],Oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(R),ue=E.length>1;if(ue)for(let me=0;me<E.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let me=0;me<E.length;me++){te.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&te.push(Oe);const Fe=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(Fe===!1&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ue&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[me]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Oe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Oe])),ue){const ae=i.get(E[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,Y,K,0,0,Y,K,re,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<E.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,De.__webglColorRenderbuffer[me]);const Fe=i.get(E[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function ee(R){return Math.min(r.maxSamples,R.samples)}function Me(R){const E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xe(R){const E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function we(R,E){const Y=R.colorSpace,K=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===mh||Y!==ar&&Y!==zi&&(nt.getTransfer(Y)===at?a===!1?e.has("EXT_sRGB")===!0&&K===jn?(R.format=mh,R.minFilter=an,R.generateMipmaps=!1):E=tv.sRGBToLinear(E):(K!==jn||re!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function Xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=q,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=I,this.setTexture3D=F,this.setTextureCube=G,this.rebindTextures=L,this.setupRenderTarget=le,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Me}function xT(t,e,n){const i=n.isWebGL2;function r(s,o=zi){let a;const l=nt.getTransfer(o);if(s===Qi)return t.UNSIGNED_BYTE;if(s===jg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Xg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Zy)return t.BYTE;if(s===Jy)return t.SHORT;if(s===vd)return t.UNSIGNED_SHORT;if(s===Wg)return t.INT;if(s===Hi)return t.UNSIGNED_INT;if(s===ti)return t.FLOAT;if(s===Go)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Qy)return t.ALPHA;if(s===jn)return t.RGBA;if(s===eM)return t.LUMINANCE;if(s===tM)return t.LUMINANCE_ALPHA;if(s===Rr)return t.DEPTH_COMPONENT;if(s===Os)return t.DEPTH_STENCIL;if(s===mh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===qg)return t.RED;if(s===Yg)return t.RED_INTEGER;if(s===nM)return t.RG;if(s===$g)return t.RG_INTEGER;if(s===Kg)return t.RGBA_INTEGER;if(s===Nc||s===Dc||s===Ic||s===Uc)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Nc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Nc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qf||s===ep||s===tp||s===np)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ep)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===np)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ip||s===rp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ip)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sp||s===op||s===ap||s===lp||s===cp||s===up||s===hp||s===dp||s===fp||s===pp||s===mp||s===gp||s===vp||s===xp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===op)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ap)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===up)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oc||s===_p||s===yp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Oc)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_p)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===iM||s===Mp||s===Sp||s===Ep)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Oc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Mp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ep)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class _T extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class en extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yT={type:"move"};class uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new en;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const MT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ST=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ET{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new ir({extensions:{fragDepth:!0},vertexShader:MT,fragmentShader:ST,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ee(new _n(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class wT extends Gs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const _=new ET,m=n.getContextAttributes();let d=null,x=null;const g=[],y=[],b=new fe;let A=null;const w=new xn;w.layers.enable(1),w.viewport=new It;const P=new xn;P.layers.enable(2),P.viewport=new It;const z=[w,P],M=new _T;M.layers.enable(1),M.layers.enable(2);let C=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ne=g[V];return ne===void 0&&(ne=new uu,g[V]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(V){let ne=g[V];return ne===void 0&&(ne=new uu,g[V]=ne),ne.getGripSpace()},this.getHand=function(V){let ne=g[V];return ne===void 0&&(ne=new uu,g[V]=ne),ne.getHandSpace()};function $(V){const ne=y.indexOf(V.inputSource);if(ne===-1)return;const pe=g[ne];pe!==void 0&&(pe.update(V.inputSource,V.frame,c||o),pe.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",q);for(let V=0;V<g.length;V++){const ne=y[V];ne!==null&&(y[V]=null,g[V].disconnect(ne))}C=null,X=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,x=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",N),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ur(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,pe=null,Te=null;m.depth&&(Te=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Os:Rr,pe=m.stencil?Cr:Hi);const Ae={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ur(f.textureWidth,f.textureHeight,{format:jn,type:Qi,depthTexture:new fv(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Se=e.properties.get(x);Se.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(V){for(let ne=0;ne<V.removed.length;ne++){const pe=V.removed[ne],Te=y.indexOf(pe);Te>=0&&(y[Te]=null,g[Te].disconnect(pe))}for(let ne=0;ne<V.added.length;ne++){const pe=V.added[ne];let Te=y.indexOf(pe);if(Te===-1){for(let Se=0;Se<g.length;Se++)if(Se>=y.length){y.push(pe),Te=Se;break}else if(y[Se]===null){y[Se]=pe,Te=Se;break}if(Te===-1)break}const Ae=g[Te];Ae&&Ae.connect(pe)}}const k=new D,Z=new D;function I(V,ne,pe){k.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const Te=k.distanceTo(Z),Ae=ne.projectionMatrix.elements,Se=pe.projectionMatrix.elements,We=Ae[14]/(Ae[10]-1),Pe=Ae[14]/(Ae[10]+1),L=(Ae[9]+1)/Ae[5],le=(Ae[9]-1)/Ae[5],J=(Ae[8]-1)/Ae[0],oe=(Se[8]+1)/Se[0],ee=We*J,Me=We*oe,xe=Te/(-J+oe),we=xe*-J;ne.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(we),V.translateZ(xe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Xe=We+xe,R=Pe+xe,E=ee-we,Y=Me+(Te-we),K=L*Pe/R*Xe,re=le*Pe/R*Xe;V.projectionMatrix.makePerspective(E,Y,K,re,Xe,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function F(V,ne){ne===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ne.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),M.near=P.near=w.near=V.near,M.far=P.far=w.far=V.far,(C!==M.near||X!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,X=M.far,w.near=C,w.far=X,P.near=C,P.far=X,w.updateProjectionMatrix(),P.updateProjectionMatrix(),V.updateProjectionMatrix());const ne=V.parent,pe=M.cameras;F(M,ne);for(let Te=0;Te<pe.length;Te++)F(pe[Te],ne);pe.length===2?I(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),G(V,M,ne)};function G(V,ne,pe){pe===null?V.matrix.copy(ne.matrixWorld):(V.matrix.copy(pe.matrixWorld),V.matrix.invert(),V.matrix.multiply(ne.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ll*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let Q=null;function se(V,ne){if(u=ne.getViewerPose(c||o),v=ne,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Te=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,Te=!0);for(let Se=0;Se<pe.length;Se++){const We=pe[Se];let Pe=null;if(p!==null)Pe=p.getViewport(We);else{const le=h.getViewSubImage(f,We);Pe=le.viewport,Se===0&&(e.setRenderTargetTextures(x,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(x))}let L=z[Se];L===void 0&&(L=new xn,L.layers.enable(Se),L.viewport=new It,z[Se]=L),L.matrix.fromArray(We.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(We.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Se===0&&(M.matrix.copy(L.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Te===!0&&M.cameras.push(L)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Se=h.getDepthInformation(pe[0]);Se&&Se.isValid&&Se.texture&&_.init(e,Se,r.renderState)}}for(let pe=0;pe<g.length;pe++){const Te=y[pe],Ae=g[pe];Te!==null&&Ae!==void 0&&Ae.update(Te,ne,c||o)}_.render(e,M),Q&&Q(V,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Ne=new hv;Ne.setAnimationLoop(se),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}}const mr=new oi,TT=new ct;function AT(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,lv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,g,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,g):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===fn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===fn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),g=x.envMap,y=x.envMapRotation;if(g&&(m.envMap.value=g,mr.copy(y),mr.x*=-1,mr.y*=-1,mr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(TT.makeRotationFromEuler(mr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const b=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*b,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,g){const y=g.program;i.uniformBlockBinding(x,y)}function c(x,g){let y=r[x.id];y===void 0&&(v(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const b=g.program;i.updateUBOMapping(x,b);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function u(x){const g=h();x.__bindingPointIndex=g;const y=t.createBuffer(),b=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const g=r[x.id],y=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,w=y.length;A<w;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let z=0,M=P.length;z<M;z++){const C=P[z];if(p(C,A,z,b)===!0){const X=C.__offset,$=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let q=0;q<$.length;q++){const k=$[q],Z=_(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,X+N,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,g,y,b){const A=x.value,w=g+"_"+y;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const P=b[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(x){const g=x.uniforms;let y=0;const b=16;for(let w=0,P=g.length;w<P;w++){const z=Array.isArray(g[w])?g[w]:[g[w]];for(let M=0,C=z.length;M<C;M++){const X=z[M],$=Array.isArray(X.value)?X.value:[X.value];for(let N=0,q=$.length;N<q;N++){const k=$[N],Z=_(k),I=y%b;I!==0&&b-I<Z.boundary&&(y+=b-I),X.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=Z.storage}}}const A=y%b;return A>0&&(y+=b-A),x.__size=y,x.__cache={},this}function _(x){const g={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(g.boundary=4,g.storage=4):x.isVector2?(g.boundary=8,g.storage=8):x.isVector3||x.isColor?(g.boundary=16,g.storage=12):x.isVector4?(g.boundary=16,g.storage=16):x.isMatrix3?(g.boundary=48,g.storage=48):x.isMatrix4?(g.boundary=64,g.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),g}function m(x){const g=x.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class _v{constructor(e={}){const{canvas:n=mM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const g=this;let y=!1,b=0,A=0,w=null,P=-1,z=null;const M=new It,C=new It;let X=null;const $=new Je(0);let N=0,q=n.width,k=n.height,Z=1,I=null,F=null;const G=new It(0,0,q,k),Q=new It(0,0,q,k);let se=!1;const Ne=new _d;let V=!1,ne=!1,pe=null;const Te=new ct,Ae=new fe,Se=new D,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return w===null?Z:1}let L=i;function le(T,O){for(let W=0;W<T.length;W++){const j=T[W],B=n.getContext(j,O);if(B!==null)return B}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gd}`),n.addEventListener("webglcontextlost",ht,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",ge,!1),L===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),L=le(O,T),L===null)throw le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let J,oe,ee,Me,xe,we,Xe,R,E,Y,K,re,te,Oe,De,ue,me,Fe,ae,Et,qe,Le,be,Ce;function Ke(){J=new DE(L),oe=new bE(L,J,e),J.init(oe),Le=new xT(L,J,oe),ee=new gT(L,J,oe),Me=new OE(L),xe=new nT,we=new vT(L,J,ee,xe,oe,Le,Me),Xe=new RE(g),R=new NE(g),E=new HM(L,oe),be=new TE(L,J,E,oe),Y=new IE(L,E,Me,be),K=new BE(L,Y,E,Me),ae=new zE(L,oe,we),ue=new CE(xe),re=new tT(g,Xe,R,J,oe,be,ue),te=new AT(g,xe),Oe=new rT,De=new uT(J,oe),Fe=new wE(g,Xe,R,ee,K,f,l),me=new mT(g,K,oe),Ce=new bT(L,Me,oe,ee),Et=new AE(L,J,Me,oe),qe=new UE(L,J,Me,oe),Me.programs=re.programs,g.capabilities=oe,g.extensions=J,g.properties=xe,g.renderLists=Oe,g.shadowMap=me,g.state=ee,g.info=Me}Ke();const ze=new wT(g,L);this.xr=ze,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=J.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=J.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(q,k,!1))},this.getSize=function(T){return T.set(q,k)},this.setSize=function(T,O,W=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,k=O,n.width=Math.floor(T*Z),n.height=Math.floor(O*Z),W===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(q*Z,k*Z).floor()},this.setDrawingBufferSize=function(T,O,W){q=T,k=O,Z=W,n.width=Math.floor(T*W),n.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,O,W,j){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,O,W,j),ee.viewport(M.copy(G).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,O,W,j){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,O,W,j),ee.scissor(C.copy(Q).multiplyScalar(Z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(T){ee.setScissorTest(se=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(T=!0,O=!0,W=!0){let j=0;if(T){let B=!1;if(w!==null){const _e=w.texture.format;B=_e===Kg||_e===$g||_e===Yg}if(B){const _e=w.texture.type,Re=_e===Qi||_e===Hi||_e===vd||_e===Cr||_e===jg||_e===Xg,Ie=Fe.getClearColor(),Ue=Fe.getClearAlpha(),je=Ie.r,ke=Ie.g,Be=Ie.b;Re?(p[0]=je,p[1]=ke,p[2]=Be,p[3]=Ue,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=je,v[1]=ke,v[2]=Be,v[3]=Ue,L.clearBufferiv(L.COLOR,0,v))}else j|=L.COLOR_BUFFER_BIT}O&&(j|=L.DEPTH_BUFFER_BIT),W&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ht,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Oe.dispose(),De.dispose(),xe.dispose(),Xe.dispose(),R.dispose(),K.dispose(),be.dispose(),Ce.dispose(),re.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",An),ze.removeEventListener("sessionend",rt),pe&&(pe.dispose(),pe=null),Zt.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Me.autoReset,O=me.enabled,W=me.autoUpdate,j=me.needsUpdate,B=me.type;Ke(),Me.autoReset=T,me.enabled=O,me.autoUpdate=W,me.needsUpdate=j,me.type=B}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function H(T){const O=T.target;O.removeEventListener("dispose",H),ce(O)}function ce(T){ve(T),xe.remove(T)}function ve(T){const O=xe.get(T).programs;O!==void 0&&(O.forEach(function(W){re.releaseProgram(W)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,j,B,_e){O===null&&(O=We);const Re=B.isMesh&&B.matrixWorld.determinant()<0,Ie=Uv(T,O,W,j,B);ee.setMaterial(j,Re);let Ue=W.index,je=1;if(j.wireframe===!0){if(Ue=Y.getWireframeAttribute(W),Ue===void 0)return;je=2}const ke=W.drawRange,Be=W.attributes.position;let yt=ke.start*je,pn=(ke.start+ke.count)*je;_e!==null&&(yt=Math.max(yt,_e.start*je),pn=Math.min(pn,(_e.start+_e.count)*je)),Ue!==null?(yt=Math.max(yt,0),pn=Math.min(pn,Ue.count)):Be!=null&&(yt=Math.max(yt,0),pn=Math.min(pn,Be.count));const Lt=pn-yt;if(Lt<0||Lt===1/0)return;be.setup(B,j,Ie,W,Ue);let li,pt=Et;if(Ue!==null&&(li=E.get(Ue),pt=qe,pt.setIndex(li)),B.isMesh)j.wireframe===!0?(ee.setLineWidth(j.wireframeLinewidth*Pe()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if(B.isLine){let Ge=j.linewidth;Ge===void 0&&(Ge=1),ee.setLineWidth(Ge*Pe()),B.isLineSegments?pt.setMode(L.LINES):B.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else B.isPoints?pt.setMode(L.POINTS):B.isSprite&&pt.setMode(L.TRIANGLES);if(B.isBatchedMesh)pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)pt.renderInstances(yt,Lt,B.count);else if(W.isInstancedBufferGeometry){const Ge=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,tc=Math.min(W.instanceCount,Ge);pt.renderInstances(yt,Lt,tc)}else pt.render(yt,Lt)};function $e(T,O,W){T.transparent===!0&&T.side===vi&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,ea(T,O,W),T.side=nr,T.needsUpdate=!0,ea(T,O,W),T.side=vi):ea(T,O,W)}this.compile=function(T,O,W=null){W===null&&(W=T),m=De.get(W),m.init(),x.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(g._useLegacyLights);const j=new Set;return T.traverse(function(B){const _e=B.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){const Ie=_e[Re];$e(Ie,W,B),j.add(Ie)}else $e(_e,W,B),j.add(_e)}),x.pop(),m=null,j},this.compileAsync=function(T,O,W=null){const j=this.compile(T,O,W);return new Promise(B=>{function _e(){if(j.forEach(function(Re){xe.get(Re).currentProgram.isReady()&&j.delete(Re)}),j.size===0){B(T);return}setTimeout(_e,10)}J.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let it=null;function Ft(T){it&&it(T)}function An(){Zt.stop()}function rt(){Zt.start()}const Zt=new hv;Zt.setAnimationLoop(Ft),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(T){it=T,ze.setAnimationLoop(T),T===null?Zt.stop():Zt.start()},ze.addEventListener("sessionstart",An),ze.addEventListener("sessionend",rt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(O),O=ze.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,O,w),m=De.get(T,x.length),m.init(),x.push(m),Te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ne.setFromProjectionMatrix(Te),ne=this.localClippingEnabled,V=ue.init(this.clippingPlanes,ne),_=Oe.get(T,d.length),_.init(),d.push(_),$n(T,O,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(I,F),this.info.render.frame++,V===!0&&ue.beginShadows();const W=m.state.shadowsArray;if(me.render(W,T,O),V===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1)&&Fe.render(_,T),m.setupLights(g._useLegacyLights),O.isArrayCamera){const j=O.cameras;for(let B=0,_e=j.length;B<_e;B++){const Re=j[B];Pd(_,T,Re,Re.viewport)}}else Pd(_,T,O);w!==null&&(we.updateMultisampleRenderTarget(w),we.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(g,T,O),be.resetDefaultState(),P=-1,z=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function $n(T,O,W,j){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ne.intersectsSprite(T)){j&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const Re=K.update(T),Ie=T.material;Ie.visible&&_.push(T,Re,Ie,W,Se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ne.intersectsObject(T))){const Re=K.update(T),Ie=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Se.copy(Re.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const Ue=Re.groups;for(let je=0,ke=Ue.length;je<ke;je++){const Be=Ue[je],yt=Ie[Be.materialIndex];yt&&yt.visible&&_.push(T,Re,yt,W,Se.z,Be)}}else Ie.visible&&_.push(T,Re,Ie,W,Se.z,null)}}const _e=T.children;for(let Re=0,Ie=_e.length;Re<Ie;Re++)$n(_e[Re],O,W,j)}function Pd(T,O,W,j){const B=T.opaque,_e=T.transmissive,Re=T.transparent;m.setupLightsView(W),V===!0&&ue.setGlobalState(g.clippingPlanes,W),_e.length>0&&Iv(B,_e,O,W),j&&ee.viewport(M.copy(j)),B.length>0&&Qo(B,O,W),_e.length>0&&Qo(_e,O,W),Re.length>0&&Qo(Re,O,W),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Iv(T,O,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const _e=oe.isWebGL2;pe===null&&(pe=new Ur(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Go:Qi,minFilter:Tr,samples:_e?4:0})),g.getDrawingBufferSize(Ae),_e?pe.setSize(Ae.x,Ae.y):pe.setSize(gh(Ae.x),gh(Ae.y));const Re=g.getRenderTarget();g.setRenderTarget(pe),g.getClearColor($),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const Ie=g.toneMapping;g.toneMapping=Ji,Qo(T,W,j),we.updateMultisampleRenderTarget(pe),we.updateRenderTargetMipmap(pe);let Ue=!1;for(let je=0,ke=O.length;je<ke;je++){const Be=O[je],yt=Be.object,pn=Be.geometry,Lt=Be.material,li=Be.group;if(Lt.side===vi&&yt.layers.test(j.layers)){const pt=Lt.side;Lt.side=fn,Lt.needsUpdate=!0,Ld(yt,W,j,pn,Lt,li),Lt.side=pt,Lt.needsUpdate=!0,Ue=!0}}Ue===!0&&(we.updateMultisampleRenderTarget(pe),we.updateRenderTargetMipmap(pe)),g.setRenderTarget(Re),g.setClearColor($,N),g.toneMapping=Ie}function Qo(T,O,W){const j=O.isScene===!0?O.overrideMaterial:null;for(let B=0,_e=T.length;B<_e;B++){const Re=T[B],Ie=Re.object,Ue=Re.geometry,je=j===null?Re.material:j,ke=Re.group;Ie.layers.test(W.layers)&&Ld(Ie,O,W,Ue,je,ke)}}function Ld(T,O,W,j,B,_e){T.onBeforeRender(g,O,W,j,B,_e),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(g,O,W,j,T,_e),B.transparent===!0&&B.side===vi&&B.forceSinglePass===!1?(B.side=fn,B.needsUpdate=!0,g.renderBufferDirect(W,O,j,B,T,_e),B.side=nr,B.needsUpdate=!0,g.renderBufferDirect(W,O,j,B,T,_e),B.side=vi):g.renderBufferDirect(W,O,j,B,T,_e),T.onAfterRender(g,O,W,j,B,_e)}function ea(T,O,W){O.isScene!==!0&&(O=We);const j=xe.get(T),B=m.state.lights,_e=m.state.shadowsArray,Re=B.state.version,Ie=re.getParameters(T,B.state,_e,O,W),Ue=re.getProgramCacheKey(Ie);let je=j.programs;j.environment=T.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(T.isMeshStandardMaterial?R:Xe).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,je===void 0&&(T.addEventListener("dispose",H),je=new Map,j.programs=je);let ke=je.get(Ue);if(ke!==void 0){if(j.currentProgram===ke&&j.lightsStateVersion===Re)return Dd(T,Ie),ke}else Ie.uniforms=re.getUniforms(T),T.onBuild(W,Ie,g),T.onBeforeCompile(Ie,g),ke=re.acquireProgram(Ie,Ue),je.set(Ue,ke),j.uniforms=Ie.uniforms;const Be=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=ue.uniform),Dd(T,Ie),j.needsLights=Fv(T),j.lightsStateVersion=Re,j.needsLights&&(Be.ambientLightColor.value=B.state.ambient,Be.lightProbe.value=B.state.probe,Be.directionalLights.value=B.state.directional,Be.directionalLightShadows.value=B.state.directionalShadow,Be.spotLights.value=B.state.spot,Be.spotLightShadows.value=B.state.spotShadow,Be.rectAreaLights.value=B.state.rectArea,Be.ltc_1.value=B.state.rectAreaLTC1,Be.ltc_2.value=B.state.rectAreaLTC2,Be.pointLights.value=B.state.point,Be.pointLightShadows.value=B.state.pointShadow,Be.hemisphereLights.value=B.state.hemi,Be.directionalShadowMap.value=B.state.directionalShadowMap,Be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Be.spotShadowMap.value=B.state.spotShadowMap,Be.spotLightMatrix.value=B.state.spotLightMatrix,Be.spotLightMap.value=B.state.spotLightMap,Be.pointShadowMap.value=B.state.pointShadowMap,Be.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=ke,j.uniformsList=null,ke}function Nd(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=tl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Dd(T,O){const W=xe.get(T);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Uv(T,O,W,j,B){O.isScene!==!0&&(O=We),we.resetTextureUnits();const _e=O.fog,Re=j.isMeshStandardMaterial?O.environment:null,Ie=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ar,Ue=(j.isMeshStandardMaterial?R:Xe).get(j.envMap||Re),je=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Be=!!W.morphAttributes.position,yt=!!W.morphAttributes.normal,pn=!!W.morphAttributes.color;let Lt=Ji;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Lt=g.toneMapping);const li=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=li!==void 0?li.length:0,Ge=xe.get(j),tc=m.state.lights;if(V===!0&&(ne===!0||T!==z)){const bn=T===z&&j.id===P;ue.setState(j,T,bn)}let dt=!1;j.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==tc.state.version||Ge.outputColorSpace!==Ie||B.isBatchedMesh&&Ge.batching===!1||!B.isBatchedMesh&&Ge.batching===!0||B.isInstancedMesh&&Ge.instancing===!1||!B.isInstancedMesh&&Ge.instancing===!0||B.isSkinnedMesh&&Ge.skinning===!1||!B.isSkinnedMesh&&Ge.skinning===!0||B.isInstancedMesh&&Ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ge.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ge.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ge.instancingMorph===!1&&B.morphTexture!==null||Ge.envMap!==Ue||j.fog===!0&&Ge.fog!==_e||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ue.numPlanes||Ge.numIntersection!==ue.numIntersection)||Ge.vertexAlphas!==je||Ge.vertexTangents!==ke||Ge.morphTargets!==Be||Ge.morphNormals!==yt||Ge.morphColors!==pn||Ge.toneMapping!==Lt||oe.isWebGL2===!0&&Ge.morphTargetsCount!==pt)&&(dt=!0):(dt=!0,Ge.__version=j.version);let lr=Ge.currentProgram;dt===!0&&(lr=ea(j,O,B));let Id=!1,Ws=!1,nc=!1;const Ht=lr.getUniforms(),cr=Ge.uniforms;if(ee.useProgram(lr.program)&&(Id=!0,Ws=!0,nc=!0),j.id!==P&&(P=j.id,Ws=!0),Id||z!==T){Ht.setValue(L,"projectionMatrix",T.projectionMatrix),Ht.setValue(L,"viewMatrix",T.matrixWorldInverse);const bn=Ht.map.cameraPosition;bn!==void 0&&bn.setValue(L,Se.setFromMatrixPosition(T.matrixWorld)),oe.logarithmicDepthBuffer&&Ht.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ht.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),z!==T&&(z=T,Ws=!0,nc=!0)}if(B.isSkinnedMesh){Ht.setOptional(L,B,"bindMatrix"),Ht.setOptional(L,B,"bindMatrixInverse");const bn=B.skeleton;bn&&(oe.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Ht.setValue(L,"boneTexture",bn.boneTexture,we)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ht.setOptional(L,B,"batchingTexture"),Ht.setValue(L,"batchingTexture",B._matricesTexture,we));const ic=W.morphAttributes;if((ic.position!==void 0||ic.normal!==void 0||ic.color!==void 0&&oe.isWebGL2===!0)&&ae.update(B,W,lr),(Ws||Ge.receiveShadow!==B.receiveShadow)&&(Ge.receiveShadow=B.receiveShadow,Ht.setValue(L,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(cr.envMap.value=Ue,cr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ws&&(Ht.setValue(L,"toneMappingExposure",g.toneMappingExposure),Ge.needsLights&&Ov(cr,nc),_e&&j.fog===!0&&te.refreshFogUniforms(cr,_e),te.refreshMaterialUniforms(cr,j,Z,k,pe),tl.upload(L,Nd(Ge),cr,we)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(tl.upload(L,Nd(Ge),cr,we),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ht.setValue(L,"center",B.center),Ht.setValue(L,"modelViewMatrix",B.modelViewMatrix),Ht.setValue(L,"normalMatrix",B.normalMatrix),Ht.setValue(L,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const bn=j.uniformsGroups;for(let rc=0,kv=bn.length;rc<kv;rc++)if(oe.isWebGL2){const Ud=bn[rc];Ce.update(Ud,lr),Ce.bind(Ud,lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lr}function Ov(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Fv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,O,W){xe.get(T.texture).__webglTexture=O,xe.get(T.depthTexture).__webglTexture=W;const j=xe.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const W=xe.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,W=0){w=T,b=O,A=W;let j=!0,B=null,_e=!1,Re=!1;if(T){const Ue=xe.get(T);Ue.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(L.FRAMEBUFFER,null),j=!1):Ue.__webglFramebuffer===void 0?we.setupRenderTarget(T):Ue.__hasExternalTextures&&we.rebindTextures(T,xe.get(T.texture).__webglTexture,xe.get(T.depthTexture).__webglTexture);const je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Re=!0);const ke=xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?B=ke[O][W]:B=ke[O],_e=!0):oe.isWebGL2&&T.samples>0&&we.useMultisampledRTT(T)===!1?B=xe.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[W]:B=ke,M.copy(T.viewport),C.copy(T.scissor),X=T.scissorTest}else M.copy(G).multiplyScalar(Z).floor(),C.copy(Q).multiplyScalar(Z).floor(),X=se;if(ee.bindFramebuffer(L.FRAMEBUFFER,B)&&oe.drawBuffers&&j&&ee.drawBuffers(T,B),ee.viewport(M),ee.scissor(C),ee.setScissorTest(X),_e){const Ue=xe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,W)}else if(Re){const Ue=xe.get(T.texture),je=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,W||0,je)}P=-1},this.readRenderTargetPixels=function(T,O,W,j,B,_e,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){ee.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const Ue=T.texture,je=Ue.format,ke=Ue.type;if(je!==jn&&Le.convert(je)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ke===Go&&(J.has("EXT_color_buffer_half_float")||oe.isWebGL2&&J.has("EXT_color_buffer_float"));if(ke!==Qi&&Le.convert(ke)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===ti&&(oe.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-j&&W>=0&&W<=T.height-B&&L.readPixels(O,W,j,B,Le.convert(je),Le.convert(ke),_e)}finally{const Ue=w!==null?xe.get(w).__webglFramebuffer:null;ee.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(T,O,W=0){const j=Math.pow(2,-W),B=Math.floor(O.image.width*j),_e=Math.floor(O.image.height*j);we.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,T.x,T.y,B,_e),ee.unbindTexture()},this.copyTextureToTexture=function(T,O,W,j=0){const B=O.image.width,_e=O.image.height,Re=Le.convert(W.format),Ie=Le.convert(W.type);we.setTexture2D(W,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,j,T.x,T.y,B,_e,Re,Ie,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,j,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Re,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,j,T.x,T.y,Re,Ie,O.image),j===0&&W.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(T,O,W,j,B=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=Math.round(T.max.x-T.min.x),Re=Math.round(T.max.y-T.min.y),Ie=T.max.z-T.min.z+1,Ue=Le.convert(j.format),je=Le.convert(j.type);let ke;if(j.isData3DTexture)we.setTexture3D(j,0),ke=L.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)we.setTexture2DArray(j,0),ke=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment);const Be=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pn=L.getParameter(L.UNPACK_SKIP_PIXELS),Lt=L.getParameter(L.UNPACK_SKIP_ROWS),li=L.getParameter(L.UNPACK_SKIP_IMAGES),pt=W.isCompressedTexture?W.mipmaps[B]:W.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,T.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,T.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?L.texSubImage3D(ke,B,O.x,O.y,O.z,_e,Re,Ie,Ue,je,pt.data):j.isCompressedArrayTexture?L.compressedTexSubImage3D(ke,B,O.x,O.y,O.z,_e,Re,Ie,Ue,pt.data):L.texSubImage3D(ke,B,O.x,O.y,O.z,_e,Re,Ie,Ue,je,pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Be),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,li),B===0&&j.generateMipmaps&&L.generateMipmap(ke),ee.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?we.setTextureCube(T,0):T.isData3DTexture?we.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?we.setTexture2DArray(T,0):we.setTexture2D(T,0),ee.unbindTexture()},this.resetState=function(){b=0,A=0,w=null,ee.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===xd?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Zl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class CT extends _v{}CT.prototype.isWebGL1Renderer=!0;class Md{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=n}clone(){return new Md(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class RT extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class PT extends $t{constructor(e=null,n=1,i=1,r,s,o,a,l,c=zt,u=zt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pm extends Dn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new ct,mm=new ct,za=[],gm=new zr,LT=new ct,so=new Ee,oo=new Zo;class hu extends Ee{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new pm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,LT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new zr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,is),gm.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(gm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,is),oo.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(oo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,is),mm.multiplyMatrices(i,is),so.matrixWorld=mm,so.raycast(e,za);for(let o=0,a=za.length;o<a;o++){const l=za[o];l.instanceId=s,l.object=this,n.push(l)}za.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new pm(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new PT(new Float32Array(r*this.count),r,this.count,qg,ti));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Dl extends $t{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new fe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],o=[],a=new D,l=new ct;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Yt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Yt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sd extends ai{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new fe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class NT extends Sd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ed(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Ba=new D,du=new Ed,fu=new Ed,pu=new Ed;class DT extends ai{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ba.subVectors(r[0],r[1]).add(r[0]),c=Ba);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ba.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),v<1e-4&&(v=_),m<1e-4&&(m=_),du.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,v,_,m),fu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,v,_,m),pu.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,v,_,m)}else this.curveType==="catmullrom"&&(du.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),fu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),pu.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(du.calc(l),fu.calc(l),pu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function IT(t,e){const n=1-t;return n*n*e}function UT(t,e){return 2*(1-t)*t*e}function OT(t,e){return t*t*e}function Mo(t,e,n,i){return IT(t,e)+UT(t,n)+OT(t,i)}function FT(t,e){const n=1-t;return n*n*n*e}function kT(t,e){const n=1-t;return 3*n*n*t*e}function zT(t,e){return 3*(1-t)*t*t*e}function BT(t,e){return t*t*t*e}function So(t,e,n,i,r){return FT(t,e)+kT(t,n)+zT(t,i)+BT(t,r)}class yv extends ai{constructor(e=new fe,n=new fe,i=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new fe){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(So(e,r.x,s.x,o.x,a.x),So(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class GT extends ai{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(So(e,r.x,s.x,o.x,a.x),So(e,r.y,s.y,o.y,a.y),So(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mv extends ai{constructor(e=new fe,n=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new fe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new fe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class HT extends ai{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sv extends ai{constructor(e=new fe,n=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new fe){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Mo(e,r.x,s.x,o.x),Mo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class VT extends ai{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Mo(e,r.x,s.x,o.x),Mo(e,r.y,s.y,o.y),Mo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ev extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new fe){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(vm(a,l.x,c.x,u.x,h.x),vm(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new fe().fromArray(r))}return this}}var xh=Object.freeze({__proto__:null,ArcCurve:NT,CatmullRomCurve3:DT,CubicBezierCurve:yv,CubicBezierCurve3:GT,EllipseCurve:Sd,LineCurve:Mv,LineCurve3:HT,QuadraticBezierCurve:Sv,QuadraticBezierCurve3:VT,SplineCurve:Ev});class WT extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new xh[r.type]().fromJSON(r))}return this}}class xm extends WT{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Mv(this.currentPoint.clone(),new fe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Sv(this.currentPoint.clone(),new fe(e,n),new fe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new yv(this.currentPoint.clone(),new fe(e,n),new fe(i,r),new fe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Ev(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Sd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Mi extends On{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let v=0;const _=[],m=i/2;let d=0;x(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(p,2));function x(){const y=new D,b=new D;let A=0;const w=(n-e)/i;for(let P=0;P<=s;P++){const z=[],M=P/s,C=M*(n-e)+e;for(let X=0;X<=r;X++){const $=X/r,N=$*l+a,q=Math.sin(N),k=Math.cos(N);b.x=C*q,b.y=-M*i+m,b.z=C*k,h.push(b.x,b.y,b.z),y.set(q,w,k).normalize(),f.push(y.x,y.y,y.z),p.push($,1-M),z.push(v++)}_.push(z)}for(let P=0;P<r;P++)for(let z=0;z<s;z++){const M=_[z][P],C=_[z+1][P],X=_[z+1][P+1],$=_[z][P+1];u.push(M,C,$),u.push(C,X,$),A+=6}c.addGroup(d,A,0),d+=A}function g(y){const b=v,A=new fe,w=new D;let P=0;const z=y===!0?e:n,M=y===!0?1:-1;for(let X=1;X<=r;X++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),v++;const C=v;for(let X=0;X<=r;X++){const N=X/r*l+a,q=Math.cos(N),k=Math.sin(N);w.x=z*k,w.y=m*M,w.z=z*q,h.push(w.x,w.y,w.z),f.push(0,M,0),A.x=q*.5+.5,A.y=k*.5*M+.5,p.push(A.x,A.y),v++}for(let X=0;X<r;X++){const $=b+X,N=C+X;y===!0?u.push(N,N+1,$):u.push(N+1,N,$),P+=3}c.addGroup(d,P,y===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wd extends On{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(s.slice(),3)),this.setAttribute("uv",new Ot(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const g=new D,y=new D,b=new D;for(let A=0;A<n.length;A+=3)p(n[A+0],g),p(n[A+1],y),p(n[A+2],b),l(g,y,b,x)}function l(x,g,y,b){const A=b+1,w=[];for(let P=0;P<=A;P++){w[P]=[];const z=x.clone().lerp(y,P/A),M=g.clone().lerp(y,P/A),C=A-P;for(let X=0;X<=C;X++)X===0&&P===A?w[P][X]=z:w[P][X]=z.clone().lerp(M,X/C)}for(let P=0;P<A;P++)for(let z=0;z<2*(A-P)-1;z++){const M=Math.floor(z/2);z%2===0?(f(w[P][M+1]),f(w[P+1][M]),f(w[P][M])):(f(w[P][M+1]),f(w[P+1][M+1]),f(w[P+1][M]))}}function c(x){const g=new D;for(let y=0;y<s.length;y+=3)g.x=s[y+0],g.y=s[y+1],g.z=s[y+2],g.normalize().multiplyScalar(x),s[y+0]=g.x,s[y+1]=g.y,s[y+2]=g.z}function u(){const x=new D;for(let g=0;g<s.length;g+=3){x.x=s[g+0],x.y=s[g+1],x.z=s[g+2];const y=m(x)/2/Math.PI+.5,b=d(x)/Math.PI+.5;o.push(y,1-b)}v(),h()}function h(){for(let x=0;x<o.length;x+=6){const g=o[x+0],y=o[x+2],b=o[x+4],A=Math.max(g,y,b),w=Math.min(g,y,b);A>.9&&w<.1&&(g<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function p(x,g){const y=x*3;g.x=e[y+0],g.y=e[y+1],g.z=e[y+2]}function v(){const x=new D,g=new D,y=new D,b=new D,A=new fe,w=new fe,P=new fe;for(let z=0,M=0;z<s.length;z+=9,M+=6){x.set(s[z+0],s[z+1],s[z+2]),g.set(s[z+3],s[z+4],s[z+5]),y.set(s[z+6],s[z+7],s[z+8]),A.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),b.copy(x).add(g).add(y).divideScalar(3);const C=m(b);_(A,M+0,x,C),_(w,M+2,g,C),_(P,M+4,y,C)}}function _(x,g,y,b){b<0&&x.x===1&&(o[g]=x.x-1),y.x===0&&y.z===0&&(o[g]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.vertices,e.indices,e.radius,e.details)}}class Td extends wd{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Td(e.radius,e.detail)}}class wv extends xm{constructor(e){super(e),this.uuid=Hs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new xm().fromJSON(r))}return this}}const jT={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Tv(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,p;if(i&&(s=KT(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let v=n;v<r;v+=n)h=t[v],f=t[v+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ho(s,o,n,a,l,p,0),o}};function Tv(t,e,n,i,r){let s,o;if(r===aA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=_m(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=_m(s,t[s],t[s+1],o);return o&&Ql(o,o.next)&&(Wo(o),o=o.next),o}function Or(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ql(n,n.next)||gt(n.prev,n,n.next)===0)){if(Wo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ho(t,e,n,i,r,s,o){if(!t)return;!o&&s&&tA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?qT(t,i,r,s):XT(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Wo(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=YT(Or(t),e,n),Ho(t,e,n,i,r,s,2)):o===2&&$T(t,e,n,i,r,s):Ho(Or(t),e,n,i,r,s,1);break}}}function XT(t){const e=t.prev,n=t,i=t.next;if(gt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=f&&v.y>=h&&v.y<=p&&xs(r,a,s,l,o,c,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function qT(t,e,n,i){const r=t.prev,s=t,o=t.next;if(gt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=_h(p,v,e,n,i),x=_h(_,m,e,n,i);let g=t.prevZ,y=t.nextZ;for(;g&&g.z>=d&&y&&y.z<=x;){if(g.x>=p&&g.x<=_&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&xs(a,u,l,h,c,f,g.x,g.y)&&gt(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=p&&y.x<=_&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&xs(a,u,l,h,c,f,y.x,y.y)&&gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=d;){if(g.x>=p&&g.x<=_&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&xs(a,u,l,h,c,f,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&xs(a,u,l,h,c,f,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function YT(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Ql(r,s)&&Av(r,i,i.next,s)&&Vo(r,s)&&Vo(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Wo(i),Wo(i.next),i=t=s),i=i.next}while(i!==t);return Or(i)}function $T(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rA(o,a)){let l=bv(o,a);o=Or(o,o.next),l=Or(l,l.next),Ho(o,e,n,i,r,s,0),Ho(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function KT(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Tv(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(iA(c));for(r.sort(ZT),s=0;s<r.length;s++)n=JT(r[s],n);return n}function ZT(t,e){return t.x-e.x}function JT(t,e){const n=QT(t,e);if(!n)return e;const i=bv(n,t);return Or(i,i.next),Or(n,n.next)}function QT(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&xs(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Vo(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&eA(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function eA(t,e){return gt(t.prev,t,e.prev)<0&&gt(e.next,t,t.next)<0}function tA(t,e,n,i){let r=t;do r.z===0&&(r.z=_h(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,nA(r)}function nA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function _h(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function iA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function xs(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function rA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!sA(t,e)&&(Vo(t,e)&&Vo(e,t)&&oA(t,e)&&(gt(t.prev,t,e.prev)||gt(t,e.prev,e))||Ql(t,e)&&gt(t.prev,t,t.next)>0&&gt(e.prev,e,e.next)>0)}function gt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ql(t,e){return t.x===e.x&&t.y===e.y}function Av(t,e,n,i){const r=Ha(gt(t,e,n)),s=Ha(gt(t,e,i)),o=Ha(gt(n,i,t)),a=Ha(gt(n,i,e));return!!(r!==s&&o!==a||r===0&&Ga(t,n,e)||s===0&&Ga(t,i,e)||o===0&&Ga(n,t,i)||a===0&&Ga(n,e,i))}function Ga(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ha(t){return t>0?1:t<0?-1:0}function sA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Av(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Vo(t,e){return gt(t.prev,t,t.next)<0?gt(t,e,t.next)>=0&&gt(t,t.prev,e)>=0:gt(t,e,t.prev)<0||gt(t,t.next,e)<0}function oA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function bv(t,e){const n=new yh(t.i,t.x,t.y),i=new yh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function _m(t,e,n,i){const r=new yh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Wo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function yh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Eo{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Eo.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];ym(e),Mm(i,e);let o=e.length;n.forEach(ym);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Mm(i,n[l]);const a=jT.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ym(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Mm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ad extends On{constructor(e=new wv([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ot(r,3)),this.setAttribute("uv",new Ot(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:p-.1,_=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:lA;let g,y=!1,b,A,w,P;d&&(g=d.getSpacedPoints(u),y=!0,f=!1,b=d.computeFrenetFrames(u,!1),A=new D,w=new D,P=new D),f||(m=0,p=0,v=0,_=0);const z=a.extractPoints(c);let M=z.shape;const C=z.holes;if(!Eo.isClockWise(M)){M=M.reverse();for(let L=0,le=C.length;L<le;L++){const J=C[L];Eo.isClockWise(J)&&(C[L]=J.reverse())}}const $=Eo.triangulateShape(M,C),N=M;for(let L=0,le=C.length;L<le;L++){const J=C[L];M=M.concat(J)}function q(L,le,J){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(le,J)}const k=M.length,Z=$.length;function I(L,le,J){let oe,ee,Me;const xe=L.x-le.x,we=L.y-le.y,Xe=J.x-L.x,R=J.y-L.y,E=xe*xe+we*we,Y=xe*R-we*Xe;if(Math.abs(Y)>Number.EPSILON){const K=Math.sqrt(E),re=Math.sqrt(Xe*Xe+R*R),te=le.x-we/K,Oe=le.y+xe/K,De=J.x-R/re,ue=J.y+Xe/re,me=((De-te)*R-(ue-Oe)*Xe)/(xe*R-we*Xe);oe=te+xe*me-L.x,ee=Oe+we*me-L.y;const Fe=oe*oe+ee*ee;if(Fe<=2)return new fe(oe,ee);Me=Math.sqrt(Fe/2)}else{let K=!1;xe>Number.EPSILON?Xe>Number.EPSILON&&(K=!0):xe<-Number.EPSILON?Xe<-Number.EPSILON&&(K=!0):Math.sign(we)===Math.sign(R)&&(K=!0),K?(oe=-we,ee=xe,Me=Math.sqrt(E)):(oe=xe,ee=we,Me=Math.sqrt(E/2))}return new fe(oe/Me,ee/Me)}const F=[];for(let L=0,le=N.length,J=le-1,oe=L+1;L<le;L++,J++,oe++)J===le&&(J=0),oe===le&&(oe=0),F[L]=I(N[L],N[J],N[oe]);const G=[];let Q,se=F.concat();for(let L=0,le=C.length;L<le;L++){const J=C[L];Q=[];for(let oe=0,ee=J.length,Me=ee-1,xe=oe+1;oe<ee;oe++,Me++,xe++)Me===ee&&(Me=0),xe===ee&&(xe=0),Q[oe]=I(J[oe],J[Me],J[xe]);G.push(Q),se=se.concat(Q)}for(let L=0;L<m;L++){const le=L/m,J=p*Math.cos(le*Math.PI/2),oe=v*Math.sin(le*Math.PI/2)+_;for(let ee=0,Me=N.length;ee<Me;ee++){const xe=q(N[ee],F[ee],oe);Te(xe.x,xe.y,-J)}for(let ee=0,Me=C.length;ee<Me;ee++){const xe=C[ee];Q=G[ee];for(let we=0,Xe=xe.length;we<Xe;we++){const R=q(xe[we],Q[we],oe);Te(R.x,R.y,-J)}}}const Ne=v+_;for(let L=0;L<k;L++){const le=f?q(M[L],se[L],Ne):M[L];y?(w.copy(b.normals[0]).multiplyScalar(le.x),A.copy(b.binormals[0]).multiplyScalar(le.y),P.copy(g[0]).add(w).add(A),Te(P.x,P.y,P.z)):Te(le.x,le.y,0)}for(let L=1;L<=u;L++)for(let le=0;le<k;le++){const J=f?q(M[le],se[le],Ne):M[le];y?(w.copy(b.normals[L]).multiplyScalar(J.x),A.copy(b.binormals[L]).multiplyScalar(J.y),P.copy(g[L]).add(w).add(A),Te(P.x,P.y,P.z)):Te(J.x,J.y,h/u*L)}for(let L=m-1;L>=0;L--){const le=L/m,J=p*Math.cos(le*Math.PI/2),oe=v*Math.sin(le*Math.PI/2)+_;for(let ee=0,Me=N.length;ee<Me;ee++){const xe=q(N[ee],F[ee],oe);Te(xe.x,xe.y,h+J)}for(let ee=0,Me=C.length;ee<Me;ee++){const xe=C[ee];Q=G[ee];for(let we=0,Xe=xe.length;we<Xe;we++){const R=q(xe[we],Q[we],oe);y?Te(R.x,R.y+g[u-1].y,g[u-1].x+J):Te(R.x,R.y,h+J)}}}V(),ne();function V(){const L=r.length/3;if(f){let le=0,J=k*le;for(let oe=0;oe<Z;oe++){const ee=$[oe];Ae(ee[2]+J,ee[1]+J,ee[0]+J)}le=u+m*2,J=k*le;for(let oe=0;oe<Z;oe++){const ee=$[oe];Ae(ee[0]+J,ee[1]+J,ee[2]+J)}}else{for(let le=0;le<Z;le++){const J=$[le];Ae(J[2],J[1],J[0])}for(let le=0;le<Z;le++){const J=$[le];Ae(J[0]+k*u,J[1]+k*u,J[2]+k*u)}}i.addGroup(L,r.length/3-L,0)}function ne(){const L=r.length/3;let le=0;pe(N,le),le+=N.length;for(let J=0,oe=C.length;J<oe;J++){const ee=C[J];pe(ee,le),le+=ee.length}i.addGroup(L,r.length/3-L,1)}function pe(L,le){let J=L.length;for(;--J>=0;){const oe=J;let ee=J-1;ee<0&&(ee=L.length-1);for(let Me=0,xe=u+m*2;Me<xe;Me++){const we=k*Me,Xe=k*(Me+1),R=le+oe+we,E=le+ee+we,Y=le+ee+Xe,K=le+oe+Xe;Se(R,E,Y,K)}}}function Te(L,le,J){l.push(L),l.push(le),l.push(J)}function Ae(L,le,J){We(L),We(le),We(J);const oe=r.length/3,ee=x.generateTopUV(i,r,oe-3,oe-2,oe-1);Pe(ee[0]),Pe(ee[1]),Pe(ee[2])}function Se(L,le,J,oe){We(L),We(le),We(oe),We(le),We(J),We(oe);const ee=r.length/3,Me=x.generateSideWallUV(i,r,ee-6,ee-3,ee-2,ee-1);Pe(Me[0]),Pe(Me[1]),Pe(Me[3]),Pe(Me[1]),Pe(Me[2]),Pe(Me[3])}function We(L){r.push(l[L*3+0]),r.push(l[L*3+1]),r.push(l[L*3+2])}function Pe(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return cA(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new xh[r.type]().fromJSON(r)),new Ad(i,e.options)}}const lA={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new fe(s,o),new fe(a,l),new fe(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],p=e[r*3+1],v=e[r*3+2],_=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-h),new fe(f,1-v),new fe(_,1-d)]:[new fe(a,1-l),new fe(u,1-h),new fe(p,1-v),new fe(m,1-d)]}};function cA(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class ec extends On{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,p=[],v=[],_=[],m=[];for(let d=0;d<=i;d++){const x=[],g=d/i;let y=0;d===0&&o===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let b=0;b<=n;b++){const A=b/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+g*a),v.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+y,1-g),x.push(c++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const g=u[d][x+1],y=u[d][x],b=u[d+1][x],A=u[d+1][x+1];(d!==0||o>0)&&p.push(g,y,A),(d!==i-1||l<Math.PI)&&p.push(y,b,A)}this.setIndex(p),this.setAttribute("position",new Ot(v,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class et extends Jo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jg,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bd extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const mu=new ct,Sm=new D,Em=new D;class Cv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Sm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sm),Em.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Em),n.updateMatrixWorld(),mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uA extends Cv{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Ll*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mh extends bd{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new uA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hA extends Cv{constructor(){super(new dv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wm extends bd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new hA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dA extends bd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class fA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Tm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Tm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);class pA{constructor(){he(this,"group");he(this,"cameraTowerLights",[]);this.group=new en,this.buildTrack(),this.buildImpactZone(),this.buildGantryTruss(),this.buildDistanceMarkers(),this.buildCameraTowers(),this.buildPerimeterBarriers()}buildTrack(){const e=new _n(16,85),n=new et({color:1580585,roughness:.85,metalness:.1}),i=new Ee(e,n);i.rotation.x=-Math.PI/2,i.position.set(0,0,-10),i.receiveShadow=!0,this.group.add(i);const r=new _n(70,110),s=new et({color:790551,roughness:.95,metalness:.05}),o=new Ee(r,s);o.rotation.x=-Math.PI/2,o.position.set(0,-.01,-10),o.receiveShadow=!0,this.group.add(o);const a=new _n(.2,75),l=new ii({color:14870768}),c=new Ee(a,l);c.rotation.x=-Math.PI/2,c.position.set(0,.005,-12),this.group.add(c);const u=new _n(.15,80),h=new ii({color:15381256}),f=new Ee(u,h);f.rotation.x=-Math.PI/2,f.position.set(-4.5,.006,-10),this.group.add(f);const p=new Ee(u,h);p.rotation.x=-Math.PI/2,p.position.set(4.5,.006,-10),this.group.add(p)}buildImpactZone(){const e=new _n(10,8),n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d");if(i){i.fillStyle="#1e293b",i.fillRect(0,0,512,512),i.lineWidth=16,i.strokeStyle="#eab308",i.strokeRect(8,8,496,496),i.lineWidth=2,i.strokeStyle="rgba(234, 179, 8, 0.35)";for(let a=64;a<512;a+=64)i.beginPath(),i.moveTo(a,0),i.lineTo(a,512),i.stroke(),i.beginPath(),i.moveTo(0,a),i.lineTo(512,a),i.stroke();i.strokeStyle="#ef4444",i.lineWidth=4,i.beginPath(),i.arc(256,256,80,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(256,256,160,0,Math.PI*2),i.stroke(),i.beginPath(),i.moveTo(256,30),i.lineTo(256,482),i.moveTo(30,256),i.lineTo(482,256),i.stroke(),i.fillStyle="#f59e0b",i.font="bold 28px sans-serif",i.textAlign="center",i.fillText("CRASH DATUM // 0.0m",256,220)}const r=new Dl(n);r.wrapS=yn,r.wrapT=yn;const s=new et({map:r,roughness:.65,metalness:.2}),o=new Ee(e,s);o.rotation.x=-Math.PI/2,o.position.set(0,.01,on.impactZoneZ),o.receiveShadow=!0,this.group.add(o)}buildGantryTruss(){const e=new en,n=new et({color:3359061,metalness:.8,roughness:.3}),i=new Ze(.5,7.5,.5),r=new Ee(i,n);r.position.set(-6.5,3.75,0),r.castShadow=!0,e.add(r);const s=new Ee(i,n);s.position.set(6.5,3.75,0),s.castShadow=!0,e.add(s);const o=new Ze(13.5,.6,.6),a=new Ee(o,n);a.position.set(0,7.2,0),a.castShadow=!0,e.add(a);const l=[-3.5,-1.2,1.2,3.5];for(const c of l){const u=new Mi(.3,.45,.5,12),h=new et({color:1976635}),f=new Ee(u,h);f.position.set(c,6.8,0),f.rotation.x=Math.PI,e.add(f);const p=new Mh(16777215,2.5);p.position.set(c,6.6,0),p.target.position.set(c*.4,0,0),p.angle=.5,p.penumbra=.4,p.castShadow=!0,p.shadow.mapSize.width=1024,p.shadow.mapSize.height=1024,e.add(p),e.add(p.target)}this.group.add(e)}buildDistanceMarkers(){const e=[-40,-30,-20,-10,5,15,25],n=new et({color:988970,roughness:.5,metalness:.4});for(const i of e){for(const a of[-5.5,5.5]){const l=new Mi(.06,.06,1.4,8),c=new Ee(l,n);c.position.set(a,.7,i),this.group.add(c);const u=document.createElement("canvas");u.width=128,u.height=64;const h=u.getContext("2d");h&&(h.fillStyle="#0f172a",h.fillRect(0,0,128,64),h.lineWidth=4,h.strokeStyle="#eab308",h.strokeRect(2,2,124,60),h.fillStyle="#ffffff",h.font="bold 26px monospace",h.textAlign="center",h.textBaseline="middle",h.fillText(`${i>0?"+":""}${i}m`,64,32));const f=new Dl(u),p=new Ze(.8,.4,.05),v=new ii({map:f}),_=new Ee(p,v);_.position.set(a,1.3,i),_.rotation.y=a<0?Math.PI/4:-Math.PI/4,this.group.add(_)}const r=new _n(8,.1),s=new ii({color:4674921}),o=new Ee(r,s);o.rotation.x=-Math.PI/2,o.position.set(0,.007,i),this.group.add(o)}}buildCameraTowers(){const e=[{x:-5.8,z:2},{x:5.8,z:2},{x:-5.8,z:-10}],n=new et({color:1976635,metalness:.6,roughness:.4});for(const i of e){const r=new Ee(new Mi(.12,.18,2.2,12),n);r.position.set(i.x,1.1,i.z),this.group.add(r);const s=new Ee(new Ze(.4,.3,.6),n);s.position.set(i.x,2.2,i.z),s.lookAt(0,.8,0),this.group.add(s);const o=new Ee(new Mi(.12,.14,.25,16),new et({color:328965,roughness:.1}));o.rotation.x=Math.PI/2,o.position.set(0,0,.35),s.add(o);const a=new ec(.04,8,8),l=new ii({color:15680580}),c=new Ee(a,l);c.position.set(0,.16,.25),s.add(c),this.cameraTowerLights.push(c)}}buildPerimeterBarriers(){const e=new Ze(.4,1.2,85),n=new et({color:3359061,roughness:.7,metalness:.3}),i=new Ee(e,n);i.position.set(-8,.6,-10),i.castShadow=!0,i.receiveShadow=!0,this.group.add(i);const r=new Ee(e,n);r.position.set(8,.6,-10),r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}update(e){const n=Math.floor(e*2)%2===0;for(const i of this.cameraTowerLights)i.material.color.setHex(n?15680580:5570560)}}class mA{constructor(){he(this,"group");he(this,"chassisGroup");he(this,"wheels",[]);he(this,"bumperMesh");he(this,"originalBumperPositions");he(this,"hoodMesh");he(this,"originalHoodPositions");he(this,"detachableParts",[]);he(this,"bodyMaterial");he(this,"bumperMaterial");this.group=new en,this.chassisGroup=new en,this.group.add(this.chassisGroup),this.buildBody(),this.buildHoodAndBumper(),this.buildCabinAndGlass(),this.buildWheels(),this.buildDetachableParts(),this.buildLights(),this.buildCrashLivery()}buildBody(){this.bodyMaterial=new et({color:16096779,metalness:.6,roughness:.25});const e=new Ze(1.88,.55,4.3),n=new Ee(e,this.bodyMaterial);n.position.set(0,.45,0),n.castShadow=!0,n.receiveShadow=!0,this.chassisGroup.add(n);const i=new et({color:1120295,roughness:.9}),r=new Ee(new Ze(1.8,.2,4.2),i);r.position.set(0,.2,0),this.chassisGroup.add(r);const s=new et({color:2042167,roughness:.4}),o=new Ee(new Ze(1.86,.45,.4),s);o.position.set(0,.42,-2.1),o.castShadow=!0,this.chassisGroup.add(o)}buildHoodAndBumper(){this.bumperMaterial=new et({color:2042167,metalness:.3,roughness:.4});const e=new Ze(1.86,.45,.6,8,4,6);this.originalBumperPositions=new Float32Array(e.attributes.position.array),this.bumperMesh=new Ee(e,this.bumperMaterial),this.bumperMesh.position.set(0,.42,2.15),this.bumperMesh.castShadow=!0,this.chassisGroup.add(this.bumperMesh);const n=new Ze(1.72,.15,1.45,8,2,8);this.originalHoodPositions=new Float32Array(n.attributes.position.array),this.hoodMesh=new Ee(n,this.bodyMaterial),this.hoodMesh.position.set(0,.72,1.25),this.hoodMesh.castShadow=!0,this.chassisGroup.add(this.hoodMesh)}buildCabinAndGlass(){const e=new et({color:988970,roughness:.1,metalness:.9,transparent:!0,opacity:.85}),n=new et({color:16096779,metalness:.6,roughness:.25}),i=new Ee(new Ze(1.45,.08,1.8),n);i.position.set(0,1.4,-.3),i.castShadow=!0,this.chassisGroup.add(i);const r=new Ee(new Ze(1.46,.06,.95),e);r.position.set(0,1.1,.85),r.rotation.x=-Math.PI/4.5,r.castShadow=!0,this.chassisGroup.add(r);const s=new Ee(new Ze(1.46,.06,.9),e);s.position.set(0,1.1,-1.45),s.rotation.x=Math.PI/4.8,this.chassisGroup.add(s);for(const a of[-.73,.73]){const l=new Ee(new Ze(.04,.5,1.7),e);l.position.set(a,1.05,-.3),this.chassisGroup.add(l)}const o=new et({color:1976635,roughness:.5});for(const a of[-.74,.74]){const l=new Ee(new Ze(.06,.62,.12),o);l.position.set(a,1.05,-.3),this.chassisGroup.add(l)}}buildWheels(){const e=new et({color:1120295,roughness:.85,metalness:.1}),n=new et({color:14870768,metalness:.85,roughness:.2}),i=[{x:-.96,y:.35,z:1.35},{x:.96,y:.35,z:1.35},{x:-.96,y:.35,z:-1.35},{x:.96,y:.35,z:-1.35}];for(const r of i){const s=new en;s.position.set(r.x,r.y,r.z);const o=new Mi(.35,.35,.28,20);o.rotateZ(Math.PI/2);const a=new Ee(o,e);a.castShadow=!0,s.add(a);const l=new Mi(.24,.24,.29,16);l.rotateZ(Math.PI/2);const c=new Ee(l,n);s.add(c);const u=new Ee(new Ze(.3,.44,.04),n);s.add(u),this.chassisGroup.add(s),this.wheels.push(a)}}buildDetachableParts(){const e=new et({color:16777215,emissive:9684477,emissiveIntensity:.4,roughness:.1,transparent:!0,opacity:.9}),n=new Ee(new Ze(.35,.16,.12),e),i=new D(-.68,.62,2.38);n.position.copy(i),this.group.add(n),this.detachableParts.push({mesh:n,initialPos:i.clone(),initialRot:n.rotation.clone(),vel:new D,rotVel:new D,detached:!1});const r=new Ee(new Ze(.35,.16,.12),e),s=new D(.68,.62,2.38);r.position.copy(s),this.group.add(r),this.detachableParts.push({mesh:r,initialPos:s.clone(),initialRot:r.rotation.clone(),vel:new D,rotVel:new D,detached:!1});const o=new et({color:2042167,roughness:.4}),a=new Ee(new Ze(.2,.14,.22),o),l=new D(-1.05,.98,.65);a.position.copy(l),this.group.add(a),this.detachableParts.push({mesh:a,initialPos:l.clone(),initialRot:a.rotation.clone(),vel:new D,rotVel:new D,detached:!1});const c=new Ee(new Ze(.2,.14,.22),o),u=new D(1.05,.98,.65);c.position.copy(u),this.group.add(c),this.detachableParts.push({mesh:c,initialPos:u.clone(),initialRot:c.rotation.clone(),vel:new D,rotVel:new D,detached:!1})}buildLights(){const e=new Mh(16776171,1.8,25,.4,.5);e.position.set(-.65,.6,2.4),e.target.position.set(-.65,0,15),this.chassisGroup.add(e),this.chassisGroup.add(e.target);const n=new Mh(16776171,1.8,25,.4,.5);n.position.set(.65,.6,2.4),n.target.position.set(.65,0,15),this.chassisGroup.add(n),this.chassisGroup.add(n.target);const i=new et({color:15680580,emissive:15680580,emissiveIntensity:.6,roughness:.3});for(const r of[-.68,.68]){const s=new Ee(new Ze(.35,.14,.05),i);s.position.set(r,.6,-2.16),this.chassisGroup.add(s)}}buildCrashLivery(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");n&&(n.fillStyle="#f59e0b",n.fillRect(0,0,128,128),n.fillStyle="#0f172a",n.beginPath(),n.moveTo(64,64),n.arc(64,64,56,0,Math.PI/2),n.fill(),n.beginPath(),n.moveTo(64,64),n.arc(64,64,56,Math.PI,3*Math.PI/2),n.fill(),n.strokeStyle="#0f172a",n.lineWidth=4,n.beginPath(),n.arc(64,64,56,0,Math.PI*2),n.stroke());const i=new Dl(e),r=new ii({map:i,transparent:!0}),s=new Ee(new _n(.6,.6),r);s.rotation.x=-Math.PI/2,s.position.set(0,1.45,-.3),this.chassisGroup.add(s);const o=new Ee(new _n(.45,.45),r);o.rotation.y=-Math.PI/2,o.position.set(-.95,.62,0),this.chassisGroup.add(o);const a=new Ee(new _n(.45,.45),r);a.rotation.y=Math.PI/2,a.position.set(.95,.62,0),this.chassisGroup.add(a)}applyDamage(e,n,i){const r=n/100,s=this.bumperMesh.geometry.attributes.position,o=s.array,a=this.originalBumperPositions;for(let h=0;h<o.length;h+=3){const f=a[h],p=a[h+1],v=a[h+2];if(v>0){let _=e.frontCenter/100;f<-.2&&(_=e.frontLeft/100),f>.2&&(_=e.frontRight/100);const m=.45*_;o[h+2]=v-m*(.8+.4*Math.sin(f*4)),o[h]=f+(f>0?-1:1)*m*.2,o[h+1]=p+Math.sin(f*8)*.08*_}}s.needsUpdate=!0,this.bumperMesh.geometry.computeVertexNormals();const l=this.hoodMesh.geometry.attributes.position,c=l.array,u=this.originalHoodPositions;for(let h=0;h<c.length;h+=3){u[h];const f=u[h+1],p=u[h+2];if(p>-.4){const v=(p+.4)/1.1,_=Math.sin(v*Math.PI)*.35*r,m=v*.3*r;c[h+1]=f+_,c[h+2]=p-m}}l.needsUpdate=!0,this.hoodMesh.geometry.computeVertexNormals(),n>=22&&this.triggerPartDetachment(e,n,i),n>40&&(this.bumperMaterial.color.setHex(3621201),this.bodyMaterial.roughness=.55)}triggerPartDetachment(e,n,i){const r=i*Math.PI/180,s=Math.min(6.5,n/100*8);for(const o of this.detachableParts){if(o.detached)continue;let a=!1;if((o.mesh.position.x<0&&e.frontLeft>25||o.mesh.position.x>0&&e.frontRight>25||n>60)&&(a=!0),a){o.detached=!0;const l=Math.sign(o.initialPos.x)*(1.5+Math.random()*2.5),c=2+Math.random()*3.5,u=-Math.cos(r)*s*.4+(Math.random()-.5)*2;o.vel.set(l,c,u),o.rotVel.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12)}}}updateDetachedParts(e){for(const n of this.detachableParts)n.detached&&(n.vel.y-=9.81*e,n.mesh.position.addScaledVector(n.vel,e),n.mesh.rotation.x+=n.rotVel.x*e,n.mesh.rotation.y+=n.rotVel.y*e,n.mesh.rotation.z+=n.rotVel.z*e,n.mesh.position.y<=.08&&(n.mesh.position.y=.08,n.vel.y=-n.vel.y*.3,n.vel.x*=.65,n.vel.z*=.65,n.rotVel.multiplyScalar(.7),Math.abs(n.vel.y)<.2&&(n.vel.set(0,0,0),n.rotVel.set(0,0,0))))}updateTransform(e,n,i,r,s,o,a){this.group.position.set(e,0,n),this.group.rotation.y=i,this.chassisGroup.rotation.x=r,this.chassisGroup.rotation.z=s;const c=o/.35;for(const u of this.wheels)u.rotation.x+=c*a;this.updateDetachedParts(a)}reset(){this.bumperMesh.geometry.attributes.position.array.set(this.originalBumperPositions),this.bumperMesh.geometry.attributes.position.needsUpdate=!0,this.bumperMesh.geometry.computeVertexNormals(),this.hoodMesh.geometry.attributes.position.array.set(this.originalHoodPositions),this.hoodMesh.geometry.attributes.position.needsUpdate=!0,this.hoodMesh.geometry.computeVertexNormals();for(const i of this.detachableParts)i.detached=!1,i.mesh.position.copy(i.initialPos),i.mesh.rotation.copy(i.initialRot),i.vel.set(0,0,0),i.rotVel.set(0,0,0);this.bodyMaterial.color.setHex(16096779),this.bodyMaterial.roughness=.25,this.bumperMaterial.color.setHex(2042167),this.group.position.set(0,0,on.trackStartZ),this.group.rotation.set(0,0,0),this.chassisGroup.rotation.set(0,0,0)}}class gA{constructor(){he(this,"group");he(this,"currentId","concrete_wall");he(this,"concreteWallMesh");he(this,"heavyBarrierMesh");he(this,"lightBarrierMesh");this.group=new en,this.buildConcreteWall(),this.buildHeavyBarrier(),this.buildLightweightBarrier(),this.setObstacleType("concrete_wall")}buildConcreteWall(){this.concreteWallMesh=new en;const e=Wn.concrete_wall,n=new Ze(e.width,e.height,e.depth),i=document.createElement("canvas");i.width=512,i.height=256;const r=i.getContext("2d");if(r){r.fillStyle="#475569",r.fillRect(0,0,512,256),r.fillStyle="#eab308";for(let h=-256;h<768;h+=64)r.beginPath(),r.moveTo(h,256),r.lineTo(h+40,0),r.lineTo(h+72,0),r.lineTo(h+32,256),r.closePath(),r.fill();r.fillStyle="#0f172a",r.fillRect(160,100,192,56),r.strokeStyle="#eab308",r.lineWidth=3,r.strokeRect(160,100,192,56),r.fillStyle="#ffffff",r.font="bold 22px monospace",r.textAlign="center",r.fillText("CRASH BARRIER",256,136)}const s=new Dl(i),o=new et({color:4674921,roughness:.85,metalness:.1}),a=new et({map:s,roughness:.8,metalness:.15}),l=[o,o,o,o,o,a],c=new Ee(n,l);c.position.y=e.height/2,c.castShadow=!0,c.receiveShadow=!0,this.concreteWallMesh.add(c);const u=new et({color:1976635,metalness:.8,roughness:.3});for(const h of[-2.2,0,2.2]){const f=new Ze(.3,2,1.8),p=new Ee(f,u);p.position.set(h,1,1.2),p.castShadow=!0,this.concreteWallMesh.add(p)}this.group.add(this.concreteWallMesh)}buildHeavyBarrier(){this.heavyBarrierMesh=new en;const e=Wn.heavy_barrier,n=new wv,i=e.depth/2,r=.22,s=e.height;n.moveTo(-i,0),n.lineTo(-i,.25),n.lineTo(-i+.15,.45),n.lineTo(-r,s),n.lineTo(r,s),n.lineTo(i-.15,.45),n.lineTo(i,.25),n.lineTo(i,0),n.closePath();const o={steps:1,depth:e.width,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:2},a=new Ad(n,o);a.center();const l=new et({color:6583435,roughness:.75,metalness:.15}),c=new Ee(a,l);c.rotation.y=Math.PI/2,c.position.y=e.height/2,c.castShadow=!0,c.receiveShadow=!0,this.heavyBarrierMesh.add(c);const u=new et({color:15381256,emissive:15381256,emissiveIntensity:.4,roughness:.2});for(const h of[-1.5,0,1.5]){const f=new Ee(new Ze(.18,.1,.04),u);f.position.set(h,.8,-i-.02),this.heavyBarrierMesh.add(f)}this.group.add(this.heavyBarrierMesh)}buildLightweightBarrier(){this.lightBarrierMesh=new en;const e=Wn.lightweight_barrier,n=new et({color:16347926,roughness:.4,metalness:.05}),i=new Ze(e.width,e.height*.85,e.depth),r=new Ee(i,n);r.position.y=e.height*.85/2+.05,r.castShadow=!0,r.receiveShadow=!0,this.lightBarrierMesh.add(r);const s=new et({color:12730636,roughness:.5});for(const u of[-.8,0,.8]){const h=new Ee(new Ze(.2,e.height*.65,e.depth+.04),s);h.position.set(u,e.height*.45,0),this.lightBarrierMesh.add(h)}const o=new et({color:16777215,roughness:.2,emissive:16777215,emissiveIntensity:.2}),a=new Ee(new Ze(e.width+.02,.12,e.depth+.02),o);a.position.y=e.height*.65,this.lightBarrierMesh.add(a);const l=new Ee(new Ze(e.width+.02,.12,e.depth+.02),o);l.position.y=e.height*.35,this.lightBarrierMesh.add(l);const c=new Ee(new Mi(.12,.12,.08,12),new et({color:1120295}));c.position.set(0,e.height*.9,0),this.lightBarrierMesh.add(c),this.group.add(this.lightBarrierMesh)}setObstacleType(e){this.currentId=e,this.concreteWallMesh.visible=e==="concrete_wall",this.heavyBarrierMesh.visible=e==="heavy_barrier",this.lightBarrierMesh.visible=e==="lightweight_barrier"}updateTransform(e,n,i){this.group.position.set(e,0,n),this.group.rotation.y=i}reset(e){this.group.position.set(0,0,0),this.group.rotation.y=e}}class vA{constructor(){he(this,"group");he(this,"particles",[]);he(this,"sparkInstancedMesh");he(this,"shardInstancedMesh");he(this,"dustInstancedMesh");he(this,"dummy",new Ct);he(this,"MAX_SPARKS",250);he(this,"MAX_SHARDS",120);he(this,"MAX_DUST",60);this.group=new en,this.initMeshes()}initMeshes(){const e=new ec(.04,4,4),n=new ii({color:16755234});this.sparkInstancedMesh=new hu(e,n,this.MAX_SPARKS),this.sparkInstancedMesh.instanceMatrix.setUsage(Fc),this.group.add(this.sparkInstancedMesh);const i=new Ze(.1,.08,.03),r=new et({color:9741240,roughness:.2,metalness:.7});this.shardInstancedMesh=new hu(i,r,this.MAX_SHARDS),this.shardInstancedMesh.instanceMatrix.setUsage(Fc),this.shardInstancedMesh.castShadow=!0,this.group.add(this.shardInstancedMesh);const s=new Td(.35,1),o=new et({color:13358561,roughness:.9,metalness:0,transparent:!0,opacity:.4});this.dustInstancedMesh=new hu(s,o,this.MAX_DUST),this.dustInstancedMesh.instanceMatrix.setUsage(Fc),this.group.add(this.dustInstancedMesh),this.hideAllInstances()}hideAllInstances(){this.dummy.position.set(0,-9999,0),this.dummy.scale.set(0,0,0),this.dummy.updateMatrix();for(let e=0;e<this.MAX_SPARKS;e++)this.sparkInstancedMesh.setMatrixAt(e,this.dummy.matrix);this.sparkInstancedMesh.instanceMatrix.needsUpdate=!0;for(let e=0;e<this.MAX_SHARDS;e++)this.shardInstancedMesh.setMatrixAt(e,this.dummy.matrix);this.shardInstancedMesh.instanceMatrix.needsUpdate=!0;for(let e=0;e<this.MAX_DUST;e++)this.dustInstancedMesh.setMatrixAt(e,this.dummy.matrix);this.dustInstancedMesh.instanceMatrix.needsUpdate=!0}emitImpactBurst(e,n,i,r,s){const o=Math.min(2.5,Math.max(.6,s/50)),a=Math.floor(60*o),l=Math.floor(35*o),c=Math.floor(18*o),u=-r,h=i;for(let f=0;f<a&&this.particles.length<this.MAX_SPARKS+this.MAX_SHARDS+this.MAX_DUST;f++){const p=(Math.random()-.5)*2,v=4+Math.random()*12*o,_=u*p*v+i*(1+Math.random()*4),m=1.5+Math.random()*5*o,d=h*p*v+r*(1+Math.random()*4);this.particles.push({pos:new D(e+(Math.random()-.5)*.4,.4+Math.random()*.4,n),vel:new D(_,m,d),rot:new D,rotVel:new D,size:.05+Math.random()*.05,life:0,maxLife:.35+Math.random()*.45,type:"spark"})}for(let f=0;f<l;f++){const p=2+Math.random()*8*o,v=(Math.random()-.5)*p+i*2,_=2+Math.random()*5*o,m=(Math.random()-.5)*p+r*2;this.particles.push({pos:new D(e+(Math.random()-.5)*.6,.5,n),vel:new D(v,_,m),rot:new D(Math.random()*Math.PI,Math.random()*Math.PI,0),rotVel:new D((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15),size:.08+Math.random()*.1,life:0,maxLife:2.5+Math.random()*1.5,type:"shard"})}for(let f=0;f<c;f++){const p=1+Math.random()*3.5;this.particles.push({pos:new D(e+(Math.random()-.5)*.8,.3,n),vel:new D((Math.random()-.5)*p+i*1.5,.8+Math.random()*2,(Math.random()-.5)*p+r*1.5),rot:new D(Math.random(),Math.random(),0),rotVel:new D(.5,.5,0),size:.2+Math.random()*.3,life:0,maxLife:1.2+Math.random()*.8,type:"dust"})}}update(e){if(this.particles.length===0)return;let n=0,i=0,r=0;for(let s=this.particles.length-1;s>=0;s--){const o=this.particles[s];if(o.life+=e,o.life>=o.maxLife){this.particles.splice(s,1);continue}const a=o.life/o.maxLife;if(o.type==="spark"){if(o.vel.y-=14*e,o.pos.addScaledVector(o.vel,e),o.pos.y<=.02&&(o.pos.y=.02,o.vel.y=-o.vel.y*.2,o.vel.x*=.7,o.vel.z*=.7),n<this.MAX_SPARKS){const l=o.size*(1-a);this.dummy.position.copy(o.pos),this.dummy.scale.set(l,l,l),this.dummy.updateMatrix(),this.sparkInstancedMesh.setMatrixAt(n++,this.dummy.matrix)}}else if(o.type==="shard")o.vel.y-=9.81*e,o.pos.addScaledVector(o.vel,e),o.rot.x+=o.rotVel.x*e,o.rot.y+=o.rotVel.y*e,o.pos.y<=.04&&(o.pos.y=.04,o.vel.y=-o.vel.y*.25,o.vel.x*=.65,o.vel.z*=.65,o.rotVel.multiplyScalar(.7),Math.abs(o.vel.y)<.1&&(o.vel.set(0,0,0),o.rotVel.set(0,0,0))),i<this.MAX_SHARDS&&(this.dummy.position.copy(o.pos),this.dummy.rotation.set(o.rot.x,o.rot.y,o.rot.z),this.dummy.scale.set(o.size,o.size,o.size),this.dummy.updateMatrix(),this.shardInstancedMesh.setMatrixAt(i++,this.dummy.matrix));else if(o.type==="dust"&&(o.vel.multiplyScalar(.94),o.pos.addScaledVector(o.vel,e),o.pos.y+=.4*e,r<this.MAX_DUST)){const l=o.size*(1+a*2.5);this.dummy.position.copy(o.pos),this.dummy.rotation.set(o.rot.x,o.rot.y,0),this.dummy.scale.set(l,l,l),this.dummy.updateMatrix(),this.dustInstancedMesh.setMatrixAt(r++,this.dummy.matrix)}}this.dummy.position.set(0,-9999,0),this.dummy.scale.set(0,0,0),this.dummy.updateMatrix();for(let s=n;s<this.MAX_SPARKS;s++)this.sparkInstancedMesh.setMatrixAt(s,this.dummy.matrix);this.sparkInstancedMesh.instanceMatrix.needsUpdate=!0;for(let s=i;s<this.MAX_SHARDS;s++)this.shardInstancedMesh.setMatrixAt(s,this.dummy.matrix);this.shardInstancedMesh.instanceMatrix.needsUpdate=!0;for(let s=r;s<this.MAX_DUST;s++)this.dustInstancedMesh.setMatrixAt(s,this.dummy.matrix);this.dustInstancedMesh.instanceMatrix.needsUpdate=!0}reset(){this.particles=[],this.hideAllInstances()}}class xA{constructor(){he(this,"group");he(this,"markSegments",[]);he(this,"lastLeftPos",null);he(this,"lastRightPos",null);he(this,"skidMaterial");this.group=new en,this.skidMaterial=new ii({color:592912,transparent:!0,opacity:.65,depthWrite:!1})}addMark(e,n,i,r){if(r<.2){this.lastLeftPos=null,this.lastRightPos=null;return}const s=.85,o=Math.cos(i),a=Math.sin(i),l=new D(e-s*o,.008,n+s*a-1.35*o),c=new D(e+s*o,.008,n-s*a-1.35*o);if(this.lastLeftPos&&this.lastRightPos){const u=l.distanceTo(this.lastLeftPos);u>.2&&u<3&&(this.createRibbonSegment(this.lastLeftPos,l,.22),this.createRibbonSegment(this.lastRightPos,c,.22))}this.lastLeftPos=l.clone(),this.lastRightPos=c.clone()}createRibbonSegment(e,n,i){const r=new D().subVectors(n,e).normalize(),s=new D(-r.z,0,r.x).multiplyScalar(i/2),o=new On,a=new Float32Array([e.x-s.x,e.y,e.z-s.z,e.x+s.x,e.y,e.z+s.z,n.x-s.x,n.y,n.z-s.z,e.x+s.x,e.y,e.z+s.z,n.x+s.x,n.y,n.z+s.z,n.x-s.x,n.y,n.z-s.z]);o.setAttribute("position",new Dn(a,3));const l=new Ee(o,this.skidMaterial);if(l.renderOrder=1,this.group.add(l),this.markSegments.push(l),this.markSegments.length>300){const c=this.markSegments.shift();c&&(this.group.remove(c),c.geometry.dispose())}}reset(){for(const e of this.markSegments)this.group.remove(e),e.geometry.dispose();this.markSegments=[],this.lastLeftPos=null,this.lastRightPos=null}}class _A{constructor(e,n){he(this,"camera");he(this,"mode","cinematic");he(this,"isMouseDown",!1);he(this,"prevMouse",{x:0,y:0});he(this,"orbitTheta",.6);he(this,"orbitPhi",.55);he(this,"orbitRadius",16);he(this,"orbitTarget",new D(0,1,0));he(this,"shakeIntensity",0);he(this,"currentCamPos",new D(0,5,-20));he(this,"currentLookAt",new D(0,1,0));this.camera=e,this.setupMouseEvents(n)}setupMouseEvents(e){e.addEventListener("mousedown",n=>{this.isMouseDown=!0,this.prevMouse={x:n.clientX,y:n.clientY}}),window.addEventListener("mouseup",()=>{this.isMouseDown=!1}),window.addEventListener("mousemove",n=>{if(!this.isMouseDown)return;const i=n.clientX-this.prevMouse.x,r=n.clientY-this.prevMouse.y;this.prevMouse={x:n.clientX,y:n.clientY},this.orbitTheta-=i*.008,this.orbitPhi=Math.max(.1,Math.min(Math.PI/2-.05,this.orbitPhi+r*.008))}),e.addEventListener("wheel",n=>{n.preventDefault(),this.orbitRadius=Math.max(4,Math.min(50,this.orbitRadius+n.deltaY*.03))},{passive:!1})}setMode(e){this.mode=e}triggerShake(e){this.shakeIntensity=Math.min(1.5,Math.max(.2,e))}update(e,n,i,r){let s=new D(0,0,0);this.shakeIntensity>.01&&(s.set((Math.random()-.5)*this.shakeIntensity,(Math.random()-.5)*this.shakeIntensity,(Math.random()-.5)*this.shakeIntensity),this.shakeIntensity=Math.max(0,this.shakeIntensity-3*e));let o=new D,a=new D;switch(this.mode){case"cinematic":{if(r==="IDLE")o.set(n.x-5.5,2.2,n.z-6.5),a.set(n.x,.9,n.z+4);else if(r==="ACCELERATING")o.set(n.x-6,3.2,n.z-8),a.set(n.x,1,n.z+6);else if(r==="IMPACT")o.set(-4.5,1.6,2.5),a.set(0,.8,0);else if(r==="POST_IMPACT")o.set(n.x-7,4,n.z+4),a.set(n.x,.8,n.z);else{const c=Date.now()*3e-4;o.set(n.x+Math.sin(c)*9,3.5+Math.sin(c*.5)*.5,n.z+Math.cos(c)*9),a.set(n.x,.8,n.z)}break}case"orbit":{this.orbitTarget.set(n.x*.5,1,n.z*.5);const c=this.orbitTarget.x+this.orbitRadius*Math.sin(this.orbitPhi)*Math.sin(this.orbitTheta),u=this.orbitTarget.y+this.orbitRadius*Math.cos(this.orbitPhi),h=this.orbitTarget.z+this.orbitRadius*Math.sin(this.orbitPhi)*Math.cos(this.orbitTheta);o.set(c,u,h),a.copy(this.orbitTarget);break}case"trackside":{o.set(-7,1.5,2),a.set(n.x,.8,n.z);break}case"chase":{o.set(n.x-Math.sin(i)*7.5,2.8,n.z-Math.cos(i)*7.5),a.set(n.x+Math.sin(i)*5,.9,n.z+Math.cos(i)*5);break}case"top_down":{o.set(0,26,n.z*.5),a.set(0,0,n.z*.5);break}}const l=this.mode==="orbit"?.25:.08;this.currentCamPos.lerp(o,l),this.currentLookAt.lerp(a,l),this.camera.position.copy(this.currentCamPos).add(s),this.camera.lookAt(this.currentLookAt)}}class yA{constructor(e){he(this,"container");he(this,"scene");he(this,"camera");he(this,"renderer");he(this,"cameraController");he(this,"track");he(this,"vehicle");he(this,"obstacle");he(this,"debris");he(this,"skidmarks");he(this,"isRunning",!0);he(this,"animationFrameId",0);he(this,"clock");he(this,"onWindowResize",()=>{if(!this.container)return;const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)});this.container=e,this.clock=new fA,this.scene=new RT,this.scene.background=new Je(658967),this.scene.fog=new Md(658967,.015);const n=e.clientWidth/e.clientHeight;this.camera=new xn(45,n,.1,200),this.cameraController=new _A(this.camera,e),this.renderer=new _v({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bg,this.renderer.toneMapping=Hg,this.renderer.toneMappingExposure=1.1,e.appendChild(this.renderer.domElement),this.setupLighting(),this.track=new pA,this.scene.add(this.track.group),this.vehicle=new mA,this.scene.add(this.vehicle.group),this.obstacle=new gA,this.scene.add(this.obstacle.group),this.debris=new vA,this.scene.add(this.debris.group),this.skidmarks=new xA,this.scene.add(this.skidmarks.group),window.addEventListener("resize",this.onWindowResize)}setupLighting(){const e=new dA(9741240,.7);this.scene.add(e);const n=new wm(16776171,1.6);n.position.set(-15,30,-10),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=5,n.shadow.camera.far=70,n.shadow.camera.left=-25,n.shadow.camera.right=25,n.shadow.camera.top=25,n.shadow.camera.bottom=-25,n.shadow.bias=-5e-4,this.scene.add(n);const i=new wm(3718648,.4);i.position.set(20,15,20),this.scene.add(i)}setCameraMode(e){this.cameraController.setMode(e)}setObstacle(e,n){this.obstacle.setObstacleType(e);const i=n*Math.PI/180;this.obstacle.reset(i)}triggerImpactEffects(e,n,i,r,s){this.debris.emitImpactBurst(n,i,r,s,e);const o=Math.min(1.2,e/80*.9);this.cameraController.triggerShake(o)}syncWithPhysics(e,n){const i=e.car,r=Math.hypot(i.vx,i.vz);if(this.vehicle.updateTransform(i.x,i.z,i.angle,e.carPitch,e.carRoll,r,n),this.obstacle.updateTransform(e.obstacle.x,e.obstacle.z,e.obstacle.angle),this.debris.update(n),e.status==="POST_IMPACT"){const s=Math.min(1,r/10+Math.abs(i.omega)*.5);this.skidmarks.addMark(i.x,i.z,i.angle,s)}this.track.update(this.clock.getElapsedTime()),this.cameraController.update(n,i,i.angle,e.status)}render(){this.renderer.render(this.scene,this.camera)}reset(e,n){const i=n*Math.PI/180;this.vehicle.reset(),this.obstacle.setObstacleType(e),this.obstacle.reset(i),this.debris.reset(),this.skidmarks.reset()}destroy(){window.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.animationFrameId),this.renderer.dispose(),this.container&&this.renderer.domElement&&this.container.removeChild(this.renderer.domElement)}}class MA{constructor(){he(this,"ctx",null);he(this,"enabled",!0);he(this,"engineOsc",null);he(this,"engineGain",null)}initCtx(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startEngine(){if(this.enabled&&(this.initCtx(),!!this.ctx)){this.stopEngine();try{const e=this.ctx.currentTime;this.engineOsc=this.ctx.createOscillator(),this.engineGain=this.ctx.createGain(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.setValueAtTime(45,e);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(180,e),this.engineGain.gain.setValueAtTime(.01,e),this.engineGain.gain.linearRampToValueAtTime(.18,e+.3),this.engineOsc.connect(n),n.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start()}catch{}}}updateEnginePitch(e){if(!(!this.enabled||!this.ctx||!this.engineOsc))try{const n=this.ctx.currentTime,i=45+e*130;this.engineOsc.frequency.setTargetAtTime(i,n,.05)}catch{}}stopEngine(){if(this.engineGain&&this.ctx)try{const e=this.ctx.currentTime;this.engineGain.gain.linearRampToValueAtTime(.001,e+.1),setTimeout(()=>{this.engineOsc&&(this.engineOsc.stop(),this.engineOsc.disconnect(),this.engineOsc=null)},120)}catch{this.engineOsc=null}}playCrashImpact(e,n=1){if(this.enabled&&(this.initCtx(),!!this.ctx)){this.stopEngine();try{const i=this.ctx.currentTime,r=Math.min(2.5,Math.max(.4,e/60*n)),s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(120,i),s.frequency.exponentialRampToValueAtTime(25,i+.4),o.gain.setValueAtTime(.6*r,i),o.gain.exponentialRampToValueAtTime(.001,i+.55),s.connect(o),o.connect(this.ctx.destination),s.start(i),s.stop(i+.6);const a=this.ctx.sampleRate*.5,l=this.ctx.createBuffer(1,a,this.ctx.sampleRate),c=l.getChannelData(0);for(let _=0;_<a;_++)c[_]=Math.random()*2-1;const u=this.ctx.createBufferSource();u.buffer=l;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(600,i),h.Q.setValueAtTime(1.2,i);const f=this.ctx.createGain();f.gain.setValueAtTime(.5*r,i),f.gain.exponentialRampToValueAtTime(.001,i+.45),u.connect(h),h.connect(f),f.connect(this.ctx.destination),u.start(i),u.stop(i+.5);const p=this.ctx.createOscillator(),v=this.ctx.createGain();p.type="triangle",p.frequency.setValueAtTime(320,i),p.frequency.exponentialRampToValueAtTime(90,i+.35),v.gain.setValueAtTime(.25*r,i),v.gain.exponentialRampToValueAtTime(.001,i+.38),p.connect(v),v.connect(this.ctx.destination),p.start(i),p.stop(i+.4),setTimeout(()=>{this.playDebrisClatter()},120)}catch{}}}playTireSkid(){if(this.enabled&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.sampleRate*.4,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*.5;const s=this.ctx.createBufferSource();s.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1100,e),o.Q.setValueAtTime(3.5,e);const a=this.ctx.createGain();a.gain.setValueAtTime(.18,e),a.gain.exponentialRampToValueAtTime(.001,e+.35),s.connect(o),o.connect(a),a.connect(this.ctx.destination),s.start(e),s.stop(e+.4)}catch{}}playDebrisClatter(){if(!(!this.enabled||!this.ctx))try{const e=this.ctx.currentTime;for(let n=0;n<4;n++){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(1400+Math.random()*1200,e+n*.06),r.gain.setValueAtTime(.08,e+n*.06),r.gain.exponentialRampToValueAtTime(.001,e+n*.06+.08),i.connect(r),r.connect(this.ctx.destination),i.start(e+n*.06),i.stop(e+n*.06+.09)}}catch{}}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ut=(t,e)=>{const n=Mt.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>Mt.createElement("svg",{ref:u,...SA,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${EA(t)}`,a].join(" "),...c},[...e.map(([h,f])=>Mt.createElement(h,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=ut("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=ut("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=ut("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ut("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=ut("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=ut("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=ut("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=ut("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ut("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=ut("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=ut("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=ut("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=ut("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ut("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=ut("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=ut("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=ut("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=ut("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=ut("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=ut("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=ut("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=ut("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=ut("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ut("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ut("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),HA=({params:t,status:e,isPaused:n,onUpdateParams:i,onRunCrash:r,onReset:s,onTogglePause:o,onOpenPhysicsModal:a})=>{const l=e==="ACCELERATING"||e==="IMPACT"||e==="POST_IMPACT",c=[30,60,100,160],u=[{label:"Compact",mass:950},{label:"Sedan",mass:1500},{label:"SUV",mass:2200},{label:"Heavy EV",mass:2800}],h=[-45,-15,0,15,45],f=[{label:"1.0x",val:1},{label:"0.5x Slow",val:.5},{label:"0.2x Crash Cam",val:.2}];return S.jsxs("div",{className:"glass-panel p-5 border border-slate-700/80 bg-slate-900/90 text-slate-100 rounded-2xl shadow-2xl max-w-sm w-full font-sans pointer-events-auto space-y-4 max-h-[92vh] overflow-y-auto",children:[S.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(OA,{className:"w-5 h-5 text-amber-400"}),S.jsx("h2",{className:"text-sm font-bold font-tech tracking-wider text-slate-100 uppercase",children:"TEST PARAMETERS"})]}),S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx("button",{onClick:()=>i({soundEnabled:!t.soundEnabled}),title:t.soundEnabled?"Mute Audio":"Enable Audio",className:`p-1.5 rounded-lg border transition ${t.soundEnabled?"bg-amber-500/20 border-amber-500/40 text-amber-400":"bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200"}`,children:t.soundEnabled?S.jsx(BA,{className:"w-4 h-4"}):S.jsx(GA,{className:"w-4 h-4"})}),S.jsxs("button",{onClick:a,title:"Physics Model & Equations",className:"flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 text-xs text-slate-300 font-tech transition",children:[S.jsx(Rv,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"MODEL"})]})]})]}),S.jsxs("div",{className:"space-y-1.5",children:[S.jsxs("div",{className:"flex justify-between items-center text-xs",children:[S.jsxs("div",{className:"flex items-center gap-1.5 text-slate-300",children:[S.jsx(Pv,{className:"w-3.5 h-3.5 text-amber-400"}),S.jsx("span",{className:"font-tech font-bold uppercase",children:"VEHICLE SPEED"})]}),S.jsxs("div",{className:"font-mono text-sm font-bold text-amber-400",children:[t.speedKmh," ",S.jsx("span",{className:"text-xs text-slate-400",children:"km/h"}),S.jsxs("span",{className:"text-xs text-slate-500 ml-1",children:["(",(t.speedKmh/3.6).toFixed(1)," m/s)"]})]})]}),S.jsx("input",{type:"range",min:"10",max:"200",step:"5",value:t.speedKmh,disabled:l,onChange:p=>i({speedKmh:Number(p.target.value)}),className:"w-full accent-amber-500"}),S.jsx("div",{className:"flex gap-1 justify-between pt-1",children:c.map(p=>S.jsx("button",{disabled:l,onClick:()=>i({speedKmh:p}),className:`px-2 py-0.5 text-[11px] font-mono rounded border transition ${t.speedKmh===p?"bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold":"bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"}`,children:p},p))})]}),S.jsxs("div",{className:"space-y-1.5",children:[S.jsxs("div",{className:"flex justify-between items-center text-xs",children:[S.jsxs("div",{className:"flex items-center gap-1.5 text-slate-300",children:[S.jsx(DA,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{className:"font-tech font-bold uppercase",children:"VEHICLE MASS"})]}),S.jsxs("div",{className:"font-mono text-sm font-bold text-cyan-400",children:[t.massKg," ",S.jsx("span",{className:"text-xs text-slate-400",children:"kg"})]})]}),S.jsx("input",{type:"range",min:"700",max:"3000",step:"50",value:t.massKg,disabled:l,onChange:p=>i({massKg:Number(p.target.value)}),className:"w-full accent-cyan-500"}),S.jsx("div",{className:"grid grid-cols-4 gap-1 pt-1",children:u.map(p=>S.jsx("button",{disabled:l,onClick:()=>i({massKg:p.mass}),className:`px-1.5 py-0.5 text-[10px] font-mono rounded border truncate transition text-center ${t.massKg===p.mass?"bg-cyan-500/20 border-cyan-500/60 text-cyan-300 font-bold":"bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"}`,children:p.label},p.mass))})]}),S.jsxs("div",{className:"space-y-1.5",children:[S.jsxs("div",{className:"flex justify-between items-center text-xs",children:[S.jsxs("div",{className:"flex items-center gap-1.5 text-slate-300",children:[S.jsx(Rd,{className:"w-3.5 h-3.5 text-emerald-400"}),S.jsx("span",{className:"font-tech font-bold uppercase",children:"IMPACT ANGLE"})]}),S.jsxs("div",{className:"font-mono text-sm font-bold text-emerald-400",children:[t.angleDeg>0?`+${t.angleDeg}`:t.angleDeg,"°",S.jsx("span",{className:"text-xs text-slate-500 ml-1",children:t.angleDeg===0?"(Head-on)":t.angleDeg>0?"(Right-offset)":"(Left-offset)"})]})]}),S.jsx("input",{type:"range",min:"-60",max:"60",step:"5",value:t.angleDeg,disabled:l,onChange:p=>i({angleDeg:Number(p.target.value)}),className:"w-full accent-emerald-500"}),S.jsx("div",{className:"flex gap-1 justify-between pt-1",children:h.map(p=>S.jsxs("button",{disabled:l,onClick:()=>i({angleDeg:p}),className:`px-2 py-0.5 text-[11px] font-mono rounded border transition ${t.angleDeg===p?"bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold":"bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"}`,children:[p>0?`+${p}`:p,"°"]},p))})]}),S.jsxs("div",{className:"space-y-1.5",children:[S.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-slate-300",children:[S.jsx(UA,{className:"w-3.5 h-3.5 text-orange-400"}),S.jsx("span",{className:"font-tech font-bold uppercase",children:"OBSTACLE GEOMETRY"})]}),S.jsx("div",{className:"space-y-1.5",children:Object.keys(Wn).map(p=>{const v=Wn[p],_=t.obstacleId===p;return S.jsxs("div",{onClick:()=>!l&&i({obstacleId:p}),className:`p-2.5 rounded-xl border cursor-pointer transition ${_?"bg-amber-500/15 border-amber-500/70 shadow-inner":"bg-slate-800/50 border-slate-700/60 hover:bg-slate-800/80"} ${l?"opacity-60 cursor-not-allowed":""}`,children:[S.jsxs("div",{className:"flex justify-between items-center mb-0.5",children:[S.jsx("span",{className:`text-xs font-bold font-tech ${_?"text-amber-400":"text-slate-200"}`,children:v.name}),S.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:v.isFixed?"Anchor ∞":`${v.massKg} kg`})]}),S.jsx("p",{className:"text-[10px] text-slate-400 line-clamp-1",children:v.description})]},p)})})]}),S.jsxs("div",{className:"pt-1",children:[S.jsx("div",{className:"text-[10px] text-slate-400 mb-1 font-tech uppercase",children:"SIMULATION SPEED (TIME SCALE)"}),S.jsx("div",{className:"grid grid-cols-3 gap-1",children:f.map(p=>S.jsx("button",{onClick:()=>i({timeScale:p.val}),className:`py-1 text-[11px] font-mono rounded border transition text-center ${t.timeScale===p.val?"bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold":"bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"}`,children:p.label},p.val))})]}),S.jsxs("div",{className:"pt-2 space-y-2",children:[S.jsxs("button",{onClick:r,disabled:l,className:"w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold font-tech text-sm tracking-wider btn-hazard",children:[S.jsx(NA,{className:"w-4 h-4 fill-current"}),S.jsx("span",{children:"RUN CRASH TEST"})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[S.jsxs("button",{onClick:s,className:"flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 text-xs font-tech font-bold transition",children:[S.jsx(Lv,{className:"w-3.5 h-3.5 text-amber-400"}),S.jsx("span",{children:"RESET"})]}),S.jsxs("button",{onClick:o,disabled:e==="IDLE"||e==="SETTLED",className:`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-tech font-bold transition ${n?"bg-amber-500 text-slate-950 border-amber-400":"bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-200"} disabled:opacity-40 disabled:cursor-not-allowed`,children:[S.jsx(LA,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:n?"RESUME":"PAUSE"})]})]})]})]})},VA=({telemetry:t,params:e})=>{const i=251.2*(1-Math.min(1,t.speedKmh/200)*.75),r=()=>{switch(t.status){case"IDLE":return S.jsx("span",{className:"px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700",children:"STATUS: READY"});case"ACCELERATING":return S.jsx("span",{className:"px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 animate-pulse",children:"APPROACH ACCELERATION"});case"IMPACT":return S.jsx("span",{className:"px-2.5 py-1 rounded bg-red-950 text-red-400 border border-red-700 font-bold animate-ping",children:"CRASH IMPACT"});case"POST_IMPACT":return S.jsx("span",{className:"px-2.5 py-1 rounded bg-amber-950 text-amber-400 border border-amber-700",children:"POST-CRASH SLIDE & REBOUND"});case"SETTLED":return S.jsx("span",{className:"px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-700 font-bold",children:"SIMULATION COMPLETED"})}};return S.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 shadow-2xl text-slate-100 font-tech pointer-events-auto",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsxs("div",{className:"relative w-14 h-14 flex items-center justify-center",children:[S.jsxs("svg",{className:"w-14 h-14 -rotate-90",viewBox:"0 0 100 100",children:[S.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"transparent",stroke:"#1e293b",strokeWidth:"8",strokeDasharray:"251.2",strokeDashoffset:"62.8"}),S.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"transparent",stroke:t.speedKmh>100?"#ef4444":"#f59e0b",strokeWidth:"8",strokeDasharray:"251.2",strokeDashoffset:i,strokeLinecap:"round",className:"transition-all duration-75"})]}),S.jsxs("div",{className:"absolute flex flex-col items-center justify-center",children:[S.jsx("span",{className:"text-base font-bold font-mono text-white leading-none",children:t.speedKmh}),S.jsx("span",{className:"text-[9px] text-slate-400 tracking-wider",children:"KM/H"})]})]}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-slate-400",children:[S.jsx(Pv,{className:"w-3.5 h-3.5 text-amber-400"}),S.jsx("span",{children:"LIVE VELOCITY"})]}),S.jsxs("div",{className:"text-xs text-slate-300 font-mono",children:["Target: ",S.jsxs("span",{className:"text-amber-400 font-semibold",children:[e.speedKmh," km/h"]})," (",Math.round(e.speedKmh/3.6)," m/s)"]})]})]}),S.jsxs("div",{className:"flex items-center gap-3 px-3 py-1.5 bg-slate-800/60 rounded-xl border border-slate-700/50",children:[S.jsx(Cd,{className:"w-4 h-4 text-cyan-400"}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400 tracking-wider",children:"CHASSIS LOAD (G)"}),S.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs",children:[S.jsxs("span",{className:"text-slate-300",children:["Long: ",S.jsxs("span",{className:t.longitudinalG<-2?"text-red-400 font-bold":"text-slate-200",children:[t.longitudinalG,"G"]})]}),S.jsx("span",{className:"text-slate-500",children:"|"}),S.jsxs("span",{className:"text-slate-300",children:["Lat: ",S.jsxs("span",{className:"text-slate-200",children:[t.lateralG,"G"]})]})]})]})]}),S.jsxs("div",{className:"flex items-center gap-3 px-3 py-1.5 bg-slate-800/60 rounded-xl border border-slate-700/50",children:[S.jsx(PA,{className:"w-4 h-4 text-emerald-400"}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400 tracking-wider",children:"DATUM PROXIMITY"}),S.jsx("div",{className:"font-mono text-xs text-slate-200",children:t.distanceToImpactM>0?S.jsxs("span",{children:[S.jsx("strong",{className:"text-emerald-400",children:t.distanceToImpactM})," m to impact"]}):S.jsx("span",{className:"text-amber-400 font-bold",children:"IMPACT ZONE REACHED"})})]})]}),S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-mono text-slate-400",children:[S.jsx(FA,{className:"w-3.5 h-3.5 text-slate-400"}),S.jsxs("span",{children:[t.timeElapsedS.toFixed(2),"s"]})]}),S.jsx("div",{className:"text-xs font-bold",children:r()})]})]})},WA=({result:t,onReset:e,onClose:n})=>{if(!t)return null;const i=()=>{switch(t.damageSeverity){case"Minor":return S.jsx("span",{className:"px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",children:"MINOR (0–20%)"});case"Moderate":return S.jsx("span",{className:"px-2.5 py-1 text-xs font-bold rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/40",children:"MODERATE (20–50%)"});case"Severe":return S.jsx("span",{className:"px-2.5 py-1 text-xs font-bold rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/40",children:"SEVERE (50–80%)"});case"Catastrophic":return S.jsx("span",{className:"px-2.5 py-1 text-xs font-bold rounded-md bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse",children:"CATASTROPHIC (80–100%)"})}};return S.jsxs("div",{className:"glass-panel p-5 border border-slate-700/80 bg-slate-900/95 text-slate-100 rounded-2xl shadow-2xl max-w-md w-full font-sans pointer-events-auto max-h-[85vh] overflow-y-auto",children:[S.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:[S.jsxs("div",{className:"flex items-center gap-2.5",children:[S.jsx("div",{className:"p-2 bg-red-500/20 text-red-400 rounded-xl",children:S.jsx(IA,{className:"w-5 h-5"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-base font-bold font-tech tracking-wide text-white uppercase",children:"POST-CRASH TELEMETRY REPORT"}),S.jsxs("p",{className:"text-[11px] text-slate-400",children:["Run #",t.runNumber," • ",t.obstacleName]})]})]}),n&&S.jsx("button",{onClick:n,className:"p-1 text-slate-400 hover:text-white rounded-lg",children:S.jsx(Nv,{className:"w-4 h-4"})})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-2.5 mb-4 font-tech",children:[S.jsxs("div",{className:"p-3 bg-slate-800/80 rounded-xl border border-slate-700/60",children:[S.jsx("div",{className:"text-[11px] text-slate-400 font-sans",children:"STRUCTURAL DAMAGE"}),S.jsx("div",{className:"flex items-baseline gap-1 mt-0.5",children:S.jsxs("span",{className:"text-3xl font-bold font-mono text-amber-400",children:[t.damagePercentage,"%"]})}),S.jsx("div",{className:"mt-1.5",children:i()})]}),S.jsxs("div",{className:"p-3 bg-slate-800/80 rounded-xl border border-slate-700/60",children:[S.jsx("div",{className:"text-[11px] text-slate-400 font-sans",children:"ESTIMATED PEAK FORCE"}),S.jsxs("div",{className:"flex items-baseline gap-1 mt-0.5",children:[S.jsx("span",{className:"text-3xl font-bold font-mono text-cyan-400",children:t.estimatedImpactForceKn}),S.jsx("span",{className:"text-xs text-slate-400",children:"kN"})]}),S.jsxs("div",{className:"mt-1 text-xs text-slate-400 font-mono",children:["≈ ",S.jsx("strong",{className:"text-slate-200",children:t.estimatedImpactForceTons})," tf (metric tons)"]})]})]}),S.jsxs("div",{className:"p-3 mb-4 rounded-xl bg-slate-800/50 border border-slate-700/50",children:[S.jsxs("div",{className:"flex items-center justify-between text-xs mb-2",children:[S.jsx("span",{className:"text-slate-400",children:"PRIMARY IMPACT ZONE:"}),S.jsx("span",{className:"font-bold text-amber-400 font-tech",children:t.primaryDamageZone})]}),S.jsxs("div",{className:"space-y-1.5 text-xs font-mono",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400 mb-0.5",children:[S.jsx("span",{children:"Front Center Bumper"}),S.jsxs("span",{children:[t.damageZones.frontCenter,"%"]})]}),S.jsx("div",{className:"w-full bg-slate-950 h-1.5 rounded-full overflow-hidden",children:S.jsx("div",{className:"bg-amber-500 h-full rounded-full transition-all",style:{width:`${t.damageZones.frontCenter}%`}})})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 mb-0.5",children:[S.jsx("span",{children:"Front Left"}),S.jsxs("span",{children:[t.damageZones.frontLeft,"%"]})]}),S.jsx("div",{className:"w-full bg-slate-950 h-1.5 rounded-full overflow-hidden",children:S.jsx("div",{className:"bg-cyan-500 h-full rounded-full",style:{width:`${t.damageZones.frontLeft}%`}})})]}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 mb-0.5",children:[S.jsx("span",{children:"Front Right"}),S.jsxs("span",{children:[t.damageZones.frontRight,"%"]})]}),S.jsx("div",{className:"w-full bg-slate-950 h-1.5 rounded-full overflow-hidden",children:S.jsx("div",{className:"bg-cyan-500 h-full rounded-full",style:{width:`${t.damageZones.frontRight}%`}})})]})]})]})]}),S.jsxs("div",{className:"space-y-2 mb-4 text-xs",children:[S.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-bold text-slate-400 font-tech",children:[S.jsx(Cd,{className:"w-3.5 h-3.5 text-amber-400"}),S.jsx("span",{children:"COLLISION KINEMATICS & FORCES"})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono bg-slate-950/60 p-3 rounded-xl border border-slate-800",children:[S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400",children:"CONFIG / IMPACT SPEED"}),S.jsxs("div",{className:"text-slate-200",children:[t.configuredSpeedKmh," → ",S.jsx("strong",{className:"text-amber-400",children:t.impactSpeedKmh})," km/h"]}),S.jsxs("div",{className:"text-[10px] text-slate-500",children:["(",t.impactSpeedMs," m/s)"]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400",children:"VEHICLE MASS & ANGLE"}),S.jsxs("div",{className:"text-slate-200",children:[S.jsx("strong",{children:t.vehicleMassKg})," kg @ ",S.jsxs("strong",{children:[t.collisionAngleDeg>0?`+${t.collisionAngleDeg}`:t.collisionAngleDeg,"°"]})]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400",children:"DECELERATION PEAK"}),S.jsxs("div",{className:"text-slate-200",children:[S.jsx("strong",{className:"text-red-400",children:t.peakGForce})," G"]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400",children:"PULSE DURATION (EST.)"}),S.jsxs("div",{className:"text-slate-200",children:[S.jsx("strong",{children:t.assumedPulseDurationMs})," ms"]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400",children:"CRUMPLE DEPTH (EST.)"}),S.jsxs("div",{className:"text-slate-200",children:[S.jsx("strong",{children:t.assumedCrumpleDistanceM})," m"]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400",children:"MOMENTUM IMPULSE"}),S.jsxs("div",{className:"text-slate-200",children:[S.jsx("strong",{children:(t.impulseNs/1e3).toFixed(1)})," kN·s"]})]})]})]}),S.jsxs("div",{className:"space-y-2 mb-4 text-xs",children:[S.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-bold text-slate-400 font-tech",children:[S.jsx(Dv,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"KINETIC ENERGY BALANCE"})]}),S.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center text-xs font-mono bg-slate-950/60 p-2.5 rounded-xl border border-slate-800",children:[S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400",children:"INITIAL KE"}),S.jsxs("div",{className:"text-slate-200 font-bold",children:[t.initialKineticEnergyKj," ",S.jsx("span",{className:"text-[10px] text-slate-400",children:"kJ"})]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400",children:"POST KE"}),S.jsxs("div",{className:"text-slate-400",children:[t.postImpactKineticEnergyKj," ",S.jsx("span",{className:"text-[10px] text-slate-400",children:"kJ"})]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[10px] text-slate-400",children:"DISSIPATED"}),S.jsxs("div",{className:"text-emerald-400 font-bold",children:[t.energyDissipatedKj," ",S.jsx("span",{className:"text-[10px] text-slate-400",children:"kJ"})]})]})]})]}),S.jsxs("div",{className:"p-3 mb-4 rounded-xl bg-slate-800/40 border border-slate-700/40 text-xs",children:[S.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-bold text-slate-400 font-tech mb-2",children:[S.jsx(Rd,{className:"w-3.5 h-3.5 text-emerald-400"}),S.jsx("span",{children:"FINAL RESTING POSITION & ORIENTATION"})]}),S.jsxs("div",{className:"grid grid-cols-3 gap-2 font-mono text-[11px] text-slate-200",children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-slate-500",children:"X:"})," ",t.finalPosition.x," m"]}),S.jsxs("div",{children:[S.jsx("span",{className:"text-slate-500",children:"Z:"})," ",t.finalPosition.z," m"]}),S.jsxs("div",{children:[S.jsx("span",{className:"text-slate-500",children:"Yaw:"})," ",t.finalRotationDeg,"°"]})]}),S.jsxs("div",{className:"mt-1.5 flex justify-between text-[11px] text-slate-400 font-mono",children:[S.jsxs("span",{children:["Displacement from Datum: ",S.jsxs("strong",{children:[t.finalDistanceToImpactM," m"]})]}),t.obstacleDisplacementM>0&&S.jsxs("span",{children:["Obstacle Displaced: ",S.jsxs("strong",{className:"text-amber-400",children:[t.obstacleDisplacementM," m"]})]})]})]}),S.jsx("div",{className:"flex gap-2",children:S.jsxs("button",{onClick:e,className:"flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold font-tech rounded-xl border border-slate-600 transition",children:[S.jsx(Lv,{className:"w-4 h-4 text-amber-400"}),"RESET SIMULATION"]})})]})},jA=({history:t,onSelectRun:e,onClearHistory:n,selectedRunId:i})=>t.length===0?null:S.jsxs("div",{className:"glass-panel p-4 border border-slate-700/80 bg-slate-900/90 text-slate-100 rounded-2xl shadow-xl font-sans pointer-events-auto",children:[S.jsxs("div",{className:"flex items-center justify-between pb-2.5 border-b border-slate-800 mb-3",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(RA,{className:"w-4 h-4 text-amber-400"}),S.jsxs("h4",{className:"text-xs font-bold font-tech tracking-wider text-slate-200 uppercase",children:["EXPERIMENT RUN LOG (",t.length,")"]})]}),S.jsx("button",{onClick:n,title:"Clear History",className:"p-1 text-slate-400 hover:text-red-400 rounded transition",children:S.jsx(kA,{className:"w-3.5 h-3.5"})})]}),S.jsx("div",{className:"overflow-x-auto max-h-48 overflow-y-auto",children:S.jsxs("table",{className:"w-full text-[11px] text-left border-collapse font-mono",children:[S.jsx("thead",{children:S.jsxs("tr",{className:"text-slate-400 border-b border-slate-800 text-[10px] tracking-wider uppercase font-tech",children:[S.jsx("th",{className:"py-1 px-1.5",children:"#"}),S.jsx("th",{className:"py-1 px-1.5",children:"Speed"}),S.jsx("th",{className:"py-1 px-1.5",children:"Mass"}),S.jsx("th",{className:"py-1 px-1.5",children:"Angle"}),S.jsx("th",{className:"py-1 px-1.5",children:"Obstacle"}),S.jsx("th",{className:"py-1 px-1.5",children:"Peak Force"}),S.jsx("th",{className:"py-1 px-1.5",children:"Damage"})]})}),S.jsx("tbody",{children:t.map(r=>{const s=i===r.id;return S.jsxs("tr",{onClick:()=>e(r),className:`border-b border-slate-800/50 cursor-pointer transition ${s?"bg-amber-500/20 text-white font-semibold":"hover:bg-slate-800/60 text-slate-300"}`,children:[S.jsx("td",{className:"py-1.5 px-1.5 text-slate-500 font-bold",children:r.runNumber}),S.jsxs("td",{className:"py-1.5 px-1.5 text-amber-400 font-semibold",children:[r.configuredSpeedKmh," ",S.jsx("span",{className:"text-[9px] text-slate-500",children:"km/h"})]}),S.jsxs("td",{className:"py-1.5 px-1.5",children:[r.vehicleMassKg," ",S.jsx("span",{className:"text-[9px] text-slate-500",children:"kg"})]}),S.jsxs("td",{className:"py-1.5 px-1.5",children:[r.collisionAngleDeg>0?`+${r.collisionAngleDeg}`:r.collisionAngleDeg,"°"]}),S.jsx("td",{className:"py-1.5 px-1.5 text-[10px] truncate max-w-[90px]",children:r.obstacleName.split(" ")[0]}),S.jsxs("td",{className:"py-1.5 px-1.5 text-cyan-400 font-semibold",children:[r.estimatedImpactForceKn," ",S.jsx("span",{className:"text-[9px] text-slate-500",children:"kN"})]}),S.jsx("td",{className:"py-1.5 px-1.5",children:S.jsxs("span",{className:`px-1.5 py-0.5 rounded text-[10px] font-bold ${r.damagePercentage>80?"bg-red-950 text-red-400":r.damagePercentage>50?"bg-orange-950 text-orange-400":r.damagePercentage>20?"bg-amber-950 text-amber-400":"bg-emerald-950 text-emerald-400"}`,children:[r.damagePercentage,"%"]})})]},r.id)})})]})})]}),XA=({isOpen:t,onClose:e})=>t?S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md",children:S.jsxs("div",{className:"relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel p-6 border border-slate-700 bg-slate-900/95 text-slate-100 rounded-2xl shadow-2xl",children:[S.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-700/80 mb-5",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"p-2 bg-amber-500/20 text-amber-400 rounded-lg",children:S.jsx(Rv,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsx("h2",{className:"text-xl font-bold font-tech tracking-wide text-white",children:"PHYSICS & DYNAMICS MODEL"}),S.jsx("p",{className:"text-xs text-slate-400",children:"Mathematical formulation, impact mechanics, and force calculation assumptions"})]})]}),S.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition",children:S.jsx(Nv,{className:"w-5 h-5"})})]}),S.jsxs("div",{className:"space-y-6 text-sm text-slate-300 leading-relaxed font-sans",children:[S.jsxs("div",{className:"p-4 rounded-xl bg-slate-800/60 border border-slate-700/60",children:[S.jsxs("div",{className:"flex items-center gap-2 mb-2 text-amber-400 font-semibold font-tech",children:[S.jsx(bA,{className:"w-4 h-4"}),S.jsx("span",{children:"1. 3D RIGID-BODY COLLISION & IMPULSE DYNAMICS"})]}),S.jsxs("p",{className:"mb-2",children:["The impact response is resolved using Newton-Euler rigid-body collision equations with restitution (",S.jsx("span",{className:"text-amber-300 font-mono",children:"e"}),") and contact friction (",S.jsx("span",{className:"text-amber-300 font-mono",children:"μ"}),")."]}),S.jsxs("div",{className:"bg-slate-950/80 p-3 rounded-lg font-mono text-xs text-amber-300/90 space-y-1 border border-slate-800",children:[S.jsx("p",{children:"v_rel = (v_car + ω_car × r_car) - (v_obs + ω_obs × r_obs)"}),S.jsx("p",{children:"J_n = - (1 + e) · (v_rel · n) / [ m1⁻¹ + m2⁻¹ + (r1 × n)² · I1⁻¹ + (r2 × n)² · I2⁻¹ ]"}),S.jsx("p",{children:"Δv = J / m,    Δω = (r × J) / I"})]}),S.jsxs("p",{className:"mt-2 text-xs text-slate-400",children:["Off-center collisions (angle ≠ 0°) induce an asymmetric torque ",S.jsx("span",{className:"font-mono text-amber-300",children:"τ = r × J"}),", causing realistic post-impact yaw spin, deflection, and lateral slide."]})]}),S.jsxs("div",{className:"p-4 rounded-xl bg-slate-800/60 border border-slate-700/60",children:[S.jsxs("div",{className:"flex items-center gap-2 mb-2 text-cyan-400 font-semibold font-tech",children:[S.jsx(Dv,{className:"w-4 h-4"}),S.jsx("span",{children:"2. ESTIMATED IMPACT FORCE FORMULA & ASSUMPTIONS"})]}),S.jsxs("p",{className:"mb-2",children:["Automotive crash impacts are transient dynamic events where peak force depends on the deceleration pulse duration (",S.jsx("span",{className:"font-mono text-cyan-300",children:"Δt"}),") and crumple zone displacement."]}),S.jsxs("div",{className:"bg-slate-950/80 p-3 rounded-lg font-mono text-xs text-cyan-300/90 space-y-1 border border-slate-800",children:[S.jsx("p",{children:"F_avg = |J| / Δt_pulse   (where Δt ≈ 85–120 ms calibrated from Euro NCAP crash pulses)"}),S.jsx("p",{children:"F_peak ≈ 1.85 · F_avg   (accounting for non-linear crumple rail buckling profile)"}),S.jsx("p",{children:"F_metric_tons = F_peak / 9,806.65 N"})]}),S.jsxs("div",{className:"mt-2 flex items-start gap-2 text-xs text-slate-400 bg-cyan-950/30 p-2.5 rounded border border-cyan-800/40",children:[S.jsx(wA,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),S.jsxs("span",{children:[S.jsx("strong",{children:"Explicit Assumption:"})," Peak force is estimated assuming a representative modern crumple zone pulse duration (Δt = 95 ms for rigid barrier; lengthened up to 150 ms for movable/displaceable barriers as ground displacement prolongs impact time)."]})]})]}),S.jsxs("div",{className:"p-4 rounded-xl bg-slate-800/60 border border-slate-700/60",children:[S.jsxs("div",{className:"flex items-center gap-2 mb-2 text-emerald-400 font-semibold font-tech",children:[S.jsx(Cd,{className:"w-4 h-4"}),S.jsx("span",{children:"3. NORMALIZED DAMAGE MODEL (0–100%)"})]}),S.jsxs("p",{className:"mb-2",children:["Damage is derived from the net dissipated kinetic energy (",S.jsx("span",{className:"font-mono text-emerald-300",children:"ΔKE = KE_initial - KE_post"}),"), modulated by obstacle stiffness (",S.jsx("span",{className:"font-mono text-emerald-300",children:"K_obs"}),") and the normal velocity component:"]}),S.jsxs("div",{className:"bg-slate-950/80 p-3 rounded-lg font-mono text-xs text-emerald-300/90 space-y-1 border border-slate-800",children:[S.jsx("p",{children:"E_effective = ΔKE · K_obs · (cos θ)^0.75"}),S.jsx("p",{children:"Damage% = min(100, round((E_effective / E_ref) · 80))"})]}),S.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-center text-xs",children:[S.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-700",children:[S.jsx("div",{className:"text-emerald-400 font-bold",children:"0 – 20%"}),S.jsx("div",{className:"text-slate-400",children:"Minor"})]}),S.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-700",children:[S.jsx("div",{className:"text-amber-400 font-bold",children:"20 – 50%"}),S.jsx("div",{className:"text-slate-400",children:"Moderate"})]}),S.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-700",children:[S.jsx("div",{className:"text-orange-400 font-bold",children:"50 – 80%"}),S.jsx("div",{className:"text-slate-400",children:"Severe"})]}),S.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-700",children:[S.jsx("div",{className:"text-red-400 font-bold",children:"80 – 100%"}),S.jsx("div",{className:"text-slate-400",children:"Catastrophic"})]})]})]}),S.jsxs("div",{className:"p-4 rounded-xl bg-slate-800/60 border border-slate-700/60",children:[S.jsx("h3",{className:"font-semibold text-slate-200 mb-2 font-tech",children:"4. OBSTACLE TYPES & DIVERGENT BEHAVIOR"}),S.jsxs("ul",{className:"list-disc list-inside space-y-1 text-xs text-slate-300",children:[S.jsxs("li",{children:[S.jsx("strong",{className:"text-slate-100",children:"Reinforced Concrete Wall:"})," Immovable mass (infinite inertia anchor). Absorbs 0% kinetic energy via motion; the vehicle absorbs maximum structural compression and experiences highest peak G-forces."]}),S.jsxs("li",{children:[S.jsx("strong",{className:"text-slate-100",children:"Heavy Barrier (2,000 kg):"})," Movable concrete barrier with high ground Coulomb friction (μ = 0.70). Slides back several meters, attenuating peak forces on the vehicle."]}),S.jsxs("li",{children:[S.jsx("strong",{className:"text-slate-100",children:"Lightweight Barrier (220 kg):"})," Easily displaced plastic barrier. Rapidly accelerates forward upon impact, substantially reducing vehicle cabin deceleration."]})]})]})]}),S.jsx("div",{className:"mt-6 pt-4 border-t border-slate-700/80 flex justify-end",children:S.jsx("button",{onClick:e,className:"px-5 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-lg transition",children:"Close Documentation"})})]})}):null,qA=({currentMode:t,onSelectMode:e})=>{const n=[{id:"cinematic",label:"Director",icon:S.jsx(zA,{className:"w-3.5 h-3.5"})},{id:"orbit",label:"3D Orbit",icon:S.jsx(Rd,{className:"w-3.5 h-3.5"})},{id:"trackside",label:"Trackside",icon:S.jsx(AA,{className:"w-3.5 h-3.5"})},{id:"chase",label:"Chase Cam",icon:S.jsx(CA,{className:"w-3.5 h-3.5"})},{id:"top_down",label:"Top-Down",icon:S.jsx(TA,{className:"w-3.5 h-3.5"})}];return S.jsx("div",{className:"flex items-center gap-1 p-1 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/80 shadow-lg pointer-events-auto",children:n.map(i=>{const r=t===i.id;return S.jsxs("button",{onClick:()=>e(i.id),className:`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${r?"bg-amber-500 text-slate-950 shadow-md font-bold":"text-slate-300 hover:text-white hover:bg-slate-800/80"}`,children:[i.icon,S.jsx("span",{className:"hidden sm:inline",children:i.label})]},i.id)})})},YA=()=>{const t=Mt.useRef(null),e=Mt.useRef(null),n=Mt.useRef(null),i=Mt.useRef(null),[r,s]=Mt.useState({speedKmh:60,massKg:1500,angleDeg:0,obstacleId:"concrete_wall",timeScale:1,soundEnabled:!0}),[o,a]=Mt.useState("cinematic"),[l,c]=Mt.useState("IDLE"),[u,h]=Mt.useState(!1),[f,p]=Mt.useState({speedKmh:0,speedMs:0,position:{x:0,y:0,z:-45},headingDeg:0,longitudinalG:0,lateralG:0,totalG:0,distanceToImpactM:45,timeElapsedS:0,status:"IDLE"}),[v,_]=Mt.useState(null),[m,d]=Mt.useState([]),[x,g]=Mt.useState(!1),[y,b]=Mt.useState(!1);Mt.useEffect(()=>{if(!t.current)return;const X=new yA(t.current);e.current=X;const $=new vy(r);n.current=$;const N=new MA;N.enabled=r.soundEnabled,i.current=N,$.onImpact=(I,F,G,Q,se)=>{X.triggerImpactEffects(I,F,G,Q,se),N.playCrashImpact(I,1.2)},$.onSettled=I=>{_(I),b(!0),d(F=>[I,...F]),X.vehicle.applyDamage(I.damageZones,I.damagePercentage,I.collisionAngleDeg)};let q=performance.now(),k;const Z=I=>{k=requestAnimationFrame(Z);const F=(I-q)/1e3;q=I;const G=Math.min(F,.05);if(!u&&$.status!=="IDLE"&&$.status!=="SETTLED"){const se=G*r.timeScale;if($.step(se),$.status==="ACCELERATING"){const Ne=Math.min(1,$.car.vz/(r.speedKmh/3.6));N.updateEnginePitch(Ne)}else $.status==="POST_IMPACT"&&N.playTireSkid()}X.syncWithPhysics($,G),X.render();const Q=$.getLiveTelemetry();p(Q),c($.status)};return k=requestAnimationFrame(Z),()=>{cancelAnimationFrame(k),X.destroy(),N.stopEngine()}},[]);const A=Mt.useCallback(X=>{s($=>{const N={...$,...X};return n.current&&n.current.updateParams(N),i.current&&X.soundEnabled!==void 0&&(i.current.enabled=X.soundEnabled),e.current&&(X.obstacleId!==void 0||X.angleDeg!==void 0)&&e.current.setObstacle(N.obstacleId,N.angleDeg),N})},[]),w=X=>{a(X),e.current&&e.current.setCameraMode(X)},P=()=>{!n.current||!e.current||(h(!1),b(!1),e.current.reset(r.obstacleId,r.angleDeg),i.current&&i.current.startEngine(),n.current.start())},z=()=>{!n.current||!e.current||(h(!1),n.current.reset(),e.current.reset(r.obstacleId,r.angleDeg),i.current&&i.current.stopEngine(),c("IDLE"),b(!1))},M=()=>{h(X=>!X)},C=X=>{_(X),b(!0)};return S.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-slate-950 font-sans",children:[S.jsx("div",{ref:t,className:"absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"}),S.jsxs("div",{className:"absolute top-0 left-0 right-0 p-4 flex items-center justify-between pointer-events-none z-10",children:[S.jsx("div",{className:"flex items-center gap-3",children:S.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/80 shadow-lg pointer-events-auto",children:[S.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),S.jsxs("h1",{className:"text-xs sm:text-sm font-bold font-tech tracking-wider text-slate-100 uppercase",children:["3D CAR CRASH LABORATORY ",S.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"// DYNAMICS LAB"})]})]})}),S.jsx(qA,{currentMode:o,onSelectMode:w})]}),S.jsxs("div",{className:"absolute inset-0 p-4 pt-16 pb-24 pointer-events-none flex justify-between items-start gap-4 z-10",children:[S.jsx("div",{className:"pointer-events-auto",children:S.jsx(HA,{params:r,status:l,isPaused:u,onUpdateParams:A,onRunCrash:P,onReset:z,onTogglePause:M,onOpenPhysicsModal:()=>g(!0)})}),S.jsxs("div",{className:"flex flex-col gap-4 pointer-events-auto items-end max-w-md w-full",children:[y&&v&&S.jsx(WA,{result:v,onReset:z,onClose:()=>b(!1)}),S.jsx("div",{className:"w-full",children:S.jsx(jA,{history:m,onSelectRun:C,onClearHistory:()=>d([]),selectedRunId:v==null?void 0:v.id})})]})]}),S.jsx("div",{className:"absolute bottom-4 left-4 right-4 pointer-events-none flex justify-center z-20",children:S.jsx("div",{className:"w-full max-w-4xl",children:S.jsx(VA,{telemetry:f,params:r})})}),S.jsx(XA,{isOpen:x,onClose:()=>g(!1)})]})},Am=document.getElementById("root");Am&&gu.createRoot(Am).render(S.jsx(ix.StrictMode,{children:S.jsx(YA,{})}));
