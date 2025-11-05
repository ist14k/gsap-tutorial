import gsap from "gsap";

const rpeatButton = document.querySelector(".repeat");
const cards = document.querySelectorAll(".card");

const animation = gsap.from(cards, {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2,
});

rpeatButton.addEventListener("click", () => {
  animation.restart();
});
