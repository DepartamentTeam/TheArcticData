(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[878],{7523:function(e,t,n){Promise.resolve().then(n.t.bind(n,2610,23)),Promise.resolve().then(n.bind(n,3523))},5782:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?l[o]=!!n[e]:l.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:a}=n;return a?l.innerHTML=a.__html||"":o&&(l.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),l}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let c=t.map(l).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(o(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(a-i.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1247:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2610:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return m},default:function(){return b}});let r=n(1400),l=n(7335),o=r._(n(1982)),a=l._(n(1895)),i=n(4979),u=n(5782),c=n(1247),d=new Map,s=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:o,children:a="",strategy:i="afterInteractive",onError:c}=e,p=n||t;if(p&&s.has(p))return;if(d.has(t)){s.add(p),d.get(t).then(r,c);return}let y=()=>{l&&l(),s.add(p)},m=document.createElement("script"),_=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(o?(m.innerHTML=o.__html||"",y()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",y()):t&&(m.src=t,d.set(t,_)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===i&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",i),document.body.appendChild(m)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>p(e))}):p(e)}function m(e){e.forEach(y),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");s.add(t)})}()}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:u="afterInteractive",onError:d,...f}=e,{updateScripts:y,scripts:m,getIsSsr:_,appDir:b,nonce:h}=(0,a.useContext)(i.HeadManagerContext),v=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;v.current||(l&&e&&s.has(e)&&l(),v.current=!0)},[l,t,n]);let g=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!g.current&&("afterInteractive"===u?p(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>p(e))})),g.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(m[u]=(m[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:d,...f}]),y(m)):_&&_()?s.add(t||n):_&&!_()&&p(e)),b){if("beforeInteractive"===u)return n?(o.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"}),a.default.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...f}])+")"}}));"afterInteractive"===u&&n&&o.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let b=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3523:function(e,t,n){"use strict";n.r(t),n.d(t,{MathJaxFormula:function(){return o}});var r=n(3779),l=n(1895);let o=e=>{let{formula:t}=e;return(0,l.useEffect)(()=>{let e=document.createElement("script");return e.type="text/javascript",e.async=!0,e.onload=()=>{window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub])},e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:t})})}},8810:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(1895),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:c,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},3779:function(e,t,n){"use strict";e.exports=n(8810)}},function(e){e.O(0,[580,502,744],function(){return e(e.s=7523)}),_N_E=e.O()}]);