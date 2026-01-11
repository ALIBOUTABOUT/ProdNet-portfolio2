import en from './en.json';
import fr from './fr.json';
import ar from './ar.json';
import type { TranslationsMap } from '../types';

const translations: TranslationsMap = {
  en: en as TranslationsMap['en'],
  fr: fr as TranslationsMap['fr'],
  ar: ar as TranslationsMap['ar'],
};

export default translations;
