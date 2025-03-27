import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

import { mergeWithBaseConfig } from '../../vite.config.base';

export default mergeWithBaseConfig(
  defineConfig({
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      emptyOutDir: true,
      outDir: '../../dist/apps/hmm1',
      reportCompressedSize: true,
    },
    cacheDir: '../../node_modules/.vite/apps/hmm1',
    plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
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
        provider: 'v8',
        reportsDirectory: '../../coverage/apps/hmm1',
      },
      environment: 'jsdom',
      globals: true,
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      setupFiles: ['setupTests'],
      watch: false,
    },
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
  }),
);
