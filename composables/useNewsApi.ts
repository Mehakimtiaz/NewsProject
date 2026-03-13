export const useNewsApi = () => {
  const fetchNews = async (pageToken?: string) => {
    // call local Nuxt server route
    return await $fetch('/api/news', {
      params: { page: pageToken }
    })
  }

  const fetchNewsById = async (id: string) => {
    return await $fetch('/api/news', {
      params: { id }
    })
  }

  return { fetchNews, fetchNewsById }
}