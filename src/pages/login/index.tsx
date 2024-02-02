import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import Cookies from 'js-cookie'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import styles from '../../styles/login.module.css';

const LoginForm = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDC239x3b3AyxAO1c4iq_zILKDV9aZCqEc",
      authDomain: "social-73969.firebaseapp.com",
      projectId: "social-73969",
      storageBucket: "social-73969.appspot.com",
      messagingSenderId: "1059736885623",
      appId: "1:1059736885623:web:86f724a4cbc27a3d032972",
      measurementId: "G-8PHGXRW4H3"
    };
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }, []); 

  const handleFacebookLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      provider.addScope('user_posts'); // Demander l'accès aux publications de l'utilisateur
      const result = await signInWithPopup(auth, provider);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log("Token généré avec succès :", token); // Afficher le token dans la console
      const idUser = result.user.uid;
      Cookies.set('id', idUser);
      if (token) {
        Cookies.set('token', token);
      }
      router.push('/profile');
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
        console.log("L'authentification a été annulée par l'utilisateur.");
      } else {
        setLoginError(true);
      }
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
            <div className={`${styles.imageWrapper} w-100`}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aeed1fa4306d23c2ef6a1e0ee18b85766ffd2e7417569bf24150be1770bf50d?apiKey=1c9e99217dbe4efba418406c62e45be9&"
                className={`${styles.image} img-fluid`}
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
