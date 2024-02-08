import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './menu.module.css';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

interface MenuProps {
  children?: ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
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
        <li>
          <Navbar />
        </li>
      </ul>
      {children}
    </nav>
  );
};

export default Menu;
