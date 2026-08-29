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

//---> How does Node.js achieve scalability on multi-core systems?
//      1. NodeJs is single threaded, so CPU heavy operations will block the event loop.
//      2. To achieve this using Worker threads and Cluster module.
//              1. Cluster Module: 
//                      1. Cluster module allows us to create multiple processes using the cpu cors. 
//                      2. Due to this it can handle multiple requests simultaneously.
//              2. Worker Threads:     
//                      1. Using work thread we can handle heavy cpu intensive tasks like file processing, pdf generation, heavy calculations like that.
//                      2. Using single cpu process it can do this.
//                      2. Each thread has its own event loop and memory space.
 //              
        // By using these two methods we can achieve scalability on multi-core systems.
//-------------------------------------------------------------

//---> Promises Methods
//      1. .then()
//      2. .catch()
//      3. .finally()
//      4. Promises.all()
//      5. Promises.allSettled()
//      6. Promises.race()
//      7. Promises.any()

//---> Important methods:
// .then():
//      1. Using this for Success purpose.
//      2. One we got the success response form promises using then method we show the result.
// Ex:
const result = Promise.resolve('Data received');
result.then((data) => {
        console.log(data);
})


// .catch():
//      1. For failure senarios will use this. To handle the exceptions.
// Ex:
const result1 = Promise.reject('Fail');
result1.catch((err) => {
        console.log(err);
})


// Promise.All()
//      1. It will run multiple api calls at a time.
//      2. If anything fail it will stop the process and send error.
// Ex:
const api1 = Promise.resolve('User');
const api2 = Promise.resolve('Dashboard');
const api3 = Promise.resolve('Attendance');

Promise.all([api1, api2, api3])
        .then(result => {
                console.log(result);
        })
        .catch(err => {
                console.log(err)
        })
        