import type { Environment, ParsedPorts } from '../types'

export { createDefines } from './defines'
export { createEnvConfig } from './schema'

function getEnv(envVars?: Record<string, string>) {
  const source = envVars || process.env

  return {
    MODE: (source['MODE'] || 'development') as Environment['mode'],
    PORT: parseInt(source['PORT'] || '3000', 10),
    PREVIEW_PORT: parseInt(source['PREVIEW_PORT'] || '4173', 10),
    BASE_URL: source['BASE_URL'] || '/',
    ENABLE_DEVTOOLS: source['ENABLE_DEVTOOLS'] === 'true',
    ALLOWED_HOSTS: source['ALLOWED_HOSTS'] || '',
    COMPRESS_HTML: source['COMPRESS_HTML'] === 'true',
    ALLOWED_DOMAINS: source['ALLOWED_DOMAINS'] || '',
  }
}

export function createEnvironment(envVars?: Record<string, string>): Environment {
  const env = getEnv(envVars)
  const mode = env.MODE

  return {
    mode,
    isStaging: mode === 'staging',
    isProduction: mode === 'production',
    isDevelopment: mode === 'development',
  }
}

export function parsePorts(envVars?: Record<string, string>): ParsedPorts {
  const env = getEnv(envVars)

  return {
    port: env.PORT,
    previewPort: env.PREVIEW_PORT,
  }
}

export function parseAllowedDomains(envVars?: Record<string, string>): Array<{ hostname: string }> {
  const env = getEnv(envVars)

  return env.ALLOWED_DOMAINS
    ? env.ALLOWED_DOMAINS.split(',')
        .map((domain: string) => domain.trim())
        .filter((domain: string) => domain.length > 0)
        .map((domain: string) => ({ hostname: domain }))
    : []
}

export function parseAllowedHosts(envVars?: Record<string, string>): string[] {
  const env = getEnv(envVars)

  return env.ALLOWED_HOSTS
    ? env.ALLOWED_HOSTS.split(',')
        .map((host: string) => host.trim())
        .filter((host: string) => host.length > 0)
    : []
}

export function getBaseUrl(envVars?: Record<string, string>): string {
  const env = getEnv(envVars)
  return env.BASE_URL
}

export function shouldCompressHTML(envVars?: Record<string, string>): boolean {
  const env = getEnv(envVars)
  return env.COMPRESS_HTML
}

export function shouldEnableDevtools(envVars?: Record<string, string>): boolean {
  const env = getEnv(envVars)
  return env.ENABLE_DEVTOOLS
}

