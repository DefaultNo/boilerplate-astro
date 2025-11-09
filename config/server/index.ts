import type { AstroUserConfig } from "astro"

import type { Environment, EnvVariables } from '../types'

export function createServerConfig(
  environment: Environment,
  env: EnvVariables,
  port: number,
  allowedHosts: string[]
): AstroUserConfig['server'] {
  return ({ command }) => ({
    port,
    host: true,
    open: environment.isDevelopment,
    allowedHosts: command === 'dev' ? true : allowedHosts.length > 0 ? allowedHosts : undefined,
  })
}

