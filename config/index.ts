import type { AstroUserConfig } from 'astro'

import {
  parsePorts,
  getBaseUrl,
  loadEnvironment,
  createEnvironment,
  parseAllowedHosts,
  shouldCompressHTML,
  parseAllowedDomains,
  shouldEnableDevtools,
} from './env'

import { createViteConfig } from './vite'
import { createBuildConfig } from './build'
import { createPathsConfig } from './paths'
import { createServerConfig } from './server'
import { createMarkdownConfig } from './markdown'
import { createPrefetchConfig } from './prefetch'
import { createSecurityConfig } from './security'
import { createIntegrations } from './integrations'
import { createDevToolbarConfig } from './devToolbar'

export function createAstroConfig(mode: string): AstroUserConfig {
  const env = loadEnvironment(mode)
  const environment = createEnvironment(mode)
  const { port } = parsePorts(env)

  const baseUrl = getBaseUrl(env)
  const allowedHosts = parseAllowedHosts(env)
  const compressHTML = shouldCompressHTML(env)
  const enableDevtools = shouldEnableDevtools(env)
  const allowedDomains = parseAllowedDomains(env)

  return {
    ...createPathsConfig(),

    base: baseUrl,
    output: 'static',
    scopedStyleStrategy: 'attribute',
    compressHTML,
    trailingSlash: 'never',

    server: createServerConfig(environment, env, port, allowedHosts),

    security: createSecurityConfig(allowedDomains),

    integrations: createIntegrations(),

    build: createBuildConfig(),

    devToolbar: createDevToolbarConfig(enableDevtools),

    prefetch: createPrefetchConfig(),

    markdown: createMarkdownConfig(),

    vite: createViteConfig(environment),
  }
}

