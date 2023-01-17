//modificaDAta

export const modificaData2 = (fecha)=>{
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    var dia = fecha.getDate() 
    if(fecha.getDate()<10) dia=`0${fecha.getDate()}`

    var mes = fecha.getMonth()+1
    if(mes<10) mes = `0${fecha.getMonth()}`
    
    var horas = fecha.getHours() 
    if(fecha.getHours()<10) horas=`0${fecha.getHours()}`

    var minutos = fecha.getMinutes() 
    if(fecha.getMinutes()<10) minutos=`0${fecha.getMinutes()}`

    var segundos = fecha.getSeconds() 
    if(fecha.getSeconds()<10) segundos=`0${fecha.getSeconds()}`
    
    const fechaTexto = `${fecha.getFullYear()}/${mes}/${dia} ${horas}:${minutos}:${segundos}`
    return fechaTexto
    
}