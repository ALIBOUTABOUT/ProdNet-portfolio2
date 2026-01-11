import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { ScreenshotScreen } from '../../types';
import styles from './Screenshots.module.css';

/** Screenshot screens with actual images */
const SCREENS: (ScreenshotScreen & { image: string })[] = [
  { key: 'farmer', icon: '', image: `${process.env.PUBLIC_URL}/screenshots/5931532252086995986.jpg` },
  { key: 'investor', icon: '', image: `${process.env.PUBLIC_URL}/screenshots/5931532252086995995.jpg` },
  { key: 'expert', icon: '', image: `${process.env.PUBLIC_URL}/screenshots/5931532252086996000.jpg` },
];

/**
 * Screenshots section - Gallery style layout
 * Put your screenshots in: public/screenshots/farmer.png, investor.png, expert.png
 */
const Screenshots: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className={`${styles.screenshots} ${isRTL ? styles.rtl : ''}`} 
      id="screenshots"
      aria-labelledby="screenshots-title"
    >
      <div className={styles.container}>
        {/* Section header */}
        <header className={styles.header}>
          <span className={styles.number}>03</span>
          <div className={styles.headerText}>
            <h2 className={styles.title} id="screenshots-title">
              {t('screenshots.title')}
            </h2>
            <p className={styles.subtitle}>A glimpse into the platform experience</p>
          </div>
        </header>

        {/* Gallery */}
        <div className={styles.gallery}>
          {SCREENS.map((screen, index) => (
            <figure key={screen.key} className={styles.figure}>
              <div className={styles.imageWrapper}>
                <img 
                  src={screen.image} 
                  alt={t(`screenshots.${screen.key}`)}
                  className={styles.image}
                  onError={(e) => {
                    console.error(`Failed to load image: ${screen.image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.captionNumber}>Fig. {index + 1}</span>
                <span className={styles.captionText}>
                  {t(`screenshots.${screen.key}`)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
