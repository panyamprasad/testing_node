// -- Error Handling --
    // 1. Error Handling means catching and managing the errors gracefully. It will keep the applicaiton in safer side.
    // 2. Using try/catch, promises and throw to handle the errors.

    // When something unexpected happens like data missing, api failure, input validation failure we can do the error handling.

// -----------------------------------------------------------------------------

// 1. What is Synchronous error handling?
    // 1. In synchronous we can handling the error usnig the try/catch. It will execute the code line by line.
    // Ex:
        function divide(a, b){
            if(b === 0){
                throw new Error("Can't devide a with 0");
            }
            return a/b;
        }
        try{
            const result = divide(1,0);
            console.log(result);
        }catch(error){
            console.error(error);
        }
//-------------------------------------------------------------------------------
// 2. How do you handle synchronous and Asynchronous errors? 
    // Synchronous: Error will happend immediately using try/catch block
    //Ex:
        try{
            JSON.parse("{bad Json}");
        }catch(error){
            console.log(error)
        }
    
    //Asynchronous: Error will happend later (Like api calss, db quires);
        // Using try/catch in between asyn/awit, or .catch() with promises.
        // Ex:
            const test = async() =>{
                try{
                    const fetchData = await fetch('url');
                    const data = JSON.stringify(fetchData);
                    console.log(data);
                }catch(error){
                    console.log(error)
                }
            }
        // In microServices error will happend based on the api failure or database failure.
        // We should handle this error and return proper error responses.
//-----------------------------------------------------------------------------

// 3. What happend if we doesn't handled a rejected promises?
    // We didn't handle the rejected pormises, it will throw the an "UnhandledPromiseRejection" warning will come.
            Promise.reject("Something failed"); // ❌ No catch block
    // Always handle like below:
            Promise.reject("Something went wrong").catch(error);
//-----------------------------------------------------------------------------

// 4. What is difference between throw and return in error handling?
    //Throw: Stop the exection immediately, and sends the error to catch. 
            throw new Error('');
    // Retrun: Just return the value or response.
            return 'Anydata';
//-----------------------------------------------------------------------------

// 5. How do you create custom error types?
    // In ES6 we can extend the Error class and we can crate the custom errors, useful for large apps.
    // Ex:
            class responseError extends Error{
                constructor(code, message){
                    this.code = code,
                    this.message = message,
                    this.name = 'Invalid Data type'
                }
            }
    // To easily identiy purpose we can add this customer error types like (DB failure, api failure et ).
//------------------------------------------------------------------------------

// 6. How do you handle Global errors in NodeJs?
    // Sometime unexpected errors escape form the try/catch.
    // We can catch them globally...
    // We can handle this using process.on('uncaughtExpection') for synchronous errors.
    // process.on('unhandledExpection') for rejected promises, so applicaiton can log the error without crashing.

    // For Example in producation if we want to handle the globla error we can use the.. 'unhandledExpection' and 'uncaugthExpection'. When this error came I will log it and close the server and restart it.
//------------------------------------------------------------------------------

// 7. How do you handle multiple async operations and catch all errors?
    // Use the
            Promise.allSettled() // we can handle the multiple async operations.
    // It will resolves even if some promises fail.
    // Ex:
            const p1 = Promise.resolve('Fetch p1 Data');
            const p2 = Promise.resolve('Fetch p2 Data');

            const result = Promise.allSettled([p1,p2]).then((result) => {
                console.log(result);
            })
    
    // It will useful for microservices.. because if one service is fail the another service will give the result.

//-----------------------------------------------------------------------------

// 8. How do you handle error in asyn/await loops?
    // using the try catch block we can handle the errors in the loop. For example
            const array = ['google.com', 'gmail.com', 'faceboom.com'];
            for(let url of array){
                try{
                    const data = await fetch(url);
                    console.log(data);
                }catch(error){
                    console.log(error)
                }
            }
        // If the above if any only url fails it will not stop the execution for others.

//----------------------------------------------------------------------------

// 9. What is difference between try/catch and .catch method in nodejs?
     // Try/Catch:
            // This is ES6 modules style and it will inside th asyn/await functionality.
    
    // .catch():
            // It is ES5 modules styls we can use this regular promises.

//-----------------------------------------------------------------------------

// 10. How to you log errors in production?
    //  We can use the Pino, Santry, Winston to print the log in production.
//-----------------------------------------------------------------------------

// 11. What are the best partices for error handling in JS?
    // 1. Use the custom errors for clarity (ValidationError, DBError)
    // 2. Always return the meaningful messages.
    // 3. Use the try...catch block in async/await
    // 4. Log the critical errors
    // 5. Use the global handlers for uncaught execeptions.
    // 6. Use the retry mechanisam for crital tasks... like payments, notification etc....

            

