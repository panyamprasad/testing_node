// 1. What is NodeJs?
        // NodeJs is a runtime environment, that uses a V8 javaScript engine. It allows us to use javaScript for backend develpment.
        // NodeJs is single threaded and event-driven, and it is used event loop to handle the asynchronous operations. In even loop it will handle multiple phases like settimeout, setImmediate, promises and asyn/await.
        // NodeJs is open-source and free to use, with nodeJs we can build serverless architectures, microservices and RestFul API's.
        // It's simple and secure and eazy to learn, and it has the huge ecoSystem for ready to use many inbuild packages and modules.

// 2. What is difference between Node and JavaScript?
        // NodeJs is runtime environment that allows JavaScript to run at outside of the browser, using V8 engine. With Node we can use JavaScript to build backend api's, microservices and serverlesss architecture.
        // JavaScript is a programming/Scripting language, it was using to develop web api's and run in browers.
        // Note: JavaScript is language, NodeJs is runtime environment.

// 3. Can you explain the working of nodeJs?
        // NodeJs is runs on V8 engine, which converts javascript code to machine code, so it is so fast.
        // Node is single threaded and using the event-driven, this means it is single thread, but it will handle the multple requsts at the same time.
        // When a request comes on:
                // If it is quick task like calculation it will run immediately.
                // It is is slow take like reading the file or data from db it will not block it will push this request to loop until the main task complete meanwhile it will get the data and execute.
                // Like this node will work as sync/Async way.

// 4. Why nodeJs Single threaded?
        // Node is single threaded because it's designed to handle the multiple tasks effectivly isntend of blocking the tasks.
        // Instend of blocking the main thread it will use the event loop to handle the asynchronous operations.

// 5. Why nodeJs is so popular these days?
        // 1. Hyge ecoSystem
        // 2. Performance
        // 3. Data Streaming
        // 4. Single code base
        // 5. Productivity

// 6. What is Synchronous and Asynchronous programming?
        // Synchronous:
                // Synchronous programming means run task by task.
                // One task must complete before start the next one.
                // so It will blocking the execution.
        // Asynchronous:
                // Asynchronous is non-blocking and sigle threaded, it will handle multiple tasks same time.
                // It will run the tasks at the background using the event loop.
                // like Reading the files, getting the data from db, uploading the file like this processes will handle the event loop at the backend using the promises, aysn/await calls.
        
// 8. How to achieve nodeJs Asynchronous Programming?
        // Using the eventloop node will achieve the asynchronous programming, in event loop there differnt phases to handle these operations. So with out blocking the code, use event loop complete the asynchronous operations.
        // Need more explantion will do it.....


// 9. What is event loop in NodeJs, and how does it work?
        // Basically nodeJs is the single threaded, but using the event loop it will handle the asynchoronous tasks with out blocking.
        // In Event loop it will follow the multiple phases like callbacks, inputs, timer, promises and async/await, so it will execute the tasks without blocking.
        //Followup question: If you call an API It will take 5s, does nodeJs block?
                // NO, it will not block it will execute the other task simantanisoly this task will execute in callback and return the resonse.

// 10. What is callback hell and what are the methods to avoid it?
        // Callback is the one of the way to handle the asynchnoronous operations in nodeJs.
        // But when we use this there are multiple callbacks will create the nested callbacks, due to this callback hell will happen.
        // It becaomes hard to read the code, hard to maintain, and debug.
        // To overcome this node is introduced the promises chaing process after this Async/Await process.

// 11. What are promises in nodeJs?
        // Promises is one of the way to handle the asynchronous operations in cleaner and more redable way.
        // Different stages are there in promises
            // Pending -- Inprogress
            // Fulfilling -- Success
            // Rejected -- If we face any error
        // How it workds:
            // .then(): Handles the success
            // .catch(): handles the error.
            // Using the then() and catch methods it will execute the asynchronous operations, but due to then, there are chaining process will happen due to this we can hard to read the code.

// 12. How can you use Async/await in nodeJs? Provide
        // Using async/await we can handle the asynchronous operations in cleaner and readable way. 
        // Using async we can declare the function and inside the function we use the await.
        // Await hold the execution untile the promises is complete the exection or rejectd. once it's done it will give the response or error.

// 13. What is Package.json and where is it used?
        // Package.json is main file to handle the nodeJs project. It includes all the dependencies and scripts, project metadata it contatins name, version and description.

// 14. What are the top 5 build-in modules commonly used in nodeJs?
        // http:
        // fs:
        // path: Manage and resolves the file paths
        // os: Provide the information about the operation system.
        // express: Simplifies web application development with easy-to use features.

// 15. What is middleware in NodeJs, Why it is used?
        // Middleware is the function in expressJs framework. It will work between request and response.
        // it will modify the request and responses, execute the logic and decide whether should it continue or stop the execution.
        // There are different types of middlewares are there
                // 1. Build-in Middleware: These are default middleware in express. Ex: http, url, path, fs
                // 2. Error-handle Middleware: Using this we can handle the errors in application. (err, req, res, next)
                // 3. Custom-middlewar: User can create there own middlewares purpose of handle the authenticaion and logging. (res, req, next)
                // 4. Third-party: Use the external packages and install and use it. Ex: for CORS Support, body-parser.

// 16. What is the purpose of modules exports in Nodejs?
        // Modules are nothing but it's collection of file like js and ts and any other files. It includes variables, funcitons, classes and json file. If we want whereever we requeired it we can export and import this file in project. 
        // Main use of modules are reusabulity.
        // There are different type of modules are there.
                // Build-in modules: fs, http, path, utl
                // custom modules: User can create their own modules.
                // Third party modules: express, axios, lodesh. Use the npm we can install this modules.

// 17. What is different between NodeJs and ExpressJs?
        // NodeJs: NodeJS is the runtime environment using the v8 javaScript engine and run it in brower.
        // Expressjs: ExpressJs is framework in node, it will provide the struture, organization, and common utilites to devlop for web api's in clener and maintanable way.

// 18. What is event-driven programming?

// 19. What is the Role of the events in node? How can you handle events in node?

// 20. Difference between setTimeout() and setImmediat3e()?
        //Both setImmediate() and setTimeout() are used to handle asynchronous operations in Node.js, but there is a small difference between them.

        //setImmediate() executes the immediately after the current synchronous operations and I/O events are completed, in the event loop  check phase it will execute.

        //setTimeout() executes the after a specified time delay (in milliseconds), even if the delay is set to 0. It runs in the timers phase of the event loop.

// 21. Explain the nodeJs web applicaiton architecture?
        // When the client (Browser/mobile app) sends the http request.
        // The server or express reecive the request and start the process.
        // The middleware run the request and verify it before reach the route. (logging/authentication)
        // The route will identify the url or path, it will start execute the funciton.
        // Based on the business logic it will connect with backend services and getback the response.
        // Server giving back the response to client.

// 22. What are the types of streams available in NodeJs?
        // Stream is nothing but how to handle the file. Instend of loading the full data using the stream we can load chunk by chunk.
        // It will use for large file like video/audio or any network files.
        // type of streeams are :
                // Readable :
                // Writable :
                // Duplex :
                // Transform :

// 23. What is the purpose of the createServer() method fo the http module?
        // CreateServer method is used to create the basic web server it will takes the client request and provide the response.
                const http = require('http');
                const server = http.createServer((req, res) =>{
                        res.end('hello world');
                });
                server.listen(3000, () => {
                        console.log('Server running')
                });


// 24. What are some of the most commonly used Libraries in NodeJs?
        // ExpressJs: ExpressJs is a fiexible nodeJs web application framework. It will provide a huge features to develp the web and mobile applicaitons.
        // Mongoose: Mongoose also a nodeJs web application framework, it makes eazy to connect an applicaiton to database.
//-------------------------------------------------------------------

// 25. How to handle the asynchornous events in Node?
        // Using the callbacks, promises and async/await.
        // FollwUp Scenarios:
                // Suppose we have the 3 api's, one depends on another one, How will you call this without callbackhell?
                // Ans: I will use the async/await with try/catch block for handling the error.

// 26. How do you manage error handling uisng nodeJs?
        // Using try/catch we can handling error.
        // Scenarios: If a lambda function fails due to db connection error. How to ensure errors are logged and retries?
                // Ans: Use the Cloudwatch logs for monitoring, and configure the DLQ for SNs/SQS retries.
        
// 27. How do you secure NodeJs Application?
        // Using the JWT and OAuth2 authentication
        // Alwasys do the input validation
        // Use the hashing alogorithm for stroing the sencetive imformation.
        // Alawys use the https and secure headers.

// 28. 