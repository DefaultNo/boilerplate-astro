import { LOCALES, LOCALE_LABELS, type Locale } from '@/config/i18n'
import { getLocalizedPath } from '@/shared/lib'
import './language-switcher.css'

interface LanguageSwitcherProps {
  currentLocale: Locale
  currentPath?: string
}

export function LanguageSwitcher({
  currentLocale,
  currentPath = '',
}: LanguageSwitcherProps) {
  return (
    <div className="language-switcher">
      <select
        id="language-select"
        className="language-switcher__select"
        value={currentLocale}
        onChange={(e) => {
          const newLocale = e.target.value as Locale
          const newPath = getLocalizedPath(newLocale, currentPath)

          window.location.href = newPath
        }}
      >
        {LOCALES.map((locale) => (
          <option key={locale} value={locale}>
            {LOCALE_LABELS[locale]}
          </option>
        ))}
      </select>
    </div>
  )
}
