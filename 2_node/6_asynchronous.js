// Asynchronous Patterns:
    // Asynchronous pattern will held on three different patterns. 
        // 1. Callbacks
                // Callback is the 1st async pattern in nodeJs. 
                // But using callback, we have multiple callbacks will happen like callback inside another callback like nested callbacks will happen.
                // So it is called callback hell.
                // Due to this it becomes hard to read, hard to maintain and hard to debugging the code.
        // 2. Promises
                // To Avoid this callback hell the Promises will introduced.
                // Makes code cleaner using .then and .catch().
                // But still long chain become hard to read the code.
        // 3. Async/Await
                // To avoid the above problames the async/await is came to handle the async operations like sync way.
                // It is easy to handle the code in try/catch block way.
        
        //-- OneLiner:
            // Callback is came first but cause the callback hell. Avoid this introduced Promises with chaining process, even the hard to read the code. So async/awiait is the process to handle the async operations like sync way, it is easy to handle the code use the try/catch block.
    //-------------------------------------------------------------

        // How does Node.js achieve scalability on multi-core systems?
            // NodeJs is single threaded, so CPU heavy operations will block the event loop.
            // To achieve this using Worker threads and Cluster module.
            // Worker Threads: Worker threads allow us to run multiple threads in a single process. Each thread has its own event loop and memory space. We can use worker threads to offload CPU heavy operations from the main thread.
            // Cluster Module: Cluster module allows us to create multiple processes using the cpu cors. So it can handle multiple requests simultaneously.
            // By using these two methods we can achieve scalability on multi-core systems.
        //-------------------------------------------------------------

        