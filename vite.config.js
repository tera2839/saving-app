import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'firebase',
        '@firebase/app',
        '@firebase/auth',
        '@firebase/firestore',
        '@firebase/storage',
        '@emotion/react',
        '@emotion/styled',
        '@mui/material',
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
