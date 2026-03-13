<script setup lang="ts">
import { useRoute, useRouter } from '#app'
import { useNewsApi } from '~/composables/useNewsApi'
import { ref, computed, watch } from 'vue'
import Pagination from '~/components/Pagination.vue'

const { fetchNews } = useNewsApi()
const route = useRoute()
const router = useRouter()

const pageHistory = ref<string[]>([])

const pageToken = computed(() => {
  const p = Number(route.query.page)
  return p > 0 ? String(p) : '1'
})

watch(
  () => pageToken.value,
  (newToken) => {
    if (!pageHistory.value.includes(newToken)) {
      pageHistory.value.push(newToken)
    }
  },
  { immediate: true }
)

const fetchKey = computed(() => `news-page-${pageToken.value}`)

const { data, pending, error } = await useAsyncData(
  fetchKey.value, 
  () => fetchNews(pageToken.value),
  {
    watch: [pageToken],
    lazy: false
  }
)

const articles = computed(() => data.value?.results || [])

const goPrev = () => {
  if (pageHistory.length > 1) {
    pageHistory.value.pop()
    const prevToken = pageHistory.value[pageHistory.value.length - 1]
    router.push({ query: { page: prevToken } })
  }
}

const goNext = () => {
  const next = data.value?.nextPage
  if (next) router.push({ query: { page: next } })
}
</script>

<template>
  <div>
    <h1>Latest Headlines</h1>

    <div v-if="pending && !articles.length" class="loading">Loading...</div>

    <ul v-else-if="articles.length" class="news-list">
      <li v-for="article in articles" :key="article.article_id" class="news-card">
        <NuxtLink :to="`/news/${article.article_id}`" class="news-title news-link">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>

    <div v-else-if="!pending && !articles.length" class="loading">
      No articles found. Check your API limit.
    </div>

    <Pagination
      :hasPrev="pageHistory.length > 1"
      :hasNext="Boolean(data?.nextPage)"
      @prev="goPrev"
      @next="goNext"
    />
  </div>
</template>

<style scoped>
.news-list {
  list-style: none;
  padding: 0;
}
.news-card {
  margin-bottom: 0.6rem;
}
.loading {
  text-align: center;
  margin: 2rem 0;
}
.news-link {
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
  display: block;
  transition: color 0.2s ease;
}

.news-link:hover {
  text-decoration: underline;
  color: #2563eb;
  text-underline-offset: 4px;
}
</style>