import gravatar from 'gravatar'
import { router } from '../componentes/router';
import { usuari } from "../funciones/usuari";
import { mostraTaulaAdmin } from "../funciones/mostraTaulaAdmin";
import { ls } from "../funciones/ls";
const datos = ls.getDades()
console.log('leyendo usuaiors', datos);

export const adminUsuarios = {
    template: 
`
<h2>Admin Usuarios</h2>
<table class="table table-bordered table-striped border-collapsed">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nick</th>

                <th scope="col">Avatar</th>
                <th scope="col">Punts</th>
                <th scope="col">Data Registre</th>
                <th scope="col">Data neixement</th>
                <th scope="col">Edat</th>
                <td></td>
                <td></td>
            </tr>
        </thead>
        <tbody>
        </tbody>
  
</table>

`,
script: ()=>{
  
  //Pinta la tabla
  console.log(ls.getDades());
  let tabla = 'No hay datos que mostrar'
  if(ls.getDades().length > 0) tabla = mostraTaulaAdmin(ls.getDades())
  document.querySelector('tbody').innerHTML = tabla


   //Observadores
  document.querySelector('table').addEventListener('click',(e)=>{
    let id = e.target.dataset.id

    if(e.target.classList.contains('eliminar')){
          
          console.log(document.querySelector(`tr[data-id="${id}"]`));
          document.querySelector(`[data-id="${id}"]`).classList.add('oculta')
          const mensaje = usuari.delete(id).missatge
          console.log(mensaje);
          setTimeout(router.adminUsuarios,500)
          
    }
  
    if(e.target.classList.contains('editar')){
      alert('estas editando el usuario : ' + id)
      router.editar(id)
    }
})
  
}
}