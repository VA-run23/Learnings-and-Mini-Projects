let tl = gsap.timeline({
  defaults: {
    autoAlpha: 0,
    transformOrigin: "center center -100px",
    rotationY: 180,
  },
});
tl.from("nav  h1, nav h4, nav button", {
  y: -30,
  x: -5,
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 0.1,
});
tl.from("section .center-part1 ", {
  x: -300,
  opacity: 0,
  delay: -0.4,
  duration: 0.5,
});
tl.from("section .center-part1 p", {
  x: -300,
  opacity: 0,
  duration: 0.5,
});
tl.from(" button", {
  //   x: -300,
  opacity: 0,
  duration: 0.5,
});

tl.from(
  ".center-part2 img ",
  {
    opacity: 0,
    scale: 1.2,
    x: 60,

    duration: 0.5,
    // delay: -1,
  },
  "-=2"
);
tl.from(".sectionBottom img", {
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 2,
  scale: 0,
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    scrub: 2,
    end: "top 0",
  },
});

tl2.from(".services", {
  y: 30,
  opacity: 0,
});
tl2.from(
  ".elem.line1.left",
  {
    x: -300,
    opacity: 0,
    duration: 0.8,
  },
  "anim"
);
tl2.from(
  ".elem.line1.right",
  {
    x: 300,
    opacity: 0,
    duration: 0.8,
  },
  "anim"
);

tl2.from(
  ".elem.line2.left",
  {
    x: -300,
    opacity: 0,
    duration: 0.8,
  },
  "anim2"
);
tl2.from(
  ".elem.line2.right",
  {
    x: 300,
    opacity: 0,
    duration: 0.8,
  },
  "anim2"
);
re = document.querySelector(".services");
re.addEventListener("click", function () {
  tl2.restart();
});
