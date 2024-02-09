<script>
import axios from 'axios';

export default {
    name : "AppEvent",
    data() {
		return {
			event : []
		}
	},
    methods : {
        myAxios : function(){
            axios.get("http://127.0.0.1:8000/api/api2/" + this.$route.params.id).then(risultato => {
            this.event = risultato.data.payload;
            console.log(this.event);
            }).catch(errore => {
            console.error(errore);
            });
        }
    },
    mounted() {
		this.myAxios();
	}
}
</script>

<template>
    <h1>Evento: {{ event.name }}</h1>
    <div>ID: {{ event.id }}</div>
    <div>Descrizione: {{ event.description }}</div>
    <div>Città: {{ event.city }}</div>
    <div>Data: {{ event.date }}</div>
</template>

<style scoped>
    
</style>