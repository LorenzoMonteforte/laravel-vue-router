<script>
import { store } from "../store"

export default {
    name : "AppEvents",
    data() {
		return {
			store
		}
	}
}
</script>

<template>
    <h1>Events</h1>
    <ul v-for="event in store.events">
        <li>Nome: {{ event.name }}</li>
        <li>Descrizione: {{ event.description }}</li>
        <li>Città: {{ event.city }}</li>
        <li>Data: {{ event.date }}</li>
        <ul>
            <li v-for="tag in event.tags">{{ tag.name }}</li>
        </ul>
        <router-link :to="{ name: 'event', params: { id: event.id } }">Maggiori informazioni</router-link>
    </ul>
</template>

<style scoped>
    
</style>