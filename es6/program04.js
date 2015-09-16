// ES6
// importとか

export const PI = 3.141592;

export class _sqrt {
	constructor(s, x, last) {
		return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
	};

	sqrt(s) {
		return _sqrt(s, s / 2.0, 0.0);
	};

	square(x) {
		return x * x;
	};
};


// export const PI = 3.141592;

// export class _sqrt {
// 	constructor(s, x, last) {
// 		return x != (last ? this(s, (x + s / x) / 2.0, x) : x); // 条件演算子
// 	};
// 	sqrt(s) {
// 		return this(s, s / 2.0, 0.0);
// 	};
// 	square(x) {
// 		return x * x;
// 	};
// };
