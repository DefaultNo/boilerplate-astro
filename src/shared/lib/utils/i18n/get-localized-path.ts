import type { Locale } from '@/shared/config/i18n'

export function getLocalizedPath(locale: Locale, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  return `/${locale}${cleanPath ? `/${cleanPath}` : ''}`
}
