(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=`<p class="h4">
We are now in the mountains and they are in us, kindling enthusiasm, making every nerve quiver, filling every pore and cell of us. As going to the mountains is going home.
</p>
<p><em>– John Muir</em></p>
`,l=`<p class="h4">
Ze heeft echt de zachtste handies en ze is zóóó super schattig.
</p>
<p><em>– da Mathi'ke</em></p>
`,a=`<h3>Extra info</h3>
<p>Ze masseert vlot alle stijlen hoor!</p>
`;document.querySelector("#quote1-content").innerHTML=c;document.querySelector("#quote2-content").innerHTML=l;document.querySelector("#info-content").innerHTML=a;(()=>{const n=document.documentElement;n.classList.remove("no-js"),n.classList.add("js"),document.body.classList.contains("has-animations")&&(window.sr=ScrollReveal(),window.sr.reveal(".reveal-on-scroll",{duration:870,distance:"11px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",origin:"bottom",interval:100}))})();
