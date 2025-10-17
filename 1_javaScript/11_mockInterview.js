// --- Mock Interveiw ---

// 1. Can you explain what is hoisting in JavaScript and how it works for var, let, and const?

// Ans:
    // Hoisting means during the compilation phase, variables and fucntions are coming to the top of the scope it's called as the Hoisting.
    // Var, let, const and fucntions are the hoisting but there is some difference is there.
    // Var: IF we declare any variable as var if we try to print this before initilization it will print the undefined but it will not give any error.
    // Let, const: But using the let and const we try to print this will get the error as refarench error. 
    // But functions we can accsss before intilization.

//-------------------------

// 2. Can you explain what is a closure in JavaScript and give me a simple real-time use case? (not just definition — when would you actually use it?)

// Ans:
    // Using closure we can access the varibales from outer scope even the outer scope exectuion is completed. It means When outer scope execution is complete the inner scopre stroe the variable in the meemory for feature reference.
    // for EXamples: Banking application.
    // when a user opens an account, we store their balance in a variable inside a parent function.
    // Later, even after that function finishes, the inner functions like deposit() and withdraw() can still access and modify that balance.
    // This helps us encapsulate data and avoid exposing it directly.”

//-------------------------

// 3. What is the difference between call, apply, and bind in JavaScript?
// Ans:
    // CAll , apply, bind this three are the methods in javaScipt. 
    // In call we can use this pass the comma saparated aruguments it will execute immediatly.
    // Uisng apply we can pass the array values as a aruguments, it willl also execute immediatly.
    // Bind will not execute immediatly and we didn't pass any arguments. 

//------------------------=

// 4. What is the difference between == and === in JavaScript? And which one should we prefer in real projects?
// Ans:
    // Using the == we can check the value equality. Here type converastion will happend.
    // Using the === we can verify the both value and type. There is no type converstion

    // Compare to both === is more prefarable.

//--------------------------

// 5. What is event loop in JavaScript and how does it work with synchronous and asynchronous code?
// Ans:
    // Basically JavaScript is the single threaded.
    // Event loop is one of the key feature in javaScript using this we can handle the asynchronous operations without blocking the code.
    // Like file upload, featch data from db this call will happen witout blocking.
    // In eventloop first synch call will happen after that it will verify the call stack. if it is free it will check the call back queue and execute the microservics like promises, aysn/ await.
    // After microServices it will execute the call back like set timeut functions.
    // Like this event loop will work.

//---------------------------------

// 6. What is the difference between Promise and async/await in JavaScript? (And when would you use async/await over Promise directly?)
// Ans:
    // This three are using to handle the asynchronous operations. 
    // In the promises we can use the .then() and .catch() methods to avoid the callback hell. But here multiple chains will happend due to the .then().
    // To over come this problam async/awit function will introduces. usine this handle the asynchronous operations like synchonous.
    // using Async we can declare the funcitons and it will return the promises.
    // Uisng await we can phase the exectuion until the promises release the response like success or failur.. like this it will work.

