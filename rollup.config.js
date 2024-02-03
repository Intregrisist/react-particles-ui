import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import del from 'rollup-plugin-delete';
import path from 'path';

import pkg from './package.json';

const globals = {
  react: 'React',
  'react/jsx-runtime': 'React',
};

export default {
  input: './src/index.ts',
  external: [...Object.keys(pkg.peerDependencies || {}), 'react/jsx-runtime'],
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
      globals,
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: pkg.name,
      sourcemap: true,
      globals,
    },
    {
      file: pkg.module,
      format: 'es',
      name: pkg.name,
      sourcemap: true,
      globals,
    },
  ],
  plugins: [
    del({
      targets: 'dist/*',
    }),
    postcss({
      extract: path.resolve('dist/styles.css'),
      plugins: [
        postcssPresetEnv({
          stage: 2,
        }),
      ],
    }),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
  ],
};
