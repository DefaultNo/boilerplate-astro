import type { AstroUserConfig } from "astro";

export const DEFAULT_LOCALE = 'en' as const

export const LOCALES = ['en', 'ru', 'uk'] as const

export type Locale = (typeof LOCALES)[number]

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
}

export function createI18nConfig(): AstroUserConfig['i18n'] {
  return {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...LOCALES],
    routing: {
      prefixDefaultLocale: true,
    },
  }
}


