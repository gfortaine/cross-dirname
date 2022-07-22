#! /usr/bin/env -S deno run
import { getDirname, getFilename } from 'https://deno.land/x/cross_dirname/mod.ts';
console.log(getDirname())
console.log(getFilename())