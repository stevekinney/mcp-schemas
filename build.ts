import { $ } from 'bun';

await $`rm -rf dist`;
await $`tsc -p tsconfig.build.json`;

await Bun.build({
  entrypoints: ['src/index.ts'],
  outdir: 'dist/bun',
  sourcemap: 'inline',
  format: 'esm',
  target: 'bun',
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
