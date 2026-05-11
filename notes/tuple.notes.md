In TypeScript, a tuple is a special type of array where the number of elements is fixed and the type of each element at a specific index is known.

Unlike a regular array—which usually holds many items of the same type—a tuple allows you to store a collection of values with different types in a specific, predetermined order.Key CharacteristicsFixed Length: Once defined, 

the number of elements is strictly set (e.g., a tuple of 2 elements cannot naturally grow to 3).Ordered Types: The type of each index is independent. 

For example, the first element can be a string while the second is a number.Type Safety: TypeScript will throw an error if you try to assign a value of the wrong type to a specific index or access an index that doesn't exist.


syntax 
 let tupleData:[number , string] = []