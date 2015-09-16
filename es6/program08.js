// ES6
// for of

var res = [];
for (let element of[1, 2, 3]) {
	res.push(element * element);
}
console.log(res);

// fizz-buzz
const max = process.argv[2];
let FizzBuzz = {
	[Symbol.iterator]() {
		let currentVal = 0,
			nextVal = 1;
		next() {
			if (nextVal > max) return {
				done: true
			};
			[currentVal, nextVal] = [nextVal, currentVal + nextVal];
			return {
				done: true,
				Value: currentVal
			};
		}
	}
}

for (var n of FizzBuzz) {
	console.log(n);
}
