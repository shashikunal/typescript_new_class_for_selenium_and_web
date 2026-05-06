### Type Annotation

Type annotation means explicitly telling typescript about the datatype of a variable, function parameter or the return value of a function.

Syntax for type annotation for variables

variableDeclaration identifier: datatype = value

let a: string = "Hello World"

By default typescript(tsc), compiles/transpiles to a lower version of javascript i.e es5 so that all the browsers can execute the js files properly

After typescript version 6, the code is compiled to es6 and above version of javascript.

### Type Inference

type inference means that typescript will try to judge/guess the datatype of the variable based on the data provided for the first time to a variable


tsc -w filename --> to compile on each change in typescript file