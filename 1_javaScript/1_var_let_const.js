// Var examples
// Var is function scoped
// Hoisting is applicable if we print the variable before its declarations will get the undefined
// We can access this variable outside of the function and we can reassign the value
console.log(a);
var a = 10;
function test() {
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
function test() {
    console.log('Before assigned value', a); // Here we get error because we can' access before initialization.
    let a = 20;
    console.log('Reassigned a to:', a);
}
test();

//Const Examples
// It's blocked scoped
// Hoisting is applicable if we print the variable before its initialization will get the reference error
// We can't access outside declaration variable inside the function it's similar to let.
// We can't reassign the value
function test() {
    const a = 100;
    console.log('Reassigned a to:', a);
    a = 300; //Here will get the error because we can't reassign the Const..
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

// --------------------------------
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// What is Output of this?
// 1. The output of 1st loop is 3 3 3 will come. Why because Using Var the loop will share only one variable, by that time the loop will execute, so same value will print.
// 2. Coming to the let, javaScript will create new block for every iteration. So Each callback capture new value. So it will print 0 1 2.

//--> The difference is because var is function-scoped and shared across iterations, while let is block-scoped and creates a new block for each loop iteration.