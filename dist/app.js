"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['CREATE-SERVER'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
let first = 'A';
let second = 22;
const fetchedUserData = {
    id: 'u1',
    name: 'Jack',
    job: { title: 'god', description: 'boss' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.description);
const uIp = '';
const store = uIp !== null && uIp !== void 0 ? uIp : 'DEFAULT';
console.log(store);
//# sourceMappingURL=app.js.map