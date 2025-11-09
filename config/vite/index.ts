import path from 'path'
import type { AstroUserConfig } from "astro"

export function createViteConfig(): AstroUserConfig['vite'] {
  return {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },
  }
}

