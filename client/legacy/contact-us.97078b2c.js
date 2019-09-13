import{_ as a,a as e,b as r,c as t,i as s,s as n,d as l,S as o,f as c,t as i,r as f,F as h,g as u,h as m,o as d,j as p,G as v,H as w,I as g,k as E,p as N,n as b,J as x,u as y,K as k,C as A,D as I,w as M}from"./chunk.a2024e2c.js";import{p as T}from"./chunk.6d99f840.js";function L(){var a=document.querySelector("#email-input"),e=document.querySelector("#name-input"),r=document.querySelector("#phone-input"),t=document.querySelector("#desc-input"),s=document.querySelector("#email-button"),n=document.querySelector("#form-container"),l=document.querySelector("#validationMessage");if(""!=a.value){if(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/.test(a.value)){var o=a.value,c=e.value,i=r.value,f=t.value;a.disabled=!0,e.disabled=!0,r.disabled=!0,t.disabled=!0,s.disabled=!0;var h={email:o,name:c,phone:i,desc:f,gRecaptchaResponse:window.gRecaptchaResponse};fetch("https://mwwrpzj209.execute-api.us-east-1.amazonaws.com/Prod/contact-us",{method:"POST",body:JSON.stringify(h),mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(a){n.innerHTML='<div  class="mx-auto py-48">Thank you for your message! <br> We will get back to you as soon as possible</div>'})}else l.innerHTML="Please enter valid email address"}else l.innerHTML="Please enter your email"}function D(a){var e,r,t,s,n,l,o,y,k,A,I,M,T,L,D,z,R,S,C,O,B,V,P,U,j,$,q,F,W,G,H,J,Y,Z,K,_;return{c:function(){e=c("div"),r=c("button"),t=c("span"),s=i("CLOSE  "),n=f(),l=h("svg"),o=h("title"),y=i("Close"),k=h("path"),A=h("path"),I=f(),M=c("container"),T=c("a"),L=c("div"),D=f(),z=c("ul"),R=c("li"),S=c("a"),C=i("ABOUT US"),O=f(),B=c("li"),V=c("a"),P=i("SERVICES"),U=f(),j=c("li"),$=c("a"),q=i("WORK"),F=f(),W=c("li"),G=c("a"),H=i("LAB"),J=f(),Y=c("li"),Z=c("a"),K=i("CONTACT"),this.h()},l:function(a){e=u(a,"DIV",{id:!0,class:!0,style:!0},!1);var c=m(e);r=u(c,"BUTTON",{class:!0},!1);var i=m(r);t=u(i,"SPAN",{class:!0},!1);var f=m(t);s=d(f,"CLOSE  "),f.forEach(p),n=d(i,"\r\n      "),l=u(i,"svg",{class:!0,viewBox:!0,xmlns:!0},!0);var h=m(l);o=u(h,"title",{},!0);var v=m(o);y=d(v,"Close"),v.forEach(p),k=u(h,"path",{fill:!0,d:!0},!0),m(k).forEach(p),A=u(h,"path",{fill:!0,d:!0},!0),m(A).forEach(p),h.forEach(p),i.forEach(p),I=d(c,"\r\n\r\n    "),M=u(c,"CONTAINER",{class:!0},!1);var w=m(M);T=u(w,"A",{class:!0,href:!0},!1);var g=m(T);L=u(g,"DIV",{class:!0,style:!0},!1),m(L).forEach(p),g.forEach(p),D=d(w,"\r\n      "),z=u(w,"UL",{id:!0,class:!0},!1);var E=m(z);R=u(E,"LI",{},!1);var N=m(R);S=u(N,"A",{class:!0,href:!0},!1);var b=m(S);C=d(b,"ABOUT US"),b.forEach(p),N.forEach(p),O=d(E,"\r\n        "),B=u(E,"LI",{},!1);var x=m(B);V=u(x,"A",{class:!0,href:!0},!1);var _=m(V);P=d(_,"SERVICES"),_.forEach(p),x.forEach(p),U=d(E,"\r\n        "),j=u(E,"LI",{},!1);var Q=m(j);$=u(Q,"A",{class:!0,href:!0},!1);var X=m($);q=d(X,"WORK"),X.forEach(p),Q.forEach(p),F=d(E,"\r\n        "),W=u(E,"LI",{},!1);var aa=m(W);G=u(aa,"A",{class:!0,href:!0},!1);var ea=m(G);H=d(ea,"LAB"),ea.forEach(p),aa.forEach(p),J=d(E,"\r\n        "),Y=u(E,"LI",{},!1);var ra=m(Y);Z=u(ra,"A",{class:!0,href:!0},!1);var ta=m(Z);K=d(ta,"CONTACT"),ta.forEach(p),ra.forEach(p),E.forEach(p),w.forEach(p),c.forEach(p),this.h()},h:function(){t.className="hidden sm:inline-block text-sm tracking-widest",v(k,"fill","#fff"),v(k,"d","M0 20.8L20.8 0 24 3.3 3.3 24z"),v(A,"fill","#fff"),v(A,"d","M3.2 0L24 20.7 20.7 24 0 3.3z"),v(l,"class","fill-current h-5 w-5"),v(l,"viewBox","0 0 25 25"),v(l,"xmlns","http://www.w3.org/2000/svg"),r.className="ml-auto mt-4 mr-4 text-white flex items-center px-3 py-2",L.className="ml-6 md:w-48 md:h-48 md:ml-12 ",w(L,"background-color","#E7462C"),w(L,"border-radius","50%"),w(L,"width","14vh"),w(L,"height","14vh"),w(L,"padding-top","4vh"),T.className="hover:underline",T.href="/",S.className="hover:underline",S.href="/about-us",V.className="hover:underline",V.href="/services",$.className="hover:underline",$.href="/work",G.className="hover:underline",G.href="/lab",Z.className="hover:underline",Z.href="/contact-us",z.id="menu",z.className="block leading-extraLoose tracking-widest text-white ml-6 md:ml-12\r\n        font-light overflow-hidden text-4vh sm:text-6vh ",M.className="w-full absolute bottom-0",e.id="fixed",e.className="fixed inset-0 z-40",w(e,"background-color","#2A2D6F"),w(e,"opacity","0.98"),_=[g(r,"click",a.hideMenu),g(T,"click",a.hideMenu),g(S,"click",a.hideMenu),g(V,"click",a.hideMenu),g($,"click",a.hideMenu),g(G,"click",a.hideMenu),g(Z,"click",a.hideMenu)]},m:function(a,c){E(a,e,c),N(e,r),N(r,t),N(t,s),N(r,n),N(r,l),N(l,o),N(o,y),N(l,k),N(l,A),N(e,I),N(e,M),N(M,T),N(T,L),N(M,D),N(M,z),N(z,R),N(R,S),N(S,C),N(z,O),N(z,B),N(B,V),N(V,P),N(z,U),N(z,j),N(j,$),N($,q),N(z,F),N(z,W),N(W,G),N(G,H),N(z,J),N(z,Y),N(Y,Z),N(Z,K)},p:b,d:function(a){a&&p(e),x(_)}}}function z(a){var e,r,t,s,n,l,o,w,x,k,A,I,M,T,L,z,R,S=a.menuVisible&&D(a);return{c:function(){e=c("nav"),r=c("div"),t=c("a"),s=c("img"),n=f(),l=c("div"),o=c("button"),w=c("span"),x=i("MENU  "),k=f(),A=h("svg"),I=h("title"),M=i("Menu"),T=h("path"),L=f(),S&&S.c(),z=y(),this.h()},l:function(a){e=u(a,"NAV",{class:!0},!1);var c=m(e);r=u(c,"DIV",{class:!0},!1);var i=m(r);t=u(i,"A",{href:!0},!1);var f=m(t);s=u(f,"IMG",{class:!0,src:!0,alt:!0},!1),m(s).forEach(p),f.forEach(p),i.forEach(p),n=d(c,"\r\n  "),l=u(c,"DIV",{class:!0},!1);var h=m(l);o=u(h,"BUTTON",{class:!0},!1);var v=m(o);w=u(v,"SPAN",{class:!0},!1);var g=m(w);x=d(g,"MENU  "),g.forEach(p),k=d(v,"\r\n      "),A=u(v,"svg",{class:!0,viewBox:!0,xmlns:!0},!0);var E=m(A);I=u(E,"title",{},!0);var N=m(I);M=d(N,"Menu"),N.forEach(p),T=u(E,"path",{d:!0},!0),m(T).forEach(p),E.forEach(p),v.forEach(p),h.forEach(p),c.forEach(p),L=d(a,"\r\n"),S&&S.l(a),z=y(),this.h()},h:function(){s.className="w-56 sm:w-64",s.src="img/header-logo-light.svg",s.alt="Lagarsoft logo",t.href="/",r.className="flex items-center flex-shrink-0 text-white",w.className="hidden sm:inline-block text-sm tracking-widest z-30",v(T,"d","M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"),v(A,"class","fill-current h-5 w-5 z-30"),v(A,"viewBox","0 0 20 20"),v(A,"xmlns","http://www.w3.org/2000/svg"),o.className="flex items-center px-3 py-2 text-white md:text-white z-30",l.className="block",e.className="flex items-center justify-between flex-wrap p-6 lg:p-16",R=g(o,"click",a.showMenu)},m:function(a,c){E(a,e,c),N(e,r),N(r,t),N(t,s),N(e,n),N(e,l),N(l,o),N(o,w),N(w,x),N(o,k),N(o,A),N(A,I),N(I,M),N(A,T),E(a,L,c),S&&S.m(a,c),E(a,z,c)},p:function(a,e){e.menuVisible?S?S.p(a,e):((S=D(e)).c(),S.m(z.parentNode,z)):S&&(S.d(1),S=null)},i:b,o:b,d:function(a){a&&(p(e),p(L)),S&&S.d(a),a&&p(z),R()}}}function R(a){(a=a||window.event).preventDefault&&a.preventDefault(),a.returnValue=!1}function S(a){if({37:1,38:1,39:1,40:1}[a.keyCode])return R(a),!1}function C(a,e,r){var t=!1;return k(A(I.mark(function a(){var e;return I.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e=function(){dataLayer.push(arguments)},window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-147626348-1");case 4:case"end":return a.stop()}},a)}))),{menuVisible:t,showMenu:function(){r("menuVisible",t=!0),document.addEventListener("touchmove",R,{passive:!1}),window.onwheel=R,window.onmousewheel=document.onmousewheel=R,window.ontouchmove=R,document.onkeydown=S},hideMenu:function(){r("menuVisible",t=!1),document.removeEventListener("touchmove",R,{passive:!1}),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}}}var O=function(c){function i(a){var o;return e(this,i),o=r(this,t(i).call(this)),s(l(o),a,C,z,n,[]),o}return a(i,o),i}();function B(a){var e,r,t,s,n,l,o,h,v,g,x,y,k,A,I,M,T,L,D,z,R,S,C,O,B,V,P,U,j,$,q,F,W,G,H,J,Y,Z,K,_,Q,X,aa,ea,ra,ta,sa,na,la;return{c:function(){e=c("container"),r=c("container"),t=f(),s=c("container"),n=c("div"),l=c("div"),o=c("container"),h=c("container"),v=c("ul"),g=c("li"),x=c("a"),y=i("ABOUT US"),k=f(),A=c("li"),I=c("a"),M=i("SERVICES"),T=f(),L=c("li"),D=c("a"),z=i("WORK"),R=f(),S=c("li"),C=c("a"),O=i("LAB"),B=f(),V=c("container"),P=c("container"),U=c("a"),j=c("img"),$=f(),q=c("a"),F=c("img"),W=f(),G=c("a"),H=c("img"),J=f(),Y=c("a"),Z=c("img"),K=f(),_=c("container"),Q=c("p"),X=i("info@lagarsoft.com\r\n            "),aa=c("br"),ea=i("\r\n            Montevideo, Uruguay\r\n            "),ra=c("br"),ta=i("\r\n            © "),sa=i(a.year),na=f(),la=c("div"),this.h()},l:function(c){e=u(c,"CONTAINER",{class:!0},!1);var i=m(e);r=u(i,"CONTAINER",{class:!0},!1),m(r).forEach(p),t=d(i,"\r\n  "),s=u(i,"CONTAINER",{class:!0},!1);var f=m(s);n=u(f,"DIV",{class:!0},!1);var w=m(n);l=u(w,"DIV",{class:!0},!1);var E=m(l);o=u(E,"CONTAINER",{class:!0},!1);var N=m(o);h=u(N,"CONTAINER",{class:!0},!1);var b=m(h);v=u(b,"UL",{class:!0},!1);var oa=m(v);g=u(oa,"LI",{},!1);var ca=m(g);x=u(ca,"A",{class:!0,href:!0},!1);var ia=m(x);y=d(ia,"ABOUT US"),ia.forEach(p),ca.forEach(p),k=d(oa,"\r\n              "),A=u(oa,"LI",{},!1);var fa=m(A);I=u(fa,"A",{class:!0,href:!0},!1);var ha=m(I);M=d(ha,"SERVICES"),ha.forEach(p),fa.forEach(p),T=d(oa,"\r\n              "),L=u(oa,"LI",{},!1);var ua=m(L);D=u(ua,"A",{class:!0,href:!0},!1);var ma=m(D);z=d(ma,"WORK"),ma.forEach(p),ua.forEach(p),R=d(oa,"\r\n              "),S=u(oa,"LI",{},!1);var da=m(S);C=u(da,"A",{class:!0,href:!0},!1);var pa=m(C);O=d(pa,"LAB"),pa.forEach(p),da.forEach(p),oa.forEach(p),b.forEach(p),B=d(N,"\r\n          "),V=u(N,"CONTAINER",{class:!0},!1);var va=m(V);P=u(va,"CONTAINER",{class:!0},!1);var wa=m(P);U=u(wa,"A",{class:!0,href:!0},!1);var ga=m(U);j=u(ga,"IMG",{alt:!0,class:!0,src:!0},!1),m(j).forEach(p),ga.forEach(p),$=d(wa,"\r\n              "),q=u(wa,"A",{class:!0,href:!0},!1);var Ea=m(q);F=u(Ea,"IMG",{alt:!0,class:!0,src:!0},!1),m(F).forEach(p),Ea.forEach(p),W=d(wa,"\r\n              "),G=u(wa,"A",{class:!0,href:!0},!1);var Na=m(G);H=u(Na,"IMG",{alt:!0,class:!0,src:!0},!1),m(H).forEach(p),Na.forEach(p),J=d(wa,"\r\n              "),Y=u(wa,"A",{class:!0,href:!0},!1);var ba=m(Y);Z=u(ba,"IMG",{alt:!0,class:!0,src:!0},!1),m(Z).forEach(p),ba.forEach(p),wa.forEach(p),va.forEach(p),N.forEach(p),K=d(E,"\r\n        "),_=u(E,"CONTAINER",{class:!0},!1);var xa=m(_);Q=u(xa,"P",{},!1);var ya=m(Q);X=d(ya,"info@lagarsoft.com\r\n            "),aa=u(ya,"BR",{},!1),m(aa).forEach(p),ea=d(ya,"\r\n            Montevideo, Uruguay\r\n            "),ra=u(ya,"BR",{},!1),m(ra).forEach(p),ta=d(ya,"\r\n            © "),sa=d(ya,a.year),ya.forEach(p),xa.forEach(p),E.forEach(p),na=d(w,"\r\n      "),la=u(w,"DIV",{class:!0,style:!0},!1),m(la).forEach(p),w.forEach(p),f.forEach(p),i.forEach(p),this.h()},h:function(){r.className="mx-auto w-full text-white text-center sm:mx-12 sm:px-12 lg:mx-24\r\n    lg:px-24 xl:mx-32 xl:px-32 border-t pt-32",x.className="hover:underline",x.href="about-us",I.className="hover:underline",I.href="services",D.className="hover:underline",D.href="work",C.className="hover:underline",C.href="lab",v.className="block leading-extraLoose tracking-widest text-xs ",h.className="w-2/3",j.alt="github profile",j.className=" w-8 8 lg:w-6",j.src="img/icons-github.svg",U.className="my-auto ml-1 pb-1",U.href="https://github.com/Lagarsoft",F.alt="instagram profile",F.className="w-8 lg:w-6",F.src="img/icons-instagram.svg",q.className="my-auto ml-1 pb-1",q.href="https://www.instagram.com/lagarsoftsrl/",H.alt="linkedin profile",H.className="w-8 lg:w-6",H.src="img/icons-linkedin.svg",G.className="my-auto ml-1 pb-1",G.href="https://www.linkedin.com/company/lagarsoft-srl/about/?viewAsMember=true",Z.alt="Twitter account",Z.className=" w-8 lg:w-6 ",Z.src="img/icons-twitter.svg",Y.className="my-auto ml-1 pb-1",Y.href="https://twitter.com/lagarsoft_eng",P.className="flex justify-end flex-wrap",V.className="w-12 sm:w-24 md:w-48 ",o.className="w-full xl:w-64 flex ",_.className=" block w-full text-sm leading-snug pt-16 tracking-wide mx-auto",l.className="w-full px-4 py-6 sm:w-2/5 sm:mr-24 text-white",la.className="w-full bg-contain sm:w-3/5 sm:h-full mt-4",w(la,"background-image","url('img/footer-logo.svg')"),w(la,"background-position","left bottom"),w(la,"background-repeat","no-repeat"),w(la,"height","21rem"),n.className="sm:flex sm:flex-row-reverse ",s.className="w-full",e.className="bg-lgsftDarkBlue flex items-center justify-between flex-wrap relative\r\n  z-10 "},m:function(a,c){E(a,e,c),N(e,r),N(e,t),N(e,s),N(s,n),N(n,l),N(l,o),N(o,h),N(h,v),N(v,g),N(g,x),N(x,y),N(v,k),N(v,A),N(A,I),N(I,M),N(v,T),N(v,L),N(L,D),N(D,z),N(v,R),N(v,S),N(S,C),N(C,O),N(o,B),N(o,V),N(V,P),N(P,U),N(U,j),N(P,$),N(P,q),N(q,F),N(P,W),N(P,G),N(G,H),N(P,J),N(P,Y),N(Y,Z),N(l,K),N(l,_),N(_,Q),N(Q,X),N(Q,aa),N(Q,ea),N(Q,ra),N(Q,ta),N(Q,sa),N(n,na),N(n,la)},p:b,i:b,o:b,d:function(a){a&&p(e)}}}function V(a){return{year:(new Date).getFullYear()}}var P=function(c){function i(a){var o;return e(this,i),o=r(this,t(i).call(this)),s(l(o),a,V,B,n,[]),o}return a(i,o),i}();function U(a){var e,r,t,s,n,l,o,g,x,y,k,A,I,T,L,D,z,R,S,C,B,V,U,j,$,q,F,W,G,H,J,Y,Z,K,_,Q,X,aa,ea,ra,ta,sa,na,la,oa,ca,ia,fa,ha,ua,ma,da,pa,va,wa,ga,Ea,Na,ba,xa,ya,ka,Aa,Ia,Ma,Ta,La,Da,za,Ra,Sa,Ca,Oa,Ba,Va,Pa,Ua,ja,$a,qa,Fa,Wa,Ga,Ha,Ja,Ya,Za,Ka=new O({}),_a=new P({});return{c:function(){e=c("meta"),r=f(),Ka.$$.fragment.c(),t=f(),s=c("container"),n=c("container"),l=c("h2"),o=i("Contact"),g=f(),x=c("container"),y=c("container"),k=c("p"),A=i("Want to talk about software development, workshops, or crazy MVP\r\n          ideas? Bring it on!\r\n          "),I=c("br"),T=f(),L=c("br"),D=i("\r\n          Not into forms?\r\n          "),z=c("br"),R=i("\r\n          Drop us a note via email:\r\n          "),S=c("span"),C=i("info@lagarsoft.com"),B=f(),V=c("container"),U=c("form"),j=c("div"),$=c("input"),q=f(),F=c("div"),W=c("input"),G=f(),H=c("div"),J=c("input"),Y=f(),Z=c("div"),K=c("textarea"),_=f(),Q=c("div"),X=c("span"),aa=f(),ea=c("div"),ra=c("button"),ta=c("span"),sa=i("send"),na=f(),la=c("h2"),oa=i("Meeting \r\n          "),ca=h("svg"),ia=h("path"),fa=h("path"),ha=h("path"),ua=h("path"),ma=h("path"),da=h("path"),pa=h("path"),va=h("path"),wa=f(),ga=c("container"),Ea=c("p"),Na=i("Due to our focus on quality and the attention our customers deserve,\r\n            we only take up to 2 new projects each month.\r\n            "),ba=c("br"),xa=f(),ya=c("br"),ka=f(),Aa=c("span"),Ia=i("If you really need to talk with us "),Ma=c("span"),Ta=i("now"),La=i(", you can join our Public Slack:\r\n            "),Da=c("br"),za=f(),Ra=c("br"),Sa=f(),Ca=c("a"),Oa=c("span"),Ba=i("Join Slack"),Va=f(),Pa=c("div"),Ua=c("img"),ja=f(),$a=c("img"),qa=f(),Fa=c("div"),Wa=f(),Ga=c("div"),Ha=f(),Ja=c("div"),Ya=f(),_a.$$.fragment.c(),this.h()},l:function(a){e=u(a,"META",{name:!0,content:!0},!1),m(e).forEach(p),r=d(a,"\r\n"),Ka.$$.fragment.l(a),t=d(a,"\r\n"),s=u(a,"CONTAINER",{class:!0},!1);var c=m(s);n=u(c,"CONTAINER",{class:!0},!1);var i=m(n);l=u(i,"H2",{class:!0},!1);var f=m(l);o=d(f,"Contact"),f.forEach(p),g=d(i,"\r\n    "),x=u(i,"CONTAINER",{class:!0},!1);var h=m(x);y=u(h,"CONTAINER",{class:!0},!1);var v=m(y);k=u(v,"P",{class:!0},!1);var w=m(k);A=d(w,"Want to talk about software development, workshops, or crazy MVP\r\n          ideas? Bring it on!\r\n          "),I=u(w,"BR",{},!1),m(I).forEach(p),T=d(w,"\r\n          "),L=u(w,"BR",{},!1),m(L).forEach(p),D=d(w,"\r\n          Not into forms?\r\n          "),z=u(w,"BR",{},!1),m(z).forEach(p),R=d(w,"\r\n          Drop us a note via email:\r\n          "),S=u(w,"SPAN",{class:!0},!1);var E=m(S);C=d(E,"info@lagarsoft.com"),E.forEach(p),w.forEach(p),v.forEach(p),B=d(h,"\r\n      "),V=u(h,"CONTAINER",{class:!0,id:!0},!1);var N=m(V);U=u(N,"FORM",{class:!0,action:!0,onsubmit:!0},!1);var b=m(U);j=u(b,"DIV",{class:!0},!1);var M=m(j);$=u(M,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0,autocomplete:!0},!1),m($).forEach(p),M.forEach(p),q=d(b,"\r\n          "),F=u(b,"DIV",{class:!0},!1);var O=m(F);W=u(O,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0,autocomplete:!0},!1),m(W).forEach(p),O.forEach(p),G=d(b,"\r\n          "),H=u(b,"DIV",{class:!0},!1);var P=m(H);J=u(P,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0,autocomplete:!0},!1),m(J).forEach(p),P.forEach(p),Y=d(b,"\r\n          "),Z=u(b,"DIV",{class:!0},!1);var Za=m(Z);K=u(Za,"TEXTAREA",{rows:!0,class:!0,id:!0,type:!0,placeholder:!0,autocomplete:!0},!1),m(K).forEach(p),Za.forEach(p),_=d(b,"\r\n          "),Q=u(b,"DIV",{class:!0},!1);var Qa=m(Q);X=u(Qa,"SPAN",{id:!0},!1),m(X).forEach(p),Qa.forEach(p),aa=d(b,"\r\n          "),ea=u(b,"DIV",{class:!0},!1);var Xa=m(ea);ra=u(Xa,"BUTTON",{id:!0,class:!0,type:!0},!1);var ae=m(ra);ta=u(ae,"SPAN",{class:!0},!1);var ee=m(ta);sa=d(ee,"send"),ee.forEach(p),ae.forEach(p),Xa.forEach(p),b.forEach(p),na=d(N,"\r\n        "),la=u(N,"H2",{class:!0},!1);var re=m(la);oa=d(re,"Meeting \r\n          "),ca=u(re,"svg",{class:!0,xmlns:!0,x:!0,y:!0,width:!0,height:!0,viewBox:!0,style:!0},!0);var te=m(ca);ia=u(te,"path",{fill:!0,d:!0},!0),m(ia).forEach(p),fa=u(te,"path",{fill:!0,d:!0},!0),m(fa).forEach(p),ha=u(te,"path",{fill:!0,d:!0},!0),m(ha).forEach(p),ua=u(te,"path",{fill:!0,d:!0},!0),m(ua).forEach(p),ma=u(te,"path",{fill:!0,d:!0},!0),m(ma).forEach(p),da=u(te,"path",{fill:!0,d:!0},!0),m(da).forEach(p),pa=u(te,"path",{fill:!0,d:!0},!0),m(pa).forEach(p),va=u(te,"path",{fill:!0,d:!0},!0),m(va).forEach(p),te.forEach(p),re.forEach(p),wa=d(N,"\r\n        "),ga=u(N,"CONTAINER",{class:!0},!1);var se=m(ga);Ea=u(se,"P",{class:!0},!1);var ne=m(Ea);Na=d(ne,"Due to our focus on quality and the attention our customers deserve,\r\n            we only take up to 2 new projects each month.\r\n            "),ba=u(ne,"BR",{},!1),m(ba).forEach(p),xa=d(ne,"\r\n            "),ya=u(ne,"BR",{},!1),m(ya).forEach(p),ka=d(ne,"\r\n            "),Aa=u(ne,"SPAN",{class:!0},!1);var le=m(Aa);Ia=d(le,"If you really need to talk with us "),Ma=u(le,"SPAN",{class:!0},!1);var oe=m(Ma);Ta=d(oe,"now"),oe.forEach(p),La=d(le,", you can join our Public Slack:\r\n            "),Da=u(le,"BR",{},!1),m(Da).forEach(p),za=d(le,"\r\n            "),Ra=u(le,"BR",{},!1),m(Ra).forEach(p),Sa=d(le,"\r\n            "),Ca=u(le,"A",{class:!0,href:!0,target:!0},!1);var ce=m(Ca);Oa=u(ce,"SPAN",{class:!0},!1);var ie=m(Oa);Ba=d(ie,"Join Slack"),ie.forEach(p),ce.forEach(p),le.forEach(p),ne.forEach(p),se.forEach(p),N.forEach(p),h.forEach(p),i.forEach(p),Va=d(c,"\r\n  "),Pa=u(c,"DIV",{id:!0},!1);var fe=m(Pa);Ua=u(fe,"IMG",{class:!0,alt:!0,id:!0,src:!0},!1),m(Ua).forEach(p),ja=d(fe,"\r\n    "),$a=u(fe,"IMG",{class:!0,alt:!0,id:!0,src:!0},!1),m($a).forEach(p),qa=d(fe,"\r\n    "),Fa=u(fe,"DIV",{class:!0,alt:!0,id:!0,style:!0},!1),m(Fa).forEach(p),Wa=d(fe,"\r\n    "),Ga=u(fe,"DIV",{class:!0,alt:!0,id:!0,style:!0},!1),m(Ga).forEach(p),Ha=d(fe,"\r\n    "),Ja=u(fe,"DIV",{class:!0},!1),m(Ja).forEach(p),fe.forEach(p),c.forEach(p),Ya=d(a,"\r\n\r\n"),_a.$$.fragment.l(a),this.h()},h:function(){document.title="Lagarsoft - Contact",e.name="description",e.content="Lagarsoft contact-us page.",l.className="text-3xl w-full md:text-4xl lg:text-6xl text-left z-30\r\n      tracking-wider mb-8 lg:w-3/4 lg:mx-auto",S.className=" font-normal underline",k.className="text-left z-30 mb-10 mr-10 ",y.className="flex w-full ",$.className=" appearance-none border w-full py-2 px-3 text-gray-700\r\n              leading-tight focus:outline-none focus:shadow-outline",$.id="name-input",v($,"type","text"),$.placeholder="n a m e",$.autocomplete="off",j.className="mb-4",W.className="appearance-none border w-full py-2 px-3 text-gray-700\r\n              leading-tight focus:outline-none focus:shadow-outline",W.id="email-input",v(W,"type","text"),W.placeholder="e m a i l",W.autocomplete="off",F.className="mb-4",J.className=" appearance-none border w-full py-2 px-3 text-gray-700\r\n              leading-tight focus:outline-none focus:shadow-outline",J.id="phone-input",v(J,"type","text"),J.placeholder="p h o n e",J.autocomplete="off",H.className="mb-4",K.rows="6",K.className=" appearance-none border w-full py-2 px-3 text-gray-700\r\n              leading-tight focus:outline-none focus:shadow-outline",K.id="desc-input",v(K,"type","text"),K.placeholder="c o m m e n t s",v(K,"autocomplete","off"),Z.className="mb-4",X.id="validationMessage",Q.className="mb-4",ta.className="align-text-top leading-relaxed font-hairline ",ra.id="email-button",ra.className="block bg-lgsftRed hover:bg-lgsftRedDark bg-color-ease text-white pb-2\r\n              pt-1 pl-4 pr-16 rounded-full tracking-wider my-8 ml-auto",ra.type="submit",ea.className="flex items-center justify-between",U.className=" ",U.action="javascript:;",v(U,"onsubmit","submitToAPI(this)"),v(ia,"fill","#FFB300"),v(ia,"d","M31.2,10.6l-6.6,2.3l-1.4-4.3c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L31.2,10.6z M29.2,26.6l6.6-2.3l-2.3-7.1l-6.6,2.3L29.2,26.6z M32.6,36.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4L38,31l-6.6,2.3L32.6,36.8z"),v(fa,"fill","#00BFA5"),v(fa,"d","M17.2,15.5l-6.6,2.3l-1.4-4.2c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L17.2,15.5z M18.6,41.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4l-1.2-3.7l-6.6,2.3L18.6,41.8z M19.4,22.2l-6.6,2.3l2.3,7.1l6.6-2.3L19.4,22.2z"),v(ha,"fill","#00BCD4"),v(ha,"d","M33.4,17.3l-2.2-6.6l4.1-1.4c1.8-0.6,3.8,0.3,4.4,2.2c0.6,1.8-0.3,3.8-2.2,4.4L33.4,17.3z M26.8,19.6l-2.2-6.6l-7.4,2.6l2.2,6.6L26.8,19.6z M6.4,19.3c-1.8,0.6-2.8,2.6-2.2,4.4c0.5,1.5,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2l4.1-1.4l-2.2-6.6L6.4,19.3z"),v(ua,"fill","#E91E63"),v(ua,"d","M15.1,31.5l2.2,6.6l-4.7,1.6c-0.4,0.1-0.8,0.2-1.1,0.2c-1.5,0-2.8-0.9-3.3-2.4c-0.6-1.8,0.3-3.8,2.2-4.4L15.1,31.5z M43.7,25.3c-0.6-1.8-2.6-2.8-4.4-2.2l-3.5,1.2L38,31l3.6-1.2C43.4,29.1,44.4,27.1,43.7,25.3z M21.7,29.2l2.2,6.6l7.4-2.6l-2.2-6.6L21.7,29.2z"),v(ma,"fill","#388E3C"),v(ma,"d","M33.4 17.3L31.2 10.6 24.6 12.9 26.8 19.6z"),v(da,"fill","#00897B"),v(da,"d","M17.2 15.5L10.6 17.8 12.8 24.5 19.4 22.2z"),v(pa,"fill","#BF360C"),v(pa,"d","M29.2 26.6L31.4 33.3 38 31 35.8 24.3z"),v(va,"fill","#4E342E"),v(va,"d","M15.1 31.5L17.3 38.2 23.9 35.9 21.7 29.2z"),v(ca,"class","inline"),v(ca,"xmlns","http://www.w3.org/2000/svg"),v(ca,"x","0px"),v(ca,"y","0px"),v(ca,"width","48"),v(ca,"height","48"),v(ca,"viewBox","0 0 48 48"),w(ca,"fill","#000000"),la.className="text-3xl sm:inline-block md:text-4xl lg:text-5xl text-left mb-2\r\n          w-full",Ma.className="underline",Oa.className="align-text-top leading-relaxed font-hairline ",Ca.className="inline-block bg-lgsftRed hover:bg-lgsftRedDark bg-color-ease text-white\r\n              pb-2 pt-1 pl-4 pr-16 rounded-full tracking-wider my-8 mr-auto",Ca.href="https://join.slack.com/t/lagarsoftpublic/shared_invite/enQtNzQ3MjE4ODkyODY2LWQ4ZTgzZTEwYzVmZDUxNmEyNzI5NDVmNzJkMTI1MmI4ZTVhYmZkN2M0MTk1ZWI3NTEwZTI4NTlkNjYzMGI0NmE",Ca.target="_blank",Aa.className="inline",Ea.className="text-left z-30 ",ga.className="flex w-full",V.className=" w-full ",V.id="form-container",x.className=" lg:flex lg:w-3/4 lg:mx-auto",n.className="z-20 mx-auto text-white text-center lg:w-3/4 lg:mx-auto ",Ua.className="z-20 w-40",Ua.alt="",Ua.id="blob-1",Ua.src="img/vector7.svg",$a.className="z-20 w-32",$a.alt="",$a.id="blob-2",$a.src="img/vector1.svg",Fa.className="z-10",v(Fa,"alt",""),Fa.id="blob-3",w(Fa,"background-color","rgb(231, 70, 44)"),w(Fa,"border-radius","50%"),w(Fa,"width","30rem"),w(Fa,"padding-top","30rem"),Ga.className="",v(Ga,"alt",""),Ga.id="blob-4",w(Ga,"background-color","#49AA9B"),w(Ga,"border-radius","50%"),w(Ga,"width","40% "),w(Ga,"padding-top","40%"),w(Ga,"z-index","0"),Ja.className="force-show",Pa.id="blob-container",s.className="bg-lgsftDarkBlue flex items-center justify-between flex-wrap py-8 px-4\r\n  sm:px-12 text-sm font-hairline tracking-wide leading-tight -mt-64 pt-64 "},m:function(a,c){N(document.head,e),E(a,r,c),M(Ka,a,c),E(a,t,c),E(a,s,c),N(s,n),N(n,l),N(l,o),N(n,g),N(n,x),N(x,y),N(y,k),N(k,A),N(k,I),N(k,T),N(k,L),N(k,D),N(k,z),N(k,R),N(k,S),N(S,C),N(x,B),N(x,V),N(V,U),N(U,j),N(j,$),N(U,q),N(U,F),N(F,W),N(U,G),N(U,H),N(H,J),N(U,Y),N(U,Z),N(Z,K),N(U,_),N(U,Q),N(Q,X),N(U,aa),N(U,ea),N(ea,ra),N(ra,ta),N(ta,sa),N(V,na),N(V,la),N(la,oa),N(la,ca),N(ca,ia),N(ca,fa),N(ca,ha),N(ca,ua),N(ca,ma),N(ca,da),N(ca,pa),N(ca,va),N(V,wa),N(V,ga),N(ga,Ea),N(Ea,Na),N(Ea,ba),N(Ea,xa),N(Ea,ya),N(Ea,ka),N(Ea,Aa),N(Aa,Ia),N(Aa,Ma),N(Ma,Ta),N(Aa,La),N(Aa,Da),N(Aa,za),N(Aa,Ra),N(Aa,Sa),N(Aa,Ca),N(Ca,Oa),N(Oa,Ba),N(s,Va),N(s,Pa),N(Pa,Ua),N(Pa,ja),N(Pa,$a),N(Pa,qa),N(Pa,Fa),N(Pa,Wa),N(Pa,Ga),N(Pa,Ha),N(Pa,Ja),E(a,Ya,c),M(_a,a,c),Za=!0},p:b,i:function(a){Za||(Ka.$$.fragment.i(a),_a.$$.fragment.i(a),Za=!0)},o:function(a){Ka.$$.fragment.o(a),_a.$$.fragment.o(a),Za=!1},d:function(a){p(e),a&&p(r),Ka.$destroy(a),a&&(p(t),p(s),p(Ya)),_a.$destroy(a)}}}function j(){var a=document.querySelector.bind(document),e=a("#blob-1"),r=a("#blob-2"),t=a("#blob-3"),s=a("#blob-4");T(function(a,n,l,o){var c=a/2e3,i=window.innerWidth/960;n(e.style,"Transform","translate3d("+500*i+"px,"+l(1500,-1400,c,0)+"px, 0)"),n(r.style,"Transform","translate3d("+600*i+"px,"+l(104,-1540,c,0)+"px, 0)"),n(s.style,"Transform","translate3d("+-48*i+"px,"+l(704,-600,c,0)+"px, 0)"),n(t.style,"Transform","translate3d("+700*i+"px,"+l(-150,-500,c,0)+"px, 0)"),o()},function(){e.classList.add("force-show-sm"),r.classList.add("force-show"),t.classList.add("force-show"),s.classList.add("force-show")},j)}function $(a){k(A(I.mark(function a(){return I.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:j(),grecaptcha.ready(function(){grecaptcha.execute("6LcglZEUAAAAADpY_z6HlGSY-uJSqtMO-y2dQ83D",{action:"homepage"}).then(function(a){window.gRecaptchaResponse=a})}),window.submitToAPI=L;case 3:case"end":return a.stop()}},a)})));!function(){var a=new Date;(a=new Date(a.getFullYear(),a.getMonth()+1,1)).getDay()%6||a.setDate((2+a.getDay())%5);var e=new Array(7);e[0]="Sunday",e[1]="Monday",e[2]="Tuesday",e[3]="Wednesday",e[4]="Thursday",e[5]="Friday",e[6]="Saturday";var r=new Array;r[0]="January",r[1]="February",r[2]="March",r[3]="April",r[4]="May",r[5]="June",r[6]="July",r[7]="August",r[8]="September",r[9]="October",r[10]="November",r[11]="December",r[a.getMonth()],e[a.getDay()],function(a){if(a>3&&a<21)return"th";switch(a%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd";default:;}}(a.getDate())}();return{}}export default(function(c){function i(a){var o;return e(this,i),o=r(this,t(i).call(this)),s(l(o),a,$,U,n,[]),o}return a(i,o),i}());
//# sourceMappingURL=contact-us.97078b2c.js.map
