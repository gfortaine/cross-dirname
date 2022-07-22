#! /usr/bin/env -S deno run
import { dirname, filename } from 'https://deno.land/x/cross_dirname/mod.ts';
console.log(dirname())
console.log(filename())