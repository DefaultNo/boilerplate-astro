import { loadEnv } from 'vite'
import type { Environment, EnvVariables, ParsedPorts } from '../types'

export { createDefines } from './defines'

export function loadEnvironment(mode: string): EnvVariables {
  return loadEnv(mode, process.cwd(), '') as EnvVariables
}

export function createEnvironment(mode: string): Environment {
  return {
    mode,
    isStaging: mode === 'staging',
    isProduction: mode === 'production',
    isDevelopment: mode === 'development',
  }
}

export function parsePorts(env: EnvVariables): ParsedPorts {
  const port = parseInt(env.ASTRO_PORT) || 3000
  const previewPort = parseInt(env.ASTRO_PREVIEW_PORT as string) || 4173

  return {
    port,
    previewPort,
  }
}

export function parseAllowedDomains(env: EnvVariables): Array<{ hostname: string }> {
  return env.ASTRO_ALLOWED_DOMAINS
    ? env.ASTRO_ALLOWED_DOMAINS.split(',').map(domain => ({
        hostname: domain.trim()
      }))
    : []
}

export function parseAllowedHosts(env: EnvVariables): string[] {
  return env.ASTRO_ALLOWED_HOSTS
    ? env.ASTRO_ALLOWED_HOSTS.split(',').map(host => host.trim())
    : []
}

export function getBaseUrl(env: EnvVariables): string {
  return env.ASTRO_BASE_URL || '/'
}

export function shouldCompressHTML(env: EnvVariables): boolean {
  return env.ASTRO_COMPRESS_HTML === 'true'
}

export function shouldEnableDevtools(env: EnvVariables): boolean {
  return env.ASTRO_DEVTOOLS === 'true'
}

