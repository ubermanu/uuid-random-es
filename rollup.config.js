import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  {
    input: './src/uuid.js',
    output: {
      format: 'umd',
      file: pkg.main,
      name: 'uuid',
    },
    plugins: [terser()],
  },
  {
    input: './src/uuid.js',
    output: {
      format: 'es',
      file: pkg.module,
    },
    plugins: [terser()],
  },
];
