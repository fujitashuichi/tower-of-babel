// ES6
// program04 import

var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {
	PI,
		_sqrt
}
from './program04';

import {
	sqrt
}
from './program04';

import {
	square
}
from './program04';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
