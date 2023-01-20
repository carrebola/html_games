export const router = {
    editar: (id)=>{
        console.log('cargando editar');
    },
    login: ()=>{
        console.log('cargando login');
        document.querySelector('main').innerHTML = login.template   
        login.script()  
    },
}