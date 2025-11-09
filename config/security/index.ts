import type { AstroUserConfig } from 'astro'

export function createSecurityConfig(
  allowedDomains: Array<{ hostname: string }>
): AstroUserConfig['security'] {
  return {
    allowedDomains,
    checkOrigin: true,
  }
}

