import type { Environment } from '../types'

export function createDefines(environment: Environment): Record<string, string> {
  return {
    __DEV__: JSON.stringify(environment.isDevelopment),
    __PROD__: JSON.stringify(environment.isProduction),
    __STAGE__: JSON.stringify(environment.isStaging),
  }
}

