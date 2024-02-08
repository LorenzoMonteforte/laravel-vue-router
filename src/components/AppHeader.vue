<script>
export default {
    name : "AppHeader"
}
</script>

<template>
    <header>
        <ul>
            <li>
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about' }">About</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'events' }">Events</router-link>
            </li>
        </ul>
    </header>
</template>

<style scoped>
    header{
        height: 100px;
        background-color: red;
    }
</style>