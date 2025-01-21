import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { mergeWithBaseConfig } from '../../vite.config.base';

export default mergeWithBaseConfig(
  defineConfig({
    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      emptyOutDir: true,
      lib: {
        // Could also be a dictionary or array of multiple entry points.
        entry: 'src/index.ts',
        fileName: 'index',
        // Change this to the formats you want to support.
        // Don't forget to update your package.json as well.
        formats: ['es'],
        name: 'hmm1-test-utils',
      },
      outDir: '../../dist/libs/hmm1-test-utils',
      reportCompressedSize: true,
      rollupOptions: {
        // External packages that should not be bundled into your library.
        external: ['react', 'react-dom', 'react/jsx-runtime'],
      },
    },
    cacheDir: '../../node_modules/.vite/libs/hmm1-test-utils',
    plugins: [
      react(),
      nxViteTsPaths(),
      nxCopyAssetsPlugin(['*.md']),
      dts({ entryRoot: 'src', tsconfigPath: path.join(__dirname, 'tsconfig.lib.json') }),
    ],
    root: __dirname,
    test: {
      coverage: {
        provider: 'v8',
        reportsDirectory: '../../coverage/libs/hmm1-test-utils',
      },
      environment: 'jsdom',
      globals: true,
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      passWithNoTests: true,
      reporters: ['default'],
      watch: false,
    },
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
  }),
);
