import styles from "./VideogameDetailPage.module.css";
import { useState } from "react";

export function VideogameDetailPage() {

    const {game,isLoading} = useState();

    return (
        <div className={styles.container}>
        <div className={styles.details}>
            <h1 className={styles.title}>{game.titulo}</h1>
            <p className={styles.info}>Descripcion: {game.descipcion}</p>
            <p className={styles.info}>Genero: {game.genero}</p>
        </div>
        </div>
    );
    }