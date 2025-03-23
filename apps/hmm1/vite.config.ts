import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    emptyOutDir: true,
    outDir: 'dist',
    reportCompressedSize: true,
  },
  cacheDir: '../../node_modules/.vite/apps/hmm1',
  plugins: [react()],
  preview: {
    host: 'localhost',
    port: 4300,
  },
  root: __dirname,
  server: {
    host: 'localhost',
    port: 4200,
  },
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
    },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    passWithNoTests: true,
    reporters: ['default'],
    setupFiles: ['setupTests'],
    watch: false,
  },
});
