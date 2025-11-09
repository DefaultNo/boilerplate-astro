import type { ViteUserConfig } from 'astro'
import type { Environment } from '../../types'
import { createManualChunks } from './chunks.config'
import { createAssetFileNames } from './assets.config'

export function createBuildConfig(
  environment: Environment,
): ViteUserConfig['build'] {
  const sourcemap = environment.isDevelopment || environment.isStaging

  return {
    target: 'es2022',
    cssCodeSplit: true,
    sourcemap,
    minify: environment.isProduction ? 'esbuild' : false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: environment.isDevelopment
          ? 'assets/js/[name].js'
          : 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/chunks/[name]-[hash].js',
        assetFileNames: createAssetFileNames,
        manualChunks: environment.isProduction ? createManualChunks : undefined,
      },
    },
  }
}

