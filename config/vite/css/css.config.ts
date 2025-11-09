import type { ViteUserConfig } from 'astro'
import type { Environment } from '../../types'

export function createCSSConfig(environment: Environment): ViteUserConfig['css'] {
  return {
    devSourcemap: environment.isDevelopment,
    preprocessorOptions: {
      scss: {
        additionalData: ``,
      },
    },
  }
}

