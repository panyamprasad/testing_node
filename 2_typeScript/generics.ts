// Generics:
    // Generics are like templates, it will allow us to write the code and that will work with any type, but keep type safety.
    
// Why do we need Generics?
    // Reusability: Write once and use it in multiple places.
    // Type Safety: Find the issue in compile time instend of runtime.
    // Readability: Makes APIs fiexible but clear.

// When do we use Generics?
    // When writing the functions, classes or interfaces it should work with different types.
        // Utility functions.
        // Collections
        // APIs 

//-----------------------------------------------------------------------------------------------

// What is difference between Interface and type?
    // Interface & type both are using to define the share of the data, but there is differnce between of them.
    // Interface:
                // Using Interface we can define the objects, and we can merge and extend this.
                // EX:  
                    interface animal{
                        id: number;
                        name: String;
                    }
                    interface dog extends animal{
                        color:string;
                    }
    
    // Type: 
            // Using type we can define the object, union, primitives and tuples, but we can merge it once define.
            // Ex:
                    type user = {
                        name: string;
                    }

                    type ID = number | string | boolean; // Union
                    type name = [number, string ];  // tuple

//-------------------------------------------------------------------------------------------
// What's the difference between unknown and any?
    // Any:
            // Any means no data type
            // we can assign anything for this. But it not safety
            // Not recommanded

    // unknown:
            // Unknown also accept any type.
            // Before using this we must check the type.
            // It is safe compare to any.
//-------------------------------------------------------------------------------------------

// How would you create a type-safe API response model?
    // Using the Generics we can handle the type-safe api response. If we define the generic interface, the same structure can handle multiple models and it is type safety.
