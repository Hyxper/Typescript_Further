"use strict";
const e1 = {
    name: "Max",
    privileges: ["CREATE-SERVER"],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmp(emp) {
    console.log(`Name: ${emp.name}`);
    if ("privileges" in emp) {
        console.log(`Privelleges: ${emp.privileges}`);
    }
    if ("startDate" in emp) {
        console.log(`Privelleges: ${emp.startDate}`);
    }
}
class Car {
    reverse() {
        console.log("Reverse");
    }
}
class Truck {
    reverse() {
        console.log("Reverse truck");
    }
    load() {
        console.log("loading");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.reverse();
    if (vehicle instanceof Truck) {
        vehicle.load();
    }
}
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=app.js.map