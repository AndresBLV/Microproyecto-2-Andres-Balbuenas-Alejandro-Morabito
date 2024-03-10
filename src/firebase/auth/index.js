//TODOS LOS METODOS DE AUTENTIFICACION
import {signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAdditionalUserInfo} from "firebase/auth"
import { auth, googleProvider } from "../config";
import { createUserProfile } from "../users";

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth,googleProvider);

        const {isNewUser} = getAdditionalUserInfo(result);  

        if(isNewUser){
            await createUserProfile(result.user.uid,{
                email: result.user.email,
                name: result.user.displayName,
                game:'',
                clubes:[],   
            })
        }

    } catch (error) {
        console.error(error);
    }
};

export const registerInWithEmailAndPassword = async (email,password,extraData) => {
    try {
        const result = await createUserWithEmailAndPassword(auth,email,password);
        console.log("REGISTER EMAIL AND PASSWORD", result)
        await createUserProfile(result.user.uid,{
            email,
            ...extraData,
        });
    } catch (error) {
        console.error("REGISTER FAILED", { error });
    }
};

export const loginInWithEmailAndPassword = async (email,password) => {
    try {
        const result = await signInWithEmailAndPassword(auth,email,password)   
    } catch (error) {
        console.error("LOGIN FAILED", { error });
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log("SIGN OUT FAILED", { error });
    }
};