let tl = gsap.timeline();
tl.from("#nav img, #nav h3, #nav h4, #nav button", {
  y: -75,
  duration: 2,
  stagger: 0.2,
  delay: 0.5,
  opacity: 0,
});
gsap.from("#main h1", {
  duration: 2,
  opacity: 0,
  x: -300,
  stagger: 0.2,
});
tl.from("#main img", {
  opacity: 0,
  scale: 0,
  stagger: 0.3,
});
tl.from("h5", {
  scale: 0,
  opacity: 0,
});

tl.from("h5", {
  y: 20,
  yoyo: true,
  repeat: -1,
  duration: 1,
});

// gsap.from("#box", {
//   //   x: 700,
//   duration: 3,
//   delay: 0.5,
//   backgroundColor: "#dadada",
//   scale: 1.5,
// });

// gsap.to("h1", {
//   x: 500,
//   duration: 2,
//   stagger: 3,
//   color: "yellow",
//   //   repeat: 5,
//   yoyo: true,
// });

// gsap.from("h2", {
//   x: 500,
//   y: 500,
//   duration: 2,
//   //   repeat: 5,
//   yoyo: true,
//   color: "yellow",
// });
