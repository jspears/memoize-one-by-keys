const mobk     = require('../src');
const {expect} = require('chai');

describe('memoize-one-by-keys', function () {
    it('should memoize', function () {
        let count = 0;
        const f   = mobk(({a = 0}) => {
            return a + count++;
        }, ['a']);

        expect(f({a: 1})).to.eql(1);
        expect(f({a: 1})).to.eql(1);
        expect(f({a: 2})).to.eql(3);
        expect(f({a: 2})).to.eql(3);

    });
    it('should memoize by func', function () {
        let count = 0;
        const f   = mobk(({a = 0}) => {
            return a + count++;
        }, (a, b) => a.a == b.a);

        expect(f({a: 1})).to.eql(1);
        expect(f({a: 1})).to.eql(1);
        expect(f({a: 2})).to.eql(3);
        expect(f({a: 2})).to.eql(3);

    });
});