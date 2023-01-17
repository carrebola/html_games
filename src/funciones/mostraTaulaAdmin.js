//mostraTaula
import { modificaData } from "./modificaData";
import { edat } from "./edat";
export const mostraTaulaAdmin = (dades)=>{
    console.log("mostraTaula");
    var taula = `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nick</th>

                <th scope="col">Avatar</th>
                <th scope="col">punts</th>
                <th scope="col">Fecha registro</th>
                <th scope="col">Edad</th>
                <td></td>
                <td></td>
            </tr>
        </thead>
        <tbody>
    `
    dades.forEach(element => {
        taula+=`
            <tr>
                <th scope="row">1</th>
                <td>${element.nick}</td>
                <td>
                    <img
                        class="avatar"
                        src="images/avatares/${element.avatar}"
                        alt=""
                    />
                </td>
                <td>${element.punts}</td>
                <td>${modificaData(new Date(element.dataRegistre))}</td>
                <td>${edat(element.dataNeixement)}</td>
                <td><button id="eliminarUsuario" data-nick="${element.nick}" type="button" class="btn btn-danger">Eliminar</button></td>
                <td><button id="editarUsuario" data-nick="${element.nick}" type="button" class="btn btn-info">Editar</button></td>
            </tr>
        `
    })
    taula+=`
        </tbody>
	</table>
	
    `
    return taula
}