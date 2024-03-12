import "./UserProfile.css"
import { useUser } from "../../contexts/UserContext";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import {db} from "../../firebase/config";
import styles from "./UserProfile.module.css"
import { logout } from "../../firebase/auth";




export function UserProfile(){
    

    const {user,isLoading} = useUser();

    const [formData,setFormData] = useState({
        name:'',
        email:user.email,
        game:'',
        clubes:user.clubes,
      });
    

    const handleOnChange = (event) => {
        const {name,value} = event.target;
        setFormData({
          ...formData,
          [name]:value,
        });
      };

    const onSubmit = async (event) => {
        event.preventDefault();
        const {email,password,...extraData} = formData;
        await setDoc(doc(db,"users",user.id,),formData)
    };

    const handleLogout = async () => {
        await logout();
    }

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
    
            <div>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={onSubmit}>
        
                    <p className={styles.welcomeTxt}>
                        Edita tu perfil.
                    </p>
            
                    {/* NAME FIELD */}
                    <div className={styles.inputContainer}>
                        <label htmlFor="name">
                        <span>Ingresa tu nombre completo</span>
                        </label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Eg. John Doe"
                        onChange={handleOnChange}
                        />
                    </div>
            
    
            
                    {/* VIDEOGAME FIELD */}
                    <div className={styles.inputContainer}>
                        <label htmlFor="game">
                        <span>Ingresa tu videojuego preferido</span>
                        </label>
                        <input
                        type="text"
                        name="game"
                        id="game"
                        placeholder="Eg. League of Legends"
                        onChange={handleOnChange}
                        />
                    </div>
            
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        onClick={handleLogout}
                    >
                        Entrar
                    </button>
                    </form>
            </div>
        </div>
        </div>

    
    )
}