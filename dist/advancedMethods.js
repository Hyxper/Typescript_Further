"use strict";
const printOutput = output => console.log(output);
const test = (a, b) => a + b;
console.log(test(1, 2));
const test2 = input => console.log(input);
const test1 = input => console.log(input);
const button = document.querySelector("button");
const add = (a, b = 1) => a + b;
console.log(add(10));
const hobbies = ["sports", "cooking"];
const activeHobs = ["hiking"];
const hhhh = [...activeHobs, ...hobbies];
activeHobs.push(...hobbies);
const person = {
    fName: "max",
    age: 30,
    printAge() {
        console.log(this.age);
    },
    setAge(toSet) {
        this.age = toSet;
    }
};
const copiedPerson = person;
person.setAge(40);
const actualCopyPerson = Object.assign({}, person);
const addFunc = {
    printOne(message) {
        console.log(message);
    },
    printTwo() {
        console.log("two");
    }
};
const addedToPerson = Object.assign(Object.assign({}, person), addFunc);
addedToPerson.printTwo();
const add2 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const [hobby1, hobby2, ...remainders] = hobbies;
const { fName: userName, age, setAge } = person;
console.log(hobby1);
console.log(userName, age);
//# sourceMappingURL=advancedMethods.js.map