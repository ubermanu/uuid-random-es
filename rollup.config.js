import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  {
    input: './src/uuid.js',
    output: {
      type: 'umd',
      file: pkg.main,
      name: 'uuid',
      sourcemap: true,
    },
    plugins: [terser()],
  },
  {
    input: './src/uuid.js',
    output: {
      type: 'es',
      file: pkg.module,
      sourcemap: true,
    },
    plugins: [terser()],
  },
];
