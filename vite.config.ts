import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT || '3001'),
    host: '0.0.0.0',
    proxy: {
      // Proxy API requests to local serverless function emulator or backend
      '/api': {
        target: 'http://localhost:3001', // Change to your backend port
        changeOrigin: true,
        rewrite: (path) => path,
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
