import type { AstroUserConfig } from 'astro'

export function createPrefetchConfig(): AstroUserConfig['prefetch'] {
  return {
    prefetchAll: true,
    defaultStrategy: 'hover',
  }
}

