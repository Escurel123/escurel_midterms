import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

// Scroll-reveal directive: adds .in-view when the element enters the viewport
app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value?.delay) el.style.transitionDelay = `${binding.value.delay}ms`
    if (binding.value?.from) el.classList.add(`from-${binding.value.from}`)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in-view')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
  }
})

app.use(router).mount('#app')
