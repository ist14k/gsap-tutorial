import gsap from 'gsap';

gsap.to('.box', {
  opacity: 1,
  rotate: 360,
  duration: 2,
  borderRadius: '50%',
  ease: 'bounce',
  scale: 1.25,
  repeat: -1
});
