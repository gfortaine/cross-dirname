#! /usr/bin/env node
const { build } = require("esbuild");
const { dirname } = require("cross-dirname");

const _dirname = dirname();

build({
    entryPoints: [_dirname + '/src/base.test.cjs'],
    outdir: _dirname,
    bundle: true,
    format: 'iife',
})