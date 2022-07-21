#! /usr/bin/env node
const { build } = require("esbuild");
const dirname = require("cross-dirname");

const _dirname = dirname();

build({
    entryPoints: [_dirname + '/src/dirname.test.mjs'],
    outdir: _dirname,
    bundle: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    format: 'iife',
})