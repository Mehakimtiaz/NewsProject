<template>
  <div class="container-details">
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

const articleId = route.params.id as string | undefined

onBeforeMount(() => {
  if (!articleId) {
    if (process.client) router.replace('/')
    else navigateTo('/')
  }
})

const { data: articleData, pending, error } = await useAsyncData(
  `article-${articleId}`,
  () => fetchNewsById(articleId!)
)

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
  border-radius:12px;
  margin:20px 0;
  margin-bottom: 1rem;
}
.loading, .error {
  text-align: center;
  margin: 2rem 0;
  font-weight: bold;
}
</style>