// ES6
// program04 import

var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI} from './program04';
import {_sqrt} from './program04';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
