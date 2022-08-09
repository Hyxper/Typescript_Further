// Code goes here!


const printOutput: (a: number|string) => void = output => console.log(output);


const test = (a: number, b: number) => a+b;
console.log(test(1,2));


const test2: (a: number) => void = input => console.log(input);

const test1: (a: number) => void = input => console.log(input);


const button = document.querySelector("button");

// if (button){
//     button.addEventListener("click",event=>console.log(event));
// }


const add = (a: number, b:number = 1) => a+b;

console.log(add(10));

const hobbies = ["sports","cooking"];
const activeHobs = ["hiking"];

const hhhh = [...activeHobs, ...hobbies]

activeHobs.push(...hobbies);

const person = {
    fName:"max",
    age: 30,
    printAge() {
        console.log(this.age)
    },
    setAge(toSet: number){
        this.age = toSet;
    }
    
};

const copiedPerson = person;

person.setAge(40);

// person.printAge();
// copiedPerson.printAge();

const actualCopyPerson = {...person};


const addFunc = {
    
    printOne(message: string){
        console.log(message)
    },
    printTwo(){
        console.log("two")
    }

}

const addedToPerson = {...person,...addFunc};

addedToPerson.printTwo();




const add2 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
}

//ARRAY DESTRUCTUING
const [hobby1, hobby2, ...remainders] = hobbies;
const {fName: userName, age, setAge} = person;



console.log(hobby1);
console.log(userName, age);


