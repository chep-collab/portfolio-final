export default {
  mounted(el) {
    el.classList.add('opacity-0', 'translate-y-4') // pre-animation
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.remove('opacity-0', 'translate-y-4')
        el.classList.add('transition', 'duration-700', 'ease-out')
      }
    }, { threshold: 0.1 })
    observer.observe(el)
  }
}