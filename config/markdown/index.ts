import type { AstroUserConfig } from 'astro'

export function createMarkdownConfig(): AstroUserConfig['markdown'] {
  return {
    syntaxHighlight: 'shiki',
    smartypants: true,
    gfm: true,
  }
}

