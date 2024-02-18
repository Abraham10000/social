import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import Cookies from 'js-cookie'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import styles from '../../styles/login.module.css';
import axios from 'axios'; 
require('dotenv').config();

const LoginForm = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_APP_ID,
    };
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }, []); 

  const handleFacebookLogin = async () => {
    try {

      setLoading(true);

      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      provider.addScope('user_posts');
      const result = await signInWithPopup(auth, provider);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const facebookId = result.user.providerData.find(
        (profile) => profile.providerId === 'facebook.com'
      )?.uid;

      // Construire l'URL pour le backend avec le token et l'ID
      // Effectuer la requête vers le backend
      // Stocker les données dans les cookies
      // Rediriger vers la page Profile
      if (token) {
        const userInfoResponse = await axios.get(`https://graph.facebook.com/v19.0/me?fields=name&access_token=${token}`);
        const username = userInfoResponse.data.name;
        setUsername(username);
        Cookies.set('username', username);

        const backendUrl = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/feed-back?userId=${facebookId}&accessToken=${token}&limit=30`;
       
        const response = await axios.get(backendUrl);

        Cookies.set('reactionsSummary', JSON.stringify(response.data.reactionsSummary));
        Cookies.set('feedback', JSON.stringify(response.data.feedback));
        Cookies.set('emotionsSummary', JSON.stringify(response.data.emotionsSummary));

        router.push('/dashboard');
      }
    } catch (error: any) {
      console.error(error);
      if (
        error.code === 'auth/cancelled-popup-request' ||
        error.code === 'auth/popup-closed-by-user'
      ) {
        console.log("L'authentification a été annulée par l'utilisateur.");
      } else {
        setLoginError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
        <div className={`${styles.leftPanel} text-center`}>
            <h1 className={styles.title}>Se connecter</h1>
            {loginError && <p className="text-danger">Erreur de connexion. Veuillez réessayer.</p>} 
            <button
              type="button"
              className={`${styles.button} btn btn-primary btn-block mb-4`}
              onClick={handleFacebookLogin}
            >
              {loading ? 'Chargement...' : 'Connexion avec Facebook'}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

