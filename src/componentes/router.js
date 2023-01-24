import { adminUsuarios } from "../vistas/adminUsuarios";
import { editarUsuario } from "../vistas/editarUsuario";
import { login } from "../vistas/login";
import { registro } from "../vistas/registro";
import { home } from "../vistas/home";

export const router = {
    home: ()=>{
        document.querySelector('main').innerHTML = home.template   
        home.script()  
    },
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
        console.log('cargando adminUsuarios');
        document.querySelector('main').innerHTML = adminUsuarios.template   
        adminUsuarios.script()
    },
    registro: ()=>{
        document.querySelector('main').innerHTML = registro.template   
        registro.script()
    }
}