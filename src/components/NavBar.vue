<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const base = import.meta.env.BASE_URL
const scrolled = ref(false)
const active = ref('home')

const links = [
{ id: 'home', label: 'Home', short: 'Home' },
{ id: 'programs', label: 'Programs Offered', short: 'Programs' },
{ id: 'faculty', label: 'Faculty and Staff', short: 'Faculty' },
{ id: 'partners', label: 'Partners and Memberships', short: 'Partners' }
]

function go(id) {
router.push({ path: '/', hash: `#${id}` })
}

function onScroll() {
scrolled.value = window.scrollY > 40
// highlight the section whose top has passed just under the navbar
let current = links[0].id
for (const l of links) {
const el = document.getElementById(l.id)
if (el && el.getBoundingClientRect().top <= 140) current = l.id
}
active.value = current
}

onMounted(() => {
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })
window.addEventListener('resize', onScroll)
})
onBeforeUnmount(() => {
window.removeEventListener('scroll', onScroll)
window.removeEventListener('resize', onScroll)
})
</script>

<template>
<header class="nav" :class="{ scrolled }">
<div class="container nav-inner">
<a href="#home" class="brand" @click.prevent="go('home')">
<img class="logo-img" :src="`${base}logos/${scrolled ? 'warriors' : 'ccs'}.png`" alt="CCS logo" />
<span class="brand-text">
<strong>College of Computer Studies</strong>
<small>Central Philippine University</small>
</span>
</a>

<nav class="menu" aria-label="Main">
<a
v-for="l in links"
:key="l.id"
:href="`#${l.id}`"
:class="{ active: active === l.id }"
@click.prevent="go(l.id)"
><span class="long">{{ l.label }}</span><span class="short">{{ l.short }}</span></a>
</nav>
</div>
</header>
</template>

<style scoped>
.nav {
position: fixed; inset: 0 0 auto 0; height: var(--nav-h); z-index: 100;
display: flex; align-items: center;
transition: background 0.35s, box-shadow 0.35s, height 0.35s;
}
.nav.scrolled {
background: rgba(255, 255, 255, 0.96);
backdrop-filter: blur(10px);
box-shadow: 0 4px 24px rgba(12, 31, 35, 0.1);
--link: var(--ink);
}
.nav { --link: #fff; }
.nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
.brand { display: flex; align-items: center; gap: 12px; }
.logo-img { height: 52px; width: auto; }
.brand-text { display: flex; flex-direction: column; line-height: 1.15; color: var(--link); transition: color 0.3s; }
.brand-text strong { font-family: 'Roboto Slab', serif; font-size: 1rem; }
.brand-text small { font-size: 0.72rem; opacity: 0.75; letter-spacing: 0.05em; }

.menu { display: flex; gap: 6px; }
.menu a {
position: relative; padding: 10px 14px; font-weight: 500; letter-spacing: 0.03em;
color: var(--link); transition: color 0.25s;
}
.menu a::after {
content: ''; position: absolute; left: 14px; right: 14px; bottom: 4px; height: 2px;
background: var(--gold); transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
}
.menu a:hover, .menu a.active { color: var(--gold-deep); }
.nav:not(.scrolled) .menu a:hover,
.nav:not(.scrolled) .menu a.active { color: var(--gold); }
.menu a:hover::after, .menu a.active::after { transform: scaleX(1); }

.short { display: none; }

@media (max-width: 900px) {
.nav { height: auto; padding: 6px 0 4px; }
.nav-inner { flex-direction: column; gap: 2px; }
.menu { width: 100%; justify-content: center; gap: 0; }
.menu a { padding: 8px 10px; font-size: 0.86rem; letter-spacing: 0; }
.menu a::after { left: 10px; right: 10px; bottom: 2px; }
.long { display: none; }
.short { display: inline; }
}
@media (max-width: 480px) { .brand-text small { display: none; } .brand-text strong { font-size: 0.9rem; } .logo-img { height: 44px; } }
</style>