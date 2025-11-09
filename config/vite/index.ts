import {createDefines} from "../env"
import { createCSSConfig } from './css'
import type { Environment } from '../types'
import { createBuildConfig } from './build'
import type { AstroUserConfig } from 'astro'
import { createResolveConfig } from './resolve'
import { createESBuildConfig } from './build/esbuild.config'

export function createViteConfig(
  environment: Environment,
): AstroUserConfig['vite'] {
  return {
    resolve: createResolveConfig(),

    build: createBuildConfig(environment),

    esbuild: createESBuildConfig(environment),

    optimizeDeps: {
      include: ['react'],
      exclude: [],
    },

    define: createDefines(environment),

    server: {
      fs: {
        strict: false,
      },
    },

    css: createCSSConfig(environment),
  }
}

