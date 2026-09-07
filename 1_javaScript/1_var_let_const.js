// Var examples
// Var is function scoped
// Hoisting is applicable if we print the variable before its declarations will get the undefined
// We can access this variable inside and outside of the function and we can reassign the value
console.log(a);
var a = 10;
function test(){
    console.log('Before assigned value', a); // undefined because of hoisting concept. 
    var a = 20;
    console.log('Reassigned a to:', a);
}
test();
console.log('Outside function a is:', a);
// ------------------------------------------------------------------------------

// Let Examples
// It's blocked scoped
// Hoisting is applicable if we print the variable before its initialization will get the reference error
// We can declare the variable inside the function or outside the function but we can't access out side declaration inside the functions.
// We can reassign the value
console.log(a);
function test(){
    console.log('Before assigned value', a);
    let a = 20;
    console.log('Reassigned a to:', a);
}
test();

//Const Examples
// It's blocked scoped
// Hoisting is applicable if we print the variable before its initialization will get the reference error
// We can't access outside declaration variable inside the function it's similar to let.
// We can't reassign the value
function test(){
    const a = 100;
    console.log('Reassigned a to:', a);
    a = 300;
    console.log('Reassigned a to:', a);
}
test()
//--------------------------------------------------------
// Var: 
    // 1. Var is function Scoped.
    // 2. Reassign and redeclaration is possible.
    // 3. Hoisting is possible, but without initialization it will give Undefined error.
    // 4. We can access the variable outside the function.

// Let:
    // 1. it is Blocked Scoped.
    // 2. Reassign is possible, but we can't redeclaration.
    // 3. Hoisting is possible, but without initialization it will give reference error.
    // 4. We can't access the variable out side the function.

// Const:
    // 1. const is work as similar to let.
    // 2. But we can't reassign and redeclaration.
    // 3. We can't access out side the function because it is blocked scope.
//--------------------------------------------------------
// Hoisting:
//      1. Hoisting is JavaScript mechanism.
//      2. Both function declaration and variable declaration is coming to the top of the scope at compileTime before execution.
//      3. If any variable we can assign as VAR, before initialization if we try to access it give an undefined result.
//      4. Because Var variable declaration is hoisting, and initialized with undefined.
//      5. Coming to the let and const declaration is hoisting, but it will be in Temporal Dead Zone until initialization.
//      6. So it will give reference error before initialization.
//      7. And Function declaration is fully hoisting, so we can call it before their definition.
//      8. But function definition is not fully hoisting. It means if we assign an function to a variable.
//--------------------------------------------------------

// Prototype:
    // 1. ProtoType is shared object, it will store common properties and methods.
    // 2. Other objects can access and reuse those properties and methods.
    // 3. Instead of creating the same methods in other objects we can access existing one.
    // 4. Advantages: Reusability, memory save, Inheritance.

    //ProtoType Chain:
    // 1. Prototype is way to find the Properties and methods in objects.
    // 2. If it's not find it will check it in parent scope.
    // 3. Event the parent object it's not found, it will keep searching until it will reach null.

    // How to Create Object?
    // 1. Object Literal ({})
    // 2. Object Constructor
    // 3. Object.create() 
    // 4. Class
    // 5. Function Constructor
//--------------------------------------------------------
//
// Shallow Copy & Deep Copy?
//     Shallow Copy:
//          1. Using Shallow copy we can copy the primitive values, and will share the object/ array values.
//          2. If anything change in primitive it will not effect in original value.
//          3. But if we change anything in object/Array it will effect both copy and original values.
// Ex:
const Person = {
    name: 'Prasad',
    address: {
        city: 'bangalore'
    }
}

const copy = {...Person};
copy.address.city = "Hydrabad";
copy.name = "Panyam";

console.log(Person); // Output: { name: 'Prasad', address: { city: 'Hydrabad' } }
console.log(copy); // Output: { name: 'Panyam', address: { city: 'Hydrabad' } }
//
//
// Deep Copy:
//      1. Deep copy means creating complete independent copy of object, if we change anything it will not effect in original.
//      2. It will include all Primitives oject and arrays.
// Ex:
const Person1 = {
    name: 'Prasad',
    address: {
        city: 'bangalore'
    }
}

const copy = JSON.parse(JSON.stringify(Person1));  // Older
// And
const copy = structuredClone(Person1); // Modern

copy.address.city = 'Hydrabad';
copy.name = "Panyam";

console.log(Person1);
console.log(copy);