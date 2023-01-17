import { dades } from "./dades.js"

export const validaLogin = (usuari)=>{
    //Si el nick no existeix en la base de dades
    if(usuari){
        var existeUsuario = false
        var logeado = false
        
        dades.forEach(user => {
            if(user.nick == usuari.nick){
                existeUsuario =  true
                if(user.pass == usuari.pass){
                    logeado = true
                }
            }
            else{
                return  {
                    error: true,
                    missatge: "Aquest usuari no existeix"
                }
            }
        })
        if(existeUsuario){
            if(logeado){
                return  {
                    error: false,
                    missatge: "Hola "+usuari.nick
                }
            }
            else{
                return  {
                    error: true,
                    missatge: "Contrasenya incorrecta"
                }
            }
            
        }else{
            return  {
                error: true,
                missatge: "Aquest usuari no existeix"
            }
        }
    }

}