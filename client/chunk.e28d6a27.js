function e(e,n,t){window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},function(e,i,o){let r,m=i.querySelector.bind(i),s=!1,a=0,u=!1,w=200;function c(){new Date-r<w?setTimeout(c,w):(u=!1,e.removeEventListener("resize",d,!1),e.removeEventListener("scroll",v,!1),t(),o(a,q,l,f))}function d(){r=new Date,!1===u&&(u=!0,setTimeout(c,w))}function f(){s=!1}function l(e,n,t,i){return e+(o=0,r=1,m=t-i,Math.max(o,Math.min(r,m))*n);var o,r,m}function q(e,n,t){let i=["webkit","Moz","o","ms"];for(let o in i)e[i[o]+n]=t}function v(n){s||(s=!0,requestAnimFrame(()=>{o(a,q,l,f)}),a=e.pageYOffset)}n(),e.addEventListener("resize",d,!1),e.addEventListener("scroll",v,!1),o(a,q,l,f),m("#blob-container").style.height=document.body.scrollHeight+"px"}(window,document,e)}export{e as p};
//# sourceMappingURL=chunk.e28d6a27.js.map
