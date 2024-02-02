import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import Cookies from 'js-cookie'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import styles from '../../styles/login.module.css'

const firebaseConfig = {
  apiKey: "AIzaSyDieTZ3ouciT5TcNQzB_GDmaFVl-WIDp_c",
  authDomain: "noble-maxim-399517.firebaseapp.com",
  projectId: "noble-maxim-399517",
  storageBucket: "noble-maxim-399517.appspot.com",
  messagingSenderId: "744626026334",
  appId: "1:744626026334:web:cf8d84e550fe14d5df41cf",
  measurementId: "G-E3JTJ4W88K"
};

const app = initializeApp(firebaseConfig);

const LoginForm = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      getAnalytics(app);
    }
  }, []); // Utilisez un effet pour initialiser Analytics après le rendu initial

  const handleFacebookLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      provider.addScope('user_posts'); // Demander l'accès aux publications de l'utilisateur
      const result = await signInWithPopup(auth, provider);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const idUser = result.user.uid;
      Cookies.set('id', idUser);
      if (token) {
        Cookies.set('token', token);
      }
      router.push('/profile');
    } catch (error) {
      console.error(error);
      setLoginError(true);
    }
  };
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className={`${styles.leftPanel} text-center`}>
            <h1 className={styles.title}>Se connecter</h1>
            <button
              type="button"
              className={`${styles.button} btn btn-primary btn-block mb-4`}
              onClick={handleFacebookLogin}
            >
              Connexion avec Facebook
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className={`${styles.rightPanel} d-flex align-items-center justify-content-center`}>
            <div className={`${styles.imageWrapper} w-100`}> {/* Ajout de la classe w-100 pour occuper toute la largeur */}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aeed1fa4306d23c2ef6a1e0ee18b85766ffd2e7417569bf24150be1770bf50d?apiKey=1c9e99217dbe4efba418406c62e45be9&"
                className={`${styles.image} img-fluid`} // Ajout de la classe img-fluid pour rendre l'image responsive
                alt="Image"
              />
            </div>
          </div>
          <div className={`${styles.rightPanel}`}>
            <div className={styles.description}>
              Plongez dans une exploration introspective et découvrez comment vos
              interactions sur Facebook influencent votre bien-être émotionnel.
            </div>
            <div className={styles.additionalInfo}>
              Morbi in nibh aliquam consequat sed at et phasellus eros. Eget in
              dolor mattis{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
};

export default LoginForm;
