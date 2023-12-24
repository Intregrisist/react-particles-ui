import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

const globals = {
  react: 'React',
}

export default {
  input: './src/index.ts',
  external: [...Object.keys(pkg.peerDependencies || {})],
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: pkg.name,
      globals: globals,
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: pkg.name,
      globals: globals,
    },
    {
      file: pkg.module,
      format: 'es',
      name: pkg.name,
      globals: globals,
    },
  ],
  plugins: [typescript()],
}
