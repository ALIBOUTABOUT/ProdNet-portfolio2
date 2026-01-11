import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Contact.module.css';

/**
 * Contact section - Clean, professional design
 */
const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className={`${styles.contact} ${isRTL ? styles.rtl : ''}`} 
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className={styles.container}>
        {/* Title */}
        <h2 className={styles.title} id="contact-title">
          {t('contact.title')}
        </h2>

        {/* Main content card */}
        <div className={styles.contentCard}>
          {/* Contact info row */}
          <div className={styles.contactRow}>
            <div className={styles.contactItem}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>{t('contact.email')}</span>
                <a href="mailto:teamprodnet@gmail.com" className={styles.contactValue}>
                  teamprodnet@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>{t('contact.phone')}</span>
                <a href="tel:+213698542327" className={styles.contactValue}>
                  0698542327
                </a>
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          {/* Message section */}
          <div className={styles.messageSection}>
            <p className={styles.message}>
              {t('contact.message')}
            </p>
            <a href="mailto:teamprodnet@gmail.com" className={styles.button}>
              {t('contact.sendMessage')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
