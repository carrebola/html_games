//import Swal from 'sweetalert2'
import { usuari } from './usuari.js'
import { validaNouUsuari } from "./validaNouUsuari.js"
import { modificaData2 } from './modificaData2.js';
import { modificaNick } from './modificaNick.js';
//Para crear id unico
//Para generar id únicos
import { v4 as uuidv4 } from 'uuid';
export const creaUsuariValid = ()=>{
    

    const usuario = {
        id: uuidv4(),
        nick: modificaNick(document.querySelector('#nick').value),
        pass: document.querySelector('#pass').value,
        avatar: document.querySelector('#avatar').value,
        punts: 0,
        dataRegistre: new Date(),
        dataNeixement: new Date(document.querySelector('#date').value)
    }

    console.log(usuario.dataRegistre);
    console.log(usuario.dataNeixement);
    const insertarUsuario = usuari.set(usuario)
    return insertarUsuario;
   
}