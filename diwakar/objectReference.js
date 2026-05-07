let a = {
    name: "Qspiders",
    address: "Bangalore",
    isActive: true,
    additionalDetails: {
        designation: "institution",
    },
};
// a.additionalDetails.designation = "";
//! inferred data type {name: string, address: string, isActive: boolean, additionalDetails: { designation: string}}
//! inferred data type for a { name: string; address: string; isActive: boolean }
// In object a the properties, name, address and isActive is mandatory
/**
 * name -> string
 * address -> string
 * isActive -> boolean
 */
// a.name = 100 // !wrong
// a.address = false // ! wrong
// a.inActive = 'hi' // ! wrong
// a.hobbies = [""] //! wrong
// delete a.address;
// const z = "last alphabet"
let z;
// ! const variables are constants, and we cannot change the value later on
//! const variables cannot be changed after they have been created, such variables are said to have literal type in typescript
const x = 100;
let abc;
//! when we only declare a variable and do not initialize(do not provide the value), for such variables the inferred data type is any
//! Such variables do not have any type safety
let obj = { name: "Jspiders" };
//! {name: string}
let m = "hi";
let no = 100;
//! Whenever we use a const variable, we cannot change the value later on. This means that we have to create create and assign a value to const variable at the same time. Later on, the value of such variable cannot be changed
// ! In typescript, const variables are said to have literal data type. That means whatever, is the value assigned to the variable, is taken as the data type of the variable
const p = "hello world";
const q = 200;
export {};
