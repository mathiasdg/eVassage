import "/scss/main.scss";

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
