// Scope:
// Scope defines the accessibility of variables, functions and objects in the code.
// there are three types of scoops are there.
// 1. global scope : global scope is we can access the variable from any where from the code.
// 2. function Scope : function scope is we can access the variable inside the function only.
// 3. Block Scope : blocked scope is we can access the variable inside the block. It means if we declear a varibale as let or const we can access inside the block only.

// Example:
var a = 100; // global scopevar a = 100;
function test(){
    if(a == 100){
        let b = 200;
        console.log(a+b);
    }
} test();

// Example 2:
function test2(){
    let a = 100
    var b = 200;
    console.log(a-b)
} test2();

// Lexical Scope:
// Lexical scope means inner function can access the variable from the outer function but outer function can't access the variable from the inner function.
// Example:
function outer(){
    let a = 500;
    function inner(){
        let b = 100;
        console.log(a + b);
    }
    inner();
}outer();

// Closers:
// Closer means if a function is accessing the variable from the outer function even after completing the outer function execution,it's called closer.
// Example:
function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const out = outer();
out();
out();
out();

//------------------------------------------------------------------------------

// Call -- Apply -- Bind:
// these are the methods in javascript.
// Call and apply methods are used to invoke the function and bind is used to create the new function.
// Difference between call and apply.
// Using call methods we can pass the argument with comma separated.
// Using apply method we can pass the arguments with array format.
// Example:
const obj1 = { name: 'John', age: 25 };
const obj2 = { name: 'Jane', age: 30 }; 
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}
greet.call(obj1, 'Hello', '!'); // Output: Hello, John!
greet.apply(obj2, ['Hi', '!!']); // Output: Hi, Jane!!
// Example for bind:
const obj3 = { name: 'Alice', age: 28 };
const boundGreet = greet.bind(obj3, 'Hey', '!!!');
boundGreet(); // Output: Hey, Alice!!!
// ------------------------------------------------------------------------------

