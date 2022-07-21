const { dirname } = require('../../../dist/cjs/index.cjs');
const { expect } = require('chai');

describe('Browser CJS', () => {
    it('dirname() should be a string', function () {
        console.debug("\tdirname() \t->", dirname());
        expect(dirname()).to.be.a("string");
    });

});
