
import { ls } from "../funciones/ls"

console.log(ls.getUsuariLogin());

export const user = {
    template: 
    `
<span id="user"></span>
<img id="imagenAvatar" src="" alt="">

`,
script: ()=>{
    console.log('cargando user');
    const userLogin = ls.getUsuariLogin() || 'anónimus'
    document.querySelector('#user').innerHTML = userLogin;
    //document.querySelector('#imagenAvatar').setAttribute('src');
}
}