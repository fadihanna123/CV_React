import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const isDev = process.env.NODE_ENV === 'development';

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
    open: isDev ? true : false,
    host: true,
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem'),
    },
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
