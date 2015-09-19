// ES6
// for of

/*var res = [];
for (let element of[1, 2, 3]) {
	res.push(element * element);
}
console.log(res);*/

// maxまでの値を返すfibonacciを作る
/*
// 1000までの値を返すfibonacciを作る
var fibonacci = {
	// Symbol.iteratorを持つメソッドを持つオブジェクトにする
	[Symbol.iterator]() {
		let currentValue = 0,
			nextValue = 1;
		// iteratorオブジェクトは nextメソッドを持つオブジェクトを返す
		return {
			next() {
				// nextの中では返す値(value)と次で終わりかどうかを示すプロパティ(done)を返す
				if (nextValue > 1000) return {
					done: true
				};
				[currentValue, nextValue] = [nextValue, currentValue + nextValue];
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
}*/

// fizz-buzz
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var max = +process.argv[2];
var FizzBuzz = _defineProperty({}, Symbol.iterator, function () {
	var nxValue = 0;
	return {
		next: function next() {
			[nxValue++];
			// 三項演算子を使うよ
			var i = (nxValue % 3 == 0 ? 'Fizz' : '') + (nxValue % 5 == 0 ? 'Buzz' : '') || nxValue;
			// max超えたら抜ける
			if (nxValue > max) return {
				done: true
			};
			return {
				done: false,
				value: i
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
		if (!_iteratorNormalCompletion && _iterator['return']) {
			_iterator['return']();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}