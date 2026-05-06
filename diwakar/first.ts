let a: string = "Hello World";

a = "Bye world";

// a = 100

let b: number = 200;
// b = "Qspider"

let c: boolean = true;

let myVariable: string;

// myVariable = true

//! type annotation with array
let hobbies: string[] = ["a", "c"];
let numbers: number[] = [1, 23, 4];

//! type annotation for nested array

let nested: string[][] = [["a", "b"], ["x", "y"], ["z"]];

//! type annotation with object

let person: { name: string; age: number } = { name: "John Doe", age: 20 };

// person.address = "Bangalore" //! not allowed in typescript
// person.name = 100; //! Not allowed in typescript

let people: { name: string }[] = [{ name: "Tanuja" }, { name: "Qspiders" }];

//! Type inference
let xyz = 200;

xyz = 300;

let str = "hello";

str = "world";

console.log(str, "str");

let val = null;

val = "hi";
console.log(val);

//! convention to use type annotation and type inference
/**
 * While using variables, let typescript do type inference
 * While using function parameters and return value of functions we use type annotation
 *
 * variables ==> type inference
 * function parameters, return value ==> type annotation
 */
