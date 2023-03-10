
//mostraTaula
import multiavatar from '@multiavatar/multiavatar/esm'
import { modificaData } from "./modificaData";
import { edat } from "./edat";
import { ls } from "./ls";

export const mostraTaulaAdmin = ()=>{
    var dades =  ls.getDades()

    var taula = ``
    dades.forEach(element => {
        taula+=`
            <tr class="" data-id = "${element.id}">
                <td>${element.id}</td>
                <td>${element.nick}</td>
                <td>
                    ${multiavatar(element.nick)}
                </td>
                <td>${element.punts}</td>
                <td>${element.dataRegistre}</td>
                <td>${element.dataNeixement}</td>
                <td>${edat(element.dataNeixement)}</td>
                <td><button id="eliminarUsuario" data-id="${element.id}" type="button" class="eliminar btn btn-danger">Eliminar</button></td>
                <td><button id="editarUsuario" data-id="${element.id}" type="button" class="editar btn btn-info">Editar</button></td>
            </tr>
        `
    })
    taula+=`
        </tbody>
	</table>
	
    `
    return taula
}