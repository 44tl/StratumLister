import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    fs: {
      allow: ['..']
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        manualChunks: {
          vendor: ['marked', 'dompurify', 'highlight.js'],
        },
      },
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
  },
  resolve: {
    alias: {
      '@': '/',
    },
  },
});