import {loadEnv} from "vite";
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

const env = loadEnv(process.env.NODE_ENV as string, process.cwd(), '');

const BASE_URL = env.BASE_URL || '/';
const PORT = parseInt(env.PORT) || 3000;

export default defineConfig({
  base: BASE_URL,
  trailingSlash: 'never',
  server: {
    open: true,
    port: PORT
  },
  integrations: [
      react()
  ]
});