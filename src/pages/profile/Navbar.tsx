// Navbar.js
import React from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import styles from '../../styles/navbar.module.css';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const router = useRouter();

  const handleLogout = () => {

    Cookies.remove('reactionsSummary');
    Cookies.remove('feedback');
    Cookies.remove('emotionsSummary');

    router.push('/login');
    
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <h1 className={styles.logo}>Votre application</h1>
        <button className={styles.logoutButton} onClick={handleLogout}>Déconnexion</button>
      </div>
    </nav>
  );
};

export default Navbar;
