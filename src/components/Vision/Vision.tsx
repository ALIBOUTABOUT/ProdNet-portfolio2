import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { VisionFeatureItem } from '../../types';
import styles from './Vision.module.css';

/** Vision features */
const FEATURES: VisionFeatureItem[] = [
  { key: 'verification', icon: '' },
  { key: 'lifecycle', icon: '' },
  { key: 'validation', icon: '' },
  { key: 'scalability', icon: '' },
];

/**
 * Vision section - Timeline/roadmap style
 */
const Vision: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className={`${styles.vision} ${isRTL ? styles.rtl : ''}`} 
      id="vision"
      aria-labelledby="vision-title"
    >
      <div className={styles.container}>
        {/* Section header */}
        <header className={styles.header}>
          <span className={styles.number}>04</span>
          <div className={styles.headerText}>
            <h2 className={styles.title} id="vision-title">
              {t('vision.title')}
            </h2>
            <p className={styles.intro}>{t('vision.intro')}</p>
          </div>
        </header>

        {/* Features timeline */}
        <div className={styles.timeline}>
          {FEATURES.map((feature, index) => (
            <article key={feature.key} className={styles.item}>
              <div className={styles.itemMarker}>
                <span className={styles.dot} />
                {index < FEATURES.length - 1 && <span className={styles.line} />}
              </div>
              <div className={styles.itemContent}>
                <div className={styles.itemHead}>
                  <h3 className={styles.itemTitle}>
                    {t(`vision.features.${feature.key}.title`)}
                  </h3>
                </div>
                <p className={styles.itemText}>
                  {t(`vision.features.${feature.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
