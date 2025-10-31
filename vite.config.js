import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  // Do not set global Content-Type headers here — that can cause HTML or other assets
  // to be served with the wrong MIME type in dev. Netlify headers are handled by netlify.toml.
})
