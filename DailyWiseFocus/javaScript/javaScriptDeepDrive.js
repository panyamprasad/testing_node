// --- CallStack ---
// Call stack is a stack data structure, It keep track the function execution in javaScript.
// Whenever a function is invoked, it will be add into the stack, once execuiton is completed it will removed form this stack.
// Stack will execute line by line, and it will follw the synchronous behaviour. Only one function will execute one  a time. after finished this seccond funciton will execute. it will blocked the function execution.
// Ex:
    function first(){
        console.log("This is first function");
    }
    function second(name){
        console.log("This is second funciton:" + name);
        first();
    }
    second("Panyam");
    //Output:
        // Frist the stack will verify the code and store it inmemory.
        // Then it will execute the second function first, because it is the first function call in the code.
        // After the second function execution it will execute the first function, because inside the second function it is called.
        // output: This is second funciton: Panyam, This is first function

//-------------------------------------------------------------------------------------------------

// --- Event Loop ---
// Event loop is the process of handling the asynchronous operations.
// It will control the traffic, and execute the asynchronous operations without blocking. there are different types of phases in event loop. 
// Timmers, I/O callbacks, pull, check, close and micro tasks.
// Timmers: It will execute the setTimeout and setInterval.
// I/O callbacks: It will execute the input operations like reading the files, network operations.
// Pull: It will execute the promise and other micro tasks like async/await. Once the main loop is completed it will execute and this will done, next call back queue will execute.
// Check: Setimmediate will execute in this phase.
// Close: It will execute the close events like socket etc.
// Ex:
    // console.log('Start');
    // setTimeout(()=> {
    //     console.log('SetTimeout');
    // })
    // setInterval(() => {
    //     console.log('SetInterval');
    // })
    // Promise.resolve.then(() => {
    //     console.log('Promise');
    // })
    // setImmediate(() => {
    //     console.log('SetImmediate');
    // })
    // console.log('End');
    //output: Start, End, Promise, SetTimeout, SetImmediate, setInterval
    // Explanation:
        // First the main stack will execute the synchronous code first, it will print Start and End.
        // Next it will check the micro tasks queue, it will find the promise and execute it, it will print Promise.
        // Next it will check the call back queue, it will find the setTimeout and execute it, it will print SetTimeout.
        // Next it will check the check phase, it will find the setImmediate and execute it, it will print SetImmediate.
        // Next it will check the timmers phase, it will find the setInterval and execute it, it will print SetInterval. It will keep executing this until we clear the interval.
    
    // What is the difference between setTimeout and setInterval?
        // SetTimeout: It will execute the call back function once after the specified time.
        // SetInterval: It will execute the call back function repeatedly after the specified time interval, until it is cleared.
//-------------------------------------------------------------------------------------------------
// --- Async Await ---
// Async awsit is used to handle the asynchronous operations without blocking the thread. It is build to overcome the chain of promises.
// Using async we can make the function and it will retrun promise.
// Using await we can wait for the result from promise, it will pause the function untile the result came from promise.
// Ex:
    async function featchData (){
        try{
            const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            console.log('Response received');
            const json = await data.json();
            console.log(json.id);
            
        }catch(error){
            console.log(error)
        }
    }
    console.log("Data featched in async await");
    featchData();
    console.log("Data Received");
// Output: Data featched in async await, Data Received, Response received, 1
    async function foo() {
        console.log("foo start");
        await bar();
        console.log("foo end");
    }
    async function bar() {
        console.log("bar");
    }
    console.log("script start");
    foo();
    console.log("script end");
// Output: script start, foo start, bar, script end, foo end
// Explanation:
    // First the main stack will execute the synchronous code first, it will print script start.
    // Next it will call the foo function, it will print foo start.
    // Next it will call the bar function, it will print bar.
    // Next it will print script end.
    // Next it will check the micro tasks queue, it will find the await in foo function and execute the remaining code in foo function, it will print foo end.
//-------------------------------------------------------------------------------------------------

// examples of partice:
    console.log("1");
    setTimeout(() => console.log("2"), 0);
    Promise.resolve().then(() => console.log("3"));
    console.log("4");
    // Output: 1, 4, 3, 2
//-------------------------------
    async function foo() {
    console.log("A");
    await null;
    console.log("B");
    }

    console.log("C");
    foo();
    console.log("D");
    // Output: C, A, D, B
//-------------------------------
    console.log("start");
    setTimeout(() => console.log("timeout"), 0);
    Promise.resolve().then(() => {
    console.log("promise");
    });
    console.log("end");
    // Output: start, end, promise, timeout
//-------------------------------
    async function foo() {
        console.log("foo start");
        await bar();
        console.log("foo end");
    }
    async function bar() {
        console.log("bar");
    }

    console.log("script start");
    foo();
    console.log("script end");
    // Output: script start, foo start, bar, script end, foo end
//-------------------------------
    // ❌ Example 5 (tricky one!)
    setTimeout(() => console.log("X"), 0);

    Promise.resolve().then(() => {
    console.log("Y");
    setTimeout(() => console.log("Z"), 0);
    });

    console.log("W");
    // Output: W, Y, X, Z
// Explanation:
    // First the main stack will execute the synchronous code first, it will print W.
    // Next it will check the micro tasks queue, it will find the promise and execute it, it will print Y.
    // Inside the promise it will find the setTimeout and add it to call back queue.
    // Next it will check the call back queue, it will find the setTimeout and execute it, it will print X.
    // Next it will check the call back queue, it will find the setTimeout from promise and execute it, it will print Z.
//----------------------------
// Example 6 (super important)
    Promise.resolve().then(() => {
    console.log("1");
    Promise.resolve().then(() => {
        console.log("2");
    });
    });

    Promise.resolve().then(() => {
    console.log("3");
    });

    console.log("4");
    // Output: 4, 1, 3, 2
// ---------------------------
    async function task(msg) {
        console.log(msg);
        return msg + " done";
    }

    async function main() {
        console.log("main start");
        const results = await Promise.all([
            task("t1"),
            task("t2")
    ]);
    console.log("results:", results);
    }

    main();
    console.log("main end");
    // Output: main start, t1, t2, main end, results: [ 't1 done', 't2 done' ]
// Explanation:
    // First the main stack will execute the synchronous code first, it will print main start.
    // Next it will call the task function with t1, it will print t1.
    // Next it will call the task function with t2, it will print t2.
    // Next it will print main end.
    // Next it will check the micro tasks queue, it will find the await in main function and execute the remaining code in main function, it will print results: [ 't1 done', 't2 done' ].
//---------------------------
// Mixed nested example
    Promise.resolve().then(() => {
        console.log("1");
        setTimeout(() => console.log("2"), 0);
    });

    setTimeout(() => {
        console.log("3");
        Promise.resolve().then(() => console.log("4"));
    }, 0);

    console.log("5");
    // Output: 5, 1, 3, 4, 2
// -------------------------
// Nested async await with promise
    async function f1() {
        console.log("f1 start");
        await f2();
        console.log("f1 end");
    }

    async function f2() {
        console.log("f2 start");
        await f3();
        console.log("f2 end");
    }

    async function f3() {
        console.log("f3");
    }

    console.log("script start");
    f1();
    console.log("script end");
    // Output: script start, f1 start, f2 start, f3, script end, f2 end, f1 end
//------------------------------------------------------------------------------------------------------------------

// -- Closures --
// A Closure allows a function to access the variable fromit outer scope, even after the outer scope exectution is completed.
// Ex: 
    function counter(){
        let count = 0;
        return function(){
            count++;
            return count;
        }
    }
    const counter1 = counter();
    console.log(counter1()); // 1
    console.log(counter1()); // 2
    console.log(counter1()); // 3

// When will use closures?
    // Data privacy: We can hide the variable from outside the function scope.
    // Function factory: We can create the function with multiple methods and inner functions.
    // Maintain state: We can keep the variable alive between the method calls.
    // Callbacks and event handlers: We can use closures in callbacks and event handlers to access the outer function scope.

// Remove the duplicates from array using closures:
    function removeDuplicates(arr){
        const uniqueElements = new Set();
        return function(){
            for(const element of arr){
                uniqueElements.add(element);
            }
            return uniqueElements;
        }
    }
    const array = [1,2,3,4,4,5,5,6,7,8,8,9];
    const getUniequeElements = removeDuplicates(array);
    console.log(getUniequeElements()); // Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

// --------------------------------------------------------------------------------------------------
// --- Currying ---
// Currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.
// Ex:
    function add(a){
        return function(b){
            return function(c){
                return a + b + c;
            };
        };
    }
    console.log(add(1)(2)(3)); // 6

// When will use currying?
    // Function reusability: We can create the function with multiple arguments and reuse them with different arguments.
    // Partial application: We can create the function with some arguments and reuse them with remaining arguments.
    // Higher order functions: We can create the higher order functions with currying.
    function multiply(a){
        return function(b){
            return function(c){
                return a * b * c;
            };
        };
    }
    const multiplyBy2 = multiply(2);
    const multiplyBy2And3 = multiplyBy2(3);
    console.log(multiplyBy2And3(4));
    console.log(multiply(2)(3)(4)); // 24

// --------------------------------------------------------------------------------------------------

// --- Hoisting ---
// Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their scope (either global or local) during the compile phase, before the code is executed.
// Both variables and functions are hoisted, but they behave differently.
// 1. var:
    // When you declare a variable with var, its declaration is hoisted, but not its initialization.
    // So, if you try to access it before initialization, you get undefined, not an error.
    // Ex:
    console.log(a); // undefined
    var a = 10;
    console.log(a); // 10 
    // Explanation: In the above example, the variable 'a' is declared using 'var'. During the compile phase, the declaration of 'a' is hoisted to the top of its scope, but its initialization (assignment of value) remains in place. Therefore, when we try to access 'a' before its initialization, it returns 'undefined'.

// 2. let and const:
    // Their declarations are also hoisted, but they are placed in a Temporal Dead Zone (TDZ) — meaning you cannot access them before they are initialized.
    // Accessing them before initialization throws a ReferenceError.
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 20;
    console.log(b); // 20
    // Explanation: In the above example, the variable 'b' is declared using 'let'. During the compile phase, the declaration of 'b' is hoisted to the top of its scope, but it is not initialized. Therefore, when we try to access 'b' before its initialization, it throws a ReferenceError.

// 3. Functions:
    // Function declarations are fully hoisted, meaning you can call them before their definition in the code.
    // Function expressions (including those assigned to variables declared with var, let, or const) are not hoisted in the same way. If you try to call them before their definition, you'll get an error.
    // Ex:
    console.log(d()); // "Hello, World!"
    function d() {
        return "Hello, World!";
    }
    console.log(e()); // TypeError: e is not a function
    var e = function() {
        return "Hello, World!";
    };
    // Explanation: In the above examples, the function 'd' is declared using a function declaration, while 'e' declared using function expressions. During the compile phase, the declaration of 'd' is hoisted to the top of its scope, so we can call it before its definition. However, 'e' not hoisted in the same way, so trying to call them before their definitions results in a TypeError.

// --------------------------------------------------------------------------------------------------
 // --- this keyword ---
 // This is the special keyword in Javascript, It's refer to the object that is currently calling the function.
 // The value of the this depends on where and how funciton is calling.
 // This is using in different scinorios.
 // GlobalScope, here it will refer to the global object.
 // Inside the object method: Here it will refer the object and access the values.
 // In normal functions this is dynamic, it means it depends on how the function is called.
 // In Arrow function this is lexically bound, it means it depends on surrounding code where the function is defined.
 // Ex:
    const obj = {
        value: 100,
        normalFunc: function() {
            console.log(this.value);
        },
        arrowFunc: () => {
            console.log(this.value);
        },
    };
    obj.normalFunc(); // 100
    obj.arrowFunc(); // undefined

 // Example 2:
    // Arrow function doesn't have the own this.
    // It will take the this from the parent scope.
    const obj1 = {
        value : 100,
        function (){
            const arrow= () => {
                console.llog('Arrow Function : ', this.value);
            }
            arrow();
        },
    };
    obj1.function(); // Arrow Function : 100
//-------------------------------------------------------------------------------------------------