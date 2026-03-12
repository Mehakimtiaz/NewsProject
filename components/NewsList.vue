<template>
  <div>
    <NewsItem
      v-for="article in articles"
      :key="article.article_id"
      :article="article"
    />
  </div>
</template>

<script setup lang="ts">
import type { NewsArticle } from '~/types/news'

defineProps<{
  articles: NewsArticle[]
}>()
</script>