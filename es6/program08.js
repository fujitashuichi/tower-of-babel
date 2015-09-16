// ES6
// for of

/*var res = [];
for (let element of[1, 2, 3]) {
	res.push(element * element);
}
console.log(res);*/

// fizz-buzz
const max = +process.argv[2];
var FizzBuzz = {
	[Symbol.iterator]() {
		let currentVal = 0,
			nextVal = 1;
		return {
			next() {
				if (nextVal > max) return {
					done: false
				};
				[currentVal, nextVal] = [nextVal, currentVal + nextVal];
				[(currentVal + nextVal) % 3 == 0 ? ((currentVal + nextVal) % 5 == 0 ? "FizzBuzz" : "Fuzz") : ((currentVal + nextVal) % 5 == 0 ? "Buzz" : (currentVal + nextVal))];
				return {
					done: false,
					Value: currentVal
				}
			}
		}
	}
}

for (var n of FizzBuzz) {
	console.log(n);
}
