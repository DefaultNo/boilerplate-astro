import type { AstroUserConfig } from 'astro'

export function createPathsConfig(): Pick<
  AstroUserConfig,
  'root' | 'srcDir' | 'outDir' | 'publicDir' | 'cacheDir'
> {
  return {
    root: '.',
    srcDir: './src',
    outDir: './build',
    publicDir: './public',
    cacheDir: './node_modules/.astro',
  }
}

