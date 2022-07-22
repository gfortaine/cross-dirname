#! /usr/bin/env node
import { build } from "esbuild";
import { dirname } from "cross-dirname";
const __dirname = dirname();

await build({
    entryPoints: [__dirname + '/src/base.test.mjs'],
    outdir: __dirname,
    bundle: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    format: 'iife',
})