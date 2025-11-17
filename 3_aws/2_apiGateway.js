// --- API Gateway ---

// 1. What is api gateway?
    // 1. Api Gateway is the single entry point for the back end services. It helps to create, publish, secure and manage the api's.
    // 2. It will take the request form the client and verify the request and find the routes, forward the backend services.. Once received the response it will forward to client.
//------------------------------------------------------------------------------

// What are the usecase of API Gateway?
    // There are different usecases are there using the api Gateway.
    // Authentication & authorization:
        // Use the JWT or OAuth token for user verification purpose. Because it will verify the user and allows to access.
    // Rate Limit:
        // It will handle the traffic of user request. It means per mins 100 user request. So It will protect the backend services.
    // Caching:
        // It will store the backend response in the gateway level, because we can reuse this for limited period, it will avoid the repeated api calls.
    // Backend Integration: We can integrate multiple backend services like s3, dynamoDB or lambda like.
//------------------------------------------------------------------------------

// 2. Types of API's in gateway?
    // There are 3 api's are there
        // 1. Http
        // 2. Rest api
        // 3. Websocket api
    // After 2020, http api is more popular and using new projects. 
//-----------------------------------------------------------------------------

// 3. What is difference between REST API/ Http API / WebSocket api?
    // Rest API:
        // Rest api is fully featured like (authentication, caching, mapping templates)
        // But it is slower and more expensive.
        // Best for the complex api's with many rules and security.
    
    // HTTP API:
        // It is faster and cheaper compare to Rest api.
        // Support basic features like auth, jwt, cors like
        // Best for simple and new api's.
    
    // Websocket api:
        // Used for real time, 2 way communication like chat app will use this.
//-----------------------------------------------------------------------------------

// How does API Gateway integrate with Lambda?
    // Client Request:
            //A user (or client application) sends an HTTP request to the API Gateway endpoint (e.g., POST /otp/send).

    //Gateway Processing:
            // API Gateway receives the request.
            // It validates the request (method, headers, auth, etc.).
            // It can also apply rate limits, authentication, mapping templates, etc.

    //Invoke Lambda:
            // After validation, API Gateway triggers the Lambda function.
            // It passes the incoming request data as an event object to Lambda (this includes body, headers, path, etc.).

    //Lambda Execution:
            //Lambda executes your backend logic (e.g., send OTP, fetch data, etc.).
            // It returns a response in JSON format.

    //Return Response:
            // API Gateway receives the Lambda response.
            // It can transform the response if needed.
            // Finally, it sends the response back to the client.
//-----------------------------------------------------------------------------------

// How do you secure an API Gateway?
    // Api keys: We can use the API keys, it help identify the client who is calling your API. It is not a fully security mechanism.
    // IAM Role & Policies:
        // It will give the permission to access the other services only for particular user,  roles and services.
    // Cognito Authorizer:
        // Cognito Authorizer is used to identify the user like sign-in, sign-up and token verification.
    // Custom Authorizer: (Write own logic to verify the token and user)

    // Real:
        // If we have the login app will verify the Authorization.
        // In internally will use IAM authentication.
//-----------------------------------------------------------------------------------

// What is caching in API Gateway?
    // We can enable the caching in api gateway, it will story the response in cache for temporary use. To avoid the repeated api calls and improve the performance.
//-----------------------------------------------------------------------------------

// What are the stage url's?
    // Stage urls are nothing but its environment variables. When we deploy the code in different environments like dev/qa/stage/prod it will useful for identification purpose.
    // Stage url are switch the lambda function without redeploying the code, based on the environment it will change.
//-----------------------------------------------------------------------------------

// What is throttling in api gateway? Why it is important?
    // Throttling means rate limit, it means per sec how many requests will allow. It will handle the request traffic.
    // For example 100 RPS after cross this it will throw the error 429 too many requests.
//-----------------------------------------------------------------------------------

// How do you monitor the gateway issues?
    // CloudWatch
    // Metrics
    // X-ray
    // Gateway response -- custom errors.
//-----------------------------------------------------------------------------------

// How do you handle errors in API Gateway?
    // Use the gateway responses or custom messages.
    // Handle the Lambda errors using the try/catch blocks.
    // Configure the proper status codes like 400, 500 like
    // DLQ for retries / failures
//-----------------------------------------------------------------------------------

// Integration types in api gateway?
    // Lambda Proxy: Without change we can send the full request/response to lambda
    // Lambda non-proxy: Use the mapping templates to convert the request or responses
    // HTTP Integration : Using this we can connect with external endpoint.
    // AWS Server Integration:  Eg: Direct S3, dynamo or lambda like connection.
//------------------------------------------------------------------------------------

// --- Real time Questions and Examples ---

// 👉 Interview Question: “How do you handle large payloads in Amazon API Gateway?"
//     Ans:
        // 1st we have to understand why this is the problem?
            // 1. API Gateway allow the max payload size is 10 Mb for request and response.
            // 2. If we try to send more than this we get the error 413 Payload too large error.
        
        // So We have to handle this problem like below:
            // 1. Instead of sending the large size of payload or file from the api gateway we should use the s3.
            // 2. Using S3 we can generate the pre-defined url.
            // 3. So the client directly upload and download the files from the S3.
            // 4. API gateway request handle the metaData not direct file.
        
        // For Example:
            // 1. Client call the 'generateUploadUrl' endpoint.
            // 2. Lambda returns the pre-signed url.
            // 3. Client upload the file directly to s3.
            // 4. Lambda directly trigger the s3 and get the data.
        
        // The main issue of to follow this:
            // 1. No payload limit issue.
            // 2. Faster upload/download. And reduce the cost of lambda and api gateway.
        //-----------------------------------------------------------

        // For large files we have to use the binary data. It should be enable in Api Gateway.
            // 1. We have to enable and add the binary media type in api gateway like 'application/pdf' or 'image/jpg'
        //-----------------------------------------------------------

        // Interview Answer:
            // 1. Basically API Gateway allow the payload max 10mb, if it increase it will throw the error.
            // 2. To avoid this issue instead of sending the large payload from gateway we should use the s3.
            // 3. Using s3 we can genarate the pre-signed url and use this we can upload the large payloads and file to S3.
            // 4. We can get the binarydata from s3 and will do the further process.. Like this we can handle the large files.
        
        //------------------------------------------------------------

        // How will genarate the pre-signed url?
            // To genarate pre-signed url we can install the aws-sdk and use this we can genarate the url.

        // What is pre-signed url?
            // Pre-signed url is the temporary, and secure url, It will gives the user permission like upload and download the file to s3 bucket without exposing the aws credentials.
            // To handle the large files and images to upload the s3.

//-----------------------------------------------------------------------------------------------

//  Interview Question: “How do you design a multi-region API using Amazon API Gateway?”
    // Ans:
            // Why we need multi region api's?
                // 1. If we use single region it will delay for forever users.
                // 2. If we use single region if one region down the api also will go down.
                // 3. so to overcome this issues we can maintain the multi region process.
                // 4. And it will more useful for disaster recovery.

            // Why:
                // 1. It will improve performance.
                // 2. 99.99% always it will up and running.

            // How will design the multi-regions?
                // 1. First we deploy the API-Gateway and other aws services to multi regions like us-east-1 and west-2.
                // 2. And data is stored in dynamoDb Global tables and it will automatically sync between the regions.
                // 3. After this use the Route 53 and configure the  health check.
                // 4. If one region is goes down, the route 53 verify the health check and automatically it will transfer the traffic to the next regions.
                // 5. And if we need we can use the WAF for more security.. this is optional
                // 6. This way api's will work all over the world and multi regions.
                // 7. And it will work in disaster recovery.
//---------------------------------------------------------------------

// How do you handle 500 error? How to debug?

    // 1. 500 internal server error means something is failing in backend code not in client and browser.
    // 2. it's not related to s3, api-gateway. It related to lambda, backend services or application logic is failed.
    // 3. 1st we have to verify the cloud watch logs, and if not find we should reproduce the issues and find the logs and figure out the issue.
    // 4. Most of the time will figure out like undefined or timeout issues are coming.

//---------------------------------------------------------------------
            
