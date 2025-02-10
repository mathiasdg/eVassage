import "/scss/main.scss";
import quote1 from "./content/quote1.md";
import quote2 from "./content/quote2.md";
import info from "./content/info.md";

// const staticMapUrl =
// "https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/static/1.48836,42.762,17,0/690x690?access_token=pk.eyJ1IjoibWF0aGlmbGlwIiwiYSI6ImNsZXE4cmwyejAxZTQzcHBxdWdqODc3MWYifQ.IFFcSRHH2GwAwPQghdqeGQ";
// const mapUrl = "https://maps.app.goo.gl/dKzeWtCEsApQAzgB6";
// document.querySelector("#static-map").src = staticMapUrl;

document.querySelector("#quote1-content").innerHTML = quote1;
document.querySelector("#quote2-content").innerHTML = quote2;
document.querySelector("#info-content").innerHTML = info;

(() => {
  const e = document.documentElement;
  e.classList.remove("no-js");
  e.classList.add("js");
  if (document.body.classList.contains("has-animations")) {
    window.sr = ScrollReveal();
    window.sr.reveal(".reveal-on-scroll", {
      duration: 870,
      distance: "11px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      origin: "bottom",
      interval: 100,
    });
  }
})();
