//mostraTaula
import { modificaData } from "./modificaData";
import { edat } from "./edat";
export const mostraTaula = (dades)=>{
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
            </tr>
        `
    })
    taula+=`
        </tbody>
	</table>
	
    `
    return taula
}