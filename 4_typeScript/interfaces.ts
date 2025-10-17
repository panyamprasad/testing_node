// Interfaces:
    // Interface is the way to define the structure of objects. It will help ensure the objects have the correct properties and methods.
    // It will use object contracts, class implementations, and API's.
    interface Person{
        name: string;
        age: number;
        city: string;
    }

    const person: Person = {
        name: "prasad", age: 38, city:"pml"
    };
    //----------------------------
    // Extends
    interface Person1{
        name: string;
    }
    interface Employee extends Person1{
        role: string;
    }
    const emp: Employee = {
        name: "prasad", role: "Employee"
    };

// Type:
    // A type is like a nick name, we can reuse it.
    // It can describe objects, union, intersection, primitives, arrays and tuples
    type Person2 = {
        name: string;
        age: number;
    }
    const person1: Person2 = { name: "prasad", age: 38};

    type ID = number | string;
    let userId: ID = 123; // or "abc", any number or string value

// What is difference between interface and type?
    // Interface: Best for object creation and class contracts ans support for declaration merging.
    // Type: More flexible, can define objects, unions, interSections, primitivie, arrays etc...

// When shuld we use interface, and type?
    // Interface:
        // Define the object shape.
        // If we want extend or merge
        // Class contracts.
    
    // Type:
        // We need union, intersections, tuples.
        // If we work with primitives.
        // If we need more flexiable like (string | number)