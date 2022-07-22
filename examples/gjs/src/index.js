#! /usr/bin/env gjs -m
import { getDirname, getFilename } from 'cross-dirname'
console.log(getDirname())
console.log(getFilename())