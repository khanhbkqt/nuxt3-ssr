<template>
    <div>
        <h1>Header</h1>
        <div v-if="isAuthenticated && user">
            <p>Welcome, {{ user.username }}</p>
            <button @click="authStore.logout">Logout</button>
        </div>
        <div v-else>
            <p>Please login</p>
        </div>
    </div>
</template>

<script setup>
const authStore = useAuthStore()
const isAuthenticated = storeToRefs(authStore).isAuthenticated
const user = storeToRefs(authStore).user
</script>

<style lang="scss" scoped>

</style>