/**
 * Shared type definitions for ProdNet Portfolio
 * These types ensure type safety across the application
 */

// =============================================================================
// Language & Internationalization Types
// =============================================================================

/** Supported language codes */
export type LanguageCode = 'en' | 'fr' | 'ar';

/** Text direction for RTL/LTR support */
export type TextDirection = 'ltr' | 'rtl';

/** Language configuration object */
export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
  dir: TextDirection;
}

/** Map of all available languages */
export type LanguagesMap = Record<LanguageCode, Language>;

/** Translation function type */
export type TranslateFunction = (path: string) => string;

/** Language context value type */
export interface LanguageContextValue {
  language: LanguageCode;
  switchLanguage: (lang: LanguageCode) => void;
  t: TranslateFunction;
  currentLanguage: Language;
  isRTL: boolean;
  languages: LanguagesMap;
}

// =============================================================================
// Translation Structure Types
// =============================================================================

export interface HeroTranslations {
  title: string;
  tagline: string;
  videoDuration: string;
  watchDemo: string;
}

export interface OverviewTranslations {
  title: string;
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
}

export interface ActorTranslation {
  title: string;
  role: string;
  value: string;
}

export interface ActorsTranslations {
  title: string;
  farmer: ActorTranslation;
  investor: ActorTranslation;
  expert: ActorTranslation;
}

export interface ScreenshotsTranslations {
  title: string;
  farmer: string;
  investor: string;
  expert: string;
  placeholder: string;
}

export interface VisionFeature {
  title: string;
  description: string;
}

export interface VisionTranslations {
  title: string;
  intro: string;
  features: {
    verification: VisionFeature;
    lifecycle: VisionFeature;
    validation: VisionFeature;
    scalability: VisionFeature;
  };
}

export interface TeamTranslations {
  title: string;
}

export interface FooterTranslations {
  project: string;
  context: string;
}

export interface NavTranslations {
  language: string;
}

/** Complete translation file structure */
export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  overview: OverviewTranslations;
  actors: ActorsTranslations;
  screenshots: ScreenshotsTranslations;
  vision: VisionTranslations;
  team: TeamTranslations;
  footer: FooterTranslations;
}

/** All translations indexed by language code */
export type TranslationsMap = Record<LanguageCode, Translations>;

// =============================================================================
// Component Data Types
// =============================================================================

/** Actor type for the platform actors section */
export type ActorKey = 'farmer' | 'investor' | 'expert';

export interface Actor {
  key: ActorKey;
  icon: string;
  color: string;
}

/** Screenshot screen type */
export interface ScreenshotScreen {
  key: ActorKey;
  icon: string;
}

/** Vision feature type */
export type VisionFeatureKey = 'verification' | 'lifecycle' | 'validation' | 'scalability';

export interface VisionFeatureItem {
  key: VisionFeatureKey;
  icon: string;
}

/** Team member type */
export interface TeamMember {
  name: string;
}

// =============================================================================
// CSS Module Types
// =============================================================================

/** Generic CSS module type for class name mappings */
export type CSSModuleClasses = Record<string, string>;

// =============================================================================
// Component Props Types
// =============================================================================

/** Common props for section components */
export interface SectionProps {
  id?: string;
  className?: string;
}

/** Props with children */
export interface PropsWithChildren {
  children: React.ReactNode;
}
