import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
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
    outDir: 'dist',
    reportCompressedSize: true,
    rollupOptions: {
      external: [],
    },
  },
  cacheDir: '../../node_modules/.vite/libs/hmm1-core',
  plugins: [
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  root: __dirname,
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
    },
    environment: 'node',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    passWithNoTests: true,
    reporters: ['default'],
    watch: false,
  },
});
