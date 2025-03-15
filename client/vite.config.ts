import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: false,
    outDir: 'build',
  },
  base: '/',
  server: {
    port: 3000,
    strictPort: true,
  },
  assetsInclude: ['**/*.PNG'],
});
