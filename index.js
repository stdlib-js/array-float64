// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,l="function"==typeof r?r.toStringTag:"",f=o&&"symbol"==typeof Symbol.toStringTag?function(t){var o,r,f,a,i;if(null==t)return n.call(t);r=t[l],i=l,o=null!=(a=t)&&e.call(a,i);try{t[l]=void 0}catch(o){return n.call(t)}return f=n.call(t),o?t[l]=r:delete t[l],f}:function(t){return n.call(t)},a="function"==typeof Float64Array,i="function"==typeof Float64Array?Float64Array:null,y="function"==typeof Float64Array?Float64Array:void 0;return t=function(){var t,o,n;if("function"!=typeof i)return!1;try{o=new i([1,3.14,-3.14,NaN]),n=o,t=(a&&n instanceof Float64Array||"[object Float64Array]"===f(n))&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}()?y:function(){throw new Error(function(){var t,o=arguments,n="https://stdlib.io/e/"+o[0]+"?";for(t=1;t<o.length;t++)n+="&arg[]="+encodeURIComponent(o[t]);return n}("00n00"))},t},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).Float64Array=o();
//# sourceMappingURL=index.js.map
