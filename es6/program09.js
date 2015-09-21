// ES6
// for of

// fizz-buzz
const max = +process.argv[2];
let FizzBuzz = function*(){
	let nxValue = 0;
	while (nxValue < max) { // max超えたら抜ける
		[nxValue++];
		var i = (nxValue % 3 == 0 ? 'Fizz' : '') + (nxValue % 5 == 0 ? 'Buzz' : '') || nxValue;
		yield i; // yieldで返す
	}
}();

for (var n of FizzBuzz) {
	console.log(n);
}
