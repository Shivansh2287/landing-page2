const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

const tl = new TimelineLite({ paused: true, reverse: true });

tl.to(".cover", 1, {
  width: "60%",
  ease: Power2.easeOut,
})
  .to(
    "nav",
    1,
    {
      height: 800,
      ease: Power2.easeOut,
    },
    "-=0.5"
  )
  .fromTo(
    ".nav-open",
    0.5,
    {
      opacity: 0,
      x: 50,
      ease: Power2.easeOut,
    },
    {
      x: 0,
      opacity: 1,
      onComplete: function () {
        navOpen.style.pointerEvent = "auto";
      },
    }
  );

navButton.addEventListener("click", () => {
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }

  toggleTween(tl);
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
