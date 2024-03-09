import { useUser } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { LOGIN_URL } from "../../constanst/urls";
import styles from "./PrivateRoute.module.css";

export function PrivateRoute({children}){
    const {user,isLoading}= useUser();

    if (isLoading) {
        return <h1 className={styles.loadingScreen}>LOADING USER...</h1>;
    }

    if (!isLoading && !user) {
        return <Navigate to={LOGIN_URL} />;
    }
    
    return children;
}