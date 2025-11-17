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
    
