// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      newsApiKey: 'pub_53dd73b15efc4cd3a6427dd755cca668',
      newsApiBase: 'https://newsdata.io/api/1'
    }
  },
  devtools: { enabled: true }
})