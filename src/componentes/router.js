import { adminUsuarios } from "../vistas/adminUsuarios";
import { editarUsuario } from "../vistas/editarUsuario";

export const router = {
    editar: (id)=>{
        document.querySelector('main').innerHTML = editarUsuario.template   
        editarUsuario.script(id)  
    },
    login: ()=>{
        console.log('cargando login');
        document.querySelector('main').innerHTML = login.template   
        login.script()  
    },
    adminUsuarios: ()=>{
        document.querySelector('main').innerHTML = adminUsuarios.template   
        adminUsuarios.script()
    }
}