import { translations, type Locale } from './translations';

export type { Locale };
export { translations };

export const locales: Locale[] = ['en', 'pt', 'fr'];
export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  'en': 'English',
  'pt': 'Português',
  'fr': 'Français',
};

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'pt': 'Português',
  'fr': 'Français',
};

export const localeHtmlLang: Record<Locale, string> = {
  'en': 'en',
  'pt': 'pt',
  'fr': 'fr',
};

export function t(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const base = 'portfolio-colab';
  const filtered = segments.filter(s => s !== base);
  const first = filtered[0];
  if (first && locales.includes(first as Locale)) {
    return first as Locale;
  }
  return defaultLocale;
}
