<!-- Type Assertions --> Type casting

Type Assertions (also called Type Casting) is a way to tell typescript "I know the type better than you"

Its a compile time only feature not run time feature.

it does not convert the value;
It just tell typescript how to treat the value;


Type assertion in TypeScript is a way to tell the compiler, "Trust me, I know what I'm doing."
 It allows you to manually override the type that TypeScript has automatically inferred for a value,
  treating it as a more specific or different type that you know is correct.Crucially, type assertions 
  
  have no runtime impact. They are purely a compile-time tool used to satisfy the type checker; they do not perform any data conversion or verification when the code is actually running.

