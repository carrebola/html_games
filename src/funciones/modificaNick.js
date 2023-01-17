//modificaNick

export const modificaNick = (nick)=>{
    const nuevoNick = nick.trim().replaceAll(' ', '_').toUpperCase();
    return nuevoNick
}