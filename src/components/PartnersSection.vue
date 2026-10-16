<script setup>
const asset = (p) => `${import.meta.env.BASE_URL}${p}`
const partners = [
  { name: 'Oracle Academy', file: 'oracle' },
  { name: 'Cisco Networking Academy', file: 'cisco' },
  { name: 'Acer Academy', file: 'acer' },
  { name: 'Huawei ICT Academy', file: 'huawei' },
  { name: 'PSITE', file: 'psite' },
  { name: 'GoveSmart', file: 'govesmart' },
  { name: 'Mayad', file: 'mayad' },
  { name: 'Lasortech', file: 'lasortech' },
  { name: 'Startup Project Ventures', file: 'startup' }
]
</script>

<template>
  <section id="partners" class="partners">
    <div class="container center">
      <div v-reveal="{ from: 'fade' }">
        <span class="eyebrow">Connect</span>
        <h2 class="section-title">Our Partners and Memberships</h2>
        <p class="section-sub">Driving technology for education</p>
      </div>

      <div class="grid">
        <div v-for="(p, i) in partners" :key="p.file" class="partner" v-reveal="{ delay: (i % 3) * 100, from: 'fade' }">
          <img :src="asset(`logos/${p.file}.png`)" :alt="p.name" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners { padding: 110px 0 100px; background: linear-gradient(180deg, var(--mist), #fff); }
.partners .section-title { color: var(--gold); }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 60px; }
.partner {
  height: 170px; padding: 28px; display: grid; place-items: center;
  background: #fff; border-radius: var(--radius); box-shadow: var(--shadow);
  transition: box-shadow 0.3s, opacity 0.8s;
}
.partner:hover { box-shadow: 0 18px 36px rgba(12, 31, 35, 0.16); }
.partner img { max-width: 85%; max-height: 100px; width: auto; height: auto; object-fit: contain; }

@media (max-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .grid { grid-template-columns: 1fr; } .partners { padding: 80px 0 70px; } .partner { height: 140px; } }
</style>
