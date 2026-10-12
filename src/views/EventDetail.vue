<template>
  <div
    v-if="event"
    class="event-detail-page"
  >
    <button
      class="btn-back"
      @click="router.push('/browse/events')"
    >
      &larr; Back to Event List
    </button>

    <div class="detail-header">
      <div class="header-content">
        <span class="event-tag">{{ event.category }}</span>
        <h1>{{ event.title }}</h1>

        <div class="meta-info">
          <span class="meta-item">&#128197; {{ event.date }} &middot; {{ event.time }}</span>
          <span class="meta-item">&#128205; {{ event.location }}</span>
        </div>
      </div>
    </div>

    <div class="detail-content">
      <div class="main-desc">
        <h2>About This Event</h2>
        <p
          v-for="(paragraph, index) in event.description"
          :key="index"
        >
          {{ paragraph }}
        </p>

        <h2>Agenda</h2>
        <ul class="agenda-list">
          <li
            v-for="(item, index) in event.agenda"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="sidebar">
        <AppCard class="ticket-card sticky-pane">
          <h3>Ticket Price</h3>
          <div class="price">{{ event.price }}</div>
          <p class="ticket-desc">{{ event.ticketDesc }}</p>

          <AppButton variant="primary" class="btn-register">Register Now</AppButton>

          <p class="spots">{{ event.spots }}</p>
        </AppCard>
      </div>
    </div>
  </div>

  <div
    v-else
    class="event-not-found"
  >
    <p>Event not found.</p>
    <button
      class="btn-back"
      @click="router.push('/browse/events')"
    >
      &larr; Back to Event List
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getEventById } from '@/data/events.js'
import AppCard from '@/components/ui/AppCard.vue'
import AppButton from '@/components/ui/AppButton.vue'

const route = useRoute()
const router = useRouter()

const event = computed(() => getEventById(route.params.id))
</script>

<style scoped>
.btn-back {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: var(--space-6);
  color: var(--text-muted);
}

.btn-back:hover {
  color: var(--primary);
}

.detail-header {
  background: var(--bg-light);
  border-radius: var(--space-4);
  border: 1px solid var(--border-color);
  padding: var(--space-12) var(--space-8);
  margin-bottom: var(--space-8);
}

.header-content {
  max-width: 800px;
}

.event-tag {
  display: inline-block;
  background: rgba(102, 68, 255, 0.1);
  color: var(--primary);
  padding: var(--space-1) var(--space-4);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: var(--space-4);
}

.detail-header h1 {
  font-size: 2.8rem;
  margin-bottom: var(--space-4);
  line-height: 1.2;
}

.meta-info {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
}

.meta-item {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 1.05rem;
}

/* ASYMMETRICAL GRID */
.detail-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* Rasio lebar 2:1 (Atau 8:4 di kerangka 12-kolom) */
  gap: var(--space-12);
}

.main-desc h2 {
  margin-bottom: var(--space-4);
  font-size: 1.8rem;
  border-left: 4px solid var(--primary);
  padding-left: var(--space-2);
}

.main-desc p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: var(--space-6);
  font-size: 1.05rem;
}

.agenda-list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-8) 0;
}

.agenda-list li {
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 1.05rem;
}

/* FOCAL POINT CARD */
.ticket-card {
  padding: var(--space-8);
  text-align: center;
}

/* STICKY BEHAVIOR */
.sticky-pane {
  position: sticky;
  top: 100px;
}

.ticket-card h3 {
  font-size: 1.5rem;
  margin-bottom: var(--space-2);
}

.price {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: var(--space-2);
}

.ticket-desc {
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

.btn-register {
  width: 100%;
}

.spots {
  margin-top: var(--space-4);
  color: #e63946;
  font-weight: 600;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .detail-content {
    grid-template-columns: 1fr;
  }
}
</style>