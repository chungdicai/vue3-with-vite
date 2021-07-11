import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },

 server: {
    proxy: {
      '/api': {
        target: 'https://data.ntpc.gov.tw/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
