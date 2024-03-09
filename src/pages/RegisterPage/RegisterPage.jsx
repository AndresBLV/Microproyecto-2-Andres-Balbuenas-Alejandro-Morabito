
export function RegisterPage(){
    return(
    <div class="Registrarse">Registrarse
        <br></br>
        <input type="text" id="NombreInput" placeholder="Nombre"></input>
        <input type="text" id="ApellidoInput" placeholder="Apellido"></input>
        <br></br>
        <input type="text" id="CorreoInput" placeholder="Correo"></input>
        <br></br>
        <input type="text" id="ContraseñaInput" placeholder="Contraseña"></input>
        <br></br>
        <button id="btnRegistrarse" onclick=""> Registrarse</button>
        <br></br>
        <br></br>
        <button id="btnGoogle" onclick=""> Registrarse con google</button>
        <button id="btnX" onclick=""> Registrarse con X</button>
    </div>
    )
}