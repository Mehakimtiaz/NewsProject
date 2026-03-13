// // composables/useNewsApi.ts
// export const useNewsApi = () => {
//   const config = useRuntimeConfig()

//   const fetchNews = async (pageToken?: string) => {
//     const url = `${config.public.newsApiBase}/latest`
//     const params: Record<string, any> = {
//       apikey: config.public.newsApiKey,
//       size: 10,
//     }

//     if (pageToken && pageToken !== '1') {
//       params.page = pageToken // only include if token exists
//     }

//     const response = await $fetch(url, { params })
//     return response
//   }

//   const fetchNewsById = async (id: string) => {
//     return await $fetch(`${config.public.newsApiBase}/latest`, {
//       params: {
//         apikey: config.public.newsApiKey,
//         id
//       }
//     })
//   }

//   return { fetchNews, fetchNewsById }
// }

// composables/useNewsApi.ts
// composables/useNewsApi.ts
export const useNewsApi = () => {
  const fetchNews = async (pageToken?: string) => {
    // We now call our local Nuxt server route
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