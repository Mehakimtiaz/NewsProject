<script setup lang="ts">
const { fetchNews } = useNewsApi()
const route = useRoute()

// Pull page token from URL if it exists (for SEO-friendly pagination links)
const pageToken = computed(() => route.query.page as string || '')

// useAsyncData ensures the first 10 items are fetched on the server
const { data, pending, error } = await useAsyncData(
  `news-page-${pageToken.value}`, 
  () => fetchNews(pageToken.value),
  { watch: [pageToken] }
)

const articles = computed(() => data.value?.results || [])
</script>

<template>
  <div class="news-container">
    <h1>Latest Headlines</h1>
    
    <div v-if="pending">Loading...</div>
    
    <ul v-else-if="articles.length">
      <li v-for="article in articles" :key="article.article_id">
        <NuxtLink :to="`/news/${article.article_id}`">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>

    <div class="pagination">
      <NuxtLink 
        v-if="data?.nextPage" 
        :to="{ query: { page: data.nextPage } }"
      >
        Next Page
      </NuxtLink>
    </div>
  </div>
</template>