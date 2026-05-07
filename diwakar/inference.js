let a = 100;
// a = "Hello";
let b = "hello world";
b = "Bye World";
let isActive = false;
// According to typescript let isActive:boolean = false;
//! Type inference with array
let arr = ["hello", "hi"];
// string[] --> infered data type
arr.push("200");
let arr1 = [1, "a"];
// (number | string)[] --> inferred data type
arr1[2] = "hi";
arr1[3] = 100;
// arr1[4] = true
// console.log(arr);
let arr2 = [];
//! inferred datatype -> any[]
arr2[0] = "hello World";
arr2[1] = 100;
arr2[2] = false;
let hobbies = ["str"];
// hobbies[1] = true
//string[]
let xyx = ["a", 1];
export {};
//! (string | number)[]
