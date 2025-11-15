import eslint from "@eslint/js"
import { defineConfig } from "eslint/config"

export default defineConfig([
    {
        files: ['src/**/*.{js,ts,jsx,tsx}'],
        plugins: {
            eslint
        },
        extends: [
            eslint.configs.recommended
        ]
    }
])