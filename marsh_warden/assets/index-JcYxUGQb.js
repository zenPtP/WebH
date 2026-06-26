(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var kc={exports:{}},Co={},Sc={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zr=Symbol.for("react.element"),Rp=Symbol.for("react.portal"),Ap=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),Lp=Symbol.for("react.provider"),Op=Symbol.for("react.context"),Dp=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),Up=Symbol.for("react.memo"),Fp=Symbol.for("react.lazy"),Ol=Symbol.iterator;function Wp(t){return t===null||typeof t!="object"?null:(t=Ol&&t[Ol]||t["@@iterator"],typeof t=="function"?t:null)}var _c={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bc=Object.assign,Ec={};function er(t,e,n){this.props=t,this.context=e,this.refs=Ec,this.updater=n||_c}er.prototype.isReactComponent={};er.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};er.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cc(){}Cc.prototype=er.prototype;function Ea(t,e,n){this.props=t,this.context=e,this.refs=Ec,this.updater=n||_c}var Ca=Ea.prototype=new Cc;Ca.constructor=Ea;bc(Ca,er.prototype);Ca.isPureReactComponent=!0;var Dl=Array.isArray,Ic=Object.prototype.hasOwnProperty,Ia={current:null},Tc={key:!0,ref:!0,__self:!0,__source:!0};function Pc(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Ic.call(e,r)&&!Tc.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zr,type:t,key:o,ref:s,props:i,_owner:Ia.current}}function Bp(t,e){return{$$typeof:Zr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ta(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zr}function $p(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zl=/\/+/g;function Vo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$p(""+t.key):e.toString(36)}function Ri(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Zr:case Rp:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Vo(s,0):r,Dl(i)?(n="",t!=null&&(n=t.replace(zl,"$&/")+"/"),Ri(i,e,n,"",function(c){return c})):i!=null&&(Ta(i)&&(i=Bp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(zl,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Dl(t))for(var l=0;l<t.length;l++){o=t[l];var u=r+Vo(o,l);s+=Ri(o,e,n,u,i)}else if(u=Wp(t),typeof u=="function")for(t=u.call(t),l=0;!(o=t.next()).done;)o=o.value,u=r+Vo(o,l++),s+=Ri(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function pi(t,e,n){if(t==null)return t;var r=[],i=0;return Ri(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Hp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ve={current:null},Ai={transition:null},Vp={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Ia};function Nc(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:pi,forEach:function(t,e,n){pi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pi(t,function(){e++}),e},toArray:function(t){return pi(t,function(e){return e})||[]},only:function(t){if(!Ta(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=er;j.Fragment=Ap;j.Profiler=Mp;j.PureComponent=Ea;j.StrictMode=jp;j.Suspense=zp;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;j.act=Nc;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bc({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ia.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ic.call(e,u)&&!Tc.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Zr,type:t.type,key:i,ref:o,props:r,_owner:s}};j.createContext=function(t){return t={$$typeof:Op,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lp,_context:t},t.Consumer=t};j.createElement=Pc;j.createFactory=function(t){var e=Pc.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:Dp,render:t}};j.isValidElement=Ta;j.lazy=function(t){return{$$typeof:Fp,_payload:{_status:-1,_result:t},_init:Hp}};j.memo=function(t,e){return{$$typeof:Up,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=Ai.transition;Ai.transition={};try{t()}finally{Ai.transition=e}};j.unstable_act=Nc;j.useCallback=function(t,e){return ve.current.useCallback(t,e)};j.useContext=function(t){return ve.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return ve.current.useDeferredValue(t)};j.useEffect=function(t,e){return ve.current.useEffect(t,e)};j.useId=function(){return ve.current.useId()};j.useImperativeHandle=function(t,e,n){return ve.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return ve.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return ve.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return ve.current.useMemo(t,e)};j.useReducer=function(t,e,n){return ve.current.useReducer(t,e,n)};j.useRef=function(t){return ve.current.useRef(t)};j.useState=function(t){return ve.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return ve.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return ve.current.useTransition()};j.version="18.3.1";Sc.exports=j;var O=Sc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp=O,Kp=Symbol.for("react.element"),Qp=Symbol.for("react.fragment"),Yp=Object.prototype.hasOwnProperty,qp=Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xp={key:!0,ref:!0,__self:!0,__source:!0};function Rc(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Yp.call(e,r)&&!Xp.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Kp,type:t,key:o,ref:s,props:i,_owner:qp.current}}Co.Fragment=Qp;Co.jsx=Rc;Co.jsxs=Rc;kc.exports=Co;var a=kc.exports,Ac={exports:{}},Te={},jc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(_,N){var R=_.length;_.push(N);e:for(;0<R;){var V=R-1>>>1,X=_[V];if(0<i(X,N))_[V]=N,_[R]=X,R=V;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var N=_[0],R=_.pop();if(R!==N){_[0]=R;e:for(var V=0,X=_.length,xn=X>>>1;V<xn;){var De=2*(V+1)-1,or=_[De],Ye=De+1,wn=_[Ye];if(0>i(or,R))Ye<X&&0>i(wn,or)?(_[V]=wn,_[Ye]=R,V=Ye):(_[V]=or,_[De]=R,V=De);else if(Ye<X&&0>i(wn,R))_[V]=wn,_[Ye]=R,V=Ye;else break e}}return N}function i(_,N){var R=_.sortIndex-N.sortIndex;return R!==0?R:_.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],v=1,m=null,g=3,h=!1,k=!1,S=!1,L=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=_)r(c),N.sortIndex=N.expirationTime,e(u,N);else break;N=n(c)}}function y(_){if(S=!1,p(_),!k)if(n(u)!==null)k=!0,kt(E);else{var N=n(c);N!==null&&ir(y,N.startTime-_)}}function E(_,N){k=!1,S&&(S=!1,f(T),T=-1),h=!0;var R=g;try{for(p(N),m=n(u);m!==null&&(!(m.expirationTime>N)||_&&!fe());){var V=m.callback;if(typeof V=="function"){m.callback=null,g=m.priorityLevel;var X=V(m.expirationTime<=N);N=t.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),p(N)}else r(u);m=n(u)}if(m!==null)var xn=!0;else{var De=n(c);De!==null&&ir(y,De.startTime-N),xn=!1}return xn}finally{m=null,g=R,h=!1}}var C=!1,I=null,T=-1,D=5,A=-1;function fe(){return!(t.unstable_now()-A<D)}function Qe(){if(I!==null){var _=t.unstable_now();A=_;var N=!0;try{N=I(!0,_)}finally{N?qt():(C=!1,I=null)}}else C=!1}var qt;if(typeof d=="function")qt=function(){d(Qe)};else if(typeof MessageChannel<"u"){var ci=new MessageChannel,di=ci.port2;ci.port1.onmessage=Qe,qt=function(){di.postMessage(null)}}else qt=function(){L(Qe,0)};function kt(_){I=_,C||(C=!0,qt())}function ir(_,N){T=L(function(){_(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(_){_.callback=null},t.unstable_continueExecution=function(){k||h||(k=!0,kt(E))},t.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<_?Math.floor(1e3/_):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(_){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var R=g;g=N;try{return _()}finally{g=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(_,N){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=g;g=_;try{return N()}finally{g=R}},t.unstable_scheduleCallback=function(_,N,R){var V=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,_){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=R+X,_={id:v++,callback:N,priorityLevel:_,startTime:R,expirationTime:X,sortIndex:-1},R>V?(_.sortIndex=R,e(c,_),n(u)===null&&_===n(c)&&(S?(f(T),T=-1):S=!0,ir(y,R-V))):(_.sortIndex=X,e(u,_),k||h||(k=!0,kt(E))),_},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(_){var N=g;return function(){var R=g;g=N;try{return _.apply(this,arguments)}finally{g=R}}}})(Mc);jc.exports=Mc;var Jp=jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=O,Ie=Jp;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lc=new Set,Ar={};function gn(t,e){Hn(t,e),Hn(t+"Capture",e)}function Hn(t,e){for(Ar[t]=e,t=0;t<e.length;t++)Lc.add(e[t])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=Object.prototype.hasOwnProperty,eh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ul={},Fl={};function th(t){return bs.call(Fl,t)?!0:bs.call(Ul,t)?!1:eh.test(t)?Fl[t]=!0:(Ul[t]=!0,!1)}function nh(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rh(t,e,n,r){if(e===null||typeof e>"u"||nh(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ye(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ae[t]=new ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ae[e]=new ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ae[t]=new ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ae[t]=new ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ae[t]=new ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ae[t]=new ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ae[t]=new ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ae[t]=new ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ae[t]=new ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pa=/[\-:]([a-z])/g;function Na(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pa,Na);ae[e]=new ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pa,Na);ae[e]=new ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pa,Na);ae[e]=new ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ae[t]=new ye(t,1,!1,t.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ae[t]=new ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ra(t,e,n,r){var i=ae.hasOwnProperty(e)?ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rh(e,n,i,r)&&(n=null),r||i===null?th(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wt=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Aa=Symbol.for("react.strict_mode"),Es=Symbol.for("react.profiler"),Oc=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),ja=Symbol.for("react.forward_ref"),Cs=Symbol.for("react.suspense"),Is=Symbol.for("react.suspense_list"),Ma=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),zc=Symbol.for("react.offscreen"),Wl=Symbol.iterator;function ar(t){return t===null||typeof t!="object"?null:(t=Wl&&t[Wl]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Object.assign,Go;function gr(t){if(Go===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Go=e&&e[1]||""}return`
`+Go+t}var Ko=!1;function Qo(t,e){if(!t||Ko)return"";Ko=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=l);break}}}finally{Ko=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?gr(t):""}function ih(t){switch(t.tag){case 5:return gr(t.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return t=Qo(t.type,!1),t;case 11:return t=Qo(t.type.render,!1),t;case 1:return t=Qo(t.type,!0),t;default:return""}}function Ts(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _n:return"Fragment";case Sn:return"Portal";case Es:return"Profiler";case Aa:return"StrictMode";case Cs:return"Suspense";case Is:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dc:return(t.displayName||"Context")+".Consumer";case Oc:return(t._context.displayName||"Context")+".Provider";case ja:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ma:return e=t.displayName||null,e!==null?e:Ts(t.type)||"Memo";case Et:e=t._payload,t=t._init;try{return Ts(t(e))}catch{}}return null}function oh(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ts(e);case 8:return e===Aa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ht(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sh(t){var e=Uc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mi(t){t._valueTracker||(t._valueTracker=sh(t))}function Fc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Uc(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ki(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ps(t,e){var n=e.checked;return Y({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bl(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ht(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wc(t,e){e=e.checked,e!=null&&Ra(t,"checked",e,!1)}function Ns(t,e){Wc(t,e);var n=Ht(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rs(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rs(t,e.type,Ht(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $l(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rs(t,e,n){(e!=="number"||Ki(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vr=Array.isArray;function Mn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ht(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function As(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Y({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hl(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(vr(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ht(n)}}function Bc(t,e){var n=Ht(e.value),r=Ht(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vl(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $c(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function js(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$c(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gi,Hc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ah=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(t){ah.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),kr[e]=kr[t]})});function Vc(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||kr.hasOwnProperty(t)&&kr[t]?(""+e).trim():e+"px"}function Gc(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vc(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lh=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ms(t,e){if(e){if(lh[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Ls(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Os=null;function La(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ds=null,Ln=null,On=null;function Gl(t){if(t=ni(t)){if(typeof Ds!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Ro(e),Ds(t.stateNode,t.type,e))}}function Kc(t){Ln?On?On.push(t):On=[t]:Ln=t}function Qc(){if(Ln){var t=Ln,e=On;if(On=Ln=null,Gl(t),e)for(t=0;t<e.length;t++)Gl(e[t])}}function Yc(t,e){return t(e)}function qc(){}var Yo=!1;function Xc(t,e,n){if(Yo)return t(e,n);Yo=!0;try{return Yc(t,e,n)}finally{Yo=!1,(Ln!==null||On!==null)&&(qc(),Qc())}}function Mr(t,e){var n=t.stateNode;if(n===null)return null;var r=Ro(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var zs=!1;if(ht)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){zs=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{zs=!1}function uh(t,e,n,r,i,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(v){this.onError(v)}}var Sr=!1,Qi=null,Yi=!1,Us=null,ch={onError:function(t){Sr=!0,Qi=t}};function dh(t,e,n,r,i,o,s,l,u){Sr=!1,Qi=null,uh.apply(ch,arguments)}function fh(t,e,n,r,i,o,s,l,u){if(dh.apply(this,arguments),Sr){if(Sr){var c=Qi;Sr=!1,Qi=null}else throw Error(x(198));Yi||(Yi=!0,Us=c)}}function vn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kl(t){if(vn(t)!==t)throw Error(x(188))}function ph(t){var e=t.alternate;if(!e){if(e=vn(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Kl(i),t;if(o===r)return Kl(i),e;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function Zc(t){return t=ph(t),t!==null?ed(t):null}function ed(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ed(t);if(e!==null)return e;t=t.sibling}return null}var td=Ie.unstable_scheduleCallback,Ql=Ie.unstable_cancelCallback,hh=Ie.unstable_shouldYield,mh=Ie.unstable_requestPaint,J=Ie.unstable_now,gh=Ie.unstable_getCurrentPriorityLevel,Oa=Ie.unstable_ImmediatePriority,nd=Ie.unstable_UserBlockingPriority,qi=Ie.unstable_NormalPriority,vh=Ie.unstable_LowPriority,rd=Ie.unstable_IdlePriority,Io=null,nt=null;function yh(t){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Io,t,void 0,(t.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:kh,xh=Math.log,wh=Math.LN2;function kh(t){return t>>>=0,t===0?32:31-(xh(t)/wh|0)|0}var vi=64,yi=4194304;function yr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xi(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=yr(l):(o&=s,o!==0&&(r=yr(o)))}else s=n&~i,s!==0?r=yr(s):o!==0&&(r=yr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-He(e),i=1<<n,r|=t[n],e&=~i;return r}function Sh(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _h(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-He(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=Sh(l,e)):u<=e&&(t.expiredLanes|=l),o&=~l}}function Fs(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function id(){var t=vi;return vi<<=1,!(vi&4194240)&&(vi=64),t}function qo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ei(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-He(e),t[e]=n}function bh(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-He(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Da(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-He(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function od(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sd,za,ad,ld,ud,Ws=!1,xi=[],Mt=null,Lt=null,Ot=null,Lr=new Map,Or=new Map,It=[],Eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yl(t,e){switch(t){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Lr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(e.pointerId)}}function ur(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=ni(e),e!==null&&za(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ch(t,e,n,r,i){switch(e){case"focusin":return Mt=ur(Mt,t,e,n,r,i),!0;case"dragenter":return Lt=ur(Lt,t,e,n,r,i),!0;case"mouseover":return Ot=ur(Ot,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Lr.set(o,ur(Lr.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Or.set(o,ur(Or.get(o)||null,t,e,n,r,i)),!0}return!1}function cd(t){var e=nn(t.target);if(e!==null){var n=vn(e);if(n!==null){if(e=n.tag,e===13){if(e=Jc(n),e!==null){t.blockedOn=e,ud(t.priority,function(){ad(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ji(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bs(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Os=r,n.target.dispatchEvent(r),Os=null}else return e=ni(n),e!==null&&za(e),t.blockedOn=n,!1;e.shift()}return!0}function ql(t,e,n){ji(t)&&n.delete(e)}function Ih(){Ws=!1,Mt!==null&&ji(Mt)&&(Mt=null),Lt!==null&&ji(Lt)&&(Lt=null),Ot!==null&&ji(Ot)&&(Ot=null),Lr.forEach(ql),Or.forEach(ql)}function cr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ws||(Ws=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Ih)))}function Dr(t){function e(i){return cr(i,t)}if(0<xi.length){cr(xi[0],t);for(var n=1;n<xi.length;n++){var r=xi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mt!==null&&cr(Mt,t),Lt!==null&&cr(Lt,t),Ot!==null&&cr(Ot,t),Lr.forEach(e),Or.forEach(e),n=0;n<It.length;n++)r=It[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)cd(n),n.blockedOn===null&&It.shift()}var Dn=wt.ReactCurrentBatchConfig,Ji=!0;function Th(t,e,n,r){var i=U,o=Dn.transition;Dn.transition=null;try{U=1,Ua(t,e,n,r)}finally{U=i,Dn.transition=o}}function Ph(t,e,n,r){var i=U,o=Dn.transition;Dn.transition=null;try{U=4,Ua(t,e,n,r)}finally{U=i,Dn.transition=o}}function Ua(t,e,n,r){if(Ji){var i=Bs(t,e,n,r);if(i===null)ss(t,e,r,Zi,n),Yl(t,r);else if(Ch(i,t,e,n,r))r.stopPropagation();else if(Yl(t,r),e&4&&-1<Eh.indexOf(t)){for(;i!==null;){var o=ni(i);if(o!==null&&sd(o),o=Bs(t,e,n,r),o===null&&ss(t,e,r,Zi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ss(t,e,r,null,n)}}var Zi=null;function Bs(t,e,n,r){if(Zi=null,t=La(r),t=nn(t),t!==null)if(e=vn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jc(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zi=t,null}function dd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gh()){case Oa:return 1;case nd:return 4;case qi:case vh:return 16;case rd:return 536870912;default:return 16}default:return 16}}var At=null,Fa=null,Mi=null;function fd(){if(Mi)return Mi;var t,e=Fa,n=e.length,r,i="value"in At?At.value:At.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Mi=i.slice(t,1<r?1-r:void 0)}function Li(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wi(){return!0}function Xl(){return!1}function Pe(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:Xl,this.isPropagationStopped=Xl,this}return Y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),e}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Pe(tr),ti=Y({},tr,{view:0,detail:0}),Nh=Pe(ti),Xo,Jo,dr,To=Y({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ba,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==dr&&(dr&&t.type==="mousemove"?(Xo=t.screenX-dr.screenX,Jo=t.screenY-dr.screenY):Jo=Xo=0,dr=t),Xo)},movementY:function(t){return"movementY"in t?t.movementY:Jo}}),Jl=Pe(To),Rh=Y({},To,{dataTransfer:0}),Ah=Pe(Rh),jh=Y({},ti,{relatedTarget:0}),Zo=Pe(jh),Mh=Y({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=Pe(Mh),Oh=Y({},tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dh=Pe(Oh),zh=Y({},tr,{data:0}),Zl=Pe(zh),Uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Wh[t])?!!e[t]:!1}function Ba(){return Bh}var $h=Y({},ti,{key:function(t){if(t.key){var e=Uh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Li(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ba,charCode:function(t){return t.type==="keypress"?Li(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Li(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hh=Pe($h),Vh=Y({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=Pe(Vh),Gh=Y({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ba}),Kh=Pe(Gh),Qh=Y({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yh=Pe(Qh),qh=Y({},To,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xh=Pe(qh),Jh=[9,13,27,32],$a=ht&&"CompositionEvent"in window,_r=null;ht&&"documentMode"in document&&(_r=document.documentMode);var Zh=ht&&"TextEvent"in window&&!_r,pd=ht&&(!$a||_r&&8<_r&&11>=_r),tu=" ",nu=!1;function hd(t,e){switch(t){case"keyup":return Jh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bn=!1;function em(t,e){switch(t){case"compositionend":return md(e);case"keypress":return e.which!==32?null:(nu=!0,tu);case"textInput":return t=e.data,t===tu&&nu?null:t;default:return null}}function tm(t,e){if(bn)return t==="compositionend"||!$a&&hd(t,e)?(t=fd(),Mi=Fa=At=null,bn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pd&&e.locale!=="ko"?null:e.data;default:return null}}var nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nm[t.type]:e==="textarea"}function gd(t,e,n,r){Kc(r),e=eo(e,"onChange"),0<e.length&&(n=new Wa("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var br=null,zr=null;function rm(t){Id(t,0)}function Po(t){var e=In(t);if(Fc(e))return t}function im(t,e){if(t==="change")return e}var vd=!1;if(ht){var es;if(ht){var ts="oninput"in document;if(!ts){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),ts=typeof iu.oninput=="function"}es=ts}else es=!1;vd=es&&(!document.documentMode||9<document.documentMode)}function ou(){br&&(br.detachEvent("onpropertychange",yd),zr=br=null)}function yd(t){if(t.propertyName==="value"&&Po(zr)){var e=[];gd(e,zr,t,La(t)),Xc(rm,e)}}function om(t,e,n){t==="focusin"?(ou(),br=e,zr=n,br.attachEvent("onpropertychange",yd)):t==="focusout"&&ou()}function sm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Po(zr)}function am(t,e){if(t==="click")return Po(e)}function lm(t,e){if(t==="input"||t==="change")return Po(e)}function um(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ke=typeof Object.is=="function"?Object.is:um;function Ur(t,e){if(Ke(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bs.call(e,i)||!Ke(t[i],e[i]))return!1}return!0}function su(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function au(t,e){var n=su(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=su(n)}}function xd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wd(){for(var t=window,e=Ki();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ki(t.document)}return e}function Ha(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cm(t){var e=wd(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xd(n.ownerDocument.documentElement,n)){if(r!==null&&Ha(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=au(n,o);var s=au(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dm=ht&&"documentMode"in document&&11>=document.documentMode,En=null,$s=null,Er=null,Hs=!1;function lu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hs||En==null||En!==Ki(r)||(r=En,"selectionStart"in r&&Ha(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Ur(Er,r)||(Er=r,r=eo($s,"onSelect"),0<r.length&&(e=new Wa("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=En)))}function ki(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cn={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},ns={},kd={};ht&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function No(t){if(ns[t])return ns[t];if(!Cn[t])return t;var e=Cn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kd)return ns[t]=e[n];return t}var Sd=No("animationend"),_d=No("animationiteration"),bd=No("animationstart"),Ed=No("transitionend"),Cd=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(t,e){Cd.set(t,e),gn(e,[t])}for(var rs=0;rs<uu.length;rs++){var is=uu[rs],fm=is.toLowerCase(),pm=is[0].toUpperCase()+is.slice(1);Gt(fm,"on"+pm)}Gt(Sd,"onAnimationEnd");Gt(_d,"onAnimationIteration");Gt(bd,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Ed,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hm=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function cu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fh(r,e,void 0,t),t.currentTarget=null}function Id(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;cu(i,l,c),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;cu(i,l,c),o=u}}}if(Yi)throw t=Us,Yi=!1,Us=null,t}function $(t,e){var n=e[Ys];n===void 0&&(n=e[Ys]=new Set);var r=t+"__bubble";n.has(r)||(Td(e,t,2,!1),n.add(r))}function os(t,e,n){var r=0;e&&(r|=4),Td(n,t,r,e)}var Si="_reactListening"+Math.random().toString(36).slice(2);function Fr(t){if(!t[Si]){t[Si]=!0,Lc.forEach(function(n){n!=="selectionchange"&&(hm.has(n)||os(n,!1,t),os(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Si]||(e[Si]=!0,os("selectionchange",!1,e))}}function Td(t,e,n,r){switch(dd(e)){case 1:var i=Th;break;case 4:i=Ph;break;default:i=Ua}n=i.bind(null,e,n,t),i=void 0,!zs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ss(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=nn(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Xc(function(){var c=o,v=La(n),m=[];e:{var g=Cd.get(t);if(g!==void 0){var h=Wa,k=t;switch(t){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":h=Hh;break;case"focusin":k="focus",h=Zo;break;case"focusout":k="blur",h=Zo;break;case"beforeblur":case"afterblur":h=Zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Kh;break;case Sd:case _d:case bd:h=Lh;break;case Ed:h=Yh;break;case"scroll":h=Nh;break;case"wheel":h=Xh;break;case"copy":case"cut":case"paste":h=Dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=eu}var S=(e&4)!==0,L=!S&&t==="scroll",f=S?g!==null?g+"Capture":null:g;S=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Mr(d,f),y!=null&&S.push(Wr(d,y,p)))),L)break;d=d.return}0<S.length&&(g=new h(g,k,null,n,v),m.push({event:g,listeners:S}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",g&&n!==Os&&(k=n.relatedTarget||n.fromElement)&&(nn(k)||k[mt]))break e;if((h||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,h?(k=n.relatedTarget||n.toElement,h=c,k=k?nn(k):null,k!==null&&(L=vn(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(h=null,k=c),h!==k)){if(S=Jl,y="onMouseLeave",f="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(S=eu,y="onPointerLeave",f="onPointerEnter",d="pointer"),L=h==null?g:In(h),p=k==null?g:In(k),g=new S(y,d+"leave",h,n,v),g.target=L,g.relatedTarget=p,y=null,nn(v)===c&&(S=new S(f,d+"enter",k,n,v),S.target=p,S.relatedTarget=L,y=S),L=y,h&&k)t:{for(S=h,f=k,d=0,p=S;p;p=kn(p))d++;for(p=0,y=f;y;y=kn(y))p++;for(;0<d-p;)S=kn(S),d--;for(;0<p-d;)f=kn(f),p--;for(;d--;){if(S===f||f!==null&&S===f.alternate)break t;S=kn(S),f=kn(f)}S=null}else S=null;h!==null&&du(m,g,h,S,!1),k!==null&&L!==null&&du(m,L,k,S,!0)}}e:{if(g=c?In(c):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var E=im;else if(ru(g))if(vd)E=lm;else{E=sm;var C=om}else(h=g.nodeName)&&h.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=am);if(E&&(E=E(t,c))){gd(m,E,n,v);break e}C&&C(t,g,c),t==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Rs(g,"number",g.value)}switch(C=c?In(c):window,t){case"focusin":(ru(C)||C.contentEditable==="true")&&(En=C,$s=c,Er=null);break;case"focusout":Er=$s=En=null;break;case"mousedown":Hs=!0;break;case"contextmenu":case"mouseup":case"dragend":Hs=!1,lu(m,n,v);break;case"selectionchange":if(dm)break;case"keydown":case"keyup":lu(m,n,v)}var I;if($a)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else bn?hd(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(pd&&n.locale!=="ko"&&(bn||T!=="onCompositionStart"?T==="onCompositionEnd"&&bn&&(I=fd()):(At=v,Fa="value"in At?At.value:At.textContent,bn=!0)),C=eo(c,T),0<C.length&&(T=new Zl(T,t,null,n,v),m.push({event:T,listeners:C}),I?T.data=I:(I=md(n),I!==null&&(T.data=I)))),(I=Zh?em(t,n):tm(t,n))&&(c=eo(c,"onBeforeInput"),0<c.length&&(v=new Zl("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:c}),v.data=I))}Id(m,e)})}function Wr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mr(t,n),o!=null&&r.unshift(Wr(t,o,i)),o=Mr(t,e),o!=null&&r.push(Wr(t,o,i))),t=t.return}return r}function kn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function du(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Mr(n,o),u!=null&&s.unshift(Wr(n,u,l))):i||(u=Mr(n,o),u!=null&&s.push(Wr(n,u,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var mm=/\r\n?/g,gm=/\u0000|\uFFFD/g;function fu(t){return(typeof t=="string"?t:""+t).replace(mm,`
`).replace(gm,"")}function _i(t,e,n){if(e=fu(e),fu(t)!==e&&n)throw Error(x(425))}function to(){}var Vs=null,Gs=null;function Ks(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qs=typeof setTimeout=="function"?setTimeout:void 0,vm=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,ym=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(t){return pu.resolve(null).then(t).catch(xm)}:Qs;function xm(t){setTimeout(function(){throw t})}function as(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Dr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(e)}function Dt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var nr=Math.random().toString(36).slice(2),et="__reactFiber$"+nr,Br="__reactProps$"+nr,mt="__reactContainer$"+nr,Ys="__reactEvents$"+nr,wm="__reactListeners$"+nr,km="__reactHandles$"+nr;function nn(t){var e=t[et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mt]||n[et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hu(t);t!==null;){if(n=t[et])return n;t=hu(t)}return e}t=n,n=t.parentNode}return null}function ni(t){return t=t[et]||t[mt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function In(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Ro(t){return t[Br]||null}var qs=[],Tn=-1;function Kt(t){return{current:t}}function H(t){0>Tn||(t.current=qs[Tn],qs[Tn]=null,Tn--)}function B(t,e){Tn++,qs[Tn]=t.current,t.current=e}var Vt={},de=Kt(Vt),ke=Kt(!1),cn=Vt;function Vn(t,e){var n=t.type.contextTypes;if(!n)return Vt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Se(t){return t=t.childContextTypes,t!=null}function no(){H(ke),H(de)}function mu(t,e,n){if(de.current!==Vt)throw Error(x(168));B(de,e),B(ke,n)}function Pd(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,oh(t)||"Unknown",i));return Y({},n,r)}function ro(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vt,cn=de.current,B(de,t),B(ke,ke.current),!0}function gu(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Pd(t,e,cn),r.__reactInternalMemoizedMergedChildContext=t,H(ke),H(de),B(de,t)):H(ke),B(ke,n)}var at=null,Ao=!1,ls=!1;function Nd(t){at===null?at=[t]:at.push(t)}function Sm(t){Ao=!0,Nd(t)}function Qt(){if(!ls&&at!==null){ls=!0;var t=0,e=U;try{var n=at;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}at=null,Ao=!1}catch(i){throw at!==null&&(at=at.slice(t+1)),td(Oa,Qt),i}finally{U=e,ls=!1}}return null}var Pn=[],Nn=0,io=null,oo=0,Re=[],Ae=0,dn=null,ut=1,ct="";function Zt(t,e){Pn[Nn++]=oo,Pn[Nn++]=io,io=t,oo=e}function Rd(t,e,n){Re[Ae++]=ut,Re[Ae++]=ct,Re[Ae++]=dn,dn=t;var r=ut;t=ct;var i=32-He(r)-1;r&=~(1<<i),n+=1;var o=32-He(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ut=1<<32-He(e)+i|n<<i|r,ct=o+t}else ut=1<<o|n<<i|r,ct=t}function Va(t){t.return!==null&&(Zt(t,1),Rd(t,1,0))}function Ga(t){for(;t===io;)io=Pn[--Nn],Pn[Nn]=null,oo=Pn[--Nn],Pn[Nn]=null;for(;t===dn;)dn=Re[--Ae],Re[Ae]=null,ct=Re[--Ae],Re[Ae]=null,ut=Re[--Ae],Re[Ae]=null}var Ce=null,Ee=null,G=!1,Be=null;function Ad(t,e){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ce=t,Ee=Dt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ce=t,Ee=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=dn!==null?{id:ut,overflow:ct}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ce=t,Ee=null,!0):!1;default:return!1}}function Xs(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Js(t){if(G){var e=Ee;if(e){var n=e;if(!vu(t,e)){if(Xs(t))throw Error(x(418));e=Dt(n.nextSibling);var r=Ce;e&&vu(t,e)?Ad(r,n):(t.flags=t.flags&-4097|2,G=!1,Ce=t)}}else{if(Xs(t))throw Error(x(418));t.flags=t.flags&-4097|2,G=!1,Ce=t}}}function yu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ce=t}function bi(t){if(t!==Ce)return!1;if(!G)return yu(t),G=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ks(t.type,t.memoizedProps)),e&&(e=Ee)){if(Xs(t))throw jd(),Error(x(418));for(;e;)Ad(t,e),e=Dt(e.nextSibling)}if(yu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ee=Dt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ee=null}}else Ee=Ce?Dt(t.stateNode.nextSibling):null;return!0}function jd(){for(var t=Ee;t;)t=Dt(t.nextSibling)}function Gn(){Ee=Ce=null,G=!1}function Ka(t){Be===null?Be=[t]:Be.push(t)}var _m=wt.ReactCurrentBatchConfig;function fr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Ei(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xu(t){var e=t._init;return e(t._payload)}function Md(t){function e(f,d){if(t){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!t)return null;for(;d!==null;)e(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Wt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,t?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function l(f,d,p,y){return d===null||d.tag!==6?(d=ms(p,f.mode,y),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,y){var E=p.type;return E===_n?v(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&xu(E)===d.type)?(y=i(d,p.props),y.ref=fr(f,d,p),y.return=f,y):(y=Bi(p.type,p.key,p.props,null,f.mode,y),y.ref=fr(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=gs(p,f.mode,y),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function v(f,d,p,y,E){return d===null||d.tag!==7?(d=ln(p,f.mode,y,E),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ms(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hi:return p=Bi(d.type,d.key,d.props,null,f.mode,p),p.ref=fr(f,null,d),p.return=f,p;case Sn:return d=gs(d,f.mode,p),d.return=f,d;case Et:var y=d._init;return m(f,y(d._payload),p)}if(vr(d)||ar(d))return d=ln(d,f.mode,p,null),d.return=f,d;Ei(f,d)}return null}function g(f,d,p,y){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:l(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hi:return p.key===E?u(f,d,p,y):null;case Sn:return p.key===E?c(f,d,p,y):null;case Et:return E=p._init,g(f,d,E(p._payload),y)}if(vr(p)||ar(p))return E!==null?null:v(f,d,p,y,null);Ei(f,p)}return null}function h(f,d,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,l(d,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hi:return f=f.get(y.key===null?p:y.key)||null,u(d,f,y,E);case Sn:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,E);case Et:var C=y._init;return h(f,d,p,C(y._payload),E)}if(vr(y)||ar(y))return f=f.get(p)||null,v(d,f,y,E,null);Ei(d,y)}return null}function k(f,d,p,y){for(var E=null,C=null,I=d,T=d=0,D=null;I!==null&&T<p.length;T++){I.index>T?(D=I,I=null):D=I.sibling;var A=g(f,I,p[T],y);if(A===null){I===null&&(I=D);break}t&&I&&A.alternate===null&&e(f,I),d=o(A,d,T),C===null?E=A:C.sibling=A,C=A,I=D}if(T===p.length)return n(f,I),G&&Zt(f,T),E;if(I===null){for(;T<p.length;T++)I=m(f,p[T],y),I!==null&&(d=o(I,d,T),C===null?E=I:C.sibling=I,C=I);return G&&Zt(f,T),E}for(I=r(f,I);T<p.length;T++)D=h(I,f,T,p[T],y),D!==null&&(t&&D.alternate!==null&&I.delete(D.key===null?T:D.key),d=o(D,d,T),C===null?E=D:C.sibling=D,C=D);return t&&I.forEach(function(fe){return e(f,fe)}),G&&Zt(f,T),E}function S(f,d,p,y){var E=ar(p);if(typeof E!="function")throw Error(x(150));if(p=E.call(p),p==null)throw Error(x(151));for(var C=E=null,I=d,T=d=0,D=null,A=p.next();I!==null&&!A.done;T++,A=p.next()){I.index>T?(D=I,I=null):D=I.sibling;var fe=g(f,I,A.value,y);if(fe===null){I===null&&(I=D);break}t&&I&&fe.alternate===null&&e(f,I),d=o(fe,d,T),C===null?E=fe:C.sibling=fe,C=fe,I=D}if(A.done)return n(f,I),G&&Zt(f,T),E;if(I===null){for(;!A.done;T++,A=p.next())A=m(f,A.value,y),A!==null&&(d=o(A,d,T),C===null?E=A:C.sibling=A,C=A);return G&&Zt(f,T),E}for(I=r(f,I);!A.done;T++,A=p.next())A=h(I,f,T,A.value,y),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?T:A.key),d=o(A,d,T),C===null?E=A:C.sibling=A,C=A);return t&&I.forEach(function(Qe){return e(f,Qe)}),G&&Zt(f,T),E}function L(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===_n&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hi:e:{for(var E=p.key,C=d;C!==null;){if(C.key===E){if(E=p.type,E===_n){if(C.tag===7){n(f,C.sibling),d=i(C,p.props.children),d.return=f,f=d;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Et&&xu(E)===C.type){n(f,C.sibling),d=i(C,p.props),d.ref=fr(f,C,p),d.return=f,f=d;break e}n(f,C);break}else e(f,C);C=C.sibling}p.type===_n?(d=ln(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=Bi(p.type,p.key,p.props,null,f.mode,y),y.ref=fr(f,d,p),y.return=f,f=y)}return s(f);case Sn:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else e(f,d);d=d.sibling}d=gs(p,f.mode,y),d.return=f,f=d}return s(f);case Et:return C=p._init,L(f,d,C(p._payload),y)}if(vr(p))return k(f,d,p,y);if(ar(p))return S(f,d,p,y);Ei(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=ms(p,f.mode,y),d.return=f,f=d),s(f)):n(f,d)}return L}var Kn=Md(!0),Ld=Md(!1),so=Kt(null),ao=null,Rn=null,Qa=null;function Ya(){Qa=Rn=ao=null}function qa(t){var e=so.current;H(so),t._currentValue=e}function Zs(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zn(t,e){ao=t,Qa=Rn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(we=!0),t.firstContext=null)}function Le(t){var e=t._currentValue;if(Qa!==t)if(t={context:t,memoizedValue:e,next:null},Rn===null){if(ao===null)throw Error(x(308));Rn=t,ao.dependencies={lanes:0,firstContext:t}}else Rn=Rn.next=t;return e}var rn=null;function Xa(t){rn===null?rn=[t]:rn.push(t)}function Od(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xa(e)):(n.next=i.next,i.next=n),e.interleaved=n,gt(t,r)}function gt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ct=!1;function Ja(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gt(t,n)}return i=r.interleaved,i===null?(e.next=e,Xa(r)):(e.next=i.next,i.next=e),r.interleaved=e,gt(t,n)}function Oi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Da(t,n)}}function wu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lo(t,e,n,r){var i=t.updateQueue;Ct=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==s&&(l===null?v.firstBaseUpdate=c:l.next=c,v.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,v=c=u=null,l=o;do{var g=l.lane,h=l.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,S=l;switch(g=e,h=n,S.tag){case 1:if(k=S.payload,typeof k=="function"){m=k.call(h,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,g=typeof k=="function"?k.call(h,m,g):k,g==null)break e;m=Y({},m,g);break e;case 2:Ct=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else h={eventTime:h,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(c=v=h,u=m):v=v.next=h,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(v===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=v,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);pn|=s,t.lanes=s,t.memoizedState=m}}function ku(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var ri={},rt=Kt(ri),$r=Kt(ri),Hr=Kt(ri);function on(t){if(t===ri)throw Error(x(174));return t}function Za(t,e){switch(B(Hr,e),B($r,t),B(rt,ri),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:js(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=js(e,t)}H(rt),B(rt,e)}function Qn(){H(rt),H($r),H(Hr)}function zd(t){on(Hr.current);var e=on(rt.current),n=js(e,t.type);e!==n&&(B($r,t),B(rt,n))}function el(t){$r.current===t&&(H(rt),H($r))}var K=Kt(0);function uo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var us=[];function tl(){for(var t=0;t<us.length;t++)us[t]._workInProgressVersionPrimary=null;us.length=0}var Di=wt.ReactCurrentDispatcher,cs=wt.ReactCurrentBatchConfig,fn=0,Q=null,ee=null,re=null,co=!1,Cr=!1,Vr=0,bm=0;function le(){throw Error(x(321))}function nl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ke(t[n],e[n]))return!1;return!0}function rl(t,e,n,r,i,o){if(fn=o,Q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Di.current=t===null||t.memoizedState===null?Tm:Pm,t=n(r,i),Cr){o=0;do{if(Cr=!1,Vr=0,25<=o)throw Error(x(301));o+=1,re=ee=null,e.updateQueue=null,Di.current=Nm,t=n(r,i)}while(Cr)}if(Di.current=fo,e=ee!==null&&ee.next!==null,fn=0,re=ee=Q=null,co=!1,e)throw Error(x(300));return t}function il(){var t=Vr!==0;return Vr=0,t}function Ze(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Q.memoizedState=re=t:re=re.next=t,re}function Oe(){if(ee===null){var t=Q.alternate;t=t!==null?t.memoizedState:null}else t=ee.next;var e=re===null?Q.memoizedState:re.next;if(e!==null)re=e,ee=t;else{if(t===null)throw Error(x(310));ee=t,t={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?Q.memoizedState=re=t:re=re.next=t}return re}function Gr(t,e){return typeof e=="function"?e(t):e}function ds(t){var e=Oe(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,c=o;do{var v=c.lane;if((fn&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,s=r):u=u.next=m,Q.lanes|=v,pn|=v}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=l,Ke(r,e.memoizedState)||(we=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Q.lanes|=o,pn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fs(t){var e=Oe(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Ke(o,e.memoizedState)||(we=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Ud(){}function Fd(t,e){var n=Q,r=Oe(),i=e(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,ol($d.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Kr(9,Bd.bind(null,n,r,i,e),void 0,null),ie===null)throw Error(x(349));fn&30||Wd(n,e,i)}return i}function Wd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Q.updateQueue,e===null?(e={lastEffect:null,stores:null},Q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bd(t,e,n,r){e.value=n,e.getSnapshot=r,Hd(e)&&Vd(t)}function $d(t,e,n){return n(function(){Hd(e)&&Vd(t)})}function Hd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ke(t,n)}catch{return!0}}function Vd(t){var e=gt(t,1);e!==null&&Ve(e,t,1,-1)}function Su(t){var e=Ze();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:t},e.queue=t,t=t.dispatch=Im.bind(null,Q,t),[e.memoizedState,t]}function Kr(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Q.updateQueue,e===null?(e={lastEffect:null,stores:null},Q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gd(){return Oe().memoizedState}function zi(t,e,n,r){var i=Ze();Q.flags|=t,i.memoizedState=Kr(1|e,n,void 0,r===void 0?null:r)}function jo(t,e,n,r){var i=Oe();r=r===void 0?null:r;var o=void 0;if(ee!==null){var s=ee.memoizedState;if(o=s.destroy,r!==null&&nl(r,s.deps)){i.memoizedState=Kr(e,n,o,r);return}}Q.flags|=t,i.memoizedState=Kr(1|e,n,o,r)}function _u(t,e){return zi(8390656,8,t,e)}function ol(t,e){return jo(2048,8,t,e)}function Kd(t,e){return jo(4,2,t,e)}function Qd(t,e){return jo(4,4,t,e)}function Yd(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qd(t,e,n){return n=n!=null?n.concat([t]):null,jo(4,4,Yd.bind(null,e,t),n)}function sl(){}function Xd(t,e){var n=Oe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jd(t,e){var n=Oe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zd(t,e,n){return fn&21?(Ke(n,e)||(n=id(),Q.lanes|=n,pn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,we=!0),t.memoizedState=n)}function Em(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=cs.transition;cs.transition={};try{t(!1),e()}finally{U=n,cs.transition=r}}function ef(){return Oe().memoizedState}function Cm(t,e,n){var r=Ft(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tf(t))nf(e,n);else if(n=Od(t,e,n,r),n!==null){var i=me();Ve(n,t,r,i),rf(n,e,r)}}function Im(t,e,n){var r=Ft(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tf(t))nf(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ke(l,s)){var u=e.interleaved;u===null?(i.next=i,Xa(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Od(t,e,i,r),n!==null&&(i=me(),Ve(n,t,r,i),rf(n,e,r))}}function tf(t){var e=t.alternate;return t===Q||e!==null&&e===Q}function nf(t,e){Cr=co=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rf(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Da(t,n)}}var fo={readContext:Le,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Tm={readContext:Le,useCallback:function(t,e){return Ze().memoizedState=[t,e===void 0?null:e],t},useContext:Le,useEffect:_u,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zi(4194308,4,Yd.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zi(4194308,4,t,e)},useInsertionEffect:function(t,e){return zi(4,2,t,e)},useMemo:function(t,e){var n=Ze();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ze();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Cm.bind(null,Q,t),[r.memoizedState,t]},useRef:function(t){var e=Ze();return t={current:t},e.memoizedState=t},useState:Su,useDebugValue:sl,useDeferredValue:function(t){return Ze().memoizedState=t},useTransition:function(){var t=Su(!1),e=t[0];return t=Em.bind(null,t[1]),Ze().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Q,i=Ze();if(G){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),ie===null)throw Error(x(349));fn&30||Wd(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,_u($d.bind(null,r,o,t),[t]),r.flags|=2048,Kr(9,Bd.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Ze(),e=ie.identifierPrefix;if(G){var n=ct,r=ut;n=(r&~(1<<32-He(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vr++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bm++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Pm={readContext:Le,useCallback:Xd,useContext:Le,useEffect:ol,useImperativeHandle:qd,useInsertionEffect:Kd,useLayoutEffect:Qd,useMemo:Jd,useReducer:ds,useRef:Gd,useState:function(){return ds(Gr)},useDebugValue:sl,useDeferredValue:function(t){var e=Oe();return Zd(e,ee.memoizedState,t)},useTransition:function(){var t=ds(Gr)[0],e=Oe().memoizedState;return[t,e]},useMutableSource:Ud,useSyncExternalStore:Fd,useId:ef,unstable_isNewReconciler:!1},Nm={readContext:Le,useCallback:Xd,useContext:Le,useEffect:ol,useImperativeHandle:qd,useInsertionEffect:Kd,useLayoutEffect:Qd,useMemo:Jd,useReducer:fs,useRef:Gd,useState:function(){return fs(Gr)},useDebugValue:sl,useDeferredValue:function(t){var e=Oe();return ee===null?e.memoizedState=t:Zd(e,ee.memoizedState,t)},useTransition:function(){var t=fs(Gr)[0],e=Oe().memoizedState;return[t,e]},useMutableSource:Ud,useSyncExternalStore:Fd,useId:ef,unstable_isNewReconciler:!1};function Fe(t,e){if(t&&t.defaultProps){e=Y({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ea(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Y({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mo={isMounted:function(t){return(t=t._reactInternals)?vn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=me(),i=Ft(t),o=pt(r,i);o.payload=e,n!=null&&(o.callback=n),e=zt(t,o,i),e!==null&&(Ve(e,t,i,r),Oi(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=me(),i=Ft(t),o=pt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=zt(t,o,i),e!==null&&(Ve(e,t,i,r),Oi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=me(),r=Ft(t),i=pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=zt(t,i,r),e!==null&&(Ve(e,t,r,n),Oi(e,t,r))}};function bu(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,o):!0}function of(t,e,n){var r=!1,i=Vt,o=e.contextType;return typeof o=="object"&&o!==null?o=Le(o):(i=Se(e)?cn:de.current,r=e.contextTypes,o=(r=r!=null)?Vn(t,i):Vt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Eu(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mo.enqueueReplaceState(e,e.state,null)}function ta(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ja(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Le(o):(o=Se(e)?cn:de.current,i.context=Vn(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(ea(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mo.enqueueReplaceState(i,i.state,null),lo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Yn(t,e){try{var n="",r=e;do n+=ih(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function ps(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function na(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rm=typeof WeakMap=="function"?WeakMap:Map;function sf(t,e,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ho||(ho=!0,fa=r),na(t,e)},n}function af(t,e,n){n=pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){na(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){na(t,e),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Cu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rm;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Vm.bind(null,t,e,n),e.then(t,t))}function Iu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tu(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pt(-1,1),e.tag=2,zt(n,e,1))),n.lanes|=1),t)}var Am=wt.ReactCurrentOwner,we=!1;function he(t,e,n,r){e.child=t===null?Ld(e,null,n,r):Kn(e,t.child,n,r)}function Pu(t,e,n,r,i){n=n.render;var o=e.ref;return zn(e,i),r=rl(t,e,n,r,o,i),n=il(),t!==null&&!we?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vt(t,e,i)):(G&&n&&Va(e),e.flags|=1,he(t,e,r,i),e.child)}function Nu(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!hl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,lf(t,e,o,r,i)):(t=Bi(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(s,r)&&t.ref===e.ref)return vt(t,e,i)}return e.flags|=1,t=Wt(o,r),t.ref=e.ref,t.return=e,e.child=t}function lf(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ur(o,r)&&t.ref===e.ref)if(we=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(we=!0);else return e.lanes=t.lanes,vt(t,e,i)}return ra(t,e,n,r,i)}function uf(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(jn,be),be|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,B(jn,be),be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(jn,be),be|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,B(jn,be),be|=r;return he(t,e,i,n),e.child}function cf(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ra(t,e,n,r,i){var o=Se(n)?cn:de.current;return o=Vn(e,o),zn(e,i),n=rl(t,e,n,r,o,i),r=il(),t!==null&&!we?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vt(t,e,i)):(G&&r&&Va(e),e.flags|=1,he(t,e,n,i),e.child)}function Ru(t,e,n,r,i){if(Se(n)){var o=!0;ro(e)}else o=!1;if(zn(e,i),e.stateNode===null)Ui(t,e),of(e,n,r),ta(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Le(c):(c=Se(n)?cn:de.current,c=Vn(e,c));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Eu(e,s,r,c),Ct=!1;var g=e.memoizedState;s.state=g,lo(e,r,s,i),u=e.memoizedState,l!==r||g!==u||ke.current||Ct?(typeof v=="function"&&(ea(e,n,v,r),u=e.memoizedState),(l=Ct||bu(e,n,l,r,g,u,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Dd(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Fe(e.type,l),s.props=c,m=e.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=Se(n)?cn:de.current,u=Vn(e,u));var h=n.getDerivedStateFromProps;(v=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Eu(e,s,r,u),Ct=!1,g=e.memoizedState,s.state=g,lo(e,r,s,i);var k=e.memoizedState;l!==m||g!==k||ke.current||Ct?(typeof h=="function"&&(ea(e,n,h,r),k=e.memoizedState),(c=Ct||bu(e,n,c,r,g,k,u)||!1)?(v||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,k,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,k,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),s.props=r,s.state=k,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ia(t,e,n,r,o,i)}function ia(t,e,n,r,i,o){cf(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&gu(e,n,!1),vt(t,e,o);r=e.stateNode,Am.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Kn(e,t.child,null,o),e.child=Kn(e,null,l,o)):he(t,e,l,o),e.memoizedState=r.state,i&&gu(e,n,!0),e.child}function df(t){var e=t.stateNode;e.pendingContext?mu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mu(t,e.context,!1),Za(t,e.containerInfo)}function Au(t,e,n,r,i){return Gn(),Ka(i),e.flags|=256,he(t,e,n,r),e.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function sa(t){return{baseLanes:t,cachePool:null,transitions:null}}function ff(t,e,n){var r=e.pendingProps,i=K.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),B(K,i&1),t===null)return Js(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Do(s,r,0,null),t=ln(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=sa(n),e.memoizedState=oa,t):al(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jm(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Wt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Wt(l,o):(o=ln(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?sa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=oa,r}return o=t.child,t=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function al(t,e){return e=Do({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ci(t,e,n,r){return r!==null&&Ka(r),Kn(e,t.child,null,n),t=al(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jm(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=ps(Error(x(422))),Ci(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Do({mode:"visible",children:r.children},i,0,null),o=ln(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Kn(e,t.child,null,s),e.child.memoizedState=sa(s),e.memoizedState=oa,o);if(!(e.mode&1))return Ci(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(x(419)),r=ps(o,r,void 0),Ci(t,e,s,r)}if(l=(s&t.childLanes)!==0,we||l){if(r=ie,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gt(t,i),Ve(r,t,i,-1))}return pl(),r=ps(Error(x(421))),Ci(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Gm.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ee=Dt(i.nextSibling),Ce=e,G=!0,Be=null,t!==null&&(Re[Ae++]=ut,Re[Ae++]=ct,Re[Ae++]=dn,ut=t.id,ct=t.overflow,dn=e),e=al(e,r.children),e.flags|=4096,e)}function ju(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zs(t.return,e,n)}function hs(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function pf(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(he(t,e,r.children,n),r=K.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ju(t,n,e);else if(t.tag===19)ju(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(B(K,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hs(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hs(e,!0,n,null,o);break;case"together":hs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ui(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Wt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mm(t,e,n){switch(e.tag){case 3:df(e),Gn();break;case 5:zd(e);break;case 1:Se(e.type)&&ro(e);break;case 4:Za(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;B(so,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),e.flags|=128,null):n&e.child.childLanes?ff(t,e,n):(B(K,K.current&1),t=vt(t,e,n),t!==null?t.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return pf(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return e.lanes=0,uf(t,e,n)}return vt(t,e,n)}var hf,aa,mf,gf;hf=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};aa=function(){};mf=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,on(rt.current);var o=null;switch(n){case"input":i=Ps(t,i),r=Ps(t,r),o=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":i=As(t,i),r=As(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=to)}Ms(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ar.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&$("scroll",t),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};gf=function(t,e,n,r){n!==r&&(e.flags|=4)};function pr(t,e){if(!G)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ue(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lm(t,e,n){var r=e.pendingProps;switch(Ga(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(e),null;case 1:return Se(e.type)&&no(),ue(e),null;case 3:return r=e.stateNode,Qn(),H(ke),H(de),tl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Be!==null&&(ma(Be),Be=null))),aa(t,e),ue(e),null;case 5:el(e);var i=on(Hr.current);if(n=e.type,t!==null&&e.stateNode!=null)mf(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ue(e),null}if(t=on(rt.current),bi(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[et]=e,r[Br]=o,t=(e.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<xr.length;i++)$(xr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Bl(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Hl(r,o),$("invalid",r)}Ms(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&_i(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&_i(r.textContent,l,t),i=["children",""+l]):Ar.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":mi(r),$l(r,o,!0);break;case"textarea":mi(r),Vl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=to)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$c(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[et]=e,t[Br]=r,hf(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ls(n,r),n){case"dialog":$("cancel",t),$("close",t),i=r;break;case"iframe":case"object":case"embed":$("load",t),i=r;break;case"video":case"audio":for(i=0;i<xr.length;i++)$(xr[i],t);i=r;break;case"source":$("error",t),i=r;break;case"img":case"image":case"link":$("error",t),$("load",t),i=r;break;case"details":$("toggle",t),i=r;break;case"input":Bl(t,r),i=Ps(t,r),$("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),$("invalid",t);break;case"textarea":Hl(t,r),i=As(t,r),$("invalid",t);break;default:i=r}Ms(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?Gc(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hc(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jr(t,u):typeof u=="number"&&jr(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ar.hasOwnProperty(o)?u!=null&&o==="onScroll"&&$("scroll",t):u!=null&&Ra(t,o,u,s))}switch(n){case"input":mi(t),$l(t,r,!1);break;case"textarea":mi(t),Vl(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ht(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Mn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Mn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ue(e),null;case 6:if(t&&e.stateNode!=null)gf(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=on(Hr.current),on(rt.current),bi(e)){if(r=e.stateNode,n=e.memoizedProps,r[et]=e,(o=r.nodeValue!==n)&&(t=Ce,t!==null))switch(t.tag){case 3:_i(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_i(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=e,e.stateNode=r}return ue(e),null;case 13:if(H(K),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(G&&Ee!==null&&e.mode&1&&!(e.flags&128))jd(),Gn(),e.flags|=98560,o=!1;else if(o=bi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(x(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[et]=e}else Gn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ue(e),o=!1}else Be!==null&&(ma(Be),Be=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||K.current&1?te===0&&(te=3):pl())),e.updateQueue!==null&&(e.flags|=4),ue(e),null);case 4:return Qn(),aa(t,e),t===null&&Fr(e.stateNode.containerInfo),ue(e),null;case 10:return qa(e.type._context),ue(e),null;case 17:return Se(e.type)&&no(),ue(e),null;case 19:if(H(K),o=e.memoizedState,o===null)return ue(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)pr(o,!1);else{if(te!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=uo(t),s!==null){for(e.flags|=128,pr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return B(K,K.current&1|2),e.child}t=t.sibling}o.tail!==null&&J()>qn&&(e.flags|=128,r=!0,pr(o,!1),e.lanes=4194304)}else{if(!r)if(t=uo(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!G)return ue(e),null}else 2*J()-o.renderingStartTime>qn&&n!==1073741824&&(e.flags|=128,r=!0,pr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=J(),e.sibling=null,n=K.current,B(K,r?n&1|2:n&1),e):(ue(e),null);case 22:case 23:return fl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?be&1073741824&&(ue(e),e.subtreeFlags&6&&(e.flags|=8192)):ue(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function Om(t,e){switch(Ga(e),e.tag){case 1:return Se(e.type)&&no(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qn(),H(ke),H(de),tl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return el(e),null;case 13:if(H(K),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Gn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(K),null;case 4:return Qn(),null;case 10:return qa(e.type._context),null;case 22:case 23:return fl(),null;case 24:return null;default:return null}}var Ii=!1,ce=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,b=null;function An(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(t,e,r)}else n.current=null}function la(t,e,n){try{n()}catch(r){q(t,e,r)}}var Mu=!1;function zm(t,e){if(Vs=Ji,t=wd(),Ha(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,v=0,m=t,g=null;t:for(;;){for(var h;m!==n||i!==0&&m.nodeType!==3||(l=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(h=m.firstChild)!==null;)g=m,m=h;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=s),g===o&&++v===r&&(u=s),(h=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=h}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gs={focusedElem:t,selectionRange:n},Ji=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,L=k.memoizedState,f=e.stateNode,d=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:Fe(e.type,S),L);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){q(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return k=Mu,Mu=!1,k}function Ir(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&la(e,n,o)}i=i.next}while(i!==r)}}function Lo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ua(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vf(t){var e=t.alternate;e!==null&&(t.alternate=null,vf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[et],delete e[Br],delete e[Ys],delete e[wm],delete e[km])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yf(t){return t.tag===5||t.tag===3||t.tag===4}function Lu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ca(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=to));else if(r!==4&&(t=t.child,t!==null))for(ca(t,e,n),t=t.sibling;t!==null;)ca(t,e,n),t=t.sibling}function da(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(da(t,e,n),t=t.sibling;t!==null;)da(t,e,n),t=t.sibling}var oe=null,We=!1;function St(t,e,n){for(n=n.child;n!==null;)xf(t,e,n),n=n.sibling}function xf(t,e,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:ce||An(n,e);case 6:var r=oe,i=We;oe=null,St(t,e,n),oe=r,We=i,oe!==null&&(We?(t=oe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(We?(t=oe,n=n.stateNode,t.nodeType===8?as(t.parentNode,n):t.nodeType===1&&as(t,n),Dr(t)):as(oe,n.stateNode));break;case 4:r=oe,i=We,oe=n.stateNode.containerInfo,We=!0,St(t,e,n),oe=r,We=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&la(n,e,s),i=i.next}while(i!==r)}St(t,e,n);break;case 1:if(!ce&&(An(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){q(n,e,l)}St(t,e,n);break;case 21:St(t,e,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,St(t,e,n),ce=r):St(t,e,n);break;default:St(t,e,n)}}function Ou(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dm),e.forEach(function(r){var i=Km.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,We=!1;break e;case 3:oe=l.stateNode.containerInfo,We=!0;break e;case 4:oe=l.stateNode.containerInfo,We=!0;break e}l=l.return}if(oe===null)throw Error(x(160));xf(o,s,i),oe=null,We=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){q(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wf(e,t),e=e.sibling}function wf(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ze(e,t),Je(t),r&4){try{Ir(3,t,t.return),Lo(3,t)}catch(S){q(t,t.return,S)}try{Ir(5,t,t.return)}catch(S){q(t,t.return,S)}}break;case 1:ze(e,t),Je(t),r&512&&n!==null&&An(n,n.return);break;case 5:if(ze(e,t),Je(t),r&512&&n!==null&&An(n,n.return),t.flags&32){var i=t.stateNode;try{jr(i,"")}catch(S){q(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Wc(i,o),Ls(l,s);var c=Ls(l,o);for(s=0;s<u.length;s+=2){var v=u[s],m=u[s+1];v==="style"?Gc(i,m):v==="dangerouslySetInnerHTML"?Hc(i,m):v==="children"?jr(i,m):Ra(i,v,m,c)}switch(l){case"input":Ns(i,o);break;case"textarea":Bc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Mn(i,!!o.multiple,h,!1):g!==!!o.multiple&&(o.defaultValue!=null?Mn(i,!!o.multiple,o.defaultValue,!0):Mn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Br]=o}catch(S){q(t,t.return,S)}}break;case 6:if(ze(e,t),Je(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(S){q(t,t.return,S)}}break;case 3:if(ze(e,t),Je(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(e.containerInfo)}catch(S){q(t,t.return,S)}break;case 4:ze(e,t),Je(t);break;case 13:ze(e,t),Je(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(cl=J())),r&4&&Ou(t);break;case 22:if(v=n!==null&&n.memoizedState!==null,t.mode&1?(ce=(c=ce)||v,ze(e,t),ce=c):ze(e,t),Je(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!v&&t.mode&1)for(b=t,v=t.child;v!==null;){for(m=b=v;b!==null;){switch(g=b,h=g.child,g.tag){case 0:case 11:case 14:case 15:Ir(4,g,g.return);break;case 1:An(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(S){q(r,n,S)}}break;case 5:An(g,g.return);break;case 22:if(g.memoizedState!==null){zu(m);continue}}h!==null?(h.return=g,b=h):zu(m)}v=v.sibling}e:for(v=null,m=t;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Vc("display",s))}catch(S){q(t,t.return,S)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(S){q(t,t.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ze(e,t),Je(t),r&4&&Ou(t);break;case 21:break;default:ze(e,t),Je(t)}}function Je(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yf(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jr(i,""),r.flags&=-33);var o=Lu(t);da(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Lu(t);ca(t,l,s);break;default:throw Error(x(161))}}catch(u){q(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Um(t,e,n){b=t,kf(t)}function kf(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ii;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ce;l=Ii;var c=ce;if(Ii=s,(ce=u)&&!c)for(b=i;b!==null;)s=b,u=s.child,s.tag===22&&s.memoizedState!==null?Uu(i):u!==null?(u.return=s,b=u):Uu(i);for(;o!==null;)b=o,kf(o),o=o.sibling;b=i,Ii=l,ce=c}Du(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,b=o):Du(t)}}function Du(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ce||Lo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Fe(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&ku(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ku(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Dr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ce||e.flags&512&&ua(e)}catch(g){q(e,e.return,g)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function zu(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Uu(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lo(4,e)}catch(u){q(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){q(e,i,u)}}var o=e.return;try{ua(e)}catch(u){q(e,o,u)}break;case 5:var s=e.return;try{ua(e)}catch(u){q(e,s,u)}}}catch(u){q(e,e.return,u)}if(e===t){b=null;break}var l=e.sibling;if(l!==null){l.return=e.return,b=l;break}b=e.return}}var Fm=Math.ceil,po=wt.ReactCurrentDispatcher,ll=wt.ReactCurrentOwner,Me=wt.ReactCurrentBatchConfig,M=0,ie=null,Z=null,se=0,be=0,jn=Kt(0),te=0,Qr=null,pn=0,Oo=0,ul=0,Tr=null,xe=null,cl=0,qn=1/0,st=null,ho=!1,fa=null,Ut=null,Ti=!1,jt=null,mo=0,Pr=0,pa=null,Fi=-1,Wi=0;function me(){return M&6?J():Fi!==-1?Fi:Fi=J()}function Ft(t){return t.mode&1?M&2&&se!==0?se&-se:_m.transition!==null?(Wi===0&&(Wi=id()),Wi):(t=U,t!==0||(t=window.event,t=t===void 0?16:dd(t.type)),t):1}function Ve(t,e,n,r){if(50<Pr)throw Pr=0,pa=null,Error(x(185));ei(t,n,r),(!(M&2)||t!==ie)&&(t===ie&&(!(M&2)&&(Oo|=n),te===4&&Tt(t,se)),_e(t,r),n===1&&M===0&&!(e.mode&1)&&(qn=J()+500,Ao&&Qt()))}function _e(t,e){var n=t.callbackNode;_h(t,e);var r=Xi(t,t===ie?se:0);if(r===0)n!==null&&Ql(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ql(n),e===1)t.tag===0?Sm(Fu.bind(null,t)):Nd(Fu.bind(null,t)),ym(function(){!(M&6)&&Qt()}),n=null;else{switch(od(r)){case 1:n=Oa;break;case 4:n=nd;break;case 16:n=qi;break;case 536870912:n=rd;break;default:n=qi}n=Pf(n,Sf.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sf(t,e){if(Fi=-1,Wi=0,M&6)throw Error(x(327));var n=t.callbackNode;if(Un()&&t.callbackNode!==n)return null;var r=Xi(t,t===ie?se:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=go(t,r);else{e=r;var i=M;M|=2;var o=bf();(ie!==t||se!==e)&&(st=null,qn=J()+500,an(t,e));do try{$m();break}catch(l){_f(t,l)}while(!0);Ya(),po.current=o,M=i,Z!==null?e=0:(ie=null,se=0,e=te)}if(e!==0){if(e===2&&(i=Fs(t),i!==0&&(r=i,e=ha(t,i))),e===1)throw n=Qr,an(t,0),Tt(t,r),_e(t,J()),n;if(e===6)Tt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Wm(i)&&(e=go(t,r),e===2&&(o=Fs(t),o!==0&&(r=o,e=ha(t,o))),e===1))throw n=Qr,an(t,0),Tt(t,r),_e(t,J()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:en(t,xe,st);break;case 3:if(Tt(t,r),(r&130023424)===r&&(e=cl+500-J(),10<e)){if(Xi(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){me(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qs(en.bind(null,t,xe,st),e);break}en(t,xe,st);break;case 4:if(Tt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-He(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fm(r/1960))-r,10<r){t.timeoutHandle=Qs(en.bind(null,t,xe,st),r);break}en(t,xe,st);break;case 5:en(t,xe,st);break;default:throw Error(x(329))}}}return _e(t,J()),t.callbackNode===n?Sf.bind(null,t):null}function ha(t,e){var n=Tr;return t.current.memoizedState.isDehydrated&&(an(t,e).flags|=256),t=go(t,e),t!==2&&(e=xe,xe=n,e!==null&&ma(e)),t}function ma(t){xe===null?xe=t:xe.push.apply(xe,t)}function Wm(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tt(t,e){for(e&=~ul,e&=~Oo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-He(e),r=1<<n;t[n]=-1,e&=~r}}function Fu(t){if(M&6)throw Error(x(327));Un();var e=Xi(t,0);if(!(e&1))return _e(t,J()),null;var n=go(t,e);if(t.tag!==0&&n===2){var r=Fs(t);r!==0&&(e=r,n=ha(t,r))}if(n===1)throw n=Qr,an(t,0),Tt(t,e),_e(t,J()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,en(t,xe,st),_e(t,J()),null}function dl(t,e){var n=M;M|=1;try{return t(e)}finally{M=n,M===0&&(qn=J()+500,Ao&&Qt())}}function hn(t){jt!==null&&jt.tag===0&&!(M&6)&&Un();var e=M;M|=1;var n=Me.transition,r=U;try{if(Me.transition=null,U=1,t)return t()}finally{U=r,Me.transition=n,M=e,!(M&6)&&Qt()}}function fl(){be=jn.current,H(jn)}function an(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vm(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Ga(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:Qn(),H(ke),H(de),tl();break;case 5:el(r);break;case 4:Qn();break;case 13:H(K);break;case 19:H(K);break;case 10:qa(r.type._context);break;case 22:case 23:fl()}n=n.return}if(ie=t,Z=t=Wt(t.current,null),se=be=e,te=0,Qr=null,ul=Oo=pn=0,xe=Tr=null,rn!==null){for(e=0;e<rn.length;e++)if(n=rn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}rn=null}return t}function _f(t,e){do{var n=Z;try{if(Ya(),Di.current=fo,co){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}co=!1}if(fn=0,re=ee=Q=null,Cr=!1,Vr=0,ll.current=null,n===null||n.return===null){te=1,Qr=e,Z=null;break}e:{var o=t,s=n.return,l=n,u=e;if(e=se,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=l,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var h=Iu(s);if(h!==null){h.flags&=-257,Tu(h,s,l,o,e),h.mode&1&&Cu(o,c,e),e=h,u=c;var k=e.updateQueue;if(k===null){var S=new Set;S.add(u),e.updateQueue=S}else k.add(u);break e}else{if(!(e&1)){Cu(o,c,e),pl();break e}u=Error(x(426))}}else if(G&&l.mode&1){var L=Iu(s);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Tu(L,s,l,o,e),Ka(Yn(u,l));break e}}o=u=Yn(u,l),te!==4&&(te=2),Tr===null?Tr=[o]:Tr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=sf(o,u,e);wu(o,f);break e;case 1:l=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ut===null||!Ut.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=af(o,l,e);wu(o,y);break e}}o=o.return}while(o!==null)}Cf(n)}catch(E){e=E,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function bf(){var t=po.current;return po.current=fo,t===null?fo:t}function pl(){(te===0||te===3||te===2)&&(te=4),ie===null||!(pn&268435455)&&!(Oo&268435455)||Tt(ie,se)}function go(t,e){var n=M;M|=2;var r=bf();(ie!==t||se!==e)&&(st=null,an(t,e));do try{Bm();break}catch(i){_f(t,i)}while(!0);if(Ya(),M=n,po.current=r,Z!==null)throw Error(x(261));return ie=null,se=0,te}function Bm(){for(;Z!==null;)Ef(Z)}function $m(){for(;Z!==null&&!hh();)Ef(Z)}function Ef(t){var e=Tf(t.alternate,t,be);t.memoizedProps=t.pendingProps,e===null?Cf(t):Z=e,ll.current=null}function Cf(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Om(n,e),n!==null){n.flags&=32767,Z=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{te=6,Z=null;return}}else if(n=Lm(n,e,be),n!==null){Z=n;return}if(e=e.sibling,e!==null){Z=e;return}Z=e=t}while(e!==null);te===0&&(te=5)}function en(t,e,n){var r=U,i=Me.transition;try{Me.transition=null,U=1,Hm(t,e,n,r)}finally{Me.transition=i,U=r}return null}function Hm(t,e,n,r){do Un();while(jt!==null);if(M&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(bh(t,o),t===ie&&(Z=ie=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ti||(Ti=!0,Pf(qi,function(){return Un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var s=U;U=1;var l=M;M|=4,ll.current=null,zm(t,n),wf(n,t),cm(Gs),Ji=!!Vs,Gs=Vs=null,t.current=n,Um(n),mh(),M=l,U=s,Me.transition=o}else t.current=n;if(Ti&&(Ti=!1,jt=t,mo=i),o=t.pendingLanes,o===0&&(Ut=null),yh(n.stateNode),_e(t,J()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ho)throw ho=!1,t=fa,fa=null,t;return mo&1&&t.tag!==0&&Un(),o=t.pendingLanes,o&1?t===pa?Pr++:(Pr=0,pa=t):Pr=0,Qt(),null}function Un(){if(jt!==null){var t=od(mo),e=Me.transition,n=U;try{if(Me.transition=null,U=16>t?16:t,jt===null)var r=!1;else{if(t=jt,jt=null,mo=0,M&6)throw Error(x(331));var i=M;for(M|=4,b=t.current;b!==null;){var o=b,s=o.child;if(b.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(b=c;b!==null;){var v=b;switch(v.tag){case 0:case 11:case 15:Ir(8,v,o)}var m=v.child;if(m!==null)m.return=v,b=m;else for(;b!==null;){v=b;var g=v.sibling,h=v.return;if(vf(v),v===c){b=null;break}if(g!==null){g.return=h,b=g;break}b=h}}}var k=o.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var L=S.sibling;S.sibling=null,S=L}while(S!==null)}}b=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,b=s;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ir(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,b=f;break e}b=o.return}}var d=t.current;for(b=d;b!==null;){s=b;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,b=p;else e:for(s=d;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Lo(9,l)}}catch(E){q(l,l.return,E)}if(l===s){b=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,b=y;break e}b=l.return}}if(M=i,Qt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Io,t)}catch{}r=!0}return r}finally{U=n,Me.transition=e}}return!1}function Wu(t,e,n){e=Yn(n,e),e=sf(t,e,1),t=zt(t,e,1),e=me(),t!==null&&(ei(t,1,e),_e(t,e))}function q(t,e,n){if(t.tag===3)Wu(t,t,n);else for(;e!==null;){if(e.tag===3){Wu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){t=Yn(n,t),t=af(e,t,1),e=zt(e,t,1),t=me(),e!==null&&(ei(e,1,t),_e(e,t));break}}e=e.return}}function Vm(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=me(),t.pingedLanes|=t.suspendedLanes&n,ie===t&&(se&n)===n&&(te===4||te===3&&(se&130023424)===se&&500>J()-cl?an(t,0):ul|=n),_e(t,e)}function If(t,e){e===0&&(t.mode&1?(e=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):e=1);var n=me();t=gt(t,e),t!==null&&(ei(t,e,n),_e(t,n))}function Gm(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),If(t,n)}function Km(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),If(t,n)}var Tf;Tf=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ke.current)we=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return we=!1,Mm(t,e,n);we=!!(t.flags&131072)}else we=!1,G&&e.flags&1048576&&Rd(e,oo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ui(t,e),t=e.pendingProps;var i=Vn(e,de.current);zn(e,n),i=rl(null,e,r,t,i,n);var o=il();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Se(r)?(o=!0,ro(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ja(e),i.updater=Mo,e.stateNode=i,i._reactInternals=e,ta(e,r,t,n),e=ia(null,e,r,!0,o,n)):(e.tag=0,G&&o&&Va(e),he(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ui(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ym(r),t=Fe(r,t),i){case 0:e=ra(null,e,r,t,n);break e;case 1:e=Ru(null,e,r,t,n);break e;case 11:e=Pu(null,e,r,t,n);break e;case 14:e=Nu(null,e,r,Fe(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fe(r,i),ra(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fe(r,i),Ru(t,e,r,i,n);case 3:e:{if(df(e),t===null)throw Error(x(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Dd(t,e),lo(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Yn(Error(x(423)),e),e=Au(t,e,r,n,i);break e}else if(r!==i){i=Yn(Error(x(424)),e),e=Au(t,e,r,n,i);break e}else for(Ee=Dt(e.stateNode.containerInfo.firstChild),Ce=e,G=!0,Be=null,n=Ld(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===i){e=vt(t,e,n);break e}he(t,e,r,n)}e=e.child}return e;case 5:return zd(e),t===null&&Js(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Ks(r,i)?s=null:o!==null&&Ks(r,o)&&(e.flags|=32),cf(t,e),he(t,e,s,n),e.child;case 6:return t===null&&Js(e),null;case 13:return ff(t,e,n);case 4:return Za(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Kn(e,null,r,n):he(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fe(r,i),Pu(t,e,r,i,n);case 7:return he(t,e,e.pendingProps,n),e.child;case 8:return he(t,e,e.pendingProps.children,n),e.child;case 12:return he(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,B(so,r._currentValue),r._currentValue=s,o!==null)if(Ke(o.value,s)){if(o.children===i.children&&!ke.current){e=vt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=pt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Zs(o.return,n,e),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(x(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zs(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}he(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zn(e,n),i=Le(i),r=r(i),e.flags|=1,he(t,e,r,n),e.child;case 14:return r=e.type,i=Fe(r,e.pendingProps),i=Fe(r.type,i),Nu(t,e,r,i,n);case 15:return lf(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fe(r,i),Ui(t,e),e.tag=1,Se(r)?(t=!0,ro(e)):t=!1,zn(e,n),of(e,r,i),ta(e,r,i,n),ia(null,e,r,!0,t,n);case 19:return pf(t,e,n);case 22:return uf(t,e,n)}throw Error(x(156,e.tag))};function Pf(t,e){return td(t,e)}function Qm(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(t,e,n,r){return new Qm(t,e,n,r)}function hl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ym(t){if(typeof t=="function")return hl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ja)return 11;if(t===Ma)return 14}return 2}function Wt(t,e){var n=t.alternate;return n===null?(n=je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bi(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")hl(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case _n:return ln(n.children,i,o,e);case Aa:s=8,i|=8;break;case Es:return t=je(12,n,e,i|2),t.elementType=Es,t.lanes=o,t;case Cs:return t=je(13,n,e,i),t.elementType=Cs,t.lanes=o,t;case Is:return t=je(19,n,e,i),t.elementType=Is,t.lanes=o,t;case zc:return Do(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Oc:s=10;break e;case Dc:s=9;break e;case ja:s=11;break e;case Ma:s=14;break e;case Et:s=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=je(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ln(t,e,n,r){return t=je(7,t,r,e),t.lanes=n,t}function Do(t,e,n,r){return t=je(22,t,r,e),t.elementType=zc,t.lanes=n,t.stateNode={isHidden:!1},t}function ms(t,e,n){return t=je(6,t,null,e),t.lanes=n,t}function gs(t,e,n){return e=je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qm(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ml(t,e,n,r,i,o,s,l,u){return t=new qm(t,e,n,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=je(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ja(o),t}function Xm(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Nf(t){if(!t)return Vt;t=t._reactInternals;e:{if(vn(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Se(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Se(n))return Pd(t,n,e)}return e}function Rf(t,e,n,r,i,o,s,l,u){return t=ml(n,r,!0,t,i,o,s,l,u),t.context=Nf(null),n=t.current,r=me(),i=Ft(n),o=pt(r,i),o.callback=e??null,zt(n,o,i),t.current.lanes=i,ei(t,i,r),_e(t,r),t}function zo(t,e,n,r){var i=e.current,o=me(),s=Ft(i);return n=Nf(n),e.context===null?e.context=n:e.pendingContext=n,e=pt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zt(i,e,s),t!==null&&(Ve(t,i,s,o),Oi(t,i,s)),s}function vo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gl(t,e){Bu(t,e),(t=t.alternate)&&Bu(t,e)}function Jm(){return null}var Af=typeof reportError=="function"?reportError:function(t){console.error(t)};function vl(t){this._internalRoot=t}Uo.prototype.render=vl.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));zo(t,e,null,null)};Uo.prototype.unmount=vl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hn(function(){zo(null,t,null,null)}),e[mt]=null}};function Uo(t){this._internalRoot=t}Uo.prototype.unstable_scheduleHydration=function(t){if(t){var e=ld();t={blockedOn:null,target:t,priority:e};for(var n=0;n<It.length&&e!==0&&e<It[n].priority;n++);It.splice(n,0,t),n===0&&cd(t)}};function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $u(){}function Zm(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=vo(s);o.call(c)}}var s=Rf(e,r,t,0,null,!1,!1,"",$u);return t._reactRootContainer=s,t[mt]=s.current,Fr(t.nodeType===8?t.parentNode:t),hn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=vo(u);l.call(c)}}var u=ml(t,0,!1,null,null,!1,!1,"",$u);return t._reactRootContainer=u,t[mt]=u.current,Fr(t.nodeType===8?t.parentNode:t),hn(function(){zo(e,u,n,r)}),u}function Wo(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=vo(s);l.call(u)}}zo(e,s,t,i)}else s=Zm(n,e,t,i,r);return vo(s)}sd=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yr(e.pendingLanes);n!==0&&(Da(e,n|1),_e(e,J()),!(M&6)&&(qn=J()+500,Qt()))}break;case 13:hn(function(){var r=gt(t,1);if(r!==null){var i=me();Ve(r,t,1,i)}}),gl(t,1)}};za=function(t){if(t.tag===13){var e=gt(t,134217728);if(e!==null){var n=me();Ve(e,t,134217728,n)}gl(t,134217728)}};ad=function(t){if(t.tag===13){var e=Ft(t),n=gt(t,e);if(n!==null){var r=me();Ve(n,t,e,r)}gl(t,e)}};ld=function(){return U};ud=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};Ds=function(t,e,n){switch(e){case"input":if(Ns(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ro(r);if(!i)throw Error(x(90));Fc(r),Ns(r,i)}}}break;case"textarea":Bc(t,n);break;case"select":e=n.value,e!=null&&Mn(t,!!n.multiple,e,!1)}};Yc=dl;qc=hn;var eg={usingClientEntryPoint:!1,Events:[ni,In,Ro,Kc,Qc,dl]},hr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tg={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zc(t),t===null?null:t.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||Jm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Io=Pi.inject(tg),nt=Pi}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eg;Te.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yl(e))throw Error(x(200));return Xm(t,e,null,n)};Te.createRoot=function(t,e){if(!yl(t))throw Error(x(299));var n=!1,r="",i=Af;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ml(t,1,!1,null,null,n,!1,r,i),t[mt]=e.current,Fr(t.nodeType===8?t.parentNode:t),new vl(e)};Te.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=Zc(e),t=t===null?null:t.stateNode,t};Te.flushSync=function(t){return hn(t)};Te.hydrate=function(t,e,n){if(!Fo(e))throw Error(x(200));return Wo(null,t,e,!0,n)};Te.hydrateRoot=function(t,e,n){if(!yl(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Af;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Rf(e,null,t,1,n??null,i,!1,o,s),t[mt]=e.current,Fr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Uo(e)};Te.render=function(t,e,n){if(!Fo(e))throw Error(x(200));return Wo(null,t,e,!1,n)};Te.unmountComponentAtNode=function(t){if(!Fo(t))throw Error(x(40));return t._reactRootContainer?(hn(function(){Wo(null,null,t,!1,function(){t._reactRootContainer=null,t[mt]=null})}),!0):!1};Te.unstable_batchedUpdates=dl;Te.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fo(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Wo(t,e,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function jf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jf)}catch(t){console.error(t)}}jf(),Ac.exports=Te;var ng=Ac.exports,Mf,Hu=ng;Mf=Hu.createRoot,Hu.hydrateRoot;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=()=>{};var Vu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ig=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Of={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,v=o>>2,m=(o&3)<<4|l>>4;let g=(l&15)<<2|c>>6,h=c&63;u||(h=64,s||(g=64)),r.push(n[v],n[m],n[g],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ig(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||c==null||m==null)throw new og;const g=o<<2|l>>4;if(r.push(g),c!==64){const h=l<<4&240|c>>2;if(r.push(h),m!==64){const k=c<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class og extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(t){const e=Lf(t);return Of.encodeByteArray(e,!0)},Df=function(t){return sg(t).replace(/\./g,"")},zf=function(t){try{return Of.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=()=>ag().__FIREBASE_DEFAULTS__,ug=()=>{if(typeof process>"u"||typeof Vu>"u")return;const t=Vu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zf(t[1]);return e&&JSON.parse(e)},xl=()=>{try{return rg()||lg()||ug()||cg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dg=t=>{var e,n;return(n=(e=xl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Uf=()=>{var t;return(t=xl())==null?void 0:t.config},Ff=t=>{var e;return(e=xl())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function hg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vg(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yg(){try{return typeof indexedDB=="object"}catch{return!1}}function xg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wg,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ii.prototype.create)}}class ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?kg(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Yt(i,l,r)}}function kg(t,e){return t.replace(Sg,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sg=/\{\$([^}]+)}/g;function _g(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Gu(o)&&Gu(s)){if(!Xn(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bg(t,e){const n=new Eg(t,e);return n.subscribe.bind(n)}class Eg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vs),i.error===void 0&&(i.error=vs),i.complete===void 0&&(i.complete=vs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ig(t){return(await fetch(t,{credentials:"include"})).ok}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ng(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pg(t){return t===tn?void 0:t}function Ng(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const Ag={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},jg=W.INFO,Mg={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Lg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Mg[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wf{constructor(e){this.name=e,this._logLevel=jg,this._logHandler=Lg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ag[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Og=(t,e)=>e.some(n=>t instanceof n);let Ku,Qu;function Dg(){return Ku||(Ku=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zg(){return Qu||(Qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bf=new WeakMap,ga=new WeakMap,$f=new WeakMap,ys=new WeakMap,kl=new WeakMap;function Ug(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Bt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Bf.set(n,t)}).catch(()=>{}),kl.set(e,t),e}function Fg(t){if(ga.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});ga.set(t,e)}let va={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ga.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$f.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wg(t){va=t(va)}function Bg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xs(this),e,...n);return $f.set(r,e.sort?e.sort():[e]),Bt(r)}:zg().includes(t)?function(...e){return t.apply(xs(this),e),Bt(Bf.get(this))}:function(...e){return Bt(t.apply(xs(this),e))}}function $g(t){return typeof t=="function"?Bg(t):(t instanceof IDBTransaction&&Fg(t),Og(t,Dg())?new Proxy(t,va):t)}function Bt(t){if(t instanceof IDBRequest)return Ug(t);if(ys.has(t))return ys.get(t);const e=$g(t);return e!==t&&(ys.set(t,e),kl.set(e,t)),e}const xs=t=>kl.get(t);function Hg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Bt(s);return r&&s.addEventListener("upgradeneeded",u=>{r(Bt(s.result),u.oldVersion,u.newVersion,Bt(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Vg=["get","getKey","getAll","getAllKeys","count"],Gg=["put","add","delete","clear"],ws=new Map;function Yu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ws.get(e))return ws.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Gg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vg.includes(n)))return;const o=async function(s,...l){const u=this.transaction(s,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ws.set(e,o),o}Wg(t=>({...t,get:(e,n,r)=>Yu(e,n)||t.get(e,n,r),has:(e,n)=>!!Yu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ya="@firebase/app",qu="0.14.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Wf("@firebase/app"),Yg="@firebase/app-compat",qg="@firebase/analytics-compat",Xg="@firebase/analytics",Jg="@firebase/app-check-compat",Zg="@firebase/app-check",e0="@firebase/auth",t0="@firebase/auth-compat",n0="@firebase/database",r0="@firebase/data-connect",i0="@firebase/database-compat",o0="@firebase/functions",s0="@firebase/functions-compat",a0="@firebase/installations",l0="@firebase/installations-compat",u0="@firebase/messaging",c0="@firebase/messaging-compat",d0="@firebase/performance",f0="@firebase/performance-compat",p0="@firebase/remote-config",h0="@firebase/remote-config-compat",m0="@firebase/storage",g0="@firebase/storage-compat",v0="@firebase/firestore",y0="@firebase/ai",x0="@firebase/firestore-compat",w0="firebase",k0="12.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="[DEFAULT]",S0={[ya]:"fire-core",[Yg]:"fire-core-compat",[Xg]:"fire-analytics",[qg]:"fire-analytics-compat",[Zg]:"fire-app-check",[Jg]:"fire-app-check-compat",[e0]:"fire-auth",[t0]:"fire-auth-compat",[n0]:"fire-rtdb",[r0]:"fire-data-connect",[i0]:"fire-rtdb-compat",[o0]:"fire-fn",[s0]:"fire-fn-compat",[a0]:"fire-iid",[l0]:"fire-iid-compat",[u0]:"fire-fcm",[c0]:"fire-fcm-compat",[d0]:"fire-perf",[f0]:"fire-perf-compat",[p0]:"fire-rc",[h0]:"fire-rc-compat",[m0]:"fire-gcs",[g0]:"fire-gcs-compat",[v0]:"fire-fst",[x0]:"fire-fst-compat",[y0]:"fire-vertex","fire-js":"fire-js",[w0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Map,_0=new Map,wa=new Map;function Xu(t,e){try{t.container.addComponent(e)}catch(n){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qr(t){const e=t.name;if(wa.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;wa.set(e,t);for(const n of Yr.values())Xu(n,t);for(const n of _0.values())Xu(n,t);return!0}function Hf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new ii("app","Firebase",b0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=k0;function Vf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:xa,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(n||(n=Uf()),!n)throw $t.create("no-options");const o=Yr.get(i);if(o){if(Xn(n,o.options)&&Xn(r,o.config))return o;throw $t.create("duplicate-app",{appName:i})}const s=new Rg(i);for(const u of wa.values())s.addComponent(u);const l=new E0(n,r,s);return Yr.set(i,l),l}function C0(t=xa){const e=Yr.get(t);if(!e&&t===xa&&Uf())return Vf();if(!e)throw $t.create("no-app",{appName:t});return e}function I0(){return Array.from(Yr.values())}function Fn(t,e,n){let r=S0[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const s=[`Unable to register library "${r}" with version "${e}":`];i&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&s.push("and"),o&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(s.join(" "));return}qr(new Jn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="firebase-heartbeat-database",P0=1,Xr="firebase-heartbeat-store";let ks=null;function Gf(){return ks||(ks=Hg(T0,P0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xr)}catch(n){console.warn(n)}}}}).catch(t=>{throw $t.create("idb-open",{originalErrorMessage:t.message})})),ks}async function N0(t){try{const n=(await Gf()).transaction(Xr),r=await n.objectStore(Xr).get(Kf(t));return await n.done,r}catch(e){if(e instanceof Yt)yt.warn(e.message);else{const n=$t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(n.message)}}}async function Ju(t,e){try{const r=(await Gf()).transaction(Xr,"readwrite");await r.objectStore(Xr).put(e,Kf(t)),await r.done}catch(n){if(n instanceof Yt)yt.warn(n.message);else{const r=$t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yt.warn(r.message)}}}function Kf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=1024,A0=30;class j0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Zu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>A0){const s=O0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zu(),{heartbeatsToSend:r,unsentEntries:i}=M0(this._heartbeatsCache.heartbeats),o=Df(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return yt.warn(n),""}}}function Zu(){return new Date().toISOString().substring(0,10)}function M0(t,e=R0){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ec(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ec(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class L0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yg()?xg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await N0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ec(t){return Df(JSON.stringify({version:2,heartbeats:t})).length}function O0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){qr(new Jn("platform-logger",e=>new Kg(e),"PRIVATE")),qr(new Jn("heartbeat",e=>new j0(e),"PRIVATE")),Fn(ya,qu,t),Fn(ya,qu,"esm2020"),Fn("fire-js","")}D0("");var z0="firebase",U0="12.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn(z0,U0,"app");function Qf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F0=Qf,Yf=new ii("auth","Firebase",Qf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Wf("@firebase/auth");function W0(t,...e){yo.logLevel<=W.WARN&&yo.warn(`Auth (${si}): ${t}`,...e)}function $i(t,...e){yo.logLevel<=W.ERROR&&yo.error(`Auth (${si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,...e){throw _l(t,...e)}function Ge(t,...e){return _l(t,...e)}function Sl(t,e,n){const r={...F0(),[e]:n};return new ii("auth","Firebase",r).create(e,{appName:t.name})}function un(t){return Sl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function B0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ot(t,"argument-error"),Sl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _l(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yf.create(t,...e)}function P(t,e,...n){if(!t)throw _l(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $i(e),new Error(e)}function xt(t,e){t||dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function $0(){return tc()==="http:"||tc()==="https:"}function tc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($0()||mg()||"connection"in navigator)?navigator.onLine:!0}function V0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,xt(n>e,"Short delay should be less than long delay!"),this.isMobile=pg()||gg()}get(){return H0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e){xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Q0=new ai(3e4,6e4);function El(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function rr(t,e,n,r,i={}){return Xf(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const l=oi({key:t.config.apiKey,...s}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...o};return hg()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&wl(t.emulatorConfig.host)&&(c.credentials="include"),qf.fetch()(await Jf(t,t.config.apiHost,n,l),c)})}async function Xf(t,e,n){t._canInitEmulator=!1;const r={...G0,...e};try{const i=new q0(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ni(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ni(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw Ni(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw Ni(t,"user-disabled",s);const v=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sl(t,v,c);ot(t,v)}}catch(i){if(i instanceof Yt)throw i;ot(t,"network-request-failed",{message:String(i)})}}async function Y0(t,e,n,r,i={}){const o=await rr(t,e,n,r,i);return"mfaPendingCredential"in o&&ot(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Jf(t,e,n,r){const i=`${e}${n}?${r}`,o=t,s=o.config.emulator?bl(t.config,i):`${t.config.apiScheme}://${i}`;return K0.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(s).toString():s}class q0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),Q0.get())})}}function Ni(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ge(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function xo(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function J0(t,e=!1){const n=yn(t),r=await n.getIdToken(e),i=Cl(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Nr(Ss(i.auth_time)),issuedAtTime:Nr(Ss(i.iat)),expirationTime:Nr(Ss(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ss(t){return Number(t)*1e3}function Cl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $i("JWT malformed, contained fewer than 3 sections"),null;try{const i=zf(n);return i?JSON.parse(i):($i("Failed to decode base64 JWT payload"),null)}catch(i){return $i("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nc(t){const e=Cl(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&Z0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Z0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Jr(t,xo(e,{idToken:n}));P(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=(m=i.providerUserInfo)!=null&&m.length?Zf(i.providerUserInfo):[],s=n1(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sa(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,v)}async function t1(t){const e=yn(t);await wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function n1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Zf(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t,e){const n=await Xf(t,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=await Jf(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&wl(t.emulatorConfig.host)&&(u.credentials="include"),qf.fetch()(s,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function i1(t,e){return rr(t,"POST","/v2/accounts:revokeToken",El(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=nc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await r1(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Wn;return r&&(P(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(P(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $e{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new e1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return J0(this,e)}reload(){return t1(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $e({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await Jr(this,X0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,o=n.phoneNumber??void 0,s=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:h,providerData:k,stsTokenManager:S}=n;P(m&&S,e,"internal-error");const L=Wn.fromJSON(this.name,S);P(typeof m=="string",e,"internal-error"),_t(r,e.name),_t(i,e.name),P(typeof g=="boolean",e,"internal-error"),P(typeof h=="boolean",e,"internal-error"),_t(o,e.name),_t(s,e.name),_t(l,e.name),_t(u,e.name),_t(c,e.name),_t(v,e.name);const f=new $e({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:h,photoURL:s,phoneNumber:o,tenantId:l,stsTokenManager:L,createdAt:c,lastLoginAt:v});return k&&Array.isArray(k)&&(f.providerData=k.map(d=>({...d}))),u&&(f._redirectEventId=u),f}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wn;i.updateFromServerResponse(n);const o=new $e({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wo(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];P(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Zf(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new Wn;l.updateFromIdToken(r);const u=new $e({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Sa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map;function ft(t){xt(t instanceof Function,"Expected a class definition");let e=rc.get(t);return e?(xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ep.type="NONE";const ic=ep;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e,n){return`firebase:${t}:${e}:${n}`}class Bn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Hi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Hi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xo(this.auth,{idToken:e}).catch(()=>{});return n?$e._fromGetAccountInfoResponse(this.auth,n,e):null}return $e._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bn(ft(ic),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||ft(ic);const s=Hi(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const v=await c._get(s);if(v){let m;if(typeof v=="string"){const g=await xo(e,{idToken:v}).catch(()=>{});if(!g)break;m=await $e._fromGetAccountInfoResponse(e,g,v)}else m=$e._fromJSON(e,v);c!==o&&(l=m),o=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Bn(o,e,r):(o=u[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new Bn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ip(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sp(e))return"Blackberry";if(ap(e))return"Webos";if(np(e))return"Safari";if((e.includes("chrome/")||rp(e))&&!e.includes("edge/"))return"Chrome";if(op(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tp(t=ge()){return/firefox\//i.test(t)}function np(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rp(t=ge()){return/crios\//i.test(t)}function ip(t=ge()){return/iemobile/i.test(t)}function op(t=ge()){return/android/i.test(t)}function sp(t=ge()){return/blackberry/i.test(t)}function ap(t=ge()){return/webos/i.test(t)}function Il(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function o1(t=ge()){var e;return Il(t)&&!!((e=window.navigator)!=null&&e.standalone)}function s1(){return vg()&&document.documentMode===10}function lp(t=ge()){return Il(t)||op(t)||ap(t)||sp(t)||/windows phone/i.test(t)||ip(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e=[]){let n;switch(t){case"Browser":n=oc(ge());break;case"Worker":n=`${oc(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,l)=>{try{const u=e(o);s(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e={}){return rr(t,"GET","/v2/passwordPolicy",El(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=6;class c1{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??u1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sc(this),this.idTokenSubscription=new sc(this),this.beforeStateQueue=new a1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xo(this,{idToken:e}),r=await $e._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(tt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(o=this.redirectUser)==null?void 0:o._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=V0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(un(this));const n=e?yn(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await l1(this),n=new c1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await i1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=up(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&W0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Bo(t){return yn(t)}class sc{constructor(e){this.auth=e,this.observer=null,this.addObserver=bg(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function f1(t){Tl=t}function p1(t){return Tl.loadJS(t)}function h1(){return Tl.gapiScript}function m1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t,e){const n=Hf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Xn(o,e??{}))return i;ot(i,"already-initialized")}return n.initialize({options:e})}function v1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function y1(t,e,n){const r=Bo(t);P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=cp(e),{host:s,port:l}=x1(e),u=l===null?"":`:${l}`,c={url:`${o}//${s}${u}/`},v=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){P(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),P(Xn(c,r.config.emulator)&&Xn(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,wl(s)?Ig(`${o}//${s}${u}`):w1()}function cp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function x1(t){const e=cp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ac(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:ac(s)}}}function ac(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function w1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(t,e){return Y0(t,"POST","/v1/accounts:signInWithIdp",El(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="http://localhost";class mn extends dp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=n;if(!r||!i)return null;const s=new mn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return $n(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$n(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$n(e,n)}buildRequest(){const e={requestUri:k1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends li{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mn._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends li{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends li{constructor(){super("twitter.com")}static credential(e,n){return mn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await $e._fromIdTokenResponse(e,r,i),s=lc(r);return new Zn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=lc(r);return new Zn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function lc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Yt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ko(e,n,r,i)}}function fp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(t,o,e,r):o})}async function S1(t,e,n=!1){const r=await Jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t,e,n=!1){const{auth:r}=t;if(tt(r.app))return Promise.reject(un(r));const i="reauthenticate";try{const o=await Jr(t,fp(r,i,e,t),n);P(o.idToken,r,"internal-error");const s=Cl(o.idToken);P(s,r,"internal-error");const{sub:l}=s;return P(t.uid===l,r,"user-mismatch"),Zn._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(t,e,n=!1){if(tt(t.app))return Promise.reject(un(t));const r="signIn",i=await fp(t,r,e),o=await Zn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function E1(t,e,n,r){return yn(t).onIdTokenChanged(e,n,r)}function C1(t,e,n){return yn(t).beforeAuthStateChanged(e,n)}function I1(t){return yn(t).signOut()}const So="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(So,"1"),this.storage.removeItem(So),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=1e3,P1=10;class hp extends pp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,l,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);s1()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,P1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},T1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hp.type="LOCAL";const N1=hp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp extends pp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mp.type="SESSION";const gp=mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $o(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async c=>c(n.origin,o)),u=await R1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$o.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,u)=>{const c=Nl("",20);i.port1.start();const v=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(v),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(g.data.response);break;default:clearTimeout(v),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function j1(t){it().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function M1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function L1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function O1(){return vp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="firebaseLocalStorageDb",D1=1,_o="firebaseLocalStorage",xp="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ho(t,e){return t.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function z1(){const t=indexedDB.deleteDatabase(yp);return new ui(t).toPromise()}function wp(){const t=indexedDB.open(yp,D1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_o,{keyPath:xp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_o)?e(r):(r.close(),await z1(),e(await wp()))})})}async function uc(t,e,n){const r=Ho(t,!0).put({[xp]:e,value:n});return new ui(r).toPromise()}async function U1(t,e){const n=Ho(t,!1).get(e),r=await new ui(n).toPromise();return r===void 0?null:r.value}function cc(t,e){const n=Ho(t,!0).delete(e);return new ui(n).toPromise()}const F1=800,W1=3;class kp{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=wp(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>W1)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return vp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$o._getInstance(O1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await M1(),!this.activeServiceWorker)return;this.sender=new A1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||L1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await uc(e,So,"1"),await cc(e,So)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>U1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ho(i,!1).getAll();return new ui(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kp.type="LOCAL";const B1=kp;new ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){return e?ft(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends dp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $n(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $n(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $n(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $1(t){return b1(t.auth,new Rl(t),t.bypassAuthState)}function H1(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),_1(n,new Rl(t),t.bypassAuthState)}async function V1(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),S1(n,new Rl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $1;case"linkViaPopup":case"linkViaRedirect":return V1;case"reauthViaPopup":case"reauthViaRedirect":return H1;default:ot(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=new ai(2e3,1e4);async function K1(t,e,n){if(tt(t.app))return Promise.reject(Ge(t,"operation-not-supported-in-this-environment"));const r=Bo(t);B0(t,e,Pl);const i=Sp(r,n);return new sn(r,"signInViaPopup",e,i).executeNotNull()}class sn extends _p{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const e=Nl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,G1.get())};e()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="pendingRedirect",Vi=new Map;class Y1 extends _p{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vi.get(this.auth._key());if(!e){try{const r=await q1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vi.set(this.auth._key(),e)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q1(t,e){const n=Z1(e),r=J1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function X1(t,e){Vi.set(t._key(),e)}function J1(t){return ft(t._redirectPersistence)}function Z1(t){return Hi(Q1,t.config.apiKey,t.name)}async function ev(t,e,n=!1){if(tt(t.app))return Promise.reject(un(t));const r=Bo(t),i=Sp(r,e),s=await new Y1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=10*60*1e3;class nv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bp(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tv&&this.cachedEventUids.clear(),this.cachedEventUids.has(dc(e))}saveEventToCache(e){this.cachedEventUids.add(dc(e)),this.lastProcessedEventTime=Date.now()}}function dc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sv=/^https?/;async function av(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iv(t);for(const n of e)try{if(lv(n))return}catch{}ot(t,"unauthorized-domain")}function lv(t){const e=ka(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!sv.test(n))return!1;if(ov.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new ai(3e4,6e4);function fc(){const t=it().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cv(t){return new Promise((e,n)=>{var i,o,s;function r(){fc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fc(),n(Ge(t,"network-request-failed"))},timeout:uv.get()})}if((o=(i=it().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((s=it().gapi)!=null&&s.load)r();else{const l=m1("iframefcb");return it()[l]=()=>{gapi.load?r():n(Ge(t,"network-request-failed"))},p1(`${h1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function dv(t){return Gi=Gi||cv(t),Gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=new ai(5e3,15e3),pv="__/auth/iframe",hv="emulator/auth/iframe",mv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vv(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bl(e,hv):`https://${t.config.authDomain}/${pv}`,r={apiKey:e.apiKey,appName:t.name,v:si},i=gv.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${oi(r).slice(1)}`}async function yv(t){const e=await dv(t),n=it().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:vv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mv,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ge(t,"network-request-failed"),l=it().setTimeout(()=>{o(s)},fv.get());function u(){it().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wv=500,kv=600,Sv="_blank",_v="http://localhost";class pc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bv(t,e,n,r=wv,i=kv){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...xv,width:r.toString(),height:i.toString(),top:o,left:s},c=ge().toLowerCase();n&&(l=rp(c)?Sv:n),tp(c)&&(e=e||_v,u.scrollbars="yes");const v=Object.entries(u).reduce((g,[h,k])=>`${g}${h}=${k},`,"");if(o1(c)&&l!=="_self")return Ev(e||"",l),new pc(null);const m=window.open(e||"",l,v);P(m,t,"popup-blocked");try{m.focus()}catch{}return new pc(m)}function Ev(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="__/auth/handler",Iv="emulator/auth/handler",Tv=encodeURIComponent("fac");async function hc(t,e,n,r,i,o){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:i};if(e instanceof Pl){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",_g(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,m]of Object.entries({}))s[v]=m}if(e instanceof li){const v=e.getScopes().filter(m=>m!=="");v.length>0&&(s.scopes=v.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const v of Object.keys(l))l[v]===void 0&&delete l[v];const u=await t._getAppCheckToken(),c=u?`#${Tv}=${encodeURIComponent(u)}`:"";return`${Pv(t)}?${oi(l).slice(1)}${c}`}function Pv({config:t}){return t.emulator?bl(t,Iv):`https://${t.authDomain}/${Cv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="webStorageSupport";class Nv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gp,this._completeRedirectFn=ev,this._overrideRedirectResult=X1}async _openPopup(e,n,r,i){var s;xt((s=this.eventManagers[e._key()])==null?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hc(e,n,r,ka(),i);return bv(e,o,Nl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await hc(e,n,r,ka(),i);return j1(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(xt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yv(e),r=new nv(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_s,{type:_s},i=>{var s;const o=(s=i==null?void 0:i[0])==null?void 0:s[_s];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=av(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lp()||np()||Il()}}const Rv=Nv;var mc="@firebase/auth",gc="1.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Mv(t){qr(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;P(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:up(t)},c=new d1(r,i,o,u);return v1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qr(new Jn("auth-internal",e=>{const n=Bo(e.getProvider("auth").getImmediate());return(r=>new Av(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(mc,gc,jv(t)),Fn(mc,gc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=5*60,Ov=Ff("authIdTokenMaxAge")||Lv;let vc=null;const Dv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ov)return;const i=n==null?void 0:n.token;vc!==i&&(vc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zv(t=C0()){const e=Hf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=g1(t,{popupRedirectResolver:Rv,persistence:[B1,N1,gp]}),r=Ff("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=Dv(o.toString());C1(n,s,()=>s(n.currentUser)),E1(n,l=>s(l))}}const i=dg("auth");return i&&y1(n,`http://${i}`),n}function Uv(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}f1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Ge("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Uv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Mv("Browser");const wr={apiKey:"AIzaSyA5uj4ytAXa95T2oqAO0t6t8L84xCtk-HU",authDomain:"chatbotashan.firebaseapp.com",projectId:"chatbotashan",storageBucket:"chatbotashan.firebasestorage.app",messagingSenderId:"369866824179",appId:"1:369866824179:web:baa4425a0501758fb8da86"},Fv=!!(wr.apiKey&&wr.authDomain&&wr.projectId&&wr.appId),yc=Fv?I0()[0]||Vf(wr):null,bo=yc?zv(yc):null,Wv=async()=>{if(!bo)throw new Error("Firebase authentication is not configured. Add the new Firebase web app config to frontend/.env.");const t=new lt;t.addScope("profile"),t.addScope("email"),t.setCustomParameters({prompt:"select_account"});const e=await K1(bo,t),n=await e.user.getIdToken(),r=e.user.providerData.find(o=>o.providerId==="google.com"),i=e.user.photoURL||(r==null?void 0:r.photoURL)||"";return{id:e.user.uid,name:e.user.displayName||"Google User",email:e.user.email||"",picture:i,photoURL:i,authProvider:"firebase-google",firebaseUid:e.user.uid,idToken:n,isGuest:!1}},Bv=()=>({id:`guest-${Date.now()}`,name:"Guest",email:"",picture:"",authProvider:"guest",isGuest:!0}),Al="marsh_warden_user",$v=2*60*60*1e3,xc=t=>localStorage.setItem(Al,JSON.stringify({...t,loginTime:Date.now()})),Hv=()=>{const t=localStorage.getItem(Al);if(!t)return null;const e=JSON.parse(t);return Date.now()-e.loginTime>$v?(Ep(),null):e},Ep=()=>{localStorage.removeItem(Al),bo&&I1(bo).catch(()=>{})},Vv=t=>(t==null?void 0:t.code)==="auth/configuration-not-found"?"Firebase Authentication is not enabled for this project. In Firebase Console, open Authentication, click Get started, then enable Google sign-in.":(t==null?void 0:t.code)==="auth/unauthorized-domain"?"This domain is not authorized in Firebase Authentication. Add localhost, 127.0.0.1, and your deployed domain in Authentication > Settings > Authorized domains.":(t==null?void 0:t.message)||"Google sign-in failed. Please try again.";function Gv({onLogin:t}){const e=async()=>{try{const r=await Wv();xc(r),t==null||t(r)}catch(r){console.error("Firebase Google sign-in failed:",r),window.alert(Vv(r))}},n=()=>{const r=Bv();xc(r),t==null||t(r)};return a.jsxs("div",{className:"auth-actions",children:[a.jsxs("button",{className:"auth-button auth-google-button",onClick:e,children:[a.jsx("span",{className:"auth-button-icon auth-google-icon",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 48 48","aria-hidden":"true",children:[a.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),a.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),a.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),a.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]})}),a.jsx("span",{children:"Continue with Google"})]}),a.jsxs("div",{className:"auth-divider",children:[a.jsx("span",{}),a.jsx("p",{children:"OR"}),a.jsx("span",{})]}),a.jsxs("button",{className:"auth-button auth-guest-button",onClick:n,children:[a.jsx("span",{className:"auth-button-icon auth-guest-icon",children:a.jsxs("svg",{width:"25",height:"25",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[a.jsx("path",{d:"M12 12.6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",fill:"currentColor"}),a.jsx("path",{d:"M4.8 19.6c.7-3.2 3.5-5.2 7.2-5.2s6.5 2 7.2 5.2c.1.5-.3 1-.8 1H5.6c-.5 0-.9-.5-.8-1Z",fill:"currentColor"})]})}),a.jsx("span",{children:"Continue as Guest"})]}),a.jsx("style",{children:`
        .auth-actions {
          box-sizing: border-box;
          display: grid;
          gap: clamp(14px, 2.2vh, 22px);
          width: 100%;
          margin-top: 0;
        }
        .auth-button {
          box-sizing: border-box;
          position: relative;
          width: 100%;
          height: clamp(54px, 6.6vh, 68px);
          border-radius: 14px;
          border: 0;
          display: grid;
          grid-template-columns: 72px 1fr 48px;
          align-items: center;
          padding: 0 18px;
          font-size: clamp(15px, 1.7vh, 17px);
          font-weight: 800;
          font-family: inherit;
          cursor: pointer;
          overflow: hidden;
          transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
        }
        .auth-button:hover {
          transform: translateY(-1px);
          filter: brightness(1.03);
        }
        .auth-button:active {
          transform: translateY(0);
        }
        .auth-button-icon {
          width: clamp(34px, 4.8vh, 44px);
          height: clamp(34px, 4.8vh, 44px);
          border-radius: 999px;
          display: inline-grid;
          place-items: center;
          justify-self: start;
        }
        .auth-google-button {
          color: #10233d;
          background: #ffffff;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.92),
            0 14px 28px rgba(22,68,104,0.18);
        }
        .auth-google-icon {
          background: transparent;
          box-shadow: none;
        }
        .auth-guest-button {
          color: #f8fafc;
          background: linear-gradient(100deg, #35bd62 0%, #0692cd 100%);
          border: 1px solid rgba(27, 151, 190, 0.25);
          box-shadow:
            inset 0 1px 1px rgba(255,255,255,0.22),
            0 16px 30px rgba(7,126,169,0.24);
          text-shadow: 0 1px 2px rgba(0,0,0,0.24);
        }
        .auth-guest-icon {
          color: #ffffff;
          background: transparent;
          border: 0;
          box-shadow: none;
        }
        .auth-divider {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 24px;
          align-items: center;
          color: #5f6b79;
          font-size: 14px;
          letter-spacing: 0.05em;
        }
        .auth-divider span {
          height: 1px;
          background: #d4dde5;
        }
        .auth-divider p {
          margin: 0;
        }
        @media (max-width: 520px) {
          .auth-actions {
            gap: 12px;
          }
          .auth-button {
            height: 44px;
            grid-template-columns: 42px 1fr 8px;
            border-radius: 10px;
            padding: 0 12px;
            font-size: 12px;
          }
          .auth-button-icon {
            width: 26px;
            height: 26px;
          }
          .auth-button-icon svg {
            width: 18px;
            height: 18px;
          }
          .auth-divider {
            gap: 12px;
            font-size: 11px;
          }
        }
      `})]})}const Cp=""+new URL("AuthBackground-lvkPdk2e.png",import.meta.url).href,Kv=""+new URL("loggingfooter-DaMZO1Aq.png",import.meta.url).href,wc=["./header.png","./header2.png","./header3.png","./header4.png"],mr="",bt=20,_a=async(t,e={},n=3,r=1e3)=>{try{const i=await fetch(t,e);return!i.ok&&n>0?(await new Promise(o=>setTimeout(o,r)),_a(t,e,n-1,r*2)):i}catch(i){if((i==null?void 0:i.name)==="AbortError")throw i;if(n>0)return await new Promise(o=>setTimeout(o,r)),_a(t,e,n-1,r*2);throw i}},Rr=t=>{const e=[];let n=0;const r=/(\*\*|__)(.*?)\1/g;let i;for(;(i=r.exec(t))!==null;)i.index>n&&e.push(t.substring(n,i.index)),e.push(a.jsx("strong",{children:i[2]},i.index)),n=i.index+i[0].length;return n<t.length&&e.push(t.substring(n)),e.length>0?e:t},Qv=(t,e,n)=>{const r=t.trim(),i=n?"#e5e7eb":"#374151",o=n?"#f3f4f6":"#111827";if(r.startsWith("• ")||r.startsWith("- ")||r.startsWith("* ")){const s=r.substring(2).trim();return a.jsxs("div",{style:{display:"flex",marginBottom:"6px",alignItems:"flex-start",color:i},children:[a.jsx("span",{style:{marginRight:"8px",fontWeight:"900",flexShrink:0,fontSize:"18px",color:o},children:"•"}),a.jsx("span",{style:{flex:1},children:Rr(s)})]},e)}if(/^\d+\./.test(r)){const s=r.match(/^(\d+\.)\s*(.+)$/);if(s)return a.jsxs("div",{style:{display:"flex",marginBottom:"8px",marginLeft:"16px",alignItems:"flex-start",color:i},children:[a.jsx("span",{style:{marginRight:"8px",fontWeight:"500",flexShrink:0},children:s[1]}),a.jsx("span",{style:{flex:1},children:Rr(s[2])})]},e)}return r.startsWith("###")?a.jsx("h4",{style:{fontSize:"17px",fontWeight:"600",margin:"12px 0 8px",color:o},children:r.substring(3).trim()},e):r.startsWith("##")?a.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",margin:"16px 0 8px",color:o},children:r.substring(2).trim()},e):r.startsWith("#")?a.jsx("h2",{style:{fontSize:"21px",fontWeight:"700",margin:"18px 0 12px",color:o},children:r.substring(1).trim()},e):a.jsx("p",{style:{marginBottom:"10px",lineHeight:"1.5",color:i},children:Rr(r)},e)},Ip=t=>{const e=t.trim();return/\|/.test(e)&&/^[:|\-\s]+$/.test(e.replace(/\|/g,""))},Eo=t=>t.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim()),Yv=(t,e=!1)=>{const n=t.split(`
`),r=[];let i=0;for(;i<n.length;){const o=n[i],s=n[i+1];if(o.trim()&&s&&o.includes("|")&&Ip(s)){const l=Eo(o),u=[];for(i+=2;i<n.length&&n[i].trim()&&n[i].includes("|");)u.push(Eo(n[i])),i+=1;r.push(a.jsx("div",{style:{width:"100%",overflowX:"auto",margin:"12px 0 16px"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:"420px",backgroundColor:e?"#0f172a":"#ffffff",border:`1px solid ${e?"#334155":"#cbd5e1"}`,borderRadius:"10px",overflow:"hidden"},children:[a.jsx("thead",{children:a.jsx("tr",{children:l.map((c,v)=>a.jsx("th",{style:{textAlign:"left",padding:"10px 12px",fontSize:"13px",fontWeight:"700",color:e?"#f8fafc":"#0f172a",backgroundColor:e?"#1e293b":"#e2e8f0",borderBottom:`1px solid ${e?"#334155":"#cbd5e1"}`},children:Rr(c)},v))})}),a.jsx("tbody",{children:u.map((c,v)=>a.jsx("tr",{children:l.map((m,g)=>a.jsx("td",{style:{padding:"10px 12px",fontSize:"13px",lineHeight:"1.5",color:e?"#e5e7eb":"#334155",backgroundColor:v%2===0?e?"#111827":"#f8fafc":e?"#0f172a":"#ffffff",borderBottom:`1px solid ${e?"#1e293b":"#e2e8f0"}`,verticalAlign:"top"},children:Rr(c[g]||"")},g))},v))})]})},`table-${i}`));continue}o.trim()?r.push(Qv(o,i,e)):i>0&&n[i-1].trim()&&r.push(a.jsx("div",{style:{height:"8px"}},i)),i+=1}return r},Ue={primary:"#1a759f",deepBlue:"#184e77",uiGreen:"#3fa57f",uiGreenDark:"#2f8f6d"},ba=(t="")=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Jt=(t="")=>ba(t).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/__(.*?)__/g,"<strong>$1</strong>"),qv=(t="")=>{const e=String(t||"").split(`
`),n=[];let r=0;for(;r<e.length;){const i=e[r],o=i.trim(),s=e[r+1];if(o&&s&&i.includes("|")&&Ip(s)){const l=Eo(i),u=[];for(r+=2;r<e.length&&e[r].trim()&&e[r].includes("|");)u.push(Eo(e[r])),r+=1;n.push(`
        <table class="mw-export-table">
          <thead>
            <tr>${l.map(c=>`<th>${Jt(c)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${u.map(c=>`
              <tr>${l.map((v,m)=>`<td>${Jt(c[m]||"")}</td>`).join("")}</tr>
            `).join("")}
          </tbody>
        </table>
      `);continue}if(!o){r+=1;continue}o.startsWith("###")?n.push(`<h4>${Jt(o.substring(3).trim())}</h4>`):o.startsWith("##")?n.push(`<h3>${Jt(o.substring(2).trim())}</h3>`):o.startsWith("#")?n.push(`<h2>${Jt(o.substring(1).trim())}</h2>`):o.startsWith("- ")||o.startsWith("* ")||o.startsWith("• ")?n.push(`<div class="mw-export-bullet"><span>&bull;</span><p>${Jt(o.substring(2).trim())}</p></div>`):n.push(`<p class="mw-export-paragraph">${Jt(o)}</p>`),r+=1}return n.join("")},Xv=[{title:"Environment and Environmental Governance",keywords:"environment, pollution control, sustainability, environmental quality",summary:"National-level environmental laws, policies, and action plans that guide environmental protection, pollution control, sustainable production, waste management, and environmental quality improvement in Sri Lanka.",docs:["National Environmental Act No. 47 of 1980","National Environment Policy 2003","National Environment Policy 2022","Policy on Siting of High-Polluting Industries","National Policy on Management of Chemicals","National Framework on Eco Labelling in Sri Lanka","National Policy on Environmentally Sensitive Areas in Sri Lanka","National Policy on Waste Management","National Policy and Strategy on Cleaner Production for the Health Sector","National Policy on Green Procurement","National Policy on Sustainable Consumption and Production for Sri Lanka","National Environmental Action Plan 1992-1996","National Environmental Action Plan 2022-2030","National Action Plan on Plastic Waste Management 2021-2030"]},{title:"Land Use, Land Management, and Settlement",keywords:"land, reclamation, state land, land use",summary:"Documents related to land ownership, land use planning, land reclamation, settlement planning, and state land management around wetlands and connected landscapes.",docs:["State Lands Ordinance No. 8 of 1947","National Land Use Policy of Sri Lanka 2007","Sri Lanka Land Reclamation and Development Corporation Act No. 15 of 1968","Town and Country Planning Ordinance No. 13 of 1946"]},{title:"Urban Development, Local Authorities, and Infrastructure",keywords:"urban, municipal, councils, development",summary:"Laws and institutional frameworks for urban development, municipal governance, infrastructure planning, and local authority responsibilities in urban and peri-urban wetland areas.",docs:["Urban Development Authority Law No. 41 of 1978","Urban Development Projects Special Provisions Act No. 2 of 1980","Municipal Councils Ordinance No. 29 of 1947","Urban Councils Ordinance No. 61 of 1939","Pradeshiya Sabha Act No. 15 of 1987","Health Services Act No. 12 of 1952"]},{title:"River Basin and Large-Scale Development Authorities",keywords:"river basin, irrigation schemes, regional development",summary:"Institutional documents related to large-scale development, river basin management, irrigation development, and regional planning.",docs:["Mahaweli Authority of Sri Lanka Act No. 23 of 1979"]},{title:"Biodiversity, Wildlife, and Ecosystem Conservation",keywords:"biodiversity, wildlife, fauna, flora, protected areas, mangroves",summary:"Laws, policies, and strategies for wildlife conservation, biodiversity protection, protected areas, mangroves, invasive alien species, and traditional biodiversity knowledge.",docs:["Fauna and Flora Protection Ordinance No. 2 of 1937","Fauna and Flora Protection Amendment Act No. 49 of 1993","Fauna and Flora Protection Amendment Act No. 22 of 2009","Wildlife Policy 1994","National Heritage Wilderness Areas Act No. 3 of 1988","National Policy on Conservation and Sustainable Utilization of Mangrove Ecosystems 2020","National Policy on Invasive Alien Species 2016","National Policy and Strategies on Traditional Knowledge and Practices Related to Biodiversity","National Policy on Access to Biological Material and Fair and Equitable Benefit Sharing","National Biodiversity Strategic Action Plan 2016-2022","Western Provincial Biodiversity Profile and Conservation Action Plan 2017","Butterfly Conservation Action Plan 2014"]},{title:"Forests, Trees, and Vegetation",keywords:"forest, trees, vegetation, felling",summary:"Forest conservation, vegetation management, legal controls on tree felling, and wider forest protection policy.",docs:["Forest Ordinance No. 16 of 1907","National Forest Policy of Sri Lanka","Felling of Trees Control Act No. 9 of 1951"]},{title:"Wetlands, Coastal, and Marine Resources",keywords:"wetland, coastal, marine, fisheries, aquatic",summary:"A core Marsh Warden category covering wetland policy, coastal conservation, marine pollution, fisheries, aquatic resources, wetland zoning, and management strategies.",docs:["National Wetland Policy and Strategy 2006","Coast Conservation Act No. 57 of 1981","Marine Pollution Prevention Act No. 35 of 2008","Fisheries and Aquatic Resources Act No. 2 of 1996","National Fisheries and Aquaculture Policy 2018","National Aquaculture Development Authority of Sri Lanka Act No. 53 of 1998","National Aquatic Resources Research and Development Agency Act No. 54 of 1981","Wetland Management Zoning Plan 2006","Metro Colombo Wetland Management Strategy 2016"]},{title:"Water Resources, Rivers, and Irrigation",keywords:"water, river, irrigation, watershed, flood",summary:"Legal and policy documents about water resources, irrigation, river valleys, flood protection, watersheds, catchments, and water source conservation.",docs:["Irrigation Ordinance No. 32 of 1946","Water Resources Board Act No. 29 of 1964","National Water Resources Policy and Institutional Arrangements","National Watershed Management Policy 2004","Flood Protection Ordinance No. 4 of 1924","River Valleys Development Board Act No. 4 of 1975","National Policy on Protection and Conservation of Water Sources, their Catchments and Reservations 2014","Water Hyacinth Ordinance No. 4 of 1909"]},{title:"Agriculture, Soil, and Agro-Environment",keywords:"agriculture, soil, pesticides, agrarian",summary:"Agricultural land, paddy lands, soil conservation, pesticides, plant protection, and cleaner production in agriculture.",docs:["Agrarian Development Act No. 46 of 2000","Sri Lanka National Agriculture Policy","Soil Conservation Act No. 25 of 1951","Control of Pesticides Act No. 33 of 1980","National Policy and Strategy on Cleaner Production for the Agriculture Sector 2012","Plant Protection Act No. 35 of 1999"]},{title:"Climate Change, Disaster Risk, and Energy",keywords:"climate change, disaster, resilience, energy",summary:"Climate policies, adaptation strategies, disaster plans, nationally determined contributions, and energy frameworks connected to wetland resilience, flood mitigation, and carbon storage.",docs:["National Climate Change Policy 2012","National Climate Change Policy 2023","Updated Nationally Determined Contributions Sri Lanka 2021","National Policy on Disaster Management 2010","Sri Lanka Sustainable Energy Authority Act No. 35 of 2007","National Climate Change Adaptation Strategy for Sri Lanka 2011-2016","National Adaptation Plan 2016-2025","Nationally Determined Contributions Implementation Plan","National Disaster Management Plan 2013-2017"]},{title:"Minerals, Mining, and Construction Resources",keywords:"minerals, mining, sand, construction",summary:"Mineral resources, mining, sand extraction, and construction materials that can affect river systems, wetlands, groundwater, and nearby ecosystems.",docs:["Mines and Minerals Act No. 33 of 1992","National Mineral Policy","National Policy on Sand as a Resource for the Construction Industry"]}],Jv=[["Metro Colombo Wetland Management Strategy 2016","A foundational document for urban wetland protection in Colombo, covering zoning, institutional coordination, public education, and site-based stewardship."],["National Wetland Policy and Strategy 2006","National policy direction for wetland conservation, sustainable use, research, awareness, institutional coordination, and legal protection."],["National Biodiversity Strategic Action Plan 2016-2022","A national roadmap for biodiversity conservation, ecosystem restoration, protected areas, and institutional responsibilities."],["National Adaptation Plan for Climate Change 2016-2025","Climate adaptation priorities where wetlands support flood control, water regulation, biodiversity protection, and resilience."],["National Environmental Act No. 47 of 1980","A central legal framework for environmental regulation, pollution control, environmental assessment, and institutional oversight."]],Zv=["What does the National Environmental Act say about pollution control?","Which laws are relevant to wetland protection in Sri Lanka?","What are the main objectives of the Metro Colombo Wetland Management Strategy?","Which institutions are responsible for urban wetland management?","Compare the National Wetland Policy and the Metro Colombo Wetland Management Strategy.","Create a table of documents related to biodiversity conservation."],ey=["What are the main objectives of the National Wetland Policy?","List all documents related to wetlands and coastal resources.","Compare the National Environmental Act and the National Environment Policy.","Summarize the Metro Colombo Wetland Management Strategy.","Explain how wetlands help reduce flood risk.","Find clauses related to land reclamation.","Create a table of policies related to biodiversity.","Give steps for identifying relevant laws for a wetland development issue."],ty=[["Suggested Questions","Guides students, researchers, and first-time users toward useful legal and policy searches."],["Document Explorer","Lets users browse categorized acts, policies, strategies, and action plans by topic, keyword, year, or institution."],["Source Panel","Shows which documents were used to generate each answer, improving transparency and verification."],["New Session","Starts a new research task without mixing previous conversation history."],["Clear History","Helps users manage privacy and remove previous queries when working with sensitive topics."],["Export Answer","Saves useful responses for reports, academic writing, policy reviews, planning documents, or future reference."]];function ny({onBack:t}){return a.jsxs("div",{className:"mw-learn-page",children:[a.jsxs("div",{className:"mw-auth-research-badge","aria-label":"Powered by IWMI Research",children:[a.jsx("span",{"aria-hidden":"true",children:"🌎"}),a.jsx("span",{children:"Powered by IWMI Research"})]}),a.jsxs("button",{type:"button",className:"mw-learn-back",onClick:t,children:[a.jsx("span",{"aria-hidden":"true",children:"←"}),"Back to sign in"]}),a.jsxs("main",{className:"mw-learn-shell",children:[a.jsxs("section",{className:"mw-learn-hero",children:[a.jsx("div",{className:"mw-learn-leaf","aria-hidden":"true",children:"🌿"}),a.jsx("p",{className:"mw-learn-kicker",children:"Digital Guardian of Sri Lankan Wetlands"}),a.jsx("h1",{children:"Marsh Warden"}),a.jsx("p",{children:"Marsh Warden is a digital knowledge assistant that transforms static legal PDFs, policy reports, strategies, action plans, and institutional documents into an interactive knowledge base for Sri Lankan wetland and environmental governance."})]}),a.jsx("section",{className:"mw-learn-grid mw-learn-three",children:[["Educate","Help users understand the ecological, legal, and social importance of wetlands such as Kolonnawa Marsh, Thalangama Tank, Beddagana Biodiversity Park, and other Colombo Metropolitan Region ecosystems."],["Navigate","Search and retrieve information from more than 70 legal acts, policies, strategies, action plans, and institutional documents related to environmental management in Sri Lanka."],["Protect","Support citizens, students, researchers, planners, policymakers, and conservation officers with reliable information for wetland protection, land use, biodiversity, and climate resilience."]].map(([e,n])=>a.jsxs("article",{className:"mw-learn-card",children:[a.jsx("h2",{children:e}),a.jsx("p",{children:n})]},e))}),a.jsxs("section",{className:"mw-learn-section",children:[a.jsx("h2",{children:"What Users Can Do"}),a.jsx("div",{className:"mw-learn-list-grid",children:["Search for specific clauses, legal provisions, or policy statements.","Understand how laws relate to wetlands, biodiversity, land use, pollution, and water resources.","Compare environmental acts, policies, and action plans.","Learn about protected areas, mangroves, aquatic resources, and conservation strategies.","Identify responsibilities of institutions involved in environmental governance.","Access simplified explanations of complex legal and policy documents.","Support academic research, project reports, planning work, and environmental decisions."].map(e=>a.jsx("div",{className:"mw-learn-pill",children:e},e))})]}),a.jsxs("section",{className:"mw-learn-section",children:[a.jsx("h2",{children:"Main Document Categories"}),a.jsx("div",{className:"mw-category-grid",children:Xv.map(e=>a.jsxs("article",{className:"mw-category-card",children:[a.jsx("h3",{children:e.title}),a.jsx("p",{className:"mw-category-keywords",children:e.keywords}),a.jsx("p",{children:e.summary}),a.jsxs("details",{children:[a.jsx("summary",{children:"Key documents"}),a.jsx("ul",{children:e.docs.map(n=>a.jsx("li",{children:n},n))})]})]},e.title))})]}),a.jsxs("section",{className:"mw-learn-section",children:[a.jsx("h2",{children:"Key Strategic Documents"}),a.jsx("div",{className:"mw-learn-grid",children:Jv.map(([e,n])=>a.jsxs("article",{className:"mw-learn-card",children:[a.jsx("h3",{children:e}),a.jsx("p",{children:n})]},e))})]}),a.jsxs("section",{className:"mw-learn-section mw-learn-split",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Example Questions"}),a.jsx("ul",{className:"mw-learn-clean-list",children:Zv.map(e=>a.jsx("li",{children:e},e))})]}),a.jsxs("div",{children:[a.jsx("h2",{children:"Prompting Guide"}),a.jsx("ul",{className:"mw-learn-clean-list",children:ey.map(e=>a.jsx("li",{children:e},e))})]})]}),a.jsxs("section",{className:"mw-learn-section",children:[a.jsx("h2",{children:"Recommended Website Features"}),a.jsx("div",{className:"mw-learn-grid mw-learn-three",children:ty.map(([e,n])=>a.jsxs("article",{className:"mw-learn-card",children:[a.jsx("h3",{children:e}),a.jsx("p",{children:n})]},e))})]}),a.jsxs("section",{className:"mw-learn-section mw-learn-closing",children:[a.jsx("h2",{children:"Why Marsh Warden Matters"}),a.jsx("p",{children:"Wetlands are essential for biodiversity, flood control, water purification, climate resilience, urban cooling, and community well-being. In rapidly urbanizing areas such as Colombo, wetlands face pressure from land reclamation, pollution, infrastructure development, invasive species, and poor waste management."}),a.jsx("p",{children:"Marsh Warden provides a practical bridge between complex environmental documents and everyday users. By making Sri Lanka's environmental laws, policies, strategies, and action plans easier to search, understand, and apply, it supports wetland conservation, environmental education, public participation, and sustainable planning."})]})]}),a.jsx("style",{children:`
        .mw-learn-page {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 88px 24px 40px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #f8fafc;
          background: linear-gradient(rgba(3, 12, 24, 0.62), rgba(3, 12, 24, 0.86)), url(${Cp}) center / cover fixed no-repeat;
        }
        .mw-learn-shell {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          gap: 22px;
        }
        .mw-learn-back {
          position: fixed;
          top: 22px;
          left: 24px;
          z-index: 6;
          height: 38px;
          border: 1px solid rgba(255,255,255,0.34);
          border-radius: 999px;
          padding: 0 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #f8fafc;
          background: rgba(7, 16, 28, 0.32);
          box-shadow: 0 14px 32px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.24);
          backdrop-filter: blur(10px) saturate(1.18);
          -webkit-backdrop-filter: blur(10px) saturate(1.18);
          cursor: pointer;
          font-weight: 800;
        }
        .mw-auth-research-badge {
          position: fixed;
          top: 22px;
          right: 56px;
          z-index: 6;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 36px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.42);
          background: rgba(7, 16, 28, 0.28);
          color: #f8fafc;
          font-size: 12px;
          font-weight: 800;
          box-shadow: 0 14px 32px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.42);
          backdrop-filter: blur(10px) saturate(1.18);
          -webkit-backdrop-filter: blur(10px) saturate(1.18);
        }
        .mw-auth-research-badge span:first-child {
          font-size: 15px;
          line-height: 1;
        }
        .mw-learn-hero {
          min-height: 360px;
          display: grid;
          place-items: center;
          text-align: center;
          align-content: center;
          gap: 14px;
          padding: 60px 22px;
        }
        .mw-learn-leaf {
          font-size: 48px;
          filter: drop-shadow(0 0 18px rgba(166,232,91,0.64));
        }
        .mw-learn-kicker {
          margin: 0;
          color: #a6e85b;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 12px;
        }
        .mw-learn-hero h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(52px, 8vw, 96px);
          line-height: 0.95;
          text-shadow: 0 8px 26px rgba(0,0,0,0.48);
        }
        .mw-learn-hero p {
          margin: 0;
          max-width: 850px;
          font-size: clamp(16px, 1.6vw, 21px);
          line-height: 1.65;
          font-weight: 600;
          color: rgba(248,250,252,0.92);
        }
        .mw-learn-section,
        .mw-learn-card,
        .mw-category-card,
        .mw-learn-closing {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(7, 16, 28, 0.54);
          box-shadow: 0 18px 46px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08);
          backdrop-filter: blur(12px) saturate(1.12);
          -webkit-backdrop-filter: blur(12px) saturate(1.12);
        }
        .mw-learn-section {
          border-radius: 18px;
          padding: clamp(20px, 3vw, 34px);
        }
        .mw-learn-section h2,
        .mw-learn-card h2,
        .mw-learn-card h3,
        .mw-category-card h3 {
          margin: 0 0 12px;
          color: #ffffff;
        }
        .mw-learn-grid,
        .mw-category-grid,
        .mw-learn-list-grid {
          display: grid;
          gap: 16px;
        }
        .mw-learn-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .mw-learn-three {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .mw-category-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .mw-learn-list-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .mw-learn-card,
        .mw-category-card {
          border-radius: 16px;
          padding: 18px;
        }
        .mw-learn-card p,
        .mw-category-card p,
        .mw-learn-closing p {
          margin: 0;
          color: rgba(226,232,240,0.88);
          line-height: 1.58;
        }
        .mw-learn-pill {
          border-radius: 14px;
          padding: 13px 14px;
          background: rgba(46, 201, 111, 0.16);
          border: 1px solid rgba(166,232,91,0.22);
          color: #eaffd6;
          font-weight: 700;
          line-height: 1.45;
        }
        .mw-category-keywords {
          color: #9be445 !important;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 10px !important;
        }
        .mw-category-card details {
          margin-top: 14px;
        }
        .mw-category-card summary {
          cursor: pointer;
          color: #8fd0ff;
          font-weight: 900;
        }
        .mw-category-card ul,
        .mw-learn-clean-list {
          margin: 12px 0 0;
          padding-left: 20px;
          color: rgba(226,232,240,0.9);
          line-height: 1.65;
        }
        .mw-learn-split {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .mw-learn-closing {
          border-radius: 18px;
          padding: clamp(24px, 4vw, 42px);
        }
        .mw-learn-closing p + p {
          margin-top: 14px;
        }
        @media (max-width: 900px) {
          .mw-learn-grid,
          .mw-learn-three,
          .mw-category-grid,
          .mw-learn-list-grid,
          .mw-learn-split {
            grid-template-columns: 1fr;
          }
          .mw-learn-page {
            padding: 82px 14px 30px;
          }
          .mw-learn-back {
            top: 14px;
            left: 14px;
          }
          .mw-auth-research-badge {
            top: 14px;
            right: 14px;
          }
        }
      `})]})}function ry(){const[t,e]=O.useState(null),[n,r]=O.useState([]),[i,o]=O.useState(""),[s,l]=O.useState(!1),u=O.useRef(!1),[c,v]=O.useState(!0),[m,g]=O.useState(!0),[h,k]=O.useState(!1),[S,L]=O.useState("checking"),[f,d]=O.useState("gemini-2.5-flash"),[p,y]=O.useState([]),[E,C]=O.useState(!1),[I,T]=O.useState([]),[D,A]=O.useState({}),[fe,Qe]=O.useState(null),[qt,ci]=O.useState(0),[di,kt]=O.useState(!0),[ir,_]=O.useState(!1),[N,R]=O.useState(!1),V=O.useRef(null),X=O.useRef(null),xn="stateless",De=(t==null?void 0:t.picture)||(t==null?void 0:t.photoURL)||"";O.useEffect(()=>{const w=Hv();w&&e(w)},[]),O.useEffect(()=>{t&&or()},[t]),O.useEffect(()=>{const w=window.matchMedia("(max-width: 760px)"),F=qe=>{const pe=qe.matches;k(pe),g(!pe)};return F(w),w.addEventListener?(w.addEventListener("change",F),()=>w.removeEventListener("change",F)):(w.addListener(F),()=>w.removeListener(F))},[]),O.useEffect(()=>{_(!1)},[De]),O.useEffect(()=>{var w;(w=V.current)==null||w.scrollIntoView({behavior:"smooth"})},[n]),O.useEffect(()=>{const w=window.setInterval(()=>{ci(F=>(F+1)%wc.length)},5e3);return()=>window.clearInterval(w)},[]);const or=async()=>{await Ye(),await wn(),kt(!0)},Ye=async()=>{try{const F=await(await fetch(`${mr}/api/health`)).json();L(F.status==="healthy"?"connected":"error")}catch{L("disconnected")}},wn=async()=>{try{const F=await(await fetch(`${mr}/api/models`)).json();F.available_models&&(y(F.available_models),F.current_model&&d(F.current_model))}catch{}},jl=async()=>{r([]),o(""),kt(!1)},Tp=()=>{r([]),o(""),kt(!1)},Pp=()=>{const w=n.filter(z=>!z.isThinking&&String(z.text||"").trim());if(!w.length){window.alert("No chat messages to export yet.");return}const F=new Date().toLocaleString(),qe=(t==null?void 0:t.name)||"Guest",pe=w.map((z,ne)=>`
      <section class="mw-message ${z.isUser?"mw-user":"mw-assistant"}">
        <div class="mw-message-meta">
          <span>${z.isUser?"Question":"Marsh Warden"}</span>
          <small>#${ne+1}</small>
        </div>
        <div class="mw-message-body">
          ${qv(z.text)}
        </div>
      </section>
    `).join(""),Ne=window.open("","_blank");if(!Ne){window.alert("Please allow popups to export the chat as PDF.");return}Ne.document.open(),Ne.document.write(`<!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Marsh Warden Chat Export</title>
          <style>
            @page { size: A4; margin: 16mm; }
            * { box-sizing: border-box; }
            body { margin: 0; background: #eef7f1; color: #10231b; font-family: Arial, Helvetica, sans-serif; line-height: 1.5; }
            .mw-export-page { max-width: 820px; margin: 0 auto; background: #ffffff; border: 1px solid #d8e8dd; border-radius: 18px; overflow: hidden; box-shadow: 0 18px 45px rgba(31, 91, 70, 0.12); }
            .mw-export-hero { padding: 26px 30px; background: linear-gradient(135deg, #2f8f6d, #3fa57f); color: #ffffff; }
            .mw-export-brand { display: inline-flex; align-items: center; gap: 8px; padding: 7px 12px; border-radius: 999px; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.32); font-size: 12px; font-weight: 700; margin-bottom: 16px; }
            h1 { margin: 0 0 6px; font-size: 28px; letter-spacing: 0; }
            .mw-export-subtitle { margin: 0; opacity: 0.92; font-size: 13px; }
            .mw-export-summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 16px 30px; background: #f8fcf9; border-bottom: 1px solid #d8e8dd; }
            .mw-export-summary div { padding: 10px 12px; border-radius: 10px; background: #ffffff; border: 1px solid #e2eee6; }
            .mw-export-summary span { display: block; font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: #5e7d6d; font-weight: 800; margin-bottom: 3px; }
            .mw-export-summary strong { font-size: 13px; color: #173c2e; }
            .mw-export-content { padding: 24px 30px 30px; }
            .mw-message { page-break-inside: avoid; margin: 0 0 18px; border-radius: 14px; border: 1px solid #dce9e0; overflow: hidden; background: #ffffff; }
            .mw-message-meta { display: flex; justify-content: space-between; align-items: center; padding: 9px 12px; font-size: 12px; font-weight: 800; background: #edf8f1; color: #15543e; border-bottom: 1px solid #dce9e0; }
            .mw-message-meta small { color: #6f8878; font-weight: 700; }
            .mw-user .mw-message-meta { background: #eaf4ff; color: #184e77; }
            .mw-message-body { padding: 14px 16px 16px; font-size: 13px; }
            .mw-export-paragraph { margin: 0 0 10px; }
            h2, h3, h4 { color: #143c2e; margin: 16px 0 8px; page-break-after: avoid; }
            h2 { font-size: 18px; }
            h3 { font-size: 16px; }
            h4 { font-size: 14px; }
            .mw-export-bullet { display: flex; gap: 8px; align-items: flex-start; margin: 0 0 7px; }
            .mw-export-bullet span { color: #2f8f6d; font-weight: 900; }
            .mw-export-bullet p { margin: 0; }
            .mw-export-table { width: 100%; border-collapse: collapse; table-layout: auto; margin: 14px 0 16px; font-size: 11.5px; page-break-inside: avoid; }
            .mw-export-table th { background: #dff3e7; color: #103f2e; text-align: left; font-weight: 800; border: 1px solid #b9d9c6; padding: 8px; vertical-align: top; }
            .mw-export-table td { border: 1px solid #cfe2d6; padding: 8px; vertical-align: top; word-break: break-word; }
            .mw-export-table tr:nth-child(even) td { background: #f7fbf8; }
            .mw-export-footer { margin-top: 22px; padding-top: 14px; border-top: 1px solid #dce9e0; color: #6b7f73; font-size: 11px; text-align: center; }
            @media print {
              body { background: #ffffff; }
              .mw-export-page { box-shadow: none; border-radius: 0; border: none; }
              .mw-message, .mw-export-table { break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <main class="mw-export-page">
            <header class="mw-export-hero">
              <div class="mw-export-brand"><span>&#127760;</span><span>Powered by IWMI Research</span></div>
              <h1>Marsh Warden Chat Export</h1>
              <p class="mw-export-subtitle">Wetland Information &amp; Conservation Policy Assistant - Sri Lanka</p>
            </header>
            <section class="mw-export-summary">
              <div><span>User</span><strong>${ba(qe)}</strong></div>
              <div><span>Exported</span><strong>${ba(F)}</strong></div>
              <div><span>Messages</span><strong>${w.length}</strong></div>
            </section>
            <section class="mw-export-content">
              ${pe}
              <footer class="mw-export-footer">Marsh Warden - Evidence-Based Wetland Conservation Decisions</footer>
            </section>
          </main>
          <script>
            window.onload = () => {
              window.focus();
              setTimeout(() => window.print(), 250);
            };
          <\/script>
        </body>
      </html>`),Ne.document.close()},Ml=async()=>{if(!i.trim()||s||n.filter(z=>z.isUser).length>=bt)return;kt(!1);const F="fast",qe={id:Date.now(),text:i,isUser:!0,mode:F};r(z=>[...z,qe]);const pe=i;o(""),u.current=!0,l(!0);const Ne=Date.now()+1;r(z=>[...z,{id:Ne,text:"",isUser:!1,sources:[],isThinking:!0,mode:F,loadingText:"Searching evidence and preparing the answer..."}]);try{const z=await _a(`${mr}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:pe,mode:F})});if(!z.ok)throw new Error(`HTTP ${z.status}`);const ne=await z.json();r(sr=>sr.map(Xe=>Xe.id===Ne?{...Xe,text:ne.answer,sources:[],citations:ne.citations||[],evidenceSummary:ne.evidence_summary||[],quality:ne.quality||{},confidence:ne.confidence,cache:ne.cache||{hit:!1},isThinking:!1}:Xe))}catch(z){const ne=(z==null?void 0:z.name)==="AbortError";r(sr=>sr.map(Xe=>Xe.id===Ne?{...Xe,text:ne?"⚠️ The request took too long. Retrying or asking a shorter question may help.":`❌ Network error: ${z.message}`,isThinking:!1}:Xe)),ne||(L("disconnected"),setTimeout(Ye,2e3))}finally{u.current=!1,l(!1),r(z=>z.map(ne=>ne.id===Ne?{...ne,isThinking:!1}:ne)),setTimeout(()=>{var z;(z=X.current)==null||z.focus()},300)}},Np=w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),Ml())},Ll=async(w,F)=>{const qe=D[w]||{};try{await fetch(`${mr}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_id:xn,message_id:String(w),rating:F,comment:qe.comment||"",metadata:{mode:"fast"}})}),A(pe=>({...pe,[w]:{...pe[w]||{},submitted:F}}))}catch{A(pe=>({...pe,[w]:{...pe[w]||{},error:"Feedback failed"}}))}},Xt=n.filter(w=>w.isUser).length,fi=S!=="connected"?"32px":0;return!t&&N?a.jsx(ny,{onBack:()=>R(!1)}):t?a.jsxs("div",{style:{display:"flex",height:h?"100dvh":"100vh",width:"100vw",overflow:"hidden",boxSizing:"border-box",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',backgroundColor:c?"#0f172a":"#f8fafc",color:c?"#f1f5f9":"#1e293b"},children:[S!=="connected"&&a.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,padding:"8px",backgroundColor:S==="checking"?"#f59e0b":"#ef4444",color:"#fff",textAlign:"center",fontSize:"14px",fontWeight:"500",zIndex:1e3},children:S==="checking"?"🔄 Connecting to research backend...":`❌ Backend disconnected - ensure Flask is running on ${mr}`}),h&&m&&a.jsx("div",{onClick:()=>g(!1),style:{position:"fixed",inset:0,zIndex:40,backgroundColor:"rgba(15, 23, 42, 0.52)",marginTop:fi}}),a.jsx("div",{onClick:()=>g(!m),style:{position:h?"fixed":"absolute",top:h?"10px":"8px",left:h?m?"calc(min(320px, 86vw) - 48px)":"12px":m?"290px":"16px",zIndex:h?90:50,width:"38px",height:"34px",borderRadius:"10px",background:c?"rgba(15, 23, 42, 0.42)":"rgba(255, 255, 255, 0.62)",border:`1px solid ${c?"rgba(226, 232, 240, 0.24)":"rgba(15, 40, 32, 0.14)"}`,boxShadow:c?"0 12px 28px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.18)":"0 10px 22px rgba(15,40,32,0.12), inset 0 1px 0 rgba(255,255,255,0.78)",backdropFilter:"blur(10px) saturate(1.18)",WebkitBackdropFilter:"blur(10px) saturate(1.18)",display:"flex",alignItems:"center",justifyContent:"center",padding:0,cursor:"pointer",transition:"left 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease",userSelect:"none",color:c?"#fff":"#000",marginTop:fi},children:m?a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[a.jsx("polyline",{points:"11 17 6 12 11 7"}),a.jsx("polyline",{points:"18 17 13 12 18 7"})]}):a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[a.jsx("polyline",{points:"13 17 18 12 13 7"}),a.jsx("polyline",{points:"6 17 11 12 6 7"})]})}),m&&a.jsxs("div",{style:{width:h?"min(320px, 86vw)":"300px",backgroundColor:c?"#1e293b":"#f0fdf4",borderRight:`1px solid ${c?"#334155":"#e2e8f0"}`,padding:h?"58px 14px 18px":"24px 16px",display:"flex",flexDirection:"column",gap:"16px",overflowY:"auto",flexShrink:0,marginTop:fi,...h?{position:"fixed",top:0,bottom:0,left:0,zIndex:80,boxShadow:"22px 0 46px rgba(0, 0, 0, 0.34)"}:{}},children:[a.jsxs("div",{style:{backgroundColor:c?"#070f18":"#fbfffb",border:`1px solid ${c?"rgba(143, 183, 164, 0.42)":"#d8e2dc"}`,borderRadius:"12px",boxShadow:c?"0 10px 24px rgba(0, 0, 0, 0.28)":"0 10px 20px rgba(15, 40, 32, 0.08)",overflow:"hidden",color:c?"#f8fafc":"#1f2933"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"138px",padding:"16px 12px 14px",backgroundColor:c?"#0b1420":"#fbfffb"},children:[De&&!ir?a.jsx("img",{src:De,alt:"","aria-hidden":"true",onError:()=>_(!0),style:{width:"58px",height:"58px",borderRadius:"50%",objectFit:"cover",flexShrink:0}}):a.jsx("div",{style:{width:"58px",height:"58px",borderRadius:"50%",backgroundColor:c?"rgba(255,255,255,0.08)":"#333847",color:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:`1px solid ${c?"rgba(255,255,255,0.10)":"rgba(31,41,55,0.08)"}`,boxShadow:c?"0 12px 28px rgba(0, 0, 0, 0.24)":"0 10px 24px rgba(31, 41, 55, 0.08)"},children:a.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[a.jsx("rect",{x:"3.5",y:"5.5",width:"17",height:"13",rx:"2.4"}),a.jsx("path",{d:"M4.5 7.2 12 12.8l7.5-5.6"})]})}),a.jsxs("div",{style:{minWidth:0,textAlign:"center",marginTop:"9px"},children:[a.jsx("div",{style:{fontSize:"22px",fontWeight:"800",lineHeight:"1.1",color:c?"#f8fafc":"#1f2937"},children:(t==null?void 0:t.name)||"Guest"}),a.jsx("div",{style:{fontSize:"15px",fontWeight:"500",color:c?"#8fd0ad":"#2f8f6d",marginTop:"5px"},children:(t==null?void 0:t.email)||"Sign in"})]})]}),a.jsx("div",{style:{borderTop:`1px solid ${c?"rgba(143, 183, 164, 0.22)":"#d8e2dc"}`,padding:"12px 10px 12px",backgroundColor:c?"#07101a":"#fbfffb",display:"grid",gap:"8px"},children:[{label:"Documentation",onClick:()=>Qe("documentation"),icon:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),a.jsx("path",{d:"M14 2v6h6"}),a.jsx("path",{d:"M8 13h8M8 17h8M8 9h3"})]})},{label:"About Marsh Warden",onClick:()=>Qe("about"),icon:a.jsxs("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"9"}),a.jsx("path",{d:"M12 11v5"}),a.jsx("path",{d:"M12 8h.01"})]})}].map(w=>a.jsxs("button",{type:"button",onClick:w.onClick,style:{width:"100%",minHeight:"44px",borderRadius:"9px",border:`1px solid ${c?"rgba(148, 163, 184, 0.16)":"#e0e7e2"}`,backgroundColor:c?"#0b1420":"#ffffff",boxShadow:c?"0 8px 18px rgba(0, 0, 0, 0.22)":"0 7px 16px rgba(15, 40, 32, 0.10)",color:c?"#f8fafc":"#0f513d",display:"grid",gridTemplateColumns:"26px 1fr 20px",alignItems:"center",gap:"10px",padding:"0 12px",fontSize:"13px",fontWeight:"800",cursor:"pointer",textAlign:"left"},children:[a.jsx("span",{style:{color:c?"#8fd0ad":"#0f6b50",display:"inline-flex"},children:w.icon}),a.jsx("span",{children:w.label}),a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:c?"#8fd0ad":"#0f6b50",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M7 17 17 7"}),a.jsx("path",{d:"M8 7h9v9"})]})]},w.label))})]}),a.jsx("div",{style:{padding:"4px 0 14px",borderBottom:`1px solid ${c?"#263445":"#d9f5e6"}`},children:[{label:"New Conversation",onClick:jl,icon:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"9"}),a.jsx("path",{d:"M12 8v8M8 12h8"})]})},{label:"Clear Conversation",onClick:Tp,icon:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M3 6h18"}),a.jsx("path",{d:"M8 6V4h8v2"}),a.jsx("path",{d:"M6 6l1 14h10l1-14"}),a.jsx("path",{d:"M10 11v5M14 11v5"})]})},{label:"Export Chat",onClick:Pp,icon:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),a.jsx("path",{d:"M14 2v6h6"}),a.jsx("path",{d:"M12 18v-6"}),a.jsx("path",{d:"M9 15l3 3 3-3"})]})},{label:"Sign Out",onClick:()=>{Ep(),e(null)},icon:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M10 17l5-5-5-5"}),a.jsx("path",{d:"M15 12H3"}),a.jsx("path",{d:"M21 19V5a2 2 0 0 0-2-2h-5"})]})}].map(w=>a.jsxs("button",{onClick:w.onClick,style:{width:"100%",height:"34px",padding:"0 2px",border:"none",background:"transparent",color:c?"#d7dee8":"#1f3f33",display:"flex",alignItems:"center",gap:"10px",fontSize:"13px",fontWeight:"600",cursor:"pointer",textAlign:"left"},children:[a.jsx("span",{style:{width:"18px",height:"18px",display:"inline-flex",alignItems:"center",justifyContent:"center",color:c?"#aab5c4":"#3f7d63",flexShrink:0},children:w.icon}),a.jsx("span",{children:w.label})]},w.label))}),a.jsxs("div",{style:{padding:"0 0 12px",borderBottom:`1px solid ${c?"#263445":"#d9f5e6"}`},children:[a.jsx("div",{style:{fontSize:"10px",lineHeight:"1",fontWeight:"800",color:c?"#667286":"#5d7f6c",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"8px"},children:"Preferences"}),a.jsxs("div",{style:{height:"34px",display:"flex",alignItems:"center",justifyContent:"space-between",color:c?"#d7dee8":"#1f3f33",fontSize:"13px",fontWeight:"600"},children:[a.jsx("span",{children:"Theme"}),a.jsxs("button",{type:"button","aria-label":"Toggle theme",onClick:()=>v(!c),style:{position:"relative",width:"58px",height:"28px",borderRadius:"9px",border:`1px solid ${c?"#314257":"#b8dec9"}`,backgroundColor:c?"#172332":"#ecfdf5",cursor:"pointer",padding:0,overflow:"hidden"},children:[a.jsx("span",{style:{position:"absolute",top:"3px",left:c?"4px":"30px",width:"22px",height:"22px",borderRadius:"7px",backgroundColor:Ue.uiGreenDark,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",transition:"left 0.22s ease"},children:c?a.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M21 14.6A8.7 8.7 0 0 1 9.4 3a7.7 7.7 0 1 0 11.6 11.6Z"})}):a.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"4"}),a.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]})}),a.jsx("span",{style:{position:"absolute",top:"7px",right:"9px",color:c?"#8f9caf":"#ca8a04",opacity:c?.75:0,transition:"opacity 0.22s ease"},children:a.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"4"}),a.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"})]})}),a.jsx("span",{style:{position:"absolute",top:"7px",left:"9px",color:"#7a8799",opacity:c?0:.8,transition:"opacity 0.22s ease"},children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M21 14.6A8.7 8.7 0 0 1 9.4 3a7.7 7.7 0 1 0 11.6 11.6Z"})})})]})]})]})]}),fe&&a.jsx("div",{onClick:()=>Qe(null),style:{position:"fixed",inset:0,zIndex:80,backgroundColor:"rgba(15, 23, 42, 0.58)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:a.jsxs("div",{onClick:w=>w.stopPropagation(),style:{width:"min(640px, 100%)",maxHeight:"82vh",overflowY:"auto",borderRadius:"14px",backgroundColor:c?"#111827":"#ffffff",border:`1px solid ${c?"#334155":"#dbe7df"}`,boxShadow:"0 28px 70px rgba(0, 0, 0, 0.32)",color:c?"#e5e7eb":"#1f2933",padding:"22px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",marginBottom:"16px"},children:[a.jsx("h2",{style:{margin:0,fontSize:"20px",fontWeight:"800",color:c?"#f8fafc":"#163428"},children:fe==="documentation"?"Marsh Warden Fast Adaptive Mode":"About Marsh Warden"}),a.jsx("button",{type:"button",onClick:()=>Qe(null),"aria-label":"Close popup",style:{width:"32px",height:"32px",borderRadius:"8px",border:`1px solid ${c?"#334155":"#d8e5dd"}`,backgroundColor:c?"#0f172a":"#f8fbf8",color:c?"#f8fafc":"#254538",cursor:"pointer",fontSize:"18px",lineHeight:"1"},children:"x"})]}),fe==="documentation"?a.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.6"},children:[a.jsx("p",{style:{margin:"0 0 16px"},children:"The chatbot always uses fast retrieval. It gives short answers for direct questions and fuller answers when your prompt asks for detail."}),a.jsx("h3",{style:{margin:"18px 0 8px",fontSize:"15px",fontWeight:"800"},children:"Prompting Guide"}),a.jsx("p",{style:{margin:"0 0 14px"},children:"Use prompt starters such as what are, how many, describe, informative, list, compare, and steps to control answer structure."}),a.jsx("h3",{style:{margin:"18px 0 8px",fontSize:"15px",fontWeight:"800"},children:"Prompt starters:"}),a.jsxs("div",{style:{display:"grid",gap:"6px",marginBottom:"16px"},children:[a.jsxs("div",{children:[a.jsx("strong",{children:"what are"})," - descriptive lists and explanations"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"how many"})," - counts, totals, and categories"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"describe"})," - context-rich explanations"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"informative"})," - detailed answers with headings"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"list"})," - concise bullet points"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"compare"})," - table-style comparisons"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"steps"})," - workflows and procedures"]})]}),a.jsx("h3",{style:{margin:"18px 0 8px",fontSize:"15px",fontWeight:"800"},children:"Example prompts:"}),a.jsxs("div",{style:{display:"grid",gap:"8px",marginBottom:"16px"},children:[a.jsx("div",{children:"What are the rules for sanctuary, national park, and strict nature reserve categories?"}),a.jsx("div",{children:"How many protected area categories are mentioned in the documents?"}),a.jsx("div",{children:"Describe the main threats to Sri Lankan wetlands and list the policy responses."}),a.jsx("div",{children:"Compare national parks and sanctuaries in a table with citations."}),a.jsx("div",{children:"What are the steps for preparing a wetland management plan?"})]}),a.jsx("p",{style:{margin:0},children:"For best results, include exact document names, policy names, years, sections, locations, or agencies when you know them."})]}):a.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.6"},children:[a.jsx("p",{style:{margin:"0 0 16px"},children:"Marsh Warden is a specialized AI expert developed to support wetland conservation and environmental policy analysis."}),a.jsx("h3",{style:{margin:"18px 0 8px",fontSize:"15px",fontWeight:"800"},children:"Purpose:"}),a.jsxs("div",{style:{display:"grid",gap:"6px",marginBottom:"16px"},children:[a.jsx("div",{children:"Wetland conservation, restoration, and sustainable management"}),a.jsx("div",{children:"Environmental policy analysis and implementation"}),a.jsx("div",{children:"Nature-based solutions and ecosystem services"}),a.jsx("div",{children:"Regulatory frameworks and compliance"})]}),a.jsx("h3",{style:{margin:"18px 0 8px",fontSize:"15px",fontWeight:"800"},children:"Target Users:"}),a.jsxs("div",{style:{display:"grid",gap:"6px"},children:[a.jsx("div",{children:"Environmental policymakers"}),a.jsx("div",{children:"Conservation professionals"}),a.jsx("div",{children:"Regulatory compliance officers"}),a.jsx("div",{children:"Environmental researchers"}),a.jsx("div",{children:"Sustainable development partners"})]})]})]})}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflowY:"auto",overflowX:"hidden",minWidth:0,height:"100%",boxSizing:"border-box",marginTop:fi},children:[a.jsxs("header",{style:{position:"relative",height:h?"220px":"250px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingTop:h?"38px":"48px",color:"#fff",flexShrink:0,overflow:"hidden",transition:"transform 0.28s ease, box-shadow 0.28s ease, filter 0.28s ease",boxShadow:"none"},children:[wc.map((w,F)=>a.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,background:`url(${w}) center/cover no-repeat`,opacity:F===qt?1:0,transition:"opacity 2.6s ease-in-out"}},w)),a.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"100%",zIndex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.28)"}}),a.jsxs("div",{style:{position:"absolute",top:h?"12px":"20px",right:h?"12px":"30px",display:"flex",alignItems:"center",gap:"8px",background:"rgba(255,255,255,0)",backdropFilter:"blur(1.5px)",WebkitBackdropFilter:"blur(1.5px)",padding:h?"7px 10px":"8px 14px",borderRadius:"20px",fontSize:h?"11px":"12px",fontWeight:"700",zIndex:12,border:"1px solid rgba(255,255,255,0.58)",boxShadow:"0 12px 28px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -1px 0 rgba(255,255,255,0.18)",transition:"transform 0.28s ease, box-shadow 0.28s ease, opacity 0.28s ease"},children:[a.jsx("span",{"aria-hidden":"true",style:{fontSize:"14px",lineHeight:1},children:"🌎"}),a.jsx("span",{children:"Powered by IWMI Research"})]}),a.jsx("div",{style:{position:"relative",zIndex:10,height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:h?"0 14px 58px":"0 20px 88px"},children:a.jsxs("div",{className:"mw-hero-title-card",style:{maxWidth:h?"min(370px, calc(100vw - 34px))":"520px",width:h?"100%":"auto",boxSizing:"border-box",padding:h?"15px 16px":"18px 22px",borderRadius:"16px",background:"linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.04) 42%, rgba(75,222,128,0.18))",border:"1px solid rgba(255,255,255,0.58)",boxShadow:"0 24px 56px rgba(0,0,0,0.30), 0 0 34px rgba(125, 220, 62, 0.26), inset 0 1px 0 rgba(255,255,255,0.82), inset 0 -1px 0 rgba(255,255,255,0.20)",backdropFilter:"blur(3px) saturate(1.18)",WebkitBackdropFilter:"blur(3px) saturate(1.18)",transformStyle:"preserve-3d",overflow:"hidden"},children:[a.jsx("h1",{className:"mw-hero-title",style:{fontSize:h?"25px":"34px",fontWeight:"800",margin:"0 0 8px",textAlign:"center",transition:"transform 0.32s ease, opacity 0.32s ease"},children:"Marsh Warden"}),a.jsx("p",{className:"mw-hero-subtitle",style:{fontSize:h?"12px":"14px",opacity:.95,margin:0,textAlign:"center",transition:"transform 0.32s ease, opacity 0.32s ease"},children:"Wetland Information & Conservation Policy Assistant - Sri Lanka"})]})})]}),a.jsxs("div",{style:{padding:h?"16px 10px 12px":"24px 32px",display:"flex",flexDirection:"column",alignItems:"center",boxSizing:"border-box",backgroundColor:c?"#111827":"#f8fafc"},children:[a.jsxs("div",{style:{width:"100%",maxWidth:"800px",boxSizing:"border-box",marginBottom:h?"12px":"16px",padding:"12px",borderRadius:"12px",backgroundColor:c?"#0f172a":"#ffffff",border:`1px solid ${c?"#334155":"#dbeafe"}`,display:"flex",flexDirection:h?"column":"row",alignItems:h?"stretch":"center",justifyContent:"space-between",gap:h?"10px":"12px",flexWrap:"wrap"},children:[a.jsxs("div",{style:{width:h?"100%":"auto"},children:[a.jsx("div",{style:{fontSize:h?"11px":"12px",fontWeight:"800",letterSpacing:"0.04em",color:c?"#cbd5e1":"#334155",marginBottom:"3px"},children:"RESPONSE MODE"}),a.jsx("div",{style:{fontSize:h?"12px":"13px",color:c?"#94a3b8":"#64748b"},children:"Fast retrieval is always used. Detailed prompts still receive fuller, structured answers."})]}),a.jsx("div",{style:{display:"flex",gap:"8px",width:h?"100%":"auto",boxSizing:"border-box",backgroundColor:c?"#111827":"#f1f5f9",padding:"4px",borderRadius:"12px",border:`1px solid ${c?"#334155":"#e2e8f0"}`},children:a.jsx("div",{style:{minWidth:h?0:"148px",width:h?"100%":"auto",height:"34px",padding:"0 12px",borderRadius:"9px",backgroundColor:Ue.uiGreenDark,color:"#fff",fontWeight:"800",fontSize:h?"12px":"13px",display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap"},children:"Fast Adaptive"})})]}),Xt>=12&&a.jsxs("div",{style:{width:"100%",maxWidth:"800px",backgroundColor:"#fffbeb",border:"1px solid #f59e0b",borderRadius:"8px",padding:"12px 16px",marginBottom:"16px",color:"#92400e",fontWeight:"500",textAlign:"center"},children:[Xt>=bt?`⚠️ You have reached the ${bt}-question limit for this session.`:`💡 ${Xt}/${bt} questions used. Consider starting a new chat soon.`,a.jsx("button",{onClick:jl,style:{marginLeft:"12px",padding:"4px 12px",backgroundColor:"#92400e",color:"#fff",border:"none",borderRadius:"20px",cursor:"pointer",fontSize:"12px",fontWeight:"600"},children:"New Chat"})]}),n.length===0&&a.jsx("div",{style:{backgroundColor:c?"#0c4a6e":"#e0f2fe",borderRadius:h?"0":"12px",padding:h?"22px 14px 24px":di?"24px":"18px 20px",width:"100%",maxWidth:"800px",boxSizing:"border-box",borderLeft:h?"none":"4px solid #38bdf8",marginTop:h?"20px":"16px",color:c?"#f1f5f9":"#1e293b"},children:di?a.jsxs(a.Fragment,{children:[a.jsx("h3",{style:{margin:"0 0 12px",fontSize:"17px",fontWeight:"700"},children:"🌿 Welcome to Marsh Warden"}),a.jsx("p",{style:{margin:"0 0 12px",fontSize:h?"13px":"14px",lineHeight:"1.45"},children:"I'm your AI-powered expert for Sri Lankan wetland conservation. Ask me about:"}),a.jsxs("ul",{style:{margin:"0",paddingLeft:"18px",fontSize:h?"12px":"13px",lineHeight:h?"1.7":"1.75"},children:[a.jsx("li",{children:"Wetland conservation strategies & restoration techniques"}),a.jsx("li",{children:"Environmental policy frameworks & regulatory compliance"}),a.jsx("li",{children:"Nature-based solutions & ecosystem services"}),a.jsx("li",{children:"Climate adaptation through wetland management"}),a.jsx("li",{children:"Biodiversity conservation policies & legislation"})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("h3",{style:{margin:"0 0 8px",fontSize:"16px",fontWeight:"800"},children:"Marsh Warden"}),a.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.55"},children:"A focused assistant for Sri Lankan wetland conservation, environmental policy, ecosystem services, and climate adaptation guidance."})]})}),n.map(w=>{var F,qe,pe,Ne,z,ne;return a.jsxs("div",{style:{width:"100%",maxWidth:"800px",display:"flex",gap:h?"8px":"12px",alignItems:"flex-start",marginTop:"16px",justifyContent:w.isUser?"flex-end":"flex-start"},children:[!w.isUser&&a.jsx("div",{style:{width:h?"30px":"36px",height:h?"30px":"36px",minWidth:h?"30px":"36px",borderRadius:"50%",backgroundColor:Ue.primary,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:h?"14px":"16px",flexShrink:0},children:"🌿"}),a.jsxs("div",{style:{flex:w.isUser?"0 1 auto":1,minWidth:"100px",width:w.isUser?"auto":"100%"},children:[a.jsx("div",{style:{padding:h?"11px 12px":"12px 16px",borderRadius:"12px",backgroundColor:w.isUser?Ue.deepBlue:c?"#374151":"#fff",color:w.isUser?"#fff":c?"#e5e7eb":"#111827",boxShadow:c?"none":"0 2px 8px rgba(0,0,0,0.08)",border:w.isUser?"none":`1px solid ${c?"#374151":"#e5e7eb"}`,fontSize:h?"14px":"15px",lineHeight:"1.5"},children:w.isUser?w.text:w.isThinking?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:Ue.primary,animation:"pulse 1.5s infinite ease-in-out"}}),a.jsx("span",{style:{fontStyle:"italic",opacity:.8},children:w.loadingText||"Researching..."})]}):a.jsxs(a.Fragment,{children:[w.mode&&a.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",marginBottom:"8px",padding:"2px 8px",borderRadius:"10px",fontSize:"11px",fontWeight:"600",backgroundColor:w.mode==="fast"?"rgba(26,117,159,0.15)":"rgba(24,78,119,0.15)",color:w.mode==="fast"?Ue.primary:Ue.deepBlue,border:`1px solid ${w.mode==="fast"?"rgba(26,117,159,0.3)":"rgba(24,78,119,0.3)"}`},children:"Fast Adaptive Mode"}),Yv(w.text,c)]})}),!w.isUser&&!w.isThinking&&w.text&&a.jsxs("div",{style:{marginTop:"8px",display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap",fontSize:"12px",color:c?"#9ca3af":"#64748b"},children:[a.jsx("span",{children:"Helpful?"}),a.jsx("button",{type:"button",onClick:()=>Ll(w.id,"up"),style:{padding:"4px 8px",borderRadius:"6px",border:`1px solid ${c?"#4b5563":"#d1d5db"}`,backgroundColor:((F=D[w.id])==null?void 0:F.submitted)==="up"?Ue.uiGreen:"transparent",color:((qe=D[w.id])==null?void 0:qe.submitted)==="up"?"#fff":c?"#d1d5db":"#374151",cursor:"pointer",fontSize:"12px"},children:"Yes"}),a.jsx("button",{type:"button",onClick:()=>Ll(w.id,"down"),style:{padding:"4px 8px",borderRadius:"6px",border:`1px solid ${c?"#4b5563":"#d1d5db"}`,backgroundColor:((pe=D[w.id])==null?void 0:pe.submitted)==="down"?"#b45309":"transparent",color:((Ne=D[w.id])==null?void 0:Ne.submitted)==="down"?"#fff":c?"#d1d5db":"#374151",cursor:"pointer",fontSize:"12px"},children:"No"}),a.jsx("input",{type:"text",value:((z=D[w.id])==null?void 0:z.comment)||"",onChange:sr=>A(Xe=>({...Xe,[w.id]:{...Xe[w.id]||{},comment:sr.target.value}})),placeholder:"Optional comment",style:{flex:"1 1 180px",minWidth:"160px",maxWidth:"320px",height:"28px",padding:"0 8px",borderRadius:"6px",border:`1px solid ${c?"#4b5563":"#d1d5db"}`,backgroundColor:c?"#111827":"#fff",color:c?"#e5e7eb":"#111827"}}),((ne=D[w.id])==null?void 0:ne.submitted)&&a.jsx("span",{style:{color:Ue.uiGreen},children:"Saved"})]})]}),w.isUser&&a.jsx("div",{style:{width:h?"30px":"36px",height:h?"30px":"36px",minWidth:h?"30px":"36px",borderRadius:"50%",backgroundColor:Ue.deepBlue,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:h?"14px":"16px",flexShrink:0},children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",style:{display:"block"},children:[a.jsx("path",{d:"M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z",fill:"currentColor"}),a.jsx("path",{d:"M3 20c0-3.866 3.134-7 7-7h4c3.866 0 7 3.134 7 7v1H3v-1z",fill:"currentColor"})]})})]},w.id)}),a.jsx("div",{ref:V})]}),a.jsxs("div",{style:{position:"sticky",bottom:0,zIndex:20,marginTop:h?"auto":0,padding:h?"12px 10px 12px":"16px 32px 24px",display:"flex",flexDirection:"column",alignItems:"center",boxSizing:"border-box",background:c?"linear-gradient(to top, rgba(15,23,42,0.98), rgba(15,23,42,0.88), rgba(15,23,42,0))":"linear-gradient(to top, rgba(248,250,252,0.98), rgba(248,250,252,0.9), rgba(248,250,252,0))"},children:[a.jsx("div",{style:{fontSize:h?"10px":"12px",color:"#64748b",marginBottom:h?"8px":"10px",textAlign:"center",lineHeight:"1.3"},children:"🌿 Marsh Warden — Evidence-Based Wetland Conservation Decisions"}),a.jsxs("div",{style:{width:"100%",maxWidth:"800px",boxSizing:"border-box",backgroundColor:c?"#1e293b":"#fff",borderRadius:h?"22px":"24px",display:"flex",alignItems:"center",padding:h?"7px 8px 7px 12px":"8px 16px",gap:h?"6px":"8px",flexWrap:"nowrap",boxShadow:"0 10px 25px -5px rgba(0,0,0,0.1)",border:`1px solid ${c?"#334155":"#e2e8f0"}`},children:[a.jsx("textarea",{ref:X,value:i,onChange:w=>o(w.target.value),onKeyDown:Np,disabled:s||Xt>=bt,rows:1,placeholder:Xt>=bt?"Message limit reached. Start a new chat.":"Ask about wetland conservation, policy, ecosystems...",style:{flex:"1 1 auto",minWidth:0,border:"none",outline:"none",resize:"none",padding:"10px 0",fontSize:h?"14px":"15px",background:"transparent",color:c?"#f1f5f9":"#1e293b",fontFamily:"inherit",lineHeight:"1.5"}}),a.jsx("button",{onClick:Ml,disabled:!i.trim()||s||Xt>=bt,style:{width:h?"38px":"40px",height:h?"38px":"40px",borderRadius:"50%",border:"none",marginLeft:0,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"background-color 0.2s",backgroundColor:!i.trim()||s||Xt>=bt?"rgba(63,165,127,0.45)":Ue.uiGreen,color:"#fff"},children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",style:{width:"18px",height:"18px"},children:a.jsx("path",{d:"M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z"})})})]})]})]}),a.jsx("style",{children:`
        @keyframes headerReveal {
          0% { opacity:0; transform:translateY(18px) scale(0.985); }
          100% { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes headerShadeFlow {
          0% { box-shadow:0 18px 36px rgba(47,143,109,0.18); filter:brightness(1); }
          50% { box-shadow:0 24px 48px rgba(47,143,109,0.28); filter:brightness(1.03); }
          100% { box-shadow:0 18px 36px rgba(47,143,109,0.18); filter:brightness(1); }
        }
        @keyframes mwHeroTitleCard3d {
          0%, 100% {
            transform:perspective(780px) rotateX(0deg) rotateY(-2deg) translateY(0) scale(1);
            box-shadow:0 24px 56px rgba(0,0,0,0.30), 0 0 34px rgba(125,220,62,0.26), inset 0 1px 0 rgba(255,255,255,0.82), inset 0 -1px 0 rgba(255,255,255,0.20);
            filter:brightness(1.06) saturate(1.08);
          }
          50% {
            transform:perspective(780px) rotateX(2.6deg) rotateY(2deg) translateY(-4px) scale(1.015);
            box-shadow:0 30px 64px rgba(0,0,0,0.34), 0 0 46px rgba(190,255,118,0.38), 0 0 18px rgba(56,189,248,0.18), inset 0 1px 0 rgba(255,255,255,0.92), inset 0 -1px 0 rgba(255,255,255,0.26);
            filter:brightness(1.16) saturate(1.14);
          }
        }
        @keyframes mwHeroTitleShine {
          0% { transform:translateX(-140%) skewX(-18deg); opacity:0; }
          26% { opacity:0.54; }
          64% { opacity:0.24; }
          100% { transform:translateX(170%) skewX(-18deg); opacity:0; }
        }
        @keyframes mwHeroTextGlow {
          0%, 100% { text-shadow:0 2px 12px rgba(0,0,0,0.34), 0 0 16px rgba(185,255,109,0.26); }
          50% { text-shadow:0 3px 16px rgba(0,0,0,0.42), 0 0 28px rgba(205,255,135,0.58); }
        }
        @keyframes buttonShadeFlow {
          0% { box-shadow:0 6px 14px rgba(47,143,109,0.10); filter:brightness(1); }
          50% { box-shadow:0 10px 22px rgba(47,143,109,0.18); filter:brightness(1.04); }
          100% { box-shadow:0 6px 14px rgba(47,143,109,0.10); filter:brightness(1); }
        }
        @keyframes researchBadgeShade {
          0% { background-position:0% 50%; box-shadow:0 8px 20px rgba(31,120,92,0.22); filter:brightness(1); }
          50% { background-position:100% 50%; box-shadow:0 10px 24px rgba(54,180,132,0.34); filter:brightness(1.06); }
          100% { background-position:0% 50%; box-shadow:0 8px 20px rgba(31,120,92,0.22); filter:brightness(1); }
        }
        @keyframes pulse {
          0%   { transform:scale(0.8); opacity:0.5; }
          50%  { transform:scale(1.2); opacity:1; }
          100% { transform:scale(0.8); opacity:0.5; }
        }
        .mw-hero-title-card {
          position:relative;
          animation:headerReveal 620ms ease-out, mwHeroTitleCard3d 10s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          transition:transform 900ms cubic-bezier(0.2, 0, 0.2, 1), filter 900ms cubic-bezier(0.2, 0, 0.2, 1);
          will-change:transform, box-shadow, filter;
        }
        .mw-hero-title-card::before {
          content:"";
          position:absolute;
          inset:-28% -18%;
          background:linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.04) 34%, rgba(255,255,255,0.72) 48%, rgba(189,255,117,0.34) 56%, transparent 72%);
          animation:mwHeroTitleShine 8.5s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events:none;
        }
        .mw-hero-title-card:hover {
          animation-play-state:paused;
          transform:perspective(780px) rotateX(3deg) rotateY(2.4deg) translateY(-5px) scale(1.02);
          filter:brightness(1.18) saturate(1.16);
        }
        .mw-hero-title,
        .mw-hero-subtitle {
          position:relative;
          z-index:1;
          animation:mwHeroTextGlow 10s cubic-bezier(0.45, 0, 0.2, 1) infinite;
        }
        button {
          transition:transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
        }
        button:hover:not(:disabled) {
          transform:translateY(-1px);
          box-shadow:0 10px 22px rgba(0,0,0,0.14);
        }
        button:active:not(:disabled) {
          transform:translateY(0);
          box-shadow:0 4px 10px rgba(0,0,0,0.12);
        }
        button:disabled {
          animation:none;
        }
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:rgba(156,163,175,0.4); border-radius:3px; }
        textarea { line-height:1.5; }
        textarea:disabled { cursor:not-allowed; }
      `})]}):a.jsxs("div",{className:"mw-auth-page",children:[a.jsxs("div",{className:"mw-auth-research-badge","aria-label":"Powered by IWMI Research",children:[a.jsx("span",{"aria-hidden":"true",children:"🌎"}),a.jsx("span",{children:"Powered by IWMI Research"})]}),a.jsxs("div",{className:"mw-auth-shell",children:[a.jsxs("section",{className:"mw-auth-brand",children:[a.jsx("div",{className:"mw-brand-logo","aria-hidden":"true",children:a.jsxs("svg",{width:"88",height:"88",viewBox:"0 0 96 96",fill:"none",children:[a.jsx("path",{d:"M30 68c14-19 29-31 45-40",stroke:"#9be445",strokeWidth:"5",strokeLinecap:"round"}),a.jsx("path",{d:"M44 51c-13-5-18-14-15-27 12 5 17 14 15 27Z",fill:"#a4df45"}),a.jsx("path",{d:"M55 42c-11-9-12-19-4-31 10 9 11 20 4 31Z",fill:"#c6f168"}),a.jsx("path",{d:"M62 55c-13 2-22-2-28-13 13-3 23 1 28 13Z",fill:"#7dcc3e"}),a.jsx("path",{d:"M74 41c-12 4-21 1-27-9 12-5 22-2 27 9Z",fill:"#a8e75b"}),a.jsx("path",{d:"M56 69c-12 1-20-3-25-13 12-2 21 2 25 13Z",fill:"#77bf39"})]})}),a.jsxs("h1",{className:"mw-brand-title",children:[a.jsx("span",{children:"Marsh"}),a.jsx("span",{children:"Warden"})]}),a.jsx("p",{className:"mw-brand-subtitle",children:"Wetland Conservation & Policy Research Portal — Sri Lanka"}),a.jsxs("div",{className:"mw-brand-rule","aria-hidden":"true",children:[a.jsx("span",{}),a.jsx("b",{}),a.jsx("span",{})]}),a.jsxs("button",{type:"button",className:"mw-learn-more-button",onClick:()=>R(!0),children:[a.jsx("span",{children:"Learn More"}),a.jsx("span",{className:"mw-learn-more-arrow","aria-hidden":"true",children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[a.jsx("path",{d:"M5 12h13",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"}),a.jsx("path",{d:"m13 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),a.jsxs("p",{className:"mw-brand-copy",children:["Connecting data, people and nature",a.jsx("br",{}),"for a sustainable future."]}),a.jsxs("div",{className:"mw-brand-features",children:[a.jsxs("div",{className:"mw-brand-feature",children:[a.jsx("span",{className:"mw-feature-icon mw-feature-green",children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[a.jsx("path",{d:"M20 4C10 4 5 8.8 5 16.5c0 1.1.2 2.1.7 3 1-.2 2.2-.6 3.5-1.3C15.8 14.8 18.7 9.4 20 4Z",fill:"currentColor"}),a.jsx("path",{d:"M4 20c3-6.1 7.2-9.2 12.4-11.4",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})]})}),a.jsxs("div",{children:[a.jsxs("strong",{children:["Protect",a.jsx("br",{}),"Wetlands"]}),a.jsx("p",{children:"Preserve life"})]})]}),a.jsxs("div",{className:"mw-brand-feature",children:[a.jsx("span",{className:"mw-feature-icon mw-feature-blue",children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[a.jsx("path",{d:"M5 19V9h3v10H5Zm5 0V5h3v14h-3Zm5 0v-7h3v7h-3Z",fill:"currentColor"}),a.jsx("path",{d:"M4 20h16",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}),a.jsxs("div",{children:[a.jsxs("strong",{children:["Research",a.jsx("br",{}),"Insights"]}),a.jsx("p",{children:"Data that matters"})]})]}),a.jsxs("div",{className:"mw-brand-feature",children:[a.jsx("span",{className:"mw-feature-icon mw-feature-purple",children:a.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 19c.5-3.4 2.2-5.2 4.5-5.2s4 1.8 4.5 5.2h-9Zm8.4 0c.4-2.4 1.8-3.8 4.1-3.8 2.2 0 3.6 1.4 4.1 3.8h-8.2Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"})})}),a.jsxs("div",{children:[a.jsxs("strong",{children:["Collaborate",a.jsx("br",{}),"Better"]}),a.jsx("p",{children:"Stronger impact"})]})]})]}),a.jsxs("p",{className:"mw-brand-quote",children:[a.jsx("span",{children:"“"}),"Healthy wetlands, thriving tomorrow.”"]})]}),a.jsxs("section",{className:"mw-auth-panel",children:[a.jsx("div",{className:"mw-auth-card-logo",children:a.jsxs("svg",{width:"78",height:"78",viewBox:"0 0 96 96",fill:"none","aria-hidden":"true",children:[a.jsx("circle",{cx:"48",cy:"48",r:"40",fill:"#06452d"}),a.jsx("path",{d:"M30 68c14-19 29-31 45-40",stroke:"#9be445",strokeWidth:"5",strokeLinecap:"round"}),a.jsx("path",{d:"M44 51c-13-5-18-14-15-27 12 5 17 14 15 27Z",fill:"#a4df45"}),a.jsx("path",{d:"M55 42c-11-9-12-19-4-31 10 9 11 20 4 31Z",fill:"#c6f168"}),a.jsx("path",{d:"M62 55c-13 2-22-2-28-13 13-3 23 1 28 13Z",fill:"#7dcc3e"}),a.jsx("path",{d:"M74 41c-12 4-21 1-27-9 12-5 22-2 27 9Z",fill:"#a8e75b"})]})}),a.jsx("h2",{children:"Welcome Back"}),a.jsx("span",{className:"mw-auth-accent"}),a.jsxs("p",{className:"mw-auth-panel-copy",children:["Sign in to access the Wetland Conservation",a.jsx("br",{}),"& Policy Research Portal"]}),a.jsx(Gv,{onLogin:e}),a.jsxs("div",{className:"mw-auth-security",children:[a.jsx("span",{children:a.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[a.jsx("path",{d:"M12 3.3 20 6v5.6c0 4.6-3.2 7.8-8 9.1-4.8-1.3-8-4.5-8-9.1V6l8-2.7Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),a.jsx("path",{d:"M9 12.1l2 2 4-4.2",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round"})]})}),a.jsxs("div",{children:[a.jsx("strong",{children:"Your data is secure and private"}),a.jsx("p",{children:"We respect your privacy"})]})]}),a.jsx("img",{className:"mw-auth-footer-art",src:Kv,alt:"","aria-hidden":"true"})]})]}),a.jsxs("div",{className:"mw-auth-secure-note",children:[a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[a.jsx("path",{d:"M7 11V8a5 5 0 0 1 10 0v3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),a.jsx("path",{d:"M6 11h12v9H6v-9Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"})]}),"Secure sign-in for WCPA Research Portal"]}),a.jsx("style",{children:`
        .mw-auth-page {
          position: relative;
          height: 100vh;
          width: 100vw;
          display: grid;
          place-items: center;
          overflow: hidden;
          padding: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: url(${Cp}) center / cover no-repeat;
          color: #f8fafc;
        }
        .mw-auth-research-badge {
          position: absolute;
          top: 22px;
          right: 56px;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 36px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.42);
          background: rgba(7, 16, 28, 0.22);
          color: #f8fafc;
          font-size: 12px;
          font-weight: 800;
          box-shadow: 0 14px 32px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.42);
          backdrop-filter: blur(10px) saturate(1.18);
          -webkit-backdrop-filter: blur(10px) saturate(1.18);
        }
        .mw-auth-research-badge span:first-child {
          font-size: 15px;
          line-height: 1;
        }
        .mw-auth-shell {
          position: relative;
          width: min(1480px, calc(100vw - 32px));
          height: calc(100vh - 32px);
          max-height: 1024px;
          display: grid;
          grid-template-columns: minmax(500px, 1fr) minmax(430px, 590px);
          gap: clamp(34px, 4.2vw, 64px);
          align-items: center;
          padding: clamp(28px, 5.2vh, 70px) clamp(36px, 5.8vw, 90px) clamp(54px, 6.2vh, 82px);
          border-radius: 20px;
          border: 1px solid rgba(185,224,255,0.24);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06), 0 24px 78px rgba(0,0,0,0.42);
          background: transparent;
          transform: scale(0.75);
          transform-origin: center center;
        }
        .mw-auth-brand {
          position: relative;
          z-index: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          min-height: 0;
          padding-top: clamp(12px, 5.7vh, 58px);
        }
        .mw-brand-logo {
          width: clamp(58px, 8.8vh, 96px);
          height: clamp(58px, 8.8vh, 96px);
          display: grid;
          place-items: center;
          margin-bottom: 10px;
          filter: drop-shadow(0 0 18px rgba(141,224,55,0.42));
        }
        .mw-brand-logo svg {
          width: 100%;
          height: 100%;
        }
        .mw-brand-title {
          display: flex;
          justify-content: center;
          gap: clamp(12px, 1.5vw, 22px);
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(44px, min(5vw, 7.2vh), 76px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0;
          color: #f5f7fb;
          text-shadow: 0 5px 20px rgba(0,0,0,0.54);
        }
        .mw-brand-title span:last-child {
          color: #a6e85b;
        }
        .mw-brand-subtitle {
          margin: clamp(16px, 2.6vh, 28px) 0 0;
          font-size: clamp(15px, 1.35vw, 20px);
          font-weight: 700;
          text-shadow: 0 2px 10px rgba(0,0,0,0.35);
        }
        .mw-brand-rule {
          display: grid;
          grid-template-columns: 1fr 34px 1fr;
          align-items: center;
          gap: 18px;
          width: min(390px, 80%);
          margin: clamp(18px, 3.4vh, 36px) auto clamp(16px, 2.6vh, 26px);
        }
        .mw-brand-rule span {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.38));
        }
        .mw-brand-rule span:last-child {
          background: linear-gradient(90deg, rgba(255,255,255,0.38), transparent);
        }
        .mw-brand-rule b {
          height: 4px;
          border-radius: 999px;
          background: #5ec849;
          box-shadow: 0 0 14px rgba(94,200,73,0.8);
        }
        .mw-learn-more-button {
          width: min(250px, 78%);
          height: 56px;
          border: 1px solid rgba(255,255,255,0.58);
          border-radius: 999px;
          display: inline-grid;
          grid-template-columns: 1fr 46px;
          align-items: center;
          gap: 8px;
          padding: 5px 6px 5px 28px;
          margin: 0 0 clamp(20px, 3vh, 34px);
          color: #ffffff;
          background: linear-gradient(110deg, #2ecb6e 0%, #22b981 34%, #079dd7 68%, #2ecb6e 100%);
          background-size: 220% 100%;
          box-shadow: 0 16px 34px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.28);
          font-family: inherit;
          font-size: 15px;
          font-weight: 900;
          cursor: pointer;
          text-shadow: 0 1px 2px rgba(0,0,0,0.22);
          animation: mwLearnMoreColorFlow 9s cubic-bezier(0.45, 0, 0.2, 1) infinite;
        }
        .mw-learn-more-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.34);
        }
        .mw-learn-more-button:active {
          transform: translateY(0);
        }
        .mw-learn-more-arrow {
          width: 42px;
          height: 42px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.72);
          background: rgba(255,255,255,0.08);
        }
        .mw-learn-more-arrow svg {
          width: 22px;
          height: 22px;
        }
        @keyframes mwLearnMoreColorFlow {
          0%, 100% {
            background-position: 0% 50%;
            filter: brightness(1);
          }
          50% {
            background-position: 100% 50%;
            filter: brightness(1.08);
          }
        }
        .mw-brand-copy {
          margin: 0;
          font-size: clamp(17px, 1.5vw, 22px);
          line-height: 1.45;
          font-weight: 500;
          text-shadow: 0 2px 14px rgba(0,0,0,0.4);
        }
        .mw-brand-features {
          width: min(655px, 100%);
          margin-top: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding: clamp(12px, 1.8vh, 18px) clamp(14px, 1.5vw, 20px);
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.11);
          background: rgba(6,20,24,0.52);
          box-shadow: 0 16px 34px rgba(0,0,0,0.28);
        }
        .mw-brand-feature {
          display: grid;
          grid-template-columns: clamp(46px, 5.6vh, 60px) 1fr;
          gap: clamp(10px, 1vw, 14px);
          align-items: center;
          text-align: left;
        }
        .mw-feature-icon {
          width: clamp(44px, 5.8vh, 58px);
          height: clamp(44px, 5.8vh, 58px);
          border-radius: 999px;
          display: grid;
          place-items: center;
        }
        .mw-feature-icon svg {
          width: 58%;
          height: 58%;
        }
        .mw-feature-green { color: #a5f04d; background: rgba(77,151,38,0.28); border: 2px solid rgba(148,224,64,0.44); }
        .mw-feature-blue { color: #5cc7ff; background: rgba(25,122,178,0.24); border: 2px solid rgba(62,183,250,0.52); }
        .mw-feature-purple { color: #d083ff; background: rgba(112,47,151,0.26); border: 2px solid rgba(194,105,255,0.5); }
        .mw-brand-feature strong {
          display: block;
          color: #fff;
          font-size: clamp(13px, 1.05vw, 16px);
          line-height: 1.22;
        }
        .mw-brand-feature p {
          margin: 9px 0 0;
          color: rgba(255,255,255,0.78);
          font-size: clamp(12px, 0.95vw, 14px);
        }
        .mw-brand-quote {
          align-self: flex-start;
          margin: clamp(14px, 2vh, 22px) 0 0 72px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(15px, 1.3vw, 19px);
          font-style: italic;
          font-weight: 700;
          color: rgba(255,255,255,0.94);
          text-shadow: 0 2px 12px rgba(0,0,0,0.48);
        }
        .mw-brand-quote span {
          color: #96e845;
          font-size: 42px;
          line-height: 0;
          vertical-align: -10px;
          margin-right: 8px;
        }
        .mw-auth-panel {
          position: relative;
          z-index: 1;
          height: min(835px, 100%);
          min-height: 0;
          align-self: center;
          padding: clamp(28px, 5.2vh, 54px) clamp(42px, 4.9vw, 74px) clamp(96px, 14vh, 152px);
          border-radius: 18px;
          text-align: center;
          color: #10233d;
          overflow: hidden;
          background: radial-gradient(circle at 20% 10%, rgba(125,205,91,0.16), transparent 23%), linear-gradient(145deg, rgba(255,255,255,0.95), rgba(235,248,255,0.94));
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow: 0 30px 70px rgba(0,0,0,0.36);
        }
        .mw-auth-panel::before {
          content: "";
          position: absolute;
          top: -120px;
          right: -130px;
          width: 340px;
          height: 340px;
          border-radius: 999px;
          border: 1px solid rgba(105,142,156,0.12);
          box-shadow:
            -34px 34px 0 20px rgba(255,255,255,0),
            -34px 34px 0 21px rgba(105,142,156,0.1),
            -68px 68px 0 42px rgba(255,255,255,0),
            -68px 68px 0 43px rgba(105,142,156,0.08);
        }
        .mw-auth-card-logo {
          position: relative;
          width: clamp(76px, 11vh, 118px);
          height: clamp(76px, 11vh, 118px);
          display: grid;
          place-items: center;
          margin: 0 auto clamp(14px, 2.3vh, 24px);
          border-radius: 999px;
          background: rgba(209,244,232,0.82);
          box-shadow: inset 0 0 0 2px rgba(5,102,67,0.12), 0 12px 24px rgba(0,70,58,0.12);
        }
        .mw-auth-card-logo svg {
          width: 80%;
          height: 80%;
          border-radius: 999px;
          box-shadow: 0 0 0 7px rgba(8,96,61,0.08);
        }
        .mw-auth-panel h2 {
          position: relative;
          margin: 0;
          font-size: clamp(25px, 3.1vh, 32px);
          font-weight: 800;
          letter-spacing: 0;
          color: #14243d;
        }
        .mw-auth-accent {
          position: relative;
          display: block;
          width: 58px;
          height: 5px;
          margin: clamp(10px, 1.9vh, 18px) auto clamp(16px, 2.8vh, 28px);
          border-radius: 999px;
          background: linear-gradient(90deg, #5ec849, #12a2c7);
        }
        .mw-auth-panel-copy {
          position: relative;
          margin: 0 0 clamp(20px, 4vh, 42px);
          color: #4b596b;
          font-size: clamp(14px, 1.7vh, 17px);
          line-height: 1.45;
          font-weight: 500;
        }
        .mw-auth-security {
          position: relative;
          z-index: 2;
          width: min(320px, 100%);
          margin: clamp(16px, 2.7vh, 28px) auto 0;
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 14px;
          align-items: center;
          text-align: left;
          padding: clamp(11px, 1.7vh, 16px) 22px;
          border-radius: 16px;
          border: 1px solid rgba(129,169,187,0.28);
          background: rgba(239,249,255,0.72);
        }
        .mw-auth-security span {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          color: #3dbb64;
        }
        .mw-auth-security strong {
          display: block;
          color: #21304a;
          font-size: 14px;
          line-height: 1.2;
        }
        .mw-auth-security p {
          margin: 5px 0 0;
          color: #506174;
          font-size: 14px;
        }
        .mw-auth-footer-art {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: clamp(88px, 12.2vh, 126px);
          object-fit: cover;
          object-position: center bottom;
          pointer-events: none;
        }
        .mw-auth-secure-note {
          position: absolute;
          left: 50%;
          bottom: 28px;
          transform: translateX(150px) scale(0.75);
          transform-origin: center center;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          color: rgba(255,255,255,0.84);
          font-size: 14px;
        }
        .mw-auth-secure-note svg {
          color: #9be445;
        }
        @media (max-width: 1180px) {
          .mw-auth-shell {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 46px 30px 76px;
          }
          .mw-auth-brand {
            padding-top: 0;
          }
          .mw-brand-features {
            margin-top: 42px;
          }
          .mw-brand-quote {
            align-self: center;
            margin-left: 0;
          }
          .mw-auth-panel {
            width: min(590px, 100%);
            justify-self: center;
          }
          .mw-auth-secure-note {
            transform: translateX(-50%) scale(0.75);
          }
        }
        @media (max-width: 700px) {
          .mw-auth-page {
            box-sizing: border-box;
            height: 100dvh;
            min-height: 100dvh;
            padding: 0;
            overflow-y: auto;
            overflow-x: hidden;
            place-items: center;
            background-position: center;
          }
          .mw-auth-page *,
          .mw-auth-page *::before,
          .mw-auth-page *::after {
            box-sizing: border-box;
          }
          .mw-auth-research-badge {
            position: fixed;
            top: 14px;
            right: 14px;
            min-height: 32px;
            padding: 7px 10px;
            font-size: 11px;
            max-width: calc(100vw - 28px);
          }
          .mw-auth-shell {
            width: min(100vw, 430px);
            height: auto;
            min-height: 100dvh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 12px;
            padding: 82px 16px 18px;
            border-radius: 0;
            border: 0;
            box-shadow: none;
            transform: none;
          }
          .mw-auth-brand {
            height: auto;
            min-height: 0;
            padding-top: 0;
          }
          .mw-brand-logo {
            width: 44px;
            height: 44px;
            margin-bottom: 5px;
          }
          .mw-brand-title {
            flex-wrap: nowrap;
            gap: 8px;
            font-size: clamp(34px, 9.4vw, 40px);
          }
          .mw-brand-subtitle {
            width: min(310px, 100%);
            margin-top: 10px;
            font-size: 12px;
            line-height: 1.25;
          }
          .mw-brand-rule {
            width: min(230px, 72%);
            margin: 10px auto 10px;
            gap: 12px;
          }
          .mw-brand-copy {
            display: none;
          }
          .mw-learn-more-button {
            width: 178px;
            height: 41px;
            grid-template-columns: 1fr 34px;
            padding: 4px 5px 4px 18px;
            margin-bottom: 0;
            font-size: 12px;
          }
          .mw-learn-more-arrow {
            width: 31px;
            height: 31px;
          }
          .mw-brand-features {
            display: none;
          }
          .mw-brand-quote {
            display: none;
          }
          .mw-auth-panel {
            width: 100%;
            height: auto;
            min-height: 0;
            padding: 26px 18px 74px;
            border-radius: 14px;
            box-shadow: 0 18px 46px rgba(0,0,0,0.34);
          }
          .mw-auth-card-logo {
            width: 64px;
            height: 64px;
            margin-bottom: 10px;
          }
          .mw-auth-panel h2 {
            font-size: 24px;
          }
          .mw-auth-accent {
            width: 48px;
            height: 4px;
            margin: 10px auto 14px;
          }
          .mw-auth-panel-copy {
            margin-bottom: 16px;
            font-size: 13px;
            line-height: 1.35;
          }
          .mw-auth-security {
            width: 100%;
            grid-template-columns: 34px 1fr;
            gap: 10px;
            margin-top: 14px;
            padding: 10px 14px;
            border-radius: 12px;
          }
          .mw-auth-security span {
            width: 30px;
            height: 30px;
          }
          .mw-auth-security strong,
          .mw-auth-security p {
            font-size: 12px;
          }
          .mw-auth-footer-art {
            height: 62px;
          }
          .mw-auth-secure-note {
            position: fixed;
            bottom: 10px;
            width: max-content;
            max-width: calc(100% - 24px);
            justify-content: center;
            font-size: 11px;
            transform: translateX(-50%);
          }
        }
      `})]})}Mf(document.getElementById("root")).render(a.jsx(O.StrictMode,{children:a.jsx(ry,{})}));
