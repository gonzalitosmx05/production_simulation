import http from 'k6/http';
import {check} from 'k6';

export default function(){
    let url = "https://httpbin.test.k6.io/post";
    let response = http.post(url,"Hola mundo");
    check(response,{
        'Respuesta de la solicitud':(r)=>r.body.includes("Hola mundo"),
        'Estatus de la respuesta':(r)=>r.status === 200,
        'Tiempo de solicitud < 500ms':(r)=>r.timings.duration < 500
    });
}