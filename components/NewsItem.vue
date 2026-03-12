<template>
  <NuxtLink :to="`/news/${article.article_id}`">
    <div class="news-item">
      <h2>{{ article.title }}</h2>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { NewsArticle } from '~/types/news'

defineProps<{
  article: NewsArticle
}>()
</script>