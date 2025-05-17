import path from 'node:path';
import pkg from '../package.json' with { type: 'json' };

const schemas = new Bun.Glob('./src/schemas/*.ts');

type Exports = {
  bun: `./src/${string}.ts`;
  types: `./dist/${string}.d.ts`;
  import: `./dist/${string}.js`;
};

const exports: Record<string, Exports> = {
  '.': {
    bun: './src/index.ts',
    types: './dist/index.d.ts',
    import: './dist/index.js',
  },
};

for await (const file of schemas.scan()) {
  const schemaName = path.basename(file, '.ts');
  exports[`./${schemaName}`] = {
    bun: `./src/schemas/${schemaName}.ts`,
    types: `./dist/schemas/${schemaName}.d.ts`,
    import: `./dist/schemas/${schemaName}.js`,
  };
}

// eslint-disable-next-line prefer-template
await Bun.write('./package.json', JSON.stringify({ ...pkg, exports }, null, 2) + '\n');
