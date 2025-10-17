// Basic NodeJs:
    // What is NodeJs?
        // Node Js is runtime environment, and it's build in v8 engine.
        // Nodejs is use the javascript for backend development for application developmment.
        // And it's sigle thread and even driven. In event loop it will handle multiple phases like(setTimeout, I/p, pull, callstack, microtasks...etc);
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
            console.log("Server is runningat http://localhost:3000");
        });
    //------------------------------------------------------------------------------
    // Explain phases of the Node.js event loop.
        // Node js event loop is a machanism that handles the asynchronous operations in Node js.
        // In Event loop there are multiple phases are there.
        // 1. Timeres: In this phase the callback functions of setTimeout, setInterval and setImmediate are executed.
        // 2. I/O callbacks: In this phase the input operations are executed such as reading a file or network.
        // 3. Poll: In this phase the event loop will check for new I/O events and execute the callback functions.
        // 4. Check: In this phase the setImmediate callback functions are executed.
        // 5. close: In this phase the close event callback functions are executed.
        // 6. Microtaks: In this phase the promise callback functions are executed.
        // 7. Next tick: In this phase the process.nextTick callback functions are executed.
        // Note: The event loop is a never ending loop. It will keep running until the process is terminated.
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

    