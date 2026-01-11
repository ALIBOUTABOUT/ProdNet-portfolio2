import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

/**
 * Footer - Minimal editorial style
 */
const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${isRTL ? styles.rtl : ''}`}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logoMark}>P</span>
            <span className={styles.logoText}>ProdNet</span>
          </div>
          <p className={styles.tagline}>{t('footer.context')}</p>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.credit}>
            UDL-SBA — Informatics Students
          </p>
          <p className={styles.copyright}>
            © {currentYear} {t('footer.project')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
