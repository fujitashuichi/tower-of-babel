// ES6
// for of

/*var res = [];
for (let element of[1, 2, 3]) {
	res.push(element * element);
}
console.log(res);*/

// maxまでの値を返すfibonacciを作る
/*
// 1000までの値を返すfibonacciを作る
var fibonacci = {
	// Symbol.iteratorを持つメソッドを持つオブジェクトにする
	[Symbol.iterator]() {
		let currentValue = 0,
			nextValue = 1;
		// iteratorオブジェクトは nextメソッドを持つオブジェクトを返す
		return {
			next() {
				// nextの中では返す値(value)と次で終わりかどうかを示すプロパティ(done)を返す
				if (nextValue > 1000) return {
					done: true
				};
				[currentValue, nextValue] = [nextValue, currentValue + nextValue];
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
}*/

// fizz-buzz
var max = +process.argv[2];
var FizzBuzz = {
	[Symbol.iterator]() {
		var nxValue = 0;
		return {
			next() {
				[nxValue++];
				// 三項演算子を使うよ
				var i = (nxValue % 3 == 0 ? 'Fizz' : '') + (nxValue % 5 == 0 ? 'Buzz' : '') || nxValue;
				// max超えたら抜ける
				if (nxValue > max) return {
					done: true
				};
				return {
					done: false,
					value: i
				};
			}
		}
	}
}

for (var n of FizzBuzz) {
	console.log(n);
}
