import path from 'path'

export function createAssetFileNames(assetInfo: { name?: string }): string {
  const fileName = assetInfo.name
  if (!fileName) return 'assets/[name]-[hash][extname]'

  const ext = path.extname(fileName)

  if (ext === '.css') return 'assets/css/[name]-[hash][extname]'
  if (/\.(png|jpe?g|svg|gif|webp|avif)$/.test(ext)) return 'assets/images/[name]-[hash][extname]'
  if (/\.(woff2?|ttf|eot|otf)$/.test(ext)) return 'assets/fonts/[name]-[hash][extname]'
  if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(ext)) return 'assets/media/[name]-[hash][extname]'

  return 'assets/[ext]/[name]-[hash][extname]'
}

