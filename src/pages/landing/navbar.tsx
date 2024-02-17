import React from 'react';
import Image from "next/image";
import styles from '../../styles/landing.module.css';

interface NavBarProps {
  title: string;
  iconSrc: string;
}

const NavBar: React.FC<NavBarProps> = ({ title, iconSrc }) => {
  return (
    <div className={`${styles.navbar} navbar`}>
          <div className={`${styles.headApp} headApp`}>
          <div className={`${styles.iconApp} iconApp`} >
              <Image src={iconSrc} alt="Icon app" width={50} height={50}/>
            </div>
              <div className={`${styles.titleContainer}`}><p className="title-app">{title}</p></div>
          </div>
        </div>
  );
};

export default NavBar;
