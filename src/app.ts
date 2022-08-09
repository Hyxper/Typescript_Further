/**
 * ?
 * !
 * TODO
 * *
 */


interface Greetable extends Nameable {
    greet(pharse:string): void;
}

interface AddFun{
    (a: number, b:number): number;
}

let addy: AddFun;

addy=(a: number, b:number)=>{
    return a+b;
 }

 interface Nameable {
    readonly name?: string;
    
}

class Person implements Greetable{


    private _name?: string;

    //!GETS AND SETS
    public get name(): string {
        if(this._name){
            return this._name;
        }else{
            return "not set";
        }
        
    }
    public set name(value: string) {
        this._name = value;
    }
    //*CONSTRUCTORS
    constructor (namey: string){
        if(namey){
            this._name = namey;
        }

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