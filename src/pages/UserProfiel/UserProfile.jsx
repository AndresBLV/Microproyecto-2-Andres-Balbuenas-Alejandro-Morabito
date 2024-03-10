import "./UserProfile.css"
import { useUser } from "../../contexts/UserContext";

export function UserProfile(){
    
    const {user,isLoading} = useUser();

    return(
        <div>
            <br></br>
            <div class="card1">
            <h2>Datos de perfil</h2>
            <br></br>
                <img src="https://cdn-icons-png.freepik.com/256/1144/1144760.png" alt="" width="100" height="100"></img>
                <br></br>
                <div class="card-body">
                    <i class="perfil"></i>
                    <table>
                        <body>
                            <tr>
                                <td>Nombre:</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Juego Favorito:</td>
                                <td>{user.game}</td>
                            </tr>
                            <tr>
                                <td>Clubes afiliados:</td>
                                <td>{user.clubes}</td>
                            </tr>
                        </body>
                    </table>
                </div>
            </div>
       
            <div class="card2">
                <br></br>
                <br></br>
                <h2>Editar datos</h2>
                <br></br>
                    <i class="Editar"></i>
                    <table>
                        <body>
                            <tr>
                                <td>Nombre</td>
                                <td>:</td>
                                <input type="text" placeholder="Nombre y Apellido"></input>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <input type="email" placeholder="Email"></input>
                            </tr>
                            <tr>
                                <td>Juego Favorito</td>
                                <td>:</td>
                                <input type="text" placeholder="Juego"></input>
                            </tr>
                            ,<center>
                            <tr>
                                <button type="submit">Confirmar</button>
                            </tr>
                            </center>
                        </body>
                    </table>
                </div>
        </div>

    
    )
}