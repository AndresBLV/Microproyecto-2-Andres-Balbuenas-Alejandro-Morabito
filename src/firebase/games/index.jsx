import { query, getDocs, where,collection } from "firebase/firestore"
import {db} from "../config";

export async function getGameProfile(name){
    const userQuery = query(collection(db,'videojueogs'),where("titulo","==",name));

    const results = await getDocs(userQuery);

    if (results.size > 0){
        const games = results.docs.map(item => ({
            ...item.data(),
            id: item.id,
        }));
        const [game] = games;
        return game;
    } else{
        return null;
    }
}