import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'), // Example alias for components
      '@pages': path.resolve(__dirname, './src/pages'), // Example alias for components
      '@shared': path.resolve(__dirname, './src/shared'), // Example alias for components
    },
  },
})
