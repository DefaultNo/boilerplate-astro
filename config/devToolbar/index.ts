import type { AstroUserConfig } from 'astro'

export function createDevToolbarConfig(enabled: boolean): AstroUserConfig['devToolbar'] {
  return {
    enabled,
  }
}

