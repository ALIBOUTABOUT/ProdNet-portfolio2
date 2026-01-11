import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

/** External video URL - Google Drive link */
const DEMO_VIDEO_URL = 'https://drive.google.com/drive/folders/1LzeXLTMLfq1r188U3VLFHrszGU7v3dxN';

/**
 * Hero section component
 * Editorial magazine-style hero with asymmetric layout
 */
const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className={`${styles.hero} ${isRTL ? styles.rtl : ''}`} id="hero">
      {/* Animated Background */}
      <div className={styles.animatedBg}>
        <div className={styles.shape1} />
        <div className={styles.shape2} />
        <div className={styles.shape3} />
        <div className={styles.shape4} />
        <div className={styles.shape5} />
      </div>
      
      <div className={styles.container}>
        {/* Editorial Label */}
        <div className={styles.eyebrow}>
          <span className={styles.line} />
          <span className={styles.label}>University Project 2025</span>
        </div>

        {/* Main Headline */}
        <h1 className={styles.title}>
          <span className={styles.titleLine}>{t('hero.title')}</span>
        </h1>

        {/* Subheadline */}
        <p className={styles.subtitle}>{t('hero.tagline')}</p>

        {/* CTA Section */}
        <div className={styles.actions}>
          <a
            href={DEMO_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            <span className={styles.btnIcon}>▶</span>
            <span>{t('hero.watchDemo')}</span>
          </a>
          <span className={styles.duration}>{t('hero.videoDuration')}</span>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollHint}>
          <span className={styles.scrollText}>Scroll to explore</span>
          <span className={styles.scrollArrow}>↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
