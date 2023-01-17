const h=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}};h();const y=`
<span>Anonimo</span>

`,b={datos:[{id:0,email:"johndoe@email.com",password:"password123",nick:"johndoe",name:"John",surname:"Doe",birthdate:"1990-01-01",avatar:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"},{id:1,email:"janedoe@email.com",password:"password456",nick:"janedoe",name:"Jane",surname:"Doe",birthdate:"1995-05-05",avatar:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"},{id:2,email:"bobsmith@email.com",password:"password789",nick:"bobsmith",name:"Bob",surname:"Smith",birthdate:"1985-10-10",avatar:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"}],setLocal:()=>{localStorage.setItem("usuarios",JSON.stringify(b.datos))},delete:e=>{console.log("eliminar ",e);let t=JSON.parse(localStorage.getItem("usuarios"));console.log(t),element=t.find(e=="id"),console.log(element,"borrar")}},i={getDades:()=>{var e=window.localStorage.getItem("tetris_dades")||"[]",t=JSON.parse(e);return t},setDades:e=>(window.localStorage.setItem("tetris_dades",JSON.stringify(e)),!0),setUsuariLogin:e=>(window.localStorage.setItem("tetris_usuariLogin",e),!0)};i.getDades();const k=e=>{var t=!1,a=!1,o=!1;const r=i.getDades();return e.nick.length>3&&e.nick.length<10&&(t=!0,e.pass.length>3&&e.pass.length<10&&(a=!0,r.forEach(n=>{n.nick==e.nick&&(o=!0)}))),t?a?o?{error:!0,missatge:"Aquest usuari ja existeix"}:{error:!1,missatge:`L\u2019usuari amb nick: ${e.nick} s\u2019ha creat correctament`}:{error:!0,missatge:"La contrasenya no \xE9s correcte"}:{error:!0,missatge:"El nick no \xE9s correcte"}},S={get:e=>{const a=i.getDades().find(o=>o.nick==e);return a?{error:!1,usuari:a}:{error:!0,missatge:"L\u2019usuari no existeix"}},set:e=>{const t=k(e);if(t.error)return{missatge:t.missatge,error:!0};{const a=i.getDades();return a.push(e),i.setDades(a),{missatge:t.missatge,error:!1}}},put:e=>{const t=i.getDades(),a=t.findIndex(o=>o.nick==e.nick);return console.log("indexOf carlos",a),a>-1?(e.pass!=""&&(t[a].pass=e.pass),e.dataNeixement!=""&&(t[a].dataNeixement=e.dataNeixement),i.setDades(t),{error:!1,missatge:"Dades actualitzades",usuari:t[a]}):{error:!0,missatge:"L\u2019usuari no existeix"}},delete:e=>{const t=i.getDades(),a=t.findIndex(r=>r.nick==e),o=t.find(r=>r.nick==e);return a!=-1?(t.splice(a,1),i.setDades(t),{error:!1,missatge:`L\u2019usuari ${o.nick} s\u2019ha esborrat de la base de dades`,usuariEsborrat:o}):{error:!0,missatge:`L\u2019usuari ${e} no existeix`}}},m=e=>{var t=e.getDate();e.getDate()<10&&(t=`0${e.getDate()}`);var a=e.getMonth()+1;a<10&&(a=`0${e.getMonth()}`);var o=e.getHours();e.getHours()<10&&(o=`0${e.getHours()}`);var r=e.getMinutes();e.getMinutes()<10&&(r=`0${e.getMinutes()}`);var n=e.getSeconds();return e.getSeconds()<10&&(n=`0${e.getSeconds()}`),`${e.getFullYear()}/${a}/${t} ${o}:${r}:${n}`},x=e=>e.trim().replaceAll(" ","_").toUpperCase();let c;const L=new Uint8Array(16);function D(){if(!c&&(c=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(L)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function w(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}const $=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var p={randomUUID:$};function U(e,t,a){if(p.randomUUID&&!t&&!e)return p.randomUUID();e=e||{};const o=e.random||(e.rng||D)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){a=a||0;for(let r=0;r<16;++r)t[a+r]=o[r];return t}return w(o)}const I=()=>{const e={id:U(),nick:x(document.querySelector("#nick").value),pass:document.querySelector("#pass").value,avatar:document.querySelector("#avatar").value,punts:0,dataRegistre:m(new Date),dataNeixement:m(new Date(document.querySelector("#date").value))};return S.set(e)},d={template:`
    <h2>Registro</h2>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingresa tu email">
                    </div>
                    <div class="form-group">
                        <label for="password">Contrase\xF1a</label>
                        <input type="password" class="form-control" id="pass" placeholder="Ingresa una contrase\xF1a segura">
                    </div>
                    <div class="form-group">
                        <label for="nick">Nick</label>
                        <input type="text" class="form-control" id="nick" placeholder="Elige un nick \xFAnico">
                    </div>
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre">
                    </div>
                    <div class="form-group">
                        <label for="surname">Apellidos</label>
                        <input type="text" class="form-control" id="surname" placeholder="Ingresa tus apellidos">
                    </div>
                    <div class="form-group">
                        <label for="date">Fecha de nacimiento</label>
                        <input type="date" class="form-control" id="date">
                    </div>
                    <div class="form-group">
                        <label for="avatar">Imagen de avatar</label>
                        <input type="file" class="form-control-file" id="avatar">
                    </div>
                    <button id="#submit" type="submit" class="registro btn btn-primary">Registrarse</button>
                </form>
            </div>
        </div>   
    
    
    `,script:()=>{document.querySelector("main").addEventListener("click",e=>{e.preventDefault(),e.target.classList.contains("registro")&&(console.log("registrando"),alert(I().missatge))})}},g={template:`
<h2>Login</h2>
<div class="container">
    <div class="row">
        <div class="col-6">
        <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Ingresa tu email">
        </div>
        <div class="form-group">
          <label for="password">Contrase\xF1a</label>
          <input type="password" class="form-control" id="pass" placeholder="Ingresa tu contrase\xF1a">
        </div>
        <div class="form-group">
          <label for="nick">Nick</label>
          <input type="text" class="form-control" id="nick" placeholder="Ingresa tu nick">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="rememberUser">
          <label class="form-check-label" for="rememberUser">Recordar usuario</label>
        </div>
        <button id="login" type="submit" class="btn btn-primary">Iniciar sesi\xF3n</button>
        <a id="registrarse" href="#" class="btn btn-link">Registrarse</a>
      </form>
        </div>
    </div>   


`,script:()=>{console.log("login cargado"),document.querySelector("#login").addEventListener("click",e=>{e.preventDefault(),document.querySelector("selector")}),document.querySelector("#registrarse").addEventListener("click",e=>{e.preventDefault(),console.log("registrarse"),document.querySelector("main").innerHTML=d.template,d.script()})}};var u=JSON.parse(localStorage.getItem("tetris_dades"))||[];const v={template:`
<h2>Admin Usuarios</h2>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">nick</th>
      <th scope="col">name</th>
      <th scope="col">surname</th>
      <th scope="col">birthdate</th>
      <th scope="col">avatar</th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</table>

`,script:()=>{let e="";console.log(u),u.forEach(t=>{e+=`
        <tr>
            <td>${t.id}</td>
            <td>${t.email}</td>
            <td>${t.pass}</td>
            <td>${t.nick}</td>
            <td>${t.name}</td>
            <td>${t.surname}</td>
            <td>${t.dataNeixement}</td>
            <td><img class="avatar" src="${t.avatar}"></td>
            <td><button data-id="${t.id}" type="button" class="editar btn btn-outline-primary">Editar</button></td>
            <td><button data-id="${t.id}" type="button" class="eliminar btn btn-outline-danger">Eliminar</button></td>
        </tr>`}),e+="</tr>",u.length==0&&(e="No hay usuarios registrados"),document.querySelector("tbody").innerHTML=e,document.querySelector("table").addEventListener("click",t=>{if(t.target.classList.contains("eliminar")){let a=t.target.dataset.id;console.log("eliminar",a),b.delete(a)}})}},f={template:`
    ${y}
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            
            <li class="nav-item">
            <a id="login" class="nav-link" href="#">Login</a>
            </li> 
            <li class="nav-item">
            <a id="registro" class="nav-link" href="#">Registro</a>
            </li>
            <li class="nav-item">
            <a id="adminUsuarios" class="nav-link" href="#">Admin usuarios</a>
            </li>  
        </ul>
        </div>
    </div>
    </nav>

    `,script:()=>{document.querySelector("#login").addEventListener("click",()=>{event.preventDefault(),document.querySelector("main").innerHTML=g.template,g.script()}),document.querySelector("#registro").addEventListener("click",()=>{event.preventDefault(),document.querySelector("main").innerHTML=d.template,d.script()}),document.querySelector("#adminUsuarios").addEventListener("click",()=>{event.preventDefault(),document.querySelector("main").innerHTML=v.template,v.script()})}},q=`
    footer
`,N=`
<h1>Home</h1>
`;document.querySelector("header").innerHTML=f.template;f.script();document.querySelector("footer").innerHTML=q;document.querySelector("main").innerHTML=N;
