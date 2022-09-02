//Decorators useful for meta-programming
//work exclusively to impact the processing behind the webpage
//allow us to make sure classes are operating as expected.
//MAGIC BEHIND THE SCENES!
//! A DECORATOR IS JUST A FUNCTION

//! MUST START WITH A CAPITAL!
//! REQUIRES A TARGET, IN THIS CASE A CONSTRUCTOR

//DECORATOR FACTORIES LIKE THIS ALLOW US TO MANIPULATE WHAT THE DECORATOR DOES.
function Logger(logStr: string) {
    return function (constructor: Function) {
        console.log(logStr);
        console.log(constructor);
    };
}

//! UNDERSCORE AS AN ARGUMENT TELLS TYPESCRIPT IT DOES NOT NEED THE ARGUMENT
function WithTemplate(template: string, hookID: string) {
    return function (oGconstructor: any) {
        //*SYNTACTIC SUGAR FOR ACCESSING CONSTRUCTOR
        return class extends oGconstructor {
            constructor() {
                super();
                const hookEl = document.getElementById(hookID);
                const p = new oGconstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = p.name;
                }
            }
        };
    };
    //this is a decorator factory, as it is using a function
}

//!@ SYMBOL IS AN IDENTIFER, AND P O I N T S AT A FUNCTION  BE USED AS A DECORATOR!
// @Logger('LOGGING PERSON')

@Logger('Logging babey')
@WithTemplate('<h1>MY PERSON OBJ</h1>', 'app')
class Person {
    name = 'Jack';

    constructor() {
        console.log('creating person..');
    }
}

//!A DECORATOR RUNS WHEN IT SEES THE CLASS OBJECT, NOT WHEN AN OBJECT IS INSTATIATED.

const pers = new Person();
console.log(pers);

//---

function Log(target: any, propertyName: string | symbol) {
    console.log('property decorator');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, desc: PropertyDescriptor) {
    console.log('Accessor Decorator...');
    console.log(target, name, desc);
}

function Log3(target: any, name: string | symbol, desc: PropertyDescriptor) {
    console.log('Method Decorator...');
    console.log(target, name, desc);
}

function Log4(target: any, name: string | symbol, pos: number) {
    console.log('Param Decorator...');
    console.log(target, name, pos);
}

class Product {
    //!argument decorators like this, a decorator will recieve two arguments, a target (prototype, but use any)
    //! and the second argument is the property name.
    //! this will execute when the class property is declared.
    @Log
    private _name: string;
    private _price: number;
    //! ADDED A PROPERTY TO A ACCESSOR, THE DECORATOR WILL RECIEVE THREE ARGUMENTSS, SIMILAR DECORATOR
    //! CAN BE ADDED TO A METHOD
    @Log2
    public get name(): string {
        return this._name;
    }
    public set name(@Log4 value: string) {
        this._name = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        if (value > 0) {
            this._price = value;
        }
    }
    constructor(t: string, p: number) {
        this._name = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(tax: number) {
        return this.price * (1 + tax);
    }
}
