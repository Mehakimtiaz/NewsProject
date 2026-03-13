export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  try {
    return await $fetch('https://newsdata.io/api/1/latest', {
      params: {
        apikey: config.public.newsApiKey,
        page: query.page,
        language: 'en',
        size: 10
      }
    })
  } catch (error: any) {
    // If the external API is dead, return an empty structure so the app doesn't crash
    return { results: [], nextPage: null, status: 'error' }
  }
})