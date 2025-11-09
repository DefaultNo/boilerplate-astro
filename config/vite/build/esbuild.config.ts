import type { ViteUserConfig } from 'astro'
import type { Environment } from '../../types'

export function createESBuildConfig(environment: Environment): ViteUserConfig['esbuild'] {
  return {
    drop: environment.isProduction ? ['console', 'debugger'] : [],
    legalComments: 'none',
  }
}

