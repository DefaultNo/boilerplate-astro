import { DEFAULT_LOCALE, LOCALES, type Locale } from '@/config/i18n'

export function getLocaleFromUrl(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment && LOCALES.includes(firstSegment as Locale)) {
    return firstSegment as Locale
  }

  return DEFAULT_LOCALE
}
