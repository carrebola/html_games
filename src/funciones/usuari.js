//usuari.js
import { dades } from './dades.js'
import { ls } from './ls.js'
import { validaNouUsuari } from './validaNouUsuari.js'

export const usuari = {
    get: (nick)=>{
        const dades = ls.getDades()
        const usuarioEncontrado = dades.find(usuario => usuario.nick == nick)
        if(usuarioEncontrado){
            return  {
                error: false,
                usuari: usuarioEncontrado 
            }
        }else{
            return  {
                error: true,
                missatge: "L’usuari no existeix"
            }
        }
        
    },
    set: (usuari)=>{
        
        const valida = validaNouUsuari(usuari)
        if(valida.error){
            return {
                missatge: valida.missatge,
                error: true
            }
        }else{
            //debugger
            const dades = ls.getDades()
            dades.push(usuari)
            ls.setDades(dades)
            return {
                missatge: valida.missatge,
                error: false
            }
        }
    },
    put: (usuari)=>{
        const dades = ls.getDades()
        const index = dades.findIndex(usuario => usuario.nick == usuari.nick)
        console.log('indexOf carlos', index);
        if(index>-1){
            if(usuari.pass!="") dades[index].pass = usuari.pass
            if(usuari.dataNeixement!="") dades[index].dataNeixement = usuari.dataNeixement
            
            ls.setDades(dades)
            return  {
                error: false,
                missatge: "Dades actualitzades",
                usuari: dades[index]
            }
        }else{
            return  {
                error: true,
                missatge: "L’usuari no existeix"
            }
        }
    },
    delete: (nick)=>{
        const dades = ls.getDades()
        const indexUsuarioBorrar = dades.findIndex(usuario => usuario.nick == nick)
        const usuarioBorrar = dades.find(usuario => usuario.nick == nick)
        if(indexUsuarioBorrar!=-1){
            //Eliminamos elemento encontrado
            dades.splice(indexUsuarioBorrar,1)
            ls.setDades(dades)
            return {
                error: false,
                missatge: `L’usuari ${usuarioBorrar.nick} s’ha esborrat de la base de dades`,
                usuariEsborrat: usuarioBorrar 
            }
        }else{
            return {
                error: true,
                missatge: `L’usuari ${nick} no existeix`
            }
        }
    }
}