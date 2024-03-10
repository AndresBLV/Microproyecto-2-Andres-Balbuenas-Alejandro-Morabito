import { useEffect, useState } from "react"
import { getDocs,collection } from "firebase/firestore"
import {db} from "../../firebase/config";
import "./ClubPage.css"

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
            <div className='container'>
            {
                clubes.map(club=>(
                    <div key={club.id} className="infoContainer">
                    <div className={styles.rightSideContainer}>
                    <div className={styles.infoContainer}>
                    <h2 className={styles.name}>
                        <p>Nombre: {club.nombre}</p>
                        <p>Descripcion: {club.descripcion}</p>
                        <p>Videojuegos:</p>
                            {
                                club.videojuegos.map(gameId=>(
                                    <div key={gameId}>
                                        <p>{games[gameId].titulo}</p>
                                    </div>
                                ))
                            }
                        <button>Afiliar</button>
                    </div>
                ))
            }
            </div>
        );
}