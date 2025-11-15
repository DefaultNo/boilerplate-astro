import { loadEnv } from 'vite'
import { defineConfig } from 'astro/config'

import { createAstroConfig } from './config'

const env = loadEnv(process.env['MODE'] || 'development', process.cwd(), '')

export default defineConfig(createAstroConfig(env))