import { usuarios } from "../datos/usuarios";
import { registro } from "./registro";
import { loginUsuari } from "../funciones/loginUsuari";
import { home } from "./home"
import { header } from "../componentes/header";
import { ls } from "../funciones/ls";
import { user } from "../componentes/user";

export const login = {

template: `
<h2>Login</h2>
<div class="container">
    <div class="row">
        <div class="col-6">
        <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Ingresa tu email">
        </div>
        <div class="form-group">
          <label for="passLogin">Contraseña</label>
          <input type="password" class="form-control" id="passLogin" placeholder="Ingresa tu contraseña">
        </div>
        <div class="form-group">
          <label for="nickLogin">Nick</label>
          <input type="text" class="form-control" id="nickLogin" placeholder="Ingresa tu nick">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="rememberUser">
          <label class="form-check-label" for="rememberUser">Recordar usuario</label>
        </div>
        <button id="login" type="submit" class="login btn btn-primary">Iniciar sesión</button>
        <a id="registrarse" href="#" class="registrarse btn btn-link">Registrarse</a>
      </form>
        </div>
    </div>   


`,
script: ()=>{
    
  //login
  document.querySelector('main').addEventListener('click',(event)=>{
    event.preventDefault()
    if(event.target.classList.contains('login')){
        console.log('login');
        if(!loginUsuari().error){
          ls.setUsuariLogin(document.querySelector('#nickLogin').value)
         document.querySelector('header').innerHTML = header.template
         header.script()
         user.script()
          document.querySelector('main').innerHTML = home.template
          home.script() 
        }
       
    }
    if(event.target.classList.contains('registrarse')){
      console.log('registrarse');
      document.querySelector('main').innerHTML = registro.template
        registro.script() 
  }
   
});


}

}