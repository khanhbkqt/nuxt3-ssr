<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">    
            <input type="text" v-model="username" placeholder="Username" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
const authStore = useAuthStore()

const username = ref('')
const password = ref('')

const handleLogin = () => {
    authStore.login(username.value, password.value)
}
</script>

<style lang="scss" scoped>

</style>