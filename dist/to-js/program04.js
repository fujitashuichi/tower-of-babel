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
	function _sqrt(s, x, last) {
		_classCallCheck(this, _sqrt);

		return x != (last ? _sqrt(s, (x + s / x) / 2.0, x) : x); // 条件演算子
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