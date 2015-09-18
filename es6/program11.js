// ES6
// arrow

setTimeout(() => {
	console.log('test');
}, 100);

var square = (x) => {
	return x * x;
};
console.log(square(22));

var square02 = y => y * y;
console.log(square02(4));

var inputs = process.argv.slice(2);
var result = inputs.map( /* ここにアロー関数を使って一文字だけ取得しましょう */ )
	.reduce( /* ここにアロー関数を使って文字列結合しましょう */ );
console.log(result);
