// ES6
// for of

/*var res = [];
for (let element of[1, 2, 3]) {
	res.push(element * element);
}
console.log(res);*/

// fizz-buzz
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var max = +process.argv[2];
var FizzBuzz = _defineProperty({}, Symbol.iterator, function () {
	var currentVal = 0,
	    nextVal = 1;
	return {
		next: function next() {
			if (nextVal > max) return {
				done: false
			};
			var _ref = [nextVal, currentVal + nextVal];
			currentVal = _ref[0];
			nextVal = _ref[1];

			[(currentVal + nextVal) % 3 == 0 ? (currentVal + nextVal) % 5 == 0 ? "FizzBuzz" : "Fuzz" : (currentVal + nextVal) % 5 == 0 ? "Buzz" : currentVal + nextVal];
			return {
				done: false,
				Value: currentVal
			};
		}
	};
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = FizzBuzz[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var n = _step.value;

		console.log(n);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator["return"]) {
			_iterator["return"]();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}