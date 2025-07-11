import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  build: {
    assetsInlineLimit: 0
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'), 
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
