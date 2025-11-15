import path from 'path'
import type { ViteUserConfig } from 'astro'

export function createResolveConfig(): ViteUserConfig['resolve'] {
  return {
    alias: createAliases(),
  }
}

function createAliases(): Record<string, string> {
  const cwd = process.cwd()

  return {
    '@/app': path.resolve(cwd, './src/app'),
    '@/pages': path.resolve(cwd, './src/pages'),
    '@/shared': path.resolve(cwd, './src/shared'),
    '@/config': path.resolve(cwd, './config'),
  }
}
