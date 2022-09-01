const names: Array<string> = ['max', 'jack'];
//a thing with different data
//array is an generic type
//a generic is a type, with some link or reference to another type
//! string[] would be the same.

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done');
    }, 2000);

    if (!resolve) {
        reject('rejected');
    }
});

//a promise will be resolve or reject, based on verdict of result.
//resolve and reject passed into constructor callback
//automatically.
//Promises are asyncronus, and its value will be either resolve or reject.
//! Promises are generic as they return a variety of types, because eventually
//! it will return a type of some kind.
//! typescript has no idea what the promise will return if we do not specify.

promise.then((data) => {
    data.split('.');
});

promise.catch(() => {
    console.log('REJECTED');
});

//OBJECT.ASSIGN CONVERGES MULTIPLE OBJECTS INTO ONE, PLUS OTHER TYPES!

let objone = {
    name: 'Max',
};

let objtwo = {
    age: 21,
};

//we can tell typescript that this function takes generic parameters.
//we are basically telling typescript that the arguements may be different types,
//and that typescript should be the intersection of both of these types.
function merger<T, U>(objA: T, objB: U) {
    return Object.assign({}, objA, objB);
}

//this function will return the intersection of all of these types.
const mergeObj = merger(objone, objtwo);
mergeObj.age;

//we can also tell typescript what type the generics will be, through overloading.
//
const mergeObjTwo = merger<{ name: string }, { age: number }>(objone, objtwo);

//we can set contraints to a generic, basically saying that
//the generic types will be a type of something, always restricing
//what they can be. This garuntees we are going to see,
//what we want. we can constrain one if we wanted
function merger2<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign({}, objA, objB);
}

const mergeObj3 = merger2(objone, objtwo);
mergeObj3.age;

//often, generic type will be the type you are going to use anyway
//this is not too clear what type T is, for example we are not sure if "element"
//has a length

//! we can use a interface to describe the type expected in the generic,
//! in this example, we can use the interface to inform typescript that
//!the generic will have access to the length property.
//!WE HAVE ALSO INFERRED THE RETURN TYPE AS A TUPLE!!

interface Lengthable {
    length: number;
}

function countAndPrint<T extends Lengthable>(element: T): [T, string] {
    let descriptionText = 'No value';
    if (element.length === 1) {
        descriptionText = `I HAVE 1 ELEMENT.`;
    } else if (element.length > 1) {
        descriptionText = `I HAVE ${element.length} ELEMENTS.`;
    }
    return [element, descriptionText];
}

console.log(countAndPrint('HELLO'));

//WE CAN USE THE KEYOF KEYWORD TO EXTEND THE GENERUC TYPE OF U,
//ENSURING THAT U MATCHES THE TYPE OF WHATEVER THE KEY
//OF T IS.

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return obj[key];
}
//! THE EXAMPLE DISPLAYED SHOWS HOW U IS USING THE KEY AS A TYPE, THE
//!EXPLICIT STRING "NAME"
extractAndConvert({ name: 'max' }, 'name');

//generic class, we can describe a generic type in a class.

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), -1);
    }
}

//we can describe the data of generic the class should expect.
const textStorage = new DataStorage<string>();

//this can make storing data mutlifacted
textStorage.addItem('Jack');
textStorage.addItem('Bob');

//we could store anything
const objStore = new DataStorage<object>();

objStore.addItem({ name: 'jack' });
objStore.addItem({ name: 'james' });

objStore.removeItem({ name: 'jack' });

interface CourseGoal {
    title: string;
    desc: string;
    completeUntil: Date;
}
