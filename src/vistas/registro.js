import { creaUsuariValid } from '../funciones/creaUsuariValid'
import { modificaNick } from '../funciones/modificaNick';

import multiavatar from '@multiavatar/multiavatar/esm'

export const registro = {

    template: `
    <h2>Registro</h2>
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
                        <input type="password" class="form-control" id="pass" placeholder="Ingresa una contraseña segura">
                    </div>
                    <div class="form-group">
                        <label for="nick">Nick</label>
                        <input type="text" class="form-control" id="nick" placeholder="Elige un nick único">
                    </div>
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre">
                    </div>
                    <div class="form-group">
                        <label for="surname">Apellidos</label>
                        <input type="text" class="form-control" id="surname" placeholder="Ingresa tus apellidos">
                    </div>
                    <div class="form-group">
                        <label for="date">Fecha de nacimiento</label>
                        <input type="date" class="form-control" id="date">
                    </div>
                   <div id="avatar-url" class="mt-3">${multiavatar('anonimo')}</div> 
                    <button id="#submit" type="submit" class="mt-3 registro mt-2 btn btn-primary">Registrarse</button>
                </form>
            </div>
        </div>   
    
    
    `,
    script: ()=>{

        document.querySelector('main').addEventListener('click',(event)=>{
            event.preventDefault()
            if(event.target.classList.contains('registro')){
                console.log('registrando');
                alert(creaUsuariValid().missatge)
            }
           
        });

        document.querySelector('main').addEventListener('keydown',(event)=>{    
            if(event.target.getAttribute('id') == 'nick'){
                console.log('pulsando en  nick');
                let nick = event.target.value
                document.querySelector('#avatar-url').innerHTML = multiavatar(nick)
                
            }
        });

        document.querySelector('main').addEventListener('focusout',(event)=>{    
                console.log(event.target);
            if(event.target.getAttribute('id') == 'nick'){
                console.log('perdiendo foco de nick');
                let nick = event.target.value
                document.querySelector('#nick').value = modificaNick(nick);
                document.querySelector('#avatar-url').innerHTML = multiavatar( document.querySelector('#nick').value)
                
            }
        });

        document.querySelector('main').addEventListener('change',(event)=>{    
            if(event.target.getAttribute('id') == 'nick'){
                console.log('change nick');
                let nick = event.target.value
                document.querySelector('#avatar-url').innerHTML = multiavatar(nick)
                
            }
        });

    }
    
    }