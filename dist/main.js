(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(863),t.b),p=a()(r()),l=s()(d);p.push([e.id,`@font-face {\n    font-family: 'Italiano';\n    src:url(${l});\n    font-weight: 600;\n    font-style:normal;\n}\n\nbody {\n    background-color: rgba(255, 235, 205, 0.342);\n    height:100vh;\n    width:100vw;\n    position:relative;\n    margin:0;\n}\n\n#content #mainDiv{\n    font-family: Italiano;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    font-size:2.2rem;\n}\n\n#content div img {\n    width: min(761px,90%);\n}\n\n#content h3 {\n    font-size:4rem;\n}\n\nfooter {\n    font-family:'Courier New', Courier, monospace;\n    font-size:.5rem;\n    position:absolute;\n    bottom:2%;\n    text-align: center;\n}\n\n#tabs {\n    margin-top:3vh;\n    display:flex;\n    flex-direction: row;\n    justify-content: space-around;\n    width:40vw;\n}\n\n#tabs button {\n    font-size:2rem;\n    appearance:none;\n    font-family: Italiano;\n    border:none;\n    background-color: rgba(255, 235, 205, 0);\n}\n\n#tabs .selected {\n    color:rgb(112, 112, 112);\n}\n\nbutton:hover {\n    cursor:pointer;\n    color:rgb(80, 80, 80);\n    transition: color 1s;\n}\n\n#contactDiv {\n    width:min(575px,90%);\n    font-size:1.1rem;\n}\n\n#contactDiv #hchefpic {\n    display:block;\n    margin-left:auto;\n    margin-right:auto;\n    width: min(391px,60%);\n    border-radius:10px;\n}\n\n#contactDiv p {\n    font-family:'Courier New', Courier, monospace;\n    font-size:.8rem;\n}\n\n#smallpicfooter {\n    font-size:.6rem;\n    text-align:center;\n    font-style:italic;\n    color:rgb(112, 112, 112);;\n}\n\n#mainDiv #pastapic {\n    width:min(316px,50%);\n}\n\n#mainDiv #pastadesc {\n    width:min(575px,90%);\n    font-family:'Courier New', Courier, monospace; \n    text-align: center;\n    font-size:.8rem;\n}\n\n#mainDiv p {\n    width:min(761px,90%);\n}\n\n.disappear {\n    opacity:0%;\n    transition:opacity 1.3s;\n}\n\n.reappear {\n    opacity:100%;\n    transition:opacity 1.3s;\n}\n\n\n@media screen and (max-height: 820px) {\n\n    footer{\n        position:static;\n        margin-top:30px;\n    }\n\n};\n\n@media screen and (max-width: 760px) {\n\n    #mainDiv p {\n        text-align: center;\n    }\n\n    #contactDiv p {\n        text-align:left;\n    }\n\n    #content h3 {\n        font-size:3rem;\n        margin-top:20px;\n        margin-bottom:20px;\n    }\n};\n\n`,""]);const u=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var u=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=o(e,r),d=0;d<i.length;d++){var p=t(i[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},863:(e,n,t)=>{e.exports=t.p+"af758e9e36a2222b1130.ttf"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{t.d(o,{S:()=>w});var e=t(379),n=t.n(e),r=t(795),i=t.n(r),a=t(569),c=t.n(a),s=t(565),d=t.n(s),p=t(216),l=t.n(p),u=t(589),m=t.n(u),f=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"a9d579cce178410bde13.jpg",v=t.p+"c208bcedb10f943ac56a.jpg",b=t.p+"2337ad0c25977542211f.png";function w(){const e=document.createElement("div");e.setAttribute("id","tabs");const n=document.createElement("button");n.innerHTML="Home",n.setAttribute("class","selected"),e.appendChild(n);const t=document.createElement("button");t.innerHTML="Speciale",e.appendChild(t);const o=document.createElement("button");return o.innerHTML="Contact",e.appendChild(o),e}function y(){const e=document.createElement("div");e.setAttribute("id","mainDiv");const n=document.createElement("h3");n.innerHTML="Fuscini's Ristorante",e.appendChild(n);const t=new Image;t.src=g,e.appendChild(t);const o=document.createElement("p");o.innerHTML="Explore the most delectable dishes, inspired by Italian culture with farm-fresh foods.",e.appendChild(o),e.appendChild(w());const r=document.createElement("footer");return r.innerHTML="Image of Italian farm by www.propertyguides.com - Image of chef from www.loc.gov/item/2017821678/ - Image of pasta from www.italyfoodies.com",e.appendChild(r),e}const C=document.getElementById("content");C.appendChild(y());document.addEventListener("click",(e=>{"BUTTON"==e.target.nodeName&&(C.setAttribute("class","disappear"),setTimeout((()=>{C.replaceChildren(),(e=>{C.setAttribute("class","reappear");const n=e.target;"Home"==n.textContent?C.appendChild(y()):"Speciale"==n.textContent?C.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","mainDiv");const n=document.createElement("h3");n.innerHTML="Fuscini's Ristorante",e.appendChild(n);const t=document.createElement("h4");t.innerHTML="Special of the Week",e.appendChild(t);const o=new Image;o.src=v,o.setAttribute("id","pastapic"),e.appendChild(o);const r=document.createElement("p");r.setAttribute("id","pastadesc"),r.innerHTML="This weeks special happens to be Lorenzo's most perfected dish, the same one he is pictured making back in the 1980's. Pasta with the customers meat of choice, along with signature cheese imported from Lazio",e.appendChild(r),e.appendChild(w());const i=document.createElement("footer");return i.innerHTML="Image of Italian farm by www.propertyguides.com - Image of chef from www.loc.gov/item/2017821678/ - Image of pasta from www.italyfoodies.com",e.appendChild(i),e}()):"Contact"==n.textContent&&C.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","mainDiv");const n=document.createElement("h3");n.innerHTML="Fuscini's Ristorante",e.appendChild(n),e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","contactDiv");const n=document.createElement("h2");n.innerHTML="Lorenzo Fuscini",e.appendChild(n);const t=document.createElement("p");t.innerHTML="Lorenzo, Head Chef and Founder of Fuschini's has been passionate about cooking since the age of 13, helping his grandmother pick ingredients from their fattoria every day before dinner. Upon his move to the United States in 1962, Lorenzo carried over his dedication to providing fresh food for all and opened Fuschini's in the winter of 1964.",e.appendChild(t);const o=new Image;o.src=b,o.setAttribute("id","hchefpic"),e.appendChild(o);const r=document.createElement("p");r.setAttribute("id","smallpicfooter"),r.innerHTML="Lorenzo cooking up pasta with fresh cheese imported from Lazio, circa 1980's.",e.appendChild(r);const i=document.createElement("h2");i.innerHTML="Alessandro Rossi",e.appendChild(i);const a=document.createElement("p");return a.innerHTML="Alessandro has been trained directly under Lorenzo's wing since his move from Italy in 2005. As they share the same core values, including providing customers with the freshest, most delectable traditional dishes, Lorenzo hopes that one day Alessandro will be taking over Fuschini's as head chef.",e.appendChild(a),e}()),e.appendChild(w());const t=document.createElement("footer");return t.innerHTML="Image of Italian farm by www.propertyguides.com - Image of chef from www.loc.gov/item/2017821678/ - Image of pasta from www.italyfoodies.com",e.appendChild(t),e}())})(e)}),1300))}))})()})();