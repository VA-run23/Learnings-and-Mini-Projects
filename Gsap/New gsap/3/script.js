let initialPath = `M 10 250 Q 500 100 990 250`;

let finalPath = `M 10 250 Q 500 100 990 250`;

let string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 250 Q ${dets.x} ${dets.y} 990 250`;
  // path = `M 10 100 Q 500 ${dets.y} 990 100`;

  gsap.to("svg path", {
    attr: {
      d: path /*d wale attribute k andhar upar wale path ko set kar rahe hai*/,
      duration: 0.2,
      ease: "power3.out",
    },
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.4,
    ease: "elastic.out(1,0.2)",
  });
});

// string.addEventListener("mouseenter", function (dets) {
//   console.log("entered", dets);
// });
