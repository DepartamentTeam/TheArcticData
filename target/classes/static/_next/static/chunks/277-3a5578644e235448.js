(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{653:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return o},NoSSR:function(){return s}}),r(1400),r(1895);let n=r(4379);function o(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function s(e){let{children:t}=e;return t}},8810:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(1895),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!u.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},3779:function(e,t,r){"use strict";e.exports=r(8810)},7441:function(e,t,r){e.exports=r(4424)},3728:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(1895),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=n.useState,i=n.useEffect,a=n.useLayoutEffect,u=n.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=s({inst:{value:r,getSnapshot:t}}),o=n[0].inst,c=n[1];return a(function(){o.value=r,o.getSnapshot=t,l(o)&&c({inst:o})},[e,r,t]),i(function(){return l(o)&&c({inst:o}),e(function(){l(o)&&c({inst:o})})},[e]),u(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},9070:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(1895),o=r(4983),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useSyncExternalStore,a=n.useRef,u=n.useEffect,l=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var f=a(null);if(null===f.current){var h={hasValue:!1,value:null};f.current=h}else h=f.current;f=l(function(){function e(e){if(!u){if(u=!0,i=e,e=n(e),void 0!==o&&h.hasValue){var t=h.value;if(o(t,e))return a=t}return a=e}if(t=a,s(i,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(i=e,a=r)}var i,a,u=!1,l=void 0===r?null:r;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]},[t,r,n,o]);var p=i(e,f[0],f[1]);return u(function(){h.hasValue=!0,h.value=p},[p]),c(p),p}},4983:function(e,t,r){"use strict";e.exports=r(3728)},664:function(e,t,r){"use strict";e.exports=r(9070)},1099:function(e,t,r){"use strict";r.d(t,{Hb:function(){return o},UO:function(){return i},mE:function(){return a}});var n=r(1895);function o(e){return Object.freeze({__version:1,map:e})}let s=(0,n.createContext)(null),i=s.Provider;function a(){let e=(0,n.useContext)(s);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}},7747:function(e,t,r){"use strict";r.d(t,{I:function(){return s},O:function(){return o}});var n=r(1895);function o(e,t,r){return Object.freeze({instance:e,context:t,container:r})}function s(e,t){return null==t?function(t,r){let o=(0,n.useRef)();return o.current||(o.current=e(t,r)),o}:function(r,o){let s=(0,n.useRef)();s.current||(s.current=e(r,o));let i=(0,n.useRef)(r),{instance:a}=s.current;return(0,n.useEffect)(function(){i.current!==r&&(t(a,r,i.current),i.current=r)},[a,r,o]),s}}},1547:function(e,t,r){"use strict";r.d(t,{Lf:function(){return a}});var n=r(1895);r(1982);var o=r(7747),s=r(1099),i=r(8501);function a(e,t){var r;let a=(0,o.I)(e,t);return r=function(e){var t;let r=(0,s.mE)(),o=a((0,i.q)(e,r),r);return function(e,t){let r=(0,n.useRef)(t);(0,n.useEffect)(function(){t!==r.current&&null!=e.attributionControl&&(null!=r.current&&e.attributionControl.removeAttribution(r.current),null!=t&&e.attributionControl.addAttribution(t)),r.current=t},[e,t])}(r.map,e.attribution),function(e,t){let r=(0,n.useRef)();(0,n.useEffect)(function(){return null!=t&&e.instance.on(t),r.current=t,function(){null!=r.current&&e.instance.off(r.current),r.current=null}},[e,t])}(o.current,e.eventHandlers),t=o.current,(0,n.useEffect)(function(){let e=r.layerContainer??r.map;return e.addLayer(t.instance),function(){r.layerContainer?.removeLayer(t.instance),r.map.removeLayer(t.instance)}},[r,t]),o},(0,n.forwardRef)(function(e,t){let{instance:o}=r(e).current;return(0,n.useImperativeHandle)(t,()=>o),null})}},8394:function(e,t,r){"use strict";function n(e,t,r){let{opacity:n,zIndex:o}=t;null!=n&&n!==r.opacity&&e.setOpacity(n),null!=o&&o!==r.zIndex&&e.setZIndex(o)}r.d(t,{I:function(){return n}})},8501:function(e,t,r){"use strict";function n(e,t){let r=e.pane??t.pane;return r?{...e,pane:r}:e}r.d(t,{q:function(){return n}})},5632:function(e,t,r){"use strict";r.d(t,{ZP:function(){return O}});class n extends Error{constructor(e,t,r){let n=e.status||0===e.status?e.status:"",o=e.statusText||"",s=`${n} ${o}`.trim(),i=s?`status code ${s}`:"an unknown error";super(`Request failed with ${i}`),Object.defineProperty(this,"response",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name="HTTPError",this.response=e,this.request=t,this.options=r}}class o extends Error{constructor(e){super("Request timed out"),Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name="TimeoutError",this.request=e}}let s=e=>null!==e&&"object"==typeof e,i=(...e)=>{for(let t of e)if((!s(t)||Array.isArray(t))&&void 0!==t)throw TypeError("The `options` argument must be an object");return u({},...e)},a=(e={},t={})=>{let r=new globalThis.Headers(e),n=t instanceof globalThis.Headers,o=new globalThis.Headers(t);for(let[e,t]of o.entries())n&&"undefined"===t||void 0===t?r.delete(e):r.set(e,t);return r},u=(...e)=>{let t={},r={};for(let n of e)if(Array.isArray(n))Array.isArray(t)||(t=[]),t=[...t,...n];else if(s(n)){for(let[e,r]of Object.entries(n))s(r)&&e in t&&(r=u(t[e],r)),t={...t,[e]:r};s(n.headers)&&(r=a(r,n.headers),t.headers=r)}return t},l=(()=>{let e=!1,t=!1,r="function"==typeof globalThis.ReadableStream,n="function"==typeof globalThis.Request;return r&&n&&(t=new globalThis.Request("https://a.com",{body:new globalThis.ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type")),e&&!t})(),c="function"==typeof globalThis.AbortController,f="function"==typeof globalThis.ReadableStream,h="function"==typeof globalThis.FormData,p=["get","post","put","patch","head","delete"],d={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},b=Symbol("stop"),y=e=>p.includes(e)?e.toUpperCase():e,m=[413,429,503],_={limit:2,methods:["get","put","head","delete","options","trace"],statusCodes:[408,413,429,500,502,503,504],afterStatusCodes:m,maxRetryAfter:Number.POSITIVE_INFINITY,backoffLimit:Number.POSITIVE_INFINITY},g=(e={})=>{if("number"==typeof e)return{..._,limit:e};if(e.methods&&!Array.isArray(e.methods))throw Error("retry.methods must be an array");if(e.statusCodes&&!Array.isArray(e.statusCodes))throw Error("retry.statusCodes must be an array");return{..._,...e,afterStatusCodes:m}};async function w(e,t,r){return new Promise((n,s)=>{let i=setTimeout(()=>{t&&t.abort(),s(new o(e))},r.timeout);r.fetch(e).then(n).catch(s).then(()=>{clearTimeout(i)})})}let v=!!globalThis.DOMException;function E(e){if(v)return new DOMException(e?.reason??"The operation was aborted.","AbortError");let t=Error(e?.reason??"The operation was aborted.");return t.name="AbortError",t}async function S(e,{signal:t}){return new Promise((r,n)=>{if(t){if(t.aborted){n(E(t));return}t.addEventListener("abort",o,{once:!0})}function o(){n(E(t)),clearTimeout(s)}let s=setTimeout(()=>{t?.removeEventListener("abort",o),r()},e)})}class T{static create(e,t){let r=new T(e,t),o=async()=>{if(r._options.timeout>2147483647)throw RangeError("The `timeout` option cannot be greater than 2147483647");await Promise.resolve();let e=await r._fetch();for(let t of r._options.hooks.afterResponse){let n=await t(r.request,r._options,r._decorateResponse(e.clone()));n instanceof globalThis.Response&&(e=n)}if(r._decorateResponse(e),!e.ok&&r._options.throwHttpErrors){let t=new n(e,r.request,r._options);for(let e of r._options.hooks.beforeError)t=await e(t);throw t}if(r._options.onDownloadProgress){if("function"!=typeof r._options.onDownloadProgress)throw TypeError("The `onDownloadProgress` option must be a function");if(!f)throw Error("Streams are not supported in your environment. `ReadableStream` is missing.");return r._stream(e.clone(),r._options.onDownloadProgress)}return e},s=r._options.retry.methods.includes(r.request.method.toLowerCase()),i=s?r._retry(o):o();for(let[e,n]of Object.entries(d))i[e]=async()=>{r.request.headers.set("accept",r.request.headers.get("accept")||n);let o=await i,s=o.clone();if("json"===e){if(204===s.status)return"";let e=await s.clone().arrayBuffer(),r=e.byteLength;if(0===r)return"";if(t.parseJson)return t.parseJson(await s.text())}return s[e]()};return i}constructor(e,t={}){if(Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"abortController",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_retryCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_input",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this._input=e,this._options={credentials:this._input.credentials||"same-origin",...t,headers:a(this._input.headers,t.headers),hooks:u({beforeRequest:[],beforeRetry:[],beforeError:[],afterResponse:[]},t.hooks),method:y(t.method??this._input.method),prefixUrl:String(t.prefixUrl||""),retry:g(t.retry),throwHttpErrors:!1!==t.throwHttpErrors,timeout:void 0===t.timeout?1e4:t.timeout,fetch:t.fetch??globalThis.fetch.bind(globalThis)},"string"!=typeof this._input&&!(this._input instanceof URL||this._input instanceof globalThis.Request))throw TypeError("`input` must be a string, URL, or Request");if(this._options.prefixUrl&&"string"==typeof this._input){if(this._input.startsWith("/"))throw Error("`input` must not begin with a slash when using `prefixUrl`");this._options.prefixUrl.endsWith("/")||(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input}if(c){if(this.abortController=new globalThis.AbortController,this._options.signal){let e=this._options.signal;this._options.signal.addEventListener("abort",()=>{this.abortController.abort(e.reason)})}this._options.signal=this.abortController.signal}if(l&&(this._options.duplex="half"),this.request=new globalThis.Request(this._input,this._options),this._options.searchParams){let e="string"==typeof this._options.searchParams?this._options.searchParams.replace(/^\?/,""):new URLSearchParams(this._options.searchParams).toString(),t=this.request.url.replace(/(?:\?.*?)?(?=#|$)/,"?"+e);(h&&this._options.body instanceof globalThis.FormData||this._options.body instanceof URLSearchParams)&&!(this._options.headers&&this._options.headers["content-type"])&&this.request.headers.delete("content-type"),this.request=new globalThis.Request(new globalThis.Request(t,{...this.request}),this._options)}void 0!==this._options.json&&(this._options.body=JSON.stringify(this._options.json),this.request.headers.set("content-type",this._options.headers.get("content-type")??"application/json"),this.request=new globalThis.Request(this.request,{body:this._options.body}))}_calculateRetryDelay(e){if(this._retryCount++,this._retryCount<this._options.retry.limit&&!(e instanceof o)){if(e instanceof n){if(!this._options.retry.statusCodes.includes(e.response.status))return 0;let t=e.response.headers.get("Retry-After");if(t&&this._options.retry.afterStatusCodes.includes(e.response.status)){let e=Number(t);return(Number.isNaN(e)?e=Date.parse(t)-Date.now():e*=1e3,void 0!==this._options.retry.maxRetryAfter&&e>this._options.retry.maxRetryAfter)?0:e}if(413===e.response.status)return 0}return Math.min(this._options.retry.backoffLimit,.3*2**(this._retryCount-1)*1e3)}return 0}_decorateResponse(e){return this._options.parseJson&&(e.json=async()=>this._options.parseJson(await e.text())),e}async _retry(e){try{return await e()}catch(r){let t=Math.min(this._calculateRetryDelay(r),2147483647);if(0!==t&&this._retryCount>0){for(let e of(await S(t,{signal:this._options.signal}),this._options.hooks.beforeRetry)){let t=await e({request:this.request,options:this._options,error:r,retryCount:this._retryCount});if(t===b)return}return this._retry(e)}throw r}}async _fetch(){for(let e of this._options.hooks.beforeRequest){let t=await e(this.request,this._options);if(t instanceof Request){this.request=t;break}if(t instanceof Response)return t}return!1===this._options.timeout?this._options.fetch(this.request.clone()):w(this.request.clone(),this.abortController,this._options)}_stream(e,t){let r=Number(e.headers.get("content-length"))||0,n=0;return 204===e.status?(t&&t({percent:1,totalBytes:r,transferredBytes:n},new Uint8Array),new globalThis.Response(null,{status:e.status,statusText:e.statusText,headers:e.headers})):new globalThis.Response(new globalThis.ReadableStream({async start(o){let s=e.body.getReader();async function i(){let{done:e,value:a}=await s.read();if(e){o.close();return}if(t){n+=a.byteLength;let e=0===r?0:n/r;t({percent:e,transferredBytes:n,totalBytes:r},a)}o.enqueue(a),await i()}t&&t({percent:0,transferredBytes:0,totalBytes:r},new Uint8Array),await i()}}),{status:e.status,statusText:e.statusText,headers:e.headers})}}/*! MIT License © Sindre Sorhus */let R=e=>{let t=(t,r)=>T.create(t,i(e,r));for(let r of p)t[r]=(t,n)=>T.create(t,i(e,n,{method:r}));return t.create=e=>R(i(e)),t.extend=t=>R(i(e,t)),t.stop=b,t},x=R();var O=x},4688:function(e,t,r){"use strict";r.d(t,{x0:function(){return n}});let n=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"")},1734:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var n=r(3632);/*!
 * leaflet-infowms v1.1.1 by Luis Bello <luisbello30@gmail.com> (https://about.me/luisbello30)
 * Source and issue tracking: https://github.com/luisbello30/Leaflet.InfoWMS
 *
 * You can create a URL with "GetFeatureInfo" WMS request data about a map image coordinate and get it from the click event
 *
 * Based on and inspired by L.TileLayer.BetterWMS.js (https://gist.github.com/rclark/6908938)
 * by Ryan Clark (rclark) https://github.com/rclark
 * Thank you Ryan for creating and sharing it, many of us have used it for a long time.
 *
 * MIT License
 */let o=n.TileLayer.WMS.extend({getFeatureParam:{feature_count:1,srs:"EPSG:4326",info_format:"application/json"},initialize(e,t){for(let e in this.getFeatureInfo)e in t&&(this.getFeatureInfo[e]=t[e]);"cql_filter"in t&&(this.getFeatureInfo.cql_filter=t.cql_filter),"propertyName"in t&&(this.getFeatureInfo.propertyName=t.propertyName),n.Util.setOptions(this,this.getFeatureParam),n.TileLayer.WMS.prototype.initialize.call(this,e,t)},onAdd(e){n.TileLayer.WMS.prototype.onAdd.call(this,e),e.on("click",this.getFeatureInfo,this)},onRemove(e){n.TileLayer.WMS.prototype.onRemove.call(this,e),e.off("click",this.getFeatureInfo,this)},getFeatureInfo(e){let t=this._map.latLngToContainerPoint(e.latlng),r=new n.Point(t.x,t.y,!0),o=this._map.getSize(),s={request:"GetFeatureInfo",query_layers:this.wmsParams.layers,height:o.y,width:o.x,bbox:this._map.getBounds().toBBoxString()},i={...this.wmsParams,...this.options,...s};i["1.3.0"===i.version?"i":"x"]=r.x,i["1.3.0"===i.version?"j":"y"]=r.y;let a=this._url+n.Util.getParamString(i,this._url,!1);this.fire("click",{url:a,params:i,latlng:e.latlng})}});n.TileLayer.InfoWMS=o,n.tileLayer.infoWMS=function(e,t){return new o(e,t)};var s=r(8394),i=(0,r(1547).Lf)(function(e,t){return{instance:new n.TileLayer.InfoWMS(e.url,e.params),context:t}},function(e,t,r){(0,s.I)(e,t,r)})},64:function(e,t,r){"use strict";r.d(t,{h:function(){return a}});var n=r(1099),o=r(3632),s=r(1895);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let a=(0,s.forwardRef)(function({bounds:e,boundsOptions:t,center:r,children:a,className:u,id:l,placeholder:c,style:f,whenReady:h,zoom:p,...d},b){let[y]=(0,s.useState)({className:u,id:l,style:f}),[m,_]=(0,s.useState)(null);(0,s.useImperativeHandle)(b,()=>m?.map??null,[m]);let g=(0,s.useCallback)(s=>{if(null!==s&&null===m){let i=new o.Map(s,d);null!=r&&null!=p?i.setView(r,p):null!=e&&i.fitBounds(e,t),null!=h&&i.whenReady(h),_((0,n.Hb)(i))}},[]);(0,s.useEffect)(()=>()=>{m?.map.remove()},[m]);let w=m?s.createElement(n.UO,{value:m},a):c??null;return s.createElement("div",i({},y,{ref:g}),w)})},2294:function(e,t,r){"use strict";r.d(t,{I:function(){return u}});var n=r(1547),o=r(8501),s=r(7747),i=r(8394),a=r(3632);let u=(0,n.Lf)(function({url:e,...t},r){let n=new a.TileLayer(e,(0,o.q)(t,r));return(0,s.O)(n,r)},function(e,t,r){(0,i.I)(e,t,r);let{url:n}=t;null!=n&&n!==r.url&&e.setUrl(n)})},6479:function(e,t,r){"use strict";r.d(t,{o:function(){return u}});var n=r(1547),o=r(8501),s=r(7747),i=r(8394),a=r(3632);let u=(0,n.Lf)(function({eventHandlers:e,params:t={},url:r,...n},i){let u=new a.TileLayer.WMS(r,{...t,...(0,o.q)(n,i)});return(0,s.O)(u,i)},function(e,t,r){(0,i.I)(e,t,r),null!=t.params&&t.params!==r.params&&e.setParams(t.params)})},5760:function(e,t,r){"use strict";r.d(t,{Ue:function(){return l}});let n=e=>{let t;let r=new Set,n=(e,n)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=n?n:"object"!=typeof o)?o:Object.assign({},t,o),r.forEach(r=>r(t,e))}},o=()=>t,s={setState:n,getState:o,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,o,s),s},o=e=>e?n(e):n;var s=r(1895),i=r(664);let{useSyncExternalStoreWithSelector:a}=i,u=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,r=(e,r)=>(function(e,t=e.getState,r){let n=a(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,s.useDebugValue)(n),n})(t,e,r);return Object.assign(r,t),r},l=e=>e?u(e):u}}]);