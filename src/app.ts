/**
 * ?
 * !
 * TODO
 * *
 */
 interface Greetable {
    name: string;
    greet(pharse:string): void;
}

class Person implements Greetable{

    //!GETS AND SETS
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    //*CONSTRUCTORS
    constructor (private _name: string){
    }
    //?METHODS
    greet(pharse: string): void {
        console.log(`Hello, my name is ${pharse}`);
    }

}

let personOne: Greetable;

personOne = new Person("Jack");
let personTwo = new Person("Dan");




//TODO var we will store an object in
// let user1: Person;

// user1 = {
//     name:"Jack",
//     age: 25,
//     greet(phrase: string): void{
//         console.log(`hello my name is ${this.name} and my age is ${this.age} and ${phrase}`)
//     }

// }
// user1.greet("!!!!!!!!");