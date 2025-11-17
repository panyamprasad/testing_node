// Basic NodeJs:
    // What is NodeJs?
        // Node Js is runtime environment, and it's build in v8 engine.
        // Nodejs is use the javascript for backend development for application development.
        // And it's single thread and even driven. In event loop it will handle multiple phases like(setTimeout, I/p, pull, callstack, microtasks...etc);
        // Node js used the NPM package it's contains the millions of in build packages.
        // Over all Node Js is fast and scalable.
        //------------------------------------------------------------------------------
    // Why we use NodeJs?
        // We use the NodeJs because it's fast and scalable.
        // It's use the javascript for backend development.
        // It's single threaded and event driven.
        // It's have the NPM packages.
        // It's easy to learn.
        // It's have the large community support.
        // It's cross platform.
        // It's open source.
        // It's used for real time application.
        // It's used for microservices architecture.
        // It's used for serverless architecture.
        // It's used for API development.
        // ------------------------------------------------------------------------------
    // How to install NodeJs?
        // We can install the NodeJs from the official website(https://nodejs.org/en/download/).
        // After installing we can check the version of node and npm using the below command.
        // node -v
        // npm -v
        // How to run the NodeJs file?
        // We can run the NodeJs file using the below command.
        // node filename.js
        // ------------------------------------------------------------------------------
    // Create a simple server using NodeJs.
        const http = require('http');
        const server = http.createServer((req, res) =>{
            res.end("Hello NodeJs World");
        })
        server.listen(3000, () => {
            console.log("Server is running http://localhost:3000");
        });
    //------------------------------------------------------------------------------
    // Explain phases of the Node.js event loop.
        // Node js event loop is a machanism that handles the asynchronous operations in Node js.
        // In Event loop there are multiple phases are there.
        // 1. Timers: In this phase the callback functions of setTimeout, setInterval are executed. Basically this functions are executed after the specified time.
        // 2. I/O callbacks: In this phase the I/O operations are executed. Like reading file, writing file, network operations etc.
        // 3. Poll: In this phase the event loop get the new I/O events and execute the callback functions.
        // 4. Check: In this phase it will execute the setImmediate functions.
        // 5. Close: In this phase the close event callback functions are executed.
        // 6. MicroTasks: In this phase promises, async/await callback functions are executed.
        // 7. Next Tick: In this phase the process.nextTick will executed.
        // Note: The event loop is a never ending loop. It will keep running until the process is terminated.
        
            // Basically the event loop execution flow will work like below:
               // 1. Synchronous code execution.
               // 2. microtasks execution.
               // 3. macro tasks execution. 
        
               const fs = require('fs');
                
               console.log("Start");  // 1
                
               process.nextTick(() => {
                 console.log("nextTick 1");  // 4
               });
                
               Promise.resolve().then(() => {
                 console.log("promise 1");  //5
               });
                
               (async () => {
                 console.log("inside async start"); // 2
                 await Promise.resolve();
                 console.log("async after await");  // 6
               })();
                
               setTimeout(() => {
                 console.log("setTimeout 1");  //7
               }, 0);
                
               setImmediate(() => {
                 console.log("setImmediate 1");  //8   
               });
                
               fs.readFile(__filename, () => {
                 console.log("fs.readFile callback"); //9
                 setTimeout(() => console.log("setTimeout (inside readFile)"), 0);  //11
                 setImmediate(() => console.log("setImmediate (inside readFile)"));  //10
               });
               console.log("End");  // 3
        // ------------------------------------------------------------------------------
    // Difference between process.nextTick() and setImmediate()?
        // Process.nextTick() is used to execute the callback function immediately after the current operation is completed.
        // setImmediate() phase will execute in the event loop check phase.
        // Compare to the booth process.nextTick is higher priority.
        // So process.nextTick will always runs first if both are present in the same phase.
        // Example:
        console.log('Start');
        setImmediate(() =>{
            console.log('setImmediate');
        });
        process.nextTick(() => {
            console.log("Process.Nexttick")
        });
        console.log('End');
        //------------------------------------------------------------------------------

    