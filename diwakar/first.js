let a = "Hello World";
a = "Bye world";
// a = 100
let b = 200;
// b = "Qspider"
let c = true;
let myVariable;
// myVariable = true
//! type annotation with array
let hobbies = ["a", "c"];
let numbers = [1, 23, 4];
//! type annotation for nested array
let nested = [["a", "b"], ["x", "y"], ["z"]];
//! type annotation with object
let person = { name: "John Doe", age: 20 };
// person.address = "Bangalore" //! not allowed in typescript
// person.name = 100; //! Not allowed in typescript
let people = [{ name: "Tanuja" }, { name: "Qspiders" }];
//! Type inference
let xyz = 200;
xyz = 300;
let str = "hello";
str = "world";
console.log(str, "str");
let val = null;
val = "hi";
console.log(val);
export {};
//! convention to use type annotation and type inference
/**
 * While using variables, let typescript do type inference
 * While using function parameters and return value of functions we use type annotation
 *
 * variables ==> type inference
 * function parameters, return value ==> type annotation
 */
