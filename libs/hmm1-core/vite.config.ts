import {nxCopyAssetsPlugin} from '@nx/vite/plugins/nx-copy-assets.plugin';
import * as path from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

import {mergeWithBaseConfig} from '../../vite.config.base';

export default mergeWithBaseConfig(
  defineConfig({
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      emptyOutDir: true,
      lib: {
        entry: 'src/index.ts',
        fileName: 'index',
        formats: ['es'],
        name: '@heroesjs/hmm1-core',
      },
      reportCompressedSize: true,
      rollupOptions: {
        external: [],
      },
    },
    cacheDir: '../../node_modules/.vite/libs/hmm1-core',
    plugins: [
      nxCopyAssetsPlugin(['*.md']),
      dts({
        entryRoot: 'src',
        tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      }),
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
  }),
);
