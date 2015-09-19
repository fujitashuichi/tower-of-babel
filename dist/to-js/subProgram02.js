// EX.02 Class

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = (function () {
	function Person(name) {
		_classCallCheck(this, Person);

		this.name = name;
	}

	_createClass(Person, [{
		key: "getName",
		value: function getName() {
			return this.name;
		}
	}, {
		key: "setName",
		value: function setName(name) {
			this.name = name;
		}
	}, {
		key: "toString",
		value: function toString() {
			return this.getName();
		}
	}]);

	return Person;
})();

var alice = new Person("alice");
alice.getName();
alice.setName("James Break");
alice.getName();
console.log(alice.toString());