// Node.js Performance & Optimization
    // Node.js is fast, but poor coding partices. To improve this we have the main techniques to improve the performance.

    // 1. Always use the async methods to keep the event loop free and responsive.
    // 2. Always use the cluster. It will allows the multiple node processes and handle more requests.
    // 3. Use the catching. It store the frequently used data into the memory or Radis, so the response will spread up.
    // 4. Use the streams. Stream is loading the data, the data will come piece by piece instend of loading total data at once.
    // 5. Avoid th unnecessary middleware in express. Load only what we need.

// Common Interview questions and answers:
    // 1. How do you improve node.js performance?
    // Ans: Use async code, clustering, caching, streams.
    
    // How do cluster improve performance?
    // Ans: Cluster module create multiple node processes on all CPU corses, it's handle multiple requests at same time.

    // How does caching help on performance?
    // Ans: It stores frequently used data in memory or radix, so it's avoid the db/api calls and speed up the performance.

    
// One-liner Summary:
    // To optimize nodeJs performance, use async code to avoid blocking, use the cluster for handle multiple requests, use caching to reduce load, use the streams to load big data.

//----------------------------------------------------------------------------------------------------------------

// How would you design a serverless REST API using Node.js?
    // 1. Design the api's in serverless, I will use Api Gateway to handle http requests and routing.
    // 2. Before gateway call, we do the authentication, once it's done, will pass the request to gateway.
    // 3. In gateway level will do the authorization, and check the permissions, once it's done.
    // 4. It will route the proper lambda function, in lambda level will do the all field validation.
    // 5. And if it is long running task will use the SQS, instead of sending request directly to lambda.
    // 6. Then based on the business logic will get the data or process the file to s3 like that.
    // 7. And use the cloudWatch logs for logging and monitoring purpose.
    // 8. Like this will implement serverless API's.

//----------------------------------------------------------------------------------------------------------------

//---> How would you design a REST API using Node.js?
//      1. When designing a REST API in NodeJs, first we identify the resources and define the RESTful endpoints.
//      2. Using the GET/POST/PUT/DELETE methods.
//      3. And I follow the layered architecture like controllers, services and methods.
//      4. And i will add the input validation, authentication and centralized error handling.
//      5. And follow the logging, pagination and API documentation.
//      6. And also I will follow the proper status code and structure response format.
//      7. Like this I will develop and design the REST API'S.

