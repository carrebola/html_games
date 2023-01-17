//edat()

export const edat = (dataNeixement) =>{
    //debugger
    const fechaHoy = new Date()
    const fechaN = new Date(dataNeixement)
    const fechaHoyMilis = fechaHoy.getTime()
    const fechaNMilis = fechaN.getTime()
    const edadMilis = fechaHoy.getTime() - fechaN.getTime();
    const edad = Math.floor(edadMilis/(1000*60*60*24*365))
    return edad 
}