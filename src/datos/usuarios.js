//usuarios de ejemplo que cargamos en localstorage, si no hay ya datos, para hacer pruebas 


export const usuarios = {
  datos: [
    {
      id: 0,
      email: "johndoe@email.com",
      password: "password123",
      nick: "johndoe",
      name: "John",
      surname: "Doe",
      birthdate: "1990-01-01",
      avatar: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
    },
    {
      id: 1,
      email: "janedoe@email.com",
      password: "password456",
      nick: "janedoe",
      name: "Jane",
      surname: "Doe",
      birthdate: "1995-05-05",
      avatar: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
    },
    {
      id: 2,
      email: "bobsmith@email.com",
      password: "password789",
      nick: "bobsmith",
      name: "Bob",
      surname: "Smith",
      birthdate: "1985-10-10",
      avatar: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
    }
  ],
  
  setLocal : ()=>{
    localStorage.setItem('usuarios', JSON.stringify(usuarios.datos))
  },

  delete : (id)=>{
    console.log('eliminar ',id)
    let datos = JSON.parse(localStorage.getItem('usuarios'))
    console.log(datos);
    element = datos.find('id' == id)
    console.log(element, 'borrar');
  }
}
  