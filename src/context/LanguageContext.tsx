import React, { 
  createContext, 
  useContext, 
  useState, 
  useCallback, 
  useMemo,
  type ReactNode 
} from 'react';
import translations from '../i18n';
import type { 
  LanguageCode, 
  Language, 
  LanguagesMap, 
  LanguageContextValue,
  Translations
} from '../types';

// =============================================================================
// Language Configuration
// =============================================================================

export const LANGUAGES: LanguagesMap = {
  en: { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  ar: { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
};

// =============================================================================
// Context
// =============================================================================

const LanguageContext = createContext<LanguageContextValue | null>(null);

// =============================================================================
// Provider Component
// =============================================================================

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  /**
   * Translation function that navigates nested translation objects
   * using dot-notation paths (e.g., 'hero.title')
   */
  const t = useCallback((path: string): string => {
    const keys = path.split('.');
    let value: unknown = translations[language];

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key];
      } else {
        // Return the path if translation not found (for debugging)
        return path;
      }
    }

    return typeof value === 'string' ? value : path;
  }, [language]);

  /**
   * Switch the current language and update document direction
   */
  const switchLanguage = useCallback((lang: LanguageCode): void => {
    if (LANGUAGES[lang]) {
      setLanguage(lang);
      document.documentElement.dir = LANGUAGES[lang].dir;
      document.documentElement.lang = lang;
    }
  }, []);

  const currentLanguage: Language = LANGUAGES[language];
  const isRTL = currentLanguage.dir === 'rtl';

  const contextValue = useMemo<LanguageContextValue>(() => ({
    language,
    switchLanguage,
    t,
    currentLanguage,
    isRTL,
    languages: LANGUAGES,
  }), [language, switchLanguage, t, currentLanguage, isRTL]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// =============================================================================
// Custom Hook
// =============================================================================

/**
 * Hook to access the language context
 * Must be used within a LanguageProvider
 */
export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
