import { reactive } from 'vue'
import axios from 'axios'; //importo Axios

export const store = reactive({
    methods : {
        myAxios : function (){
            axios.get("http://127.0.0.1:8000/api/api2").then(risultato => {
            console.log(risultato);
            }).catch(errore => {
            console.error(errore);
            });
        }
    }
});