import { defineNuxtPlugin } from '#app'
import type { Pinia } from 'pinia'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore(nuxtApp.$pinia as Pinia)

  // Only run on server-side
  if (nuxtApp.ssrContext) {
    try {
      const { data: user } = await useFetch('/api/users/profile')
      if (user.value) {         
        authStore.user = user.value
        authStore.isAuthenticated = true
      }
    } catch (error) {
      authStore.isAuthenticated = false
      authStore.user = null
      useCookie('access_token').value = null
      console.error('Failed to fetch user ssr:', error)
    }
  }
})

