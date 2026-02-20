import { defineConfig, type ServerOptions } from 'vite'
import react from '@vitejs/plugin-react'

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
    plugins: [react()],
    server
})
