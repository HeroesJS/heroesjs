import react from '@vitejs/plugin-react-swc';
import {defineConfig} from 'vite';
import {nodePolyfills} from 'vite-plugin-node-polyfills';

export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    emptyOutDir: true,
    reportCompressedSize: true,
  },
  plugins: [
    nodePolyfills({
      include: ['assert'],
    }),
    react(),
  ],
  preview: {
    host: 'localhost',
    port: 4300,
  },
  root: __dirname,
  server: {
    host: 'localhost',
    port: 4200,
    proxy: {
      '/api/saved-games': {
        configure: (proxy) =>
          proxy.on('proxyReq', (_proxyReq, _req, res) => res.setHeader('Content-Type', 'application/json').end('[]')),
        selfHandleResponse: true,
        target: '',
      },
    },
  },
  test: {
    coverage: {
      exclude: ['src/**/*.stories.{ts,tsx}'],
      include: ['src/**/*.{ts,tsx}'],
      provider: 'v8',
    },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.{ts,tsx}'],
    passWithNoTests: true,
    reporters: ['default'],
    setupFiles: ['setupTests'],
    watch: false,
  },
});
