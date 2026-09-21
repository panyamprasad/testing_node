// Node.js

// What is Node.js? Why do we use it?

// How does the Node.js event loop work?
//
// What is the difference between synchronous and asynchronous code?
//      
// What are callbacks, Promises and async/await?
//
// What is the difference between process.nextTick(), Promise microtasks and setImmediate()?

// How do you handle errors in Node.js?

// What is middleware in Node.js/Express?

// What is the difference between authentication and authorization?

// How do you secure a Node.js REST API?

// How do you handle large file uploads in Node.js?

// How do you improve Node.js application performance?

// How do you handle memory leaks?
//      1. Memory Leaks will happen when the unused objects or references.
//      2. Due to this Grabage collector unable to freezing memory.
//      3. The common senarios in NodeJs, Unnecessary Global Variables, Timers, infinity Loops and withOut limit and timer
//          caching the memory leaks will happens.
//      4. To handle the memory leaks we should monitor the application memory usage. It will continuously Increasing memory
//         I will check with lambda or function causing this issue.
//
//      Prod:
//          1. In Production will check the cloudwatch logs and metrics, then will identify the when memory leak will happen.
//          2. Then will use the Heap snapshots and Profiling tools for compare memory usage.
//          3. This helps which function and object are consuming the memory.
//          4. After identification will remove the unused object, and will use the some limits and ttl for caching.
//
//      - In Nodejs have the grabage collector, it will remove the unused objects and reference automatically, but
//        if somewhere we referring those it will not remove those.

// What is clustering in Node.js?

// How do you handle third-party REST API failures?
//      1. When we integrate with third party REST api, I would prefer using Timeout, retry, and circuit breaker mechanisms.
//      2. First we should configure the proper timeout mechanisms, instead of waiting long time.
//      3. For temporary failures such as network issus, 500 errors we should we the retries, with limited retries like 2 or 3.
//      4. And External api or server continuously fail, we have to use the circuit breaker pattern. 
//          Using this after certain fails the circuit will open and it will temporarily stop sending the request.
//      5. After some time again we try to call the api, if it is working properly, we close the circuit and start executing normal.
//
// How would you design a scalable Node.js REST API?
//      1. To design the restApi, I would focus on both scalability, bestPractices and security.
//      2. Coming to the BestPractices and security:
//              - Always we use the HTTPS url, because it will encrypt the data before transformation.
//              - And will use proper HTTP methods.
//              - Use the proper statusCodes. and maintain proper format of Input and output
//      3. For Security will use the authentication & authorization.
//      4. For Scaling:
//              - Use the async/await functions.
//              - Maintain the layers instead of writing same code.
//              - Use the caching
//              - Optimize the database queries: It means we should use the Index, Pagination.
//              - Use the Cluster it will create multiple cpu processes using multiple CPU cors.
//      5. Finally, I would implement proper logging, monitoring, error handling and health check.
//      6. Like this we implement the Scalable Rest API'S.
//

// CommonJS vs ES Modules.

// What are streams in Node.js?

// What is EventEmitter?

// How do you manage environment variables/configuration?

// How would you structure a large Node.js project?
//      1. For Large scale applications we should use the Moduler or feature-based structure format.
//      2. Instead of maintain the all features in one place, we can maintain separate module for every feature.
//      3. Every module contains Controllers, Services, Repository like that.
//      4. For Common code we can maintain the utility functions.
//      4. Controller contains Routing, Services-Business Logic, Repository- Database or external api, utilities-common code. 