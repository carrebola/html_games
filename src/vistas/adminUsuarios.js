import { usuarios } from "../datos/usuarios";
var datos =  JSON.parse(localStorage.getItem('usuarios')) || []

export const adminUsuarios = {
    template: 
`
<h2>Admin Usuarios</h2>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">nick</th>
      <th scope="col">name</th>
      <th scope="col">surname</th>
      <th scope="col">birthdate</th>
      <th scope="col">avatar</th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</table>

`,
script: ()=>{
    let html =``
    console.log(datos);
    
    datos.forEach(element => {
        html+=`
        <tr>
            <td>${element.id}</td>
            <td>${element.email}</td>
            <td>${element.password}</td>
            <td>${element.nick}</td>
            <td>${element.name}</td>
            <td>${element.surname}</td>
            <td>${element.birthdate}</td>
            <td><img class="avatar" src="${element.avatar}"></td>
            <td><button data-id="${element.id}" type="button" class="editar btn btn-outline-primary">Editar</button></td>
            <td><button data-id="${element.id}" type="button" class="eliminar btn btn-outline-danger">Eliminar</button></td>
        </tr>`
    });
    html+=`</tr>`
    if(datos.length == 0) html = 'No hay usuarios registrados'
    document.querySelector('tbody').innerHTML = html;
    document.querySelector('table').addEventListener('click',(e)=>{
        if(e.target.classList.contains('eliminar')){
            let id = e.target.dataset.id
            console.log('eliminar', id);
            usuarios.delete(id)
        }
    }) 
}
}