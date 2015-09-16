exports.PI = 3.141592;
const _sqrt = function (s, x, last) {
    return x != last ? _sqrt(s, (x + s / x) / 2, x) : x;
};
exports.sqrt = function (s) {
    return _sqrt(s, s / 2, 0);
};
exports.square = function (x) {
    return x * x;
};
const arg1 = process.argv[2];
const arg2 = process.argv[3];
const PI = require('./Math').PI;
const sqrt = require('./Math').sqrt;
const square = require('./Math').square;
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));