!function(){"use strict";const e=["client/chunk.b45415e8.js","client/chunk.ed425f80.js","client/services-support-and-maintenance.353cc612.js","client/chunk.d11d8aa8.js","client/chunk.b1e2d177.js","client/services-software-architecture.897d7bee.js","client/services-poc-validation.6546edb3.js","client/services-automation.9a2e0d6b.js","client/services-customization.87c583b4.js","client/services-staff.5e94e67f.js","client/chunk.d6f17944.js","client/client.a908994a.js","client/chunk.4915921b.js","client/contact-us.701586c9.js","client/about-us.35b2895e.js","client/index.5761a4ed.js","client/services.08f1cb19.js","client/work.55e11ab4.js","client/team-track.dc2cc262.js","client/lab.6b708317.js","client/revit-unreal.1b54a3ac.js"].concat(["service-worker-index.html",".DS_Store","content/97a73576029197.png","content/d687ce76292375.jpg","content/teamtrack/header.jpg","content/teamtrack/ipadpro.png","content/teamtrack/iphonex.png","content/teamtrack/maps.jpg","content/teamtrack/teamtrack.mp4","content/teamtrack/teamtrack01.jpg","content/teamtrack/teamtrack02.jpg","content/teamtrack/teamtrack02.webm","content/teamtrack/teamtrack03.jpg","content/teamtrack/teamtrack03.webm","content/unreal/ForestHouse_Night_large.jpg","content/unreal/HomeConcept.webm","content/unreal/image1.png","content/unreal/image6.png","content/unreal/image7.png","content/unreal/unreal-render1.webm","content/unreal/unreal-thumbnail.jpg","content/unreal/unreal1.jpg","favicon.png","global.css","img/.DS_Store","img/archsourcing-logo.jpg","img/case-logo.jpg","img/el-logo.jpg","img/ese-logo.jpg","img/footer-logo.svg","img/header-logo-light.svg","img/header-logo.svg","img/icons-github.svg","img/icons-instagram.svg","img/icons-linkedin.svg","img/icons-twitter.svg","img/julio_800x800.jpeg","img/martin_800x800.jpeg","img/pablo_800x800.jpeg","img/rambla.jpg","img/shridhar-gupta-678685-unsplash.jpg","img/vector1.svg","img/vector2.svg","img/vector4.svg","img/vector5.svg","img/vector6.svg","img/vector7.svg","img/wework-logo.jpg","logo-192.png","logo-512.png","manifest.json","sitemap.xml"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1569958442569").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1569958442569"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1569958442569").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
