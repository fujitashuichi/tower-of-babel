// ES6
// for of

// fizz-buzz
var max = +process.argv[2];
var FizzBuzz = function*(){
	let nxValue = 0;
	while (nxValue < max) {
		[nxValue++];
		var i = (nxValue % 3 == 0 ? 'Fizz' : '') + (nxValue % 5 == 0 ? 'Buzz' : '') || nxValue;
		// max超えたら抜ける
		yield i;
	}
}();

for (var n of FizzBuzz) {
	console.log(n);
}
