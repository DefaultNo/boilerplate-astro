import { envField } from 'astro/config'
import type { AstroUserConfig } from 'astro'

export function createEnvConfig(): AstroUserConfig['env'] {
  return {
    schema: {
      MODE: envField.enum({
        context: 'server',
        access: 'public',
        values: ['development', 'staging', 'production'],
        default: 'development',
      }),
      PORT: envField.number({
        context: 'server',
        access: 'public',
        default: 3000,
        optional: true,
      }),
      PREVIEW_PORT: envField.number({
        context: 'server',
        access: 'public',
        default: 4173,
        optional: true,
      }),
      BASE_URL: envField.string({
        context: 'server',
        access: 'public',
        default: '/',
        optional: true,
      }),
      ENABLE_DEVTOOLS: envField.boolean({
        context: 'server',
        access: 'public',
        default: false,
        optional: true,
      }),
      ALLOWED_HOSTS: envField.string({
        context: 'server',
        access: 'public',
        default: '',
        optional: true,
      }),
      COMPRESS_HTML: envField.boolean({
        context: 'server',
        access: 'public',
        default: false,
        optional: true,
      }),
      ALLOWED_DOMAINS: envField.string({
        context: 'server',
        access: 'public',
        default: '',
        optional: true,
      }),
      PUBLIC_API_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },

    validateSecrets: false,
  }
}

