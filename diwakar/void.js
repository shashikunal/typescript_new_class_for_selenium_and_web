"use strict";
//! the void datatype mainly represents the absence of any value
// !It is most used to indicate that we do not want to return anything from a function
Object.defineProperty(exports, "__esModule", { value: true });
//? In javascript, whenever we dont return anything from the function, the default value returned in "undefined"
//! developer A
function greet() {
    let a = 2 + 2;
}
//developer A
let result = greet();
function printNames() {
    let names = ["Mayooka", "Hari Chandana", "Tanuja"];
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
printNames();
//! void datatype is all about the intention, it means if developer does not want to return anything from a function, he can use the void data type to inform the other developers.
//! But from the compiled javascript, the default behaviour of the a function cannot be changed.
