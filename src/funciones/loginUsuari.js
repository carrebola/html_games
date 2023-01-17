//login
import Swal from 'sweetalert2'
import { dades } from './dades.js';
import { validaLogin } from "./validaLogin"

//login
export const loginUsuari = ()=>{
    const usuari = {
        nick: document.querySelector('#nickLogin').value,
        pass: document.querySelector('#passLogin').value
    }
    console.log('usuari login ', usuari);
    const valida = validaLogin(usuari)
    console.log('valida', valida);
    if(valida.error){
        Swal.fire(
            'Cagada',
            valida.missatge,
            'warning'
        )
        return {
            error: true,
            nombre: "anónimo"
        }
    }else{
        
        return {
            error: false,
            nombre: usuari.nick
        }
    }
}