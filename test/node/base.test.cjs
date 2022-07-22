const { dirname, filename } = require('../../dist/cjs/index.cjs');
const { expect } = require('chai');

describe('Node.js CJS', () => {
    it('dirname() should return the same string as __dirname', function () {
        console.debug("\tdirname() \t->", dirname());
        console.debug("\t__dirname \t->", __dirname);
        expect(dirname()).to.equal(__dirname);
    });

    it('filename() should return the same string as __filename', function () {
        console.debug("\filename() \t->", filename());
        console.debug("\__filename \t->", __filename);
        expect(filename()).to.equal(__filename);
    });
});
