export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  try {
    return await $fetch(config.public.newsApiBase, {
      params: {
        apikey: config.public.newsApiKey,
        page: query.page,
        language: 'en',
        size: 10
      }
    })
  } catch (error: any) {
    return { results: [], nextPage: null, status: 'error' }
  }
})