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
    return Object.assign(objA, objB);
}
const mergeObj = merger({ name: 'Max' }, { age: 21 });
//# sourceMappingURL=app.js.map