import type { Locale } from '@/shared/config/i18n'
import type { Resources } from '@/shared/config/i18n/generated/resources.types'

const translationsCache = new Map<string, any>()

export async function loadTranslations<T = any>(
  locale: Locale,
  namespace: string,
): Promise<T> {
  const cacheKey = `${locale}:${namespace}`

  if (translationsCache.has(cacheKey)) {
    return translationsCache.get(cacheKey)
  }

  try {
    const translations = await import(
      `../../../../../public/locales/${locale}/${namespace}.json`
    )

    const data = translations.default || translations

    translationsCache.set(cacheKey, data)

    return data
  } catch (error) {
    console.error(
      `Failed to load translations for ${locale}/${namespace}:`,
      error,
    )
    throw new Error(`Translations not found: ${locale}/${namespace}`)
  }
}

function getNestedValue(obj: any, path: string): string {
  const keys = path.split('.')
  let value = obj

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      return path
    }
  }

  return typeof value === 'string' ? value : path
}

export async function createT(locale: Locale, namespace: string) {
  const translations = await loadTranslations(locale, namespace)

  return function t(key: string): string {
    return getNestedValue(translations, key)
  }
}

export async function useTranslations(locale: Locale): Promise<Resources> {
  const [common, pages] = await Promise.all([
    loadTranslations<Resources['common']>(locale, 'common'),
    loadTranslations<Resources['pages']>(locale, 'pages'),
  ])

  return {
    common,
    pages,
  }
}

