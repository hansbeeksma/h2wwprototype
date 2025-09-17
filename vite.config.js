import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  server: {
    port: 5173,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        prototypes: './03-PROTOTYPES/index.html'
      }
    }
  },
  css: {
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  },
  define: {
    'import.meta.env.VITE_HOMEPAE%: JSON.stringify('H6WW Prototype - Anxiety-Aware AI Learning')
  }
})