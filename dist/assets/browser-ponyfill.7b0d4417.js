import{m as C,n as N}from"./vendor.852c1de4.js";function z(b,l){return l.forEach(function(d){d&&typeof d!="string"&&!Array.isArray(d)&&Object.keys(d).forEach(function(h){if(h!=="default"&&!(h in b)){var y=Object.getOwnPropertyDescriptor(d,h);Object.defineProperty(b,h,y.get?y:{enumerable:!0,get:function(){return d[h]}})}})}),Object.freeze(b)}var E={exports:{}};(function(b,l){var d=typeof self!="undefined"?self:N,h=function(){function a(){this.fetch=!1,this.DOMException=d.DOMException}return a.prototype=d,new a}();(function(a){(function(f){var u={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function x(e){return e&&DataView.prototype.isPrototypeOf(e)}if(u.arrayBuffer)var R=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],U=ArrayBuffer.isView||function(e){return e&&R.indexOf(Object.prototype.toString.call(e))>-1};function m(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function O(e){return typeof e!="string"&&(e=String(e)),e}function _(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return u.iterable&&(t[Symbol.iterator]=function(){return t}),t}function n(e){this.map={},e instanceof n?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}n.prototype.append=function(e,t){e=m(e),t=O(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},n.prototype.delete=function(e){delete this.map[m(e)]},n.prototype.get=function(e){return e=m(e),this.has(e)?this.map[e]:null},n.prototype.has=function(e){return this.map.hasOwnProperty(m(e))},n.prototype.set=function(e,t){this.map[m(e)]=O(t)},n.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},n.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),_(e)},n.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),_(e)},n.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),_(e)},u.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);function A(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function T(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function j(e){var t=new FileReader,r=T(t);return t.readAsArrayBuffer(e),r}function S(e){var t=new FileReader,r=T(t);return t.readAsText(e),r}function F(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}function P(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function D(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:u.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:u.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:u.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u.arrayBuffer&&u.blob&&x(e)?(this._bodyArrayBuffer=P(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||U(e))?this._bodyArrayBuffer=P(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):u.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u.blob&&(this.blob=function(){var e=A(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?A(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(j)}),this.text=function(){var e=A(this);if(e)return e;if(this._bodyBlob)return S(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(F(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},u.formData&&(this.formData=function(){return this.text().then(H)}),this.json=function(){return this.text().then(JSON.parse)},this}var I=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function M(e){var t=e.toUpperCase();return I.indexOf(t)>-1?t:e}function p(e,t){t=t||{};var r=t.body;if(e instanceof p){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new n(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new n(t.headers)),this.method=M(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}p.prototype.clone=function(){return new p(this,{body:this._bodyInit})};function H(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var s=r.split("="),i=s.shift().replace(/\+/g," "),o=s.join("=").replace(/\+/g," ");t.append(decodeURIComponent(i),decodeURIComponent(o))}}),t}function q(e){var t=new n,r=e.replace(/\r?\n[\t ]+/g," ");return r.split(/\r?\n/).forEach(function(s){var i=s.split(":"),o=i.shift().trim();if(o){var v=i.join(":").trim();t.append(o,v)}}),t}D.call(p.prototype);function c(e,t){t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new n(t.headers),this.url=t.url||"",this._initBody(e)}D.call(c.prototype),c.prototype.clone=function(){return new c(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},c.error=function(){var e=new c(null,{status:0,statusText:""});return e.type="error",e};var L=[301,302,303,307,308];c.redirect=function(e,t){if(L.indexOf(t)===-1)throw new RangeError("Invalid status code");return new c(null,{status:t,headers:{location:e}})},f.DOMException=a.DOMException;try{new f.DOMException}catch{f.DOMException=function(t,r){this.message=t,this.name=r;var s=Error(t);this.stack=s.stack},f.DOMException.prototype=Object.create(Error.prototype),f.DOMException.prototype.constructor=f.DOMException}function g(e,t){return new Promise(function(r,s){var i=new p(e,t);if(i.signal&&i.signal.aborted)return s(new f.DOMException("Aborted","AbortError"));var o=new XMLHttpRequest;function v(){o.abort()}o.onload=function(){var w={status:o.status,statusText:o.statusText,headers:q(o.getAllResponseHeaders()||"")};w.url="responseURL"in o?o.responseURL:w.headers.get("X-Request-URL");var B="response"in o?o.response:o.responseText;r(new c(B,w))},o.onerror=function(){s(new TypeError("Network request failed"))},o.ontimeout=function(){s(new TypeError("Network request failed"))},o.onabort=function(){s(new f.DOMException("Aborted","AbortError"))},o.open(i.method,i.url,!0),i.credentials==="include"?o.withCredentials=!0:i.credentials==="omit"&&(o.withCredentials=!1),"responseType"in o&&u.blob&&(o.responseType="blob"),i.headers.forEach(function(w,B){o.setRequestHeader(B,w)}),i.signal&&(i.signal.addEventListener("abort",v),o.onreadystatechange=function(){o.readyState===4&&i.signal.removeEventListener("abort",v)}),o.send(typeof i._bodyInit=="undefined"?null:i._bodyInit)})}return g.polyfill=!0,a.fetch||(a.fetch=g,a.Headers=n,a.Request=p,a.Response=c),f.Headers=n,f.Request=p,f.Response=c,f.fetch=g,Object.defineProperty(f,"__esModule",{value:!0}),f})({})})(h),h.fetch.ponyfill=!0,delete h.fetch.polyfill;var y=h;l=y.fetch,l.default=y.fetch,l.fetch=y.fetch,l.Headers=y.Headers,l.Request=y.Request,l.Response=y.Response,b.exports=l})(E,E.exports);var G=C(E.exports),k=Object.freeze(z({__proto__:null,[Symbol.toStringTag]:"Module",default:G},[E.exports]));export{k as b};
