export const registro = {

    template: `
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
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Ingresa una contraseña segura">
                    </div>
                    <div class="form-group">
                        <label for="nick">Nick</label>
                        <input type="text" class="form-control" id="nick" placeholder="Elige un nick único">
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
                    <button type="submit" class="btn btn-primary">Registrarse</button>
                </form>
            </div>
        </div>   
    
    
    `,
    script: ()=>{
        console.log('registro cargado');
    }
    
    }