import { usuarios } from "../datos/usuarios";
import { registro } from "./registro";

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
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="pass" placeholder="Ingresa tu contraseña">
        </div>
        <div class="form-group">
          <label for="nick">Nick</label>
          <input type="text" class="form-control" id="nick" placeholder="Ingresa tu nick">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="rememberUser">
          <label class="form-check-label" for="rememberUser">Recordar usuario</label>
        </div>
        <button id="login" type="submit" class="btn btn-primary">Iniciar sesión</button>
        <a id="registrarse" href="#" class="btn btn-link">Registrarse</a>
      </form>
        </div>
    </div>   


`,
script: ()=>{
    console.log('login cargado');
  //login
  document.querySelector('#login').addEventListener('click', (event)=>{
    event.preventDefault();
    const userId = document.querySelector('selector');  
  });


    document.querySelector('#registrarse').addEventListener('click', (event)=>{
        event.preventDefault()
        console.log('registrarse');
        document.querySelector('main').innerHTML = registro.template
        registro.script()        
    })
}

}