export interface Environment {
  mode: 'development' | 'staging' | 'production'
  isStaging: boolean
  isProduction: boolean
  isDevelopment: boolean
}

export interface ParsedPorts {
  port: number
  previewPort: number
}
