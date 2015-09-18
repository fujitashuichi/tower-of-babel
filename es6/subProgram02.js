// EX.02 Class

class Person {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	toString() {
		return this.getName();
	}
}

var alice = new Person("alice");
alice.getName();
alice.setName("James Break");
alice.getName();
console.log(alice.toString());
