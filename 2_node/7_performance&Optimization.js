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

    // 1. I will use Api Gateway to handle http requests and routing.
    // 2. Each route will call serverless function (like aws lambda) written in nodeJs.
    // 3. The functions will connect to a serverless database (dynamoDb or firebase) to store the data.
    // 4. I will use JWT or Cognito token for security purpose.
    // 5. And I will add logging, error handling for monitoring to track the performance and issues.