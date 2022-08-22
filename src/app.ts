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

function merger<T, U>(objA: T, objB: U) {
    return Object.assign(objA,objB);
}

const mergeObj = merger(,);
