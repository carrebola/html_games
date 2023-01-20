
import { user } from "./user"
import { login } from "../vistas/login"
import { registro } from "../vistas/registro"
import { adminUsuarios } from "../vistas/adminUsuarios"

import { router } from "./router"

export const header = {

    template: `
    ${user.template}
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            
            <li class="nav-item">
            <a id="login" class="nav-link" href="#">Login</a>
            </li> 
            <li class="nav-item">
            <a id="registro" class="nav-link" href="#">Registro</a>
            </li>
            <li class="nav-item">
            <a id="adminUsuarios" class="nav-link" href="#">Admin usuarios</a>
            </li>  
        </ul>
        </div>
    </div>
    </nav>

    `,
    script: ()=> {
        //eventos para cargar vistas
        //login
        document.querySelector('#login').addEventListener('click', (event)=>{
            event.preventDefault()
            router.login()   
        })
        //registro
        document.querySelector('#registro').addEventListener('click', (event)=>{
            event.preventDefault()
            document.querySelector('main').innerHTML = registro.template        
            registro.script()
        })

        //adminUsuarios
        document.querySelector('#adminUsuarios').addEventListener('click', (event)=>{
            event.preventDefault()
            document.querySelector('main').innerHTML = adminUsuarios.template        
            adminUsuarios.script()
        })
    }
}