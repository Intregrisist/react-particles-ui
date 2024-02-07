import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import postcssPresetEnv from 'postcss-preset-env';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
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
      // TODO: Enable before initial release, currently disabled for debug purposes
      // minimize: true,
      plugins: [
        postcssImport(),
        postcssNested(),
        postcssPresetEnv({
          // https://preset-env.cssdb.org/features/#stage-2
          stage: 2,
        }),
      ],
    }),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
  ],
};
