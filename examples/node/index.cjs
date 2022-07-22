#! /usr/bin/env -S node
const { getDirname, getFilename } = require('cross-dirname');
console.log(getDirname())
console.log(getFilename())