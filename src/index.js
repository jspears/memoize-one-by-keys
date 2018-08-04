const memoize = require('memoize-one');

module.exports = (fn, keys) => {
    if (!Array.isArray(keys)) {
        return memoize(fn, keys);
    }
    const l = keys.length;
    return memoize(fn, (a, b) => {
        if (a === b || (a == null && b == null)) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        for (let i = 0; i < l; i++) {
            const key = keys[i];
            if (a[key] !== b[key]) {
                return false;
            }
        }
        return true;
    });
};