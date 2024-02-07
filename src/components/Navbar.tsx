import React from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import styles from "../styles/navbar.module.css";

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("reactionsSummary");
    Cookies.remove("feedback");
    Cookies.remove("emotionsSummary");

    router.push("/login");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
