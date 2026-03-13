export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      newsApiKey: process.env.NEWS_API_KEY,
      newsApiBase: process.env.NEWS_API || 'https://newsdata.io/api/1/latest'
    }
  },
  devtools: { enabled: false },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/test-utils/module']
})