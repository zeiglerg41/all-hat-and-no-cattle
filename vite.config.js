import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For WordPress deployment, change this value to your subdirectory path (e.g. '/react-app/')
const WORDPRESS_PATH = '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Base path for asset URLs, set to '/' for development or a subdirectory for WordPress
  base: WORDPRESS_PATH,
  build: {
    // Output directory (dist by default)
    outDir: 'dist',
    // Generate sourcemaps for production build
    sourcemap: false,
    // Optimize output files
    minify: 'terser',
    rollupOptions: {
      output: {
        // Customize the chunk filenames to avoid caching issues
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
}); 