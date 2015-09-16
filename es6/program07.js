// ES6
// computed prop
// ------1---------2---------3---------4---------5---------6---------7---------8

// FIRST STEP
// var evenOrOdd = +process.argv[2];
// var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
// var sum = +process.argv[3] + evenOrOdd;
// var obj = {
// 	[evenOrOddKey]: evenOrOdd,
// 	[sum]: sum
// };
// console.log(obj);

// SECOND STEP
var obj = {
	[+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
	[+process.argv[3] + +process.argv[2]]: +process.argv[3] + +process.argv[2]
};
console.log(obj);
