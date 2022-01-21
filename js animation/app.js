let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "100%",
    scrub: 0.3,
  },
});
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "100%",
    scrub: 0.6,
  },
});
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "100%",
    scrub: 0.5,
  },
});
let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "200%",
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});

tl.fromTo(".sliding-text", { y: 0 }, { y: -400 });
tl2.fromTo(
  ".logo",
  { scale: 6 },
  { scale: 1, top: "0.6rem", left: "5rem", x: "50%", y: "50%" }
);
tl3.fromTo(
  ".square",
  { left: "70%" },
  { left: "100%", opacity: 0, rotation: 90 }
);
