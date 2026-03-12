// composables/useNewsApi.ts
export const useNewsApi = () => {
  const config = useRuntimeConfig()

  const fetchNews = async (page?: string) => {
    // Constructing the URL based on the local proxy defined in routeRules
    const url = `${config.public.newsApiBase}/latest`
    
    return await $fetch(url, {
      params: {
        apikey: config.public.newsApiKey,
        size: 10,
        page: page || undefined
      }
    })
  }

  const fetchNewsById = async (id: string) => {
    return await $fetch(`${config.public.newsApiBase}/latest`, {
      params: {
        apikey: config.public.newsApiKey,
        id
      }
    })
  }

  return { fetchNews, fetchNewsById }
}