import { dirname, filename } from '../../dist/esm/index.mjs';
import { fileURLToPath } from "url";
import { dirname as pathDirname } from "path";
import { expect } from 'chai';

export const esmFilename = () => {
    const __filename = fileURLToPath(import.meta.url);
    return __filename;
};

export const esmDirname = () => {
    return pathDirname(esmFilename());
};

describe('Node.js ESM', () => {
    it('dirname() should return the same string as esmDirname', function () {
        console.debug("\tdirname() \t->", dirname());
        console.debug("\tesmDirname() \t->", esmDirname());
        expect(dirname()).to.equal(esmDirname(import.meta));
    });

    it('filename() should return the same string as esmFilename', function () {
        console.debug("\tfilename() \t->", filename());
        console.debug("\tesmFilename() \t->", esmFilename());
        expect(filename()).to.equal(esmFilename(import.meta));
    });
});
