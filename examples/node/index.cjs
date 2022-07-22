#! /usr/bin/env -S node
const { dirname, filename } = require('cross-dirname');
console.log(dirname())
console.log(filename())