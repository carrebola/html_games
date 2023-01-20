
import { router } from "../componentes/router";
import { usuari } from "../funciones/usuari";
import { mostraTaulaAdmin } from "../funciones/mostraTaulaAdmin";
import { ls } from "../funciones/ls";
const datos = ls.getDades()
console.log('leyendo usuaiors', datos);

export const adminUsuarios = {
    template: 
`
<h2>Admin Usuarios</h2>
<table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nick</th>

                <th scope="col">Avatar</th>
                <th scope="col">punts</th>
                <th scope="col">Fecha registro</th>
                <th scope="col">Fecha Nacimiento</th>
                <th scope="col">Edad</th>
                <td></td>
                <td></td>
            </tr>
        </thead>
        <tbody>
        </tbody>
  
</table>

`,
script: ()=>{
  document.querySelector('tbody').innerHTML = mostraTaulaAdmin(ls.getDades());
   //Observadores
  document.querySelector('table').addEventListener('click',(e)=>{
    let id = e.target.dataset.id

    if(e.target.classList.contains('eliminar')){
          alert(usuari.delete(id).missatge)
          //document.querySelector('tbody').innerHTML = mostraTaulaAdmin(ls.getDades());
          router.adminUsuarios()
    }
  
    if(e.target.classList.contains('editar')){
      let id = e.target.dataset.id
      router.editar(id)
    }
})
  
}
}