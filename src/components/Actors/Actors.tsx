import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { Actor } from '../../types';
import styles from './Actors.module.css';

/** Platform actors configuration */
const ACTORS: Actor[] = [
  { key: 'farmer', icon: '', color: '#2d5a27' },
  { key: 'investor', icon: '', color: '#4a7c94' },
  { key: 'expert', icon: '', color: '#8b7355' },
];

/**
 * Actors section - Minimal card layout
 */
const Actors: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className={`${styles.actors} ${isRTL ? styles.rtl : ''}`} 
      id="actors"
      aria-labelledby="actors-title"
    >
      <div className={styles.container}>
        {/* Section header */}
        <header className={styles.header}>
          <span className={styles.number}>02</span>
          <h2 className={styles.title} id="actors-title">
            {t('actors.title')}
          </h2>
        </header>

        {/* Actor cards */}
        <div className={styles.grid}>
          {ACTORS.map((actor, index) => (
            <article
              key={actor.key}
              className={styles.card}
            >
              <div 
                className={styles.accent}
                style={{ background: actor.color }}
              />
              <span className={styles.index}>0{index + 1}</span>
              <h3 className={styles.cardTitle}>
                {t(`actors.${actor.key}.title`)}
              </h3>
              <p className={styles.role}>
                {t(`actors.${actor.key}.role`)}
              </p>
              <p className={styles.value}>
                {t(`actors.${actor.key}.value`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actors;
