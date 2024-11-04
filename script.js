var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",

    start: "50% 50% ",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});

tl.to(
  "#top",
  {
    top: "-50%",
  },
  "y"
)
  .to(
    "#bottom",
    {
      bottom: "-50%",
    },
    "y"
  )

  .to(
    "#top-h",
    {
      top: "80%",
    },
    "y"
  )
  .to(
    "#bottom-h",
    {
      bottom: "-80%",
    },
    "y"
  )
  .to(
    ".content",
    {
      marginTop: "0%",
    },
    "y"
  );

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  let workInfoItems = document.querySelectorAll(".work_photo-item");
  workInfoItems.forEach(function (item, index) {
    item.style.zIndex = workInfoItems.length - index;
  });

  gsap.set(".work_photo-item", {
    clipPath: function () {
      return "inset (0px 0px 0px 0px)";
    },
  });
  const animation = gsap.to(".work_photo-item:not(:last-child)", {
    clipPath: function () {
      return "inset(0px 0px 100% 0px)";
    },
    stagger: 0.5,
    ease: "none",
  });
  ScrollTrigger.create({
    trigger: ".work",
    start: "top top",
    end: "bottom bottom",
    animation: animation,
    scrub: 1,
  });
});
