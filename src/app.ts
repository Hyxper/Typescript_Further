//! intersection types

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['CREATE-SERVER'],
    startDate: new Date(),
};

type Numeric = string | boolean;

type Combinable = number | string;

type intersect = Numeric & Combinable;

//TS CANT KNOW WHAT TYPE IS RETURNED
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

let first: Combinable = 'A';
let second: Combinable = 22;

// const result = add();

//OPTIONAL CHAINING, IMAGINE WE HAVE FETCHED THIS FROM A BACKEND, BUT ARE UNSURE IF IT IS COMPLETED
const fetchedUserData = {
    id: 'u1',
    name: 'Jack',
    job: { title: 'god', description: 'boss' },
};

console.log(fetchedUserData?.job?.description);

const uIp = '';

const store = uIp ?? 'DEFAULT';

console.log(store);
// type UnkwEmployee = Employee | Admin;

// function printEmp(emp: UnkwEmployee) {
//     console.log(`Name: ${emp.name}`);

//     if ('privileges' in emp) {
//         console.log(`Privelleges: ${emp.privileges}`);
//     }
//     if ('startDate' in emp) {
//         console.log(`Privelleges: ${emp.startDate}`);
//     }
// }

// class Car {
//     reverse() {
//         console.log('Reverse');
//     }
// }

// class Truck {
//     reverse() {
//         console.log('Reverse truck');
//     }
//     load() {
//         console.log('loading');
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.reverse();

//     if (vehicle instanceof Truck) {
//         vehicle.load();
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     kind: `bird`;
//     flyingSpeed: number;
// }

// interface honse {
//     kind: `honse`;
//     runningSpeed: number;
// }

// type Animal = Bird | honse;

// //COULD USE A TYPE GUARD TO RUN
// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.kind) {
//         case `bird`:
//             speed = animal.flyingSpeed;
//             break;
//         case `honse`:
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log(`moving at speed: ${speed}`);
// }

// moveAnimal({ kind: 'bird', flyingSpeed: 100 });

// // const userIPelement = <HTMLInputElement>document.getElementById('userinput')!;
// const userIPelement = document.getElementById('userinput') as HTMLInputElement;

// userIPelement.value = 'Hello';

// //this is basically saying that I can define as many properties in a inheriting object/class that I like,
// // however they all must have a property name that fits the prop type (string), and also must contain a value as defined
// interface ErrorContainer {
//     //{email: "Not a valid email",username: "must start with a character"}
//     [prop: string]: string;

// }

// //so this implements the interface above.
// const errorBag: ErrorContainer = {
//     1: '10A',
//     2: 'sdads@asdasd/com',
//     3: 'start with a capital',
//     4: 'test',
// };
