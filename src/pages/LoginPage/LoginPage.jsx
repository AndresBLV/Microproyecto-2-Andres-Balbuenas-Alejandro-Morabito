import styles from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { HOME_URL, REGISTER_URL  } from "../../constanst/urls";
import { useState } from "react";
import { loginInWithEmailAndPassword, singInWithGoogle } from "../../firebase/auth";


export function LoginPage(){
  
  const handleSingInWithGoogle = async () => {
    await singInWithGoogle();
    navigate(HOME_URL)
  }; 

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email:"",
    password:""
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const {email,password} = formData;
    await loginInWithEmailAndPassword(email,password)
    navigate(HOME_URL)
  };

  const handleOnChange = (event) => {
    const {name,value} = event.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  };

  return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h1 className={styles.title}>Bienvenido!</h1>
          <p className={styles.welcomeTxt}>
            Inicia sesión e inspecciona tus clubes favoritos.
          </p>
  
          {/* EMAIL FIELD */}
          <div className={styles.inputContainer}>
            <label htmlFor="email">
              <span>Ingresa tu email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Eg. john@email.com"
              onChange={handleOnChange}
            />
          </div>
  
          {/* PASSWORD FIELD */}
          <div className={styles.inputContainer}>
            <label htmlFor="password">
              <span>Ingresa tu contraseña</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              onChange={handleOnChange}
            />
          </div>
  
          <button type="submit" className={styles.submitBtn}>
            Entrar
          </button>
  
          <button
            type="button"
            className={styles.googleBtn}
            onClick={handleSingInWithGoogle}
          >
            Iniciar con google
          </button>
  
          <Link to={REGISTER_URL} className={styles.loginRedirect}>
            ¿No tienes una cuenta?{" "}
            <span className={styles.redirectLink}>Regístrate</span>
          </Link>
        </form>
      </div>
    );
}