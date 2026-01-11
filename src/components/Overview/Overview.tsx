import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Overview.module.css';

/**
 * Overview section - Editorial asymmetric layout
 */
const Overview: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className={`${styles.overview} ${isRTL ? styles.rtl : ''}`} 
      id="overview"
      aria-labelledby="overview-title"
    >
      <div className={styles.container}>
        {/* Section intro */}
        <header className={styles.header}>
          <span className={styles.number}>01</span>
          <h2 className={styles.title} id="overview-title">
            {t('overview.title')}
          </h2>
        </header>

        {/* Two column layout */}
        <div className={styles.columns}>
          {/* Problem */}
          <article className={styles.column}>
            <div className={styles.columnHead}>
              <span className={styles.marker} />
              <h3 className={styles.columnTitle}>{t('overview.problem.title')}</h3>
            </div>
            <p className={styles.columnText}>
              {t('overview.problem.description')}
            </p>
          </article>

          {/* Solution */}
          <article className={styles.column}>
            <div className={styles.columnHead}>
              <span className={`${styles.marker} ${styles.markerGreen}`} />
              <h3 className={styles.columnTitle}>{t('overview.solution.title')}</h3>
            </div>
            <p className={styles.columnText}>
              {t('overview.solution.description')}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Overview;
