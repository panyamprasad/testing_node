// --- Mock Interview ---

// 1. Can you explain what is hoisting in JavaScript and how it works for var, let, and const?

// Ans:
// Hoisting means during the compilation phase, variables and functions are coming to the top of the scope it's called as the Hoisting.
// Var, let, const and functions are the hoisting but there is some difference is there.
// Var: IF we declare any variable as var if we try to print this before initialization it will print the undefined but it will not give any error.
// Let, const: But using the let and const we try to print this will get the error as reference error.
// But functions we can access before initialization.

// -------------------------

// 2. Can you explain what is a closure in JavaScript and give me a simple real-time use case? (not just definition — when would you actually use it?)

// Ans:
// Using closure we can access the variables from outer scope even the outer scope execution is completed. It means When outer scope execution is complete the inner scope store the variable in the memory for feature reference.
// for EXamples: Banking application.
// when a user opens an account, we store their balance in a variable inside a parent function.
// Later, even after that function finishes, the inner functions like deposit() and withdraw() can still access and modify that balance.
// This helps us encapsulate data and avoid exposing it directly.”

// -------------------------

// 3. What is the difference between call, apply, and bind in JavaScript?

// Ans:
// CAll , apply, bind this three are the methods in javaScript.
// In call we can use this pass the comma separated arguments it will execute immediately.
// Using apply we can pass the array values as a arguments, it will also execute immediately.
// Bind will not execute immediately and we didn't pass any arguments.

// ------------------------=

// 4. What is the difference between == and === in JavaScript? And which one should we prefer in real projects?

// Ans:
// Using the == we can check the value equality. Here type conversations will happen.
// Using the === we can verify the both value and type. There is no type conversion

// Compare to both === is more preferable.

// --------------------------

// 5. What is event loop in JavaScript and how does it work with synchronous and asynchronous code?

// Ans:
// Basically JavaScript is the single threaded.
// Event loop is one of the key feature in javaScript using this we can handle the asynchronous operations without blocking the code.
// Like file upload, fetch data from db this call will happen without blocking.
// In eventloop first synch call will happen after that it will verify the call stack. if it is free it will check the call back queue and execute the microservice like promises, async/ await.
// After microServices it will execute the call back like set timeout functions.
// Like this event loop will work.

// ---------------------------------

// 6. What is the difference between Promise and async/await in JavaScript? (And when would you use async/await over Promise directly?)

// Ans:
// This three are using to handle the asynchronous operations.
// In the promises we can use the .then() and .catch() methods to avoid the callback hell. But here multiple chains will happen due to the .then().
// To over come this problem async/await function will introduces. using this handle the asynchronous operations like synchronous.
// using Async we can declare the functions and it will return the promises.
// Using await we can phase the exectuion until the promises release the response like success or failure.. like this it will work.

