import styles from "./Videogames.module.css";

export function VideogamesPage(){
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <h1 className={styles.title}>Bienvenido!</h1>
                    <p className={styles.welcomeTxt}>
                        Realiza la busqueda de los videojuegos ofrecidos.
                    </p>

                {/* BUSQUEDA FIELD */}
                <div className={styles.inputContainer}>
                    <label htmlFor="game">
                    </label>
                    <input
                    type="game"
                    name="game"
                    id="game"
                    placeholder="Eg. League of Legends"
                    />
                </div>
                <button type="submit" className={styles.submitBtn}>
                    Buscar
                </button>
            </form>
        </div>

    )
}