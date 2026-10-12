<template>
  <div class="event-list-page">
    <div class="header-section">
      <h2 class="section-title">Upcoming Events</h2>
      <p class="section-desc">Discover workshops, seminars, tech meetups, and competitions near you.</p>
    </div>

    <SearchBar v-model="searchQuery" />
    <CategoryFilter :categories="categories" v-model="selectedCategory" />

    <div class="event-grid">
      <EventCard
        v-for="event in filteredEvents"
        :key="event.id"
        :event="event"
        @view-detail="handleViewDetail"
      />
    </div>

    <div v-if="filteredEvents.length === 0" class="empty-state">
      <p>No events found matching your criteria.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { events } from '@/data/events.js'
import EventCard from '@/components/event/EventCard.vue'
import SearchBar from '@/components/event/SearchBar.vue'
import CategoryFilter from '@/components/event/CategoryFilter.vue'

const router = useRouter()

const searchQuery = ref('')
const selectedCategory = ref('All')
const categories = ['All', 'Workshop', 'Meetup', 'Competition', 'Seminar', 'Conference']

const filteredEvents = computed(() => {
  return events.filter((event) => {
    const matchSearch =
      event.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchCategory = selectedCategory.value === 'All' || event.category === selectedCategory.value
    return matchSearch && matchCategory
  })
})

const handleViewDetail = (id) => {
  router.push(`/browse/events/${id}`)
}
</script>

<style scoped>
.header-section { margin-bottom: var(--space-8); }
.section-title { font-size: 2.2rem; margin-bottom: var(--space-2); }
.section-desc { color: var(--text-muted); font-size: 1.1rem; }

/* ADAPTIVE GRID */
.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}

.empty-state {
  text-align: center;
  padding: var(--space-12);
  color: var(--text-muted);
  background: var(--bg-light);
  border-radius: var(--space-4);
}
</style>
