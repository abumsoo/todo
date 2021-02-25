(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"body {\n    margin: 0;\n}\n\n.container {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.listsContainer {\n    width: 25%;\n    height: 100vh;\n    border-right: 2px solid blue;\n}\n\n.tasksContainer {\n    width: 75%;\n}\n",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],i=0;i<e.length;i++){var s=e[i],c=n.base?s[0]+n.base:s[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=a(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:m(p,n),references:1}),r.push(d)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(e,n){var t,r,i;if(n.singleton){var o=h++;t=f||(f=c(n)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=c(n),r=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var c=s(e,n),l=0;l<t.length;l++){var d=a(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=c}}}}},n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=(e,n)=>{const t=document.createElement(e);return t.className=n,t},n=e=>{const n=document.querySelector(".listArea");n.innerHTML="";const t=document.createElement("div");t.className=e.key,t.innerHTML=`<h2>${e.title}</h2>`,n.appendChild(t);let r=e.head,i=0;for(;null!=r;){const e=document.createElement("div");e.className="task",t.appendChild(e);const n=document.createElement("input");n.type="checkbox",e.appendChild(n),n.name=`task-${i}`;const o=document.createElement("label");o.innerHTML=`${r.title}<br>`,o.for=`task-${i}`,e.appendChild(o),i++,r=r.next}},r=e=>{const n=document.querySelector(".listBar");n.innerHTML="";for(const t in e){const r=document.createElement("li");r.innerText=e[t].title,n.appendChild(r)}};var i=t(379),o=t.n(i),a=t(426);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;class s{constructor(e,n){this.title=e,this.description=n,this.next=null}}class c{constructor(e,n,t=null){this.key=e,this.title=n,this.head=t}}let l={inbox:new c("inbox","Inbox",null)};(()=>{const n=e("div","container");document.body.appendChild(n);const t=e("div","listsContainer");n.appendChild(t);const r=e("button","newListBtn");r.innerText="New list",t.appendChild(r);const i=e("ul","listBar");t.appendChild(i);const o=e("div","tasksContainer");n.appendChild(o);const a=e("button","newTaskBtn");a.innerText="New task",o.appendChild(a);const s=e("div","listArea");o.appendChild(s)})(),r(l),n(l.inbox),document.querySelector(".newTaskBtn").addEventListener("click",(()=>{((e,t,r="inbox")=>{const i=new s(e,t);if(r in l)null!=l[r].head&&(i.next=l[r].head),l[r].head=i;else{const e=r.charAt(0).toUpperCase()+r.slice(1);l[r]=new c(r,e,i)}n(l[r])})(prompt("Task: "),prompt("Description: "))})),document.querySelector(".newListBtn").addEventListener("click",(()=>{let e=prompt("List name: ");const n=e.toLowerCase();l[n]=new c(n,e,null),r(l)}))})()})();