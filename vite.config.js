import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/coze': {
        target: 'https://api.coze.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/coze/, ''),
      },
    },
  },
  base: './',
  build: {
    rollupOptions: {
      input: {
        preview: './component-preview.html',
      },
    },
  },
})
