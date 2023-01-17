//import Swal from 'sweetalert2'
import { usuari } from './usuari.js'
import { validaNouUsuari } from "./validaNouUsuari.js"
import { modificaData2 } from './modificaData2.js';
import { modificaNick } from './modificaNick.js';
export const creaUsuariValid = ()=>{
    

    const usuario = {
        nick: modificaNick(document.querySelector('#nick').value),
        pass: document.querySelector('#pass').value,
        avatar: document.querySelector('#avatar').value,
        punts: 0,
        dataRegistre: modificaData2(new Date()),
        dataNeixement: modificaData2(new Date(document.querySelector('#date').value))
    }
    const insertarUsuario = usuari.set(usuario)
    return insertarUsuario;
   
}