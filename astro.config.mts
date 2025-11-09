import { defineConfig } from 'astro/config'
import { createAstroConfig } from './config'

const mode = process.env.NODE_ENV || 'development'

export default defineConfig(createAstroConfig(mode))