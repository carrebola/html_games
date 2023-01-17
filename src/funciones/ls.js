//llegeixLocalStorage()
import {dades} from './dades.js'
export const ls = {
    
    getDades: ()=>{
        var localStorageText = window.localStorage.getItem('tetris_dades') || "[]"
        var localStorageObject = JSON.parse(localStorageText)
        return localStorageObject
        //console.log(dades);
    },
    setDades: (dades)=>{
        window.localStorage.setItem('tetris_dades', JSON.stringify(dades))
        return true
    },
    setUsuariLogin: (nick)=>{
        window.localStorage.setItem('tetris_usuariLogin', nick)
        return true
    }
}