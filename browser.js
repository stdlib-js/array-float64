// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,n=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,r="function"==typeof e?e.toStringTag:"",l=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,l,f,a,y;if(null==t)return o.call(t);l=t[r],y=r,e=null!=(a=t)&&n.call(a,y);try{t[r]=void 0}catch(n){return o.call(t)}return f=o.call(t),e?t[r]=l:delete t[r],f}:function(t){return o.call(t)},f="function"==typeof Float64Array,a="function"==typeof Float64Array?Float64Array:null,y="function"==typeof Float64Array?Float64Array:void 0;return function(){var t,o,n;if("function"!=typeof a)return!1;try{o=new a([1,3.14,-3.14,NaN]),n=o,t=(f&&n instanceof Float64Array||"[object Float64Array]"===l(n))&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}()?y:function(){throw new Error("not implemented")}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).Float64Array=o();
//# sourceMappingURL=browser.js.map
