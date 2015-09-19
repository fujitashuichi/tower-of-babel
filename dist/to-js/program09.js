// ES6
// for of

// fizz-buzz
'use strict';

var max = +process.argv[2];
var FizzBuzz = regeneratorRuntime.mark(function callee$0$0() {
	var nxValue, i;
	return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				nxValue = 0;

			case 1:
				if (!(nxValue < max)) {
					context$1$0.next = 8;
					break;
				}

				// max超えたら抜ける
				[nxValue++];
				i = (nxValue % 3 == 0 ? 'Fizz' : '') + (nxValue % 5 == 0 ? 'Buzz' : '') || nxValue;
				context$1$0.next = 6;
				return i;

			case 6:
				context$1$0.next = 1;
				break;

			case 8:
			case 'end':
				return context$1$0.stop();
		}
	}, callee$0$0, this);
})();

// yieldで返す
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