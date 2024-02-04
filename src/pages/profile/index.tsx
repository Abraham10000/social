import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useProfile } from '../../utils/ProfileContext';
import Cookies from 'js-cookie'; 

const Profile = () => {
  const router = useRouter();
  const { profileData, setProfile } = useProfile();

  useEffect(() => {
    // Récupérer les données depuis les cookies uniquement côté client
    // Stocker les données dans le contexte du profil
    const reactionsSummary = JSON.parse(Cookies.get('reactionsSummary') || '{}');
    const feedback = JSON.parse(Cookies.get('feedback') || '{}');
    const emotionsSummary = JSON.parse(Cookies.get('emotionsSummary') || '{}');

   
    setProfile({ reactionsSummary, feedback, emotionsSummary });
  }, []); // Exécution en une seule fois lors du montage du composant

  if (!profileData) {
    return null;
  }

  return (
    <div>
      <h1>Welcome to Profile</h1>
      <div>
        <h2>Reactions Summary:</h2>
        <p>{JSON.stringify(profileData.reactionsSummary, null, 2)}</p>
      </div>

      <div>
        <h2>Feedback:</h2>
        <p>{JSON.stringify(profileData.feedback, null, 2)}</p>
      </div>

      <div>
        <h2>Emotions Summary:</h2>
        <p>{JSON.stringify(profileData.emotionsSummary, null, 2)}</p>
      </div>
    </div>
  );
};

export default Profile;
