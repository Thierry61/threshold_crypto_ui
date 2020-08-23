parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MuPq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.poly_sizes_by_threshold=exports.commitment_sizes_by_threshold=exports.row_sizes_by_threshold=exports.maxCtLen=exports.maxMsgLen=exports.sigLen=exports.pkLen=exports.skLen=void 0;var e=32;exports.skLen=e;var s=48;exports.pkLen=s;var r=96;exports.sigLen=r;var t=1049600;exports.maxMsgLen=t;var o=1049600;exports.maxCtLen=o;var p=[40,72,104,136,168,200,232,264,296,328,360];exports.row_sizes_by_threshold=p;var x=[56,104,152,200,248,296,344,392,440,488,536];exports.commitment_sizes_by_threshold=x;var _=[40,72,104,136,168,200,232,264,296,328,360];exports.poly_sizes_by_threshold=_;
},{}],"CyAK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ErrorDisplay=t,exports.errorMessages=void 0;var e=require("./constants");function t(e){var t=document.querySelectorAll(e)[0];this.show=function(e){t.textContent=e,t.classList.remove("hidden")},this.hide=function(){t.classList.add("hidden")}}var r={skLength:function(t){var r="Secret Key length must be ";return r+=(2*e.skLen).toString(),r+=" hex chars, ",r+=t.toString(),r+=" provided."},pkLength:function(t){var r="Public Key length must be ";return r+=(2*e.pkLen).toString(),r+=" hex chars, ",r+=t.toString(),r+=" provided."},sigLength:function(t){var r="Signature length must be ";return r+=(2*e.sigLen).toString(),r+=" hex chars, ",r+=t.toString(),r+=" provided."},msgLength:function(t){var r="Message length must be ";return r+=e.maxMsgLen.toString(),r+=" chars, ",r+=t.toString(),r+=" provided."},ctLength:function(t){var r="Ciphertext length must be ";return r+=(2*e.ctLen).toString(),r+=" hex chars, ",r+=t.toString(),r+=" provided."}};exports.errorMessages=r;
},{"./constants":"MuPq"}],"Jugo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.combine_signature_shares=exports.generate_bivars=exports.derive_key_share=exports.derive_master_key=exports.get_poly_degree=exports.generate_poly=exports.decrypt=exports.encrypt=exports.verify=exports.sign_msg=exports.derive_pk_from_sk=exports.get_share_indexes=exports.set_share_indexes=exports.get_signature_share_byte=exports.set_signature_share_byte=exports.get_bivar_pks_byte=exports.set_bivar_pks_byte=exports.get_bivar_sks_byte=exports.set_bivar_sks_byte=exports.get_bivar_commitments_byte=exports.set_bivar_commitments_byte=exports.get_bivar_row_byte=exports.set_bivar_row_byte=exports.get_pkshare_byte=exports.set_pkshare_byte=exports.get_skshare_byte=exports.set_skshare_byte=exports.get_mc_byte=exports.set_mc_byte=exports.get_mpk_byte=exports.set_mpk_byte=exports.get_msk_byte=exports.set_msk_byte=exports.get_poly_byte=exports.set_poly_byte=exports.get_rng_next_count=exports.get_ct_byte=exports.set_ct_byte=exports.get_msg_byte=exports.set_msg_byte=exports.get_sig_byte=exports.set_sig_byte=exports.get_pk_byte=exports.set_pk_byte=exports.get_sk_byte=exports.set_sk_byte=exports.set_rng_value=exports.get_rng_values_size=exports.default=void 0;var e=t(require("./pkg/threshold_crypto_wasm_bridge_bg.wasm"));function t(e){return e&&e.__esModule?e:{default:e}}var _=e.default;exports.default=_;var s=e.default.get_rng_values_size;exports.get_rng_values_size=s;var r=e.default.set_rng_value;exports.set_rng_value=r;var a=e.default.set_sk_byte;exports.set_sk_byte=a;var p=e.default.get_sk_byte;exports.get_sk_byte=p;var o=e.default.set_pk_byte;exports.set_pk_byte=o;var b=e.default.get_pk_byte;exports.get_pk_byte=b;var y=e.default.set_sig_byte;exports.set_sig_byte=y;var g=e.default.get_sig_byte;exports.get_sig_byte=g;var x=e.default.set_msg_byte;exports.set_msg_byte=x;var v=e.default.get_msg_byte;exports.get_msg_byte=v;var i=e.default.set_ct_byte;exports.set_ct_byte=i;var d=e.default.get_ct_byte;exports.get_ct_byte=d;var u=e.default.get_rng_next_count;exports.get_rng_next_count=u;var l=e.default.set_poly_byte;exports.set_poly_byte=l;var k=e.default.get_poly_byte;exports.get_poly_byte=k;var f=e.default.set_msk_byte;exports.set_msk_byte=f;var m=e.default.get_msk_byte;exports.get_msk_byte=m;var n=e.default.set_mpk_byte;exports.set_mpk_byte=n;var c=e.default.get_mpk_byte;exports.get_mpk_byte=c;var h=e.default.set_mc_byte;exports.set_mc_byte=h;var w=e.default.get_mc_byte;exports.get_mc_byte=w;var z=e.default.set_skshare_byte;exports.set_skshare_byte=z;var M=e.default.get_skshare_byte;exports.get_skshare_byte=M;var j=e.default.set_pkshare_byte;exports.set_pkshare_byte=j;var q=e.default.get_pkshare_byte;exports.get_pkshare_byte=q;var O=e.default.set_bivar_row_byte;exports.set_bivar_row_byte=O;var P=e.default.get_bivar_row_byte;exports.get_bivar_row_byte=P;var A=e.default.set_bivar_commitments_byte;exports.set_bivar_commitments_byte=A;var B=e.default.get_bivar_commitments_byte;exports.get_bivar_commitments_byte=B;var C=e.default.set_bivar_sks_byte;exports.set_bivar_sks_byte=C;var D=e.default.get_bivar_sks_byte;exports.get_bivar_sks_byte=D;var E=e.default.set_bivar_pks_byte;exports.set_bivar_pks_byte=E;var F=e.default.get_bivar_pks_byte;exports.get_bivar_pks_byte=F;var G=e.default.set_signature_share_byte;exports.set_signature_share_byte=G;var H=e.default.get_signature_share_byte;exports.get_signature_share_byte=H;var I=e.default.set_share_indexes;exports.set_share_indexes=I;var J=e.default.get_share_indexes;exports.get_share_indexes=J;var K=e.default.derive_pk_from_sk;exports.derive_pk_from_sk=K;var L=e.default.sign_msg;exports.sign_msg=L;var N=e.default.verify;exports.verify=N;var Q=e.default.encrypt;exports.encrypt=Q;var R=e.default.decrypt;exports.decrypt=R;var S=e.default.generate_poly;exports.generate_poly=S;var T=e.default.get_poly_degree;exports.get_poly_degree=T;var U=e.default.derive_master_key;exports.derive_master_key=U;var V=e.default.derive_key_share;exports.derive_key_share=V;var W=e.default.generate_bivars;exports.generate_bivars=W;var X=e.default.combine_signature_shares;exports.combine_signature_shares=X;
},{"./pkg/threshold_crypto_wasm_bridge_bg.wasm":"ksYx"}],"mV7N":[function(require,module,exports) {
"use strict";function r(r){for(var t=new Uint8Array(r.length),n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t}function t(r){return String.fromCharCode.apply(null,r)}function n(r){return new Uint8Array(r.match(/.{1,2}/g).map(function(r){return parseInt(r,16)}))}function e(r){return r.reduce(function(r,t){return r+t.toString(16).padStart(2,"0")},"")}function o(r){return btoa(String.fromCharCode.apply(null,r))}function a(r){return new Uint8Array(atob(r).split("").map(function(r){return r.charCodeAt(0)}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.asciiToUint8Array=r,exports.uint8ArrayToAscii=t,exports.hexToUint8Array=n,exports.uint8ArrayToHex=e,exports.uint8ArrayToBase64=o,exports.base64ToUint8Array=a;
},{}],"Im4N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.wasmHelpers=exports.isWasming=void 0;var e=s(require("../../Cargo.toml")),t=require("./constants"),r=require("./convert");function s(e){return e&&e.__esModule?e:{default:e}}var a=!1;exports.isWasming=a;var n=new function(){this.sk_bytes_to_pk_bytes=function(r){exports.isWasming=a=!0;var s=[];try{for(var n=0;n<r.length;n++)e.default.set_sk_byte(n,r[n]);e.default.derive_pk_from_sk();for(var i=0;i<t.pkLen;i++){var u=e.default.get_pk_byte(i);s.push(u)}}catch(_){throw exports.isWasming=a=!1,"Failed to generate"}return exports.isWasming=a=!1,s},this.sign_msg=function(r,s){exports.isWasming=a=!0;var n=[];try{for(var i=0;i<r.length;i++)e.default.set_sk_byte(i,r[i]);for(var u=0;u<s.length;u++)e.default.set_msg_byte(u,s[u]);e.default.sign_msg(s.length);for(var _=0;_<t.sigLen;_++){var o=e.default.get_sig_byte(_);n.push(o)}}catch(g){exports.isWasming=a=!1}return exports.isWasming=a=!1,n},this.verify=function(t,r,s){exports.isWasming=a=!0;var n=!1;try{for(var i=0;i<t.length;i++)e.default.set_pk_byte(i,t[i]);for(var u=0;u<r.length;u++)e.default.set_sig_byte(u,r[u]);for(var _=0;_<s.length;_++)e.default.set_msg_byte(_,s[_]);n=e.default.verify(s.length)}catch(o){exports.isWasming=a=!1}return exports.isWasming=a=!1,n},this.set_rng_values=function(){if(window.crypto){var t=e.default.get_rng_values_size(),r=new Uint32Array(t);window.crypto.getRandomValues(r);for(var s=0;s<r.length;s++)e.default.set_rng_value(s,r[s])}else alert("Secure randomness not available in this browser, output is insecure.")},this.encrypt=function(t,r){exports.isWasming=a=!0;var s=[];try{n.set_rng_values();for(var i=0;i<t.length;i++)e.default.set_pk_byte(i,t[i]);for(var u=0;u<r.length;u++)e.default.set_msg_byte(u,r[u]);for(var _=e.default.encrypt(r.length),o=0;o<_;o++){var g=e.default.get_ct_byte(o);s.push(g)}}catch(f){exports.isWasming=a=!1}return exports.isWasming=a=!1,s},this.decrypt=function(t,r){exports.isWasming=a=!0;var s=[];try{for(var n=0;n<t.length;n++)e.default.set_sk_byte(n,t[n]);for(var i=0;i<r.length;i++)e.default.set_ct_byte(i,r[i]);for(var u=e.default.decrypt(r.length),_=0;_<u;_++){var o=e.default.get_msg_byte(_);s.push(o)}}catch(g){exports.isWasming=a=!1}return exports.isWasming=a=!1,s},this.generate_poly=function(r){n.set_rng_values();var s=t.poly_sizes_by_threshold[r];e.default.generate_poly(r);for(var a=[],i=0;i<s;i++){var u=e.default.get_poly_byte(i);a.push(u)}return a},this.get_msk_bytes=function(){for(var r=[],s=0;s<t.skLen;s++){var a=e.default.get_msk_byte(s);r.push(a)}return r},this.get_mpk_bytes=function(){for(var r=[],s=0;s<t.pkLen;s++){var a=e.default.get_mpk_byte(s);r.push(a)}return r},this.get_mc_bytes=function(r){for(var s=[],a=t.commitment_sizes_by_threshold[r],n=0;n<a;n++){var i=e.default.get_mc_byte(n);s.push(i)}return s},this.get_skshare=function(){for(var r=[],s=0;s<t.skLen;s++){var a=e.default.get_skshare_byte(s);r.push(a)}return r},this.get_pkshare=function(){for(var r=[],s=0;s<t.pkLen;s++){var a=e.default.get_pkshare_byte(s);r.push(a)}return r},this.combine_signatures=function(s,a){for(var n=0;n<s.length;n++){var i=s[n];e.default.set_mc_byte(n,i)}for(var u=0;u<a.length;u++)for(var _=a[u],o=_.shareHex,g=(0,r.hexToUint8Array)(o),f=_.shareIndex,l=0;l<g.length;l++){var h=g[l];e.default.set_signature_share_byte(l,u,h),e.default.set_share_indexes(u,f)}e.default.combine_signature_shares(a.length,s.length);for(var v=[],p=0;p<t.sigLen;p++){var d=e.default.get_sig_byte(p);v.push(d)}return v}};exports.wasmHelpers=n;
},{"../../Cargo.toml":"Jugo","./constants":"MuPq","./convert":"mV7N"}],"EpLS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DOM=void 0;var e={};exports.DOM=e;
},{}],"Nt3I":[function(require,module,exports) {
"use strict";var e=require("./errors"),r=require("./constants"),t=require("./wasm_helpers"),s=require("./convert"),c=require("./dom");!function(){c.DOM.decrypt={},c.DOM.decrypt.skHex=document.querySelectorAll("#decrypt .sk-hex")[0],c.DOM.decrypt.ct=document.querySelectorAll("#decrypt .ct")[0],c.DOM.decrypt.msg=document.querySelectorAll("#decrypt .msg")[0],c.DOM.decrypt.skHex.addEventListener("input",i),c.DOM.decrypt.ct.addEventListener("input",i);var n=new e.ErrorDisplay("#decrypt .error");function i(){if(n.hide(),t.isWasming)setTimeout(i,200);else{c.DOM.decrypt.msg.value="";var l=c.DOM.decrypt.skHex.value.trim();if(0!=l.length)if(l.length==2*r.skLen){var a=(0,s.hexToUint8Array)(l),d=c.DOM.decrypt.ct.value.trim();if(0!=d.length)if(d.length>2*r.maxCtLen){var o=e.errorMessages.ctLength(d.length);n.show(o)}else{var u=(0,s.hexToUint8Array)(d),y=t.wasmHelpers.decrypt(a,u),p=(0,s.uint8ArrayToAscii)(y);c.DOM.decrypt.msg.value=p}}else{var g=e.errorMessages.skLength(l.length);n.show(g)}}}}();
},{"./errors":"CyAK","./constants":"MuPq","./wasm_helpers":"Im4N","./convert":"mV7N","./dom":"EpLS"}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"rDCW":[function(require,module,exports) {

},{}],"fISM":[function(require,module,exports) {
var __dirname = "/home/ubuntu0/Documents/safe/threshold_crypto_ui/node_modules/parcel-plugin-wasm.rs";
var e,t="/home/ubuntu0/Documents/safe/threshold_crypto_ui/node_modules/parcel-plugin-wasm.rs";const _={};function n(t){const s=fetch(t);let r;return(r="function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(s,{"./threshold_crypto_wasm_bridge_bg.js":_}):s.then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,{"./threshold_crypto_wasm_bridge_bg.js":_}))).then(({instance:t})=>{e=n.wasm=t.exports,_.wasm=e})}function s(s){const r=require("fs");return new Promise(function(e,_){r.readFile(t+s,function(t,n){t?_(t):e(n.buffer)})}).then(e=>WebAssembly.instantiate(e,{"./threshold_crypto_wasm_bridge_bg":_})).then(({instance:t})=>{e=n.wasm=t.exports,_.wasm=e})}_.get_rng_values_size=function(){return e.get_rng_values_size()>>>0},_.set_rng_value=function(t,_){e.set_rng_value(t,_)},_.set_sk_byte=function(t,_){e.set_sk_byte(t,_)},_.get_sk_byte=function(t){return e.get_sk_byte(t)},_.set_pk_byte=function(t,_){e.set_pk_byte(t,_)},_.get_pk_byte=function(t){return e.get_pk_byte(t)},_.set_sig_byte=function(t,_){e.set_sig_byte(t,_)},_.get_sig_byte=function(t){return e.get_sig_byte(t)},_.set_msg_byte=function(t,_){e.set_msg_byte(t,_)},_.get_msg_byte=function(t){return e.get_msg_byte(t)},_.set_ct_byte=function(t,_){e.set_ct_byte(t,_)},_.get_ct_byte=function(t){return e.get_ct_byte(t)},_.get_rng_next_count=function(){return e.get_rng_next_count()>>>0},_.set_poly_byte=function(t,_){e.set_poly_byte(t,_)},_.get_poly_byte=function(t){return e.get_poly_byte(t)},_.set_msk_byte=function(t,_){e.set_msk_byte(t,_)},_.get_msk_byte=function(t){return e.get_msk_byte(t)},_.set_mpk_byte=function(t,_){e.set_mpk_byte(t,_)},_.get_mpk_byte=function(t){return e.get_mpk_byte(t)},_.set_mc_byte=function(t,_){e.set_mc_byte(t,_)},_.get_mc_byte=function(t){return e.get_mc_byte(t)},_.set_skshare_byte=function(t,_){e.set_skshare_byte(t,_)},_.get_skshare_byte=function(t){return e.get_skshare_byte(t)},_.set_pkshare_byte=function(t,_){e.set_pkshare_byte(t,_)},_.get_pkshare_byte=function(t){return e.get_pkshare_byte(t)},_.set_bivar_row_byte=function(t,_,n,s){e.set_bivar_row_byte(t,_,n,s)},_.get_bivar_row_byte=function(t,_,n){return e.get_bivar_row_byte(t,_,n)},_.set_bivar_commitments_byte=function(t,_,n){e.set_bivar_commitments_byte(t,_,n)},_.get_bivar_commitments_byte=function(t,_){return e.get_bivar_commitments_byte(t,_)},_.set_bivar_sks_byte=function(t,_,n){e.set_bivar_sks_byte(t,_,n)},_.get_bivar_sks_byte=function(t,_){return e.get_bivar_sks_byte(t,_)},_.set_bivar_pks_byte=function(t,_,n){e.set_bivar_pks_byte(t,_,n)},_.get_bivar_pks_byte=function(t,_){return e.get_bivar_pks_byte(t,_)},_.set_signature_share_byte=function(t,_,n){e.set_signature_share_byte(t,_,n)},_.get_signature_share_byte=function(t,_){return e.get_signature_share_byte(t,_)},_.set_share_indexes=function(t,_){e.set_share_indexes(t,_)},_.get_share_indexes=function(t){return e.get_share_indexes(t)>>>0},_.derive_pk_from_sk=function(){e.derive_pk_from_sk()},_.sign_msg=function(t){e.sign_msg(t)},_.verify=function(t){return 0!==e.verify(t)},_.encrypt=function(t){return e.encrypt(t)>>>0},_.decrypt=function(t){return e.decrypt(t)>>>0},_.generate_poly=function(t){e.generate_poly(t)},_.get_poly_degree=function(t){return e.get_poly_degree(t)>>>0},_.derive_master_key=function(t){e.derive_master_key(t)},_.derive_key_share=function(t,_){e.derive_key_share(t,_)},_.generate_bivars=function(t,_){e.generate_bivars(t,_)},_.combine_signature_shares=function(t,_){e.combine_signature_shares(t,_)};const r=Object.assign(n,_);module.exports=function(e){return r(e).then(()=>_)};
},{"fs":"rDCW"}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("wasm",require("fISM"));b.load([["threshold_crypto_wasm_bridge_bg.36797a74.wasm","ksYx"]]).then(function(){require("Nt3I");});
},{}]},{},[0], null)
//# sourceMappingURL=decrypt.16cf49c2.js.map