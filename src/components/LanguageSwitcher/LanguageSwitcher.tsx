import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { LanguageCode, Language } from '../../types';
import styles from './LanguageSwitcher.module.css';

/**
 * Language switcher component
 * Displays flag buttons for each available language
 */
const LanguageSwitcher: React.FC = () => {
  const { language, switchLanguage, languages, isRTL } = useLanguage();

  const handleLanguageSwitch = (langCode: LanguageCode): void => {
    switchLanguage(langCode);
  };

  return (
    <div className={`${styles.switcher} ${isRTL ? styles.rtl : ''}`} dir="ltr" role="group" aria-label="Language selector">
      {(Object.values(languages) as Language[]).map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={`${styles.button} ${language === lang.code ? styles.active : ''}`}
          onClick={() => handleLanguageSwitch(lang.code)}
          aria-label={`Switch to ${lang.name}`}
          aria-pressed={language === lang.code}
        >
          <span className={styles.flag} aria-hidden="true">{lang.flag}</span>
          <span className={styles.code}>{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
