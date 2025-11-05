import gsap from "gsap";

gsap.to(".toast", {
  y: -100,
  opacity: 1,
  scale: 1,
  duration: 0.8,
  ease: "bounce.out",
});
