import { defineConfig, type ServerOptions } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

let server: ServerOptions =
{
    port: 3000,
    proxy: {
        "/api": {
            target: `https://localhost:5000`,
            changeOrigin: true,
            secure: false,
        }
    },
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tanstackRouter({ target: 'react', autoCodeSplitting: true }),
        react()
    ],
    server
})
