!function(){"use strict";const e=["client/chunk.b45415e8.js","client/chunk.ed425f80.js","client/chunk.d11d8aa8.js","client/services-support-and-maintenance.353cc612.js","client/chunk.b1e2d177.js","client/services-software-architecture.6f6cb0e9.js","client/services-poc-validation.6546edb3.js","client/services-staff.5e94e67f.js","client/services-automation.9a2e0d6b.js","client/client.26cd6bfe.js","client/chunk.d6f17944.js","client/services-customization.87c583b4.js","client/chunk.4915921b.js","client/work.6ed61df1.js","client/team-track.92ff648f.js","client/services.08f1cb19.js","client/about-us.35b2895e.js","client/index.5761a4ed.js","client/contact-us.06ff5ad2.js","client/lab.6b708317.js","client/bimdashboard.adb79406.js","client/revit-unreal.1b54a3ac.js"].concat(["service-worker-index.html",".DS_Store","content/97a73576029197.png","content/bimdashio/.DS_Store","content/bimdashio/CheckProjectMetrics.jpg","content/bimdashio/CheckProjectMetrics.mp4","content/bimdashio/CheckProjectMetrics.webm","content/bimdashio/dash1.png","content/bimdashio/demovideo.mp4","content/bimdashio/demovideo.png","content/bimdashio/demovideo.webm","content/bimdashio/ipad.png","content/bimdashio/iphone.png","content/bimdashio/jimmy-chang-ACt8ycSzpdE-unsplash.jpg","content/bimdashio/map.png","content/bimdashio/revitaddin.jpg","content/bimdashio/revitaddin.mp4","content/bimdashio/revitaddin.webm","content/bimdashio/UploadJounalfiles.jpg","content/bimdashio/UploadJounalfiles.mp4","content/bimdashio/UploadJounalfiles.webm","content/d687ce76292375.jpg","content/teamtrack/header.jpg","content/teamtrack/ipadpro.png","content/teamtrack/iphonex.png","content/teamtrack/maps.jpg","content/teamtrack/teamtrack.mp4","content/teamtrack/teamtrack01.jpg","content/teamtrack/teamtrack02.jpg","content/teamtrack/teamtrack02.webm","content/teamtrack/teamtrack03.jpg","content/teamtrack/teamtrack03.webm","content/unreal/ForestHouse_Night_large.jpg","content/unreal/HomeConcept.webm","content/unreal/image1.png","content/unreal/image6.png","content/unreal/image7.png","content/unreal/unreal-render1.webm","content/unreal/unreal-thumbnail.jpg","content/unreal/unreal1.jpg","favicon.png","global.css","img/.DS_Store","img/archsourcing-logo.jpg","img/case-logo.jpg","img/el-logo.jpg","img/ese-logo.jpg","img/footer-logo.svg","img/header-logo-light.svg","img/header-logo.svg","img/icons-github.svg","img/icons-instagram.svg","img/icons-linkedin.svg","img/icons-twitter.svg","img/julio_800x800.jpeg","img/martin_800x800.jpeg","img/pablo_800x800.jpeg","img/rambla.jpg","img/shridhar-gupta-678685-unsplash.jpg","img/vector1.svg","img/vector2.svg","img/vector4.svg","img/vector5.svg","img/vector6.svg","img/vector7.svg","img/wework-logo.jpg","logo-192.png","logo-512.png","manifest.json","sitemap.xml"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1573917821759").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1573917821759"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1573917821759").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
