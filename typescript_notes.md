  What is tsconfig.json file?
  Think of the tsconfig.json file as the brain of your TypeScript project. Its presence in a directory tells the computer that this folder is the root of a TypeScript project .Essentially, it acts as an "instruction manual" for the TypeScript Compiler (tsc) , defining exactly how your code should be checked and converted into JavaScript


  A tsconfig.json file is the configuration file for typescript projects. and it tells how to compile typescript code into javascript.
  
  
  --init  Initializes a TypeScript project and creates a tsconfig.json file.

  tsc --init

  What is Module property in tsconfig.json file?

    In a tsconfig.json file, the module setting tells TypeScript how it should transform your import and export statements when it compiles your code into JavaScript.Since different environments (like Node.js, browsers, or bundlers like Webpack ) handle files differently, this setting ensures your output code actually works where you plan to run it.

    When you write TypeScript, you usually use the modern import and export syntax. Depending on your module setting, the compiled JavaScript will look different:If set to CommonJS: Your import becomes require() and export becomes module.exports. This is the traditional standard for Node.js .If set to ESNext or ES2020: Your import and export statements stay as they are. This is the modern standard used by browsers and modern bundlers .Which one should you use?Choosing the right value depends on your runtime or build tool. You can find a full breakdown in the Official TypeScript TSConfig Reference .If you are using...Use this module valueWhy?Modern Node.jsNodeNext or Node16Supports both ESM and CommonJS natively.Bundlers (Vite, Webpack)ESNext or PreserveLets the bundler handle "tree-shaking" to make your file size smaller.Older Node.jsCommonJSNode didn't support standard import until recently.Legacy projectsAMD or UMDFor older systems like RequireJS.


    ARRAY

    In TypeScript, an Array is a collection of values, similar to arrays in JavaScript, but with the added benefit of Type Safety. This means you can specify exactly what kind of data (numbers, strings, objects, etc.) can be stored in the list, helping you catch errors during development before your code even runs.1. How to Declare ArraysThere are two common ways to define the type of an array in TypeScript:Square Bracket Syntax (type[]): This is the most common and concise way.typescriptlet fruits: string[] = ["Apple", "Banana", "Cherry"];

Use code with caution.Generic Array Type (Array<type>): This does the exact same thing but uses a more formal "generic" syntax.typescriptlet ages: Array<number> = [25, 30, 35];


READONLY 

In TypeScript, a readonly array is a special type that prevents you from modifying the array after it has been created.While a regular array allows you to add, remove, or change elements, a readonly array removes all "mutating" methods (like .push(), .pop(), or .sort()) from the type definition, ensuring the data remains consistent.1. How to Declare ItThere are two common ways to define a readonly array:Shorthand Syntax: readonly type[] (Most common)Generic Utility: ReadonlyArray<type>typescript// Shorthand syntax
const scores: readonly number[] = [90, 85, 70];

// Generic syntax (equivalent to the above)
const names: ReadonlyArray<string> = ["Alice", "Bob"];

// This will cause a TypeScript error:
scores.push(100); // Error: Property 'push' does not exist on type 'readonly number[]'
scores[0] = 95;   // Error: Index signature only permits reading