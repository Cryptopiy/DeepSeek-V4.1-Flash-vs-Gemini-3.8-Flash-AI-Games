var m_=Object.defineProperty;var g_=(t,e,n)=>e in t?m_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var we=(t,e,n)=>g_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function __(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vm={exports:{}},bl={},xm={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),v_=Symbol.for("react.portal"),x_=Symbol.for("react.fragment"),y_=Symbol.for("react.strict_mode"),M_=Symbol.for("react.profiler"),S_=Symbol.for("react.provider"),E_=Symbol.for("react.context"),w_=Symbol.for("react.forward_ref"),T_=Symbol.for("react.suspense"),A_=Symbol.for("react.memo"),C_=Symbol.for("react.lazy"),sh=Symbol.iterator;function R_(t){return t===null||typeof t!="object"?null:(t=sh&&t[sh]||t["@@iterator"],typeof t=="function"?t:null)}var ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,Sm={};function Us(t,e,n){this.props=t,this.context=e,this.refs=Sm,this.updater=n||ym}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Em(){}Em.prototype=Us.prototype;function Wd(t,e,n){this.props=t,this.context=e,this.refs=Sm,this.updater=n||ym}var Xd=Wd.prototype=new Em;Xd.constructor=Wd;Mm(Xd,Us.prototype);Xd.isPureReactComponent=!0;var oh=Array.isArray,wm=Object.prototype.hasOwnProperty,jd={current:null},Tm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)wm.call(e,i)&&!Tm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ko,type:t,key:s,ref:o,props:r,_owner:jd.current}}function P_(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function b_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ah=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?b_(""+t.key):e.toString(36)}function Ua(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case v_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+rc(o,0):i,oh(r)?(n="",t!=null&&(n=t.replace(ah,"$&/")+"/"),Ua(r,e,n,"",function(c){return c})):r!=null&&(qd(r)&&(r=P_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ah,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",oh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+rc(s,a);o+=Ua(s,e,n,l,r)}else if(l=R_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+rc(s,a++),o+=Ua(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ko(t,e,n){if(t==null)return t;var i=[],r=0;return Ua(t,i,"","",function(s){return e.call(n,s,r++)}),i}function L_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Fa={transition:null},I_={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:jd};function Cm(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Ko,forEach:function(t,e,n){Ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ko(t,function(){e++}),e},toArray:function(t){return Ko(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=Us;Oe.Fragment=x_;Oe.Profiler=M_;Oe.PureComponent=Wd;Oe.StrictMode=y_;Oe.Suspense=T_;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I_;Oe.act=Cm;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)wm.call(e,l)&&!Tm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ko,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:E_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:S_,_context:t},t.Consumer=t};Oe.createElement=Am;Oe.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:w_,render:t}};Oe.isValidElement=qd;Oe.lazy=function(t){return{$$typeof:C_,_payload:{_status:-1,_result:t},_init:L_}};Oe.memo=function(t,e){return{$$typeof:A_,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Fa.transition;Fa.transition={};try{t()}finally{Fa.transition=e}};Oe.unstable_act=Cm;Oe.useCallback=function(t,e){return $t.current.useCallback(t,e)};Oe.useContext=function(t){return $t.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return $t.current.useEffect(t,e)};Oe.useId=function(){return $t.current.useId()};Oe.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return $t.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};Oe.useRef=function(t){return $t.current.useRef(t)};Oe.useState=function(t){return $t.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return $t.current.useTransition()};Oe.version="18.3.1";xm.exports=Oe;var Vt=xm.exports;const D_=__(Vt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_=Vt,U_=Symbol.for("react.element"),F_=Symbol.for("react.fragment"),O_=Object.prototype.hasOwnProperty,k_=N_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z_={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)O_.call(e,i)&&!z_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:U_,type:t,key:s,ref:o,props:r,_owner:k_.current}}bl.Fragment=F_;bl.jsx=Rm;bl.jsxs=Rm;vm.exports=bl;var W=vm.exports,uu={},Pm={exports:{}},xn={},bm={exports:{}},Lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var J=L.length;L.push(Y);e:for(;0<J;){var se=J-1>>>1,Te=L[se];if(0<r(Te,Y))L[se]=Y,L[J]=Te,J=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Y=L[0],J=L.pop();if(J!==Y){L[0]=J;e:for(var se=0,Te=L.length,Be=Te>>>1;se<Be;){var j=2*(se+1)-1,ne=L[j],de=j+1,le=L[de];if(0>r(ne,J))de<Te&&0>r(le,ne)?(L[se]=le,L[de]=J,se=de):(L[se]=ne,L[j]=J,se=j);else if(de<Te&&0>r(le,J))L[se]=le,L[de]=J,se=de;else break e}}return Y}function r(L,Y){var J=L.sortIndex-Y.sortIndex;return J!==0?J:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=L)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(L){if(x=!1,v(L),!_)if(n(l)!==null)_=!0,B(R);else{var Y=n(c);Y!==null&&Z(M,Y.startTime-L)}}function R(L,Y){_=!1,x&&(x=!1,d(P),P=-1),p=!0;var J=h;try{for(v(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||L&&!E());){var se=f.callback;if(typeof se=="function"){f.callback=null,h=f.priorityLevel;var Te=se(f.expirationTime<=Y);Y=t.unstable_now(),typeof Te=="function"?f.callback=Te:f===n(l)&&i(l),v(Y)}else i(l);f=n(l)}if(f!==null)var Be=!0;else{var j=n(c);j!==null&&Z(M,j.startTime-Y),Be=!1}return Be}finally{f=null,h=J,p=!1}}var A=!1,T=null,P=-1,H=5,y=-1;function E(){return!(t.unstable_now()-y<H)}function F(){if(T!==null){var L=t.unstable_now();y=L;var Y=!0;try{Y=T(!0,L)}finally{Y?O():(A=!1,T=null)}}else A=!1}var O;if(typeof g=="function")O=function(){g(F)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,q=G.port2;G.port1.onmessage=F,O=function(){q.postMessage(null)}}else O=function(){m(F,0)};function B(L){T=L,A||(A=!0,O())}function Z(L,Y){P=m(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,B(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var J=h;h=Y;try{return L()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=h;h=L;try{return Y()}finally{h=J}},t.unstable_scheduleCallback=function(L,Y,J){var se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?se+J:se):J=se,L){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=J+Te,L={id:u++,callback:Y,priorityLevel:L,startTime:J,expirationTime:Te,sortIndex:-1},J>se?(L.sortIndex=J,e(c,L),n(l)===null&&L===n(c)&&(x?(d(P),P=-1):x=!0,Z(M,J-se))):(L.sortIndex=Te,e(l,L),_||p||(_=!0,B(R))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var Y=h;return function(){var J=h;h=Y;try{return L.apply(this,arguments)}finally{h=J}}}})(Lm);bm.exports=Lm;var B_=bm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_=Vt,vn=B_;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Im=new Set,xo={};function Nr(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(xo[t]=e,t=0;t<e.length;t++)Im.add(e[t])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,H_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lh={},ch={};function G_(t){return du.call(ch,t)?!0:du.call(lh,t)?!1:H_.test(t)?ch[t]=!0:(lh[t]=!0,!1)}function W_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function X_(t,e,n,i){if(e===null||typeof e>"u"||W_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,Yd);Ft[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,Yd);Ft[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,Yd);Ft[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kd(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X_(e,n,r,i)&&(n=null),i||r===null?G_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=V_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Nm=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Um=Symbol.for("react.offscreen"),uh=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=uh&&t[uh]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,sc;function io(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var oc=!1;function ac(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function j_(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case fu:return"Profiler";case Zd:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nm:return(t.displayName||"Context")+".Consumer";case Dm:return(t._context.displayName||"Context")+".Provider";case Qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===Zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $_(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qo(t){t._valueTracker||(t._valueTracker=$_(t))}function Om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function el(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&Kd(t,"checked",e,!1)}function _u(t,e){km(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&vu(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vu(t,e,n){(e!=="number"||el(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(ro(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function zm(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ph(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,Vm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y_=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){Y_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function Hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function Gm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var K_=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mu(t,e){if(e){if(K_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wu=null,ps=null,ms=null;function mh(t){if(t=Vo(t)){if(typeof wu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Ul(e),wu(t.stateNode,t.type,e))}}function Wm(t){ps?ms?ms.push(t):ms=[t]:ps=t}function Xm(){if(ps){var t=ps,e=ms;if(ms=ps=null,mh(t),e)for(t=0;t<e.length;t++)mh(e[t])}}function jm(t,e){return t(e)}function qm(){}var lc=!1;function $m(t,e,n){if(lc)return t(e,n);lc=!0;try{return jm(t,e,n)}finally{lc=!1,(ps!==null||ms!==null)&&(qm(),Xm())}}function Mo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ul(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Tu=!1;if(_i)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Tu=!1}function Z_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var uo=!1,tl=null,nl=!1,Au=null,Q_={onError:function(t){uo=!0,tl=t}};function J_(t,e,n,i,r,s,o,a,l){uo=!1,tl=null,Z_.apply(Q_,arguments)}function ev(t,e,n,i,r,s,o,a,l){if(J_.apply(this,arguments),uo){if(uo){var c=tl;uo=!1,tl=null}else throw Error(te(198));nl||(nl=!0,Au=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gh(t){if(Ur(t)!==t)throw Error(te(188))}function tv(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return gh(r),t;if(s===i)return gh(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Km(t){return t=tv(t),t!==null?Zm(t):null}function Zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zm(t);if(e!==null)return e;t=t.sibling}return null}var Qm=vn.unstable_scheduleCallback,_h=vn.unstable_cancelCallback,nv=vn.unstable_shouldYield,iv=vn.unstable_requestPaint,xt=vn.unstable_now,rv=vn.unstable_getCurrentPriorityLevel,tf=vn.unstable_ImmediatePriority,Jm=vn.unstable_UserBlockingPriority,il=vn.unstable_NormalPriority,sv=vn.unstable_LowPriority,eg=vn.unstable_IdlePriority,Ll=null,ti=null;function ov(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:cv,av=Math.log,lv=Math.LN2;function cv(t){return t>>>=0,t===0?32:31-(av(t)/lv|0)|0}var ea=64,ta=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=so(a):(s&=o,s!==0&&(i=so(s)))}else o=n&~r,o!==0?i=so(o):s!==0&&(i=so(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function uv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=uv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tg(){var t=ea;return ea<<=1,!(ea&4194240)&&(ea=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function fv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,rf,rg,sg,og,Ru=!1,na=[],Gi=null,Wi=null,Xi=null,So=new Map,Eo=new Map,Fi=[],hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Vo(e),e!==null&&rf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function pv(t,e,n,i,r){switch(e){case"focusin":return Gi=Hs(Gi,t,e,n,i,r),!0;case"dragenter":return Wi=Hs(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=Hs(Xi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return So.set(s,Hs(So.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Eo.set(s,Hs(Eo.get(s)||null,t,e,n,i,r)),!0}return!1}function ag(t){var e=yr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=Ym(n),e!==null){t.blockedOn=e,og(t.priority,function(){rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Eu=i,n.target.dispatchEvent(i),Eu=null}else return e=Vo(n),e!==null&&rf(e),t.blockedOn=n,!1;e.shift()}return!0}function xh(t,e,n){Oa(t)&&n.delete(e)}function mv(){Ru=!1,Gi!==null&&Oa(Gi)&&(Gi=null),Wi!==null&&Oa(Wi)&&(Wi=null),Xi!==null&&Oa(Xi)&&(Xi=null),So.forEach(xh),Eo.forEach(xh)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ru||(Ru=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,mv)))}function wo(t){function e(r){return Gs(r,t)}if(0<na.length){Gs(na[0],t);for(var n=1;n<na.length;n++){var i=na[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&Gs(Gi,t),Wi!==null&&Gs(Wi,t),Xi!==null&&Gs(Xi,t),So.forEach(e),Eo.forEach(e),n=0;n<Fi.length;n++)i=Fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Fi.length&&(n=Fi[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&Fi.shift()}var gs=Si.ReactCurrentBatchConfig,sl=!0;function gv(t,e,n,i){var r=tt,s=gs.transition;gs.transition=null;try{tt=1,sf(t,e,n,i)}finally{tt=r,gs.transition=s}}function _v(t,e,n,i){var r=tt,s=gs.transition;gs.transition=null;try{tt=4,sf(t,e,n,i)}finally{tt=r,gs.transition=s}}function sf(t,e,n,i){if(sl){var r=Pu(t,e,n,i);if(r===null)xc(t,e,i,ol,n),vh(t,i);else if(pv(r,t,e,n,i))i.stopPropagation();else if(vh(t,i),e&4&&-1<hv.indexOf(t)){for(;r!==null;){var s=Vo(r);if(s!==null&&ig(s),s=Pu(t,e,n,i),s===null&&xc(t,e,i,ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xc(t,e,i,null,n)}}var ol=null;function Pu(t,e,n,i){if(ol=null,t=ef(i),t=yr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ol=t,null}function lg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rv()){case tf:return 1;case Jm:return 4;case il:case sv:return 16;case eg:return 536870912;default:return 16}default:return 16}}var Bi=null,of=null,ka=null;function cg(){if(ka)return ka;var t,e=of,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ka=r.slice(t,1<i?1-i:void 0)}function za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function yh(){return!1}function yn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ia:yh,this.isPropagationStopped=yh,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=yn(Fs),Bo=mt({},Fs,{view:0,detail:0}),vv=yn(Bo),uc,dc,Ws,Il=mt({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(uc=t.screenX-Ws.screenX,dc=t.screenY-Ws.screenY):dc=uc=0,Ws=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Mh=yn(Il),xv=mt({},Il,{dataTransfer:0}),yv=yn(xv),Mv=mt({},Bo,{relatedTarget:0}),fc=yn(Mv),Sv=mt({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=yn(Sv),wv=mt({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tv=yn(wv),Av=mt({},Fs,{data:0}),Sh=yn(Av),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pv[t])?!!e[t]:!1}function lf(){return bv}var Lv=mt({},Bo,{key:function(t){if(t.key){var e=Cv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Iv=yn(Lv),Dv=mt({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eh=yn(Dv),Nv=mt({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),Uv=yn(Nv),Fv=mt({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=yn(Fv),kv=mt({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=yn(kv),Bv=[9,13,27,32],cf=_i&&"CompositionEvent"in window,fo=null;_i&&"documentMode"in document&&(fo=document.documentMode);var Vv=_i&&"TextEvent"in window&&!fo,ug=_i&&(!cf||fo&&8<fo&&11>=fo),wh=" ",Th=!1;function dg(t,e){switch(t){case"keyup":return Bv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Hv(t,e){switch(t){case"compositionend":return fg(e);case"keypress":return e.which!==32?null:(Th=!0,wh);case"textInput":return t=e.data,t===wh&&Th?null:t;default:return null}}function Gv(t,e){if(ns)return t==="compositionend"||!cf&&dg(t,e)?(t=cg(),ka=of=Bi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ug&&e.locale!=="ko"?null:e.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wv[t.type]:e==="textarea"}function hg(t,e,n,i){Wm(i),e=al(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ho=null,To=null;function Xv(t){wg(t,0)}function Dl(t){var e=ss(t);if(Om(e))return t}function jv(t,e){if(t==="change")return e}var pg=!1;if(_i){var hc;if(_i){var pc="oninput"in document;if(!pc){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),pc=typeof Ch.oninput=="function"}hc=pc}else hc=!1;pg=hc&&(!document.documentMode||9<document.documentMode)}function Rh(){ho&&(ho.detachEvent("onpropertychange",mg),To=ho=null)}function mg(t){if(t.propertyName==="value"&&Dl(To)){var e=[];hg(e,To,t,ef(t)),$m(Xv,e)}}function qv(t,e,n){t==="focusin"?(Rh(),ho=e,To=n,ho.attachEvent("onpropertychange",mg)):t==="focusout"&&Rh()}function $v(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(To)}function Yv(t,e){if(t==="click")return Dl(e)}function Kv(t,e){if(t==="input"||t==="change")return Dl(e)}function Zv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:Zv;function Ao(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!du.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function Ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bh(t,e){var n=Ph(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ph(n)}}function gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _g(){for(var t=window,e=el();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=el(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Qv(t){var e=_g(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(i!==null&&uf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=bh(n,s);var o=bh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jv=_i&&"documentMode"in document&&11>=document.documentMode,is=null,bu=null,po=null,Lu=!1;function Lh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||is==null||is!==el(i)||(i=is,"selectionStart"in i&&uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&Ao(po,i)||(po=i,i=al(bu,"onSelect"),0<i.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},mc={},vg={};_i&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Nl(t){if(mc[t])return mc[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vg)return mc[t]=e[n];return t}var xg=Nl("animationend"),yg=Nl("animationiteration"),Mg=Nl("animationstart"),Sg=Nl("transitionend"),Eg=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){Eg.set(t,e),Nr(e,[t])}for(var gc=0;gc<Ih.length;gc++){var _c=Ih[gc],ex=_c.toLowerCase(),tx=_c[0].toUpperCase()+_c.slice(1);ir(ex,"on"+tx)}ir(xg,"onAnimationEnd");ir(yg,"onAnimationIteration");ir(Mg,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(Sg,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Dh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ev(i,e,void 0,t),t.currentTarget=null}function wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dh(r,a,c),s=l}}}if(nl)throw t=Au,nl=!1,Au=null,t}function ct(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var i=t+"__bubble";n.has(i)||(Tg(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),Tg(n,t,i,e)}var sa="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[sa]){t[sa]=!0,Im.forEach(function(n){n!=="selectionchange"&&(nx.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sa]||(e[sa]=!0,vc("selectionchange",!1,e))}}function Tg(t,e,n,i){switch(lg(e)){case 1:var r=gv;break;case 4:r=_v;break;default:r=sf}n=r.bind(null,e,n,t),r=void 0,!Tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$m(function(){var c=s,u=ef(n),f=[];e:{var h=Eg.get(t);if(h!==void 0){var p=af,_=t;switch(t){case"keypress":if(za(n)===0)break e;case"keydown":case"keyup":p=Iv;break;case"focusin":_="focus",p=fc;break;case"focusout":_="blur",p=fc;break;case"beforeblur":case"afterblur":p=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Uv;break;case xg:case yg:case Mg:p=Ev;break;case Sg:p=Ov;break;case"scroll":p=vv;break;case"wheel":p=zv;break;case"copy":case"cut":case"paste":p=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Eh}var x=(e&4)!==0,m=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,d!==null&&(M=Mo(g,d),M!=null&&x.push(Ro(g,M,v)))),m)break;g=g.return}0<x.length&&(h=new p(h,_,null,n,u),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Eu&&(_=n.relatedTarget||n.fromElement)&&(yr(_)||_[vi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?yr(_):null,_!==null&&(m=Ur(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=Mh,M="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Eh,M="onPointerLeave",d="onPointerEnter",g="pointer"),m=p==null?h:ss(p),v=_==null?h:ss(_),h=new x(M,g+"leave",p,n,u),h.target=m,h.relatedTarget=v,M=null,yr(u)===c&&(x=new x(d,g+"enter",_,n,u),x.target=v,x.relatedTarget=m,M=x),m=M,p&&_)t:{for(x=p,d=_,g=0,v=x;v;v=kr(v))g++;for(v=0,M=d;M;M=kr(M))v++;for(;0<g-v;)x=kr(x),g--;for(;0<v-g;)d=kr(d),v--;for(;g--;){if(x===d||d!==null&&x===d.alternate)break t;x=kr(x),d=kr(d)}x=null}else x=null;p!==null&&Nh(f,h,p,x,!1),_!==null&&m!==null&&Nh(f,m,_,x,!0)}}e:{if(h=c?ss(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=jv;else if(Ah(h))if(pg)R=Kv;else{R=$v;var A=qv}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Yv);if(R&&(R=R(t,c))){hg(f,R,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&vu(h,"number",h.value)}switch(A=c?ss(c):window,t){case"focusin":(Ah(A)||A.contentEditable==="true")&&(is=A,bu=c,po=null);break;case"focusout":po=bu=is=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Lh(f,n,u);break;case"selectionchange":if(Jv)break;case"keydown":case"keyup":Lh(f,n,u)}var T;if(cf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ns?dg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ug&&n.locale!=="ko"&&(ns||P!=="onCompositionStart"?P==="onCompositionEnd"&&ns&&(T=cg()):(Bi=u,of="value"in Bi?Bi.value:Bi.textContent,ns=!0)),A=al(c,P),0<A.length&&(P=new Sh(P,t,null,n,u),f.push({event:P,listeners:A}),T?P.data=T:(T=fg(n),T!==null&&(P.data=T)))),(T=Vv?Hv(t,n):Gv(t,n))&&(c=al(c,"onBeforeInput"),0<c.length&&(u=new Sh("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=T))}wg(f,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Mo(t,n),s!=null&&i.unshift(Ro(t,s,r)),s=Mo(t,e),s!=null&&i.push(Ro(t,s,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Mo(n,s),l!=null&&o.unshift(Ro(n,l,a))):r||(l=Mo(n,s),l!=null&&o.push(Ro(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ix=/\r\n?/g,rx=/\u0000|\uFFFD/g;function Uh(t){return(typeof t=="string"?t:""+t).replace(ix,`
`).replace(rx,"")}function oa(t,e,n){if(e=Uh(e),Uh(t)!==e&&n)throw Error(te(425))}function ll(){}var Iu=null,Du=null;function Nu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(t){return Fh.resolve(null).then(t).catch(ax)}:Uu;function ax(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wo(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Oh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Os,Po="__reactProps$"+Os,vi="__reactContainer$"+Os,Fu="__reactEvents$"+Os,lx="__reactListeners$"+Os,cx="__reactHandles$"+Os;function yr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vi]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Oh(t);t!==null;){if(n=t[Jn])return n;t=Oh(t)}return e}t=n,n=t.parentNode}return null}function Vo(t){return t=t[Jn]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Ul(t){return t[Po]||null}var Ou=[],os=-1;function rr(t){return{current:t}}function dt(t){0>os||(t.current=Ou[os],Ou[os]=null,os--)}function st(t,e){os++,Ou[os]=t.current,t.current=e}var er={},Gt=rr(er),sn=rr(!1),Cr=er;function Es(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function cl(){dt(sn),dt(Gt)}function kh(t,e,n){if(Gt.current!==er)throw Error(te(168));st(Gt,e),st(sn,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,q_(t)||"Unknown",r));return mt({},n,i)}function ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Cr=Gt.current,st(Gt,t),st(sn,sn.current),!0}function zh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Ag(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,dt(sn),dt(Gt),st(Gt,t)):dt(sn),st(sn,n)}var fi=null,Fl=!1,Mc=!1;function Cg(t){fi===null?fi=[t]:fi.push(t)}function ux(t){Fl=!0,Cg(t)}function sr(){if(!Mc&&fi!==null){Mc=!0;var t=0,e=tt;try{var n=fi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Fl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),Qm(tf,sr),r}finally{tt=e,Mc=!1}}return null}var as=[],ls=0,dl=null,fl=0,wn=[],Tn=0,Rr=null,hi=1,pi="";function pr(t,e){as[ls++]=fl,as[ls++]=dl,dl=t,fl=e}function Rg(t,e,n){wn[Tn++]=hi,wn[Tn++]=pi,wn[Tn++]=Rr,Rr=t;var i=hi;t=pi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-Gn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function df(t){t.return!==null&&(pr(t,1),Rg(t,1,0))}function ff(t){for(;t===dl;)dl=as[--ls],as[ls]=null,fl=as[--ls],as[ls]=null;for(;t===Rr;)Rr=wn[--Tn],wn[Tn]=null,pi=wn[--Tn],wn[Tn]=null,hi=wn[--Tn],wn[Tn]=null}var _n=null,gn=null,ft=!1,zn=null;function Pg(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,gn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,gn=null,!0):!1;default:return!1}}function ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zu(t){if(ft){var e=gn;if(e){var n=e;if(!Bh(t,e)){if(ku(t))throw Error(te(418));e=ji(n.nextSibling);var i=_n;e&&Bh(t,e)?Pg(i,n):(t.flags=t.flags&-4097|2,ft=!1,_n=t)}}else{if(ku(t))throw Error(te(418));t.flags=t.flags&-4097|2,ft=!1,_n=t}}}function Vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function aa(t){if(t!==_n)return!1;if(!ft)return Vh(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nu(t.type,t.memoizedProps)),e&&(e=gn)){if(ku(t))throw bg(),Error(te(418));for(;e;)Pg(t,e),e=ji(e.nextSibling)}if(Vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=_n?ji(t.stateNode.nextSibling):null;return!0}function bg(){for(var t=gn;t;)t=ji(t.nextSibling)}function ws(){gn=_n=null,ft=!1}function hf(t){zn===null?zn=[t]:zn.push(t)}var dx=Si.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function la(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hh(t){var e=t._init;return e(t._payload)}function Lg(t){function e(d,g){if(t){var v=d.deletions;v===null?(d.deletions=[g],d.flags|=16):v.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Ki(d,g),d.index=0,d.sibling=null,d}function s(d,g,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<g?(d.flags|=2,g):v):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,g,v,M){return g===null||g.tag!==6?(g=Rc(v,d.mode,M),g.return=d,g):(g=r(g,v),g.return=d,g)}function l(d,g,v,M){var R=v.type;return R===ts?u(d,g,v.props.children,M,v.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ni&&Hh(R)===g.type)?(M=r(g,v.props),M.ref=Xs(d,g,v),M.return=d,M):(M=ja(v.type,v.key,v.props,null,d.mode,M),M.ref=Xs(d,g,v),M.return=d,M)}function c(d,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Pc(v,d.mode,M),g.return=d,g):(g=r(g,v.children||[]),g.return=d,g)}function u(d,g,v,M,R){return g===null||g.tag!==7?(g=Ar(v,d.mode,M,R),g.return=d,g):(g=r(g,v),g.return=d,g)}function f(d,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Rc(""+g,d.mode,v),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zo:return v=ja(g.type,g.key,g.props,null,d.mode,v),v.ref=Xs(d,null,g),v.return=d,v;case es:return g=Pc(g,d.mode,v),g.return=d,g;case Ni:var M=g._init;return f(d,M(g._payload),v)}if(ro(g)||Bs(g))return g=Ar(g,d.mode,v,null),g.return=d,g;la(d,g)}return null}function h(d,g,v,M){var R=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(d,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zo:return v.key===R?l(d,g,v,M):null;case es:return v.key===R?c(d,g,v,M):null;case Ni:return R=v._init,h(d,g,R(v._payload),M)}if(ro(v)||Bs(v))return R!==null?null:u(d,g,v,M,null);la(d,v)}return null}function p(d,g,v,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(v)||null,a(g,d,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Zo:return d=d.get(M.key===null?v:M.key)||null,l(g,d,M,R);case es:return d=d.get(M.key===null?v:M.key)||null,c(g,d,M,R);case Ni:var A=M._init;return p(d,g,v,A(M._payload),R)}if(ro(M)||Bs(M))return d=d.get(v)||null,u(g,d,M,R,null);la(g,M)}return null}function _(d,g,v,M){for(var R=null,A=null,T=g,P=g=0,H=null;T!==null&&P<v.length;P++){T.index>P?(H=T,T=null):H=T.sibling;var y=h(d,T,v[P],M);if(y===null){T===null&&(T=H);break}t&&T&&y.alternate===null&&e(d,T),g=s(y,g,P),A===null?R=y:A.sibling=y,A=y,T=H}if(P===v.length)return n(d,T),ft&&pr(d,P),R;if(T===null){for(;P<v.length;P++)T=f(d,v[P],M),T!==null&&(g=s(T,g,P),A===null?R=T:A.sibling=T,A=T);return ft&&pr(d,P),R}for(T=i(d,T);P<v.length;P++)H=p(T,d,P,v[P],M),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?P:H.key),g=s(H,g,P),A===null?R=H:A.sibling=H,A=H);return t&&T.forEach(function(E){return e(d,E)}),ft&&pr(d,P),R}function x(d,g,v,M){var R=Bs(v);if(typeof R!="function")throw Error(te(150));if(v=R.call(v),v==null)throw Error(te(151));for(var A=R=null,T=g,P=g=0,H=null,y=v.next();T!==null&&!y.done;P++,y=v.next()){T.index>P?(H=T,T=null):H=T.sibling;var E=h(d,T,y.value,M);if(E===null){T===null&&(T=H);break}t&&T&&E.alternate===null&&e(d,T),g=s(E,g,P),A===null?R=E:A.sibling=E,A=E,T=H}if(y.done)return n(d,T),ft&&pr(d,P),R;if(T===null){for(;!y.done;P++,y=v.next())y=f(d,y.value,M),y!==null&&(g=s(y,g,P),A===null?R=y:A.sibling=y,A=y);return ft&&pr(d,P),R}for(T=i(d,T);!y.done;P++,y=v.next())y=p(T,d,P,y.value,M),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?P:y.key),g=s(y,g,P),A===null?R=y:A.sibling=y,A=y);return t&&T.forEach(function(F){return e(d,F)}),ft&&pr(d,P),R}function m(d,g,v,M){if(typeof v=="object"&&v!==null&&v.type===ts&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Zo:e:{for(var R=v.key,A=g;A!==null;){if(A.key===R){if(R=v.type,R===ts){if(A.tag===7){n(d,A.sibling),g=r(A,v.props.children),g.return=d,d=g;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ni&&Hh(R)===A.type){n(d,A.sibling),g=r(A,v.props),g.ref=Xs(d,A,v),g.return=d,d=g;break e}n(d,A);break}else e(d,A);A=A.sibling}v.type===ts?(g=Ar(v.props.children,d.mode,M,v.key),g.return=d,d=g):(M=ja(v.type,v.key,v.props,null,d.mode,M),M.ref=Xs(d,g,v),M.return=d,d=M)}return o(d);case es:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(d,g.sibling),g=r(g,v.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Pc(v,d.mode,M),g.return=d,d=g}return o(d);case Ni:return A=v._init,m(d,g,A(v._payload),M)}if(ro(v))return _(d,g,v,M);if(Bs(v))return x(d,g,v,M);la(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,v),g.return=d,d=g):(n(d,g),g=Rc(v,d.mode,M),g.return=d,d=g),o(d)):n(d,g)}return m}var Ts=Lg(!0),Ig=Lg(!1),hl=rr(null),pl=null,cs=null,pf=null;function mf(){pf=cs=pl=null}function gf(t){var e=hl.current;dt(hl),t._currentValue=e}function Bu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){pl=t,pf=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(pf!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(pl===null)throw Error(te(308));cs=t,pl.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var Mr=null;function _f(t){Mr===null?Mr=[t]:Mr.push(t)}function Dg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_f(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,_f(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function Ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nf(t,n)}}function Gh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ml(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=mt({},f,h);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=f}}function Wh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ho={},ni=rr(Ho),bo=rr(Ho),Lo=rr(Ho);function Sr(t){if(t===Ho)throw Error(te(174));return t}function xf(t,e){switch(st(Lo,e),st(bo,t),st(ni,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yu(e,t)}dt(ni),st(ni,e)}function As(){dt(ni),dt(bo),dt(Lo)}function Ug(t){Sr(Lo.current);var e=Sr(ni.current),n=yu(e,t.type);e!==n&&(st(bo,t),st(ni,n))}function yf(t){bo.current===t&&(dt(ni),dt(bo))}var ht=rr(0);function gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sc=[];function Mf(){for(var t=0;t<Sc.length;t++)Sc[t]._workInProgressVersionPrimary=null;Sc.length=0}var Va=Si.ReactCurrentDispatcher,Ec=Si.ReactCurrentBatchConfig,Pr=0,pt=null,wt=null,bt=null,_l=!1,mo=!1,Io=0,fx=0;function Ot(){throw Error(te(321))}function Sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Ef(t,e,n,i,r,s){if(Pr=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Va.current=t===null||t.memoizedState===null?gx:_x,t=n(i,r),mo){s=0;do{if(mo=!1,Io=0,25<=s)throw Error(te(301));s+=1,bt=wt=null,e.updateQueue=null,Va.current=vx,t=n(i,r)}while(mo)}if(Va.current=vl,e=wt!==null&&wt.next!==null,Pr=0,bt=wt=pt=null,_l=!1,e)throw Error(te(300));return t}function wf(){var t=Io!==0;return Io=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?pt.memoizedState=bt=t:bt=bt.next=t,bt}function Ln(){if(wt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=bt===null?pt.memoizedState:bt.next;if(e!==null)bt=e,wt=t;else{if(t===null)throw Error(te(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},bt===null?pt.memoizedState=bt=t:bt=bt.next=t}return bt}function Do(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Pr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,pt.lanes|=u,br|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,jn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fg(){}function Og(t,e){var n=pt,i=Ln(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Tf(Bg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,No(9,zg.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(te(349));Pr&30||kg(n,e,r)}return r}function kg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zg(t,e,n,i){e.value=n,e.getSnapshot=i,Vg(e)&&Hg(t)}function Bg(t,e,n){return n(function(){Vg(e)&&Hg(t)})}function Vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function Hg(t){var e=xi(t,1);e!==null&&Wn(e,t,1,-1)}function Xh(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=mx.bind(null,pt,t),[e.memoizedState,t]}function No(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Gg(){return Ln().memoizedState}function Ha(t,e,n,i){var r=Yn();pt.flags|=t,r.memoizedState=No(1|e,n,void 0,i===void 0?null:i)}function Ol(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Sf(i,o.deps)){r.memoizedState=No(e,n,s,i);return}}pt.flags|=t,r.memoizedState=No(1|e,n,s,i)}function jh(t,e){return Ha(8390656,8,t,e)}function Tf(t,e){return Ol(2048,8,t,e)}function Wg(t,e){return Ol(4,2,t,e)}function Xg(t,e){return Ol(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4,4,jg.bind(null,e,t),n)}function Af(){}function $g(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yg(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kg(t,e,n){return Pr&21?(jn(n,e)||(n=tg(),pt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function hx(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Ec.transition;Ec.transition={};try{t(!1),e()}finally{tt=n,Ec.transition=i}}function Zg(){return Ln().memoizedState}function px(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))Jg(e,n);else if(n=Dg(t,e,n,i),n!==null){var r=jt();Wn(n,t,i,r),e0(n,e,i)}}function mx(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))Jg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(r.next=r,_f(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dg(t,e,r,i),n!==null&&(r=jt(),Wn(n,t,i,r),e0(n,e,i))}}function Qg(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function Jg(t,e){mo=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nf(t,n)}}var vl={readContext:bn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},gx={readContext:bn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:jh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=px.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:Xh,useDebugValue:Af,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=Xh(!1),e=t[0];return t=hx.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Yn();if(ft){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Lt===null)throw Error(te(349));Pr&30||kg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,jh(Bg.bind(null,i,s,t),[t]),i.flags|=2048,No(9,zg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=Lt.identifierPrefix;if(ft){var n=pi,i=hi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_x={readContext:bn,useCallback:$g,useContext:bn,useEffect:Tf,useImperativeHandle:qg,useInsertionEffect:Wg,useLayoutEffect:Xg,useMemo:Yg,useReducer:wc,useRef:Gg,useState:function(){return wc(Do)},useDebugValue:Af,useDeferredValue:function(t){var e=Ln();return Kg(e,wt.memoizedState,t)},useTransition:function(){var t=wc(Do)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1},vx={readContext:bn,useCallback:$g,useContext:bn,useEffect:Tf,useImperativeHandle:qg,useInsertionEffect:Wg,useLayoutEffect:Xg,useMemo:Yg,useReducer:Tc,useRef:Gg,useState:function(){return Tc(Do)},useDebugValue:Af,useDeferredValue:function(t){var e=Ln();return wt===null?e.memoizedState=t:Kg(e,wt.memoizedState,t)},useTransition:function(){var t=Tc(Do)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Yi(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Wn(e,t,r,i),Ba(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Yi(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Wn(e,t,r,i),Ba(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=Yi(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(Wn(e,t,i,n),Ba(e,t,i))}};function qh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,i)||!Ao(r,s):!0}function t0(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=on(e)?Cr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Es(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function $h(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Hu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=on(e)?Cr:Gt.current,r.context=Es(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kl.enqueueReplaceState(r,r.state,null),ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",i=e;do n+=j_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function n0(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yl||(yl=!0,Ju=i),Gu(t,e)},n}function i0(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gu(t,e),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Dx.bind(null,t,e,n),e.then(t,t))}function Kh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var yx=Si.ReactCurrentOwner,nn=!1;function Xt(t,e,n,i){e.child=t===null?Ig(e,null,n,i):Ts(e,t.child,n,i)}function Qh(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=Ef(t,e,n,i,s,r),n=wf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(ft&&n&&df(e),e.flags|=1,Xt(t,e,i,r),e.child)}function Jh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Nf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r0(t,e,s,i,r)):(t=ja(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=Ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ao(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,yi(t,e,r)}return Wu(t,e,n,i,r)}function s0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ds,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ds,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ds,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ds,pn),pn|=i;return Xt(t,e,r,n),e.child}function o0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wu(t,e,n,i,r){var s=on(n)?Cr:Gt.current;return s=Es(e,s),_s(e,r),n=Ef(t,e,n,i,s,r),i=wf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(ft&&i&&df(e),e.flags|=1,Xt(t,e,n,r),e.child)}function ep(t,e,n,i,r){if(on(n)){var s=!0;ul(e)}else s=!1;if(_s(e,r),e.stateNode===null)Ga(t,e),t0(e,n,i),Hu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=on(n)?Cr:Gt.current,c=Es(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&$h(e,o,i,c),Ui=!1;var h=e.memoizedState;o.state=h,ml(e,i,o,r),l=e.memoizedState,a!==i||h!==l||sn.current||Ui?(typeof u=="function"&&(Vu(e,n,u,i),l=e.memoizedState),(a=Ui||qh(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ng(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:On(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=on(n)?Cr:Gt.current,l=Es(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&$h(e,o,i,l),Ui=!1,h=e.memoizedState,o.state=h,ml(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||sn.current||Ui?(typeof p=="function"&&(Vu(e,n,p,i),_=e.memoizedState),(c=Ui||qh(e,n,c,i,h,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Xu(t,e,n,i,s,r)}function Xu(t,e,n,i,r,s){o0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&zh(e,n,!1),yi(t,e,s);i=e.stateNode,yx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&zh(e,n,!0),e.child}function a0(t){var e=t.stateNode;e.pendingContext?kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kh(t,e.context,!1),xf(t,e.containerInfo)}function tp(t,e,n,i,r){return ws(),hf(r),e.flags|=256,Xt(t,e,n,i),e.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function l0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vl(o,i,0,null),t=Ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qu(n),e.memoizedState=ju,t):Cf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Mx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ki(a,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ju,i}return s=t.child,t=s.sibling,i=Ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cf(t,e){return e=Vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ca(t,e,n,i){return i!==null&&hf(i),Ts(e,t.child,null,n),t=Cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ac(Error(te(422))),ca(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vl({mode:"visible",children:i.children},r,0,null),s=Ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,o),e.child.memoizedState=qu(o),e.memoizedState=ju,s);if(!(e.mode&1))return ca(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Ac(s,i,void 0),ca(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),Wn(i,t,r,-1))}return Df(),i=Ac(Error(te(421))),ca(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Nx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=ji(r.nextSibling),_n=e,ft=!0,zn=null,t!==null&&(wn[Tn++]=hi,wn[Tn++]=pi,wn[Tn++]=Rr,hi=t.id,pi=t.overflow,Rr=e),e=Cf(e,i.children),e.flags|=4096,e)}function np(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bu(t.return,e,n)}function Cc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&np(t,n,e);else if(t.tag===19)np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cc(e,!0,n,null,s);break;case"together":Cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sx(t,e,n){switch(e.tag){case 3:a0(e),ws();break;case 5:Ug(e);break;case 1:on(e.type)&&ul(e);break;case 4:xf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?l0(t,e,n):(st(ht,ht.current&1),t=yi(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,s0(t,e,n)}return yi(t,e,n)}var u0,$u,d0,f0;u0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$u=function(){};d0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Sr(ni.current);var s=null;switch(n){case"input":r=gu(t,r),i=gu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=xu(t,r),i=xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ll)}Mu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};f0=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ex(t,e,n){var i=e.pendingProps;switch(ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return on(e.type)&&cl(),kt(e),null;case 3:return i=e.stateNode,As(),dt(sn),dt(Gt),Mf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(nd(zn),zn=null))),$u(t,e),kt(e),null;case 5:yf(e);var r=Sr(Lo.current);if(n=e.type,t!==null&&e.stateNode!=null)d0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return kt(e),null}if(t=Sr(ni.current),aa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[Po]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<oo.length;r++)ct(oo[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":dh(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":hh(i,s),ct("invalid",i)}Mu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&oa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oa(i.textContent,a,t),r=["children",""+a]):xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":Qo(i),fh(i,s,!0);break;case"textarea":Qo(i),ph(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ll)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[Po]=i,u0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Su(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<oo.length;r++)ct(oo[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":dh(t,i),r=gu(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":hh(t,i),r=xu(t,i),ct("invalid",t);break;default:r=i}Mu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yo(t,l):typeof l=="number"&&yo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&Kd(t,s,l,o))}switch(n){case"input":Qo(t),fh(t,i,!1);break;case"textarea":Qo(t),ph(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)f0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Sr(Lo.current),Sr(ni.current),aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:oa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return kt(e),null;case 13:if(dt(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&gn!==null&&e.mode&1&&!(e.flags&128))bg(),ws(),e.flags|=98560,s=!1;else if(s=aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Jn]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else zn!==null&&(nd(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Tt===0&&(Tt=3):Df())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return As(),$u(t,e),t===null&&Co(e.stateNode.containerInfo),kt(e),null;case 10:return gf(e.type._context),kt(e),null;case 17:return on(e.type)&&cl(),kt(e),null;case 19:if(dt(ht),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)js(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gl(t),o!==null){for(e.flags|=128,js(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Rs&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=gl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return kt(e),null}else 2*xt()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return If(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function wx(t,e){switch(ff(e),e.tag){case 1:return on(e.type)&&cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),dt(sn),dt(Gt),Mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(dt(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(ht),null;case 4:return As(),null;case 10:return gf(e.type._context),null;case 22:case 23:return If(),null;case 24:return null;default:return null}}var ua=!1,Ht=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,me=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Yu(t,e,n){try{n()}catch(i){_t(t,e,i)}}var ip=!1;function Ax(t,e){if(Iu=sl,t=_g(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:t,selectionRange:n},sl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:On(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){_t(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=ip,ip=!1,_}function go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yu(e,n,s)}r=r.next}while(r!==i)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h0(t){var e=t.alternate;e!==null&&(t.alternate=null,h0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Po],delete e[Fu],delete e[lx],delete e[cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p0(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ll));else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}var Nt=null,kn=!1;function wi(t,e,n){for(n=n.child;n!==null;)m0(t,e,n),n=n.sibling}function m0(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:Ht||us(n,e);case 6:var i=Nt,r=kn;Nt=null,wi(t,e,n),Nt=i,kn=r,Nt!==null&&(kn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(kn?(t=Nt,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),wo(t)):yc(Nt,n.stateNode));break;case 4:i=Nt,r=kn,Nt=n.stateNode.containerInfo,kn=!0,wi(t,e,n),Nt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yu(n,e,o),r=r.next}while(r!==i)}wi(t,e,n);break;case 1:if(!Ht&&(us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}wi(t,e,n);break;case 21:wi(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,wi(t,e,n),Ht=i):wi(t,e,n);break;default:wi(t,e,n)}}function sp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tx),e.forEach(function(i){var r=Ux.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,kn=!1;break e;case 3:Nt=a.stateNode.containerInfo,kn=!0;break e;case 4:Nt=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(Nt===null)throw Error(te(160));m0(s,o,r),Nt=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g0(e,t),e=e.sibling}function g0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),$n(t),i&4){try{go(3,t,t.return),zl(3,t)}catch(x){_t(t,t.return,x)}try{go(5,t,t.return)}catch(x){_t(t,t.return,x)}}break;case 1:Dn(e,t),$n(t),i&512&&n!==null&&us(n,n.return);break;case 5:if(Dn(e,t),$n(t),i&512&&n!==null&&us(n,n.return),t.flags&32){var r=t.stateNode;try{yo(r,"")}catch(x){_t(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),Su(a,o);var c=Su(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Gm(r,f):u==="dangerouslySetInnerHTML"?Vm(r,f):u==="children"?yo(r,f):Kd(r,u,f,c)}switch(a){case"input":_u(r,s);break;case"textarea":zm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?hs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Po]=s}catch(x){_t(t,t.return,x)}}break;case 6:if(Dn(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){_t(t,t.return,x)}}break;case 3:if(Dn(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(x){_t(t,t.return,x)}break;case 4:Dn(e,t),$n(t);break;case 13:Dn(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bf=xt())),i&4&&sp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||u,Dn(e,t),Ht=c):Dn(e,t),$n(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(me=t,u=t.child;u!==null;){for(f=me=u;me!==null;){switch(h=me,p=h.child,h.tag){case 0:case 11:case 14:case 15:go(4,h,h.return);break;case 1:us(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){_t(i,n,x)}}break;case 5:us(h,h.return);break;case 22:if(h.memoizedState!==null){ap(f);continue}}p!==null?(p.return=h,me=p):ap(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hm("display",o))}catch(x){_t(t,t.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){_t(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),$n(t),i&4&&sp(t);break;case 21:break;default:Dn(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(yo(r,""),i.flags&=-33);var s=rp(t);Qu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=rp(t);Zu(t,a,o);break;default:throw Error(te(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cx(t,e,n){me=t,_0(t)}function _0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ua;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=ua;var c=Ht;if(ua=o,(Ht=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?lp(r):l!==null?(l.return=o,me=l):lp(r);for(;s!==null;)me=s,_0(s),s=s.sibling;me=r,ua=a,Ht=c}op(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):op(t)}}function op(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&wo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ht||e.flags&512&&Ku(e)}catch(h){_t(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function ap(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function lp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Ku(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{Ku(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Rx=Math.ceil,xl=Si.ReactCurrentDispatcher,Rf=Si.ReactCurrentOwner,Pn=Si.ReactCurrentBatchConfig,qe=0,Lt=null,St=null,Ut=0,pn=0,ds=rr(0),Tt=0,Uo=null,br=0,Bl=0,Pf=0,_o=null,en=null,bf=0,Rs=1/0,di=null,yl=!1,Ju=null,$i=null,da=!1,Vi=null,Ml=0,vo=0,ed=null,Wa=-1,Xa=0;function jt(){return qe&6?xt():Wa!==-1?Wa:Wa=xt()}function Yi(t){return t.mode&1?qe&2&&Ut!==0?Ut&-Ut:dx.transition!==null?(Xa===0&&(Xa=tg()),Xa):(t=tt,t!==0||(t=window.event,t=t===void 0?16:lg(t.type)),t):1}function Wn(t,e,n,i){if(50<vo)throw vo=0,ed=null,Error(te(185));zo(t,n,i),(!(qe&2)||t!==Lt)&&(t===Lt&&(!(qe&2)&&(Bl|=n),Tt===4&&Oi(t,Ut)),an(t,i),n===1&&qe===0&&!(e.mode&1)&&(Rs=xt()+500,Fl&&sr()))}function an(t,e){var n=t.callbackNode;dv(t,e);var i=rl(t,t===Lt?Ut:0);if(i===0)n!==null&&_h(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_h(n),e===1)t.tag===0?ux(cp.bind(null,t)):Cg(cp.bind(null,t)),ox(function(){!(qe&6)&&sr()}),n=null;else{switch(ng(i)){case 1:n=tf;break;case 4:n=Jm;break;case 16:n=il;break;case 536870912:n=eg;break;default:n=il}n=T0(n,v0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v0(t,e){if(Wa=-1,Xa=0,qe&6)throw Error(te(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=rl(t,t===Lt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sl(t,i);else{e=i;var r=qe;qe|=2;var s=y0();(Lt!==t||Ut!==e)&&(di=null,Rs=xt()+500,Tr(t,e));do try{Lx();break}catch(a){x0(t,a)}while(!0);mf(),xl.current=s,qe=r,St!==null?e=0:(Lt=null,Ut=0,e=Tt)}if(e!==0){if(e===2&&(r=Cu(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=Uo,Tr(t,0),Oi(t,i),an(t,xt()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Px(r)&&(e=Sl(t,i),e===2&&(s=Cu(t),s!==0&&(i=s,e=td(t,s))),e===1))throw n=Uo,Tr(t,0),Oi(t,i),an(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:mr(t,en,di);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=bf+500-xt(),10<e)){if(rl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uu(mr.bind(null,t,en,di),e);break}mr(t,en,di);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Gn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Rx(i/1960))-i,10<i){t.timeoutHandle=Uu(mr.bind(null,t,en,di),i);break}mr(t,en,di);break;case 5:mr(t,en,di);break;default:throw Error(te(329))}}}return an(t,xt()),t.callbackNode===n?v0.bind(null,t):null}function td(t,e){var n=_o;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=en,en=n,e!==null&&nd(e)),t}function nd(t){en===null?en=t:en.push.apply(en,t)}function Px(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~Pf,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function cp(t){if(qe&6)throw Error(te(327));vs();var e=rl(t,0);if(!(e&1))return an(t,xt()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var i=Cu(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=Uo,Tr(t,0),Oi(t,e),an(t,xt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,en,di),an(t,xt()),null}function Lf(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Rs=xt()+500,Fl&&sr())}}function Lr(t){Vi!==null&&Vi.tag===0&&!(qe&6)&&vs();var e=qe;qe|=1;var n=Pn.transition,i=tt;try{if(Pn.transition=null,tt=1,t)return t()}finally{tt=i,Pn.transition=n,qe=e,!(qe&6)&&sr()}}function If(){pn=ds.current,dt(ds)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(ff(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cl();break;case 3:As(),dt(sn),dt(Gt),Mf();break;case 5:yf(i);break;case 4:As();break;case 13:dt(ht);break;case 19:dt(ht);break;case 10:gf(i.type._context);break;case 22:case 23:If()}n=n.return}if(Lt=t,St=t=Ki(t.current,null),Ut=pn=e,Tt=0,Uo=null,Pf=Bl=br=0,en=_o=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function x0(t,e){do{var n=St;try{if(mf(),Va.current=vl,_l){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Pr=0,bt=wt=pt=null,mo=!1,Io=0,Rf.current=null,n===null||n.return===null){Tt=1,Uo=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Kh(o);if(p!==null){p.flags&=-257,Zh(p,o,a,s,e),p.mode&1&&Yh(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Yh(s,c,e),Df();break e}l=Error(te(426))}}else if(ft&&a.mode&1){var m=Kh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Zh(m,o,a,s,e),hf(Cs(l,a));break e}}s=l=Cs(l,a),Tt!==4&&(Tt=2),_o===null?_o=[s]:_o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=n0(s,l,e);Gh(s,d);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&($i===null||!$i.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=i0(s,a,e);Gh(s,M);break e}}s=s.return}while(s!==null)}S0(n)}catch(R){e=R,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function y0(){var t=xl.current;return xl.current=vl,t===null?vl:t}function Df(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Lt===null||!(br&268435455)&&!(Bl&268435455)||Oi(Lt,Ut)}function Sl(t,e){var n=qe;qe|=2;var i=y0();(Lt!==t||Ut!==e)&&(di=null,Tr(t,e));do try{bx();break}catch(r){x0(t,r)}while(!0);if(mf(),qe=n,xl.current=i,St!==null)throw Error(te(261));return Lt=null,Ut=0,Tt}function bx(){for(;St!==null;)M0(St)}function Lx(){for(;St!==null&&!nv();)M0(St)}function M0(t){var e=w0(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?S0(t):St=e,Rf.current=null}function S0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,St=null;return}}else if(n=Ex(n,e,pn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Tt===0&&(Tt=5)}function mr(t,e,n){var i=tt,r=Pn.transition;try{Pn.transition=null,tt=1,Ix(t,e,n,i)}finally{Pn.transition=r,tt=i}return null}function Ix(t,e,n,i){do vs();while(Vi!==null);if(qe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fv(t,s),t===Lt&&(St=Lt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||da||(da=!0,T0(il,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=tt;tt=1;var a=qe;qe|=4,Rf.current=null,Ax(t,n),g0(n,t),Qv(Du),sl=!!Iu,Du=Iu=null,t.current=n,Cx(n),iv(),qe=a,tt=o,Pn.transition=s}else t.current=n;if(da&&(da=!1,Vi=t,Ml=r),s=t.pendingLanes,s===0&&($i=null),ov(n.stateNode),an(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yl)throw yl=!1,t=Ju,Ju=null,t;return Ml&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===ed?vo++:(vo=0,ed=t):vo=0,sr(),null}function vs(){if(Vi!==null){var t=ng(Ml),e=Pn.transition,n=tt;try{if(Pn.transition=null,tt=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,Ml=0,qe&6)throw Error(te(331));var r=qe;for(qe|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:go(8,u,s)}var f=u.child;if(f!==null)f.return=u,me=f;else for(;me!==null;){u=me;var h=u.sibling,p=u.return;if(h0(u),u===c){me=null;break}if(h!==null){h.return=p,me=h;break}me=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,me=d;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zl(9,a)}}catch(R){_t(a,a.return,R)}if(a===o){me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,me=M;break e}me=a.return}}if(qe=r,sr(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(Ll,t)}catch{}i=!0}return i}finally{tt=n,Pn.transition=e}}return!1}function up(t,e,n){e=Cs(n,e),e=n0(t,e,1),t=qi(t,e,1),e=jt(),t!==null&&(zo(t,1,e),an(t,e))}function _t(t,e,n){if(t.tag===3)up(t,t,n);else for(;e!==null;){if(e.tag===3){up(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($i===null||!$i.has(i))){t=Cs(n,t),t=i0(e,t,1),e=qi(e,t,1),t=jt(),e!==null&&(zo(e,1,t),an(e,t));break}}e=e.return}}function Dx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ut&n)===n&&(Tt===4||Tt===3&&(Ut&130023424)===Ut&&500>xt()-bf?Tr(t,0):Pf|=n),an(t,e)}function E0(t,e){e===0&&(t.mode&1?(e=ta,ta<<=1,!(ta&130023424)&&(ta=4194304)):e=1);var n=jt();t=xi(t,e),t!==null&&(zo(t,e,n),an(t,n))}function Nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E0(t,n)}function Ux(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),E0(t,n)}var w0;w0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,Sx(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ft&&e.flags&1048576&&Rg(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ga(t,e),t=e.pendingProps;var r=Es(e,Gt.current);_s(e,n),r=Ef(null,e,i,t,r,n);var s=wf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,ul(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vf(e),r.updater=kl,e.stateNode=r,r._reactInternals=e,Hu(e,i,t,n),e=Xu(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&df(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ga(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ox(i),t=On(i,t),r){case 0:e=Wu(null,e,i,t,n);break e;case 1:e=ep(null,e,i,t,n);break e;case 11:e=Qh(null,e,i,t,n);break e;case 14:e=Jh(null,e,i,On(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Wu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),ep(t,e,i,r,n);case 3:e:{if(a0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ng(t,e),ml(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Cs(Error(te(423)),e),e=tp(t,e,i,n,r);break e}else if(i!==r){r=Cs(Error(te(424)),e),e=tp(t,e,i,n,r);break e}else for(gn=ji(e.stateNode.containerInfo.firstChild),_n=e,ft=!0,zn=null,n=Ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),i===r){e=yi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return Ug(e),t===null&&zu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Nu(i,r)?o=null:s!==null&&Nu(i,s)&&(e.flags|=32),o0(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&zu(e),null;case 13:return l0(t,e,n);case 4:return xf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Qh(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(hl,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!sn.current){e=yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=bn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),Jh(t,e,i,r,n);case 15:return r0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Ga(t,e),e.tag=1,on(i)?(t=!0,ul(e)):t=!1,_s(e,n),t0(e,i,r),Hu(e,i,r,n),Xu(null,e,i,!0,t,n);case 19:return c0(t,e,n);case 22:return s0(t,e,n)}throw Error(te(156,e.tag))};function T0(t,e){return Qm(t,e)}function Fx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new Fx(t,e,n,i)}function Nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ox(t){if(typeof t=="function")return Nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qd)return 11;if(t===Jd)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ja(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Nf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return Ar(n.children,r,s,e);case Zd:o=8,r|=8;break;case fu:return t=Rn(12,n,e,r|2),t.elementType=fu,t.lanes=s,t;case hu:return t=Rn(13,n,e,r),t.elementType=hu,t.lanes=s,t;case pu:return t=Rn(19,n,e,r),t.elementType=pu,t.lanes=s,t;case Um:return Vl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dm:o=10;break e;case Nm:o=9;break e;case Qd:o=11;break e;case Jd:o=14;break e;case Ni:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ar(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Vl(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Um,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Pc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Uf(t,e,n,i,r,s,o,a,l){return t=new kx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(s),t}function zx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A0(t){if(!t)return er;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(on(n))return Ag(t,n,e)}return e}function C0(t,e,n,i,r,s,o,a,l){return t=Uf(n,i,!0,t,r,s,o,a,l),t.context=A0(null),n=t.current,i=jt(),r=Yi(n),s=gi(i,r),s.callback=e??null,qi(n,s,r),t.current.lanes=r,zo(t,r,i),an(t,i),t}function Hl(t,e,n,i){var r=e.current,s=jt(),o=Yi(r);return n=A0(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,o),t!==null&&(Wn(t,r,o,s),Ba(t,r,o)),o}function El(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ff(t,e){dp(t,e),(t=t.alternate)&&dp(t,e)}function Bx(){return null}var R0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}Gl.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Hl(t,e,null,null)};Gl.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){Hl(null,t,null,null)}),e[vi]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fi.length&&e!==0&&e<Fi[n].priority;n++);Fi.splice(n,0,t),n===0&&ag(t)}};function kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fp(){}function Vx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=El(o);s.call(c)}}var o=C0(e,i,t,0,null,!1,!1,"",fp);return t._reactRootContainer=o,t[vi]=o.current,Co(t.nodeType===8?t.parentNode:t),Lr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=El(l);a.call(c)}}var l=Uf(t,0,!1,null,null,!1,!1,"",fp);return t._reactRootContainer=l,t[vi]=l.current,Co(t.nodeType===8?t.parentNode:t),Lr(function(){Hl(e,l,n,i)}),l}function Xl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=El(o);a.call(l)}}Hl(e,o,t,r)}else o=Vx(n,e,t,r,i);return El(o)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(nf(e,n|1),an(e,xt()),!(qe&6)&&(Rs=xt()+500,sr()))}break;case 13:Lr(function(){var i=xi(t,1);if(i!==null){var r=jt();Wn(i,t,1,r)}}),Ff(t,1)}};rf=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=jt();Wn(e,t,134217728,n)}Ff(t,134217728)}};rg=function(t){if(t.tag===13){var e=Yi(t),n=xi(t,e);if(n!==null){var i=jt();Wn(n,t,e,i)}Ff(t,e)}};sg=function(){return tt};og=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};wu=function(t,e,n){switch(e){case"input":if(_u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ul(i);if(!r)throw Error(te(90));Om(i),_u(i,r)}}}break;case"textarea":zm(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};jm=Lf;qm=Lr;var Hx={usingClientEntryPoint:!1,Events:[Vo,ss,Ul,Wm,Xm,Lf]},qs={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gx={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Km(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{Ll=fa.inject(Gx),ti=fa}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(e))throw Error(te(200));return zx(t,e,null,n)};xn.createRoot=function(t,e){if(!kf(t))throw Error(te(299));var n=!1,i="",r=R0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Uf(t,1,!1,null,null,n,!1,i,r),t[vi]=e.current,Co(t.nodeType===8?t.parentNode:t),new Of(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Km(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Lr(t)};xn.hydrate=function(t,e,n){if(!Wl(e))throw Error(te(200));return Xl(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!kf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=R0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C0(e,null,t,1,n??null,r,!1,s,o),t[vi]=e.current,Co(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gl(e)};xn.render=function(t,e,n){if(!Wl(e))throw Error(te(200));return Xl(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(te(40));return t._reactRootContainer?(Lr(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1};xn.unstable_batchedUpdates=Lf;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Xl(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function P0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P0)}catch(t){console.error(t)}}P0(),Pm.exports=xn;var Wx=Pm.exports,hp=Wx;uu.createRoot=hp.createRoot,uu.hydrateRoot=hp.hydrateRoot;const Ti={minX:-140,maxX:140,minZ:-140,maxZ:140},Hi=[-90,-30,30,90],An=14,Ai=3.5,Ci={MISSION_CAR_SPAWN:{x:-45,z:-32},HARBOR_SAFEHOUSE:{x:90,z:90}};function Xx(){const t=[];let e=1;t.push({id:"bld_police",name:"Metro Police Precinct",x:48,z:-75,width:24,depth:26,height:24,color:"#1e293b",roofColor:"#0f172a",isRestrictedZone:!0}),t.push({id:"bld_bank",name:"City Central Tower",x:-48,z:-48,width:24,depth:24,height:68,color:"#334155",roofColor:"#1e293b",isMissionTarget:!1}),t.push({id:"bld_safehouse",name:"Harbor Safehouse Depot",x:75,z:75,width:32,depth:24,height:18,color:"#475569",roofColor:"#334155",isMissionTarget:!0}),t.push({id:"bld_hospital",name:"City General Hospital",x:-75,z:48,width:26,depth:24,height:32,color:"#f8fafc",roofColor:"#e2e8f0"});const n=[-120,-60,0,60,120],i=[{wall:"#1e293b",roof:"#0f172a"},{wall:"#334155",roof:"#1e293b"},{wall:"#475569",roof:"#334155"},{wall:"#64748b",roof:"#475569"},{wall:"#78716c",roof:"#44403c"},{wall:"#b91c1c",roof:"#7f1d1d"},{wall:"#0f766e",roof:"#115e59"},{wall:"#1d4ed8",roof:"#1e40af"},{wall:"#d97706",roof:"#92400e"},{wall:"#374151",roof:"#1f2937"}];return n.forEach((r,s)=>{n.forEach((o,a)=>{if(r===0&&o===0)return;if(r===60&&o===-60||r===-60&&o===-60||r===60&&o===60||r===-60&&o===60){const c=r===60?75:-75,u=o===-60?-48:o===60?48:-75;t.push({id:`bld_sub_${e++}`,x:c,z:u,width:18,depth:18,height:22+(s*7+a*11)%20,color:i[(s+a)%i.length].wall,roofColor:i[(s+a)%i.length].roof});return}if(((s+a)%2===0?2:1)===1){const c=28+(s*13+a*17)%45;t.push({id:`bld_${e++}`,x:r,z:o,width:32,depth:32,height:c,color:i[(s*3+a*5)%i.length].wall,roofColor:i[(s*3+a*5)%i.length].roof})}else{const c=(s+a)%2===0,u=20+(s*9+a*3)%40,f=24+(s*5+a*7)%36;c?(t.push({id:`bld_${e++}`,x:r-10,z:o,width:16,depth:32,height:u,color:i[(s*2+a)%i.length].wall,roofColor:i[(s*2+a)%i.length].roof}),t.push({id:`bld_${e++}`,x:r+10,z:o,width:16,depth:32,height:f,color:i[(s+a*4)%i.length].wall,roofColor:i[(s+a*4)%i.length].roof})):(t.push({id:`bld_${e++}`,x:r,z:o-10,width:32,depth:16,height:u,color:i[(s*3+a)%i.length].wall,roofColor:i[(s*3+a)%i.length].roof}),t.push({id:`bld_${e++}`,x:r,z:o+10,width:32,depth:16,height:f,color:i[(s+a*2)%i.length].wall,roofColor:i[(s+a*2)%i.length].roof}))}})}),t}function jx(){const t=[];let e=1;Hi.forEach(i=>{for(let r=-130;r<=130;r+=30){if(Math.abs(r)>135)return;t.push({id:`prop_light_${e++}`,type:"lightpole",x:i+An/2+1.2,z:r,rotation:-Math.PI/2,radius:.5}),t.push({id:`prop_light_${e++}`,type:"lightpole",x:i-An/2-1.2,z:r,rotation:Math.PI/2,radius:.5})}});for(let i=-16;i<=16;i+=8)for(let r=-16;r<=16;r+=8)Math.abs(i)<3||Math.abs(r)<3||t.push({id:`prop_tree_${e++}`,type:"tree",x:i+Math.sin(e)*1.5,z:r+Math.cos(e)*1.5,rotation:e*1.3%(Math.PI*2),radius:1.2});const n=[-120,-60,60,120];return n.forEach(i=>{n.forEach(r=>{t.push({id:`prop_hydrant_${e++}`,type:"hydrant",x:i+18,z:r+18,rotation:0,radius:.4}),t.push({id:`prop_dumpster_${e++}`,type:"dumpster",x:i-19,z:r-18,rotation:Math.PI/2,radius:1})})}),t}function qx(){const t={},e=Hi,n=3.5;return e.forEach(i=>{for(let r=-130;r<=130;r+=20){const s=`wp_sb_${i}_${r}`,o=r+20,a=o<=130?[`wp_sb_${i}_${o}`]:[`wp_nb_${i}_130`];t[s]={id:s,x:i-n,z:r,next:a};const l=`wp_nb_${i}_${r}`,c=r-20,u=c>=-130?[`wp_nb_${i}_${c}`]:[`wp_sb_${i}_-130`];t[l]={id:l,x:i+n,z:r,next:u}}}),e.forEach(i=>{for(let r=-130;r<=130;r+=20){const s=`wp_eb_${r}_${i}`,o=r+20,a=o<=130?[`wp_eb_${o}_${i}`]:[`wp_wb_130_${i}`];t[s]={id:s,x:r,z:i+n,next:a};const l=`wp_wb_${r}_${i}`,c=r-20,u=c>=-130?[`wp_wb_${c}_${i}`]:[`wp_eb_-130_${i}`];t[l]={id:l,x:r,z:i-n,next:u}}}),e.forEach(i=>{e.forEach(r=>{const s=`wp_sb_${i}_${r-10}`;if(t[s]){const a=`wp_wb_${i-10}_${r}`;t[a]&&!t[s].next.includes(a)&&t[s].next.push(a)}const o=`wp_nb_${i}_${r+10}`;if(t[o]){const a=`wp_eb_${i+10}_${r}`;t[a]&&!t[o].next.includes(a)&&t[o].next.push(a)}})}),t}function $x(){const t=[],e={sedan:{width:2.1,length:4.5,height:1.45,wheelbase:2.8,maxSpeed:27,acceleration:15,brakeForce:25,turnSpeed:2.4,reverseSpeed:-10,friction:4},sports:{width:2.2,length:4.6,height:1.25,wheelbase:2.7,maxSpeed:38,acceleration:24,brakeForce:32,turnSpeed:2.8,reverseSpeed:-14,friction:3.5},suv:{width:2.3,length:4.8,height:1.8,wheelbase:3,maxSpeed:24,acceleration:12,brakeForce:22,turnSpeed:2,reverseSpeed:-9,friction:4.5},police:{width:2.2,length:4.7,height:1.55,wheelbase:2.9,maxSpeed:33,acceleration:20,brakeForce:30,turnSpeed:2.6,reverseSpeed:-12,friction:3.8},taxi:{width:2.1,length:4.5,height:1.5,wheelbase:2.8,maxSpeed:26,acceleration:14,brakeForce:24,turnSpeed:2.3,reverseSpeed:-10,friction:4},truck:{width:2.6,length:6.2,height:2.4,wheelbase:4,maxSpeed:20,acceleration:9,brakeForce:20,turnSpeed:1.6,reverseSpeed:-7,friction:5}};return t.push({id:"veh_mission_golden",type:"sports",name:"Apex Golden Hypercar",x:-45,y:0,z:-32,rotation:Math.PI/2,speed:0,steeringAngle:0,targetSteering:0,...e.sports,color:"#eab308",accentColor:"#06b6d4",isPolice:!1,sirenActive:!1,sirenTimer:0,driver:null,health:100,wheelRotation:0,isParked:!0,isMissionCar:!0,isBraking:!1,collisionCooldown:0}),[{x:-22,z:-26,rot:0,type:"sedan",color:"#ef4444",name:"Crimson Cruiser"},{x:15,z:-32,rot:0,type:"suv",color:"#3b82f6",name:"Cobalt Trek"},{x:-45,z:28,rot:Math.PI,type:"sedan",color:"#10b981",name:"Emerald Sedan"},{x:45,z:28,rot:0,type:"sports",color:"#8b5cf6",name:"Violet Spectre"},{x:-75,z:-88,rot:Math.PI/2,type:"taxi",color:"#facc15",name:"Metro Cab"}].forEach((r,s)=>{t.push({id:`veh_parked_${s+1}`,type:r.type,name:r.name,x:r.x,y:0,z:r.z,rotation:r.rot,speed:0,steeringAngle:0,targetSteering:0,...e[r.type],color:r.color,isPolice:!1,sirenActive:!1,sirenTimer:0,driver:null,health:100,wheelRotation:0,isParked:!0,isBraking:!1,collisionCooldown:0})}),t.push({id:"veh_police_station",type:"police",name:"Police Interceptor Unit 1",x:48,y:0,z:-88,rotation:0,speed:0,steeringAngle:0,targetSteering:0,...e.police,color:"#0f172a",accentColor:"#f8fafc",isPolice:!0,sirenActive:!1,sirenTimer:0,driver:"police",health:100,wheelRotation:0,isParked:!0,isBraking:!1,collisionCooldown:0}),t.push({id:"veh_police_patrol",type:"police",name:"Police Patrol Unit 2",x:33.5,y:0,z:-40,rotation:Math.PI,speed:12,steeringAngle:0,targetSteering:0,...e.police,color:"#0f172a",accentColor:"#f8fafc",isPolice:!0,sirenActive:!1,sirenTimer:0,driver:"police",health:100,wheelRotation:0,isParked:!1,isBraking:!1,collisionCooldown:0,currentWaypointId:"wp_nb_30_-40"}),[{id:"veh_trf_1",type:"sedan",color:"#f97316",x:-93.5,z:-60,rot:0,wp:"wp_sb_-90_-60"},{id:"veh_trf_2",type:"taxi",color:"#eab308",x:-33.5,z:20,rot:0,wp:"wp_sb_-30_20"},{id:"veh_trf_3",type:"suv",color:"#64748b",x:26.5,z:40,rot:0,wp:"wp_sb_30_40"},{id:"veh_trf_4",type:"sedan",color:"#ec4899",x:93.5,z:-80,rot:Math.PI,wp:"wp_nb_90_-80"},{id:"veh_trf_5",type:"truck",color:"#0284c7",x:-40,z:-26.5,rot:Math.PI/2,wp:"wp_eb_-40_-30"},{id:"veh_trf_6",type:"sedan",color:"#14b8a6",x:50,z:33.5,rot:-Math.PI/2,wp:"wp_wb_50_30"},{id:"veh_trf_7",type:"sports",color:"#dc2626",x:-80,z:93.5,rot:-Math.PI/2,wp:"wp_wb_-80_90"},{id:"veh_trf_8",type:"taxi",color:"#eab308",x:-26.5,z:-80,rot:Math.PI,wp:"wp_nb_-30_-80"}].forEach(r=>{t.push({id:r.id,type:r.type,name:`City ${r.type.toUpperCase()}`,x:r.x,y:0,z:r.z,rotation:r.rot,speed:10+Math.random()*5,steeringAngle:0,targetSteering:0,...e[r.type],color:r.color,isPolice:!1,sirenActive:!1,sirenTimer:0,driver:"npc",health:100,wheelRotation:0,isParked:!1,isBraking:!1,collisionCooldown:0,currentWaypointId:r.wp})}),t}function Yx(){const t=[],e=["#f43f5e","#3b82f6","#10b981","#f59e0b","#8b5cf6","#ec4899","#06b6d4","#e2e8f0"],n=["#1e293b","#334155","#475569","#1f2937","#0f172a"],i=["#fcd34d","#fbcfe8","#fed7aa","#d97706","#92400e"],r=[[{x:-18,z:-18},{x:18,z:-18},{x:18,z:18},{x:-18,z:18}],[{x:-48,z:-18},{x:-22,z:-18},{x:-22,z:-42},{x:-48,z:-42}],[{x:38,z:-18},{x:82,z:-18},{x:82,z:18},{x:38,z:18}],[{x:-82,z:38},{x:-38,z:38},{x:-38,z:82},{x:-82,z:82}],[{x:38,z:-82},{x:82,z:-82},{x:82,z:-38},{x:38,z:-38}]];let s=1;return r.forEach((o,a)=>{for(let l=0;l<4;l++){const c=l%o.length,u=o[c],f=o[(c+1)%o.length],h=Math.atan2(f.x-u.x,f.z-u.z);t.push({id:`ped_${s++}`,x:u.x+(Math.random()-.5)*2,y:0,z:u.z+(Math.random()-.5)*2,rotation:h,speed:2.2+Math.random()*.8,walkSpeed:2.4+Math.random()*.8,state:"walking",targetX:f.x,targetZ:f.z,waypointIndex:(c+1)%o.length,route:o,waitTime:0,fleeTimer:0,knockedTimer:0,legPhase:Math.random()*Math.PI*2,shirtColor:e[(s+a)%e.length],pantsColor:n[s%n.length],skinColor:i[s%i.length]})}}),t}function b0(t,e,n,i,r,s,o){const a=Math.max(i,Math.min(t,r)),l=Math.max(s,Math.min(e,o)),c=t-a,u=e-l,f=c*c+u*u;if(f<n*n){const h=Math.sqrt(f);if(h>1e-4)return{collided:!0,normalX:c/h,normalZ:u/h,depth:n-h};{const p=t-i,_=r-t,x=e-s,m=o-e,d=Math.min(p,_,x,m);return d===p?{collided:!0,normalX:-1,normalZ:0,depth:n+p}:d===_?{collided:!0,normalX:1,normalZ:0,depth:n+_}:d===x?{collided:!0,normalX:0,normalZ:-1,depth:n+x}:{collided:!0,normalX:0,normalZ:1,depth:n+m}}}return{collided:!1,normalX:0,normalZ:0,depth:0}}function Kx(t,e){for(const i of e){const r=i.x-i.width/2,s=i.x+i.width/2,o=i.z-i.depth/2,a=i.z+i.depth/2;if(t.x+.55<r||t.x-.55>s||t.z+.55<o||t.z-.55>a)continue;const l=b0(t.x,t.z,.55,r,s,o,a);if(l.collided){t.x+=l.normalX*l.depth,t.z+=l.normalZ*l.depth;const c=t.vx*l.normalX+t.vz*l.normalZ;c<0&&(t.vx-=c*l.normalX,t.vz-=c*l.normalZ)}}}function Zx(t,e){for(const i of e){const r=t.x-i.x,s=t.z-i.z,o=r*r+s*s,a=.55+i.radius;if(o<a*a){const l=Math.sqrt(o);if(l>1e-4){const c=r/l,u=s/l,f=a-l;t.x+=c*f,t.z+=u*f}}}}function Fo(t){const e=Math.sin(t.rotation),n=Math.cos(t.rotation),i=t.length*.32,r=t.width*.48;return[{x:t.x-e*i,z:t.z-n*i,radius:r},{x:t.x,z:t.z,radius:r},{x:t.x+e*i,z:t.z+n*i,radius:r}]}function Qx(t,e){if(t.state==="driving")return;const n=.55;for(const i of e){const r=Fo(i);for(const s of r){const o=t.x-s.x,a=t.z-s.z,l=o*o+a*a,c=n+s.radius;if(l<c*c){const u=Math.sqrt(l);if(u>1e-4){const f=o/u,h=a/u,p=c-u;t.x+=f*p,t.z+=h*p}}}}}function Jx(t,e,n){const i=Fo(t);for(const r of e){const s=r.x-r.width/2,o=r.x+r.width/2,a=r.z-r.depth/2,l=r.z+r.depth/2,c=t.length*.6;if(!(t.x+c<s||t.x-c>o||t.z+c<a||t.z-c>l))for(const u of i){const f=b0(u.x,u.z,u.radius,s,o,a,l);if(f.collided){t.x+=f.normalX*f.depth,t.z+=f.normalZ*f.depth;const h=Math.sin(t.rotation),p=Math.cos(t.rotation);h*f.normalX+p*f.normalZ;const _=Math.abs(t.speed);_>2&&t.collisionCooldown<=0?(t.collisionCooldown=.3,t.speed=-t.speed*.35,n&&n({vehicleId:t.id,impactSpeed:_,hitX:u.x,hitZ:u.z,isBuilding:!0,isVehicle:!1})):t.speed*=.6;break}}}}function ey(t,e){for(let n=0;n<t.length;n++){const i=t[n],r=Fo(i);for(let s=n+1;s<t.length;s++){const o=t[s],a=Fo(o),l=i.x-o.x,c=i.z-o.z,u=(i.length+o.length)*.6;if(l*l+c*c>u*u)continue;let f=!1,h=0,p=0,_=0;for(const x of r)for(const m of a){const d=x.x-m.x,g=x.z-m.z,v=d*d+g*g,M=x.radius+m.radius;if(v<M*M){const R=Math.sqrt(v);if(R>1e-4){f=!0;const A=M-R;A>_&&(_=A,h=d/R,p=g/R)}}}if(f&&_>0){const x=_*.55;(!i.isParked||i.driver!==null)&&(i.x+=h*x,i.z+=p*x),(!o.isParked||o.driver!==null)&&(o.x-=h*x,o.z-=p*x);const m=Math.abs(i.speed-o.speed);m>2.5&&(i.collisionCooldown<=0||o.collisionCooldown<=0)&&(i.collisionCooldown=.3,o.collisionCooldown=.3,i.speed=-i.speed*.3,o.speed=-o.speed*.3,e&&e({vehicleId:i.id,impactSpeed:m,hitX:(i.x+o.x)/2,hitZ:(i.z+o.z)/2,isBuilding:!1,isVehicle:!0}))}}}}function ty(t,e,n){for(const r of t){if(Math.abs(r.speed)<2)continue;const s=Fo(r);for(const o of e)if(o.state!=="knocked")for(const a of s){const l=o.x-a.x,c=o.z-a.z,u=l*l+c*c,f=.5+a.radius;if(u<f*f){o.state="knocked",o.knockedTimer=4,o.fleeTimer=0;const h=Math.sin(r.rotation)*4,p=Math.cos(r.rotation)*4;o.x+=h,o.z+=p,n&&n({pedestrianId:o.id,vehicleId:r.id,isPlayerVehicle:r.driver==="player",hitX:o.x,hitZ:o.z});break}}}}function ny(t,e,n,i){for(const r of t){if(r.state==="knocked"){r.knockedTimer-=i,r.knockedTimer<=0&&(r.state="walking",r.speed=r.walkSpeed);continue}let s=0,o=0,a=!1;for(const l of n)if(Math.abs(l.speed)>5){const c=r.x-l.x,u=r.z-l.z;if(c*c+u*u<100){a=!0,s=l.x,o=l.z;break}}if(a){r.state="fleeing",r.fleeTimer=3;const l=r.x-s,c=r.z-o;r.rotation=Math.atan2(l,c),r.speed=4.8}else r.state==="fleeing"&&(r.fleeTimer-=i,r.fleeTimer<=0&&(r.state="walking",r.speed=r.walkSpeed));if(r.state==="waiting"){if(r.waitTime-=i,r.waitTime<=0){r.state="walking",r.speed=r.walkSpeed,r.waypointIndex=(r.waypointIndex+1)%r.route.length;const l=r.route[r.waypointIndex];r.targetX=l.x,r.targetZ=l.z}continue}if(r.state==="walking"||r.state==="fleeing"){if(r.state==="walking"){const c=r.targetX-r.x,u=r.targetZ-r.z;if(Math.sqrt(c*c+u*u)<1.2)if(Math.random()<.28){r.state="waiting",r.waitTime=2+Math.random()*2.5;continue}else{r.waypointIndex=(r.waypointIndex+1)%r.route.length;const h=r.route[r.waypointIndex];r.targetX=h.x,r.targetZ=h.z}else{let p=Math.atan2(c,u)-r.rotation;for(;p<-Math.PI;)p+=Math.PI*2;for(;p>Math.PI;)p-=Math.PI*2;r.rotation+=p*Math.min(i*6,1)}}const l=r.speed*i;r.x+=Math.sin(r.rotation)*l,r.z+=Math.cos(r.rotation)*l,r.legPhase+=r.speed*i*4.5}}}function iy(t,e,n,i){for(const r of t){if(r.driver!=="npc"||r.isParked)continue;if(!r.currentWaypointId||!e[r.currentWaypointId]){let u="",f=1/0;for(const h in e){const p=e[h],_=(r.x-p.x)**2+(r.z-p.z)**2;_<f&&(f=_,u=h)}r.currentWaypointId=u||void 0}if(r.currentWaypointId&&e[r.currentWaypointId]){const u=e[r.currentWaypointId],f=u.x-r.x,h=u.z-r.z;if(Math.sqrt(f*f+h*h)<5&&u.next&&u.next.length>0){const m=Math.floor(Math.random()*u.next.length);r.currentWaypointId=u.next[m]}let x=Math.atan2(f,h)-r.rotation;for(;x<-Math.PI;)x+=Math.PI*2;for(;x>Math.PI;)x-=Math.PI*2;r.targetSteering=Math.max(-.55,Math.min(.55,x*1.6))}let s=!1,o=14;const a=Math.sin(r.rotation),l=Math.cos(r.rotation);for(const u of t){if(u.id===r.id)continue;const f=u.x-r.x,h=u.z-r.z,p=f*a+h*l,_=Math.abs(f*-l+h*a);p>.5&&p<11&&_<3&&(s=!0,o=Math.min(o,Math.max(0,u.speed-2)))}if(n.state==="on_foot"){const u=n.x-r.x,f=n.z-r.z,h=u*a+f*l,p=Math.abs(u*-l+f*a);h>.5&&h<9&&p<2.5&&(s=!0,o=0)}s||r.speed>o?(r.speed=Math.max(0,r.speed-r.brakeForce*.8*i),r.isBraking=!0):(r.speed=Math.min(o,r.speed+r.acceleration*.7*i),r.isBraking=!1),r.steeringAngle+=(r.targetSteering-r.steeringAngle)*Math.min(i*8,1);const c=r.speed/r.wheelbase*Math.tan(r.steeringAngle);r.rotation+=c*i,r.x+=Math.sin(r.rotation)*r.speed*i,r.z+=Math.cos(r.rotation)*r.speed*i,r.wheelRotation+=r.speed/.4*i,r.collisionCooldown>0&&(r.collisionCooldown-=i)}}function ry(t,e,n,i,r,s){const o=e.state==="driving"&&n?n.x:e.x,a=e.state==="driving"&&n?n.z:e.z,l=e.state==="driving"&&n?Math.abs(n.speed):Math.sqrt(e.vx*e.vx+e.vz*e.vz);if(i.level<=0){for(const u of t)u.sirenActive=!1,!u.isParked&&(u.speed=Math.max(0,u.speed-u.friction*r));return}let c=1/0;for(const u of t){u.isParked=!1,u.sirenActive=!0,u.sirenTimer+=r*10;const f=o-u.x,h=a-u.z,p=Math.sqrt(f*f+h*h);p<c&&(c=p);let x=Math.atan2(f,h)-u.rotation;for(;x<-Math.PI;)x+=Math.PI*2;for(;x>Math.PI;)x-=Math.PI*2;u.targetSteering=Math.max(-.6,Math.min(.6,x*2)),u.steeringAngle+=(u.targetSteering-u.steeringAngle)*Math.min(r*10,1);const m=26+i.level*4;u.speed<m&&(u.speed+=u.acceleration*r);const d=u.speed/u.wheelbase*Math.tan(u.steeringAngle);u.rotation+=d*r,u.x+=Math.sin(u.rotation)*u.speed*r,u.z+=Math.cos(u.rotation)*u.speed*r,u.wheelRotation+=u.speed/.4*r,u.collisionCooldown>0&&(u.collisionCooldown-=r),p<4.5&&l<2?(i.spottedTimer+=r,i.spottedTimer>3.2&&s&&s()):i.spottedTimer=Math.max(0,i.spottedTimer-r*.5)}c>60?(i.isEvading=!0,i.evadeTimer-=r,i.evadeTimer<=0&&(i.level=Math.max(0,i.level-1),i.stars=i.level,i.evadeTimer=i.maxEvadeTimer,i.level===0&&(i.isEvading=!1,i.offenseText="Escaped!"))):(i.isEvading=!1,i.evadeTimer=i.maxEvadeTimer)}class sy{constructor(){we(this,"ctx",null);we(this,"isMuted",!1);we(this,"engineOsc",null);we(this,"engineGain",null);we(this,"engineFilter",null);we(this,"sirenOsc",null);we(this,"sirenGain",null);we(this,"isEngineRunning",!1);we(this,"isSirenRunning",!1);we(this,"lastFootstepTime",0)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&(this.stopEngine(),this.stopSiren()),!this.isMuted}isSoundEnabled(){return!this.isMuted}startEngine(){if(!(this.isMuted||this.isEngineRunning)&&(this.initContext(),!!this.ctx))try{this.engineOsc=this.ctx.createOscillator(),this.engineGain=this.ctx.createGain(),this.engineFilter=this.ctx.createBiquadFilter(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.setValueAtTime(55,this.ctx.currentTime),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(260,this.ctx.currentTime),this.engineGain.gain.setValueAtTime(.08,this.ctx.currentTime),this.engineOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start(),this.isEngineRunning=!0}catch{}}updateEngine(e,n,i){if(this.isMuted||!this.isEngineRunning||!this.engineOsc||!this.engineFilter||!this.engineGain||!this.ctx)return;const r=Math.min(Math.abs(e)/n,1),s=48+r*180+(i?25:0),o=220+r*750+(i?150:0),a=.05+r*.09+(i?.04:0),l=this.ctx.currentTime;this.engineOsc.frequency.setTargetAtTime(s,l,.08),this.engineFilter.frequency.setTargetAtTime(o,l,.08),this.engineGain.gain.setTargetAtTime(a,l,.08)}stopEngine(){if(this.isEngineRunning)try{this.engineOsc&&(this.engineOsc.stop(),this.engineOsc.disconnect(),this.engineOsc=null),this.isEngineRunning=!1}catch{}}startSiren(){if(!(this.isMuted||this.isSirenRunning)&&(this.initContext(),!!this.ctx))try{this.sirenOsc=this.ctx.createOscillator(),this.sirenGain=this.ctx.createGain(),this.sirenOsc.type="sine",this.sirenGain.gain.setValueAtTime(.06,this.ctx.currentTime);const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.setValueAtTime(1.8,this.ctx.currentTime),n.gain.setValueAtTime(140,this.ctx.currentTime),this.sirenOsc.frequency.setValueAtTime(780,this.ctx.currentTime),e.connect(n),n.connect(this.sirenOsc.frequency),e.start(),this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.ctx.destination),this.sirenOsc.start(),this.isSirenRunning=!0}catch{}}stopSiren(){if(this.isSirenRunning)try{this.sirenOsc&&(this.sirenOsc.stop(),this.sirenOsc.disconnect(),this.sirenOsc=null),this.isSirenRunning=!1}catch{}}playCrash(e=1){if(!this.isMuted&&(this.initContext(),!!this.ctx))try{const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(30,n+.35),r.gain.setValueAtTime(Math.min(.25*e,.4),n),r.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(r),r.connect(this.ctx.destination),i.start(n),i.stop(n+.36);const s=Math.floor(this.ctx.sampleRate*.25),o=this.ctx.createBuffer(1,s,this.ctx.sampleRate),a=o.getChannelData(0);for(let f=0;f<s;f++)a[f]=(Math.random()*2-1)*Math.exp(-f/(this.ctx.sampleRate*.06));const l=this.ctx.createBufferSource();l.buffer=o;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(900,n);const u=this.ctx.createGain();u.gain.setValueAtTime(Math.min(.3*e,.5),n),u.gain.exponentialRampToValueAtTime(.001,n+.25),l.connect(c),c.connect(u),u.connect(this.ctx.destination),l.start(n)}catch{}}playTireSkid(){if(!this.isMuted&&(this.initContext(),!!this.ctx))try{const e=this.ctx.currentTime,n=Math.floor(this.ctx.sampleRate*.15),i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*.3;const s=this.ctx.createBufferSource();s.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1400,e),o.Q.setValueAtTime(4,e);const a=this.ctx.createGain();a.gain.setValueAtTime(.08,e),a.gain.exponentialRampToValueAtTime(.001,e+.15),s.connect(o),o.connect(a),a.connect(this.ctx.destination),s.start(e)}catch{}}playFootstep(e){if(!(this.isMuted||e-this.lastFootstepTime<.32)&&(this.lastFootstepTime=e,this.initContext(),!!this.ctx))try{const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(80,n),i.frequency.exponentialRampToValueAtTime(30,n+.08),r.gain.setValueAtTime(.04,n),r.gain.exponentialRampToValueAtTime(.001,n+.08),i.connect(r),r.connect(this.ctx.destination),i.start(n),i.stop(n+.08)}catch{}}playMissionComplete(){if(!this.isMuted&&(this.initContext(),!!this.ctx))try{const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,r)=>{if(!this.ctx)return;const s=e+r*.12,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(i,s),a.gain.setValueAtTime(.18,s),a.gain.exponentialRampToValueAtTime(.001,s+.35),o.connect(a),a.connect(this.ctx.destination),o.start(s),o.stop(s+.36)})}catch{}}playHorn(){if(!this.isMuted&&(this.initContext(),!!this.ctx))try{const e=this.ctx.currentTime;[420,520].forEach(n=>{if(!this.ctx)return;const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(n,e),r.gain.setValueAtTime(.05,e),r.gain.exponentialRampToValueAtTime(.001,e+.3);const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(1200,e),i.connect(s),s.connect(r),r.connect(this.ctx.destination),i.start(e),i.stop(e+.31)})}catch{}}dispose(){this.stopEngine(),this.stopSiren(),this.ctx&&(this.ctx.close(),this.ctx=null)}}class oy{constructor(){we(this,"player");we(this,"vehicles");we(this,"pedestrians");we(this,"buildings");we(this,"props");we(this,"roadWaypoints");we(this,"wantedState");we(this,"mission");we(this,"particles",[]);we(this,"soundManager");we(this,"busted",!1);we(this,"cameraMode","follow");we(this,"nearestVehicleId",null);we(this,"nearestVehicleDist",1/0);we(this,"missionStartTime",0);this.buildings=Xx(),this.props=jx(),this.roadWaypoints=qx(),this.vehicles=$x(),this.pedestrians=Yx(),this.soundManager=new sy,this.player={x:-26,y:0,z:-26,rotation:0,vx:0,vz:0,state:"on_foot",currentVehicleId:null,walkSpeed:6.5,sprintSpeed:10.5,isSprinting:!1,legPhase:0,health:100},this.wantedState={level:0,stars:0,evadeTimer:10,maxEvadeTimer:10,isEvading:!1,spottedTimer:0,offenseText:""},this.mission=this.createInitialMission()}createInitialMission(){return{active:!0,step:"GOTO_START",title:"Project Apex: Grand Delivery",objective:"Head to the Bank Financial Plaza to locate the courier vehicle",targetX:Ci.MISSION_CAR_SPAWN.x,targetZ:Ci.MISSION_CAR_SPAWN.z,targetRadius:7,targetName:"Bank Plaza Car Park",completed:!1,failed:!1,elapsed:0,reward:25e3}}restartMission(){this.mission=this.createInitialMission(),this.busted=!1,this.wantedState.level=0,this.wantedState.stars=0,this.wantedState.isEvading=!1,this.soundManager.stopSiren();const e=this.vehicles.find(n=>n.id==="veh_mission_golden");e&&e.driver!=="player"&&(e.x=Ci.MISSION_CAR_SPAWN.x,e.z=Ci.MISSION_CAR_SPAWN.z,e.rotation=Math.PI/2,e.speed=0,e.isParked=!0)}triggerCrime(e,n=1){this.wantedState.level=Math.min(3,this.wantedState.level+n),this.wantedState.stars=this.wantedState.level,this.wantedState.isEvading=!1,this.wantedState.evadeTimer=this.wantedState.maxEvadeTimer,this.wantedState.offenseText=e,this.soundManager.startSiren()}update(e,n){const i=Math.min(e,.1);if(this.busted){n.restart&&this.restartMission();return}n.cameraToggle&&(this.cameraMode==="follow"?this.cameraMode="cinematic":this.cameraMode==="cinematic"?this.cameraMode="hood":this.cameraMode="follow"),n.toggleSound&&this.soundManager.toggleMute(),n.restart&&this.restartMission(),this.player.state==="on_foot"?this.updatePlayerOnFoot(i,n):this.updatePlayerDriving(i,n),ny(this.pedestrians,this.player,this.vehicles,i),iy(this.vehicles,this.roadWaypoints,this.player,i);const r=this.vehicles.filter(o=>o.isPolice),s=this.getPlayerVehicle();ry(r,this.player,s,this.wantedState,i,()=>{this.busted=!0,this.soundManager.stopEngine(),this.soundManager.stopSiren()}),this.checkRestrictedPrecinctZone(),this.resolveAllCollisions(i),this.updateMission(i),this.updateParticles(i),this.findNearestVehicle()}updatePlayerOnFoot(e,n){const i=n,r=i.sprint?this.player.sprintSpeed:this.player.walkSpeed;let s=0,o=0;i.forward&&(o+=1),i.backward&&(o-=1),i.left&&(s+=1),i.right&&(s-=1);const a=Math.sqrt(s*s+o*o);if(a>.001?(s/=a,o/=a,this.player.vx=s*r,this.player.vz=o*r,this.player.rotation=Math.atan2(s,o),this.player.legPhase+=r*e*4,this.player.isSprinting=i.sprint,this.soundManager.playFootstep(performance.now()/1e3)):(this.player.vx=0,this.player.vz=0,this.player.isSprinting=!1),this.player.x+=this.player.vx*e,this.player.z+=this.player.vz*e,this.player.x=Math.max(Ti.minX+2,Math.min(Ti.maxX-2,this.player.x)),this.player.z=Math.max(Ti.minZ+2,Math.min(Ti.maxZ-2,this.player.z)),n.interact&&this.nearestVehicleId&&this.nearestVehicleDist<5.8){const l=this.vehicles.find(c=>c.id===this.nearestVehicleId);l&&this.enterVehicle(l)}}updatePlayerDriving(e,n){const i=this.getPlayerVehicle();if(!i){this.player.state="on_foot";return}const r=n.forward,s=n.backward,o=n.handbrake;n.left?i.targetSteering=Math.min(.55,i.targetSteering+i.turnSpeed*e*2.5):n.right?i.targetSteering=Math.max(-.55,i.targetSteering-i.turnSpeed*e*2.5):i.targetSteering+=(0-i.targetSteering)*Math.min(e*8,1),i.steeringAngle+=(i.targetSteering-i.steeringAngle)*Math.min(e*12,1),r?(i.speed<i.maxSpeed&&(i.speed+=i.acceleration*e),i.isBraking=!1):s?i.speed>.5?(i.speed=Math.max(0,i.speed-i.brakeForce*e),i.isBraking=!0):(i.speed>i.reverseSpeed&&(i.speed-=i.acceleration*.7*e),i.isBraking=!1):(i.speed>0?i.speed=Math.max(0,i.speed-i.friction*e):i.speed<0&&(i.speed=Math.min(0,i.speed+i.friction*e)),i.isBraking=!1),o&&(i.isBraking=!0,Math.abs(i.speed)>2&&(i.speed-=Math.sign(i.speed)*i.brakeForce*1.5*e,this.spawnTireSmoke(i),this.soundManager.playTireSkid()));const a=Math.min(1,Math.abs(i.speed)/5),l=i.speed/i.wheelbase*Math.tan(i.steeringAngle)*a;i.rotation+=l*e,i.x+=Math.sin(i.rotation)*i.speed*e,i.z+=Math.cos(i.rotation)*i.speed*e,i.wheelRotation+=i.speed/.4*e,this.player.x=i.x,this.player.z=i.z,this.player.rotation=i.rotation,this.soundManager.updateEngine(i.speed,i.maxSpeed,r),i.x=Math.max(Ti.minX+3,Math.min(Ti.maxX-3,i.x)),i.z=Math.max(Ti.minZ+3,Math.min(Ti.maxZ-3,i.z)),i.collisionCooldown>0&&(i.collisionCooldown-=e),n.interact&&Math.abs(i.speed)<6&&this.exitVehicle(i)}enterVehicle(e){this.player.state="driving",this.player.currentVehicleId=e.id,e.driver="player",e.isParked=!1,this.soundManager.startEngine(),this.mission.step==="ENTER_CAR"&&e.isMissionCar&&(this.mission.step="DRIVE_DELIVERY",this.mission.objective="Deliver the hypercar to the Harbor Safehouse hangar (North-East)!",this.mission.targetX=Ci.HARBOR_SAFEHOUSE.x,this.mission.targetZ=Ci.HARBOR_SAFEHOUSE.z,this.mission.targetRadius=10,this.mission.targetName="Harbor Safehouse Delivery Pad",this.triggerCrime("Vehicle Theft & Grand Larceny",1))}exitVehicle(e){const n=-Math.cos(e.rotation)*2.2,i=Math.sin(e.rotation)*2.2;this.player.state="on_foot",this.player.currentVehicleId=null,e.driver=null,e.speed=0,this.player.x=e.x+n,this.player.z=e.z+i,this.player.rotation=e.rotation-Math.PI/2,this.player.vx=0,this.player.vz=0,this.soundManager.stopEngine()}interactVehicle(){if(this.player.state==="on_foot"){if(this.nearestVehicleId&&this.nearestVehicleDist<5.8){const e=this.vehicles.find(n=>n.id===this.nearestVehicleId);e&&this.enterVehicle(e)}}else{const e=this.getPlayerVehicle();e&&Math.abs(e.speed)<6&&this.exitVehicle(e)}}findNearestVehicle(){if(this.player.state==="driving"){this.nearestVehicleId=null,this.nearestVehicleDist=1/0;return}let e=null,n=1/0;for(const i of this.vehicles){const r=this.player.x-i.x,s=this.player.z-i.z,o=Math.sqrt(r*r+s*s),a=Math.max(0,o-i.width*.5);a<n&&(n=a,e=i)}this.nearestVehicleDist=n,this.nearestVehicleId=e?e.id:null}checkRestrictedPrecinctZone(){this.player.x>36&&this.player.x<62&&this.player.z>-94&&this.player.z<-66&&this.wantedState.level===0&&this.triggerCrime("Trespassing into Police Station Restricted Grounds",2)}resolveAllCollisions(e){this.player.state==="on_foot"&&(Kx(this.player,this.buildings),Zx(this.player,this.props),Qx(this.player,this.vehicles));for(const n of this.vehicles)Jx(n,this.buildings,i=>{this.soundManager.playCrash(Math.min(1,i.impactSpeed/15)),this.spawnCrashSparks(i.hitX,i.hitZ,i.impactSpeed),n.driver==="player"&&i.impactSpeed>14&&this.triggerCrime("Reckless Endangerment & Property Damage",1)});ey(this.vehicles,n=>{this.soundManager.playCrash(Math.min(1,n.impactSpeed/12)),this.spawnCrashSparks(n.hitX,n.hitZ,n.impactSpeed);const i=this.vehicles.find(r=>r.id===n.vehicleId);i&&i.isPolice&&this.player.state==="driving"&&this.triggerCrime("Assault on Police Cruiser",2)}),ty(this.vehicles,this.pedestrians,n=>{this.soundManager.playCrash(.8),n.isPlayerVehicle&&this.triggerCrime("Vehicular Assault on Civilian",2)})}updateMission(e){if(!this.mission.active||this.mission.completed)return;this.mission.elapsed+=e;const n=this.player.x,i=this.player.z,r=Math.sqrt((n-this.mission.targetX)**2+(i-this.mission.targetZ)**2);switch(this.mission.step){case"GOTO_START":r<=this.mission.targetRadius&&(this.mission.step="ENTER_CAR",this.mission.objective="Enter the marked Golden Apex Hypercar",this.mission.targetX=Ci.MISSION_CAR_SPAWN.x,this.mission.targetZ=Ci.MISSION_CAR_SPAWN.z,this.mission.targetRadius=5,this.mission.targetName="Golden Apex Car");break;case"ENTER_CAR":break;case"DRIVE_DELIVERY":r<=this.mission.targetRadius&&(this.mission.step="PARK_CAR",this.mission.objective="Halt inside the green drop-off hangar");break;case"PARK_CAR":{const s=this.getPlayerVehicle();s&&r<=this.mission.targetRadius&&Math.abs(s.speed)<1.5&&(this.mission.step="COMPLETED",this.mission.completed=!0,this.soundManager.playMissionComplete(),this.wantedState.level=0,this.wantedState.stars=0,this.wantedState.isEvading=!1,this.soundManager.stopSiren());break}}}spawnTireSmoke(e){for(let n=0;n<2;n++){const i=(Math.random()-.5)*e.width,r=-e.length*.4,s=e.x+Math.sin(e.rotation)*r-Math.cos(e.rotation)*i,o=e.z+Math.cos(e.rotation)*r+Math.sin(e.rotation)*i;this.particles.push({x:s,y:.15,z:o,vx:(Math.random()-.5)*1.5,vy:.8+Math.random()*1.2,vz:(Math.random()-.5)*1.5,color:"#e2e8f0",size:.35+Math.random()*.25,life:0,maxLife:.45+Math.random()*.3,type:"smoke"})}}spawnCrashSparks(e,n,i){const r=Math.min(25,Math.floor(i*1.5));for(let s=0;s<r;s++){const o=Math.random()*Math.PI*2,a=3+Math.random()*8;this.particles.push({x:e,y:.6+Math.random()*.5,z:n,vx:Math.cos(o)*a,vy:2+Math.random()*5,vz:Math.sin(o)*a,color:Math.random()>.3?"#f59e0b":"#ef4444",size:.12,life:0,maxLife:.35+Math.random()*.2,type:"spark"})}}updateParticles(e){for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.life+=e,i.life>=i.maxLife){this.particles.splice(n,1);continue}i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.type==="spark"&&(i.vy-=12*e)}}getPlayerVehicle(){return this.player.state!=="driving"||!this.player.currentVehicleId?null:this.vehicles.find(e=>e.id===this.player.currentVehicleId)||null}getHUDData(){const e=this.getPlayerVehicle(),n=this.player.x,i=this.player.z,r=Math.sqrt((n-this.mission.targetX)**2+(i-this.mission.targetZ)**2);let s=null,o=!1;if(this.player.state==="on_foot"){if(this.nearestVehicleId&&this.nearestVehicleDist<3.8){const a=this.vehicles.find(l=>l.id===this.nearestVehicleId);a&&(o=!0,s=`Press [E] to Enter ${a.name}`)}}else e&&(Math.abs(e.speed)<6?s="Press [E] to Exit Vehicle":s=`Slow down to exit (${Math.round(Math.abs(e.speed)*3.6)} km/h)`);return{playerState:this.player.state,speed:e?Math.abs(e.speed):Math.sqrt(this.player.vx**2+this.player.vz**2),maxSpeed:e?e.maxSpeed:this.player.sprintSpeed,vehicleName:e?e.name:null,canEnterVehicle:o,vehicleHint:s,wantedLevel:this.wantedState.level,isEvading:this.wantedState.isEvading,evadeProgress:this.wantedState.isEvading?1-this.wantedState.evadeTimer/this.wantedState.maxEvadeTimer:0,mission:{step:this.mission.step,title:this.mission.title,objective:this.mission.objective,distance:Math.round(r),completed:this.mission.completed,failed:this.mission.failed,elapsed:Math.round(this.mission.elapsed)},busted:this.busted,soundEnabled:this.soundManager.isSoundEnabled(),cameraMode:this.cameraMode}}dispose(){this.soundManager.dispose()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="169",ay=0,pp=1,ly=2,L0=1,I0=2,ui=3,tr=0,ln=1,Cn=2,Zi=0,xs=1,mp=2,gp=3,_p=4,cy=5,vr=100,uy=101,dy=102,fy=103,hy=104,py=200,my=201,gy=202,_y=203,id=204,rd=205,vy=206,xy=207,yy=208,My=209,Sy=210,Ey=211,wy=212,Ty=213,Ay=214,sd=0,od=1,ad=2,Ps=3,ld=4,cd=5,ud=6,dd=7,D0=0,Cy=1,Ry=2,Qi=0,Py=1,by=2,Ly=3,N0=4,Iy=5,Dy=6,Ny=7,U0=300,bs=301,Ls=302,fd=303,hd=304,jl=306,pd=1e3,Er=1001,md=1002,rn=1003,Uy=1004,ha=1005,Bn=1006,bc=1007,wr=1008,Mi=1009,F0=1010,O0=1011,Oo=1012,Bf=1013,Ir=1014,ei=1015,Go=1016,Vf=1017,Hf=1018,Is=1020,k0=35902,z0=1021,B0=1022,Hn=1023,V0=1024,H0=1025,ys=1026,Ds=1027,Gf=1028,Wf=1029,G0=1030,Xf=1031,jf=1033,qa=33776,$a=33777,Ya=33778,Ka=33779,gd=35840,_d=35841,vd=35842,xd=35843,yd=36196,Md=37492,Sd=37496,Ed=37808,wd=37809,Td=37810,Ad=37811,Cd=37812,Rd=37813,Pd=37814,bd=37815,Ld=37816,Id=37817,Dd=37818,Nd=37819,Ud=37820,Fd=37821,Za=36492,Od=36494,kd=36495,W0=36283,zd=36284,Bd=36285,Vd=36286,Fy=3200,Oy=3201,X0=0,ky=1,ki="",Kn="srgb",or="srgb-linear",qf="display-p3",ql="display-p3-linear",wl="linear",ut="srgb",Tl="rec709",Al="p3",zr=7680,vp=519,zy=512,By=513,Vy=514,j0=515,Hy=516,Gy=517,Wy=518,Xy=519,xp=35044,yp=35048,Mp="300 es",mi=2e3,Cl=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,Hd=180/Math.PI;function Wo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function jy(t,e){return(t%e+e)%e}function Ic(t,e,n){return(1-n)*t+n*e}function $s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,n=0){ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],d=r[6],g=r[1],v=r[4],M=r[7],R=r[2],A=r[5],T=r[8];return s[0]=o*x+a*g+l*R,s[3]=o*m+a*v+l*A,s[6]=o*d+a*M+l*T,s[1]=c*x+u*g+f*R,s[4]=c*m+u*v+f*A,s[7]=c*d+u*M+f*T,s[2]=h*x+p*g+_*R,s[5]=h*m+p*v+_*A,s[8]=h*d+p*M+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Dc.makeScale(e,n)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new Fe;function q0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qy(){const t=Rl("canvas");return t.style.display="block",t}const Sp={};function Qa(t){t in Sp||(Sp[t]=!0,console.warn(t))}function $y(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Yy(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ky(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ep=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[or]:{transfer:wl,primaries:Tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Kn]:{transfer:ut,primaries:Tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ql]:{transfer:wl,primaries:Al,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(wp),fromReference:t=>t.applyMatrix3(Ep)},[qf]:{transfer:ut,primaries:Al,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(wp),fromReference:t=>t.applyMatrix3(Ep).convertLinearToSRGB()}},Zy=new Set([or,ql]),Je={enabled:!0,_workingColorSpace:or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Zy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ys[e].toReference,r=Ys[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ys[t].primaries},getTransfer:function(t){return t===ki?wl:Ys[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ys[e].luminanceCoefficients)}};function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Nc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class Qy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=Rl("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ms(n[i]/255)*255):n[i]=Ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jy=0;class $0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uc(r[o].image)):s.push(Uc(r[o]))}else s=Uc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eM=0;class qt extends ks{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=Er,r=Er,s=Bn,o=wr,a=Hn,l=Mi,c=qt.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Wo(),this.name="",this.source=new $0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=U0;qt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,n=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(p+1)/2,R=(d+1)/2,A=(u+h)/4,T=(f+x)/4,P=(_+m)/4;return v>M&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-x)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new it(0,0,e,n),this.scissorTest=!1,this.viewport=new it(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends tM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y0 extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*x,g=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,d*g);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const M=a*g;if(l=l*m+h*M,c=c*m+p*M,u=u*m+_*M,f=f*m+x*M,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*h,e[n+1]=l*_+u*h+c*f-a*p,e[n+2]=c*_+u*p+a*h-l*f,e[n+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new U,Tp=new Xo;class Fr{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),ma.subVectors(this.max,Ks),Vr.subVectors(e.a,Ks),Hr.subVectors(e.b,Ks),Gr.subVectors(e.c,Ks),Ri.subVectors(Hr,Vr),Pi.subVectors(Gr,Hr),lr.subVectors(Vr,Gr);let n=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-lr.z,lr.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,lr.z,0,-lr.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-lr.y,lr.x,0];return!Oc(n,Vr,Hr,Gr,ma)||(n=[1,0,0,0,1,0,0,0,1],!Oc(n,Vr,Hr,Gr,ma))?!1:(ga.crossVectors(Ri,Pi),n=[ga.x,ga.y,ga.z],Oc(n,Vr,Hr,Gr,ma))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new U,new U,new U,new U,new U,new U,new U,new U],Nn=new U,pa=new Fr,Vr=new U,Hr=new U,Gr=new U,Ri=new U,Pi=new U,lr=new U,Ks=new U,ma=new U,ga=new U,cr=new U;function Oc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){cr.fromArray(t,s);const a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),c=n.dot(cr),u=i.dot(cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const iM=new Fr,Zs=new U,kc=new U;class jo{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):iM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(kc)),this.expandByPoint(Zs.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new U,zc=new U,_a=new U,bi=new U,Bc=new U,va=new U,Vc=new U;class rM{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){zc.copy(e).add(n).multiplyScalar(.5),_a.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(zc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(_a),a=bi.dot(this.direction),l=-bi.dot(_a),c=bi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(zc).addScaledVector(_a,h),p}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){Bc.subVectors(n,e),va.subVectors(i,e),Vc.crossVectors(Bc,va);let o=this.direction.dot(Vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(bi,va));if(l<0)return null;const c=a*this.direction.dot(Bc.cross(bi));if(c<0||l+c>o)return null;const u=-a*bi.dot(Vc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,_,x,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,_,x,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,x=c*f;n[0]=h+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+x,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sM,e,oM)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Li.crossVectors(i,fn),Li.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Li.crossVectors(i,fn)),Li.normalize(),xa.crossVectors(fn,Li),r[0]=Li.x,r[4]=xa.x,r[8]=fn.x,r[1]=Li.y,r[5]=xa.y,r[9]=fn.y,r[2]=Li.z,r[6]=xa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],g=i[3],v=i[7],M=i[11],R=i[15],A=r[0],T=r[4],P=r[8],H=r[12],y=r[1],E=r[5],F=r[9],O=r[13],G=r[2],q=r[6],B=r[10],Z=r[14],L=r[3],Y=r[7],J=r[11],se=r[15];return s[0]=o*A+a*y+l*G+c*L,s[4]=o*T+a*E+l*q+c*Y,s[8]=o*P+a*F+l*B+c*J,s[12]=o*H+a*O+l*Z+c*se,s[1]=u*A+f*y+h*G+p*L,s[5]=u*T+f*E+h*q+p*Y,s[9]=u*P+f*F+h*B+p*J,s[13]=u*H+f*O+h*Z+p*se,s[2]=_*A+x*y+m*G+d*L,s[6]=_*T+x*E+m*q+d*Y,s[10]=_*P+x*F+m*B+d*J,s[14]=_*H+x*O+m*Z+d*se,s[3]=g*A+v*y+M*G+R*L,s[7]=g*T+v*E+M*q+R*Y,s[11]=g*P+v*F+M*B+R*J,s[15]=g*H+v*O+M*Z+R*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],g=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,v=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,M=u*x*c-_*f*c+_*a*p-o*x*p-u*a*d+o*f*d,R=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,A=n*g+i*v+r*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=g*T,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*T,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*T,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(u*m*s-_*h*s+_*r*p-n*m*p-u*r*d+n*h*d)*T,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*d-n*l*d)*T,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*T,e[8]=M*T,e[9]=(_*f*s-u*x*s-_*i*p+n*x*p+u*i*d-n*f*d)*T,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*d+n*a*d)*T,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*T,e[12]=R*T,e[13]=(u*x*r-_*f*r+_*i*h-n*x*h-u*i*m+n*f*m)*T,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,x=o*u,m=o*f,d=a*f,g=l*c,v=l*u,M=l*f,R=i.x,A=i.y,T=i.z;return r[0]=(1-(x+d))*R,r[1]=(p+M)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(h+d))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(_+v)*T,r[9]=(m-g)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Wr.set(r[0],r[1],r[2]).length();const o=Wr.set(r[4],r[5],r[6]).length(),a=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/s,u=1/o,f=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=mi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===mi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Cl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=mi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let _,x;if(a===mi)_=(o+s)*f,x=-2*f;else if(a===Cl)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Wr=new U,Un=new ot,sM=new U(0,0,0),oM=new U(1,1,1),Li=new U,xa=new U,fn=new U,Ap=new ot,Cp=new Xo;class ii{constructor(e=0,n=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ap,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class K0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aM=0;const Rp=new U,Xr=new Xo,ai=new ot,ya=new U,Qs=new U,lM=new U,cM=new Xo,Pp=new U(1,0,0),bp=new U(0,1,0),Lp=new U(0,0,1),Ip={type:"added"},uM={type:"removed"},jr={type:"childadded",child:null},Hc={type:"childremoved",child:null};class It extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new U,n=new ii,i=new Xo,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Fe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Pp,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,n){return Rp.copy(e).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pp,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ya.copy(e):ya.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Qs,ya,this.up):ai.lookAt(ya,Qs,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(ai),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ip),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uM),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ip),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,lM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,cM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new U(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new U,li=new U,Gc=new U,ci=new U,qr=new U,$r=new U,Dp=new U,Wc=new U,Xc=new U,jc=new U,qc=new it,$c=new it,Yc=new it;class Vn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),li.subVectors(i,n),Gc.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(li),l=Fn.dot(Gc),c=li.dot(li),u=li.dot(Gc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return qc.setScalar(0),$c.setScalar(0),Yc.setScalar(0),qc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qc,s.x),o.addScaledVector($c,s.y),o.addScaledVector(Yc,s.z),o}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),li.subVectors(e,n),Fn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Fn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),$r.subVectors(s,i),Wc.subVectors(e,i);const l=qr.dot(Wc),c=$r.dot(Wc);if(l<=0&&c<=0)return n.copy(i);Xc.subVectors(e,r);const u=qr.dot(Xc),f=$r.dot(Xc);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(qr,o);jc.subVectors(e,s);const p=qr.dot(jc),_=$r.dot(jc);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector($r,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Dp.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(Dp,a);const d=1/(m+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(qr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=jy(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Kc(o,s,e+1/3),this.g=Kc(o,s,e),this.b=Kc(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const i=Z0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Nc(e.r),this.g=Nc(e.g),this.b=Nc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Je.fromWorkingColorSpace(Bt.copy(this),e),Math.round(tn(Bt.r*255,0,255))*65536+Math.round(tn(Bt.g*255,0,255))*256+Math.round(tn(Bt.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Kn){Je.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(Ma);const i=Ic(Ii.h,Ma.h,n),r=Ic(Ii.s,Ma.s,n),s=Ic(Ii.l,Ma.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new ze;ze.NAMES=Z0;let dM=0;class qo extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=xs,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=rd,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==id&&(i.blendSrc=this.blendSrc),this.blendDst!==rd&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Et extends qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=D0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new U,Sa=new ke;class Xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xp,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sa.fromBufferAttribute(this,n),Sa.applyMatrix3(e),this.setXY(n,Sa.x,Sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$s(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$s(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$s(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xp&&(e.usage=this.usage),e}}class Q0 extends Xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class J0 extends Xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class At extends Xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fM=0;const Sn=new ot,Zc=new It,Yr=new U,hn=new Fr,Js=new Fr,Pt=new U;class qn extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q0(e)?J0:Q0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(hn.min,Js.min),hn.expandByPoint(Pt),Pt.addVectors(hn.max,Js.max),hn.expandByPoint(Pt)):(hn.expandByPoint(Js.min),hn.expandByPoint(Js.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(e,c),Pt.add(Yr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const c=new U,u=new U,f=new U,h=new ke,p=new ke,_=new ke,x=new U,m=new U;function d(P,H,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,H),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,H),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const E=1/(p.x*_.y-_.x*p.y);isFinite(E)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(E),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(E),a[P].add(x),a[H].add(x),a[y].add(x),l[P].add(m),l[H].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,H=g.length;P<H;++P){const y=g[P],E=y.start,F=y.count;for(let O=E,G=E+F;O<G;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new U,M=new U,R=new U,A=new U;function T(P){R.fromBufferAttribute(r,P),A.copy(R);const H=a[P];v.copy(H),v.sub(R.multiplyScalar(R.dot(H))).normalize(),M.crossVectors(A,H);const E=M.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,E)}for(let P=0,H=g.length;P<H;++P){const y=g[P],E=y.start,F=y.count;for(let O=E,G=E+F;O<G;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Xn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Np=new ot,ur=new rM,Ea=new jo,Up=new U,wa=new U,Ta=new U,Aa=new U,Qc=new U,Ca=new U,Fp=new U,Ra=new U;class pe extends It{constructor(e=new qn,n=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Qc.fromBufferAttribute(f,e),o?Ca.addScaledVector(Qc,u):Ca.addScaledVector(Qc.sub(n),u))}n.add(Ca)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(Ea.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Ea,Up)===null||ur.origin.distanceToSquared(Up)>(e.far-e.near)**2))&&(Np.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Np),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,R=v;M<R;M+=3){const A=a.getX(M),T=a.getX(M+1),P=a.getX(M+2);r=Pa(this,d,e,i,c,u,f,A,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const g=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);r=Pa(this,o,e,i,c,u,f,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,R=v;M<R;M+=3){const A=M,T=M+1,P=M+2;r=Pa(this,d,e,i,c,u,f,A,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const g=m,v=m+1,M=m+2;r=Pa(this,o,e,i,c,u,f,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function hM(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===tr,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ra);return c<n.near||c>n.far?null:{distance:c,point:Ra.clone(),object:t}}function Pa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,wa),t.getVertexPosition(l,Ta),t.getVertexPosition(c,Aa);const u=hM(t,e,n,i,wa,Ta,Aa,Fp);if(u){const f=new U;Vn.getBarycoord(Fp,wa,Ta,Aa,f),r&&(u.uv=Vn.getInterpolatedAttribute(r,a,l,c,f,new ke)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,a,l,c,f,new ke)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,f,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};Vn.getNormal(wa,Ta,Aa,h.normal),u.face=h,u.barycoord=f}return u}class je extends qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(f,2));function _(x,m,d,g,v,M,R,A,T,P,H){const y=M/T,E=R/P,F=M/2,O=R/2,G=A/2,q=T+1,B=P+1;let Z=0,L=0;const Y=new U;for(let J=0;J<B;J++){const se=J*E-O;for(let Te=0;Te<q;Te++){const Be=Te*y-F;Y[x]=Be*g,Y[m]=se*v,Y[d]=G,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[d]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Te/T),f.push(1-J/P),Z+=1}}for(let J=0;J<P;J++)for(let se=0;se<T;se++){const Te=h+se+q*J,Be=h+se+q*(J+1),j=h+(se+1)+q*(J+1),ne=h+(se+1)+q*J;l.push(Te,Be,ne),l.push(Be,j,ne),L+=6}a.addGroup(p,L,H),p+=L,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new je(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function pM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function e_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const mM={clone:Ns,merge:Wt};var gM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gM,this.fragmentShader=_M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=pM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class t_ extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new U,Op=new ke,kp=new ke;class mn extends t_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hd*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,Op,kp),n.subVectors(kp,Op)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Kr=-90,Zr=1;class vM extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Kr,Zr,e,n);r.layers=this.layers,this.add(r);const s=new mn(Kr,Zr,e,n);s.layers=this.layers,this.add(s);const o=new mn(Kr,Zr,e,n);o.layers=this.layers,this.add(o);const a=new mn(Kr,Zr,e,n);a.layers=this.layers,this.add(a);const l=new mn(Kr,Zr,e,n);l.layers=this.layers,this.add(l);const c=new mn(Kr,Zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class n_ extends qt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:bs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xM extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new n_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new je(5,5,5),s=new nr({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Zi});s.uniforms.tEquirect.value=n;const o=new pe(r,s),a=n.minFilter;return n.minFilter===wr&&(n.minFilter=Bn),new vM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Jc=new U,yM=new U,MM=new Fe;class gr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jc.subVectors(i,n).cross(yM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||MM.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new jo,ba=new U;class $f{constructor(e=new gr,n=new gr,i=new gr,r=new gr,s=new gr,o=new gr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],x=r[10],m=r[11],d=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-d).normalize(),i[1].setComponents(l+s,h+c,m+p,M+d).normalize(),i[2].setComponents(l+o,h+u,m+_,M+g).normalize(),i[3].setComponents(l-o,h-u,m-_,M-g).normalize(),i[4].setComponents(l-a,h-f,m-x,M-v).normalize(),n===mi)i[5].setComponents(l+a,h+f,m+x,M+v).normalize();else if(n===Cl)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function SM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class En extends qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const g=d*h-o;for(let v=0;v<c;v++){const M=v*f-s;_.push(M,-g,0),x.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const v=g+c*d,M=g+c*(d+1),R=g+1+c*(d+1),A=g+1+c*d;p.push(v,M,A),p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.widthSegments,e.heightSegments)}}var EM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
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
#endif`,TM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
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
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FM=`#ifdef USE_IRIDESCENCE
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
#endif`,OM=`#ifdef USE_BUMPMAP
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
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jM=`#define PI 3.141592653589793
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
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$M=`vec3 transformedNormal = objectNormal;
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
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JM="gl_FragColor = linearToOutputTexel( gl_FragColor );",eS=`
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
}`,tS=`#ifdef USE_ENVMAP
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
#endif`,nS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iS=`#ifdef USE_ENVMAP
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
#endif`,rS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
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
#endif`,oS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uS=`#ifdef USE_GRADIENTMAP
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
}`,dS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pS=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,mS=`#ifdef USE_ENVMAP
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
#endif`,gS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yS=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,MS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,SS=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ES=`#if defined( RE_IndirectDiffuse )
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
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IS=`#if defined( USE_POINTS_UV )
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
#endif`,DS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,US=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,zS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XS=`#ifdef USE_NORMALMAP
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
#endif`,jS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,QS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
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
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gE=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_E=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
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
}`,PE=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bE=`#define DISTANCE
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
}`,LE=`#define DISTANCE
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
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
}`,UE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,OE=`uniform vec3 diffuse;
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
}`,kE=`#define LAMBERT
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
}`,zE=`#define LAMBERT
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
}`,BE=`#define MATCAP
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
}`,VE=`#define MATCAP
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
}`,HE=`#define NORMAL
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
}`,GE=`#define NORMAL
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
}`,WE=`#define PHONG
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
}`,XE=`#define PHONG
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
}`,jE=`#define STANDARD
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
}`,qE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,$E=`#define TOON
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
}`,YE=`#define TOON
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
}`,KE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,QE=`#include <common>
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
}`,JE=`uniform vec3 color;
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
}`,e1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,t1=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:EM,alphahash_pars_fragment:wM,alphamap_fragment:TM,alphamap_pars_fragment:AM,alphatest_fragment:CM,alphatest_pars_fragment:RM,aomap_fragment:PM,aomap_pars_fragment:bM,batching_pars_vertex:LM,batching_vertex:IM,begin_vertex:DM,beginnormal_vertex:NM,bsdfs:UM,iridescence_fragment:FM,bumpmap_pars_fragment:OM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:zM,clipping_planes_pars_vertex:BM,clipping_planes_vertex:VM,color_fragment:HM,color_pars_fragment:GM,color_pars_vertex:WM,color_vertex:XM,common:jM,cube_uv_reflection_fragment:qM,defaultnormal_vertex:$M,displacementmap_pars_vertex:YM,displacementmap_vertex:KM,emissivemap_fragment:ZM,emissivemap_pars_fragment:QM,colorspace_fragment:JM,colorspace_pars_fragment:eS,envmap_fragment:tS,envmap_common_pars_fragment:nS,envmap_pars_fragment:iS,envmap_pars_vertex:rS,envmap_physical_pars_fragment:mS,envmap_vertex:sS,fog_vertex:oS,fog_pars_vertex:aS,fog_fragment:lS,fog_pars_fragment:cS,gradientmap_pars_fragment:uS,lightmap_pars_fragment:dS,lights_lambert_fragment:fS,lights_lambert_pars_fragment:hS,lights_pars_begin:pS,lights_toon_fragment:gS,lights_toon_pars_fragment:_S,lights_phong_fragment:vS,lights_phong_pars_fragment:xS,lights_physical_fragment:yS,lights_physical_pars_fragment:MS,lights_fragment_begin:SS,lights_fragment_maps:ES,lights_fragment_end:wS,logdepthbuf_fragment:TS,logdepthbuf_pars_fragment:AS,logdepthbuf_pars_vertex:CS,logdepthbuf_vertex:RS,map_fragment:PS,map_pars_fragment:bS,map_particle_fragment:LS,map_particle_pars_fragment:IS,metalnessmap_fragment:DS,metalnessmap_pars_fragment:NS,morphinstance_vertex:US,morphcolor_vertex:FS,morphnormal_vertex:OS,morphtarget_pars_vertex:kS,morphtarget_vertex:zS,normal_fragment_begin:BS,normal_fragment_maps:VS,normal_pars_fragment:HS,normal_pars_vertex:GS,normal_vertex:WS,normalmap_pars_fragment:XS,clearcoat_normal_fragment_begin:jS,clearcoat_normal_fragment_maps:qS,clearcoat_pars_fragment:$S,iridescence_pars_fragment:YS,opaque_fragment:KS,packing:ZS,premultiplied_alpha_fragment:QS,project_vertex:JS,dithering_fragment:eE,dithering_pars_fragment:tE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:sE,shadowmap_vertex:oE,shadowmask_pars_fragment:aE,skinbase_vertex:lE,skinning_pars_vertex:cE,skinning_vertex:uE,skinnormal_vertex:dE,specularmap_fragment:fE,specularmap_pars_fragment:hE,tonemapping_fragment:pE,tonemapping_pars_fragment:mE,transmission_fragment:gE,transmission_pars_fragment:_E,uv_pars_fragment:vE,uv_pars_vertex:xE,uv_vertex:yE,worldpos_vertex:ME,background_vert:SE,background_frag:EE,backgroundCube_vert:wE,backgroundCube_frag:TE,cube_vert:AE,cube_frag:CE,depth_vert:RE,depth_frag:PE,distanceRGBA_vert:bE,distanceRGBA_frag:LE,equirect_vert:IE,equirect_frag:DE,linedashed_vert:NE,linedashed_frag:UE,meshbasic_vert:FE,meshbasic_frag:OE,meshlambert_vert:kE,meshlambert_frag:zE,meshmatcap_vert:BE,meshmatcap_frag:VE,meshnormal_vert:HE,meshnormal_frag:GE,meshphong_vert:WE,meshphong_frag:XE,meshphysical_vert:jE,meshphysical_frag:qE,meshtoon_vert:$E,meshtoon_frag:YE,points_vert:KE,points_frag:ZE,shadow_vert:QE,shadow_frag:JE,sprite_vert:e1,sprite_frag:t1},oe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Qn={basic:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Wt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Wt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Wt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Wt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Wt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Wt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Wt([oe.common,oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Wt([oe.lights,oe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Qn.physical={uniforms:Wt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const La={r:0,b:0,g:0},fr=new ii,n1=new ot;function i1(t,e,n,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function x(g){let v=!1;const M=_(g);M===null?d(a,l):M&&M.isColor&&(d(M,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const M=_(v);M&&(M.isCubeTexture||M.mapping===jl)?(u===void 0&&(u=new pe(new je(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Ns(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),fr.copy(v.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(fr)),u.material.toneMapped=Je.getTransfer(M.colorSpace)!==ut,(f!==M||h!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new pe(new En(2,2),new nr({name:"BackgroundMaterial",uniforms:Ns(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function d(g,v){g.getRGB(La,e_(t)),i.buffers.color.setClear(La.r,La.g,La.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(a,l)},render:x,addToRenderList:m}}function r1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,E,F,O,G){let q=!1;const B=f(O,F,E);s!==B&&(s=B,c(s.object)),q=p(y,O,F,G),q&&_(y,O,F,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(y,E,F,O),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,E,F){const O=F.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let q=G[E.id];q===void 0&&(q={},G[E.id]=q);let B=q[O];return B===void 0&&(B=h(l()),q[O]=B),B}function h(y){const E=[],F=[],O=[];for(let G=0;G<n;G++)E[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:F,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,E,F,O){const G=s.attributes,q=E.attributes;let B=0;const Z=F.getAttributes();for(const L in Z)if(Z[L].location>=0){const J=G[L];let se=q[L];if(se===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function _(y,E,F,O){const G={},q=E.attributes;let B=0;const Z=F.getAttributes();for(const L in Z)if(Z[L].location>=0){let J=q[L];J===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),G[L]=se,B++}s.attributes=G,s.attributesNum=B,s.index=O}function x(){const y=s.newAttributes;for(let E=0,F=y.length;E<F;E++)y[E]=0}function m(y){d(y,0)}function d(y,E){const F=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;F[y]=1,O[y]===0&&(t.enableVertexAttribArray(y),O[y]=1),G[y]!==E&&(t.vertexAttribDivisor(y,E),G[y]=E)}function g(){const y=s.newAttributes,E=s.enabledAttributes;for(let F=0,O=E.length;F<O;F++)E[F]!==y[F]&&(t.disableVertexAttribArray(F),E[F]=0)}function v(y,E,F,O,G,q,B){B===!0?t.vertexAttribIPointer(y,E,F,G,q):t.vertexAttribPointer(y,E,F,O,G,q)}function M(y,E,F,O){x();const G=O.attributes,q=F.getAttributes(),B=E.defaultAttributeValues;for(const Z in q){const L=q[Z];if(L.location>=0){let Y=G[Z];if(Y===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const J=Y.normalized,se=Y.itemSize,Te=e.get(Y);if(Te===void 0)continue;const Be=Te.buffer,j=Te.type,ne=Te.bytesPerElement,de=j===t.INT||j===t.UNSIGNED_INT||Y.gpuType===Bf;if(Y.isInterleavedBufferAttribute){const le=Y.data,De=le.stride,Ce=Y.offset;if(le.isInstancedInterleavedBuffer){for(let Ge=0;Ge<L.locationSize;Ge++)d(L.location+Ge,le.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ge=0;Ge<L.locationSize;Ge++)m(L.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Ge=0;Ge<L.locationSize;Ge++)v(L.location+Ge,se/L.locationSize,j,J,De*ne,(Ce+se/L.locationSize*Ge)*ne,de)}else{if(Y.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)d(L.location+le,Y.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<L.locationSize;le++)m(L.location+le);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let le=0;le<L.locationSize;le++)v(L.location+le,se/L.locationSize,j,J,se*ne,se/L.locationSize*le*ne,de)}}else if(B!==void 0){const J=B[Z];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(L.location,J);break;case 3:t.vertexAttrib3fv(L.location,J);break;case 4:t.vertexAttrib4fv(L.location,J);break;default:t.vertexAttrib1fv(L.location,J)}}}}g()}function R(){P();for(const y in i){const E=i[y];for(const F in E){const O=E[F];for(const G in O)u(O[G].object),delete O[G];delete E[F]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const F in E){const O=E[F];for(const G in O)u(O[G].object),delete O[G];delete E[F]}delete i[y.id]}function T(y){for(const E in i){const F=i[E];if(F[y.id]===void 0)continue;const O=F[y.id];for(const G in O)u(O[G].object),delete O[G];delete F[y.id]}}function P(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:H,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function s1(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x];for(let x=0;x<h.length;x++)n.update(_,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Hn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Mi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ei&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function a1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new gr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,v=g*4;let M=d.clippingState||null;l.value=M,M=u(_,h,v,p);for(let R=0;R!==v;++R)M[R]=n[R];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,M=p;v!==x;++v,M+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function l1(t){let e=new WeakMap;function n(o,a){return a===fd?o.mapping=bs:a===hd&&(o.mapping=Ls),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fd||a===hd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class r_ extends t_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,zp=[.125,.215,.35,.446,.526,.582],xr=20,eu=new r_,Bp=new ze;let tu=null,nu=0,iu=0,ru=!1;const _r=(1+Math.sqrt(5))/2,Qr=1/_r,Vp=[new U(-_r,Qr,0),new U(_r,Qr,0),new U(-Qr,0,_r),new U(Qr,0,_r),new U(0,_r,-Qr),new U(0,_r,Qr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=ru,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bs||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Go,format:Hn,colorSpace:or,depthBuffer:!1},r=Gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c1(s)),this._blurMaterial=u1(s,e,n)}return r}_compileMaterial(e){const n=new pe(this._lodPlanes[0],e);this._renderer.compile(n,eu)}_sceneToCubeUV(e,n,i,r){const a=new mn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Bp),u.toneMapping=Qi,u.autoClear=!1;const p=new Et({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new pe(new je,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Bp),x=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Ia(r,g*v,d>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===bs||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ia(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,eu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vp[(r-s-1)%Vp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pe(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const d=[];let g=0;for(let T=0;T<xr;++T){const P=T/x,H=Math.exp(-P*P/2);d.push(H),T===0?g+=H:T<m&&(g+=2*H)}for(let T=0;T<d.length;T++)d[T]=d[T]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const M=this._sizeLods[r],R=3*M*(r>v-fs?r-v+fs:0),A=4*(this._cubeSize-M);Ia(n,R,A,3*M,2*M),l.setRenderTarget(n),l.render(f,eu)}}function c1(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+zp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-fs?l=zp[o-t+fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,d=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,H=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];g.set(H,x*_*A),v.set(h,m*_*A);const y=[A,A,A,A,A,A];M.set(y,d*_*A)}const R=new qn;R.setAttribute("position",new Xn(g,x)),R.setAttribute("uv",new Xn(v,m)),R.setAttribute("faceIndex",new Xn(M,d)),e.push(R),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gp(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function u1(t,e,n){const i=new Float32Array(xr),r=new U(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Wp(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Xp(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Yf(){return`

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
	`}function d1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fd||l===hd,u=l===bs||l===Ls;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Hp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Hp(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function f1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Qa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function h1(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,d=x.length;m<d;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let v=0,M=g.length;v<M;v+=3){const R=g[v+0],A=g[v+1],T=g[v+2];h.push(R,A,A,T,T,R)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const R=v+0,A=v+1,T=v+2;h.push(R,A,A,T,T,R)}}else return;const m=new(q0(h)?J0:Q0)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function p1(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function f(h,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,_);let d=0;for(let g=0;g<_;g++)d+=p[g];for(let g=0;g<x.length;g++)n.update(d,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function m1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function g1(t,e,n){const i=new WeakMap,r=new it;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let R=a.attributes.position.count*M,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*A*4*f),P=new Y0(T,R,A,f);P.type=ei,P.needsUpdate=!0;const H=M*4;for(let E=0;E<f;E++){const F=d[E],O=g[E],G=v[E],q=R*A*4*E;for(let B=0;B<F.count;B++){const Z=B*H;_===!0&&(r.fromBufferAttribute(F,B),T[q+Z+0]=r.x,T[q+Z+1]=r.y,T[q+Z+2]=r.z,T[q+Z+3]=0),x===!0&&(r.fromBufferAttribute(O,B),T[q+Z+4]=r.x,T[q+Z+5]=r.y,T[q+Z+6]=r.z,T[q+Z+7]=0),m===!0&&(r.fromBufferAttribute(G,B),T[q+Z+8]=r.x,T[q+Z+9]=r.y,T[q+Z+10]=r.z,T[q+Z+11]=G.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new ke(R,A)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function _1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class s_ extends qt{constructor(e,n,i,r,s,o,a,l,c,u=ys){if(u!==ys&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ys&&(i=Ir),i===void 0&&u===Ds&&(i=Is),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const o_=new qt,jp=new s_(1,1),a_=new Y0,l_=new nM,c_=new n_,qp=[],$p=[],Yp=new Float32Array(16),Kp=new Float32Array(9),Zp=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qp[r];if(s===void 0&&(s=new Float32Array(r),qp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $l(t,e){let n=$p[e];n===void 0&&(n=new Int32Array(e),$p[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function v1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function S1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Zp.set(i),t.uniformMatrix2fv(this.addr,!1,Zp),Rt(n,i)}}function E1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Kp.set(i),t.uniformMatrix3fv(this.addr,!1,Kp),Rt(n,i)}}function w1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Yp.set(i),t.uniformMatrix4fv(this.addr,!1,Yp),Rt(n,i)}}function T1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function C1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function R1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function P1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function b1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function D1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(jp.compareFunction=j0,s=jp):s=o_,n.setTexture2D(e||s,r)}function N1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||l_,r)}function U1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||c_,r)}function F1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||a_,r)}function O1(t){switch(t){case 5126:return v1;case 35664:return x1;case 35665:return y1;case 35666:return M1;case 35674:return S1;case 35675:return E1;case 35676:return w1;case 5124:case 35670:return T1;case 35667:case 35671:return A1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return P1;case 36294:return b1;case 36295:return L1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return F1}}function k1(t,e){t.uniform1fv(this.addr,e)}function z1(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function B1(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function V1(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function H1(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function G1(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function W1(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function X1(t,e){t.uniform1iv(this.addr,e)}function j1(t,e){t.uniform2iv(this.addr,e)}function q1(t,e){t.uniform3iv(this.addr,e)}function $1(t,e){t.uniform4iv(this.addr,e)}function Y1(t,e){t.uniform1uiv(this.addr,e)}function K1(t,e){t.uniform2uiv(this.addr,e)}function Z1(t,e){t.uniform3uiv(this.addr,e)}function Q1(t,e){t.uniform4uiv(this.addr,e)}function J1(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||o_,s[o])}function ew(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||l_,s[o])}function tw(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||c_,s[o])}function nw(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||a_,s[o])}function iw(t){switch(t){case 5126:return k1;case 35664:return z1;case 35665:return B1;case 35666:return V1;case 35674:return H1;case 35675:return G1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return j1;case 35668:case 35672:return q1;case 35669:case 35673:return $1;case 5125:return Y1;case 36294:return K1;case 36295:return Z1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}class rw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=O1(n.type)}}class sw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iw(n.type)}}class ow{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const su=/(\w+)(\])?(\[|\.)?/g;function Qp(t,e){t.seq.push(e),t.map[e.id]=e}function aw(t,e,n){const i=t.name,r=i.length;for(su.lastIndex=0;;){const s=su.exec(i),o=su.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qp(n,c===void 0?new rw(a,t,e):new sw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new ow(a),Qp(n,f)),n=f}}}class Ja{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);aw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Jp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lw=37297;let cw=0;function uw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function dw(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Al&&n===Tl?i="LinearDisplayP3ToLinearSRGB":e===Tl&&n===Al&&(i="LinearSRGBToLinearDisplayP3"),t){case or:case ql:return[i,"LinearTransferOETF"];case Kn:case qf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+uw(t.getShaderSource(e),o)}else return r}function fw(t,e){const n=dw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function hw(t,e){let n;switch(e){case Py:n="Linear";break;case by:n="Reinhard";break;case Ly:n="Cineon";break;case N0:n="ACESFilmic";break;case Dy:n="AgX";break;case Ny:n="Neutral";break;case Iy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Da=new U;function pw(){Je.getLuminanceCoefficients(Da);const t=Da.x.toFixed(4),e=Da.y.toFixed(4),n=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function gw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _w(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ao(t){return t!==""}function tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(t){return t.replace(vw,yw)}const xw=new Map;function yw(t,e){let n=Ue[e];if(n===void 0){const i=xw.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gd(n)}const Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(t){return t.replace(Mw,Sw)}function Sw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
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
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ew(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===L0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function ww(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bs:case Ls:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Aw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case D0:e="ENVMAP_BLENDING_MULTIPLY";break;case Cy:e="ENVMAP_BLENDING_MIX";break;case Ry:e="ENVMAP_BLENDING_ADD";break}return e}function Cw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Rw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Ew(n),c=ww(n),u=Tw(n),f=Aw(n),h=Cw(n),p=mw(n),_=gw(s),x=r.createProgram();let m,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ao).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ao).join(`
`),d.length>0&&(d+=`
`)):(m=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),d=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Qi?hw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,fw("linearToOutputTexel",n.outputColorSpace),pw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ao).join(`
`)),o=Gd(o),o=tm(o,n),o=nm(o,n),a=Gd(a),a=tm(a,n),a=nm(a,n),o=im(o),a=im(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=g+m+o,M=g+d+a,R=Jp(r,r.VERTEX_SHADER,v),A=Jp(r,r.FRAGMENT_SHADER,M);r.attachShader(x,R),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(E){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(R).trim(),G=r.getShaderInfoLog(A).trim();let q=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,A);else{const Z=em(r,R,"vertex"),L=em(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+F+`
`+Z+`
`+L)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||G==="")&&(B=!1);B&&(E.diagnostics={runnable:q,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:d}})}r.deleteShader(R),r.deleteShader(A),P=new Ja(r,x),H=_w(r,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let H;this.getAttributes=function(){return H===void 0&&T(this),H};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,lw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let Pw=0;class bw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Lw(e),n.set(e,i)),i}}class Lw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Iw(t,e,n,i,r,s,o){const a=new K0,l=new bw,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,E,F,O,G){const q=O.fog,B=G.geometry,Z=y.isMeshStandardMaterial?O.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||Z),Y=L&&L.mapping===jl?L.image.height:null,J=x[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Te=se!==void 0?se.length:0;let Be=0;B.morphAttributes.position!==void 0&&(Be=1),B.morphAttributes.normal!==void 0&&(Be=2),B.morphAttributes.color!==void 0&&(Be=3);let j,ne,de,le;if(J){const Zt=Qn[J];j=Zt.vertexShader,ne=Zt.fragmentShader}else j=y.vertexShader,ne=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);const De=t.getRenderTarget(),Ce=G.isInstancedMesh===!0,Ge=G.isBatchedMesh===!0,nt=!!y.map,We=!!y.matcap,b=!!L,cn=!!y.aoMap,Ve=!!y.lightMap,$e=!!y.bumpMap,Pe=!!y.normalMap,at=!!y.displacementMap,Ie=!!y.emissiveMap,C=!!y.metalnessMap,S=!!y.roughnessMap,k=y.anisotropy>0,K=y.clearcoat>0,ee=y.dispersion>0,$=y.iridescence>0,Me=y.sheen>0,ae=y.transmission>0,ge=k&&!!y.anisotropyMap,Ye=K&&!!y.clearcoatMap,ie=K&&!!y.clearcoatNormalMap,_e=K&&!!y.clearcoatRoughnessMap,be=$&&!!y.iridescenceMap,Le=$&&!!y.iridescenceThicknessMap,ve=Me&&!!y.sheenColorMap,He=Me&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,rt=!!y.specularColorMap,I=!!y.specularIntensityMap,fe=ae&&!!y.transmissionMap,X=ae&&!!y.thicknessMap,Q=!!y.gradientMap,ce=!!y.alphaMap,he=y.alphaTest>0,Xe=!!y.alphaHash,yt=!!y.extensions;let Kt=Qi;y.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Kt=t.toneMapping);const Ke={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:ne,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ge,batchingColor:Ge&&G._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&G.instanceColor!==null,instancingMorph:Ce&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:De===null?t.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:or,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:We,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:Y,aoMap:cn,lightMap:Ve,bumpMap:$e,normalMap:Pe,displacementMap:p&&at,emissiveMap:Ie,normalMapObjectSpace:Pe&&y.normalMapType===ky,normalMapTangentSpace:Pe&&y.normalMapType===X0,metalnessMap:C,roughnessMap:S,anisotropy:k,anisotropyMap:ge,clearcoat:K,clearcoatMap:Ye,clearcoatNormalMap:ie,clearcoatRoughnessMap:_e,dispersion:ee,iridescence:$,iridescenceMap:be,iridescenceThicknessMap:Le,sheen:Me,sheenColorMap:ve,sheenRoughnessMap:He,specularMap:Ne,specularColorMap:rt,specularIntensityMap:I,transmission:ae,transmissionMap:fe,thicknessMap:X,gradientMap:Q,opaque:y.transparent===!1&&y.blending===xs&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:he,alphaHash:Xe,combine:y.combine,mapUv:nt&&m(y.map.channel),aoMapUv:cn&&m(y.aoMap.channel),lightMapUv:Ve&&m(y.lightMap.channel),bumpMapUv:$e&&m(y.bumpMap.channel),normalMapUv:Pe&&m(y.normalMap.channel),displacementMapUv:at&&m(y.displacementMap.channel),emissiveMapUv:Ie&&m(y.emissiveMap.channel),metalnessMapUv:C&&m(y.metalnessMap.channel),roughnessMapUv:S&&m(y.roughnessMap.channel),anisotropyMapUv:ge&&m(y.anisotropyMap.channel),clearcoatMapUv:Ye&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(y.sheenRoughnessMap.channel),specularMapUv:Ne&&m(y.specularMap.channel),specularColorMapUv:rt&&m(y.specularColorMap.channel),specularIntensityMapUv:I&&m(y.specularIntensityMap.channel),transmissionMapUv:fe&&m(y.transmissionMap.channel),thicknessMapUv:X&&m(y.thicknessMap.channel),alphaMapUv:ce&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Pe||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(nt||ce),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:Kt,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:yt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&y.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function g(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)E.push(F),E.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(v(E,y),M(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const E=x[y.type];let F;if(E){const O=Qn[E];F=mM.clone(O.uniforms)}else F=y.uniforms;return F}function A(y,E){let F;for(let O=0,G=u.length;O<G;O++){const q=u[O];if(q.cacheKey===E){F=q,++F.usedTimes;break}}return F===void 0&&(F=new Rw(t,E,y,s),u.push(F)),F}function T(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function H(){l.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:H}}function Dw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Nw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function om(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,x,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||Nw),i.length>1&&i.sort(h||sm),r.length>1&&r.sort(h||sm)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Uw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new om,t.set(i,[o])):r>=s.length?(o=new om,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Fw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new ze};break;case"SpotLight":n={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function Ow(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kw=0;function zw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Bw(t){const e=new Fw,n=Ow(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new ot,o=new ot;function a(c){let u=0,f=0,h=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,g=0,v=0,M=0,R=0,A=0,T=0;c.sort(zw);for(let H=0,y=c.length;H<y;H++){const E=c[H],F=E.color,O=E.intensity,G=E.distance,q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=F.r*O,f+=F.g*O,h+=F.b*O;else if(E.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(E.sh.coefficients[B],O);T++}else if(E.isDirectionalLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Z=E.shadow,L=n.get(E);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=E.shadow.matrix,g++}i.directional[p]=B,p++}else if(E.isSpotLight){const B=e.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(F).multiplyScalar(O),B.distance=G,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,i.spot[x]=B;const Z=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,Z.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[x]=Z.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=q,M++}x++}else if(E.isRectAreaLight){const B=e.get(E);B.color.copy(F).multiplyScalar(O),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=B,m++}else if(E.isPointLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){const Z=E.shadow,L=n.get(E);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,L.shadowCameraNear=Z.camera.near,L.shadowCameraFar=Z.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=E.shadow.matrix,v++}i.point[_]=B,_++}else if(E.isHemisphereLight){const B=e.get(E);B.skyColor.copy(E.color).multiplyScalar(O),B.groundColor.copy(E.groundColor).multiplyScalar(O),i.hemi[d]=B,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==g||P.numPointShadows!==v||P.numSpotShadows!==M||P.numSpotMaps!==R||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=p,P.pointLength=_,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=g,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=R,P.numLightProbes=T,i.version=kw++)}function l(c,u){let f=0,h=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const v=c[d];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function am(t){const e=new Bw(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Vw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new am(t),e.set(r,[a])):s>=o.length?(a=new am(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Hw extends qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gw extends qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
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
}`;function jw(t,e,n){let i=new $f;const r=new ke,s=new ke,o=new it,a=new Hw({depthPacking:Oy}),l=new Gw,c={},u=n.maxTextureSize,f={[tr]:ln,[ln]:tr,[Cn]:Cn},h=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Ww,fragmentShader:Xw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new qn;_.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pe(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L0;let d=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const H=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Zi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=d!==ui&&this.type===ui,G=d===ui&&this.type!==ui;for(let q=0,B=A.length;q<B;q++){const Z=A[q],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Y=L.getFrameExtents();if(r.multiply(Y),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,L.mapSize.y=s.y)),L.map===null||O===!0||G===!0){const se=this.type!==ui?{minFilter:rn,magFilter:rn}:{};L.map!==null&&L.map.dispose(),L.map=new Dr(r.x,r.y,se),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const J=L.getViewportCount();for(let se=0;se<J;se++){const Te=L.getViewport(se);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),F.viewport(o),L.updateMatrices(Z,se),i=L.getFrustum(),M(T,P,L.camera,Z,this.type)}L.isPointLightShadow!==!0&&this.type===ui&&g(L,P),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(H,y,E)};function g(A,T){const P=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,p,x,null)}function v(A,T,P,H){let y=null;const E=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)y=E;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=y.uuid,O=T.uuid;let G=c[F];G===void 0&&(G={},c[F]=G);let q=G[O];q===void 0&&(q=y.clone(),G[O]=q,T.addEventListener("dispose",R)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,H===ui?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=P}return y}function M(A,T,P,H,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=e.update(A),G=A.material;if(Array.isArray(G)){const q=O.groups;for(let B=0,Z=q.length;B<Z;B++){const L=q[B],Y=G[L.materialIndex];if(Y&&Y.visible){const J=v(A,Y,H,y);A.onBeforeShadow(t,A,T,P,O,J,L),t.renderBufferDirect(P,null,O,J,A,L),A.onAfterShadow(t,A,T,P,O,J,L)}}}else if(G.visible){const q=v(A,G,H,y);A.onBeforeShadow(t,A,T,P,O,q,null),t.renderBufferDirect(P,null,O,q,A,null),A.onAfterShadow(t,A,T,P,O,q,null)}}const F=A.children;for(let O=0,G=F.length;O<G;O++)M(F[O],T,P,H,y)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const H=c[P],y=A.target.uuid;y in H&&(H[y].dispose(),delete H[y])}}}const qw={[sd]:od,[ad]:ud,[ld]:dd,[Ps]:cd,[od]:sd,[ud]:ad,[dd]:ld,[cd]:Ps};function $w(t){function e(){let I=!1;const fe=new it;let X=null;const Q=new it(0,0,0,0);return{setMask:function(ce){X!==ce&&!I&&(t.colorMask(ce,ce,ce,ce),X=ce)},setLocked:function(ce){I=ce},setClear:function(ce,he,Xe,yt,Kt){Kt===!0&&(ce*=yt,he*=yt,Xe*=yt),fe.set(ce,he,Xe,yt),Q.equals(fe)===!1&&(t.clearColor(ce,he,Xe,yt),Q.copy(fe))},reset:function(){I=!1,X=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,fe=!1,X=null,Q=null,ce=null;return{setReversed:function(he){fe=he},setTest:function(he){he?de(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(he){X!==he&&!I&&(t.depthMask(he),X=he)},setFunc:function(he){if(fe&&(he=qw[he]),Q!==he){switch(he){case sd:t.depthFunc(t.NEVER);break;case od:t.depthFunc(t.ALWAYS);break;case ad:t.depthFunc(t.LESS);break;case Ps:t.depthFunc(t.LEQUAL);break;case ld:t.depthFunc(t.EQUAL);break;case cd:t.depthFunc(t.GEQUAL);break;case ud:t.depthFunc(t.GREATER);break;case dd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=he}},setLocked:function(he){I=he},setClear:function(he){ce!==he&&(t.clearDepth(he),ce=he)},reset:function(){I=!1,X=null,Q=null,ce=null}}}function i(){let I=!1,fe=null,X=null,Q=null,ce=null,he=null,Xe=null,yt=null,Kt=null;return{setTest:function(Ke){I||(Ke?de(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Ke){fe!==Ke&&!I&&(t.stencilMask(Ke),fe=Ke)},setFunc:function(Ke,Zt,ri){(X!==Ke||Q!==Zt||ce!==ri)&&(t.stencilFunc(Ke,Zt,ri),X=Ke,Q=Zt,ce=ri)},setOp:function(Ke,Zt,ri){(he!==Ke||Xe!==Zt||yt!==ri)&&(t.stencilOp(Ke,Zt,ri),he=Ke,Xe=Zt,yt=ri)},setLocked:function(Ke){I=Ke},setClear:function(Ke){Kt!==Ke&&(t.clearStencil(Ke),Kt=Ke)},reset:function(){I=!1,fe=null,X=null,Q=null,ce=null,he=null,Xe=null,yt=null,Kt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,_=!1,x=null,m=null,d=null,g=null,v=null,M=null,R=null,A=new ze(0,0,0),T=0,P=!1,H=null,y=null,E=null,F=null,O=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,B=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=B>=2);let L=null,Y={};const J=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Te=new it().fromArray(J),Be=new it().fromArray(se);function j(I,fe,X,Q){const ce=new Uint8Array(4),he=t.createTexture();t.bindTexture(I,he),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<X;Xe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(fe+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return he}const ne={};ne[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(Ps),Ve(!1),$e(pp),de(t.CULL_FACE),b(Zi);function de(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function le(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function De(I,fe){return u[I]!==fe?(t.bindFramebuffer(I,fe),u[I]=fe,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ce(I,fe){let X=h,Q=!1;if(I){X=f.get(fe),X===void 0&&(X=[],f.set(fe,X));const ce=I.textures;if(X.length!==ce.length||X[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Xe=ce.length;he<Xe;he++)X[he]=t.COLOR_ATTACHMENT0+he;X.length=ce.length,Q=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,Q=!0);Q&&t.drawBuffers(X)}function Ge(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const nt={[vr]:t.FUNC_ADD,[uy]:t.FUNC_SUBTRACT,[dy]:t.FUNC_REVERSE_SUBTRACT};nt[fy]=t.MIN,nt[hy]=t.MAX;const We={[py]:t.ZERO,[my]:t.ONE,[gy]:t.SRC_COLOR,[id]:t.SRC_ALPHA,[Sy]:t.SRC_ALPHA_SATURATE,[yy]:t.DST_COLOR,[vy]:t.DST_ALPHA,[_y]:t.ONE_MINUS_SRC_COLOR,[rd]:t.ONE_MINUS_SRC_ALPHA,[My]:t.ONE_MINUS_DST_COLOR,[xy]:t.ONE_MINUS_DST_ALPHA,[Ey]:t.CONSTANT_COLOR,[wy]:t.ONE_MINUS_CONSTANT_COLOR,[Ty]:t.CONSTANT_ALPHA,[Ay]:t.ONE_MINUS_CONSTANT_ALPHA};function b(I,fe,X,Q,ce,he,Xe,yt,Kt,Ke){if(I===Zi){_===!0&&(le(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),I!==cy){if(I!==x||Ke!==P){if((m!==vr||v!==vr)&&(t.blendEquation(t.FUNC_ADD),m=vr,v=vr),Ke)switch(I){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mp:t.blendFunc(t.ONE,t.ONE);break;case gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _p:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _p:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,g=null,M=null,R=null,A.set(0,0,0),T=0,x=I,P=Ke}return}ce=ce||fe,he=he||X,Xe=Xe||Q,(fe!==m||ce!==v)&&(t.blendEquationSeparate(nt[fe],nt[ce]),m=fe,v=ce),(X!==d||Q!==g||he!==M||Xe!==R)&&(t.blendFuncSeparate(We[X],We[Q],We[he],We[Xe]),d=X,g=Q,M=he,R=Xe),(yt.equals(A)===!1||Kt!==T)&&(t.blendColor(yt.r,yt.g,yt.b,Kt),A.copy(yt),T=Kt),x=I,P=!1}function cn(I,fe){I.side===Cn?le(t.CULL_FACE):de(t.CULL_FACE);let X=I.side===ln;fe&&(X=!X),Ve(X),I.blending===xs&&I.transparent===!1?b(Zi):b(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){H!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),H=I)}function $e(I){I!==ay?(de(t.CULL_FACE),I!==y&&(I===pp?t.cullFace(t.BACK):I===ly?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),y=I}function Pe(I){I!==E&&(q&&t.lineWidth(I),E=I)}function at(I,fe,X){I?(de(t.POLYGON_OFFSET_FILL),(F!==fe||O!==X)&&(t.polygonOffset(fe,X),F=fe,O=X)):le(t.POLYGON_OFFSET_FILL)}function Ie(I){I?de(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+G-1),L!==I&&(t.activeTexture(I),L=I)}function S(I,fe,X){X===void 0&&(L===null?X=t.TEXTURE0+G-1:X=L);let Q=Y[X];Q===void 0&&(Q={type:void 0,texture:void 0},Y[X]=Q),(Q.type!==I||Q.texture!==fe)&&(L!==X&&(t.activeTexture(X),L=X),t.bindTexture(I,fe||ne[I]),Q.type=I,Q.texture=fe)}function k(){const I=Y[L];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){Te.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Te.copy(I))}function ve(I){Be.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Be.copy(I))}function He(I,fe){let X=l.get(fe);X===void 0&&(X=new WeakMap,l.set(fe,X));let Q=X.get(I);Q===void 0&&(Q=t.getUniformBlockIndex(fe,I.name),X.set(I,Q))}function Ne(I,fe){const Q=l.get(fe).get(I);a.get(fe)!==Q&&(t.uniformBlockBinding(fe,Q,I.__bindingPointIndex),a.set(fe,Q))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,Y={},u={},f=new WeakMap,h=[],p=null,_=!1,x=null,m=null,d=null,g=null,v=null,M=null,R=null,A=new ze(0,0,0),T=0,P=!1,H=null,y=null,E=null,F=null,O=null,Te.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:le,bindFramebuffer:De,drawBuffers:Ce,useProgram:Ge,setBlending:b,setMaterial:cn,setFlipSided:Ve,setCullFace:$e,setLineWidth:Pe,setPolygonOffset:at,setScissorTest:Ie,activeTexture:C,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:_e,texImage3D:be,updateUBOMapping:He,uniformBlockBinding:Ne,texStorage2D:Ye,texStorage3D:ie,texSubImage2D:$,texSubImage3D:Me,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:Le,viewport:ve,reset:rt}}function lm(t,e,n,i){const r=Yw(i);switch(n){case z0:return t*e;case V0:return t*e;case H0:return t*e*2;case Gf:return t*e/r.components*r.byteLength;case Wf:return t*e/r.components*r.byteLength;case G0:return t*e*2/r.components*r.byteLength;case Xf:return t*e*2/r.components*r.byteLength;case B0:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case jf:return t*e*4/r.components*r.byteLength;case qa:case $a:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _d:case xd:return Math.max(t,16)*Math.max(e,8)/4;case gd:case vd:return Math.max(t,8)*Math.max(e,8)/2;case yd:case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Za:case Od:case kd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case W0:case zd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Yw(t){switch(t){case Mi:case F0:return{byteLength:1,components:1};case Oo:case O0:case Go:return{byteLength:2,components:1};case Vf:case Hf:return{byteLength:2,components:4};case Ir:case Bf:case ei:return{byteLength:4,components:1};case k0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Kw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):Rl("canvas")}function x(C,S,k){let K=1;const ee=Ie(C);if((ee.width>k||ee.height>k)&&(K=k/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(K*ee.width),Me=Math.floor(K*ee.height);f===void 0&&(f=_($,Me));const ae=S?_($,Me):f;return ae.width=$,ae.height=Me,ae.getContext("2d").drawImage(C,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Me+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==rn&&C.minFilter!==Bn}function d(C){t.generateMipmap(C)}function g(C,S,k,K,ee=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=S;if(S===t.RED&&(k===t.FLOAT&&($=t.R32F),k===t.HALF_FLOAT&&($=t.R16F),k===t.UNSIGNED_BYTE&&($=t.R8)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.R8UI),k===t.UNSIGNED_SHORT&&($=t.R16UI),k===t.UNSIGNED_INT&&($=t.R32UI),k===t.BYTE&&($=t.R8I),k===t.SHORT&&($=t.R16I),k===t.INT&&($=t.R32I)),S===t.RG&&(k===t.FLOAT&&($=t.RG32F),k===t.HALF_FLOAT&&($=t.RG16F),k===t.UNSIGNED_BYTE&&($=t.RG8)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RG8UI),k===t.UNSIGNED_SHORT&&($=t.RG16UI),k===t.UNSIGNED_INT&&($=t.RG32UI),k===t.BYTE&&($=t.RG8I),k===t.SHORT&&($=t.RG16I),k===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RGB8UI),k===t.UNSIGNED_SHORT&&($=t.RGB16UI),k===t.UNSIGNED_INT&&($=t.RGB32UI),k===t.BYTE&&($=t.RGB8I),k===t.SHORT&&($=t.RGB16I),k===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RGBA8UI),k===t.UNSIGNED_SHORT&&($=t.RGBA16UI),k===t.UNSIGNED_INT&&($=t.RGBA32UI),k===t.BYTE&&($=t.RGBA8I),k===t.SHORT&&($=t.RGBA16I),k===t.INT&&($=t.RGBA32I)),S===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),S===t.RGBA){const Me=ee?wl:Je.getTransfer(K);k===t.FLOAT&&($=t.RGBA32F),k===t.HALF_FLOAT&&($=t.RGBA16F),k===t.UNSIGNED_BYTE&&($=Me===ut?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(C,S){let k;return C?S===null||S===Ir||S===Is?k=t.DEPTH24_STENCIL8:S===ei?k=t.DEPTH32F_STENCIL8:S===Oo&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ir||S===Is?k=t.DEPTH_COMPONENT24:S===ei?k=t.DEPTH_COMPONENT32F:S===Oo&&(k=t.DEPTH_COMPONENT16),k}function M(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==Bn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&u.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),H(S)}function T(C){const S=i.get(C);if(S.__webglInit===void 0)return;const k=C.source,K=h.get(k);if(K){const ee=K[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(C),Object.keys(K).length===0&&h.delete(k)}i.remove(C)}function P(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const k=C.source,K=h.get(k);delete K[S.__cacheKey],o.memory.textures--}function H(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let ee=0;ee<S.__webglFramebuffer[K].length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[K][ee]);else t.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)t.deleteFramebuffer(S.__webglFramebuffer[K]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let K=0,ee=k.length;K<ee;K++){const $=i.get(k[K]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(C)}let y=0;function E(){y=0}function F(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){const k=i.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(k,C,S);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function q(C,S){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Be(k,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function B(C,S){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Be(k,C,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function Z(C,S){const k=i.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const L={[pd]:t.REPEAT,[Er]:t.CLAMP_TO_EDGE,[md]:t.MIRRORED_REPEAT},Y={[rn]:t.NEAREST,[Uy]:t.NEAREST_MIPMAP_NEAREST,[ha]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[bc]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},J={[zy]:t.NEVER,[Xy]:t.ALWAYS,[By]:t.LESS,[j0]:t.LEQUAL,[Vy]:t.EQUAL,[Wy]:t.GEQUAL,[Hy]:t.GREATER,[Gy]:t.NOTEQUAL};function se(C,S){if(S.type===ei&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Bn||S.magFilter===bc||S.magFilter===ha||S.magFilter===wr||S.minFilter===Bn||S.minFilter===bc||S.minFilter===ha||S.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Y[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Y[S.minFilter]),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==ha&&S.minFilter!==wr||S.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Te(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const K=S.source;let ee=h.get(K);ee===void 0&&(ee={},h.set(K,ee));const $=O(S);if($!==C.__cacheKey){ee[$]===void 0&&(ee[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[$].usedTimes++;const Me=ee[C.__cacheKey];Me!==void 0&&(ee[C.__cacheKey].usedTimes--,Me.usedTimes===0&&P(S)),C.__cacheKey=$,C.__webglTexture=ee[$].texture}return k}function Be(C,S,k){let K=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=t.TEXTURE_3D);const ee=Te(C,S),$=S.source;n.bindTexture(K,C.__webglTexture,t.TEXTURE0+k);const Me=i.get($);if($.version!==Me.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const ae=Je.getPrimaries(Je.workingColorSpace),ge=S.colorSpace===ki?null:Je.getPrimaries(S.colorSpace),Ye=S.colorSpace===ki||ae===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ie=x(S.image,!1,r.maxTextureSize);ie=at(S,ie);const _e=s.convert(S.format,S.colorSpace),be=s.convert(S.type);let Le=g(S.internalFormat,_e,be,S.colorSpace,S.isVideoTexture);se(K,S);let ve;const He=S.mipmaps,Ne=S.isVideoTexture!==!0,rt=Me.__version===void 0||ee===!0,I=$.dataReady,fe=M(S,ie);if(S.isDepthTexture)Le=v(S.format===Ds,S.type),rt&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,Le,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,_e,be,null));else if(S.isDataTexture)if(He.length>0){Ne&&rt&&n.texStorage2D(t.TEXTURE_2D,fe,Le,He[0].width,He[0].height);for(let X=0,Q=He.length;X<Q;X++)ve=He[X],Ne?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ve.width,ve.height,_e,be,ve.data):n.texImage2D(t.TEXTURE_2D,X,Le,ve.width,ve.height,0,_e,be,ve.data);S.generateMipmaps=!1}else Ne?(rt&&n.texStorage2D(t.TEXTURE_2D,fe,Le,ie.width,ie.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,_e,be,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,_e,be,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ne&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Le,He[0].width,He[0].height,ie.depth);for(let X=0,Q=He.length;X<Q;X++)if(ve=He[X],S.format!==Hn)if(_e!==null)if(Ne){if(I)if(S.layerUpdates.size>0){const ce=lm(ve.width,ve.height,S.format,S.type);for(const he of S.layerUpdates){const Xe=ve.data.subarray(he*ce/ve.data.BYTES_PER_ELEMENT,(he+1)*ce/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,he,ve.width,ve.height,1,_e,Xe,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,ie.depth,_e,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Le,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,ie.depth,_e,be,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Le,ve.width,ve.height,ie.depth,0,_e,be,ve.data)}else{Ne&&rt&&n.texStorage2D(t.TEXTURE_2D,fe,Le,He[0].width,He[0].height);for(let X=0,Q=He.length;X<Q;X++)ve=He[X],S.format!==Hn?_e!==null?Ne?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ve.width,ve.height,_e,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ve.width,ve.height,_e,be,ve.data):n.texImage2D(t.TEXTURE_2D,X,Le,ve.width,ve.height,0,_e,be,ve.data)}else if(S.isDataArrayTexture)if(Ne){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Le,ie.width,ie.height,ie.depth),I)if(S.layerUpdates.size>0){const X=lm(ie.width,ie.height,S.format,S.type);for(const Q of S.layerUpdates){const ce=ie.data.subarray(Q*X/ie.data.BYTES_PER_ELEMENT,(Q+1)*X/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,_e,be,ce)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,be,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,_e,be,ie.data);else if(S.isData3DTexture)Ne?(rt&&n.texStorage3D(t.TEXTURE_3D,fe,Le,ie.width,ie.height,ie.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,be,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,_e,be,ie.data);else if(S.isFramebufferTexture){if(rt)if(Ne)n.texStorage2D(t.TEXTURE_2D,fe,Le,ie.width,ie.height);else{let X=ie.width,Q=ie.height;for(let ce=0;ce<fe;ce++)n.texImage2D(t.TEXTURE_2D,ce,Le,X,Q,0,_e,be,null),X>>=1,Q>>=1}}else if(He.length>0){if(Ne&&rt){const X=Ie(He[0]);n.texStorage2D(t.TEXTURE_2D,fe,Le,X.width,X.height)}for(let X=0,Q=He.length;X<Q;X++)ve=He[X],Ne?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e,be,ve):n.texImage2D(t.TEXTURE_2D,X,Le,_e,be,ve);S.generateMipmaps=!1}else if(Ne){if(rt){const X=Ie(ie);n.texStorage2D(t.TEXTURE_2D,fe,Le,X.width,X.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,be,ie)}else n.texImage2D(t.TEXTURE_2D,0,Le,_e,be,ie);m(S)&&d(K),Me.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function j(C,S,k){if(S.image.length!==6)return;const K=Te(C,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+k);const $=i.get(ee);if(ee.version!==$.__version||K===!0){n.activeTexture(t.TEXTURE0+k);const Me=Je.getPrimaries(Je.workingColorSpace),ae=S.colorSpace===ki?null:Je.getPrimaries(S.colorSpace),ge=S.colorSpace===ki||Me===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!Ye&&!ie?_e[Q]=x(S.image[Q],!0,r.maxCubemapSize):_e[Q]=ie?S.image[Q].image:S.image[Q],_e[Q]=at(S,_e[Q]);const be=_e[0],Le=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),He=g(S.internalFormat,Le,ve,S.colorSpace),Ne=S.isVideoTexture!==!0,rt=$.__version===void 0||K===!0,I=ee.dataReady;let fe=M(S,be);se(t.TEXTURE_CUBE_MAP,S);let X;if(Ye){Ne&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,He,be.width,be.height);for(let Q=0;Q<6;Q++){X=_e[Q].mipmaps;for(let ce=0;ce<X.length;ce++){const he=X[ce];S.format!==Hn?Le!==null?Ne?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,he.width,he.height,Le,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,He,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,he.width,he.height,Le,ve,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,He,he.width,he.height,0,Le,ve,he.data)}}}else{if(X=S.mipmaps,Ne&&rt){X.length>0&&fe++;const Q=Ie(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,He,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){Ne?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,Le,ve,_e[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,_e[Q].width,_e[Q].height,0,Le,ve,_e[Q].data);for(let ce=0;ce<X.length;ce++){const Xe=X[ce].image[Q].image;Ne?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Xe.width,Xe.height,Le,ve,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,He,Xe.width,Xe.height,0,Le,ve,Xe.data)}}else{Ne?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,ve,_e[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,Le,ve,_e[Q]);for(let ce=0;ce<X.length;ce++){const he=X[ce];Ne?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Le,ve,he.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,He,Le,ve,he.image[Q])}}}m(S)&&d(t.TEXTURE_CUBE_MAP),$.__version=ee.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ne(C,S,k,K,ee,$){const Me=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),ge=g(k.internalFormat,Me,ae,k.colorSpace);if(!i.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>$),_e=Math.max(1,S.height>>$);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,$,ge,ie,_e,S.depth,0,Me,ae,null):n.texImage2D(ee,$,ge,ie,_e,0,Me,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),$e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ee,i.get(k).__webglTexture,0,Ve(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ee,i.get(k).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(C,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer){const K=S.depthTexture,ee=K&&K.isDepthTexture?K.type:null,$=v(S.stencilBuffer,ee),Me=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=Ve(S);$e(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,$,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,$,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,C)}else{const K=S.textures;for(let ee=0;ee<K.length;ee++){const $=K[ee],Me=s.convert($.format,$.colorSpace),ae=s.convert($.type),ge=g($.internalFormat,Me,ae,$.colorSpace),Ye=Ve(S);k&&$e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,ge,S.width,S.height):$e(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const K=i.get(S.depthTexture).__webglTexture,ee=Ve(S);if(S.depthTexture.format===ys)$e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(S.depthTexture.format===Ds)$e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function De(C){const S=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");le(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=t.createRenderbuffer(),de(S.__webglDepthbuffer[K],C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),de(S.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(C,S,k){const K=i.get(C);S!==void 0&&ne(K.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&De(C)}function Ge(C){const S=C.texture,k=i.get(C),K=i.get(S);C.addEventListener("dispose",A);const ee=C.textures,$=C.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=S.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let ge=0;ge<S.mipmaps.length;ge++)k.__webglFramebuffer[ae][ge]=t.createFramebuffer()}else k.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)k.__webglFramebuffer[ae]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ae=0,ge=ee.length;ae<ge;ae++){const Ye=i.get(ee[ae]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&$e(C)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const ge=ee[ae];k.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const Ye=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),_e=g(ge.internalFormat,Ye,ie,ge.colorSpace,C.isXRRenderTarget===!0),be=Ve(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,_e,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),de(k.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),se(t.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)ne(k.__webglFramebuffer[ae][ge],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ge);else ne(k.__webglFramebuffer[ae],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ae=0,ge=ee.length;ae<ge;ae++){const Ye=ee[ae],ie=i.get(Ye);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),se(t.TEXTURE_2D,Ye),ne(k.__webglFramebuffer,C,Ye,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(Ye)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,K.__webglTexture),se(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)ne(k.__webglFramebuffer[ge],C,S,t.COLOR_ATTACHMENT0,ae,ge);else ne(k.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,ae,0);m(S)&&d(ae),n.unbindTexture()}C.depthBuffer&&De(C)}function nt(C){const S=C.textures;for(let k=0,K=S.length;k<K;k++){const ee=S[k];if(m(ee)){const $=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ee).__webglTexture;n.bindTexture($,Me),d($),n.unbindTexture()}}}const We=[],b=[];function cn(C){if(C.samples>0){if($e(C)===!1){const S=C.textures,k=C.width,K=C.height;let ee=t.COLOR_BUFFER_BIT;const $=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(C),ae=S.length>1;if(ae)for(let ge=0;ge<S.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const Ye=i.get(S[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,k,K,0,0,k,K,ee,t.NEAREST),l===!0&&(We.length=0,b.length=0,We.push(t.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(We.push($),b.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let ge=0;ge<S.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const Ye=i.get(S[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ve(C){return Math.min(r.maxSamples,C.samples)}function $e(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function at(C,S){const k=C.colorSpace,K=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==or&&k!==ki&&(Je.getTransfer(k)===ut?(K!==Hn||ee!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=Ce,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=$e}function Zw(t,e){function n(i,r=ki){let s;const o=Je.getTransfer(r);if(i===Mi)return t.UNSIGNED_BYTE;if(i===Vf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===k0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===F0)return t.BYTE;if(i===O0)return t.SHORT;if(i===Oo)return t.UNSIGNED_SHORT;if(i===Bf)return t.INT;if(i===Ir)return t.UNSIGNED_INT;if(i===ei)return t.FLOAT;if(i===Go)return t.HALF_FLOAT;if(i===z0)return t.ALPHA;if(i===B0)return t.RGB;if(i===Hn)return t.RGBA;if(i===V0)return t.LUMINANCE;if(i===H0)return t.LUMINANCE_ALPHA;if(i===ys)return t.DEPTH_COMPONENT;if(i===Ds)return t.DEPTH_STENCIL;if(i===Gf)return t.RED;if(i===Wf)return t.RED_INTEGER;if(i===G0)return t.RG;if(i===Xf)return t.RG_INTEGER;if(i===jf)return t.RGBA_INTEGER;if(i===qa||i===$a||i===Ya||i===Ka)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===_d||i===vd||i===xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yd||i===Md||i===Sd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yd||i===Md)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ed||i===wd||i===Td||i===Ad||i===Cd||i===Rd||i===Pd||i===bd||i===Ld||i===Id||i===Dd||i===Nd||i===Ud||i===Fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ed)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ad)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ld)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ud)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Za||i===Od||i===kd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Za)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Od)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===W0||i===zd||i===Bd||i===Vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Qw extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jt extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jw={type:"move"};class ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const eT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new nr({vertexShader:eT,fragmentShader:tT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pe(new En(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iT extends ks{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const x=new nT,m=n.getContextAttributes();let d=null,g=null;const v=[],M=[],R=new ke;let A=null;const T=new mn;T.layers.enable(1),T.viewport=new it;const P=new mn;P.layers.enable(2),P.viewport=new it;const H=[T,P],y=new Qw;y.layers.enable(1),y.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=v[j];return ne===void 0&&(ne=new ou,v[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=v[j];return ne===void 0&&(ne=new ou,v[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=v[j];return ne===void 0&&(ne=new ou,v[j]=ne),ne.getHandSpace()};function O(j){const ne=M.indexOf(j.inputSource);if(ne===-1)return;const de=v[ne];de!==void 0&&(de.update(j.inputSource,j.frame,c||o),de.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",q);for(let j=0;j<v.length;j++){const ne=M[j];ne!==null&&(M[j]=null,v[j].disconnect(ne))}E=null,F=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,g=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Dr(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Ds:ys,de=m.stencil?Is:Ir);const De={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Dr(h.textureWidth,h.textureHeight,{format:Hn,type:Mi,depthTexture:new s_(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(j){for(let ne=0;ne<j.removed.length;ne++){const de=j.removed[ne],le=M.indexOf(de);le>=0&&(M[le]=null,v[le].disconnect(de))}for(let ne=0;ne<j.added.length;ne++){const de=j.added[ne];let le=M.indexOf(de);if(le===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=M.length){M.push(de),le=Ce;break}else if(M[Ce]===null){M[Ce]=de,le=Ce;break}if(le===-1)break}const De=v[le];De&&De.connect(de)}}const B=new U,Z=new U;function L(j,ne,de){B.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);const le=B.distanceTo(Z),De=ne.projectionMatrix.elements,Ce=de.projectionMatrix.elements,Ge=De[14]/(De[10]-1),nt=De[14]/(De[10]+1),We=(De[9]+1)/De[5],b=(De[9]-1)/De[5],cn=(De[8]-1)/De[0],Ve=(Ce[8]+1)/Ce[0],$e=Ge*cn,Pe=Ge*Ve,at=le/(-cn+Ve),Ie=at*-cn;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ie),j.translateZ(at),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),De[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const C=Ge+at,S=nt+at,k=$e-Ie,K=Pe+(le-Ie),ee=We*nt/S*C,$=b*nt/S*C;j.projectionMatrix.makePerspective(k,K,ee,$,C,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Y(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ne=j.near,de=j.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(de=x.depthFar)),y.near=P.near=T.near=ne,y.far=P.far=T.far=de,(E!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,F=y.far);const le=j.parent,De=y.cameras;Y(y,le);for(let Ce=0;Ce<De.length;Ce++)Y(De[Ce],le);De.length===2?L(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),J(j,y,le)};function J(j,ne,de){de===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let se=null;function Te(j,ne){if(u=ne.getViewerPose(c||o),_=ne,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let le=!1;de.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Ce=0;Ce<de.length;Ce++){const Ge=de[Ce];let nt=null;if(p!==null)nt=p.getViewport(Ge);else{const b=f.getViewSubImage(h,Ge);nt=b.viewport,Ce===0&&(e.setRenderTargetTextures(g,b.colorTexture,h.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(g))}let We=H[Ce];We===void 0&&(We=new mn,We.layers.enable(Ce),We.viewport=new it,H[Ce]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(nt.x,nt.y,nt.width,nt.height),Ce===0&&(y.matrix.copy(We.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(We)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ce=f.getDepthInformation(de[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,r.renderState)}}for(let de=0;de<v.length;de++){const le=M[de],De=v[de];le!==null&&De!==void 0&&De.update(le,ne,c||o)}se&&se(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Be=new i_;Be.setAnimationLoop(Te),this.setAnimationLoop=function(j){se=j},this.dispose=function(){}}}const hr=new ii,rT=new ot;function sT(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,e_(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,g,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d),v=g.envMap,M=g.envMapRotation;v&&(m.envMap.value=v,hr.copy(M),hr.x*=-1,hr.y*=-1,hr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),m.envMapRotation.value.setFromMatrix4(rT.makeRotationFromEuler(hr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(_(g),M=u(g),r[g.id]=M,g.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(g,R);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function u(g){const v=f();g.__bindingPointIndex=v;const M=t.createBuffer(),R=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],M=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=M.length;A<T;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let H=0,y=P.length;H<y;H++){const E=P[H];if(p(E,A,H,R)===!0){const F=E.__offset,O=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let q=0;q<O.length;q++){const B=O[q],Z=x(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,F+G,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,M,R){const A=g.value,T=v+"_"+M;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const P=R[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(g){const v=g.uniforms;let M=0;const R=16;for(let T=0,P=v.length;T<P;T++){const H=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,E=H.length;y<E;y++){const F=H[y],O=Array.isArray(F.value)?F.value:[F.value];for(let G=0,q=O.length;G<q;G++){const B=O[G],Z=x(B),L=M%R,Y=L%Z.boundary,J=L+Y;M+=Y,J!==0&&R-J<Z.storage&&(M+=R-J),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=Z.storage}}}const A=M%R;return A>0&&(M+=R-A),g.__size=M,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class aT{constructor(e={}){const{canvas:n=qy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const d=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Qi,this.toneMappingExposure=1;const v=this;let M=!1,R=0,A=0,T=null,P=-1,H=null;const y=new it,E=new it;let F=null;const O=new ze(0);let G=0,q=n.width,B=n.height,Z=1,L=null,Y=null;const J=new it(0,0,q,B),se=new it(0,0,q,B);let Te=!1;const Be=new $f;let j=!1,ne=!1;const de=new ot,le=new ot,De=new U,Ce=new it,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function We(){return T===null?Z:1}let b=i;function cn(w,D){return n.getContext(w,D)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zf}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",he,!1),b===null){const D="webgl2";if(b=cn(D,w),b===null)throw cn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ve,$e,Pe,at,Ie,C,S,k,K,ee,$,Me,ae,ge,Ye,ie,_e,be,Le,ve,He,Ne,rt,I;function fe(){Ve=new f1(b),Ve.init(),Ne=new Zw(b,Ve),$e=new o1(b,Ve,e,Ne),Pe=new $w(b),$e.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),at=new m1(b),Ie=new Dw,C=new Kw(b,Ve,Pe,Ie,$e,Ne,at),S=new l1(v),k=new d1(v),K=new SM(b),rt=new r1(b,K),ee=new h1(b,K,at,rt),$=new _1(b,ee,K,at),Le=new g1(b,$e,C),ie=new a1(Ie),Me=new Iw(v,S,k,Ve,$e,rt,ie),ae=new sT(v,Ie),ge=new Uw,Ye=new Vw(Ve),be=new i1(v,S,k,Pe,$,h,l),_e=new jw(v,$,$e),I=new oT(b,at,$e,Pe),ve=new s1(b,Ve,at),He=new p1(b,Ve,at),at.programs=Me.programs,v.capabilities=$e,v.extensions=Ve,v.properties=Ie,v.renderLists=ge,v.shadowMap=_e,v.state=Pe,v.info=at}fe();const X=new iT(v,b);this.xr=X,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(q,B,!1))},this.getSize=function(w){return w.set(q,B)},this.setSize=function(w,D,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,B=D,n.width=Math.floor(w*Z),n.height=Math.floor(D*Z),z===!0&&(n.style.width=w+"px",n.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(q*Z,B*Z).floor()},this.setDrawingBufferSize=function(w,D,z){q=w,B=D,Z=z,n.width=Math.floor(w*z),n.height=Math.floor(D*z),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,D,z,V){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,D,z,V),Pe.viewport(y.copy(J).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,D,z,V){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,D,z,V),Pe.scissor(E.copy(se).multiplyScalar(Z).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){Pe.setScissorTest(Te=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(w=!0,D=!0,z=!0){let V=0;if(w){let N=!1;if(T!==null){const re=T.texture.format;N=re===jf||re===Xf||re===Wf}if(N){const re=T.texture.type,ue=re===Mi||re===Ir||re===Oo||re===Is||re===Vf||re===Hf,xe=be.getClearColor(),ye=be.getClearAlpha(),Ae=xe.r,Re=xe.g,Se=xe.b;ue?(p[0]=Ae,p[1]=Re,p[2]=Se,p[3]=ye,b.clearBufferuiv(b.COLOR,0,p)):(_[0]=Ae,_[1]=Re,_[2]=Se,_[3]=ye,b.clearBufferiv(b.COLOR,0,_))}else V|=b.COLOR_BUFFER_BIT}D&&(V|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(V|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),Ye.dispose(),Ie.dispose(),S.dispose(),k.dispose(),$.dispose(),rt.dispose(),I.dispose(),Me.dispose(),X.dispose(),X.removeEventListener("sessionstart",Zf),X.removeEventListener("sessionend",Qf),ar.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=at.autoReset,D=_e.enabled,z=_e.autoUpdate,V=_e.needsUpdate,N=_e.type;fe(),at.autoReset=w,_e.enabled=D,_e.autoUpdate=z,_e.needsUpdate=V,_e.type=N}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xe(w){const D=w.target;D.removeEventListener("dispose",Xe),yt(D)}function yt(w){Kt(w),Ie.remove(w)}function Kt(w){const D=Ie.get(w).programs;D!==void 0&&(D.forEach(function(z){Me.releaseProgram(z)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,z,V,N,re){D===null&&(D=Ge);const ue=N.isMesh&&N.matrixWorld.determinant()<0,xe=d_(w,D,z,V,N);Pe.setMaterial(V,ue);let ye=z.index,Ae=1;if(V.wireframe===!0){if(ye=ee.getWireframeAttribute(z),ye===void 0)return;Ae=2}const Re=z.drawRange,Se=z.attributes.position;let et=Re.start*Ae,lt=(Re.start+Re.count)*Ae;re!==null&&(et=Math.max(et,re.start*Ae),lt=Math.min(lt,(re.start+re.count)*Ae)),ye!==null?(et=Math.max(et,0),lt=Math.min(lt,ye.count)):Se!=null&&(et=Math.max(et,0),lt=Math.min(lt,Se.count));const gt=lt-et;if(gt<0||gt===1/0)return;rt.setup(N,V,xe,z,ye);let un,Ze=ve;if(ye!==null&&(un=K.get(ye),Ze=He,Ze.setIndex(un)),N.isMesh)V.wireframe===!0?(Pe.setLineWidth(V.wireframeLinewidth*We()),Ze.setMode(b.LINES)):Ze.setMode(b.TRIANGLES);else if(N.isLine){let Ee=V.linewidth;Ee===void 0&&(Ee=1),Pe.setLineWidth(Ee*We()),N.isLineSegments?Ze.setMode(b.LINES):N.isLineLoop?Ze.setMode(b.LINE_LOOP):Ze.setMode(b.LINE_STRIP)}else N.isPoints?Ze.setMode(b.POINTS):N.isSprite&&Ze.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ee=N._multiDrawStarts,Dt=N._multiDrawCounts,Qe=N._multiDrawCount,In=ye?K.get(ye).bytesPerElement:1,Or=Ie.get(V).currentProgram.getUniforms();for(let dn=0;dn<Qe;dn++)Or.setValue(b,"_gl_DrawID",dn),Ze.render(Ee[dn]/In,Dt[dn])}else if(N.isInstancedMesh)Ze.renderInstances(et,gt,N.count);else if(z.isInstancedBufferGeometry){const Ee=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Dt=Math.min(z.instanceCount,Ee);Ze.renderInstances(et,gt,Dt)}else Ze.render(et,gt)};function Ke(w,D,z){w.transparent===!0&&w.side===Cn&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,Yo(w,D,z),w.side=tr,w.needsUpdate=!0,Yo(w,D,z),w.side=Cn):Yo(w,D,z)}this.compile=function(w,D,z=null){z===null&&(z=w),m=Ye.get(z),m.init(D),g.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),w!==z&&w.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){const xe=re[ue];Ke(xe,z,N),V.add(xe)}else Ke(re,z,N),V.add(re)}),g.pop(),m=null,V},this.compileAsync=function(w,D,z=null){const V=this.compile(w,D,z);return new Promise(N=>{function re(){if(V.forEach(function(ue){Ie.get(ue).currentProgram.isReady()&&V.delete(ue)}),V.size===0){N(w);return}setTimeout(re,10)}Ve.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Zt=null;function ri(w){Zt&&Zt(w)}function Zf(){ar.stop()}function Qf(){ar.start()}const ar=new i_;ar.setAnimationLoop(ri),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(w){Zt=w,X.setAnimationLoop(w),w===null?ar.stop():ar.start()},X.addEventListener("sessionstart",Zf),X.addEventListener("sessionend",Qf),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,T),m=Ye.get(w,g.length),m.init(D),g.push(m),le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Be.setFromProjectionMatrix(le),ne=this.localClippingEnabled,j=ie.init(this.clippingPlanes,ne),x=ge.get(w,d.length),x.init(),d.push(x),X.enabled===!0&&X.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&ec(re,D,-1/0,v.sortObjects)}ec(w,D,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(L,Y),nt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,nt&&be.addToRenderList(x,w),this.info.render.frame++,j===!0&&ie.beginShadows();const z=m.state.shadowsArray;_e.render(z,w,D),j===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,N=x.transmissive;if(m.setupLights(),D.isArrayCamera){const re=D.cameras;if(N.length>0)for(let ue=0,xe=re.length;ue<xe;ue++){const ye=re[ue];eh(V,N,w,ye)}nt&&be.render(w);for(let ue=0,xe=re.length;ue<xe;ue++){const ye=re[ue];Jf(x,w,ye,ye.viewport)}}else N.length>0&&eh(V,N,w,D),nt&&be.render(w),Jf(x,w,D);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,D),rt.resetDefaultState(),P=-1,H=null,g.pop(),g.length>0?(m=g[g.length-1],j===!0&&ie.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function ec(w,D,z,V){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Be.intersectsSprite(w)){V&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);const ue=$.update(w),xe=w.material;xe.visible&&x.push(w,ue,xe,z,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Be.intersectsObject(w))){const ue=$.update(w),xe=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ce.copy(ue.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(xe)){const ye=ue.groups;for(let Ae=0,Re=ye.length;Ae<Re;Ae++){const Se=ye[Ae],et=xe[Se.materialIndex];et&&et.visible&&x.push(w,ue,et,z,Ce.z,Se)}}else xe.visible&&x.push(w,ue,xe,z,Ce.z,null)}}const re=w.children;for(let ue=0,xe=re.length;ue<xe;ue++)ec(re[ue],D,z,V)}function Jf(w,D,z,V){const N=w.opaque,re=w.transmissive,ue=w.transparent;m.setupLightsView(z),j===!0&&ie.setGlobalState(v.clippingPlanes,z),V&&Pe.viewport(y.copy(V)),N.length>0&&$o(N,D,z),re.length>0&&$o(re,D,z),ue.length>0&&$o(ue,D,z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function eh(w,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Dr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Go:Mi,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const re=m.state.transmissionRenderTarget[V.id],ue=V.viewport||y;re.setSize(ue.z,ue.w);const xe=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(O),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),nt&&be.render(z);const ye=v.toneMapping;v.toneMapping=Qi;const Ae=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),j===!0&&ie.setGlobalState(v.clippingPlanes,V),$o(w,z,V),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Se=0,et=D.length;Se<et;Se++){const lt=D[Se],gt=lt.object,un=lt.geometry,Ze=lt.material,Ee=lt.group;if(Ze.side===Cn&&gt.layers.test(V.layers)){const Dt=Ze.side;Ze.side=ln,Ze.needsUpdate=!0,th(gt,z,V,un,Ze,Ee),Ze.side=Dt,Ze.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}v.setRenderTarget(xe),v.setClearColor(O,G),Ae!==void 0&&(V.viewport=Ae),v.toneMapping=ye}function $o(w,D,z){const V=D.isScene===!0?D.overrideMaterial:null;for(let N=0,re=w.length;N<re;N++){const ue=w[N],xe=ue.object,ye=ue.geometry,Ae=V===null?ue.material:V,Re=ue.group;xe.layers.test(z.layers)&&th(xe,D,z,ye,Ae,Re)}}function th(w,D,z,V,N,re){w.onBeforeRender(v,D,z,V,N,re),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,D,z,V,w,re),N.transparent===!0&&N.side===Cn&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,v.renderBufferDirect(z,D,V,N,w,re),N.side=tr,N.needsUpdate=!0,v.renderBufferDirect(z,D,V,N,w,re),N.side=Cn):v.renderBufferDirect(z,D,V,N,w,re),w.onAfterRender(v,D,z,V,N,re)}function Yo(w,D,z){D.isScene!==!0&&(D=Ge);const V=Ie.get(w),N=m.state.lights,re=m.state.shadowsArray,ue=N.state.version,xe=Me.getParameters(w,N.state,re,D,z),ye=Me.getProgramCacheKey(xe);let Ae=V.programs;V.environment=w.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(w.isMeshStandardMaterial?k:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",Xe),Ae=new Map,V.programs=Ae);let Re=Ae.get(ye);if(Re!==void 0){if(V.currentProgram===Re&&V.lightsStateVersion===ue)return ih(w,xe),Re}else xe.uniforms=Me.getUniforms(w),w.onBeforeCompile(xe,v),Re=Me.acquireProgram(xe,ye),Ae.set(ye,Re),V.uniforms=xe.uniforms;const Se=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=ie.uniform),ih(w,xe),V.needsLights=h_(w),V.lightsStateVersion=ue,V.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Re,V.uniformsList=null,Re}function nh(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=Ja.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function ih(w,D){const z=Ie.get(w);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function d_(w,D,z,V,N){D.isScene!==!0&&(D=Ge),C.resetTextureUnits();const re=D.fog,ue=V.isMeshStandardMaterial?D.environment:null,xe=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:or,ye=(V.isMeshStandardMaterial?k:S).get(V.envMap||ue),Ae=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Re=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!z.morphAttributes.position,et=!!z.morphAttributes.normal,lt=!!z.morphAttributes.color;let gt=Qi;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gt=v.toneMapping);const un=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=un!==void 0?un.length:0,Ee=Ie.get(V),Dt=m.state.lights;if(j===!0&&(ne===!0||w!==H)){const Mn=w===H&&V.id===P;ie.setState(V,w,Mn)}let Qe=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Dt.state.version||Ee.outputColorSpace!==xe||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==ye||V.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==Se||Ee.morphNormals!==et||Ee.morphColors!==lt||Ee.toneMapping!==gt||Ee.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ee.__version=V.version);let In=Ee.currentProgram;Qe===!0&&(In=Yo(V,D,N));let Or=!1,dn=!1,tc=!1;const vt=In.getUniforms(),Ei=Ee.uniforms;if(Pe.useProgram(In.program)&&(Or=!0,dn=!0,tc=!0),V.id!==P&&(P=V.id,dn=!0),Or||H!==w){$e.reverseDepthBuffer?(de.copy(w.projectionMatrix),Yy(de),Ky(de),vt.setValue(b,"projectionMatrix",de)):vt.setValue(b,"projectionMatrix",w.projectionMatrix),vt.setValue(b,"viewMatrix",w.matrixWorldInverse);const Mn=vt.map.cameraPosition;Mn!==void 0&&Mn.setValue(b,De.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&vt.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&vt.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,dn=!0,tc=!0)}if(N.isSkinnedMesh){vt.setOptional(b,N,"bindMatrix"),vt.setOptional(b,N,"bindMatrixInverse");const Mn=N.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),vt.setValue(b,"boneTexture",Mn.boneTexture,C))}N.isBatchedMesh&&(vt.setOptional(b,N,"batchingTexture"),vt.setValue(b,"batchingTexture",N._matricesTexture,C),vt.setOptional(b,N,"batchingIdTexture"),vt.setValue(b,"batchingIdTexture",N._indirectTexture,C),vt.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&vt.setValue(b,"batchingColorTexture",N._colorsTexture,C));const nc=z.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0)&&Le.update(N,z,In),(dn||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,vt.setValue(b,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ei.envMap.value=ye,Ei.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Ei.envMapIntensity.value=D.environmentIntensity),dn&&(vt.setValue(b,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&f_(Ei,tc),re&&V.fog===!0&&ae.refreshFogUniforms(Ei,re),ae.refreshMaterialUniforms(Ei,V,Z,B,m.state.transmissionRenderTarget[w.id]),Ja.upload(b,nh(Ee),Ei,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ja.upload(b,nh(Ee),Ei,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&vt.setValue(b,"center",N.center),vt.setValue(b,"modelViewMatrix",N.modelViewMatrix),vt.setValue(b,"normalMatrix",N.normalMatrix),vt.setValue(b,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Mn=V.uniformsGroups;for(let ic=0,p_=Mn.length;ic<p_;ic++){const rh=Mn[ic];I.update(rh,In),I.bind(rh,In)}}return In}function f_(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function h_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,D,z){Ie.get(w.texture).__webglTexture=D,Ie.get(w.depthTexture).__webglTexture=z;const V=Ie.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const z=Ie.get(w);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,z=0){T=w,R=D,A=z;let V=!0,N=null,re=!1,ue=!1;if(w){const ye=Ie.get(w);if(ye.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(b.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(ye.__hasExternalTextures)C.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Se=w.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&Ie.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ue=!0);const Re=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?N=Re[D][z]:N=Re[D],re=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?N=Ie.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[z]:N=Re,y.copy(w.viewport),E.copy(w.scissor),F=w.scissorTest}else y.copy(J).multiplyScalar(Z).floor(),E.copy(se).multiplyScalar(Z).floor(),F=Te;if(Pe.bindFramebuffer(b.FRAMEBUFFER,N)&&V&&Pe.drawBuffers(w,N),Pe.viewport(y),Pe.scissor(E),Pe.setScissorTest(F),re){const ye=Ie.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,z)}else if(ue){const ye=Ie.get(w.texture),Ae=D||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,Ae)}P=-1},this.readRenderTargetPixels=function(w,D,z,V,N,re,ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Pe.bindFramebuffer(b.FRAMEBUFFER,xe);try{const ye=w.texture,Ae=ye.format,Re=ye.type;if(!$e.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-V&&z>=0&&z<=w.height-N&&b.readPixels(D,z,V,N,Ne.convert(Ae),Ne.convert(Re),re)}finally{const ye=T!==null?Ie.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(b.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,D,z,V,N,re,ue){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){const ye=w.texture,Ae=ye.format,Re=ye.type;if(!$e.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-V&&z>=0&&z<=w.height-N){Pe.bindFramebuffer(b.FRAMEBUFFER,xe);const Se=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Se),b.bufferData(b.PIXEL_PACK_BUFFER,re.byteLength,b.STREAM_READ),b.readPixels(D,z,V,N,Ne.convert(Ae),Ne.convert(Re),0);const et=T!==null?Ie.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(b.FRAMEBUFFER,et);const lt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await $y(b,lt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Se),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,re),b.deleteBuffer(Se),b.deleteSync(lt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,z=0){w.isTexture!==!0&&(Qa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-z),N=Math.floor(w.image.width*V),re=Math.floor(w.image.height*V),ue=D!==null?D.x:0,xe=D!==null?D.y:0;C.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,z,0,0,ue,xe,N,re),Pe.unbindTexture()},this.copyTextureToTexture=function(w,D,z=null,V=null,N=0){w.isTexture!==!0&&(Qa("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],D=arguments[2],N=arguments[3]||0,z=null);let re,ue,xe,ye,Ae,Re;z!==null?(re=z.max.x-z.min.x,ue=z.max.y-z.min.y,xe=z.min.x,ye=z.min.y):(re=w.image.width,ue=w.image.height,xe=0,ye=0),V!==null?(Ae=V.x,Re=V.y):(Ae=0,Re=0);const Se=Ne.convert(D.format),et=Ne.convert(D.type);C.setTexture2D(D,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,D.unpackAlignment);const lt=b.getParameter(b.UNPACK_ROW_LENGTH),gt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),un=b.getParameter(b.UNPACK_SKIP_PIXELS),Ze=b.getParameter(b.UNPACK_SKIP_ROWS),Ee=b.getParameter(b.UNPACK_SKIP_IMAGES),Dt=w.isCompressedTexture?w.mipmaps[N]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Dt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Dt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,xe),b.pixelStorei(b.UNPACK_SKIP_ROWS,ye),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,N,Ae,Re,re,ue,Se,et,Dt.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,N,Ae,Re,Dt.width,Dt.height,Se,Dt.data):b.texSubImage2D(b.TEXTURE_2D,N,Ae,Re,re,ue,Se,et,Dt),b.pixelStorei(b.UNPACK_ROW_LENGTH,lt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,gt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,un),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ze),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ee),N===0&&D.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,D,z=null,V=null,N=0){w.isTexture!==!0&&(Qa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,w=arguments[2],D=arguments[3],N=arguments[4]||0);let re,ue,xe,ye,Ae,Re,Se,et,lt;const gt=w.isCompressedTexture?w.mipmaps[N]:w.image;z!==null?(re=z.max.x-z.min.x,ue=z.max.y-z.min.y,xe=z.max.z-z.min.z,ye=z.min.x,Ae=z.min.y,Re=z.min.z):(re=gt.width,ue=gt.height,xe=gt.depth,ye=0,Ae=0,Re=0),V!==null?(Se=V.x,et=V.y,lt=V.z):(Se=0,et=0,lt=0);const un=Ne.convert(D.format),Ze=Ne.convert(D.type);let Ee;if(D.isData3DTexture)C.setTexture3D(D,0),Ee=b.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)C.setTexture2DArray(D,0),Ee=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,D.unpackAlignment);const Dt=b.getParameter(b.UNPACK_ROW_LENGTH),Qe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),In=b.getParameter(b.UNPACK_SKIP_PIXELS),Or=b.getParameter(b.UNPACK_SKIP_ROWS),dn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,gt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,gt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ye),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ae),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Re),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(Ee,N,Se,et,lt,re,ue,xe,un,Ze,gt.data):D.isCompressedArrayTexture?b.compressedTexSubImage3D(Ee,N,Se,et,lt,re,ue,xe,un,gt.data):b.texSubImage3D(Ee,N,Se,et,lt,re,ue,xe,un,Ze,gt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Dt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Qe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,In),b.pixelStorei(b.UNPACK_SKIP_ROWS,Or),b.pixelStorei(b.UNPACK_SKIP_IMAGES,dn),N===0&&D.generateMipmaps&&b.generateMipmap(Ee),Pe.unbindTexture()},this.initRenderTarget=function(w){Ie.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,Pe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qf?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===ql?"display-p3":"srgb"}}class Kf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=n}clone(){return new Kf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lT extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class cT extends qt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=rn,u=rn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cm extends Xn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jr=new ot,um=new ot,Na=[],dm=new Fr,uT=new ot,eo=new pe,to=new jo;class fm extends pe{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new cm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,uT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Fr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Jr),dm.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(dm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new jo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Jr),to.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(to)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(i),e.ray.intersectsSphere(to)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Jr),um.multiplyMatrices(i,Jr),eo.matrixWorld=um,eo.raycast(e,Na);for(let o=0,a=Na.length;o<a;o++){const l=Na[o];l.instanceId=s,l.object=this,n.push(l)}Na.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new cm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new cT(new Float32Array(r*this.count),r,this.count,Gf,ei));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Zn extends qn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let _=0;const x=[],m=i/2;let d=0;g(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new At(f,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(p,2));function g(){const M=new U,R=new U;let A=0;const T=(n-e)/i;for(let P=0;P<=s;P++){const H=[],y=P/s,E=y*(n-e)+e;for(let F=0;F<=r;F++){const O=F/r,G=O*l+a,q=Math.sin(G),B=Math.cos(G);R.x=E*q,R.y=-y*i+m,R.z=E*B,f.push(R.x,R.y,R.z),M.set(q,T,B).normalize(),h.push(M.x,M.y,M.z),p.push(O,1-y),H.push(_++)}x.push(H)}for(let P=0;P<r;P++)for(let H=0;H<s;H++){const y=x[H][P],E=x[H+1][P],F=x[H+1][P+1],O=x[H][P+1];e>0&&(u.push(y,E,O),A+=3),n>0&&(u.push(E,F,O),A+=3)}c.addGroup(d,A,0),d+=A}function v(M){const R=_,A=new ke,T=new U;let P=0;const H=M===!0?e:n,y=M===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,m*y,0),h.push(0,y,0),p.push(.5,.5),_++;const E=_;for(let F=0;F<=r;F++){const G=F/r*l+a,q=Math.cos(G),B=Math.sin(G);T.x=H*B,T.y=m*y,T.z=H*q,f.push(T.x,T.y,T.z),h.push(0,y,0),A.x=q*.5+.5,A.y=B*.5*y+.5,p.push(A.x,A.y),_++}for(let F=0;F<r;F++){const O=R+F,G=E+F;M===!0?u.push(G,G+1,O):u.push(G+1,G,O),P+=3}c.addGroup(d,P,M===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yl extends qn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new U,M=new U,R=new U;for(let A=0;A<n.length;A+=3)p(n[A+0],v),p(n[A+1],M),p(n[A+2],R),l(v,M,R,g)}function l(g,v,M,R){const A=R+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const H=g.clone().lerp(M,P/A),y=v.clone().lerp(M,P/A),E=A-P;for(let F=0;F<=E;F++)F===0&&P===A?T[P][F]=H:T[P][F]=H.clone().lerp(y,F/E)}for(let P=0;P<A;P++)for(let H=0;H<2*(A-P)-1;H++){const y=Math.floor(H/2);H%2===0?(h(T[P][y+1]),h(T[P+1][y]),h(T[P][y])):(h(T[P][y+1]),h(T[P+1][y+1]),h(T[P+1][y]))}}function c(g){const v=new U;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(g),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function u(){const g=new U;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const M=m(g)/2/Math.PI+.5,R=d(g)/Math.PI+.5;o.push(M,1-R)}_(),f()}function f(){for(let g=0;g<o.length;g+=6){const v=o[g+0],M=o[g+2],R=o[g+4],A=Math.max(v,M,R),T=Math.min(v,M,R);A>.9&&T<.1&&(v<.2&&(o[g+0]+=1),M<.2&&(o[g+2]+=1),R<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,v){const M=g*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function _(){const g=new U,v=new U,M=new U,R=new U,A=new ke,T=new ke,P=new ke;for(let H=0,y=0;H<s.length;H+=9,y+=6){g.set(s[H+0],s[H+1],s[H+2]),v.set(s[H+3],s[H+4],s[H+5]),M.set(s[H+6],s[H+7],s[H+8]),A.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),R.copy(g).add(v).add(M).divideScalar(3);const E=m(R);x(A,y+0,g,E),x(T,y+2,v,E),x(P,y+4,M,E)}}function x(g,v,M,R){R<0&&g.x===1&&(o[v]=g.x-1),M.x===0&&M.z===0&&(o[v]=R/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.vertices,e.indices,e.radius,e.details)}}class Pl extends Yl{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Pl(e.radius,e.detail)}}class Kl extends Yl{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Kl(e.radius,e.detail)}}class Zl extends qn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(n-e)/r,p=new U,_=new ke;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,u.push(_.x,_.y)}f+=h}for(let x=0;x<r;x++){const m=x*(i+1);for(let d=0;d<i;d++){const g=d+m,v=g,M=g+i+1,R=g+i+2,A=g+1;a.push(v,M,A),a.push(M,R,A)}}this.setIndex(a),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ql extends qn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new U,h=new U,p=[],_=[],x=[],m=[];for(let d=0;d<=i;d++){const g=[],v=d/i;let M=0;d===0&&o===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const A=R/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(A+M,1-v),g.push(c++)}u.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const v=u[d][g+1],M=u[d][g],R=u[d+1][g],A=u[d+1][g+1];(d!==0||o>0)&&p.push(v,M,A),(d!==i-1||l<Math.PI)&&p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new At(_,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lo extends qo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=X0,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jl extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class dT extends Jl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const au=new ot,hm=new U,pm=new U;class u_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $f,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(hm),pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pm),n.updateMatrixWorld(),au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mm=new ot,no=new U,lu=new U;class fT extends u_{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),i.position.copy(no),lu.copy(i.position),lu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(lu),i.updateMatrixWorld(),r.makeTranslation(-no.x,-no.y,-no.z),mm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mm)}}class gm extends Jl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hT extends u_{constructor(){super(new r_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pT extends Jl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new hT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mT extends Jl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);class zi{static getMaterial(e,n=.5,i=.1){const r=`mat_${e}_${n}_${i}`;return this.materials.has(r)||this.materials.set(r,new lo({color:new ze(e),roughness:n,metalness:i})),this.materials.get(r)}static createCharacter(e,n,i,r){const s=new Jt;s.name=e?"player_character":"pedestrian_character";const o=this.getMaterial(r,.7,0),a=this.getMaterial(n,.6,.1),l=this.getMaterial(i,.8,0),c=this.getMaterial("#0f172a",.9,0),u=this.getMaterial("#1e293b",.8,0),f=new je(.48,.65,.28),h=new pe(f,a);h.position.y=1.05,h.castShadow=!0,h.receiveShadow=!0,s.add(h);const p=new je(.28,.3,.28),_=new pe(p,o);_.position.y=1.55,_.castShadow=!0,s.add(_);const x=new je(.3,.12,.3),m=new pe(x,u);m.position.y=1.72,s.add(m);const d=new je(.14,.55,.14),g=new Jt;g.name="left_arm",g.position.set(-.32,1.32,0);const v=new pe(d,a);v.position.y=-.25,v.castShadow=!0,g.add(v),s.add(g);const M=new Jt;M.name="right_arm",M.position.set(.32,1.32,0);const R=new pe(d,a);R.position.y=-.25,R.castShadow=!0,M.add(R),s.add(M);const A=new je(.18,.68,.18),T=new Jt;T.name="left_leg",T.position.set(-.14,.72,0);const P=new pe(A,l);P.position.y=-.32,P.castShadow=!0,T.add(P);const H=new je(.19,.12,.26),y=new pe(H,c);y.position.set(0,-.66,.04),T.add(y),s.add(T);const E=new Jt;E.name="right_leg",E.position.set(.14,.72,0);const F=new pe(A,l);F.position.y=-.32,F.castShadow=!0,E.add(F);const O=new pe(H,c);if(O.position.set(0,-.66,.04),E.add(O),s.add(E),e){const G=new Zl(.28,.38,16),q=new Et({color:3718648,side:Cn}),B=new pe(G,q);B.rotation.x=Math.PI/2,B.position.y=2.05,B.name="player_indicator",s.add(B)}return s}static createVehicle(e){const n=new Jt;n.name=`veh_group_${e.id}`;const i=this.getMaterial(e.color,e.type==="sports"?.2:.4,e.type==="sports"?.8:.2),r=this.getMaterial("#1e293b",.1,.9),s=this.getMaterial("#1c1917",.9,0),o=this.getMaterial("#cbd5e1",.3,.8),a=new Et({color:16707722}),l=new Et({color:15680580}),c=e.width,u=e.length,f=e.height,h=new je(c,f*.48,u),p=new pe(h,i);p.position.y=f*.38,p.castShadow=!0,p.receiveShadow=!0,n.add(p);const _=c*.84,x=e.type==="truck"?u*.35:u*.52,m=f*.46,d=new je(_,m,x),g=new pe(d,r),v=e.type==="truck"?u*.25:-u*.05;if(g.position.set(0,f*.82,v),g.castShadow=!0,n.add(g),e.type==="truck"){const F=new je(c*.95,f*.8,u*.6),O=this.getMaterial("#94a3b8",.5,.2),G=new pe(F,O);G.position.set(0,f*.65,-u*.16),G.castShadow=!0,n.add(G)}const M=new je(.35,.18,.08),R=new pe(M,a);R.position.set(-c*.36,f*.36,u*.5),n.add(R);const A=new pe(M,a);A.position.set(c*.36,f*.36,u*.5),n.add(A);const T=new je(.35,.16,.08),P=new pe(T,l);P.position.set(-c*.36,f*.36,-u*.5),P.name="tail_left",n.add(P);const H=new pe(T,l);if(H.position.set(c*.36,f*.36,-u*.5),H.name="tail_right",n.add(H),e.isPolice){const F=new je(c*.65,.16,.32),O=new pe(F,this.getMaterial("#0f172a",.5,.5));O.position.set(0,f*1.08,v),n.add(O);const G=new Et({color:16711680}),q=new Et({color:26367}),B=new pe(new je(c*.28,.14,.28),G);B.name="police_red",B.position.set(-c*.18,f*1.15,v),n.add(B);const Z=new pe(new je(c*.28,.14,.28),q);Z.name="police_blue",Z.position.set(c*.18,f*1.15,v),n.add(Z);const L=new gm(16711680,0,15);L.name="police_pt_red",L.position.set(-c*.2,f*1.25,v),n.add(L);const Y=new gm(26367,0,15);Y.name="police_pt_blue",Y.position.set(c*.2,f*1.25,v),n.add(Y)}else if(e.type==="taxi"){const F=new je(.7,.22,.35),O=new Et({color:16707722}),G=new pe(F,O);G.position.set(0,f*1.1,v),n.add(G)}else if(e.isMissionCar){const F=new je(c*1.05,.08,.35),O=this.getMaterial("#06b6d4",.2,.8),G=new pe(F,O);G.position.set(0,f*.85,-u*.46),n.add(G);const q=new Kl(.55,0),B=new Et({color:16436245,wireframe:!1}),Z=new pe(q,B);Z.position.set(0,3.2,0),Z.name="mission_marker_floating",n.add(Z)}const y=.38;return[{name:"wheel_fl",x:-c*.52,z:u*.32,isFront:!0},{name:"wheel_fr",x:c*.52,z:u*.32,isFront:!0},{name:"wheel_rl",x:-c*.52,z:-u*.32,isFront:!1},{name:"wheel_rr",x:c*.52,z:-u*.32,isFront:!1}].forEach(F=>{const O=new Jt;O.name=F.name,O.position.set(F.x,y,F.z);const G=new pe(this.wheelGeom,s);G.rotation.z=Math.PI/2,G.castShadow=!0,O.add(G);const q=new pe(this.rimGeom,o);q.rotation.z=Math.PI/2,O.add(q),n.add(O)}),n}static createBuilding(e){const n=new Jt;n.name=`building_${e.id}`;const i=this.getMaterial(e.color,.7,.1),r=this.getMaterial(e.roofColor,.8,0),s=this.getMaterial("#0284c7",.2,.8),o=new je(e.width,e.height,e.depth),a=new pe(o,i);a.position.set(e.x,e.height/2,e.z),a.castShadow=!0,a.receiveShadow=!0,n.add(a);const l=new je(e.width*1.02,1.2,e.depth*1.02),c=new pe(l,r);if(c.position.set(e.x,e.height+.6,e.z),c.castShadow=!0,n.add(c),e.height>25){const f=new je(4,2.2,3.5),h=new pe(f,this.getMaterial("#64748b",.6,.3));h.position.set(e.x-3,e.height+2,e.z+2),h.castShadow=!0,n.add(h);const p=new Zn(.12,.25,7,8),_=this.getMaterial("#dc2626",.4,.6),x=new pe(p,_);x.position.set(e.x+4,e.height+4.5,e.z-4),n.add(x)}const u=Math.floor(e.height/4);if(u>2)for(let f=1;f<u;f++){const h=f*4,p=new je(e.width*.85,1.4,e.depth+.1),_=new pe(p,s);_.position.set(e.x,h,e.z),n.add(_)}if(e.isRestrictedZone){const f=new je(e.width*1.03,1,e.depth*1.03),h=new Et({color:3900150}),p=new pe(f,h);p.position.set(e.x,8,e.z),n.add(p)}else if(e.isMissionTarget){const f=new je(e.width*1.03,1.2,e.depth*1.03),h=new Et({color:2278750}),p=new pe(f,h);p.position.set(e.x,6,e.z),n.add(p)}return n}static createProp(e){const n=new Jt;switch(n.name=`prop_${e.id}`,n.position.set(e.x,0,e.z),n.rotation.y=e.rotation,e.type){case"lightpole":{const i=this.getMaterial("#475569",.4,.7),r=new Et({color:16707722}),s=new Zn(.12,.16,7.5,8),o=new pe(s,i);o.position.y=3.75,o.castShadow=!0,n.add(o);const a=new Zn(.09,.09,2,8),l=new pe(a,i);l.rotation.z=Math.PI/2.6,l.position.set(.8,7.2,0),n.add(l);const c=new Ql(.24,8,8),u=new pe(c,r);u.position.set(1.6,7,0),n.add(u);break}case"tree":{const i=new Zn(.26,.35,3.2,8),r=this.getMaterial("#78350f",.9,0),s=new pe(i,r);s.position.y=1.6,s.castShadow=!0,n.add(s);const o=this.getMaterial("#15803d",.8,0),a=new pe(new Pl(1.6,1),o);a.position.y=3.8,a.castShadow=!0,n.add(a);const l=new pe(new Pl(1.2,1),o);l.position.set(.4,4.6,.2),l.castShadow=!0,n.add(l);break}case"hydrant":{const i=this.getMaterial("#ef4444",.4,.4),r=new Zn(.2,.22,.8,8),s=new pe(r,i);s.position.y=.4,s.castShadow=!0,n.add(s);break}case"dumpster":{const i=this.getMaterial("#155e75",.6,.3),r=new je(1.8,1.2,1.2),s=new pe(r,i);s.position.y=.6,s.castShadow=!0,s.receiveShadow=!0,n.add(s);break}}return n}}we(zi,"materials",new Map),we(zi,"wheelGeom",new Zn(.38,.38,.28,16)),we(zi,"rimGeom",new Zn(.24,.24,.29,12));class gT{constructor(e){we(this,"smokeMesh");we(this,"sparkMesh");we(this,"dummy",new It);we(this,"maxSmoke",250);we(this,"maxSparks",350);const n=new Ql(1,6,6),i=new Et({color:14870768,transparent:!0,opacity:.45,depthWrite:!1});this.smokeMesh=new fm(n,i,this.maxSmoke),this.smokeMesh.instanceMatrix.setUsage(yp),this.smokeMesh.frustumCulled=!1,e.add(this.smokeMesh);const r=new je(1,1,1),s=new Et({color:16096779,depthWrite:!1});this.sparkMesh=new fm(r,s,this.maxSparks),this.sparkMesh.instanceMatrix.setUsage(yp),this.sparkMesh.frustumCulled=!1,e.add(this.sparkMesh)}update(e){let n=0,i=0;for(const r of e){const s=r.life/r.maxLife;if(r.type==="smoke"&&n<this.maxSmoke){const o=r.size*(1+s*2.2);this.dummy.position.set(r.x,r.y,r.z),this.dummy.scale.set(o,o,o),this.dummy.updateMatrix(),this.smokeMesh.setMatrixAt(n,this.dummy.matrix),n++}else if(r.type==="spark"&&i<this.maxSparks){const o=r.size*(1-s*.7);this.dummy.position.set(r.x,r.y,r.z),this.dummy.scale.set(o,o,o),this.dummy.updateMatrix(),this.sparkMesh.setMatrixAt(i,this.dummy.matrix),i++}}this.dummy.scale.set(0,0,0),this.dummy.updateMatrix();for(let r=n;r<this.maxSmoke;r++)this.smokeMesh.setMatrixAt(r,this.dummy.matrix);for(let r=i;r<this.maxSparks;r++)this.sparkMesh.setMatrixAt(r,this.dummy.matrix);this.smokeMesh.instanceMatrix.needsUpdate=!0,this.sparkMesh.instanceMatrix.needsUpdate=!0}}class _T{constructor(e,n){we(this,"container");we(this,"scene");we(this,"camera");we(this,"renderer");we(this,"particleRenderer");we(this,"vehicleMeshes",new Map);we(this,"pedestrianMeshes",new Map);we(this,"playerMesh",null);we(this,"missionBeaconGroup");we(this,"cameraPosTarget",new U);we(this,"cameraLookTarget",new U);we(this,"handleResize",()=>{if(!this.container)return;const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)});this.container=e,this.scene=new lT,this.scene.background=new ze("#090d16"),this.scene.fog=new Kf("#090d16",.0055),this.camera=new mn(60,e.clientWidth/e.clientHeight,.5,600),this.camera.position.set(0,15,-25),this.renderer=new aT({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=I0,this.renderer.toneMapping=N0,this.renderer.toneMappingExposure=1.05,e.appendChild(this.renderer.domElement),this.setupLighting(),this.buildGroundAndRoads(),this.buildCityEntities(n),this.missionBeaconGroup=this.createMissionBeacon(),this.scene.add(this.missionBeaconGroup),this.particleRenderer=new gT(this.scene),window.addEventListener("resize",this.handleResize)}setupLighting(){const e=new dT(9684477,1976635,.7);this.scene.add(e);const n=new pT(16776171,1.25);n.position.set(90,140,80),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=10,n.shadow.camera.far=350;const i=120;n.shadow.camera.left=-i,n.shadow.camera.right=i,n.shadow.camera.top=i,n.shadow.camera.bottom=-i,n.shadow.bias=-5e-4,this.scene.add(n);const r=new mT(3359061,.45);this.scene.add(r)}buildGroundAndRoads(){const e=new En(340,340),n=new lo({color:1976635,roughness:.9,metalness:.05}),i=new pe(e,n);i.rotation.x=-Math.PI/2,i.position.y=-.05,i.receiveShadow=!0,this.scene.add(i);const r=new En(42,42),s=new lo({color:1467700,roughness:.95,metalness:0}),o=new pe(r,s);o.rotation.x=-Math.PI/2,o.position.set(0,.01,0),o.receiveShadow=!0,this.scene.add(o);const a=new lo({color:988970,roughness:.8,metalness:.1}),l=new lo({color:4674921,roughness:.85,metalness:.05}),c=new Et({color:16436245}),u=new Et({color:16317180});Hi.forEach(f=>{const h=new pe(new En(An,290),a);h.rotation.x=-Math.PI/2,h.position.set(f,.02,0),h.receiveShadow=!0,this.scene.add(h);const p=new pe(new je(Ai,.25,290),l);p.position.set(f+An/2+Ai/2,.1,0),p.receiveShadow=!0,this.scene.add(p);const _=new pe(new je(Ai,.25,290),l);_.position.set(f-An/2-Ai/2,.1,0),_.receiveShadow=!0,this.scene.add(_);for(let x=-140;x<=140;x+=8){const m=new pe(new En(.3,4.5),c);m.rotation.x=-Math.PI/2,m.position.set(f,.04,x),this.scene.add(m)}}),Hi.forEach(f=>{const h=new pe(new En(290,An),a);h.rotation.x=-Math.PI/2,h.position.set(0,.03,f),h.receiveShadow=!0,this.scene.add(h);const p=new pe(new je(290,.25,Ai),l);p.position.set(0,.1,f+An/2+Ai/2),p.receiveShadow=!0,this.scene.add(p);const _=new pe(new je(290,.25,Ai),l);_.position.set(0,.1,f-An/2-Ai/2),_.receiveShadow=!0,this.scene.add(_);for(let x=-140;x<=140;x+=8){const m=new pe(new En(4.5,.3),c);m.rotation.x=-Math.PI/2,m.position.set(x,.045,f),this.scene.add(m)}}),Hi.forEach(f=>{Hi.forEach(h=>{[-8.5,8.5].forEach(p=>{for(let _=-4.5;_<=4.5;_+=1.5){const x=new pe(new En(.8,2.5),u);x.rotation.x=-Math.PI/2,x.position.set(f+_,.05,h+p),this.scene.add(x)}for(let _=-4.5;_<=4.5;_+=1.5){const x=new pe(new En(2.5,.8),u);x.rotation.x=-Math.PI/2,x.position.set(f+p,.05,h+_),this.scene.add(x)}})})})}buildCityEntities(e){e.buildings.forEach(n=>{const i=zi.createBuilding(n);this.scene.add(i)}),e.props.forEach(n=>{const i=zi.createProp(n);this.scene.add(i)}),e.vehicles.forEach(n=>{const i=zi.createVehicle(n);this.vehicleMeshes.set(n.id,i),this.scene.add(i)}),e.pedestrians.forEach(n=>{const i=zi.createCharacter(!1,n.shirtColor,n.pantsColor,n.skinColor);this.pedestrianMeshes.set(n.id,i),this.scene.add(i)}),this.playerMesh=zi.createCharacter(!0,"#38bdf8","#1e293b","#fcd34d"),this.scene.add(this.playerMesh)}createMissionBeacon(){const e=new Jt,n=new Zn(.6,1.4,60,16,1,!0),i=new Et({color:3718648,transparent:!0,opacity:.35,side:Cn,depthWrite:!1}),r=new pe(n,i);r.position.y=30,e.add(r);const s=new Kl(1.2,0),o=new Et({color:16436245}),a=new pe(s,o);a.name="beacon_diamond",a.position.y=4.5,e.add(a);const l=new Zl(3,3.6,24),c=new Et({color:3718648,side:Cn,transparent:!0,opacity:.7}),u=new pe(l,c);return u.rotation.x=Math.PI/2,u.position.y=.15,e.add(u),e}render(e,n){const i=performance.now()/1e3;if(this.playerMesh)if(e.player.state==="driving")this.playerMesh.visible=!1;else{this.playerMesh.visible=!0,this.playerMesh.position.set(e.player.x,0,e.player.z),this.playerMesh.rotation.y=e.player.rotation;const r=this.playerMesh.getObjectByName("left_leg"),s=this.playerMesh.getObjectByName("right_leg"),o=this.playerMesh.getObjectByName("left_arm"),a=this.playerMesh.getObjectByName("right_arm"),l=Math.sin(e.player.legPhase)*.65;r&&(r.rotation.x=l),s&&(s.rotation.x=-l),o&&(o.rotation.x=-l*.7),a&&(a.rotation.x=l*.7)}for(const r of e.vehicles){const s=this.vehicleMeshes.get(r.id);if(!s)continue;s.position.set(r.x,r.y,r.z),s.rotation.y=r.rotation;const o=s.getObjectByName("wheel_fl"),a=s.getObjectByName("wheel_fr");o&&(o.rotation.y=r.steeringAngle),a&&(a.rotation.y=r.steeringAngle);const l=s.getObjectByName("wheel_rl"),c=s.getObjectByName("wheel_rr");o&&o.children[0]&&(o.children[0].rotation.x=r.wheelRotation),a&&a.children[0]&&(a.children[0].rotation.x=r.wheelRotation),l&&l.children[0]&&(l.children[0].rotation.x=r.wheelRotation),c&&c.children[0]&&(c.children[0].rotation.x=r.wheelRotation);const u=s.getObjectByName("tail_left"),f=s.getObjectByName("tail_right");if(u&&f&&u.material.color.setHex(r.isBraking?16711680:8330525),r.isPolice){const h=s.getObjectByName("police_red"),p=s.getObjectByName("police_blue"),_=s.getObjectByName("police_pt_red"),x=s.getObjectByName("police_pt_blue");if(r.sirenActive){const d=Math.sin(i*18)>0;h&&h.material.color.setHex(d?16711680:4524554),p&&p.material.color.setHex(d?536393:35071),_&&(_.intensity=d?2.5:0),x&&(x.intensity=d?0:2.5)}else h&&h.material.color.setHex(4524554),p&&p.material.color.setHex(536393),_&&(_.intensity=0),x&&(x.intensity=0)}if(r.isMissionCar){const h=s.getObjectByName("mission_marker_floating");h&&(h.rotation.y=i*2.5,h.position.y=3.2+Math.sin(i*4)*.3,h.visible=r.driver!=="player"&&e.mission.step==="ENTER_CAR")}}for(const r of e.pedestrians){const s=this.pedestrianMeshes.get(r.id);if(s)if(s.position.set(r.x,0,r.z),s.rotation.y=r.rotation,r.state==="knocked")s.rotation.z=Math.PI/2.2,s.position.y=.2;else{s.rotation.z=0,s.position.y=0;const o=s.getObjectByName("left_leg"),a=s.getObjectByName("right_leg"),l=s.getObjectByName("left_arm"),c=s.getObjectByName("right_arm"),u=Math.sin(r.legPhase)*.55;o&&(o.rotation.x=u),a&&(a.rotation.x=-u),l&&(l.rotation.x=-u*.6),c&&(c.rotation.x=u*.6)}}if(e.mission.active&&!e.mission.completed){this.missionBeaconGroup.visible=!0,this.missionBeaconGroup.position.set(e.mission.targetX,0,e.mission.targetZ);const r=this.missionBeaconGroup.getObjectByName("beacon_diamond");r&&(r.rotation.y=i*2,r.position.y=4.2+Math.sin(i*3.5)*.4)}else this.missionBeaconGroup.visible=!1;this.particleRenderer.update(e.particles),this.updateCamera(e,n),this.renderer.render(this.scene,this.camera)}updateCamera(e,n){const i=e.player.state==="driving",r=e.getPlayerVehicle(),s=i&&r?r.x:e.player.x,o=i&&r?r.y+1.2:1.4,a=i&&r?r.z:e.player.z,l=i&&r?r.rotation:e.player.rotation,c=i&&r?r.speed:Math.sqrt(e.player.vx**2+e.player.vz**2);if(e.cameraMode==="hood"&&i&&r){const f=r.length*.4,h=s+Math.sin(l)*f,p=a+Math.cos(l)*f;this.camera.position.set(h,r.height*.85,p);const _=20;this.camera.lookAt(s+Math.sin(l)*(f+_),o,a+Math.cos(l)*(f+_));return}if(e.cameraMode==="cinematic"){const f=performance.now()/1e3,h=i?22:14,p=s+Math.sin(f*.4)*h,_=a+Math.cos(f*.4)*h,x=o+(i?9:5);this.cameraPosTarget.set(p,x,_),this.cameraLookTarget.set(s,o+1.5,a)}else{const f=i?11.5+Math.min(c/4,4.5):6.8,h=i?5.2+Math.min(c/7,2):3.4,p=s-Math.sin(l)*f,_=a-Math.cos(l)*f,x=o+h;this.cameraPosTarget.set(p,x,_);const m=i?Math.min(c*.5,12):2.5;this.cameraLookTarget.set(s+Math.sin(l)*m,o+(i?1:1.2),a+Math.cos(l)*m);const d=i?60+Math.min(c*.45,18):60;this.camera.fov+=(d-this.camera.fov)*Math.min(n*5,1),this.camera.updateProjectionMatrix()}const u=i?7.5:9;this.camera.position.lerp(this.cameraPosTarget,Math.min(n*u,1)),this.camera.lookAt(this.cameraLookTarget)}dispose(){window.removeEventListener("resize",this.handleResize),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}class vT{constructor(){we(this,"keys",new Set);we(this,"justPressed",new Set);we(this,"handleKeyDown",e=>{(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)||e.key===" ")&&e.preventDefault();const n=this.getActionNames(e.code,e.key);for(const i of n)this.keys.has(i)||this.justPressed.add(i),this.keys.add(i)});we(this,"handleKeyUp",e=>{const n=this.getActionNames(e.code,e.key);for(const i of n)this.keys.delete(i)});we(this,"handleBlur",()=>{this.keys.clear(),this.justPressed.clear()});window.addEventListener("keydown",this.handleKeyDown,{capture:!0}),window.addEventListener("keyup",this.handleKeyUp,{capture:!0}),window.addEventListener("blur",this.handleBlur)}getActionNames(e,n){const i=new Set,r=(e||"").toLowerCase(),s=(n||"").toLowerCase();return r&&i.add(r),s&&i.add(s),r.startsWith("key")&&r.length===4&&i.add(r.charAt(3)),(r==="keyw"||r==="keyz"||r==="arrowup"||s==="w"||s==="z"||s==="ц"||s==="arrowup")&&(i.add("forward"),i.add("w"),i.add("keyw"),i.add("arrowup")),(r==="keys"||r==="arrowdown"||s==="s"||s==="ы"||s==="arrowdown")&&(i.add("backward"),i.add("s"),i.add("keys"),i.add("arrowdown")),(r==="keya"||r==="keyq"||r==="arrowleft"||s==="a"||s==="q"||s==="ф"||s==="arrowleft")&&(i.add("left"),i.add("a"),i.add("keya"),i.add("arrowleft")),(r==="keyd"||r==="arrowright"||s==="d"||s==="в"||s==="arrowright")&&(i.add("right"),i.add("d"),i.add("keyd"),i.add("arrowright")),(r==="keye"||r==="keyf"||r==="enter"||r==="numpadenter"||s==="e"||s==="f"||s==="у"||s==="а"||s==="enter")&&(i.add("interact"),i.add("e"),i.add("f"),i.add("keye"),i.add("keyf"),i.add("enter")),(r==="space"||s===" "||s==="space")&&(i.add("handbrake"),i.add("space"),i.add(" ")),(r==="shiftleft"||r==="shiftright"||s==="shift")&&(i.add("sprint"),i.add("shift")),(r==="keyr"||s==="r"||s==="к")&&(i.add("restart"),i.add("r"),i.add("keyr")),(r==="keym"||s==="m"||s==="ь")&&(i.add("togglesound"),i.add("m"),i.add("keym")),(r==="keyc"||r==="keyv"||s==="c"||s==="v"||s==="с"||s==="м")&&(i.add("cameratoggle"),i.add("c"),i.add("keyc")),(r==="keyh"||s==="h"||s==="р")&&(i.add("helptoggle"),i.add("h"),i.add("keyh")),Array.from(i)}isDown(e){return this.keys.has(e.toLowerCase())}isJustPressed(e){const n=e.toLowerCase();return this.justPressed.has(n)?(this.justPressed.delete(n),!0):!1}triggerAction(e){const n=e.toLowerCase();this.justPressed.add(n)}getMovementInput(){return{forward:this.isDown("forward")||this.isDown("w")||this.isDown("arrowup"),backward:this.isDown("backward")||this.isDown("s")||this.isDown("arrowdown"),left:this.isDown("left")||this.isDown("a")||this.isDown("arrowleft"),right:this.isDown("right")||this.isDown("d")||this.isDown("arrowright"),handbrake:this.isDown("handbrake")||this.isDown("space")||this.isDown(" "),sprint:this.isDown("sprint")||this.isDown("shift")}}resetJustPressed(){this.justPressed.clear()}dispose(){window.removeEventListener("keydown",this.handleKeyDown,{capture:!0}),window.removeEventListener("keyup",this.handleKeyUp,{capture:!0}),window.removeEventListener("blur",this.handleBlur)}}const cu=({filled:t,className:e=""})=>W.jsx("svg",{className:e,viewBox:"0 0 24 24",width:"22",height:"22",fill:t?"#ef4444":"none",stroke:t?"#ef4444":"#64748b",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:W.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),_m=({className:t=""})=>W.jsxs("svg",{className:t,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W.jsx("path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.2 2 11.8 2 12.3v3.7c0 .6.4 1 1 1h2"}),W.jsx("circle",{cx:"7",cy:"17",r:"2"}),W.jsx("circle",{cx:"17",cy:"17",r:"2"})]}),xT=({className:t=""})=>W.jsxs("svg",{className:t,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W.jsx("circle",{cx:"12",cy:"5",r:"2"}),W.jsx("path",{d:"m9 20 3-6 2 3 3-1"}),W.jsx("path",{d:"m6 10 4 2 3-3 4 2"})]}),yT=({className:t=""})=>W.jsxs("svg",{className:t,viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),W.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),W.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]}),MT=({className:t=""})=>W.jsxs("svg",{className:t,viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),W.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),W.jsx("path",{d:"M23 9l-6 6"}),W.jsx("path",{d:"M17 9l6 6"})]}),ST=({className:t=""})=>W.jsxs("svg",{className:t,viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[W.jsx("circle",{cx:"12",cy:"12",r:"10"}),W.jsx("line",{x1:"22",y1:"12",x2:"18",y2:"12"}),W.jsx("line",{x1:"6",y1:"12",x2:"2",y2:"12"}),W.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"2"}),W.jsx("line",{x1:"12",y1:"22",x2:"12",y2:"18"})]}),ET=({simulation:t})=>{const e=Vt.useRef(null);return Vt.useEffect(()=>{let n;const i=()=>{const r=e.current;if(!r)return;const s=r.getContext("2d");if(!s)return;const o=r.width,a=o/2,l=.85,c=t.player.x,u=t.player.z,f=t.player.rotation;s.clearRect(0,0,o,o),s.save(),s.beginPath(),s.arc(a,a,a-2,0,Math.PI*2),s.clip(),s.fillStyle="#090d16ee",s.fillRect(0,0,o,o),s.translate(a,a);const h=(0-c)*l,p=(0-u)*l;s.fillStyle="#14532d88",s.fillRect(h-21*l,p-21*l,42*l,42*l),s.fillStyle="#1e293baa",Hi.forEach(_=>{const x=(_-c)*l;s.fillRect(x-An/2*l,-200,An*l,400)}),Hi.forEach(_=>{const x=(_-u)*l;s.fillRect(-200,x-An/2*l,400,An*l)}),s.fillStyle="#334155aa";for(const _ of t.buildings){const x=(_.x-c)*l,m=(_.z-u)*l,d=_.width*l,g=_.depth*l;_.isRestrictedZone?s.fillStyle="#1e3a8a88":_.isMissionTarget?s.fillStyle="#065f4688":s.fillStyle="#334155aa",s.fillRect(x-d/2,m-g/2,d,g)}for(const _ of t.vehicles){if(_.driver==="player")continue;const x=(_.x-c)*l,m=(_.z-u)*l;if(!(x*x+m*m>(a+10)**2))if(_.isPolice){const d=Math.floor(performance.now()/150)%2===0;s.fillStyle=d?"#ef4444":"#3b82f6",s.beginPath(),s.arc(x,m,3.5,0,Math.PI*2),s.fill()}else _.isMissionCar?(s.fillStyle="#facc15",s.beginPath(),s.arc(x,m,4,0,Math.PI*2),s.fill()):(s.fillStyle="#94a3b8",s.beginPath(),s.arc(x,m,2.5,0,Math.PI*2),s.fill())}s.fillStyle="#cbd5e166";for(const _ of t.pedestrians){const x=(_.x-c)*l,m=(_.z-u)*l;x*x+m*m>a**2||s.fillRect(x-1,m-1,2,2)}if(t.mission.active&&!t.mission.completed){const _=(t.mission.targetX-c)*l,x=(t.mission.targetZ-u)*l,m=Math.sqrt(_*_+x*x);let d=_,g=x;m>a-12&&(d=_/m*(a-12),g=x/m*(a-12));const v=1+Math.sin(performance.now()/200)*.25;s.fillStyle="#facc15",s.beginPath(),s.arc(d,g,5*v,0,Math.PI*2),s.fill(),s.strokeStyle="#fef08a",s.lineWidth=1.5,s.stroke()}s.save(),s.rotate(f),s.fillStyle="#38bdf8",s.beginPath(),s.moveTo(0,7),s.lineTo(-5,-5),s.lineTo(0,-2),s.lineTo(5,-5),s.closePath(),s.fill(),s.restore(),s.restore(),s.strokeStyle="#38bdf866",s.lineWidth=2.5,s.beginPath(),s.arc(a,a,a-2,0,Math.PI*2),s.stroke(),s.fillStyle="#f8fafc",s.font="bold 10px monospace",s.textAlign="center",s.fillText("N",a,14),n=requestAnimationFrame(i)};return n=requestAnimationFrame(i),()=>cancelAnimationFrame(n)},[t]),W.jsx("div",{className:"minimap-container",children:W.jsx("canvas",{ref:e,width:180,height:180,className:"minimap-canvas"})})},wT=({data:t,simulation:e,onInteract:n,onToggleSound:i,onRestart:r,onToggleCamera:s})=>{const[o,a]=Vt.useState(!0),l=Math.round(t.speed*3.6),c=Math.round(t.maxSpeed*3.6),u=Math.min(100,Math.round(l/(c||120)*100));return W.jsxs("div",{className:"hud-overlay",children:[W.jsxs("div",{className:"hud-top-left",children:[W.jsxs("div",{className:"hud-panel status-card",children:[W.jsx("div",{className:"player-badge",children:t.playerState==="driving"?W.jsxs(W.Fragment,{children:[W.jsx(_m,{className:"icon-pulse"}),W.jsxs("span",{className:"badge-text",children:["DRIVING • ",t.vehicleName||"Vehicle"]})]}):W.jsxs(W.Fragment,{children:[W.jsx(xT,{className:"icon-pulse"}),W.jsx("span",{className:"badge-text",children:"ON FOOT"})]})}),W.jsxs("div",{className:`wanted-container ${t.wantedLevel>0?"wanted-active":""}`,children:[W.jsxs("div",{className:"wanted-stars",children:[W.jsx(cu,{filled:t.wantedLevel>=1}),W.jsx(cu,{filled:t.wantedLevel>=2}),W.jsx(cu,{filled:t.wantedLevel>=3})]}),t.wantedLevel>0&&W.jsx("div",{className:"evade-status",children:t.isEvading?W.jsxs("div",{className:"evading-bar-container",children:[W.jsx("span",{className:"evading-text",children:"EVADING POLICE"}),W.jsx("div",{className:"evade-progress-track",children:W.jsx("div",{className:"evade-progress-fill",style:{width:`${Math.round(t.evadeProgress*100)}%`}})})]}):W.jsx("span",{className:"pursuit-text",children:"POLICE PURSUIT ACTIVE"})})]})]}),W.jsxs("div",{className:"hud-panel mission-card",children:[W.jsxs("div",{className:"mission-header",children:[W.jsx(ST,{}),W.jsx("span",{className:"mission-title",children:t.mission.title})]}),W.jsxs("div",{className:"mission-body",children:[W.jsx("p",{className:"mission-objective",children:t.mission.objective}),!t.mission.completed&&W.jsxs("div",{className:"mission-footer",children:[W.jsxs("span",{className:"mission-distance",children:["📍 Distance: ",W.jsxs("strong",{children:[t.mission.distance,"m"]})]}),W.jsxs("span",{className:"mission-timer",children:["⏱️ ",Math.floor(t.mission.elapsed/60),":",String(t.mission.elapsed%60).padStart(2,"0")]})]})]})]})]}),W.jsxs("div",{className:"hud-top-right",children:[W.jsx(ET,{simulation:e}),W.jsxs("div",{className:"quick-actions",children:[W.jsxs("button",{onClick:i,className:"hud-btn",title:"Toggle Audio (M)",children:[t.soundEnabled?W.jsx(yT,{}):W.jsx(MT,{}),W.jsx("span",{children:t.soundEnabled?"Audio On":"Muted"})]}),W.jsx("button",{onClick:s,className:"hud-btn",title:"Toggle Camera View (C)",children:W.jsxs("span",{children:["Cam: ",t.cameraMode.toUpperCase()]})}),(t.canEnterVehicle||t.playerState==="driving")&&W.jsxs("button",{onClick:n,className:"hud-btn hud-btn-action",title:"Enter/Exit Car (E/F)",children:[W.jsx(_m,{}),W.jsx("span",{children:t.playerState==="driving"?"Exit Car [E]":"Enter Car [E]"})]}),W.jsx("button",{onClick:()=>a(!o),className:"hud-btn",title:"Toggle Controls Help (H)",children:W.jsx("span",{children:o?"Hide Keys":"Controls"})})]})]}),t.vehicleHint&&W.jsx("div",{className:"hud-center-hint",onClick:n,role:"button",tabIndex:0,title:"Click to Enter / Exit Car",children:W.jsxs("div",{className:"hint-pill",children:[W.jsx("span",{className:"hint-key",children:"E / F"}),W.jsx("span",{className:"hint-text",children:t.vehicleHint}),W.jsx("span",{className:"hint-click-sub",children:"👆 or Click to Enter/Exit"})]})}),W.jsxs("div",{className:"hud-bottom-center",children:[t.playerState==="driving"&&W.jsxs("div",{className:"speedometer-panel",children:[W.jsxs("div",{className:"speedometer-digital",children:[W.jsx("span",{className:"speed-number",children:l}),W.jsx("span",{className:"speed-unit",children:"KM/H"})]}),W.jsx("div",{className:"speed-gauge-track",children:W.jsx("div",{className:"speed-gauge-fill",style:{width:`${u}%`}})})]}),o&&W.jsxs("div",{className:"controls-card",children:[W.jsxs("div",{className:"control-item",children:[W.jsx("kbd",{className:"key-cap",children:"W"}),W.jsx("kbd",{className:"key-cap",children:"A"}),W.jsx("kbd",{className:"key-cap",children:"S"}),W.jsx("kbd",{className:"key-cap",children:"D"}),W.jsx("span",{className:"control-desc",children:"Move / Drive"})]}),W.jsxs("div",{className:"control-item",children:[W.jsx("kbd",{className:"key-cap",children:"E"}),W.jsx("span",{className:"control-desc",children:"Enter / Exit Car"})]}),W.jsxs("div",{className:"control-item",children:[W.jsx("kbd",{className:"key-cap",children:"Space"}),W.jsx("span",{className:"control-desc",children:"Handbrake"})]}),W.jsxs("div",{className:"control-item",children:[W.jsx("kbd",{className:"key-cap",children:"Shift"}),W.jsx("span",{className:"control-desc",children:"Sprint (Foot)"})]}),W.jsxs("div",{className:"control-item",children:[W.jsx("kbd",{className:"key-cap",children:"C"}),W.jsx("span",{className:"control-desc",children:"Camera"})]}),W.jsxs("div",{className:"control-item",children:[W.jsx("kbd",{className:"key-cap",children:"R"}),W.jsx("span",{className:"control-desc",children:"Restart Mission"})]})]})]}),t.busted&&W.jsx("div",{className:"modal-overlay busted-overlay",children:W.jsxs("div",{className:"modal-card busted-card",children:[W.jsx("h1",{className:"modal-title busted-title",children:"BUSTED!"}),W.jsx("p",{className:"modal-desc",children:"You were apprehended by the Metropolitan Police Department."}),W.jsx("button",{onClick:r,className:"modal-action-btn",children:"Respawn / Restart Mission [R]"})]})}),t.mission.completed&&W.jsx("div",{className:"modal-overlay success-overlay",children:W.jsxs("div",{className:"modal-card success-card",children:[W.jsx("div",{className:"success-badge",children:"🏆 MISSION ACCOMPLISHED"}),W.jsx("h1",{className:"modal-title success-title",children:t.mission.title}),W.jsx("p",{className:"modal-desc",children:"The Golden Apex Hypercar and confidential payload were safely delivered to the Harbor Safehouse hangar!"}),W.jsxs("div",{className:"mission-stats-grid",children:[W.jsxs("div",{className:"stat-box",children:[W.jsx("span",{className:"stat-label",children:"Delivery Time"}),W.jsxs("span",{className:"stat-value",children:[Math.floor(t.mission.elapsed/60),"m ",t.mission.elapsed%60,"s"]})]}),W.jsxs("div",{className:"stat-box",children:[W.jsx("span",{className:"stat-label",children:"Bounty Payout"}),W.jsx("span",{className:"stat-value text-gold",children:"$25,000"})]}),W.jsxs("div",{className:"stat-box",children:[W.jsx("span",{className:"stat-label",children:"Police Heat"}),W.jsx("span",{className:"stat-value text-green",children:"Evaded"})]})]}),W.jsx("button",{onClick:r,className:"modal-action-btn success-btn",children:"Replay Mission [R]"})]})})]})},TT=()=>{const t=Vt.useRef(null),e=Vt.useRef(null),n=Vt.useRef(null),i=Vt.useRef(null),[r,s]=Vt.useState(null);Vt.useEffect(()=>{if(!t.current)return;const u=new oy,f=new vT,h=new _T(t.current,u);e.current=u,i.current=f,n.current=h;const p=()=>{window.focus()};window.addEventListener("click",p),window.focus();let _,x=performance.now(),m=0;const d=g=>{const v=Math.min((g-x)/1e3,.1);x=g;const R={...f.getMovementInput(),interact:f.isJustPressed("interact")||f.isJustPressed("e")||f.isJustPressed("f"),restart:f.isJustPressed("restart")||f.isJustPressed("r"),toggleSound:f.isJustPressed("togglesound")||f.isJustPressed("m"),cameraToggle:f.isJustPressed("cameratoggle")||f.isJustPressed("c")};f.resetJustPressed(),u.update(v,R),h.render(u,v),m+=v,m>=.033&&(m=0,s(u.getHUDData())),_=requestAnimationFrame(d)};return _=requestAnimationFrame(d),()=>{cancelAnimationFrame(_),window.removeEventListener("click",p),h.dispose(),u.dispose(),f.dispose()}},[]);const o=Vt.useCallback(()=>{e.current&&(e.current.interactVehicle(),s(e.current.getHUDData()))},[]),a=Vt.useCallback(()=>{e.current&&(e.current.soundManager.toggleMute(),s(e.current.getHUDData()))},[]),l=Vt.useCallback(()=>{e.current&&(e.current.restartMission(),s(e.current.getHUDData()))},[]),c=Vt.useCallback(()=>{e.current&&(e.current.cameraMode==="follow"?e.current.cameraMode="cinematic":e.current.cameraMode==="cinematic"?e.current.cameraMode="hood":e.current.cameraMode="follow",s(e.current.getHUDData()))},[]);return W.jsxs("div",{className:"game-container",children:[W.jsx("div",{ref:t,className:"render-canvas-container"}),r&&e.current&&W.jsx(wT,{data:r,simulation:e.current,onInteract:o,onToggleSound:a,onRestart:l,onToggleCamera:c})]})};uu.createRoot(document.getElementById("root")).render(W.jsx(D_.StrictMode,{children:W.jsx(TT,{})}));
