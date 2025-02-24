import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

// 共享配置
const sharedConfig = {
  plugins: [resolve(), json(), commonjs(), typescript({ sourceMap: true })],
  external: ['postcss'],
};

export default [
  {
    input: `src/main.ts`,
    output: [{
      file: 'dist/safari-vh-patch.min.js',
      name: 'safari-vh-patch',
      format: 'iife',
      sourcemap: true,
      extend: true
    }],
    ...sharedConfig,
    plugins: [...sharedConfig.plugins, terser({ sourceMap: true })],
  },

  {
    input: 'src/plugin.ts',
    output: [
      {
        file: 'dist/plugin.cjs',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/plugin.mjs',
        format: 'es',
        sourcemap: true,
      }
    ],
    ...sharedConfig,
  }
];
