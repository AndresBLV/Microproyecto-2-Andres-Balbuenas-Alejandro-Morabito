import { useEffect, useState } from "react"
import { getDocs,collection } from "firebase/firestore"
import {db} from "../../firebase/config";
import styles from "./ClubPage.module.css"
import { Link, useNavigate } from "react-router-dom";


export function ClubPage(){

    const [clubes,setClubes] = useState([]);

    const [games,setGames] = useState([])


    useEffect(()=> {
        const getGames = async ()=> {
            try {
                const querySnapshot = await getDocs(collection(db,'videojueogs'))
                const docs = []
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(),id:doc.id})
                })
                setGames(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getGames()
    },[])

    useEffect(()=> {
        const getClubes = async ()=> {
            try {
                const querySnapshot = await getDocs(collection(db,'clubes'))
                const docs = []
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(),id:doc.id})
                })
                setClubes(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getClubes()
    },[])

    return (
            <>

            <div className={styles.container}>
            {
                clubes.map(club=>(
                    <div className={styles.rightSideContainer}>
                    <div key={club.id} className={styles.infoContainer}>
                        <div className={styles.infoContainer}>
                            <h2 className={styles.name}>{club.nombre}</h2>
                        </div>
                        <div className={styles.infoContainer}>
                            <h3 className={styles.subtitle}>Descripcion:</h3>
                            <h3 className={styles.subtitleInfo}>{club.descripcion}</h3>
                        </div>
                        <div className={styles.infoContainer}>
                        <h3 className={styles.subtitle}>Videojuegos:</h3>
                            {
                                club.videojuegos.map(gameId=>(
                                    <div key={gameId} className={styles.infoContainer}>
                                        <h3 className={styles.subtitleInfo}>{games[gameId].titulo}</h3>
                                    </div>
                                ))
                            }
                        <div className={styles.infoContainer}>
                        <Link >
                        <span className={styles.redirectLink}>Descripcion Juegos</span>
                        </Link>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Afiliar</button>
                        </div>
                    </div>
                    </div>
                ))
            }
            </div>
            </>
        );
}