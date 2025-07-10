import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Add this line

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'), // Now you can use 'src/...'
      '@': path.resolve(__dirname, 'src'), // Optional: allows '@/...' shorthand
    },
  },
})
