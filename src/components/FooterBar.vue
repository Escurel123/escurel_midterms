<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const base = import.meta.env.BASE_URL
const showTop = ref(false)
const onScroll = () => (showTop.value = window.scrollY > 500)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
const top = () => router.push({ path: '/', hash: '#home' })
</script>

<template>
  <footer class="footer">
    <div class="container row">
      <div class="who"><img :src="`${base}logos/ccs.png`" alt="CCS logo" height="40" /><span>College of Computer Studies<br /><small>Central Philippine University</small></span></div>
      <p>© {{ new Date().getFullYear() }} CCS. Different people, ONE goal.</p>
    </div>
  </footer>
  <transition name="pop">
    <button v-if="showTop" class="to-top" aria-label="Back to top" @click="top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 15l6-6 6 6" /></svg>
    </button>
  </transition>
</template>

<style scoped>
.footer { background: var(--teal-900); color: #b9c9c9; padding: 34px 0; }
.row { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
.who { display: flex; align-items: center; gap: 12px; color: #fff; font-family: 'Roboto Slab', serif; line-height: 1.2; }
.who small { font-family: 'Roboto', sans-serif; opacity: 0.7; }
.to-top { position: fixed; right: 22px; bottom: 22px; width: 46px; height: 46px; border-radius: 50%; border: 0; background: var(--gold); color: var(--teal-900); display: grid; place-items: center; box-shadow: 0 10px 24px rgba(0,0,0,0.25); z-index: 90; transition: transform 0.25s; }
.to-top:hover { transform: translateY(-4px); }
.pop-enter-active, .pop-leave-active { transition: opacity 0.3s, transform 0.3s; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: translateY(16px) scale(0.8); }
</style>
