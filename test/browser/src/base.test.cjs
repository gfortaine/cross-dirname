const { dirname, filename } = require('../../../dist/cjs/index.cjs');
const { expect } = require('chai');

describe('Browser CJS', () => {
    it('dirname() should be a string', function () {
        console.debug("\tdirname() \t->", dirname());
        expect(dirname()).to.be.a("string");
    });

    it('filename() should be a string', function () {
        console.debug("\tfilename() \t->", filename());
        expect(filename()).to.be.a("string");
    });

});
