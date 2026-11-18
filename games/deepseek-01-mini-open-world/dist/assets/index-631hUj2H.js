var A_=Object.defineProperty;var C_=(t,e,n)=>e in t?A_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var j=(t,e,n)=>C_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Am={exports:{}},bl={},Cm={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),R_=Symbol.for("react.portal"),P_=Symbol.for("react.fragment"),L_=Symbol.for("react.strict_mode"),b_=Symbol.for("react.profiler"),D_=Symbol.for("react.provider"),I_=Symbol.for("react.context"),N_=Symbol.for("react.forward_ref"),U_=Symbol.for("react.suspense"),F_=Symbol.for("react.memo"),O_=Symbol.for("react.lazy"),dd=Symbol.iterator;function z_(t){return t===null||typeof t!="object"?null:(t=dd&&t[dd]||t["@@iterator"],typeof t=="function"?t:null)}var Rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,Lm={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||Rm}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bm(){}bm.prototype=Is.prototype;function Wh(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||Rm}var Xh=Wh.prototype=new bm;Xh.constructor=Wh;Pm(Xh,Is.prototype);Xh.isPureReactComponent=!0;var pd=Array.isArray,Dm=Object.prototype.hasOwnProperty,Yh={current:null},Im={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dm.call(e,i)&&!Im.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:No,type:t,key:s,ref:o,props:r,_owner:Yh.current}}function k_(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function B_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var md=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B_(""+t.key):e.toString(36)}function Na(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case No:case R_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+tc(o,0):i,pd(r)?(n="",t!=null&&(n=t.replace(md,"$&/")+"/"),Na(r,e,n,"",function(c){return c})):r!=null&&(qh(r)&&(r=k_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(md,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",pd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+tc(s,a);o+=Na(s,e,n,l,r)}else if(l=z_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+tc(s,a++),o+=Na(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qo(t,e,n){if(t==null)return t;var i=[],r=0;return Na(t,i,"","",function(s){return e.call(n,s,r++)}),i}function H_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Ua={transition:null},V_={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:Yh};function Um(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=Is;Oe.Fragment=P_;Oe.Profiler=b_;Oe.PureComponent=Wh;Oe.StrictMode=L_;Oe.Suspense=U_;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V_;Oe.act=Um;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Pm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dm.call(e,l)&&!Im.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:No,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:I_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:D_,_context:t},t.Consumer=t};Oe.createElement=Nm;Oe.createFactory=function(t){var e=Nm.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:N_,render:t}};Oe.isValidElement=qh;Oe.lazy=function(t){return{$$typeof:O_,_payload:{_status:-1,_result:t},_init:H_}};Oe.memo=function(t,e){return{$$typeof:F_,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};Oe.unstable_act=Um;Oe.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Oe.useContext=function(t){return Zt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Oe.useId=function(){return Zt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Zt.current.useRef(t)};Oe.useState=function(t){return Zt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Zt.current.useTransition()};Oe.version="18.3.1";Cm.exports=Oe;var io=Cm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_=io,W_=Symbol.for("react.element"),X_=Symbol.for("react.fragment"),Y_=Object.prototype.hasOwnProperty,q_=G_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j_={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Y_.call(e,i)&&!j_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:W_,type:t,key:s,ref:o,props:r,_owner:q_.current}}bl.Fragment=X_;bl.jsx=Fm;bl.jsxs=Fm;Am.exports=bl;var Xe=Am.exports,cu={},Om={exports:{}},xn={},zm={exports:{}},km={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,$){var J=b.length;b.push($);e:for(;0<J;){var se=J-1>>>1,we=b[se];if(0<r(we,$))b[se]=$,b[J]=we,J=se;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var $=b[0],J=b.pop();if(J!==$){b[0]=J;e:for(var se=0,we=b.length,ze=we>>>1;se<ze;){var W=2*(se+1)-1,ne=b[W],he=W+1,le=b[he];if(0>r(ne,J))he<we&&0>r(le,ne)?(b[se]=le,b[he]=J,se=he):(b[se]=ne,b[W]=J,se=W);else if(he<we&&0>r(le,J))b[se]=le,b[he]=J,se=he;else break e}}return $}function r(b,$){var J=b.sortIndex-$.sortIndex;return J!==0?J:b.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=b)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(b){if(y=!1,v(b),!_)if(n(l)!==null)_=!0,H(R);else{var $=n(c);$!==null&&Q(S,$.startTime-b)}}function R(b,$){_=!1,y&&(y=!1,u(P),P=-1),p=!0;var J=d;try{for(v($),f=n(l);f!==null&&(!(f.expirationTime>$)||b&&!w());){var se=f.callback;if(typeof se=="function"){f.callback=null,d=f.priorityLevel;var we=se(f.expirationTime<=$);$=t.unstable_now(),typeof we=="function"?f.callback=we:f===n(l)&&i(l),v($)}else i(l);f=n(l)}if(f!==null)var ze=!0;else{var W=n(c);W!==null&&Q(S,W.startTime-$),ze=!1}return ze}finally{f=null,d=J,p=!1}}var A=!1,T=null,P=-1,X=5,x=-1;function w(){return!(t.unstable_now()-x<X)}function B(){if(T!==null){var b=t.unstable_now();x=b;var $=!0;try{$=T(!0,b)}finally{$?k():(A=!1,T=null)}}else A=!1}var k;if(typeof g=="function")k=function(){g(B)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,K=G.port2;G.port1.onmessage=B,k=function(){K.postMessage(null)}}else k=function(){m(B,0)};function H(b){T=b,A||(A=!0,k())}function Q(b,$){P=m(function(){b(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,H(R))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var J=d;d=$;try{return b()}finally{d=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,$){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var J=d;d=b;try{return $()}finally{d=J}},t.unstable_scheduleCallback=function(b,$,J){var se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?se+J:se):J=se,b){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=J+we,b={id:h++,callback:$,priorityLevel:b,startTime:J,expirationTime:we,sortIndex:-1},J>se?(b.sortIndex=J,e(c,b),n(l)===null&&b===n(c)&&(y?(u(P),P=-1):y=!0,Q(S,J-se))):(b.sortIndex=we,e(l,b),_||p||(_=!0,H(R))),b},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(b){var $=d;return function(){var J=d;d=$;try{return b.apply(this,arguments)}finally{d=J}}}})(km);zm.exports=km;var $_=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=io,_n=$_;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bm=new Set,go={};function Nr(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(go[t]=e,t=0;t<e.length;t++)Bm.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=Object.prototype.hasOwnProperty,Z_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gd={},vd={};function J_(t){return uu.call(vd,t)?!0:uu.call(gd,t)?!1:Z_.test(t)?vd[t]=!0:(gd[t]=!0,!1)}function Q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function e0(t,e,n,i){if(e===null||typeof e>"u"||Q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var jh=/[\-:]([a-z])/g;function $h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jh,$h);Bt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jh,$h);Bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jh,$h);Bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kh(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e0(e,n,r,i)&&(n=null),i||r===null?J_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jo=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),hu=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Vm=Symbol.for("react.context"),Jh=Symbol.for("react.forward_ref"),fu=Symbol.for("react.suspense"),du=Symbol.for("react.suspense_list"),Qh=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),Gm=Symbol.for("react.offscreen"),_d=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=_d&&t[_d]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,nc;function Js(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var ic=!1;function rc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function t0(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Jr:return"Portal";case hu:return"Profiler";case Zh:return"StrictMode";case fu:return"Suspense";case du:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vm:return(t.displayName||"Context")+".Consumer";case Hm:return(t._context.displayName||"Context")+".Provider";case Jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qh:return e=t.displayName||null,e!==null?e:pu(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return pu(t(e))}catch{}}return null}function n0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pu(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i0(t){var e=Wm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=i0(t))}function Xm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Wm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ym(t,e){e=e.checked,e!=null&&Kh(t,"checked",e,!1)}function gu(t,e){Ym(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&vu(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vu(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function _u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Qs(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function qm(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Md(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ko,$m=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r0=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(t){r0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ro[e]=ro[t]})});function Km(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ro.hasOwnProperty(t)&&ro[t]?(""+e).trim():e+"px"}function Zm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Km(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var s0=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(t,e){if(e){if(s0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mu=null;function ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eu=null,fs=null,ds=null;function Ed(t){if(t=Oo(t)){if(typeof Eu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Fl(e),Eu(t.stateNode,t.type,e))}}function Jm(t){fs?ds?ds.push(t):ds=[t]:fs=t}function Qm(){if(fs){var t=fs,e=ds;if(ds=fs=null,Ed(t),e)for(t=0;t<e.length;t++)Ed(e[t])}}function eg(t,e){return t(e)}function tg(){}var sc=!1;function ng(t,e,n){if(sc)return t(e,n);sc=!0;try{return eg(t,e,n)}finally{sc=!1,(fs!==null||ds!==null)&&(tg(),Qm())}}function _o(t,e){var n=t.stateNode;if(n===null)return null;var i=Fl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var wu=!1;if(Si)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){wu=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{wu=!1}function o0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var so=!1,nl=null,il=!1,Tu=null,a0={onError:function(t){so=!0,nl=t}};function l0(t,e,n,i,r,s,o,a,l){so=!1,nl=null,o0.apply(a0,arguments)}function c0(t,e,n,i,r,s,o,a,l){if(l0.apply(this,arguments),so){if(so){var c=nl;so=!1,nl=null}else throw Error(te(198));il||(il=!0,Tu=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ig(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wd(t){if(Ur(t)!==t)throw Error(te(188))}function u0(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wd(r),t;if(s===i)return wd(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function rg(t){return t=u0(t),t!==null?sg(t):null}function sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sg(t);if(e!==null)return e;t=t.sibling}return null}var og=_n.unstable_scheduleCallback,Td=_n.unstable_cancelCallback,h0=_n.unstable_shouldYield,f0=_n.unstable_requestPaint,yt=_n.unstable_now,d0=_n.unstable_getCurrentPriorityLevel,tf=_n.unstable_ImmediatePriority,ag=_n.unstable_UserBlockingPriority,rl=_n.unstable_NormalPriority,p0=_n.unstable_LowPriority,lg=_n.unstable_IdlePriority,Dl=null,Jn=null;function m0(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:_0,g0=Math.log,v0=Math.LN2;function _0(t){return t>>>=0,t===0?32:31-(g0(t)/v0|0)|0}var Zo=64,Jo=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=eo(a):(s&=o,s!==0&&(i=eo(s)))}else o=n&~r,o!==0?i=eo(o):s!==0&&(i=eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function x0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=x0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cg(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function S0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function ug(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hg,rf,fg,dg,pg,Cu=!1,Qo=[],Vi=null,Gi=null,Wi=null,xo=new Map,yo=new Map,Oi=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oo(e),e!==null&&rf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function E0(t,e,n,i,r){switch(e){case"focusin":return Vi=Bs(Vi,t,e,n,i,r),!0;case"dragenter":return Gi=Bs(Gi,t,e,n,i,r),!0;case"mouseover":return Wi=Bs(Wi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xo.set(s,Bs(xo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,yo.set(s,Bs(yo.get(s)||null,t,e,n,i,r)),!0}return!1}function mg(t){var e=xr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=ig(n),e!==null){t.blockedOn=e,pg(t.priority,function(){fg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mu=i,n.target.dispatchEvent(i),Mu=null}else return e=Oo(n),e!==null&&rf(e),t.blockedOn=n,!1;e.shift()}return!0}function Cd(t,e,n){Fa(t)&&n.delete(e)}function w0(){Cu=!1,Vi!==null&&Fa(Vi)&&(Vi=null),Gi!==null&&Fa(Gi)&&(Gi=null),Wi!==null&&Fa(Wi)&&(Wi=null),xo.forEach(Cd),yo.forEach(Cd)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,w0)))}function So(t){function e(r){return Hs(r,t)}if(0<Qo.length){Hs(Qo[0],t);for(var n=1;n<Qo.length;n++){var i=Qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&Hs(Vi,t),Gi!==null&&Hs(Gi,t),Wi!==null&&Hs(Wi,t),xo.forEach(e),yo.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)mg(n),n.blockedOn===null&&Oi.shift()}var ps=Ai.ReactCurrentBatchConfig,ol=!0;function T0(t,e,n,i){var r=et,s=ps.transition;ps.transition=null;try{et=1,sf(t,e,n,i)}finally{et=r,ps.transition=s}}function A0(t,e,n,i){var r=et,s=ps.transition;ps.transition=null;try{et=4,sf(t,e,n,i)}finally{et=r,ps.transition=s}}function sf(t,e,n,i){if(ol){var r=Ru(t,e,n,i);if(r===null)gc(t,e,i,al,n),Ad(t,i);else if(E0(r,t,e,n,i))i.stopPropagation();else if(Ad(t,i),e&4&&-1<M0.indexOf(t)){for(;r!==null;){var s=Oo(r);if(s!==null&&hg(s),s=Ru(t,e,n,i),s===null&&gc(t,e,i,al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gc(t,e,i,null,n)}}var al=null;function Ru(t,e,n,i){if(al=null,t=ef(i),t=xr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ig(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function gg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d0()){case tf:return 1;case ag:return 4;case rl:case p0:return 16;case lg:return 536870912;default:return 16}default:return 16}}var Bi=null,of=null,Oa=null;function vg(){if(Oa)return Oa;var t,e=of,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Oa=r.slice(t,1<i?1-i:void 0)}function za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function Rd(){return!1}function yn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ea:Rd,this.isPropagationStopped=Rd,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=yn(Ns),Fo=mt({},Ns,{view:0,detail:0}),C0=yn(Fo),ac,lc,Vs,Il=mt({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(ac=t.screenX-Vs.screenX,lc=t.screenY-Vs.screenY):lc=ac=0,Vs=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),Pd=yn(Il),R0=mt({},Il,{dataTransfer:0}),P0=yn(R0),L0=mt({},Fo,{relatedTarget:0}),cc=yn(L0),b0=mt({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=yn(b0),I0=mt({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),N0=yn(I0),U0=mt({},Ns,{data:0}),Ld=yn(U0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=z0[t])?!!e[t]:!1}function lf(){return k0}var B0=mt({},Fo,{key:function(t){if(t.key){var e=F0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H0=yn(B0),V0=mt({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=yn(V0),G0=mt({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),W0=yn(G0),X0=mt({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y0=yn(X0),q0=mt({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=yn(q0),$0=[9,13,27,32],cf=Si&&"CompositionEvent"in window,oo=null;Si&&"documentMode"in document&&(oo=document.documentMode);var K0=Si&&"TextEvent"in window&&!oo,_g=Si&&(!cf||oo&&8<oo&&11>=oo),Dd=" ",Id=!1;function xg(t,e){switch(t){case"keyup":return $0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Z0(t,e){switch(t){case"compositionend":return yg(e);case"keypress":return e.which!==32?null:(Id=!0,Dd);case"textInput":return t=e.data,t===Dd&&Id?null:t;default:return null}}function J0(t,e){if(es)return t==="compositionend"||!cf&&xg(t,e)?(t=vg(),Oa=of=Bi=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _g&&e.locale!=="ko"?null:e.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q0[t.type]:e==="textarea"}function Sg(t,e,n,i){Jm(i),e=ll(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ao=null,Mo=null;function ex(t){Dg(t,0)}function Nl(t){var e=is(t);if(Xm(e))return t}function tx(t,e){if(t==="change")return e}var Mg=!1;if(Si){var uc;if(Si){var hc="oninput"in document;if(!hc){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),hc=typeof Ud.oninput=="function"}uc=hc}else uc=!1;Mg=uc&&(!document.documentMode||9<document.documentMode)}function Fd(){ao&&(ao.detachEvent("onpropertychange",Eg),Mo=ao=null)}function Eg(t){if(t.propertyName==="value"&&Nl(Mo)){var e=[];Sg(e,Mo,t,ef(t)),ng(ex,e)}}function nx(t,e,n){t==="focusin"?(Fd(),ao=e,Mo=n,ao.attachEvent("onpropertychange",Eg)):t==="focusout"&&Fd()}function ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(Mo)}function rx(t,e){if(t==="click")return Nl(e)}function sx(t,e){if(t==="input"||t==="change")return Nl(e)}function ox(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:ox;function Eo(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!uu.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function Od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zd(t,e){var n=Od(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Od(n)}}function wg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tg(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ax(t){var e=Tg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wg(n.ownerDocument.documentElement,n)){if(i!==null&&uf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zd(n,s);var o=zd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lx=Si&&"documentMode"in document&&11>=document.documentMode,ts=null,Pu=null,lo=null,Lu=!1;function kd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||ts==null||ts!==tl(i)||(i=ts,"selectionStart"in i&&uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),lo&&Eo(lo,i)||(lo=i,i=ll(Pu,"onSelect"),0<i.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ts)))}function ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},fc={},Ag={};Si&&(Ag=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Ul(t){if(fc[t])return fc[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ag)return fc[t]=e[n];return t}var Cg=Ul("animationend"),Rg=Ul("animationiteration"),Pg=Ul("animationstart"),Lg=Ul("transitionend"),bg=new Map,Bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){bg.set(t,e),Nr(e,[t])}for(var dc=0;dc<Bd.length;dc++){var pc=Bd[dc],cx=pc.toLowerCase(),ux=pc[0].toUpperCase()+pc.slice(1);nr(cx,"on"+ux)}nr(Cg,"onAnimationEnd");nr(Rg,"onAnimationIteration");nr(Pg,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(Lg,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Hd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,c0(i,e,void 0,t),t.currentTarget=null}function Dg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Hd(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Hd(r,a,c),s=l}}}if(il)throw t=Tu,il=!1,Tu=null,t}function ot(t,e){var n=e[Uu];n===void 0&&(n=e[Uu]=new Set);var i=t+"__bubble";n.has(i)||(Ig(e,t,2,!1),n.add(i))}function mc(t,e,n){var i=0;e&&(i|=4),Ig(n,t,i,e)}var na="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[na]){t[na]=!0,Bm.forEach(function(n){n!=="selectionchange"&&(hx.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[na]||(e[na]=!0,mc("selectionchange",!1,e))}}function Ig(t,e,n,i){switch(gg(e)){case 1:var r=T0;break;case 4:r=A0;break;default:r=sf}n=r.bind(null,e,n,t),r=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ng(function(){var c=s,h=ef(n),f=[];e:{var d=bg.get(t);if(d!==void 0){var p=af,_=t;switch(t){case"keypress":if(za(n)===0)break e;case"keydown":case"keyup":p=H0;break;case"focusin":_="focus",p=cc;break;case"focusout":_="blur",p=cc;break;case"beforeblur":case"afterblur":p=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=P0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=W0;break;case Cg:case Rg:case Pg:p=D0;break;case Lg:p=Y0;break;case"scroll":p=C0;break;case"wheel":p=j0;break;case"copy":case"cut":case"paste":p=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bd}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var g=c,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=_o(g,u),S!=null&&y.push(To(g,S,v)))),m)break;g=g.return}0<y.length&&(d=new p(d,_,null,n,h),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Mu&&(_=n.relatedTarget||n.fromElement)&&(xr(_)||_[Mi]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?xr(_):null,_!==null&&(m=Ur(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Pd,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=bd,S="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:is(p),v=_==null?d:is(_),d=new y(S,g+"leave",p,n,h),d.target=m,d.relatedTarget=v,S=null,xr(h)===c&&(y=new y(u,g+"enter",_,n,h),y.target=v,y.relatedTarget=m,S=y),m=S,p&&_)t:{for(y=p,u=_,g=0,v=y;v;v=Or(v))g++;for(v=0,S=u;S;S=Or(S))v++;for(;0<g-v;)y=Or(y),g--;for(;0<v-g;)u=Or(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Or(y),u=Or(u)}y=null}else y=null;p!==null&&Vd(f,d,p,y,!1),_!==null&&m!==null&&Vd(f,m,_,y,!0)}}e:{if(d=c?is(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=tx;else if(Nd(d))if(Mg)R=sx;else{R=ix;var A=nx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=rx);if(R&&(R=R(t,c))){Sg(f,R,n,h);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&vu(d,"number",d.value)}switch(A=c?is(c):window,t){case"focusin":(Nd(A)||A.contentEditable==="true")&&(ts=A,Pu=c,lo=null);break;case"focusout":lo=Pu=ts=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,kd(f,n,h);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":kd(f,n,h)}var T;if(cf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else es?xg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(_g&&n.locale!=="ko"&&(es||P!=="onCompositionStart"?P==="onCompositionEnd"&&es&&(T=vg()):(Bi=h,of="value"in Bi?Bi.value:Bi.textContent,es=!0)),A=ll(c,P),0<A.length&&(P=new Ld(P,t,null,n,h),f.push({event:P,listeners:A}),T?P.data=T:(T=yg(n),T!==null&&(P.data=T)))),(T=K0?Z0(t,n):J0(t,n))&&(c=ll(c,"onBeforeInput"),0<c.length&&(h=new Ld("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}Dg(f,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_o(t,n),s!=null&&i.unshift(To(t,s,r)),s=_o(t,e),s!=null&&i.push(To(t,s,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=_o(n,s),l!=null&&o.unshift(To(n,l,a))):r||(l=_o(n,s),l!=null&&o.push(To(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fx=/\r\n?/g,dx=/\u0000|\uFFFD/g;function Gd(t){return(typeof t=="string"?t:""+t).replace(fx,`
`).replace(dx,"")}function ia(t,e,n){if(e=Gd(e),Gd(t)!==e&&n)throw Error(te(425))}function cl(){}var bu=null,Du=null;function Iu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(t){return Wd.resolve(null).then(t).catch(gx)}:Nu;function gx(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),So(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);So(e)}function Xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Us,Ao="__reactProps$"+Us,Mi="__reactContainer$"+Us,Uu="__reactEvents$"+Us,vx="__reactListeners$"+Us,_x="__reactHandles$"+Us;function xr(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xd(t);t!==null;){if(n=t[Kn])return n;t=Xd(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[Kn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Fl(t){return t[Ao]||null}var Fu=[],rs=-1;function ir(t){return{current:t}}function lt(t){0>rs||(t.current=Fu[rs],Fu[rs]=null,rs--)}function it(t,e){rs++,Fu[rs]=t.current,t.current=e}var Qi={},qt=ir(Qi),sn=ir(!1),Ar=Qi;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function ul(){lt(sn),lt(qt)}function Yd(t,e,n){if(qt.current!==Qi)throw Error(te(168));it(qt,e),it(sn,n)}function Ng(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,n0(t)||"Unknown",r));return mt({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Ar=qt.current,it(qt,t),it(sn,sn.current),!0}function qd(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Ng(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,lt(sn),lt(qt),it(qt,t)):lt(sn),it(sn,n)}var di=null,Ol=!1,_c=!1;function Ug(t){di===null?di=[t]:di.push(t)}function xx(t){Ol=!0,Ug(t)}function rr(){if(!_c&&di!==null){_c=!0;var t=0,e=et;try{var n=di;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}di=null,Ol=!1}catch(r){throw di!==null&&(di=di.slice(t+1)),og(tf,rr),r}finally{et=e,_c=!1}}return null}var ss=[],os=0,fl=null,dl=0,En=[],wn=0,Cr=null,pi=1,mi="";function dr(t,e){ss[os++]=dl,ss[os++]=fl,fl=t,dl=e}function Fg(t,e,n){En[wn++]=pi,En[wn++]=mi,En[wn++]=Cr,Cr=t;var i=pi;t=mi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,pi=1<<32-Gn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function hf(t){t.return!==null&&(dr(t,1),Fg(t,1,0))}function ff(t){for(;t===fl;)fl=ss[--os],ss[os]=null,dl=ss[--os],ss[os]=null;for(;t===Cr;)Cr=En[--wn],En[wn]=null,mi=En[--wn],En[wn]=null,pi=En[--wn],En[wn]=null}var vn=null,gn=null,ht=!1,kn=null;function Og(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=Xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function Ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zu(t){if(ht){var e=gn;if(e){var n=e;if(!jd(t,e)){if(Ou(t))throw Error(te(418));e=Xi(n.nextSibling);var i=vn;e&&jd(t,e)?Og(i,n):(t.flags=t.flags&-4097|2,ht=!1,vn=t)}}else{if(Ou(t))throw Error(te(418));t.flags=t.flags&-4097|2,ht=!1,vn=t}}}function $d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function ra(t){if(t!==vn)return!1;if(!ht)return $d(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Iu(t.type,t.memoizedProps)),e&&(e=gn)){if(Ou(t))throw zg(),Error(te(418));for(;e;)Og(t,e),e=Xi(e.nextSibling)}if($d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?Xi(t.stateNode.nextSibling):null;return!0}function zg(){for(var t=gn;t;)t=Xi(t.nextSibling)}function Ms(){gn=vn=null,ht=!1}function df(t){kn===null?kn=[t]:kn.push(t)}var yx=Ai.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function sa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kd(t){var e=t._init;return e(t._payload)}function kg(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=$i(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,S){return g===null||g.tag!==6?(g=Tc(v,u.mode,S),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,S){var R=v.type;return R===Qr?h(u,g,v.props.children,S,v.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ui&&Kd(R)===g.type)?(S=r(g,v.props),S.ref=Gs(u,g,v),S.return=u,S):(S=Xa(v.type,v.key,v.props,null,u.mode,S),S.ref=Gs(u,g,v),S.return=u,S)}function c(u,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Ac(v,u.mode,S),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function h(u,g,v,S,R){return g===null||g.tag!==7?(g=Tr(v,u.mode,S,R),g.return=u,g):(g=r(g,v),g.return=u,g)}function f(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Tc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case jo:return v=Xa(g.type,g.key,g.props,null,u.mode,v),v.ref=Gs(u,null,g),v.return=u,v;case Jr:return g=Ac(g,u.mode,v),g.return=u,g;case Ui:var S=g._init;return f(u,S(g._payload),v)}if(Qs(g)||zs(g))return g=Tr(g,u.mode,v,null),g.return=u,g;sa(u,g)}return null}function d(u,g,v,S){var R=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(u,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case jo:return v.key===R?l(u,g,v,S):null;case Jr:return v.key===R?c(u,g,v,S):null;case Ui:return R=v._init,d(u,g,R(v._payload),S)}if(Qs(v)||zs(v))return R!==null?null:h(u,g,v,S,null);sa(u,v)}return null}function p(u,g,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(g,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case jo:return u=u.get(S.key===null?v:S.key)||null,l(g,u,S,R);case Jr:return u=u.get(S.key===null?v:S.key)||null,c(g,u,S,R);case Ui:var A=S._init;return p(u,g,v,A(S._payload),R)}if(Qs(S)||zs(S))return u=u.get(v)||null,h(g,u,S,R,null);sa(g,S)}return null}function _(u,g,v,S){for(var R=null,A=null,T=g,P=g=0,X=null;T!==null&&P<v.length;P++){T.index>P?(X=T,T=null):X=T.sibling;var x=d(u,T,v[P],S);if(x===null){T===null&&(T=X);break}t&&T&&x.alternate===null&&e(u,T),g=s(x,g,P),A===null?R=x:A.sibling=x,A=x,T=X}if(P===v.length)return n(u,T),ht&&dr(u,P),R;if(T===null){for(;P<v.length;P++)T=f(u,v[P],S),T!==null&&(g=s(T,g,P),A===null?R=T:A.sibling=T,A=T);return ht&&dr(u,P),R}for(T=i(u,T);P<v.length;P++)X=p(T,u,P,v[P],S),X!==null&&(t&&X.alternate!==null&&T.delete(X.key===null?P:X.key),g=s(X,g,P),A===null?R=X:A.sibling=X,A=X);return t&&T.forEach(function(w){return e(u,w)}),ht&&dr(u,P),R}function y(u,g,v,S){var R=zs(v);if(typeof R!="function")throw Error(te(150));if(v=R.call(v),v==null)throw Error(te(151));for(var A=R=null,T=g,P=g=0,X=null,x=v.next();T!==null&&!x.done;P++,x=v.next()){T.index>P?(X=T,T=null):X=T.sibling;var w=d(u,T,x.value,S);if(w===null){T===null&&(T=X);break}t&&T&&w.alternate===null&&e(u,T),g=s(w,g,P),A===null?R=w:A.sibling=w,A=w,T=X}if(x.done)return n(u,T),ht&&dr(u,P),R;if(T===null){for(;!x.done;P++,x=v.next())x=f(u,x.value,S),x!==null&&(g=s(x,g,P),A===null?R=x:A.sibling=x,A=x);return ht&&dr(u,P),R}for(T=i(u,T);!x.done;P++,x=v.next())x=p(T,u,P,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?P:x.key),g=s(x,g,P),A===null?R=x:A.sibling=x,A=x);return t&&T.forEach(function(B){return e(u,B)}),ht&&dr(u,P),R}function m(u,g,v,S){if(typeof v=="object"&&v!==null&&v.type===Qr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case jo:e:{for(var R=v.key,A=g;A!==null;){if(A.key===R){if(R=v.type,R===Qr){if(A.tag===7){n(u,A.sibling),g=r(A,v.props.children),g.return=u,u=g;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ui&&Kd(R)===A.type){n(u,A.sibling),g=r(A,v.props),g.ref=Gs(u,A,v),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===Qr?(g=Tr(v.props.children,u.mode,S,v.key),g.return=u,u=g):(S=Xa(v.type,v.key,v.props,null,u.mode,S),S.ref=Gs(u,g,v),S.return=u,u=S)}return o(u);case Jr:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Ac(v,u.mode,S),g.return=u,u=g}return o(u);case Ui:return A=v._init,m(u,g,A(v._payload),S)}if(Qs(v))return _(u,g,v,S);if(zs(v))return y(u,g,v,S);sa(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Tc(v,u.mode,S),g.return=u,u=g),o(u)):n(u,g)}return m}var Es=kg(!0),Bg=kg(!1),pl=ir(null),ml=null,as=null,pf=null;function mf(){pf=as=ml=null}function gf(t){var e=pl.current;lt(pl),t._currentValue=e}function ku(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){ml=t,pf=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(pf!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(ml===null)throw Error(te(308));as=t,ml.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var yr=null;function vf(t){yr===null?yr=[t]:yr.push(t)}function Hg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,vf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nf(t,n)}}function Zd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,i){var r=t.updateQueue;Fi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=mt({},f,d);break e;case 2:Fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=f}}function Jd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var zo={},Qn=ir(zo),Co=ir(zo),Ro=ir(zo);function Sr(t){if(t===zo)throw Error(te(174));return t}function xf(t,e){switch(it(Ro,e),it(Co,t),it(Qn,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xu(e,t)}lt(Qn),it(Qn,e)}function ws(){lt(Qn),lt(Co),lt(Ro)}function Gg(t){Sr(Ro.current);var e=Sr(Qn.current),n=xu(e,t.type);e!==n&&(it(Co,t),it(Qn,n))}function yf(t){Co.current===t&&(lt(Qn),lt(Co))}var ft=ir(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function Sf(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var Ba=Ai.ReactCurrentDispatcher,yc=Ai.ReactCurrentBatchConfig,Rr=0,dt=null,Tt=null,bt=null,_l=!1,co=!1,Po=0,Sx=0;function Ht(){throw Error(te(321))}function Mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function Ef(t,e,n,i,r,s){if(Rr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ba.current=t===null||t.memoizedState===null?Tx:Ax,t=n(i,r),co){s=0;do{if(co=!1,Po=0,25<=s)throw Error(te(301));s+=1,bt=Tt=null,e.updateQueue=null,Ba.current=Cx,t=n(i,r)}while(co)}if(Ba.current=xl,e=Tt!==null&&Tt.next!==null,Rr=0,bt=Tt=dt=null,_l=!1,e)throw Error(te(300));return t}function wf(){var t=Po!==0;return Po=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?dt.memoizedState=bt=t:bt=bt.next=t,bt}function Ln(){if(Tt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=bt===null?dt.memoizedState:bt.next;if(e!==null)bt=e,Tt=t;else{if(t===null)throw Error(te(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},bt===null?dt.memoizedState=bt=t:bt=bt.next=t}return bt}function Lo(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Rr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,dt.lanes|=h,Pr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Xn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Xn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Wg(){}function Xg(t,e){var n=dt,i=Ln(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Tf(jg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,bo(9,qg.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(te(349));Rr&30||Yg(n,e,r)}return r}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qg(t,e,n,i){e.value=n,e.getSnapshot=i,$g(e)&&Kg(t)}function jg(t,e,n){return n(function(){$g(e)&&Kg(t)})}function $g(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function Kg(t){var e=Ei(t,1);e!==null&&Wn(e,t,1,-1)}function Qd(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=wx.bind(null,dt,t),[e.memoizedState,t]}function bo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Zg(){return Ln().memoizedState}function Ha(t,e,n,i){var r=qn();dt.flags|=t,r.memoizedState=bo(1|e,n,void 0,i===void 0?null:i)}function zl(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&Mf(i,o.deps)){r.memoizedState=bo(e,n,s,i);return}}dt.flags|=t,r.memoizedState=bo(1|e,n,s,i)}function ep(t,e){return Ha(8390656,8,t,e)}function Tf(t,e){return zl(2048,8,t,e)}function Jg(t,e){return zl(4,2,t,e)}function Qg(t,e){return zl(4,4,t,e)}function ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tv(t,e,n){return n=n!=null?n.concat([t]):null,zl(4,4,ev.bind(null,e,t),n)}function Af(){}function nv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function iv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function rv(t,e,n){return Rr&21?(Xn(n,e)||(n=cg(),dt.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function Mx(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=yc.transition;yc.transition={};try{t(!1),e()}finally{et=n,yc.transition=i}}function sv(){return Ln().memoizedState}function Ex(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ov(t))av(e,n);else if(n=Hg(t,e,n,i),n!==null){var r=Kt();Wn(n,t,i,r),lv(n,e,i)}}function wx(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ov(t))av(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Xn(a,o)){var l=e.interleaved;l===null?(r.next=r,vf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Hg(t,e,r,i),n!==null&&(r=Kt(),Wn(n,t,i,r),lv(n,e,i))}}function ov(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function av(t,e){co=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nf(t,n)}}var xl={readContext:Pn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},Tx={readContext:Pn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ex.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Qd,useDebugValue:Af,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Qd(!1),e=t[0];return t=Mx.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=qn();if(ht){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Dt===null)throw Error(te(349));Rr&30||Yg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ep(jg.bind(null,i,s,t),[t]),i.flags|=2048,bo(9,qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Dt.identifierPrefix;if(ht){var n=mi,i=pi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ax={readContext:Pn,useCallback:nv,useContext:Pn,useEffect:Tf,useImperativeHandle:tv,useInsertionEffect:Jg,useLayoutEffect:Qg,useMemo:iv,useReducer:Sc,useRef:Zg,useState:function(){return Sc(Lo)},useDebugValue:Af,useDeferredValue:function(t){var e=Ln();return rv(e,Tt.memoizedState,t)},useTransition:function(){var t=Sc(Lo)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Wg,useSyncExternalStore:Xg,useId:sv,unstable_isNewReconciler:!1},Cx={readContext:Pn,useCallback:nv,useContext:Pn,useEffect:Tf,useImperativeHandle:tv,useInsertionEffect:Jg,useLayoutEffect:Qg,useMemo:iv,useReducer:Mc,useRef:Zg,useState:function(){return Mc(Lo)},useDebugValue:Af,useDeferredValue:function(t){var e=Ln();return Tt===null?e.memoizedState=t:rv(e,Tt.memoizedState,t)},useTransition:function(){var t=Mc(Lo)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Wg,useSyncExternalStore:Xg,useId:sv,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=ji(t),s=xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(Wn(e,t,r,i),ka(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=ji(t),s=xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(Wn(e,t,r,i),ka(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=ji(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(Wn(e,t,i,n),ka(e,t,i))}};function tp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eo(n,i)||!Eo(r,s):!0}function cv(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=on(e)?Ar:qt.current,i=e.contextTypes,s=(i=i!=null)?Ss(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function np(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Hu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},_f(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=on(e)?Ar:qt.current,r.context=Ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kl.enqueueReplaceState(r,r.state,null),gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",i=e;do n+=t0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rx=typeof WeakMap=="function"?WeakMap:Map;function uv(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Sl||(Sl=!0,Ju=i),Vu(t,e)},n}function hv(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vu(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Rx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Vx.bind(null,t,e,n),e.then(t,t))}function rp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var Px=Ai.ReactCurrentOwner,rn=!1;function $t(t,e,n,i){e.child=t===null?Bg(e,null,n,i):Es(e,t.child,n,i)}function op(t,e,n,i,r){n=n.render;var s=e.ref;return ms(e,r),i=Ef(t,e,n,i,s,r),n=wf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ht&&n&&hf(e),e.flags|=1,$t(t,e,i,r),e.child)}function ap(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Nf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fv(t,e,s,i,r)):(t=Xa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(o,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function fv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Eo(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return Gu(t,e,n,i,r)}function dv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(cs,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(cs,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(cs,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(cs,mn),mn|=i;return $t(t,e,r,n),e.child}function pv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gu(t,e,n,i,r){var s=on(n)?Ar:qt.current;return s=Ss(e,s),ms(e,r),n=Ef(t,e,n,i,s,r),i=wf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ht&&i&&hf(e),e.flags|=1,$t(t,e,n,r),e.child)}function lp(t,e,n,i,r){if(on(n)){var s=!0;hl(e)}else s=!1;if(ms(e,r),e.stateNode===null)Va(t,e),cv(e,n,i),Hu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=on(n)?Ar:qt.current,c=Ss(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&np(e,o,i,c),Fi=!1;var d=e.memoizedState;o.state=d,gl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||sn.current||Fi?(typeof h=="function"&&(Bu(e,n,h,i),l=e.memoizedState),(a=Fi||tp(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Vg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Fn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=on(n)?Ar:qt.current,l=Ss(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&np(e,o,i,l),Fi=!1,d=e.memoizedState,o.state=d,gl(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||sn.current||Fi?(typeof p=="function"&&(Bu(e,n,p,i),_=e.memoizedState),(c=Fi||tp(e,n,c,i,d,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Wu(t,e,n,i,s,r)}function Wu(t,e,n,i,r,s){pv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&qd(e,n,!1),wi(t,e,s);i=e.stateNode,Px.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&qd(e,n,!0),e.child}function mv(t){var e=t.stateNode;e.pendingContext?Yd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yd(t,e.context,!1),xf(t,e.containerInfo)}function cp(t,e,n,i,r){return Ms(),df(r),e.flags|=256,$t(t,e,n,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function gv(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ft,r&1),t===null)return zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vl(o,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yu(n),e.memoizedState=Xu,t):Cf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Lx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=$i(a,s):(s=Tr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Yu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xu,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cf(t,e){return e=Vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oa(t,e,n,i){return i!==null&&df(i),Es(e,t.child,null,n),t=Cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(te(422))),oa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vl({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Es(e,t.child,null,o),e.child.memoizedState=Yu(o),e.memoizedState=Xu,s);if(!(e.mode&1))return oa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Ec(s,i,void 0),oa(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),Wn(i,t,r,-1))}return If(),i=Ec(Error(te(421))),oa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Gx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=Xi(r.nextSibling),vn=e,ht=!0,kn=null,t!==null&&(En[wn++]=pi,En[wn++]=mi,En[wn++]=Cr,pi=t.id,mi=t.overflow,Cr=e),e=Cf(e,i.children),e.flags|=4096,e)}function up(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ku(t.return,e,n)}function wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function vv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,n,e);else if(t.tag===19)up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Va(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bx(t,e,n){switch(e.tag){case 3:mv(e),Ms();break;case 5:Gg(e);break;case 1:on(e.type)&&hl(e);break;case 4:xf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?gv(t,e,n):(it(ft,ft.current&1),t=wi(t,e,n),t!==null?t.sibling:null);it(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return vv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,dv(t,e,n)}return wi(t,e,n)}var _v,qu,xv,yv;_v=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qu=function(){};xv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Sr(Qn.current);var s=null;switch(n){case"input":r=mu(t,r),i=mu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=_u(t,r),i=_u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cl)}yu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(go.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(go.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};yv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ws(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Dx(t,e,n){var i=e.pendingProps;switch(ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return on(e.type)&&ul(),Vt(e),null;case 3:return i=e.stateNode,ws(),lt(sn),lt(qt),Sf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(th(kn),kn=null))),qu(t,e),Vt(e),null;case 5:yf(e);var r=Sr(Ro.current);if(n=e.type,t!==null&&e.stateNode!=null)xv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Vt(e),null}if(t=Sr(Qn.current),ra(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<to.length;r++)ot(to[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":xd(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Sd(i,s),ot("invalid",i)}yu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ia(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ia(i.textContent,a,t),r=["children",""+a]):go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":$o(i),yd(i,s,!0);break;case"textarea":$o(i),Md(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Kn]=e,t[Ao]=i,_v(t,e,!1,!1),e.stateNode=t;e:{switch(o=Su(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<to.length;r++)ot(to[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":xd(t,i),r=mu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Sd(t,i),r=_u(t,i),ot("invalid",t);break;default:r=i}yu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Zm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$m(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vo(t,l):typeof l=="number"&&vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&Kh(t,s,l,o))}switch(n){case"input":$o(t),yd(t,i,!1);break;case"textarea":$o(t),Md(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)yv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Sr(Ro.current),Sr(Qn.current),ra(e)){if(i=e.stateNode,n=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:ia(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ia(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return Vt(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&gn!==null&&e.mode&1&&!(e.flags&128))zg(),Ms(),e.flags|=98560,s=!1;else if(s=ra(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Kn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else kn!==null&&(th(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?At===0&&(At=3):If())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return ws(),qu(t,e),t===null&&wo(e.stateNode.containerInfo),Vt(e),null;case 10:return gf(e.type._context),Vt(e),null;case 17:return on(e.type)&&ul(),Vt(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ws(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vl(t),o!==null){for(e.flags|=128,Ws(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>As&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304)}else{if(!i)if(t=vl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Vt(e),null}else 2*yt()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ft.current,it(ft,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Df(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Ix(t,e){switch(ff(e),e.tag){case 1:return on(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),lt(sn),lt(qt),Sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return ws(),null;case 10:return gf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var aa=!1,Xt=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function ju(t,e,n){try{n()}catch(i){vt(t,e,i)}}var hp=!1;function Ux(t,e){if(bu=ol,t=Tg(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:t,selectionRange:n},ol=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Fn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=hp,hp=!1,_}function uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ju(e,n,s)}r=r.next}while(r!==i)}}function Bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $u(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sv(t){var e=t.alternate;e!==null&&(t.alternate=null,Sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[Ao],delete e[Uu],delete e[vx],delete e[_x])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mv(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(i!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}var Nt=null,On=!1;function Ri(t,e,n){for(n=n.child;n!==null;)Ev(t,e,n),n=n.sibling}function Ev(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:Xt||ls(n,e);case 6:var i=Nt,r=On;Nt=null,Ri(t,e,n),Nt=i,On=r,Nt!==null&&(On?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(On?(t=Nt,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),So(t)):vc(Nt,n.stateNode));break;case 4:i=Nt,r=On,Nt=n.stateNode.containerInfo,On=!0,Ri(t,e,n),Nt=i,On=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ju(n,e,o),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Xt&&(ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ri(t,e,n),Xt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Nx),e.forEach(function(i){var r=Wx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,On=!1;break e;case 3:Nt=a.stateNode.containerInfo,On=!0;break e;case 4:Nt=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(Nt===null)throw Error(te(160));Ev(s,o,r),Nt=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wv(e,t),e=e.sibling}function wv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Yn(t),i&4){try{uo(3,t,t.return),Bl(3,t)}catch(y){vt(t,t.return,y)}try{uo(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Dn(e,t),Yn(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(Dn(e,t),Yn(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{vo(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ym(r,s),Su(a,o);var c=Su(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?Zm(r,f):h==="dangerouslySetInnerHTML"?$m(r,f):h==="children"?vo(r,f):Kh(r,h,f,c)}switch(a){case"input":gu(r,s);break;case"textarea":qm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?hs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ao]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Dn(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Dn(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Dn(e,t),Yn(t);break;case 13:Dn(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Lf=yt())),i&4&&dp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||h,Dn(e,t),Xt=c):Dn(e,t),Yn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(pe=t,h=t.child;h!==null;){for(f=pe=h;pe!==null;){switch(d=pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:uo(4,d,d.return);break;case 1:ls(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:ls(d,d.return);break;case 22:if(d.memoizedState!==null){mp(f);continue}}p!==null?(p.return=d,pe=p):mp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Km("display",o))}catch(y){vt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){vt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),Yn(t),i&4&&dp(t);break;case 21:break;default:Dn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mv(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(vo(r,""),i.flags&=-33);var s=fp(t);Zu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=fp(t);Ku(t,a,o);break;default:throw Error(te(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fx(t,e,n){pe=t,Tv(t)}function Tv(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||aa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=aa;var c=Xt;if(aa=o,(Xt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?gp(r):l!==null?(l.return=o,pe=l):gp(r);for(;s!==null;)pe=s,Tv(s),s=s.sibling;pe=r,aa=a,Xt=c}pp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):pp(t)}}function pp(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Bl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&So(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Xt||e.flags&512&&$u(e)}catch(d){vt(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function mp(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function gp(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bl(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{$u(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{$u(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var Ox=Math.ceil,yl=Ai.ReactCurrentDispatcher,Rf=Ai.ReactCurrentOwner,Rn=Ai.ReactCurrentBatchConfig,Ye=0,Dt=null,wt=null,zt=0,mn=0,cs=ir(0),At=0,Do=null,Pr=0,Hl=0,Pf=0,ho=null,nn=null,Lf=0,As=1/0,fi=null,Sl=!1,Ju=null,qi=null,la=!1,Hi=null,Ml=0,fo=0,Qu=null,Ga=-1,Wa=0;function Kt(){return Ye&6?yt():Ga!==-1?Ga:Ga=yt()}function ji(t){return t.mode&1?Ye&2&&zt!==0?zt&-zt:yx.transition!==null?(Wa===0&&(Wa=cg()),Wa):(t=et,t!==0||(t=window.event,t=t===void 0?16:gg(t.type)),t):1}function Wn(t,e,n,i){if(50<fo)throw fo=0,Qu=null,Error(te(185));Uo(t,n,i),(!(Ye&2)||t!==Dt)&&(t===Dt&&(!(Ye&2)&&(Hl|=n),At===4&&zi(t,zt)),an(t,i),n===1&&Ye===0&&!(e.mode&1)&&(As=yt()+500,Ol&&rr()))}function an(t,e){var n=t.callbackNode;y0(t,e);var i=sl(t,t===Dt?zt:0);if(i===0)n!==null&&Td(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Td(n),e===1)t.tag===0?xx(vp.bind(null,t)):Ug(vp.bind(null,t)),mx(function(){!(Ye&6)&&rr()}),n=null;else{switch(ug(i)){case 1:n=tf;break;case 4:n=ag;break;case 16:n=rl;break;case 536870912:n=lg;break;default:n=rl}n=Iv(n,Av.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Av(t,e){if(Ga=-1,Wa=0,Ye&6)throw Error(te(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=sl(t,t===Dt?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=El(t,i);else{e=i;var r=Ye;Ye|=2;var s=Rv();(Dt!==t||zt!==e)&&(fi=null,As=yt()+500,wr(t,e));do try{Bx();break}catch(a){Cv(t,a)}while(!0);mf(),yl.current=s,Ye=r,wt!==null?e=0:(Dt=null,zt=0,e=At)}if(e!==0){if(e===2&&(r=Au(t),r!==0&&(i=r,e=eh(t,r))),e===1)throw n=Do,wr(t,0),zi(t,i),an(t,yt()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!zx(r)&&(e=El(t,i),e===2&&(s=Au(t),s!==0&&(i=s,e=eh(t,s))),e===1))throw n=Do,wr(t,0),zi(t,i),an(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:pr(t,nn,fi);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=Lf+500-yt(),10<e)){if(sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nu(pr.bind(null,t,nn,fi),e);break}pr(t,nn,fi);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Gn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ox(i/1960))-i,10<i){t.timeoutHandle=Nu(pr.bind(null,t,nn,fi),i);break}pr(t,nn,fi);break;case 5:pr(t,nn,fi);break;default:throw Error(te(329))}}}return an(t,yt()),t.callbackNode===n?Av.bind(null,t):null}function eh(t,e){var n=ho;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=El(t,e),t!==2&&(e=nn,nn=n,e!==null&&th(e)),t}function th(t){nn===null?nn=t:nn.push.apply(nn,t)}function zx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~Pf,e&=~Hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function vp(t){if(Ye&6)throw Error(te(327));gs();var e=sl(t,0);if(!(e&1))return an(t,yt()),null;var n=El(t,e);if(t.tag!==0&&n===2){var i=Au(t);i!==0&&(e=i,n=eh(t,i))}if(n===1)throw n=Do,wr(t,0),zi(t,e),an(t,yt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,nn,fi),an(t,yt()),null}function bf(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(As=yt()+500,Ol&&rr())}}function Lr(t){Hi!==null&&Hi.tag===0&&!(Ye&6)&&gs();var e=Ye;Ye|=1;var n=Rn.transition,i=et;try{if(Rn.transition=null,et=1,t)return t()}finally{et=i,Rn.transition=n,Ye=e,!(Ye&6)&&rr()}}function Df(){mn=cs.current,lt(cs)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,px(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(ff(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ul();break;case 3:ws(),lt(sn),lt(qt),Sf();break;case 5:yf(i);break;case 4:ws();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:gf(i.type._context);break;case 22:case 23:Df()}n=n.return}if(Dt=t,wt=t=$i(t.current,null),zt=mn=e,At=0,Do=null,Pf=Hl=Pr=0,nn=ho=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}yr=null}return t}function Cv(t,e){do{var n=wt;try{if(mf(),Ba.current=xl,_l){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Rr=0,bt=Tt=dt=null,co=!1,Po=0,Rf.current=null,n===null||n.return===null){At=1,Do=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=rp(o);if(p!==null){p.flags&=-257,sp(p,o,a,s,e),p.mode&1&&ip(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){ip(s,c,e),If();break e}l=Error(te(426))}}else if(ht&&a.mode&1){var m=rp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),sp(m,o,a,s,e),df(Ts(l,a));break e}}s=l=Ts(l,a),At!==4&&(At=2),ho===null?ho=[s]:ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=uv(s,l,e);Zd(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(qi===null||!qi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=hv(s,a,e);Zd(s,S);break e}}s=s.return}while(s!==null)}Lv(n)}catch(R){e=R,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Rv(){var t=yl.current;return yl.current=xl,t===null?xl:t}function If(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(Pr&268435455)&&!(Hl&268435455)||zi(Dt,zt)}function El(t,e){var n=Ye;Ye|=2;var i=Rv();(Dt!==t||zt!==e)&&(fi=null,wr(t,e));do try{kx();break}catch(r){Cv(t,r)}while(!0);if(mf(),Ye=n,yl.current=i,wt!==null)throw Error(te(261));return Dt=null,zt=0,At}function kx(){for(;wt!==null;)Pv(wt)}function Bx(){for(;wt!==null&&!h0();)Pv(wt)}function Pv(t){var e=Dv(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Lv(t):wt=e,Rf.current=null}function Lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ix(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,wt=null;return}}else if(n=Dx(n,e,mn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);At===0&&(At=5)}function pr(t,e,n){var i=et,r=Rn.transition;try{Rn.transition=null,et=1,Hx(t,e,n,i)}finally{Rn.transition=r,et=i}return null}function Hx(t,e,n,i){do gs();while(Hi!==null);if(Ye&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(S0(t,s),t===Dt&&(wt=Dt=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||la||(la=!0,Iv(rl,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=et;et=1;var a=Ye;Ye|=4,Rf.current=null,Ux(t,n),wv(n,t),ax(Du),ol=!!bu,Du=bu=null,t.current=n,Fx(n),f0(),Ye=a,et=o,Rn.transition=s}else t.current=n;if(la&&(la=!1,Hi=t,Ml=r),s=t.pendingLanes,s===0&&(qi=null),m0(n.stateNode),an(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sl)throw Sl=!1,t=Ju,Ju=null,t;return Ml&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===Qu?fo++:(fo=0,Qu=t):fo=0,rr(),null}function gs(){if(Hi!==null){var t=ug(Ml),e=Rn.transition,n=et;try{if(Rn.transition=null,et=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,Ml=0,Ye&6)throw Error(te(331));var r=Ye;for(Ye|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var h=pe;switch(h.tag){case 0:case 11:case 15:uo(8,h,s)}var f=h.child;if(f!==null)f.return=h,pe=f;else for(;pe!==null;){h=pe;var d=h.sibling,p=h.return;if(Sv(h),h===c){pe=null;break}if(d!==null){d.return=p,pe=d;break}pe=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var g=t.current;for(pe=g;pe!==null;){o=pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,pe=v;else e:for(o=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bl(9,a)}}catch(R){vt(a,a.return,R)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if(Ye=r,rr(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Dl,t)}catch{}i=!0}return i}finally{et=n,Rn.transition=e}}return!1}function _p(t,e,n){e=Ts(n,e),e=uv(t,e,1),t=Yi(t,e,1),e=Kt(),t!==null&&(Uo(t,1,e),an(t,e))}function vt(t,e,n){if(t.tag===3)_p(t,t,n);else for(;e!==null;){if(e.tag===3){_p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Ts(n,t),t=hv(e,t,1),e=Yi(e,t,1),t=Kt(),e!==null&&(Uo(e,1,t),an(e,t));break}}e=e.return}}function Vx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(zt&n)===n&&(At===4||At===3&&(zt&130023424)===zt&&500>yt()-Lf?wr(t,0):Pf|=n),an(t,e)}function bv(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=Kt();t=Ei(t,e),t!==null&&(Uo(t,e,n),an(t,n))}function Gx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bv(t,n)}function Wx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),bv(t,n)}var Dv;Dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,bx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,ht&&e.flags&1048576&&Fg(e,dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Va(t,e),t=e.pendingProps;var r=Ss(e,qt.current);ms(e,n),r=Ef(null,e,i,t,r,n);var s=wf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_f(e),r.updater=kl,e.stateNode=r,r._reactInternals=e,Hu(e,i,t,n),e=Wu(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&hf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Va(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Yx(i),t=Fn(i,t),r){case 0:e=Gu(null,e,i,t,n);break e;case 1:e=lp(null,e,i,t,n);break e;case 11:e=op(null,e,i,t,n);break e;case 14:e=ap(null,e,i,Fn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Gu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),lp(t,e,i,r,n);case 3:e:{if(mv(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Vg(t,e),gl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ts(Error(te(423)),e),e=cp(t,e,i,n,r);break e}else if(i!==r){r=Ts(Error(te(424)),e),e=cp(t,e,i,n,r);break e}else for(gn=Xi(e.stateNode.containerInfo.firstChild),vn=e,ht=!0,kn=null,n=Bg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),i===r){e=wi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return Gg(e),t===null&&zu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Iu(i,r)?o=null:s!==null&&Iu(i,s)&&(e.flags|=32),pv(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&zu(e),null;case 13:return gv(t,e,n);case 4:return xf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Es(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),op(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(pl,i._currentValue),i._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===r.children&&!sn.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ku(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ku(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,n),r=Pn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),ap(t,e,i,r,n);case 15:return fv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Va(t,e),e.tag=1,on(i)?(t=!0,hl(e)):t=!1,ms(e,n),cv(e,i,r),Hu(e,i,r,n),Wu(null,e,i,!0,t,n);case 19:return vv(t,e,n);case 22:return dv(t,e,n)}throw Error(te(156,e.tag))};function Iv(t,e){return og(t,e)}function Xx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new Xx(t,e,n,i)}function Nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yx(t){if(typeof t=="function")return Nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jh)return 11;if(t===Qh)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Nf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qr:return Tr(n.children,r,s,e);case Zh:o=8,r|=8;break;case hu:return t=An(12,n,e,r|2),t.elementType=hu,t.lanes=s,t;case fu:return t=An(13,n,e,r),t.elementType=fu,t.lanes=s,t;case du:return t=An(19,n,e,r),t.elementType=du,t.lanes=s,t;case Gm:return Vl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hm:o=10;break e;case Vm:o=9;break e;case Jh:o=11;break e;case Qh:o=14;break e;case Ui:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Vl(t,e,n,i){return t=An(22,t,i,e),t.elementType=Gm,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Uf(t,e,n,i,r,s,o,a,l){return t=new qx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(s),t}function jx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Nv(t){if(!t)return Qi;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(on(n))return Ng(t,n,e)}return e}function Uv(t,e,n,i,r,s,o,a,l){return t=Uf(n,i,!0,t,r,s,o,a,l),t.context=Nv(null),n=t.current,i=Kt(),r=ji(n),s=xi(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,Uo(t,r,i),an(t,i),t}function Gl(t,e,n,i){var r=e.current,s=Kt(),o=ji(r);return n=Nv(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,o),t!==null&&(Wn(t,r,o,s),ka(t,r,o)),o}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ff(t,e){xp(t,e),(t=t.alternate)&&xp(t,e)}function $x(){return null}var Fv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}Wl.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Gl(t,e,null,null)};Wl.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){Gl(null,t,null,null)}),e[Mi]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=dg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&mg(t)}};function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yp(){}function Kx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=wl(o);s.call(c)}}var o=Uv(e,i,t,0,null,!1,!1,"",yp);return t._reactRootContainer=o,t[Mi]=o.current,wo(t.nodeType===8?t.parentNode:t),Lr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=wl(l);a.call(c)}}var l=Uf(t,0,!1,null,null,!1,!1,"",yp);return t._reactRootContainer=l,t[Mi]=l.current,wo(t.nodeType===8?t.parentNode:t),Lr(function(){Gl(e,l,n,i)}),l}function Yl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=wl(o);a.call(l)}}Gl(e,o,t,r)}else o=Kx(n,e,t,r,i);return wl(o)}hg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(nf(e,n|1),an(e,yt()),!(Ye&6)&&(As=yt()+500,rr()))}break;case 13:Lr(function(){var i=Ei(t,1);if(i!==null){var r=Kt();Wn(i,t,1,r)}}),Ff(t,1)}};rf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Kt();Wn(e,t,134217728,n)}Ff(t,134217728)}};fg=function(t){if(t.tag===13){var e=ji(t),n=Ei(t,e);if(n!==null){var i=Kt();Wn(n,t,e,i)}Ff(t,e)}};dg=function(){return et};pg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Eu=function(t,e,n){switch(e){case"input":if(gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fl(i);if(!r)throw Error(te(90));Xm(i),gu(i,r)}}}break;case"textarea":qm(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};eg=bf;tg=Lr;var Zx={usingClientEntryPoint:!1,Events:[Oo,is,Fl,Jm,Qm,bf]},Xs={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jx={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rg(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||$x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{Dl=ca.inject(Jx),Jn=ca}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(e))throw Error(te(200));return jx(t,e,null,n)};xn.createRoot=function(t,e){if(!zf(t))throw Error(te(299));var n=!1,i="",r=Fv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Uf(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,wo(t.nodeType===8?t.parentNode:t),new Of(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=rg(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Lr(t)};xn.hydrate=function(t,e,n){if(!Xl(e))throw Error(te(200));return Yl(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!zf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Fv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Uv(e,null,t,1,n??null,r,!1,s,o),t[Mi]=e.current,wo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Wl(e)};xn.render=function(t,e,n){if(!Xl(e))throw Error(te(200));return Yl(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(te(40));return t._reactRootContainer?(Lr(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};xn.unstable_batchedUpdates=bf;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Yl(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(t){console.error(t)}}Ov(),Om.exports=xn;var Qx=Om.exports,Sp=Qx;cu.createRoot=Sp.createRoot,cu.hydrateRoot=Sp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kf="169",ey=0,Mp=1,ty=2,zv=1,kv=2,ui=3,er=0,ln=1,Zn=2,Ki=0,vs=1,Ep=2,wp=3,Tp=4,ny=5,vr=100,iy=101,ry=102,sy=103,oy=104,ay=200,ly=201,cy=202,uy=203,nh=204,ih=205,hy=206,fy=207,dy=208,py=209,my=210,gy=211,vy=212,_y=213,xy=214,rh=0,sh=1,oh=2,Cs=3,ah=4,lh=5,ch=6,uh=7,Bv=0,yy=1,Sy=2,Zi=0,My=1,Ey=2,wy=3,Ty=4,Ay=5,Cy=6,Ry=7,Hv=300,Rs=301,Ps=302,hh=303,fh=304,ql=306,dh=1e3,Mr=1001,ph=1002,Cn=1003,Py=1004,ua=1005,Bn=1006,Cc=1007,Er=1008,Ti=1009,Vv=1010,Gv=1011,Io=1012,Bf=1013,br=1014,gi=1015,ko=1016,Hf=1017,Vf=1018,Ls=1020,Wv=35902,Xv=1021,Yv=1022,Vn=1023,qv=1024,jv=1025,_s=1026,bs=1027,$v=1028,Gf=1029,Kv=1030,Wf=1031,Xf=1033,Ya=33776,qa=33777,ja=33778,$a=33779,mh=35840,gh=35841,vh=35842,_h=35843,xh=36196,yh=37492,Sh=37496,Mh=37808,Eh=37809,wh=37810,Th=37811,Ah=37812,Ch=37813,Rh=37814,Ph=37815,Lh=37816,bh=37817,Dh=37818,Ih=37819,Nh=37820,Uh=37821,Ka=36492,Fh=36494,Oh=36495,Zv=36283,zh=36284,kh=36285,Bh=36286,Ly=3200,by=3201,Jv=0,Dy=1,ki="",zn="srgb",sr="srgb-linear",Yf="display-p3",jl="display-p3-linear",Tl="linear",at="srgb",Al="rec709",Cl="p3",zr=7680,Ap=519,Iy=512,Ny=513,Uy=514,Qv=515,Fy=516,Oy=517,zy=518,ky=519,Cp=35044,Rp="300 es",vi=2e3,Rl=2001;class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,Hh=180/Math.PI;function Bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Ot(t,e,n){return Math.max(e,Math.min(n,t))}function By(t,e){return(t%e+e)%e}function Pc(t,e,n){return(1-n)*t+n*e}function Ys(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,n=0){ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],u=r[6],g=r[1],v=r[4],S=r[7],R=r[2],A=r[5],T=r[8];return s[0]=o*y+a*g+l*R,s[3]=o*m+a*v+l*A,s[6]=o*u+a*S+l*T,s[1]=c*y+h*g+f*R,s[4]=c*m+h*v+f*A,s[7]=c*u+h*S+f*T,s[2]=d*y+p*g+_*R,s[5]=d*m+p*v+_*A,s[8]=d*u+p*S+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Lc.makeScale(e,n)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new Fe;function e_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Hy(){const t=Pl("canvas");return t.style.display="block",t}const Pp={};function Za(t){t in Pp||(Pp[t]=!0,console.warn(t))}function Vy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Gy(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wy(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qs={[sr]:{transfer:Tl,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[zn]:{transfer:at,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[jl]:{transfer:Tl,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(bp),fromReference:t=>t.applyMatrix3(Lp)},[Yf]:{transfer:at,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(bp),fromReference:t=>t.applyMatrix3(Lp).convertLinearToSRGB()}},Xy=new Set([sr,jl]),Je={enabled:!0,_workingColorSpace:sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Xy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qs[e].toReference,r=qs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return qs[t].primaries},getTransfer:function(t){return t===ki?Tl:qs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(qs[e].luminanceCoefficients)}};function xs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class Yy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Pl("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xs(n[i]/255)*255):n[i]=xs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qy=0;class t_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Dc(r[o].image)):s.push(Dc(r[o]))}else s=Dc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jy=0;class cn extends Fs{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Mr,r=Mr,s=Bn,o=Er,a=Vn,l=Ti,c=cn.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Bo(),this.name="",this.source=new t_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dh:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dh:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Hv;cn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,R=(u+1)/2,A=(h+d)/4,T=(f+y)/4,P=(_+m)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-y)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends Fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new t_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends $y{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class n_ extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ky extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==d||c!==p||h!==_){let m=1-a;const u=l*d+c*p+h*_+f*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,u*g);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*g;if(l=l*m+d*S,c=c*m+p*S,h=h*m+_*S,f=f*m+y*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+h*f+l*p-c*d,e[n+1]=l*_+h*d+c*f-a*p,e[n+2]=c*_+h*p+a*d-l*f,e[n+3]=h*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"YXZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"ZXY":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"ZYX":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"YZX":this._x=d*h*f+c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f-d*p*_;break;case"XZY":this._x=d*h*f-c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new N,Dp=new Ho;class Vo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),fa.subVectors(this.max,js),Br.subVectors(e.a,js),Hr.subVectors(e.b,js),Vr.subVectors(e.c,js),Pi.subVectors(Hr,Br),Li.subVectors(Vr,Hr),ar.subVectors(Br,Vr);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ar.z,ar.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ar.z,0,-ar.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ar.y,ar.x,0];return!Nc(n,Br,Hr,Vr,fa)||(n=[1,0,0,0,1,0,0,0,1],!Nc(n,Br,Hr,Vr,fa))?!1:(da.crossVectors(Pi,Li),n=[da.x,da.y,da.z],Nc(n,Br,Hr,Vr,fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new N,new N,new N,new N,new N,new N,new N,new N],In=new N,ha=new Vo,Br=new N,Hr=new N,Vr=new N,Pi=new N,Li=new N,ar=new N,js=new N,fa=new N,da=new N,lr=new N;function Nc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){lr.fromArray(t,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),h=i.dot(lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Zy=new Vo,$s=new N,Uc=new N;class qf{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Zy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const n=$s.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Uc)),this.expandByPoint($s.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new N,Fc=new N,pa=new N,bi=new N,Oc=new N,ma=new N,zc=new N;class Jy{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fc.copy(e).add(n).multiplyScalar(.5),pa.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(Fc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pa),a=bi.dot(this.direction),l=-bi.dot(pa),c=bi.lengthSq(),h=Math.abs(1-o*o);let f,d,p,_;if(h>0)if(f=o*l-a,d=o*a-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const y=1/h;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fc).addScaledVector(pa,d),p}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){Oc.subVectors(n,e),ma.subVectors(i,e),zc.crossVectors(Oc,ma);let o=this.direction.dot(zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(bi,ma));if(l<0)return null;const c=a*this.direction.dot(Oc.cross(bi));if(c<0||l+c>o)return null;const h=-a*bi.dot(zc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,c,h,f,d,p,_,y,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,p,_,y,m)}set(e,n,i,r,s,o,a,l,c,h,f,d,p,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,_=a*h,y=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,_=c*h,y=c*f;n[0]=d+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=p*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,_=c*h,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*h,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,_=a*h,y=a*f;n[0]=l*h,n[4]=_*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*h,n[4]=y-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*f+_,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+y,n[5]=o*h,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*h,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qy,e,eS)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Di.crossVectors(i,dn),Di.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Di.crossVectors(i,dn)),Di.normalize(),ga.crossVectors(dn,Di),r[0]=Di.x,r[4]=ga.x,r[8]=dn.x,r[1]=Di.y,r[5]=ga.y,r[9]=dn.y,r[2]=Di.z,r[6]=ga.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],u=i[14],g=i[3],v=i[7],S=i[11],R=i[15],A=r[0],T=r[4],P=r[8],X=r[12],x=r[1],w=r[5],B=r[9],k=r[13],G=r[2],K=r[6],H=r[10],Q=r[14],b=r[3],$=r[7],J=r[11],se=r[15];return s[0]=o*A+a*x+l*G+c*b,s[4]=o*T+a*w+l*K+c*$,s[8]=o*P+a*B+l*H+c*J,s[12]=o*X+a*k+l*Q+c*se,s[1]=h*A+f*x+d*G+p*b,s[5]=h*T+f*w+d*K+p*$,s[9]=h*P+f*B+d*H+p*J,s[13]=h*X+f*k+d*Q+p*se,s[2]=_*A+y*x+m*G+u*b,s[6]=_*T+y*w+m*K+u*$,s[10]=_*P+y*B+m*H+u*J,s[14]=_*X+y*k+m*Q+u*se,s[3]=g*A+v*x+S*G+R*b,s[7]=g*T+v*w+S*K+R*$,s[11]=g*P+v*B+S*H+R*J,s[15]=g*X+v*k+S*Q+R*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],u=e[15],g=f*m*c-y*d*c+y*l*p-a*m*p-f*l*u+a*d*u,v=_*d*c-h*m*c-_*l*p+o*m*p+h*l*u-o*d*u,S=h*y*c-_*f*c+_*a*p-o*y*p-h*a*u+o*f*u,R=_*f*l-h*y*l-_*a*d+o*y*d+h*a*m-o*f*m,A=n*g+i*v+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=g*T,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*u-i*d*u)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(h*m*s-_*d*s+_*r*p-n*m*p-h*r*u+n*d*u)*T,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(_*f*s-h*y*s-_*i*p+n*y*p+h*i*u-n*f*u)*T,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*p-n*a*p)*T,e[12]=R*T,e[13]=(h*y*r-_*f*r+_*i*d-n*y*d-h*i*m+n*f*m)*T,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,_=s*f,y=o*h,m=o*f,u=a*f,g=l*c,v=l*h,S=l*f,R=i.x,A=i.y,T=i.z;return r[0]=(1-(y+u))*R,r[1]=(p+S)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+u))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(_+v)*T,r[9]=(m-g)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),a=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,h=1/o,f=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===vi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Rl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*h;let _,y;if(a===vi)_=(o+s)*f,y=-2*f;else if(a===Rl)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new N,Nn=new pt,Qy=new N(0,0,0),eS=new N(1,1,1),Di=new N,ga=new N,dn=new N,Ip=new pt,Np=new Ho;class ti{constructor(e=0,n=0,i=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Np.setFromEuler(this),this.setFromQuaternion(Np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class i_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tS=0;const Up=new N,Wr=new Ho,ai=new pt,va=new N,Ks=new N,nS=new N,iS=new Ho,Fp=new N(1,0,0),Op=new N(0,1,0),zp=new N(0,0,1),kp={type:"added"},rS={type:"removed"},Xr={type:"childadded",child:null},kc={type:"childremoved",child:null};class kt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new N,n=new ti,i=new Ho,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Fe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Fp,e)}rotateY(e){return this.rotateOnAxis(Op,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fp,e)}translateY(e){return this.translateOnAxis(Op,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?va.copy(e):va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Ks,va,this.up):ai.lookAt(va,Ks,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(ai),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kp),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rS),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kp),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,nS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,iS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new N(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new N,li=new N,Bc=new N,ci=new N,Yr=new N,qr=new N,Bp=new N,Hc=new N,Vc=new N,Gc=new N,Wc=new _t,Xc=new _t,Yc=new _t;class Hn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),li.subVectors(i,n),Bc.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(li),l=Un.dot(Bc),c=li.dot(li),h=li.dot(Bc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Wc.setScalar(0),Xc.setScalar(0),Yc.setScalar(0),Wc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Wc,s.x),o.addScaledVector(Xc,s.y),o.addScaledVector(Yc,s.z),o}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),li.subVectors(e,n),Un.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),qr.subVectors(s,i),Hc.subVectors(e,i);const l=Yr.dot(Hc),c=qr.dot(Hc);if(l<=0&&c<=0)return n.copy(i);Vc.subVectors(e,r);const h=Yr.dot(Vc),f=qr.dot(Vc);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Yr,o);Gc.subVectors(e,s);const p=Yr.dot(Gc),_=qr.dot(Gc);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(qr,a);const m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return Bp.subVectors(s,r),a=(f-h)/(f-h+(p-_)),n.copy(r).addScaledVector(Bp,a);const u=1/(m+y+d);return o=y*u,a=d*u,n.copy(i).addScaledVector(Yr,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const r_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},_a={h:0,s:0,l:0};function qc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=By(e,1),n=Ot(n,0,1),i=Ot(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=qc(o,s,e+1/3),this.g=qc(o,s,e),this.b=qc(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=r_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=bc(e.r),this.g=bc(e.g),this.b=bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return Je.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ot(Wt.r*255,0,255))*65536+Math.round(Ot(Wt.g*255,0,255))*256+Math.round(Ot(Wt.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=zn){Je.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(_a);const i=Pc(Ii.h,_a.h,n),r=Pc(Ii.s,_a.s,n),s=Pc(Ii.l,_a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new He;He.NAMES=r_;let sS=0;class Go extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=vs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nh&&(i.blendSrc=this.blendSrc),this.blendDst!==ih&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ap&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jf extends Go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new N,xa=new ye;class ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cp,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xa.fromBufferAttribute(this,n),xa.applyMatrix3(e),this.setXY(n,xa.x,xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ys(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ys(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ys(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ys(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cp&&(e.usage=this.usage),e}}class s_ extends ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o_ extends ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yt extends ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oS=0;const Mn=new pt,jc=new kt,jr=new N,pn=new Vo,Zs=new Vo,Pt=new N;class ni extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?o_:s_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(pn.min,Zs.min),pn.expandByPoint(Pt),Pt.addVectors(pn.max,Zs.max),pn.expandByPoint(Pt)):(pn.expandByPoint(Zs.min),pn.expandByPoint(Zs.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(e,c),Pt.add(jr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;const c=new N,h=new N,f=new N,d=new ye,p=new ye,_=new ye,y=new N,m=new N;function u(P,X,x){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,X),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,X),_.fromBufferAttribute(s,x),h.sub(c),f.sub(c),p.sub(d),_.sub(d);const w=1/(p.x*_.y-_.x*p.y);isFinite(w)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(w),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(w),a[P].add(y),a[X].add(y),a[x].add(y),l[P].add(m),l[X].add(m),l[x].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,X=g.length;P<X;++P){const x=g[P],w=x.start,B=x.count;for(let k=w,G=w+B;k<G;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new N,S=new N,R=new N,A=new N;function T(P){R.fromBufferAttribute(r,P),A.copy(R);const X=a[P];v.copy(X),v.sub(R.multiplyScalar(R.dot(X))).normalize(),S.crossVectors(A,X);const w=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,w)}for(let P=0,X=g.length;P<X;++P){const x=g[P],w=x.start,B=x.count;for(let k=w,G=w+B;k<G;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let u=0;u<h;u++)d[_++]=c[p++]}return new ei(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ni,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hp=new pt,cr=new Jy,ya=new qf,Vp=new N,Sa=new N,Ma=new N,Ea=new N,$c=new N,wa=new N,Gp=new N,Ta=new N;class Ne extends kt{constructor(e=new ni,n=new jf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&($c.fromBufferAttribute(f,e),o?wa.addScaledVector($c,h):wa.addScaledVector($c.sub(n),h))}n.add(wa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(ya.containsPoint(cr.origin)===!1&&(cr.intersectSphere(ya,Vp)===null||cr.origin.distanceToSquared(Vp)>(e.far-e.near)**2))&&(Hp.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Hp),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=v;S<R;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=Aa(this,u,e,i,c,h,f,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const g=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Aa(this,o,e,i,c,h,f,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=v;S<R;S+=3){const A=S,T=S+1,P=S+2;r=Aa(this,u,e,i,c,h,f,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const g=m,v=m+1,S=m+2;r=Aa(this,o,e,i,c,h,f,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aS(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===er,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ta);return c<n.near||c>n.far?null:{distance:c,point:Ta.clone(),object:t}}function Aa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Sa),t.getVertexPosition(l,Ma),t.getVertexPosition(c,Ea);const h=aS(t,e,n,i,Sa,Ma,Ea,Gp);if(h){const f=new N;Hn.getBarycoord(Gp,Sa,Ma,Ea,f),r&&(h.uv=Hn.getInterpolatedAttribute(r,a,l,c,f,new ye)),s&&(h.uv1=Hn.getInterpolatedAttribute(s,a,l,c,f,new ye)),o&&(h.normal=Hn.getInterpolatedAttribute(o,a,l,c,f,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Hn.getNormal(Sa,Ma,Ea,d.normal),h.face=d,h.barycoord=f}return h}class Ft extends ni{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(f,2));function _(y,m,u,g,v,S,R,A,T,P,X){const x=S/T,w=R/P,B=S/2,k=R/2,G=A/2,K=T+1,H=P+1;let Q=0,b=0;const $=new N;for(let J=0;J<H;J++){const se=J*w-k;for(let we=0;we<K;we++){const ze=we*x-B;$[y]=ze*g,$[m]=se*v,$[u]=G,c.push($.x,$.y,$.z),$[y]=0,$[m]=0,$[u]=A>0?1:-1,h.push($.x,$.y,$.z),f.push(we/T),f.push(1-J/P),Q+=1}}for(let J=0;J<P;J++)for(let se=0;se<T;se++){const we=d+se+K*J,ze=d+se+K*(J+1),W=d+(se+1)+K*(J+1),ne=d+(se+1)+K*J;l.push(we,ze,ne),l.push(ze,W,ne),b+=6}a.addGroup(p,b,X),p+=b,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function lS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const cS={clone:Ds,merge:jt};var uS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends Go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uS,this.fragmentShader=hS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=lS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class l_ extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new N,Wp=new ye,Xp=new ye;class Tn extends l_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,Wp,Xp),n.subVectors(Xp,Wp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Rc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $r=-90,Kr=1;class fS extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn($r,Kr,e,n);r.layers=this.layers,this.add(r);const s=new Tn($r,Kr,e,n);s.layers=this.layers,this.add(s);const o=new Tn($r,Kr,e,n);o.layers=this.layers,this.add(o);const a=new Tn($r,Kr,e,n);a.layers=this.layers,this.add(a);const l=new Tn($r,Kr,e,n);l.layers=this.layers,this.add(l);const c=new Tn($r,Kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class c_ extends cn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dS extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new c_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ft(5,5,5),s=new tr({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ki});s.uniforms.tEquirect.value=n;const o=new Ne(r,s),a=n.minFilter;return n.minFilter===Er&&(n.minFilter=Bn),new fS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Kc=new N,pS=new N,mS=new Fe;class mr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Kc.subVectors(i,n).cross(pS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mS.getNormalMatrix(e),r=this.coplanarPoint(Kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new qf,Ca=new N;class $f{constructor(e=new mr,n=new mr,i=new mr,r=new mr,s=new mr,o=new mr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],p=r[8],_=r[9],y=r[10],m=r[11],u=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-u).normalize(),i[1].setComponents(l+s,d+c,m+p,S+u).normalize(),i[2].setComponents(l+o,d+h,m+_,S+g).normalize(),i[3].setComponents(l-o,d-h,m-_,S-g).normalize(),i[4].setComponents(l-a,d-f,m-y,S-v).normalize(),n===vi)i[5].setComponents(l+a,d+f,m+y,S+v).normalize();else if(n===Rl)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function u_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gS(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],y=f[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const y=f[p];t.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class jn extends ni{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,p=[],_=[],y=[],m=[];for(let u=0;u<h;u++){const g=u*d-o;for(let v=0;v<c;v++){const S=v*f-s;_.push(S,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,S=g+c*(u+1),R=g+1+c*(u+1),A=g+1+c*u;p.push(v,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.widthSegments,e.heightSegments)}}var vS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_S=`#ifdef USE_ALPHAHASH
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
#endif`,xS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ES=`#ifdef USE_AOMAP
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
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
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
#endif`,AS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LS=`#ifdef USE_IRIDESCENCE
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
#endif`,bS=`#ifdef USE_BUMPMAP
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
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,BS=`#define PI 3.141592653589793
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
} // validated`,HS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VS=`vec3 transformedNormal = objectNormal;
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
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",jS=`
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
}`,$S=`#ifdef USE_ENVMAP
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
#endif`,KS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZS=`#ifdef USE_ENVMAP
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
#endif`,JS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
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
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
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
#endif`,cM=`#ifdef USE_ENVMAP
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
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
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
#endif`,mM=`struct PhysicalMaterial {
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
}`,gM=`
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
#endif`,vM=`#if defined( RE_IndirectDiffuse )
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
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
#endif`,IM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kM=`#ifdef USE_NORMALMAP
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
#endif`,BM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tE=`float getShadowMask() {
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
}`,nE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iE=`#ifdef USE_SKINNING
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
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uE=`#ifdef USE_TRANSMISSION
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
#endif`,hE=`#ifdef USE_TRANSMISSION
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
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
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
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`#include <common>
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
}`,EE=`#if DEPTH_PACKING == 3200
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
}`,wE=`#define DISTANCE
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
}`,TE=`#define DISTANCE
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`uniform float scale;
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
}`,PE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,bE=`uniform vec3 diffuse;
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
}`,DE=`#define LAMBERT
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
}`,IE=`#define LAMBERT
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
}`,NE=`#define MATCAP
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
}`,UE=`#define MATCAP
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
}`,FE=`#define NORMAL
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
}`,OE=`#define NORMAL
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
}`,zE=`#define PHONG
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
}`,kE=`#define PHONG
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
}`,BE=`#define STANDARD
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
}`,HE=`#define STANDARD
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
}`,VE=`#define TOON
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
}`,GE=`#define TOON
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
}`,WE=`uniform float size;
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
}`,XE=`uniform vec3 diffuse;
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
}`,YE=`#include <common>
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
}`,qE=`uniform vec3 color;
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
}`,jE=`uniform float rotation;
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
}`,$E=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:vS,alphahash_pars_fragment:_S,alphamap_fragment:xS,alphamap_pars_fragment:yS,alphatest_fragment:SS,alphatest_pars_fragment:MS,aomap_fragment:ES,aomap_pars_fragment:wS,batching_pars_vertex:TS,batching_vertex:AS,begin_vertex:CS,beginnormal_vertex:RS,bsdfs:PS,iridescence_fragment:LS,bumpmap_pars_fragment:bS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:IS,clipping_planes_pars_vertex:NS,clipping_planes_vertex:US,color_fragment:FS,color_pars_fragment:OS,color_pars_vertex:zS,color_vertex:kS,common:BS,cube_uv_reflection_fragment:HS,defaultnormal_vertex:VS,displacementmap_pars_vertex:GS,displacementmap_vertex:WS,emissivemap_fragment:XS,emissivemap_pars_fragment:YS,colorspace_fragment:qS,colorspace_pars_fragment:jS,envmap_fragment:$S,envmap_common_pars_fragment:KS,envmap_pars_fragment:ZS,envmap_pars_vertex:JS,envmap_physical_pars_fragment:cM,envmap_vertex:QS,fog_vertex:eM,fog_pars_vertex:tM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:aM,lights_pars_begin:lM,lights_toon_fragment:uM,lights_toon_pars_fragment:hM,lights_phong_fragment:fM,lights_phong_pars_fragment:dM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:vM,lights_fragment_end:_M,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:MM,map_fragment:EM,map_pars_fragment:wM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:PM,morphcolor_vertex:LM,morphnormal_vertex:bM,morphtarget_pars_vertex:DM,morphtarget_vertex:IM,normal_fragment_begin:NM,normal_fragment_maps:UM,normal_pars_fragment:FM,normal_pars_vertex:OM,normal_vertex:zM,normalmap_pars_fragment:kM,clearcoat_normal_fragment_begin:BM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:GM,opaque_fragment:WM,packing:XM,premultiplied_alpha_fragment:YM,project_vertex:qM,dithering_fragment:jM,dithering_pars_fragment:$M,roughnessmap_fragment:KM,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:JM,shadowmap_pars_vertex:QM,shadowmap_vertex:eE,shadowmask_pars_fragment:tE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:rE,skinnormal_vertex:sE,specularmap_fragment:oE,specularmap_pars_fragment:aE,tonemapping_fragment:lE,tonemapping_pars_fragment:cE,transmission_fragment:uE,transmission_pars_fragment:hE,uv_pars_fragment:fE,uv_pars_vertex:dE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:vE,backgroundCube_vert:_E,backgroundCube_frag:xE,cube_vert:yE,cube_frag:SE,depth_vert:ME,depth_frag:EE,distanceRGBA_vert:wE,distanceRGBA_frag:TE,equirect_vert:AE,equirect_frag:CE,linedashed_vert:RE,linedashed_frag:PE,meshbasic_vert:LE,meshbasic_frag:bE,meshlambert_vert:DE,meshlambert_frag:IE,meshmatcap_vert:NE,meshmatcap_frag:UE,meshnormal_vert:FE,meshnormal_frag:OE,meshphong_vert:zE,meshphong_frag:kE,meshphysical_vert:BE,meshphysical_frag:HE,meshtoon_vert:VE,meshtoon_frag:GE,points_vert:WE,points_frag:XE,shadow_vert:YE,shadow_frag:qE,sprite_vert:jE,sprite_frag:$E},oe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},$n={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};$n.physical={uniforms:jt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ra={r:0,b:0,g:0},hr=new ti,KE=new pt;function ZE(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const S=_(g);S===null?u(a,l):S&&S.isColor&&(u(S,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===ql)?(h===void 0&&(h=new Ne(new Ft(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Ds($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),hr.copy(v.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(hr)),h.material.toneMapped=Je.getTransfer(S.colorSpace)!==at,(f!==S||d!==S.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ne(new jn(2,2),new tr({name:"BackgroundMaterial",uniforms:Ds($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,v){g.getRGB(Ra,a_(t)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:y,addToRenderList:m}}function JE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,w,B,k,G){let K=!1;const H=f(k,B,w);s!==H&&(s=H,c(s.object)),K=p(x,k,B,G),K&&_(x,k,B,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(x,w,B,k),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function h(x){return t.deleteVertexArray(x)}function f(x,w,B){const k=B.wireframe===!0;let G=i[x.id];G===void 0&&(G={},i[x.id]=G);let K=G[w.id];K===void 0&&(K={},G[w.id]=K);let H=K[k];return H===void 0&&(H=d(l()),K[k]=H),H}function d(x){const w=[],B=[],k=[];for(let G=0;G<n;G++)w[G]=0,B[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,w,B,k){const G=s.attributes,K=w.attributes;let H=0;const Q=B.getAttributes();for(const b in Q)if(Q[b].location>=0){const J=G[b];let se=K[b];if(se===void 0&&(b==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),b==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function _(x,w,B,k){const G={},K=w.attributes;let H=0;const Q=B.getAttributes();for(const b in Q)if(Q[b].location>=0){let J=K[b];J===void 0&&(b==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),b==="instanceColor"&&x.instanceColor&&(J=x.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),G[b]=se,H++}s.attributes=G,s.attributesNum=H,s.index=k}function y(){const x=s.newAttributes;for(let w=0,B=x.length;w<B;w++)x[w]=0}function m(x){u(x,0)}function u(x,w){const B=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;B[x]=1,k[x]===0&&(t.enableVertexAttribArray(x),k[x]=1),G[x]!==w&&(t.vertexAttribDivisor(x,w),G[x]=w)}function g(){const x=s.newAttributes,w=s.enabledAttributes;for(let B=0,k=w.length;B<k;B++)w[B]!==x[B]&&(t.disableVertexAttribArray(B),w[B]=0)}function v(x,w,B,k,G,K,H){H===!0?t.vertexAttribIPointer(x,w,B,G,K):t.vertexAttribPointer(x,w,B,k,G,K)}function S(x,w,B,k){y();const G=k.attributes,K=B.getAttributes(),H=w.defaultAttributeValues;for(const Q in K){const b=K[Q];if(b.location>=0){let $=G[Q];if($===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&($=x.instanceColor)),$!==void 0){const J=$.normalized,se=$.itemSize,we=e.get($);if(we===void 0)continue;const ze=we.buffer,W=we.type,ne=we.bytesPerElement,he=W===t.INT||W===t.UNSIGNED_INT||$.gpuType===Bf;if($.isInterleavedBufferAttribute){const le=$.data,De=le.stride,Ae=$.offset;if(le.isInstancedInterleavedBuffer){for(let Ve=0;Ve<b.locationSize;Ve++)u(b.location+Ve,le.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ve=0;Ve<b.locationSize;Ve++)m(b.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ve=0;Ve<b.locationSize;Ve++)v(b.location+Ve,se/b.locationSize,W,J,De*ne,(Ae+se/b.locationSize*Ve)*ne,he)}else{if($.isInstancedBufferAttribute){for(let le=0;le<b.locationSize;le++)u(b.location+le,$.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<b.locationSize;le++)m(b.location+le);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let le=0;le<b.locationSize;le++)v(b.location+le,se/b.locationSize,W,J,se*ne,se/b.locationSize*le*ne,he)}}else if(H!==void 0){const J=H[Q];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(b.location,J);break;case 3:t.vertexAttrib3fv(b.location,J);break;case 4:t.vertexAttrib4fv(b.location,J);break;default:t.vertexAttrib1fv(b.location,J)}}}}g()}function R(){P();for(const x in i){const w=i[x];for(const B in w){const k=w[B];for(const G in k)h(k[G].object),delete k[G];delete w[B]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const w=i[x.id];for(const B in w){const k=w[B];for(const G in k)h(k[G].object),delete k[G];delete w[B]}delete i[x.id]}function T(x){for(const w in i){const B=i[w];if(B[x.id]===void 0)continue;const k=B[x.id];for(const G in k)h(k[G].object),delete k[G];delete B[x.id]}}function P(){X(),o=!0,s!==r&&(s=r,c(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:X,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function QE(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];n.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let _=0;for(let y=0;y<f;y++)_+=h[y];for(let y=0;y<d.length;y++)n.update(_,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Vn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ti&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==gi&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function t1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new mr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{const g=s?0:i,v=g*4;let S=u.clippingState||null;l.value=S,S=h(_,d,v,p);for(let R=0;R!==v;++R)S[R]=n[R];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=p+y*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,S=p;v!==y;++v,S+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function n1(t){let e=new WeakMap;function n(o,a){return a===hh?o.mapping=Rs:a===fh&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hh||a===fh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class h_ extends l_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const us=4,Yp=[.125,.215,.35,.446,.526,.582],_r=20,Zc=new h_,qp=new He;let Jc=null,Qc=0,eu=0,tu=!1;const gr=(1+Math.sqrt(5))/2,Zr=1/gr,jp=[new N(-gr,Zr,0),new N(gr,Zr,0),new N(-Zr,0,gr),new N(Zr,0,gr),new N(0,gr,-Zr),new N(0,gr,Zr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class $p{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,Qc,eu),this._renderer.xr.enabled=tu,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ko,format:Vn,colorSpace:sr,depthBuffer:!1},r=Kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i1(s)),this._blurMaterial=r1(s,e,n)}return r}_compileMaterial(e){const n=new Ne(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,i,r){const a=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(qp),h.toneMapping=Zi,h.autoClear=!1;const p=new jf({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Ne(new Ft,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(qp),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Pa(r,g*v,u>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jp[(r-s-1)%jp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ne(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_r-1),y=s/_,m=isFinite(s)?1+Math.floor(h*y):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const u=[];let g=0;for(let T=0;T<_r;++T){const P=T/y,X=Math.exp(-P*P/2);u.push(X),T===0?g+=X:T<m&&(g+=2*X)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-us?r-v+us:0),A=4*(this._cubeSize-S);Pa(n,R,A,3*S,2*S),l.setRenderTarget(n),l.render(f,Zc)}}function i1(t){const e=[],n=[],i=[];let r=t;const s=t-us+1+Yp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-us?l=Yp[o-t+us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,y=3,m=2,u=1,g=new Float32Array(y*_*p),v=new Float32Array(m*_*p),S=new Float32Array(u*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,X=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];g.set(X,y*_*A),v.set(d,m*_*A);const x=[A,A,A,A,A,A];S.set(x,u*_*A)}const R=new ni;R.setAttribute("position",new ei(g,y)),R.setAttribute("uv",new ei(v,m)),R.setAttribute("faceIndex",new ei(S,u)),e.push(R),r>us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kp(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function r1(t,e,n){const i=new Float32Array(_r),r=new N(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Zp(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Jp(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Kf(){return`

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
	`}function s1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hh||l===fh,h=l===Rs||l===Ps;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new $p(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new $p(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function o1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Za("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function a1(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,S=g.length;v<S;v+=3){const R=g[v+0],A=g[v+1],T=g[v+2];d.push(R,A,A,T,T,R)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const R=v+0,A=v+1,T=v+2;d.push(R,A,A,T,T,R)}}else return;const m=new(e_(d)?o_:s_)(d,1);m.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function l1(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function f(d,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g];for(let g=0;g<y.length;g++)n.update(u,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function c1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function u1(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*A*4*f),P=new n_(T,R,A,f);P.type=gi,P.needsUpdate=!0;const X=S*4;for(let w=0;w<f;w++){const B=u[w],k=g[w],G=v[w],K=R*A*4*w;for(let H=0;H<B.count;H++){const Q=H*X;_===!0&&(r.fromBufferAttribute(B,H),T[K+Q+0]=r.x,T[K+Q+1]=r.y,T[K+Q+2]=r.z,T[K+Q+3]=0),y===!0&&(r.fromBufferAttribute(k,H),T[K+Q+4]=r.x,T[K+Q+5]=r.y,T[K+Q+6]=r.z,T[K+Q+7]=0),m===!0&&(r.fromBufferAttribute(G,H),T[K+Q+8]=r.x,T[K+Q+9]=r.y,T[K+Q+10]=r.z,T[K+Q+11]=G.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new ye(R,A)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function h1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class f_ extends cn{constructor(e,n,i,r,s,o,a,l,c,h=_s){if(h!==_s&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_s&&(i=br),i===void 0&&h===bs&&(i=Ls),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const d_=new cn,Qp=new f_(1,1),p_=new n_,m_=new Ky,g_=new c_,em=[],tm=[],nm=new Float32Array(16),im=new Float32Array(9),rm=new Float32Array(4);function Os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=em[r];if(s===void 0&&(s=new Float32Array(r),em[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $l(t,e){let n=tm[e];n===void 0&&(n=new Int32Array(e),tm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function f1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function g1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;rm.set(i),t.uniformMatrix2fv(this.addr,!1,rm),Rt(n,i)}}function v1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;im.set(i),t.uniformMatrix3fv(this.addr,!1,im),Rt(n,i)}}function _1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;nm.set(i),t.uniformMatrix4fv(this.addr,!1,nm),Rt(n,i)}}function x1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function E1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Qp.compareFunction=Qv,s=Qp):s=d_,n.setTexture2D(e||s,r)}function R1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||m_,r)}function P1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g_,r)}function L1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||p_,r)}function b1(t){switch(t){case 5126:return f1;case 35664:return d1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return v1;case 35676:return _1;case 5124:case 35670:return x1;case 35667:case 35671:return y1;case 35668:case 35672:return S1;case 35669:case 35673:return M1;case 5125:return E1;case 36294:return w1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return L1}}function D1(t,e){t.uniform1fv(this.addr,e)}function I1(t,e){const n=Os(e,this.size,2);t.uniform2fv(this.addr,n)}function N1(t,e){const n=Os(e,this.size,3);t.uniform3fv(this.addr,n)}function U1(t,e){const n=Os(e,this.size,4);t.uniform4fv(this.addr,n)}function F1(t,e){const n=Os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function O1(t,e){const n=Os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function z1(t,e){const n=Os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function k1(t,e){t.uniform1iv(this.addr,e)}function B1(t,e){t.uniform2iv(this.addr,e)}function H1(t,e){t.uniform3iv(this.addr,e)}function V1(t,e){t.uniform4iv(this.addr,e)}function G1(t,e){t.uniform1uiv(this.addr,e)}function W1(t,e){t.uniform2uiv(this.addr,e)}function X1(t,e){t.uniform3uiv(this.addr,e)}function Y1(t,e){t.uniform4uiv(this.addr,e)}function q1(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||d_,s[o])}function j1(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||m_,s[o])}function $1(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||g_,s[o])}function K1(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||p_,s[o])}function Z1(t){switch(t){case 5126:return D1;case 35664:return I1;case 35665:return N1;case 35666:return U1;case 35674:return F1;case 35675:return O1;case 35676:return z1;case 5124:case 35670:return k1;case 35667:case 35671:return B1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return W1;case 36295:return X1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return K1}}class J1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=b1(n.type)}}class Q1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Z1(n.type)}}class ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function sm(t,e){t.seq.push(e),t.map[e.id]=e}function tw(t,e,n){const i=t.name,r=i.length;for(nu.lastIndex=0;;){const s=nu.exec(i),o=nu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sm(n,c===void 0?new J1(a,t,e):new Q1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new ew(a),sm(n,f)),n=f}}}class Ja{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);tw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function om(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nw=37297;let iw=0;function rw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function sw(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Cl&&n===Al?i="LinearDisplayP3ToLinearSRGB":e===Al&&n===Cl&&(i="LinearSRGBToLinearDisplayP3"),t){case sr:case jl:return[i,"LinearTransferOETF"];case zn:case Yf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function am(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+rw(t.getShaderSource(e),o)}else return r}function ow(t,e){const n=sw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function aw(t,e){let n;switch(e){case My:n="Linear";break;case Ey:n="Reinhard";break;case wy:n="Cineon";break;case Ty:n="ACESFilmic";break;case Cy:n="AgX";break;case Ry:n="Neutral";break;case Ay:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const La=new N;function lw(){Je.getLuminanceCoefficients(La);const t=La.x.toFixed(4),e=La.y.toFixed(4),n=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function uw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function no(t){return t!==""}function lm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(t){return t.replace(fw,pw)}const dw=new Map;function pw(t,e){let n=Ue[e];if(n===void 0){const i=dw.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vh(n)}const mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(t){return t.replace(mw,gw)}function gw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function vw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===kv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function _w(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Ps:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function yw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Bv:e="ENVMAP_BLENDING_MULTIPLY";break;case yy:e="ENVMAP_BLENDING_MIX";break;case Sy:e="ENVMAP_BLENDING_ADD";break}return e}function Sw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Mw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=vw(n),c=_w(n),h=xw(n),f=yw(n),d=Sw(n),p=cw(n),_=uw(s),y=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(no).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(no).join(`
`),u.length>0&&(u+=`
`)):(m=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),u=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Zi?aw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,ow("linearToOutputTexel",n.outputColorSpace),lw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(no).join(`
`)),o=Vh(o),o=lm(o,n),o=cm(o,n),a=Vh(a),a=lm(a,n),a=cm(a,n),o=um(o),a=um(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+m+o,S=g+u+a,R=om(r,r.VERTEX_SHADER,v),A=om(r,r.FRAGMENT_SHADER,S);r.attachShader(y,R),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(w){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(R).trim(),G=r.getShaderInfoLog(A).trim();let K=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,A);else{const Q=am(r,R,"vertex"),b=am(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+Q+`
`+b)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||G==="")&&(H=!1);H&&(w.diagnostics={runnable:K,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:u}})}r.deleteShader(R),r.deleteShader(A),P=new Ja(r,y),X=hw(r,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let X;this.getAttributes=function(){return X===void 0&&T(this),X};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,nw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=A,this}let Ew=0;class ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Tw(e),n.set(e,i)),i}}class Tw{constructor(e){this.id=Ew++,this.code=e,this.usedTimes=0}}function Aw(t,e,n,i,r,s,o){const a=new i_,l=new ww,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,w,B,k,G){const K=k.fog,H=G.geometry,Q=x.isMeshStandardMaterial?k.environment:null,b=(x.isMeshStandardMaterial?n:e).get(x.envMap||Q),$=b&&b.mapping===ql?b.image.height:null,J=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,we=se!==void 0?se.length:0;let ze=0;H.morphAttributes.position!==void 0&&(ze=1),H.morphAttributes.normal!==void 0&&(ze=2),H.morphAttributes.color!==void 0&&(ze=3);let W,ne,he,le;if(J){const en=$n[J];W=en.vertexShader,ne=en.fragmentShader}else W=x.vertexShader,ne=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),le=l.getFragmentShaderID(x);const De=t.getRenderTarget(),Ae=G.isInstancedMesh===!0,Ve=G.isBatchedMesh===!0,tt=!!x.map,Ge=!!x.matcap,L=!!b,un=!!x.aoMap,ke=!!x.lightMap,qe=!!x.bumpMap,Re=!!x.normalMap,rt=!!x.displacementMap,be=!!x.emissiveMap,C=!!x.metalnessMap,M=!!x.roughnessMap,F=x.anisotropy>0,q=x.clearcoat>0,ee=x.dispersion>0,Y=x.iridescence>0,Se=x.sheen>0,ae=x.transmission>0,me=F&&!!x.anisotropyMap,je=q&&!!x.clearcoatMap,ie=q&&!!x.clearcoatNormalMap,ge=q&&!!x.clearcoatRoughnessMap,Pe=Y&&!!x.iridescenceMap,Le=Y&&!!x.iridescenceThicknessMap,ve=Se&&!!x.sheenColorMap,Be=Se&&!!x.sheenRoughnessMap,Ie=!!x.specularMap,nt=!!x.specularColorMap,D=!!x.specularIntensityMap,fe=ae&&!!x.transmissionMap,V=ae&&!!x.thicknessMap,Z=!!x.gradientMap,ce=!!x.alphaMap,de=x.alphaTest>0,We=!!x.alphaHash,St=!!x.extensions;let Qt=Zi;x.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Qt=t.toneMapping);const $e={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:ne,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Ve,batchingColor:Ve&&G._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&G.instanceColor!==null,instancingMorph:Ae&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:De===null?t.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:sr,alphaToCoverage:!!x.alphaToCoverage,map:tt,matcap:Ge,envMap:L,envMapMode:L&&b.mapping,envMapCubeUVHeight:$,aoMap:un,lightMap:ke,bumpMap:qe,normalMap:Re,displacementMap:p&&rt,emissiveMap:be,normalMapObjectSpace:Re&&x.normalMapType===Dy,normalMapTangentSpace:Re&&x.normalMapType===Jv,metalnessMap:C,roughnessMap:M,anisotropy:F,anisotropyMap:me,clearcoat:q,clearcoatMap:je,clearcoatNormalMap:ie,clearcoatRoughnessMap:ge,dispersion:ee,iridescence:Y,iridescenceMap:Pe,iridescenceThicknessMap:Le,sheen:Se,sheenColorMap:ve,sheenRoughnessMap:Be,specularMap:Ie,specularColorMap:nt,specularIntensityMap:D,transmission:ae,transmissionMap:fe,thicknessMap:V,gradientMap:Z,opaque:x.transparent===!1&&x.blending===vs&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:We,combine:x.combine,mapUv:tt&&m(x.map.channel),aoMapUv:un&&m(x.aoMap.channel),lightMapUv:ke&&m(x.lightMap.channel),bumpMapUv:qe&&m(x.bumpMap.channel),normalMapUv:Re&&m(x.normalMap.channel),displacementMapUv:rt&&m(x.displacementMap.channel),emissiveMapUv:be&&m(x.emissiveMap.channel),metalnessMapUv:C&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:me&&m(x.anisotropyMap.channel),clearcoatMapUv:je&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Be&&m(x.sheenRoughnessMap.channel),specularMapUv:Ie&&m(x.specularMap.channel),specularColorMapUv:nt&&m(x.specularColorMap.channel),specularIntensityMapUv:D&&m(x.specularIntensityMap.channel),transmissionMapUv:fe&&m(x.transmissionMap.channel),thicknessMapUv:V&&m(x.thicknessMap.channel),alphaMapUv:ce&&m(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Re||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(tt||ce),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qt,decodeVideoTexture:tt&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Zn,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function g(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)w.push(B),w.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(v(w,x),S(w,x),w.push(t.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function v(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function R(x){const w=y[x.type];let B;if(w){const k=$n[w];B=cS.clone(k.uniforms)}else B=x.uniforms;return B}function A(x,w){let B;for(let k=0,G=h.length;k<G;k++){const K=h[k];if(K.cacheKey===w){B=K,++B.usedTimes;break}}return B===void 0&&(B=new Mw(t,w,x,s),h.push(B)),B}function T(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function P(x){l.remove(x)}function X(){l.dispose()}return{getParameters:u,getProgramCacheKey:g,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:X}}function Cw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Rw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,y,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=m),e++,u}function a(f,d,p,_,y,m){const u=o(f,d,p,_,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,d,p,_,y,m){const u=o(f,d,p,_,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||Rw),i.length>1&&i.sort(d||fm),r.length>1&&r.sort(d||fm)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Pw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dm,t.set(i,[o])):r>=s.length?(o=new dm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new He};break;case"SpotLight":n={position:new N,direction:new N,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function bw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Dw=0;function Iw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Nw(t){const e=new Lw,n=bw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new pt,o=new pt;function a(c){let h=0,f=0,d=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,_=0,y=0,m=0,u=0,g=0,v=0,S=0,R=0,A=0,T=0;c.sort(Iw);for(let X=0,x=c.length;X<x;X++){const w=c[X],B=w.color,k=w.intensity,G=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=B.r*k,f+=B.g*k,d+=B.b*k;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],k);T++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,b=n.get(w);b.shadowIntensity=Q.intensity,b.shadowBias=Q.bias,b.shadowNormalBias=Q.normalBias,b.shadowRadius=Q.radius,b.shadowMapSize=Q.mapSize,i.directionalShadow[p]=b,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=w.shadow.matrix,g++}i.directional[p]=H,p++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(B).multiplyScalar(k),H.distance=G,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[y]=H;const Q=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,Q.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[y]=Q.matrix,w.castShadow){const b=n.get(w);b.shadowIntensity=Q.intensity,b.shadowBias=Q.bias,b.shadowNormalBias=Q.normalBias,b.shadowRadius=Q.radius,b.shadowMapSize=Q.mapSize,i.spotShadow[y]=b,i.spotShadowMap[y]=K,S++}y++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(B).multiplyScalar(k),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const Q=w.shadow,b=n.get(w);b.shadowIntensity=Q.intensity,b.shadowBias=Q.bias,b.shadowNormalBias=Q.normalBias,b.shadowRadius=Q.radius,b.shadowMapSize=Q.mapSize,b.shadowCameraNear=Q.camera.near,b.shadowCameraFar=Q.camera.far,i.pointShadow[_]=b,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=w.shadow.matrix,v++}i.point[_]=H,_++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(k),H.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[u]=H,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==g||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=p,P.pointLength=_,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=g,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=T,i.version=Dw++)}function l(c,h){let f=0,d=0,p=0,_=0,y=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function pm(t){const e=new Nw(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Uw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pm(t),e.set(r,[a])):s>=o.length?(a=new pm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Fw extends Go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ly,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends Go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kw=`uniform sampler2D shadow_pass;
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
}`;function Bw(t,e,n){let i=new $f;const r=new ye,s=new ye,o=new _t,a=new Fw({depthPacking:by}),l=new Ow,c={},h=n.maxTextureSize,f={[er]:ln,[ln]:er,[Zn]:Zn},d=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:zw,fragmentShader:kw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ni;_.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ne(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zv;let u=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const X=t.getRenderTarget(),x=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Ki),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=u!==ui&&this.type===ui,G=u===ui&&this.type!==ui;for(let K=0,H=A.length;K<H;K++){const Q=A[K],b=Q.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const $=b.getFrameExtents();if(r.multiply($),s.copy(b.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,b.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,b.mapSize.y=s.y)),b.map===null||k===!0||G===!0){const se=this.type!==ui?{minFilter:Cn,magFilter:Cn}:{};b.map!==null&&b.map.dispose(),b.map=new Dr(r.x,r.y,se),b.map.texture.name=Q.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const J=b.getViewportCount();for(let se=0;se<J;se++){const we=b.getViewport(se);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),B.viewport(o),b.updateMatrices(Q,se),i=b.getFrustum(),S(T,P,b.camera,Q,this.type)}b.isPointLightShadow!==!0&&this.type===ui&&g(b,P),b.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(X,x,w)};function g(A,T){const P=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,p,y,null)}function v(A,T,P,X){let x=null;const w=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)x=w;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=x.uuid,k=T.uuid;let G=c[B];G===void 0&&(G={},c[B]=G);let K=G[k];K===void 0&&(K=x.clone(),G[k]=K,T.addEventListener("dispose",R)),x=K}if(x.visible=T.visible,x.wireframe=T.wireframe,X===ui?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=t.properties.get(x);B.light=P}return x}function S(A,T,P,X,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const k=e.update(A),G=A.material;if(Array.isArray(G)){const K=k.groups;for(let H=0,Q=K.length;H<Q;H++){const b=K[H],$=G[b.materialIndex];if($&&$.visible){const J=v(A,$,X,x);A.onBeforeShadow(t,A,T,P,k,J,b),t.renderBufferDirect(P,null,k,J,A,b),A.onAfterShadow(t,A,T,P,k,J,b)}}}else if(G.visible){const K=v(A,G,X,x);A.onBeforeShadow(t,A,T,P,k,K,null),t.renderBufferDirect(P,null,k,K,A,null),A.onAfterShadow(t,A,T,P,k,K,null)}}const B=A.children;for(let k=0,G=B.length;k<G;k++)S(B[k],T,P,X,x)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const X=c[P],x=A.target.uuid;x in X&&(X[x].dispose(),delete X[x])}}}const Hw={[rh]:sh,[oh]:ch,[ah]:uh,[Cs]:lh,[sh]:rh,[ch]:oh,[uh]:ah,[lh]:Cs};function Vw(t){function e(){let D=!1;const fe=new _t;let V=null;const Z=new _t(0,0,0,0);return{setMask:function(ce){V!==ce&&!D&&(t.colorMask(ce,ce,ce,ce),V=ce)},setLocked:function(ce){D=ce},setClear:function(ce,de,We,St,Qt){Qt===!0&&(ce*=St,de*=St,We*=St),fe.set(ce,de,We,St),Z.equals(fe)===!1&&(t.clearColor(ce,de,We,St),Z.copy(fe))},reset:function(){D=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,fe=!1,V=null,Z=null,ce=null;return{setReversed:function(de){fe=de},setTest:function(de){de?he(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(de){V!==de&&!D&&(t.depthMask(de),V=de)},setFunc:function(de){if(fe&&(de=Hw[de]),Z!==de){switch(de){case rh:t.depthFunc(t.NEVER);break;case sh:t.depthFunc(t.ALWAYS);break;case oh:t.depthFunc(t.LESS);break;case Cs:t.depthFunc(t.LEQUAL);break;case ah:t.depthFunc(t.EQUAL);break;case lh:t.depthFunc(t.GEQUAL);break;case ch:t.depthFunc(t.GREATER);break;case uh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=de}},setLocked:function(de){D=de},setClear:function(de){ce!==de&&(t.clearDepth(de),ce=de)},reset:function(){D=!1,V=null,Z=null,ce=null}}}function i(){let D=!1,fe=null,V=null,Z=null,ce=null,de=null,We=null,St=null,Qt=null;return{setTest:function($e){D||($e?he(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function($e){fe!==$e&&!D&&(t.stencilMask($e),fe=$e)},setFunc:function($e,en,ri){(V!==$e||Z!==en||ce!==ri)&&(t.stencilFunc($e,en,ri),V=$e,Z=en,ce=ri)},setOp:function($e,en,ri){(de!==$e||We!==en||St!==ri)&&(t.stencilOp($e,en,ri),de=$e,We=en,St=ri)},setLocked:function($e){D=$e},setClear:function($e){Qt!==$e&&(t.clearStencil($e),Qt=$e)},reset:function(){D=!1,fe=null,V=null,Z=null,ce=null,de=null,We=null,St=null,Qt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,d=[],p=null,_=!1,y=null,m=null,u=null,g=null,v=null,S=null,R=null,A=new He(0,0,0),T=0,P=!1,X=null,x=null,w=null,B=null,k=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=H>=2);let b=null,$={};const J=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),we=new _t().fromArray(J),ze=new _t().fromArray(se);function W(D,fe,V,Z){const ce=new Uint8Array(4),de=t.createTexture();t.bindTexture(D,de),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<V;We++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(fe+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return de}const ne={};ne[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(Cs),ke(!1),qe(Mp),he(t.CULL_FACE),L(Ki);function he(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function le(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function De(D,fe){return h[D]!==fe?(t.bindFramebuffer(D,fe),h[D]=fe,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ae(D,fe){let V=d,Z=!1;if(D){V=f.get(fe),V===void 0&&(V=[],f.set(fe,V));const ce=D.textures;if(V.length!==ce.length||V[0]!==t.COLOR_ATTACHMENT0){for(let de=0,We=ce.length;de<We;de++)V[de]=t.COLOR_ATTACHMENT0+de;V.length=ce.length,Z=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,Z=!0);Z&&t.drawBuffers(V)}function Ve(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const tt={[vr]:t.FUNC_ADD,[iy]:t.FUNC_SUBTRACT,[ry]:t.FUNC_REVERSE_SUBTRACT};tt[sy]=t.MIN,tt[oy]=t.MAX;const Ge={[ay]:t.ZERO,[ly]:t.ONE,[cy]:t.SRC_COLOR,[nh]:t.SRC_ALPHA,[my]:t.SRC_ALPHA_SATURATE,[dy]:t.DST_COLOR,[hy]:t.DST_ALPHA,[uy]:t.ONE_MINUS_SRC_COLOR,[ih]:t.ONE_MINUS_SRC_ALPHA,[py]:t.ONE_MINUS_DST_COLOR,[fy]:t.ONE_MINUS_DST_ALPHA,[gy]:t.CONSTANT_COLOR,[vy]:t.ONE_MINUS_CONSTANT_COLOR,[_y]:t.CONSTANT_ALPHA,[xy]:t.ONE_MINUS_CONSTANT_ALPHA};function L(D,fe,V,Z,ce,de,We,St,Qt,$e){if(D===Ki){_===!0&&(le(t.BLEND),_=!1);return}if(_===!1&&(he(t.BLEND),_=!0),D!==ny){if(D!==y||$e!==P){if((m!==vr||v!==vr)&&(t.blendEquation(t.FUNC_ADD),m=vr,v=vr),$e)switch(D){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ep:t.blendFunc(t.ONE,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ep:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,g=null,S=null,R=null,A.set(0,0,0),T=0,y=D,P=$e}return}ce=ce||fe,de=de||V,We=We||Z,(fe!==m||ce!==v)&&(t.blendEquationSeparate(tt[fe],tt[ce]),m=fe,v=ce),(V!==u||Z!==g||de!==S||We!==R)&&(t.blendFuncSeparate(Ge[V],Ge[Z],Ge[de],Ge[We]),u=V,g=Z,S=de,R=We),(St.equals(A)===!1||Qt!==T)&&(t.blendColor(St.r,St.g,St.b,Qt),A.copy(St),T=Qt),y=D,P=!1}function un(D,fe){D.side===Zn?le(t.CULL_FACE):he(t.CULL_FACE);let V=D.side===ln;fe&&(V=!V),ke(V),D.blending===vs&&D.transparent===!1?L(Ki):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){X!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),X=D)}function qe(D){D!==ey?(he(t.CULL_FACE),D!==x&&(D===Mp?t.cullFace(t.BACK):D===ty?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),x=D}function Re(D){D!==w&&(K&&t.lineWidth(D),w=D)}function rt(D,fe,V){D?(he(t.POLYGON_OFFSET_FILL),(B!==fe||k!==V)&&(t.polygonOffset(fe,V),B=fe,k=V)):le(t.POLYGON_OFFSET_FILL)}function be(D){D?he(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+G-1),b!==D&&(t.activeTexture(D),b=D)}function M(D,fe,V){V===void 0&&(b===null?V=t.TEXTURE0+G-1:V=b);let Z=$[V];Z===void 0&&(Z={type:void 0,texture:void 0},$[V]=Z),(Z.type!==D||Z.texture!==fe)&&(b!==V&&(t.activeTexture(V),b=V),t.bindTexture(D,fe||ne[D]),Z.type=D,Z.texture=fe)}function F(){const D=$[b];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){we.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),we.copy(D))}function ve(D){ze.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ze.copy(D))}function Be(D,fe){let V=l.get(fe);V===void 0&&(V=new WeakMap,l.set(fe,V));let Z=V.get(D);Z===void 0&&(Z=t.getUniformBlockIndex(fe,D.name),V.set(D,Z))}function Ie(D,fe){const Z=l.get(fe).get(D);a.get(fe)!==Z&&(t.uniformBlockBinding(fe,Z,D.__bindingPointIndex),a.set(fe,Z))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},b=null,$={},h={},f=new WeakMap,d=[],p=null,_=!1,y=null,m=null,u=null,g=null,v=null,S=null,R=null,A=new He(0,0,0),T=0,P=!1,X=null,x=null,w=null,B=null,k=null,we.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:le,bindFramebuffer:De,drawBuffers:Ae,useProgram:Ve,setBlending:L,setMaterial:un,setFlipSided:ke,setCullFace:qe,setLineWidth:Re,setPolygonOffset:rt,setScissorTest:be,activeTexture:C,bindTexture:M,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Pe,updateUBOMapping:Be,uniformBlockBinding:Ie,texStorage2D:je,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:Se,compressedTexSubImage2D:ae,compressedTexSubImage3D:me,scissor:Le,viewport:ve,reset:nt}}function mm(t,e,n,i){const r=Gw(i);switch(n){case Xv:return t*e;case qv:return t*e;case jv:return t*e*2;case $v:return t*e/r.components*r.byteLength;case Gf:return t*e/r.components*r.byteLength;case Kv:return t*e*2/r.components*r.byteLength;case Wf:return t*e*2/r.components*r.byteLength;case Yv:return t*e*3/r.components*r.byteLength;case Vn:return t*e*4/r.components*r.byteLength;case Xf:return t*e*4/r.components*r.byteLength;case Ya:case qa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ja:case $a:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gh:case _h:return Math.max(t,16)*Math.max(e,8)/4;case mh:case vh:return Math.max(t,8)*Math.max(e,8)/2;case xh:case yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Th:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ka:case Fh:case Oh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zv:case zh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kh:case Bh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Gw(t){switch(t){case Ti:case Vv:return{byteLength:1,components:1};case Io:case Gv:case ko:return{byteLength:2,components:1};case Hf:case Vf:return{byteLength:2,components:4};case br:case Bf:case gi:return{byteLength:4,components:1};case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Ww(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return p?new OffscreenCanvas(C,M):Pl("canvas")}function y(C,M,F){let q=1;const ee=be(C);if((ee.width>F||ee.height>F)&&(q=F/Math.max(ee.width,ee.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(q*ee.width),Se=Math.floor(q*ee.height);f===void 0&&(f=_(Y,Se));const ae=M?_(Y,Se):f;return ae.width=Y,ae.height=Se,ae.getContext("2d").drawImage(C,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Se+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Cn&&C.minFilter!==Bn}function u(C){t.generateMipmap(C)}function g(C,M,F,q,ee=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=M;if(M===t.RED&&(F===t.FLOAT&&(Y=t.R32F),F===t.HALF_FLOAT&&(Y=t.R16F),F===t.UNSIGNED_BYTE&&(Y=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.R8UI),F===t.UNSIGNED_SHORT&&(Y=t.R16UI),F===t.UNSIGNED_INT&&(Y=t.R32UI),F===t.BYTE&&(Y=t.R8I),F===t.SHORT&&(Y=t.R16I),F===t.INT&&(Y=t.R32I)),M===t.RG&&(F===t.FLOAT&&(Y=t.RG32F),F===t.HALF_FLOAT&&(Y=t.RG16F),F===t.UNSIGNED_BYTE&&(Y=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RG8UI),F===t.UNSIGNED_SHORT&&(Y=t.RG16UI),F===t.UNSIGNED_INT&&(Y=t.RG32UI),F===t.BYTE&&(Y=t.RG8I),F===t.SHORT&&(Y=t.RG16I),F===t.INT&&(Y=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),F===t.UNSIGNED_INT&&(Y=t.RGB32UI),F===t.BYTE&&(Y=t.RGB8I),F===t.SHORT&&(Y=t.RGB16I),F===t.INT&&(Y=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),F===t.UNSIGNED_INT&&(Y=t.RGBA32UI),F===t.BYTE&&(Y=t.RGBA8I),F===t.SHORT&&(Y=t.RGBA16I),F===t.INT&&(Y=t.RGBA32I)),M===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),M===t.RGBA){const Se=ee?Tl:Je.getTransfer(q);F===t.FLOAT&&(Y=t.RGBA32F),F===t.HALF_FLOAT&&(Y=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Y=Se===at?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(C,M){let F;return C?M===null||M===br||M===Ls?F=t.DEPTH24_STENCIL8:M===gi?F=t.DEPTH32F_STENCIL8:M===Io&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===br||M===Ls?F=t.DEPTH_COMPONENT24:M===gi?F=t.DEPTH_COMPONENT32F:M===Io&&(F=t.DEPTH_COMPONENT16),F}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Cn&&C.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&h.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),X(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const F=C.source,q=d.get(F);if(q){const ee=q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(C),Object.keys(q).length===0&&d.delete(F)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const F=C.source,q=d.get(F);delete q[M.__cacheKey],o.memory.textures--}function X(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let ee=0;ee<M.__webglFramebuffer[q].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[q][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=C.textures;for(let q=0,ee=F.length;q<ee;q++){const Y=i.get(F[q]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(C)}let x=0;function w(){x=0}function B(){const C=x;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),x+=1,C}function k(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){const F=i.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(F,C,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function K(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){ze(F,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function H(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){ze(F,C,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function Q(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){W(F,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const b={[dh]:t.REPEAT,[Mr]:t.CLAMP_TO_EDGE,[ph]:t.MIRRORED_REPEAT},$={[Cn]:t.NEAREST,[Py]:t.NEAREST_MIPMAP_NEAREST,[ua]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[Cc]:t.LINEAR_MIPMAP_NEAREST,[Er]:t.LINEAR_MIPMAP_LINEAR},J={[Iy]:t.NEVER,[ky]:t.ALWAYS,[Ny]:t.LESS,[Qv]:t.LEQUAL,[Uy]:t.EQUAL,[zy]:t.GEQUAL,[Fy]:t.GREATER,[Oy]:t.NOTEQUAL};function se(C,M){if(M.type===gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===Cc||M.magFilter===ua||M.magFilter===Er||M.minFilter===Bn||M.minFilter===Cc||M.minFilter===ua||M.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,b[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,b[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,b[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,$[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==ua&&M.minFilter!==Er||M.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function we(C,M){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const q=M.source;let ee=d.get(q);ee===void 0&&(ee={},d.set(q,ee));const Y=k(M);if(Y!==C.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[Y].usedTimes++;const Se=ee[C.__cacheKey];Se!==void 0&&(ee[C.__cacheKey].usedTimes--,Se.usedTimes===0&&P(M)),C.__cacheKey=Y,C.__webglTexture=ee[Y].texture}return F}function ze(C,M,F){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const ee=we(C,M),Y=M.source;n.bindTexture(q,C.__webglTexture,t.TEXTURE0+F);const Se=i.get(Y);if(Y.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+F);const ae=Je.getPrimaries(Je.workingColorSpace),me=M.colorSpace===ki?null:Je.getPrimaries(M.colorSpace),je=M.colorSpace===ki||ae===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ie=y(M.image,!1,r.maxTextureSize);ie=rt(M,ie);const ge=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let Le=g(M.internalFormat,ge,Pe,M.colorSpace,M.isVideoTexture);se(q,M);let ve;const Be=M.mipmaps,Ie=M.isVideoTexture!==!0,nt=Se.__version===void 0||ee===!0,D=Y.dataReady,fe=S(M,ie);if(M.isDepthTexture)Le=v(M.format===bs,M.type),nt&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Le,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,ge,Pe,null));else if(M.isDataTexture)if(Be.length>0){Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,fe,Le,Be[0].width,Be[0].height);for(let V=0,Z=Be.length;V<Z;V++)ve=Be[V],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,ge,Pe,ve.data):n.texImage2D(t.TEXTURE_2D,V,Le,ve.width,ve.height,0,ge,Pe,ve.data);M.generateMipmaps=!1}else Ie?(nt&&n.texStorage2D(t.TEXTURE_2D,fe,Le,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Pe,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,ge,Pe,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Le,Be[0].width,Be[0].height,ie.depth);for(let V=0,Z=Be.length;V<Z;V++)if(ve=Be[V],M.format!==Vn)if(ge!==null)if(Ie){if(D)if(M.layerUpdates.size>0){const ce=mm(ve.width,ve.height,M.format,M.type);for(const de of M.layerUpdates){const We=ve.data.subarray(de*ce/ve.data.BYTES_PER_ELEMENT,(de+1)*ce/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,de,ve.width,ve.height,1,ge,We,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ie.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,Le,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ie.depth,ge,Pe,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,Le,ve.width,ve.height,ie.depth,0,ge,Pe,ve.data)}else{Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,fe,Le,Be[0].width,Be[0].height);for(let V=0,Z=Be.length;V<Z;V++)ve=Be[V],M.format!==Vn?ge!==null?Ie?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,V,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,ge,Pe,ve.data):n.texImage2D(t.TEXTURE_2D,V,Le,ve.width,ve.height,0,ge,Pe,ve.data)}else if(M.isDataArrayTexture)if(Ie){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Le,ie.width,ie.height,ie.depth),D)if(M.layerUpdates.size>0){const V=mm(ie.width,ie.height,M.format,M.type);for(const Z of M.layerUpdates){const ce=ie.data.subarray(Z*V/ie.data.BYTES_PER_ELEMENT,(Z+1)*V/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ge,Pe,ce)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Pe,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,ge,Pe,ie.data);else if(M.isData3DTexture)Ie?(nt&&n.texStorage3D(t.TEXTURE_3D,fe,Le,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Pe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,ge,Pe,ie.data);else if(M.isFramebufferTexture){if(nt)if(Ie)n.texStorage2D(t.TEXTURE_2D,fe,Le,ie.width,ie.height);else{let V=ie.width,Z=ie.height;for(let ce=0;ce<fe;ce++)n.texImage2D(t.TEXTURE_2D,ce,Le,V,Z,0,ge,Pe,null),V>>=1,Z>>=1}}else if(Be.length>0){if(Ie&&nt){const V=be(Be[0]);n.texStorage2D(t.TEXTURE_2D,fe,Le,V.width,V.height)}for(let V=0,Z=Be.length;V<Z;V++)ve=Be[V],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ge,Pe,ve):n.texImage2D(t.TEXTURE_2D,V,Le,ge,Pe,ve);M.generateMipmaps=!1}else if(Ie){if(nt){const V=be(ie);n.texStorage2D(t.TEXTURE_2D,fe,Le,V.width,V.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Pe,ie)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,Pe,ie);m(M)&&u(q),Se.__version=Y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function W(C,M,F){if(M.image.length!==6)return;const q=we(C,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+F);const Y=i.get(ee);if(ee.version!==Y.__version||q===!0){n.activeTexture(t.TEXTURE0+F);const Se=Je.getPrimaries(Je.workingColorSpace),ae=M.colorSpace===ki?null:Je.getPrimaries(M.colorSpace),me=M.colorSpace===ki||Se===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const je=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!je&&!ie?ge[Z]=y(M.image[Z],!0,r.maxCubemapSize):ge[Z]=ie?M.image[Z].image:M.image[Z],ge[Z]=rt(M,ge[Z]);const Pe=ge[0],Le=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),Be=g(M.internalFormat,Le,ve,M.colorSpace),Ie=M.isVideoTexture!==!0,nt=Y.__version===void 0||q===!0,D=ee.dataReady;let fe=S(M,Pe);se(t.TEXTURE_CUBE_MAP,M);let V;if(je){Ie&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Be,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){V=ge[Z].mipmaps;for(let ce=0;ce<V.length;ce++){const de=V[ce];M.format!==Vn?Le!==null?Ie?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,de.width,de.height,Le,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,de.width,de.height,Le,ve,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Be,de.width,de.height,0,Le,ve,de.data)}}}else{if(V=M.mipmaps,Ie&&nt){V.length>0&&fe++;const Z=be(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Le,ve,ge[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,ge[Z].width,ge[Z].height,0,Le,ve,ge[Z].data);for(let ce=0;ce<V.length;ce++){const We=V[ce].image[Z].image;Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,We.width,We.height,Le,ve,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Be,We.width,We.height,0,Le,ve,We.data)}}else{Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,ve,ge[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,Le,ve,ge[Z]);for(let ce=0;ce<V.length;ce++){const de=V[ce];Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Le,ve,de.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Be,Le,ve,de.image[Z])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),Y.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,F,q,ee,Y){const Se=s.convert(F.format,F.colorSpace),ae=s.convert(F.type),me=g(F.internalFormat,Se,ae,F.colorSpace);if(!i.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>Y),ge=Math.max(1,M.height>>Y);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Y,me,ie,ge,M.depth,0,Se,ae,null):n.texImage2D(ee,Y,me,ie,ge,0,Se,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),qe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,ee,i.get(F).__webglTexture,0,ke(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,ee,i.get(F).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(C,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const q=M.depthTexture,ee=q&&q.isDepthTexture?q.type:null,Y=v(M.stencilBuffer,ee),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=ke(M);qe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,Y,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,C)}else{const q=M.textures;for(let ee=0;ee<q.length;ee++){const Y=q[ee],Se=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),me=g(Y.internalFormat,Se,ae,Y.colorSpace),je=ke(M);F&&qe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,me,M.width,M.height):qe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const q=i.get(M.depthTexture).__webglTexture,ee=ke(M);if(M.depthTexture.format===_s)qe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(M.depthTexture.format===bs)qe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function De(C){const M=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",ee)};q.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");le(M.__webglFramebuffer,C)}else if(F){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),he(M.__webglDepthbuffer[q],C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),he(M.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(C,M,F){const q=i.get(C);M!==void 0&&ne(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&De(C)}function Ve(C){const M=C.texture,F=i.get(C),q=i.get(M);C.addEventListener("dispose",A);const ee=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let me=0;me<M.mipmaps.length;me++)F.__webglFramebuffer[ae][me]=t.createFramebuffer()}else F.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)F.__webglFramebuffer[ae]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ae=0,me=ee.length;ae<me;ae++){const je=i.get(ee[ae]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&qe(C)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const me=ee[ae];F.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);const je=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=g(me.internalFormat,je,ie,me.colorSpace,C.isXRRenderTarget===!0),Pe=ke(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ge,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),he(F.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ne(F.__webglFramebuffer[ae][me],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me);else ne(F.__webglFramebuffer[ae],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ae=0,me=ee.length;ae<me;ae++){const je=ee[ae],ie=i.get(je);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),se(t.TEXTURE_2D,je),ne(F.__webglFramebuffer,C,je,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(je)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,q.__webglTexture),se(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ne(F.__webglFramebuffer[me],C,M,t.COLOR_ATTACHMENT0,ae,me);else ne(F.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,ae,0);m(M)&&u(ae),n.unbindTexture()}C.depthBuffer&&De(C)}function tt(C){const M=C.textures;for(let F=0,q=M.length;F<q;F++){const ee=M[F];if(m(ee)){const Y=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(ee).__webglTexture;n.bindTexture(Y,Se),u(Y),n.unbindTexture()}}}const Ge=[],L=[];function un(C){if(C.samples>0){if(qe(C)===!1){const M=C.textures,F=C.width,q=C.height;let ee=t.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(C),ae=M.length>1;if(ae)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<M.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const je=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,F,q,0,0,F,q,ee,t.NEAREST),l===!0&&(Ge.length=0,L.length=0,Ge.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ge.push(Y),L.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const je=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ke(C){return Math.min(r.maxSamples,C.samples)}function qe(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function rt(C,M){const F=C.colorSpace,q=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==sr&&F!==ki&&(Je.getTransfer(F)===at?(q!==Vn||ee!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=w,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=Ae,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=qe}function Xw(t,e){function n(i,r=ki){let s;const o=Je.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===Hf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vv)return t.BYTE;if(i===Gv)return t.SHORT;if(i===Io)return t.UNSIGNED_SHORT;if(i===Bf)return t.INT;if(i===br)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===ko)return t.HALF_FLOAT;if(i===Xv)return t.ALPHA;if(i===Yv)return t.RGB;if(i===Vn)return t.RGBA;if(i===qv)return t.LUMINANCE;if(i===jv)return t.LUMINANCE_ALPHA;if(i===_s)return t.DEPTH_COMPONENT;if(i===bs)return t.DEPTH_STENCIL;if(i===$v)return t.RED;if(i===Gf)return t.RED_INTEGER;if(i===Kv)return t.RG;if(i===Wf)return t.RG_INTEGER;if(i===Xf)return t.RGBA_INTEGER;if(i===Ya||i===qa||i===ja||i===$a)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mh||i===gh||i===vh||i===_h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xh||i===yh||i===Sh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xh||i===yh)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mh||i===Eh||i===wh||i===Th||i===Ah||i===Ch||i===Rh||i===Ph||i===Lh||i===bh||i===Dh||i===Ih||i===Nh||i===Uh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Th)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ah)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ch)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ph)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ih)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ka||i===Fh||i===Oh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ka)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zv||i===zh||i===kh||i===Bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Yw extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _i extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qw={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$w=`
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

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new tr({vertexShader:jw,fragmentShader:$w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ne(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zw extends Fs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,_=null;const y=new Kw,m=n.getContextAttributes();let u=null,g=null;const v=[],S=[],R=new ye;let A=null;const T=new Tn;T.layers.enable(1),T.viewport=new _t;const P=new Tn;P.layers.enable(2),P.viewport=new _t;const X=[T,P],x=new Yw;x.layers.enable(1),x.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=v[W];return ne===void 0&&(ne=new iu,v[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=v[W];return ne===void 0&&(ne=new iu,v[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=v[W];return ne===void 0&&(ne=new iu,v[W]=ne),ne.getHandSpace()};function k(W){const ne=S.indexOf(W.inputSource);if(ne===-1)return;const he=v[ne];he!==void 0&&(he.update(W.inputSource,W.frame,c||o),he.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",K);for(let W=0;W<v.length;W++){const ne=S[W];ne!==null&&(S[W]=null,v[W].disconnect(ne))}w=null,B=null,y.reset(),e.setRenderTarget(u),p=null,d=null,f=null,r=null,g=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",G),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Dr(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,he=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?bs:_s,he=m.stencil?Ls:br);const De={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Dr(d.textureWidth,d.textureHeight,{format:Vn,type:Ti,depthTexture:new f_(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(W){for(let ne=0;ne<W.removed.length;ne++){const he=W.removed[ne],le=S.indexOf(he);le>=0&&(S[le]=null,v[le].disconnect(he))}for(let ne=0;ne<W.added.length;ne++){const he=W.added[ne];let le=S.indexOf(he);if(le===-1){for(let Ae=0;Ae<v.length;Ae++)if(Ae>=S.length){S.push(he),le=Ae;break}else if(S[Ae]===null){S[Ae]=he,le=Ae;break}if(le===-1)break}const De=v[le];De&&De.connect(he)}}const H=new N,Q=new N;function b(W,ne,he){H.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(he.matrixWorld);const le=H.distanceTo(Q),De=ne.projectionMatrix.elements,Ae=he.projectionMatrix.elements,Ve=De[14]/(De[10]-1),tt=De[14]/(De[10]+1),Ge=(De[9]+1)/De[5],L=(De[9]-1)/De[5],un=(De[8]-1)/De[0],ke=(Ae[8]+1)/Ae[0],qe=Ve*un,Re=Ve*ke,rt=le/(-un+ke),be=rt*-un;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(be),W.translateZ(rt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),De[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const C=Ve+rt,M=tt+rt,F=qe-be,q=Re+(le-be),ee=Ge*tt/M*C,Y=L*tt/M*C;W.projectionMatrix.makePerspective(F,q,ee,Y,C,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ne=W.near,he=W.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(he=y.depthFar)),x.near=P.near=T.near=ne,x.far=P.far=T.far=he,(w!==x.near||B!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,B=x.far);const le=W.parent,De=x.cameras;$(x,le);for(let Ae=0;Ae<De.length;Ae++)$(De[Ae],le);De.length===2?b(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),J(W,x,le)};function J(W,ne,he){he===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(he.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Hh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let se=null;function we(W,ne){if(h=ne.getViewerPose(c||o),_=ne,h!==null){const he=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let le=!1;he.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let Ae=0;Ae<he.length;Ae++){const Ve=he[Ae];let tt=null;if(p!==null)tt=p.getViewport(Ve);else{const L=f.getViewSubImage(d,Ve);tt=L.viewport,Ae===0&&(e.setRenderTargetTextures(g,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(g))}let Ge=X[Ae];Ge===void 0&&(Ge=new Tn,Ge.layers.enable(Ae),Ge.viewport=new _t,X[Ae]=Ge),Ge.matrix.fromArray(Ve.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ve.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(tt.x,tt.y,tt.width,tt.height),Ae===0&&(x.matrix.copy(Ge.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(Ge)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ae=f.getDepthInformation(he[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(e,Ae,r.renderState)}}for(let he=0;he<v.length;he++){const le=S[he],De=v[he];le!==null&&De!==void 0&&De.update(le,ne,c||o)}se&&se(W,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const ze=new u_;ze.setAnimationLoop(we),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}const fr=new ti,Jw=new pt;function Qw(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,a_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ln&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ln&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,S=g.envMapRotation;v&&(m.envMap.value=v,fr.copy(S),fr.x*=-1,fr.y*=-1,fr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(Jw.makeRotationFromEuler(fr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ln&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function c(g,v){let S=r[g.id];S===void 0&&(_(g),S=h(g),r[g.id]=S,g.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(g,R);const A=e.render.frame;s[g.id]!==A&&(d(g),s[g.id]=A)}function h(g){const v=f();g.__bindingPointIndex=v;const S=t.createBuffer(),R=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],S=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let X=0,x=P.length;X<x;X++){const w=P[X];if(p(w,A,X,R)===!0){const B=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let G=0;for(let K=0;K<k.length;K++){const H=k[K],Q=y(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,B+G,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,S,R){const A=g.value,T=v+"_"+S;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const P=R[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(g){const v=g.uniforms;let S=0;const R=16;for(let T=0,P=v.length;T<P;T++){const X=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,w=X.length;x<w;x++){const B=X[x],k=Array.isArray(B.value)?B.value:[B.value];for(let G=0,K=k.length;G<K;G++){const H=k[G],Q=y(H),b=S%R,$=b%Q.boundary,J=b+$;S+=$,J!==0&&R-J<Q.storage&&(S+=R-J),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=Q.storage}}}const A=S%R;return A>0&&(S+=R-A),g.__size=S,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class tT{constructor(e={}){const{canvas:n=Hy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this.toneMapping=Zi,this.toneMappingExposure=1;const v=this;let S=!1,R=0,A=0,T=null,P=-1,X=null;const x=new _t,w=new _t;let B=null;const k=new He(0);let G=0,K=n.width,H=n.height,Q=1,b=null,$=null;const J=new _t(0,0,K,H),se=new _t(0,0,K,H);let we=!1;const ze=new $f;let W=!1,ne=!1;const he=new pt,le=new pt,De=new N,Ae=new _t,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ge(){return T===null?Q:1}let L=i;function un(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kf}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",de,!1),L===null){const I="webgl2";if(L=un(I,E),L===null)throw un(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ke,qe,Re,rt,be,C,M,F,q,ee,Y,Se,ae,me,je,ie,ge,Pe,Le,ve,Be,Ie,nt,D;function fe(){ke=new o1(L),ke.init(),Ie=new Xw(L,ke),qe=new e1(L,ke,e,Ie),Re=new Vw(L),qe.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),rt=new c1(L),be=new Cw,C=new Ww(L,ke,Re,be,qe,Ie,rt),M=new n1(v),F=new s1(v),q=new gS(L),nt=new JE(L,q),ee=new a1(L,q,rt,nt),Y=new h1(L,ee,q,rt),Le=new u1(L,qe,C),ie=new t1(be),Se=new Aw(v,M,F,ke,qe,nt,ie),ae=new Qw(v,be),me=new Pw,je=new Uw(ke),Pe=new ZE(v,M,F,Re,Y,d,l),ge=new Bw(v,Y,qe),D=new eT(L,rt,qe,Re),ve=new QE(L,ke,rt),Be=new l1(L,ke,rt),rt.programs=Se.programs,v.capabilities=qe,v.extensions=ke,v.properties=be,v.renderLists=me,v.shadowMap=ge,v.state=Re,v.info=rt}fe();const V=new Zw(v,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(K,H,!1))},this.getSize=function(E){return E.set(K,H)},this.setSize=function(E,I,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,H=I,n.width=Math.floor(E*Q),n.height=Math.floor(I*Q),O===!0&&(n.style.width=E+"px",n.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(K*Q,H*Q).floor()},this.setDrawingBufferSize=function(E,I,O){K=E,H=I,Q=O,n.width=Math.floor(E*O),n.height=Math.floor(I*O),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,I,O,z){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,I,O,z),Re.viewport(x.copy(J).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,I,O,z){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,I,O,z),Re.scissor(w.copy(se).multiplyScalar(Q).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(E){Re.setScissorTest(we=E)},this.setOpaqueSort=function(E){b=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,I=!0,O=!0){let z=0;if(E){let U=!1;if(T!==null){const re=T.texture.format;U=re===Xf||re===Wf||re===Gf}if(U){const re=T.texture.type,ue=re===Ti||re===br||re===Io||re===Ls||re===Hf||re===Vf,_e=Pe.getClearColor(),xe=Pe.getClearAlpha(),Te=_e.r,Ce=_e.g,Me=_e.b;ue?(p[0]=Te,p[1]=Ce,p[2]=Me,p[3]=xe,L.clearBufferuiv(L.COLOR,0,p)):(_[0]=Te,_[1]=Ce,_[2]=Me,_[3]=xe,L.clearBufferiv(L.COLOR,0,_))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),je.dispose(),be.dispose(),M.dispose(),F.dispose(),Y.dispose(),nt.dispose(),D.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",sd),V.removeEventListener("sessionend",od),or.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=rt.autoReset,I=ge.enabled,O=ge.autoUpdate,z=ge.needsUpdate,U=ge.type;fe(),rt.autoReset=E,ge.enabled=I,ge.autoUpdate=O,ge.needsUpdate=z,ge.type=U}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function We(E){const I=E.target;I.removeEventListener("dispose",We),St(I)}function St(E){Qt(E),be.remove(E)}function Qt(E){const I=be.get(E).programs;I!==void 0&&(I.forEach(function(O){Se.releaseProgram(O)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,O,z,U,re){I===null&&(I=Ve);const ue=U.isMesh&&U.matrixWorld.determinant()<0,_e=M_(E,I,O,z,U);Re.setMaterial(z,ue);let xe=O.index,Te=1;if(z.wireframe===!0){if(xe=ee.getWireframeAttribute(O),xe===void 0)return;Te=2}const Ce=O.drawRange,Me=O.attributes.position;let Qe=Ce.start*Te,st=(Ce.start+Ce.count)*Te;re!==null&&(Qe=Math.max(Qe,re.start*Te),st=Math.min(st,(re.start+re.count)*Te)),xe!==null?(Qe=Math.max(Qe,0),st=Math.min(st,xe.count)):Me!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,Me.count));const gt=st-Qe;if(gt<0||gt===1/0)return;nt.setup(U,z,_e,O,xe);let hn,Ke=ve;if(xe!==null&&(hn=q.get(xe),Ke=Be,Ke.setIndex(hn)),U.isMesh)z.wireframe===!0?(Re.setLineWidth(z.wireframeLinewidth*Ge()),Ke.setMode(L.LINES)):Ke.setMode(L.TRIANGLES);else if(U.isLine){let Ee=z.linewidth;Ee===void 0&&(Ee=1),Re.setLineWidth(Ee*Ge()),U.isLineSegments?Ke.setMode(L.LINES):U.isLineLoop?Ke.setMode(L.LINE_LOOP):Ke.setMode(L.LINE_STRIP)}else U.isPoints?Ke.setMode(L.POINTS):U.isSprite&&Ke.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,It=U._multiDrawCounts,Ze=U._multiDrawCount,bn=xe?q.get(xe).bytesPerElement:1,Fr=be.get(z).currentProgram.getUniforms();for(let fn=0;fn<Ze;fn++)Fr.setValue(L,"_gl_DrawID",fn),Ke.render(Ee[fn]/bn,It[fn])}else if(U.isInstancedMesh)Ke.renderInstances(Qe,gt,U.count);else if(O.isInstancedBufferGeometry){const Ee=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,It=Math.min(O.instanceCount,Ee);Ke.renderInstances(Qe,gt,It)}else Ke.render(Qe,gt)};function $e(E,I,O){E.transparent===!0&&E.side===Zn&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,Yo(E,I,O),E.side=er,E.needsUpdate=!0,Yo(E,I,O),E.side=Zn):Yo(E,I,O)}this.compile=function(E,I,O=null){O===null&&(O=E),m=je.get(O),m.init(I),g.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==O&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const z=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){const _e=re[ue];$e(_e,O,U),z.add(_e)}else $e(re,O,U),z.add(re)}),g.pop(),m=null,z},this.compileAsync=function(E,I,O=null){const z=this.compile(E,I,O);return new Promise(U=>{function re(){if(z.forEach(function(ue){be.get(ue).currentProgram.isReady()&&z.delete(ue)}),z.size===0){U(E);return}setTimeout(re,10)}ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let en=null;function ri(E){en&&en(E)}function sd(){or.stop()}function od(){or.start()}const or=new u_;or.setAnimationLoop(ri),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(E){en=E,V.setAnimationLoop(E),E===null?or.stop():or.start()},V.addEventListener("sessionstart",sd),V.addEventListener("sessionend",od),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,I,T),m=je.get(E,g.length),m.init(I),g.push(m),le.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ze.setFromProjectionMatrix(le),ne=this.localClippingEnabled,W=ie.init(this.clippingPlanes,ne),y=me.get(E,u.length),y.init(),u.push(y),V.enabled===!0&&V.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Zl(re,I,-1/0,v.sortObjects)}Zl(E,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(b,$),tt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,tt&&Pe.addToRenderList(y,E),this.info.render.frame++,W===!0&&ie.beginShadows();const O=m.state.shadowsArray;ge.render(O,E,I),W===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=y.opaque,U=y.transmissive;if(m.setupLights(),I.isArrayCamera){const re=I.cameras;if(U.length>0)for(let ue=0,_e=re.length;ue<_e;ue++){const xe=re[ue];ld(z,U,E,xe)}tt&&Pe.render(E);for(let ue=0,_e=re.length;ue<_e;ue++){const xe=re[ue];ad(y,E,xe,xe.viewport)}}else U.length>0&&ld(z,U,E,I),tt&&Pe.render(E),ad(y,E,I);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,I),nt.resetDefaultState(),P=-1,X=null,g.pop(),g.length>0?(m=g[g.length-1],W===!0&&ie.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Zl(E,I,O,z){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){z&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const ue=Y.update(E),_e=E.material;_e.visible&&y.push(E,ue,_e,O,Ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){const ue=Y.update(E),_e=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ae.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ae.copy(ue.boundingSphere.center)),Ae.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(_e)){const xe=ue.groups;for(let Te=0,Ce=xe.length;Te<Ce;Te++){const Me=xe[Te],Qe=_e[Me.materialIndex];Qe&&Qe.visible&&y.push(E,ue,Qe,O,Ae.z,Me)}}else _e.visible&&y.push(E,ue,_e,O,Ae.z,null)}}const re=E.children;for(let ue=0,_e=re.length;ue<_e;ue++)Zl(re[ue],I,O,z)}function ad(E,I,O,z){const U=E.opaque,re=E.transmissive,ue=E.transparent;m.setupLightsView(O),W===!0&&ie.setGlobalState(v.clippingPlanes,O),z&&Re.viewport(x.copy(z)),U.length>0&&Xo(U,I,O),re.length>0&&Xo(re,I,O),ue.length>0&&Xo(ue,I,O),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ld(E,I,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Dr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?ko:Ti,minFilter:Er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const re=m.state.transmissionRenderTarget[z.id],ue=z.viewport||x;re.setSize(ue.z,ue.w);const _e=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(k),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),tt&&Pe.render(O);const xe=v.toneMapping;v.toneMapping=Zi;const Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),W===!0&&ie.setGlobalState(v.clippingPlanes,z),Xo(E,O,z),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Me=0,Qe=I.length;Me<Qe;Me++){const st=I[Me],gt=st.object,hn=st.geometry,Ke=st.material,Ee=st.group;if(Ke.side===Zn&&gt.layers.test(z.layers)){const It=Ke.side;Ke.side=ln,Ke.needsUpdate=!0,cd(gt,O,z,hn,Ke,Ee),Ke.side=It,Ke.needsUpdate=!0,Ce=!0}}Ce===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}v.setRenderTarget(_e),v.setClearColor(k,G),Te!==void 0&&(z.viewport=Te),v.toneMapping=xe}function Xo(E,I,O){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,re=E.length;U<re;U++){const ue=E[U],_e=ue.object,xe=ue.geometry,Te=z===null?ue.material:z,Ce=ue.group;_e.layers.test(O.layers)&&cd(_e,I,O,xe,Te,Ce)}}function cd(E,I,O,z,U,re){E.onBeforeRender(v,I,O,z,U,re),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(v,I,O,z,E,re),U.transparent===!0&&U.side===Zn&&U.forceSinglePass===!1?(U.side=ln,U.needsUpdate=!0,v.renderBufferDirect(O,I,z,U,E,re),U.side=er,U.needsUpdate=!0,v.renderBufferDirect(O,I,z,U,E,re),U.side=Zn):v.renderBufferDirect(O,I,z,U,E,re),E.onAfterRender(v,I,O,z,U,re)}function Yo(E,I,O){I.isScene!==!0&&(I=Ve);const z=be.get(E),U=m.state.lights,re=m.state.shadowsArray,ue=U.state.version,_e=Se.getParameters(E,U.state,re,I,O),xe=Se.getProgramCacheKey(_e);let Te=z.programs;z.environment=E.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(E.isMeshStandardMaterial?F:M).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",We),Te=new Map,z.programs=Te);let Ce=Te.get(xe);if(Ce!==void 0){if(z.currentProgram===Ce&&z.lightsStateVersion===ue)return hd(E,_e),Ce}else _e.uniforms=Se.getUniforms(E),E.onBeforeCompile(_e,v),Ce=Se.acquireProgram(_e,xe),Te.set(xe,Ce),z.uniforms=_e.uniforms;const Me=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=ie.uniform),hd(E,_e),z.needsLights=w_(E),z.lightsStateVersion=ue,z.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ce,z.uniformsList=null,Ce}function ud(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Ja.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function hd(E,I){const O=be.get(E);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function M_(E,I,O,z,U){I.isScene!==!0&&(I=Ve),C.resetTextureUnits();const re=I.fog,ue=z.isMeshStandardMaterial?I.environment:null,_e=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:sr,xe=(z.isMeshStandardMaterial?F:M).get(z.envMap||ue),Te=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!O.morphAttributes.position,Qe=!!O.morphAttributes.normal,st=!!O.morphAttributes.color;let gt=Zi;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gt=v.toneMapping);const hn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ke=hn!==void 0?hn.length:0,Ee=be.get(z),It=m.state.lights;if(W===!0&&(ne===!0||E!==X)){const Sn=E===X&&z.id===P;ie.setState(z,E,Sn)}let Ze=!1;z.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==It.state.version||Ee.outputColorSpace!==_e||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==xe||z.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Te||Ee.vertexTangents!==Ce||Ee.morphTargets!==Me||Ee.morphNormals!==Qe||Ee.morphColors!==st||Ee.toneMapping!==gt||Ee.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,Ee.__version=z.version);let bn=Ee.currentProgram;Ze===!0&&(bn=Yo(z,I,U));let Fr=!1,fn=!1,Jl=!1;const xt=bn.getUniforms(),Ci=Ee.uniforms;if(Re.useProgram(bn.program)&&(Fr=!0,fn=!0,Jl=!0),z.id!==P&&(P=z.id,fn=!0),Fr||X!==E){qe.reverseDepthBuffer?(he.copy(E.projectionMatrix),Gy(he),Wy(he),xt.setValue(L,"projectionMatrix",he)):xt.setValue(L,"projectionMatrix",E.projectionMatrix),xt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Sn=xt.map.cameraPosition;Sn!==void 0&&Sn.setValue(L,De.setFromMatrixPosition(E.matrixWorld)),qe.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,fn=!0,Jl=!0)}if(U.isSkinnedMesh){xt.setOptional(L,U,"bindMatrix"),xt.setOptional(L,U,"bindMatrixInverse");const Sn=U.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),xt.setValue(L,"boneTexture",Sn.boneTexture,C))}U.isBatchedMesh&&(xt.setOptional(L,U,"batchingTexture"),xt.setValue(L,"batchingTexture",U._matricesTexture,C),xt.setOptional(L,U,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",U._indirectTexture,C),xt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",U._colorsTexture,C));const Ql=O.morphAttributes;if((Ql.position!==void 0||Ql.normal!==void 0||Ql.color!==void 0)&&Le.update(U,O,bn),(fn||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,xt.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ci.envMap.value=xe,Ci.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Ci.envMapIntensity.value=I.environmentIntensity),fn&&(xt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&E_(Ci,Jl),re&&z.fog===!0&&ae.refreshFogUniforms(Ci,re),ae.refreshMaterialUniforms(Ci,z,Q,H,m.state.transmissionRenderTarget[E.id]),Ja.upload(L,ud(Ee),Ci,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ja.upload(L,ud(Ee),Ci,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xt.setValue(L,"center",U.center),xt.setValue(L,"modelViewMatrix",U.modelViewMatrix),xt.setValue(L,"normalMatrix",U.normalMatrix),xt.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Sn=z.uniformsGroups;for(let ec=0,T_=Sn.length;ec<T_;ec++){const fd=Sn[ec];D.update(fd,bn),D.bind(fd,bn)}}return bn}function E_(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function w_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,I,O){be.get(E.texture).__webglTexture=I,be.get(E.depthTexture).__webglTexture=O;const z=be.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const O=be.get(E);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,O=0){T=E,R=I,A=O;let z=!0,U=null,re=!1,ue=!1;if(E){const xe=be.get(E);if(xe.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(xe.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(xe.__hasExternalTextures)C.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Me=E.depthTexture;if(xe.__boundDepthTexture!==Me){if(Me!==null&&be.has(Me)&&(E.width!==Me.image.width||E.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ue=!0);const Ce=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?U=Ce[I][O]:U=Ce[I],re=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?U=be.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[O]:U=Ce,x.copy(E.viewport),w.copy(E.scissor),B=E.scissorTest}else x.copy(J).multiplyScalar(Q).floor(),w.copy(se).multiplyScalar(Q).floor(),B=we;if(Re.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&Re.drawBuffers(E,U),Re.viewport(x),Re.scissor(w),Re.setScissorTest(B),re){const xe=be.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,O)}else if(ue){const xe=be.get(E.texture),Te=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,O||0,Te)}P=-1},this.readRenderTargetPixels=function(E,I,O,z,U,re,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){Re.bindFramebuffer(L.FRAMEBUFFER,_e);try{const xe=E.texture,Te=xe.format,Ce=xe.type;if(!qe.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-z&&O>=0&&O<=E.height-U&&L.readPixels(I,O,z,U,Ie.convert(Te),Ie.convert(Ce),re)}finally{const xe=T!==null?be.get(T).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(E,I,O,z,U,re,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){const xe=E.texture,Te=xe.format,Ce=xe.type;if(!qe.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-z&&O>=0&&O<=E.height-U){Re.bindFramebuffer(L.FRAMEBUFFER,_e);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(I,O,z,U,Ie.convert(Te),Ie.convert(Ce),0);const Qe=T!==null?be.get(T).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,Qe);const st=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Vy(L,st,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Me),L.deleteSync(st),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,O=0){E.isTexture!==!0&&(Za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-O),U=Math.floor(E.image.width*z),re=Math.floor(E.image.height*z),ue=I!==null?I.x:0,_e=I!==null?I.y:0;C.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,ue,_e,U,re),Re.unbindTexture()},this.copyTextureToTexture=function(E,I,O=null,z=null,U=0){E.isTexture!==!0&&(Za("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],I=arguments[2],U=arguments[3]||0,O=null);let re,ue,_e,xe,Te,Ce;O!==null?(re=O.max.x-O.min.x,ue=O.max.y-O.min.y,_e=O.min.x,xe=O.min.y):(re=E.image.width,ue=E.image.height,_e=0,xe=0),z!==null?(Te=z.x,Ce=z.y):(Te=0,Ce=0);const Me=Ie.convert(I.format),Qe=Ie.convert(I.type);C.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ke=L.getParameter(L.UNPACK_SKIP_ROWS),Ee=L.getParameter(L.UNPACK_SKIP_IMAGES),It=E.isCompressedTexture?E.mipmaps[U]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,xe),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Te,Ce,re,ue,Me,Qe,It.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Te,Ce,It.width,It.height,Me,It.data):L.texSubImage2D(L.TEXTURE_2D,U,Te,Ce,re,ue,Me,Qe,It),L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee),U===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(E,I,O=null,z=null,U=0){E.isTexture!==!0&&(Za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,z=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0);let re,ue,_e,xe,Te,Ce,Me,Qe,st;const gt=E.isCompressedTexture?E.mipmaps[U]:E.image;O!==null?(re=O.max.x-O.min.x,ue=O.max.y-O.min.y,_e=O.max.z-O.min.z,xe=O.min.x,Te=O.min.y,Ce=O.min.z):(re=gt.width,ue=gt.height,_e=gt.depth,xe=0,Te=0,Ce=0),z!==null?(Me=z.x,Qe=z.y,st=z.z):(Me=0,Qe=0,st=0);const hn=Ie.convert(I.format),Ke=Ie.convert(I.type);let Ee;if(I.isData3DTexture)C.setTexture3D(I,0),Ee=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)C.setTexture2DArray(I,0),Ee=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const It=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),bn=L.getParameter(L.UNPACK_SKIP_PIXELS),Fr=L.getParameter(L.UNPACK_SKIP_ROWS),fn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Te),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ee,U,Me,Qe,st,re,ue,_e,hn,Ke,gt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,U,Me,Qe,st,re,ue,_e,hn,gt.data):L.texSubImage3D(Ee,U,Me,Qe,st,re,ue,_e,hn,Ke,gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,It),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,bn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,fn),U===0&&I.generateMipmaps&&L.generateMipmap(Ee),Re.unbindTexture()},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Re.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,Re.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Yf?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===jl?"display-p3":"srgb"}}class Zf{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=n,this.far=i}clone(){return new Zf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nT extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ye:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new N,r=[],s=[],o=[],a=new N,l=new pt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ot(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ot(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jf extends ii{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ye){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class iT extends Jf{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qf(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const ba=new N,ru=new Qf,su=new Qf,ou=new Qf;class rT extends ii{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ba.subVectors(r[0],r[1]).add(r[0]),c=ba);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ba.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ba),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),ru.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,_,y,m),su.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,_,y,m),ou.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,_,y,m)}else this.curveType==="catmullrom"&&(ru.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),su.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),ou.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(ru.calc(l),su.calc(l),ou.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function sT(t,e){const n=1-t;return n*n*e}function oT(t,e){return 2*(1-t)*t*e}function aT(t,e){return t*t*e}function po(t,e,n,i){return sT(t,e)+oT(t,n)+aT(t,i)}function lT(t,e){const n=1-t;return n*n*n*e}function cT(t,e){const n=1-t;return 3*n*n*t*e}function uT(t,e){return 3*(1-t)*t*t*e}function hT(t,e){return t*t*t*e}function mo(t,e,n,i,r){return lT(t,e)+cT(t,n)+uT(t,i)+hT(t,r)}class v_ extends ii{constructor(e=new ye,n=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(mo(e,r.x,s.x,o.x,a.x),mo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fT extends ii{constructor(e=new N,n=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(mo(e,r.x,s.x,o.x,a.x),mo(e,r.y,s.y,o.y,a.y),mo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class __ extends ii{constructor(e=new ye,n=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ye){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dT extends ii{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x_ extends ii{constructor(e=new ye,n=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(po(e,r.x,s.x,o.x),po(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pT extends ii{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(po(e,r.x,s.x,o.x),po(e,r.y,s.y,o.y),po(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y_ extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ye){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(gm(a,l.x,c.x,h.x,f.x),gm(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ye().fromArray(r))}return this}}var vm=Object.freeze({__proto__:null,ArcCurve:iT,CatmullRomCurve3:rT,CubicBezierCurve:v_,CubicBezierCurve3:fT,EllipseCurve:Jf,LineCurve:__,LineCurve3:dT,QuadraticBezierCurve:x_,QuadraticBezierCurve3:pT,SplineCurve:y_});class mT extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vm[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new vm[r.type]().fromJSON(r))}return this}}class gT extends mT{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new __(this.currentPoint.clone(),new ye(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new x_(this.currentPoint.clone(),new ye(e,n),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new v_(this.currentPoint.clone(),new ye(e,n),new ye(i,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new y_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Jf(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ed extends ni{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Ot(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/n,f=new N,d=new ye,p=new N,_=new N,y=new N;let m=0,u=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,p.x=u*1,p.y=-m,p.z=u*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,p.x=u*1,p.y=-m,p.z=u*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let g=0;g<=n;g++){const v=i+g*h*r,S=Math.sin(v),R=Math.cos(v);for(let A=0;A<=e.length-1;A++){f.x=e[A].x*S,f.y=e[A].y,f.z=e[A].x*R,o.push(f.x,f.y,f.z),d.x=g/n,d.y=A/(e.length-1),a.push(d.x,d.y);const T=l[3*A+0]*S,P=l[3*A+1],X=l[3*A+0]*R;c.push(T,P,X)}}for(let g=0;g<n;g++)for(let v=0;v<e.length-1;v++){const S=v+g*e.length,R=S,A=S+e.length,T=S+e.length+1,P=S+1;s.push(R,A,P),s.push(T,P,A)}this.setIndex(s),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ed(e.points,e.segments,e.phiStart,e.phiLength)}}class Kl extends ed{constructor(e=1,n=1,i=4,r=8){const s=new gT;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new Kl(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ir extends ni{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let _=0;const y=[],m=i/2;let u=0;g(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function g(){const S=new N,R=new N;let A=0;const T=(n-e)/i;for(let P=0;P<=s;P++){const X=[],x=P/s,w=x*(n-e)+e;for(let B=0;B<=r;B++){const k=B/r,G=k*l+a,K=Math.sin(G),H=Math.cos(G);R.x=w*K,R.y=-x*i+m,R.z=w*H,f.push(R.x,R.y,R.z),S.set(K,T,H).normalize(),d.push(S.x,S.y,S.z),p.push(k,1-x),X.push(_++)}y.push(X)}for(let P=0;P<r;P++)for(let X=0;X<s;X++){const x=y[X][P],w=y[X+1][P],B=y[X+1][P+1],k=y[X][P+1];e>0&&(h.push(x,w,k),A+=3),n>0&&(h.push(w,B,k),A+=3)}c.addGroup(u,A,0),u+=A}function v(S){const R=_,A=new ye,T=new N;let P=0;const X=S===!0?e:n,x=S===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),_++;const w=_;for(let B=0;B<=r;B++){const G=B/r*l+a,K=Math.cos(G),H=Math.sin(G);T.x=X*H,T.y=m*x,T.z=X*K,f.push(T.x,T.y,T.z),d.push(0,x,0),A.x=K*.5+.5,A.y=H*.5*x+.5,p.push(A.x,A.y),_++}for(let B=0;B<r;B++){const k=R+B,G=w+B;S===!0?h.push(G,G+1,k):h.push(G+1,G,k),P+=3}c.addGroup(u,P,S===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class td extends Ir{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new td(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wo extends ni{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new N,d=new N,p=[],_=[],y=[],m=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const A=R/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),m.push(A+S,1-v),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=h[u][g+1],S=h[u][g],R=h[u+1][g],A=h[u+1][g+1];(u!==0||o>0)&&p.push(v,S,A),(u!==i-1||l<Math.PI)&&p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ut extends Go{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jv,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nd extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class vT extends nd{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const au=new pt,_m=new N,xm=new N;class _T{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $f,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;_m.setFromMatrixPosition(e.matrixWorld),n.position.copy(_m),xm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xm),n.updateMatrixWorld(),au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xT extends _T{constructor(){super(new h_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yT extends nd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new xT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ST extends nd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class MT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ym(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=ym();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function ym(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);class ET{constructor(){j(this,"keys",new Set);j(this,"pressed",new Set);j(this,"onKeyDown",e=>{e.repeat||(this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code),(e.code==="Space"||e.code==="ArrowUp"||e.code==="ArrowDown"||e.code==="ArrowLeft"||e.code==="ArrowRight")&&e.preventDefault())});j(this,"onKeyUp",e=>{this.keys.delete(e.code)});j(this,"onBlur",()=>{this.keys.clear(),this.pressed.clear()})}attach(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur)}detach(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur)}isDown(e){return this.keys.has(e)}wasPressed(e){return this.pressed.has(e)}axis(e,n){let i=0;for(const r of e)this.keys.has(r)&&(i-=1);for(const r of n)this.keys.has(r)&&(i+=1);return Math.max(-1,Math.min(1,i))}endFrame(){this.pressed.clear()}}const Lt=4,ct=60,Ut=6,wT=3,hi=Lt*ct,Et=-hi/2,Sm=7,TT=20,AT=30,CT=1.9,Mm=11,RT=1.7,PT=5;function yi(t,e,n){return t<e?e:t>n?n:t}function LT(t){for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function id(t,e){return LT(t-e)}function bT(t,e,n){return t+id(e,t)*n}function Gh(t,e){return t+Math.random()*(e-t)}function Da(t,e){return Math.floor(Gh(t,e+1))}function DT(t){return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Qa(t,e,n,i){const r=t-n,s=e-i;return r*r+s*s}function S_(t,e,n,i){const r=Math.max(i.minX,Math.min(t,i.maxX)),s=Math.max(i.minZ,Math.min(e,i.maxZ)),o=t-r,a=e-s,l=o*o+a*a;if(l>n*n)return null;if(l>1e-6){const _=Math.sqrt(l);return{nx:o/_,nz:a/_,depth:n-_}}const c=t-i.minX,h=i.maxX-t,f=e-i.minZ,d=i.maxZ-e,p=Math.min(c,h,f,d);return p===c?{nx:-1,nz:0,depth:n+c}:p===h?{nx:1,nz:0,depth:n+h}:p===f?{nx:0,nz:-1,depth:n+f}:{nx:0,nz:1,depth:n+d}}function rd(t,e,n,i,r,s){const o=t-i,a=e-r,l=Math.hypot(o,a),c=n+s;return l>=c?null:l<1e-6?{nx:1,nz:0,depth:c}:{nx:o/l,nz:a/l,depth:c-l}}function Em(t,e,n,i=0){return t>=n.minX-i&&t<=n.maxX+i&&e>=n.minZ-i&&e<=n.maxZ+i}const wm=[9279918,10249796,7041116,8226199,6254484,9076594,4872025,11569512,7371402,10055514];class IT{constructor(){j(this,"group",new _i);j(this,"buildings",[]);j(this,"nodes",[]);j(this,"neighbors",[]);j(this,"parkedSpots",[]);const e=DT(1337);this.buildGround(),this.buildRoads(),this.buildBlocksAndBuildings(e),this.buildLamps(),this.buildNodes(),this.buildParkedSpots(e)}nodeIndex(e,n){return e*(Lt+1)+n}buildGround(){const e=new Ne(new jn(900,900),new ut({color:2042398,roughness:1}));e.rotation.x=-Math.PI/2,e.position.y=-.05,e.receiveShadow=!0,this.group.add(e);const n=new ut({color:3422015,roughness:.95}),i=hi+Ut*2,r=Et+hi/2,s=new Ne(new jn(i,i),n);s.rotation.x=-Math.PI/2,s.position.set(r,0,r),s.receiveShadow=!0,this.group.add(s)}buildRoads(){const e=new ut({color:3816773,roughness:.95}),n=new ut({color:14206826,roughness:.7});for(let i=0;i<=Lt;i++){const r=Et+i*ct,s=new Ne(new jn(Ut*2,hi+Ut*2),e);s.rotation.x=-Math.PI/2,s.position.set(r,.01,Et+hi/2),s.receiveShadow=!0,this.group.add(s);const o=new Ne(new jn(hi+Ut*2,Ut*2),e);o.rotation.x=-Math.PI/2,o.position.set(Et+hi/2,.01,r),o.receiveShadow=!0,this.group.add(o)}for(let i=0;i<Lt;i++){const r=Et+i*ct+ct/2,s=ct-Ut*2;for(let o=0;o<=Lt;o++){const a=Et+o*ct,l=new Ne(new jn(s,.28),n);l.rotation.x=-Math.PI/2,l.position.set(r,.02,a),this.group.add(l);const c=new Ne(new jn(.28,s),n);c.rotation.x=-Math.PI/2,c.position.set(a,.02,r),this.group.add(c)}}}buildBlocksAndBuildings(e){const n=new ut({color:9146521,roughness:.9}),i=ct-Ut*2;for(let r=0;r<Lt;r++)for(let s=0;s<Lt;s++){const o=Et+r*ct+ct/2,a=Et+s*ct+ct/2,l=new Ne(new Ft(i,.14,i),n);l.position.set(o,.07,a),l.receiveShadow=!0,this.group.add(l);const c=i-wT*2,h=2,f=(c-h)/2,d=-c/2;for(let p=0;p<2;p++)for(let _=0;_<2;_++){if(e()<.12)continue;const y=p*(f+h)+f/2+d,m=_*(f+h)+f/2+d,u=f*(.82+e()*.18),g=f*(.82+e()*.18),v=8+e()*24,S=wm[Math.floor(e()*wm.length)],R=new Ne(new Ft(u,v,g),new ut({color:S,roughness:.85,metalness:.05})),A=o+y,T=a+m;R.position.set(A,.14+v/2,T),R.castShadow=!0,R.receiveShadow=!0,this.group.add(R),this.buildings.push({minX:A-u/2,maxX:A+u/2,minZ:T-g/2,maxZ:T+g/2,height:v})}}}buildLamps(){const e=new ut({color:2830134,roughness:.7}),n=new ut({color:16774084,emissive:16769674,emissiveIntensity:.7}),i=new Ir(.12,.16,6,8),r=new Wo(.28,10,10);for(let s=0;s<=Lt;s++)for(let o=0;o<=Lt;o++){const a=Et+s*ct+(Ut-1.2),l=Et+o*ct+(Ut-1.2),c=new Ne(i,e);c.position.set(a,3,l),c.castShadow=!0;const h=new Ne(r,n);h.position.set(a,6.1,l),this.group.add(c,h)}}buildNodes(){for(let e=0;e<=Lt;e++)for(let n=0;n<=Lt;n++)this.nodes.push({x:Et+e*ct,z:Et+n*ct});this.neighbors=this.nodes.map(()=>[]);for(let e=0;e<=Lt;e++)for(let n=0;n<=Lt;n++){const i=this.nodeIndex(e,n);e>0&&this.neighbors[i].push(this.nodeIndex(e-1,n)),e<Lt&&this.neighbors[i].push(this.nodeIndex(e+1,n)),n>0&&this.neighbors[i].push(this.nodeIndex(e,n-1)),n<Lt&&this.neighbors[i].push(this.nodeIndex(e,n+1))}}buildParkedSpots(e){let n=0;const i=24;for(let r=0;r<=Lt&&n<i;r++)for(let s=0;s<Lt&&n<i;s++){if(e()<.35)continue;const o=Et+s*ct+ct/2+(e()-.5)*18,a=Et+r*ct;if(e()<.5?this.parkedSpots.push({x:o,z:a-(Ut-1.3),heading:Math.PI/2}):this.parkedSpots.push({x:o,z:a+(Ut-1.3),heading:-Math.PI/2}),n++,n>=i)break;e()<.7&&(this.parkedSpots.push({x:a-(Ut-1.3),z:o,heading:0}),n++)}}randomWalkablePoint(){for(let n=0;n<40;n++){const i=Et+4+Math.random()*(hi-8),r=Et+4+Math.random()*(hi-8);let s=!1;for(const o of this.buildings)if(Em(i,r,o,1.2)){s=!0;break}if(!s)return{x:i,z:r}}const e=this.nodes[Math.floor(Math.random()*this.nodes.length)];return{x:e.x+Gh(-8,8),z:e.z+Gh(-8,8)}}isInsideBuilding(e,n,i=1){for(const r of this.buildings)if(Em(e,n,r,i))return!0;return!1}}class NT{constructor(e){j(this,"camera");j(this,"yaw",0);j(this,"pitch",.36);j(this,"distance",9.5);j(this,"autoFollow",!1);j(this,"followBlock",0);j(this,"focus",new N);j(this,"desired",new N);j(this,"initialized",!1);this.camera=new Tn(62,e,.1,1200)}addOrbit(e,n){this.yaw-=e*.006,this.pitch=yi(this.pitch+n*.005,.08,1.1),this.followBlock=1.6}update(e,n,i,r){this.followBlock>0&&(this.followBlock-=e),r&&this.followBlock<=0&&(this.yaw=bT(this.yaw,i,Math.min(1,e*1.6))),this.initialized||(this.focus.copy(n),this.initialized=!0);const s=Math.min(1,e*6);this.focus.x+=(n.x-this.focus.x)*s,this.focus.y+=(n.y-this.focus.y)*s,this.focus.z+=(n.z-this.focus.z)*s;const o=Math.cos(this.pitch),a=Math.sin(this.pitch),l=Math.sin(this.yaw),c=Math.cos(this.yaw);this.desired.set(this.focus.x-l*o*this.distance,this.focus.y+a*this.distance,this.focus.z-c*o*this.distance),this.camera.position.lengthSq()===0?this.camera.position.copy(this.desired):this.camera.position.lerp(this.desired,Math.min(1,e*7)),this.camera.lookAt(this.focus.x,this.focus.y+1,this.focus.z)}forwardVector(){return{x:Math.sin(this.yaw),z:Math.cos(this.yaw)}}leftVector(){return{x:Math.cos(this.yaw),z:-Math.sin(this.yaw)}}resize(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}}class UT{constructor(){j(this,"position",new N);j(this,"heading",0);j(this,"radius",.5);j(this,"moving",!1);j(this,"mesh");j(this,"body");j(this,"leftLeg");j(this,"rightLeg");j(this,"walkPhase",0);this.mesh=new _i;const e=new ut({color:3108845,roughness:.6}),n=new ut({color:15777936,roughness:.7}),i=new ut({color:2372170,roughness:.8}),r=new ut({color:16777215,emissive:2254591,emissiveIntensity:.4});this.body=new Ne(new Kl(.36,.7,4,10),e),this.body.position.y=1.15,this.body.castShadow=!0,this.mesh.add(this.body);const s=new Ne(new Wo(.28,16,16),n);s.position.y=1.82,s.castShadow=!0,this.mesh.add(s);const o=new Ne(new td(.12,.28,8),r);o.rotation.x=Math.PI/2,o.position.set(0,1.82,.3),this.mesh.add(o);const a=new Ft(.22,.62,.24);this.leftLeg=new Ne(a,i),this.leftLeg.position.set(.16,.42,0),this.leftLeg.castShadow=!0,this.rightLeg=new Ne(a,i),this.rightLeg.position.set(-.16,.42,0),this.rightLeg.castShadow=!0,this.mesh.add(this.leftLeg,this.rightLeg);const l=new Ft(.16,.6,.18),c=new Ne(l,e);c.position.set(.44,1.2,0),c.castShadow=!0;const h=new Ne(l,e);h.position.set(-.44,1.2,0),h.castShadow=!0,this.mesh.add(c,h)}setPosition(e,n){this.position.set(e,0,n),this.syncMesh()}move(e,n,i){const r=Math.hypot(n,i);if(this.moving=r>.01,this.moving){const s=n/r,o=i/r;this.position.x+=s*Sm*e,this.position.z+=o*Sm*e,this.heading=Math.atan2(s,o),this.walkPhase+=e*11}else this.walkPhase+=e*2;this.syncMesh()}syncMesh(){this.mesh.position.set(this.position.x,0,this.position.z),this.mesh.rotation.y=this.heading;const e=this.moving?Math.sin(this.walkPhase)*.5:0;this.leftLeg.rotation.x=e,this.rightLeg.rotation.x=-e,this.body.position.y=1.15+Math.abs(Math.sin(this.walkPhase))*.04}}function FT(t,e){const n=new _i,i=e==="police",r=new ut({color:i?1777450:t,metalness:.35,roughness:.45}),s=new ut({color:10473727,metalness:.1,roughness:.15,transparent:!0,opacity:.85}),o=new Ne(new Ft(2,.7,4.3),r);o.position.y=.78,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new Ne(new Ft(1.68,.62,2.1),s);a.position.set(0,1.36,-.15),a.castShadow=!0,n.add(a);const l=new ut({color:2237741,roughness:.8}),c=new Ne(new Ft(2.05,.25,.3),l);c.position.set(0,.55,2.12),n.add(c);const h=new Ne(new Ft(2.05,.25,.3),l);h.position.set(0,.55,-2.12),n.add(h);const f=new ut({color:1316379,roughness:.9}),d=[],p=new Ir(.38,.38,.32,14),_=[[.98,1.4],[-.98,1.4],[.98,-1.4],[-.98,-1.4]];for(const[g,v]of _){const S=new Ne(p,f);S.rotation.z=Math.PI/2,S.position.set(g,.38,v),S.castShadow=!0,n.add(S),d.push(S)}const y=new ut({color:16774338,emissive:16773296,emissiveIntensity:.9});for(const g of[.62,-.62]){const v=new Ne(new Ft(.34,.18,.1),y);v.position.set(g,.9,2.17),n.add(v)}const m=new ut({color:16726832,emissive:16719888,emissiveIntensity:.8});for(const g of[.66,-.66]){const v=new Ne(new Ft(.3,.18,.1),m);v.position.set(g,.9,-2.17),n.add(v)}let u;if(i){u=[];const g=new ut({color:16720435,emissive:16716066,emissiveIntensity:1.5}),v=new ut({color:2250239,emissive:2245887,emissiveIntensity:1.5}),S=new Ft(.7,.22,.6),R=new Ne(S,g);R.position.set(.4,1.78,-.1);const A=new Ne(S,v);A.position.set(-.4,1.78,-.1),n.add(R,A),u.push(R,A)}return n.userData={wheels:d,lightBar:u,bodyMaterial:r},n}class el{constructor(e,n){j(this,"mesh");j(this,"position",new N);j(this,"heading",0);j(this,"speed",0);j(this,"steer",0);j(this,"kind");j(this,"controlled",!1);j(this,"halfLength",2.2);j(this,"halfWidth",1.05);j(this,"circleOffset",1.25);j(this,"circleRadius",1.18);j(this,"maxSpeed",AT);j(this,"nodeA",0);j(this,"nodeB",0);j(this,"targetX",0);j(this,"targetZ",0);j(this,"desiredSpeed",11);j(this,"stuckTimer",0);this.kind=e,this.mesh=FT(n,e)}forward(){return{x:Math.sin(this.heading),z:Math.cos(this.heading)}}setPosition(e,n,i){this.position.set(e,0,n),this.heading=i,this.syncMesh()}drive(e,n){const i=Math.sin(this.heading),r=Math.cos(this.heading),s=n.throttle;if(s>0?this.speed+=TT*s*e:s<0&&(this.speed>.8?this.speed+=s*34*e:this.speed+=s*13*e),n.handbrake){const l=42*e;Math.abs(this.speed)<=l?this.speed=0:this.speed-=Math.sign(this.speed)*l}this.speed-=this.speed*.55*e,s===0&&Math.abs(this.speed)<.08&&(this.speed=0),this.speed=yi(this.speed,-10,this.maxSpeed);const o=yi(n.steer,-1,1);this.steer+=(o-this.steer)*Math.min(1,e*9);const a=yi(Math.abs(this.speed)/9,0,1);Math.abs(this.speed)>.25&&(this.heading+=this.steer*CT*a*e*Math.sign(this.speed)),this.position.x+=i*this.speed*e,this.position.z+=r*this.speed*e,this.syncMesh()}syncMesh(){this.mesh.position.set(this.position.x,0,this.position.z),this.mesh.rotation.y=this.heading;const e=this.mesh.userData.wheels??[],n=this.speed/.38*.016;for(const i of e)i.rotation.x-=n}}const Tm=[14711391,8499866,15912079,10128536,7183813,12674687,8035966];class OT{constructor(e){j(this,"position",new N);j(this,"heading",0);j(this,"radius",.45);j(this,"state","walk");j(this,"destX",0);j(this,"destZ",0);j(this,"waitTimer",0);j(this,"fleeTimer",0);j(this,"fleeX",0);j(this,"fleeZ",0);j(this,"blockedTimer",0);j(this,"hitCooldown",0);j(this,"mesh");j(this,"body");j(this,"leftLeg");j(this,"rightLeg");j(this,"walkPhase",0);this.mesh=new _i;const n=e??Tm[Math.floor(Math.random()*Tm.length)],i=new ut({color:n,roughness:.7}),r=new ut({color:15251850,roughness:.7}),s=new ut({color:3356746,roughness:.8});this.body=new Ne(new Kl(.3,.6,4,8),i),this.body.position.y=1.05,this.body.castShadow=!0,this.mesh.add(this.body);const o=new Ne(new Wo(.24,12,12),r);o.position.y=1.6,o.castShadow=!0,this.mesh.add(o);const a=new Ft(.18,.5,.2);this.leftLeg=new Ne(a,s),this.leftLeg.position.set(.13,.36,0),this.rightLeg=new Ne(a,s),this.rightLeg.position.set(-.13,.36,0),this.mesh.add(this.leftLeg,this.rightLeg)}setPosition(e,n){this.position.set(e,0,n),this.syncMesh()}setDest(e,n){this.destX=e,this.destZ=n}flee(e,n){this.state="flee",this.fleeX=e,this.fleeZ=n,this.fleeTimer=4.5}update(e,n){this.hitCooldown>0&&(this.hitCooldown-=e);let i=0,r=0,s=0;if(this.state==="walk"){const f=this.destX-this.position.x,d=this.destZ-this.position.z,p=Math.hypot(f,d);p<1.2?(this.state="wait",this.waitTimer=1+Math.random()*4):(i=f/p,r=d/p,s=RT)}else if(this.state==="wait"){if(this.waitTimer-=e,this.waitTimer<=0){const f=n.randomDest();this.setDest(f.x,f.z),this.state="walk"}}else if(this.state==="flee"){this.fleeTimer-=e;const f=this.position.x-this.fleeX,d=this.position.z-this.fleeZ,p=Math.hypot(f,d)||1;if(i=f/p,r=d/p,s=PT,this.fleeTimer<=0){const _=n.randomDest();this.setDest(_.x,_.z),this.state="walk"}}const o=this.position.x,a=this.position.z,l=s*e;s>0&&(this.position.x+=i*s*e,this.position.z+=r*s*e,this.heading=Math.atan2(i,r),this.walkPhase+=e*(this.state==="flee"?16:9));const c=n.resolve(this.position.x,this.position.z,this.radius);this.position.x=c.x,this.position.z=c.z;const h=Math.hypot(this.position.x-o,this.position.z-a);if(this.state==="walk"&&l>0&&h<l*.35?this.blockedTimer+=e:this.blockedTimer=0,this.blockedTimer>.5){const f=n.randomDest();this.setDest(f.x,f.z),this.blockedTimer=0}this.syncMesh()}syncMesh(){this.mesh.position.set(this.position.x,0,this.position.z),this.mesh.rotation.y=this.heading;const e=this.state==="wait"?0:Math.sin(this.walkPhase)*.5;this.leftLeg.rotation.x=e,this.rightLeg.rotation.x=-e}}class zT{constructor(e,n,i,r){j(this,"stage",0);j(this,"complete",!1);j(this,"markerA");j(this,"markerB");j(this,"carMarker");j(this,"carStart");j(this,"car");j(this,"a");j(this,"b");j(this,"t",0);this.car=n,this.a=i,this.b=r,this.carStart={x:n.position.x,z:n.position.z,heading:n.heading},this.markerA=this.makeMarker(e,i.x,i.z,3789651),this.markerB=this.makeMarker(e,r.x,r.z,3520255),this.carMarker=this.makeMarker(e,0,0,16765503),this.car.mesh.add(this.carMarker),this.carMarker.position.set(0,3.4,0),this.refresh()}makeMarker(e,n,i,r){const s=new _i,o=new Ne(new Ir(2.1,2.1,.35,24),new ut({color:r,emissive:r,emissiveIntensity:.7,transparent:!0,opacity:.8}));o.position.y=.2,s.add(o);const a=new Ne(new Ir(.45,.45,12,16,1,!0),new jf({color:r,transparent:!0,opacity:.22,side:Zn}));return a.position.y=6,s.add(a),s.position.set(n,0,i),e.add(s),s}setMarkerPosition(e,n,i){e.position.set(n,0,i)}reset(){this.stage=0,this.complete=!1,this.car.setPosition(this.carStart.x,this.carStart.z,this.carStart.heading),this.car.speed=0,this.car.steer=0,this.refresh()}refresh(){this.markerA.visible=this.stage===0,this.markerB.visible=this.stage===2,this.carMarker.visible=this.stage===0||this.stage===1}update(e,n,i){this.t+=e;const r=1+Math.sin(this.t*3)*.06;if(this.markerA.scale.setScalar(r),this.markerB.scale.setScalar(r),this.markerA.rotation.y+=e*.8,this.markerB.rotation.y+=e*.8,this.stage===0){const s=n.x-this.a.x,o=n.z-this.a.z;s*s+o*o<16&&(this.stage=1,this.refresh())}else if(this.stage===1)i===this.car&&(this.stage=2,this.refresh());else if(this.stage===2&&i===this.car){const s=this.car.position.x-this.b.x,o=this.car.position.z-this.b.z;s*s+o*o<49&&(this.stage=3,this.complete=!0,this.refresh())}}objective(){switch(this.stage){case 0:return"Go to the green marker on foot";case 1:return"Enter the yellow delivery car (press E)";case 2:return"Drive to the blue drop-off marker";default:return"Mission complete!"}}}class kT{constructor(){j(this,"police",[]);j(this,"flashTimer",0)}ensure(e,n,i,r){for(;this.police.length<e;){const s=i.nodes.filter(f=>Qa(f.x,f.z,n.x,n.z)>5625),o=s.length>0?s[Math.floor(Math.random()*s.length)]:i.nodes[Math.floor(Math.random()*i.nodes.length)],a=new el("police",1777450),l=(Math.random()-.5)*6;a.setPosition(o.x+l,o.z+l,0);const c=n.x-a.position.x,h=n.z-a.position.z;a.heading=Math.atan2(c,h),a.speed=0,a.syncMesh(),r.add(a.mesh),this.police.push(a)}for(;this.police.length>e;){const s=this.police.pop();s&&r.remove(s.mesh)}}update(e,n){var r,s;this.flashTimer+=e;const i=Math.floor(this.flashTimer*4)%2===0;for(const o of this.police){if(o.controlled)continue;const a=n.x-o.position.x,l=n.z-o.position.z,c=Math.hypot(a,l);if(c>3&&!o.controlled){const p=Math.atan2(a,l),_=id(p,o.heading),y=4.2*e;o.heading+=yi(_,-y,y)}const h=yi(8+c*.6,8,30);o.speed+=(h-o.speed)*Math.min(1,e*2),o.speed=yi(o.speed,0,30);const f=o.forward();o.position.x+=f.x*o.speed*e,o.position.z+=f.z*o.speed*e,o.syncMesh();const d=o.mesh.userData.lightBar;if(d){const p=(r=d[0])==null?void 0:r.material,_=(s=d[1])==null?void 0:s.material;p&&(p.emissiveIntensity=i?2.4:.25),_&&(_.emissiveIntensity=i?.25:2.4)}}}reset(e){for(const n of this.police)e.remove(n.mesh);this.police=[]}}function Ll(t){const e=t.forward();return[{x:t.position.x+e.x*t.circleOffset,z:t.position.z+e.z*t.circleOffset},{x:t.position.x-e.x*t.circleOffset,z:t.position.z-e.z*t.circleOffset}]}function BT(t,e){const n=t.forward();let i=!1;for(let r=0;r<3;r++){let s=!1;for(const o of[t.circleOffset,-t.circleOffset]){let a=t.position.x+n.x*o,l=t.position.z+n.z*o;for(const c of e){const h=S_(a,l,t.circleRadius,c);if(h){const f=h.nx*h.depth,d=h.nz*h.depth;t.position.x+=f,t.position.z+=d,a+=f,l+=d,s=!0,i=!0}}}if(!s)break}return i&&(t.speed*=.25,Math.abs(t.speed)<.25&&(t.speed=0)),i}function HT(t,e){const n=Ll(t),i=Ll(e);let r=null;for(const l of n)for(const c of i){const h=rd(l.x,l.z,t.circleRadius,c.x,c.z,e.circleRadius);h&&(!r||h.depth>r.depth)&&(r=h)}if(!r)return!1;const s=t.kind==="parked"||t.kind==="mission"&&!t.controlled,o=e.kind==="parked"||e.kind==="mission"&&!e.controlled;if(s&&o)return!0;const a=r.depth+.01;if(s)e.position.x-=r.nx*a,e.position.z-=r.nz*a,e.speed*=.4;else if(o)t.position.x+=r.nx*a,t.position.z+=r.nz*a,t.speed*=.4;else{const l=a/2;t.position.x+=r.nx*l,t.position.z+=r.nz*l,e.position.x-=r.nx*l,e.position.z-=r.nz*l,t.speed*=.6,e.speed*=.6}return!0}function lu(t,e,n,i,r){let s=t,o=e;for(let a=0;a<3;a++){let l=!1;for(const c of i){const h=S_(s,o,n,c);h&&(s+=h.nx*h.depth,o+=h.nz*h.depth,l=!0)}for(const c of r){const h=Ll(c);for(const f of h){const d=rd(s,o,n,f.x,f.z,c.circleRadius);d&&(s+=d.nx*d.depth,o+=d.nz*d.depth,l=!0)}}if(!l)break}return{x:s,z:o}}const Ia=[14241615,5214169,14725434,6468971,10182117,14711391,3716790,12567756],VT={parked:"car",traffic:"car",police:"police car",mission:"delivery car"};class GT{constructor(){j(this,"renderer");j(this,"scene");j(this,"rig");j(this,"input",new ET);j(this,"world",new IT);j(this,"player",new UT);j(this,"vehicles",[]);j(this,"peds",[]);j(this,"policeSystem",new kT);j(this,"mission");j(this,"missionCar");j(this,"mode","foot");j(this,"controlledCar",null);j(this,"wanted",0);j(this,"escapeTimer",0);j(this,"ramCooldown",0);j(this,"toastText","");j(this,"toastTimer",0);j(this,"hudListener",null);j(this,"hudTimer",0);j(this,"clock",new MT);j(this,"running",!1);j(this,"container",null);j(this,"dragging",!1);j(this,"lastPointerX",0);j(this,"lastPointerY",0);j(this,"loop",()=>{if(!this.running)return;const e=Math.min(this.clock.getDelta(),.05);this.update(e),this.renderer.render(this.scene,this.rig.camera)});j(this,"pedContext",{resolve:(e,n,i)=>lu(e,n,i,this.world.buildings,this.vehicles),randomDest:()=>this.world.randomWalkablePoint()});j(this,"onResize",()=>{const e=window.innerWidth,n=window.innerHeight;this.renderer.setSize(e,n),this.rig.resize(e/n)});j(this,"onPointerDown",e=>{var n,i;this.dragging=!0,this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,(i=(n=this.renderer.domElement).setPointerCapture)==null||i.call(n,e.pointerId)});j(this,"onPointerMove",e=>{if(!this.dragging)return;const n=e.clientX-this.lastPointerX,i=e.clientY-this.lastPointerY;this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.rig.addOrbit(n,i)});j(this,"onPointerUp",e=>{var n,i;this.dragging=!1,(i=(n=this.renderer.domElement).hasPointerCapture)!=null&&i.call(n,e.pointerId)&&this.renderer.domElement.releasePointerCapture(e.pointerId)});this.setupRenderer(),this.setupScene(),this.setupEntities()}onHud(e){this.hudListener=e}mount(e){this.container=e,e.appendChild(this.renderer.domElement),this.input.attach(),this.addPointerListeners(),window.addEventListener("resize",this.onResize),this.spawnPlayer(),this.running=!0,this.clock.start(),this.renderer.setAnimationLoop(this.loop)}dispose(){this.running=!1,this.renderer.setAnimationLoop(null),this.input.detach(),this.removePointerListeners(),window.removeEventListener("resize",this.onResize),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}setupRenderer(){this.renderer=new tT({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kv,this.renderer.outputColorSpace=zn}setupScene(){this.scene=new nT,this.scene.background=new He(8894176),this.scene.fog=new Zf(8894176,140,420),this.rig=new NT(window.innerWidth/window.innerHeight),this.rig.yaw=0;const e=new vT(12573183,3817520,.75);this.scene.add(e);const n=new ST(16777215,.25);this.scene.add(n);const i=new yT(16773840,1.15);i.position.set(80,120,60),i.castShadow=!0,i.shadow.mapSize.set(2048,2048);const r=i.shadow.camera;r.left=-150,r.right=150,r.top=150,r.bottom=-150,r.near=10,r.far=420,i.shadow.bias=-6e-4,this.scene.add(i),this.scene.add(i.target),i.target.position.set(0,0,0),this.scene.add(this.world.group),this.scene.add(this.player.mesh)}setupEntities(){const e=Et+2*ct;this.player.setPosition(e-(Ut+1.5),e-(Ut+1.5));for(const a of this.world.parkedSpots){const l=new el("parked",Ia[Da(0,Ia.length-1)]);l.setPosition(a.x,a.z,a.heading),this.scene.add(l.mesh),this.vehicles.push(l)}for(let a=0;a<8;a++){const l=new el("traffic",Ia[Da(0,Ia.length-1)]);l.nodeA=Da(0,this.world.nodes.length-1),l.nodeB=-1,this.pickTrafficTarget(l);const c=this.world.nodes[l.nodeA],h=Math.atan2(l.targetX-c.x,l.targetZ-c.z);l.setPosition(c.x,c.z,h),l.speed=Mm,this.scene.add(l.mesh),this.vehicles.push(l)}const n={x:e-ct-(Ut+1.5),z:e-ct-(Ut+1.5)},i=Et+ct-16,r=Et+ct-(Ut-1.3);this.missionCar=new el("mission",16765503),this.missionCar.setPosition(i,r,Math.PI/2),this.scene.add(this.missionCar.mesh),this.vehicles.push(this.missionCar);const s=Et+(Lt-1)*ct,o={x:s,z:s};this.mission=new zT(this.scene,this.missionCar,n,o);for(let a=0;a<14;a++){const l=new OT,c=this.world.randomWalkablePoint();l.setPosition(c.x,c.z);const h=this.world.randomWalkablePoint();l.setDest(h.x,h.z),this.scene.add(l.mesh),this.peds.push(l)}}pickTrafficTarget(e){const n=this.world.neighbors[e.nodeA]??[];if(n.length===0)return;let i=n.filter(d=>d!==e.nodeB);i.length===0&&(i=n);const r=i[Da(0,i.length-1)];e.nodeB=r;const s=this.world.nodes[e.nodeA],o=this.world.nodes[r],a=o.x-s.x,l=o.z-s.z,c=Math.hypot(a,l)||1,h=a/c,f=l/c;e.targetX=o.x+f*3,e.targetZ=o.z-h*3}spawnPlayer(){this.player.mesh.visible=!0,this.player.syncMesh(),this.rig.yaw=Math.PI*.25}update(e){this.ramCooldown>0&&(this.ramCooldown-=e),this.toastTimer>0&&(this.toastTimer-=e,this.toastTimer<=0&&(this.toastText="")),this.handleInteraction(),this.mode==="foot"?this.updatePlayer(e):this.controlledCar&&this.updateControlledCar(e),this.updateTraffic(e),this.updatePeds(e),this.policeSystem.update(e,this.playerTargetPos()),this.updatePoliceAndWanted(e),this.resolveCollisions(),this.checkPedestrianHits(),this.sanitize(),this.mission&&this.mission.update(e,this.playerTargetPos(),this.controlledCar),this.updateCamera(e),this.updateHud(e),this.input.endFrame()}updatePlayer(e){const n=this.rig.forwardVector(),i=this.rig.leftVector(),r=this.input.axis(["KeyS","ArrowDown"],["KeyW","ArrowUp"]),s=this.input.axis(["KeyD","ArrowRight"],["KeyA","ArrowLeft"]),o=n.x*r+i.x*s,a=n.z*r+i.z*s;this.player.move(e,o,a)}updateControlledCar(e){const n=this.controlledCar;if(!n)return;const i=this.input.axis(["KeyS","ArrowDown"],["KeyW","ArrowUp"]),r=this.input.axis(["KeyD","ArrowRight"],["KeyA","ArrowLeft"]),s=this.input.isDown("Space");n.drive(e,{throttle:i,steer:r,handbrake:s})}updateTraffic(e){for(const n of this.vehicles){if(n.kind!=="traffic"||n.controlled)continue;const i=n.targetX-n.position.x,r=n.targetZ-n.position.z;Math.hypot(i,r)<2.5&&(n.nodeA=n.nodeB,this.pickTrafficTarget(n));const o=n.targetX-n.position.x,a=n.targetZ-n.position.z,l=Math.atan2(o,a),c=id(l,n.heading),h=2.4*e;n.heading+=yi(c,-h,h);let f=Mm;const d=n.forward();for(const _ of this.vehicles){if(_===n)continue;const y=_.position.x-n.position.x,m=_.position.z-n.position.z,u=Math.hypot(y,m);u<10&&u>.001&&(y*d.x+m*d.z)/u>.55&&(f=Math.min(f,2.5))}n.speed+=(f-n.speed)*Math.min(1,e*2.5),n.speed=yi(n.speed,0,n.maxSpeed);const p=n.forward();n.position.x+=p.x*n.speed*e,n.position.z+=p.z*n.speed*e,n.syncMesh()}}updatePeds(e){for(const n of this.peds)n.update(e,this.pedContext)}resolveCollisions(){for(const e of this.vehicles)BT(e,this.world.buildings);for(let e=0;e<this.vehicles.length;e++)for(let n=e+1;n<this.vehicles.length;n++){const i=this.vehicles[e],r=this.vehicles[n],s=i.speed;if(!HT(i,r))continue;const a=i.controlled?i:r.controlled?r:null;if(!a)continue;const l=a===i?r:i;l.kind==="police"&&this.ramCooldown<=0?(this.addWanted(2),this.setToast("You crashed into the police!"),this.ramCooldown=2):(l.kind==="parked"||l.kind==="traffic")&&Math.abs(s)>9&&this.ramCooldown<=0&&(this.addWanted(1),this.setToast("Reckless driving! Police alerted"),this.ramCooldown=3)}if(this.mode==="foot"){const e=lu(this.player.position.x,this.player.position.z,this.player.radius,this.world.buildings,this.vehicles);this.player.position.x=e.x,this.player.position.z=e.z,this.player.syncMesh()}}checkPedestrianHits(){for(const e of this.peds)if(!(e.hitCooldown>0))for(const n of this.vehicles){if(Math.abs(n.speed)<2.5)continue;const i=Ll(n);let r=!1;for(const s of i)if(rd(e.position.x,e.position.z,e.radius,s.x,s.z,n.circleRadius)){r=!0;break}if(r){e.flee(n.position.x,n.position.z),e.hitCooldown=3,n.controlled&&(this.addWanted(1),this.setToast("You hit a pedestrian!"));break}}}updatePoliceAndWanted(e){if(this.wanted>0){this.policeSystem.ensure(this.wanted,this.playerTargetPos(),this.world,this.scene);const n=this.playerTargetPos();let i=1/0;for(const r of this.policeSystem.police){const s=Qa(r.position.x,r.position.z,n.x,n.z);s<i&&(i=s)}i>65*65?this.escapeTimer+=e:this.escapeTimer=0,this.escapeTimer>7&&(this.wanted=Math.max(0,this.wanted-1),this.escapeTimer=0,this.setToast(this.wanted===0?"You escaped the police":"Wanted level reduced"),this.policeSystem.ensure(this.wanted,this.playerTargetPos(),this.world,this.scene))}else this.policeSystem.police.length>0&&this.policeSystem.reset(this.scene)}addWanted(e){this.wanted=Math.min(3,this.wanted+e),this.escapeTimer=0}playerTargetPos(){return this.controlledCar?this.controlledCar.position:this.player.position}updateCamera(e){if(this.mode==="driving"&&this.controlledCar){const n=this.controlledCar,i=new N(n.position.x,n.position.y+1.1,n.position.z);this.rig.update(e,i,n.heading,!0)}else{const n=new N(this.player.position.x,this.player.position.y+1.4,this.player.position.z);this.rig.update(e,n,this.player.heading,!1)}}handleInteraction(){if(this.input.wasPressed("KeyR")&&this.restartMission(),this.input.wasPressed("KeyE"))if(this.mode==="foot"){const e=this.nearestVehicle();e&&this.enterVehicle(e)}else this.controlledCar&&Math.abs(this.controlledCar.speed)<4&&this.exitVehicle()}nearestVehicle(){let e=null,n=4.2*4.2;for(const i of this.vehicles){if(i.controlled||i.kind==="police")continue;const r=Qa(i.position.x,i.position.z,this.player.position.x,this.player.position.z);r<n&&(n=r,e=i)}return e}enterVehicle(e){this.mode="driving",this.controlledCar=e,e.controlled=!0,e.steer=0,this.player.mesh.visible=!1,this.setToast("")}exitVehicle(){const e=this.controlledCar;if(!e)return;const n=e.forward(),i=[{x:e.position.x+n.z*(e.halfWidth+1),z:e.position.z-n.x*(e.halfWidth+1)},{x:e.position.x-n.z*(e.halfWidth+1),z:e.position.z+n.x*(e.halfWidth+1)},{x:e.position.x-n.x*(e.halfLength+1.2),z:e.position.z-n.z*(e.halfLength+1.2)},{x:e.position.x+n.x*(e.halfLength+1.2),z:e.position.z+n.z*(e.halfLength+1.2)}];let r=e.position.x+n.z*(e.halfWidth+1),s=e.position.z-n.x*(e.halfWidth+1);for(const o of i){const a=lu(o.x,o.z,this.player.radius,this.world.buildings,this.vehicles);if(Math.hypot(a.x-o.x,a.z-o.z)<.45&&!this.world.isInsideBuilding(a.x,a.z,.3)){r=a.x,s=a.z;break}r=a.x,s=a.z}if(e.controlled=!1,e.speed=0,e.steer=0,e.kind==="traffic"){let o=0,a=1/0;for(let l=0;l<this.world.nodes.length;l++){const c=this.world.nodes[l],h=Qa(c.x,c.z,e.position.x,e.position.z);h<a&&(a=h,o=l)}e.nodeA=o,e.nodeB=-1,this.pickTrafficTarget(e)}this.mode="foot",this.controlledCar=null,this.player.setPosition(r,s),this.player.heading=e.heading,this.player.mesh.visible=!0,this.player.syncMesh(),this.rig.autoFollow=!1}restartMission(){this.mode==="driving"&&this.exitVehicle(),this.mission.reset(),this.setToast("Mission restarted")}setToast(e){this.toastText=e,this.toastTimer=e?2.5:0}sanitize(){const e=(n,i)=>{(!Number.isFinite(n.x)||!Number.isFinite(n.z))&&(n.x=0,n.z=0),i&&!Number.isFinite(i.speed)&&(i.speed=0)};e(this.player.position);for(const n of this.vehicles)e(n.position,n),Number.isFinite(n.heading)||(n.heading=0);for(const n of this.peds)e(n.position),Number.isFinite(n.heading)||(n.heading=0)}updateHud(e){if(this.hudTimer+=e,this.hudTimer<.1||(this.hudTimer=0,!this.hudListener))return;let n="";if(this.mode==="foot"){const i=this.nearestVehicle();i&&(n=`Press E to enter ${VT[i.kind]??"vehicle"}`)}else this.controlledCar&&Math.abs(this.controlledCar.speed)<4&&(n="Press E to exit vehicle");this.hudListener({mode:this.mode,speed:this.controlledCar?Math.abs(this.controlledCar.speed)*3.6:0,objective:this.mission?this.mission.objective():"",wanted:this.wanted,police:this.policeSystem.police.length,hint:n,vehicleKind:this.controlledCar?this.controlledCar.kind:"",message:this.toastText,missionComplete:this.mission?this.mission.complete:!1})}addPointerListeners(){const e=this.renderer.domElement;e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointerleave",this.onPointerUp)}removePointerListeners(){const e=this.renderer.domElement;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointerleave",this.onPointerUp)}}function WT({state:t}){const e=[0,1,2].map(n=>Xe.jsx("span",{className:n<t.wanted?"":"dim",children:"★"},n));return Xe.jsxs("div",{className:"hud",children:[Xe.jsxs("div",{className:"hud-panel hud-top-left",children:[Xe.jsx("div",{className:"hud-label",children:"Player state"}),Xe.jsx("div",{className:`hud-value ${t.mode==="foot"?"mode-foot":"mode-drive"}`,children:t.mode==="foot"?"ON FOOT":"DRIVING"}),t.mode==="driving"&&Xe.jsxs("div",{className:"hud-sub",children:["Speed: ",Math.round(t.speed)," km/h"]}),t.mode==="driving"&&t.vehicleKind&&Xe.jsxs("div",{className:"hud-sub",children:["Vehicle: ",t.vehicleKind]})]}),Xe.jsxs("div",{className:"hud-panel hud-top-right",children:[Xe.jsx("div",{className:"hud-label",children:"Wanted"}),Xe.jsx("div",{className:"hud-stars",children:e}),Xe.jsx("div",{className:"hud-sub",children:t.wanted>0?`${t.police} police pursuing`:"No active pursuit"})]}),Xe.jsxs("div",{className:"hud-panel hud-bottom-left",children:[Xe.jsx("div",{className:"hud-label",children:"Objective"}),Xe.jsx("div",{className:"hud-objective",children:t.objective}),Xe.jsx("div",{className:"hud-sub",style:{marginTop:10},children:Xe.jsxs("div",{className:"hud-controls",children:[Xe.jsx("b",{children:"W A S D"})," move / drive",Xe.jsx("br",{}),Xe.jsx("b",{children:"E"})," enter / exit vehicle",Xe.jsx("br",{}),Xe.jsx("b",{children:"Space"})," handbrake",Xe.jsx("br",{}),Xe.jsx("b",{children:"R"})," restart mission",Xe.jsx("br",{}),Xe.jsx("b",{children:"Mouse drag"})," orbit camera"]})})]}),t.hint&&Xe.jsx("div",{className:"hint",children:t.hint}),t.message&&Xe.jsx("div",{className:"toast",children:t.message}),t.missionComplete&&Xe.jsxs("div",{className:"success",children:["MISSION COMPLETE",Xe.jsx("span",{className:"small",children:"Press R to play it again"})]})]})}function XT(){const t=io.useRef(null),[e,n]=io.useState(null);return io.useEffect(()=>{const i=t.current;if(!i)return;const r=new GT;return r.onHud(n),r.mount(i),()=>r.dispose()},[]),Xe.jsxs("div",{className:"app",children:[Xe.jsx("div",{className:"canvas-host",ref:t}),e&&Xe.jsx(WT,{state:e})]})}cu.createRoot(document.getElementById("root")).render(Xe.jsx(XT,{}));
