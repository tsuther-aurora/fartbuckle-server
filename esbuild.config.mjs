import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['app/server.ts'],
  bundle: true,
  minify: true,
  platform: 'node',
  sourcemap: true,
  treeShaking: true,
  target: ['node12'],
  outfile: 'server.js',
})
