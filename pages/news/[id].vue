<script setup lang="ts">
const route = useRoute()
const { fetchNewsById } = useNewsApi()
const id = route.params.id as string

const { data, pending, error } = await useAsyncData(
  `news-detail-${id}`, 
  () => fetchNewsById(id)
)

const article = computed(() => data.value?.results?.[0] ?? null)
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <NuxtLink to="/" class="text-blue-600 font-bold mb-8 block">← Back to News</NuxtLink>

    <div v-if="pending" class="animate-pulse space-y-4">
      <div class="h-8 bg-gray-200 w-3/4"></div>
      <div class="h-64 bg-gray-200 w-full"></div>
    </div>

    <div v-else-if="article">
      <h1 class="text-4xl font-black mb-6 leading-tight">{{ article.title }}</h1>
      
      <div class="flex items-center gap-4 text-gray-500 text-sm mb-8">
        <span class="font-bold text-gray-900">{{ article.source_name }}</span>
        <span>•</span>
        <span>{{ new Date(article.pubDate).toLocaleString() }}</span>
      </div>

      <img v-if="article.image_url" :src="article.image_url" class="w-full rounded-3xl mb-10 shadow-xl" />

      <div class="prose prose-lg max-w-none text-gray-800">
        <p class="font-medium text-xl mb-6 text-gray-600 italic">{{ article.description }}</p>
        <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <p>{{ article.content }}</p>
          <p v-if="article.content.includes('PAID PLANS')" class="mt-4 text-sm text-blue-500 font-bold">
            Note: Full content requires a premium plan.
          </p>
        </div>
      </div>
      
      <a :href="article.link" target="_blank" class="mt-10 block text-center bg-black text-white py-4 rounded-full font-bold">
        Read Full Story at {{ article.source_name }}
      </a>
    </div>
  </div>
</template>