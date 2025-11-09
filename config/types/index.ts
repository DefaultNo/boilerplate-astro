export interface Environment {
  mode: string
  isStaging: boolean
  isProduction: boolean
  isDevelopment: boolean
}

export interface EnvVariables {
  ASTRO_PORT: string
  ASTRO_BASE_URL: string
  ASTRO_DEVTOOLS: string
  ASTRO_ALLOWED_HOSTS: string
  ASTRO_COMPRESS_HTML: string
  ASTRO_ALLOWED_DOMAINS: string
  [key: string]: string | undefined
}

export interface ParsedPorts {
  port: number
  previewPort: number
}
