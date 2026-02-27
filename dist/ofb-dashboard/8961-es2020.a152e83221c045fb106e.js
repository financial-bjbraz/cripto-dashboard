(self.webpackChunkofb_dashboard=self.webpackChunkofb_dashboard||[]).push([[8961],{78333:function(e){"use strict";var t={single_source_shortest_paths:function(e,i,n){var o={},r={};r[i]=0;var s,a,l,c,d,u,h=t.PriorityQueue.make();for(h.push(i,0);!h.empty();)for(l in c=(s=h.pop()).cost,d=e[a=s.value]||{})d.hasOwnProperty(l)&&(u=c+d[l],(void 0===r[l]||r[l]>u)&&(r[l]=u,h.push(l,u),o[l]=a));if(void 0!==n&&void 0===r[n]){var p=["Could not find a path from ",i," to ",n,"."].join("");throw new Error(p)}return o},extract_shortest_path_from_predecessor_list:function(e,t){for(var i=[],n=t;n;)i.push(n),n=e[n];return i.reverse(),i},find_path:function(e,i,n){var o=t.single_source_shortest_paths(e,i,n);return t.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(e){var i,n=t.PriorityQueue,o={};for(i in e=e||{},n)n.hasOwnProperty(i)&&(o[i]=n[i]);return o.queue=[],o.sorter=e.sorter||n.default_sorter,o},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},11522:function(e){"use strict";e.exports=function(e){for(var t=[],i=e.length,n=0;n<i;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319&&i>n+1){var r=e.charCodeAt(n+1);r>=56320&&r<=57343&&(o=1024*(o-55296)+r-56320+65536,n+=1)}o<128?t.push(o):o<2048?(t.push(o>>6|192),t.push(63&o|128)):o<55296||o>=57344&&o<65536?(t.push(o>>12|224),t.push(o>>6&63|128),t.push(63&o|128)):o>=65536&&o<=1114111?(t.push(o>>18|240),t.push(o>>12&63|128),t.push(o>>6&63|128),t.push(63&o|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}},6877:function(e,t,i){const n=i(50436),o=i(51191),r=i(32158),s=i(173);function a(e,t,i,r,s){const a=[].slice.call(arguments,1),l=a.length,c="function"==typeof a[l-1];if(!c&&!n())throw new Error("Callback required as last argument");if(!c){if(l<1)throw new Error("Too few arguments provided");return 1===l?(i=t,t=r=void 0):2===l&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(n,s){try{const s=o.create(i,r);n(e(s,t,r))}catch(a){s(a)}})}if(l<2)throw new Error("Too few arguments provided");2===l?(s=i,i=t,t=r=void 0):3===l&&(t.getContext&&void 0===s?(s=r,r=void 0):(s=r,r=i,i=t,t=void 0));try{const n=o.create(i,r);s(null,e(n,t,r))}catch(d){s(d)}}t.create=o.create,t.toCanvas=a.bind(null,r.render),t.toDataURL=a.bind(null,r.renderToDataURL),t.toString=a.bind(null,function(e,t,i){return s.render(e,i)})},50436:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},76448:function(e,t,i){const n=i(55402).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];const t=Math.floor(e/7)+2,i=n(e),o=145===i?26:2*Math.ceil((i-13)/(2*t-2)),r=[i-7];for(let n=1;n<t-1;n++)r[n]=r[n-1]-o;return r.push(6),r.reverse()},t.getPositions=function(e){const i=[],n=t.getRowColCoords(e),o=n.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)0===t&&0===e||0===t&&e===o-1||t===o-1&&0===e||i.push([n[t],n[e]]);return i}},42793:function(e,t,i){const n=i(93141),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function r(e){this.mode=n.ALPHANUMERIC,this.data=e}r.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let i=45*o.indexOf(this.data[t]);i+=o.indexOf(this.data[t+1]),e.put(i,11)}this.data.length%2&&e.put(o.indexOf(this.data[t]),6)},e.exports=r},57258:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){const t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let i=0;i<t;i++)this.putBit(1==(e>>>t-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},8104:function(e){function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,i,n){const o=e*this.size+t;this.data[o]=i,n&&(this.reservedBit[o]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},62860:function(e,t,i){const n=i(11522),o=i(93141);function r(e){this.mode=o.BYTE,"string"==typeof e&&(e=n(e)),this.data=new Uint8Array(e)}r.getBitsLength=function(e){return 8*e},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)},e.exports=r},67291:function(e,t,i){const n=i(3997),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return o[4*(e-1)+0];case n.M:return o[4*(e-1)+1];case n.Q:return o[4*(e-1)+2];case n.H:return o[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return r[4*(e-1)+0];case n.M:return r[4*(e-1)+1];case n.Q:return r[4*(e-1)+2];case n.H:return r[4*(e-1)+3];default:return}}},3997:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,i){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch{return i}}},21224:function(e,t,i){const n=i(55402).getSymbolSize;t.getPositions=function(e){const t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},34482:function(e,t,i){const n=i(55402),o=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){const i=e.bit<<3|t;let r=i<<10;for(;n.getBCHDigit(r)-o>=0;)r^=1335<<n.getBCHDigit(r)-o;return 21522^(i<<10|r)}},10567:function(e,t){const i=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)i[t]=e,n[e]=t,e<<=1,256&e&&(e^=285);for(let t=255;t<512;t++)i[t]=i[t-255]})(),t.log=function(e){if(e<1)throw new Error("log("+e+")");return n[e]},t.exp=function(e){return i[e]},t.mul=function(e,t){return 0===e||0===t?0:i[n[e]+n[t]]}},51909:function(e,t,i){const n=i(93141),o=i(55402);function r(e){this.mode=n.KANJI,this.data=e}r.getBitsLength=function(e){return 13*e},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=o.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else{if(!(i>=57408&&i<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");i-=49472}i=192*(i>>>8&255)+(255&i),e.put(i,13)}},e.exports=r},41976:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function i(e,i,n){switch(e){case t.Patterns.PATTERN000:return(i+n)%2==0;case t.Patterns.PATTERN001:return i%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(i+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return i*n%2+i*n%3==0;case t.Patterns.PATTERN110:return(i*n%2+i*n%3)%2==0;case t.Patterns.PATTERN111:return(i*n%3+(i+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){const t=e.size;let i=0,n=0,o=0,r=null,s=null;for(let a=0;a<t;a++){n=o=0,r=s=null;for(let l=0;l<t;l++){let t=e.get(a,l);t===r?n++:(n>=5&&(i+=n-5+3),r=t,n=1),t=e.get(l,a),t===s?o++:(o>=5&&(i+=o-5+3),s=t,o=1)}n>=5&&(i+=n-5+3),o>=5&&(i+=o-5+3)}return i},t.getPenaltyN2=function(e){const t=e.size;let i=0;for(let n=0;n<t-1;n++)for(let o=0;o<t-1;o++){const t=e.get(n,o)+e.get(n,o+1)+e.get(n+1,o)+e.get(n+1,o+1);(4===t||0===t)&&i++}return 3*i},t.getPenaltyN3=function(e){const t=e.size;let i=0,n=0,o=0;for(let r=0;r<t;r++){n=o=0;for(let s=0;s<t;s++)n=n<<1&2047|e.get(r,s),s>=10&&(1488===n||93===n)&&i++,o=o<<1&2047|e.get(s,r),s>=10&&(1488===o||93===o)&&i++}return 40*i},t.getPenaltyN4=function(e){let t=0;const i=e.data.length;for(let n=0;n<i;n++)t+=e.data[n];return 10*Math.abs(Math.ceil(100*t/i/5)-10)},t.applyMask=function(e,t){const n=t.size;for(let o=0;o<n;o++)for(let r=0;r<n;r++)t.isReserved(r,o)||t.xor(r,o,i(e,r,o))},t.getBestMask=function(e,i){const n=Object.keys(t.Patterns).length;let o=0,r=1/0;for(let s=0;s<n;s++){i(s),t.applyMask(s,e);const n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),n<r&&(r=n,o=s)}return o}},93141:function(e,t,i){const n=i(74200),o=i(22679);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!n.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return o.testNumeric(e)?t.NUMERIC:o.testAlphanumeric(e)?t.ALPHANUMERIC:o.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,i){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch{return i}}},50580:function(e,t,i){const n=i(93141);function o(e){this.mode=n.NUMERIC,this.data=e.toString()}o.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t,i,n;for(t=0;t+3<=this.data.length;t+=3)i=this.data.substr(t,3),n=parseInt(i,10),e.put(n,10);const o=this.data.length-t;o>0&&(i=this.data.substr(t),n=parseInt(i,10),e.put(n,3*o+1))},e.exports=o},70830:function(e,t,i){const n=i(10567);t.mul=function(e,t){const i=new Uint8Array(e.length+t.length-1);for(let o=0;o<e.length;o++)for(let r=0;r<t.length;r++)i[o+r]^=n.mul(e[o],t[r]);return i},t.mod=function(e,t){let i=new Uint8Array(e);for(;i.length-t.length>=0;){const e=i[0];for(let r=0;r<t.length;r++)i[r]^=n.mul(t[r],e);let o=0;for(;o<i.length&&0===i[o];)o++;i=i.slice(o)}return i},t.generateECPolynomial=function(e){let i=new Uint8Array([1]);for(let o=0;o<e;o++)i=t.mul(i,new Uint8Array([1,n.exp(o)]));return i}},51191:function(e,t,i){const n=i(55402),o=i(3997),r=i(57258),s=i(8104),a=i(76448),l=i(21224),c=i(41976),d=i(67291),u=i(56041),h=i(90160),p=i(34482),g=i(93141),f=i(71769);function w(e,t,i){const n=e.size,o=p.getEncodedBits(t,i);let r,s;for(r=0;r<15;r++)s=1==(o>>r&1),e.set(r<6?r:r<8?r+1:n-15+r,8,s,!0),e.set(8,r<8?n-r-1:r<9?15-r-1+1:15-r-1,s,!0);e.set(n-8,8,1,!0)}function m(e,t,i,o){let p;if(Array.isArray(e))p=f.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");{let n=t;if(!n){const t=f.rawSplit(e);n=h.getBestVersionForData(t,i)}p=f.fromString(e,n||40)}}const m=h.getBestVersionForData(p,i);if(!m)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<m)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+m+".\n")}else t=m;const b=function(e,t,i){const o=new r;i.forEach(function(t){o.put(t.mode.bit,4),o.put(t.getLength(),g.getCharCountIndicator(t.mode,e)),t.write(o)});const s=8*(n.getSymbolTotalCodewords(e)-d.getTotalCodewordsCount(e,t));for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let n=0;n<a;n++)o.put(n%2?17:236,8);return function(e,t,i){const o=n.getSymbolTotalCodewords(t),r=o-d.getTotalCodewordsCount(t,i),s=d.getBlocksCount(t,i),a=s-o%s,l=Math.floor(o/s),c=Math.floor(r/s),h=c+1,p=l-c,g=new u(p);let f=0;const w=new Array(s),m=new Array(s);let b=0;const y=new Uint8Array(e.buffer);for(let n=0;n<s;n++){const e=n<a?c:h;w[n]=y.slice(f,f+e),m[n]=g.encode(w[n]),f+=e,b=Math.max(b,e)}const v=new Uint8Array(o);let x,$,C=0;for(x=0;x<b;x++)for($=0;$<s;$++)x<w[$].length&&(v[C++]=w[$][x]);for(x=0;x<p;x++)for($=0;$<s;$++)v[C++]=m[$][x];return v}(o,e,t)}(t,i,p),y=n.getSymbolSize(t),v=new s(y);return function(e,t){const i=e.size,n=l.getPositions(t);for(let o=0;o<n.length;o++){const t=n[o][0],r=n[o][1];for(let n=-1;n<=7;n++)if(!(t+n<=-1||i<=t+n))for(let o=-1;o<=7;o++)r+o<=-1||i<=r+o||e.set(t+n,r+o,n>=0&&n<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===n||6===n)||n>=2&&n<=4&&o>=2&&o<=4,!0)}}(v,t),function(e){const t=e.size;for(let i=8;i<t-8;i++){const t=i%2==0;e.set(i,6,t,!0),e.set(6,i,t,!0)}}(v),function(e,t){const i=a.getPositions(t);for(let n=0;n<i.length;n++){const t=i[n][0],o=i[n][1];for(let i=-2;i<=2;i++)for(let n=-2;n<=2;n++)e.set(t+i,o+n,-2===i||2===i||-2===n||2===n||0===i&&0===n,!0)}}(v,t),w(v,i,0),t>=7&&function(e,t){const i=e.size,n=h.getEncodedBits(t);let o,r,s;for(let a=0;a<18;a++)o=Math.floor(a/3),r=a%3+i-8-3,s=1==(n>>a&1),e.set(o,r,s,!0),e.set(r,o,s,!0)}(v,t),function(e,t){const i=e.size;let n=-1,o=i-1,r=7,s=0;for(let a=i-1;a>0;a-=2)for(6===a&&a--;;){for(let i=0;i<2;i++)if(!e.isReserved(o,a-i)){let n=!1;s<t.length&&(n=1==(t[s]>>>r&1)),e.set(o,a-i,n),r--,-1===r&&(s++,r=7)}if(o+=n,o<0||i<=o){o-=n,n=-n;break}}}(v,b),isNaN(o)&&(o=c.getBestMask(v,w.bind(null,v,i))),c.applyMask(o,v),w(v,i,o),{modules:v,version:t,errorCorrectionLevel:i,maskPattern:o,segments:p}}t.create=function(e,t){if(void 0===e||""===e)throw new Error("No input text");let i,r,s=o.M;return void 0!==t&&(s=o.from(t.errorCorrectionLevel,o.M),i=h.from(t.version),r=c.from(t.maskPattern),t.toSJISFunc&&n.setToSJISFunction(t.toSJISFunc)),m(e,i,s,r)}},56041:function(e,t,i){const n=i(70830);function o(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},o.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const i=n.mod(t,this.genPoly),o=this.degree-i.length;if(o>0){const e=new Uint8Array(this.degree);return e.set(i,o),e}return i},e.exports=o},22679:function(e,t){const i="[0-9]+";let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");const o="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+";t.KANJI=new RegExp(n,"g"),t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=new RegExp(o,"g"),t.NUMERIC=new RegExp(i,"g"),t.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const r=new RegExp("^"+n+"$"),s=new RegExp("^"+i+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return r.test(e)},t.testNumeric=function(e){return s.test(e)},t.testAlphanumeric=function(e){return a.test(e)}},71769:function(e,t,i){const n=i(93141),o=i(50580),r=i(42793),s=i(62860),a=i(51909),l=i(22679),c=i(55402),d=i(78333);function u(e){return unescape(encodeURIComponent(e)).length}function h(e,t,i){const n=[];let o;for(;null!==(o=e.exec(i));)n.push({data:o[0],index:o.index,mode:t,length:o[0].length});return n}function p(e){const t=h(l.NUMERIC,n.NUMERIC,e),i=h(l.ALPHANUMERIC,n.ALPHANUMERIC,e);let o,r;return c.isKanjiModeEnabled()?(o=h(l.BYTE,n.BYTE,e),r=h(l.KANJI,n.KANJI,e)):(o=h(l.BYTE_KANJI,n.BYTE,e),r=[]),t.concat(i,o,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function g(e,t){switch(t){case n.NUMERIC:return o.getBitsLength(e);case n.ALPHANUMERIC:return r.getBitsLength(e);case n.KANJI:return a.getBitsLength(e);case n.BYTE:return s.getBitsLength(e)}}function f(e,t){let i;const l=n.getBestModeForData(e);if(i=n.from(t,l),i!==n.BYTE&&i.bit<l.bit)throw new Error('"'+e+'" cannot be encoded with mode '+n.toString(i)+".\n Suggested mode is: "+n.toString(l));switch(i===n.KANJI&&!c.isKanjiModeEnabled()&&(i=n.BYTE),i){case n.NUMERIC:return new o(e);case n.ALPHANUMERIC:return new r(e);case n.KANJI:return new a(e);case n.BYTE:return new s(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(f(t,null)):t.data&&e.push(f(t.data,t.mode)),e},[])},t.fromString=function(e,i){const o=function(e){const t=[];for(let i=0;i<e.length;i++){const o=e[i];switch(o.mode){case n.NUMERIC:t.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:t.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:t.push([o,{data:o.data,mode:n.BYTE,length:u(o.data)}]);break;case n.BYTE:t.push([{data:o.data,mode:n.BYTE,length:u(o.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),r=function(e,t){const i={},o={start:{}};let r=["start"];for(let s=0;s<e.length;s++){const a=e[s],l=[];for(let e=0;e<a.length;e++){const c=a[e],d=""+s+e;l.push(d),i[d]={node:c,lastCount:0},o[d]={};for(let e=0;e<r.length;e++){const s=r[e];i[s]&&i[s].node.mode===c.mode?(o[s][d]=g(i[s].lastCount+c.length,c.mode)-g(i[s].lastCount,c.mode),i[s].lastCount+=c.length):(i[s]&&(i[s].lastCount=c.length),o[s][d]=g(c.length,c.mode)+4+n.getCharCountIndicator(c.mode,t))}}r=l}for(let n=0;n<r.length;n++)o[r[n]].end=0;return{map:o,table:i}}(o,i),s=d.find_path(r.map,"start","end"),a=[];for(let t=1;t<s.length-1;t++)a.push(r.table[s[t]].node);return t.fromArray(a.reduce(function(e,t){const i=e.length-1>=0?e[e.length-1]:null;return i&&i.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[]))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},55402:function(e,t){let i;const n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');i=e},t.isKanjiModeEnabled=function(){return void 0!==i},t.toSJIS=function(e){return i(e)}},74200:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},90160:function(e,t,i){const n=i(55402),o=i(67291),r=i(3997),s=i(93141),a=i(74200),l=n.getBCHDigit(7973);function c(e,t){return s.getCharCountIndicator(e,t)+4}function d(e,t){let i=0;return e.forEach(function(e){i+=c(e.mode,t)+e.getBitsLength()}),i}t.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,i){if(!a.isValid(e))throw new Error("Invalid QR Code version");void 0===i&&(i=s.BYTE);const r=8*(n.getSymbolTotalCodewords(e)-o.getTotalCodewordsCount(e,t));if(i===s.MIXED)return r;const l=r-c(i,e);switch(i){case s.NUMERIC:return Math.floor(l/10*3);case s.ALPHANUMERIC:return Math.floor(l/11*2);case s.KANJI:return Math.floor(l/13);default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,i){let n;const o=r.from(i,r.M);if(Array.isArray(e)){if(e.length>1)return function(e,i){for(let n=1;n<=40;n++)if(d(e,n)<=t.getCapacity(n,i,s.MIXED))return n}(e,o);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,i,n){for(let o=1;o<=40;o++)if(i<=t.getCapacity(o,n,e))return o}(n.mode,n.getLength(),o)},t.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;n.getBCHDigit(t)-l>=0;)t^=7973<<n.getBCHDigit(t)-l;return e<<12|t}},32158:function(e,t,i){const n=i(5726);t.render=function(e,t,i){let o=i,r=t;void 0===o&&(!t||!t.getContext)&&(o=t,t=void 0),t||(r=function(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}()),o=n.getOptions(o);const s=n.getImageWidth(e.modules.size,o),a=r.getContext("2d"),l=a.createImageData(s,s);return n.qrToImageData(l.data,e,o),function(e,t,i){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=i,t.width=i,t.style.height=i+"px",t.style.width=i+"px"}(a,r,s),a.putImageData(l,0,0),r},t.renderToDataURL=function(e,i,n){let o=n;return void 0===o&&(!i||!i.getContext)&&(o=i,i=void 0),o||(o={}),t.render(e,i,o).toDataURL(o.type||"image/png",(o.rendererOpts||{}).quality)}},173:function(e,t,i){const n=i(5726);function o(e,t){const i=e.a/255,n=t+'="'+e.hex+'"';return i<1?n+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':n}function r(e,t,i){let n=e+t;return void 0!==i&&(n+=" "+i),n}t.render=function(e,t,i){const s=n.getOptions(t),a=e.modules.size,l=e.modules.data,c=a+2*s.margin,d=s.color.light.a?"<path "+o(s.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",u="<path "+o(s.color.dark,"stroke")+' d="'+function(e,t,i){let n="",o=0,s=!1,a=0;for(let l=0;l<e.length;l++){const c=Math.floor(l%t),d=Math.floor(l/t);!c&&!s&&(s=!0),e[l]?(a++,l>0&&c>0&&e[l-1]||(n+=s?r("M",c+i,.5+d+i):r("m",o,0),o=0,s=!1),c+1<t&&e[l+1]||(n+=r("h",a),a=0)):o++}return n}(l,a,s.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+'viewBox="0 0 '+c+" "+c+'" shape-rendering="crispEdges">'+d+u+"</svg>\n";return"function"==typeof i&&i(null,h),h}},5726:function(e,t){function i(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");const i=parseInt(t.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=e.width&&e.width>=21?e.width:void 0;return{width:t,scale:t?4:e.scale||4,margin:null==e.margin||e.margin<0?4:e.margin,color:{dark:i(e.color.dark||"#000000ff"),light:i(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,i){const n=t.getScale(e,i);return Math.floor((e+2*i.margin)*n)},t.qrToImageData=function(e,i,n){const o=i.modules.size,r=i.modules.data,s=t.getScale(o,n),a=Math.floor((o+2*n.margin)*s),l=n.margin*s,c=[n.color.light,n.color.dark];for(let t=0;t<a;t++)for(let i=0;i<a;i++){let d=4*(t*a+i),u=n.color.light;t>=l&&i>=l&&t<a-l&&i<a-l&&(u=c[r[Math.floor((t-l)/s)*o+Math.floor((i-l)/s)]?1:0]),e[d++]=u.r,e[d++]=u.g,e[d++]=u.b,e[d]=u.a}}},98961:function(e,t,i){"use strict";i.r(t),i.d(t,{W3mAllWalletsView:function(){return bt},W3mConnectingWcBasicView:function(){return Re},W3mDownloadsView:function(){return yt}});var n=i(14350),o=i(72418),r=i(53574),s=i(32628),a=i(91951),l=i(42916),c=i(86499),d=(i(48360),i(73797)),u=i(72290),h=i(27297),p=i(7551),g=i(68886),f=i(40378),w=(i(4374),function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s});let m=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=h.A.state.connectors,this.count=a.Q.state.count,this.filteredCount=a.Q.state.filteredWallets.length,this.isFetchingRecommendedWallets=a.Q.state.isFetchingRecommendedWallets,this.unsubscribe.push(h.A.subscribeKey("connectors",e=>this.connectors=e),a.Q.subscribeKey("count",e=>this.count=e),a.Q.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),a.Q.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=s.h.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!r.j.isMobile())return null;const i=this.count+a.Q.state.featured.length,o=i<10?i:10*Math.floor(i/10),l=this.filteredCount>0?this.filteredCount:o;let c=`${l}`;this.filteredCount>0?c=`${this.filteredCount}`:l<i&&(c=`${l}+`);const h=p.l.hasAnyConnection(u.b.CONNECTOR_ID.WALLET_CONNECT);return n.dy`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,d.o)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${h}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){g.X.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),f.P.push("AllWallets",{redirectView:f.P.state.data.redirectView})}};w([(0,o.Cb)()],m.prototype,"tabIdx",void 0),w([(0,o.SB)()],m.prototype,"connectors",void 0),w([(0,o.SB)()],m.prototype,"count",void 0),w([(0,o.SB)()],m.prototype,"filteredCount",void 0),w([(0,o.SB)()],m.prototype,"isFetchingRecommendedWallets",void 0),m=w([(0,c.Mo)("w3m-all-wallets-widget")],m);var b=i(92809),y=i(38720),v=i(14568),x=i(63908),$=i(33726),C=c.iv`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,k=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let E=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.explorerWallets=a.Q.state.explorerWallets,this.connections=p.l.state.connections,this.connectorImages=b.W.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(p.l.subscribeKey("connections",e=>this.connections=e),b.W.subscribeKey("connectorImages",e=>this.connectorImages=e),a.Q.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e?.length?e:a.Q.state.explorerWallets}),a.Q.subscribeKey("explorerWallets",e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),r.j.isTelegram()&&r.j.isIos()&&(this.loadingTelegram=!p.l.state.wcUri,this.unsubscribe.push(p.l.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n.dy`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return y.C.connectorList().map((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t))}getConnectorNamespaces(e){return"walletConnect"===e.subtype?[]:"multiChain"===e.subtype?e.connector.connectors?.map(e=>e.chain)||[]:[e.connector.chain]}renderConnector(e,t){const i=e.connector,o=v.f.getConnectorImage(i)||this.connectorImages[i?.imageId??""],r=(this.connections.get(i.chain)??[]).some(e=>$.g.isLowerCaseMatch(e.connectorId,i.id));let s,a;"walletConnect"===e.subtype?(s="qr code",a="accent"):"injected"===e.subtype||"announced"===e.subtype?(s=r?"connected":"installed",a=r?"info":"success"):(s=void 0,a=void 0);const l=p.l.hasAnyConnection(u.b.CONNECTOR_ID.WALLET_CONNECT),c=("walletConnect"===e.subtype||"external"===e.subtype)&&l;return n.dy`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.o)(o)}
        .installed=${!0}
        name=${i.name??"Unknown"}
        .tagVariant=${a}
        tagLabel=${(0,d.o)(s)}
        data-testid=${`wallet-selector-${i.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,d.o)(this.tabIdx)}
        ?disabled=${c}
        rdnsId=${(0,d.o)(i.explorerWallet?.rdns||void 0)}
        walletRank=${(0,d.o)(i.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){const t=f.P.state.data.redirectView;return"walletConnect"===e.subtype?(h.A.setActiveConnector(e.connector),void(r.j.isMobile()?f.P.push("AllWallets"):f.P.push("ConnectingWalletConnect",{redirectView:t}))):"multiChain"===e.subtype?(h.A.setActiveConnector(e.connector),void f.P.push("ConnectingMultiChain",{redirectView:t})):"injected"===e.subtype?(h.A.setActiveConnector(e.connector),void f.P.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet})):"announced"===e.subtype?"walletConnect"===e.connector.id?void(r.j.isMobile()?f.P.push("AllWallets"):f.P.push("ConnectingWalletConnect",{redirectView:t})):void f.P.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet}):void f.P.push("ConnectingExternal",{connector:e.connector,redirectView:t})}renderWallet(e,t){const i=e.wallet,o=v.f.getWalletImage(i),r=p.l.hasAnyConnection(u.b.CONNECTOR_ID.WALLET_CONNECT),s=this.loadingTelegram,a="recent"===e.subtype?"recent":void 0,l="recent"===e.subtype?"info":void 0;return n.dy`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.o)(o)}
        name=${i.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${i.id}`}
        tabIdx=${(0,d.o)(this.tabIdx)}
        ?loading=${s}
        ?disabled=${r}
        rdnsId=${(0,d.o)(i.rdns||void 0)}
        walletRank=${(0,d.o)(i.order)}
        tagLabel=${(0,d.o)(a)}
        .tagVariant=${l}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){const t=f.P.state.data.redirectView,i=x.R.state.activeChain;if("featured"===e.subtype)return void h.A.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;return void h.A.selectWalletConnector(e.wallet)}if("custom"===e.subtype){if(this.loadingTelegram)return;return void f.P.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}if(this.loadingTelegram)return;const n=i?h.A.getConnector({id:e.wallet.id,namespace:i}):void 0;n?f.P.push("ConnectingExternal",{connector:n,redirectView:t}):f.P.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}};E.styles=C,k([(0,o.Cb)({type:Number})],E.prototype,"tabIdx",void 0),k([(0,o.SB)()],E.prototype,"explorerWallets",void 0),k([(0,o.SB)()],E.prototype,"connections",void 0),k([(0,o.SB)()],E.prototype,"connectorImages",void 0),k([(0,o.SB)()],E.prototype,"loadingTelegram",void 0),E=k([(0,c.Mo)("w3m-connector-list")],E);var R=i(8239),P=i(5546),S=i(56152),T=i(22167),A=i(79781),I=i(87002),B=i(61831),L=i(35896),j=(i(13614),i(13105),i(17139)),M=j.iv`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`,O=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};const N={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},_={lg:"md",md:"sm",sm:"sm"};let W=class extends n.oi{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return n.dy`
      <button data-active=${this.active}>
        ${this.icon?n.dy`<wui-icon size=${_[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${N[this.size]}> ${this.label} </wui-text>
      </button>
    `}};W.styles=[B.ET,B.ZM,M],O([(0,o.Cb)()],W.prototype,"icon",void 0),O([(0,o.Cb)()],W.prototype,"size",void 0),O([(0,o.Cb)()],W.prototype,"label",void 0),O([(0,o.Cb)({type:Boolean})],W.prototype,"active",void 0),W=O([(0,L.M)("wui-tab-item")],W);var z=j.iv`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`,D=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let U=class extends n.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{const i=t===this.activeTab;return n.dy`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${i}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};U.styles=[B.ET,B.ZM,z],D([(0,o.Cb)({type:Array})],U.prototype,"tabs",void 0),D([(0,o.Cb)()],U.prototype,"onTabChange",void 0),D([(0,o.Cb)()],U.prototype,"size",void 0),D([(0,o.SB)()],U.prototype,"activeTab",void 0),U=D([(0,L.M)("wui-tabs")],U);var F=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let q=class extends n.oi{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return n.dy`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};F([(0,o.Cb)({type:Array})],q.prototype,"platforms",void 0),F([(0,o.Cb)()],q.prototype,"onSelectPlatfrom",void 0),q=F([(0,c.Mo)("w3m-connecting-header")],q);var H=i(50039),V=(i(60898),i(59174),i(21874),i(86417),j.iv`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`),K=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Q=class extends n.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e;return n.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};Q.styles=[B.ET,V],K([(0,o.Cb)({type:Number})],Q.prototype,"radius",void 0),Q=K([(0,L.M)("wui-loading-thumbnail")],Q),i(16105),i(67013),i(13071),i(32695);var Y=j.iv`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`,J=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let X=class extends n.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return n.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};X.styles=[B.ET,B.ZM,Y],J([(0,o.Cb)({type:Boolean})],X.prototype,"disabled",void 0),J([(0,o.Cb)()],X.prototype,"label",void 0),J([(0,o.Cb)()],X.prototype,"buttonLabel",void 0),X=J([(0,L.M)("wui-cta-button")],X);var G=c.iv`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`,Z=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ee=class extends n.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:o,homepage:s}=this.wallet,a=r.j.isMobile(),l=r.j.isIos(),d=r.j.isAndroid(),u=[t,i,s,o].filter(Boolean).length>1,h=c.Hg.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return u&&!a?n.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>f.P.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&s?n.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&l?n.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&d?n.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&r.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&r.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&r.j.openHref(this.wallet.homepage,"_blank")}};ee.styles=[G],Z([(0,o.Cb)({type:Object})],ee.prototype,"wallet",void 0),ee=Z([(0,c.Mo)("w3m-mobile-download-links")],ee);var te=c.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`,ie=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};class ne extends n.oi{constructor(){super(),this.wallet=f.P.state.data.wallet,this.connector=f.P.state.data.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=v.f.getConnectorImage(this.connector)??v.f.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=p.l.state.wcUri,this.error=p.l.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(p.l.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),p.l.subscribeKey("wcError",e=>this.error=e)),(r.j.isTelegram()||r.j.isSafari())&&r.j.isIos()&&p.l.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),p.l.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),n.dy`
      <wui-flex
        data-error=${(0,d.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,d.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?n.dy`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?n.dy`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){p.l.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const e=H.u.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return n.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(r.j.copyToClopboard(this.uri),S.K.showSuccess("Link copied"))}catch{S.K.showError("Failed to copy")}}}ne.styles=te,ie([(0,o.SB)()],ne.prototype,"isRetrying",void 0),ie([(0,o.SB)()],ne.prototype,"uri",void 0),ie([(0,o.SB)()],ne.prototype,"error",void 0),ie([(0,o.SB)()],ne.prototype,"ready",void 0),ie([(0,o.SB)()],ne.prototype,"showRetry",void 0),ie([(0,o.SB)()],ne.prototype,"label",void 0),ie([(0,o.SB)()],ne.prototype,"secondaryBtnLabel",void 0),ie([(0,o.SB)()],ne.prototype,"secondaryLabel",void 0),ie([(0,o.SB)()],ne.prototype,"isLoading",void 0),ie([(0,o.Cb)({type:Boolean})],ne.prototype,"isMobile",void 0),ie([(0,o.Cb)()],ne.prototype,"onRetry",void 0);let oe=class extends ne{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:f.P.state.view}})}onConnectProxy(){var e=this;return(0,R.Z)(function*(){try{e.error=!1;const{connectors:t}=h.A.state,i=t.find(t=>"ANNOUNCED"===t.type&&t.info?.rdns===e.wallet?.rdns||"INJECTED"===t.type||t.name===e.wallet?.name);if(!i)throw new Error("w3m-connecting-wc-browser: No connector found");yield p.l.connectExternal(i,i.chain),T.I.close()}catch(t){g.X.sendEvent(t instanceof A.g&&t.originalName===P.jD.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?{type:"track",event:"USER_REJECTED",properties:{message:t.message}}:{type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),e.error=!0}})()}};oe=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}([(0,c.Mo)("w3m-connecting-wc-browser")],oe);let re=class extends ne{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:f.P.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:n}=r.j.formatNativeUrl(e,this.uri);p.l.setWcLinking({name:t,href:n}),p.l.setRecentWallet(this.wallet),r.j.openHref(i,"_blank")}catch{this.error=!0}}};re=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}([(0,c.Mo)("w3m-connecting-wc-desktop")],re);var se=i(15563),ae=i(28153),le=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ce=class extends ne{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=s.h.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{se.f.onConnectMobile(this.wallet)},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=ae.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(p.l.subscribeKey("wcUri",()=>{this.onHandleURI()})),g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:f.P.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){p.l.setWcError(!1),this.onConnect?.()}};le([(0,o.SB)()],ce.prototype,"redirectDeeplink",void 0),le([(0,o.SB)()],ce.prototype,"redirectUniversalLink",void 0),le([(0,o.SB)()],ce.prototype,"target",void 0),le([(0,o.SB)()],ce.prototype,"preferUniversalLinks",void 0),le([(0,o.SB)()],ce.prototype,"isLoading",void 0),ce=le([(0,c.Mo)("w3m-connecting-wc-mobile")],ce),i(36680);var de=i(6877);function ue(e,t,i){return e!==t&&(e-t<0?t-e:e-t)<=i+.1}const he={generate({uri:e,size:t,logoSize:i,padding:o=8,dotColor:r="var(--apkt-colors-black)"}){const s=[],a=function(e,t){const i=Array.prototype.slice.call(de.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),n=Math.sqrt(i.length);return i.reduce((e,t,i)=>(i%n==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e),l=(t-2*o)/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:e,y:t})=>{const i=(a.length-7)*l*e+o,d=(a.length-7)*l*t+o,u=.45;for(let o=0;o<c.length;o+=1){const e=l*(7-2*o);s.push(n.YP`
            <rect
              fill=${2===o?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===o?e-10:e}
              rx= ${0===o?(e-10)*u:e*u}
              ry= ${0===o?(e-10)*u:e*u}
              stroke=${r}
              stroke-width=${0===o?10:0}
              height=${0===o?e-10:e}
              x= ${0===o?d+l*o+5:d+l*o}
              y= ${0===o?i+l*o+5:i+l*o}
            />
          `)}});const d=Math.floor((i+25)/l),u=a.length/2-d/2,h=a.length/2+d/2-1,p=[];a.forEach((e,t)=>{e.forEach((e,i)=>{!a[t][i]||t<7&&i<7||t>a.length-8&&i<7||t<7&&i>a.length-8||t>u&&t<h&&i>u&&i<h||p.push([t*l+l/2+o,i*l+l/2+o])})});const g={};return p.forEach(([e,t])=>{g[e]?g[e]?.push(t):g[e]=[t]}),Object.entries(g).map(([e,t])=>{const i=t.filter(e=>t.every(t=>!ue(e,t,l)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{s.push(n.YP`<circle cx=${e} cy=${t} fill=${r} r=${l/2.5} />`)})}),Object.entries(g).filter(([e,t])=>t.length>1).map(([e,t])=>{const i=t.filter(e=>t.some(t=>ue(e,t,l)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);const i=[];for(const n of t){const e=i.find(e=>e.some(e=>ue(n,e,l)));e?e.push(n):i.push([n])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{s.push(n.YP`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${r}
                stroke-width=${l/1.25}
                stroke-linecap="round"
              />
            `)})}),s}};var pe=j.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`,ge=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let fe=class extends n.oi{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),n.dy`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return n.YP`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${he.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?n.dy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:n.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};fe.styles=[B.ET,pe],ge([(0,o.Cb)()],fe.prototype,"uri",void 0),ge([(0,o.Cb)({type:Number})],fe.prototype,"size",void 0),ge([(0,o.Cb)()],fe.prototype,"theme",void 0),ge([(0,o.Cb)()],fe.prototype,"imageSrc",void 0),ge([(0,o.Cb)()],fe.prototype,"alt",void 0),ge([(0,o.Cb)({type:Boolean})],fe.prototype,"arenaClear",void 0),ge([(0,o.Cb)({type:Boolean})],fe.prototype,"farcaster",void 0),fe=ge([(0,L.M)("wui-qr-code")],fe),i(75705),i(70227);var we=c.iv`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,me=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let be=class extends ne{constructor(){super(),this.basic=!1}firstUpdated(){this.basic||g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:f.P.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e())}render(){return this.onRenderProxy(),n.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.wallet?this.wallet.name:void 0;p.l.setWcLinking(void 0),p.l.setRecentWallet(this.wallet);const t=H.u.state.themeVariables["--apkt-qr-color"]??H.u.state.themeVariables["--w3m-qr-color"];return n.dy` <wui-qr-code
      theme=${H.u.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,d.o)(v.f.getWalletImage(this.wallet))}
      color=${(0,d.o)(t)}
      alt=${(0,d.o)(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){return n.dy`<wui-button
      .disabled=${!this.uri||!this.ready}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};be.styles=we,me([(0,o.Cb)({type:Boolean})],be.prototype,"basic",void 0),be=me([(0,c.Mo)("w3m-connecting-wc-qrcode")],be);let ye=class extends n.oi{constructor(){if(super(),this.wallet=f.P.state.data.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:f.P.state.view}})}render(){return n.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,d.o)(v.f.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ye=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}([(0,c.Mo)("w3m-connecting-wc-unsupported")],ye);var ve=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let xe=class extends ne{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=ae.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(p.l.subscribeKey("wcUri",()=>{this.updateLoadingState()})),g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:f.P.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:n}=r.j.formatUniversalUrl(e,this.uri);p.l.setWcLinking({name:t,href:n}),p.l.setRecentWallet(this.wallet),r.j.openHref(i,"_blank")}catch{this.error=!0}}};ve([(0,o.SB)()],xe.prototype,"isLoading",void 0),xe=ve([(0,c.Mo)("w3m-connecting-wc-web")],xe);var $e=c.iv`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`,Ce=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ke=class extends n.oi{constructor(){super(),this.wallet=f.P.state.data.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(s.h.state.siwx),this.remoteFeatures=s.h.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(s.h.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return s.h.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),n.dy`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?n.dy`<wui-ux-by-reown></wui-ux-by-reown>`:null}initializeConnection(e=!1){var t=this;return(0,R.Z)(function*(){if("browser"!==t.platform&&(!s.h.state.manualWCControl||e))try{const{wcPairingExpiry:i,status:n}=p.l.state,{redirectView:o}=f.P.state.data??{};if(e||s.h.state.enableEmbedded||r.j.isPairingExpired(i)||"connecting"===n){const e=p.l.getConnections(x.R.state.activeChain),i=t.remoteFeatures?.multiWallet,n=e.length>0;yield p.l.connectWalletConnect({cache:"never"}),t.isSiwxEnabled||(n&&i?(f.P.replace("ProfileWallets"),S.K.showSuccess("New Wallet Added")):o?f.P.replace(o):T.I.close())}}catch(i){if(i instanceof Error&&i.message.includes("An error occurred when attempting to switch chain")&&!s.h.state.enableNetworkSwitch&&x.R.state.activeChain)return x.R.setActiveCaipNetwork(I.f.getUnsupportedNetwork(`${x.R.state.activeChain}:${x.R.state.activeCaipNetwork.id}`)),void x.R.showUnsupportedChainUI();g.X.sendEvent(i instanceof A.g&&i.originalName===P.jD.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?{type:"track",event:"USER_REJECTED",properties:{message:i.message}}:{type:"track",event:"CONNECT_ERROR",properties:{message:i?.message??"Unknown"}}),p.l.setWcError(!0),S.K.showError(i.message??"Connection error"),p.l.resetWcConnection(),f.P.goBack()}})()}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:n,rdns:o}=this.wallet,a=n?.map(({injected_id:e})=>e).filter(Boolean),l=[...o?[o]:a??[]],c=!s.h.state.isUniversalProvider&&l.length,d=e,u=i,h=p.l.checkInstalled(l),g=c&&h,f=t&&!r.j.isMobile();g&&!x.R.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(r.j.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),f&&this.platforms.push("desktop"),!g&&c&&!x.R.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return n.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return n.dy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return n.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return n.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return n.dy`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return n.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?n.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}onSelectPlatform(e){var t=this;return(0,R.Z)(function*(){const i=t.shadowRoot?.querySelector("div");i&&(yield i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,t.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})()}};ke.styles=$e,Ce([(0,o.SB)()],ke.prototype,"platform",void 0),Ce([(0,o.SB)()],ke.prototype,"platforms",void 0),Ce([(0,o.SB)()],ke.prototype,"isSiwxEnabled",void 0),Ce([(0,o.SB)()],ke.prototype,"remoteFeatures",void 0),Ce([(0,o.Cb)({type:Boolean})],ke.prototype,"displayBranding",void 0),Ce([(0,o.Cb)({type:Boolean})],ke.prototype,"basic",void 0),ke=Ce([(0,c.Mo)("w3m-connecting-wc-view")],ke);var Ee=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Re=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.isMobile=r.j.isMobile(),this.remoteFeatures=s.h.state.remoteFeatures,this.unsubscribe.push(s.h.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:t}=a.Q.state,{customWallets:i}=s.h.state,o=l.M.getRecentWallets();return n.dy`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${e.length||t.length||i?.length||o.length?n.dy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return n.dy`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?n.dy` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Ee([(0,o.SB)()],Re.prototype,"isMobile",void 0),Ee([(0,o.SB)()],Re.prototype,"remoteFeatures",void 0),Re=Ee([(0,c.Mo)("w3m-connecting-wc-basic-view")],Re);var Pe=i(27458);var Se=i(50025);const Te=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const n of i)n._$AO?.(t,!1),Te(n,t);return!0},Ae=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},Ie=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),je(t)}};function Be(e){void 0!==this._$AN?(Ae(this),this._$AM=e,Ie(this)):this._$AM=e}function Le(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(n))for(let r=i;r<n.length;r++)Te(n[r],!1),Ae(n[r]);else null!=n&&(Te(n,!1),Ae(n));else Te(this,e)}const je=e=>{e.type==Se.pX.CHILD&&(e._$AP??(e._$AP=Le),e._$AQ??(e._$AQ=Be))};class Me extends Se.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Ie(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Te(this,e),Ae(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Oe=()=>new Ne;class Ne{}const _e=new WeakMap,We=(0,Se.XM)(class extends Me{render(e){return Pe.Ld}update(e,[t]){const i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Pe.Ld}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let i=_e.get(t);void 0===i&&(i=new WeakMap,_e.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?_e.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ze=j.iv`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`,De=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Ue=class extends n.oi{constructor(){super(...arguments),this.inputElementRef=Oe(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return n.dy`
      <label data-size=${this.size}>
        <input
          ${We(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};Ue.styles=[B.ET,B.ZM,ze],De([(0,o.Cb)({type:Boolean})],Ue.prototype,"checked",void 0),De([(0,o.Cb)({type:Boolean})],Ue.prototype,"disabled",void 0),De([(0,o.Cb)()],Ue.prototype,"size",void 0),Ue=De([(0,L.M)("wui-toggle")],Ue);var Fe=j.iv`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,qe=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let He=class extends n.oi{constructor(){super(...arguments),this.checked=!1}render(){return n.dy`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};He.styles=[B.ET,B.ZM,Fe],qe([(0,o.Cb)({type:Boolean})],He.prototype,"checked",void 0),He=qe([(0,L.M)("wui-certified-switch")],He);var Ve=j.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,Ke=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Qe=class extends n.oi{constructor(){super(...arguments),this.inputElementRef=Oe(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return n.dy` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${We(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,d.o)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?n.dy`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?n.dy`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?n.dy`<wui-icon name="spinner" size="md"></wui-icon>`:n.dy`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?n.dy`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?n.dy`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Qe.styles=[B.ET,B.ZM,Ve],Ke([(0,o.Cb)()],Qe.prototype,"icon",void 0),Ke([(0,o.Cb)({type:Boolean})],Qe.prototype,"disabled",void 0),Ke([(0,o.Cb)({type:Boolean})],Qe.prototype,"loading",void 0),Ke([(0,o.Cb)()],Qe.prototype,"placeholder",void 0),Ke([(0,o.Cb)()],Qe.prototype,"type",void 0),Ke([(0,o.Cb)()],Qe.prototype,"value",void 0),Ke([(0,o.Cb)()],Qe.prototype,"errorText",void 0),Ke([(0,o.Cb)()],Qe.prototype,"warningText",void 0),Ke([(0,o.Cb)()],Qe.prototype,"onSubmit",void 0),Ke([(0,o.Cb)()],Qe.prototype,"size",void 0),Ke([(0,o.Cb)({attribute:!1})],Qe.prototype,"onKeyDown",void 0),Qe=Ke([(0,L.M)("wui-input-text")],Qe);var Ye=j.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`,Je=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Xe=class extends n.oi{constructor(){super(...arguments),this.inputComponentRef=Oe(),this.inputValue=""}render(){return n.dy`
      <wui-input-text
        ${We(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?n.dy`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value?.inputElementRef.value;e&&(e.value="",this.inputValue="",e.focus(),e.dispatchEvent(new Event("input")))}};Xe.styles=[B.ET,Ye],Je([(0,o.Cb)()],Xe.prototype,"inputValue",void 0),Xe=Je([(0,L.M)("wui-search-bar")],Xe);var Ge=i(97088),Ze=i(56192),et=(i(797),j.iv`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`),tt=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let it=class extends n.oi{constructor(){super(...arguments),this.type="wallet"}render(){return n.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?n.dy` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Ze.W}`:n.dy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};it.styles=[B.ET,B.ZM,et],tt([(0,o.Cb)()],it.prototype,"type",void 0),it=tt([(0,L.M)("wui-card-select-loader")],it);var nt=i(18504),ot=n.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,rt=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let st=class extends n.oi{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&nt.H.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&nt.H.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&nt.H.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&nt.H.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&nt.H.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&nt.H.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&nt.H.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&nt.H.getSpacingStyles(this.margin,3)};\n    `,n.dy`<slot></slot>`}};st.styles=[B.ET,ot],rt([(0,o.Cb)()],st.prototype,"gridTemplateRows",void 0),rt([(0,o.Cb)()],st.prototype,"gridTemplateColumns",void 0),rt([(0,o.Cb)()],st.prototype,"justifyItems",void 0),rt([(0,o.Cb)()],st.prototype,"alignItems",void 0),rt([(0,o.Cb)()],st.prototype,"justifyContent",void 0),rt([(0,o.Cb)()],st.prototype,"alignContent",void 0),rt([(0,o.Cb)()],st.prototype,"columnGap",void 0),rt([(0,o.Cb)()],st.prototype,"rowGap",void 0),rt([(0,o.Cb)()],st.prototype,"gap",void 0),rt([(0,o.Cb)()],st.prototype,"padding",void 0),rt([(0,o.Cb)()],st.prototype,"margin",void 0),st=rt([(0,L.M)("wui-grid")],st);var at=c.iv`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,lt=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ct=class extends n.oi{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return n.dy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,d.o)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?n.dy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():n.dy`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,d.o)(this.imageSrc)}
        name=${(0,d.o)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return n.dy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}fetchImageSrc(){var e=this;return(0,R.Z)(function*(){!e.wallet||(e.imageSrc=v.f.getWalletImage(e.wallet),!e.imageSrc&&(e.imageLoading=!0,e.imageSrc=yield v.f.fetchWalletImage(e.wallet.image_id),e.imageLoading=!1))})()}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,g.X.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:f.P.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};ct.styles=at,lt([(0,o.SB)()],ct.prototype,"visible",void 0),lt([(0,o.SB)()],ct.prototype,"imageSrc",void 0),lt([(0,o.SB)()],ct.prototype,"imageLoading",void 0),lt([(0,o.SB)()],ct.prototype,"isImpressed",void 0),lt([(0,o.Cb)()],ct.prototype,"explorerId",void 0),lt([(0,o.Cb)()],ct.prototype,"walletQuery",void 0),lt([(0,o.Cb)()],ct.prototype,"certified",void 0),lt([(0,o.Cb)()],ct.prototype,"displayIndex",void 0),lt([(0,o.Cb)({type:Object})],ct.prototype,"wallet",void 0),ct=lt([(0,c.Mo)("w3m-all-wallets-list-item")],ct);var dt=c.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,ut=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};const ht="local-paginator";let pt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!a.Q.state.wallets.length,this.wallets=a.Q.state.wallets,this.mobileFullScreen=s.h.state.enableMobileFullScreen,this.unsubscribe.push(a.Q.subscribeKey("wallets",e=>this.wallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),n.dy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}initialFetch(){var e=this;return(0,R.Z)(function*(){e.loading=!0;const t=e.shadowRoot?.querySelector("wui-grid");t&&(yield a.Q.fetchWalletsByPage({page:1}),yield t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,e.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})()}shimmerTemplate(e,t){return[...Array(e)].map(()=>n.dy`
        <wui-card-select-loader type="wallet" id=${(0,d.o)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return Ge.J.getWalletConnectWallets(this.wallets).map((e,t)=>n.dy`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:n,mobileFilteredOutWalletsLength:o}=a.Q.state,r=window.innerWidth<352?3:4,s=e.length+t.length;let l=Math.ceil(s/r)*r-s+r;return l-=e.length?i.length%r:0,0===n&&i.length>0?null:0===n||[...i,...e,...t].length<n-(o??0)?this.shimmerTemplate(l,ht):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${ht}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){const{page:e,count:t,wallets:i}=a.Q.state;i.length<t&&a.Q.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){h.A.selectWalletConnector(e)}};pt.styles=dt,ut([(0,o.SB)()],pt.prototype,"loading",void 0),ut([(0,o.SB)()],pt.prototype,"wallets",void 0),ut([(0,o.SB)()],pt.prototype,"badge",void 0),ut([(0,o.SB)()],pt.prototype,"mobileFullScreen",void 0),pt=ut([(0,c.Mo)("w3m-all-wallets-list")],pt),i(64508);var gt=n.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,ft=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let wt=class extends n.oi{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=s.h.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?n.dy`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}onSearch(){var e=this;return(0,R.Z)(function*(){(e.query.trim()!==e.prevQuery.trim()||e.badge!==e.prevBadge)&&(e.prevQuery=e.query,e.prevBadge=e.badge,e.loading=!0,yield a.Q.searchWallet({search:e.query,badge:e.badge}),e.loading=!1)})()}walletsTemplate(){const{search:e}=a.Q.state,t=Ge.J.markWalletsAsInstalled(e),i=Ge.J.filterWalletsByWcSupport(t);return i.length?n.dy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map((e,t)=>n.dy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:n.dy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){h.A.selectWalletConnector(e)}};wt.styles=gt,ft([(0,o.SB)()],wt.prototype,"loading",void 0),ft([(0,o.SB)()],wt.prototype,"mobileFullScreen",void 0),ft([(0,o.Cb)()],wt.prototype,"query",void 0),ft([(0,o.Cb)()],wt.prototype,"badge",void 0),wt=ft([(0,c.Mo)("w3m-all-wallets-search")],wt);var mt=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let bt=class extends n.oi{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=r.j.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return n.dy`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?n.dy`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:n.dy`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",S.K.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return r.j.isMobile()?n.dy`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){f.P.push("ConnectingWalletConnect")}};mt([(0,o.SB)()],bt.prototype,"search",void 0),mt([(0,o.SB)()],bt.prototype,"badge",void 0),bt=mt([(0,c.Mo)("w3m-all-wallets-view")],bt),i(13171);let yt=class extends n.oi{constructor(){super(...arguments),this.wallet=f.P.state.data.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return n.dy`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?n.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?n.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?n.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?n.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(g.X.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),r.j.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};yt=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}([(0,c.Mo)("w3m-downloads-view")],yt)}}]);