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

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnkwEmployee = Employee | Admin;

function printEmp(emp: UnkwEmployee) {
    console.log(`Name: ${emp.name}`);

    if ('privileges' in emp) {
        console.log(`Privelleges: ${emp.privileges}`);
    }
    if ('startDate' in emp) {
        console.log(`Privelleges: ${emp.startDate}`);
    }
}

class Car {
    reverse() {
        console.log('Reverse');
    }
}

class Truck {
    reverse() {
        console.log('Reverse truck');
    }
    load() {
        console.log('loading');
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.reverse();

    if (vehicle instanceof Truck) {
        vehicle.load();
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    kind: `bird`;
    flyingSpeed: number;
}

interface honse {
    kind: `honse`;
    runningSpeed: number;
}

type Animal = Bird | honse;

let speed;
//COULD USE A TYPE GUARD TO RUN
function moveAnimal(animal: Animal) {
    switch (animal.kind) {
        case `bird`:
            speed = animal.flyingSpeed;
            break;
        case `honse`:
            speed = animal.runningSpeed;
            break;
    }
    console.log(`moving at speed: ${speed}`);
}

moveAnimal({ kind: 'bird', flyingSpeed: 100 });

const para = document.querySelector('p');
