import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
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
        name: 'hmm1-core',
      },
      outDir: '../../dist/libs/hmm1-core',
      reportCompressedSize: true,
      rollupOptions: {
        // External packages that should not be bundled into your library.
        external: [],
      },
    },
    cacheDir: '../../node_modules/.vite/libs/hmm1-core',
    plugins: [
      nxViteTsPaths(),
      nxCopyAssetsPlugin(['*.md']),
      dts({ entryRoot: 'src', tsconfigPath: path.join(__dirname, 'tsconfig.lib.json') }),
    ],
    root: __dirname,
    test: {
      coverage: {
        provider: 'v8',
        reportsDirectory: '../../coverage/libs/hmm1-core',
      },
      environment: 'node',
      globals: true,
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      watch: false,
    },
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
  }),
);
