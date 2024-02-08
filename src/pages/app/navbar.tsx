import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'; // Assurez-vous de créer ce fichier CSS pour styliser votre navbar
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();

  const isActive = (href: string): boolean => {
    return router.pathname === href;
    };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link href="/profile">
            <div className={`${styles.navLink} ${isActive('/profile') ? styles.activeNavLink : ''}`}>
              Profile
            </div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/feedback">
            <div className={`${styles.navLink} ${isActive('/feedback') ? styles.activeNavLink : ''}`}>
              Feedback
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
