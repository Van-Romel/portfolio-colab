import { translations, type Locale } from './translations';

export type { Locale };
export { translations };

export const locales: Locale[] = ['en', 'pt-pt', 'pt-br', 'fr'];
export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  'en': 'English',
  'pt-pt': 'Português PT',
  'pt-br': 'Português BR',
  'fr': 'Français',
};

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'pt-pt': 'Português',
  'pt-br': 'Português (BR)',
  'fr': 'Français',
};

export const localeFlags: Record<Locale, string> = {
  'pt-pt': '\u{1F1F5}\u{1F1F9}',
  'en': '\u{1F1EC}\u{1F1E7}',
  'pt-br': '\u{1F1E7}\u{1F1F7}',
  'fr': '\u{1F1EB}\u{1F1F7}',
};

export const localeHtmlLang: Record<Locale, string> = {
  'pt-pt': 'pt-PT',
  'en': 'en',
  'pt-br': 'pt-BR',
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
