gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  //   duration: 2,
  scrollTrigger: {
    trigger: "#page2" /* We always trigger parent*/,
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    pin: true,
    scrub: 3,
  },
});
