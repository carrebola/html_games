//usuarios de ejemplo que cargamos en localstorage, si no hay ya datos, para hacer pruebas 


const usuarios = [
    {
      email: "johndoe@email.com",
      password: "password123",
      nick: "johndoe",
      name: "John",
      surname: "Doe",
      birthdate: "1990-01-01",
      avatar: "https://www.example.com/avatar1.png",
    },
    {
      email: "janedoe@email.com",
      password: "password456",
      nick: "janedoe",
      name: "Jane",
      surname: "Doe",
      birthdate: "1995-05-05",
      avatar: "https://www.example.com/avatar2.png",
    },
    {
      email: "bobsmith@email.com",
      password: "password789",
      nick: "bobsmith",
      name: "Bob",
      surname: "Smith",
      birthdate: "1985-10-10",
      avatar: "https://www.example.com/avatar3.png",
    }
  ]
  
  //
  export const setLocal = ()=>{
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }
  