<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const words = ['REMEMBER', 'CONNECT', 'ENGAGE', 'BUILD', 'SHARE']
const logo = `${import.meta.env.BASE_URL}logos/warriors.png`
const go = () => router.push({ path: '/', hash: '#programs' })
</script>

<template>
<section id="home" class="hero">
<div class="container hero-inner">
<div class="copy">

<h1>
<span v-for="w in words" :key="w">{{ w }}</span>
</h1>
<p class="tagline">different <b>PEOPLE</b>, ONE goal</p>
<button class="btn" @click="go">Your FUTURE begins HERE</button>
</div>
<img class="hero-logo" :src="logo" alt="CCS Warriors" />
</div>
</section>
</template>

<style scoped>
.hero {
min-height: 100vh; display: flex; align-items: center;
padding: calc(var(--nav-h) + 40px) 0 80px;
background-color: #0c2226;
color: #fff;
}
.hero-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.hero-logo { width: min(460px, 38vw); height: auto; flex-shrink: 0; margin-right: 20px; }
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

@media (max-width: 760px) {
.hero-inner { flex-direction: column-reverse; text-align: center; }
.hero-logo { width: min(300px, 80%); margin-right: 0; }
}
</style>