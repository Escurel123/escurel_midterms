<script setup>
import { groups } from '../data/faculty'
</script>

<template>
  <section id="faculty" class="faculty">
    <div class="band">
      <div class="container center">
        <p class="kick" v-reveal="{ from: 'fade' }">Academically Knowledgeable and Here For You</p>
        <h2 v-reveal="{ from: 'fade', delay: 100 }">Faculty and Staff Members</h2>
      </div>
    </div>

    <div v-for="(g, gi) in groups" :key="g.id" class="group" :class="{ alt: gi % 2 === 1 }">
      <div class="container">
        <header class="group-head center" v-reveal="{ from: 'fade' }">
          <span class="eyebrow">{{ g.eyebrow }}</span>
          <h3>{{ g.title }}</h3>
          <i class="rule"></i>
        </header>

        <div class="people" :class="{ solo: g.members.length === 1 }">
          <article
            v-for="(m, i) in g.members"
            :key="g.id + i"
            class="person"
            v-reveal="{ delay: (i % 4) * 90, from: 'fade' }"
          >
            <div class="photo"><img :src="m.photo" :alt="m.name" loading="lazy" /></div>
            <div class="caption">
              <h4 :class="{ ph: m.placeholder }">{{ m.name }}<template v-if="!m.placeholder && m.degree">, {{ m.degree }}</template></h4>
              <p class="role">{{ m.role }}</p>
              <p v-if="m.placeholder" class="deg ph">{{ m.degree }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faculty { background: #fff; }
.band { background: var(--teal-800); padding: 140px 0 64px; }
.band .kick { color: #cfe0df; font-size: 0.95rem; margin-bottom: 8px; }
.band h2 { color: var(--gold); font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 700; }

.group { padding: 80px 0 90px; background: #fff; }
.group.alt { background: var(--mist); }
.group-head { margin-bottom: 48px; }
.group-head h3 { font-weight: 400; font-size: clamp(1.8rem, 4vw, 2.6rem); }
.rule { display: block; width: 56px; height: 3px; margin: 16px auto 0; background: var(--gold); border-radius: 2px; }

.people { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
.people.solo { grid-template-columns: minmax(240px, 320px); justify-content: center; }

.person {
  background: #fff; border-radius: var(--radius); overflow: hidden;
  box-shadow: 0 8px 24px rgba(12, 31, 35, 0.1);
  border-bottom: 4px solid var(--gold);
  transition: box-shadow 0.3s, opacity 0.8s;
}
.person:hover { box-shadow: 0 16px 34px rgba(12, 31, 35, 0.18); }
.photo { aspect-ratio: 331 / 450; background: #e6efed; overflow: hidden; }
.photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.caption { padding: 16px 14px 20px; text-align: center; }
.caption h4 { font-family: 'Roboto Slab', serif; font-size: 1.02rem; color: var(--teal-800); margin-bottom: 4px; }
.role { color: var(--gold-deep); font-weight: 700; font-size: 0.74rem; letter-spacing: 0.1em; text-transform: uppercase; }
.deg { margin-top: 6px; font-size: 0.85rem; color: var(--text); }
.ph { color: var(--muted); font-style: italic; font-weight: 400; }
h4.ph { font-size: 0.95rem; }

@media (max-width: 1000px) { .people { grid-template-columns: repeat(2, 1fr); gap: 20px; } }
@media (max-width: 600px) {
  .band { padding: 120px 0 48px; }
  .group { padding: 56px 0 64px; }
  .people { gap: 14px; }
  .caption { padding: 12px 8px 16px; }
  .caption h4 { font-size: 0.9rem; }
  .people.solo { grid-template-columns: minmax(200px, 280px); }
}
</style>
