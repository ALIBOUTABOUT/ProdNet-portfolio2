import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';
import styles from './Header.module.css';

/**
 * Fixed header component with logo and language switcher
 */
const Header: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <header className={`${styles.header} ${isRTL ? styles.rtl : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} aria-label="ProdNet - Home">
          <span className={styles.logoIcon} aria-hidden="true">P</span>
          <span className={styles.logoText}>ProdNet</span>
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
