import{s as e,n as t,S as r,i as s,c as n,e as a,a as o,b as c,d as i,f as l,g as u,h as p,t as f,j as m,k as d,l as h,m as v,o as _,p as $,q as g,r as S,u as E,v as P,w as b,x as y}from"./chunk.ed425f80.js";function R(r,s=t){let n;const a=[];function o(t){if(e(r,t)){if(r=t,!n)return;a.forEach(e=>e[1]()),a.forEach(e=>e[0](r))}}return{set:o,update:function(e){o(e(r))},subscribe:function(e,c=t){const i=[e,c];return a.push(i),1===a.length&&(n=s(o)||t),e(r),()=>{const e=a.indexOf(i);-1!==e&&a.splice(e,1),0===a.length&&n()}}}}const L={},A=()=>({});function w(e){var t,r;const s=e.$$slots.default,f=n(s,e,null);return{c(){t=a("main"),f&&f.c(),this.h()},l(e){t=o(e,"MAIN",{class:!0},!1);var r=c(t);f&&f.l(r),r.forEach(i),this.h()},h(){t.className="svelte-lefo74"},m(e,s){l(e,t,s),f&&f.m(t,null),r=!0},p(e,t){f&&f.p&&e.$$scope&&f.p(u(s,t,e,null),p(s,t,null))},i(e){r||(f&&f.i&&f.i(e),r=!0)},o(e){f&&f.o&&f.o(e),r=!1},d(e){e&&i(t),f&&f.d(e)}}}function C(e,t,r){let{$$slots:s={},$$scope:n}=t;return e.$set=(e=>{"$$scope"in e&&r("$$scope",n=e.$$scope)}),{$$slots:s,$$scope:n}}class j extends r{constructor(t){super(),s(this,t,C,w,e,[])}}function O(e){var t,r,s=e.error.stack;return{c(){t=a("pre"),r=f(s)},l(e){t=o(e,"PRE",{},!1);var n=c(t);r=m(n,s),n.forEach(i)},m(e,s){l(e,t,s),d(t,r)},p(e,t){e.error&&s!==(s=t.error.stack)&&h(r,s)},d(e){e&&i(t)}}}function x(e){var r,s,n,u,p,$,g,S,E,P=e.error.message;document.title=r=e.status;var b=e.dev&&e.error.stack&&O(e);return{c(){s=v(),n=a("h1"),u=f(e.status),p=v(),$=a("p"),g=f(P),S=v(),b&&b.c(),E=_()},l(t){s=m(t,"\r\n\r\n"),n=o(t,"H1",{},!1);var r=c(n);u=m(r,e.status),r.forEach(i),p=m(t,"\r\n\r\n"),$=o(t,"P",{},!1);var a=c($);g=m(a,P),a.forEach(i),S=m(t,"\r\n\r\n"),b&&b.l(t),E=_()},m(e,t){l(e,s,t),l(e,n,t),d(n,u),l(e,p,t),l(e,$,t),d($,g),l(e,S,t),b&&b.m(e,t),l(e,E,t)},p(e,t){e.status&&r!==(r=t.status)&&(document.title=r),e.status&&h(u,t.status),e.error&&P!==(P=t.error.message)&&h(g,P),t.dev&&t.error.stack?b?b.p(e,t):((b=O(t)).c(),b.m(E.parentNode,E)):b&&(b.d(1),b=null)},i:t,o:t,d(e){e&&(i(s),i(n),i(p),i($),i(S)),b&&b.d(e),e&&i(E)}}}function k(e,t,r){let{status:s,error:n}=t;return e.$set=(e=>{"status"in e&&r("status",s=e.status),"error"in e&&r("error",n=e.error)}),{status:s,error:n,dev:!1}}class D extends r{constructor(t){super(),s(this,t,k,x,e,["status","error"])}}function H(e){var t,r,s=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var r=0;r<s.length;r+=1)t=$(t,s[r]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=_()},l(e){o&&o.$$.fragment.l(e),t=_()},m(e,s){o&&g(o,e,s),l(e,t,s),r=!0},p(e,r){var c=e.level1?S(s,[r.level1.props]):{};if(n!==(n=r.level1.component)){if(o){y();const e=o;P(()=>{e.$destroy()}),e.$$.fragment.o(1),b()}n?((o=new n(a())).$$.fragment.c(),o.$$.fragment.i(1),g(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){r||(o&&o.$$.fragment.i(e),r=!0)},o(e){o&&o.$$.fragment.o(e),r=!1},d(e){e&&i(t),o&&o.$destroy(e)}}}function q(e){var t,r=new D({props:{error:e.error,status:e.status}});return{c(){r.$$.fragment.c()},l(e){r.$$.fragment.l(e)},m(e,s){g(r,e,s),t=!0},p(e,t){var s={};e.error&&(s.error=t.error),e.status&&(s.status=t.status),r.$set(s)},i(e){t||(r.$$.fragment.i(e),t=!0)},o(e){r.$$.fragment.o(e),t=!1},d(e){r.$destroy(e)}}}function N(e){var t,r,s,n,a=[q,H],o=[];function c(e){return e.error?0:1}return t=c(e),r=o[t]=a[t](e),{c(){r.c(),s=_()},l(e){r.l(e),s=_()},m(e,r){o[t].m(e,r),l(e,s,r),n=!0},p(e,n){var i=t;(t=c(n))===i?o[t].p(e,n):(y(),P(()=>{o[i].d(1),o[i]=null}),r.o(1),b(),(r=o[t])||(r=o[t]=a[t](n)).c(),r.i(1),r.m(s.parentNode,s))},i(e){n||(r&&r.i(),n=!0)},o(e){r&&r.o(),n=!1},d(e){o[t].d(e),e&&i(s)}}}function U(e){var t,r=[{segment:e.segments[0]},e.level0.props];let s={$$slots:{default:[N]},$$scope:{ctx:e}};for(var n=0;n<r.length;n+=1)s=$(s,r[n]);var a=new j({props:s});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,r){g(a,e,r),t=!0},p(e,t){var s=e.segments||e.level0?S(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(s.$$scope={changed:e,ctx:t}),a.$set(s)},i(e){t||(a.$$.fragment.i(e),t=!0)},o(e){a.$$.fragment.o(e),t=!1},d(e){a.$destroy(e)}}}function I(e,t,r){let{stores:s,error:n,status:a,segments:o,level0:c,level1:i=null}=t;return E(L,s),e.$set=(e=>{"stores"in e&&r("stores",s=e.stores),"error"in e&&r("error",n=e.error),"status"in e&&r("status",a=e.status),"segments"in e&&r("segments",o=e.segments),"level0"in e&&r("level0",c=e.level0),"level1"in e&&r("level1",i=e.level1)}),{stores:s,error:n,status:a,segments:o,level0:c,level1:i}}class z extends r{constructor(t){super(),s(this,t,I,U,e,["stores","error","status","segments","level0","level1"])}}const J=[/^\/formAction\/?$/,/^\/parallax\/?$/,/^\/lazy\/?$/],B=[{js:()=>import("./index.5761a4ed.js"),css:[]},{js:()=>import("./services-support-and-maintenance.353cc612.js"),css:[]},{js:()=>import("./services-software-architecture.897d7bee.js"),css:[]},{js:()=>import("./services-poc-validation.6546edb3.js"),css:[]},{js:()=>import("./services-customization.87c583b4.js"),css:[]},{js:()=>import("./services-automation.9a2e0d6b.js"),css:[]},{js:()=>import("./services-staff.5e94e67f.js"),css:[]},{js:()=>import("./contact-us.701586c9.js"),css:["chunk.4915921b.css"]},{js:()=>import("./about-us.35b2895e.js"),css:[]},{js:()=>import("./services.08f1cb19.js"),css:[]},{js:()=>import("./team-track.dc833e24.js"),css:["chunk.4915921b.css"]},{js:()=>import("./work.55e11ab4.js"),css:[]},{js:()=>import("./revit-unreal.1b54a3ac.js"),css:["chunk.4915921b.css"]},{js:()=>import("./lab.6b708317.js"),css:[]}],K=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/services-support-and-maintenance\/?$/,parts:[{i:1}]},{pattern:/^\/services-software-architecture\/?$/,parts:[{i:2}]},{pattern:/^\/services-poc-validation\/?$/,parts:[{i:3}]},{pattern:/^\/services-customization\/?$/,parts:[{i:4}]},{pattern:/^\/services-automation\/?$/,parts:[{i:5}]},{pattern:/^\/services-staff\/?$/,parts:[{i:6}]},{pattern:/^\/contact-us\/?$/,parts:[{i:7}]},{pattern:/^\/about-us\/?$/,parts:[{i:8}]},{pattern:/^\/services\/?$/,parts:[{i:9}]},{pattern:/^\/work\/team-track\/?$/,parts:[null,{i:10}]},{pattern:/^\/work\/?$/,parts:[{i:11}]},{pattern:/^\/lab\/revit-unreal\/?$/,parts:[null,{i:12}]},{pattern:/^\/lab\/?$/,parts:[{i:13}]}];const T="undefined"!=typeof __SAPPER__&&__SAPPER__;let V,G,M,W=!1,X=[],Y="{}";const F={page:R({}),preloading:R(null),session:R(T&&T.session)};let Q,Z;F.session.subscribe(async e=>{if(Q=e,!W)return;Z=!0;const t=ce(new URL(location.href)),r=G={},{redirect:s,props:n,branch:a}=await pe(t);r===G&&await ue(s,a,n,t.page)});let ee,te=null;let re,se=1;const ne="undefined"!=typeof history?history:{pushState:(e,t,r)=>{},replaceState:(e,t,r)=>{},scrollRestoration:""},ae={};function oe(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,r,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[r]&&(t[r]=[t[r]]),"object"==typeof t[r]?t[r].push(s):t[r]=s}),t}function ce(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(T.baseUrl))return null;let t=e.pathname.slice(T.baseUrl.length);if(""===t&&(t="/"),!J.some(e=>e.test(t)))for(let r=0;r<K.length;r+=1){const s=K[r],n=s.pattern.exec(t);if(n){const r=oe(e.search),a=s.parts[s.parts.length-1],o=a.params?a.params(n):{},c={path:t,query:r,params:o};return{href:e.href,route:s,match:n,page:c}}}}function ie(){return{x:pageXOffset,y:pageYOffset}}async function le(e,t,r,s){if(t)re=t;else{const e=ie();ae[re]=e,t=re=++se,ae[re]=r?e:{x:0,y:0}}re=t,V&&F.preloading.set(!0);const n=te&&te.href===e.href?te.promise:pe(e);te=null;const a=G={},{redirect:o,props:c,branch:i}=await n;if(a===G&&(await ue(o,i,c,e.page),document.activeElement&&document.activeElement.blur(),!r)){let e=ae[t];if(s){const t=document.getElementById(s.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}ae[re]=e,e&&scrollTo(e.x,e.y)}}async function ue(e,t,r,s){if(e)return function(e,t={replaceState:!1}){const r=ce(new URL(e,document.baseURI));return r?(ne[t.replaceState?"replaceState":"pushState"]({id:re},"",e),le(r,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(F.page.set(s),F.preloading.set(!1),V)V.$set(r);else{r.stores={page:{subscribe:F.page.subscribe},preloading:{subscribe:F.preloading.subscribe},session:F.session},r.level0={props:await M};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)me(e.nextSibling);me(e),me(t)}V=new z({target:ee,props:r,hydrate:!0})}X=t,Y=JSON.stringify(s.query),W=!0,Z=!1}async function pe(e){const{route:t,page:r}=e,s=r.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[s[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;M||(M=T.preloaded[0]||A.call(o,{path:r.path,query:r.query,params:{}},Q));let i=1;try{const n=JSON.stringify(r.query),l=t.pattern.exec(r.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const p=s[c];if(function(e,t,r,s){if(s!==Y)return!0;const n=X[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(r.slice(1,e+2)))||void 0)}(c,p,l,n)&&(u=!0),a.segments[i]=s[c+1],!t)return{segment:p};const f=i++;if(!Z&&!u&&X[c]&&X[c].part===t.i)return X[c];u=!1;const{default:m,preload:d}=await function(e){const t="string"==typeof e.css?[]:e.css.map(fe);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(B[t.i]);let h;return h=W||!T.preloaded[c+1]?d?await d.call(o,{path:r.path,query:r.query,params:t.params?t.params(e.match):{}},Q):{}:T.preloaded[c+1],a[`level${f}`]={component:m,props:h,segment:p,match:l,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:n,props:a,branch:c}}function fe(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,r)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=t,s.onload=(()=>e()),s.onerror=r,document.head.appendChild(s)})}function me(e){e.parentNode.removeChild(e)}function de(e){const t=ce(new URL(e,document.baseURI));if(t)return te&&e===te.href||function(e,t){te={href:e,promise:t}}(e,pe(t)),te.promise}let he;function ve(e){clearTimeout(he),he=setTimeout(()=>{_e(e)},20)}function _e(e){const t=ge(e.target);t&&"prefetch"===t.rel&&de(t.href)}function $e(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=ge(e.target);if(!t)return;if(!t.href)return;const r="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(r?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(r?t.target.baseVal:t.target)return;const n=new URL(s);if(n.pathname===location.pathname&&n.search===location.search)return;const a=ce(n);if(a){le(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ne.pushState({id:re},"",n.href)}}function ge(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Se(e){if(ae[re]=ie(),e.state){const t=ce(new URL(location.href));t?le(t,e.state.id):location.href=location.href}else(function(e){re=e})(se=se+1),ne.replaceState({id:re},"",location.href)}!function(e){var t;"scrollRestoration"in ne&&(ne.scrollRestoration="manual"),t=e.target,ee=t,addEventListener("click",$e),addEventListener("popstate",Se),addEventListener("touchstart",_e),addEventListener("mousemove",ve),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ne.replaceState({id:se},"",t);const r=new URL(location.href);if(T.error)return function(e){const{pathname:t,search:r}=location,{session:s,preloaded:n,status:a,error:o}=T;M||(M=n&&n[0]),ue(null,[],{error:o,status:a,session:s,level0:{props:M},level1:{props:{status:a,error:o},component:D},segments:n},{path:t,query:oe(r),params:{}})}();const s=ce(r);return s?le(s,se,!0,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.ab60d462.js.map
