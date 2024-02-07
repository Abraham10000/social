import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useProfile } from '../../utils/ProfileContext';
import Cookies from 'js-cookie';
import styles from '../../styles/profile.module.css';


const Profile = () => {
  const router = useRouter();
  const { profileData, setProfile } = useProfile();

  useEffect(() => {
   
    const reactionsSummary = JSON.parse(Cookies.get('reactionsSummary') || '{}');
    const feedback = JSON.parse(Cookies.get('feedback') || '{}');
    const emotionsSummary = JSON.parse(Cookies.get('emotionsSummary') || '{}');

    setProfile({ reactionsSummary, feedback, emotionsSummary });
  }, []); // Run only once on component mount

  if (!profileData) {
    return null;
  }

  const renderReactionsSummary = () => (
    <div className={styles.summaryContainer}>
      <h2 className={styles.heading}>Reactions Summary</h2>
      <ul className={styles.summaryList}>
        <li>Likes: {profileData.reactionsSummary.totalLikes}</li>
        <li>Loves: {profileData.reactionsSummary.totalLoves}</li>
        <li>Hahas: {profileData.reactionsSummary.totalHahas}</li>
        <li>Wows: {profileData.reactionsSummary.totalWows}</li>
        <li>Sads: {profileData.reactionsSummary.totalSads}</li>
        <li>Angrys: {profileData.reactionsSummary.totalAngrys}</li>
        <li>Total Reactions: {profileData.reactionsSummary.totalReactions}</li>
      </ul>
    </div>
  );

  const renderFeedback = () => (
    <div className={styles.summaryContainer}>
      <h2 className={styles.heading}>Feedback</h2>
      <p className={styles.summaryText}>
        Score: {profileData.feedback.totalScore} - {profileData.feedback.feedback}
      </p>
    </div>
  );

  const renderEmotionsSummary = () => (
    <div className={styles.summaryContainer}>
      <h2 className={styles.heading}>Emotions Summary</h2>
      <p className={styles.summaryText}>{profileData.emotionsSummary.output}</p>
    </div>
  );

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>Welcome to Your Profile</h1>
      {renderReactionsSummary()}
      {renderFeedback()}
      {renderEmotionsSummary()}
      

    </div>
  );
};

export default Profile;
