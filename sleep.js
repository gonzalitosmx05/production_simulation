//Sleeps tiempos de espera para mejorar la navegacion de la aplicacion 
//K6 permite realizar sleeps para tiempos de espera de pruebas

import http from 'k6/http';
import {sleep,check} from "k6";

export default function(){
    let url = "https://httpbin.test.k6.io/post";
    let response = http.post(url,"hola mundo");

    check(response,{
        'La respuesta contiene e identificador': (r)=>r.body.includes('hola mundo')
    });
    sleep(10);
}


//esto deberia verse
