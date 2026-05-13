An intersection type in TypeScript is a way to combine multiple existing types into a single new type that contains all the features of those types.

 It is defined using the ampersand (&) operator.An object of an intersection type must satisfy all the requirements of the types being combined—meaning it must have every property and method found in each constituent type.

 Key CharacteristicsLogical AND: While a union type (|) is like an "OR" (it can be one type or another), an intersection type is like an "AND" (it must be all types simultaneously).Property Merging: When you intersect two object types,
  the resulting type includes the union of all properties from both.Composition: It is primarily used to compose complex types from smaller, reusable ones rather than using deep inheritance chains.Example Syntaxtypescriptinterface Person {
  name: string;
}

interface Worker {
  employeeId: number;
}

// Combining both interfaces into one type
type Employee = Person & Worker;

const newStaff: Employee = {
  name: "Jane Doe",
  employeeId: 12345
};