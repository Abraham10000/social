import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import styles from "../styles/navbar.module.css";

const Navbar: React.FC = () => {
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

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <button className={styles.logoutButton} onClick={handleLogout} disabled={loggingOut}>
          {loggingOut ? "Déconnexion en cours..." : "Déconnexion"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
