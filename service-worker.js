!function(){"use strict";const e=["client/chunk.e28d6a27.js","client/chunk.bb64fc7e.js","client/services-support-and-maintenance.c0310632.js","client/services-poc-validation.2c2a899b.js","client/services-software-architecture.57ef6283.js","client/index.bc06f669.js","client/services-automation.949f3e91.js","client/chunk.f4bf0539.js","client/services-customization.b5a11561.js","client/services-staff.b9572fe2.js","client/client.50462455.js","client/work.21a32076.js","client/lab.4265e389.js","client/about-us.9329e70d.js","client/services.ea6c63ea.js","client/contact-us.a0a74620.js"].concat(["service-worker-index.html",".DS_Store","content/97a73576029197.png","content/d687ce76292375.jpg","content/unreal-thumbnail.png","favicon.png","global.css","img/.DS_Store","img/archsourcing-logo.jpg","img/case-logo.jpg","img/el-logo.jpg","img/ese-logo.jpg","img/footer-logo.svg","img/header-logo-light.svg","img/header-logo.svg","img/icons-github.svg","img/icons-instagram.svg","img/icons-linkedin.svg","img/icons-twitter.svg","img/julio_800x800.jpeg","img/martin_800x800.jpeg","img/pablo_800x800.jpeg","img/rambla.jpg","img/shridhar-gupta-678685-unsplash.jpg","img/vector1.svg","img/vector2.svg","img/vector4.svg","img/vector5.svg","img/vector6.svg","img/vector7.svg","img/wework-logo.jpg","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1568209491723").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1568209491723"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1568209491723").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const i=await t.match(e.request);if(i)return i;throw s}}))))})}();
