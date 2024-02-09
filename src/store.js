import { reactive } from 'vue'
import axios from 'axios'; //importo Axios

export const store = reactive({
    events: [],
    methods : {
        myAxios : function (){
            axios.get("http://127.0.0.1:8000/api/api2").then(risultato => {
            for(let i=0; i<risultato.data.payload.length; i++){
                store.events[i] = {
                    id : risultato.data.payload[i].id,
                    name : risultato.data.payload[i].name,
                    description : risultato.data.payload[i].description,
                    city : risultato.data.payload[i].city,
                    date : risultato.data.payload[i].date,
                    tags : []
                };
                for(let index=0; index<risultato.data.payload[i].tags.length; index++){
                    store.events[i].tags[index] = {
                        name : risultato.data.payload[i].tags[index].name
                    };
                }
            }
            }).catch(errore => {
            console.error(errore);
            });
        }
    }
});