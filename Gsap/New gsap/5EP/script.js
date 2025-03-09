// let menu = document.querySelector("#nav i");
// let cross = document.querySelector("#full i");

// let tl = gsap.timeline();
// tl.to("#full", {
//   right: 0,
// ,
//   duration: 1.5,
// });
// tl.from("#full h3", {
//   x: 150,
//   opacity: 0,
//   duration: 0.3,
//   stagger: 0.1,
// });
// tl.from("#full i", {
//   opacity: 0,
// });

// tl.pause();

// menu.addEventListener("click", function () {
//   tl.play();
// });

// close.addEventListener("Click", function () {
//   tl.reverse();
// });

let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");

let tl = gsap.timeline();
tl.to("#full", {
  right: 0,
  duration: 1.5,
});
tl.from("#full h3", {
  x: 150,
  opacity: 0,
  duration: 0.3,
  stagger: 0.1,
});
tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});
