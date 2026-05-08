INTERFACE
    blueprint of an object structure

    interface defines:
        property names
        property types 
        method structure
        object rules
    
Interface telling how an object should be look like

In TypeScript, an interface is a powerful way to define   a "shape" for an object. It specifies exactly what properties and methods an object should have without providing the actual implementation logic.

Object Shape: Interfaces are primarily used to name and describe the structure of objects and classes.Type Checking: TypeScript uses interfaces for "structural subtyping" (often called "duck typing"). 

If an object has the same properties and types as defined in the interface, it is considered a valid match.
Compile-time Only: Interfaces exist only for development and type-checking. 
They are completely removed during the compilation process and do not appear in the final transpiled JavaScript.


In TypeScript, interface and type alias are very similar and often interchangeable, 
but they have distinct behaviors regarding extension, merging, and versatility.

Quick ComparisonFeatureInterfaceType AliasPrimary UseDefining the shape of objects or classes.Defining primitives, unions, tuples, or complex types.Declaration MergingSupported. 

 Multiple declarations of the same name merge.Not Supported. Re-declaring throws an error.Extension SyntaxUses the extends keyword.Uses intersections (&).VersatilityRestricted to object and function shapes.Can represent any valid TypeScript type.


 