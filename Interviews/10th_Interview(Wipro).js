//---> Almost every topic asked all the nodeJs and JavaScript and Middlewares and aws lambda/sns&sqs/apigateway everything they asked the questions

//---> After this they started for coding part:
//--->  What is the output of the below code?
    let a = {
        a:1,
        b:2,
        c:{
            d:2
        }
    }; 
    let b = a 
    b.a = 3 
    b.c.d = 3; 
    console.log(b.a) 
    console.log(a.a) 
    console.log(a.c.d)

//---> Write the code fetch the second largest number form the array?
        const arr = [11,22,33,44,55, 14,23];
        function largestNumber(arr){
            let large = -Infinity;
            let secondLargest = -Infinity;
            for(let value of arr){
                if(value > large){
                    secondLargest = large;
                    large = value;
                }else if(value > secondLargest && value < large){
                    secondLargest = value
                }
            }
            return secondLargest;
        }

        console.log(largestNumber(arr));
    
//---> Gave one string like below and asked to write the logic to get the below output?
        Str = "memory"
        // o/p : {m: 2, e:1, o:1 r:1, y:1}
        
        // For String will use for loop
        function sort(str){
            const result = {};
            for(let val of str) {
                result[val] = (result[val] || 0) + 1;
            };
            return result;
        }
        console.log(sort(str));
//      ---------------------------------
        // For array will go with forEach()
        arr = [2,3,1,5,4,6,3,2,1,1,2,3]
        function sorting(arr){
            const result = {};
            arr.forEach(val => {
                result[val] = (result[val] || 0) +1;
            })
            return result;
        }
        console.log(sorting(arr));

//-----------------------------------------------------------------------

//---> What is the output of the below line?
        console.log(typeof null);
    // Output : object
    // Actually it is a bug, it is existed since very first version of javaScript.
    // null has the primitive value it represents 'null' or 'empty'.
//     👉 If you really want to check whether a value is null, don’t use typeof.
//      Use:
        if (value === null) {
        console.log("Value is null");
        }

// 📝 Summary:
//          typeof null → "object" ✅
//          null is actually a primitive, not an object ❌

//------------------------------------------------------------------------

//---> How to fetch the data from an end point, routing and middle were need like this function?

//  Step 1: Create a controller function to fetch data
//      📄 controller/userController.js
        import fetch from 'node-fetch';
        export const getUserDetails = async (req, res) => {
            try{
                const data = await fetch('https://jsonplaceholder.typicode.com/users');
                const userData = await data.json();
                console.log(userData);
                return userData;
            }catch(err){
                res.status(500).json({
                    error: 'Failed to fetch data' 
                })
            }
        }

//  Step 2: Create the route for /users
//      📄 routes/userRoutes.js
        import express from 'express';
        import {users} from './users'; // this will come from above file

        const route = express.Router();

        route.get('./users', users);

// 🪜 Step 3: Create middleware for logging

//     📄 middleware/logger.js
        export const logger = (req, res, next) => {
            console.log(`${req.method} ${req.url}`);
            next();  // Go to next middleware or route
        };

//  Step 4: Create the main server file
//      📄 server.js
        import express from 'express';
        import { logger } from './middleware/logger.js';
        import userRoutes from './routes/userRoutes.js';

        const app = express();
        const PORT = 3000;

        // 1. Use logger middleware
        app.use(logger);

        // 2. Use user routes
        app.use('/', userRoutes);
9
        // 3. Start server
        app.listen(PORT, () => {
        console.log(`✅ Server running at http://localhost:${PORT}`);
        });
    
// 🪜 Step 5: Enable ES6 Modules
//      In your package.json, add:
//        "type": "module"

// 🪜 Step 6: Run the project
//      node server.js

//     Open the browser and run this url: http://localhost:3000/users

        // Final Structure:

        // project/
        // ├─ server.js
        // ├─ routes/
        // │   └─ userRoutes.js
        // ├─ controller/
        // │   └─ userController.js
        // └─ middleware/
        //     └─ logger.js   

//-----------------------------------------------------------------------------
// 1. What is event loop?
// 2. What is the streams and types of streams?
// 3. What is promises and async/await? difference?
// 4. What is the microTasks & MacroTasks?
// 5. What is callback?
//      1. Callback is a function, it will run after another function execution is completes.
//      2. It will handle the asynchronous operations.
//      3. It's not a phase of a event loop, it's a function executed within one of the event loop's phases.

// 6. What is different between Process.nextTick() and setImmediate?
// 7. What is Closure?
//   -----------------------------------------------------------------------------

// 8. What is memory leak?
//      1. When a function or program allocates memory — for example, by creating objects, arrays, or other data — that memory is used while the program needs it.
//      2. But if the program no longer needs that data and still keeps a reference to it, the memory cannot be released by the garbage collector.
//      3. Over time, this unused memory keeps growing, reducing available memory, which can slow down the application or even cause it to crash.
//   -----------------------------------------------------------------------------

// 9. What are the advantages of lambda?
//      1. No need to handle the servers.
//      2. It is flexible, it means it will support multi language support.
//      3. Scalability, it will handle the multiple requests.
//      4. Cost effective: How much we use that much only should we pay. There is not cost for idle time.
//      5. High Availability: Lambda code will run across the multiple availability zones.
//      6. Easy Integration: We can integrate multiple services like S3, dynamoDB, SNS, SQS etc.

// 10. What is Sns & SQS?
//      SNS:
//          1. SNS means simple notification service.
//          2. Used to send notifications and messages to multiple subscribers at once.
//          3. It is publish/subscribe messaging service.
//      SQS:
//          1. SQS means Simple Queue Service.           
//          2. Used to store and publish the messages to the subscribers.
//          3. We can store the message or event we can distribute the message to subscribers when they required.

// 11. What is the EC2?
// 12. What is the microServices?
// 13. What is difference between var and let?
// 14. What is the middleware?
// 15. What is the cluster?
// 16. How you will improve the performance?
//      1. Modularization: Break the applications into small and reusable modules.
//      2. Caching: Cache the frequently use data into Redis or memory cache.
//      3. Optimize Database Queries: Use the Index, pagination and optimized joins.
//      4. Use Asynchronous and non blocking code: Use Promises, async/await functions to improve the performance.







