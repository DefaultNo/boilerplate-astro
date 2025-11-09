import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import type { AstroUserConfig } from 'astro'

export function createIntegrations(): AstroUserConfig['integrations'] {
  return [
    react(),
    mdx(),
  ]
}

