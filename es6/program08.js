// ES6
// for of

/*var res = [];
for (let element of[1, 2, 3]) {
	res.push(element * element);
}
console.log(res);*/

// maxまでの値を返すfibonacciを作る
/*
var max = +process.argv[2];
var fibonacci = {
	// Symbol.iteratorを持つメソッドを持つオブジェクトにする
	[Symbol.iterator]() {
		let currentValue = 0,
			nextValue = 1;
		// iteratorオブジェクトは nextメソッドを持つオブジェクトを返す
		return {
			next() {
				// nextの中では返す値(value)と次で終わりかどうかを示すプロパティ(done)を返す
				if (nextValue > max) return {
					done: true
				};
				[currentValue, nextValue] = [nextValue, currentValue + 1];
				return {
					done: false,
					value: currentValue
				};
			}
		}
	}
}

for (var n of fibonacci) {
	console.log(n);
}
*/

// fizz-buzz
var max = +process.argv[2];
var FizzBuzz = {
	[Symbol.iterator]() {
		let prev = 0,
			curr = 1;
		return {
			next() {
				[prev, curr] = [curr, prev + 1];
				[prev % 3 == 0 ?
					(prev % 5 == 0 ?
						prev = "FizzBuzz" : prev = "Fuzz") :
					(prev % 5 == 0 ? prev = "Buzz" :
						prev)
				];
				if (curr > max) return {
					done: true
				};
				return {
					done: false,
					value: prev
				};
			}
		}
	}
}

for (var n of FizzBuzz) {
	console.log(n);
}
