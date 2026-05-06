//! Unknown is a type-safe alternative to any

//! This datatype is similar to the "any" datatype, the difference is that when we try to use any method this datatype, we have to manually do the type checking

let a: unknown;
a = "Hello";
a = 200;
a = ["h", 1, true];
a = { name: "Jspider" };

if (typeof a == "string") {
  a.toUpperCase();
}

/**
 * any                                 unknown
 * assign anything to variable         Assign anything to the varible
 *
 * There is no type safety             There is type safety
 */

//! We can use this, when we do not know the data type of a varible, or the data type might change, but we still want type safety.

//! The only difference is that typescript, will not ask for manual type checking in case of "any" but in case of unknown manual type checking is needed

//! Type Narrowing
// ! Type Narrowing is the process of filtering out a particular data type so that we can use methods on such variables

//! Type narrowing is needed when we have union datatype or unknown as the datatype
let b: unknown = "hello";

// b = ["a", "x", 100, 200];

// b = "Hello string";

if (typeof b == "string") {
  b.toUpperCase();
}


