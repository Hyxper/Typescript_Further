"use strict";
class Person {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    greet(pharse) {
        console.log(`Hello, my name is ${pharse}`);
    }
}
let personOne;
personOne = new Person("Jack");
let personTwo = new Person("Dan");
//# sourceMappingURL=app.js.map