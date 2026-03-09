import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Use esbuild for faster builds, fallback to terser if needed
    minify: 'esbuild',
    // Generate source maps for debugging (disabled for production)
    sourcemap: false,
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1000,
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
    // Target modern browsers for better optimization
    target: 'esnext',
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  // Development server config
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
});
