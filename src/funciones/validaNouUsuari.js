import { ls} from "./ls.js"
const dades = ls.getDades()
//validaNouUsuari
export const validaNouUsuari = (usuari)=>{
    
    var usuarioOk = false
    var contraseñaOk = false
    var usuarioEnBD = false
    const dades = ls.getDades()    
    //si nos llega un usuario y tiene entre 4 y 9 caracteres
    if(usuari.nick.length>3 && usuari.nick.length<10){
        usuarioOk = true
        if(usuari.pass.length>3 && usuari.pass.length<10){
            contraseñaOk = true
            // buscamos en base de datos   
            dades.forEach(dada => {
                //si encuentra conincidencia 
                if(dada.nick == usuari.nick){
                    usuarioEnBD = true
                }
            }) 
        }
    } 

    if(usuarioOk){
        if(contraseñaOk){
            if(usuarioEnBD){
                return {
                        error: true,
                        missatge: "Aquest usuari ja existeix"
                    }
                
            }else{
                return  {
                    error: false,
                    missatge: `L’usuari amb nick: ${usuari.nick} s’ha creat correctament`
                }
            } 
        }
        else{
            return {
                error: true,
                missatge: "La contrasenya no és correcte"
            }
        }
    }else{
        return  {
            error: true,
            missatge: "El nick no és correcte"
        }
    } 
}