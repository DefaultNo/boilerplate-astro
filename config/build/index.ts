import type { AstroUserConfig } from 'astro'

export function createBuildConfig(): AstroUserConfig['build'] {
  return {
    concurrency: 1,
    client: 'client',
    server: 'server',
    assets: 'assets',
    format: 'directory',
    inlineStylesheets: 'auto',
  }
}

