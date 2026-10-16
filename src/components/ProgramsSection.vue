<script setup>
import { programs } from '../data/programs'
</script>

<template>
  <section id="programs" class="programs">
    <div class="container">
      <div class="head center" v-reveal="{ from: 'fade' }">
        <span class="eyebrow">Academic Programs</span>
        <h2 class="section-title">Programs Offered</h2>
        <p class="section-sub">Four programs, one community — pick the path where your curiosity fits best.</p>
      </div>

      <div class="grid">
        <article
          v-for="(p, i) in programs"
          :key="p.code"
          class="card"
          :style="{ '--c': p.color }"
          v-reveal="{ delay: i * 100, from: 'fade' }"
        >
          <div class="logo"><img :src="p.logo" :alt="p.alt" loading="lazy" /></div>
          <span class="code">{{ p.code }}</span>
          <h3>{{ p.name }}</h3>
          <p class="desc">{{ p.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programs { padding: 110px 0; background: linear-gradient(180deg, #0c1f23 0, #0c1f23 280px, var(--mist) 280px); }
.head { margin-bottom: 70px; }
.programs .head .section-title { color: #fff; }
.programs .head .section-sub { color: #b9c9c9; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.card {
  --c: var(--gold);
  background: #fff; border-radius: var(--radius); padding: 34px 26px 30px; text-align: center;
  box-shadow: var(--shadow); border-top: 4px solid var(--c);
  display: flex; flex-direction: column; align-items: center;
  transition: box-shadow 0.3s, opacity 0.8s;
}
.card:hover { box-shadow: 0 20px 40px rgba(12, 31, 35, 0.18); }
.logo { height: 150px; width: 100%; display: grid; place-items: center; margin-bottom: 14px; }
.logo img { max-height: 150px; max-width: 80%; width: auto; height: auto; object-fit: contain; }
.code { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.2em; color: var(--c); margin-bottom: 8px; }
h3 { font-size: 1.3rem; margin-bottom: 14px; }
.desc { font-size: 0.95rem; color: var(--muted); flex: 1; margin-bottom: 20px; }
.more { font-weight: 700; color: var(--teal-800); }
.more:hover { color: var(--gold-deep); }

@media (max-width: 1100px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } .programs { padding: 80px 0; } }
</style>
