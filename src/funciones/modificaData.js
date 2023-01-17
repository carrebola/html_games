//modificaDAta

export const modificaData = (fecha)=>{
    var horas = fecha.getHours() 
    if(fecha.getHours()<10) horas=`0${fecha.getHours()}`

    var minutos = fecha.getMinutes() 
    if(fecha.getMinutes()<10) minutos=`0${fecha.getMinutes()}`

    var segundos = fecha.getSeconds() 
    if(fecha.getSeconds()<10) segundos=`0${fecha.getSeconds()}`

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    
    const fechaTexto = `${fecha.getDate()} ${meses[fecha.getMonth()]} ${fecha.getFullYear()} - ${horas}:${minutos}:${segundos}`
    return fechaTexto

}