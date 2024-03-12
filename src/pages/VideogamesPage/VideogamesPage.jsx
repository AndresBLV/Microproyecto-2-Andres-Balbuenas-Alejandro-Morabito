import styles from "./Videogames.module.css";
import { useState} from "react";
import { getGameProfile } from "../../firebase/games";

export function VideogamesPage(){

    const [game,setGame] = useState({
        titulo:"",
        descripcion:"",
        genero:"",
    })

    const [formData,setFormData] = useState({
        name:"",
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        const {name} = formData;
        const profile = await getGameProfile(name)
        if (profile === null){
            console.log('No existe')
        }else{
            setGame(profile)
        }
    };
    
    const handleOnChange = (event) => {
        const {name,value} = event.target;
        setFormData({
        ...formData,
        [name]:value,
        });
    };

    return(
        <>
        <div className={styles.container}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h1 className={styles.title}>Bienvenido!</h1>
                    <p className={styles.welcomeTxt}>
                        Realiza la busqueda de los videojuegos ofrecidos.
                    </p>

                {/* BUSQUEDA FIELD */}
                <div className={styles.inputContainer}>
                    <label htmlFor="name">
                    </label>
                    <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Eg. League of Legends"
                    onChange={handleOnChange}
                    />
                </div>
                <button type="submit" className={styles.submitBtn}>
                    Buscar
                </button>
            </form>
        </div>
        
        <div className={styles.containerdiv}>
        <div className={styles.details}>
            <h1 className={styles.title}>{game.titulo}</h1>
            <p className={styles.info}>Descripcion: {game.descripcion}</p>
            <p className={styles.info}>Genero: {game.genero}</p>
        </div>
        </div>
        </>

    )
}