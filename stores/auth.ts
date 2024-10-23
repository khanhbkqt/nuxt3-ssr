import { defineStore } from 'pinia'
import axios from 'axios'

interface User {
  username: string
  // Add other user properties as needed
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
  }),

  actions: {
    async login(username: string, password: string) {
      try {
        const { data } = await axios.post('/api/auth/login', { username, password })
        useCookie('access_token').value = data.access_token
        this.user = { username }
        this.isAuthenticated = true
        return true
      } catch (error) {
        console.error('Login failed:', error)
        return false
      }
    },

    logout() {
      // Clear the cookie (you might need a backend endpoint for this)
      document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      this.user = null
      this.isAuthenticated = false
    },
  },

  getters: {
    currentUser: (state) => state.user,
  },
})

