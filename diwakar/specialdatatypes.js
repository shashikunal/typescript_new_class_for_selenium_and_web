"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = ["hello"];
a = { name: "qspider" };
a = 100;
a.toUpperCase();
//! the any data type is a special data type which will tell typescript to remove type safety for a particuar variable, function parameter,etc.
// ! Such variables will not cause any compile time error but they may give run time errors
// ! if we only declare a variable, the datatype assigned to it is any datatype
//! example let a; --> default datatype is any
//! We have 4 special data types in typescript
/**
 * 1. any (no type checking)
 * 2. unknown (manual type checking)
 * 3. void (no return value)
 * 4. never (datatype which will never have a value)
 */
//! These are only available in typescript, there are no special data types in javascript
//! Any datatype
//It is a datatype that turns off type checking, that means we can assign any datatype as a value to either variable or function parameters or return value
let value = 100;
value = "hello";
value = false;
value = ["a", "b", "c", 300, 400];
//! such variables are ignored by typescript
//! type checking is not done for such variables
// ! Such variables will not cause any compile time error but they may give run time errors
// ! typescript will ignore such a varible and it will not perform any typechecking for these variables
//! developer A
let greeting = "Hello";
//! developer B
greeting = 500;
//! developer C
greeting = { name: "Jspider" };
//! developer A
greeting.toUpperCase();
