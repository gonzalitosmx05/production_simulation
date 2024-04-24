import http from 'k6/http'
import {sleep} from 'k6'

export let options = {
    vus: 10,
    duration:'5m',
    iterations: 100
}

export default function(){
    http.get('https://jsonplaceholder.typicode.com/post')
    sleep(1);
}

//Datos de comparacion google.com