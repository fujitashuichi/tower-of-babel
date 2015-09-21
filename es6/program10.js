// ES6
// destrctur

/*var a = 123;
var b = 456;

var [a, b] = [b, a];

console.log(a + b);*/

/*var [a, [b], [c]] = ['hello', [','], ['world']];

console.log(a + b + c);*/


var json = {
	"name": {
		"first": "Yosuke",
		"family": process.argv[2]
	},
	"birth": {
		"year": 1982,
		"month": 12,
		"day": process.argv[3]
	}
};

var [familyName, birthDay] = [json.name.family, json.birth.day];
// こっちの方がいい
//var {name: {family: familyName}, birth: {day: birthDay}} = json;

console.log(familyName);
console.log(birthDay);

