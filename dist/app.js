"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logStr) {
    return function (constructor) {
        console.log(logStr);
        console.log(constructor);
    };
}
function WithTemplate(template, hookID) {
    return function (constructor) {
        const hookEl = document.getElementById(hookID);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Jack';
        console.log('creating person..');
    }
};
Person = __decorate([
    Logger('Logging babey'),
    WithTemplate('<h1>MY PERSON OBJ</h1>', 'app'),
    __metadata("design:paramtypes", [])
], Person);
const pers = new Person();
console.log(pers);
function Log(target, propertyName) {
    console.log('property decorator');
    console.log(target, propertyName);
}
function Log2(target, name, desc) {
    console.log('Accessor Decorator...');
    console.log(target, name, desc);
}
function Log3(target, name, desc) {
    console.log('Method Decorator...');
    console.log(target, name, desc);
}
function Log4(target, name, pos) {
    console.log('Method Decorator...');
    console.log(target, name, pos);
}
class Product {
    constructor(t, p) {
        this._name = t;
        this._price = p;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    Log,
    __metadata("design:type", String)
], Product.prototype, "_name", void 0);
__decorate([
    Log2,
    __param(0, Log4),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Product.prototype, "name", null);
__decorate([
    Log3,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=app.js.map