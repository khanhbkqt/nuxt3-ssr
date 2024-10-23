// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // Add the devServer configuration
  devServer: {
    port: 3001 // Specify your desired port number here
  },
  modules: ['@pinia/nuxt'],
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:3000', // Replace with your API base URL
        changeOrigin: true,
        prependPath: true,
      }
    }
  },
})
