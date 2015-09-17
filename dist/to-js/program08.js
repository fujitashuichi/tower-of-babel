// ES6
// for of

/*var res = [];
for (let element of[1, 2, 3]) {
	res.push(element * element);
}
console.log(res);*/

// maxまでの値を返すfibonacciを作る
/*
var max = +process.argv[2];
var fibonacci = {
	// Symbol.iteratorを持つメソッドを持つオブジェクトにする
	[Symbol.iterator]() {
		let currentValue = 0,
			nextValue = 1;
		// iteratorオブジェクトは nextメソッドを持つオブジェクトを返す
		return {
			next() {
				// nextの中では返す値(value)と次で終わりかどうかを示すプロパティ(done)を返す
				if (nextValue > max) return {
					done: true
				};
				[currentValue, nextValue] = [nextValue, currentValue + 1];
				return {
					done: false,
					value: currentValue
				};
			}
		}
	}
}

for (var n of fibonacci) {
	console.log(n);
}
*/

// fizz-buzz
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var max = +process.argv[2];
var FizzBuzz = _defineProperty({}, Symbol.iterator, function () {
	var prev = 0,
	    curr = 1;
	return {
		next: function next() {
			var _ref = [curr, prev + 1];
			prev = _ref[0];
			curr = _ref[1];

			[prev % 3 == 0 ? prev % 5 == 0 ? prev = "FizzBuzz" : prev = "Fuzz" : prev % 5 == 0 ? prev = "Buzz" : prev];
			if (curr > max) return {
				done: true
			};
			return {
				done: false,
				value: prev
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