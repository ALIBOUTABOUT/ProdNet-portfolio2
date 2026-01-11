import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { TeamMember } from '../../types';
import styles from './Team.module.css';

/** Team members */
const TEAM_MEMBERS: (TeamMember & { initials: string })[] = [
  { name: 'Ali Boutabout', initials: 'AB' },
  { name: 'Bouremana Sara', initials: 'BS' },
  { name: 'Abusaada Mohammed', initials: 'AM' },
  { name: 'Benseba Nourhene', initials: 'BN' },
];

/**
 * Team section - Simple, elegant layout
 */
const Team: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className={`${styles.team} ${isRTL ? styles.rtl : ''}`} 
      id="team"
      aria-labelledby="team-title"
    >
      <div className={styles.container}>
        {/* Section header */}
        <header className={styles.header}>
          <span className={styles.number}>05</span>
          <div className={styles.headerText}>
            <h2 className={styles.title} id="team-title">
              {t('team.title')}
            </h2>
            <p className={styles.subtitle}>
              Informatics students at UDL-SBA, Algeria
            </p>
          </div>
        </header>

        {/* Team grid */}
        <div className={styles.grid}>
          {TEAM_MEMBERS.map((member) => (
            <article key={member.name} className={styles.card}>
              <div className={styles.initials}>
                {member.initials}
              </div>
              <h3 className={styles.name}>{member.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
