gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.from("#page2 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  //   repeat: -1,
  yoyo: true,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    markers: true,
    start: "top 60%",
    // scrub: true,
    // scrub: 5,
    scrub: 1,
    end: "top 50%",
  },
});
