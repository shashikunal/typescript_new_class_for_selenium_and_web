In TypeScript, an object is a structured collection of data represented as key-value pairs. While it functions like a standard JavaScript object, TypeScript adds static typing, meaning you can define exactly what properties an object must have and what types of data those properties can hold.1. Basic Object SyntaxYou can define an object's "shape" (its type) directly in line with a variable declaration:typescript
let user: { name: string; age: number };

user = {
  name: "Alice",
  age: 30
};


Optional property
    In TypeScript, you make a property optional by adding a question mark (?) after the property name in its definition. This tells the compiler that the property might not exist on an object of that type.



<!-- Type Aliases --> patterns
<!-- interface -->


What is Type Alias in Typescript?
Type aliases in TypeScript allow you to create custom names for complex types,
 making your code more readable and maintainable. They are particularly useful when 
 dealing with complex data structures, union types, and other scenarios where you want 
 to give a clear name to a specific type. Type aliases are created using the type keyword.

 sytanx
    type MyName = string;