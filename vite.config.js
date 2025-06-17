import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    plugins: [
        react()
    ],
    server: {
        watch: {
         usePolling: true,
        },
        host: true, // Here
        strictPort: true,
        port: 8080
    }
})