"use strict";
let addy;
addy = (a, b) => {
    return a + b;
};
class Person {
    constructor(namey) {
        if (namey) {
            this._name = namey;
        }
    }
    get name() {
        if (this._name) {
            return this._name;
        }
        else {
            return "not set";
        }
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