"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("start");
function greet() {
    //   for (let i = 0; i < 1000000000; i++) {} //! time consuming loop
    while (true) { } //! execution will never be completed
    //! unreachable code
    let a = 2 + 2;
    console.log(a);
}
greet();
console.log("end");
//! never represents a value that can never be obtained.
//! Mostly it is used in functions which cannot reach the return statement or the execution is stopped before reaching the return statement of the function
//! type never is very useful for error handling functions
function errorHandler() {
    throw new Error("the function is terminating");
    let a = 10;
    let b = 20;
    // return "hello" //! unreachable code,the execution was stopped due to Error
}
console.log("After function");
