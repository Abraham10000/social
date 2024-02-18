import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useProfile } from "../../utils/ProfileContext";
import Cookies from "js-cookie";
import styles from "../../styles/profile.module.css";
import Navbar from "@/components/Navbar";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const router = useRouter();
  const { profileData, setProfile } = useProfile();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        const username = Cookies.get("username")
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
    const ctx = document.getElementById("reactionsChart") as HTMLCanvasElement;
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
    <div className="container">
      <Navbar />
      <h1 className={styles.title}>Welcome to Your Profile</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reactions Summary</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <span
                    className={styles.dot}
                    style={{ backgroundColor: "#4267B2" }}
                  ></span>{" "}
                  Likes: {profileData.reactionsSummary.totalLikes}
                </li>
                <li className="list-group-item">
                  <span
                    className={styles.dot}
                    style={{ backgroundColor: "#FD7D84" }}
                  ></span>{" "}
                  Loves: {profileData.reactionsSummary.totalLoves}
                </li>
                <li className="list-group-item">
                  <span
                    className={styles.dot}
                    style={{ backgroundColor: "#1AA1F2" }}
                  ></span>{" "}
                  Hahas: {profileData.reactionsSummary.totalHahas}
                </li>
                <li className="list-group-item">
                  <span
                    className={styles.dot}
                    style={{ backgroundColor: "#FAB81E" }}
                  ></span>{" "}
                  Wows: {profileData.reactionsSummary.totalWows}
                </li>
                <li className="list-group-item">
                  <span
                    className={styles.dot}
                    style={{ backgroundColor: "#FFAC53" }}
                  ></span>{" "}
                  Sads: {profileData.reactionsSummary.totalSads}
                </li>
                <li className="list-group-item">
                  <span
                    className={styles.dot}
                    style={{ backgroundColor: "#E1306C" }}
                  ></span>{" "}
                  Angrys: {profileData.reactionsSummary.totalAngrys}
                </li>
                <li className="list-group-item">
                  Total Reactions: {profileData.reactionsSummary.totalReactions}
                </li>
              </ul>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Feedback</h5>
              <p className="card-text">
                Score: {profileData.feedback.totalScore} -{" "}
                {profileData.feedback.feedback}
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Emotions Summary</h5>
              <p className="card-text">{profileData.emotionsSummary.output}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.reactionsChartContainer}>
            <canvas
              id="reactionsChart"
              className={styles.reactionsChart}
              width="400"
              height="400"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
