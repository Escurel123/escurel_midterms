<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const words = ['REMEMBER', 'CONNECT', 'ENGAGE', 'BUILD', 'SHARE']
const go = () => router.push({ path: '/', hash: '#programs' })
const bg = `${import.meta.env.BASE_URL}hero-bg.jpg`
</script>

<template>
  <section id="home" class="hero" :style="{ '--bg': `url(${bg})` }">
    <div class="container">
      <div class="copy">
        <p class="kicker">the CCS core practices that build bridges between gaps</p>
        <h1>
          <span v-for="w in words" :key="w">{{ w }}</span>
        </h1>
        <p class="tagline">different <b>PEOPLE</b>, ONE goal</p>
        <button class="btn" @click="go">Your FUTURE begins HERE</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh; display: flex; align-items: center;
  padding: calc(var(--nav-h) + 40px) 0 80px;
  background-color: #0c2226;
  background-image: var(--bg);
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  color: #fff;
}
.copy { max-width: 560px; padding-left: clamp(0px, 3vw, 40px); }
.kicker { color: #c9d6d6; font-weight: 500; margin-bottom: 14px; }
h1 {
  color: #fff; font-family: 'Roboto', sans-serif; font-weight: 700;
  font-size: clamp(2.4rem, 5.6vw, 3.6rem); line-height: 1.03; letter-spacing: -0.01em;
  margin-bottom: 20px;
}
h1 span { display: block; }
.tagline { font-size: clamp(1.25rem, 2.6vw, 1.8rem); color: var(--gold); margin-bottom: 52px; }
.tagline b { font-weight: 500; }

@media (max-width: 900px) {
  .hero { background-position: 68% top; position: relative; }
  .hero::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(12,34,38,0.72), rgba(12,34,38,0.2)); }
  .hero .container { position: relative; }
}
</style>
