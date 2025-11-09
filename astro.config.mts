import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import path from "path";

const env = loadEnv(process.env.NODE_ENV as string, process.cwd(), '')

const BASE_URL = env.ASTRO_BASE_URL || '/'
const PORT = parseInt(env.ASTRO_PORT) || 3000
const COMPRESS_HTML = env.ASTRO_COMPRESS_HTML === 'true'
const DEVTOOLS = env.ASTRO_DEVTOOLS === 'true'

const ALLOWED_DOMAINS = env.ASTRO_ALLOWED_DOMAINS
    ? env.ASTRO_ALLOWED_DOMAINS.split(',').map(domain => ({ hostname: domain.trim() }))
    : [];

const ALLOWED_HOSTS = env.ASTRO_ALLOWED_HOSTS
    ? env.ASTRO_ALLOWED_HOSTS.split(',').map(host => host.trim())
    : []

export default defineConfig({
  root: '.',
  base: BASE_URL,
  output: 'static',
  srcDir: './src',
  outDir: './build',
  publicDir: './public',
  cacheDir: './node_modules/.astro',
  scopedStyleStrategy: 'attribute',
  compressHTML: COMPRESS_HTML,
  trailingSlash: 'never',
  server: ({command}) => ({
    open: true,
    host: true,
    port: PORT,
    allowedHosts: command === 'dev' ? true : ALLOWED_HOSTS
  }),
  security: {
    allowedDomains: ALLOWED_DOMAINS,
    checkOrigin: true,
  },
  integrations: [
      react(),
      mdx()
  ],
  build: {
    concurrency: 1,
    client: 'client',
    server: 'server',
    assets: 'assets',
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  devToolbar: {
    enabled: DEVTOOLS,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  markdown: {
    syntaxHighlight: 'shiki',
    smartypants: true,
    gfm: true,
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src')
      }
    }
  }
  // redirects: {}
});