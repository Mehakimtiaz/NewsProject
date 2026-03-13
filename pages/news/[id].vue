<template>
  <div class="container-details">
    <!-- Loading state and try to add skeleton make loading in the center--> 
    <div v-if="pending" class="loading">Loading...</div>

    <!-- Article content -->
    <div v-else-if="article" class="article">
      <h1 class="news-title">{{ article.title }}</h1>
      <img v-if="article.image_url" :src="article.image_url" class="news-image" />
      <p>{{ article.description }}</p>
    </div>
    <!-- Fallback if article not found -->
    <div v-else class="error">Article not found.</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter, navigateTo } from '#app'
import { useNewsApi } from '~/composables/useNewsApi'
import { computed, onBeforeMount } from 'vue'

const route = useRoute()
const router = useRouter()
const { fetchNewsById } = useNewsApi()

// Extract ID from route params
const articleId = route.params.id as string | undefined

// Redirect if no article ID
onBeforeMount(() => {
  if (!articleId) {
    if (process.client) router.replace('/')  // client-side redirect
    else navigateTo('/')                     // server-side redirect
  }
})

// Fetch the article
const { data: articleData, pending, error } = await useAsyncData(
  `article-${articleId}`,
  () => fetchNewsById(articleId!)
)

// Compute first article (API returns results array)
const article = computed(() => articleData.value?.results?.[0] || null)
</script>

<style scoped>
.container-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
.news-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.news-image {
  max-width: 100%;
  margin-bottom: 1rem;
}
.loading, .error {
  text-align: center;
  margin: 2rem 0;
  font-weight: bold;
}
.skeleton {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #f3f4f6 25%,
    #e5e7eb 50%,
    #f3f4f6 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>