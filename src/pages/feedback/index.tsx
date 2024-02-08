import React, { useState, useEffect } from 'react';
import Menu from '../app/menu';

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState('');
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    // Appel à la route backend pour obtenir le feedback
    fetch(`${process.env.REACT_APP_BACKEND_URL}/feed-back?userId=yourUserId&accessToken=yourAccessToken&limit=yourLimit`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
      })
      .then(data => {
        setFeedback(data.feedback);
        setTotalScore(data.totalScore);
      })
      .catch(error => console.error('Erreur lors de la récupération du feedback :', error));
  }, []);

  return (
    <>
    <Menu></Menu>
    <div>
      <h2>Feedback :</h2>
      <p>Total de score : {totalScore}</p>
      <p>Feedback : {feedback}</p>
    </div>
    </>
  );
};

export default FeedbackComponent;
