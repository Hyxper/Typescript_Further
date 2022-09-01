"use strict";
const names = ['max', 'jack'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done');
    }, 2000);
    if (!resolve) {
        reject('rejected');
    }
});
promise.then((data) => {
    data.split('.');
});
promise.catch(() => {
    console.log('REJECTED');
});
let objone = {
    name: 'Max',
};
let objtwo = {
    age: 21,
};
function merger(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergeObj = merger(objone, objtwo);
mergeObj.age;
const mergeObjTwo = merger(objone, objtwo);
function merger2(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergeObj3 = merger2(objone, objtwo);
mergeObj3.age;
function countAndPrint(element) {
    let descriptionText = 'No value';
    if (element.length === 1) {
        descriptionText = `I HAVE 1 ELEMENT.`;
    }
    else if (element.length > 1) {
        descriptionText = `I HAVE ${element.length} ELEMENTS.`;
    }
    return [element, descriptionText];
}
console.log(countAndPrint('HELLO'));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'max' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), -1);
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Jack');
textStorage.addItem('Bob');
const objStore = new DataStorage();
objStore.addItem({ name: 'jack' });
objStore.addItem({ name: 'james' });
objStore.removeItem({ name: 'jack' });
//# sourceMappingURL=app.js.map