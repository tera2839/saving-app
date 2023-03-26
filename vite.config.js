import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    rollupOptions: {
      output: {
        mime: {
          // '.jsx'ファイルをJavaScriptモジュールとして扱うようにMIMEタイプを設定
          '.jsx': 'application/javascript'
        },
        manualChunks(id) {
          if (id.includes('.jsx')) {
            return 'jsx';
          }
        },
        chunkFileNames: 'assets/jsx/[name]-[hash].js'
      },
      external: [
        'firebase',
        '@firebase/app',
        '@firebase/auth',
        '@firebase/firestore',
        '@firebase/storage',
        '@emotion/react',
        '@emotion/styled',
        '@mui/material',
        '@mui/icons-material',
        '@emailjs/browser',
        'chart.js',
        'dayjs',
        'react',
        'react-dom',
        'react-router-dom',
        'react-firebase-hooks',
        'react-chartjs-2',
        'react-calendar'
      ]
    }
  }
})
