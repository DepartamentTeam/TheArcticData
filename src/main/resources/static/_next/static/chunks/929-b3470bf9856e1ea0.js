(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{3338:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,o){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof r&&(o=r,r={}),r=r||{},o=o||function(){},a.type=r.type||"text/javascript",a.charset=r.charset||"utf8",a.async=!("async"in r)||!!r.async,a.src=e,r.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(a,r.attrs),r.text&&(a.text=""+r.text),("onload"in a?t:n)(a,o),a.onload||t(a,o),i.appendChild(a)}},9079:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:a}=n;return a?o.innerHTML=a.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),u=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var l;(null==n?void 0:null==(l=n.tagName)?void 0:l.toLowerCase())===e&&u.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=u.length;t<n;t++){let n=u[t];if(i(n,e))return u.splice(t,1),!1}return!0});u.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(a-u.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5117:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4656:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return y},default:function(){return _}});let r=n(1400),o=n(7335),i=r._(n(7910)),a=o._(n(4460)),u=n(7046),l=n(9079),c=n(5117),s=new Map,f=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:u="afterInteractive",onError:c}=e,p=n||t;if(p&&f.has(p))return;if(s.has(t)){f.add(p),s.get(t).then(r,c);return}let h=()=>{o&&o(),f.add(p)},y=document.createElement("script"),v=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(i?(y.innerHTML=i.__html||"",h()):a?(y.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",h()):t&&(y.src=t,s.set(t,v)),Object.entries(e))){if(void 0===r||d.includes(n))continue;let e=l.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===u&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",u),document.body.appendChild(y)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>p(e))}):p(e)}function y(e){e.forEach(h),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}()}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:l="afterInteractive",onError:s,...d}=e,{updateScripts:h,scripts:y,getIsSsr:v,appDir:_,nonce:b}=(0,a.useContext)(u.HeadManagerContext),m=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;m.current||(o&&e&&f.has(e)&&o(),m.current=!0)},[o,t,n]);let g=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!g.current&&("afterInteractive"===l?p(e):"lazyOnload"===l&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>p(e))})),g.current=!0)},[e,l]),("beforeInteractive"===l||"worker"===l)&&(h?(y[l]=(y[l]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:s,...d}]),h(y)):v&&v()?f.add(t||n):v&&!v()&&p(e)),_){if("beforeInteractive"===l)return n?(i.default.preload(n,d.integrity?{as:"script",integrity:d.integrity}:{as:"script"}),a.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(d.dangerouslySetInnerHTML&&(d.children=d.dangerouslySetInnerHTML.__html,delete d.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...d}])+")"}}));"afterInteractive"===l&&n&&i.default.preload(n,d.integrity?{as:"script",integrity:d.integrity}:{as:"script"})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let _=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4904:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return o},NoSSR:function(){return i}}),n(1400),n(4460);let r=n(3718);function o(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:t}=e;return t}},8163:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4460),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,s=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:s,props:i,_owner:u.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},1396:function(e,t,n){"use strict";e.exports=n(8163)},1067:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(4460)),a=l(n(7924)),u=l(n(5526));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}function f(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(e){function t(){c(this,t);for(var e,n,r,o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.container=i.createRef(),s(r,n)}return f(t,e),o(t,[{key:"componentDidMount",value:function(){this.typeset()}},{key:"componentDidUpdate",value:function(e){var t=e.inline!=this.props.inline;this.typeset(t)}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"clear",value:function(){var e=this.props.MathJax;if(this.script&&e){var t=e.Hub.getJaxFor(this.script);t&&t.Remove()}}},{key:"typeset",value:function(e){var t=this,n=this.props,r=n.MathJax,o=n.formula,i=n.onRender;if(r){if(e&&this.clear(),!e&&this.script)r.Hub.Queue(function(){var e=r.Hub.getJaxFor(t.script);if(e)e.Text(o,i);else{var n=t.setScriptText(o);(0,u.default)(r,n,i)}});else{var a=this.setScriptText(o);(0,u.default)(r,a,i)}}}},{key:"setScriptText",value:function(e){var t=this.props.inline;return this.script||(this.script=document.createElement("script"),this.script.type="math/tex; "+(t?"":"mode=display"),this.container.current.appendChild(this.script)),"text"in this.script?this.script.text=e:this.script.textContent=e,this.script}},{key:"render",value:function(){var e=this.props,t=(e.MathJax,e.formula,e.inline,e.onRender,function(e,t){var n={};for(var r in e)!(t.indexOf(r)>=0)&&Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["MathJax","formula","inline","onRender"]));return this.props.inline?i.createElement("span",r({ref:this.container},t)):i.createElement("div",r({ref:this.container},t))}}]),t}(i.Component);d.defaultProps={inline:!1,onRender:function(){}};var p=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,e),o(t,[{key:"render",value:function(){var e=this;return i.createElement(a.default.Consumer,null,function(t){var n=t.MathJax;return((0,t.registerNode)(),n)?i.createElement(d,r({},e.props,{MathJax:n})):null})}}]),t}(i.PureComponent);t.default=p},9456:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(4460)),i=u(n(3338)),a=u(n(7924));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.hasNodes=!1,n.loaded=!1,n.registerNode=function(){n.hasNodes=!0},n.load=function(){var e=n.props.script;if(!n.loaded&&n.hasNodes){if(n.loaded=!0,!e){n.onLoad(null);return}(0,i.default)(e,n.onLoad)}},n.onLoad=function(e){var t=n.props.options;MathJax.Hub.Config(t),n.setState({MathJax:MathJax})},n.state={MathJax:null,registerNode:n.registerNode},n}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.load()}},{key:"componentDidUpdate",value:function(){this.load()}},{key:"render",value:function(){var e=this.props.children;return o.createElement(a.default.Provider,{value:this.state},e)}}]),t}(o.Component);l.defaultProps={script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML",options:{tex2jax:{inlineMath:[]},showMathMenu:!1,showMathMenuMSIE:!1}},t.default=l},7924:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t})(n(4460)).createContext({MathJax:null,registerNode:function(){}});t.default=r},7227:function(e,t,n){"use strict";var r=i(n(9456)),o=i(n(1067));function i(e){return e&&e.__esModule?e:{default:e}}var a={Provider:r.default,Node:o.default};t.Z=a},5526:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[],r=[],o=!1;t.default=function(e,t,i){n.push(t),r.push(i),o||(o=!0,setTimeout(function(){return function(e){e.Hub.Queue(function(){var t=e.Hub.elementScripts;e.Hub.elementScripts=function(e){return n};try{return e.Hub.Process(null,function(){r.forEach(function(e){e()}),n=[],r=[],o=!1})}catch(e){throw e}finally{e.Hub.elementScripts=t}})}(e)},0))}}}]);