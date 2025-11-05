gsap.to('.card', {
  opacity: 1,
  duration: 2,
  scale: 1,
  onComplete: () => {
    gsap.to('.card', {
      y: -20,
      repeat: -1,
      yoyo: true,
    })
  }
})
