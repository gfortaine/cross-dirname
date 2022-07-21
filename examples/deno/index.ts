#! /usr/bin/env -S deno run
import dirname from 'https://deno.land/x/cross_dirname@v0.0.4/mod.ts';
console.log(dirname()); // outputs "/path/to/the"