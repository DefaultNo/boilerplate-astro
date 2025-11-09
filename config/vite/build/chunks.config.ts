export function createManualChunks(id: string): string | undefined {
  /* react */
  if (/\bnode_modules\/(react)\b/.test(id)) {
    return 'react-vendor'
  }

  /* astro specific */
  if (/\bnode_modules\/@astrojs\b/.test(id)) {
    return 'astro-vendor'
  }

  /* utils */
  if (/\bnode_modules\/(axios)\b/.test(id)) {
    return 'utils-vendor'
  }

  /* other */
  if (id.includes('node_modules')) {
    return 'vendor'
  }

  return undefined
}

