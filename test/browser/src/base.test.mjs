import { dirname, filename } from '../../../dist/esm/index.mjs';
import { expect } from 'chai';

describe('Browser ESM', () => {
    it('dirname() should be a string', function () {
        console.debug("\tdirname() \t->", dirname());
        expect(dirname()).to.be.a("string");
    });

    it('filename() should be a string', function () {
        console.debug("\tfilename() \t->", filename());
        expect(filename()).to.be.a("string");
    });

});
