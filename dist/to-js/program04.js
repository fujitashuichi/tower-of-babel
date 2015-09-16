// ES6
// importとか

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PI = 3.141592;

exports.PI = PI;

var _sqrt = (function () {
	function _sqrt(_x, _x2, _x3) {
		var _this = this;

		var _again = true;

		_function: while (_again) {
			var s = _x,
			    x = _x2,
			    last = _x3;
			_again = false;

			_classCallCheck(_this, _sqrt);

			if (x != last) {
				_this = undefined;
				_x = s;
				_x2 = (x + s / x) / 2.0;
				_x3 = x;
				_again = true;
				continue _function;
			} else {
				return x;
			}
		}
	}

	_createClass(_sqrt, [{
		key: "sqrt",
		value: function sqrt(s) {
			return _sqrt(s, s / 2.0, 0.0);
		}
	}, {
		key: "square",
		value: function square(x) {
			return x * x;
		}
	}]);

	return _sqrt;
})();

exports._sqrt = _sqrt;
;

// export const PI = 3.141592;

// export class _sqrt {
// 	constructor(s, x, last) {
// 		return x != (last ? this(s, (x + s / x) / 2.0, x) : x); // 条件演算子
// 	};
// 	sqrt(s) {
// 		return this(s, s / 2.0, 0.0);
// 	};
// 	square(x) {
// 		return x * x;
// 	};
// };