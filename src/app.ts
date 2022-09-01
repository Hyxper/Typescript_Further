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
        console.log(logStr)
        console.log(constructor)
    }
}

//! UNDERSCORE AS AN ARGUMENT TELLS TYPESCRIPT IT DOES NOT NEED THE ARGUMENT
function WithTemplate(template: string, hookID: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookID)
        if (hookEl) {
            hookEl.innerHTML = template
        }
    }
    //this is a decorator factory, as it is using a function
}

//!@ SYMBOL IS AN IDENTIFER, AND P O I N T S AT A FUNCTION  BE USED AS A DECORATOR!
// @Logger('LOGGING PERSON')

@WithTemplate('<h1>MY PERSON OBJ</h1>', 'app')
class Person {
    name = 'Jack'

    constructor() {
        console.log('creating person..')
    }
}

//!A DECORATOR RUNS WHEN IT SEES THE CLASS OBJECT, NOT WHEN AN OBJECT IS INSTATIATED.
const pers = new Person()
console.log(pers)
