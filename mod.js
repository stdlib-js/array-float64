// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var a,e,l,y,c;if(null==t)return o.call(t);e=t[n],c=n,a=null!=(y=t)&&r.call(y,c);try{t[n]=void 0}catch(r){return o.call(t)}return l=o.call(t),a?t[n]=e:delete t[n],l}:function(t){return o.call(t)},e="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var y="function"==typeof Float64Array?Float64Array:void 0;var c=function(){var t,o,r;if("function"!=typeof l)return!1;try{o=new l([1,3.14,-3.14,NaN]),r=o,t=(e&&r instanceof Float64Array||"[object Float64Array]"===a(r))&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}()?y:function(){throw new Error(function(){var t,o=arguments,r="https://stdlib.io/e/"+o[0]+"?";for(t=1;t<o.length;t++)r+="&arg[]="+encodeURIComponent(o[t]);return r}("00O00"))};export{c as default};
//# sourceMappingURL=mod.js.map
