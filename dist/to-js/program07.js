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
"use strict";

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var obj = (_obj = {}, _defineProperty(_obj, +process.argv[2] % 2 === 0 ? "even" : "odd", +process.argv[2]), _defineProperty(_obj, +process.argv[3] + +process.argv[2], +process.argv[3] + +process.argv[2]), _obj);
console.log(obj);