import {Link} from "react-router-dom";
import { CLUB_URL, HOME_URL, LOGIN_URL, REGISTER_URL, VIDEOGAMES_URL } from "../../constanst/urls";
import "./Navbar.css";

export function Navbar(){
    return(
    <>
    <nav className="NavContainer">
        <div>
            <Link to={HOME_URL} className="styleLink">
                <span>Inicio</span>
            </Link>
            <Link to={CLUB_URL} className="styleLink">
                <span>Clubs</span>
            </Link>
            <Link to={VIDEOGAMES_URL} className="styleLink">
                <span>Videojuegos</span>
            </Link>
            <Link to={LOGIN_URL} className="styleLink">
                <span>Iniciar Sesion</span>
            </Link>
            <Link to={REGISTER_URL} className="styleLink">
                <span>Registrarse</span>
            </Link>
        </div>
    </nav>
    </>
    )
}