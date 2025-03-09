let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    delay: 0.0001,
    ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", function (dets) {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#ffffff7c",
  });
});

imageDiv.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "view more";

  gsap.to(cursor, {
    scale: 0,
  });
});
