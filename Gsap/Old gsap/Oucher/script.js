let tl = gsap.timeline();

tl.from("#nav ", {
  opacity: 0,
  delay: 0.3,
  y: 70,
  duration: 1,
});
tl.from("#nav h1, #nav h4,  #nav h3", {
  y: -80,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
  stagger: 0.2,
});
tl.from("#left h1", {
  x: -1000,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});

tl.from("#right img", {
  scale: 2,
  opacity: 0,
  duration: 0.5,
});

gsap.from("#page2 .box", {
  scale: 0,
  opacity: 0,
  stragger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
    start: "top 90%",
    markers: true,
  },
});
