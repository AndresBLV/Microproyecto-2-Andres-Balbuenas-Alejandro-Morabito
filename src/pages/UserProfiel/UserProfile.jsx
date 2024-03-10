export function UserProfile(){
    
    <head>    
        <style>    
            @import (UserProfile.mdule.css);
        </style>    
    </head>
    
    return(
        
        <div>
            <div>
                <ul class="tab-group">
                    <li class="tab active"><a href="Perfil">Perfil</a></li>
                    <li class="tab"><a href="Editar">Editar</a></li>
                </ul>
            </div>

            <div class="profile">
                <img src="https://cdn-icons-png.freepik.com/256/1144/1144760.png" alt="" width="100" height="100"></img>

                <div class="name">
                    Nombre Apellido
                </div>
            </div>

            

            <h2>Datos de perfil</h2>
            <div class="card">
                <div class="card-body">
                    <i class="perfil"></i>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>:</td>
                                <td>Nombre Apellido</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td>Email@Email.com</td>
                            </tr>
                            <tr>
                                <td>Juego Favorito</td>
                                <td>:</td>
                                <td>Juego</td>
                            </tr>
                            <tr>
                                <td>Clubes afiliados</td>
                                <td>:</td>
                                <td>Club</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h2>Editar datos de perfil</h2>
            <div class="card">
                <div class="card-body">
                    <i class="Editar"></i>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>:</td>
                                <input type="text" placeholder="Nombre y Apellido"></input>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <input type="text" placeholder="Email"></input>
                            </tr>
                            <tr>
                                <td>Juego Favorito</td>
                                <td>:</td>
                                <input type="text" placeholder="Juego"></input>
                            </tr>
                            <tr>
                                <td>Clubes afiliados</td>
                                <td>:</td>
                                <input type="text" placeholder="Club"></input>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    
    )
}