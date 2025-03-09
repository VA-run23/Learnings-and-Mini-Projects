function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splittedText = h1Text.split("");

  let halfLen = Math.floor(splittedText.length / 2);
  let clutter = "";
  splittedText.forEach(function (elem, idx) {
    if (idx < halfLen) {
      clutter += `<span class="firstHalf">${elem}</span>`;
    } else {
      clutter += `<span class="secondHalf">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .firstHalf", {
  x: -30,
  y: 100,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
});

gsap.from("h1 .secondHalf", {
  y: -100,
  x: 30,

  opacity: 0,
  stagger: -0.15,
  duration: 1,
});
