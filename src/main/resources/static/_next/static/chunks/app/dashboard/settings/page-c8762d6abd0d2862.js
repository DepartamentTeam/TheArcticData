(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{5023:function(e,t,n){Promise.resolve().then(n.bind(n,7770))},772:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(1400);n(4460);let u=r._(n(9189));function l(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){let n=u.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,t);let a=r.loader;return n({...r,loader:()=>null!=a?a().then(l):Promise.resolve(l(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4904:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return u},NoSSR:function(){return l}}),n(1400),n(4460);let r=n(3718);function u(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function l(e){let{children:t}=e;return t}},9189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(1400),u=r._(n(4460)),l=n(4904),a=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,r=u.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),a=t.ssr?u.default.Fragment:l.NoSSR,o=t.lazy;return u.default.createElement(u.default.Suspense,{fallback:r},u.default.createElement(a,null,u.default.createElement(o,e)))}return t.lazy=u.default.lazy(t.loader),n.displayName="LoadableComponent",n}},7770:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f},metadata:function(){return i}});var r=n(1396),u=n(4397),l=n(2854);let a=e=>{let{label:t,options:n,selectedValue:u,onChange:a}=e,o=e=>{a(e.target.value)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"subtitle-1",children:t}),(0,r.jsx)("div",{className:"input-radio-group",children:n.map((e,t)=>(0,r.jsxs)("div",{className:"input-radio-container",children:[(0,r.jsxs)("label",{className:"body-1",children:[(0,r.jsx)("input",{type:"radio",value:e.value,checked:u===e.value,onChange:o}),e.label]},t),(0,r.jsx)(l.E,{src:e.exampleImageSource,title:""})]}))})]})};var o=n(772),s=n.n(o);let i={title:"Параметры",description:"Параметры аккунта",icons:["/icons/settings.ico"],robots:"none"},c=s()(()=>n.e(845).then(n.bind(n,9151)),{loadableGenerated:{webpack:()=>[9151]},ssr:!1});function f(){let{theme:e,setMapTheme:t}=(0,u.p_)();return(0,r.jsxs)("main",{className:"pg-dashboard-container",children:[(0,r.jsxs)("div",{className:"full-col lg-row",children:[(0,r.jsx)("h1",{children:"Параметры"}),(0,r.jsxs)("div",{className:"pg-settings",children:[(0,r.jsx)("hr",{className:"divider"}),(0,r.jsx)(a,{label:"Тема карты",options:[{label:"Светлая",value:"light",exampleImageSource:"/img/map-light-example"},{label:"Темная",value:"dark",exampleImageSource:"/img/map-dark-example"}],selectedValue:e,onChange:e=>{t(e),window.localStorage.setItem("mapTheme",e)}})]})]}),(0,r.jsx)(c,{})]})}},4397:function(e,t,n){"use strict";n.d(t,{p_:function(){return f},Iz:function(){return d},oR:function(){return c}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let u="function"==typeof e?e(t):e;if(!Object.is(u,t)){let e=t;t=(null!=r?r:"object"!=typeof u)?u:Object.assign({},t,u),n.forEach(n=>n(t,e))}},u=()=>t,l={setState:r,getState:u,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,u,l),l},u=e=>e?r(e):r;var l=n(4460),a=n(664);let{useSyncExternalStoreWithSelector:o}=a,s=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?u(e):e,n=(e,n)=>(function(e,t=e.getState,n){let r=o(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,l.useDebugValue)(r),r})(t,e,n);return Object.assign(n,t),n},i=e=>e?s(e):s,c=i()(e=>({layers:[],addLayer:t=>e(e=>({layers:""!==t.value?[t,...e.layers]:null})),removeLayer:t=>e(e=>({layers:e.layers.filter(e=>e!==t)})),clearLayers:()=>e(e=>({layers:[]}))}));i()(e=>({checked:!1,setIsChecked:t=>e({checked:t})}));let f=i()(e=>({theme:"light",setMapTheme:t=>e({theme:t})})),d=i()(e=>({props:null,setProps:t=>e({props:t})}))},2854:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(1396);let u=e=>{let{title:t,src:n}=e;return(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:"".concat(n,".webp")}),(0,r.jsx)("img",{alt:t,srcSet:"".concat(n,".png")})]})}},8163:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4460),u=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,l={},i=null,c=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:u,type:e,key:i,ref:c,props:l,_owner:o.current}}t.Fragment=l,t.jsx=i,t.jsxs=i},1396:function(e,t,n){"use strict";e.exports=n(8163)},3728:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4460),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=r.useState,a=r.useEffect,o=r.useLayoutEffect,s=r.useDebugValue;function i(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=l({inst:{value:n,getSnapshot:t}}),u=r[0].inst,c=r[1];return o(function(){u.value=n,u.getSnapshot=t,i(u)&&c({inst:u})},[e,n,t]),a(function(){return i(u)&&c({inst:u}),e(function(){i(u)&&c({inst:u})})},[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},9070:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4460),u=n(4983),l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=u.useSyncExternalStore,o=r.useRef,s=r.useEffect,i=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var f=o(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;f=i(function(){function e(e){if(!s){if(s=!0,a=e,e=r(e),void 0!==u&&d.hasValue){var t=d.value;if(u(t,e))return o=t}return o=e}if(t=o,l(a,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(a=e,o=n)}var a,o,s=!1,i=void 0===n?null:n;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]},[t,n,r,u]);var p=a(e,f[0],f[1]);return s(function(){d.hasValue=!0,d.value=p},[p]),c(p),p}},4983:function(e,t,n){"use strict";e.exports=n(3728)},664:function(e,t,n){"use strict";e.exports=n(9070)}},function(e){e.O(0,[179,690,744],function(){return e(e.s=5023)}),_N_E=e.O()}]);