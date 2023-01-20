import { modificaData2 } from '../funciones/modificaData2'
import { usuari } from '../funciones/usuari'
import { ls } from '../funciones/ls'
import { creaUsuariValid } from '../funciones/creaUsuariValid'
export const editarUsuario = {

    template: `
    <h2>Editar Usuario</h2>
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
                    <div class="form-group">
                        <label for="avatar">Imagen de avatar</label>
                        <select id="avatar">
                            <option value="https://cdn-icons-png.flaticon.com/128/4140/4140061.png">avatar1.jpg</option>
                            <option value="https://cdn-icons-png.flaticon.com/512/1993/1993341.png">avatar2.jpg</option>
                            <option value="https://cdn-icons-png.flaticon.com/512/4139/4139993.png">avatar3.jpg</option>
                        </select>
                    </div>
                    <button id="#submit" type="submit" class="actualizar btn btn-primary">Actualizar</button>
                </form>
            </div>
        </div>   
    
    
    `,
    script: (id)=>{
        const user = usuari.get(id).usuari
        const dataNeixement = modificaData2(new Date(user.dataNeixement));
        //insertamos datos en inputs
        document.querySelector('#email').value = user.email
        document.querySelector('#pass').value = user.pass
        document.querySelector('#nick').value = user.nick
        document.querySelector('#name').value = user.nom
        document.querySelector('#surname').value = user.cognoms
        document.querySelector('#date').value = dataNeixement
        document.querySelector('#avatar').value = user.avatar


        document.querySelector('main').addEventListener('click',(event)=>{
            event.preventDefault()
            if(event.target.classList.contains('actualizar')){
                console.log('actualizando');
                const usuario = {
                    email: document.querySelector('#email').value = user.email,
                    pass: document.querySelector('#pass').value,
                    nick: document.querySelector('#nick').value,
                    nom: document.querySelector('#name').value,
                    cognoms: document.querySelector('#surname').value,
                    dataNeixement: document.querySelector('#date').value,
                    avatar: document.querySelector('#avatar').value
                }
                alert(usuari.put(usuario))
            }
           
        });
    }
    
    }