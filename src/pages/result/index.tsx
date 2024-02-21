import styles from '../../styles/result.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { useProfile } from "../../utils/ProfileContext";
import Chart from "chart.js/auto";
import Cookies from "js-cookie";
import { useRouter } from 'next/router';

export default function Result() {
    const { profileData, setProfile } = useProfile();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [loggingOut, setLoggingOut] = useState(false); 

    const handleLogout = () => {
    setLoggingOut(true); 
    setTimeout(() => {
      Cookies.remove("reactionsSummary");
      Cookies.remove("feedback");
      Cookies.remove("emotionsSummary");
      router.replace("/login");
    }, 1000); 
  };
    useEffect(() => {
      const fetchData = async () => {
        try {
          const reactionsSummary = JSON.parse(
            Cookies.get("reactionsSummary") || "{}"
          );
          const feedback = JSON.parse(Cookies.get("feedback") || "{}");
          const emotionsSummary = JSON.parse(
            Cookies.get("emotionsSummary") || "{}"
          );
          const username = Cookies.get("username");
          
          setProfile({ reactionsSummary, feedback, emotionsSummary, username });
          setLoading(false); 
        } catch (error) {
          console.error("Error fetching profile data:", error);
          setError("Error loading profile data"); 
          setLoading(false); 
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      if (!loading && !error && profileData) {
        renderChart();
      }
    }, [loading, error, profileData]);
  
    const renderChart = () => {
      const ctx = document.getElementById("myChart") as HTMLCanvasElement;
      if (ctx && profileData) {
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Like", "Love", "Wow", "Haha", "Angry"],
            datasets: [
              {
                backgroundColor: [
                  "#4267B2",
                  "#FD7D84",
                  "#1AA1F2",
                  "#FAB81E",
                  "#FFAC53",
                ],
                data: [
                  profileData.reactionsSummary.totalLikes,
                  profileData.reactionsSummary.totalLoves,
                  profileData.reactionsSummary.totalWows,
                  profileData.reactionsSummary.totalHahas,
                  profileData.reactionsSummary.totalAngrys,
                ],
              },
            ],
          },
          options: {},
        });
      }
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!profileData) {
      return <div>Error: Profile data not available</div>;
    }
    return (
        <div className={`${styles.bodyContainer} bodyContainer`} style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <div id="component" className="container-fluid py-2">
                <div style={{display : "flex", justifyContent : "space-between"}}>
                    <p style={{width: "372px"}} className="text-primary fs-4 fw-bold font-family-Montserrat m-0 px-3 py-2">
                        SENTIMENT
                    </p>
                    <div style={{display: "flex",justifyContent: "space-between", width: "80%"}}>
                    <p className="text-center text-black fs-5 fw-bold font-family-Gotham col-xl-1 m-0 px-3 py-2">
                        Statistique
                    </p>
                    <button className={styles.logoutButton} onClick={handleLogout} disabled={loggingOut}>
                        {loggingOut ? "Déconnexion en cours..." : "Déconnexion"}
                    </button>
                </div>
                </div>
            </div>
            <div style={{display : "flex", width : "100%"}}>
                <div style={{width : "372px", height : "80vh"}} id="component" className="container-fluid py-3">
                    <div style={{height: "100%"}} className="px-1 py-1 row justify-content-between">
                        <div style={{display: "flex", flexDirection: "column", gap: "12px", justifyContent: "space-between"}}>
                            <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                                <div className="p-4 rounded-3 row align-items-center">
                                    <img style={{width: "fit-content"}} src="/chart'pie.png"/>
                                    <p className="text-black fs-6 fw-bold font-family-Gotham col-4 m-0">
                                        <a style={{textDecoration: "none"}} href="dashboard">Statistique</a>
                                    </p>
                                </div>
                                <div style={{backgroundColor: "rgb(217, 230, 243)"}} className="p-4 rounded-3 row align-items-center">
                                    <img style={{width: "fit-content"}} src="/dash.png"/>
                                    <p className="text-black fs-6 fw-bold font-family-Gotham col-4 m-0">
                                        <a style={{textDecoration: "none"}} href="result">Resultat</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.longStyle} longStyle`}>
                <div className={`${styles.longStyleChild} longStyleChild`}>
                    <p className="m-0">Votre bilan sur SENTIMENT</p>
                    <p className="m-0">{profileData.username}</p>
                </div>
                <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "24px"}}>
                    <div className={`${styles.analyse} analyse`}>
                        <p>
                            <span className="fw-bold">Feedback</span> :  <br/>
                        </p>
                        <p>Score: {profileData.feedback.totalScore} -{" "}
                            {profileData.feedback.feedback} 
                        </p>
                    </div>
                    <div className={`${styles.second}`}>
                        <p>
                        <p>
                            <span className="fw-bold">Résultat</span> : <br/>
                        </p>
                        <p>{profileData.emotionsSummary.output} </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}