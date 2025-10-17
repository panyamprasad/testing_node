//---> Almost every they asked all the nodeJs and JavaScript and Middlewares and aws lambda/sns&sqs/apigateway everything they asked the questions

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
            for(i=0; i<arr.length; i++){
                if(arr[i] > large){
                    secondLargest = large;
                    large = arr[i];
                }else if(arr[i] > secondLargest && arr[i] !== large){
                    secondLargest = arr[i]
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
    // Actuvally it is a bug, it is existed since very first version of javaScript.
    // null has the primitive value it represents 'novalue' or 'empty'.
//     👉 If you really want to check whether a value is null, don’t use typeof.
//      Use:
        if (value === null) {
        console.log("Value is null");
        }

// 📝 Summary:
//          typeof null → "object" ✅
//          null is actually a primitive, not an object ❌

//------------------------------------------------------------------------

//---> How to fetch the data from an end point, routing and middel were need like thus function?

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

//  Step 3: Create middleware for logging
//      📄 middleware/logger.js
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
// 6. What is different between Process.nextTick() and setImeediate?
// 7. What is Closure?
// 8. What is memory leak?
// 9. What are the advantages of lambda?
// 10. What is Sns & SQS?
// 11. What is the EC2?
// 12. What is the microServices?
// 13. What is difference between var and let?
// 14. What is the middleware?
// 15. What is the cluster?
// 16. How you will improve the performance?




