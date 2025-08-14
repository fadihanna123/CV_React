import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/',
  assetsInclude: ['**/*.PNG'],
  build: {
    sourcemap: false,
    outDir: 'build',
    chunkSizeWarningLimit: 1600,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
    open: false,
    host: true,
  },
});
