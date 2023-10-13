import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path?.resolve(__dirname, './src')
    }
  },
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true,
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
});
