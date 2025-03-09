window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    leftMove();
  } else {
    rightMove();
  }
});

function leftMove() {
  gsap.to(".marque", {
    transform: "translateX(-200%)",
    ease: "none",
    duration: 2,
    repeat: -1,
  });
  gsap.to(".marque img", {
    rotate: 180,
  });
}
function rightMove() {
  gsap.to(".marque", {
    transform: "translateX(0%)",
    ease: "none",
    duration: 2,
    repeat: -1,
  });
  gsap.to(".marque img", {
    rotate: 0,
  });
}
