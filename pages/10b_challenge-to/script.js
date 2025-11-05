import gsap from "gsap";

const toasts = document.querySelectorAll(".toast");

gsap.to(toasts, {
  y: 20,
  opacity: 1,
  scale: 1,
  duration: 0.8,
  ease: "expo.out",
  stagger: 0.4, // Stagger the animation for each toast
  onComplete: () => {
    gsap.to(toasts, {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "expo.in",
      delay: 2, // Wait for 2 seconds before starting the hide animation
      stagger: 0.4, // Stagger the hide animation for each toast
    });
  }
});
