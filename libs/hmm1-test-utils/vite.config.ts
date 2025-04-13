import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import {externalizeDeps} from 'vite-plugin-externalize-deps';

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
      name: '@heroesjs/hmm1-test-utils',
    },
    reportCompressedSize: true,
  },
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
    externalizeDeps(),
  ],
  root: __dirname,
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
    watch: false,
  },
});
