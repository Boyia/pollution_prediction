(function(){var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ca=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},da=ca(this),h=function(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}};
h("Symbol",function(a){if(a)return a;var b=function(f,k){this.l=f;ba(this,"description",{configurable:!0,writable:!0,value:k})};b.prototype.toString=function(){return this.l};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,e=function(f){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(c+(f||"")+"_"+d++,f)};return e});
h("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
var ea=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},fa=function(a){return a.raw=a},ha=function(a,b){a.raw=b;return a},ia="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var na=ja,oa=function(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype},pa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
h("Object.assign",function(a){return a||pa});h("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});h("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});h("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
h("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
var qa=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e};h("Array.prototype.values",function(a){return a?a:function(){return qa(this,function(b,c){return c})}});
h("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(g){return g};var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var k=0;!(f=b.next()).done;)e.push(c.call(d,f.value,k++))}else for(f=b.length,k=0;k<f;k++)e.push(c.call(d,b[k],k));return e}});h("globalThis",function(a){return a||da});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l=this||self,ra=function(a,b){a:{var c=["CLOSURE_FLAGS"];for(var d=l,e=0;e<c.length;e++)if(d=d[c[e]],null==d){c=null;break a}c=d}a=c&&c[a];return null!=a?a:b},sa=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},ta=function(a){return a};var ua=ra(610401301,!1),va=ra(572417392,ra(1,!0));function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}var t,wa=l.navigator;t=wa?wa.userAgentData||null:null;function xa(a){return ua?t?t.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}function u(a){return-1!=q().indexOf(a)};function v(){return ua?!!t&&0<t.brands.length:!1}function ya(){return v()?!1:u("Opera")}function za(){return u("Firefox")||u("FxiOS")}function Aa(){return v()?xa("Chromium"):(u("Chrome")||u("CriOS"))&&!(v()?0:u("Edge"))||u("Silk")};function w(){return ua?!!t&&!!t.platform:!1}function Ba(){return u("iPhone")&&!u("iPod")&&!u("iPad")}function Ca(){Ba()||u("iPad")||u("iPod")};var Da=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};ya();var Fa=v()?!1:u("Trident")||u("MSIE");u("Edge");!u("Gecko")||-1!=q().toLowerCase().indexOf("webkit")&&!u("Edge")||u("Trident")||u("MSIE")||u("Edge");-1!=q().toLowerCase().indexOf("webkit")&&!u("Edge")&&u("Mobile");w()||u("Macintosh");w()||u("Windows");(w()?"Linux"===t.platform:u("Linux"))||w()||u("CrOS");w()||u("Android");Ba();u("iPad");u("iPod");Ca();q().toLowerCase().indexOf("kaios");za();Ba()||u("iPod");u("iPad");!u("Android")||Aa()||za()||ya()||u("Silk");Aa();!u("Safari")||Aa()||(v()?0:u("Coast"))||ya()||(v()?0:u("Edge"))||(v()?xa("Microsoft Edge"):u("Edg/"))||(v()?xa("Opera"):u("OPR"))||za()||u("Silk")||u("Android")||Ca();var Ga={},x=null;var Ha="undefined"!==typeof Uint8Array,Ia=!Fa&&"function"===typeof btoa;var Ja=!va,Ka=!va;function y(a){return Array.prototype.slice.call(a)};var z="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0,La=z?function(a,b){a[z]|=b}:function(a,b){void 0!==a.i?a.i|=b:Object.defineProperties(a,{i:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function Ma(a){var b=A(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=y(a)),B(a,b|1))}
var A=z?function(a){return a[z]|0}:function(a){return a.i|0},E=z?function(a){return a[z]}:function(a){return a.i},B=z?function(a,b){a[z]=b}:function(a,b){void 0!==a.i?a.i=b:Object.defineProperties(a,{i:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function Na(){var a=[];La(a,1);return a}function Oa(a,b){B(b,(a|0)&-14591)}function Pa(a,b){B(b,(a|34)&-14557)}function Qa(a){a=a>>14&1023;return 0===a?536870912:a};var Ra={},Sa={};function Ta(a){return!(!a||"object"!==typeof a||a.C!==Sa)}function F(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var Ua,Va=!va;function Wa(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=A(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;B(a,d|1);return!0}var G,Xa=[];B(Xa,55);G=Object.freeze(Xa);function Ya(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+sa(a)+": "+a);return!!a};var I;function Za(a,b,c){null==a&&(a=I);I=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=A(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=d;if(d=a.length){var e=d-1;if(F(a[e])){c|=256;b=e-(+!!(c&512)-1);if(1024<=b)throw Error();d=c&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,d-(+!!(c&512)-1));if(1024<b)throw Error();d=c&-16760833|(b&1023)<<14}else d=c}}B(a,d);return a};function $a(a,b){return ab(b)}
function ab(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return Va||!Wa(a,void 0,9999)?a:void 0;if(Ha&&null!=a&&a instanceof Uint8Array){if(Ia){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else{void 0===b&&(b=0);if(!x){x={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");d=
["+/=","+/","-_=","-_.","-_"];for(var e=0;5>e;e++){var f=c.concat(d[e].split(""));Ga[e]=f;for(var k=0;k<f.length;k++){var g=f[k];void 0===x[g]&&(x[g]=k)}}}b=Ga[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var m=a[f],n=a[f+1];g=a[f+2];k=b[m>>2];m=b[(m&3)<<4|n>>4];n=b[(n&15)<<2|g>>6];g=b[g&63];c[e++]=k+m+n+g}k=0;g=d;switch(a.length-f){case 2:k=a[f+1],g=b[(k&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|k>>4]+g+d}a=c.join("")}return a}}}return a};function bb(a,b,c){a=y(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}function cb(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&A(a)&1?void 0:f&&A(a)&2?a:db(a,b,c,void 0!==d,e,f);else if(F(a)){var k={},g;for(g in a)k[g]=cb(a[g],b,c,d,e,f);a=k}else a=b(a,d);return a}}
function db(a,b,c,d,e,f){var k=d||c?A(a):0;d=d?!!(k&32):void 0;a=y(a);for(var g=0;g<a.length;g++)a[g]=cb(a[g],b,c,d,e,f);c&&c(k,a);return a}function eb(a){return a.s===Ra?a.toJSON():ab(a)};function fb(a,b,c){c=void 0===c?Pa:c;if(null!=a){if(Ha&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=A(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(B(a,(d|34)&-12293),a):db(a,fb,d&4?Pa:c,!0,!1,!0)}a.s===Ra&&(c=a.g,d=E(c),a=d&2?a:gb(a,c,d,!0));return a}}function gb(a,b,c,d){a=a.constructor;I=b=hb(b,c,d);b=new a(b);I=void 0;return b}
function hb(a,b,c){var d=c||b&2?Pa:Oa,e=!!(b&32);a=bb(a,b,function(f){return fb(f,e,d)});La(a,32|(c?2:0));return a};Object.freeze({});var jb=function(a,b,c){var d=a.g,e=E(d);if(e&2)throw Error();ib(d,e,b,c);return a};function ib(a,b,c,d){var e=Qa(b);if(c>=e){var f=b;if(b&256)e=a[a.length-1];else{if(null==d)return;e=a[e+(+!!(b&512)-1)]={};f|=256}e[c]=d;f!==b&&B(a,f)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}var J=function(a,b,c){if(null!=c&&"string"!==typeof c)throw Error();return jb(a,b,c)};var K=function(a,b,c){this.g=Za(a,b,c)};K.prototype.toJSON=function(){if(Ua)var a=kb(this,this.g,!1);else a=db(this.g,eb,void 0,void 0,!1,!1),a=kb(this,a,!0);return a};K.prototype.clone=function(){var a=this.g;return gb(this,a,E(a),!1)};K.prototype.s=Ra;K.prototype.toString=function(){return kb(this,this.g,!1).toString()};
function kb(a,b,c){var d=a.constructor.u,e=E(c?a.g:b),f=Qa(e),k=!1;if(d&&Va){if(!c){b=y(b);var g;if(b.length&&F(g=b[b.length-1]))for(k=0;k<d.length;k++)if(d[k]>=f){Object.assign(b[b.length-1]={},g);break}k=!0}f=b;c=!c;g=E(a.g);a=Qa(g);g=+!!(g&512)-1;for(var m,n,r=0;r<d.length;r++)if(n=d[r],n<a){n+=g;var p=f[n];null==p?f[n]=c?G:Na():c&&p!==G&&Ma(p)}else m||(p=void 0,f.length&&F(p=f[f.length-1])?m=p:f.push(m={})),p=m[n],null==m[n]?m[n]=c?G:Na():c&&p!==G&&Ma(p)}m=b.length;if(!m)return b;var C;if(F(f=
b[m-1])){a:{var D=f;c={};a=!1;for(var H in D){g=D[H];if(Array.isArray(g)){r=g;if(!Ka&&Wa(g,d,+H)||!Ja&&Ta(g)&&0===g.size)g=null;g!=r&&(a=!0)}null!=g?c[H]=g:a=!0}if(a){for(var Rc in c){D=c;break a}D=null}}D!=f&&(C=!0);m--}for(e=+!!(e&512)-1;0<m;m--){H=m-1;f=b[H];if(!(null==f||!Ka&&Wa(f,d,H-e)||!Ja&&Ta(f)&&0===f.size))break;var bc=!0}if(!C&&!bc)return b;var Ea;k?Ea=b:Ea=Array.prototype.slice.call(b,0,m);b=Ea;k&&(b.length=m);D&&b.push(D);return b};var L,lb=function(){if(void 0===L){var a=null,b=l.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ta,createScript:ta,createScriptURL:ta})}catch(c){l.console&&l.console.error(c.message)}L=a}else L=a}return L};var M=function(a){this.l=a};M.prototype.toString=function(){return this.l+""};var mb={};var nb={},N=function(a){this.l=a};N.prototype.toString=function(){return this.l.toString()};/*

 SPDX-License-Identifier: Apache-2.0
*/
var ob=fa([""]),pb=ha(["\x00"],["\\0"]),qb=ha(["\n"],["\\n"]),rb=ha(["\x00"],["\\u0000"]);function O(a){return-1===a.toString().indexOf("`")}O(function(a){return a(ob)})||O(function(a){return a(pb)})||O(function(a){return a(qb)})||O(function(a){return a(rb)});var ub=function(a,b){if(!sb()){var c=Math.random();if(c<b)return c=tb(),a[Math.floor(c*a.length)]}return null},tb=function(){if(!globalThis.crypto)return Math.random();try{var a=new Uint32Array(1);globalThis.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},sb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Da(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],vb)||1E-4>Math.random()}),vb=function(a){return-1!=
q().indexOf(a)};var wb=function(a){this.g=Za(a)};oa(wb,K);var xb=function(a){this.g=Za(a)};oa(xb,K);
var yb=function(a,b){return J(a,2,b)},zb=function(a,b){return J(a,3,b)},Ab=function(a,b){return J(a,4,b)},Bb=function(a,b){return J(a,5,b)},Cb=function(a,b){return J(a,9,b)},Db=function(a,b){var c=a.g,d=E(c);if(d&2)throw Error();if(null==b)ib(c,d,10);else{var e=A(b),f=e,k=!!(2&e)||!!(2048&e),g=k||Object.isFrozen(b),m;if(m=!g)m=!1;for(var n=!0,r=!0,p=0;p<b.length;p++){var C=b[p];k||(C=!!(A(C.g)&2),n&&(n=!C),r&&(r=C))}k||(e|=5,e=n?e|8:e&-9,e=r?e|16:e&-17,m&&(e|=r?2:2048),e!==f&&(g&&(b=y(b),e=2&d?e|
2:e&-3,e=32&d?e|32:e&-33,e&=-2049),B(b,e)),m&&Object.freeze(b));ib(c,d,10,b)}return a},Eb=function(a,b){return jb(a,11,null==b?b:Ya(b))},Fb=function(a,b){return J(a,1,b)},Gb=function(a,b){return jb(a,7,null==b?b:Ya(b))};xb.u=[10,6];var Hb="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Ib(){var a;return null!=(a=l.google_tag_data)?a:l.google_tag_data={}}function Jb(){var a,b;return"function"===typeof(null==(a=l.navigator)?void 0:null==(b=a.userAgentData)?void 0:b.getHighEntropyValues)}
function Kb(){if(!Jb())return null;var a=Ib();if(a.uach_promise)return a.uach_promise;var b=l.navigator.userAgentData.getHighEntropyValues(Hb).then(function(c){null!=a.uach||(a.uach=c);return c});return a.uach_promise=b}
function Lb(a){var b;return Eb(Db(Bb(yb(Fb(Ab(Gb(Cb(zb(new xb,String(a.architecture||"")),String(a.bitness||"")),!!a.mobile),String(a.model||"")),String(a.platform||"")),String(a.platformVersion||"")),String(a.uaFullVersion||"")),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new wb;d=J(d,1,String(c.brand));return J(d,2,String(c.version))}))||[]),!!a.wow64)};var Mb=function(a){try{for(var b=null;b!=a;b=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!0;case "http:":return!1}}catch(c){}return!0}(l)?"https:":"http:",Nb={},Ob=(Nb[1]="A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",Nb);var P=[],Q=function(a){this.id=a.id;this.h=a.h;this.j=a.j;P.push(this)},Pb=new Q({id:1,h:{m:"40004000",o:"40004001"},j:1}),R=new Q({id:4,h:{m:"40004006",o:"40004007"},j:4}),Qb=new Q({id:5,h:{m:"40004008",o:"40004009"},j:4}),Rb=new Q({id:12,h:{m:"44752204",o:"44752205"},j:11}),Sb=new Q({id:13,h:{m:"44761098",v:"44761099",A:"44761100",B:"44761101"},j:12}),Tb=new Q({id:14,h:{m:"44762123",o:"44762124"},j:13});function Ub(){var a={};a[Pb.id]=.5;a[R.id]=.02;a[Qb.id]=.001;a[Rb.id]=.001;a[Sb.id]=.001;a[Tb.id]=.05;return a}function Vb(){var a=Wb,b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return!1;if(b="undefined"!=typeof Symbol&&Symbol.iterator&&P[Symbol.iterator])b=b.call(P);else if("number"==typeof P.length)b={next:aa(P)};else throw Error(String(P)+" is not an iterable or ArrayLike");for(var c=b.next();!c.done;c=b.next())if(c=a[c.value.id],"number"!==typeof c||0>c||1<c)return!1;return!0};function Xb(a){return null===a?"null":void 0===a?"undefined":a};function Yb(){if(!l.dcmads.uach){var a=Kb();a&&(l.dcmads.uachp=a.then(function(b){var c=l.dcmads;a:{b=Lb(b);Ua=!0;try{var d=JSON.stringify(b.toJSON(),$a);break a}finally{Ua=!1}d=void 0}c.uach=d}))}};try{l.dcmads=l.dcmads||{};l.dcmads.startTime=(new Date).getTime();var Zb=l.dcmads,S=l.dcmads.version,T={loader:292};if(S)if(T.experiment=S.experiment,99==S.number||"p"==S.number)T.number=99;else if(99==S.number||"c"==S.number)T.number=99;if(!T.number){var $b=ub([99,99],0);T.experiment=!!$b;T.number=$b||99}Zb.version=T;var ac=l.dcmads,cc,Wb=l.dcmads.expts,dc;dc=void 0===dc?Ub:dc;cc=Vb()?Wb:dc();ac.expts=cc;var ec=l.dcmads,fc;var gc=l.dcmads;if(null!=gc.eids)fc=gc.eids;else{var hc=[],ic=l.navigator;
if(ic.connection&&ic.connection.saveData){var jc=ub(Object.values(R.h),gc.expts[R.id]);jc&&hc.push(R.j+"|"+jc)}fc=hc.join(",")}ec.eids=fc;l.dcmads.ots=Ob;Yb();var kc=new RegExp("4\\|"+R.h.o),lc=l.dcmads.version,mc=lc.number,nc="";lc.experiment&&99==mc&&(nc="?rxp=99x99");var oc="impl_v"+mc+".js"+nc,pc=l.document,qc=pc.currentScript||Array.from(pc.getElementsByTagName("script")).pop(),rc=(0==(qc&&qc.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+oc;if(kc.test(l.dcmads.eids)){var sc=
l.document,U,tc=rc,uc=tc=Xb(tc),vc=lb(),wc=vc?vc.createScriptURL(uc):uc;U=new M(wc,mb);var V,xc=sc;xc=void 0===xc?document:xc;V=xc.createElement("script");var yc;U instanceof M&&U.constructor===M?yc=U.l:(sa(U),yc="type_error:TrustedResourceUrl");V.src=yc;var zc,Ac,Bc,Cc=null==(Bc=(Ac=(V.ownerDocument&&V.ownerDocument.defaultView||window).document).querySelector)?void 0:Bc.call(Ac,"script[nonce]");(zc=Cc?Cc.nonce||Cc.getAttribute("nonce")||"":"")&&V.setAttribute("nonce",zc);var Dc=sc.getElementsByTagName("script")[0];
Dc&&Dc.parentNode&&Dc.parentNode.insertBefore(V,Dc)}else{var Ec=l.document,W,Fc='<script src="'+rc+'">\x3c/script>',Gc=Fc=Xb(Fc),Hc=lb(),Ic=Hc?Hc.createHTML(Gc):Gc;W=new N(Ic,nb);var Jc=Ec.write,Kc;W instanceof N&&W.constructor===N?Kc=W.l:(sa(W),Kc="type_error:SafeHtml");Jc.call(Ec,Kc)}}catch(a){if(.01>Math.random()){var Lc="";try{var Mc,X=a,Y=X.toString();X.name&&-1==Y.indexOf(X.name)&&(Y+=": "+X.name);X.message&&-1==Y.indexOf(X.message)&&(Y+=": "+X.message);if(X.stack){var Z=X.stack,Nc=Y;try{-1==
Z.indexOf(Nc)&&(Z=Nc+"\n"+Z);for(var Oc;Z!=Oc;)Oc=Z,Z=Z.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");Y=Z.replace(RegExp("\n *","g"),"\n")}catch(b){Y=Nc}}Mc=Y;Mc=Mc.substring(0,1024);Lc=encodeURIComponent(Mc)}catch(b){Lc="extr"}var Pc=l.dcmads.eids,Qc=document.createElement("img");Qc.src=Mb+"//pagead2.googlesyndication.com/pagead/gen_204?id=dcmads-err&ver=292&context=554"+((Pc?"&eids="+Pc:"")+"&msg="+Lc);(l.google_image_requests=l.google_image_requests||[]).push(Qc)}};}).call(this);