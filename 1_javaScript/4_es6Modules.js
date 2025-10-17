// ------------- Destructuring -----------------
// Destructuring is way to unpack the values and assign the variables from arrays, objects.
// it makes the code more redable and easier to developer.
// There are two types of destructuring are there.
// 1. array destructuring
// 2. object destructuring
// Example:
// 1. Array Destructuring
const array = [1,2,3,4,5];
const [a, b, ...rest] = array;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3,4,5]
// 2. Object Destructuring
const obj = {
    name: "Prasad",
    age: "38",
    city: "Bangalore"
};
const {name, age} = obj;
console.log(name); // Prasad
console.log(age); // 38

// ------------------------------------------------------------------------------
// -------------- Modules -----------------
// Module is nothing it is a javaScript files. It containes the variables, fucntions, classes etc. We can export and import anywhere in the project.
// Modules are way to organize the code in to small parts.
// It will help to reuseable purpose.
// There are two types of modules are there.
//------------------------------------------------------------------------------

// -------------- Sperd Operator and Rest Operator ----------------
// Speard Operator and Rest Operator both are same but they are used in different ways.
// Sperad Operator is used to copy the values from two or more array and object variables.
// Rest Operator is used to collect the array and object variables.
// Example:
// 1. Speard Operator
const array1 = [1,2,3];
const array2 = [4,5,6];
const combinedArray = [ ...array1, ...array2 ];
console.log(combinedArray); // [1,2,3,4,5,6]
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }
// 2. Rest Operator
function sum (...args){
    return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1,2,3,4,5)); // 15
// ------------------------------------------------------------------------------
// -------------- Default Parameters -----------------
// Default Parameters is used to set the default value to the function parameters.
// It will help to avoid the undefined value.
// Example:
function greet(name = "Guest"){
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!
console.log(greet("Prasad")); // Hello, Prasad!
// ------------------------------------------------------------------------------
// -------------- Template Literals -----------------
// Template Literals is used to create the string in more redable way.
// It will help to avoid the concatenation.
// Example: 
const name1 = "Prasad";
const age1 = 38;
const city1 = "Bangalore";
const message = `My name is ${name1}, I am ${age1} years old and I live in ${city1}.`;
console.log(message); // My name is Prasad, I am 38 years old and I
// live in Bangalore.
// ------------------------------------------------------------------------------
// -------------- Optional Chaining -----------------
// Optional Chaining is used to access the nested object properties.
// It will help to avoid the error if the property is not exist.
// Example:
const user = {
    name: "Prasad",
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
};
console.log(user?.address?.city); // Bangalore
console.log(user?.contact?.phone); // undefined
// ------------------------------------------------------------------------------
// -------------- Nullish Coalescing -----------------
// Nullish Coalescing is used to set the default value if the variable is null or undefined.
// It will help to avoid the falsy value.
// Example:
const foo = null ?? "default value";
console.log(foo); // default value
const bar = 0 ?? 42;
console.log(bar); // 0
const baz = undefined ?? "Hello";
console.log(baz); // Hello
// ------------------------------------------------------------------------------
    