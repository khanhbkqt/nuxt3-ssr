<template>
  <div>
    <Header />
    <Login v-if="!isAuthenticated" />
  </div>
</template>
<script setup>
import Header from '~/components/Header.vue'
import Login from '~/components/Login.vue'

const authStore = useAuthStore()
const isAuthenticated = storeToRefs(authStore).isAuthenticated
</script>
