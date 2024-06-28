import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    // Ensures the public directory is copied to the dist folder
    copyPublicDir: true,
  },
  // Custom hook to copy the _redirects file after build
  hooks: {
    writeBundle() {
      copyFileSync('_redirects', 'dist/_redirects')
    },
  },
})
