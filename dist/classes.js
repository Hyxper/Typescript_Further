"use strict";
class Clothing {
    constructor(productName) {
        this.ppl = [];
        this._size = "n/a";
        this._colour = "n/a";
        this._inStock = false;
        this.range = "Summer";
        this._name = productName !== null && productName !== void 0 ? productName : "temp";
        this.ppl.push("test1");
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get size() {
        return this._size;
    }
    get colour() {
        return this._colour;
    }
    set colour(value) {
        this._colour = value;
    }
    get inStock() {
        return this._inStock;
    }
    set inStock(value) {
        this._inStock = value;
    }
    static printSomethingBabey(ip) {
        console.log(ip);
    }
    printInfo() {
        console.log(this.name + " " + this.size + " " + this.colour + " " + this.inStock);
    }
    printSomethingIDEK() {
        console.log(`DEPARTMENT IS ${this.name}`);
    }
    printypoo() {
        this.ppl.forEach(element => {
            console.log(element);
        });
    }
}
Clothing.stringy = "HELLO WORLD";
class Shirt extends Clothing {
    constructor(sizes, productName) {
        super(productName);
        this.sizes = sizes;
        sizes.forEach(Number => {
            console.log(Number);
        });
        this.ppl.push("test2");
    }
    abstractFunc() {
    }
    static getInstance() {
        if (this.instance) {
            console.log("instance exists");
            return this.instance;
        }
        this.instance = new Shirt([1, 2, 3, 4, 5, 666], "Timberland long sleeve");
        console.log("creating shirt instance");
        return this.instance;
    }
}
const godShirt = Shirt.getInstance();
console.log(godShirt);
Clothing.printSomethingBabey(Clothing.stringy);
//# sourceMappingURL=classes.js.map